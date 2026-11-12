---
title: "Remove AI Security from your Microsoft tenant"
description: "Remove the Netwrix application, its permissions, and its roles from your Microsoft tenant so the next connection starts as a first consent."
sidebar_position: 30
---

# Remove AI Security from your Microsoft tenant

Follow this page to return your Microsoft tenant to the state it was in before AI Security connected to it: no Netwrix application, no permission it was granted, no role it holds, and nothing it created. After you finish, the next **Connect with Microsoft** is a first consent again, as a new customer would see it.

Two sides hold a trace: 1Secure, which holds the source and what it read, and your Microsoft tenant, which holds the application and its grants. Clear both, in this order.

## Prerequisites

- A Global Administrator or Privileged Role Administrator in Microsoft Entra ID, for the application and the directory role.
- An Owner of each Azure subscription or management group, for the Azure roles.
- A Power Platform administrator, for the management application.
- A System Administrator in each Power Platform environment, for the application users.

Note which 1Secure organizations hold the tenant. If you connect in a second organization while the first still holds the tenant, the **Connect with Microsoft** dialog on **Sources** says, after you sign in, "Also connected by the [organization] organization; both read the same Microsoft tenant." Clear that organization first. The Get started wizard doesn't show this message.

## 1. Disconnect the Microsoft sources in 1Secure

Do this in every 1Secure organization that holds the tenant.

1. Open **AI Security > Sources**.
2. Select each Microsoft source in turn: Microsoft Entra ID, Agent 365, SharePoint Online, SharePoint agents, Copilot Studio, Azure RBAC, Power Platform, Azure AI Foundry, and Microsoft Defender for Endpoint, where connected.
3. In the drawer's menu, click **Disconnect**.

**Disconnect** deletes the stored credential and everything the source found: its agents, identities, findings, alerts, and scan history. Disconnect Microsoft Entra ID last, because the other Microsoft sources read with its registration. Disconnecting Microsoft Entra ID also deletes what 1Secure read on its registration for a Microsoft platform with no source of its own, such as Logic Apps and Bot Service.

Your browser remembers the Get started page as skipped after you skip it. To see the page from the top again, clear the site data for your 1Secure address in the browser, or open 1Secure in a private window.

## 2. Delete the application in Microsoft Entra ID

Deleting the enterprise application revokes the admin consent, every Microsoft Graph permission it was granted, any Defender for Endpoint permissions it was assigned, the directory role it holds, and every SharePoint site permission it was given. This is the one step that makes the next **Connect with Microsoft** a first consent again.

1. Sign in to the Microsoft Entra admin center as a Global Administrator.
2. Open **Entra ID > Enterprise apps**.
3. Set the filter **Application type** to **All applications**, and search for the application **Connect with Microsoft** added. Its name depends on your 1Secure environment. A connection test of a Microsoft source shows it, as "Tested as the app" and the name.
4. Open the application, open **Properties**, and click **Delete**.

If you connected with your own app registration instead of **Connect with Microsoft**, delete that registration under **Identity > Applications > App registrations**. Deleting the registration deletes its enterprise application and its client secrets with it. If you reuse the registration for something else, remove the AI Security permissions under **API permissions** and the AI Reader role instead, and revoke the client secret you pasted into 1Secure.

A deleted enterprise application stays under **Deleted applications** for thirty days, and you can restore it from there. Leave it there. A restore brings the consent back, and a new connection doesn't use it.

## 3. Remove the Azure roles

**Connect with Microsoft** assigns the Azure Reader role on every subscription the administrator's account could see, and Foundry User (formerly Azure AI User) on each Foundry account that holds an Azure AI Foundry project in them. The Foundry account is the Foundry resource, of type Azure AI Services, that a project sits under.

A subscription or project you cleared later under **Change** keeps its assignment, because 1Secure doesn't remove role assignments. Deleting the application leaves these assignments behind, listed against an identity that no longer exists.

1. In the Azure portal, open each subscription, then **Access control (IAM) > Role assignments**. Where you assigned Reader by hand on a management group, open that group too.
2. Find the rows with the Reader role whose assignee is the 1Secure registration, or shows as **Identity not found** after you delete the application, and remove them.
3. On each Foundry account, do the same for the Foundry User role. Where you assigned Foundry User by hand on a project, open that project too.

## 4. Unregister the Power Platform management application

If you registered 1Secure as a Power Platform management application, with **Also register the management application** on the **Power Platform policies** card, remove the registration. Microsoft gives that registration the same rights as a tenant administrator, and deleting the application in Entra ID doesn't remove it.

Sign in to PowerShell as a Power Platform administrator with the Power Platform administration module, and run:

```powershell
Add-PowerAppsAccount
Get-PowerAppManagementApp
Remove-PowerAppManagementApp -ApplicationId <the application (client) ID of the Netwrix application>
```

`Get-PowerAppManagementApp` lists the registered applications. Take the ID from that list before you delete the application in Entra ID, because the list shows the ID only.

## 5. Remove the application users from your Power Platform environments

1Secure is an application user in an environment where **Let 1Secure do it** under **Power Platform application users** on the Sources page added it, or where you added it by hand. Remove it from each of those environments.

1. Sign in to the Power Platform admin center at admin.powerplatform.microsoft.com.
2. Open **Manage > Environments**, select the environment, and open **Settings > Users + permissions > Application users**.
3. Select the 1Secure application user and click **Delete**.
4. Under **Security roles**, delete the 1Secure Flow Reader role, which 1Secure made where the environment didn't have it, and any role you created for it by hand.

An application user whose application you already deleted in Entra ID still shows in the list and still needs removal here.

## 6. Check the tenant is clean

- **Enterprise apps** holds no 1Secure registration.
- **Entra ID > Roles & admins > AI Reader** lists no Netwrix application.
- No subscription, management group, Foundry account, or Foundry project lists a Reader or Foundry User assignment for it, and none shows **Identity not found**.
- `Get-PowerAppManagementApp` lists no Netwrix application.
- No environment lists a 1Secure application user.
- On the **Sources** page of every organization that held the tenant, no Microsoft source is connected, and the Get started page offers **Connect with Microsoft** from the top.

The next **Connect with Microsoft** then shows the consent screen for the whole directory. The lines after it, such as **Microsoft Entra AI Reader role** and **Azure Reader roles**, are to grant again.

## What isn't undone

- Scans already run left no data in your tenant, because AI Security only reads. There is nothing to clean in Microsoft 365, Azure, or Power Platform beyond the application, its roles, and its users.
- The audit log entries Microsoft wrote for the consent, the role assignments, and the sign ins stay in your tenant's audit logs for their retention period. They record what happened and don't affect a new connection.
