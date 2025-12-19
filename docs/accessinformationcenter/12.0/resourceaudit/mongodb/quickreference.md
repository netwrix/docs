---
title: "MongoDB Reports Quick Reference Guide"
description: "MongoDB Reports Quick Reference Guide"
sidebar_position: 10
---

# MongoDB Reports Quick Reference Guide

The following MongoDB reports are available for selections within the Resources pane.

## MongoDB Node Report

The following report is available at the MongoDB node level:

| Report                                                         | Description                                                                                                                          |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/sensitivecontentsummary.md) | Provides a count of collections where criteria matches were found in the targeted environment. This report includes a Details table. |

## MongoDB > Instance Level Reports

The following reports are available at the instance level:

| Report                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/instance/sensitivecontentdetails.md) | Provides details of collections where criteria matches were found on the selected instance. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/instance/sensitivecontentsummary.md) | Provides a count of collections where criteria matches were found on the selected instance. This report includes a Details table.                                                                                                                                                                                                                                               |

## MongoDB > Instance > Databases Node Reports

The following reports are available at the Databases node level:

| Report                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/databasecollection/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                         |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/databasecollection/sensitivecontent.md) | Provides a list of paths and a hit count per collection where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

## MongoDB > Instance > Databases Node > Database and Collection Level Reports

The following reports are available at the database and collection level:

| Report                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Permissions Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/databasecollection/permissions.md)            | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                         |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resourceaudit/mongodb/databasecollection/sensitivecontent.md) | Provides a list of paths and a hit count per collection where criteria matches were found on the selected resource. This report includes a table with criteria matches visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |
