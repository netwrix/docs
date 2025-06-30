# AD_DeprovisionGroups_Status Job

The AD_DeprovisionGroups_Status Job tracks all actions taken by the Deprovisioning workflow.

## Analysis Task for the AD_DeprovisionGroups_Status Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **1. Deprovision Groups** >
**AD_Deprovision Groups_Status** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis tasks is
preconfigured for this job.

![Analysis Task for the AD_DeprovisionGroups_Status Job](/img/product_docs/accessanalyzer/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsstatusanalysis.webp)

The default analysis task is:

- Track Actions – Creates the AD_DeprovisionGroups_Log and AD_DeprovisionGroups_Notes tables
  accessible under the job’s Results node

In addition to the table created by the analysis task, the AD_DeprovisionGroups_Status Job produces
the following pre-configured report.

| Report               | Description                                                                           | Default Tags | Report Elements                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Deprovisioning | This report tracks actions taken each day of the Stale Group Deprovisioning campaign. | None         | This report is comprised of three elements: - Line Chart – Displays cleanup progress - Table – Provides details on cleanup progress - Table – Provides action details |
