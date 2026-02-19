/**
 * Custom SearchPage that respects product and version filters from URL parameters
 */

import React, {useCallback, useEffect, useMemo, useReducer, useRef, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import algoliaSearchHelper from 'algoliasearch-helper';
import {liteClient} from 'algoliasearch/lite';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {HtmlClassNameProvider, PageMetadata, usePluralForm} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlgoliaThemeConfig, useSearchResultUrlProcessor} from '@docusaurus/theme-search-algolia/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {PRODUCTS} from '../../config/products';
import styles from './styles.module.css';

// Generate product options from PRODUCTS config
const PRODUCT_OPTIONS = [
    {label: 'All products', value: '__all__'},
    ...PRODUCTS.map(product => ({
        label: product.name,
        value: product.name,
    }))
].sort((a, b) => {
    if (a.value === '__all__') return -1;
    if (b.value === '__all__') return 1;
    return a.label.localeCompare(b.label);
});

// Helper to get versions for selected products
function getVersionsForProducts(selectedProducts) {
    if (!selectedProducts || selectedProducts.length === 0) {
        return [];
    }

    const versionsSet = new Set();
    selectedProducts.forEach(productName => {
        const product = PRODUCTS.find(p => p.name === productName);
        if (product && product.versions) {
            product.versions.forEach(v => {
                versionsSet.add(v.label);
            });
        }
    });

    return Array.from(versionsSet).sort();
}

// Simple multi-select component
function MultiSelect({label, options, selectedValues, onChange}) {
    return (
        <div style={{marginBottom: '16px'}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                {label}
            </label>
            <select
                multiple
                value={selectedValues}
                onChange={(e) => {
                    const values = Array.from(e.target.selectedOptions, option => option.value);
                    onChange(values);
                }}
                style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                }}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <small style={{display: 'block', marginTop: '4px', color: 'var(--ifm-color-emphasis-600)'}}>
                Hold Ctrl/Cmd to select multiple
            </small>
        </div>
    );
}

function useDocumentsFoundPlural() {
    const {selectMessage} = usePluralForm();
    return (count) =>
        selectMessage(
            count,
            translate(
                {
                    id: 'theme.SearchPage.documentsFound.plurals',
                    message: 'One document found|{count} documents found',
                },
                {count},
            ),
        );
}

function SearchPageContent() {
    const {i18n: {currentLocale}} = useDocusaurusContext();
    const {algolia: {appId, apiKey, indexName}} = useAlgoliaThemeConfig();
    const processSearchResultUrl = useSearchResultUrlProcessor();
    const documentsFoundPlural = useDocumentsFoundPlural();
    const location = useLocation();
    const history = useHistory();

    // Parse URL parameters
    const urlParams = new URLSearchParams(location.search);
    const queryFromUrl = urlParams.get('q') || '';
    const productsFromUrl = urlParams.get('products')?.split(',').filter(Boolean) || [];
    const versionsFromUrl = urlParams.get('versions')?.split(',').filter(Boolean) || [];

    const [searchQuery, setSearchQuery] = useState(queryFromUrl);
    const [selectedProducts, setSelectedProducts] = useState(productsFromUrl);
    const [selectedVersions, setSelectedVersions] = useState(versionsFromUrl);

    const availableVersions = useMemo(() => {
        const versions = getVersionsForProducts(selectedProducts);
        return [
            {label: 'All versions', value: '__all__'},
            ...versions.map(v => ({label: v, value: v}))
        ];
    }, [selectedProducts]);

    const initialSearchResultState = {
        items: [],
        query: null,
        totalResults: null,
        totalPages: null,
        lastPage: null,
        hasMore: null,
        loading: null,
    };

    const [searchResultState, searchResultStateDispatcher] = useReducer(
        (prevState, data) => {
            switch (data.type) {
                case 'reset':
                    return initialSearchResultState;
                case 'loading':
                    return {...prevState, loading: true};
                case 'update':
                    if (searchQuery !== data.value.query) {
                        return prevState;
                    }
                    return {
                        ...data.value,
                        items:
                            data.value.lastPage === 0
                                ? data.value.items
                                : prevState.items.concat(data.value.items),
                    };
                case 'advance':
                    const hasMore = prevState.totalPages > prevState.lastPage + 1;
                    return {
                        ...prevState,
                        lastPage: hasMore ? prevState.lastPage + 1 : prevState.lastPage,
                        hasMore,
                    };
                default:
                    return prevState;
            }
        },
        initialSearchResultState,
    );

    const algoliaClient = useMemo(() => liteClient(appId, apiKey), [appId, apiKey]);
    const algoliaHelper = useMemo(
        () =>
            algoliaSearchHelper(algoliaClient, indexName, {
                hitsPerPage: 15,
                advancedSyntax: true,
                disjunctiveFacets: ['language'], // Only language facet exists in index
            }),
        [algoliaClient, indexName],
    );

    algoliaHelper.on('result', ({results: {query, hits, page, nbHits, nbPages, facets}}) => {
        if (query === '' || !Array.isArray(hits)) {
            searchResultStateDispatcher({type: 'reset'});
            return;
        }


        const sanitizeValue = (value) =>
            value.replace(/algolia-docsearch-suggestion--highlight/g, 'search-result-match');

        // Extract product and version from URL and filter client-side
        const allItems = hits.map(({url, _highlightResult: {hierarchy}, _snippetResult: snippet = {}, product_name}) => {
            const titles = Object.keys(hierarchy).map((key) => sanitizeValue(hierarchy[key].value));
            const breadcrumbs = [...titles];
            const title = titles.pop();

            // Extract product and version from URL path like /docs/auditor/10.8/...
            let product = product_name;
            let version = null;
            let productId = null;

            // Try to match: /docs/{product}/{version}/ or /docs/kb/{product}/
            const urlMatch = url.match(/\/docs\/(?:kb\/)?([^/]+)(?:\/([^/]+))?/);
            if (urlMatch) {
                productId = urlMatch[1];
                const versionPart = urlMatch[2];

                // Map product ID to display name
                const productConfig = PRODUCTS.find(p => p.id === productId);
                if (productConfig) {
                    product = productConfig.name;

                    // Convert version from URL format (10_8) to display format (10.8)
                    if (versionPart && versionPart !== 'kb') {
                        version = versionPart.replace(/_/g, '.');
                    }
                }
            }

            // Fallback: try to extract product from breadcrumbs
            if (!product && breadcrumbs.length > 0) {
                product = breadcrumbs[0].replace(/<[^>]*>/g, '');
            }
            if (!product) {
                product = 'Unknown';
            }

            return {
                title,
                url: processSearchResultUrl(url),
                summary: snippet.content ? `${sanitizeValue(snippet.content.value)}...` : '',
                breadcrumbs,
                product,
                version,
                productId,
                originalUrl: url,
            };
        });

        // Algolia handles filtering via facetFilters, so no client-side filtering needed
        const items = allItems;

        searchResultStateDispatcher({
            type: 'update',
            value: {
                items,
                query,
                totalResults: nbHits,
                totalPages: nbPages,
                lastPage: page,
                hasMore: nbPages > page + 1,
                loading: false,
            },
        });
    });

    const [loaderRef, setLoaderRef] = useState(null);
    const prevY = useRef(0);
    const observer = useRef(
        ExecutionEnvironment.canUseIntersectionObserver &&
            new IntersectionObserver(
                (entries) => {
                    const {isIntersecting, boundingClientRect: {y: currentY}} = entries[0];
                    if (isIntersecting && prevY.current > currentY) {
                        searchResultStateDispatcher({type: 'advance'});
                    }
                    prevY.current = currentY;
                },
                {threshold: 1},
            ),
    );

    const makeSearch = useCallback(
        (page = 0) => {
            // Build facetFilters with product filters (matching SearchBar logic)
            const facetFilters = [`language:${currentLocale}`];

            // Add product filters (OR logic - any of the selected products)
            const hasProductFilter = selectedProducts.length > 0 && !selectedProducts.includes('__all__');
            if (hasProductFilter) {
                const productFilters = selectedProducts.map(p => `product_name:${p}`);
                facetFilters.push(productFilters); // Array within array = OR logic
            }

            // TODO: Version filtering disabled - 'version' facet not yet configured in Algolia
            // The version dropdown UI is visible (preserving coworker's work) but doesn't filter yet.
            //
            // To enable version filtering, have your coworker (web team with Algolia access):
            // 1. Add 'version' field to document frontmatter in all docs
            // 2. Configure attributesForFaceting: ['version'] in Algolia dashboard
            // 3. Re-index the documentation
            // 4. Then uncomment the code below:
            //
            // const hasVersionFilter = selectedVersions.length > 0 && !selectedVersions.includes('__all__');
            // if (hasVersionFilter) {
            //     const versionFilters = selectedVersions.map(v => `version:${v}`);
            //     facetFilters.push(versionFilters);
            // }

            algoliaHelper
                .setQuery(searchQuery)
                .setQueryParameter('facetFilters', facetFilters)
                .setPage(page)
                .search();
        },
        [searchQuery, algoliaHelper, currentLocale, selectedProducts],
    );

    // Update URL when filters change
    const prevFiltersRef = useRef({searchQuery: '', selectedProducts: [], selectedVersions: []});

    useEffect(() => {
        // Only update URL if filters actually changed
        const prev = prevFiltersRef.current;
        if (
            prev.searchQuery !== searchQuery ||
            JSON.stringify(prev.selectedProducts) !== JSON.stringify(selectedProducts) ||
            JSON.stringify(prev.selectedVersions) !== JSON.stringify(selectedVersions)
        ) {
            const params = new URLSearchParams();
            if (searchQuery) params.set('q', searchQuery);
            if (selectedProducts.length > 0) params.set('products', selectedProducts.join(','));
            if (selectedVersions.length > 0) params.set('versions', selectedVersions.join(','));

            history.replace({search: params.toString()});

            prevFiltersRef.current = {searchQuery, selectedProducts, selectedVersions};
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, selectedProducts, selectedVersions]);

    useEffect(() => {
        if (!loaderRef) return undefined;
        const currentObserver = observer.current;
        if (currentObserver) {
            currentObserver.observe(loaderRef);
            return () => currentObserver.unobserve(loaderRef);
        }
        return () => true;
    }, [loaderRef]);

    useEffect(() => {
        searchResultStateDispatcher({type: 'reset'});
        if (searchQuery) {
            searchResultStateDispatcher({type: 'loading'});
            setTimeout(() => makeSearch(), 300);
        }
    }, [searchQuery, selectedProducts, selectedVersions, makeSearch]);

    useEffect(() => {
        if (!searchResultState.lastPage || searchResultState.lastPage === 0) {
            return;
        }
        makeSearch(searchResultState.lastPage);
    }, [makeSearch, searchResultState.lastPage]);

    const pageTitle = searchQuery
        ? `Search results for "${searchQuery}"`
        : 'Search the documentation';

    return (
        <Layout>
            <PageMetadata title={pageTitle} />
            <Head>
                <meta property="robots" content="noindex, follow" />
            </Head>

            <div className="container margin-vert--md">
                <Heading as="h1" style={{marginBottom: '16px'}}>{pageTitle}</Heading>

                <div className="row" style={{marginBottom: '16px'}}>
                    <div className="col col--9">
                        <input
                            type="search"
                            name="q"
                            placeholder="Type your search here"
                            aria-label="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            autoComplete="off"
                            autoFocus
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                fontSize: '16px',
                                borderRadius: '8px',
                                border: '2px solid var(--ifm-color-emphasis-300)',
                                marginBottom: '0',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--ifm-color-primary)';
                                e.target.style.outline = 'none';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'var(--ifm-color-emphasis-300)';
                            }}
                        />
                    </div>
                    <div className="col col--3">
                        <MultiSelect
                            label="Products"
                            options={PRODUCT_OPTIONS}
                            selectedValues={selectedProducts}
                            onChange={setSelectedProducts}
                        />
                        {selectedProducts.length > 0 && (
                            <MultiSelect
                                label="Versions"
                                options={availableVersions}
                                selectedValues={selectedVersions}
                                onChange={setSelectedVersions}
                            />
                        )}
                    </div>
                </div>

                {!!searchResultState.totalResults && (
                    <div
                        style={{
                            marginBottom: '16px',
                            padding: '8px 12px',
                            background: 'var(--ifm-color-emphasis-100)',
                            borderRadius: '6px',
                            fontSize: '15px',
                            fontWeight: '500',
                        }}
                    >
                        {documentsFoundPlural(searchResultState.totalResults)}
                    </div>
                )}

                {searchResultState.items.length > 0 ? (
                    <main>
                        {(() => {
                            // Group results by product
                            const groupedByProduct = searchResultState.items.reduce((acc, item) => {
                                const product = item.product || 'Unknown';
                                if (!acc[product]) acc[product] = [];
                                acc[product].push(item);
                                return acc;
                            }, {});

                            // Sort products alphabetically
                            const sortedProducts = Object.keys(groupedByProduct).sort();

                            return sortedProducts.map((product) => (
                                <section key={product} style={{marginBottom: '32px'}}>
                                    <Heading
                                        as="h2"
                                        style={{
                                            fontSize: '22px',
                                            marginBottom: '16px',
                                            paddingBottom: '8px',
                                            borderBottom: '2px solid var(--ifm-color-primary)',
                                            color: 'var(--ifm-color-primary)',
                                        }}
                                    >
                                        {product} ({groupedByProduct[product].length} results)
                                    </Heading>

                                    {groupedByProduct[product].map(({title, url, summary, breadcrumbs}, i) => (
                                        <article
                                            key={i}
                                            style={{
                                                marginBottom: '16px',
                                                paddingBottom: '12px',
                                                borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                                            }}
                                        >
                                            <Heading
                                                as="h3"
                                                style={{
                                                    fontSize: '18px',
                                                    marginBottom: '8px',
                                                    fontWeight: '600',
                                                }}
                                            >
                                                <Link to={url} dangerouslySetInnerHTML={{__html: title}} />
                                            </Heading>

                                            {breadcrumbs.length > 0 && (
                                                <nav aria-label="breadcrumbs">
                                                    <ul
                                                        className="breadcrumbs"
                                                        style={{fontSize: '13px', marginBottom: '8px'}}
                                                    >
                                                        {breadcrumbs.map((html, index) => (
                                                            <li
                                                                key={index}
                                                                className="breadcrumbs__item"
                                                                dangerouslySetInnerHTML={{__html: html}}
                                                            />
                                                        ))}
                                                    </ul>
                                                </nav>
                                            )}

                                            {summary && (
                                                <p
                                                    style={{
                                                        color: 'var(--ifm-color-emphasis-700)',
                                                        margin: 0,
                                                        fontSize: '14px',
                                                        lineHeight: '1.6',
                                                    }}
                                                    dangerouslySetInnerHTML={{__html: summary}}
                                                />
                                            )}
                                        </article>
                                    ))}
                                </section>
                            ));
                        })()}
                    </main>
                ) : (
                    [
                        searchQuery && !searchResultState.loading && (
                            <p key="no-results">
                                <Translate>No results were found</Translate>
                            </p>
                        ),
                        !!searchResultState.loading && (
                            <div key="spinner" style={{textAlign: 'center', padding: '40px'}}>
                                Loading...
                            </div>
                        ),
                    ]
                )}

                {searchResultState.hasMore && (
                    <div ref={setLoaderRef} style={{textAlign: 'center', padding: '20px'}}>
                        <Translate>Fetching new results...</Translate>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default function SearchPage() {
    return (
        <HtmlClassNameProvider className="search-page-wrapper">
            <SearchPageContent />
        </HtmlClassNameProvider>
    );
}
