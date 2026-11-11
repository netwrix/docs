// Redirects for Netwrix Privilege Secure 4.2.
//
// 4.2 is no longer published. Its files stay in `docs/privilegesecure/4.2`, but the
// version is not in `versions` in `products.js`, so its pages are not built. Knowledge
// Base articles, release notes, and bookmarks still link to the 4_2 addresses. The
// version root and the pages that have a counterpart in 26.07 redirect there. Other
// 4_2 addresses have no equivalent and are not redirected.

const PRODUCT_PATH = '/docs/privilegesecure';

const PAGES = {
  '': '',
  'admin/interface/accesspolicy': 'configuration/access-policies/overview',
  'admin/interface/accesspolicy/connectionprofiles': 'configuration/access-policies/connection-profiles',
  'requirements/ports': 'requirements/ports',
  'revieweruser/myactivities': 'user-guide/my-activities',
};

export const privilegeSecure42Redirects = Object.entries(PAGES).map(([from, to]) => ({
  from: from ? `${PRODUCT_PATH}/4_2/${from}` : `${PRODUCT_PATH}/4_2`,
  to: to ? `${PRODUCT_PATH}/26_07/${to}` : `${PRODUCT_PATH}/26_07`,
}));
