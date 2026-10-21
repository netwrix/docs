// Redirects for Netwrix Privilege Secure for Discovery.
//
// The product used to be published under a version folder (`2.22`, URL segment
// `2_22`) and organized by old section names. It is now one unversioned set at
// `/docs/privilegesecurediscovery`, organized into the standard zones.
// Release notes, Community posts, and bookmarks still link to the old addresses,
// and crawlers need a real redirect file. The client-side fallback in
// `src/utils/versionlessRedirect.js` only helps readers in a browser.

const PRODUCT_PATH = '/docs/privilegesecurediscovery';
const LEGACY_PREFIX = `${PRODUCT_PATH}/2_22`;

// Pages whose address did not change in the reorganization. Their only old
// address is the `2_22` one, which privilegeSecureDiscoveryLegacyPaths covers.
const UNCHANGED_PAGES = new Set(["integrations/edr/carbonblack", "integrations/edr/crowdstrike", "integrations/edr/sentinelone", "integrations/edr/tanium", "integrations/siem/logs", "requirements/overview"]);

// Called from `createRedirects` in docusaurus.config.js with every route that
// exists in the build. It returns the `2_22` address for the product index, for
// each page whose address did not change, and for each KB article, so an old
// address can never point at a page that does not exist. Moved pages are
// handled by PAGE_MAP below.
export function privilegeSecureDiscoveryLegacyPaths(existingPath) {
  if (existingPath === PRODUCT_PATH || existingPath === `${PRODUCT_PATH}/`) {
    return [LEGACY_PREFIX];
  }
  if (!existingPath.startsWith(`${PRODUCT_PATH}/`)) return undefined;
  const rest = existingPath.slice(PRODUCT_PATH.length + 1).replace(/\/$/, '');
  if (UNCHANGED_PAGES.has(rest) || rest.startsWith('kb/')) {
    return [`${LEGACY_PREFIX}/${rest}`];
  }
  return undefined;
}

// Old page path -> final page path, both relative to the product root, with no
// leading slash and no `.md`. Includes pages that were merged or removed, which
// point at the page that replaced them. Each entry produces a redirect from BOTH
// the old unversioned address and the old `2_22` address straight to the final
// page, so there is never a chain of two hops. Add a line here whenever a page
// moves or is renamed again.
const PAGE_MAP = {
  "kb/system-configuration-and-requirements/generate-license-counts-with-cli-command": "kb",
  "administration/configuration/accountinventorycolors": "configuration/interface/account-inventory-colors",
  "administration/configuration/addadomain": "configuration/domains-and-ad/add-a-domain",
  "administration/configuration/addcertificateauthority": "appendix/legacy-iso/add-a-certificate-authority",
  "administration/configuration/adfailover": "configuration/domains-and-ad/directory-server-failover",
  "administration/configuration/advancedfields": "configuration/bulk-onboarding/report-and-update-systems",
  "administration/configuration/applyserviceaccount": "configuration/domains-and-ad/apply-a-service-account",
  "administration/configuration/azuresso": "integrations/microsoft-entra-id/saml-sso",
  "administration/configuration/certificatesslfiles": "configuration/certificates/certificate-files",
  "administration/configuration/changepasswords": "appendix/legacy-iso/change-passwords",
  "administration/configuration/configureadfs": "configuration/authentication-and-sso/saml-sso-reference",
  "administration/configuration/duoaccessgateway": "configuration/authentication-and-sso/duo",
  "administration/configuration/duohostedsso": "configuration/authentication-and-sso/duo",
  "administration/configuration/gpos": "configuration/domains-and-ad/group-policy-objects",
  "administration/configuration/jitasessionduration": "configuration/interface/jita-session-duration",
  "administration/configuration/linux": "configuration/endpoint-preparation/linux-registration-modes",
  "administration/configuration/linuxandad": "configuration/endpoint-preparation/linux-with-active-directory",
  "administration/configuration/linuxsimplified2.18+": "configuration/endpoint-preparation/linux-simplified-registration",
  "administration/configuration/logchanges2.20": "integrations/siem/logs",
  "administration/configuration/microsoftentraid/directorysynchronization": "integrations/microsoft-entra-id/directory-synchronization",
  "administration/configuration/microsoftentraid/endpointoperations": "integrations/microsoft-entra-id/endpoint-operations",
  "administration/configuration/microsoftentraid/overview": "integrations/microsoft-entra-id/overview",
  "administration/configuration/microsoftentraid/samlsso": "integrations/microsoft-entra-id/saml-sso",
  "administration/configuration/microsoftentraid/validationandtroubleshooting": "integrations/microsoft-entra-id/validation-and-troubleshooting",
  "administration/configuration/oampasswordconfig": "configuration/endpoint-preparation/oam-password-configuration",
  "administration/configuration/oktaintegration": "configuration/authentication-and-sso/okta",
  "administration/configuration/quickstartscript": "configuration/bulk-onboarding/install-the-quickstart-tools",
  "administration/configuration/radius": "configuration/authentication-and-sso/radius",
  "administration/configuration/removepersistence": "configuration/domains-and-ad/remove-persistence",
  "administration/configuration/resetmfatokens": "configuration/authentication-and-sso/reset-mfa-tokens",
  "administration/configuration/saslkerberos": "configuration/authentication-and-sso/sasl-kerberos",
  "administration/configuration/sessiontimeouts": "configuration/interface/session-timeouts",
  "administration/configuration/spinitiatedsso": "configuration/authentication-and-sso/saml-sso-reference",
  "administration/configuration/sslcsr": "configuration/certificates/create-a-csr",
  "administration/configuration/ssoconfiguration": "configuration/authentication-and-sso/saml-sso-reference",
  "administration/configuration/uibranding": "configuration/interface/ui-branding",
  "administration/configuration/webservercertificate": "configuration/certificates/web-server-certificate-with-sans",
  "administration/onpremmaintenance/dellr430r440idrac9": "appendix/legacy-iso/dell-r430-r440-idrac-9-network-configuration",
  "administration/onpremmaintenance/failback": "admin/maintenance/protect-and-recover-your-deployment",
  "administration/onpremmaintenance/linuxremovesnapbin": "appendix/legacy-iso/remove-snap-bin-from-path",
  "administration/onpremmaintenance/operational": "admin/maintenance/routine-maintenance",
  "administration/onpremmaintenance/ssh": "appendix/legacy-iso/ssh-to-a-node",
  "administration/onpremmaintenance/updateosonappliances": "appendix/legacy-iso/update-the-operating-system",
  "administration/reporting/accessrisk": "admin/access-risk",
  "administration/reporting/applicationlogbasics": "troubleshooting/application-logs",
  "administration/reporting/dashboardguide": "admin/dashboard",
  "administration/reporting/licensingdetails": "admin/licensing",
  "administration/reporting/logparsing": "troubleshooting/parse-end-user-activity-logs",
  "administration/reporting/standingprivilegescript": "configuration/bulk-onboarding/measure-standing-privilege-reduction",
  "administration/reporting/systemmanagementscreen": "admin/systems-screen",
  "administration/systemmanagement/403zerousns": "troubleshooting/zero-usns-by-domain",
  "administration/systemmanagement/adduserorgroup": "admin/systems/add-a-user-or-group-to-an-account-inventory",
  "administration/systemmanagement/bulkactions": "admin/systems/bulk-actions",
  "administration/systemmanagement/commonuierrors": "troubleshooting/common-ui-errors",
  "administration/systemmanagement/firstlogin": "configuration/authentication-and-sso/reset-mfa-tokens",
  "administration/systemmanagement/jitasessions": "admin/systems/start-and-manage-jita-sessions",
  "administration/systemmanagement/linuxaddsudouser": "configuration/endpoint-preparation/linux-add-a-sudo-user",
  "administration/systemmanagement/linuxandmac": "configuration/endpoint-preparation/linux-directory-bridging",
  "administration/systemmanagement/linuxgranularsudo": "configuration/endpoint-preparation/linux-granular-sudo",
  "administration/systemmanagement/linuxsudopermissions": "configuration/endpoint-preparation/linux-replicate-sudo-permissions",
  "administration/systemmanagement/oamextended": "admin/systems/offline-access-management",
  "administration/systemmanagement/quickstartfields": "configuration/bulk-onboarding/report-field-reference",
  "administration/systemmanagement/removeasystem": "admin/systems/remove-a-system",
  "administration/systemmanagement/restoreasystem": "admin/systems/restore-a-system",
  "gettingstarted": "getting-started/overview",
  "installation/containerbaseddeployment/awsconfiguration": "requirements/registry-access",
  "installation/containerbaseddeployment/deploysecureone": "install/deploy",
  "installation/containerbaseddeployment/overview": "install/overview",
  "installation/containerbaseddeployment/prerequisites": "requirements/host-prerequisites",
  "installation/containerbaseddeployment/verifydeployment": "install/verify-deployment",
  "installation/dellpoweredge": "appendix/legacy-iso/dell-poweredge-default-idrac-password",
  "installation/dockercredentials": "install/docker-credentials-helper",
  "installation/dockersecrets": "install/docker-secrets",
  "installation/machineprovisionidrac": "appendix/legacy-iso/machine-provisioning-idrac",
  "installation/s1clihelperutility": "install/s1-cli-helper",
  "installation/upgrademongodb4to8": "migration/mongodb-4-to-8/overview",
  "integrations/api/advancedapireference": "integrations/api/advanced-api-reference",
  "integrations/api/apikeymanagement": "integrations/api/api-key-management",
  "integrations/api/apikeyrevocation": "integrations/api/api-key-revocation",
  "integrations/api/postmanauthenticate": "integrations/api/authenticate-with-an-api-key",
  "integrations/api/postmanlinux": "integrations/api/add-users-and-groups-to-a-linux-system",
  "integrations/siem/additionallogs": "integrations/siem/additional-logs",
  "integrations/siem/forwardlogs": "integrations/siem/forward-logs",
  "integrations/siem/splunkjson": "integrations/siem/splunk-json-source-type",
  "integrations/siem/splunkqueries": "integrations/siem/splunk-and-siem-queries",
  "partners/technicalpartnerdocu/core_services": "getting-started/architecture",
  "requirements/architectureoverview": "getting-started/architecture",
  "requirements/haanddr": "getting-started/high-availability-and-disaster-recovery",
  "requirements/portsandfirewalls": "requirements/ports-and-firewall",
  "requirements/serverstoragesizing": "requirements/sizing",
  "requirements/supportedosandbrowsers": "requirements/supported-platforms",
  "requirements/technicalpreparation/accountsecurity": "requirements/service-account-security",
  "requirements/technicalpreparation/freeze_mode": "configuration/onboard-systems/freeze-mode",
  "requirements/technicalpreparation/golivechecklist": "install/go-live-checklist",
  "requirements/technicalpreparation/info_-_what's_different_about_domain_controllers": "configuration/domains-and-ad/domain-controllers-overview",
  "requirements/technicalpreparation/linuxregistrationsprerequisites": "configuration/endpoint-preparation/linux-registration-prerequisites",
  "requirements/technicalpreparation/postman_-_installing_and_configuring_": "integrations/api/api-key-management",
  "requirements/technicalpreparation/postmanlinuxregistration": "configuration/bulk-onboarding/register-linux-systems",
  "requirements/technicalpreparation/productmodeaccount": "configuration/domains-and-ad/protect-mode-account-gpo",
  "requirements/technicalpreparation/proxyfirewallwhitelist": "requirements/proxy-and-firewall-allowlist",
  "requirements/technicalpreparation/riskregister": "getting-started/high-availability-and-disaster-recovery",
  "requirements/technicalpreparation/scangposerver2012or2008dcs": "configuration/domains-and-ad/scan-gpo-domain-controllers",
  "requirements/technicalpreparation/scangposerver2016+dcs": "configuration/domains-and-ad/scan-gpo-domain-controllers",
  "requirements/technicalpreparation/serviceaccounts": "requirements/service-accounts",
  "requirements/virtualmachines": "appendix/legacy-iso/virtual-machines",
};

// Knowledge Base articles are also published outside the product path, at
// /docs/kb/privilegesecurediscovery. A removed article needs a redirect there too.
const REMOVED_KB_ARTICLES = {
  'system-configuration-and-requirements/generate-license-counts-with-cli-command': '/docs/kb/privilegesecurediscovery',
  'authentication-and-access/saml-assertion-not-yet-valid': '/docs/privilegesecurediscovery/configuration/authentication-and-sso/saml-sso-reference',
};

export const privilegeSecureDiscoveryRedirects = [
  ...Object.entries(PAGE_MAP).flatMap(([oldPath, newPath]) => {
    const to = newPath ? `${PRODUCT_PATH}/${newPath}` : PRODUCT_PATH;
    return [
      { from: `${PRODUCT_PATH}/${oldPath}`, to },
      { from: `${LEGACY_PREFIX}/${oldPath}`, to },
    ];
  }),
  ...Object.entries(REMOVED_KB_ARTICLES).map(([oldPath, to]) => ({
    from: `/docs/kb/privilegesecurediscovery/${oldPath}`,
    to,
  })),
];
