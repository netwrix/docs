---
title: "MS Teams"
description: "MS Teams"
sidebar_position: 40
---

# MS Teams

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - Unified audit log must be enabled for a Tenant. See the Microsoft
      [Turn auditing on or off](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off?view=o365-worldwide)
      article for additional information.
    - Prepare a Data Collecting Account as described in the
      [Permissions for Teams Auditing](/docs/auditor/10.9/configuration/microsoft365/teams/permissions/permissions.md) topic.
    - Configure required protocols and ports, as described in the [Teams Ports](/docs/auditor/10.9/configuration/microsoft365/teams/ports.md) topic.

Auditor can monitor for operations with MS Teams entities, collect state-in-time snapshots and track
changes to the object attributes. This section provides detailed information on these activities.

Starting with the version 10.5, Auditor is able to report about sensitive data in your IT
infrastructure. Pay attention to the "_Data categories_" column in search and reports (for the
"_Document_" object types only). Refer to
[Sensitive Data Discovery ](/docs/auditor/10.9/admin/settings/sensitivedatadiscovery.md) for detailed
instructions on how to enable monitoring of sensitive data in Auditor.

Review a full list of object types and attributes Auditor can collect on SharePoint Online. OneDrive
for Business changes are reported as SharePoint Online.

| Object type | Attributes                                   |
| ----------- | -------------------------------------------- |
| Document    | - Name - Permissions - URL - Data categories |
| Team        | - Members - Name                             |
| Folder      | - Permissions                                |
