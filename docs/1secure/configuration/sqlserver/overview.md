---
title: "SQL Server"
description: "SQL Server"
sidebar_position: 50
---

# SQL Server

Netwrix 1Secure relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Netwrix 1Secure console computer. Configure the IT infrastructure for automatic monitoring; you can also configure it manually if needed. You may also need to enable certain built-in Windows services.

1Secure checks your current audit settings on each data collection and adjusts them if necessary.
Proper audit configuration is required to ensure audit data integrity, otherwise your change reports
may contain warnings, errors, or incomplete audit data.

## SQL Server Monitoring Scope

The product collects successful and failed logon attempts for Windows and SQL logons.

| Logon Type    | Action                            |
| ------------- | --------------------------------- |
| SQL logon     | <ul><li>Successful logon</li><li>Failed logon</li></ul> |
| Windows logon | <ul><li>Successful logon</li><li>Failed logon</li></ul> |

## Next Steps

Remember to do the following:

- Configure a Data Collecting Account as described in the
  [Permissions for SQL Server Auditing](/docs/1secure/configuration/sqlserver/permissions.md) topic.
- Configure ports as described in the [SQL Server Ports](/docs/1secure/configuration/sqlserver/ports.md) topic.
