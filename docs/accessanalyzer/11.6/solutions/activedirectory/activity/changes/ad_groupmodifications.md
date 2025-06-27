# AD_GroupModifications Job

The AD_GroupModifications Job provides a report of all changes to group objects. A separate report
is provided to highlight group membership changes. The list of top perpetrators can be used to
identify out of band changes.

## Analysis Tasks for the AD_GroupModifications Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **Changes** >
**AD_GroupModifications** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupModifications Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/activity/changes/groupmodificationsanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- Group Changes – Creates the SA_AD_GroupModifications_Details view accessible under the job’s
  Results node
- Summarize by Group – Creates the SA_AD_GroupModifications_GroupSummary table accessible under the
  job’s Results node
- Summarize by Perpetrator – Creates the SA_AD_GroupModifications_UserSummary table accessible under
  the job’s Results node
- Membership Changes – Creates the SA_AD_GroupMembershipChanges_Details view accessible under the
  job’s Results node
- Summarize by Group – Creates the SA_AD_GroupMembershipChanges_Summary table accessible under the
  job’s Results node
- Top Groups by Changes – Creates the SA_AD_GroupMembershipChanges_Last30Days table accessible under
  the job’s Results node.

In addition to the tables created by the analysis tasks, the AD_GroupModifications Job produces the
following pre-configured reports:

| Report                   | Description                         | Default Tags                                               | Report Elements                                                                                                                                                                                                  |
| ------------------------ | ----------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Changes            | Tracks changes to group attributes. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Pie Chart – Displays changes by type - Table – Displays changes by group - Table – Displays changes by group change details                                        |
| Group Membership Changes | Tracks changes to group membership. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Stacked Chart – Displays the most active groups in the past 30 days - Table – Displays group membership summary - Table – Displays group membership change details |
