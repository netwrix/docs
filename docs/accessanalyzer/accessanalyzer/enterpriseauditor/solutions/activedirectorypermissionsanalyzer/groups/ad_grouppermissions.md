# AD\_GroupPermissions Job

The AD\_Permissions job reports on all Active Directory permissions and ownership applied to group objects within the targeted domains.

## Analysis Tasks for the AD\_GroupPermissions Job

Navigate to the __Active Directory Permissions Analyzer__ > __2.Groups__ > __AD\_GroupPermissions__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupPermissions Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/groups/grouppermissionsanalysis.png)

The default analysis tasks are:

- List group object permissions – Creates the SA\_AD\_GroupPermissions\_Details table accessible under the job’s Results node
- Summarize group object permissions – Creates an interim processing table in the database for use by downstream analysis and report generation
- Group Ownership – Lists the owners of each group object and determines if they are a non-standard owner. Principals that are not administrators are considered non-standard owners of group objects.
- Group Ownership Summary – Summarizes owner type by domain

In addition to the tables and views created by the analysis tasks, the AD\_GroupPermissions job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Ownership | This report highlights instances where Active Directory group objects are owned by non admin principals. This information is summarized at the domain level. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays a summary of group ownership by domain - Table – Provides details on non-standard ownership |
| Group Permissions | This report highlights instances where permissions are applied to Active Directory group objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   - Bar Chart – Displays group permissions by domain - Pie Chart – Displays group permissions by type - Table – Provides details on group permissions |
