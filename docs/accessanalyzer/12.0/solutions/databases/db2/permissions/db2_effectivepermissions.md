---
title: "Db2_EffectivePermissions Job"
description: "Db2_EffectivePermissions Job"
sidebar_position: 20
---

# Db2_EffectivePermissions Job

This job provides insight into effective user and role permissions to all the database objects in
the targeted Db2 database servers.

## Analysis Tasks for the Db2 \_EffectivePermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Permissions** >
**Db2_EffectivePermissions** > **Configure** node and select **Analysis** to view the Analysis
Tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the Db2 _EffectivePermissions Job](/images/accessanalyzer/12.0/solutions/databases/db2/permissions/effectivepermissionsanalysis.webp)

The default analysis tasks are:

- Effective Permissions – Uses role membership to display effective permissions on Db2 objects
- Database Summary – Summarizes effective permissions by Db2 database

## Report for the Db2_Effective Job

In addition to the tables and views created the analysis task, the Db2_EffectivePermissions job
produces the following preconfigured report.

| Report                | Description                                                                        | Default Tags | Report Elements                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Effective Permissions | This report shows details on effective permissions in the audited Db2 environment. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays Database Summary</li><li>Table – Displays Database Summary</li><li>Table – Displays permissions details</li></ul> |
