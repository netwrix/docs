---
title: "SharePoint Online"
description: "SharePoint Online"
sidebar_position: 30
---

# SharePoint Online

Netwrix Auditor collects SharePoint Online audit data from the Microsoft 365 unified audit log and
through Microsoft APIs.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

To prepare SharePoint Online for monitoring:

- Enable the unified audit log for the tenant. See the Microsoft
  [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide)
  article for additional information.
- Prepare a Data Collecting Account as described in the
  [Permissions for SharePoint Online Auditing](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/permissions.md)
  topic.
- Configure required protocols and ports, as described in the
  [SharePoint Online Ports](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/ports.md)
  topic.

If you need to exclude sites, lists, users, or other data from monitoring, see the
[SharePoint Online Monitoring Scope](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/scope.md)
topic.

## SharePoint Online Objects

Review a full list of object types and attributes Netwrix Auditor can collect on SharePoint Online.
OneDrive for Business changes are reported as SharePoint Online.

| Object type                    | Attributes                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site Collection                | Site Collection administrators                                                                                                                                                                                                                                                                                 |
| Document                       | Name, Permissions, URL, Data categories                                                                                                                                                                                                                                                                        |
| Site                           | Permissions                                                                                                                                                                                                                                                                                                    |
| Site Collection Sharing Policy | Sharing with external users, Sharing using anonymous access links                                                                                                                                                                                                                                              |
| Sharing Policy                 | Sharing with external users, Sharing using anonymous access links, External users must accept sharing invitations using the same account that the invitations were sent to, Sharing Domain Restriction mode, Allow domain list, Deny domain list, Require anonymous links expire in days                   |
| Group                          | Members, Name                                                                                                                                                                                                                                                                                                  |
| Folder                         | Permissions                                                                                                                                                                                                                                                                                                    |
| Sharing Invitation             | Expiration date, Shared with                                                                                                                                                                                                                                                                                   |
| Access Request                 | Expiration date                                                                                                                                                                                                                                                                                                |

## Sensitive data

Starting with the version 10, Netwrix Auditor can report about sensitive data in your IT
infrastructure. Pay attention to the "_Data categories_" column in search and reports (for the
"_Document_" object types only). See the
[Sensitive Data Discovery](/docs/auditor/10.9/admin/settings/sensitivedatadiscovery.md) topic for additional
information on how to enable monitoring of sensitive data in Netwrix Auditor.
