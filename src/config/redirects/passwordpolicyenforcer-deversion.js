// Password Policy Enforcer was de-versioned in 2026-09: only 12.0 is built now,
// serving at the bare /docs/passwordpolicyenforcer path. The 11.2/11.1/11.0/10.2
// versions were removed from the build (their source files are untouched on
// disk, just unplugged from src/config/products.js).
//
// 11.2/11.1/11.0 share 12.0's exact section layout (see
// docs/passwordpolicyenforcer/CLAUDE.md), so old links into them are redirected
// to the same page path under the new unversioned root — computed here by
// walking 12.0's real doc files and checking each one also exists at the same
// relative path in the older version. A handful of 11.1/11.0 pages don't have a
// 12.0 counterpart (removed/renamed features); those are skipped here and fall
// through to the client-side root redirect (rootOnlyUnversionedDocsBasePaths in
// docusaurus.config.js) instead of a broken precise redirect.
//
// 10.2's layout was reorganized for 11.x/12.0, so its redirects use an explicit,
// hand-verified old-path -> new-path map instead, built by reading each old
// page's content/title and matching it to whichever 12.0 page now covers that
// topic (not just matching similar file/folder names). The only page left
// unmapped is administration/password_reset.md, which covered integration
// with the separate Netwrix Password Reset product and has no PPE-side
// equivalent in 12.0; it falls through to the root like any other stale link
// with no single clear target.

import { readdirSync, existsSync, statSync } from 'fs';
import { join, resolve } from 'path';

const PRODUCT_DOCS_ROOT = resolve(process.cwd(), 'docs/passwordpolicyenforcer');
const NEW_PREFIX = '/docs/passwordpolicyenforcer';

const EXCLUDED_DIRS = new Set(['kb', '_partials']);

// List every real doc under a version's folder. Returns { docPath, route } pairs:
// docPath is the file's relative path (extension stripped, used to check the
// same file exists in an older version); route is the URL suffix Docusaurus
// actually serves it at, which isn't always the same as docPath — a doc file
// named the same as its parent folder (e.g. admin/cmdlets/cmdlets.md,
// admin/manage-policies/rules/rules.md) becomes that folder's category index
// instead of an extra path segment, so its route drops the repeated segment
// and gets a trailing slash.
function listDocRoutes(versionDir) {
  const docs = [];
  function walk(dir, relPrefix) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      if (EXCLUDED_DIRS.has(entry) || entry === 'CLAUDE.md') continue;
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        walk(fullPath, relPrefix ? `${relPrefix}/${entry}` : entry);
        continue;
      }
      if (!/\.mdx?$/.test(entry)) continue;
      const base = entry.replace(/\.mdx?$/, '');
      const docPath = relPrefix ? `${relPrefix}/${base}` : base;
      const parentFolderName = relPrefix.split('/').pop();
      let route;
      if (base === 'index') {
        route = relPrefix;
      } else if (base === parentFolderName) {
        route = `${relPrefix}/`;
      } else {
        route = docPath;
      }
      docs.push({ docPath, route });
    }
  }
  walk(versionDir, '');
  return docs;
}

// 12.0/11.2/11.1/11.0: redirect every 12.0 route that also exists at the same
// relative path under the older version's own folder. 12.0 itself is included
// so its own old versioned URL (/12_0/<page>) redirects to the new one.
const STRUCTURALLY_IDENTICAL_VERSIONS = ['12.0', '11.2', '11.1', '11.0'];

function docExistsInVersion(versionDir, docPath) {
  const stem = join(versionDir, ...(docPath ? docPath.split('/') : ['index']));
  return existsSync(`${stem}.md`) || existsSync(`${stem}.mdx`);
}

const exactMatchRedirects = STRUCTURALLY_IDENTICAL_VERSIONS.flatMap((version) => {
  const urlVersion = version.replace(/\./g, '_');
  const versionDir = join(PRODUCT_DOCS_ROOT, version);
  if (!existsSync(versionDir)) return [];
  return listDocRoutes(join(PRODUCT_DOCS_ROOT, '12.0'))
    .filter(({ docPath }) => docExistsInVersion(versionDir, docPath))
    .map(({ route }) => ({
      from: route ? `${NEW_PREFIX}/${urlVersion}/${route}` : `${NEW_PREFIX}/${urlVersion}`,
      to: route ? `${NEW_PREFIX}/${route}` : NEW_PREFIX,
    }));
});

// 10.2: layout was reorganized in 11.x/12.0, so map old page -> new page
// explicitly. Verified by comparing file titles/content, not just names.
// '' (index) -> '' (index) covers the version root.
const TEN_TWO_PAGE_MAP = {
  '': '',
  'administration/administration_overview': 'admin/administration_overview',
  // "Connect to a Configuration" is now covered by the Configuration Console
  // overview, which documents connecting to a domain vs. local configuration.
  'administration/connecting': 'admin/configconsole',
  'administration/domain_and_local_policies': 'installation/domain_and_local_policies',
  'administration/hibpupdater': 'admin/hibpupdater',
  // The separate automated/manual/general installation pages were consolidated
  // into the single server-components installer page.
  'administration/installation/automated_installation': 'installation/installationserver',
  'administration/installation/installation': 'installation/installationserver',
  'administration/installation/manual_installation': 'installation/installationserver',
  'administration/installation/disable_windows_rules': 'installation/disable_windows_rules',
  'administration/installation/writeback': 'admin/writeback',
  // Mailer/email settings and license management moved into the global Settings
  // page (see its "Mail service", "Notifications", and "License" sections).
  'administration/mailer/command_line_interface': 'admin/settings',
  'administration/mailer/email_delivery_options': 'admin/settings',
  'administration/mailer/email_message_options': 'admin/settings',
  'administration/mailer/mailer': 'admin/settings',
  'administration/properties/license_generator': 'admin/settings',
  'administration/managementconsole/management_console_views': 'admin/configconsole',
  'administration/managementconsole/management_console': 'admin/configconsole',
  'administration/managingpolicies/assigning_policies': 'admin/manage-policies/usersgroups',
  'administration/managingpolicies/creating_a_policy': 'admin/manage-policies/manage_policies',
  'administration/managingpolicies/deleting_a_policy': 'admin/manage-policies/manage_policies',
  'administration/managingpolicies/managing_policies': 'admin/manage-policies/manage_policies',
  'administration/managingpolicies/passphrases': 'admin/manage-policies/passphrases',
  'administration/managingpolicies/policy_priorities': 'admin/manage-policies/manage_policies',
  'administration/managingpolicies/policy_properties': 'admin/manage-policies/policy_properties',
  'administration/managingpolicies/testing_policies': 'admin/manage-policies/testpolicy',
  'administration/passwordpolicyclient/configuring_the_password_policy_client': 'admin/password-policy-client/configuring_the_password_policy_client',
  'administration/passwordpolicyclient/installing_password_policy_client': 'installation/installationclient',
  'administration/passwordpolicyclient/password_policy_client': 'admin/password-policy-client/password_policy_client',
  // Message template/rule insert/multilingual customization is documented
  // together with the client's other GPO-based configuration steps now.
  'administration/passwordpolicyclient/customizing_message_templates': 'admin/password-policy-client/configuring_the_password_policy_client',
  'administration/passwordpolicyclient/customizing_rule_inserts': 'admin/password-policy-client/configuring_the_password_policy_client',
  'administration/passwordpolicyclient/multilingual_messages': 'admin/password-policy-client/configuring_the_password_policy_client',
  'administration/ppe_tool': 'admin/ppe_tool',
  'administration/properties/properties': 'admin/settings',
  'administration/rules/character_pattern': 'admin/manage-policies/rules/patterns',
  'administration/rules/character_rules': 'admin/manage-policies/rules/character_rules',
  'administration/rules/complexity_rule': 'admin/manage-policies/rules/complexity_rule',
  'administration/rules/compromised_rule': 'admin/manage-policies/rules/compromised_rule',
  'administration/rules/dictionary_rule': 'admin/manage-policies/rules/dictionary_rule',
  // "First and Last Character Rules" is now covered by the general Character
  // rules page's "In position" option.
  'administration/rules/first_and_last': 'admin/manage-policies/rules/character_rules',
  'administration/rules/history_rule': 'admin/manage-policies/rules/history_rule',
  'administration/rules/keyboard_pattern': 'admin/manage-policies/rules/patterns',
  'administration/rules/length_rule': 'admin/manage-policies/rules/length_rule',
  'administration/rules/maximum_age_rule': 'admin/manage-policies/rules/maximum_age_rule',
  'administration/rules/minimum_age_rule': 'admin/manage-policies/rules/minimum_age_rule',
  'administration/rules/repeating_characters': 'admin/manage-policies/rules/repetition',
  'administration/rules/repeating_pattern': 'admin/manage-policies/rules/repetition',
  // rules.md shares its filename with its parent folder, so Docusaurus serves
  // it as that folder's category index (trailing slash, no repeated segment).
  'administration/rules/rules': 'admin/manage-policies/rules/',
  'administration/rules/similarity_rule': 'admin/manage-policies/rules/similarity_rule',
  // User display name/logon name rules are now options within Similarity.
  'administration/rules/user_display_name_rule': 'admin/manage-policies/rules/similarity_rule',
  'administration/rules/user_logon_name_rule': 'admin/manage-policies/rules/similarity_rule',
  'administration/rules/unique_characters': 'admin/manage-policies/rules/unique_characters',
  // "Support Tools" is now a section within System Audit and Support.
  'administration/support_tools': 'admin/systemaudit',
  'administration/troubleshooting': 'admin/troubleshooting',
  // Uninstall steps moved into the server-components installer page.
  'administration/uninstall': 'installation/installationserver',
  'administration/upgrading': 'installation/upgrading',
  'evaluation/conclusion': 'evaluation/conclusion',
  'evaluation/configuring_policy_rules': 'evaluation/configuring_policy_rules',
  'evaluation/creatingapasswordpolicy/creating_a_password_policy': 'evaluation/creating-a-password-policy/creating_a_password_policy',
  'evaluation/creatingapasswordpolicy/policy_templates': 'evaluation/creating-a-password-policy/policy_templates',
  'evaluation/enforcing_multiple_policies': 'evaluation/enforcing_multiple_policies',
  'evaluation/evaluation_overview': 'evaluation/evaluation_overview',
  'evaluation/improving_the_password_policy': 'evaluation/improving_the_password_policy',
  'evaluation/installation': 'evaluation/installforeval',
  'evaluation/preparing_the_computer': 'evaluation/preparing_the_computer',
  'evaluation/testing_the_password_policy': 'evaluation/testing_the_password_policy',
  'web/configuration': 'web-overview/configuration',
  'web/editing_html_templates': 'web-overview/editing_html_templates',
  'web/installation': 'web-overview/installationweb',
  'web/securing_web': 'web-overview/securing_web',
  'web/using_web': 'web-overview/using_web',
  'web/web_overview': 'web-overview/web_overview',
};

const tenTwoRedirects = Object.entries(TEN_TWO_PAGE_MAP).map(([oldRoute, newRoute]) => ({
  from: oldRoute ? `${NEW_PREFIX}/10_2/${oldRoute}` : `${NEW_PREFIX}/10_2`,
  to: newRoute ? `${NEW_PREFIX}/${newRoute}` : NEW_PREFIX,
}));

// plugin-client-redirects matches `from` literally, with no trailing-slash
// normalization, and writes each redirect to <from>/index.html on disk. A
// trailing-slash `from` and its no-slash sibling resolve to the same file, so
// only the no-slash form is kept — matching how a reader actually types a
// folder-index URL (e.g. .../admin/cmdlets, not .../admin/cmdlets/).
function stripTrailingSlash(entries) {
  return entries.map((entry) => ({
    ...entry,
    from: entry.from.endsWith('/') && entry.from.length > 1 ? entry.from.slice(0, -1) : entry.from,
  }));
}

export const passwordPolicyEnforcerDeversionRedirects = stripTrailingSlash([
  ...exactMatchRedirects,
  ...tenTwoRedirects,
]);
