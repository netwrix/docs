---
title: "Recommended Configurations for the Dropbox Solution"
description: "Recommended Configurations for the Dropbox Solution"
sidebar_position: 10
---

# Recommended Configurations for the Dropbox Solution

The Dropbox Solution requires you to assign the host list and configure the Connection Profile
before job execution. After you assign these to the job group, you can run it directly or schedule
it.

**Targeted Hosts**

The Dropbox solution has been configured to inherit the host list assignment from the collection job
group level.

Assign the host list under the **Dropbox** > **0.Collection** > **Settings** > **Host List
Assignment** node. Select the **Local host** option.

**Connection Profile**

The DropboxAccess Data Collector requires a specific set of permissions to generate an access token
which is used to configure the Connection Profile for Dropbox. The access token is generated in the
Dropbox Access Auditor Data Collector Wizard on the Scan Options page (accessed through the
**1-Dropbox_Permissions Scan** job’s **Queries** node). You only need to generate the access token
once, before running the job group for the first time. Then it is used as the credential in the
Connection Profile. See the
[DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scanoptions.md) topic for
additional information.

The Dropbox solution has been configured to inherit the Connection Profile from the collection job
group level. The Connection Profile should be assigned under the **Dropbox** > **0.Collection** >
**Settings** > **Connection** node. It is set to **Use the Default Profile**, as configured at the
global settings level. However, since this may not be the Connection Profile with the necessary
permissions for Dropbox, select the **Select one of the following user defined profiles** option and
select the appropriate Connection Profile from the dropdown menu. See the
[Custom Dropbox Connection Profile & Host List](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/configurejob.md)
topic for additional information on configuring the Dropbox credential. The Dropbox bulk import jobs
require the same connection profile that the corresponding Dropbox scan jobs use.

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information
on creating Connection Profiles.

**Schedule Frequency**

Schedule the Dropbox solution to run as desired.

**History Retention**

History retention isn't supported for the Dropbox Solution. Turn it off.

**Multi Console Support**

Not supported.

**Run Order**

Run the 0.Collection jobs first and in order. Run the **1-Dropbox_Permissions Scan** job and
then the **2-Dropbox_Permissions Bulk Import** job. For the sensitive data jobs, run the
**1-Dropbox_SDD Scan** job and then the **2-Dropbox_SDD Bulk Import** job.

:::info
When running the sensitive data jobs, disable the permissions jobs, and vice
versa.
:::


After running the 0.Collection jobs, you can run the other Dropbox solution job groups in any order.
Best practice is to run at the solution level.

**Query Configuration**

This solution can be run with the default query configurations. The Scoping page of the Dropbox
Access Auditor Data Collector Wizard can be customized to target specific user accounts. See the
[DropboxAccess: Scoping](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scoping.md) topic for additional
information.

**Analysis Configuration**

This solution should be run with the default analysis configuration.

:::warning
Don't modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this solution.
:::


Though the analysis tasks shouldn't be deselected the time frame used to define staleness can be
modified:

- Stale content set to default of 365 days

    - Configured within the **4.Content** > **Dropbox_Content** job
    - **Determines stale data by owner** analysis task
    - See the [4.Content > Dropbox_Content Job](/docs/accessanalyzer/12.0/solutions/dropbox/dropbox_content.md) topic for additional information

**Additional Consideration**

The jobs contained in the solution use custom SQL scripts to render views on collected data. SQL
views are used to populate report element tables and graphs. Changing or modifying the group, job,
or table names causes the Access Information Center to display no data.

**Workflow**

The following is the recommended workflow:

**Step 1 –** Run the **1-Dropbox_Permissions Scan** job (for sensitive data, run the **1-Dropbox_SDD
Scan** job).

**Step 2 –** Run the **2-Dropbox_Permissions Bulk Import** job (for sensitive data, run the
**2-Dropbox_SDD Bulk Import** job).

**Step 3 –** Run the corresponding analysis and reporting sub-job groups you want.

:::tip
Remember, before running the Dropbox solution for the first time, generate an
access token to use in the Connection Profile. You only need to do this once. See the
[Configure the Dropbox Access Query](collection/1-dropbox_permissions_scan.md#configure-the-dropbox-access-query)
topic for additional information.
:::
