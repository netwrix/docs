// Redirects for the Threat Prevention 8.1 docs.
//
// The 8.1 pages moved into the standard documentation zones
// (gettingstarted/, configuration/, integrations/, ...) and the version root
// kept its address. The product's in-app help links and older bookmarks still
// use the old addresses, so every moved page maps to its new location, in its
// versioned and its unversioned form. Earlier versions (7.4-8.0) keep the old
// layout and are not redirected.

const VERSION_PREFIX = '/docs/threatprevention/8_1';
const UNVERSIONED_PREFIX = '/docs/threatprevention';

// 8.1 path before the zone reorganization -> current path (no leading slash).
// A page named after its folder is served at the folder address.
const MOVED_PAGES = {
  'admin/configuration/accessanalyzerconfiguration': 'configuration/accessanalyzerconfiguration',
  'admin/configuration/collectionmanager/dynamic': 'configuration/collectionmanager/dynamic',
  'admin/configuration/collectionmanager/listcollections': 'configuration/collectionmanager/listcollections',
  'admin/configuration/collectionmanager/overview': 'configuration/collectionmanager/overview',
  'admin/configuration/databasemaintenance/archive': 'configuration/databasemaintenance/archive',
  'admin/configuration/databasemaintenance/enable': 'configuration/databasemaintenance/enable',
  'admin/configuration/databasemaintenance/overview': 'configuration/databasemaintenance/overview',
  'admin/configuration/databasemaintenance/schedule': 'configuration/databasemaintenance/schedule',
  'admin/configuration/databasemaintenance/storedprocedures': 'configuration/databasemaintenance/storedprocedures',
  'admin/configuration/epesettings': 'configuration/epesettings',
  'admin/configuration/eventfilteringconfiguration': 'configuration/eventfilteringconfiguration',
  'admin/configuration/eventsdatabaseconfiguration': 'configuration/eventsdatabaseconfiguration',
  'admin/configuration/filemonitorsettings': 'configuration/filemonitorsettings',
  'admin/configuration/siemoutputviewer': 'configuration/siemoutputviewer',
  'admin/configuration/systemalerting/email': 'configuration/systemalerting/email',
  'admin/configuration/systemalerting/eventlog': 'configuration/systemalerting/eventlog',
  'admin/configuration/systemalerting/overview': 'configuration/systemalerting/overview',
  'admin/configuration/systemalerting/siem': 'configuration/systemalerting/siem',
  'admin/configuration/threatmanagerconfiguration': 'configuration/threatmanagerconfiguration',
  'admin/configuration/trusteddomainsblacklist': 'configuration/trusteddomainsblacklist',
  'admin/configuration/userroles/add': 'configuration/userroles/add',
  'admin/configuration/userroles/delete': 'configuration/userroles/delete',
  'admin/configuration/userroles/modify': 'configuration/userroles/modify',
  'admin/configuration/userroles/overview': 'configuration/userroles/overview',
  'api/collections': 'integrations/api/collections',
  'api/epe': 'integrations/api/epe',
  'api/loadmodule': 'integrations/api/loadmodule',
  'api/overview': 'integrations/api/overview',
  'api/policy': 'integrations/api/policy',
  'api/threatmanager': 'integrations/api/threatmanager',
  'eperestsite/accountmanagement': 'integrations/eperestsite/accountmanagement',
  'eperestsite/checkpassword': 'integrations/eperestsite/checkpassword',
  'eperestsite/login': 'integrations/eperestsite/login',
  'eperestsite/overview': 'integrations/eperestsite/overview',
  'siemdashboard/activedirectory/navigate': 'integrations/siemdashboard/activedirectory/navigate',
  'siemdashboard/activedirectory/navigate/activedirectorychanges': 'integrations/siemdashboard/activedirectory/navigate/activedirectorychanges',
  'siemdashboard/activedirectory/navigate/administratorauditing': 'integrations/siemdashboard/activedirectory/navigate/administratorauditing',
  'siemdashboard/activedirectory/navigate/authenticationattacks': 'integrations/siemdashboard/activedirectory/navigate/authenticationattacks',
  'siemdashboard/activedirectory/navigate/gpomonitoring': 'integrations/siemdashboard/activedirectory/navigate/gpomonitoring',
  'siemdashboard/activedirectory/navigate/ldap': 'integrations/siemdashboard/activedirectory/navigate/ldap',
  'siemdashboard/activedirectory/navigate/policyreporting': 'integrations/siemdashboard/activedirectory/navigate/policyreporting',
  'siemdashboard/activedirectory/navigate/userbehavioranalytics': 'integrations/siemdashboard/activedirectory/navigate/userbehavioranalytics',
  'siemdashboard/activedirectory/overview': 'integrations/siemdashboard/activedirectory/overview',
  'siemdashboard/overview': 'integrations/siemdashboard/overview',
  'siemdashboard/qradar/navigate': 'integrations/siemdashboard/qradar/navigate',
  'siemdashboard/qradar/navigate/about': 'integrations/siemdashboard/qradar/navigate/about',
  'siemdashboard/qradar/navigate/adchanges': 'integrations/siemdashboard/qradar/navigate/adchanges',
  'siemdashboard/qradar/navigate/administratorauditing': 'integrations/siemdashboard/qradar/navigate/administratorauditing',
  'siemdashboard/qradar/navigate/authenticationattacks': 'integrations/siemdashboard/qradar/navigate/authenticationattacks',
  'siemdashboard/qradar/navigate/gpomonitoring': 'integrations/siemdashboard/qradar/navigate/gpomonitoring',
  'siemdashboard/qradar/navigate/hostinvestigation': 'integrations/siemdashboard/qradar/navigate/hostinvestigation',
  'siemdashboard/qradar/navigate/ldap': 'integrations/siemdashboard/qradar/navigate/ldap',
  'siemdashboard/qradar/navigate/overview': 'integrations/siemdashboard/qradar/navigate/overview',
  'siemdashboard/qradar/navigate/policyreporting': 'integrations/siemdashboard/qradar/navigate/policyreporting',
  'siemdashboard/qradar/navigate/settings': 'integrations/siemdashboard/qradar/navigate/settings',
  'siemdashboard/qradar/navigate/userinvestigation': 'integrations/siemdashboard/qradar/navigate/userinvestigation',
  'siemdashboard/qradar/offenses': 'integrations/siemdashboard/qradar/offenses',
  'siemdashboard/qradar/overview': 'integrations/siemdashboard/qradar/overview',
  'siemdashboard/qradar/qidmap': 'integrations/siemdashboard/qradar/qidmap',
  'siemdashboard/threathunting/navigate': 'integrations/siemdashboard/threathunting/navigate',
  'siemdashboard/threathunting/navigate/perpetratorhunting': 'integrations/siemdashboard/threathunting/navigate/perpetratorhunting',
  'siemdashboard/threathunting/navigate/privilegecreepescalation': 'integrations/siemdashboard/threathunting/navigate/privilegecreepescalation',
  'siemdashboard/threathunting/navigate/sensitivedatahunting': 'integrations/siemdashboard/threathunting/navigate/sensitivedatahunting',
  'siemdashboard/threathunting/overview': 'integrations/siemdashboard/threathunting/overview',
  'solutions/activedirectory': 'gettingstarted/solutions/activedirectory',
  'solutions/epe': 'gettingstarted/solutions/epe',
  'solutions/exchange': 'gettingstarted/solutions/exchange',
  'solutions/filesystem': 'gettingstarted/solutions/filesystem',
  'solutions/ldap': 'gettingstarted/solutions/ldap',
  'solutions/overview': 'gettingstarted/solutions/overview',
};

const CURRENT_PAGES = new Set(Object.values(MOVED_PAGES));

// Pages named after their folder are section indexes, served with a trailing slash.
const SECTION_INDEXES = new Set([
  'integrations/siemdashboard/activedirectory/navigate',
  'integrations/siemdashboard/qradar/navigate',
  'integrations/siemdashboard/threathunting/navigate',
]);

export const threatPrevention81Redirects = Object.entries(MOVED_PAGES).flatMap(([oldPath, newPath]) => {
  if (CURRENT_PAGES.has(oldPath)) {
    throw new Error(`threatprevention-8.1 redirects: ${oldPath} is also a current page`);
  }
  const to = `${VERSION_PREFIX}/${newPath}${SECTION_INDEXES.has(newPath) ? '/' : ''}`;
  return [
    { from: `${VERSION_PREFIX}/${oldPath}`, to },
    { from: `${UNVERSIONED_PREFIX}/${oldPath}`, to },
  ];
});
