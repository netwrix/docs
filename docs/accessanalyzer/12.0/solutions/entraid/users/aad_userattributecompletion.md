---
title: "AAD_UserAttributeCompletion Job"
description: "AAD_UserAttributeCompletion Job"
sidebar_position: 40
---

# AAD_UserAttributeCompletion Job

The AAD_UserAttributeCompletion Job identifies which attributes are present within User fields in
Microsoft Entra ID, and which ones are blank for a majority of objects. This may indicate accounts
within Microsoft Entra ID which are lacking appropriate information.

## Analysis Tasks for the AAD_UserAttributeCompletion Job

Navigate to the **Jobs** > **Entra ID** > **2.Users** > **AAD_UserAttributeCompletion** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AAD_UserAttributeCompletion Job](/images/accessanalyzer/12.0/solutions/entraid/users/userattributecompletionanalysis.webp)

The default analysis tasks are:

- Gets details on user attribute completion, by attribute – Creates the
  AAD_UserAttributeCompletion_AttributeDetails table accessible under the job’s Results node
- Gets details on user attribute completion, by user – Creates the
  AAD_UserAttributeCompletion_UserDetails table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD_UserAttributeCompletion Job
produces the following pre-configured report.

| Report                    | Description                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Attribute Completion | This report identifies which attributes are present within User fields in Microsoft Entra ID, and which ones are blank for a majority of User objects. | None         | This report is comprised of three elements: <ul><li>Stacked Bar Chart – Displays completeness by attribute</li><li>Table – Provides details on users with blank attributes</li><li>Tables – Provides details om completeness by attribute</li></ul> |
