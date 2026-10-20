// Redirects for Netwrix Privilege Secure for Discovery.
//
// The product used to be published under a version folder (`2.22`, URL segment
// `2_22`). It is now a single unversioned set at `/docs/privilegesecurediscovery`.
// Release notes, Community posts, and bookmarks still link to the `2_22` addresses,
// and crawlers need a real redirect file, not the client-side fallback in
// `src/utils/versionlessRedirect.js`, which only helps readers in a browser.

const PRODUCT_PATH = '/docs/privilegesecurediscovery';
const LEGACY_PREFIX = `${PRODUCT_PATH}/2_22`;

// Called from `createRedirects` in docusaurus.config.js with every route that
// exists in the build. For each page under the product root it returns the
// matching `2_22` address, so every page, category, tag, and KB route is covered
// by construction and an old address can never point at a page that does not exist.
export function privilegeSecureDiscoveryLegacyPaths(existingPath) {
  if (existingPath === PRODUCT_PATH || existingPath === `${PRODUCT_PATH}/`) {
    return [LEGACY_PREFIX];
  }
  if (existingPath.startsWith(`${PRODUCT_PATH}/`) && !existingPath.startsWith(`${LEGACY_PREFIX}`)) {
    return [`${LEGACY_PREFIX}${existingPath.slice(PRODUCT_PATH.length)}`];
  }
  return undefined;
}

// Pages whose address changes when the docs are reorganized into zones. Add one
// line per moved or renamed page: old path -> new path, both relative to the
// product root, with no leading slash and no `.md`. '' is the product index.
// Each entry produces redirects from BOTH the unversioned address and the `2_22`
// address straight to the final page, so there is never a chain of two hops.
// Keep a page here only if its address actually changed; unchanged pages are
// already handled by privilegeSecureDiscoveryLegacyPaths above.
const PAGE_MAP = {
  // 'installation/dockersecrets': 'install/docker-secrets',
};

export const privilegeSecureDiscoveryRedirects = Object.entries(PAGE_MAP).flatMap(([oldPath, newPath]) => {
  const to = newPath ? `${PRODUCT_PATH}/${newPath}` : PRODUCT_PATH;
  const fromUnversioned = oldPath ? `${PRODUCT_PATH}/${oldPath}` : PRODUCT_PATH;
  const fromLegacy = oldPath ? `${LEGACY_PREFIX}/${oldPath}` : LEGACY_PREFIX;
  return [
    { from: fromUnversioned, to },
    { from: fromLegacy, to },
  ];
});
