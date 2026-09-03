---
title: "Configuration"
description: "Configuration"
sidebar_position: 30
---

# Configuration

There are several options for configuring Identity Manager.

## Application Configuration

### User Interface

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring Identity Manager as much as possible via the UI.

### XML files

For advanced users, if the UI isn't enough, you can also configure Identity Manager via XML files. Place these XML files in a `Conf` folder directly inside the working directory.

### Database

Identity Manager stores the application configuration in a database; never modify it manually, whether the configuration comes from the UI or XML files.

## Network Configuration

Identity Manager's server and agents are configured via JSON files, mainly `appsettings.json` and `appsettings.agent.json`.

## Next Steps

This is the end of the introduction guide, so you should now be able to dive into:

- The [User Guide](../user-guide) to configure Identity Manager from the beginning via the UI,
following the step-by-step procedures;
- The [Integration Guide](../integration-guide) to complete Identity Manager's
configuration in XML according to your needs;
- The [Installation Guide](../installation-guide) to install Identity Manager in a
production environment.

## Next Resources

For help with [Create a Working Directory](../installation-guide/production-ready/working-directory).

Refer to the [User Guide](../user-guide) topic to configure Identity Manager from the beginning via the UI.

Review how to [Export the Configuration](../integration-guide/toolkit/export-configuration) to XML files.

Understand how to [Deploy the Configuration](../integration-guide/toolkit/deploy-configuration).

Review the [XML Configuration Schema](../integration-guide/toolkit/xml-configuration).

Understand the [Network Configuration](../integration-guide/network-configuration).

