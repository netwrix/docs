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

// Safely strip HTML tags to plain text
function stripHtmlTagsToText(input) {
    if (!input) {
        return '';
    }
    if (ExecutionEnvironment.canUseDOM) {
        const container = document.createElement('div');
        container.innerHTML = input;
        return container.textContent || container.innerText || '';
    }
    // Fallback for non-DOM environments (SSR): remove all angle brackets to prevent tags
    // This avoids multi-character tag patterns and ensures no HTML elements can be formed.
    return input.replace(/[<>]/g, '');
}

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

// Checkbox-based multi-select component
function MultiSelect({label, options, selectedValues, onChange}) {
    // options[0] is the "All products" sentinel — skip it for the checkbox list
    const productOptions = options.filter(o => o.value !== '__all__');
    const noneSelected = selectedValues.length === 1 && selectedValues[0] === '__none__';
    const allSelected = selectedValues.length === 0 || selectedValues.includes('__all__');
    const someSelected = !allSelected && !noneSelected && selectedValues.length > 0;

    const selectAllRef = useRef(null);

    useEffect(() => {
        if (selectAllRef.current) {
            selectAllRef.current.indeterminate = someSelected;
            if (!someSelected) selectAllRef.current.indeterminate = false;
        }
    }, [someSelected]);

    function handleSelectAll() {
        if (allSelected && !someSelected) {
            onChange(['__none__']); // All checked → uncheck all
        } else {
            onChange([]);           // Indeterminate or none → check all
        }
    }

    function handleOption(value, checked) {
        // Resolve current explicit selection
        const current = allSelected
            ? productOptions.map(o => o.value)   // [] means all
            : noneSelected
                ? []                              // __none__ means none
                : selectedValues.filter(v => v !== '__all__');
        if (checked) {
            const next = current.concat(value);
            onChange(next.length === productOptions.length ? [] : next);
        } else {
            onChange(current.filter(v => v !== value));
        }
    }

    const containerStyle = {
        width: '100%',
        border: '2px solid var(--ifm-color-emphasis-300)',
        borderRadius: '8px',
        overflowY: 'auto',
        background: 'var(--ifm-background-color)',
        flex: 1,
        minHeight: 0,
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '4px 10px',
        cursor: 'pointer',
        fontSize: '13px',
        lineHeight: '1.3',
        userSelect: 'none',
    };

    const checkboxStyle = {
        width: '16px',
        height: '16px',
        flexShrink: 0,
        cursor: 'pointer',
        accentColor: 'var(--ifm-color-primary)',
    };

    const dividerStyle = {
        height: '1px',
        background: 'var(--ifm-color-emphasis-200)',
        margin: '0',
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0}}>
            <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', flexShrink: 0}}>
                {label}
            </label>
            <div style={containerStyle}>
                {/* Select-all row */}
                <label style={{...rowStyle, fontWeight: '500', background: 'var(--ifm-color-emphasis-100)', justifyContent: 'space-between'}}>
                    <input
                        ref={selectAllRef}
                        type="checkbox"
                        style={checkboxStyle}
                        checked={allSelected && !noneSelected}
                        onChange={handleSelectAll}
                    />
                    <span style={{fontSize: '13px', color: 'var(--ifm-color-emphasis-600)', marginLeft: 'auto'}}>
                        {noneSelected ? 0 : allSelected ? productOptions.length : selectedValues.length} of {productOptions.length}
                    </span>
                </label>
                <div style={dividerStyle} />
                {productOptions.map((opt) => {
                    const checked = !noneSelected && (allSelected || selectedValues.includes(opt.value));
                    return (
                        <label key={opt.value} style={rowStyle}>
                            <input
                                type="checkbox"
                                style={checkboxStyle}
                                checked={checked}
                                onChange={(e) => handleOption(opt.value, e.target.checked)}
                            />
                            {opt.label}
                        </label>
                    );
                })}
            </div>
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

    // Back to top button visibility
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showJumpToBottom, setShowJumpToBottom] = useState(false);

    // Results per page dropdown state
    const [rppOpen, setRppOpen] = useState(false);
    const rppRef = useRef(null);

    // Close results-per-page dropdown when clicking outside
    useEffect(() => {
        if (!rppOpen) return;
        const handler = (e) => {
            if (rppRef.current && !rppRef.current.contains(e.target)) setRppOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [rppOpen]);

    // Page jump input state
    const [pageInputValue, setPageInputValue] = useState('');
    const [pageInputFocused, setPageInputFocused] = useState(false);

    // Mobile breakpoint
    const [isMobile, setIsMobile] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) return;
        const mqMobile = window.matchMedia('(max-width: 768px)');
        const mqSmall = window.matchMedia('(max-width: 480px)');
        setIsMobile(mqMobile.matches);
        setIsSmall(mqSmall.matches);
        const mobileHandler = (e) => setIsMobile(e.matches);
        const smallHandler = (e) => setIsSmall(e.matches);
        mqMobile.addEventListener('change', mobileHandler);
        mqSmall.addEventListener('change', smallHandler);
        return () => {
            mqMobile.removeEventListener('change', mobileHandler);
            mqSmall.removeEventListener('change', smallHandler);
        };
    }, []);

    // Parse URL parameters
    const urlParams = new URLSearchParams(location.search);
    const queryFromUrl = urlParams.get('q') || '';
    const productsFromUrl = urlParams.get('products')?.split(',').filter(Boolean) || [];
    const resultsPerPageFromUrl = parseInt(urlParams.get('resultsPerPage'), 10) || 25;
    const pageFromUrl = parseInt(urlParams.get('page'), 10) || 1;

    const [searchQuery, setSearchQuery] = useState(queryFromUrl);
    // Initialize from URL if present, otherwise from localStorage
    const [selectedProducts, setSelectedProducts] = useState(() => {
        if (productsFromUrl.length > 0) return productsFromUrl;
        if (typeof window === 'undefined') return [];
        const saved = sessionStorage.getItem('docs_product_filter');
        try {
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });
    const [resultsPerPage, setResultsPerPage] = useState(resultsPerPageFromUrl);

    // Track if we're restoring from URL (e.g., browser back button)
    const restoringFromUrl = useRef(false);
    const targetPageRef = useRef(null);
    const isInternalNavigation = useRef(false);

    // Sync selectedProducts to sessionStorage and dispatch custom event for same-tab sync
    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('docs_product_filter', JSON.stringify(selectedProducts));
            // Dispatch custom event for same-tab synchronization
            window.dispatchEvent(new CustomEvent('productFilterChange', {
                detail: {products: selectedProducts}
            }));
        }
    }, [selectedProducts]);

    // Listen for filter changes from SearchBar modal (same-tab sync)
    useEffect(() => {
        const handleFilterChange = (e) => {
            const newProducts = e.detail.products;
            // Avoid infinite loop by checking if products actually changed
            if (JSON.stringify(newProducts) !== JSON.stringify(selectedProducts)) {
                setSelectedProducts(newProducts);
            }
        };
        window.addEventListener('productFilterChange', handleFilterChange);
        return () => window.removeEventListener('productFilterChange', handleFilterChange);
    }, [selectedProducts]);

    // Update state when URL changes (e.g., when navigating from search modal or browser back)
    useEffect(() => {
        // Skip if this was an internal navigation (we triggered the URL change ourselves)
        if (isInternalNavigation.current) {
            isInternalNavigation.current = false;
            return;
        }

        // External navigation (browser back/forward, or coming from search modal)
        const urlParams = new URLSearchParams(location.search);
        const newQuery = urlParams.get('q') || '';
        const newProducts = urlParams.get('products')?.split(',').filter(Boolean) || [];
        const newResultsPerPage = parseInt(urlParams.get('resultsPerPage'), 10) || 25;
        const newPage = parseInt(urlParams.get('page'), 10) || 1;

        setSearchQuery(newQuery);
        setSelectedProducts(newProducts);
        setResultsPerPage(newResultsPerPage);

        // Store target page for restoration
        if (newPage > 1) {
            restoringFromUrl.current = true;
            targetPageRef.current = newPage - 1;
        } else {
            restoringFromUrl.current = false;
            targetPageRef.current = null;
        }
    }, [location.search]);

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
                        items: data.value.items, // Show only current page
                    };
                case 'nextPage':
                    if (!prevState.hasMore || prevState.loading) {
                        return prevState;
                    }
                    return {
                        ...prevState,
                        lastPage: prevState.lastPage + 1,
                        loading: true,
                    };
                case 'prevPage':
                    if (prevState.lastPage === 0 || prevState.loading) {
                        return prevState;
                    }
                    return {
                        ...prevState,
                        lastPage: prevState.lastPage - 1,
                        loading: true,
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
                hitsPerPage: resultsPerPage,
                advancedSyntax: true,
                disjunctiveFacets: ['language'], // Only language facet exists in index
            }),
        [algoliaClient, indexName, resultsPerPage],
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
                product = stripHtmlTagsToText(breadcrumbs[0]);
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

    // Pagination is now controlled by Previous/Next buttons instead of infinite scroll

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

            algoliaHelper
                .setQuery(searchQuery)
                .setQueryParameter('facetFilters', facetFilters)
                .setPage(page)
                .search();
        },
        [searchQuery, algoliaHelper, currentLocale, selectedProducts],
    );

    // Update URL when filters or pagination change
    const prevFiltersRef = useRef({searchQuery: '', selectedProducts: [], resultsPerPage: 25, page: 1});

    useEffect(() => {
        // Only update URL if values actually changed
        const prev = prevFiltersRef.current;
        const currentPage = (searchResultState.lastPage || 0) + 1;

        if (
            prev.searchQuery !== searchQuery ||
            JSON.stringify(prev.selectedProducts) !== JSON.stringify(selectedProducts) ||
            prev.resultsPerPage !== resultsPerPage ||
            prev.page !== currentPage
        ) {
            const params = new URLSearchParams();
            if (searchQuery) params.set('q', searchQuery);
            if (selectedProducts.length > 0) params.set('products', selectedProducts.join(','));
            if (resultsPerPage !== 25) params.set('resultsPerPage', String(resultsPerPage));
            if (currentPage > 1) params.set('page', String(currentPage));

            // Mark this as an internal navigation so location.search effect ignores it
            isInternalNavigation.current = true;
            history.replace({search: params.toString()});

            prevFiltersRef.current = {searchQuery, selectedProducts, resultsPerPage, page: currentPage};
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, selectedProducts, resultsPerPage, searchResultState.lastPage]);

    // IntersectionObserver removed - using pagination buttons instead

    useEffect(() => {
        searchResultStateDispatcher({type: 'reset'});
        if (searchQuery) {
            searchResultStateDispatcher({type: 'loading'});
            // If restoring from URL, use the target page; otherwise start at page 0
            const startPage = (restoringFromUrl.current && targetPageRef.current !== null)
                ? targetPageRef.current
                : 0;
            setTimeout(() => {
                makeSearch(startPage);
                // Clear restoration flags after search
                restoringFromUrl.current = false;
                targetPageRef.current = null;
            }, 300);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, selectedProducts, resultsPerPage]);

    useEffect(() => {
        // Only trigger pagination search if lastPage has been set by nextPage/prevPage actions
        // (not during initial render where lastPage is null)
        if (searchResultState.lastPage === null) {
            return;
        }
        makeSearch(searchResultState.lastPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchResultState.lastPage]);

    // Scroll to top when page changes (except initial load)
    const isInitialLoad = useRef(true);
    useEffect(() => {
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        if (searchResultState.items.length > 0 && !searchResultState.loading) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }, [searchResultState.lastPage, searchResultState.items.length, searchResultState.loading]);

    // Show/hide back to top and jump to bottom buttons based on window scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrolledDown = window.scrollY > 300;
            const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300;

            setShowBackToTop(scrolledDown);
            setShowJumpToBottom(!scrolledDown && !nearBottom && searchResultState.items.length > 0);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [searchResultState.items.length]);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const scrollToBottom = () => {
        window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
    };

    const pageTitle = searchQuery
        ? `Search results for "${searchQuery}"`
        : 'Search the documentation';

    return (
        <Layout>
            <PageMetadata title={pageTitle} />
            <Head>
                <meta property="robots" content="noindex, follow" />
            </Head>

            <div className="container" style={{
                paddingBottom: '48px',
            }}>
                <div style={isMobile ? {
                    display: 'flex',
                    flexDirection: 'column',
                } : {
                    display: 'grid',
                    gridTemplateColumns: '20% 1fr',
                    gridTemplateAreas: '"filters controls" "filters results"',
                    columnGap: '24px',
                    alignItems: 'start',
                }}>
                    {/* Controls — heading + search + results-per-page + doc count */}
                    <div style={isMobile ? {
                        paddingTop: '16px',
                        paddingBottom: '12px',
                    } : {
                        gridArea: 'controls',
                        position: 'sticky',
                        top: 'var(--ifm-navbar-height)',
                        zIndex: 10,
                        backgroundColor: 'var(--ifm-navbar-background-color)',
                        paddingTop: '16px',
                        paddingBottom: '12px',
                    }}>
                        <Heading as="h1" style={{fontSize: '20px', lineHeight: '1.3', marginBottom: '12px'}}>{pageTitle}</Heading>
                        <div style={{display: 'flex', flexDirection: isSmall ? 'column' : 'row', gap: '16px', marginBottom: '12px', alignItems: isSmall ? 'stretch' : 'flex-end'}}>
                            <div style={{flex: 1}}>
                                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                                    Search
                                </label>
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
                            <div ref={rppRef} style={{flexShrink: 0, position: 'relative'}}>
                                <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold'}}>
                                    Results per page
                                </label>
                                <button
                                    onClick={() => setRppOpen(o => !o)}
                                    style={{
                                        width: '160px',
                                        padding: '14px 44px 14px 16px',
                                        fontSize: '16px',
                                        borderRadius: rppOpen ? '8px 8px 0 0' : '8px',
                                        border: '2px solid var(--ifm-color-emphasis-300)',
                                        background: 'var(--ifm-background-color)',
                                        color: 'var(--ifm-font-color-base)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'border-color 0.2s',
                                        position: 'relative',
                                    }}
                                >
                                    {resultsPerPage}
                                    <svg
                                        width="12" height="8" viewBox="0 0 12 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            position: 'absolute',
                                            right: '14px',
                                            top: '50%',
                                            transform: `translateY(-50%) ${rppOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                                            transition: 'transform 0.2s',
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        <path d="M1 1l5 5 5-5" stroke="var(--ifm-color-emphasis-600)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                {rppOpen && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        width: '160px',
                                        background: 'var(--ifm-background-surface-color)',
                                        border: '2px solid var(--ifm-color-emphasis-300)',
                                        borderTop: 'none',
                                        borderRadius: '0 0 8px 8px',
                                        overflow: 'hidden',
                                        zIndex: 100,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    }}>
                                        {[25, 50, 100, 150, 200].map(n => (
                                            <div
                                                key={n}
                                                onClick={() => { setResultsPerPage(n); setRppOpen(false); }}
                                                style={{
                                                    padding: '8px 16px',
                                                    fontSize: '15px',
                                                    cursor: 'pointer',
                                                    background: n === resultsPerPage ? 'var(--ifm-color-primary)' : 'transparent',
                                                    color: n === resultsPerPage ? 'white' : 'var(--ifm-font-color-base)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (n !== resultsPerPage) e.currentTarget.style.background = 'var(--ifm-color-emphasis-100)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (n !== resultsPerPage) e.currentTarget.style.background = 'transparent';
                                                }}
                                            >
                                                {n}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {!!searchResultState.totalResults && (
                            <div
                                style={{
                                    marginBottom: '12px',
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
                    </div>{/* closes controls div */}

                    {/* Filters sidebar — product filters */}
                    <div style={isMobile ? {
                        maxHeight: '220px',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: '8px',
                    } : {
                        gridArea: 'filters',
                        position: 'sticky',
                        top: 'var(--ifm-navbar-height)',
                        maxHeight: 'calc(100vh - var(--ifm-navbar-height))',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '16px',
                        paddingBottom: '16px',
                        backgroundColor: 'var(--ifm-navbar-background-color)',
                    }}>
                        <MultiSelect
                            label="Products"
                            options={PRODUCT_OPTIONS}
                            selectedValues={selectedProducts}
                            onChange={setSelectedProducts}
                        />
                    </div>{/* closes filters div */}

                    {/* Results area */}
                    <div style={isMobile ? {} : {gridArea: 'results'}}>

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

                            return sortedProducts.map((product) => {
                                const productResults = groupedByProduct[product];

                                return (
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
                                            {product} ({productResults.length} {productResults.length === 1 ? 'result' : 'results'} on this page)
                                        </Heading>

                                    {productResults.map(({title, url, summary, breadcrumbs}, i) => {
                                        return (
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
                                        );
                                    })}
                                </section>
                                );
                            });
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

                {/* Pagination controls */}
                {searchResultState.items.length > 0 && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '40px 20px',
                        borderTop: '1px solid var(--ifm-color-emphasis-200)',
                        marginTop: '20px'
                    }}>
                        <button
                            onClick={() => searchResultStateDispatcher({type: 'prevPage'})}
                            disabled={searchResultState.lastPage === 0 || searchResultState.loading}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontWeight: '500',
                                border: searchResultState.lastPage === 0 || searchResultState.loading
                                    ? '1px solid var(--ifm-color-emphasis-300)'
                                    : '1px solid var(--ifm-color-primary)',
                                borderRadius: '6px',
                                backgroundColor: searchResultState.lastPage === 0 || searchResultState.loading
                                    ? 'var(--ifm-color-emphasis-200)'
                                    : 'var(--ifm-color-primary)',
                                color: searchResultState.lastPage === 0 || searchResultState.loading
                                    ? 'var(--ifm-color-emphasis-600)'
                                    : 'white',
                                cursor: searchResultState.lastPage === 0 || searchResultState.loading
                                    ? 'not-allowed'
                                    : 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            ← Previous
                        </button>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <span style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: 'var(--ifm-color-emphasis-800)'
                            }}>
                                Page
                            </span>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={pageInputFocused ? pageInputValue : (searchResultState.lastPage + 1)}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    setPageInputValue(value);
                                }}
                                onFocus={(e) => {
                                    setPageInputFocused(true);
                                    setPageInputValue(String(searchResultState.lastPage + 1));
                                    setTimeout(() => e.target.select(), 0);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        const pageNum = parseInt(pageInputValue, 10);
                                        if (pageNum >= 1 && pageNum <= searchResultState.totalPages) {
                                            searchResultStateDispatcher({
                                                type: 'update',
                                                value: {
                                                    ...searchResultState,
                                                    lastPage: pageNum - 1,
                                                    loading: true,
                                                }
                                            });
                                        }
                                        setPageInputValue('');
                                        setPageInputFocused(false);
                                        e.target.blur();
                                    } else if (e.key === 'Escape') {
                                        setPageInputValue('');
                                        setPageInputFocused(false);
                                        e.target.blur();
                                    }
                                }}
                                onBlur={() => {
                                    setPageInputValue('');
                                    setPageInputFocused(false);
                                }}
                                style={{
                                    width: '60px',
                                    padding: '6px 8px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    border: '1px solid var(--ifm-color-emphasis-300)',
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                }}
                            />
                            <span style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: 'var(--ifm-color-emphasis-800)'
                            }}>
                                of {searchResultState.totalPages}
                            </span>
                        </div>

                        <button
                            onClick={() => searchResultStateDispatcher({type: 'nextPage'})}
                            disabled={!searchResultState.hasMore || searchResultState.loading}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                fontWeight: '500',
                                border: !searchResultState.hasMore || searchResultState.loading
                                    ? '1px solid var(--ifm-color-emphasis-300)'
                                    : '1px solid var(--ifm-color-primary)',
                                borderRadius: '6px',
                                backgroundColor: !searchResultState.hasMore || searchResultState.loading
                                    ? 'var(--ifm-color-emphasis-200)'
                                    : 'var(--ifm-color-primary)',
                                color: !searchResultState.hasMore || searchResultState.loading
                                    ? 'var(--ifm-color-emphasis-600)'
                                    : 'white',
                                cursor: !searchResultState.hasMore || searchResultState.loading
                                    ? 'not-allowed'
                                    : 'pointer',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Next →
                        </button>
                    </div>
                )}
                    </div>{/* closes results div */}
                </div>{/* closes outer grid/flex container */}
            </div>

            {/* Back to top / jump to bottom buttons — mutually exclusive, same position */}
            {(showBackToTop || showJumpToBottom) && (
                <button
                    onClick={showBackToTop ? scrollToTop : scrollToBottom}
                    aria-label={showBackToTop ? 'Back to top' : 'Jump to bottom'}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '24px',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--ifm-color-primary)',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                        zIndex: 1000,
                        transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.85,
                        padding: 0,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.25)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.85';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.18)';
                    }}
                >
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style={{transform: showBackToTop ? 'none' : 'rotate(180deg)'}}>
                        <polyline points="1,8 7,2 13,8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}
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
