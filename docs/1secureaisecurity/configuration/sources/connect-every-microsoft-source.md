---
title: "Connect every Microsoft source"
description: "Work through one checklist of grants, roles, and tests so every Microsoft source of AI Security tests green and scans in full."
sidebar_position: 2
---

# Connect every Microsoft source

Use this checklist to make every Microsoft source of AI Security test green and scan in full. It is for security administrators and testers. Work through it from top to bottom. Each source's own page, linked at the end, has the detail behind every line.

## Two ways to connect

Every Microsoft source reads with one app registration in your Microsoft Entra directory. There are two ways to give AI Security that registration.

* **Connect with Microsoft** is the one-click path. If your 1Secure shows it on the Microsoft Entra ID, Agent 365, SharePoint Online, SharePoint agents, Copilot Studio, Azure RBAC, Power Platform, and Azure AI Foundry rows, a Global Administrator or Privileged Role Administrator clicks **Sign in with Microsoft**, signs in, and accepts Netwrix's application, "Netwrix 1Secure AI Security", for the whole directory. You paste nothing. The one-click registration carries eighteen Microsoft Graph permissions. [What the one-click registration carries and what it doesn't](#what-the-one-click-registration-carries-and-what-it-doesnt) lists them with the few it lacks.

* **Your own app registration** is the other path. Create the registration in the Microsoft Entra admin center, add the permissions yourself, click **Use an app registration instead** in the dialog, and paste its Directory (tenant) ID, Application (client) ID, and client secret.

:::info
On both paths, the Azure roles, the Power Platform registration and application users, the directory roles, and the SharePoint site grants are separate steps that no consent screen grants.
:::

:::info
An organization reads one Microsoft tenant: the Microsoft Entra ID source's directory, or else the first Microsoft source's. Each Microsoft platform has one source, so when it's connected its row offers **Open** and no **Connect another**. AI Security refuses a second source of the platform, for example "A SharePoint Online source is already connected. Open it to add sites or change its credential." It refuses an app registration in another tenant with "This organization reads the Microsoft tenant", the tenant's ID, and "To read another tenant, connect it in a second organization." The registration fields say "The registration must be in this organization's Microsoft tenant."
:::

## If you use the Get started wizard

The Get started wizard is the first run that AI Security opens until your organization has a source connected. [The Get started page](/docs/1secureaisecurity/configuration/the-get-started-page.md) describes it. If you connect Microsoft there, the wizard walks you through the grants of the next section.

In the wizard, **Connect Microsoft** lists the permissions the chosen platforms need, in order. It tests no source but Microsoft Entra ID until you answer each one. **Sign in and consent** comes first. Its sign-in also asks for the delegated permission that the Entra AI Reader role grant uses, so that grant opens no Microsoft window. It asks nothing for Azure, Power Apps, or Dynamics 365: **Azure Reader roles** and **Power Platform application user** each open a Microsoft window for their own service when granted, a skipped line asks for nothing, and in a tenant without the service only that line says so.

The lines after it are:

* **Azure Reader roles**, for Azure AI Foundry, Azure Bot Service, Logic Apps, and Azure RBAC, on the subscriptions you tick.
* **Entra AI Reader role**, for Copilot Studio.
* **Power Platform application user**, which registers the Power Platform management application and adds 1Secure as an application user in each environment you tick, for Power Platform and Copilot Studio.
* **SharePoint sites**, where **Ask me each time** records **Selected sites** with no window and **Read every site now** grants `Sites.FullControl.All`.

Each of the first three offers **Grant with my sign in**, **Do it myself**, which opens the steps by hand with **Test again**, or **Skip**. **Continue** then creates every Microsoft source you chose and tests it once, apart from a source whose permission you skipped, which is created untested. [Add additional permissions](/docs/1secureaisecurity/configuration/add-additional-permissions.md) has the detail.

## Connect the sources in order

Following this order avoids rework.

1. Connect Microsoft Entra ID first. Its registration is the one every other Microsoft source reads with. Four reads use it with no row or credential of their own: the Purview audit log, Microsoft Security Copilot, and, through Azure RBAC, Azure Logic Apps and Azure Bot Service. Microsoft Defender for Endpoint has a row but no fields, and reads with the Entra ID source's registration. Its dialog says "Uses the app registration of your Microsoft Entra ID source. Nothing to enter." Without Entra ID connected, none of these runs, and Defender for Endpoint says "Microsoft Entra ID not connected".
2. Add the Microsoft Graph permissions and directory roles on the registration. Add every Graph application permission that [What each source needs](#what-each-source-needs) lists, grant admin consent, then assign the AI Reader directory role. This enables Agent 365, SharePoint Online, SharePoint agents, Copilot Studio's inventory, the audit log reads, and Defender's agent list. Without consent, each source that needs a permission fails its test, or scans and lists what it couldn't read as skipped.
3. Assign Azure Reader on every subscription, or once on a management group above them. This enables Azure RBAC, Azure AI Foundry, Logic Apps, and Bot Service. Without it, the Azure RBAC and Azure AI Foundry tests fail and nothing in Azure is read. Reader also carries the eligible schedule and Activity Log reads, so no custom role is needed.
4. Assign Foundry User, formerly Azure AI User, on each Foundry account. Click **Let 1Secure do it** on the **Azure Reader on your subscriptions** card to assign it on the Foundry projects you select. A card is a panel in a source's drawer on the **Sources** page that grants a permission the source's last test found missing. It assigns the role once on each Foundry account, the Foundry resource that holds those projects. It does this in the same sign-in that assigns Reader. Every project of that account inherits the role, including projects you create later.
5. Read the Power Platform policies. Click **Finish Power Platform setup** on the **Power Platform policies** card. While a Power Platform administrator or Global Administrator signs in, it reads the tenant's data policies and tenant isolation once, and scans use that dated copy. The same sign-in adds the application users.

   Registering the app as a Power Platform management application is optional. Tick **Also register the management application** on the same card. It reads the policies at every scan and enables environment discovery for Power Platform and Copilot Studio. Without it, Power Platform lists every environment from the tenant inventory under the AI Reader role and names each as not read, because that list carries no environment's Dataverse address. AI Security reads only the environments you name: the **Environment URLs** of Power Platform and the **Environment URL** of Copilot Studio. Copilot Studio still lists every agent from the tenant inventory, and reads knowledge sources only in those environments.

   If the Power Platform test sees no environment, or none that admits the app as an application user, the source's row reads "Needs a grant" rather than failed. The **Power Platform management application** card then offers the same registration with "Let 1Secure do it", and you add the application users of step 6 by hand.
6. Add an application user in each Power Platform environment with the roles in the Copilot Studio and Power Platform rows of [What each source needs](#what-each-source-needs). This enables the flows' reach and runs, and Copilot Studio knowledge sources. Without it, AI Security lists flows from the tenant inventory only, and agents' reach reads as unknown. 1Secure adds the application user for you, with Agent Viewer and 1Secure Flow Reader, in each environment where the account that signs in is a System Administrator. In the Get started wizard, the **Power Platform application user** line of **Connect Microsoft** does it with **Grant with my sign in** in the environments you tick, and registers the management application in the same grant. Later, "Let 1Secure do it" under **Power Platform application users** on the Power Platform card of the **Sources** page does the same. Add the application user by hand where no System Administrator of the environment signs in.
7. Grant the SharePoint site permissions: `Sites.FullControl.All` on the registration, or `Sites.Selected` with full control on each site you approve. This enables which apps reach which sites. Without it, AI Security reports apps holding `Sites.Selected` as reaching unknown sites.
8. Test each source. On the **Sources** page, select each source and click **Test**. A green test proves the first read only, so read the warnings too. The test names each required permission the registration lacks as a warning, and each optional one it lacks with what it reads, under "Optional, not granted". On a source connected with **Sign in with Microsoft**, it also names each permission that a platform needs and the tenant wasn't granted. After a consent, those are permissions the registration doesn't ask for, so signing in again grants nothing: "The registration 1Secure reads with does not ask for [permissions]. Its owner adds them as application permissions with admin consent, then test again." A missing required permission makes the test a warning. A missing optional one leaves it as it was.
9. Run the first scan. Only a scan proves some grants: the audit log, Foundry User, the eligible schedules, the Activity Log, and the Standard logic app workflows.

:::info
A role granted in Microsoft Entra ID takes a short time to apply, so a test right after a grant can still be refused. Test again after a couple of minutes.
:::

## What each source needs

Admin consent means **Grant admin consent for** your tenant under **API permissions**, after which the row reads "Granted". The last column says what happens when the grant is missing. A scan that reads to the end with a grant missing reads "Succeeded" and lists what it skipped. Only a read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| Source | Grant | Kind | Admin consent | Who grants it | Where | When it is missing |
|--------|-------|------|---------------|---------------|-------|--------------------|
| Microsoft Entra ID | `Application.Read.All` and `User.Read.All`. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, App registrations, API permissions. | The test fails. A scan can't run. |
| | `DelegatedPermissionGrant.Read.All`, for the delegated permission grants. | Graph application permission. | Yes. | Same. | Same. | The test fails. A scan can't run. |
| | `Policy.Read.All`. | Graph application permission. | Yes. | Same. | Same. | The scan succeeds and lists the settings as skipped. Consent settings read as unknown. |
| | `Policy.Read.PermissionGrant`, which Microsoft Graph wants for the permission grant policies in place of `Policy.Read.All`. | Graph application permission. | Yes. | Same. | Same. | The scan succeeds and lists the policies as skipped. Grant policies read as unknown. |
| | `AuditLog.Read.All`, with Microsoft Entra ID P1 for sign-in data. | Graph application permission. | Yes. | Same. | Same. | The scan succeeds and lists the sign-in data as skipped. Stale agent and usage signals are missing. |
| | `RoleManagement.Read.Directory`. | Graph application permission. | Yes. | Same. | Same. | The scan succeeds and lists the directory roles as skipped. Directory roles read as unknown. |
| | `Organization.Read.All`. | Graph application permission. | Yes. | Same. | Same. | The scan succeeds and lists the verified domains as skipped. Every host an agent calls reads as not stated, never as inside or outside the company. |
| | `Reports.Read.All`, for the Microsoft 365 Copilot usage report. | Graph application permission. | Yes. | Same. | Same. | The test names it under "Optional, not granted". The scan succeeds and lists people's Copilot use as skipped. None reaches the **Activity** tab. |
| Purview audit log, on Entra ID | `AuditLogsQuery.Read.All`, and Purview Audit (Standard) on for the tenant. | Graph application permission and license. | Yes. | Same. | Same, and the Microsoft Purview portal under Audit. | The Entra ID scan succeeds and lists the audit log as skipped, for a missing permission or license. The test doesn't reach it. |
| Security Copilot, on Entra ID | Nothing beyond Entra ID. | | | | | |
| Agent 365 | `CopilotPackages.Read.All`. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The test fails. |
| | A Microsoft Agent 365 license, with at least one package in the catalog. | License. | No. | Your Microsoft account team. | | The test fails. No permission fixes it. |
| | `AppCatalog.Read.All`. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | Publishing shows as unknown rather than draft. |
| Copilot Studio | AI Reader directory role. | Directory role on the app. | No. | Global Administrator or Privileged Role Administrator. | Entra admin center, Roles & admins. | The test fails. Nothing is read. |
| | `GroupMember.Read.All`, or `Group.Read.All`. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The scan reports a refused groups read. Agents shared with a team list no group for it. |
| | Power Platform management application. | Tenant registration. | No. | Power Platform administrator or Global Administrator. | PowerShell, or "Let 1Secure do it" on the **Sources** page. | AI Security still lists every agent from the tenant inventory. It reads knowledge sources only in the environments you named in **Environment URL**, and an agent in any other environment has unknown reach. The scan succeeds and lists the environment list as skipped. |
| | Application user with Agent Viewer, or a role reading `botcomponent`. | Environment security role. | No. | System Administrator of that environment. | Power Platform admin center, Settings, Application users, or "Let 1Secure do it" on the **Sources** page. | The test warns and names the environment. Reach reads as unknown. The **Power Platform application users** card asks for it. |
| | A custom role with Read on `bot` at Business Unit level or deeper, on `team`, and on `systemuser`. Agent Viewer reads `bot` at User level only. | Environment security role. | No. | Same. | Same. | The test warns and names the missing privileges. The scan reports a refused read of users or shared access. The 1Secure Flow Reader role that 1Secure adds holds all three at Organization depth. |
| Power Platform | Application user with Organization Read on Process, Connection Reference, Connector, User, and Flow Run. | Environment security role. | No. | System Administrator of that environment. | Power Platform admin center, Settings, Security roles and Application users. | The test warns if the tenant inventory answers, and fails otherwise. |
| | Power Platform management application, optional, when "Find every environment for me" is selected. | Tenant registration. | No. | Power Platform administrator or Global Administrator. | PowerShell, or **Also register the management application** with "Finish Power Platform setup" on the Power Platform policies card. | The test fails. |
| | The policy snapshot, or the management application, for the data policies and tenant isolation. | An administrator's sign-in, or the tenant registration. | No. | Power Platform administrator or Global Administrator. | "Let 1Secure do it" on the Power Platform policies card. | The scan succeeds and lists the policies as skipped. Data policies and tenant isolation read as unknown. |
| SharePoint Online | `Sites.Read.All`. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The test fails. |
| | `Sites.FullControl.All`, or `Sites.Selected` with full control on each site. | Graph application permission, or a site grant. | Yes. | Global Administrator or Privileged Role Administrator, and for a site grant an administrator with full control of that site. | Entra admin center, or "Let 1Secure do it" on the SharePoint site permissions card. | The test warns that site permissions are unreadable. Apps on `Sites.Selected` reach unknown sites. |
| | `Reports.Read.All`, `SharePointTenantSettings.Read.All`, `Group.Read.All`, `Application.Read.All`, `InformationProtectionPolicy.Read.All`. | Graph application permissions. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The scan succeeds and lists the read as skipped, naming the permission. |
| SharePoint agents | `Sites.Read.All`. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The test fails. |
| Azure RBAC | Reader. | Azure role, each subscription or a management group. | No. | Owner or User Access Administrator. | Azure portal, Access control (IAM). | The test fails. If some subscriptions refuse, the test warns. |
| | The same Reader, which carries `Microsoft.Authorization/roleEligibilityScheduleInstances/read` and `roleAssignmentScheduleInstances/read`. | Azure role, each subscription. | No. | Owner or User Access Administrator. | Azure portal, Access control (IAM). | The scan succeeds and lists the schedules as skipped. No role is called standing. |
| | Reader or Monitoring Reader, for the Activity Log. | Azure role, each subscription. | No. | Owner or User Access Administrator. | Azure portal, Access control (IAM). | The scan succeeds and lists the Activity Log as skipped. No role assignment change is read. |
| | `Application.Read.All`, for the identities the role assignments name where the scan doesn't read the directory. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The scan reports a refusal. The role assignments and changes of those identities are left out. |
| Logic Apps, on Azure RBAC | The same Reader. | Azure role. | No. | Owner or User Access Administrator. | Azure portal. | The Azure RBAC scan succeeds and lists the refused read as skipped. A Standard logic app that can't be read is listed as a host. |
| Bot Service, on Azure RBAC | The same Reader. | Azure role. | No. | Owner or User Access Administrator. | Azure portal. | The Azure RBAC scan succeeds and lists the refused read as skipped. A bot whose channels can't be read is listed with the channels its own resource names. |
| Azure AI Foundry | Reader. | Azure role, each subscription or a management group. | No. | Owner or User Access Administrator. | Azure portal, Access control (IAM). | The test fails. |
| | Foundry User, formerly Azure AI User. | Azure role, each Foundry account, which its projects inherit, or each Foundry project where you assign it by hand. | No. | Owner or User Access Administrator on the account or project. | "Let 1Secure do it" on the **Azure Reader on your subscriptions** card, which assigns it on the account, or the Azure portal, the account's or project's Access control (IAM). | The scan succeeds and lists the agents as skipped. Agents read as unknown. The test doesn't reach it. |
| Defender for Endpoint, on Entra ID | `ThreatHunting.Read.All`, for every read. | Graph application permission. | Yes. | Global Administrator or Privileged Role Administrator. | Entra admin center, API permissions. | The test fails, and the scan lists the reads it couldn't make as skipped. |
| | The same `ThreatHunting.Read.All`, with security for AI agents on in the Defender portal, for the agents Defender lists. | Graph application permission. | Yes. | Same. | Same. | The scan lists the agents as skipped. If the setting is off, it says so. |

The tenant also needs Microsoft Defender for Endpoint, or Defender for Servers, with machines onboarded, or the scan reports that Defender isn't provisioned. Copilot Studio agents exist only where somebody holds a Copilot Studio license, or Agent Builder in a Microsoft 365 Copilot tenant.

Two Power Platform roles don't help an app. A Power Platform administrator isn't a System Administrator of an environment until you give that role there, and no directory role opens the environment list to an app. Only the management application registration does.

## What the one-click registration carries and what it doesn't

* **It carries eighteen Microsoft Graph application permissions:** `AppCatalog.Read.All`, `Application.Read.All`, `AuditLog.Read.All`, `AuditLogsQuery.Read.All`, `CopilotPackages.Read.All`, `DelegatedPermissionGrant.Read.All`, `Group.Read.All`, `InformationProtectionPolicy.Read.All`, `Organization.Read.All`, `Policy.Read.All`, `Policy.Read.PermissionGrant`, `Reports.Read.All`, `RoleManagement.Read.Directory`, `SharePointTenantSettings.Read.All`, `Sites.Read.All`, `Sites.Selected`, `ThreatHunting.Read.All`, and `User.Read.All`. So Microsoft Entra ID, Agent 365, SharePoint Online, and SharePoint agents read on this path, and Azure RBAC and SharePoint Online name the apps and agent identities their grants name by ID. It doesn't carry `Directory.Read.All`, and no read needs it.
* **A tenant whose consent doesn't hold every permission reconnects once.** The test warns "Your tenant consented to an older permission list. Reconnect with Microsoft to grant the rest." Open the Microsoft Entra ID source, click **Reconnect** or **Sign in with Microsoft**, and accept.
* **`Sites.Read.All` is the discovery permission for SharePoint.** It finds SharePoint agents on every site, lists their document libraries, and reads the agent files, their grounding items, and their access lists. It also drives what the SharePoint Online inventory reads. Without it, a scan finds agents only on sites you already approved. It reads nothing else: no document is opened except an agent definition, and no content leaves your tenant.
* **It carries `Sites.Selected` in place of `Sites.FullControl.All`.** "Let 1Secure do it" on the SharePoint site permissions card records Selected sites, and 1Secure asks you to approve each site as a scan finds agents using it. Each approved site is granted full control, and its grants are read. On sites you haven't approved, AI Security reports apps holding `Sites.Selected` as reaching unknown sites.
* **Defender for Endpoint needs no WindowsDefenderATP permission.** Every Defender for Endpoint read is a Microsoft Graph advanced hunting query under `ThreatHunting.Read.All`, which the registration carries. There's no Defender grant to finish and no Defender row in **Finish your Microsoft setup**.
* **It can't carry Azure roles.** Grant Reader with "Let 1Secure do it" on the **Azure Reader on your subscriptions** card, or assign it in the Azure portal. "Let 1Secure do it" signs you in once more and grants Reader on the subscriptions you select, and Foundry User, formerly Azure AI User, on the Foundry projects you select, assigned once on each Foundry account that holds them. Your account needs Global Administrator or Privileged Role Administrator in the directory, and Owner or User Access Administrator on the subscriptions and projects. The card then says how many of each, for example "Reader on 3 subscriptions, Foundry User on 2 projects", with who signed in and the date.
* **It can't read the Power Platform policies or register the management application.** Click "Finish Power Platform setup" on the Power Platform policies card, signed in as a Power Platform administrator or Global Administrator. It reads the policies once and keeps them with the date. The source then shows "Policies as of" and the date. To read them at every scan instead, tick **Also register the management application** before you start, or register it with PowerShell. A System Administrator of each environment adds the application users. The same sign-in adds them in the environments you tick, after you use **Membership**, **Add me** in each environment. It says who added them and when, and names each environment it skipped. Add the rest by hand.

If a source is on the one-click registration and a grant it needs isn't carried, the source's test or scan names it, as the table in [What each source needs](#what-each-source-needs) shows.

## Check before you scan

- [ ] Microsoft Entra ID tests "Succeeded".
- [ ] Every row under **API permissions** on the registration reads "Granted".
- [ ] The app holds the AI Reader directory role.
- [ ] Purview Audit is on for the tenant.
- [ ] Reader is assigned on every subscription to cover, or on a management group above them.
- [ ] Foundry User, formerly Azure AI User, is assigned on every Foundry project.
- [ ] The Power Platform source shows "Policies as of" and a date, or the app is registered as a Power Platform management application.
- [ ] Every environment to cover has the app as an application user, with Organization Read.
- [ ] SharePoint Online tests "Succeeded", not "Warning" about unreadable site permissions.
- [ ] The Defender for Endpoint row is connected and its test doesn't fail.

## The detail, source by source

* [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md)
* [Purview audit log](/docs/1secureaisecurity/configuration/sources/purview-audit-log.md)
* [Microsoft Security Copilot](/docs/1secureaisecurity/configuration/sources/microsoft-security-copilot.md)
* [Agent 365](/docs/1secureaisecurity/configuration/sources/agent-365.md)
* [Microsoft Copilot Studio](/docs/1secureaisecurity/configuration/sources/microsoft-copilot-studio.md)
* [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md)
* [SharePoint Online](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md)
* [SharePoint agents](/docs/1secureaisecurity/configuration/sources/sharepoint-agents.md)
* [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md)
* [Azure Logic Apps](/docs/1secureaisecurity/configuration/sources/azure-logic-apps.md)
* [Azure Bot Service](/docs/1secureaisecurity/configuration/sources/azure-bot-service.md)
* [Azure AI Foundry](/docs/1secureaisecurity/configuration/sources/azure-ai-foundry.md)
* [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md)
