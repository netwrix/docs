---
title: "AD_ComputerModifications Job"
description: "AD_ComputerModifications Job"
sidebar_position: 10
---

# AD_ComputerModifications Job

The AD_ComputerModifications Job provides a report of all changes to computer objects.

## Analysis Tasks for the AD_ComputerModifications Job

Navigate to the **Active Directory** > **6.Activity** > **Changes** > **AD_ComputerModifications** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_ComputerModifications Job](/images/accessanalyzer/12.0/solutions/activedirectory/activity/changes/computermodificationsanalysis.webp)

The following non-configurable analysis tasks are selected by default:

- All Computer Object Changes – Creates the SA_AD_ComputerChanges_ComputerSummary table accessible
  under the job’s Results node
- Summarize by Computer – Creates the SA_AD_ComputerChanges_ComputerSummary table accessible under
  the job’s Results node

In addition to the tables created by the analysis tasks, the AD_ComputerModifications Job produces
the following pre-configured report:

| Report                   | Description                        | Default Tags                                               | Report Elements                                                                                                                                                                                  |
| ------------------------ | ---------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Computer Account Changes | Track changes to computer objects. | CPAA GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: <ul><li>Pie Chart – Displays Changes by Type</li><li>Table – Displays Changes by Computer</li><li>Table – Displays Computer Change Details</li></ul> |
