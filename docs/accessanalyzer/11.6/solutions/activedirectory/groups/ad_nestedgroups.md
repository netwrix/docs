# AD_NestedGroups Job

The AD_NestedGroups Job identifies nested groups within Active Directory and provides details such
as the levels of nesting. While Active Directory provides the ability to nest certain types of
groups within other groups, Microsoft recommends nesting does not go beyond two levels in order to
avoid difficulties in understanding effective membership and access.

## Analysis Tasks for the AD_NestedGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_NestedGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_NestedGroups Job](/img/product_docs/accessanalyzer/11.6/solutions/exchange/distributionlists/membershipanalysis/nestedgroupsanalysis.webp)

The default analysis tasks are:

- Details – Creates the SA_AD_NestedGroups_Details table accessible under the job’s Results node
- Summarize by Domain – Creates the SA_AD_NestedGroups_DomainSummary table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_NestedGroups Job produces
the following pre-configured report:

| Report        | Description                                                                                                           | Default Tags | Report Elements                                                                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nested Groups | This report identifies the groups with the largest amount of nested groups, and how many levels of nesting there are. | None         | This report is comprised of three elements: - Bar Chart – Displays top groups by nesting - Table – Provides details on nested groups - Table – Provides details on top groups by nesting |
