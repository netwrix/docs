---
title: "Application Settings"
description: "Managing application settings in the Configuration node"
sidebar_position: 80
---

# Application Settings

The Application Settings page exposes configurable options that control scan behavior, file scanning limits, feature availability, Activity Monitor integration, and application branding. Navigate to **Configuration** > **Application Settings** to view and modify these settings.

:::note
This page is available to users with the **Administrator** role only.
:::

## Setting categories

| Category | What it controls |
| --- | --- |
| **Feature Flags** | Enable or disable product features and integrations |
| **Scanning** | Execution history retention for scans and identity syncs |
| **File Scanning** | File size limits and excluded extensions for SMB and SharePoint scans |
| **Activity Monitor** | TCP listener behavior and enrollment token for NAM agent connections |
| **Branding** | Company name and support email displayed in the application |

## Feature Flags

Feature flags enable or disable specific product capabilities. Changes take effect immediately — no restart required.

| Flag | Default | Description |
| --- | --- | --- |
| **MIP Labeling** | Enabled | Enables Microsoft Information Protection (MIP) sensitivity label management for SMB file shares and SharePoint Online. When disabled, the label handling options on the Sensitive Data page are hidden and no labels are applied to or read from files during scans. |

:::note
Disabling MIP Labeling does not remove existing labels from files. It stops Access Analyzer from applying or updating labels in future scans.
:::

## File Scanning

These settings control which files are included in content classification during sensitive data scans. Adjusting them can reduce scan duration in environments with large binary or media files.

:::note
File metadata — name, size, permissions, and owner — is always collected regardless of file size or extension settings. These limits apply only to content classification during sensitive data scans.
:::

### SMB / CIFS

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| **Maximum file size** | 10 MB | 1–100 MB | Files larger than this limit are skipped during content classification. |
| **Excluded extensions** | `.exe, .msi, .bat, .png, .jpg, .jpeg, ...` | — | Comma-separated list of file extensions to skip. Add extensions to reduce scan time on known binary or media content. |

### SharePoint Online

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| **Maximum file size** | 1 MB | 1–50 MB | Files larger than this limit are skipped during content classification. |
| **Excluded extensions** | `.exe, .msi, .bat, .png, .jpg, .jpeg, ...` | — | Comma-separated list of file extensions to skip. |

## Scanning — Execution History Retention

Access Analyzer automatically purges old execution records on a nightly schedule based on these thresholds.

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| **Scan execution retention** | 90 days | 7–365 days | How long scan execution records are retained before automatic deletion. |
| **Sync execution retention** | 90 days | 7–365 days | How long identity sync execution records are retained before automatic deletion. |

:::note
Reducing retention frees database storage. Increasing it extends the history available in **Configuration** > **Source Groups** > **Scan Executions**.
:::

## Activity Monitor

The Activity Monitor category contains settings for the built-in TCP listener and the enrollment token used when connecting Netwrix Activity Monitor (NAM) agents to Access Analyzer.

### Enrollment Token

The enrollment token is a short-lived credential that NAM agents present during their first connection to Access Analyzer. You generate it here and paste it into the NAM agent output configuration.

1. Scroll to the **Activity Monitor** section and locate **Enrollment Token**.
2. Click **Generate Token**.
3. Copy the token using the clipboard icon.
4. Paste the token into your NAM agent output configuration before it expires.

:::note
Tokens expire after **1 hour**. Generating a new token immediately invalidates any previously issued token. A single token can enroll multiple agents simultaneously — generate it immediately before starting your enrollment session.
:::

For the full step-by-step setup walkthrough, see [Activity Monitor Integration](activity-monitor-integration.md).

### Listener settings

The remaining settings in the Activity Monitor category control TCP listener behavior — connection limits, batch sizes, buffer sizes, and timeouts. The defaults are appropriate for most deployments. For a description of each setting and guidance on tuning, see the [Activity Monitor Integration — Application Settings Reference](activity-monitor-integration.md#application-settings-reference) section.

## Branding

| Setting | Default | Description |
| --- | --- | --- |
| **Company name** | Netwrix | Displayed in the application interface. |
| **Support email** | support@netwrix.com | Email address shown to users when they need assistance. Update this to your internal helpdesk address after initial setup. |

## Resetting and cache behavior

**Resetting to default:** Each setting has a reset action that restores the factory default value. Resetting one setting does not affect any other settings.

**Cache:** Application Settings are cached for up to 5 minutes. Changes take effect immediately on the instance that applied them. Other running instances pick up the change within 5 minutes. To force an immediate refresh across all instances, click **Refresh Cache** at the top of the page.
