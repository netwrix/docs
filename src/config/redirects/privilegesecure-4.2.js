// Redirects for Netwrix Privilege Secure 4.2.
//
// 4.2 is no longer published. Its files stay in `docs/privilegesecure/4.2`, but the
// version is not in `versions` in `products.js`, so its pages are not built. Knowledge
// Base articles, release notes, and bookmarks still link to the 4_2 addresses. The
// version root and the pages that have a counterpart in 26.03 redirect there. Other
// 4_2 addresses have no equivalent and are not redirected.

const PRODUCT_PATH = '/docs/privilegesecure';

// Pages that are a category's landing page end in a slash: that is how Docusaurus registers their route.
const PAGES = {
  '': '',
  'admin/interface/accesspolicy': 'admin/accesspolicy/',
  'admin/interface/accesspolicy/connectionprofiles': 'admin/accesspolicy/connectionprofiles/',
  'requirements/ports': 'requirements/ports',
  'revieweruser/myactivities': 'enduser/myactivities/',
};

export const privilegeSecure42Redirects = Object.entries(PAGES).map(([from, to]) => ({
  from: from ? `${PRODUCT_PATH}/4_2/${from}` : `${PRODUCT_PATH}/4_2`,
  to: to ? `${PRODUCT_PATH}/26_03/${to}` : `${PRODUCT_PATH}/26_03`,
}));
