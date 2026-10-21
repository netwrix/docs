---
title: "Netwrix Privilege Secure for Discovery Documentation"
description: "Find installation, configuration, administration, and integration guidance for Netwrix Privilege Secure for Discovery."
sidebar_position: 1
---

Netwrix Privilege Secure for Discovery (formerly Remediant SecureONE) discovers privileged accounts across Windows and Linux systems and lets administrators manage them from a single interface. Users request just-in-time access to the systems they need, for as long as they need it, so standing privileges disappear and the attack surface shrinks. The product is for IT administrators and security analysts who want continuous visibility into privileged access and a way to reduce it.

Privilege Secure for Discovery runs as a set of containers on Ubuntu Server 24.04 LTS, on a single node or a three-node cluster. Container-based deployment is the recommended installation method. New installations use MongoDB 8.0.

:::important MongoDB 4.0 deployments
A future release will update the backend to Python 3.13 and supported library versions. That platform update will require MongoDB 8.0 and will no longer support MongoDB 4.0.

If your deployment still uses MongoDB 4.0, complete [Upgrade MongoDB 4.0 to 8.0](./migration/mongodb-4-to-8/overview.md) before you upgrade to that release or any later version.
:::

## Where to go next

- [What's new](./release-notes/whats-new.md): Find new features and fixes for each release.
- [Getting started](./getting-started/overview.md): Learn the key concepts and how a rollout proceeds.
- [Requirements](./requirements/overview.md): Check the host and network prerequisites before you install.
- [Install and update](./install/overview.md): Deploy the containers on a single node or a three-node cluster.
- [Migration](./migration/mongodb-4-to-8/overview.md): Move an existing deployment from MongoDB 4.0 to MongoDB 8.0.
- [Configuration](./configuration/domains-and-ad/add-a-domain.md): Add domains and onboard systems to scan and protect modes.
- [Administration](./admin/dashboard.md): Review the dashboard and manage systems.
- [Integrations](./integrations/microsoft-entra-id/overview.md): Connect the product to Microsoft Entra ID and your security tools.
- [Troubleshooting](./troubleshooting/common-ui-errors.md): Diagnose and fix common problems.
- [Appendix](./appendix/secureone-script-reference.md): Look up the deployment script commands and the legacy ISO appliance procedures.
- [Knowledge base](./kb/index.md): Browse troubleshooting guides and configuration articles.
