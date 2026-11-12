---
title: "Microsoft Entra ID"
description: "Connect Microsoft Entra ID so AI Security can read your whole directory with Microsoft Graph application permissions, by consent or with your own app registration."
sidebar_position: 17
---

# Microsoft Entra ID

Connect Microsoft Entra ID so AI Security can read your whole directory with Microsoft Graph application permissions, rather than what one user can see. It only reads. You either sign in with Microsoft and accept Netwrix's application, or create an app registration in Microsoft Entra and enter it in 1Secure.

## Before you start

* Have a Global Administrator or Privileged Role Administrator grant the admin consent. An Application Administrator can create the registration but can't consent to application permissions.
* Sign in to the Microsoft Entra admin center at entra.microsoft.com.
* Have a password manager open. Microsoft shows the client secret once.

## Choose how to connect

If the dialog shows **Sign in with Microsoft**, use it, and skip the two sections after it. Otherwise, create an app registration.

The dialog names the Microsoft sources that the registration also connects, after "This registration also connects", for example Agent 365 and SharePoint Online. It lists each Microsoft source that reads with this registration, needs nothing entered, and isn't connected yet. After the Microsoft Entra ID test reads, AI Security connects and tests each of them on the registration, whichever way you connect. Their source drawers then say "Connected through Microsoft Entra ID".

:::info
An organization reads one Microsoft tenant and holds one Microsoft Entra ID source. After it's connected, its row on the **Sources** page offers **Open**, and no **Connect another**. AI Security refuses a second one with "A Microsoft Entra ID source is already connected. Open it to change its credential." To read another tenant, connect it in a second organization.
:::

## Connect with Microsoft

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Microsoft Entra ID".
3. In the Microsoft Entra ID row, click **Connect**. The **Connect Microsoft Entra ID** dialog opens.
4. Click **Sign in with Microsoft**.
5. Sign in as a Global Administrator or Privileged Role Administrator.
6. Review the permissions, which the table under [Permissions](#permissions) lists, and click **Accept**.
7. Back in 1Secure, the dialog tests the connection and shows the result. Click **Done**.

You consent to Netwrix's application, which Microsoft's consent screen names "Netwrix AI Security (Beta)", for your whole directory. Nothing is created in your directory beyond its enterprise application, and 1Secure stores no secret of yours. It records the directory, who consented, and when. The dialog then shows "Connected with Microsoft by" that account.

To revoke, open **Entra ID > Enterprise apps**, select the application, select **Properties**, and click **Delete**. The next test says Microsoft no longer accepts the consent.

## Sign in as a guest

An administrator invited into the tenant as a guest, such as a partner who manages it, signs in to that tenant, not to their own. Microsoft otherwise sends a guest to their home tenant, where they aren't an administrator, and shows that tenant's approval form instead.

1. Under **Sign in with Microsoft**, click **If you sign in as a guest of another tenant, enter its domain**.
2. In **Tenant domain or ID**, enter one of the tenant's domains, such as contoso.onmicrosoft.com, or its tenant ID.
3. Click **Sign in with Microsoft** and sign in with your own account.

The source keeps the tenant when it connects. A reconnect, and every other Microsoft source of the organization, then signs in to that tenant without asking again. The account still needs the Global Administrator or Privileged Role Administrator role in that tenant.

## Create the app registration in Microsoft Entra

1. Select **Entra ID > App registrations**.
2. Click **New registration**.
3. In **Name**, enter a name, for example "Netwrix 1Secure AI Security".
4. Under **Supported account types**, keep **Single tenant only**, which older layouts call **Accounts in this organizational directory only**.
5. Leave the redirect URI empty, and click **Register**.
6. On the app's **Overview**, copy the **Directory (tenant) ID** and the **Application (client) ID**.
7. Select **Certificates & secrets > Client secrets**, and click **New client secret**.
8. Choose an expiry, and click **Add**.
9. Copy the secret's **Value** now.
10. Select **API permissions**, click **Add a permission**, select **Microsoft Graph**, and then select **Application permissions**.
11. Add `Application.Read.All`, `User.Read.All`, `DelegatedPermissionGrant.Read.All`, `Organization.Read.All`, `Policy.Read.All`, `Policy.Read.PermissionGrant`, `AuditLog.Read.All`, `AuditLogsQuery.Read.All`, `RoleManagement.Read.Directory`, and `Reports.Read.All`.
12. Click **Grant admin consent for** your tenant, and then click **Yes**.

Every row's status turns to "Granted for" your tenant.

:::info
The same registration connects Azure AI Foundry, Azure RBAC, Copilot Studio, Agent 365, SharePoint Online, SharePoint agents, Power Platform, and Microsoft Defender for Endpoint. Each needs grants of its own, listed on its page.
:::

## Connect the source with your app registration

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Microsoft Entra ID".
3. In the Microsoft Entra ID row, click **Connect**. The **Connect Microsoft Entra ID** dialog opens.
4. If the dialog shows **Sign in with Microsoft**, click **Use an app registration instead**.
5. In **Directory (tenant) ID**, enter the Directory (tenant) ID.
6. In **Application (client) ID**, enter the Application (client) ID.
7. In **Client secret value**, paste the secret's Value.
8. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
9. Click **Done**.

If Microsoft refused the test, or the test of a Microsoft source that reads with this registration, because of permissions that **Connect with Microsoft** grants, a line before **Done** says so, for example "This registration is missing 3 permissions that Connect with Microsoft grants in one step.", with **Connect with Microsoft**. If your sign-in for it was refused because you aren't an administrator, the line says "Needs a Global Administrator. Send them the link." with the link to send.

Select the Microsoft Entra ID row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", and the date of the test. |
| Last scanned | "Never" until a scan runs, then "Succeeded", with anything the scan couldn't read listed as skipped, or "Partly scanned" when the page limit cut a list or the activity read stopped with an error. An activity read that runs out of time still ends "Succeeded" and says where it stopped. |

A scan of this source also reads the other Microsoft platforms that the same three values unlock, not only the directory. If the registration lacks permissions for another Microsoft platform, that platform's own source lists what it skipped and reads "Succeeded", or reads "Failed" if it read nothing. If a platform is refused outright because the tenant has nothing there for it to read, such as no Azure subscription, no license for the product, or the product not set up, it reads "Not set up" with the reason. Another platform's refusal doesn't change the Entra ID source's **Last scanned** status.

The test signs in as the registration, reads one service principal from the directory, and then reads one delegated permission grant. Microsoft issues a token to a registration that holds no Graph permission at all, so the reads are what prove the grants. A registration whose directory permission or `DelegatedPermissionGrant.Read.All` is missing or not consented fails the test. A scan, not this test, proves other Microsoft platforms' grants, so check that every row under **API permissions** says "Granted".

## What this connector reads

* Every service principal in the directory, and which are managed identities, agent identities, and agent identity blueprints. The **Identities** page leaves off Microsoft's own service apps and Microsoft's P2P Server. Microsoft's own AI applications and the blueprints your agent identities are built from stay. AI Security also reads an agent that runs on an ordinary service principal, which Microsoft tags `AgenticInstance`, as an agent identity, with no blueprint.
* Each app registration's secrets and certificates: names, start dates, and end dates, never the values. An application's client secrets raise one issue, "Application authenticates with a client secret". If a secret is valid for longer than six months, that issue says how long the longest-lived one is valid for, and is high. A certificate valid that long, or a secret with no end date, raises its own "Certificate valid for longer than six months, or a credential that never expires" issue.
* The owners of each service principal, with the owner's department, job title, enabled state, and manager, and the owners of each blueprint, with their enabled state.
* The sponsors of each agent identity, and the user account paired with it.
* The application and delegated permissions granted to each service principal.
* The directory roles each service principal, agent identity, and person holds, and which of them are privileged. AI Reader, which Microsoft marks privileged and which only reads, never raises "Application or agent identity holds a privileged directory role", on any app.
* Who consented to an application and when, and who added a secret or certificate to an app registration and when, from the directory audit log.
* When each service principal last signed in, and how many people signed in over the last day to each AI app and each app suspected of being one.
* The sign-ins of each AI-related service principal or managed identity. AI Security counts each one on the identity. A sign-in gets an activity record of its own only when it failed, was the identity's first in the window, or came from an app or IP address that the identity hadn't used earlier in the window. Each sign-in by a person to an agent's app is one activity record. A failed sign-in keeps Microsoft's error code and failure reason.
* Microsoft 365 Copilot use, from Microsoft's Copilot usage report rather than the sign-in log: one record for each person, Copilot app, and last day of use.
* Who changed each service principal and when, from the directory audit log: disabled, a secret or certificate added, a directory role or an application permission given, an owner added or removed, and the service principal added.
* The people in the directory, and the people recently deleted, so AI Security can tell an owner who has left from one the directory never held.
* The tenant's user consent, app registration, and admin consent workflow settings. Their issues appear on **Microsoft tenant settings**, the tenant itself, rather than on any application. It has no owner and no page to open.
* Copilot and agent activity from the Microsoft Purview unified audit log.

Set how far back scans read sign-ins and change audits under **Settings** in the Activity window. A scan that can't read all the activity in one scan lists where it stopped among the skipped items of the Entra ID source, for example "Sign ins after 18 Sep 01:44 UTC, which the next scans read.", with no To fix line, because there's nothing to do. The scan still ends "Succeeded". 1Secure then starts a follow-on scan itself, which reads on from where this one stopped and shows inside this scan under **Automatic retries**. A follow-on scan reads the sign-ins and change audits only, not the directory again. If a day of a log can't be read, the scan lists the log and the days among the skipped items, keeps the other days, and reads that day again on the next scan. See [Activity read over more than one scan](/docs/1secureaisecurity/admin/scans.md#activity-read-over-more-than-one-scan).

{/* TODO: confirm whether to publish the activity read limits (pages per read, the shared hour, and the 150,000 row limit) so customers can plan scan schedules. */}

AI Security asks Microsoft Graph for sign-ins only for the apps and identities it needs. For people signing in interactively, it reads agent and AI apps, and apps that aren't Microsoft's own, hold a permission that reaches your data, and show a sign of AI of their own. For service principals and managed identities, it reads only the AI-related identities: agent identities and blueprints, Microsoft's own AI apps, and the apps 1Secure knows as AI by their name, publisher, or reply address. Every other identity keeps its last sign-in, from the last sign-in report, with no sign-in records.

AI Security signs in as this app registration too, and those sign-ins land in the same log. The scan leaves this registration's own sign-ins out of the activity, whether successful or failed. Another app registration entered on a Microsoft source keeps its sign-ins. AI Security folds its successful ones to one row per hour that states how many sign-ins the hour held, and its failed ones stay one row each.

The activity read also needs Microsoft Purview Audit (Standard) on the tenant, which Microsoft 365 E3 and E5 plans include. Without the license, or without `AuditLogsQuery.Read.All`, the connector still reads agents and grants. The scan lists the Purview audit log among the skipped items, and **Last scanned** still reads "Succeeded". Without the permission, the line says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLogsQuery.Read.All as an application permission and grant admin consent, and turn on Purview Audit." Without the license, or with Audit off, it says: "Turn on Purview Audit in the Microsoft Purview portal, on a plan that includes Audit (Standard), such as Microsoft 365 E3 or E5." Activity for Microsoft agents stays "Not measured" until both are in place.

### What it never touches

* It never writes. Every call is a read. The Purview audit search adds a search to the list Purview keeps and changes nothing else. See [Purview audit log](/docs/1secureaisecurity/configuration/sources/purview-audit-log.md).
* It never receives a secret value. Microsoft Graph returns a credential's name and dates, never its value.
* From each sign-in record it keeps who signed in, to which app and which resource, when, from which IP address, whether it worked and, for a service principal, the credential type and the city, state, and country Microsoft placed the address in. It keeps no device, and no location for a person's sign-in.
* It reads no mail, no files, and no chat.

## Permissions

| Microsoft Graph application permission | What AI Security reads with it | Scan without it |
|----------------------------------------|--------------------------------|-----------------|
| `Application.Read.All` | App registrations and their credential dates, owners, app role assignments, and sponsors. | The scan raises no credential findings, and owners and sponsors are unknown. |
| `User.Read.All` | Owner details, sponsors, and the user paired with an agent identity. | The scan keeps the owner link, and not the owner's details. |
| `DelegatedPermissionGrant.Read.All` | The delegated permissions granted to each service principal. | A scan can't run. |
| `Organization.Read.All` | The organization's verified domains, which tell a host an agent calls inside the company from one outside it. | Every host an agent calls reads as not stated, never as inside or outside, and the scan names `Organization.Read.All` as the permission that adds them. |
| `Policy.Read.All` | The consent and app registration settings. | Those settings read as unknown, never as off. |
| `Policy.Read.PermissionGrant` | The permission grant policies, the conditions users can consent to apps on, because Microsoft Graph refuses `Policy.Read.All` for this list. | The grant policies read as unknown, never as off. |
| `AuditLog.Read.All` | Sign-in activity, consent history, and who added a secret or certificate, where sign-in data also needs Microsoft Entra ID P1. | Stale agent and usage signals are missing, and a credential added names nobody. |
| `AuditLogsQuery.Read.All` | The unified audit log for Copilot and agent activity. | Activity records for Agent 365, Copilot Studio, and SharePoint agents are missing. |
| `RoleManagement.Read.Directory` | Directory role assignments, such as Global Administrator held by an application or agent identity. | Directory roles read as unknown, never as none, and the scan doesn't raise the privileged role finding. |
| `Reports.Read.All` | The Microsoft 365 Copilot usage report: who used Copilot, in which app, and on which day. The test names it where it's missing. | People's Copilot use doesn't reach the **Activity** tab, and the scan names `Reports.Read.All`. |

The first two reads are the service principal list and the delegated permission grants, and a scan can't run without them. The test makes both reads. If Microsoft refuses the service principal list, the scan says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Application.Read.All as an application permission and grant admin consent." If Microsoft refuses the delegated grants, it says: "Microsoft refused the list of delegated permission grants: grant DelegatedPermissionGrant.Read.All with admin consent, then scan again." Grant `Application.Read.All`, `User.Read.All`, `DelegatedPermissionGrant.Read.All`, and `Organization.Read.All`, as the table shows.

### What Connect with Microsoft carries

Netwrix's application carries eighteen Microsoft Graph application permissions: `AppCatalog.Read.All`, `Application.Read.All`, `AuditLog.Read.All`, `AuditLogsQuery.Read.All`, `CopilotPackages.Read.All`, `DelegatedPermissionGrant.Read.All`, `Group.Read.All`, `InformationProtectionPolicy.Read.All`, `Organization.Read.All`, `Policy.Read.All`, `Policy.Read.PermissionGrant`, `Reports.Read.All`, `RoleManagement.Read.Directory`, `SharePointTenantSettings.Read.All`, `Sites.Read.All`, `Sites.Selected`, `ThreatHunting.Read.All`, and `User.Read.All`. That covers this page, the Agent 365, SharePoint Online, SharePoint agents, and Azure RBAC directory reads, and every Defender for Endpoint read except its optional account read. It doesn't carry `Directory.Read.All`, and no read needs it.

:::info
The one-click registration carries every permission in the table. A tenant that consented before `DelegatedPermissionGrant.Read.All` was added holds the older set, so Microsoft refuses the delegated grants and the scan can't run. Reconnect with Microsoft once: click **Sign in with Microsoft** again and accept, so the tenant consents to the new permission.
:::

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three values isn't stored. | Click **Edit**, and enter all three. A value left empty keeps the stored one. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter the three values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in: the secret is wrong or expired, or an ID belongs to another directory. | Check the secret's expiry under **Certificates & secrets**, create a new one if needed, and check both IDs on **Overview**. |
| "The credential works, but access was denied. A permission is missing." | The sign-in worked and Microsoft refused the directory read or the delegated grants read. The test names the permissions the registration is missing, or says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Application.Read.All as an application permission and grant admin consent." | Add the named permissions as application permissions under **API permissions**, click **Grant admin consent**, and test again. On a source connected with Microsoft, reconnect with Microsoft once. |
| "The platform didn't answer, or said it is down or busy." | Microsoft's sign-in service didn't answer AI Security. If Microsoft Graph answered the directory read with a server error, the test shows this as a warning, because a server error says nothing about the permissions. | Check that your network allows AI Security to reach login.microsoftonline.com and graph.microsoft.com, and test again. |
| "The platform didn't answer in time." | Microsoft didn't answer in time. | Click **Test again**. If it repeats, check the network path. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned". On a source connected with your own app registration, the lines that name the 1Secure registration name the app registration instead.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with a line among the skipped items that says what wasn't read and what to do, for example "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Policy.Read.All as an application permission and grant admin consent." | AI Security read the directory and a grant was missing. The line says what it didn't read and names the permission the app registration lacks. | Add the permission the line names, and check that every permission in the table under [Permissions](#permissions) shows "Granted" under **API permissions**. |
| "Succeeded", with "Sign ins by people and agents, because this directory has no Microsoft Entra ID P1." among the skipped items | Microsoft refused the sign-in log because the directory has no Microsoft Entra ID P1. The app registration already holds the permission. The scan says: "Add Microsoft Entra ID P1 to this directory, because no permission is missing." | Add Microsoft Entra ID P1 to the directory. |
| "Part of Microsoft Entra ID wasn't read. If it repeats, use Copy for support." | "Partly scanned": AI Security didn't read part of the source, and no line says what. | Scan again. If it repeats, click **Copy for support** and send it to Netwrix support. |
| "Microsoft Entra ID refused the read." | "Failed": Microsoft refused the service principal list or the delegated grants. For the delegated grants the source says: "To fix: Microsoft refused the list of delegated permission grants: grant DelegatedPermissionGrant.Read.All with admin consent, then scan again." | Grant `Application.Read.All`, `User.Read.All`, and `DelegatedPermissionGrant.Read.All` with admin consent. |

:::info
A source connected with Microsoft before `DelegatedPermissionGrant.Read.All` was added to the one-click registration reports the delegated grants read as refused. Reconnect with Microsoft once, and the next scan reads them.
:::

## Security notes

* AI Security stores the three values encrypted when you click **Connect** and never shows them again, to you or to anyone else. The source shows only whether a credential is set and which settings are missing.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* AI Security sends the secret only to Microsoft's token endpoint for your tenant. AI Security reaches only Microsoft's own hosts with the token.
* To revoke access, delete the client secret or the app registration in Microsoft Entra. **Disconnect** on the source removes the stored credential from 1Secure.
* **Disconnect** on the Entra ID source also deletes what AI Security read on its registration for each Microsoft platform that has no source of its own left, such as the Purview audit log, Azure Logic Apps, and Azure Bot Service.
