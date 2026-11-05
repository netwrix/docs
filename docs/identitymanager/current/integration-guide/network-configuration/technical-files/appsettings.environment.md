---
title: "appsettings.environment"
description: "appsettings.environment"
sidebar_position: 20
---

# appsettings.environment

## Managing overrides

Some settings — Mail Settings, the session inactivity timeout, and Deployment Access users — can be overridden per deployment through Environment Settings, without editing the deployed configuration files. These overrides are stored in the **appsettings.environment.json** file, located inside the server's Work folder (same folder as **appsettings.connection.json**).

Saving from Environment Settings always writes the whole file: what the screen displays is exactly what the file contains.

## Loading and reload behavior

The file is read when the tenant configuration is (re)built: at server startup, and whenever a configuration reload is triggered with the **Reload** button. There is no file watcher on this file — saving Environment Settings has no effect on the running server until the next reload.

- If the file is deleted while the server is running, the loaded settings keep applying until the next configuration reload; a subsequent reload restores the base (non-overridden) values.
- Restarting the server always re-reads the file: if it is present, its overrides apply; if it was deleted, the server starts with the base configuration only.

You shouldn't modify this file manually.
