---
title: "SP_TeamsSensitiveData Job"
description: "SP_TeamsSensitiveData Job"
sidebar_position: 70
---

# SP_TeamsSensitiveData Job

The SP_TeamsSensitiveData Job analyzes sensitive data activity within Teams Sites.

## Analysis Tasks for the SP_TeamsSensitiveData Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP_TeamsSensitiveData** >**Configure**
node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the SP_TeamsSensitiveData Job](/images/accessanalyzer/11.6/solutions/sharepoint/m365/teamssensitivedataanalysis.webp)

The default analysis task is:

- Analyze Teams Sensitive Data – Creates the SA_TeamsSensitiveDataActivityDetails table accessible
  under the job's Results node

In addition to the table created by the analysis task, the SP_TeamsSensitiveData Job produces the
following preconfigured report:

| Report                      | Description                                                  | Default Tags | Report Elements                                                                                                                                                                                           |
| --------------------------- | ------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Teams Sensitive Data Report | This report analyzes sensitive data activity in Teams sites. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Provides information on the top Teams users by sensitive file interaction count</li><li>Table – Provides details on user activity</li></ul> |
