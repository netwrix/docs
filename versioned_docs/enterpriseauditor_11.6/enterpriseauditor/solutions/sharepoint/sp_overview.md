# SP_Overview Job

The SP_Overview job provides an overview of the SharePoint Environment, providing a high level view
into what makes up a SharePoint Environment and the types of security risks and toxic permissions
found during scans.

![SP_Overview Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/overviewjobstree.png)

It is dependent on data collected by the
[SharePoint Access Auditing](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/overview.md#sharepoint-access-auditing),
[SharePoint Sensitive Data Discovery Auditing (SEEK)](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/overview.md#sharepoint-sensitive-data-discovery-auditing-seek),
and
[SharePoint Activity Auditing](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/overview.md#sharepoint-activity-auditing)
components of the
[0.Collection Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/sharepoint/collection/overview.md).
It also depends on the running of the sub-job groups within the solution. If only select sub-job
groups have been run, there will be blank sections of this overview report.

## Analysis Tasks for the SP_Overview Job

Navigate to the **Jobs** > **SharePoint** > **SP_Overview** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_Overview Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/publicfolders/overviewanalysis.png)

The default analysis tasks is:

- Generate Overview – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the table created by the analysis task which displays all direct user permissions,
the SP_Overview Job produces the following pre-configured report:

| Report              | Description                                                              | Default Tags | Report Elements                                                                                            |
| ------------------- | ------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------- |
| SharePoint Overview | This report provides an overview of the targeted SharePoint environment. | None         | This report is comprised of one element: - Table – Provides details on the targeted SharePoint environment |
