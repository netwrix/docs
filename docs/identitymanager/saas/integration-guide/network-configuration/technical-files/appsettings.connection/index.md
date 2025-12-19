---
title: "appsettings.connection"
description: "appsettings.connection"
sidebar_position: 10
---

# appsettings.connection

## Define configuration through UI

On some configuration screens, such as the connector screen, it is possible to define some of the
[Agent Configuration](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/index.md). This configuration is stored in the
**appsettings.connection.json** file, located inside the
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings/index.md) work folder.

The **appsettings.connection.json** file has the exact same structure as the other
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md) file.

This configuration file has the highest priority among others agent's configuration sources . See
the [Agent Configuration](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/index.md) topic for additional information.

You should not modify this file manually.
