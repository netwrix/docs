---
title: "AD_DCSummary Job"
description: "AD_DCSummary Job"
sidebar_position: 30
---

# AD_DCSummary Job

The AD_DCSummary Job provides operational reporting related to the details collected for each domain
controller. For each domain controller, the report identifies the FSMO role, whether it is a
bridgehead server, whether it is a global catalog, and the time server it syncs to.

## Analysis Task for the AD_DCSummary Job

Navigate to the **Active Directory > 5.Domains > AD_DCSummary > Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task(s). The analysis task(s) are
preconfigured for this job.
:::


![Analysis Selection](/images/accessanalyzer/12.0/solutions/activedirectory/domains/dcsummaryanalysis.webp)

The default analysis tasks are:

-   **1. List DCs**
    - Creates the AD_DCSummary_List table accessible under the job’s Results node
    - Creates an interim processing table in the database for use by downstream analysis and report
      generation

In addition to the tables and views created by the analysis task, the AD_DCSummary Job produces the
following pre-configured report:

| Report                      | Description                                                                         | Default Tags | Report Elements                                                                                                                                                                |
| --------------------------- | ----------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Domain Controllers Overview | This report identifies domain controllers' roles and attributes within each domain. | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays domain controllers by domain</li><li>Table – Provides details on domain controllers by domain</li></ul> |
