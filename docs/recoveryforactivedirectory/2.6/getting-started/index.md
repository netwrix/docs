title: Getting Started Overview
sidebar_label: Getting Started
description: Complete guide to installing, configuring, and implementing Recovery for Active Directory including initial setup and configuration steps.

# Getting Started

This topic provides information on installing and configuring Netwrix Recovery for Active Directory,
which enables organizations to quickly and easily roll back and recover unintended directory
changes.

Installation Requirements

Before installing Recovery for Active Directory, review the recommended configuration of the servers
needed to install this product in a production environment. See the
[Requirements ](/docs/recoveryforactivedirectory/2.6/requirements/index.md)topic for additional information.

Installation

Install and configure Recovery for Active Directory. See the
[Install the Application](/docs/recoveryforactivedirectory/2.6/getting-started/installation.md) topic for additional information.

**NOTE:** Installing the server automatically installs the RSAT Extension locally.

First Launch

Launch Recovery for Active Directory using the desktop icon and sign in with the administrator role
account that was configured during installation. See the [First Launch](/docs/recoveryforactivedirectory/2.6/getting-started/initial-configuration.md)
topic for additional information on signing in for the first time.

Initial Configuration

Several Recovery for Active Directory components require configuration after the first launch of the
product.

- Configure Domain Backup – On logging into the Recovery Console, you land on the
  [Domain Backup Configuration Page](/docs/recoveryforactivedirectory/2.6/domain-recovery/backup-configuration.md), that directs you
  to configure a domain to be backed up. It is recommended a start a backup of the domain after
  configuring it. See the [Domains Page](/docs/recoveryforactivedirectory/2.6/configuration/domain-configuration.md) topic for additional
  information on configuring a domain to backup.
- Configure Forest Backup – Configure a forest and then configure backup settings for domain
  controllers in the forest. It is recommended a start a backup of the domain controllers after
  configuring backup settings. See the [Forest Page](/docs/recoveryforactivedirectory/2.6/forest-recovery/index.md) topic for additional
  information on configuring a domain controller backup.
- _(Optional)_ Install RSAT Extension on Additional Servers – The `RSAT Extension.msi` is
  automatically installed with the Recovery for Active Directory application on the application
  server. The extension can also be installed on other servers where ADUC is installed. See the
  [Install the RSAT Extension](/docs/recoveryforactivedirectory/2.6/rsat-extension/installation.md) topic for additional information.
- Configure Additional Users – The user or group configured during installation of the product has
  administrator access to the Recovery Console. Additional users and groups can be added and
  assigned roles. See the [Users and Roles Page](/docs/recoveryforactivedirectory/2.6/configuration/user-roles.md) topic for additional
  information.
- _(Optional)_ Configure Notifications – Email notifications require configuration before they can
  be enabled. See the [Notifications Page](/docs/recoveryforactivedirectory/2.6/configuration/notifications.md) topic for
  additional information on configuring email notifications.

Rollback and Restore Operations

Now that the initial configuration of Recovery for Active Directory is complete and backups have
been created, you can rollback and recover Active Directory objects, as well as restore domain
controllers.
