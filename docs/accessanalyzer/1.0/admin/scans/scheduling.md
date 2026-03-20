---
title: "Scheduling Scans"
description: "Configuring cron-based scan schedules"
sidebar_position: 30
---

# Scheduling Scans

Scans can be configured to run automatically on a recurring schedule using cron expressions. Scheduled scans are processed by the Sidekiq background job system.

## Setting a Schedule

To schedule a scan:

1. Navigate to **Scans** and open the scan detail view.
2. Click **Edit**.
3. In the **Schedule** section, enable **Scheduled Execution**.
4. Enter a cron expression or use the visual schedule builder to define the frequency.
5. Click **Save**.

## Cron Expression Format

Schedules use standard five-field cron syntax:

```
* * * * *
| | | | |
| | | | +-- Day of week (0-6, Sunday=0)
| | | +---- Month (1-12)
| | +------ Day of month (1-31)
| +-------- Hour (0-23)
+---------- Minute (0-59)
```

**Examples:**

| Expression | Description |
|---|---|
| `0 2 * * *` | Daily at 2:00 AM |
| `0 0 * * 0` | Weekly on Sunday at midnight |
| `0 6 1 * *` | Monthly on the 1st at 6:00 AM |
| `0 */4 * * *` | Every 4 hours |

## Disabling a Schedule

To stop a scan from running automatically, edit the scan and disable **Scheduled Execution**. The scan configuration is preserved and can be re-enabled later or run manually.

:::note
All schedule times are interpreted in the server's configured timezone.
:::
