---
title: "1-Dropbox_Permissions Scan Job"
description: "1-Dropbox_Permissions Scan Job"
sidebar_position: 10
---

# 1-Dropbox_Permissions Scan Job

The 1-Dropbox_Permissions Scan job collects data from the Dropbox environment on access rights,
sharing policies, configurations, and content.

:::warning
This job should not be run if running sensitive data scans against the Dropbox Business
environment.
:::


## Queries for the 1-Dropbox_Permissions Scan Job

The 1-Dropbox_Permissions Scan job has been preconfigured to run with the default settings with the
category of Dropbox Access.

![Queries for the 1-Dropbox_Permissions Scan Job](/images/accessanalyzer/12.0/solutions/dropbox/collection/permissionsscanquery.webp)

The query for the 1-Dropbox_Permissions Scan job is:

- Dropbox Access – Collects the data on access rights, sharing policies, configurations, and content

### Configure the Dropbox Access Query

Follow the steps to either generate the access token needed for the Connection Profile (only done
prior to first execution) or to set any desired customizations.

**Step 1 –** Navigate to the **Jobs** > **Dropbox** > **0.Collection** > **1-Dropbox_Permissions
Scan** > **Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties** to open the Query Properties
window.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Dropbox Access Auditor
Data Collector Wizard opens.

![Dropbox Access Auditor Data Collector Wizard Scan Options page](/images/accessanalyzer/12.0/solutions/dropbox/collection/permissionsscanoptionspage.webp)

**Step 4 –** T Use the Scan Options page ito generate the access token prior to the first execution
of the job group.

- Remember to copy the access token, either from the textbox or using the **Copy to Clipboard**
  button, and use it in the Connection Profile assigned to the Dropbox Solution. Once the access
  token has been generated and copied, if no customizations are to be made, click **Cancel** to
  close the Dropbox Access Auditor Data Collector wizard.
- See the [DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scanoptions.md)
  topic for full instructions on generating the access token

**Step 5 –** If query customizations are desired, click **Next** to continue.

![Dropbox Access Auditor Data Collector Wizard Scoping page](/images/accessanalyzer/12.0/solutions/dropbox/collection/permissionsscopingpage.webp)

**Step 6 –** On the Scoping page, select whether to scan **All Users** or **Limited Users**. If
**Limited Users** is selected, browse to a CSV file with one email address per row for the desired
users. In the File Permissions section, select the **Collect File Level Permissions** checkbox to
collect permissions at the file level. When finished with this page, click **Next**.

**Step 7 –** On the Summary page, click **Finish** to save any setting modifications or click
**Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-Dropbox_Permissions Scan job has now been customized.
