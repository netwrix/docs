---
title: "Active Directory"
description: "Active Directory"
sidebar_position: 10
---

# Active Directory

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

    - Configure the domain for auditing. See the
      [Audit Configuration Assistant](/docs/auditor/10.8/tools/auditconfigurationassistant.md) topic for
      information on configuring the domain.
    - On the Auditor console computer:

        - If you have enabled automatic log backup for the Security log of your domain controller,
          you can instruct Auditor to clear the old backups automatically. For that, use the
          **CleanAutoBackupLogs** registry key, as described in the
          [Active Directory Registry Key Configuration](/docs/auditor/10.8/configuration/activedirectory/registrykey.md) topic.

            **_RECOMMENDED:_** Adjust retention period for the backup files accordingly (default is
            **50** hours). See the [Adjust Security Event Log Size and Retention](/docs/auditor/10.8/configuration/activedirectory/securitylog.md)
            topic.

        - To provide for event data collection, the Secondary Logon service must be up and running.
          Open **Administrative Tools** > **Services**, right-click the **Secondary Logon** service
          and on the **General** tab make sure that Startup type for this service is other than
          _Disabled_.

## Monitored Objects

Netwrix Auditor tracks changes made to all object classes and attributes in the Active Directory
Domain, Configuration and Schema partitions. It also tracks changes to new object classes and
attributes added due to the Active Directory Schema extension. For detailed information, refer to
Microsoft articles:

- [A full list of Active Directory object classes](http://msdn.microsoft.com/en-us/library/ms680938(v=vs.85).aspx)
- [A full list of Active Directory object attributes](http://msdn.microsoft.com/en-us/library/ms675090(v=vs.85).aspx)

Review the following limitations:

- Netwrix Auditor does not track changes to non-replicated attributes, such as badPwdCount,
  Last-Logon, Last-Logoff, etc. The non-replicated attributes pertain to a particular domain
  controller and are not replicated to other domain controllers.
- Changes made through the Exchange Management Console in the Organization Configuration node
  (Federation Trust, Organization Relationships and Hybrid Configuration tabs) are displayed in an
  internal Active Directory format that can be difficult to interpret.
- Netwrix Auditor tracks changes to membership in all groups inside the monitored domain (Domain
  local groups) and Universal and Global groups of domains in the same forest. Changes to Domain
  local groups of a different domain in the same forest are not reported.

State-in-time data collection is supported for Active Directory.

For AD domain monitoring with Netwrix Auditor, the domain should be configured as explained below.

## Domain Audit Policy Settings

Effective domain controllers policy settings must be configured as listed in the table below.

| Policy                         | Audit type  |
| ------------------------------ | ----------- |
| Audit account management       | _"Success"_ |
| Audit directory service access | _"Success"_ |
| Audit logon events             | _"Success"_ |

You can configure either **Basic domain audit policies**, or **Advanced domain audit policies**.

- To configure these settings automatically using Netwrix Auditor, refer to the
  [Active Directory: Automatic Configuration](/docs/auditor/10.8/configuration/activedirectory/automatic.md) topic.
- To configure them manually, refer to the [Configure Basic Domain Audit Policies](/docs/auditor/10.8/configuration/activedirectory/basicpolicy.md)
  or [Configure Advanced Audit Policies](/docs/auditor/10.8/configuration/activedirectory/advancedpolicy.md) topics.

## Audit Settings for AD Partitions

Required object-level audit settings for the Active Directory partition must be configured as
described in the next sections.

### Domain Partition

Object-level audit settings for the Domain partition must be configured to audit for _Success_ of
all access operations except the following: _Full Control_, _List Contents_, _Read All Properties_
and _Read Permissions_.

These settings must be configured for **Everyone** security principal and applied to **This object
and all descendant objects**.

- You can configure these settings automatically using Netwrix Auditor, as described in the
  [Active Directory: Automatic Configuration](/docs/auditor/10.8/configuration/activedirectory/automatic.md) topic.
- To configure them manually, refer to the [Configure Object-Level Auditing](/docs/auditor/10.8/configuration/activedirectory/objectlevel.md) topic.

### Configuration and Schema Partitions

Object-level audit settings for the Configuration and **Schema** partitions must be configured to
audit for _Success_ of all access operations except the following: _Full Control_, _List Contents_,
_Read All Properties_ and _Read Permissions_

These settings must be configured for **Everyone** security principal and applied to **This object
and its descendant objects**.

- You can configure these settings automatically using Netwrix Auditor, as described in the
  [Active Directory: Automatic Configuration](/docs/auditor/10.8/configuration/activedirectory/automatic.md) topic.
- To configure them manually, refer to the [Configure Object-Level Auditing](/docs/auditor/10.8/configuration/activedirectory/objectlevel.md) topic.

## Security Event Log Settings

**Security event log** settings for the domain controllers should be configured as follows:

| Setting            | Value                        |
| ------------------ | ---------------------------- |
| Max event log size | 4 GB                         |
| Retention method   | _Overwrite events as needed_ |
| Auto-archiving     | Enabled                      |

- You can configure these settings automatically using Netwrix Auditor, as described in the
  [Active Directory: Automatic Configuration](/docs/auditor/10.8/configuration/activedirectory/automatic.md) topic.
- To configure them manually, refer to the
  [Adjust Security Event Log Size and Retention](/docs/auditor/10.8/configuration/activedirectory/securitylog.md) topic.

## Exchange Settings

If you have an on-premises Exchange server in your Active Directory domain, consider that some
changes can be made via that Exchange server. To be able to audit and report who made those changes,
you should:

- Configure the Exchange Administrator Audit Logging (AAL) settings, as described the
  [Exchange Administrator Audit Logging Settings](/docs/auditor/10.8/configuration/exchange/auditlog.md) topic.
- Make sure that the account used for data collection has the following:

    - Membership in the Organization Management or Records Management group

-OR-

- The Audit Logs management role.

### Next Steps

- Configure Data Collecting Account, as described in the
  [Additional Configuration to Review Changes Made via Exchange Server](/docs/auditor/10.8/configuration/activedirectory/additional.md) topic.
- Configure required protocols and ports, as described in the [Active Directory Ports](/docs/auditor/10.8/configuration/activedirectory/ports.md)
  topic.
- If you plan to restore deleted Active Directory objects and their attributes using the Netwrix
  Auditor Object Restore for Active Directory tool (shipped with Netwrix Auditor,) it is recommended
  to set the **Active Directory tombstone lifetime** property to 730 days (default is 180 days). See
  the [Adjust Active Directory Tombstone Lifetime (optional)](/docs/auditor/10.8/configuration/activedirectory/tombstone.md) topic for additional
  information.
