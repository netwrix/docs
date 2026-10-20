---
title: "Configuration Interface"
description: "Configuration Interface"
sidebar_position: 60
---

# Configuration Interface

The Configuration interface lets you configure the domains, users, and roles,
notifications, integrations, data retention policy, and licensing for Identity Recovery.

:::note
Only users with Administrator rights have access to the Configuration interface.
:::


![Domains Page](/images/identityrecovery/3.1/IdentityImages_LatestDocs/Configuration/config.png)

The Configuration interface contains the following pages:

- [Domains Page](/docs/identityrecovery/3.1/admin/configuration/domain.md) – The Domains page lists the domains backed up by Identity Recovery, displays the backup schedule settings for each added domain, and lets you add and configure new domains.
- [Forest Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md) – The Forest page lists the domain controllers in the forest, whether backups are enabled for the domain controllers, and the last backup time.
- [Azure Storage Page](/docs/identityrecovery/3.1/admin/activedirectory/overview.md) – The Azure Storage page lists the storage containers in Azure Storage.
- [Entra ID Page](/docs/identityrecovery/3.1/admin/configuration/entraid.md) – The Entra page lists the Entra tenants backed up by Identity Recovery, displays the backup schedule settings for each added Entra tenant, and lets you add and configure new Entra tenants.
- [Okta Page](/docs/identityrecovery/3.1/admin/configuration/okta.md) – The Okta page lists the Okta tenants backed up by Identity Recovery, displays the backup schedule settings for each added Okta tenant, and lets you add and configure new Okta tenants.
- [Users and Roles Page](/docs/identityrecovery/3.1/admin/configuration/roles.md) – The Users and Roles page displays the accounts with access to Identity Recovery.
- [Notifications Page](/docs/identityrecovery/3.1/admin/configuration/notifications.md) – The Notifications page lets you configure notifications to send emails when a collection (backup) job completes.
- [Netwrix Integrations Page](/docs/identityrecovery/3.1/admin/configuration/integration.md) – The Netwrix Integrations page lets you configure access to data in other Netwrix products. At present, only Netwrix Threat Prevention is supported.
- [Data Retention Policy Page](/docs/identityrecovery/3.1/admin/configuration/dataretention.md) – The Data Retention Policy page lets you delete backup data for domains and domain controllers older than X days, and delete backup data for purged tombstone objects.
- [Licensing Page](/docs/identityrecovery/3.1/admin/configuration/licensing.md) – The Licensing page shows your organization's license status and lets you import a license file.
