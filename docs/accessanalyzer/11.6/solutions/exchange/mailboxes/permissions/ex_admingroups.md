# EX_AdminGroups Job

The EX_AdminGroups job provides visibility into the direct and effective membership of Exchange
Administrative groups.

## Analysis Tasks for the EX_AdminGroups Job

View the analysis tasks by navigating to the **Exchange** > **4. Mailboxes** > **Permissions** >
**EX_AdminGroups** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the EX_AdminGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/mailboxes/permissions/admingroupsanalysis.webp)

The following analysis tasks are selected by default:

- 00.Calculate Effective Membership – Creates the SA_EX_AdminGroups_Membership table accessible
  under the job’s Results node
- 01.Rank groups by Size – Creates the SA_EX_AdminGroups_Ranked table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the EX_AdminGroups Job produces
the following pre-configured report:

| Report                         | Description                                                                            | Default Tags | Report Elements                                                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Exchange Administration Groups | This report shows effective membership for the default Exchange Administration groups. | None         | This report is comprised of two elements: - Bar Chart – Displays largest admin groups - Table – Provides membership details |
