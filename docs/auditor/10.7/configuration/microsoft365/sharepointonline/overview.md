---
title: "SharePoint Online"
description: "SharePoint Online"
sidebar_position: 30
---

# SharePoint Online

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in the following way:

- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - Unified audit log must be enabled for a Tenant. See the Microsoft
      [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide)
      article for additional information.
    - Prepare a Data Collecting Account as described in the
      [Permissions for SharePoint Online Auditing ](/docs/auditor/10.7/configuration/microsoft365/sharepointonline/permissions/permissions.md) topic.
    - Configure required protocols and ports, as described in the
      [SharePoint Online Ports](/docs/auditor/10.7/configuration/microsoft365/sharepointonline/ports.md) topic.

Review a full list of object types and attributes Netwrix Auditor can collect on SharePoint Online.
OneDrive for Business changes are reported as SharePoint Online.

| Object type                    | Attributes                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Site Collection                | - Site Collection administrators                                                                                                                                                                                                                                                                 |
| Document                       | - Name - Permissions - URL - Data categories                                                                                                                                                                                                                                                     |
| Site                           | - Permissions                                                                                                                                                                                                                                                                                    |
| Site Collection Sharing Policy | - Sharing with external users - Sharing using anonymous access links                                                                                                                                                                                                                             |
| Sharing Policy                 | - Sharing with external users - Sharing using anonymous access links - External users must accept sharing invitations using the same account that the invitations were sent to - Sharing Domain Restriction mode - Allow domain list - Deny domain list - Require anonymous links expire in days |
| Group                          | - Members - Name                                                                                                                                                                                                                                                                                 |
| Folder                         | - Permissions                                                                                                                                                                                                                                                                                    |
| Sharing Invitation             | - Expiration date - Shared with                                                                                                                                                                                                                                                                  |
| Access Request                 | - Expiration date                                                                                                                                                                                                                                                                                |

## Sensitive data

Starting with the version 10, Netwrix Auditor is able to report about sensitive data in your IT
infrastructure. Pay attention to the "_Data categories_" column in search and reports (for the
"_Document_" object types only). See the
[Sensitive Data Discovery ](/docs/auditor/10.7/admin/settings/sensitivedatadiscovery.md)topic for additional
information on how to enable monitoring of sensitive data in Netwrix Auditor.
