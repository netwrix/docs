---
description: >-
  Lists the Microsoft Graph API application permissions required for Netwrix
  Directory Manager v11 in Microsoft Entra ID and maps each permission to the
  Netwrix Directory Manager functionality it enables.
keywords:
  - Graph API
  - Entra ID
  - permissions
  - Netwrix Directory Manager
  - Microsoft Graph
  - Teams
  - SharePoint
  - Exchange
  - roles
products:
  - directory-manager
sidebar_label: Graph API Permissions Required for Directory Manag
tags:
  - configuration-and-integration
title: >-
  Graph API Permissions Required for Netwrix Directory Manager V11 Application
  in Entra ID
knowledge_article_id: kA0Qk0000002jPFKAY
---

# Graph API Permissions Required for Netwrix Directory Manager V11 Application in Entra ID

## Applies to
Netwrix Directory Manager 11

## Question
What is the list of Microsoft Graph API application permissions required for the Netwrix Directory Manager in Entra ID? What is the mapping of each permission to the specific Netwrix Directory Manager functionality it enables?

## Answer
Here is the list of all the Microsoft Graph API application permissions required for the Netwrix Directory Manager in Entra ID:

### Microsoft Teams / Channels

| Graph API Permission | Netwrix Directory Manager Feature |
|---|---|
| `Channel.Create` | Add Channel under Team Properties on DM Portal |
| `Channel.Delete.All` | Remove any channel under Team Properties on the DM Portal |
| `Channel.ReadBasic.All` | Retrieve Channel's Name, Description, and Privacy under Team Properties across the tenant on DM Portal |
| `ChannelMember.Read.All` | Retrieve the list of members in any Channel under Team Properties across the tenant on the DM Portal |
| `ChannelMember.ReadWrite.All` | Retrieve, Add, Update, and Remove members in/from any Channel under Team Properties across the tenant on DM Portal |

### Directory and Group Management

| Graph API Permission | Netwrix Directory Manager Feature |
|---|---|
| `Directory.Read.All` | Retrieve users, groups, roles, and directory settings across the tenant on DM Portal |
| `Directory.ReadWrite.All` | Retrieve and manage/modify users, groups, roles, and directory settings across the tenant on DM Portal |
| `Group.Create` | Create any type of group on DM Portal |
| `Group.Read.All` | Retrieve the properties and memberships of all groups across the tenant on DM Portal |
| `Group.ReadWrite.All` | Retrieve, create, update, and delete groups, manage group members and owners across the tenant on DM Portal |
| `GroupMember.Read.All` | Retrieve the group members and owners of all groups across the tenant on DM Portal |
| `GroupMember.ReadWrite.All` | Retrieve, add, update, and remove members and owners in/from any group on DM Portal |

### Microsoft 365 Mail Access

| Graph API Permission | Netwrix Directory Manager Feature |
|---|---|
| `Mail.Read` | Read the signed-in user's mail including subject, body, and attachments from Microsoft 365 (Outlook) mailboxes |
| `Mail.ReadBasic` | Read the signed-in user's mail including subject, from, to, cc, and received date from Microsoft 365 (Outlook) mailboxes |
| `Mail.ReadBasic.All` | Read all users' mail across the tenant including subject, from, to, cc, and received date from Microsoft 365 (Outlook) mailboxes |
| `Mail.ReadWrite` | Read and modify (edit, move, delete) emails in your mailbox from Microsoft 365 (Outlook) mailboxes |
| `Mail.Send` | Send emails as the signed-in user or on behalf of any user from Microsoft 365 (Outlook) mailboxes |

### User Management

| Graph API Permission | Netwrix Directory Manager Feature |
|---|---|
| `User.Read.All` | Retrieve all users' profile data across the tenant under User Profiles on DM Portal |
| `User.ReadBasic.All` | Retrieve all basic attributes of user profiles across the tenant under User Profiles on DM Portal |
| `User.ReadWrite.All` | Retrieve, create, update, and delete users across the tenant on DM Portal |
| `User.Invite.All` | Invite users from another Microsoft Entra ID tenant to the membership of any group in your domain |
| `User.DeleteRestore.All` | Delete users from DM Portal and access deleted items endpoints |
| `User.EnableDisableAccount.All` | Enable/disable accounts of all users from User Properties on DM Portal |
| `User.RevokeSessions.All` | Force sign-out users after password reset or role change on DM Portal |
| `User.ManageIdentities.All` | Retrieve, update, and delete identities that are associated with a user's account under Linked Mode of DM Portal |
| `User.Export.All` | Export user profile data from DM Portal |
| `User-PasswordProfile.ReadWrite.All` | Manage user's password profiles, change and reset password of all users on DM Portal |
| `User-Phone.ReadWrite.All` | Retrieve and update mobile phone of all users under User Properties on DM Portal |

### Role Management

| Graph API Permission | Netwrix Directory Manager Feature |
|---|---|
| `RoleManagement.Read.All` | Retrieve assigned roles of all users under Directory Role tab of User Properties across the tenant on DM Portal |
| `RoleManagement.Read.CloudPC` | Retrieve assigned roles of all users under Directory Role tab of User Properties across the tenant on DM Portal specific to Cloud PC (Windows 365) |
| `RoleManagement.Read.Directory` | Retrieve Microsoft Entra directory roles e.g. Global Administrator under Directory Role tab of User Properties across the tenant on DM Portal |
| `RoleManagement.Read.Exchange` | Retrieve assigned roles of all users across Exchange Online |
| `RoleManagement.ReadWrite.CloudPC` | Retrieve, add, and remove assignments of roles of all users under Directory Role tab of User Properties across the tenant on DM Portal specific to Cloud PC (Windows 365) |
| `RoleManagement.ReadWrite.Directory` | Retrieve, add, and remove assignments of roles of all users under Directory Role tab of User Properties across the tenant on DM Portal |
| `RoleManagement.ReadWrite.Exchange` | Retrieve, add, and remove assignments of roles of all users across Exchange Online |

### Exchange Online (Application Permissions)

| Exchange Permission | Netwrix Directory Manager Feature |
|---|---|
| `Exchange.ManageAsApp` | Retrieve, create, modify mailboxes, manage mailbox permissions on DM Portal or through PowerShell |

### SharePoint Delegated Permissions

| SharePoint Permission | Netwrix Directory Manager Feature |
|---|---|
| `AllSites.FullControl` | Access to all SharePoint Sites across the tenant, manage site settings and permissions from Entitlement Portal and Entitlement Section of Microsoft Entra ID Identity Store on Admin Portal |
| `AllSites.Manage` | Create/delete sites, manage site users and groups on Entitlement Portal |
| `AllSites.Read` | Retrieve the content of all SharePoint sites across the tenant under Entitlement Section of Microsoft Entra ID Identity Store on Admin Portal |
| `AllSites.Write` | Add, edit, and delete documents, list items, and pages of all sites across the tenant |

