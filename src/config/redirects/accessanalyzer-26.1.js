// Redirects for the Access Analyzer 26.1 docs.
//
// Two generations of old addresses map onto the current pages:
// 1. The pre-reorganization 26.1 layout. The pages moved into the standard
//    documentation zones (getting-started/, requirements/, configuration/,
//    admin/, ...) and the version root kept its address. The product's
//    in-app help links still use these addresses, so MOVED_PAGES stays
//    until the webapp points at the new ones.
// 2. The `2601` version folder that preceded 26.1. Older bookmarks and the
//    help link of older product builds still point at those paths.
// Every old page maps somewhere, in its versioned and its unversioned form.

const VERSION_PREFIX = '/docs/accessanalyzer/26_1';
const LEGACY_VERSION_PREFIX = '/docs/accessanalyzer/2601';
const UNVERSIONED_PREFIX = '/docs/accessanalyzer';

// 26.1 path before the zone reorganization -> current path (no leading slash).
const MOVED_PAGES = {
  'agents':                                          'configuration/agents',
  'agents/agent-labels':                             'configuration/agents/agent-labels',
  'agents/deploy-agent':                             'configuration/agents/deploy-agent',
  'coming-from-access-analyzer-classic':             'getting-started/coming-from-access-analyzer-classic',
  'dashboards-reports':                              'admin/dashboards-reports',
  'dashboards-reports/dashboards':                   'admin/dashboards-reports/dashboards',
  'dashboards-reports/dashboards/active-directory':  'admin/dashboards-reports/dashboards/active-directory',
  'dashboards-reports/dashboards/data-security':     'admin/dashboards-reports/dashboards/data-security',
  'dashboards-reports/reports':                      'admin/dashboards-reports/reports',
  'dashboards-reports/reports/compliance':           'admin/dashboards-reports/reports/compliance',
  'dashboards-reports/reports/data':                 'admin/dashboards-reports/reports/data',
  'dashboards-reports/reports/identity':             'admin/dashboards-reports/reports/identity',
  'guides':                                          'getting-started/guides',
  'guides/active-directory':                         'getting-started/guides/active-directory',
  'guides/entra-id':                                 'getting-started/guides/entra-id',
  'guides/sharepoint-online':                        'getting-started/guides/sharepoint-online',
  'guides/smb-file-servers':                         'getting-started/guides/smb-file-servers',
  'install/requirements':                            'requirements',
  'install/tls-certificate-requirements':            'requirements/tls-certificate-requirements',
  'key-concepts':                                    'getting-started/key-concepts',
  'known-limitations':                               'getting-started/known-limitations',
  'scans':                                           'admin/scans',
  'scans/scan-executions':                           'admin/scans/scan-executions',
  'scans/scan-types':                                'admin/scans/scan-types',
  'scans/schedules':                                 'admin/scans/schedules',
  'sensitive-data-patterns':                         'configuration/sensitive-data-patterns',
  'sensitive-data-patterns/built-in-patterns':       'configuration/sensitive-data-patterns/built-in-patterns',
  'sensitive-data-patterns/custom-patterns':         'configuration/sensitive-data-patterns/custom-patterns',
  'sensitive-data-patterns/pattern-groups':          'configuration/sensitive-data-patterns/pattern-groups',
  'service-accounts':                                'configuration/service-accounts',
  'service-accounts/client-id-certificate':          'configuration/service-accounts/client-id-certificate',
  'service-accounts/client-id-secret':               'configuration/service-accounts/client-id-secret',
  'service-accounts/ssh-key':                        'configuration/service-accounts/ssh-key',
  'service-accounts/username-password':              'configuration/service-accounts/username-password',
  'settings':                                        'configuration/settings',
  'settings/application':                            'configuration/settings/application',
  'settings/backups':                                'configuration/settings/backups',
  'settings/feature-flags':                          'configuration/settings/feature-flags',
  'settings/single-sign-on':                         'configuration/settings/single-sign-on',
  'settings/system-logs':                            'configuration/settings/system-logs',
  'settings/unlock-a-user-without-admin-access':     'admin/unlock-a-user-without-admin-access',
  'settings/users':                                  'admin/users',
  'sources':                                         'configuration/sources',
  'sources/active-directory':                        'configuration/sources/active-directory',
  'sources/entra-id':                                'configuration/sources/entra-id',
  'sources/import-sources':                          'configuration/sources/import-sources',
  'sources/labels':                                  'configuration/sources/labels',
  'sources/microsoft-365':                           'configuration/sources/microsoft-365',
  'sources/smb-file-servers':                        'configuration/sources/smb-file-servers',
  'whats-new':                                       'release-notes',
  'guides/microsoft-365':                            'getting-started/guides/sharepoint-online',
};

// Page of the old `2601` folder -> current path (no leading slash; '' is the version root).
const LEGACY_PAGES = {
  '':                                                        '',
  'keyconcepts':                                             'getting-started/key-concepts',
  'gettingstarted/active-directory/active-directory':        'getting-started/guides/active-directory',
  'gettingstarted/active-directory/set-up-source-group':     'getting-started/guides/active-directory',
  'gettingstarted/active-directory/scanning-options':        'getting-started/guides/active-directory',
  'gettingstarted/active-directory/schema-reference':        'configuration/sources/active-directory',
  'gettingstarted/active-directory/reports':                 'admin/dashboards-reports/reports/identity',
  'gettingstarted/entra-id/entra-id':                        'getting-started/guides/entra-id',
  'gettingstarted/entra-id/set-up-source-group':             'getting-started/guides/entra-id',
  'gettingstarted/entra-id/scanning-options':                'getting-started/guides/entra-id',
  'gettingstarted/entra-id/schema-reference':                'configuration/sources/entra-id',
  'gettingstarted/entra-id/reports':                         'admin/dashboards-reports/reports/identity',
  'gettingstarted/file-servers/file-servers':                'getting-started/guides/smb-file-servers',
  'gettingstarted/file-servers/set-up-source-group':         'getting-started/guides/smb-file-servers',
  'gettingstarted/file-servers/scanning-options':            'getting-started/guides/smb-file-servers',
  'gettingstarted/file-servers/schema-reference':            'configuration/sources/smb-file-servers',
  'gettingstarted/file-servers/reports':                     'admin/dashboards-reports/reports/data',
  'gettingstarted/sharepoint-online/sharepoint-online':      'getting-started/guides/sharepoint-online',
  'gettingstarted/sharepoint-online/set-up-source-group':    'getting-started/guides/sharepoint-online',
  'gettingstarted/sharepoint-online/scanning-options':       'getting-started/guides/sharepoint-online',
  'gettingstarted/sharepoint-online/schema-reference':       'configuration/sources/microsoft-365',
  'gettingstarted/sharepoint-online/reports':                'admin/dashboards-reports/reports/data',
  'install/prerequisites':                                   'requirements',
  'install/system/requirements':                             'requirements',
  'install/system/network':                                  'requirements',
  'install/system/certificates':                             'requirements',
  'install/system/kubernetes':                               'requirements',
  'install/security':                                        'requirements',
  'install/quickinstall':                                    'install/run-the-installer',
  'install/install-commands':                                'install/installer-reference',
  'install/uninstall':                                       'install/installer-reference',
  'install/postinstall':                                     'install/first-sign-in',
  'install/identity-provider':                               'configuration/settings/single-sign-on',
  'connectors/activedirectory':                              'configuration/sources/active-directory',
  'connectors/entra-id/overview':                            'configuration/sources/entra-id',
  'connectors/entra-id/entra-requirements':                  'configuration/sources/entra-id',
  'connectors/entra-id/app-registration-secret':             'configuration/service-accounts/client-id-secret',
  'connectors/file-servers/cifs':                            'configuration/sources/smb-file-servers',
  'connectors/file-servers/netapp':                          'configuration/sources/smb-file-servers',
  'connectors/file-servers/isilon-powerscale':               'configuration/sources/smb-file-servers',
  'connectors/file-servers/celerra':                         'configuration/sources/smb-file-servers',
  'connectors/file-servers/dell-unity':                      'configuration/sources/smb-file-servers',
  'connectors/file-servers/vnx':                             'configuration/sources/smb-file-servers',
  'connectors/sharepoint-online/overview':                   'configuration/sources/microsoft-365',
  'connectors/sharepoint-online/azure-permissions':          'configuration/sources/microsoft-365',
  'connectors/sharepoint-online/tenant-certificate-config':  'configuration/service-accounts/client-id-certificate',
  'configurations/activity-monitor-integration':             'integrations/netwrix-activity-monitor',
  'configurations/application-settings':                     'configuration/settings/application',
  'configurations/identity-provider':                        'configuration/settings/single-sign-on',
  'configurations/logs':                                     'configuration/settings/system-logs',
  'configurations/sensitive-data':                           'configuration/sensitive-data-patterns',
  'configurations/users':                                    'admin/users',
  'configurations/service-accounts/overview':                'configuration/service-accounts',
  'configurations/service-accounts/username-password':       'configuration/service-accounts/username-password',
  'configurations/service-accounts/client-id-secret':        'configuration/service-accounts/client-id-secret',
  'configurations/service-accounts/client-id-certificate':   'configuration/service-accounts/client-id-certificate',
  'configurations/service-accounts/ssh-username-key':        'configuration/service-accounts/ssh-key',
  'configurations/source-groups/source-groups':              'configuration/sources/labels',
  'configurations/source-groups/scans':                      'admin/scans',
  'configurations/source-groups/scan-executions':            'admin/scans/scan-executions',
  'configurations/source-groups/scanners/overview':          'configuration/agents',
  'configurations/source-groups/scanners/requirements':      'configuration/agents',
  'configurations/source-groups/scanners/deploy-scanner':    'configuration/agents/deploy-agent',
  'configurations/source-groups/scanners/manage-scanners':   'configuration/agents',
  'configurations/source-groups/scanners/best-practices':    'configuration/agents',
  'dashboards-reports/my-reports':                           'admin/dashboards-reports',
  'dashboards-reports/reports':                              'admin/dashboards-reports/reports',
};

// Section index pages (index.md) are served with a trailing slash.
const SECTION_INDEXES = new Set([
  'admin/dashboards-reports',
  'admin/scans',
  'configuration/agents',
  'configuration/sensitive-data-patterns',
  'configuration/service-accounts',
  'configuration/settings',
  'configuration/sources',
  'getting-started/guides',
  'install',
  'integrations',
  'release-notes',
  'requirements',
]);

function join(prefix, rest) {
  return rest ? `${prefix}/${rest}` : prefix;
}

function target(newPath) {
  const path = join(VERSION_PREFIX, newPath);
  return SECTION_INDEXES.has(newPath) ? `${path}/` : path;
}

// createRedirects() in docusaurus.config.js already aliases every current page
// at its unversioned address, so an old path that is also a current page gets
// no unversioned redirect of its own.
const CURRENT_PAGES = new Set([...Object.values(MOVED_PAGES), ...Object.values(LEGACY_PAGES)]);

function redirectsFor(prefix, pages) {
  return Object.entries(pages).flatMap(([oldPath, newPath]) => {
    const to = target(newPath);
    const entries = [{ from: join(prefix, oldPath), to }];
    if (oldPath && !CURRENT_PAGES.has(oldPath)) {
      entries.push({ from: join(UNVERSIONED_PREFIX, oldPath), to });
    }
    return entries;
  });
}

// The same unversioned address can come from both maps; it must point one way.
function dedupe(redirects) {
  const byFrom = new Map();
  for (const { from, to } of redirects) {
    const seen = byFrom.get(from);
    if (seen !== undefined && seen !== to) {
      throw new Error(`accessanalyzer-26.1 redirects: ${from} maps to both ${seen} and ${to}`);
    }
    byFrom.set(from, to);
  }
  return [...byFrom].map(([from, to]) => ({ from, to }));
}

export const accessAnalyzer261Redirects = dedupe([
  ...redirectsFor(VERSION_PREFIX, MOVED_PAGES),
  ...redirectsFor(LEGACY_VERSION_PREFIX, LEGACY_PAGES),
]);
