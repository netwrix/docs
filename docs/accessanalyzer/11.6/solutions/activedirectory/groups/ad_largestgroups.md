# AD_LargestGroups Job

The AD_LargestGroups Job identifies groups with large effective member counts. These types of groups
may cause administrative overhead and burden in being able to easily understand who is getting
access to resources, or how much access is being granted to resources through these groups.

## Analysis Task for the AD_LargestGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD_LargestGroups** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AD_LargestGroups Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/largestgroupsanalysis.webp)

The default analysis tasks are:

- Group Details – Creates the SA_AD_LargestGroups_Details table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the AD_LargestGroups Job produces
the following pre-configured report:

| Report         | Description                                                               | Default Tags | Report Elements                                                                                                      |
| -------------- | ------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| Largest Groups | This report identifies the largest groups within the audited environment. | None         | This report is comprised of two elements: - Bar Chart – Displays largest groups - Table – Provides details on groups |
