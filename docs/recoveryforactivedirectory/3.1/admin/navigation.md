---
title: "Navigate the Console"
description: "Navigate the Console"
sidebar_position: 10
---

# Navigate the Console

In the Recovery Console, navigation options are displayed in the:

- Application header
- Left navigation pane

![Navigation Options in the Recovery Console](/images/recoveryforactivedirectory/3.1/product/dashboard.png)

## Application Header

The application header contains the following icons in the top right corner:

- Help Center – Click the **?** icon to open the
  [](https://helpcenter.netwrix.com/)[Netwrix Technical Knowledge Center](https://helpcenter.netwrix.com/)
  for the Identity Recovery documentation
- User Profile – On clicking the profile icon, the following options are displayed:

    - Manage – Click it to open the MFA page, where you can set up multi-factor authentication for
      your Identity Recovery account. See the
      [Configure Multi-Factor Authentication](/docs/recoveryforactivedirectory/3.1/admin/configuremfa.md) topic for additional information.
    - Log out – Click it to sign out of the Recovery Console

## Navigation Pane

The navigation pane contains the following links:

- [Active Directory Page](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/overview.md) – The Active Directory page lists the domains configured in Identity Recovery. You can perform object rollback and recovery  operations on this page.
- [Entra ID Page](/docs/recoveryforactivedirectory/3.1/admin/entraid/overview.md) – The Active Directory page lists the domains configured in Identity Recovery. You can perform object rollback and recovery operations on this page.
- [Forest Page](/docs/recoveryforactivedirectory/3.1/admin/forest/forest.md) – The Forest page displays your Active Directory forest with its domains and domain controllers. Administrators can set up backup configurations for domain
  controllers as well as recover the forest from those backups.
- [Audit Logs Page](/docs/recoveryforactivedirectory/3.1/admin/audit.md) – The Audit Logs page provides an audit trail of the actions performed by users in Identity Recovery.
- [Configuration Interface](/docs/recoveryforactivedirectory/3.1/admin/configuration/overview.md) – The Configuration interface provides access to configure the domains, users and roles, notifications, integrations, data retention policy, and licensing for Identity Recovery.
- [Utilities Page](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/overview.md) – The Active Directory page lists the domains configured in Identity Recovery. You can perform object rollback and recovery  operations on this page.

    :::note
    Only users with Administrator rights have access to the Configuration interface.
    :::

    - [Domains Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/domain.md) – The Domains page provides a list of the domains backed up by Identity Recovery. It displays the backup schedule settings for each
      added domain. You can also add and configure new domains.
    - [Forest Page](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/overview.md) – The Forest page lists the domain controllers in the forest, whether backups are enabled for the domain controllers, and the last backup time.
    - [Azure Storage Page](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/overview.md) – The Azure Storage page lists the storage containers in Azure Storage.
    - [Entra ID Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/entraid.md) – The Entra page provides a list of the Entra tenants backed up by Identity Recovery. It displays the backup schedule settings for each
      added Entra tenant. You can also add and configure new Entra tenant.
    - [Users and Roles Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/roles.md) – The Users and Roles page displays the accounts with access to Identity Recovery.
    - [Notifications Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/notifications.md) – The Notifications page allows the configuration of notifications, which is required for sending an email when a collection (backup) job is completed.
    - [Netwrix Integrations Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/integration.md) – The Netwrix Integrations page provides the ability to configure access to the data in other Netwrix products. At present, only Netwrix Threat Prevention is supported.
    - [Data Retention Policy Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/dataretention.md) – The Data Retention Policy page provides settings for deleting backup data that of domains and domain controllers has aged by X number of days, and for deleting backup data for tombstone objects that have been purged.
    - [Licensing Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/licensing.md) – The Licensing page provides an overview of the organization's license status and the ability to import a license file.
