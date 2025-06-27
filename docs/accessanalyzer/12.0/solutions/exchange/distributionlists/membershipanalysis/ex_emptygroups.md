# EX_EmptyGroups Job

The EX_EmptyGroups job identifies empty distribution groups that are candidates for cleanup.

## Analysis Tasks for the EX_EmptyGroups Job

View the analysis tasks by navigating to the **Exchange** > **6. Distribution Lists** > **Membership
Analysis** > **EX_EmptyGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_EmptyGroups Job](/img/product_docs/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/emptygroupsanalysis.webp)

The following analysis tasks are selected by default:

-   0. Drop tables – Drops tables from previous runs
-   1. Empty Groups – Creates the SA_EX_EmptyGroups_Empty table, accessible under the job’s Results
       node
-   2. Single User Groups – Creates the SA_EX_EmptyGroups_SingleUser table, accessible under the
       job’s Results node
-   3. Summarize Empty Groups – Creates the SA_EX_EmptyGroups_EmptySummary table, accessible under
       the job’s Results node
-   4. Summarize Single User Groups – Creates the SA_EX_EmptyGroups_SingleUserSummary table,
       accessible under the job’s Results node
