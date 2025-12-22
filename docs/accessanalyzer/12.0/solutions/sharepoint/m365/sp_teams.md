---
title: "SP_Teams"
description: "SP_Teams"
sidebar_position: 50
---

# SP_Teams

The SP_Teams Job identifies activities, sensitive data and a summary of collected data for
SharePoint Teams.

## Analysis Tasks for the SP_Teams Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP_Teams** > **Configure** node and
select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SP_Teams Job](/images/accessanalyzer/12.0/solutions/sharepoint/m365/teamsanalysis.webp)

The default analysis task is:

- Teams Details and Summary – Creates the SA_SP_TeamsSummary table to populate the Teams Activity
  and Teams Summary reports
- Teams Activity Details – Creates the SA_SP_TeamsActivityDetails table to populate the Teams
  Activity report
- Teams Activity Summary – Creates the SA_SP_TeamsActivitySummary table to populate the Teams
  Activity report
- Teams Sensitive Data – Creates the SA_SP_TeamsFileDetailsSensitiveData table to populate the Teams
  Sensitive Data report

In addition to the tables created by the analysis tasks, the SP_Teams Job produces the following
preconfigured reports:

| Report               | Description                                                             | Default Tags | Report Elements                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ----------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Teams Activity       | This report identifies and analyzes activity in SharePoint Teams.       | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides Operation count of the Top Teams</li><li>Table – Provides a summary of Teams activity</li><li>Table – Provides details about Teams activity</li></ul>                                                                                                           |
| Teams Sensitive Data | This report identifies and analyzes sensitive data in SharePoint Teams. | None         | This report is comprised of three elements: <ul><li>Bar Chart – Provides the top Teams containing sensitive files</li><li>Table – Provides a sensitive data summary</li><li>Table – Provides additional details about sensitive files in Teams</li></ul>                                                                                 |
| Teams Summary        | This report summarizes collected data for SharePoint Teams.             | None         | This report is comprised of four elements: <ul><li>Table – Provides a summary of permissions in Teams</li><li>Bar Chart – Provides information about Top Teams by size (GB)</li><li>Pie Chart – Provides a comparison of stale vs active Teams sites</li><li>Table – Provides additional details about Teams sites permissions</li></ul> |
