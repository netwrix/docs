---
title: "Group Policy"
description: "Group Policy"
sidebar_position: 50
---

# Group Policy

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
      [Audit Configuration Assistant](/docs/auditor/10.9/tools/auditconfigurationassistant.md) topic for
      information on configuring the domain.
    - On the Auditor console computer:

        - If you have enabled automatic log backup for the Security log of your domain controller,
          you can instruct Auditor to clear the old backups automatically. For that, use the
          **CleanAutoBackupLogs** registry key, as described in the
          [Active Directory Registry Key Configuration](/docs/auditor/10.9/configuration/activedirectory/registrykey.md) topic.

            **_RECOMMENDED:_** Adjust retention period for the backup files accordingly (default is
            **50** hours). See the
            [Adjust Security Event Log Size and Retention](/docs/auditor/10.9/configuration/activedirectory/securitylog.md) topic.

        - To provide for event data collection, the Secondary Logon service must be up and running .
          Open **Administrative Tools** > **Services**, right-click the **Secondary Logon** service
          and on the **General** tab make sure that Startup type for this service is other than
          _Disabled_.
