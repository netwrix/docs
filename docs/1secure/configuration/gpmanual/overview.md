---
title: "Group Policy"
description: "Group Policy"
sidebar_position: 10
---

# Group Policy

Netwrix 1secure relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the computer where Netwrix Cloud Agent resides. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.


## Group Policy Activity Overview

Group Policy Activity tracks and reports Active Directory Group Policy (GPO) changes—including password, account, audit, and security settings policies—with built-in reports and configurable alerts.

The Group Policy Activity feature monitors:
- Group Policy Object (GPO) creation, modification, and deletion
- Password policy changes
- Account policy changes
- Audit policy settings changes
- Security settings policy updates

## Configuration Methods

You can configure your IT Infrastructure for monitoring in one of the following ways:

- **Automatically by adding connector Group Policy Activity in Active Directory data source** This method is recommended for evaluation purposes in test environments. If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed.For a full list of audit settings required for Netwrix 1Secure to collect comprehensive audit data and instructions on how to configure them, refer to [Configure IT Infrastructure for Auditing and Monitoring.](/docs/1secure/configuration/configureitinfrastructure)

If you select to automatically configure audit in the target environment, your current audit settings will be checked on each data collection and adjusted if necessary.



- **Manually** – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable 1secure to continually enforce the relevant audit policies or
  configure them manually:

    - [Configure Basic Domain Audit Policies](/docs/1secure/configuration/admanual/domainauditpolicies) or [Configure Advanced Audit Policies](/docs/1secure/configuration/admanual/advancedpolicy) Either local or advanced audit policies must be configured to track changes to accounts and groups, and to identify workstations where changes were made.
      
    - [Configure Object-Level Auditing](/docs/1secure/configuration/admanual/objectlevel)

    - [Adjust Security Event Log Size and Retention Settings](/docs/auditor/10_8/configuration/activedirectory/securitylog)

    - [Enable Secondary Logon Service](/docs/1secure/configuration/admanual/secondarylogonservice)

    - [Configure protocols and ports](/docs/1secure/configuration/admanual/protocolsandports)


