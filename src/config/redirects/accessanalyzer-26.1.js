// Redirects from retired Access Analyzer 26.1 pages, including those under the
// old `2601` version folder, to their replacements in the reorganized 26.1 docs.
// The product's in-app help links and older bookmarks still point at the old
// paths, so every old page maps somewhere.

const OLD_VERSION_PREFIX = '/docs/accessanalyzer/2601';
const NEW_VERSION_PREFIX = '/docs/accessanalyzer/26_1';
const UNVERSIONED_PREFIX = '/docs/accessanalyzer';

// old path (no leading slash) -> new path (no leading slash; '' is the section index)
const PAGE_MAP = {
  '': '',
  keyconcepts: 'key-concepts',

  'gettingstarted/active-directory/active-directory': 'guides/active-directory',
  'gettingstarted/active-directory/set-up-source-group': 'guides/active-directory',
  'gettingstarted/active-directory/scanning-options': 'guides/active-directory',
  'gettingstarted/active-directory/schema-reference': 'sources/active-directory',
  'gettingstarted/active-directory/reports': 'reporting/netwrix-reports',
  'gettingstarted/entra-id/entra-id': 'guides/entra-id',
  'gettingstarted/entra-id/set-up-source-group': 'guides/entra-id',
  'gettingstarted/entra-id/scanning-options': 'guides/entra-id',
  'gettingstarted/entra-id/schema-reference': 'sources/entra-id',
  'gettingstarted/entra-id/reports': 'reporting/netwrix-reports',
  'gettingstarted/file-servers/file-servers': 'guides/smb-file-servers',
  'gettingstarted/file-servers/set-up-source-group': 'guides/smb-file-servers',
  'gettingstarted/file-servers/scanning-options': 'guides/smb-file-servers',
  'gettingstarted/file-servers/schema-reference': 'sources/smb-file-servers',
  'gettingstarted/file-servers/reports': 'reporting/netwrix-reports',
  'gettingstarted/sharepoint-online/sharepoint-online': 'guides/microsoft-365',
  'gettingstarted/sharepoint-online/set-up-source-group': 'guides/microsoft-365',
  'gettingstarted/sharepoint-online/scanning-options': 'guides/microsoft-365',
  'gettingstarted/sharepoint-online/schema-reference': 'sources/microsoft-365',
  'gettingstarted/sharepoint-online/reports': 'reporting/netwrix-reports',

  'install/prerequisites': 'install/requirements',
  'install/system/requirements': 'install/requirements',
  'install/system/network': 'install/requirements',
  'install/system/certificates': 'install/requirements',
  'install/system/kubernetes': 'install/requirements',
  'install/security': 'install/requirements',
  'install/quickinstall': 'install/run-the-installer',
  'install/install-commands': 'install/installer-reference',
  'install/uninstall': 'install/installer-reference',
  'install/postinstall': 'install/first-sign-in',
  'install/identity-provider': 'settings/single-sign-on',

  'connectors/activedirectory': 'sources/active-directory',
  'connectors/entra-id/overview': 'sources/entra-id',
  'connectors/entra-id/entra-requirements': 'sources/entra-id',
  'connectors/entra-id/app-registration-secret': 'service-accounts/client-id-secret',
  'connectors/file-servers/cifs': 'sources/smb-file-servers',
  'connectors/file-servers/netapp': 'sources/smb-file-servers',
  'connectors/file-servers/isilon-powerscale': 'sources/smb-file-servers',
  'connectors/file-servers/celerra': 'sources/smb-file-servers',
  'connectors/file-servers/dell-unity': 'sources/smb-file-servers',
  'connectors/file-servers/vnx': 'sources/smb-file-servers',
  'connectors/sharepoint-online/overview': 'sources/microsoft-365',
  'connectors/sharepoint-online/azure-permissions': 'sources/microsoft-365',
  'connectors/sharepoint-online/tenant-certificate-config': 'service-accounts/client-id-certificate',

  'configurations/activity-monitor-integration': 'integrations/netwrix-activity-monitor',
  'configurations/application-settings': 'settings/application',
  'configurations/identity-provider': 'settings/single-sign-on',
  'configurations/logs': 'settings/system-logs',
  'configurations/sensitive-data': 'sensitive-data-patterns',
  'configurations/users': 'settings/users',
  'configurations/service-accounts/overview': 'service-accounts',
  'configurations/service-accounts/username-password': 'service-accounts/username-password',
  'configurations/service-accounts/client-id-secret': 'service-accounts/client-id-secret',
  'configurations/service-accounts/client-id-certificate': 'service-accounts/client-id-certificate',
  'configurations/service-accounts/ssh-username-key': 'service-accounts/ssh-key',
  'configurations/source-groups/source-groups': 'sources/labels',
  'configurations/source-groups/scans': 'scans',
  'configurations/source-groups/scan-executions': 'scans/scan-executions',
  'configurations/source-groups/scanners/overview': 'agents',
  'configurations/source-groups/scanners/requirements': 'agents',
  'configurations/source-groups/scanners/deploy-scanner': 'agents/deploy-agent',
  'configurations/source-groups/scanners/manage-scanners': 'agents',
  'configurations/source-groups/scanners/best-practices': 'agents',

  'dashboards-reports/my-reports': 'reporting',
  'dashboards-reports/reports': 'reporting/netwrix-reports',
};

const MOVED_26_1_PAGES = {
  'dashboards-reports': 'reporting',
  'dashboards-reports/dashboards': 'reporting/netwrix-reports',
  'dashboards-reports/dashboards/data-security': 'reporting/netwrix-reports',
  'dashboards-reports/dashboards/active-directory': 'reporting/netwrix-reports',
  'dashboards-reports/reports': 'reporting/netwrix-reports',
  'dashboards-reports/reports/data': 'reporting/netwrix-reports',
  'dashboards-reports/reports/identity': 'reporting/netwrix-reports',
  'dashboards-reports/reports/compliance': 'reporting/netwrix-reports',
};

// Section index pages (index.md or a generated index) are served with a trailing slash.
const SECTION_INDEXES = new Set([
  'agents',
  'reporting',
  'scans',
  'sensitive-data-patterns',
  'service-accounts',
]);

function join(prefix, rest) {
  return rest ? `${prefix}/${rest}` : prefix;
}

function target(newPath) {
  const path = join(NEW_VERSION_PREFIX, newPath);
  return SECTION_INDEXES.has(newPath) ? `${path}/` : path;
}

// Old paths whose unversioned form (/docs/accessanalyzer/<old>) is also a valid
// new page, which createRedirects() already generates.
const UNVERSIONED_COLLISIONS = new Set(Object.values(PAGE_MAP));

const oldVersionRedirects = Object.entries(PAGE_MAP).flatMap(([oldPath, newPath]) => {
  const to = target(newPath);
  const entries = [{ from: join(OLD_VERSION_PREFIX, oldPath), to }];
  if (oldPath && !UNVERSIONED_COLLISIONS.has(oldPath)) {
    entries.push({ from: join(UNVERSIONED_PREFIX, oldPath), to });
  }
  return entries;
});

const movedPageRedirects = Object.entries(MOVED_26_1_PAGES).flatMap(([oldPath, newPath]) => {
  const to = target(newPath);
  return [join(NEW_VERSION_PREFIX, oldPath), join(UNVERSIONED_PREFIX, oldPath)].map(from => ({ from, to }));
});

const seenFromPaths = new Set();

export const accessAnalyzer261Redirects = [...oldVersionRedirects, ...movedPageRedirects].filter(({ from }) => {
  if (seenFromPaths.has(from)) return false;
  seenFromPaths.add(from);
  return true;
});
