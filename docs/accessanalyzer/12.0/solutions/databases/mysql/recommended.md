---
title: "Recommended Configurations for the MySQL Solution"
description: "Recommended Configurations for the MySQL Solution"
sidebar_position: 10
---

# Recommended Configurations for the MySQL Solution

The MySQL Solution has been configured to inherit down from the MySQL > Settings node. However, it
is best practice to assign the host list and the Connection Profile at the data collection level,
0.Collection Job Group. After you assign these to the job group, you can run it directly or
schedule it.

**Dependencies**

- For AWS RDS and Aurora instances, right-click a job in the **MySQL** > **0.Collection** folder and
  open the properties window. Select the **Performance** tab and ensure that the **Skip Hosts that
  don't respond to PING**checkbox isn't selected.

**Targeted Hosts**

- The 0.Collection Job Group must be set to run against a custom host list containing the
  MySQL database instances / clusters.
- For AWS RDS instances, specify the endpoint when creating a host list. This value may change after
  saving the list if the instance is part of a cluster.

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. For the MySQL Solution, the
credentials configured in the Connection Profile must be able to access the MySQL Database. See the
[Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information on
permissions and creating a SQL custom connection profile.

The Connection Profile is set to Use the Default Profile, as configured at the global settings
level. However, if this isn't the Connection Profile with the necessary permissions for the
assigned hosts, select the **Select one of the following user defined profiles** option and choose
the appropriate profile from the Connection Profile dropdown menu.

**Schedule Frequency**

Daily

**Run Order**

Run the 0.Collection Job Group before running the other jobs and job groups.

:::info
Run the solution at the top level: MySQL Job Group
:::


**Query Configuration**

This solution is designed to be run with the default query configurations. However, the
MySQL_SensitiveDataScan Job query can be customized as needed. See the
[Configure the SensitiveDataScan Query](collection/mysql_sensitivedatascan.md#configure-the-sensitivedatascan-query)
topic for additional information.

**Analysis Configuration**

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and shouldn't be modified or deselected.

Disabling obsolete or run-desired jobs allows the solution to run more efficiently. To disable a job
or job group, right-click the item and select Disable Job.

:::info
Don't delete any jobs. Instead, disable them.

:::
