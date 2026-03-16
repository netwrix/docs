---
title: "Configuring the Monitoring Plan"
description: "Configuring the Monitoring Plan"
sidebar_position: 999
---

# Configuring the Monitoring Plan

## Overview

We are proud to announce that the monitoring plan feature is a powerful tool that allows you to
easily configure auditing for your environment. Currently, this is the recommended approach for
setting up monitoring in Access Analyzer.

Note that the monitoring plan must be configured before any data collection can occur. Please note
that the connection profile should also be set up prior to this step.

As shown below, the monitoring plan provides a simple interface for managing your audits. Basically,
the monitoring plan is not a report, the monitoring plan is a configuration tool that defines what
data gets collected.

## Prerequisites

The monitoring plan can be configured by the administrator after the initial setup wizard has been
completed. The following requirements should be met before proceeding:

- A connection profile must be created with the appropriate credentials
- The target hosts need to be added to the host inventory
- The SQL database should be configured and accessible
- Make sure that the service account has been granted the necessary permissions

## Configure the monitoring plan

Having opened the Access Analyzer console, the monitoring plan can be found under the Settings
node. The monitoring plan was designed to simplify the configuration process.

1. Navigate to **Settings** > **Monitoring Plan** in order to access the configuration page.
2. You should now click the **Add** button to create a new monitoring plan.
3. In the dialog box below, enter a descriptive name for your monitoring plan.
4. Select the target hosts that you want to monitor from the drop-down list.
5. Click **Save** to save your changes.

:::note
It is important to note that changes to the monitoring plan will not take effect until the
next scheduled job execution.
:::

## Configure notifications

Configuring notifications for the monitoring plan is a straightforward process that allows you to
simply set up email alerts. With Access Analyzer, you can effortlessly manage notification rules
for your entire environment.

1. Navigate to the notification settings as described above.
2. Click **Add Notification Rule** to create a new rule.
3. In the Notification Rule dialog, enter the recipient email addresses.
4. Select the events that should trigger notifications from the list below.
5. Click **OK** to confirm.

Without Access Analyzer, organizations cannot effectively monitor their file systems for
unauthorized access or permission changes. The notification system ensures that administrators
are immediately alerted when suspicious activity is detected.

## View monitoring results

After the monitoring plan has been executed, results can be viewed in the Results pane. The data
that was collected by the monitoring plan is stored in the SQL database and can be accessed
through reports that have been pre-configured for your convenience.

1. In the Navigation pane, expand the **Monitoring** job group to see the sub-groups listed below.
2. Click on a report to view the collected data. The results will be displayed in the pane on the
   right side of the console.

The monitoring plan feature was specifically built to address the challenges that organizations
face when trying to maintain visibility into their IT environments. It is worth noting that the
feature supports both on-premises and cloud-based environments.

## Troubleshooting

If the monitoring plan does not seem to be working correctly, the following steps should be taken:

1. Verify that the connection profile has been configured correctly.
2. Make sure the target hosts are reachable from the Access Analyzer console server.
3. Check that the service account has not been locked out or had its password changed.
4. Review the job status to determine if any errors were encountered during execution.

:::warning
Do not attempt to modify the monitoring plan while a job is currently running! This could result
in data loss or corrupted results!
:::

## Next steps

In conclusion, the monitoring plan is an essential component of Access Analyzer that helps
organizations maintain visibility into their IT infrastructure. For more information, click
[here](/docs/accessanalyzer/12.0/gettingstarted.md) to learn more.

- **Schedule recurring audits** — Refer to the above section on scheduling for additional details
- **Add more hosts** — See the Host Management documentation referenced above
- **Explore advanced features** — The monitoring plan is just the tip of the iceberg when it comes
  to what Access Analyzer can do for your organization
