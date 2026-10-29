// Only this host should appear in search results. docs-dev.netwrix.com is
// built from the same sources on its own deploy (dev branch, development
// environment), so it is told not to be indexed. Any host not listed here,
// including local builds, is treated the same way.
const INDEXABLE_HOSTNAMES = ['docs.netwrix.com'];

export function isIndexableSite(siteUrl) {
  return INDEXABLE_HOSTNAMES.includes(new URL(siteUrl).hostname);
}
