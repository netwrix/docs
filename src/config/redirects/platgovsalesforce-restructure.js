// Redirects for the Strongpoint for Salesforce (platgovsalesforce) restructure
// into the standard documentation zones. Each entry maps an old address to the
// page's new location. platgovsalesforce is a single-version product, so
// addresses carry no version segment.

const PREFIX = '/docs/platgovsalesforce';

// old path (relative to the product) -> new path
const MOVED_PAGES = {
  'release_7_0': 'release-notes/whats-new',
};

export const platgovsalesforceRestructureRedirects = Object.entries(MOVED_PAGES).map(
  ([oldPath, newPath]) => ({ from: `${PREFIX}/${oldPath}`, to: `${PREFIX}/${newPath}` }),
);
