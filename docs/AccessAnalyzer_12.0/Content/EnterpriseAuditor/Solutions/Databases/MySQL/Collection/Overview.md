---
sidebar_position: 5471
title: 0.Collection Job Group
---

# 0.Collection Job Group

The MySQL Solution Collection group is designed to collect high level summary information from targeted MySQL Servers. This information is used by other jobs in the MySQL Solution Set for further analysis and producing respective reports.

![0.Collection Job Group for MySQL](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/MySQL/0.CollectionJobGroup.png "0.Collection Job Group for MySQL")

The jobs in the 0.Collection Job Group are:

* [MySQL\_Configuration Job](MySQL_Configuration#MySQL_Configuration_Job "Navigates to the MySQL_Configuration Job section") – Designed to collect MySQL server instance and database configuration settings for use in the following analysis jobs and respective reports
* [MySQL\_SensitiveDataScan Job](MySQL_SensitiveDataScan#MySQL_SensitiveDataScan_Job "MySQL_SensitiveDataScan Job") – Designed to discover sensitive data in MySQL databases based on pre-defined or user-defined search criteria
* [MySQL\_TablePrivileges Job](MySQL_TablePrivileges "MySQL_TablePrivileges Job") – Designed to collect MySQL table privileges from all the targeted servers.

Workflow

1. Set a Connection Profile for the 0.Collection Job Group with the permissions listed in the Recommended Configurations section. See the [Connection](../../../../Admin/Settings/Connection/Overview#_Create_a_Connection "Connection") topic for additional information.
2. For Sensitive Data Discovery Auditing – Ensure the Sensitive Data Discovery Add-On is installed on the StealthAUDIT Console server.
3. Schedule the solution to run daily or as desired.
4. Review the reports generated by the jobs.