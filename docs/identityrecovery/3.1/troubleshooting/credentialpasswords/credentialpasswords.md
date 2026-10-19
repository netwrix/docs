---
title: "Update Account Passwords"
description: "Update Account Passwords"
sidebar_position: 10
---

# Update Account Passwords

Account passwords occasionally need to be updated due to various reasons, such as security policies
that require passwords to be reset on a regular basis. The following types of credentials may be
impacted by password changes or security policies:

- SQL Server Service Account
- Recovry Service Account
- Domain Controller Backup Service Account

## SQL Server Service Account

The SQL Server service account grants access to the SQL Server database. You can update it through
the Identity Recovery Configuration Utility. See the
[Update SQL Server Service Account Password](/docs/identityrecovery/3.1/troubleshooting/credentialpasswords/sqlserverserviceaccount.md) topic for additional information.

## Recovery Service Account

The Recovery service account runs the Recovery Console service and performs the domain
backups. You can update it on the Domains page in the Recovery Console. See the
[Edit Domain Configuration](/docs/identityrecovery/3.1/admin/configuration/domain.md#edit-domain-configuration) topic for additional information.


