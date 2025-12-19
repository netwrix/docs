---
title: "Recommended Configuration for the PostgreSQL Solution"
description: "Recommended Configuration for the PostgreSQL Solution"
sidebar_position: 10
---

# Recommended Configuration for the PostgreSQL Solution

The jobs in the PostgreSQL Solution has been configured to inherit down from the **PostgreSQL** >
**Settings** node. However, it is best practice to assign the host list and the Connection Profile
at the data collection level, 0.Collection Job Group. Once these are assigned to the job group, it
can be run directly or scheduled.

**Dependencies**

- **.Active Directory Inventory** Job Group run successfully
- For AWS RDS and Aurora instances, right-click a job in the **PostgreSQL** > **0.Collection**
  folder and open the properties window. Select the **Performance** tab and ensure that the **Skip
  Hosts that do not respond to PING**checkbox is not selected.

**Targeted Host(s)**

- The 0.Collection Job Group must be set to run against a custom host list containing the
  PostgreSQL database instances / clusters.
- For AWS RDS instances, specify the endpoint when creating a host list. This value may change after
  saving the list if the instance is part of a cluster.

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. For the PostgreSQL Solution, the
credentials configured in the Connection Profile must be able to access the PostgreSQL Database. See
the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information on
permissions and creating a SQL custom connection profile.

The Connection Profile is set to **Use the Default Profile**, as configured at the global settings
level. However, since this may not be the Connection Profile with the necessary permissions for the
assigned hosts, click the radio button for the **Select one of the following user defined profiles**
option and select the appropriate Connection Profile drop-down menu.

**Schedule Frequency**

Daily

**Run Order**

The 0.Collection Job Group must be run first before running the other jobs and job groups.

:::info
Run the solution at the top level: PostgreSQL Job Group
:::


**Query Configuration**

This solution is designed to be run with the default query configurations. However, the
PostgreSQL_SensitiveDataScan Job query can be customized as needed. See the
[Configure the SensitiveDataScan Query](collection/pgsql_sensitivedatascan.md#configure-the-sensitivedatascan-query)
topic for additional information.

**Analysis Configuration**

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and should not be modified or deselected!

Disabling obsolete or run-desired jobs allows the solution to run more efficiently. To disable a job
or job group, right-click on the item and select **Disable Job**.

:::info
Do not delete any jobs. Instead, jobs should be disabled.

:::
