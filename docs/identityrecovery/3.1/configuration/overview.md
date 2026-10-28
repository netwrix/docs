---
title: "Configuration Interface"
description: "Configure domains, forests, tenants, storage, user access, notifications, integrations, data retention, and licensing for Identity Recovery."
sidebar_position: 40
---

# Configuration Interface

The Configuration interface lets you configure domains, forests, Entra ID and Okta tenants, Azure Storage,
user access, notifications, integrations, data retention policy, and licensing for Identity Recovery.

:::note
Only users with Administrator rights have access to the Configuration interface.
:::


![Configuration interface](/images/identityrecovery/3.1/IdentityImages_LatestDocs/Configuration/config.png)

The Configuration interface contains the following pages:

- [Domains Page](/docs/identityrecovery/3.1/configuration/domain.md) – The Domains page lists the domains backed up by Identity Recovery, displays the backup schedule settings for each added domain, and lets you add and configure new domains.
- [Connect a Forest](/docs/identityrecovery/3.1/configuration/forest.md) – Add a forest so that Identity Recovery can back it up and recover it.
- [Azure Storage Page](/docs/identityrecovery/3.1/configuration/azurestorage.md) – The Azure Storage page lists the storage containers in Azure Storage.
- [Connect Entra ID](/docs/identityrecovery/3.1/configuration/entraid.md) – Add Entra tenants for Identity Recovery to back up, view their backup schedule settings, and configure new tenants.
- [Connect Okta](/docs/identityrecovery/3.1/configuration/okta.md) – Add Okta tenants for Identity Recovery to back up, view their backup schedule settings, and configure new tenants.
- [Users and Roles Page](/docs/identityrecovery/3.1/configuration/roles.md) – The Users and Roles page displays the accounts with access to Identity Recovery.
- [Notifications Page](/docs/identityrecovery/3.1/configuration/notifications.md) – The Notifications page lets you configure notifications to send emails when a collection (backup) job completes.
- [Netwrix Integrations Page](/docs/identityrecovery/3.1/configuration/integration.md) – The Netwrix Integrations page lets you configure access to data in other Netwrix products. Identity Recovery supports only Netwrix Threat Prevention.
- [Data Retention Policy Page](/docs/identityrecovery/3.1/configuration/dataretention.md) – The Data Retention Policy page lets you delete backup data for domains and domain controllers older than X days, and delete backup data for purged tombstone objects.
- [Licensing Page](/docs/identityrecovery/3.1/configuration/licensing.md) – The Licensing page shows your organization's license status and lets you import a license file.

Any user can set up multi-factor authentication for their own account from the profile menu, without access to the Configuration interface. See [Configure Multi-Factor Authentication](/docs/identityrecovery/3.1/configuration/configuremfa.md).
