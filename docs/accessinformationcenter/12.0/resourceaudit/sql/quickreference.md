---
title: "SQL Server Reports Quick Reference Guide"
description: "SQL Server Reports Quick Reference Guide"
sidebar_position: 10
---

# SQL Server Reports Quick Reference Guide

The following SQL Server reports are available for selections within the Resources pane.

## SQL Server Node Report

The following report is available at the SQL Server node level:

| Report                                                         | Description                                                                                                                     |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/sensitivecontentsummary.md) | Provides a count of tables where criteria matches were found in the targeted environment. This report includes a Details table. |

## SQL Server > Instance Level Reports

The following reports are available at the instance level:

| Report                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/instance/activity.md)                                 | Displays activity across the entire instance logged during the selected date range.                                                                                                                                                                                                                                                                                        |
| [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/instance/sensitivecontentdetails.md) | Provides details of tables where criteria matches were found on the selected instance. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/instance/sensitivecontentsummary.md) | Provides a count of tables where criteria matches were found on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                               |

## SQL Server > Databases Node Reports

The following reports are available at the Databases node level:

| Report                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/databases/activity.md)                  | Displays activity across the databases logged during the selected date range.                                                                                                                                                                                                                                                                                                                       |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/databases/sensitivecontent.md) | Provides a list of tables and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

## SQL Server > Databases Node > Database & Table Levels Reports

The following reports are available at the database and table levels:

| Report                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/databasetable/activity.md)                  | Displays activity across the databases logged during the selected date range.                                                                                                                                                                                                                                                                                                                      |
| [Permissions Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/databasetable/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                    |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/databasetable/sensitivecontent.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

## SQL Server > Instance Permissions Node Report

The following report is available at the Permissions node level:

| Report                                                   | Description                                            |
| -------------------------------------------------------- | ------------------------------------------------------ |
| [Permissions Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/instancepermissions/permissions.md) | Shows the permissions for the trustee on the instance. |

## SQL Server > Roles Node Report

The following report is available at the Roles node level:

| Report                                     | Description                                         |
| ------------------------------------------ | --------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resourceaudit/sql/roles/permissions.md) | Shows the permissions for the instance’s SQL roles. |
