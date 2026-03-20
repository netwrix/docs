---
title: "Feature Flags"
description: "Runtime feature toggles and configuration"
sidebar_position: 40
---

# Feature Flags

Feature flags allow administrators to enable or disable specific application capabilities at runtime without restarting the service. Flags are defined in the `app_settings.yml` configuration file and can be overridden through the web interface.

## Viewing Feature Flags

Navigate to **Settings** > **Feature Flags** to see all available flags, their current state, and descriptions.

## Configuration File

Feature flags are declared in `app_settings.yml` on the application server:

```yaml
feature_flags:
  sensitive_data_scanning: true
  identity_correlation: true
  audit_log_export: true
  advanced_permission_paths: false
```

## Overriding via the Web Interface

To toggle a feature flag:

1. Navigate to **Settings** > **Feature Flags**.
2. Locate the flag and toggle its state.
3. Click **Save**.

Web interface overrides take precedence over values in `app_settings.yml`. To revert to the file-based value, click **Reset to Default** next to the flag.

## Common Feature Flags

| Flag | Description |
|---|---|
| `sensitive_data_scanning` | Enables or disables the sensitive data scan type |
| `identity_correlation` | Enables cross-provider identity matching in IAM |
| `audit_log_export` | Enables the audit log export functionality |
| `advanced_permission_paths` | Enables detailed permission path visualization |

:::warning
Disabling a feature flag immediately removes the associated functionality from the web interface for all users. Running operations that depend on a disabled flag may fail.
:::
