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

function useResultsFooterComponent({closeModal}) {
    return useMemo(
        () =>
            ({state}) =>
                <ResultsFooter state={state} onClose={closeModal}/>,
        [closeModal],
    );
}

function Hit({hit, children}) {
    return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({state, onClose}) {
    const createSearchLink = useSearchLinkCreator();
    return (
        <Link to={createSearchLink(state.query)} onClick={onClose}>
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

    const facetFilters = contextualSearch
        ? mergeFacetFilters(contextualSearchFacetFilters, combinedConfigFacetFilters)
        : combinedConfigFacetFilters;

    return {
        ...props.searchParameters,
        facetFilters,
    };
}

// Values MUST match Algolia facet values exactly
const PRODUCT_OPTIONS = [
    {label: 'All products', value: '__all__'},
    {label: 'Netwrix Auditor', value: 'Auditor'},
    {label: 'Netwrix Privilege Secure', value: 'Privilege Secure'},
    {label: 'Netwrix Password Secure', value: 'Password Secure'},
    {label: 'Netwrix Change Tracker', value: 'Change Tracker'},
    {label: 'Netwrix Endpoint Policy Manager', value: 'Endpoint Policy Manager'},
    {label: 'Netwrix Endpoint Protector', value: 'Endpoint Protector'},
    {label: 'Netwrix Access Analyzer', value: 'Access Analyzer'},
    {label: 'Netwrix Data Classification', value: 'Data Classification'},
    {label: 'Netwrix 1Secure', value: '1Secure'},
    {label: 'Netwrix Threat Manager', value: 'Threat Manager'},
    {label: 'Netwrix Threat Prevention', value: 'Threat Prevention'},
    {label: 'Recovery for Active Directory', value: 'Recovery for Active Directory'},
    {label: 'PingCastle', value: 'PingCastle'},
    {label: 'Access Information Center', value: 'Access Information Center'},
    {label: 'Activity Monitor', value: 'Activity Monitor'},
    {label: 'Password Policy Enforcer', value: 'Password Policy Enforcer'},
    {label: 'Password Reset', value: 'Password Reset'},
];

function ProductSelect({value, onChange}) {
    return (
        <select
            aria-label="Filter search by product"
            value={value}
            onChange={onChange}
            className="DocSearch-ProductSelect"
            style={{
                height: 36,
                padding: '0 8px',
                border: 'none',
            }}
        >
            {PRODUCT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}

function DocSearch({externalUrlRegex, onModalOpen, ...props}) {
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

    const resultsFooterComponent = useResultsFooterComponent({closeModal});

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

    const [product, setProduct] = useState(() => {
        if (typeof window === 'undefined') return '__all__';
        return localStorage.getItem('docs_product_filter') || '__all__';
    });

    const productFacetFilters = useMemo(() => {
        if (!product || product === '__all__') return [];
        return [`product_name:${product}`];
    }, [product]);

    const onChangeProduct = (e) => {
        const next = e.target.value;
        setProduct(next);

        if (typeof window !== 'undefined') {
            localStorage.setItem('docs_product_filter', next);
        }

        // Trigger DocSearch to refresh results without closing the modal:
        // Find the modal's input and dispatch an input event with the same value.
        setTimeout(() => {
            const input =
                document.querySelector('.DocSearch-Input') ||
                document.querySelector('input[type="search"]');

            if (input) {
                const value = input.value;
                // Re-set same value and dispatch input event to retrigger search
                input.value = value;
                input.dispatchEvent(new Event('input', {bubbles: true}));
            }
        }, 0);
    };


    // This is where we will portal the <select> into the modal DOM.
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

    // When modalHeaderEl exists, insert select BEFORE the form input if possible.
    // We target .DocSearch-Form when present, otherwise the container itself.
    const portalTarget = useMemo(() => {
        if (!modalHeaderEl) return null;
        return (
            modalHeaderEl.querySelector('.DocSearch-Form') ||
            modalHeaderEl
        );
    }, [modalHeaderEl]);

    return (
        <>
            <DocSearch
                {...siteConfig.themeConfig.algolia}
                productFacetFilters={productFacetFilters}
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
                        <ProductSelect value={product} onChange={onChangeProduct}/>
                    </div>,
                    portalTarget,
                )}
        </>
    );
}
