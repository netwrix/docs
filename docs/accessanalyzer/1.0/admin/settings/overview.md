---
title: "Application Settings"
description: "Global application configuration options"
sidebar_position: 10
---

# Application Settings

The Settings section provides administrators with controls over global application behavior. Configuration changes made here affect all users and system operations.

## Settings Categories

| Category | Description |
|---|---|
| [Concurrent Scan Limits](/docs/accessanalyzer/1_0/admin/settings/scanlimits) | Control the maximum number of scans that can execute simultaneously |
| [Session and Token TTL](/docs/accessanalyzer/1_0/admin/settings/sessionttl) | Configure session duration and token refresh intervals |
| [Feature Flags](/docs/accessanalyzer/1_0/admin/settings/featureflags) | Enable or disable application features at runtime |

## Accessing Settings

Navigate to **Settings** in the sidebar. Only users with the **Administrator** role can view and modify settings.

## Saving Changes

After modifying a setting, click **Save** to apply the change. Most settings take effect immediately. Settings that require a service restart display a notification indicating when the change will be applied.

:::warning
Changing application settings can affect system behavior for all users. Review changes carefully before saving, and coordinate with other administrators when modifying production configurations.
:::

## Configuration File

Some advanced settings are managed through the `app_settings.yml` configuration file on the server. Settings modified through the web interface override values in the configuration file. See [Feature Flags](/docs/accessanalyzer/1_0/admin/settings/featureflags) for details on file-based configuration.
