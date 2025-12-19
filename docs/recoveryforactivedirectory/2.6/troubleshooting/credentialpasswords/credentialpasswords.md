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

The SQL Server service account grants access to the SQL Server database. It can be updated through
the Recovery for Active Directory Configuration Utility. See the
[Update SQL Server Service Account Password](/docs/recoveryforactivedirectory/2.6/troubleshooting/credentialpasswords/sqlserverserviceaccount.md) topic for additional
information.

## Recovry Service Account

The Recovery service account is used to run the Recovery Console service and preform the domain
backups. It can be updated on the Domains page in the Recovery Console. See the
[Edit Domain Configuration](/docs/recoveryforactivedirectory/2.6/admin/configuration/domain.md#edit-domain-configuration) topic for
additional information.

## Domain Controller Backup Service Account

The backup service account for a domain controller is used to write the backup file of the domain
controller to a network share of the destination server. It can be updated on the Forest page in the
Recovery Console. See the [Update Domain Controller Backup Account Password](/docs/recoveryforactivedirectory/2.6/troubleshooting/credentialpasswords/serverbackupaccount.md)
topic for additional information.
