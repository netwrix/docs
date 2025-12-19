---
title: "FS_Ransomware Job"
description: "FS_Ransomware Job"
sidebar_position: 60
---

# FS_Ransomware Job

The FS_Ransomware job is comprised of analysis and reports which use the data collected by the
**0.Collection** job group to provide information on periods of time in which users are responsible
for an abnormally high number of updates. This can be indicative of ransomware. Additionally,
activity involving files which are known as ransomware artifacts is highlighted.

## Analysis Tasks for the FS_Ransomeware Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_Ransomware** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the FS_Ransomeware Job](/images/accessanalyzer/12.0/solutions/filesystem/activity/suspiciousactivity/ransomewareanalysis.webp)

The following analysis tasks are selected by default:

- Summarize Hourly Norms and Deviations – Creates the SA_FS_Ransomware_Details table accessible
  under the job’s Results node
- Summarize activity on known ransomware artifacts

    - Creates the SA_FS_Ransomware_Artifacts table accessible under the job’s Results node
    - Creates an interim processing table in the database for use by downstream analysis and report
      generation

In addition to the tables and views created by the analysis tasks, the FS_Ransomware job produces
the following pre-configured reports:

| Report                              | Description                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ransomware Activity                 | This report summarizes Add or Rename activity involving known ransomware artifacts.                                                         | None         | This report is comprised of three elements: <ul><li>Bar Chart – Displays top ransomware patterns</li><li>Table – Provides details on ransomware activity</li><li>Table – Provides summary of ransomware by pattern</li></ul> |
| Unusual Write Activity (Ransomware) | This report highlights periods of abnormally high update activity involving shared resources. This can be indicative of ransomware attacks. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays abnormal update activity</li><li>Table – Provides details on abnormal update activity</li></ul>                                                       |
