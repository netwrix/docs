---
title: "Sensitive Data > MongoDB_SensitiveData Job"
description: "Sensitive Data > MongoDB_SensitiveData Job"
sidebar_position: 40
---

# Sensitive Data > MongoDB_SensitiveData Job

The Sensitive Data Job Group is designed to provide insight into where sensitive data exists and who
has access to it across all the targeted MongoDB databases.

![Sensitive Data Job Group](/images/accessanalyzer/12.0/solutions/databases/mongodb/sensitivedatajobgroup.webp)

The job in the Sensitive Data Job Group is:

- MongoDB_SensitiveData Job - Provides details on all the sensitive data that was discovered in the
  targeted MongoDB databases based on the selected scan criteria

### Analysis Tasks for the MongoDB_SensitiveData Job

Navigate to the MongoDB > **Databases** > **Sensitive Data**> MongoDB_SensitiveData > Configure node
and select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/databases/mongodb/analysismongodbsensitivedatajob.webp)

The default analysis tasks are:

- Sensitive Data Details — Returns details around sensitive data in MongoDB
- Database Summary — Summarizes MongoDB sensitive data by database
- Enterprise Summary — Summarizes MongoDB sensitive data across the enterprise

### Reports for the for the MongoDB_SensitiveData Job

In addition to the tables and views created the analysis task, the MongoDB_SensitiveData Job
produces the following preconfigured reports.

| Report                  | Description                                                                  | Default Tags   | Report Elements                                                                                                                                                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise. | None           | This report is comprised of two elements: <ul><li>Bar Chart</li><li>Displays exceptions by Match Count</li><li>Table</li><li>Displays exception details</li></ul>                                                                                   |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria.        | Sensitive Data | This report is comprised of three elements: <ul><li>Bar Chart</li><li>Displays top databases by Sensitive Data Hits</li><li>Table</li><li>Provides details on top databases by Sensitive Data Hits</li><li>Table</li><li>Provides details</li></ul> |
