// Redirects for the Identity Recovery 3.1 docs.
//
// The 3.1 pages moved into the standard documentation zones
// (gettingstarted/, configuration/, install/, ...) and the version root kept
// its address. The product's in-app help links and older bookmarks still use
// the old addresses, so every moved page maps to its new location, in its
// versioned and its unversioned form.

const VERSION_PREFIX = '/docs/identityrecovery/3_1';
const UNVERSIONED_PREFIX = '/docs/identityrecovery';

// 3.1 path before the zone reorganization -> current path (no leading slash).
const MOVED_PAGES = {
  'usecases':                          'gettingstarted/usecases',
  'admin/configuremfa':                'configuration/configuremfa',
  'admin/configuration/overview':      'configuration/overview',
  'admin/configuration/domain':        'configuration/domain',
  'admin/configuration/forest':        'configuration/forest',
  'admin/configuration/entraid':       'configuration/entraid',
  'admin/configuration/okta':          'configuration/okta',
  'admin/configuration/azurestorage':  'configuration/azurestorage',
  'admin/configuration/dataretention': 'configuration/dataretention',
  'admin/configuration/notifications': 'configuration/notifications',
  'admin/configuration/roles':         'configuration/roles',
  'admin/configuration/integration':   'configuration/integration',
  'admin/configuration/licensing':     'configuration/licensing',
};

export const identityRecovery31Redirects = Object.entries(MOVED_PAGES).flatMap(([oldPath, newPath]) => {
  const to = `${VERSION_PREFIX}/${newPath}`;
  return [
    { from: `${VERSION_PREFIX}/${oldPath}`, to },
    { from: `${UNVERSIONED_PREFIX}/${oldPath}`, to },
  ];
});
