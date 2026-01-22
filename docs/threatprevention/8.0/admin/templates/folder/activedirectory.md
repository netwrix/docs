---
title: "Active Directory Templates"
description: "Active Directory Folder Templates"
sidebar_position: 40
---

# Active Directory Folder Templates

The **Templates** > **Microsoft** > **Active Directory** folder in the Navigation pane contains the
following templates:

**Authentication Folder**

| Subfolder     | Template    | Description     | TAGS |
| ------------- | --------------- | ---------------- | ---- |
|                         | AD: Failed Account Authentications                         | Gathers Failed AD Authentications. <br />Utilizes built-In “Failed Authentications” – Include Perpetrators Collection to define which accounts will be monitored for failed authentications. Add accounts to be monitored to this collection.    | None |
|                         | AD: Successful Account Authentications                     | Gathers Successful AD Authentications. <br />Utilizes built-In “Successful Authentications” – Include Perpetrators Collection to define which accounts will be monitored for successful authentications. Add accounts to be monitored to this collection.      | None |
|                         | AD: Successful Account Logons          | No customizations required. Most common modification: specify a list of users (AD Objects) to be included or excluded. <br />Make sure the Exclude 'Noise' Events option on the [Event Filtering Configuration Window](/docs/threatprevention/8.0/admin/configuration/eventfilteringconfiguration.md) is Off for this policy.Make sure the Exclude 'Noise' Events option on the [Event Filtering Configuration Window](/docs/threatprevention/8.0/admin/configuration/eventfilteringconfiguration.md) is _Off_ for this policy. | None |
| Administrative Accounts | AD: Domain Administrators Logons to Non Domain Controllers | Gathers logon events of Domain Administrator accounts to non-domain controller computes. <br />Utilizes built-In “Domain Administrators” – Include Perpetrators Collection to define which accounts will be monitored for logons. Add accounts which have domain administrator rights to be monitored to this collection. <br />Also utilizes built-In “Domain Controllers” – Hosts Collection to define which hosts will NOT be monitored for logons. Add domain controllers to be ignored to this collection.                       | None |
| Administrative Accounts | AD: Failed Administrator Account Authentications           | Gathers AD: Failed Administrator Account Authentications. <br />Utilizes built-In “Administrative Accounts” – Include Perpetrators Collection to define which administrative accounts will be monitored for failed authentications.      | None |
| Administrative Accounts | AD: Successful Administrator Account Authentications       | Gathers Successful AD Authentications for Administrators. <br />Utilizes built-In “Administrative Accounts” – Include Perpetrators Collection to define which administrative accounts will be monitored for successful authentications. Add accounts with administrative rights to be monitored to this collection.             | None |
| Administrative Accounts | AD: Successful Administrator Account Logons                | Utilizes built-in “Administrator Accounts” – Objects Collection. Add accounts with administrator rights to be monitored to this collection <br />Make sure the Exclude 'Noise' Events option on the [Event Filtering Configuration Window](/docs/threatprevention/8.0/admin/configuration/eventfilteringconfiguration.md) is Off for this policy          | None |
| Service Accounts        | AD: Failed Service Account Authentications                 | Gathers Failed AD Authentications for service accounts. <br />Utilizes built-In “Service Accounts” – Include Perpetrators Collection to define which service accounts will be monitored for failed authentications. Add service accounts to be monitored to this collection      | None |
| Service Accounts        | AD: Successful Service Account Authentications             | Gathers Successful AD Authentications for service accounts. <br />Utilizes built-In “Service Accounts” – Include Perpetrators Collection to define which service accounts will be monitored for successful authentications. Add service accounts to be monitored to this collection      | None |
| Service Accounts        | AD: Successful Service Account Logons                      | Utilizes built-in "Service Accounts" – Objects Collection. Add service accounts to be monitored to this collection <br />Make sure the Exclude 'Noise' Events option on the [Event Filtering Configuration Window](/docs/threatprevention/8.0/admin/configuration/eventfilteringconfiguration.md) is Off for this policy.           | None |

**Groups Folder**

| Subfolder        | Template       | Description      | TAGS |
| ----------------------- | ---------------------- | ------------------------ | ---- |
|                         | AD Group Creations                                   | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded                                               | None |
|                         | AD Group Deletions                                   | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded                                               | None |
|                         | AD: Group Membership Changes                         | No customizations required. Most common modifications: specify AD Objects and/or AD Perpetrator to be included or excluded                             | None |
|                         | AD: Group Moves or Renames                           | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded                                               | None |
|                         | AD Group Type Modifications                          | No customizations required. Most common modifications: specify AD Objects and/or AD Perpetrator to be included or excluded                             |      |
| Administrative Accounts | AD: Group Deletions by Administrators                | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection       | None |
| Administrative Accounts | AD: Group Deletions by Non-Administrators            | Utilizes built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative account to NOT be monitored to this collection  | None |
| Administrative Accounts | AD: Group Membership Changes by Administrators       | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection       | None |
| Administrative Accounts | AD Group Membership Changes by Non-Administrators    | Utilizes built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative account to NOT be monitored to this collection  | None |
| Administrative Accounts | AD: Group Moves or Renames by Administrators         | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection       | None |
| Administrative Accounts | AD: Group Moves or Renames by Non-Administrators     | Utilizes built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative account to NOT be monitored to this collection. | None |
| Administrative Groups   | AD: Deletions of Administrator Groups                | Utilizes the built-in “Administrator Groups” – Objects Collection. Add administrator groups to be monitored to this collection                         | None |
| Administrative Groups   | AD: Group Membership Changes to Administrator Groups | Utilizes the built-in “Administrator Groups” – Objects Collection. Add administrator groups to be monitored to this collection                         | None |
| Administrative Groups   | AD: Moves or Renames of Administrator Groups         | Utilizes the built-in “Administrator Groups” – Objects Collection. Add administrator groups to be monitored to this collection                         | None |

**Lockdown Folder**

:::warning
Use cation with _all Lockdown/Blocking Templates_! Blank filters result in _everything_
being locked down or blocked.
:::


| Template              | Description       | TAGS |
| --------------------- | ------------------ | ---- |
| AD Generic Lockdown   | Set the appropriate AD event type(s) to be blocked. Then select the desired AD Objects and Containers, AD Classes and Attributes, and AD Perpetrators to be allowed or denied | None |
| Auth Generic Lockdown | Set the appropriate AD Perpetrator(s) and/or Host(s) to be blocked                         | None |

**Organizational Unit Folder**

| Template                     | Description        | TAGS |
| ---------------------------- | ------------------------ | ---- |
| AD OU Creations              | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |
| AD OU Deletions              | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |
| AD OU Modifications          | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |
| AD OU Moves or Renames       | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |
| AD OU Security Modifications | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |

**Password Enforcement Folder**

| Template                        | Description           | TAGS |
| -------------------- | ------------------------ | ---- |
| Password Enforcement Monitoring | No customizations required. Prevents users from changing a password to any value in the Threat Prevention dictionary of known compromised passwords | None |

**Replication Folder**

| Template                  | Description         | TAGS |
| ------------------------- | -------------------------- | ---- |
| AD Replication Lockdown   | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Prevents Active Directory data synchronization requests from non-domain controllers using RPC call IDL_DRSGetNCChanges. Add legitimate domain controllers to be inored in one of the following ways to prevent them from being blocked: <ul><li>Allow Perpetrators List – Add the Users OU > Domain Controllers group and any other groups with domain controllers for a dynamic list of domain controllers</li><li>Exclude Domains/Servers – Add specific domain controllers for a static list of domain controllers</li></ul> See the [AD Replication Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/adreplicationlockdown.md) topic for additional information. | None |
| AD Replication Monitoring | Utilizes the built-in “Domain Controllers” – Hosts Collection. Add domain controllers to not be monitored. <br />Alternatively, add legitimate domain controllers to be ignored in one of the following ways: <ul><li>Exclude Perpetrators List – Add the Users OU > Domain Controllers group and any other groups with domain controllers for a dynamic list of domain controllers</li><li>Exclude Domains/Servers – Add specific domain controllers for a static list of domain controllers</li></ul> See the [AD Replication Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/adreplicationmonitoring.md) topic for additional information.   | None |


**Server-Workstation Folder**

| Template               | Description        | TAGS |
| --------------------- | ------------------ | ---- |
| AD: Computer Account Creations     | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |
| AD: Computer Account Deletions     | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |
| AD: Computer Account Modifications | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded | None |

**Users Folder**

| Subfolder         | Template                | Description         | TAGS |
| -------------- | --------------- | ----------------------- | ---- |
|                         | AD: User Account Creations                       | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded      | None |
|                         | AD: User Account Deletions                       | No customizations required. Most common modifications: specify AD Objects and/or AD Perpetrator to be included or excluded         | None |
|                         | AD: User Account Lockouts                        | No customizations required. Most common modifications: specify AD Objects to be included or excluded         | None |
|                         | AD: User Account Modifications                   | No customizations required. Most common modifications: specify AD Objects and/or AD Perpetrator to be included or excluded         | None |
|                         | AD: User Account Moves and Renames               | No customizations required. Most common modifications: specify AD Objects and/or AD Perpetrator to be included or excluded       | None |
|                         | AD: User Account Password Set                    | No customizations required. Most common modifications: specify AD Objects and/or AD Perpetrator to be included or excluded        | None |
| Administrative Accounts | AD: Deletions of Administrator Accounts          | Utilizes built-in “Administrator Accounts” – Objects Collection. Add accounts with administrator rights to be monitored to this collection     | None |
| Administrative Accounts | AD: Modifications of Administrator Accounts      | Utilizes built-in “Administrator Accounts” – Objects Collection. Add accounts with administrator rights to be monitored to this collection               | None |
| Administrative Accounts | AD: Moves and Renames of Administrator Accounts  | Utilizes built-in “Administrator Accounts” – Objects Collection. Add accounts with administrator rights to be monitored to this collection               | None |
| Administrative Accounts | AD: Password Set on Administrator Accounts       | Utilizes built-in “Administrator Accounts” – Objects Collection. Add accounts with administrator rights to be monitored to this collection               | None |
| Administrative Accounts | AD: User Creations by Administrators             | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection         | None |
| Administrative Accounts | AD: User Creations NOT by Administrators         | Utilizes the built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative rights to NOT be monitored to this collection | None |
| Administrative Accounts | AD: User Deletions by Administrators             | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection         | None |
| Administrative Accounts | AD: User Deletions NOT by Administrators         | Utilizes the built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative rights to NOT be monitored to this collection | None |
| Administrative Accounts | AD: User Modifications by Administrators         | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection         | None |
| Administrative Accounts | AD: User Modifications NOT by Administrators     | Utilizes the built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative rights to NOT be monitored to this collection | None |
| Administrative Accounts | AD: User Moves and Renames by Administrators     | Utilizes built-in "Administrative Accounts" – Perpetrator Collection. Add accounts with administrative rights to be monitored to this collection         | None |
| Administrative Accounts | AD: User Moves and Renames NOT by Administrators | Utilizes the built-in “Administrative Accounts” – Perpetrator Collection. Add accounts with administrative rights to NOT be monitored to this collection | None |
| Service Accounts        | AD: Deletions of Service Accounts                | Utilizes built-in "Service Accounts" – Objects Collection. Add service accounts to be monitored to this collection      | None |
| Service Accounts        | AD: Modifications of Service Accounts            | Utilizes built-in "Service Accounts" – Objects Collection. Add service accounts to be monitored to this collection         | None |
| Service Accounts        | AD: Moves and Renames of Service Accounts        | Utilizes built-in "Service Accounts" – Objects Collection. Add service accounts to be monitored to this collection          | None |
| Service Accounts        | AD: Password Set on Service Accounts             | Utilizes built-in "Service Accounts" – Objects Collection. Add service accounts to be monitored to this collection          | None |
