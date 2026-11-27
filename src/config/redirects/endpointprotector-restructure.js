// Redirects for the Endpoint Protector (EPP) restructure into the standard documentation
// zones. Each entry maps an old address to the page's new location. EPP is a
// single-version product, so addresses carry no version segment.

const PREFIX = '/docs/endpointprotector';

// old path (relative to the product) -> new path
const MOVED_PAGES = {
  'admin/agent': 'configuration/eppclients/agent',
  'admin/cap_module/capai': 'configuration/cap_module/capai',
  'admin/cap_module/capmodule': 'configuration/cap_module/capmodule',
  'admin/cap_module/cappolicies': 'configuration/cap_module/cappolicies',
  'admin/cap_module/contentdetection': 'configuration/cap_module/contentdetection',
  'admin/cap_module/deeppacket': 'configuration/cap_module/deeppacket',
  'admin/cap_module/newoutlook': 'configuration/cap_module/newoutlook',
  'admin/cap_module/usecases': 'configuration/cap_module/usecases',
  'admin/dc_module/customclasses': 'configuration/dc_module/customclasses',
  'admin/dc_module/dcmodule': 'configuration/dc_module/dcmodule',
  'admin/dc_module/devicesandcomputers': 'configuration/dc_module/devicesandcomputers',
  'admin/dc_module/globalrights': 'configuration/dc_module/globalrights',
  'admin/dc_module/globalsettings': 'configuration/dc_module/globalsettings',
  'admin/dc_module/usersandgroups': 'configuration/dc_module/usersandgroups',
  'admin/denylistsallowlists/allowlists': 'configuration/denylistsallowlists/allowlists',
  'admin/denylistsallowlists/denylists': 'configuration/denylistsallowlists/denylists',
  'admin/denylistsallowlists/fingerprinting': 'configuration/denylistsallowlists/fingerprinting',
  'admin/denylistsallowlists/overview': 'configuration/denylistsallowlists/overview',
  'admin/denylistsallowlists/urlcategories': 'configuration/denylistsallowlists/urlcategories',
  'admin/directoryservices': 'integrations/directoryservices',
  'admin/directoryservices/scimapi': 'integrations/directoryservices/scimapi',
  'admin/ed_module/edmodule': 'configuration/ed_module/edmodule',
  'admin/ed_module/edpolicies': 'configuration/ed_module/edpolicies',
  'admin/ed_module/edscanning': 'configuration/ed_module/edscanning',
  'admin/ed_module/edscanresults': 'configuration/ed_module/edscanresults',
  'admin/ee_module/eemodule': 'configuration/ee_module/eemodule',
  'admin/epp_rest_api/eppapi': 'integrations/epp_rest_api/eppapi',
  'admin/epp_rest_api/eppapispecification': 'integrations/epp_rest_api/eppapispecification',
  'admin/systemconfiguration/apiclients': 'integrations/epp_rest_api/apiclients',
  'admin/systemconfiguration/eppclientsmigration': 'configuration/eppclients/eppclientsmigration',
  'install/migrationprocedure/bestpractices': 'migrationprocedure/bestpractices',
  'install/migrationprocedure/clientupgrade': 'migrationprocedure/clientupgrade',
  'install/migrationprocedure/faq': 'migrationprocedure/faq',
  'install/migrationprocedure/migration-current-image': 'migrationprocedure/migration-current-image',
  'install/migrationprocedure/migration-legacy-5x': 'migrationprocedure/migration-legacy-5x',
  'install/migrationprocedure/migrationguide': 'migrationprocedure/migrationguide',
  'install/migrationprocedure/troubleshooting': 'migrationprocedure/troubleshooting',
  'requirements/components': 'gettingstarted/components',
};

export const endpointProtectorRestructureRedirects = Object.entries(MOVED_PAGES).map(
  ([oldPath, newPath]) => ({ from: `${PREFIX}/${oldPath}`, to: `${PREFIX}/${newPath}` }),
);
