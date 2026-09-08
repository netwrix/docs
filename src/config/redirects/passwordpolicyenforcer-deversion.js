// Password Policy Enforcer was de-versioned in 2026-09: only 12.0 is built now,
// serving at the bare /docs/passwordpolicyenforcer path. The 11.2/11.1/11.0/10.2
// versions were removed from the build (their source files are untouched on
// disk, just unplugged from src/config/products.js).
//
// These are static redirects for the well-known version-root URLs so old
// bookmarks/links to those roots get a real (crawlable, no-JS) redirect rather
// than depending on the client-side 404 fallback (findVersionlessRedirect),
// which only fires for a browser that hits a dead route. Deep links into pages
// under those old versions aren't enumerated here — the 10.2 layout in
// particular doesn't map cleanly onto 12.0 — so they fall through to that
// client-side fallback, which sends any old versioned URL to the docs root.
const OLD_VERSION_URL_SEGMENTS = ['12_0', '11_2', '11_1', '11_0', '10_2'];

export const passwordPolicyEnforcerDeversionRedirects = OLD_VERSION_URL_SEGMENTS.map((segment) => ({
  from: `/docs/passwordpolicyenforcer/${segment}`,
  to: '/docs/passwordpolicyenforcer',
}));
