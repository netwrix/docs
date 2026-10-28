---
title: "Navigate the Console"
description: "Navigate the Console"
sidebar_position: 10
---

# Navigate the Console

The Recovery Console displays navigation options in the:

- Application header
- Left navigation pane

![Navigation Options in the Recovery Console](/images/identityrecovery/3.1/product/dashboard.png)

## Application Header

The application header contains the following icons in the top right corner:

- Help Center – Click the **?** icon to open the
  [](https://helpcenter.netwrix.com/)[Netwrix Technical Knowledge Center](https://helpcenter.netwrix.com/)
  for the Identity Recovery documentation
- User Profile – Click the profile icon to display the following options:

    - Manage – Click it to open the MFA page, where you can set up multi-factor authentication for
      your Identity Recovery account. See the
      [Configure Multi-Factor Authentication](/docs/identityrecovery/3.1/configuration/configuremfa.md) topic for additional information.
    - Log out – Click it to sign out of the Recovery Console

## Navigation Pane

The navigation pane contains the following links:

- [Active Directory Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md) – The Active Directory page lists the domains configured in Identity Recovery. You can perform object rollback and recovery  operations on this page.
- [Entra ID Page](/docs/identityrecovery/3.1/admin/entraid/overview.md) – The Entra ID page lists the Entra tenants configured in Identity Recovery. You can perform object rollback and recovery operations on this page.
- [Okta Page](/docs/identityrecovery/3.1/admin/okta/overview.md) – The Okta page lists the Okta tenants configured in Identity Recovery. You can perform object rollback operations on this page.
- [Forest Page](/docs/identityrecovery/3.1/admin/forest/forest.md) – The Forest page displays your Active Directory forest with its domains and domain controllers. Administrators can set up backup configurations for domain
  controllers as well as recover the forest from those backups.
- [Audit Logs Page](/docs/identityrecovery/3.1/admin/audit.md) – The Audit Logs page provides an audit trail of the actions performed by users in Identity Recovery.
- [Configuration Interface](/docs/identityrecovery/3.1/configuration/overview.md) – The Configuration interface lets you configure domains, forests, Entra ID and Okta tenants, Azure Storage,
  user access, notifications, integrations, data retention policy, and licensing for Identity Recovery.

    :::note
    Only users with Administrator rights have access to the Configuration interface.
    :::

    - [Domains Page](/docs/identityrecovery/3.1/configuration/domain.md) – The Domains tab provides a list of the domains backed up by Identity Recovery. It displays the backup schedule settings for each
      added domain. You can also add and configure new domains.
    - [Connect a Forest](/docs/identityrecovery/3.1/configuration/forest.md) – The Forest tab lets you add a forest so that Identity Recovery can back it up and recover it.
    - [Azure Storage Page](/docs/identityrecovery/3.1/configuration/azurestorage.md) – The Azure Storage tab lists the storage containers in Azure Storage.
    - [Connect Entra ID](/docs/identityrecovery/3.1/configuration/entraid.md) – The Entra ID tab lets you add Entra tenants for Identity Recovery to back up and view their backup schedules.
    - [Connect Okta](/docs/identityrecovery/3.1/configuration/okta.md) – The Okta tab lets you add Okta tenants for Identity Recovery to back up and view their backup schedules.
    - [Users and Roles Page](/docs/identityrecovery/3.1/configuration/roles.md) – The Users and Roles tab displays the accounts with access to Identity Recovery.
    - [Notifications Page](/docs/identityrecovery/3.1/configuration/notifications.md) – The Notifications tab lets you configure notifications, which are required to send an email when a collection (backup) job completes.
    - [Netwrix Integrations Page](/docs/identityrecovery/3.1/configuration/integration.md) – The Netwrix Integrations tab lets you configure access to the data in other Netwrix products. Identity Recovery supports only Netwrix Threat Prevention.
    - [Data Retention Policy Page](/docs/identityrecovery/3.1/configuration/dataretention.md) – The Data Retention Policy tab provides settings for deleting backup data for domains and domain controllers older than X days, and for deleting backup data for tombstone objects that have been purged.
    - [Licensing Page](/docs/identityrecovery/3.1/configuration/licensing.md) – The Licensing tab provides an overview of the organization's license status and the ability to import a license file.

- [Utilities Page](/docs/identityrecovery/3.1/admin/utilities.md) – The Utilities page lets you download the Netwrix RSAT Extension, the Recovery Server Backup Installer, and the Netwrix Forest Recovery standalone application.
