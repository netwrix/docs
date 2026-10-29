---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 10
---

# Getting Started

This topic explains how to install and configure Netwrix Identity Recovery. Identity Recovery
rolls back and recovers unintended directory changes.

## Installation Requirements

Before installing Identity Recovery, review the recommended configuration of the servers needed to install this product in a production environment. See the [Requirements](/docs/identityrecovery/3.1/requirements/overview.md) topic for additional information.

## Installation

Install and configure Identity Recovery. See the
[Install the Application](/docs/identityrecovery/3.1/install/application.md) topic for additional information.

:::note
Installing the server automatically installs the Remote Server Administration Tools (RSAT) Extension locally.
:::

## First Launch

Launch Identity Recovery using the desktop icon and sign in with the administrator role
account that was configured during installation. See the [First Launch](/docs/identityrecovery/3.1/install/firstlaunch.md) topic for additional information on signing in for the first time.

## Initial Configuration

Several Identity Recovery components require configuration after the first launch of the product.

- Configure Domain Backup – Configure a domain and backup settings. Netwrix recommends starting a backup of the domain after
  configuring it. See the [Domains Page](/docs/identityrecovery/3.1/configuration/domain.md) topic for additional information on configuring a domain to backup.
- Configure Forest Backup – Add a forest (see the [Connect a Forest](/docs/identityrecovery/3.1/configuration/forest.md) topic), and then configure backup settings for domain
  controllers in the forest. Netwrix recommends starting a backup of the domain controllers after
  configuring backup settings. See the [Forest Page](/docs/identityrecovery/3.1/admin/forest/forest.md) topic for additional information on configuring a domain controller backup.
- _(Optional)_ Install RSAT Extension on Additional Servers – The `RSAT Extension.msi` is
  automatically installed with the Identity Recovery application on the application
  server. You can also install the extension on other servers where Active Directory Users and Computers (ADUC) is installed. See the
  [Install the RSAT Extension](/docs/identityrecovery/3.1/install/installation.md) topic for additional information.
- Configure Additional Users – The user or group configured during installation of the product has
  administrator access to the Recovery Console. You can add other users and groups and
  assign them roles. See the [Users and Roles Page](/docs/identityrecovery/3.1/configuration/roles.md) topic for additional information.
- _(Optional)_ Configure Notifications – Configure the email settings on the Notifications page
  before you turn on notifications for a domain or tenant backup job. See the [Notifications Page](/docs/identityrecovery/3.1/configuration/notifications.md) topic for additional information on configuring email notifications.

## Rollback and Restore Operations

Now that the initial configuration of Identity Recovery is complete and backups have
been created, you can rollback and recover Active Directory objects, as well as restore domain
controllers.
