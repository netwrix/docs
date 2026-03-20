---
title: "Log Export"
description: "Exporting audit log data"
sidebar_position: 20
---

# Log Export

Administrators can export audit log data for external analysis, compliance reporting, or long-term archival. The export feature generates a downloadable file containing the filtered audit log entries.

## Exporting Logs

To export audit logs:

1. Navigate to **Audit Logs** in the sidebar.
2. Apply any desired filters (date range, user, action type, resource type) to narrow the export scope.
3. Click **Export**.
4. Select the export format:

| Format | Description |
|---|---|
| **CSV** | Comma-separated values, compatible with spreadsheet applications and data analysis tools |
| **JSON** | Structured JSON format, suitable for programmatic processing and SIEM ingestion |

5. Click **Download** to save the file.

## Export Scope

The export includes all audit log entries matching the current filter criteria. If no filters are applied, the export contains all available audit log records.

:::note
Large exports may take several minutes to generate. The download begins automatically when the file is ready.
:::

## Use Cases

- **Compliance Audits** -- Provide auditors with a complete trail of administrative actions over a specified period.
- **SIEM Integration** -- Export logs in JSON format for ingestion into security information and event management platforms.
- **Archival** -- Periodically export and archive audit logs to external storage for long-term retention.

:::warning
Exported audit log files may contain sensitive information about users and system configuration. Handle exported files in accordance with your organization's data handling policies.
:::
