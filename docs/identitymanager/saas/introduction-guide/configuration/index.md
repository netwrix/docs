---
title: "Configuration"
description: "Configuration"
sidebar_position: 30
---

# Configuration

There are several options for configuring Identity Manager.

## Application Configuration

### User Interface

Netwrix Identity Manager (formerly Usercube) strongly recommends that Identity Manager be
configured, as much as possible, via the UI.

### XML files

For advanced users, if the UI is not enough, Identity Manager can also be configured via XML files.
These XML files should be placed in a `Conf` folder directly inside the working directory.

### Database

Identity Manager's application configuration, whether it is made from the UI or the XML files, is
stored in a database which should never be modified manually.

## Network Configuration

Identity Manager's server and agent(s) are configured via JSON files, mainly `appsettings.json` and
`appsettings.agent.json`.

## Next Steps

This is the end of the introduction guide, so you should now be able to dive into:

- The [User Guide](/docs/identitymanager/saas/user-guide/index.md) to configure Identity Manager from scratch via the UI,
  following the step-by-step procedures;
- The [Integration Guide](/docs/identitymanager/saas/integration-guide/index.md) to complete Identity Manager's
  configuration in XML according to your needs;
- The [Installation Guide](/docs/identitymanager/saas/installation-guide/index.md) to install Identity Manager in a
  production environment.

## Learn More

Learn more on how to [Create a Working Directory](/docs/identitymanager/saas/installation-guide/production-ready/working-directory/index.md).

See the [User Guide](/docs/identitymanager/saas/user-guide/index.md) topic to learn how to configure Identity Manager
from scratch via the UI.

See how to [Export the Configuration](/docs/identitymanager/saas/integration-guide/toolkit/export-configuration/index.md)
to XML files.

See how to [Deploy the Configuration](/docs/identitymanager/saas/integration-guide/toolkit/deploy-configuration/index.md).

Learn more about the [XML Configuration Schema](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/index.md).

Learn more about the [Network Configuration](/docs/identitymanager/saas/integration-guide/network-configuration/index.md).
