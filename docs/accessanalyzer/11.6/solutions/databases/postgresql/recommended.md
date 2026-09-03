---
title: "Recommended Configuration for the PostgreSQL Solution"
description: "Recommended Configuration for the PostgreSQL Solution"
sidebar_position: 10
---

# Recommended Configuration for the PostgreSQL Solution

The jobs in the PostgreSQL Solution has been configured to inherit down from the **PostgreSQL** >
**Settings** node. However, it is best practice to assign the host list and the Connection Profile
at the data collection level, 0.Collection Job Group. After you assign the host list and Connection
Profile to the job group, you can run it directly or schedule it.

**Dependencies**

- **.Active Directory Inventory** Job Group run successfully
- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server
- For AWS RDS and Aurora instances, right-click a job in the **PostgreSQL** > **0.Collection**
  folder and open the properties window. Select the **Performance** tab and ensure that the **Skip
  Hosts that don't respond to PING**checkbox isn't selected.

**Targeted Hosts**

- The 0.Collection Job Group must be set to run against a custom host list containing the
  PostgreSQL database instances / clusters.
- For AWS RDS instances, specify the endpoint when creating a host list. This value may change after
  saving the list if the instance is part of a cluster.

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. For the PostgreSQL Solution, the
credentials configured in the Connection Profile must be able to access the PostgreSQL Database. See
the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information on permissions and creating a SQL custom connection profile.

The Connection Profile defaults to the **Use the Default Profile** setting, configured at the global
settings level. If that profile doesn't have the permissions the assigned hosts need, select the
radio button for the **Select one of the following user defined profiles** option, then choose the
correct profile from the Connection Profile dropdown menu.

**Schedule Frequency**

Daily

**Run Order**

Run the 0.Collection Job Group first, before running the other jobs and job groups.

:::info
Run the solution at the top level: PostgreSQL Job Group
:::


**Query Configuration**

This solution is designed to be run with the default query configurations. However, the
PostgreSQL_SensitiveDataScan Job query can be customized as needed. See the
[Configure the SensitiveDataScan Query](/docs/accessanalyzer/11.6/solutions/databases/postgresql/collection/pgsql_sensitivedatascan.md#configure-the-sensitivedatascan-query)
topic for additional information.

**Analysis Configuration**

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and shouldn't be modified or deselected.

Disabling obsolete or run-desired jobs allows the solution to run more efficiently. To disable a job
or job group, right-click the item and select **Disable Job**.

:::info
Don't delete any jobs. Disable them instead.

:::
