---
title: "Configuration Interface"
description: "Configuration Interface"
sidebar_position: 60
---

# Configuration Interface

The Configuration interface provides access to configure the domains, users and roles,
notifications, integrations, data retention policy, and licensing for Identity Recovery.

:::note
Only users with Administrator rights have access to the Configuration interface.
:::


![Domains Page](/images/recoveryforactivedirectory/3.1/IdentityImages_LatestDocs/Configuration/config.png)

The Configuration interface contains the following pages:

- [Domains Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/domain.md) – The Domains page provides a list of the domains backed up by Identity Recovery. It displays the backup schedule settings for each added domain. You can also add and configure new domains.
- [Forest Page](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/overview.md) – The Forest page lists the domain controllers in the forest, whether backups are enabled for the domain controllers, and the last backup time.
- [Azure Storage Page](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/overview.md) – The Azure Storage page lists the storage containers in Azure Storage.
- [Entra ID Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/entraid.md) – The Entra page provides a list of the Entra tenants backed up by Identity Recovery. It displays the backup schedule settings for each added Entra tenant. You can also add and configure new Entra tenant.
- [Okta Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/okta.md) – The Okta page provides a list of the Okta tenants backed up by Identity Recovery. It displays the backup schedule settings for each added Okta tenant. You can also add and configure new Okta tenant.
- [Users and Roles Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/roles.md) – The Users and Roles page displays the accounts with access to Identity Recovery.
- [Notifications Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/notifications.md) – The Notifications page allows the configuration of notifications, which is required for sending an email when a collection (backup) job is completed.
- [Netwrix Integrations Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/integration.md) – The Netwrix Integrations page provides the ability  to configure access to the data in other Netwrix products. At present, only Netwrix Threat Prevention is supported.
- [Data Retention Policy Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/dataretention.md) – The Data Retention Policy page provides settings for deleting backup data that of domains and domain controllers has aged by X number of days, and for deleting backup data for tombstone objects that have been purged.
- [Licensing Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/licensing.md) – The Licensing page provides an overview of the organization's license status and the ability to import a license file.
