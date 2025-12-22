---
title: "EX_Mailflow_DL Job"
description: "EX_Mailflow_DL Job"
sidebar_position: 20
---

# EX_Mailflow_DL Job

The EX_Mailflow_DL job provides information around distribution list usage.

## Analysis Tasks for the EX_Mailflow_DL Job

View the analysis tasks by navigating to the **Exchange** > **8. Exchange Online** >
**EX_Mailflow_DL** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the EX_Mailflow_DL Job](/images/accessanalyzer/12.0/solutions/exchange/online/mailflow/mailflowdlanalysis.webp)

The following analysis tasks are selected by default:

- Azure Groups Direct Member Count – Creates the EX\_ MailFlow_DL_AzureMemberCount table, accessible
  under the job’s Results node. Provides a direct member count for distribution lists from Azure
  groups.
- DLs by Count – Creates the EX\_ Mailflow_DLsByCount table, accessible under the job’s Results
  node. Lists of all distribution lists and how much mail-flow they have received.

In addition to the tables and views created by the analysis tasks, the EX_Mailflow_DL Jjb produces
the following pre-configured report:

| Report                    | Description                                            | Default Tags | Report Elements                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Top DLs by Received Count | The top distribution lists by total messages received. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays top five distribution lists by received count</li><li>Table – Provides details on the top five distribution lists by received count</li></ul> |
