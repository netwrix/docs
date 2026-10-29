// Redirects for the Threat Manager 3.4 docs.
//
// 3.4 uses the standard documentation zones (gettingstarted/, migration/,
// configuration/, integrations/, troubleshooting/, ...), the same layout as
// the reorganized 3.3. Every page that sat elsewhere in the older layout maps
// to its zone location, in its versioned form (in-app help built against the
// older paths) and its unversioned form. 3.4 is the default version, so the
// unversioned addresses redirect here; threatmanager-3.3.js keeps only its
// versioned redirects.

const VERSION_PREFIX = '/docs/threatmanager/3_4';
const UNVERSIONED_PREFIX = '/docs/threatmanager';

// Path in the older layout -> current path (no leading slash).
// A page named after its folder is served at the folder address.
const MOVED_PAGES = {
  'administration/configuration/integrations/activedirectorysync': 'configuration/integrations/activedirectorysync',
  'administration/configuration/integrations/apptoken': 'configuration/integrations/apptoken',
  'administration/configuration/integrations/credentialprofile': 'configuration/integrations/credentialprofile',
  'administration/configuration/integrations/email': 'configuration/integrations/email',
  'administration/configuration/integrations/entraidsync': 'configuration/integrations/entraidsync',
  'administration/configuration/integrations/foldersettings': 'configuration/integrations/foldersettings',
  'administration/configuration/integrations/netwrixintegrations': 'integrations/netwrixintegrations',
  'administration/configuration/integrations/overview': 'configuration/integrations/overview',
  'administration/configuration/integrations/page': 'configuration/integrations/page',
  'administration/configuration/integrations/page/openid': 'configuration/integrations/page/openid',
  'administration/configuration/integrations/page/openid/entraidopenid': 'configuration/integrations/page/openid/entraidopenid',
  'administration/configuration/integrations/page/radius': 'configuration/integrations/page/radius',
  'administration/configuration/integrations/page/saml': 'configuration/integrations/page/saml',
  'administration/configuration/integrations/siem': 'integrations/siem',
  'administration/configuration/integrations/tagmanagement': 'configuration/integrations/tagmanagement',
  'administration/configuration/overview': 'configuration/overview',
  'administration/configuration/policies/honeytoken': 'configuration/policies/honeytoken',
  'administration/configuration/policies/overview': 'configuration/policies/overview',
  'administration/configuration/policies/policiesconfiguration': 'configuration/policies/policiesconfiguration',
  'administration/configuration/systemhealth/actionqueue': 'administration/systemhealth/actionqueue',
  'administration/configuration/systemhealth/agents': 'administration/systemhealth/agents',
  'administration/configuration/systemhealth/backlog': 'administration/systemhealth/backlog',
  'administration/configuration/systemhealth/overview': 'administration/systemhealth/overview',
  'administration/configuration/systemhealth/services': 'administration/systemhealth/services',
  'administration/configuration/systemsettings/about': 'configuration/systemsettings/about',
  'administration/configuration/systemsettings/auditing': 'configuration/systemsettings/auditing',
  'administration/configuration/systemsettings/licensing': 'configuration/systemsettings/licensing',
  'administration/configuration/systemsettings/overview': 'configuration/systemsettings/overview',
  'administration/configuration/systemsettings/systemjobs': 'configuration/systemsettings/systemjobs',
  'administration/configuration/systemsettings/useraccess': 'configuration/systemsettings/useraccess',
  'administration/configuration/threatdetection': 'configuration/threatdetection',
  'administration/configuration/threatdetection/threatconfiguration': 'configuration/threatdetection/threatconfiguration',
  'administration/configuration/threatresponse': 'configuration/threatresponse',
  'administration/troubleshooting/log': 'troubleshooting/log',
  'administration/troubleshooting/overview': 'troubleshooting/overview',
  'administration/troubleshooting/updatepasswords': 'troubleshooting/updatepasswords',
  'install/integration/accessanalyzer': 'configuration/netwrix/accessanalyzer',
  'install/integration/activitymonitor': 'configuration/netwrix/activitymonitor',
  'install/integration/overview': 'configuration/netwrix/overview',
  'install/integration/threatprevention': 'configuration/netwrix/threatprevention',
  'install/integration/threatprevention/threatmanagerconfiguration': 'configuration/netwrix/threatprevention/threatmanagerconfiguration',
  'install/upgrade/migrate': 'migration/migrate',
  'install/upgrade/upgrade_pg14_to_pg18': 'migration/upgrade_pg14_to_pg18',
  'threats/activedirectory': 'gettingstarted/threattypes/activedirectory',
  'threats/certificateservices': 'gettingstarted/threattypes/certificateservices',
  'threats/custom': 'gettingstarted/threattypes/custom',
  'threats/entraid': 'gettingstarted/threattypes/entraid',
  'threats/filesystem': 'gettingstarted/threattypes/filesystem',
  'threats/general': 'gettingstarted/threattypes/general',
  'threats/overview': 'gettingstarted/threattypes/overview',
};

const CURRENT_PAGES = new Set(Object.values(MOVED_PAGES));

// Pages named after their folder are section indexes, served with a trailing slash.
const SECTION_INDEXES = new Set([
  'configuration/integrations/page',
  'configuration/integrations/page/openid',
  'configuration/netwrix/threatprevention',
  'configuration/threatdetection',
]);

export const threatManager34Redirects = Object.entries(MOVED_PAGES).flatMap(([oldPath, newPath]) => {
  if (CURRENT_PAGES.has(oldPath)) {
    throw new Error(`threatmanager-3.4 redirects: ${oldPath} is also a current page`);
  }
  const to = `${VERSION_PREFIX}/${newPath}${SECTION_INDEXES.has(newPath) ? '/' : ''}`;
  return [
    { from: `${VERSION_PREFIX}/${oldPath}`, to },
    { from: `${UNVERSIONED_PREFIX}/${oldPath}`, to },
  ];
});
