# Oracle_ObjectPermissions Job

The Oracle_ObjectPermissions Job provides insight into user and role permissions to database objects
in targeted Oracle database servers.

## Analysis Tasks for the Oracle_ObjectPermissions Job

Navigate to the **Oracle** > **3.Permissions** > **Oracle_ObjectPermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/databases/oracle/permissions/jobgroup35.webp)

The default analysis tasks are:

- Oracle Object Permissions – Highlights permissions on Oracle Objects. Creates the
  SA_Oracle_ObjectPermission_Details table accessible under the job’s Results node.
- Object Permissions Instance Summary – Summarizes Object Permissions by Instance. Creates the
  SA_Oracle_ObjectPermission_InstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_ObjectPermissions Job
produces the following pre-configured report.

| Report                    | Description                                                                               | Default Tags | Report Elements                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Object Permissions | This report highlights Object permissions and summarizes them by instance and domain user | None         | This report is comprised of three elements: - Bar Chart – Displays top instances by object permissions - Table –  Provides details on instances by object permission count - Table – Provides details on object permissions |
