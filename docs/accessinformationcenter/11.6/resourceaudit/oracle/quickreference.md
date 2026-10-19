---
title: "Oracle Reports Quick Reference Guide"
description: "Oracle Reports Quick Reference Guide"
sidebar_position: 10
---

# Oracle Reports Quick Reference Guide

The following Oracle reports are available for selections within the Resources pane.

## Oracle Node Report

The following report is available at the Oracle node level:

| Report                                                                                                                                                    | Description                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/sensitivecontentsummary.md) | Provides a count of databases that contain criteria matches in the targeted environment. This report includes a Details table. |

## Oracle > Instance Level Reports

The following reports are available at the instance level:

| Report                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/instance/sensitivecontentdetails.md) | Provides details of tables that contain criteria matches on the selected instance. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table displays discovered sensitive data only if Enterprise Auditor stores it in its database. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/instance/sensitivecontentsummary.md) | Provides a count of tables that contain criteria matches on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                                  |

## Oracle > Instance > Databases Node Reports

The following reports are available at the Databases node level:

| Report                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/databaselibrary/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                       |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/databaselibrary/sensitivecontent.md) | Provides a list of paths and a hit count per table that contain criteria matches on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table displays discovered sensitive data only if Enterprise Auditor stores it in its database. |

## Oracle > Instance > Databases Node > Database and Library Level Reports

The following reports are available at the database and library level:

| Report                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/databaselibrary/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                       |
| [Sensitive Content Report](/docs/accessinformationcenter/11.6/resourceaudit/oracle/databaselibrary/sensitivecontent.md) | Provides a list of paths and a hit count per table that contain criteria matches on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table displays discovered sensitive data only if Enterprise Auditor stores it in its database. |
