---
title: "Configure Domain for Monitoring Active Directory"
description: "Configure Domain for Monitoring Active Directory"
sidebar_position: 50
---

# Configure Domain for Monitoring Active Directory

You can configure your Active Directory domain for monitoring in one of the following ways:

- Automatically when creating an organization

    This method is recommended for evaluation purposes in test environments. If any conflicts are
    detected with your current audit settings, automatic audit configuration will not be
    performed.For a full list of audit settings required for Netwrix 1Secure to collect
    comprehensive audit data and instructions on how to configure them, refer to
    [Configure IT Infrastructure for Auditing and Monitoring](/docs/1secure/configuration/configureitinfrastructure.md).

    If you select to automatically configure audit in the target environment, your current audit
    settings will be checked on each data collection and adjusted if necessary.

- Manually.

Also, perform the following procedures:

- [Configure Basic Domain Audit Policies](/docs/1secure/configuration/admanual/domainauditpolicies.md) or
  [Configure Advanced Audit Policies](/docs/1secure/configuration/admanual/advancedpolicy.md). Either local or advanced audit policies
  must be configured to track changes to accounts and groups, and to identify workstations where
  changes were made.
- [Configure Object-Level Auditing](/docs/1secure/configuration/admanual/objectlevel.md)
- Adjust Security Event Log Size and Retention Settings
- [Enable Secondary Logon Service](/docs/1secure/configuration/admanual/secondarylogonservice.md)
