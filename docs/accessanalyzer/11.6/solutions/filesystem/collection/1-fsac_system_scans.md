---
title: "1-FSAC System Scans Job"
description: "1-FSAC System Scans Job"
sidebar_position: 50
---

# 1-FSAC System Scans Job

The 1-FSAC System Scans job is designed to collect activity events from the targeted file servers.

## Query for the 1-FSAC System Scans Job

The Activity Scan query uses the FSAA Data Collector and has been preconfigured to use the File
system activity Scan category.

![Query for the 1-FSAC System Scans Job](/images/accessanalyzer/11.6/solutions/filesystem/collection/fsacsystemscansquery.webp)

- Activity Scan – Scans for File System Activity

The following default configurations are commonly customized:

- Scan Server Selection page:

    - Set to **Local Server**, or local mode scans

- Activity Settings page:

    - Set scan filter for detailed activity **60** days
    - Set filter for statistics of activity **120** days

See the
[Recommended Configuration for the File System Solution](/docs/accessanalyzer/11.6/solutions/filesystem/recommended.md)
topic for a complete list of customizable settings. See the
[Configure the Activity Scan Query](#configure-the-activity-scan-query) topic for instructions.

### Configure the Activity Scan Query

The 1-FSAC System Scans job has been preconfigured to run with the default settings with the
category of File system activity Scan. Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **FileSystem** > **0.Collection** > **1-FSAC System Scans** >
**Configure** node and select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The File System Access Auditor
Data Collector Wizard opens.

:::warning
Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.
:::


![Applet Settings](/images/accessanalyzer/11.6/solutions/filesystem/collection/fsacappletsettings.webp)

**Step 4 –** The Applet Settings page applies to the applet and proxy mode scans which are selected
on the Scan Server Level Page. If employing proxy servers, see the
[FSAA: Applet Settings](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/appletsettings.md)
topic for configuration instructions.

![Scan Server Selection](/images/accessanalyzer/11.6/solutions/filesystem/collection/fsacscanserverselection.webp)

**Step 5 –** The Scan Server Selection page applies to the applet and proxy mode scans. Remember,
each mode has different provisioning requirements. See the
[FSAA: Scan Server Selection](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/scanserverselection.md) topic
for additional information.

![Activity Settings](/images/accessanalyzer/11.6/solutions/filesystem/collection/fsacactivitysettings.webp)

**Step 6 –** On the Activity Settings page:

- Modify the number of days detailed activity is kept
- Modify the number of days activity statistics are kept
- Modify log parsing limits

See the
[FSAA: Activity Settings](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/activitysettings.md) topic
for additional information.

**Step 7 –** Click **Finish** to save any setting modifications or click **Cancel** if no changes
were made. Then click **OK** to close the Query Properties window.

If changes were made, the 1-FSAC System Scans job is now customized.
