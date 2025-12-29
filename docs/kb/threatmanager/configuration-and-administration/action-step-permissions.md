---
description: 'Lists the exact permissions required for each Action Step in Netwrix Threat Manager so you can configure accounts and scopes correctly.'
keywords: [action step, permissions, Active Directory, SMB, WMI, WinRM, Remote Desktop, Netwrix Threat Manager]
products:
- threat-manager
title: 'Action Step Permissions'
knowledge_article_id: kA0Qk0000001lUjKAI
---

# Action Step Permissions

## Question
What permissions does each Action Step require to use?

## Answer
Below are the necessary permissions for each Action Step:

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