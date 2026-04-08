---
title: "Collection Manager Window"
description: "Collection Manager Window"
sidebar_position: 10
---

# Collection Manager Window

The Collection Manager window enables you to manage all Microsoft Collections. Click
**Configuration** > **Collections** on the menu to launch it. This window is only available to
Threat Prevention administrators.

![Collection Manager Window](/images/threatprevention/8.0/admin/configuration/collectionmanager/collectionmanager.webp)

Collections are reusable lists of policy filter settings that help streamline the task of
associating filters with event types on the Event Type tab during
[Policy Configuration](/docs/threatprevention/8.0/admin/policies/configuration/configuration.md) or
[Template Configuration](/docs/threatprevention/8.0/admin/templates/configuration/configuration.md). They are configured globally and can be
used in multiple policies in place of or in conjunction with individual filters. These collections
are empty until you populate them with your environment information. When a collection is modified,
the modifications affect all policies referencing the collection. At least one Agent must be
deployed to populate Collections.

To use policy templates to create new policies, Collections must be configured. Several templates
are configured using Collections as a policy filter. If the Collection is empty, then the policy
does not monitor what it was designed to monitor.

Collections are organized into the following categories for Microsoft Collections:

- Domains & Servers – Any domain or server (by name)
- Contexts – Any context (e.g. containers and organizational units) within Active Directory
- Objects – Any Active Directory object
- Exchange Objects – Any mail-enabled user accounts or distribution lists
- Lockdown Objects – Any Active Directory object, used for lockdown purposes
- Exchange Trustees – Any account that has permission to another account’s mailbox or folder
- Perpetrators – Any security principal that is making a change, used for monitoring purposes
- Lockdown Perpetrators – Any security principal that is making a change, used for lockdown purposes
- Exchange Perpetrators – Any security principal that is making a change in an Exchange environment,
  used for both monitoring and lockdown purposes
- Classes – Any class within Active Directory
- Attributes – Any attribute within Active Directory
- ADCS Attributes – Any certificate attribute within Active Directory Certificate Services
- IP Addresses – Any client address
- Hosts – Any computer (by NetBIOS, DNS, and IP address)
- File Paths – List of file paths for Windows file systems to be used with multiple agents

Select a collection category and click **Manage…** i to open the
[List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md).

## Preconfigured Collections

Threat Prevention has the following pre-configured Collections:

| Collection Type       | Name                                                      |
| --------------------- | --------------------------------------------------------- |
| Domains and Servers   | SBServers                                                 |
| Objects               | Administrator Accounts                                    |
| Objects               | Administrator Groups                                      |
| Objects               | Sensitive Groups                                          |
| Objects               | Service Accounts                                          |
| Perpetrators          | Administrative Accounts                                   |
| Perpetrators          | Domain Administrators                                     |
| Perpetrators          | Failed Authentications                                    |
| Perpetrators          | Service Accounts                                          |
| Perpetrators          | Successful Authentications                                |
| Perpetrators          | Successful HIPPAA PHI Account Authentications             |
| Perpetrators          | System Accounts                                           |
| Lockdown Perpetrators | Allow Perpetrators                                        |
| Lockdown Perpetrators | Critical GPO - Allow Perpetrators                         |
| Lockdown Perpetrators | DNS Records - Allow Perpetrators                          |
| Lockdown Perpetrators | GPOs - Allow  Perpetrators                                |
| Lockdown Perpetrators | Group Lockdown - Allow Perpetrators                       |
| Lockdown Perpetrators | Group User OU Object Delete and Move - Allow Perpetrators |
| Lockdown Perpetrators | Object Permissions - Allow Perpetrators                   |
| Lockdown Perpetrators | OU Structure - Allow Perpetrators                         |
| Lockdown Perpetrators | Root Object - Allow Perpetrators                          |
| Lockdown Perpetrators | User Lockdown - Allow Perpetrators                        |
| Classes               | Exclude Classes                                           |
| Classes               | Threat Manager - AD Excluded Classes                      |
| Attributes            | Exclude Attributes                                        |
| Attributes            | Exclude User Attributes                                   |
| Attributes            | Property Set: DNS-Host-Name-Attributes                    |
| Attributes            | Property Set: Domain-Other-Parameters                     |
| Attributes            | Property Set: Domain-Password                             |
| Attributes            | Property Set: General-Information                         |
| Attributes            | Property Set: Membership                                  |
| Attributes            | Property Set: Personal-Information                        |
| Attributes            | Property Set: Private-Information                         |
| Attributes            | Property Set: Public-Information                          |
| Attributes            | Property Set: RAS-Information                             |
| Attributes            | Property Set: Terminal-Server-License-Server              |
| Attributes            | Property Set: User-Account-Restrictions                   |
| Attributes            | Property Set: User-Login                                  |
| Attributes            | Property Set: Web-Information                             |
| Attributes            | Threat Manager - AD Excluded Attributes                   |
| Hosts                 | Domain Controllers                                        |
| Hosts                 | Exchanges Servers                                         |
| File Paths            | Folders with Sensitive Data. If you                       |
| File Paths            | Open Shares                                               |
