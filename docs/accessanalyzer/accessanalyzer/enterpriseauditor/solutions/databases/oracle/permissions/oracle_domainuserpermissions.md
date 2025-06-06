# Oracle\_DomainUserPermissions Job

The Oracle\_DomainUserPermissions Job provides insight into Microsoft Active Directory domain user accesses to Oracle database objects both at the instance and object level.

## Analysis Tasks for the Oracle\_DomainUserPermissions Job

Navigate to the __Oracle__ > __3.Permissions__ > __Oracle\_DomainUserPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/permissions/jobgroup34.png)

The default analysis tasks are:

- Calculate domain user permissions details – Creates the SA\_ORACLE\_DomainUserPermissions\_Details table accessible under the job’s Results node
- Summarize domain user permissions – Creates the SA\_ORACLE\_DomainUserPermissions\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle\_DomainUserPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain User Access | This report looks at permissions granted to domain users across the audited environment | None | This report is comprised of three elements:   - Bar Chart – Displays top users by instance count - Table – Provides details on access sprawl - Table – Provides information on permission details |
