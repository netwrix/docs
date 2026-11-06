# Screenshot reuse review (26.07 docs)

Reviewed 109 open screenshot markers against the images used by the 26.03, 25.12 and 4.2 docs. A Sonnet worker viewed candidates and an Opus judge verified each reuse claim by viewing it beside current 26.07 captures. The review was strict on visual style. A second pass split the rejections by cause.

## Result

| Outcome | Count |
|---|---|
| Reuse (as is, or with a crop or blur) | 9 |
| Old image has the right content but the old look | 15 |
| Old image exists but is wrong or incomplete (missing column or field, wrong state, wrong dialog) | 17 |
| No old image shows this | 68 |

## Reuse (as is, or with a crop or blur)

- **admin/sessions/replay-viewer.md** line 44: Replay Viewer for an RDP session
  Image: `26.03/accessmanagement/admin/dashboard/window/replayviewerrdp.webp`. Edit: Blur NWXSCALELAB\kevinh, pamdc001.nwxscalelab.com and the NWXSCALELAB\kevinhM30128BCBO98F proxy account in the footer. Crop off the cut-off Proxy Session Started line at the bottom. Before publishing, check the window against a 26.07 replay.. I viewed it: the Replay Viewer is a neutral grey and white window with no old accent colors, and it shows the event timeline, the player with play, forward and speed controls, and the User/to/using/Activity details that 
- **admin/users-groups/user-details.md** line 13: the details page for a domain user, showing the header and the tab row
  Image: `26.03/accessmanagement/admin/policy/page/details/usersgroupsdetailspage.webp`. Edit: Crop out the top bar, which removes the 'Policy' breadcrumb that 26.07 labels Access Policy, the missing globe icon and the DPILAB\bv user name, so only the header and tab row remain, or blur the Sessions table. Blur DPILAB\bv in the header.. I viewed it next to the 26.07 credential-groups and add-users references: it has the same purple buttons, grey tabs and top-bar icons, and its header (Lock Account, Reset MFA, active and scheduled counts) and domain-user
- **configuration/system-settings/data-retention.md** line 30: Data Retention panel with all three options visible
  Image: `26.03/accessmanagement/admin/configuration/page/dataretention.webp`. I viewed it: the panel crop matches the 26.07 typography and icons, shows all three checkboxes and days fields with labels identical to the page table, shows the 90-day defaults, and has nothing sensitive.
- **configuration/system-settings/email.md** line 24: System Settings Email panel
  Image: `26.03/accessmanagement/admin/configuration/page/email.webp`. I viewed it: the Email panel crop is in the current style and shows the Website URL field the page describes; the truncated value is a company.com placeholder, not sensitive data.
- **configuration/system-settings/rdp-files.md** line 13: System Settings RDP Options panel
  Image: `26.03/accessmanagement/admin/configuration/page/rdpoptions.webp`. I viewed it: the crop is in the current style and shows exactly the four options with matching labels; it shows Smart Sizing cleared and a 1920x2058 resolution rather than the documented defaults, which the text does not
- **configuration/system-settings/services-url.md** line 29: System Settings Services panel with the URL redacted
  Image: `26.03/accessmanagement/admin/configuration/page/services.webp`. Edit: Blur the value in the NPS Rest URL field (https://localhost:6500) and keep the field label visible, as the marker asks for the URL redacted.. I viewed it: the crop is in the current style with the purple Register Services button and labels matching the page, but the marker asks for the URL to be redacted.
- **install/install-application-server.md** line 55: the PostgreSQL setup wizard install and folder pages
  Image: `26.03/accessmanagement/install/install.webp`. I checked both files: install.webp and its companion installfolder.webp, in the same folder, show the Netwrix PostgreSQL v16 wizard with the current Netwrix logo, the Install button, and the exact Stealthbits\PostgreSQL1
- **user-guide/browser-extension/use-browser-extension.md** line 26: extension popup signed in, showing the Activities tab (store 25.8.26, not the beta channel)
  Image: `26.03/accessmanagement/enduser/browserextension/browserextensionactivities.webp`. Viewed it: it shows the extension popup's Activities tab with All and Favorites, the plus and minus buttons, and the Activities, Current Tab and Settings tabs as the page describes, with no sensitive data; the extension 
- **user-guide/browser-extension/use-browser-extension.md** line 120: the session-ended message with the Close Tab button (store 25.8.26)
  Image: `26.03/accessmanagement/enduser/browserextension/browserextensionendsession.webp`. Viewed it: it shows 'The session has ended.' with the Close Tab button, which matches step 3 and the marker, and nothing sensitive is visible; it is an extension page, not the console, but confirm the 25.8.26 build still

## Old image has the right content but the old look

- **admin/audit-reporting/access-certification.md** line 49: the Access Certification page with a task selected, showing the task list, the details, and the Users tab
  Image: `26.03/accessmanagement/admin/auditreporting/page/page.webp`. Accepted: the candidate uses the old console look (red nav marker, blue links and buttons, old sidebar, no top bar).
- **admin/audit-reporting/activity-log.md** line 13: Activity Log page showing the summary, top 5 users, and sessions tables with the Export as CSV button
  Image: `26.03/accessmanagement/admin/auditreporting/page/activitylogpage.webp`. Accepted: old blue look and breadcrumb, and it shows unredacted user and host names.
- **admin/audit-reporting/events.md** line 13: Events page showing the Access Policy column and the result count (redact host names and account names)
  Image: `26.03/accessmanagement/admin/auditreporting/page/eventspage.png`. Accepted: oldest console look (top tab bar, old logo), and it shows unredacted users, hosts and an IP address.
- **admin/credentials/credential-groups.md** line 54: the Add Credentials dialog
  Image: `26.03/accessmanagement/admin/policy/add/addcredentials.webp`. Accepted: the Add Credentials dialog is the right one, but its blue styling clashes with the purple 26.07 Add dialogs.
- **admin/credentials/internal-service-accounts.md** line 29: the Manage dialog for an internal service account
  Image: `26.03/accessmanagement/admin/policy/window/credentials/manageinternalserviceaccount.webp`. Accepted: old blue outlined buttons and an older dialog title, plus an unredacted user name.
- **admin/credentials/manage-credentials.md** line 100: the Password Reset Options dialog
  Image: `4.2/accessmanagement/admin/policy/window/resources/passwordresetoptions.webp`. Accepted: this exists only as a 4.2 capture with blue controls and a stray mouse cursor.
- **admin/credentials/password-history.md** line 36: the View Password dialog with the password hidden
  Image: `26.03/accessmanagement/admin/policy/window/credentials/viewpassword.webp`. Accepted: the View Password dialog has the old blue eye icon and button styling.
- **admin/service-nodes/scheduled-tasks.md** line 13: Scheduled Tasks page with the task list and the result count
  Image: `26.03/accessmanagement/admin/configuration/page/scheduledtaskspage.webp`. Accepted: old blue look and old breadcrumb, and a fresh capture is quick to take.
- **remote-access-gateway/install/install-portal.md** line 103: the portal sign-in page, retaken without selected text. The portal-login-form-working image needs a retake before use.
  Image: `4.2/remoteaccessgateway/enduser/loginrag.webp`. The 4.2 portal login uses the old logo and blue styling, and the existing 26.07 image needs a fresh capture anyway because it has selected text.
- **remote-access-gateway/user-guide/sign-in.md** line 59: portal sign-in page with Username, Password, and Domain fields, no text selected, no licence banner
  Image: `4.2/remoteaccessgateway/enduser/loginrag.webp`. The 4.2 login would clash with the 26.07 portal screenshots, and one retake of the 26.07 sign-in page can cover both this marker and marker 75.
- **resources/domains.md** line 137: the window that opens from Add as NPS Managed Resource.
  Image: `26.03/accessmanagement/admin/policy/window/resources/enrollhostsinmanagement.webp`. The 26.03 Enroll Hosts dialog has old blue styling and shows an unblurred host name and service account, so a quick retake is better than redacting it.
- **user-guide/my-sessions.md** line 122: a Historical row showing the Actions icons
  Image: `26.03/accessmanagement/admin/dashboard/historical.webp`. The 26.03 Historical dashboard uses the old blue styling and has no sidebar, and it shows lab user names that aren't blurred, so it needs a retake.
- **user-guide/sign-in.md** line 37: sign-in page with the Username, Password, and Domain fields
  Image: `26.03/accessmanagement/enduser/defaultloginuser.webp`. The old sign-in page has the old logo and blue controls, which clash with the 26.07 purple branding.
- **user-guide/sign-in.md** line 53: sign-in page with single sign-on buttons
  Image: `26.03/accessmanagement/enduser/alternatelogin.webp`. The old single sign-on page uses the old logo and styling, and it can't confirm which buttons 26.07 shows.
- **user-guide/sign-in.md** line 85: idle timeout warning dialog
  Image: `26.03/accessmanagement/enduser/sessiontimeout.webp`. The old Session Timeout dialog has a blue button and old styling, and no one has checked its wording against 26.07, so retake it unless the live dialog turns out to match.

## Old image exists but is wrong or incomplete (missing column or field, wrong state, wrong dialog)

- **admin/audit-reporting/access-certification.md** line 69: the Entitlements tab with the Access Policy column
  Image: `26.03/accessmanagement/admin/auditreporting/tab/entitlementstab.webp`. Accepted: it has no Access Policy column and uses the old blue styling.
- **admin/credentials/manage-credentials.md** line 44: the Manage dialog for a Standard account
  Image: `26.03/accessmanagement/admin/policy/window/credentials/credentialsmanuallymanageaccount.webp`. Accepted: the old docs never show the Manage dialog for a Standard account, and the only candidate is an old-look page, not the dialog.
- **admin/credentials/password-history.md** line 44: the Password History dialog with values hidden
  Image: `26.03/accessmanagement/admin/policy/window/credentials/passwordhistory.webp`. Accepted: the history list is empty, so it can't show hidden values, and the styling is old.
- **admin/credentials/service-account-dependencies.md** line 26: the Account Dependencies dialog on the Dependencies tab
  Image: `26.03/accessmanagement/admin/policy/window/credentials/accountdependencies.webp`. Accepted: old blue buttons, no tab row, and the blurred names can still be partly read.
- **admin/roles/admin-view-read-only.md** line 51: the Permission Assignment list of an Auditors custom role with Admin View Read Only and Reporting assigned
  Image: `26.03/accessmanagement/admin/policy/page/details/customauditrole.webp`. Accepted: the styling is current, but it shows a different role and the wrong permissions (session ones instead of Admin View Read Only and Reporting), so it doesn't match the page text.
- **admin/roles/roles.md** line 13: the Role Management page with the role list on the left and the Administrators members on the right
  Image: `26.03/accessmanagement/admin/policy/page/rolemanagementpage.png`. Accepted: old look with blue buttons and colored row icons, fewer columns than the current page, and unredacted users.
- **integrations/siem/siem-servers.md** line 51: the Add SIEM Server form filled in with the example values
  Image: `26.03/accessmanagement/admin/configuration/page/siemservers.webp`. The 26.03 SIEM form is empty and in the old look, and the marker needs it filled with the example values (CEF, TCP, 514).
- **integrations/vaults/cyberark.md** line 46: the CyberArk connector form with the fields in the preceding table.
  Image: `26.03/accessmanagement/admin/configuration/add/addcyberark.webp`. The 26.03 CyberArk form uses the old look and has Advanced collapsed, so it hides Skip Certificate Check and the script blocks that the page describes.
- **resources/add-resources.md** line 38: Add Resources window with Import from AD selected and two servers in Resources to Add
  Image: `26.03/accessmanagement/admin/policy/window/resources/addresourcesonboardad.webp`. The 26.03 Add Resources window is in the old look and shows three selected servers, but the page walks through selecting two.
- **resources/domains.md** line 35: New Domain page with the domain name entered, the Active Directory service account selected, and Use TLS selected.
  Image: `26.03/accessmanagement/admin/policy/add/adddomain.webp`. The 26.03 domain form is empty and in the old look, and the marker needs the domain name, service account and Use TLS filled in.
- **resources/entra-id-tenants.md** line 39: New Entra ID Tenant page with the fields filled in. Blur the tenant ID and domain.
  Image: `26.03/accessmanagement/admin/policy/add/addazureadtenant.webp`. The 26.03 Entra ID form is empty and in the old look, so it does not show the filled fields the marker asks for.
- **resources/overview.md** line 95: Change Platform dialog with the Platform dropdown open
  Image: `4.2/accessmanagement/admin/policy/window/resources/changeplatform.webp`. The 4.2 Change Platform dialog has its dropdown closed, uses old styling, shows an unblurred resource name, and lacks the 26.07 platform entries.
- **resources/platforms/schedule-policies.md** line 31: Schedule Policies page with the policy list and the selected policy details
  Image: `26.03/accessmanagement/admin/policy/page/page_3.webp`. The 26.03 Schedule Policies list has an empty details pane, policy names that differ from the 26.07 page, and the old look.
- **user-guide/review-access.md** line 30: the Review Activity Details window with entitlement rows selected
  Image: `26.03/accessmanagement/admin/auditreporting/tab/reviewentitlementswindow.webp`. The old Review Entitlements window has a different title and old styling, and it shows no selected rows, so it does not match the 26.07 Review Activity Details window.
- **user-guide/review-access.md** line 48: the Review Activity Details window showing the Access Policy column. The lab had no access certification with data.
  Image: `26.03/accessmanagement/admin/auditreporting/tab/reviewentitlementswindow.webp`. The old window has the wrong title and styling for Review Activity Details, so it needs a retake once the lab has certification data.
- **user-guide/sign-in.md** line 70: MFA registration page with the QR code (blur the code)
  Image: `26.03/accessmanagement/install/authenticator.webp`. This is the old setup wizard step, not the 26.07 sign-in MFA registration page, and it shows a QR code and secret key that aren't blurred.
- **user-guide/sign-in.md** line 71: recovery codes dialog
  Image: `26.03/accessmanagement/install/authenticatorcodes.webp`. This is the old full-page wizard recovery codes step, not the 26.07 dialog, and its codes aren't blurred.

## No old image shows this

- **admin/sessions/active-sessions.md** line 112: Active tab with a session selected and the toolbar enabled.
  Image: `-`. The only candidate is the old-look Active tile, which lacks the 26.07 toolbar and columns.
- **admin/sessions/historical-sessions.md** line 80: Historical tab toolbar and filters, with host names redacted.
  Image: `-`. The Historical tab candidate uses the old blue chrome with no sidebar or top bar, and it shows unblurred user and host names.
- **admin/sessions/live-session-viewer.md** line 28: Active tile with a session row expanded to show the recording
  Image: `-`. The expanded Active row is shown only in the old blue look.
- **admin/sessions/live-session-viewer.md** line 45: Live Session Viewer for an RDP session
  Image: `-`. The 2023 RDP live viewer has blue accent icons and only partial redaction.
- **admin/sessions/live-session-viewer.md** line 80: Lock Session window with a title, a message, and the Prevent User From options
  Image: `-`. The lock dialog's fields match, but its blue Okay button and checkboxes would clash with the purple 26.07 dialogs, and a retake is cheap.
- **admin/sessions/live-session-viewer.md** line 95: Terminate Proxy Session window
  Image: `-`. This tiny Terminate dialog has a blue Okay button and checkbox, so a retake is cheap.
- **admin/sessions/replay-viewer.md** line 28: Historical sessions dashboard showing a session that has a recording
  Image: `-`. The Historical candidate is in the old look, and one new Historical capture can cover markers 15 and 20.
- **admin/sessions/session-logs.md** line 21: Active tile toolbar with a session selected and View Logs enabled
  Image: `-`. The candidate shows the Session Logs window, not the Active tile toolbar with View Logs enabled.
- **admin/users-groups/collections.md** line 15: the User and Group Collections page with one collection selected and its members listed
  Image: `-`. The collection page layout matches, but it is in the old blue look and shows unredacted names and email addresses.
- **admin/users-groups/users-groups.md** line 13: the Users & Groups list with the Licenses counter, the filters, and the LOCKED column
  Image: `-`. This is an old-look PNG of the Users & Groups list, with blue buttons and real-looking names and email addresses.
- **configuration/access-policies/activity-token-complexity.md** line 39: the Activity Token Complexity form with default values
  Image: `-`. The Activity Token Complexity form shows non-default values and is in the old blue look.
- **configuration/access-policies/approval-workflows.md** line 68: the Approval Workflow section with a tier card showing Escalation, Account, Group, Approvers, and Approvals Required
  Image: `-`. The tier card crop uses the old icon set and styling, and it shows the Bruce Wayne account and the approver name corbin.
- **configuration/access-policies/approval-workflows.md** line 69: the Tier Escalation dialog
  Image: `-`. The only candidate is the old Tier Escalation dialog, with a blue Okay button and old field styling.
- **configuration/access-policies/approval-workflows.md** line 70: the Add Users and Groups as Approvers dialog
  Image: `-`. The old approvers dialog uses a different control layout (radio buttons and other columns) in the old look, and shows names and emails that are not blurred.
- **configuration/access-policies/connection-profiles.md** line 162: the Proxy and Session Control sections of a connection profile.
  Image: `-`. The old connection profile screenshot never shows the Proxy section and is a full page in the old look.
- **configuration/access-policies/connection-profiles.md** line 163: the Credential Management and Website sections of a connection profile.
  Image: `-`. The content is close, but it is an old-look full-page screenshot with blue checkboxes and extra sections that would clash with the 26.07 shots.
- **configuration/access-policies/connection-profiles.md** line 164: the Require Ticket Number for Sessions option with the ServiceNow Connector list shown.
  Image: `-`. The ServiceNow Connector list is new in 26.07, and no old image shows it.
- **configuration/access-policies/credential-based-policy.md** line 112: the tabs of a credential-based policy, including Users, Activities, Credentials, and Files.
  Image: `-`. The old credential policy Users tab is an old-look full page with a Certified column and other differences.
- **configuration/access-policies/resource-based-policy.md** line 111: the Users tab of a resource-based policy, showing the Type and Connection Profile fields and the three tabs.
  Image: `-`. The old resource-based Users tab is an old-look full page with a Certified column and names and emails that are not blurred.
- **configuration/access-policies/resource-based-policy.md** line 112: the Add Activities and Activity Groups window with the two panes.
  Image: `-`. The old Add Activities dialog is in the old blue styling and differs from the redesigned 26.07 dialogs.
- **configuration/access-policies/resource-based-policy.md** line 113: a new policy form with the required Connection Profile error before Save.
  Image: `-`. No old image shows the new-policy form with the Connection Profile required error.
- **configuration/activities/activities.md** line 15: the Activities page with the activity list on the left and the activity details on the right
  Image: `-`. The old Activities page has the right layout but is an old-look full page.
- **configuration/activities/activity-groups.md** line 36: the Activity Groups page with a group selected and its activities listed
  Image: `-`. The only old Activity Groups image shows an unsaved empty group, cropped, in the old look, not a selected group with its activities.
- **configuration/activities/create-activity.md** line 27: the new activity form with Login Account set to Activity Token, showing Login Account Template, Create Account, and Dele
  Image: `-`. The old images show an existing activity or the old add form in the old look, not the 26.07 new-activity form.
- **configuration/activities/group-role-activities.md** line 51: the Add Groups/Roles dialog with the Platform list open and several groups and roles selected
  Image: `-`. No old image shows the Add Groups/Roles dialog with the Platform list open.
- **configuration/authentication/openid-connect.md** line 50: Configure Client page, client values redacted
  Image: `-`. The labels match the page text and the callback and CORS values are blurred, but the old wizard uses the old Open Sans-style font, a light-blue selected step and grey buttons. That clashes with the Inter-style font and p
- **configuration/authentication/overview.md** line 32: Add connector form with Connector Type list and Use Remote Access Gateway checkbox
  Image: `-`. No old image shows the Add connector form with the Connector Type list open or the Use Remote Access Gateway checkbox, so a retake is needed.
- **configuration/authentication/radius.md** line 48: MFA connector fields, shared secret masked
  Image: `-`. The 26.03 Duo MFA connector shot is a full page in the old look (blue links, old breadcrumb bar), so it would clash with the 26.07 console; the form is simple to retake.
- **configuration/authentication/saml.md** line 30: the Authentication page with Connector Type set to SAML
  Image: `-`. The old SAML connector shots are full pages in the old look, and they lack the disabled Connector Type list and wizard state that the 26.07 page describes.
- **configuration/encryption-keys/aws-kms-rotation.md** line 30: the AWS Connection Settings window with the fields filled in with placeholder values, with the Access Key and Secret Key
  Image: `-`. The old Rotate AWS Key dialog has different controls (Create/Rotate, Key) from the 26.07 tool (Access Key, Secret Key, Use EC2 Instance Profile, KMS Key, Region, Rotate Key, Run Action).
- **configuration/service-accounts/service-accounts.md** line 51: the Add Service account form with the Platform list open
  Image: `-`. The old Add Service Account form is in the old look, has the Platform list closed, and likely has an older platform set.
- **configuration/system-settings/system-settings.md** line 28: the System Settings page with the panel list (retake the searchable list)
  Image: `-`. No old image shows the 26.07 System Settings landing page with the Search Settings box and the current panel list.
- **install/additional-services.md** line 41: a service setup wizard with the Options page. Use one service as the example.
  Image: `-`. The old installer Setup Options dialogs show the old branding and a flow (Install location with Browse) that likely differs from the 26.07 wizard's Options, license, and Install steps.
- **install/components.md** line 11: contents of the downloaded zip file
  Image: `-`. The old package contents crop is tiny, low-resolution, and uses old icons, so a quick retake of the 26.07 zip contents is better.
- **install/first-launch.md** line 36: wizard Welcome page. Blur nothing; no lab values on this page.
  Image: `-`. The old Welcome page shows the old logo, blue styling, and a 2006-2023 copyright footer, which clash with 26.07.
- **install/first-launch.md** line 46: Create Your First User page. Use a placeholder domain and account.
  Image: `-`. The old Step 1 page is in the old look, and its heading reads 'Enter Your Username', not the 26.07 'Create Your First User'.
- **install/first-launch.md** line 56: Register Authenticator page. Blur the QR code and the key.
  Image: `-`. Accepted: the only candidate, 26.03 authenticator.webp, uses the old wizard chrome and shows an unblurred QR code and key.
- **install/first-launch.md** line 60: recovery codes page. Blur the recovery codes.
  Image: `-`. Accepted: 26.03 authenticatorcodes.webp has the old chrome and shows all ten recovery codes in clear text.
- **install/first-launch.md** line 66: Add an Active Directory Service Account page. Use a placeholder account.
  Image: `-`. Accepted: 26.03 adserviceaccount.webp has the old chrome and names the real NWXTECH domain, but the marker needs a placeholder account.
- **install/first-launch.md** line 72: domain synchronization in progress.
  Image: `-`. Accepted: 26.03 sync.webp shows the page at 0% in old chrome, not synchronization running with per-category progress.
- **install/first-launch.md** line 76: Add a Resource page.
  Image: `-`. Accepted: 26.03 resource.webp has old chrome, a 2023 trial banner, and real NWXTECH host names.
- **install/first-launch.md** line 80: Check Resource window with test results.
  Image: `-`. Accepted: 26.03 checkresource.webp shows a test still in progress, with no Details or Troubleshoot buttons, not the completed results the page describes.
- **install/install-application-server.md** line 41: the Netwrix Setup Launcher main window with the four buttons
  Image: `-`. Accepted: the old launcher images show three buttons, not the four the 26.07 page describes.
- **install/install-application-server.md** line 42: the Pre-requisites Setup grid
  Image: `-`. Accepted: no old image shows the Pre-requisites Setup grid.
- **install/install-application-server.md** line 74: the Netwrix Privilege Secure Setup wizard license agreement, options, and completion pages
  Image: `-`. I checked licenseagreement_1.webp, setupoptions.webp, and completed_1.webp: their content matches, but the options window says 'Install location' while the page says 'Install Folder', and the windows use the older red/bl
- **install/rdp-monitor.md** line 29: the Remote Desktop Monitor setup window after a successful install. Blur or crop any host name.
  Image: `-`. Accepted: no old image shows the Remote Desktop Monitor setup window.
- **install/remote-proxy.md** line 39: Proxy Service setup wizard Options page.
  Image: `-`. Accepted: 25.12 setupoptions_1.webp shows a Netwrix\...Proxy Service install path that contradicts the 26.07 Stealthbits\PAM\ProxyService path.
- **install/remote-proxy.md** line 107: the proxy registration output. Use placeholders for the server, account, and hash.
  Image: `-`. Accepted: registerproxy.png shows a different, password-prompt registration flow from version 25.11, with real account and host names only partly hidden.
- **install/upgrade.md** line 68: the Setup Launcher in its upgrade state, with the Netwrix Privilege Secure Upgrade button visible.
  Image: `-`. Accepted: no old image shows the launcher in its upgrade state with an upgrade button.
- **integrations/itsm/servicenow.md** line 58: the ServiceNow connector form. The lab has no ServiceNow instance.
  Image: `-`. No ServiceNow or ITSM connector image exists in the old docs, so the New Connector form with the ServiceNow template needs a new capture or a mock.
- **remote-access-gateway/install/install-gateway.md** line 34: the gateway installer license page and the completion page.
  Image: `-`. The only old installer screens are for the Scheduler Service, which is the wrong product, and the RAG Gateway installer has no older equivalent.
- **remote-access-gateway/install/install-portal.md** line 97: retake the certificate warning with the portal DNS name
  Image: `-`. No old image shows the portal certificate warning, and the existing 26.07 image needs a retake to show the portal DNS name.
- **resources/overview.md** line 13: Resources list with the Add menu open, showing the six entries and the filter bar
  Image: `-`. No old image shows the Resources list with the Add menu open and the filter bar, and old menus would list different entries than the six in 26.07.
- **resources/resource-groups.md** line 37: the New Resource Group form with Map to OU or CN selected.
  Image: `-`. The old addresourcegroup form is in the old style and uses the old 'Map to OU' and 'OU FQDN' labels, not 'Map to OU or CN' and 'Distinguished Name'.
- **resources/secure-winrm.md** line 42: Configure Secure WinRM Connection window with the three certificate sources and the thumbprint box
  Image: `-`. The content matches, but the blue Submit button and radio buttons clash with the purple 26.07 controls, and the dialog is small enough that retaking it is cheap.
- **resources/servers.md** line 11: server details header showing the buttons, fields, ports, Trust on Discovery, and Action on Fingerprint Mismatch
  Image: `-`. The dropdown reads 'Action on Thumbprint Mismatch', which differs from the page's 'Fingerprint Mismatch', and lab host and account names are visible.
- **resources/websites.md** line 21: New Website page with the fields filled in.
  Image: `-`. The old add-website form is empty, in the old blue style, and has an extra Associated Domain Controller field, but the marker needs filled-in 26.07 fields.
- **troubleshooting/enablement-toolkit.md** line 22: Enablement Toolkit main window with the operation menu open
  Image: `-`. The old toolkit image shows the Operation dropdown closed, and no old image shows the operation menu open.
- **user-guide/approve-requests.md** line 39: the Approvals tile with a pending request
  Image: `-`. The old Approvals images use the old top-nav or blue-link chrome, have different columns, and show unblurred names.
- **user-guide/audit-sessions.md** line 53: the Historical tile on the All Historical tab with the filters visible
  Image: `-`. The old historical view uses the 'Requested date' filter label and old blue chrome, not the 26.07 Start date filter and layout.
- **user-guide/browser-extension/use-browser-extension.md** line 69: extension showing the countdown timer and REC icon during a web session (store 25.8.26)
  Image: `-`. No old image shows the countdown together with the REC icon that the marker requires.
- **user-guide/connect-session.md** line 36: an Available row on the Active tile showing the password and connect icons.
  Image: `-`. The old startsession strip has old blue chrome, a red annotation box, no Ticket Number column and unblurred host and user names.
- **user-guide/my-activities.md** line 13: the My Activities page with activity cards (needs a user who belongs to an access policy)
  Image: `-`. The old My Activities images use the old blue breadcrumb, button and card styles with no sidebar, which clashes with the 26.07 console.
- **user-guide/my-activities.md** line 28: the Group by menu
  Image: `-`. No old image shows the Group by menu open.
- **user-guide/my-activities.md** line 41: an expanded activity card with a session
  Image: `-`. The content matches, but the old expanded-card image is in the old look with no sidebar and shows an unblurred account and host.
- **user-guide/navigate-console.md** line 108: the expanded navigation menu
  Image: `-`. The old navigation images show the earlier top-tab layout with different menu names, and no current image shows the expanded 26.07 sidebar.
- **user-guide/servicenow-tickets.md** line 25: the Ticket Number box with the label and the validation message. Retake with a demo resource name, because the lab host 
  Image: `-`. The old docs have no screenshot of the end-user ServiceNow ticket integration.
- **user-guide/servicenow-tickets.md** line 60: the End Session dialog with Keep In Progress, On Hold, and Resolved. The lab has no ServiceNow connector.
  Image: `-`. No old image shows the End Session dialog with the Keep In Progress, On Hold, and Resolved options.
