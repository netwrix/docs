---
description: >-
  Netwrix Identity Recovery uses several distinct accounts for installation,
  console access, domain and forest backup, RSAT Extension registration, and
  cloud tenant recovery. This article identifies each account, where it is
  configured, and the minimum permissions it requires.
keywords:
  - service account
  - Domain Admin
  - RSAT Extension
  - adminContextMenu
  - DisplaySpecifiers
  - Recycle Bin access denied
  - least privilege access model
  - Netwrix Identity Recovery
  - Recovery Console
  - multi-domain
  - forest trust
  - Entra ID app registration
products:
  - identityrecovery
sidebar_label: "Identifying Service Accounts and Required Permissions"
tags:
  - kb
title: "Identifying Service Accounts and Required Permissions"
---

# Identifying Service Accounts and Required Permissions

## Overview

This article identifies each account Netwrix Identity Recovery uses for installation, configuration, and daily operation, including which task each one handles and what permissions it requires, particularly across multiple domains or forests joined by a trust.

## Instructions

Identity Recovery uses a separate, scoped service account for each job. Permissions granted to one account do not transfer to another, even when the accounts are used together in the same environment.

> **IMPORTANT:** A trust between two domains or forests allows accounts to authenticate across the trust boundary. It does not grant permissions across that boundary. Each account below still needs its permissions assigned natively in whatever domain, forest, or tenant it operates against.

### Installation-Time Accounts

The Identity Recovery Setup wizard collects three accounts during installation: SQL Server database, Identity Recovery service, and Administrator Role.

#### SQL Server Database Account

1. Configure this account on the **SQL Server Configuration** page.
2. Select either Windows Authentication or SQL Server Authentication.

- Creates and connects to the Identity Recovery database
- Requires read and write access to the database tables and permission to execute stored procedures

#### Identity Recovery Service Account

1. Configure this account on the **Netwrix Recovery Server Configuration** page.
2. Assign the **Log On As A Service** right in Local Security Policy on the application server.

This account starts and runs two separate Windows services:

- **Netwrix Recovery Server** (`TaskServer.exe`) — handles scheduling and job management, and performs domain backups
- **Netwrix Recovery Web Console** (`RecoveryWebConsole.exe`) — the browser-based console UI

> **NOTE:** If the database uses Windows Authentication, this account also connects to the database after setup completes.

#### Administrator Role Account

Configure this account on the **Administrator Role** page.

> **IMPORTANT:** This account becomes the first account or group with Administrator access to the Recovery Console. This setting is locked after installation and cannot be changed later.

### Recovery Console Login Roles

Add additional console users on the **Users and Roles** page.

- **Administrator**
    - Full control of the application
    - Can add domains, forests, and tenants
    - Can configure notifications
    - Can manage other users
    - Only this role has access to the Configuration section of the console
- **Operator**
    - Access to the Active Directory and Forest nodes to perform rollback and recovery tasks
    - Does not have access to Configuration settings

> **NOTE:** Console login roles do not require any Active Directory permissions on their own. The permissions to perform backup, rollback, or recovery operations belong to the per-domain account described in [Per-Domain Account](#per-domain-account).

### Per-Domain Account

Configure this account on the **Domains** page. It performs the backup, rollback, and recovery operations for a specific domain, including the actions that populate the Recycle Bin view in Active Directory Users and Computers (ADUC).

> **NOTE:** This account is configured separately for each domain. Adding a second domain does not reuse the account or permissions configured for the first domain. The new domain requires its own account with permissions granted natively in that domain.

- Requires Domain Admin privileges in its target domain
- An account with read-only access can still perform backups, but rollback and restore operations, including Recycle Bin recovery, fail with an access denied error
- Organizations that cannot grant Domain Admin privileges for policy reasons can use the least privilege access model instead, which defines a narrower set of permissions on:
    - The domain naming context
    - The DomainDnsZones and ForestDnsZones partitions
    - The Sites container
    - Group Policy objects

To supply a different Domain Admin account for a single rollback or restore operation without changing the account configured on the **Domains** page, select the **Use alternate credentials** checkbox on the **Credentials** page of the wizard.

### RSAT Extension Registration Account

The RSAT Extension registration does not use a dedicated service account — it uses whatever account is logged into the machine when that account clicks **Register** in the Recovery Configuration Utility.

- Registration does not modify the local registry. It writes the RSAT Extension GUID to the `adminContextMenu` attribute on `displaySpecifier` objects under `CN=DisplaySpecifiers` in the Active Directory Configuration partition.
- The Configuration partition is forest-wide, but each forest maintains its own, so registering the extension in one forest has no effect in a different forest across a trust.
- The **Registered** status shown in the utility only reflects the forest of whoever is currently logged in.

The account running the Configuration Utility requires Write permission on the `adminContextMenu` attribute for `displaySpecifier` objects in that forest's Configuration partition. Full Domain Admin access is not required; an administrator can delegate this narrower permission instead.

> **NOTE:** See [RSAT Extension Registered Status Is Scoped to the Current Forest](/docs/kb/recoveryad/operations-and-troubleshooting/recycle-bin-access-denied-despite-rsat-extension-registered) for why the "Registered" label can be misleading, [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension) for details on delegating the required permission, and [Registering the RSAT Extension Across Multiple Domains or Forests](/docs/kb/recoveryad/configuration-and-administration/registering-the-rsat-extension-across-multiple-domains-or-forests) for registering across more than one forest.

### Forest and Domain Controller Backup Accounts

Identity Recovery backs up and restores entire domain controllers using accounts configured on the **Forest** page, separate from the per-domain account used for object-level recovery.

#### Forest Connection Account

Configure this account when adding a forest. It connects to the forest to discover its domains and domain controllers.

#### Domain Controller Backup Account

Configure this account per domain controller in the **Server Backup Configuration** wizard.

- Validates the domain controller
- Installs the **Netwrix Recovery Server Backup Agent** (product: Netwrix Identity Recovery Server Backup)
- Writes backup data to a network share
- Requires read and write access to that network share

#### Target Server Restore Account

Configure this account when adding a domain controller to a recovery playbook.

- Logs into the target server during a forest recovery
- Must be an administrator account on the target server itself, not on the source domain

### Entra ID Accounts

#### Entra ID Application Registration

Configure this application registration on the **Entra ID Configuration** page.

- Requires a Client ID and secret
- Requires a defined set of Microsoft Graph application permissions granted admin consent, including permissions to:
    - Read and write users
    - Read and write groups
    - Read and write administrative units
    - Read and write directory data

#### Azure Storage Application Registration

Applies only if domain controller backups are stored in Azure Storage instead of a local network share.

Configure this application registration on the **Azure Storage** page.

- Requires a separate tenant name, Client ID, and secret
- Requires access to the target storage container

### Netwrix Integrations Account

Integrating with Netwrix Threat Prevention requires either a dedicated SQL account or Windows Authentication using the Identity Recovery service account, with Read permission on the Threat Prevention database.

> **NOTE:** Granting this integration access does not automatically expose the pulled-in audit data to Identity Recovery users. An administrator must explicitly grant each console user or group access to view that data on the **Netwrix Integrations** page.

### Troubleshooting Cross-Domain and Cross-Forest Issues

The following table maps common access denied symptoms to the account most likely responsible.

| Symptom | Account to Check | Required Permission |
|---|---|---|
| RSAT Extension will not register in a second domain or forest | Account running the Configuration Utility | Write on `adminContextMenu` in that forest's Configuration partition |
| Recycle Bin shows access denied in a specific domain | Per-domain account on the Domains page | Domain Admin in that specific domain |
| Object rollback or restore fails despite a successful backup | Per-domain account on the Domains page | Domain Admin, or alternate credentials supplied during the operation |
| Domain controller restore fails on the target server | Target server restore account | Administrator on the target server |

In every case above, confirm the account's permissions are granted directly in the domain or forest where the operation is failing. Do not assume a two-way trust extends permissions from one domain or forest to another.

## Related Links

- [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension)
- [Registering the RSAT Extension Across Multiple Domains or Forests](/docs/kb/recoveryad/configuration-and-administration/registering-the-rsat-extension-across-multiple-domains-or-forests)
- [RSAT Extension Registered Status Is Scoped to the Current Forest](/docs/kb/recoveryad/operations-and-troubleshooting/recycle-bin-access-denied-despite-rsat-extension-registered)
