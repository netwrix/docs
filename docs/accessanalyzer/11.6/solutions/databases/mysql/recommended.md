---
title: "Recommended Configurations for the MySQL Solution"
description: "Recommended Configurations for the MySQL Solution"
sidebar_position: 10
---

# Recommended Configurations for the MySQL Solution

The MySQL Solution has been configured to inherit down from the MySQL > Settings node. However, it
is best practice to assign the host list and the Connection Profile at the data collection level,
0.Collection Job Group. Once these are assigned to the job group, it can be run directly or
scheduled.

**Dependencies**

- For Sensitive Data Discovery Auditing – Sensitive Data Discovery Add-On installed on the
  Enterprise Auditor Console server
- For AWS RDS and Aurora instances, right-click a job in the **MySQL** > **0.Collection** folder and
  open the properties window. Select the **Performance** tab and ensure that the **Skip Hosts that
  do not respond to PING**checkbox is not selected.

**Targeted Host(s)**

- The 0.Collection Job Group must be set to run against a custom host list containing the
  MySQL database instances / clusters.
- For AWS RDS instances, specify the endpoint when creating a host list. This value may change after
  saving the list if the instance is part of a cluster.

**Connection Profile**

The SQL Data Collector requires a specific set of permissions. For the MySQL Solution, the
credentials configured in the Connection Profile must be able to access the MySQL Database. See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information on permissions and creating a SQL custom connection profile.

The Connection Profile is set to Use the Default Profile, as configured at the global settings
level. However, since this may not be the Connection Profile with the necessary permissions for the
assigned hosts, click the radio button for the Select one of the following user defined profiles
option and select the appropriate Connection Profile drop-down menu.

**Schedule Frequency**

Daily

**Run Order**

The 0.Collection Job Group must be run first before running the other jobs and job groups.

:::info
Run the solution at the top level: MySQL Job Group
:::


**Query Configuration**

This solution is designed to be run with the default query configurations. However, the
MySQL_SensitiveDataScan Job query can be customized as needed. See the
[Configure the SensitiveDataScan Query](/docs/accessanalyzer/11.6/solutions/databases/mysql/collection/mysql_sensitivedatascan.md#configure-the-sensitivedatascan-query)
topic for additional information.

**Analysis Configuration**

This solution should be run with the default analysis configurations. These analysis tasks are
preconfigured and should not be modified or deselected.

Disabling obsolete or run-desired jobs allows the solution to run more efficiently. To disable a job
or job group, right-click on the item and select Disable Job.

:::info
Do not delete any jobs. Instead, jobs should be disabled.

:::
