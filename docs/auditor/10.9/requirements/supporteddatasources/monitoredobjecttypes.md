---
title: "Monitored Object Types, Actions, and Attributes"
description: "Monitored Object Types, Actions, and Attributes"
sidebar_position: 10
---

# Monitored Object Types, Actions, and Attributes

Netwrix Auditor monitored object types, actions, attributes and components for each data source are
located in the following topics:

- [Active Directory](/docs/auditor/10.9/configuration/activedirectory/overview.md)
- [AD FS](/docs/auditor/10.9/configuration/activedirectoryfederatedservices/overview.md)
- [Exchange](/docs/auditor/10.9/configuration/exchange/overview.md)
- [File Servers](/docs/auditor/10.9/configuration/fileservers/overview.md)

    - [Dell Data Storage](/docs/auditor/10.9/configuration/fileservers/delldatastorage/overview.md)
    - [Dell Isilon/PowerScale](/docs/auditor/10.9/configuration/fileservers/dellisilon/overview.md)
    - [NetApp Data ONTAP](/docs/auditor/10.9/configuration/fileservers/netappcmode/overview.md)
    - [Nutanix](/docs/auditor/10.9/configuration/fileservers/nutanix/overview.md)
    - [Qumulo](/docs/auditor/10.9/configuration/fileservers/qumulo/overview.md)
    - [Synology](/docs/auditor/10.9/configuration/fileservers/synology/overview.md)
    - [Windows File Servers](/docs/auditor/10.9/configuration/fileservers/windows/overview.md)

- [Group Policy](/docs/auditor/10.9/configuration/grouppolicy/overview.md)
- [Logon Activity](/docs/auditor/10.9/configuration/logonactivity/overview.md)
- [Microsoft 365](/docs/auditor/10.9/configuration/microsoft365/overview.md)

    - [Exchange Online](/docs/auditor/10.9/configuration/microsoft365/exchangeonline/overview.md)
    - [Microsoft Entra ID](/docs/auditor/10.9/configuration/microsoft365/microsoftentraid/overview.md)
    - [SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/overview.md)
    - [MS Teams](/docs/auditor/10.9/configuration/microsoft365/teams/overview.md)

- [Network Devices](/docs/auditor/10.9/configuration/networkdevices/overview.md)
- [Oracle Database](/docs/auditor/10.9/configuration/oracle/overview.md)
- [SharePoint](/docs/auditor/10.9/configuration/sharepoint/overview.md)
- [SQL Server](/docs/auditor/10.9/configuration/sqlserver/overview.md)
- [User Activity](/docs/auditor/10.9/configuration/useractivity/overview.md)
- [VMware](/docs/auditor/10.9/configuration/vmware/overview.md)
- [Windows Server](/docs/auditor/10.9/configuration/windowsserver/overview.md)

Review the list of actions audited and reported by Netwrix Auditor. Actions vary depending on the
data source and the object type.

| Action                                    | Active Directory | Active Directory Federation Services | Exchange Exchange Online | File Servers | Group Policy | Logon Activity | Microsoft Entra ID (formerly Azure AD) | Oracle database | SharePoint SharePoint Online | SQL Server | User Activity | VMware Servers | Windows Server |
| ----------------------------------------- | ---------------- | ------------------------------------ | ------------------------ | ------------ | ------------ | -------------- | -------------------------------------- | --------------- | ---------------------------- | ---------- | ------------- | -------------- | -------------- |
| Added                                     | +                | -                                    | +\*                      | +            | +            | –              | +                                      | +               | +                            | +          | –             | +              | +              |
| Removed                                   | +                | -                                    | +\*                      | +            | +            | –              | +                                      | +               | +                            | +          | –             | +              | +              |
| Modified                                  | +                | –                                    | +\*                      | +            | +            | –              | +                                      | +               | +                            | +          | –             | +              | +              |
| Add (failed attempt)                      | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Remove (failed attempt)                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Modify (failed attempt)                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | +              |
| Read                                      | –                | –                                    | +\*                      | +            | –            | –              | –                                      | +               | +                            | –          | –             | –              | –              |
| Read (failed attempt)                     | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Renamed                                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | +\*\*                        | –          | –             | –              | –              |
| Moved                                     | –                | –                                    | +\*                      | +            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Rename (failed attempt)                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Move (failed attempt)                     | –                | –                                    | –                        | +            | –            | –              | –                                      | –               | –                            | –          | –             | –              | –              |
| Checked in                                | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Checked out                               | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Discard check out                         | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Successful logon                          | –                | +                                    | –                        | –            | –            | +              | +                                      | +               | –                            | +          | –             | +              | –              |
| Failed logon                              | –                | +                                    | –                        | –            | –            | +              | +                                      | +               | –                            | +          | –             | +\*\*\*        | –              |
| Logoff                                    | –                | –                                    | –                        | –            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Copied                                    | –                | –                                    | +\*                      | +            | –            | –              | –                                      | –               | +\*\*                        | –          | –             | –              | –              |
| Sent                                      | –                | –                                    | +\*                      | –            | –            | –              | –                                      | –               | –                            | –          | –             | –              | –              |
| Activated                                 | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | –                            | –          | +             | –              | –              |
| Support for state-in-time data collection | +                | –                                    | +                        | +            | +            | -              | +                                      | -               | +                            | -          | -             | +              | +              |

\* —these actions are reported when auditing non-owner mailbox access for Exchange or Exchange
Online.

\*\* — these actions are reported for SharePoint Online only.

\*\*\* — Auditor will not collect data on _Failed Logon_ event for VMware in case of incorrect logon
attempt through VMware vCenter Single Sign-On; also, it will not collect logons using SSH.
