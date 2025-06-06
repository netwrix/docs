# Oracle\_RoleMembers Job

The Oracle\_RoleMembers Job is designed to analyze and provide information about role members across all targeted Oracle database servers.

## Analysis Tasks for the Oracle\_RoleMembers Job

Navigate to the __Oracle__ > __1.Users and Roles__ > __Oracle\_RoleMembers__ > Configure node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/usersroles/jobgroup22.png)

The default analysis tasks are:

- Role Member Details – Creates the SA\_Oracle\_RoleMember\_Details table accessible under the job’s Results node
- Role Membership Instances Summary – Creates the SA\_ Oracle\_RoleMember\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle\_RoleMembers Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Role Membership | This report shows details on the roles and role membership in the audited Oracle environment. | None | This report is comprised of three elements:   - Bar Chart – Displays top roles by role membership - Table – Provides details on roles by role membership - Table – Provides information on role membership details |
