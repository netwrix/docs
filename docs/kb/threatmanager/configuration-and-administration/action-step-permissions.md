---
description: 'Lists the exact permissions required for each Action Step in Netwrix Threat Manager so you can configure accounts and scopes correctly.'
keywords: [action step, permissions, Active Directory, Entra ID, Microsoft Graph, SMB, WMI, WinRM, Remote Desktop, Netwrix Threat Manager]
products:
- threat-manager
title: 'Action Step Permissions'
knowledge_article_id: kA0Qk0000001lUjKAI
---

# Action Step Permissions

## Question
What permissions does each Action Step require to use?

## Answer
The following permissions are required for each Action Step:

### Active Directory Group Membership
- Scope to group objects
  - `Write Members`
  - `Read Members`
  - `Read Object Attributes`
- Scope to user objects
  - `Read Object Attributes`
- Scope to contact objects
  - `Read Contacts`

### Change Password at Next Logon
- Scope to user objects
  - `Write pwdLastSet`

### Disable Active Directory Account
- Scope to user objects
  - `Read userAccountControl`
  - `Write userAccountControl`

### Disable Active Directory Computer
- Scope to computer objects
  - `Read userAccountControl`
  - `Write userAccountControl`

### Reset Password
- Scope to user objects
  - `Reset Password` permission
  - `Write pwdLastSet`
  - `Write LockoutTime`

### Revert Permission Change
- AD objects
  - `Read all properties`
  - `Write all properties`
  - `Modify permissions`
- File system objects
  - `Read permissions`
  - `Change permissions`

### Close SMB Session
- Membership in the **Remote Management Users** group
- Grant the account rights to manage SMB sessions.

### End User Session
1. Permissions on Target Systems (Remote Hosts)
   - Membership in the **Remote Management Users** group
   - Add the account to `Logon as a batch job`.
2. Permissions in Active Directory
   - Scope to user objects
     - `Read all properties`
   - Scope to computer objects
     - `Read all properties`

### Disable User Remote Desktop Access
1. Permissions on Target Systems (Remote Hosts)
   - WMI Permissions
     - Membership in the **Distributed COM Users** group
     - Grant Execute Methods, Enable Account, and Remote Enable permissions in the `root\cimv2` namespace.
     - Ensure that the account can modify policies such as `SeDenyRemoteInteractiveLogonRight`.
   - WinRM Permissions
     - Membership in the **Remote Management Users** group
     - Ensure the account has permissions to modify user rights via `secedit` and apply changes using `GPUpdate`.
2. Permissions in Active Directory
   - Scope to computer objects
     - `Read all properties`
   - Scope to user objects
     - `Read all properties`
   - Ensure that the account can modify policies such as `SeDenyRemoteInteractiveLogonRight`.

### Entra ID Group Membership
All permissions must be granted as **Application** permissions on the app registration and require admin consent.
- `Group.Read.All` — read group properties to locate the target group
- `GroupMember.ReadWrite.All` — add and remove members from the group

:::note
`GroupMember.ReadWrite.All` does not apply to role-assignable groups. To manage membership of groups with **Is assignable to a role** enabled, the app registration additionally requires `RoleManagement.ReadWrite.Directory`.
:::

### Disable Entra ID User
All permissions must be granted as **Application** permissions on the app registration and require admin consent.
- `User.ReadWrite.All` — set the user's `accountEnabled` property to false

### Reset Entra ID Password
All permissions must be granted as **Application** permissions on the app registration and require admin consent.
- `User.ReadWrite.All` — update the user's `passwordProfile`

:::note
`User.ReadWrite.All` alone is not sufficient to reset passwords for users assigned Entra ID admin roles. The app registration's service principal must additionally be assigned the **Privileged Authentication Administrator** directory role in Entra ID. Resetting passwords for Global Administrators requires the **Global Administrator** role and is not recommended for automated playbook use.
:::

### Revoke Entra ID Sessions
All permissions must be granted as **Application** permissions on the app registration and require admin consent.
- `User.RevokeSessions.All` — invalidate all active sign-in sessions for a user

### Flag Entra ID User as Confirmed Compromised
All permissions must be granted as **Application** permissions on the app registration and require admin consent.
- `Directory.Read.All` — read directory information
- `IdentityRiskyUser.ReadWrite.All` — confirm a user as compromised in Entra ID Identity Protection
- `IdentityRiskyAgent.ReadWrite.All` — confirm agents as compromised
- `IdentityRiskyServicePrincipal.ReadWrite.All` — confirm service principals as compromised

:::note
This action requires **Microsoft Entra ID P2** licensing (included in Microsoft 365 E5). It will fail in tenants without an active Entra ID P2 plan.
:::