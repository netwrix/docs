// Matches a version-style URL segment, e.g. "8_2", "12", "3_3_1", "v2", "saas",
// "current". Kept in sync with the version shapes ProductMetaTags recognizes
// (src/components/ProductMetaTags/index.js) so that a product collapsing from
// /docs/<product>/current/<page> or /docs/<product>/saas/<page> is covered too,
// not just numbered versions.
//
// Matching non-numeric names is safe because the callers only run on a path
// that already failed to resolve to a real doc, so a page genuinely located at
// /docs/<product>/current/<page> is served normally and never reaches here.
const VERSION_SEGMENT_RE = /^(?:v?\d+(?:_\d+)*|saas|current)$/i;

// For a product that used to have multiple versions but now ships only a
// single, unversioned version, an old link like /docs/<product>/8_2/<rest> is
// dead. This strips the stale version segment and returns the unversioned path
// /docs/<product>/<rest> so the caller can redirect there instead of showing a
// 404. Works for any old version number, since it strips whatever
// version-shaped segment is present rather than matching a hardcoded list.
//
// `unversionedDocsBasePaths` is built in docusaurus.config.js from each
// product's real route base path, so a product that serves versioned URLs is
// never listed — including one whose single version is named 'current' but
// carries a customRoutePath like docs/identitymanager/current.
//
// The target is not checked for existence: an old link whose page is genuinely
// gone is rewritten to the unversioned 404 rather than the versioned one. That
// can't loop, because each rewrite drops a segment and the rewritten path's
// first segment is eventually no longer version-shaped.
//
// This recovers the link for a reader in a browser only. The stale URL has no
// generated redirect file behind it (the old versions are gone from the config,
// so plugin-client-redirects has nothing to emit), so it still answers HTTP 404
// to crawlers and JS-disabled clients and passes no link equity to the new
// location.
export function findVersionlessRedirect(pathname, unversionedDocsBasePaths) {
  // Each base path is matched with a trailing slash so that products whose base
  // path is a string prefix of another's (platgovnetsuite vs
  // platgovnetsuiteflashlight) can't match each other.
  const basePath = unversionedDocsBasePaths?.find((base) =>
    pathname.startsWith(`${base}/`)
  );
  if (!basePath) return null;

  // Empty segments are dropped so a version root matches with or without a
  // trailing slash: /docs/1secure/8_2 and /docs/1secure/8_2/ both redirect to
  // the product root.
  const [maybeVersion, ...restSegments] = pathname
    .slice(basePath.length + 1)
    .split('/')
    .filter(Boolean);
  if (!maybeVersion || !VERSION_SEGMENT_RE.test(maybeVersion)) return null;

  return restSegments.length > 0
    ? `${basePath}/${restSegments.join('/')}`
    : `${basePath}/`;
}
