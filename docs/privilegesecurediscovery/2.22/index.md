---
title: "Netwrix Privilege Secure for Discovery Documentation"
description: "Documentation for Netwrix Privilege Secure for Discovery"
sidebar_position: 1
---

# Netwrix Privilege Secure for Discovery Documentation

Netwrix Privilege Secure for Discovery (formerly Remediant SecureONE) gives IT administrators
and security analysts dynamic and continuous visibility into their organization’s privileged
accounts and lets them manage those accounts from a single interface. Users then self-administer privilege access,
getting access to only the right resource, at the right moment and for as long as they
need to complete their job. This approach eliminates standing privileges, effectively preventing
lateral movement attacks, and significantly reducing an organization’s attack surface.

## Release Lines

NPS-D is available in two release lines:

- **26.03 and later** — Current release line that Netwrix actively develops, delivering new
  features quarterly (26.03, 26.06, 26.09, and so on). This is the recommended line for all new and
  existing deployments.
- **2.22** — Legacy release line. Version 2.22.13 is the final release in this line. The 2.22.x
  line receives no further feature work, security updates, or dependency upgrades.

This documentation covers both release lines. Where a feature or procedure applies only to a
specific release, an inline note indicates this.

:::note
The 2.22.x release line has reached end of life. Netwrix recommends upgrading to the latest
release of NPS-D (26.06 or later) to receive security updates and new capabilities, including
native Microsoft Entra ID integration, container-based deployment on standard Ubuntu machines,
and continued active development. Customers requiring bug fixes or security updates must upgrade
to the latest supported release. Contact your Netwrix account representative for upgrade guidance.
:::

:::important MongoDB 4.0 deployments
NPS-D 26.09.0 is the bridge release for moving existing deployments from MongoDB 4.0 to MongoDB
8.0. New NPS-D 26.09.0 installations use MongoDB 8.0 by default. A future NPS-D release will
update the backend to Python 3.13 and supported library versions. That platform update will
require MongoDB 8.0 and will no longer support MongoDB 4.0.

If your deployment still uses MongoDB 4.0, upgrade to NPS-D 26.09.0 and complete
[Upgrade MongoDB 4.0 to 8.0](./installation/upgrademongodb4to8.md) before upgrading to that release
or any later version.
:::
