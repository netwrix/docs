---
title: "6.Sensitive Data > SP_SensitiveData Job"
description: "6.Sensitive Data > SP_SensitiveData Job"
sidebar_position: 80
---

# 6.Sensitive Data > SP_SensitiveData Job

The SP_SensitiveData Job identifies where sensitive data is located inside SharePoint farms. Special
care is paid to access and user activity in these locations.

![6.Sensitve Data > SP_SensitiveData Job in the Jobs Tree](/images/accessanalyzer/12.0/solutions/sharepoint/sensitivedatajobstree.webp)

The SP_SensitiveData Job is located in the 6.Sensitive Data Job Group.

## Analysis Tasks for the SP_SensitiveData Job

Navigate to the **Jobs** > **SharePoint** > **6.Sensitive Data** > **SP_SensitiveData** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_SensitiveData Job](/images/accessanalyzer/12.0/solutions/sharepoint/sensitivedataanalysis.webp)

The default analysis tasks are:

- Details – Creates the SA_SP_SensitiveData_Details table accessible under the job’s Results node
- Summarize by Site – Creates the SA_SP_SensitiveData_SiteSummary table accessible under the job’s
  Results node
- Enterprise Summary – Creates the SA_SP_SensitiveData_Summary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks which display sensitive data, the
SP_SensitiveData Job produces the following pre-configured reports:

| Report                                     | Description                                                                                            | Default Tags   | Report Elements                                                                                                                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary (A.K.A. Sensitive Data) | This report summarizes the types and amount of sensitive data discovered on targeted SharePoint farms. | Sensitive Data | This report is comprised of two elements: <ul><li>Pie Chart – Displays sensitive data discovered on SharePoint farms</li><li>Table – Provides details on sensitive data</li></ul>                                                  |
| Site Collection Details                    | This report highlights sites with the largest amount of sensitive data found.                          | Sensitive Data | This report is comprised of three elements: <ul><li>Bar Chart – Displays top sites by sensitive files</li><li>Table – Provides details on the site collection summary</li><li>Table – Provides details the files fetched</li></ul> |
