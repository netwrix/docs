---
title: "Recommended Configuration for the .NIS Inventory Solution"
description: "Recommended Configuration for the .NIS Inventory Solution"
sidebar_position: 10
---

# Recommended Configuration for the .NIS Inventory Solution

The .NIS Inventory Solution requires some configuration for the target environment. It can be run
directly or scheduled.

**Dependencies**

This job group does not have dependencies.

**Targeted Hosts**

The host list assignment should be assigned under the **.NIS Inventory** > **NIS Scan** > **Hosts**
node. Select the custom host list containing the NIS servers or manually add the host in the
**Individual hosts** section. See the
[Unix Connection Profile & Host List](/docs/accessanalyzer/11.6/admin/datacollector/nis/configurejob.md)
topic for additional information.

**Connection Profile**

The Connection Profile should be assigned in the **.NIS Inventory** > **NIS Scan** > **Job
Properties** window on the **Connection** tab. It is set to **Use the Default Profile**, as
configured at the global settings level. However, if this is not the Connection Profile with the
necessary permissions for targeting the NIS servers, select the **Select one of the following user
defined profiles** option and select the appropriate Connection Profile. See the
[Unix Connection Profile & Host List](/docs/accessanalyzer/11.6/admin/datacollector/nis/configurejob.md)
topic for additional information.

**Schedule Frequency**

It is recommended to schedule the .NIS Inventory job group to run once a day. If there are frequent
changes within the target environment, then it can be executed more often. It is best to rerun it
anytime changes might have occurred.

**Run at the Solution Level**

The job in the .NIS Inventory job group can be run at either the job or job group level.

**Query Configuration**

The solution requires the NIS domain to be configured in the **Inventory Scan** query. Navigate to
the **NIS Settings** page of the NIS Data Collector Wizard. Optionally, modifications can be made
for SID mappings within the **NIS Scan** job. See the
[NIS Scan Job](/docs/accessanalyzer/11.6/solutions/nisinventory/nis_scan.md) topic
for additional information.

**Analysis Configuration**

The solution is best run with the default analysis configuration. However, the **Drop NIS Tables**
analysis task is deselected by default, as it is for troubleshooting purposes only.

**History Retention**

History retention is not supported and should be turned off.

**Multi-console Support**

Multi-console is not supported.

**Workflow**

**Step 1 –** Configure and assign the host list and Connection Profile.

**Step 2 –** Configure the Inventory Scan query.

**Step 3 –** Schedule the .NIS Inventory job group to run as desired
