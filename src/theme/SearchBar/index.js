import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {DocSearchButton, useDocSearchKeyboardEvents} from '@docsearch/react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import {
    isRegexpStringMatch,
    useSearchLinkCreator,
} from '@docusaurus/theme-common';
import {
    useAlgoliaContextualFacetFilters,
    useSearchResultUrlProcessor,
} from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import translations from '@theme/SearchTranslations';
import {PRODUCTS} from '../../config/products';

let DocSearchModal = null;

function importDocSearchModalIfNeeded() {
    if (DocSearchModal) {
        return Promise.resolve();
    }
    return Promise.all([
        import('@docsearch/react/modal'),
        import('@docsearch/react/style'),
        import('./styles.css'),
    ]).then(([{DocSearchModal: Modal}]) => {
        DocSearchModal = Modal;
    });
}

function useNavigator({externalUrlRegex}) {
    const history = useHistory();
    const [navigator] = useState(() => {
        return {
            navigate(params) {
                if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
                    window.location.href = params.itemUrl;
                } else {
                    history.push(params.itemUrl);
                }
            },
        };
    });
    return navigator;
}

function useTransformSearchClient() {
    const {
        siteMetadata: {docusaurusVersion},
    } = useDocusaurusContext();
    return useCallback(
        (searchClient) => {
            searchClient.addAlgoliaAgent('docusaurus', docusaurusVersion);
            return searchClient;
        },
        [docusaurusVersion],
    );
}

function useTransformItems(props) {
    const processSearchResultUrl = useSearchResultUrlProcessor();
    const [transformItems] = useState(() => {
        return (items) =>
            props.transformItems
                ? props.transformItems(items)
                : items.map((item) => ({
                    ...item,
                    url: processSearchResultUrl(item.url),
                }));
    });
    return transformItems;
}

function useResultsFooterComponent({closeModal, selectedProducts, selectedVersions}) {
    return useMemo(
        () =>
            ({state}) =>
                <ResultsFooter
                    state={state}
                    onClose={closeModal}
                    selectedProducts={selectedProducts}
                    selectedVersions={selectedVersions}
                />,
        [closeModal, selectedProducts, selectedVersions],
    );
}

function Hit({hit, children}) {
    return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({state, onClose, selectedProducts = [], selectedVersions = []}) {
    const createSearchLink = useSearchLinkCreator();
    const baseLink = createSearchLink(state.query);

    // Add product and version filters as URL parameters
    const params = new URLSearchParams();
    if (selectedProducts.length > 0) {
        params.set('products', selectedProducts.join(','));
    }
    if (selectedVersions.length > 0) {
        params.set('versions', selectedVersions.join(','));
    }

    const linkWithFilters = params.toString()
        ? `${baseLink}&${params.toString()}`
        : baseLink;

    return (
        <Link to={linkWithFilters} onClick={onClose}>
            <Translate
                id="theme.SearchBar.seeAll"
                values={{count: state.context.nbHits}}>
                {'See all {count} results'}
            </Translate>
        </Link>
    );
}

function useSearchParameters({contextualSearch, productFacetFilters = [], ...props}) {
    function mergeFacetFilters(f1, f2) {
        const normalize = (f) => (typeof f === 'string' ? [f] : f);
        return [...normalize(f1), ...normalize(f2)];
    }

    const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();

    const configFacetFilters = props.searchParameters?.facetFilters ?? [];
    const combinedConfigFacetFilters =
        productFacetFilters.length > 0
            ? mergeFacetFilters(configFacetFilters, productFacetFilters)
            : configFacetFilters;

    let facetFilters;
    if (contextualSearch) {
        // Use contextual filters (includes language and doc tags)
        facetFilters = mergeFacetFilters(contextualSearchFacetFilters, combinedConfigFacetFilters);
    } else {
        // When contextualSearch is disabled, still include language filter but not doc tags
        const languageFilter = contextualSearchFacetFilters.find(f => typeof f === 'string' && f.startsWith('language:'));
        if (languageFilter && productFacetFilters.length > 0) {
            // IMPORTANT: Don't spread productFacetFilters - it's already an array of arrays
            // We want: ['language:en', ['product1', 'product2']] not ['language:en', 'product1', 'product2']
            facetFilters = [languageFilter].concat(productFacetFilters);
        } else {
            facetFilters = combinedConfigFacetFilters;
        }
    }

    return {
        ...props.searchParameters,
        facetFilters,
    };
}

// Generate product options dynamically from PRODUCTS constant
// Values MUST match Algolia facet values exactly
const PRODUCT_OPTIONS = [
    {label: 'All products', value: '__all__'},
    ...PRODUCTS.map(product => ({
        label: product.name,
        value: product.name,
    }))
].sort((a, b) => {
    // Keep "All products" first
    if (a.value === '__all__') return -1;
    if (b.value === '__all__') return 1;
    return a.label.localeCompare(b.label);
});

// Helper to get versions for selected products
function getVersionsForProducts(selectedProducts) {
    if (!selectedProducts || selectedProducts.length === 0 || selectedProducts.includes('__all__')) {
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

// Multi-select dropdown component with checkboxes
function MultiSelectDropdown({label, options, selectedValues, onChange, placeholder}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = (value) => {
        let newSelection;
        if (value === '__all__') {
            newSelection = [];
        } else {
            if (selectedValues.includes(value)) {
                newSelection = selectedValues.filter(v => v !== value);
            } else {
                newSelection = [...selectedValues, value];
            }
        }
        onChange(newSelection);
    };

    const displayText = selectedValues.length === 0
        ? placeholder
        : `${selectedValues.length} selected`;

    return (
        <div className="DocSearch-MultiSelect" ref={dropdownRef} style={{position: 'relative'}}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="DocSearch-MultiSelect-Button"
                style={{
                    height: 36,
                    padding: '0 8px',
                    border: '1px solid var(--docsearch-muted-color)',
                    borderRadius: 4,
                    background: 'var(--docsearch-modal-background)',
                    color: 'var(--docsearch-text-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    minWidth: 150,
                }}
            >
                <span style={{flex: 1, textAlign: 'left', fontSize: '14px'}}>{displayText}</span>
                <span style={{fontSize: '10px'}}>▼</span>
            </button>
            {isOpen && (
                <div
                    className="DocSearch-MultiSelect-Dropdown"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: 4,
                        background: 'var(--docsearch-modal-background)',
                        border: '1px solid var(--docsearch-muted-color)',
                        borderRadius: 4,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        zIndex: 1000,
                        maxHeight: 300,
                        overflowY: 'auto',
                        minWidth: 200,
                    }}
                >
                    {options.map((opt) => {
                        const isSelected = opt.value === '__all__'
                            ? selectedValues.length === 0
                            : selectedValues.includes(opt.value);

                        return (
                            <label
                                key={opt.value}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '8px 12px',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    background: isSelected ? 'var(--docsearch-hit-active-color)' : 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.background = 'var(--docsearch-hit-background)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => handleToggle(opt.value)}
                                    style={{marginRight: 8, cursor: 'pointer'}}
                                />
                                {opt.label}
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function DocSearch({externalUrlRegex, onModalOpen, selectedProducts, selectedVersions, ...props}) {
    const navigator = useNavigator({externalUrlRegex});
    const searchParameters = useSearchParameters({...props});
    const transformItems = useTransformItems(props);
    const transformSearchClient = useTransformSearchClient();
    const searchContainer = useRef(null);
    const searchButtonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [initialQuery, setInitialQuery] = useState(undefined);

    const prepareSearchContainer = useCallback(() => {
        if (!searchContainer.current) {
            const divElement = document.createElement('div');
            searchContainer.current = divElement;
            document.body.insertBefore(divElement, document.body.firstChild);
        }
    }, []);

    const openModal = useCallback(() => {
        prepareSearchContainer();
        importDocSearchModalIfNeeded().then(() => {
            setIsOpen(true);
            // Let React render the modal, then caller can locate DOM nodes
            setTimeout(() => onModalOpen?.(), 0);
        });
    }, [prepareSearchContainer, onModalOpen]);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        searchButtonRef.current?.focus();
        setInitialQuery(undefined);
    }, []);

    const handleInput = useCallback(
        (event) => {
            if (event.key === 'f' && (event.metaKey || event.ctrlKey)) {
                return;
            }
            event.preventDefault();
            setInitialQuery(event.key);
            openModal();
        },
        [openModal],
    );

    const resultsFooterComponent = useResultsFooterComponent({
        closeModal,
        selectedProducts,
        selectedVersions,
    });

    useDocSearchKeyboardEvents({
        isOpen,
        onOpen: openModal,
        onClose: closeModal,
        onInput: handleInput,
        searchButtonRef,
    });

    return (
        <>
            <Head>
                <link
                    rel="preconnect"
                    href={`https://${props.appId}-dsn.algolia.net`}
                    crossOrigin="anonymous"
                />
            </Head>

            <DocSearchButton
                onTouchStart={importDocSearchModalIfNeeded}
                onFocus={importDocSearchModalIfNeeded}
                onMouseOver={importDocSearchModalIfNeeded}
                onClick={openModal}
                ref={searchButtonRef}
                translations={props.translations?.button ?? translations.button}
            />

            {isOpen &&
                DocSearchModal &&
                searchContainer.current &&
                createPortal(
                    <DocSearchModal
                        onClose={closeModal}
                        initialScrollY={window.scrollY}
                        initialQuery={initialQuery}
                        navigator={navigator}
                        transformItems={transformItems}
                        hitComponent={Hit}
                        transformSearchClient={transformSearchClient}
                        {...(props.searchPagePath && {resultsFooterComponent})}
                        placeholder={translations.placeholder}
                        {...props}
                        translations={props.translations?.modal ?? translations.modal}
                        searchParameters={searchParameters}
                    />,
                    searchContainer.current,
                )}
        </>
    );
}

export default function SearchBar() {
    const {siteConfig} = useDocusaurusContext();

    // Store the current search query to preserve it across filter changes
    const searchQueryRef = useRef('');

    // Multi-select state for products
    const [selectedProducts, setSelectedProducts] = useState(() => {
        if (typeof window === 'undefined') return [];
        const saved = localStorage.getItem('docs_product_filter');
        try {
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    // Multi-select state for versions
    const [selectedVersions, setSelectedVersions] = useState(() => {
        if (typeof window === 'undefined') return [];
        const saved = localStorage.getItem('docs_version_filter');
        try {
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    // Generate facetFilters for products and versions
    const productFacetFilters = useMemo(() => {
        const filters = [];

        // Add product filters (OR logic - any of the selected products)
        if (selectedProducts.length > 0) {
            const productFilters = selectedProducts.map(p => `product_name:${p}`);
            filters.push(productFilters); // Array within array = OR logic
        }

        // Add version filters (OR logic - any of the selected versions)
        if (selectedVersions.length > 0) {
            const versionFilters = selectedVersions.map(v => `version:${v}`);
            filters.push(versionFilters); // Array within array = OR logic
        }

        return filters;
    }, [selectedProducts, selectedVersions]);

    // Keep track of the search input value
    useEffect(() => {
        const interval = setInterval(() => {
            const input =
                document.querySelector('.DocSearch-Input') ||
                document.querySelector('input[type="search"]');
            if (input) {
                searchQueryRef.current = input.value;
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Helper to refresh search - simplified to just update ref
    const refreshSearch = useCallback(() => {
        const input =
            document.querySelector('.DocSearch-Input') ||
            document.querySelector('input[type="search"]');

        if (input) {
            searchQueryRef.current = input.value;
        }
    }, []);

    // Track if filters have changed and need to be applied
    const [filtersChanged, setFiltersChanged] = useState(false);

    const onChangeProducts = useCallback((newProducts) => {
        setSelectedProducts(newProducts);
        if (typeof window !== 'undefined') {
            localStorage.setItem('docs_product_filter', JSON.stringify(newProducts));
        }
        setFiltersChanged(true);
    }, []);

    const onChangeVersions = useCallback((newVersions) => {
        setSelectedVersions(newVersions);
        if (typeof window !== 'undefined') {
            localStorage.setItem('docs_version_filter', JSON.stringify(newVersions));
        }
        setFiltersChanged(true);
    }, []);

    const applyFilters = useCallback(() => {
        const input = document.querySelector('.DocSearch-Input');
        if (input) {
            const query = input.value;
            // Force refresh by adding and removing a space
            input.value = query + ' ';
            input.dispatchEvent(new Event('input', {bubbles: true}));
            setTimeout(() => {
                input.value = query;
                input.dispatchEvent(new Event('input', {bubbles: true}));
                setFiltersChanged(false);
            }, 50);
        }
    }, []);


    // Get available versions based on selected products
    const availableVersions = useMemo(() => {
        const versions = getVersionsForProducts(selectedProducts);
        return [
            {label: 'All versions', value: '__all__'},
            ...versions.map(v => ({label: v, value: v}))
        ];
    }, [selectedProducts]);

    // This is where we will portal the filters into the modal DOM.
    const [modalHeaderEl, setModalHeaderEl] = useState(null);

    const onModalOpen = useCallback(() => {
        // Try to locate the header/searchbar area in the DocSearch modal.
        // DocSearch v3 uses these classnames.
        const el =
            document.querySelector('.DocSearch-SearchBar') ||
            document.querySelector('.DocSearch-Form') ||
            document.querySelector('.DocSearch-Modal');

        setModalHeaderEl(el || null);
    }, []);

    // When modalHeaderEl exists, insert filters BEFORE the form input if possible.
    // We target .DocSearch-Form when present, otherwise the container itself.
    const portalTarget = useMemo(() => {
        if (!modalHeaderEl) return null;
        return (
            modalHeaderEl.querySelector('.DocSearch-Form') ||
            modalHeaderEl
        );
    }, [modalHeaderEl]);

    // Disable contextualSearch when products are selected to allow cross-product searching
    const contextualSearch = selectedProducts.length === 0;

    return (
        <>
            <DocSearch
                {...siteConfig.themeConfig.algolia}
                contextualSearch={contextualSearch}
                productFacetFilters={productFacetFilters}
                selectedProducts={selectedProducts}
                selectedVersions={selectedVersions}
                onModalOpen={onModalOpen}
            />

            {portalTarget &&
                createPortal(
                    // Wrapper to align with DocSearch input
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginRight: 8,
                        }}
                    >
                        <MultiSelectDropdown
                            label="Products"
                            options={PRODUCT_OPTIONS}
                            selectedValues={selectedProducts}
                            onChange={onChangeProducts}
                            placeholder="All products"
                        />
                        <MultiSelectDropdown
                            label="Versions"
                            options={availableVersions}
                            selectedValues={selectedVersions}
                            onChange={onChangeVersions}
                            placeholder="All versions"
                        />
                        {filtersChanged && (
                            <button
                                type="button"
                                onClick={applyFilters}
                                style={{
                                    height: 36,
                                    padding: '0 12px',
                                    border: 'none',
                                    borderRadius: 4,
                                    background: 'var(--docsearch-primary-color)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Apply Filters
                            </button>
                        )}
                    </div>,
                    portalTarget,
                )}
        </>
    );
}
