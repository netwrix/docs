// Matches a version-style URL segment, e.g. "8_2", "12", "3_3_1".
const VERSION_SEGMENT_RE = /^\d+(?:_\d+)*$/;

// For a product that used to have multiple versions but now ships only a single,
// unversioned "current" version, an old link like /docs/<product>/8_2/<rest> is
// dead. If the unversioned equivalent /docs/<product>/<rest> exists, this returns
// its path so the caller can redirect there instead of showing a 404. Works for
// any old version number, since it strips whatever version-shaped segment is
// present rather than matching a specific hardcoded list.
export function findVersionlessRedirect(pathname, activeVersionsByProduct) {
  const match = pathname.match(/^\/docs\/([^/]+)\/(.+)$/);
  if (!match) return null;
  const [, productId, rest] = match;

  const versions = activeVersionsByProduct?.[productId];
  const isSingleCurrentVersionProduct =
    versions && versions.length === 1 && versions[0] === 'current';
  if (!isSingleCurrentVersionProduct) return null;

  const [maybeVersion, ...restSegments] = rest.split('/');
  if (!VERSION_SEGMENT_RE.test(maybeVersion) || restSegments.length === 0) return null;

  return `/docs/${productId}/${restSegments.join('/')}`;
}
