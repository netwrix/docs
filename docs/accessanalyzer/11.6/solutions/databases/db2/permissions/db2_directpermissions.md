# Db2_DirectPermissions Job

This job provides insight into direct user and role permissions to all the database objects in the
targeted Db2 database servers.

## Analysis Tasks for the Db2_DirectPermissions Job

Navigate to the **Jobs** > **Databases** > **Db2** > **Permissions** > **Db2_DirectPermissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Db2_DirectPermissions Job](/img/product_docs/accessanalyzer/11.6/solutions/databases/db2/permissions/directpermissionsanalysis.webp)

The default analysis tasks are:

- Direct Permissions – Highlights permissions directly assigned to Db2 objects
- Database Summary – Summarizes Db2 direct permissions by database

## Report for the Db2_DirectPermissions Job

In addition to the tables and views created the analysis task, the Db2_DirectPermissions job
produces the following preconfigured report.

| Report             | Description                                                                         | Default Tags | Report Elements                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direct Permissions | This report shows details on the direct permissions in the audited Db2 environment. | None         | This report is comprised of three elements: - Bar Chart – Displays Database Summary - Table – Displays Database Summary - Table – Displays permissions details |
