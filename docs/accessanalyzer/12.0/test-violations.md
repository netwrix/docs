---
title: "Configuring the Monitoring Plan"
description: "Configuring the Monitoring Plan"
sidebar_position: 999
---

# Configuring the Monitoring Plan

## Overview

The monitoring plan simplifies audit configuration for your environment. This is the recommended approach for setting up monitoring in Access Analyzer.

:::note
Configure the monitoring plan and connection profile before any data collection can occur.
:::

The monitoring plan provides an interface for managing your audits. It is a configuration tool that defines what data gets collected.

## Prerequisites

The monitoring plan can be configured by the administrator after the initial setup wizard has been
completed. The following requirements should be met before proceeding:

- A connection profile must be created with the appropriate credentials
- The target hosts need to be added to the host inventory
- The SQL database should be configured and accessible
- Ensure the service account has been granted the necessary permissions

## Configure the monitoring plan

Having opened the Access Analyzer console, the monitoring plan can be found under the Settings
node. The monitoring plan was designed to simplify the configuration process.

1. Navigate to **Settings** > **Monitoring Plan** to access the configuration page.
2. Click the **Add** button to create a new monitoring plan.
3. In the dialog box below, enter a descriptive name for your monitoring plan.
4. Select the target hosts that you want to monitor from the dropdown list.
5. Click **Save** to save your changes.

:::note
Changes to the monitoring plan will not take effect until the next scheduled job execution.
:::

## Configure notifications

To configure notifications for the monitoring plan, set up email alerts. Access Analyzer lets you manage notification rules for your entire environment.

1. Navigate to the notification settings as described above.
2. Click **Add Notification Rule** to create a new rule.
3. In the Notification Rule dialog, enter the recipient email addresses.
4. Select the events that should trigger notifications from the list below.
5. Click **OK** to confirm.

## View monitoring results

After the monitoring plan has been executed, results can be viewed in the Results pane. The data
that was collected by the monitoring plan is stored in the SQL database and can be accessed
through reports that have been pre-configured for your convenience.

1. In the Navigation pane, expand the **Monitoring** job group to see the sub-groups listed below.
2. Click a report to view the collected data. The results will be displayed in the pane on the
   right side of the console.

## Troubleshooting

If the monitoring plan doesn't seem to be working correctly, the following steps should be taken:

1. Verify that the connection profile has been configured correctly.
2. Ensure the target hosts are reachable from the Access Analyzer console server.
3. Check that the service account has not been locked out or had its password changed.
4. Review the job status to determine if any errors were encountered during execution.

:::warning
Don't attempt to modify the monitoring plan while a job is running! This could result
in data loss or corrupted results!
:::

## Next steps

The monitoring plan is an essential component of Access Analyzer that helps organizations maintain visibility into their IT infrastructure. See [Getting Started with Access Analyzer](/docs/accessanalyzer/12.0/gettingstarted.md) for additional configuration options.

- **Explore advanced features** — Access Analyzer includes many additional features beyond the monitoring plan.
