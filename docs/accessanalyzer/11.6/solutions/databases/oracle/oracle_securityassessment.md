---
title: "Oracle_SecurityAssessment Job"
description: "Oracle_SecurityAssessment Job"
sidebar_position: 80
---

# Oracle_SecurityAssessment Job

The Oracle_SecurityAssessment Job is designed to summarize and categorize the security findings from
the Oracle Solution into HIGH, MEDIUM, LOW, and NO FINDING categories base on severity.

![Oracle Security Assessment Job](/images/accessanalyzer/11.6/solutions/databases/oracle/jobgroup46.webp)

## Analysis Tasks for the Oracle_SecurityAssessment Job

Navigate to the **Databases** > **Oracle** > **Oracle_SecurityAssessment** > **Configure** node and
select Analysis to view the analysis tasks.

![Analysis Selection](/images/accessanalyzer/11.6/solutions/databases/oracle/jobgroup47.webp)

The default analysis task is:

- Summarize Audit Findings – Aggregates all security issues in the Oracle environment. Creates the
  #scopeOfAudit table used to create the Oracle Security Assessment report under the Configure >
  Reports node

In addition to the tables and views created by the analysis task, the Oracle_SecurityAssessment Job
produces the following pre-configured report.

| Report                     | Description                                                                   | Default Tags        | Report Elements                                                                                                                                                                                                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Oracle Security Assessment | This report summarizes security related results from the Oracle solution set. | Security Assessment | This report is comprised of four elements: <ul><li>Table – Provides information on the scope of the audit</li><li>Pie Chart – Displays remote OS authentication</li><li>Table – Displays findings by category</li><li>Table – Provides details of the security assessment</li></ul> |
