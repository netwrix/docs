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

The SQL Server source type appears in the add-source wizard as the **SQL Server** tile with the
sub-text **SQL Logons**. SQL Logons is the only SQL Server connector.

### Choose Which Accounts to Audit

The **Audit SQL Logons** option has three choices:

- **Audit all accounts** – Default. The connector audits every account.
- **Audit specific accounts** – The connector audits only the accounts you list.
- **Audit all accounts except** – The connector audits every account except the ones you list.

Use a wildcard (\*) to include or exclude multiple accounts at once, for example `MYDOMAIN\*`.
Adding an entry that is already in the list shows the message "This account is already in the list".

Each account entry also has workstation and application filters. Both default to `*`.

The connector collects SQL Server activity event types 1 through 6. You can't change this range.

| Logon Type    | Action                            |
| ------------- | --------------------------------- |
| SQL logon     | <ul><li>Successful logon</li><li>Failed logon</li></ul> |
| Windows logon | <ul><li>Successful logon</li><li>Failed logon</li></ul> |

## Next Steps

Remember to do the following:

- Configure a Data Collecting Account as described in the
  [Permissions for SQL Server Auditing](/docs/1secure/configuration/sqlserver/permissions.md) topic.
- Configure ports as described in the [SQL Server Ports](/docs/1secure/configuration/sqlserver/ports.md) topic.
