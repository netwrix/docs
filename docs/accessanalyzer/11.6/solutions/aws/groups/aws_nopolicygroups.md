# AWS_NoPolicyGroups Job

The AWS_NoPolicyGroups job provides details on groups that have no policies assigned to them.

## Analysis Tasks for the AWS_NoPolicyGroups Job

Navigate to the **AWS** > **3.Groups** > **AWS_NoPolicyGroups** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_NoPolicyGroups Job](/img/product_docs/accessanalyzer/11.6/solutions/aws/groups/nopolicygroupsanalysis.webp)

The following analysis tasks are selected by default:

- No Policy Groups – Identifies groups that have no policies applied. Creates the
  AWS_NoPolicyGroup_Details table accessible under the job’s Results node.
- No Policy Groups Summary – Summarizes no policy groups across AWS Organizations. Creates the
  AWS_NoPolicyGroup_Summary table accessible under the job’s Results node.

## Report for the AWS_NoPolicyGroups Job

In addition to the tables and views created by the analysis task, the AWS_NoPolicyGroups job
produces the following preconfigured report:

| Report                  | Description                                                       | Default Tags | Report Element                                                                                                                                                                                                        |
| ----------------------- | ----------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Groups With No Policies | This report identifies groups that do not have a policy assigned. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top accounts by no policy group counts - Table – Shows no policy groups by accounts - Table – Provides details on no policy groups |
