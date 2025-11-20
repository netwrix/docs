---
description: >-
  Lists where the AD_SecurityAssessment report retrieves data for each category,
  including the tables/views and jobs you can use to investigate and mitigate
  vulnerabilities.
keywords:
  - AD_SecurityAssessment
  - Active Directory
  - SA_ADInventory
  - permissions
  - AD report
  - AD assessment
products:
  - access-analyzer
sidebar_label: AD_SecurityAssessment Explained
tags:
  - active-directory-auditing
title: "AD_SecurityAssessment Explained"
knowledge_article_id: kA0Qk0000001gV3KAI
---

# AD_SecurityAssessment Explained

## Question

Where does the AD_SecurityAssessment report get the data for it's categories and results so the information can be used to investigate and mitigate vulnerabilities?

## Answer

| Category | Check | Tables/Views | Job |
|---|---|---:|---|
| AD Objects | Objects created (Past 7 Days) | `SA_ADInventory_PrincipalsView` | `.Active Directory Inventory\1-AD_Scan` |
| AD Objects | Principals with non-default Primary Group IDs | `SA_ADInventory_Users, SA_ADInventory_Computers` | `.Active Directory Inventory\1-AD_Scan` |
| AD Objects | Guest account enabled | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| AD Objects | Unprivileged users who can add computer accounts | `SA_ADPerms_PermissionsExtView` | `Active Directory Permissions Analyzer\0. Collection` |
| AD Objects | Computers with SERVER_TRUST_ACCOUNT enabled | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| AD Objects | User accounts with SPN configured | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| AD Permissions | Stale users with group membership permissions | `SA_AD_GroupMembershipPermissions_Details` | `Active Directory Permissions Analyzer\2. Groups\AD_GroupPermissions` |
| AD Permissions | Domain users with direct permissions | `SA_AD_GroupPermissions_Details, SA_AD_UserPermissions_Details, SA_AD_ComputerPermissions_Details, SA_AD_ContainerPermissions_Details, SA_AD_OUPermissions_Details` | `Active Directory Permissions Analyzer\2. Groups\AD_GroupPermissions`<br />`Active Directory Permissions Analyzer\1. Users\AD_UserPermissions`<br />`Active Directory Permissions Analyzer\4. Computers\AD_ComputerPermissions`<br />`Active Directory Permissions Analyzer\7. Containers\AD_ContainerPermissions`<br />`Active Directory Permissions Analyzer\3. OUs\AD_OUPermissions` |
| AD Permissions | Users with Replication Permissions | `SA_AD_DomainReplication_UserSummary` | `Active Directory Permissions Analyzer\8. Domains\AD_DomainReplication` |
| AD Permissions | Non-Default AdminSDHolder | `SA_AD_AdminSDHolder_UserSummary` | `Active Directory Permissions Analyzer\7. Containers\AD_AdminSDHolder` |
| AD Permissions | Users that can reset passwords | `SA_AD_ResetPasswordPermissions_Details` | `Active Directory Permissions Analyzer\1. Users\AD_ResetPasswordPermissions` |
| Administrator Accounts | Unprivileged users with adminCount=1 | `SA_ADInventory_ExtendedAttributes` | `.Active Directory Inventory\1-AD_Scan` |
| Administrator Accounts | Admin accounts with SPN configured | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| Administrator Accounts | Admin accounts with unprivileged owners | `SA_ADPerms_Objects` | `Active Directory Permissions Analyzer\0. Collection` |
| Administrator Accounts | Admin accounts without adminCount=1 | `SA_ADInventory_ExtendedAttributes` | `.Active Directory Inventory\1-AD_Scan` |
| Administrator Accounts | Stale admin accounts that are enabled | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Administrator Accounts | # of privileged accounts | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Administrator Accounts | Disabled admin accounts | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Administrator Accounts | Admin accounts not in protected users group | `SA_ADInventory_EffectiveGroupMembersView` | `.Active Directory Inventory\1-AD_Scan` |
| Administrator Accounts | Recently created admins | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Administrator Accounts | Recent logon by BUILTIN\Administrator | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| Delegation | Resource-Based Constrained Delegation on a computer | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Delegation | Domain controllers with Resource-Based Constrained Delegation | `SA_AD_ComputerDelegation_Details` | `Active Directory\3. Computers\AD_ComputerDelegation` |
| Delegation | Non Domain Controllers trusted for delegation | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Delegation | Non Domain Controllers with Unconstrained Delegation | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Delegation | Service Acccounts trusted for delegation | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Delegation | Users with Unconstrained Delegation | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| Delegation | Write access to Resource-Based Constrained Delegation on Domain Controller | `SA_ADPerms_PermissionsExtView` | `Active Directory Permissions Analyzer\0. Collection` |
| Delegation | Objects with Constrained Delegation | `SA_ADInventory_ExtendedAttributes` | `.Active Directory Inventory\1-AD_Scan` |
| Group Policy | Delegated access to GPO linked on Domain Controller OU | `SA_ADPerms_PermissionsView` | `Active Directory Permissions Analyzer\0. Collection` |
| Group Policy | Delegated access to GPO linked on domain | `SA_ADPerms_PermissionsView` | `Active Directory Permissions Analyzer\0. Collection` |
| Group Policy | Delegated access to GPO linked on AD site | `SA_ADPerms_PermissionsView` | `Active Directory Permissions Analyzer\0. Collection` |
| Infrastructure Security | Domain Controllers with old passwords | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Infrastructure Security | Print spooler service enabled on Domain Controller | `SA_SG_ServiceAccounts_ServiceAccounts` | `Windows\Priviledged Accounts\Service Accounts\SG_ServiceAccounts` |
| Infrastructure Security | Domain Controllers that have not logged on in 60 days | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Infrastructure Security | Users with rights to exploit DCShadow | `SA_AD_DCShadowPermissions_Details` | `Active Directory Permissions Analyzer\9. Sites\AD_DCShadowPermissions` |
| Infrastructure Security | Domains with functional level < 2012 R2 | `SA_AD_DomainInfo_Domains` | `Active Directory\5. Domains\AD_DomainInfo` |
| Infrastructure Security | Anonymous bind to AD enabled | `SA_AD_DomainInfo_dSHeuristics_Details` | `Active Directory\5. Domains\AD_DomainInfo` |
| Infrastructure Security | Anonymous NSPI access enabled | `SA_AD_DomainInfo_dSHeuristics_Details` | `Active Directory\5. Domains\AD_DomainInfo` |
| Infrastructure Security | DC computer accounts with unprivileged owner | `SA_ADPerms_Objects` | `Active Directory Permissions Analyzer\0. Collection` |
| Krbtgt Security | Kerberos krbtgt account with old password | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| Krbtgt Security | Krbtgt account with Resource-Based Constrained Delegation | `SA_ADPerms_PermissionsExtView` | `Active Directory Permissions Analyzer\0. Collection` |
| Krbtgt Security | Write access to Resource-Based Constrained Delegation on krbtgt account | `SA_ADPerms_PermissionsExtView` | `Active Directory Permissions Analyzer\0. Collection` |
| Password Security | Highest Password Reuse | `SA_AD_WeakPasswords_Count` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Reversible passwords found in GPOs | `SA_AD_CPassword_Sysvol` | `Active Directory\4. Group Policy\AD_CPassword` |
| Password Security | Passwords older than a year | `SA_AD_PasswordStatus_Details` | `Active Directory\2. Users\AD_PasswordStatus` |
| Password Security | Password never expires | `SA_AD_PasswordStatus_Details, SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Password Security | Password not required | `SA_AD_PasswordStatus_Details` | `Active Directory\2. Users\AD_PasswordStatus` |
| Password Security | Password expired | `SA_AD_PasswordStatus_Details` | `Active Directory\2. Users\AD_PasswordStatus` |
| Password Security | AES Key Missing | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Clear Text Password | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Default Computer Password | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Delegable Admins | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | DES Encryption Only | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Empty Password | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | LM Hash | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Password Never Expires | `SA_AD_WeakPasswords_Results, SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\2. Users\AD_WeakPasswords`<br />`Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Password Security | Password Not required | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Shares Common Password | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Weak Historical Password | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Weak Password | `SA_AD_WeakPasswords_Results` | `Active Directory\2. Users\AD_WeakPasswords` |
| Password Security | Passwords stored with reversible encryption | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| Password Security | Users with LAPS read permissions | `SA_AD_LAPSPermissions_Results` | `Active Directory Permission Analyzer\4. Computers\AD_LAPSPermissions` |
| Password Security | gMSA not in use | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Password Security | gMSA with old passwords | `SA_ADPerms_Objects` | `Active Directory Permissions Analyzer\0. Collection` |
| Sensitive Security | # of accounts in Pre-Windows 2000 Compatible Access Group | `SA_ADInventory_GroupMembersView` | `.Active Directory Inventory\1-AD_Scan` |
| Sensitive Security Groups | Non standard membership | `SA_ADInventory_GroupsView` | `.Active Directory Inventory\1-AD_Scan` |
| Sensitive Security Groups | Computer accounts | `SA_AD_SensitiveSecurityGroups_Membership` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Old password (over 180 days) | `SA_AD_SensitiveSecurityGroups_UserList` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Non-admins in DNS admins group | `SA_AD_SensitiveSecurityGroups_Membership` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Groups not protected by SDProp | `SA_AD_DomainInfo_dSHeuristics_Details` | `Active Directory\5. Domains\AD_DomainInfo` |
| Sensitive Security Groups | Highest user count | `SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Oldest password | `SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Password not required | `SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Password never expires | `SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| Sensitive Security Groups | Disabled members | `SA_AD_SensitiveSecurityGroups_Summary` | `Active Directory\1. Groups\AD_SensitiveSecurityGroups` |
| SID History | Historical admin SIDs on non admins | `SA_AD_SIDHistory_Summary` | `Active Directory\2. Users\AD_SIDHistory` |
| SID History | Historical SID from same domain | `SA_AD_SIDHistory_Summary` | `Active Directory\2. Users\AD_SIDHistory` |
| Stale Objects | Stale users count | `SA_ADInventory_UsersView` | `.Active Directory Inventory\1-AD_Scan` |
| Stale Objects | Computers with unsupported Microsoft OS | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Stale Objects | Computers with old password last set date | `SA_ADInventory_ComputersView` | `.Active Directory Inventory\1-AD_Scan` |
| Trusts | Foreign Security Principals in admin groups | `SA_ADInventory_DistinguishedNames` | `.Active Directory Inventory\1-AD_Scan` |
| Trusts | Insecure trust configuration | `SA_AD_DomainInfo_TrustDetails` | `Active Directory\5. Domains\AD_DomainInfo` |
| Trusts | Outbound trust with SID History enabled | `SA_AD_DomainInfo_Filtering` | `Active Directory\5. Domains\AD_DomainInfo` |
