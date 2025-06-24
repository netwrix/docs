---
title: "Sql Server In Netwrix 1Secure Guide"
sidebar_label: "Sql Server"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# SQL Server

Netwrix 1Secure relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Netwrix 1Secure console computer. It is recommended to configure the IT infrastructure
for automatic monitoring; however, you can also configure it manually if needed. You may also need
to enable certain built-in Windows services, etc.

Your current audit settings will be checked on each data collection and adjusted if necessary.
Proper audit configuration is required to ensure audit data integrity, otherwise your change reports
may contain warnings, errors, or incomplete audit data.

## SQL Server Monitoring Scope

The product collects successful and failed logon attempts for Windows and SQL logons.

| Logon Type    | Action                            |
| ------------- | --------------------------------- |
| SQL logon     | - Successful logon - Failed logon |
| Windows logon | - Successful logon - Failed logon |

## Next Steps

Remember to do the following:

- Configure a Data Collecting Account as described in the
  [Permissions for SQL Server Auditing](/docs/1secure/setup-and-configuration/sql-server/permissions.md) topic.
- Configure ports as described in the [SQL Server Ports](/docs/1secure/setup-and-configuration/sql-server/network-ports.md) topic.
