---
title: "What 1Secure can do in your environment"
description: "See every right 1Secure holds in your Microsoft environment, what each is used for, what you lose without it, and which rights you can remove."
sidebar_position: 3
---

# What 1Secure can do in your environment

This page lists every right 1Secure holds in your Microsoft environment when the Microsoft sources are connected, platform by platform: what kind of right it is, what 1Secure uses it for, and what you miss without it. It is the same list the product shows under **What 1Secure can do here** after **Connect Microsoft**, and under **Rights** in each source's drawer on the **Sources** page.

1Secure's scans only read, and 1Secure uses every right on this page for reads. Some of those reads need a right that Microsoft defines more widely than the read, so each right is in one of two categories.

## The two categories

- **Read-only.** A right that can only look. Whoever holds it can read what it covers and change nothing.
- **Read via a privileged right.** A right 1Secure reads with, which Microsoft grants wider than that read: whoever holds it could also change something. 1Secure only reads with it. [The privileged rights](#the-privileged-rights) lists each one, with what Microsoft lets it do and why Microsoft offers no narrower right for the read.

A right shows in the product as **Not granted** where 1Secure asked for it and doesn't hold it, for example an optional read you left for later.

## Microsoft Entra ID

The Purview audit log and Security Copilot read with this registration too. Security Copilot needs no right of its own.

| Right | Kind | Category | What 1Secure uses it for | Without it |
|-------|------|----------|--------------------------|------------|
| Application.Read.All | Graph application permission | Read-only | Reads app registrations, their credentials, owners, and sponsors, and names the apps that Azure role assignments and SharePoint site grants point to. | The Entra ID test fails and no scan runs. |
| User.Read.All | Graph application permission | Read-only | Reads owner and sponsor details, and the user paired with an agent identity. | The Entra ID test fails and no scan runs. |
| DelegatedPermissionGrant.Read.All | Graph application permission | Read-only | Reads the delegated permissions granted to each app, which measure what an agent can reach. | The Entra ID test fails and no scan runs. |
| Organization.Read.All | Graph application permission | Read-only | Reads your verified domains, to tell hosts inside the company from those outside it. | Every host an agent calls reads as not stated. |
| Policy.Read.All | Graph application permission | Read-only | Reads the consent and app registration settings. | Consent settings read as unknown. |
| Policy.Read.PermissionGrant | Graph application permission | Read-only | Reads the permission grant policies. | Grant policies read as unknown. |
| AuditLog.Read.All | Graph application permission | Read-only | Reads sign-in activity and consent history. | Stale agent and usage signals are missing. |
| RoleManagement.Read.Directory | Graph application permission | Read-only | Reads directory role assignments, such as Global Administrator held by an agent. | Directory roles read as unknown. |
| AuditLogsQuery.Read.All | Graph application permission, with a Purview Audit (Standard) license | Read-only | Searches the Purview audit log for Copilot and agent runs. | Copilot and agent activity is skipped. |

## Agent 365

| Right | Kind | Category | What 1Secure uses it for | Without it |
|-------|------|----------|--------------------------|------------|
| CopilotPackages.Read.All | Graph application permission | Read-only | Reads the agent catalog. | The Agent 365 test fails, and no Agent 365 agent is read. |
| AppCatalog.Read.All | Graph application permission | Read-only | Reads publish requests, so an unpublished agent shows as a draft. | Publishing shows as unknown rather than draft. |

## Copilot Studio and Power Platform

| Right | Kind | Category | What 1Secure uses it for | Without it |
|-------|------|----------|--------------------------|------------|
| AI Reader | Entra directory role | Read-only | Lists Copilot Studio and Agent Builder agents and their environments. | The Copilot Studio test fails and nothing is read. |
| Application user in each environment | Dataverse application user | Read-only | Lets 1Secure sign in to each environment's Dataverse. The user can do only what its roles allow. | Flows are listed from the tenant inventory only, and agents' reach reads as unknown. |
| Agent Viewer | Dataverse security role | Read-only | Reads the agents' knowledge sources. | Reach reads as unknown. |
| 1Secure Flow Reader | Dataverse security role that 1Secure creates, with Read on flows, connection references, connectors, users, agents, teams, and flow runs | Read-only | Reads flows, their connectors, owners, and run history, and who each agent is shared with. | Run history and sharing aren't read, and unused flows can't be told apart. |
| System Administrator on the application user | Dataverse security role | Read via a privileged right | Nothing. Microsoft's admin API leaves it in place, as [The privileged rights](#the-privileged-rights) explains. | Nothing. You can trim it. |
| Power Platform management application | Power Platform tenant registration | Read via a privileged right | Lists every environment and its Dataverse address, and reads the data policies and tenant isolation at every scan. | Policies come only from the dated copy, and new environments aren't found. |
| Power Platform policy copy | A one-time read with your sign-in; nothing is held | Read-only | Reads the data policies and tenant isolation once, and keeps them with the date. | Data policies and tenant isolation read as unknown. |

Group.Read.All, listed under SharePoint, names the group or team an agent is shared with. On a Copilot Studio source connected with your own app registration, GroupMember.Read.All is enough for this read, and Group.Read.All covers it too.

## SharePoint Online and SharePoint agents

| Right | Kind | Category | What 1Secure uses it for | Without it |
|-------|------|----------|--------------------------|------------|
| Sites.Read.All | Graph application permission | Read-only | Finds SharePoint agents on every site, lists libraries, reads agent files and their access lists, and reads the site inventory. | The SharePoint tests fail and no SharePoint agent is found. |
| Reports.Read.All | Graph application permission | Read-only | Reads each site's owner, file count, and last activity, and, for Microsoft Entra ID, each person's Microsoft 365 Copilot use from Microsoft's usage report. | Site owner, file count, and last activity aren't read, and Microsoft 365 Copilot use doesn't reach the Activity tab. |
| SharePointTenantSettings.Read.All | Graph application permission | Read-only | Reads the tenant's external sharing settings. | That read is skipped. |
| Group.Read.All | Graph application permission | Read-only | Reads the owners and labels of group-connected sites, and names the Microsoft 365 group or team a Copilot Studio agent is shared with, in place of GroupMember.Read.All. | Those owners and labels, and team shares, are skipped. |
| InformationProtectionPolicy.Read.All | Graph application permission | Read-only | Reads the sensitivity labels, so the labels on files can be named. | Labels aren't named. |
| Sites.Selected, with full control on each site you approve | Graph application permission, with a permission on each site | Read via a privileged right | Reads each approved site's own permissions. | Apps holding Sites.Selected are reported as reaching unknown sites. |
| Sites.FullControl.All | Graph application permission, granted only when you choose **All sites** | Read via a privileged right | Reads every site's permissions. | The SharePoint test warns that site permissions are unreadable, and apps holding Sites.Selected are reported as reaching unknown sites. |

## Azure

Azure RBAC, Azure AI Foundry, Logic Apps, and Bot Service read with these rights. Logic Apps and Bot Service need no right of their own. Azure RBAC also uses Application.Read.All, listed under Microsoft Entra ID, to name the identities its role assignments point to.

| Right | Kind | Category | What 1Secure uses it for | Without it |
|-------|------|----------|--------------------------|------------|
| Reader, on each subscription or once on the root management group | Azure role | Read-only | Reads subscriptions, role assignments, eligible roles, the Activity Log, and Foundry, Logic Apps, and Bot Service resources. | The Azure RBAC and Azure AI Foundry tests fail, and nothing in Azure is read. |
| Foundry User, formerly Azure AI User, on each Foundry account | Azure role | Read via a privileged right | Reads each project's agents, tools, connections, and file names. | Foundry agents read as unknown. |

## Microsoft Defender for Endpoint

| Right | Kind | Category | What 1Secure uses it for | Without it |
|-------|------|----------|--------------------------|------------|
| ThreatHunting.Read.All | Graph application permission | Read-only | Runs advanced hunting queries for onboarded machines, installed AI tools, sign-ins, process starts, AI network requests, and the agents Defender lists. | The Defender for Endpoint test fails. |

## The privileged rights

Each of these is used for a read. What Microsoft lets the right do is wider than that read, and Microsoft offers no narrower right that makes the same read.

- **System Administrator on the application user.** Microsoft lets it read and change everything in the environment's Dataverse. 1Secure doesn't use it for any read. Where the administrator who adds 1Secure to an environment isn't a System Administrator there, 1Secure adds itself through the Power Platform admin API, which always makes the application user with System Administrator and takes no other role. 1Secure then gives it Agent Viewer and 1Secure Flow Reader, which carry every read, and can't remove a role from itself. You can trim it with nothing lost.
- **Power Platform management application.** Microsoft gives the registration the same rights as a Power Platform tenant administrator, and they can't be narrowed. It is the only way an app lists every environment and reads the data policies at every scan, because no directory role opens the environment list to an app.
- **Sites.Selected with full control on each approved site.** Microsoft lets full control read and change the site's content and permissions. Reading a site's own permissions needs full control on that site, and Microsoft offers no read role for that list.
- **Sites.FullControl.All.** Microsoft lets it read and change the content and permissions of every site. Microsoft accepts no other application permission for reading a site's permissions, so Selected sites is the narrower choice, one site at a time.
- **Foundry User.** Microsoft's built-in role also lets the holder run a project's agents and change project content. It is the only role that opens a project's agents to a read. Reader doesn't. 1Secure assigns it on the Foundry projects you select, once on each Foundry account, the Foundry resource that holds them, so every project of that account is covered, including projects created later.

## Rights you can remove

Two rights can go with nothing lost. Two can go with the loss of what they read. The steps follow each right.

1. **System Administrator on the application user: nothing lost.** Agent Viewer and 1Secure Flow Reader carry every read. Repeat these steps in each environment the product names as added through the admin API.
   1. In the Power Platform admin center, open **Environments** and the environment.
   2. Open **Settings > Users + permissions > Application users**, and select 1Secure.
   3. Select **Edit security roles**, clear System Administrator, keep Agent Viewer and 1Secure Flow Reader, and click **Save**.
2. **The delegated permissions on the enterprise application: nothing lost.** 1Secure keeps no token from them, as [Your sign-in](#your-sign-in) says. The next **Let 1Secure do it** asks you to consent again.
   1. In the Microsoft Entra admin center, open **Entra ID > Enterprise apps**, then the 1Secure application, "Netwrix 1Secure AI Security". A connection test of a Microsoft source also shows it, as "Tested as the app" and the name.

   2. Open **Permissions**, and revoke only the rows of type **Delegated**.
   3. Keep every row of type **Application**.
3. **Sites.FullControl.All: site permissions go unread.** Site permissions are read at every scan. After you remove it, the next SharePoint test warns that they are unreadable, and they are read only on sites granted one at a time with Selected sites, as [SharePoint Online](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md) describes. It isn't one of the eighteen permissions of the consent, which are the Graph application permissions in the tables on this page other than Sites.FullControl.All, so a new consent doesn't add it back. It is added again only when you choose **All sites** for SharePoint.
   1. In the Microsoft Entra admin center, open **Entra ID > Enterprise apps**, then the 1Secure application.
   2. Open **Permissions**, select the **Application** row Sites.FullControl.All, and click **Revoke permission**.
4. **Power Platform management application: policies and new environments go unread.** Read the Power Platform policies once from the **Power Platform policies** card first, so a dated copy exists. After you remove the application, the policies aren't refreshed and new environments aren't found. Sign in to PowerShell as a Power Platform administrator with the Power Platform administration module, and run the following commands.

   ```powershell
   Add-PowerAppsAccount
   Get-PowerAppManagementApp
   Remove-PowerAppManagementApp -ApplicationId <the application (client) ID of the Netwrix application>
   ```

You can't remove Reader, Foundry User, AI Reader, Agent Viewer, 1Secure Flow Reader, or any Graph read permission without breaking the reads they serve. You can narrow Foundry User to fewer Foundry accounts.

## Your sign-in

**Let 1Secure do it**, on the cards of the **Sources** page, and **Sign in to grant**, during Get started, are the buttons that make a grant for you. 1Secure makes each grant with your own Microsoft account and its own rights. 1Secure asks Microsoft for the delegated permissions in the following table, uses each once for that one grant, and keeps no token. It drops the token used to reach the other services in the same sign-in when they answer. The same sign-in also creates the application user and the 1Secure Flow Reader role in each environment, and gives the application user its roles. Microsoft keeps a record that you consented to each delegated permission on the 1Secure enterprise application. You can revoke those records at any time, as step 2 of [Rights you can remove](#rights-you-can-remove) describes.

| Delegated permission | Category | Asked for by | What 1Secure does with it |
|----------------------|----------|--------------|---------------------------|
| openid profile | Read-only | Every sign-in | Proves who signed in and to which directory. |
| offline_access | Read-only | The sign-in that adds the application users | Gets the token for the other services of the same sign-in, then drops it. |
| Sites.Read.All | Read-only | Approving a SharePoint site | Searches the sites you can see. |
| Application.Read.All | Read-only | SharePoint **All sites** | Finds the two applications the Sites.FullControl.All assignment joins. |
| Admin consent to the Graph permissions | Read via a privileged right | The first **Connect with Microsoft** | Grants the registration its Microsoft Graph application permissions. |
| RoleManagement.ReadWrite.Directory | Read via a privileged right | **Microsoft Entra AI Reader role** | Assigns the AI Reader role to the registration. |
| Azure Service Management user_impersonation | Read via a privileged right | **Azure Reader on your subscriptions** | Lists subscriptions and Foundry projects, and assigns Reader and Foundry User. |
| PowerApps Service User | Read via a privileged right | **Power Platform policies**, **Power Platform management application**, and **Power Platform application users** | Reads the policies once, registers the management application, lists environments, and adds the application user through the admin API. |
| Dynamics CRM user_impersonation | Read via a privileged right | **Power Platform application users** | Creates the application user and the 1Secure Flow Reader role in each environment, and gives the user its roles. |
| Sites.FullControl.All | Read via a privileged right | Approving a SharePoint site | Grants the registration full control on that one site. |
| AppRoleAssignment.ReadWrite.All | Read via a privileged right | SharePoint **All sites** | Assigns the registration the Sites.FullControl.All application permission. |

[Add additional permissions](/docs/1secureaisecurity/configuration/add-additional-permissions.md) says who signs in for each grant.
