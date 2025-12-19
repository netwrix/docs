---
title: "SG_OpenFolders Job"
description: "SG_OpenFolders Job"
sidebar_position: 20
---

# SG_OpenFolders Job

The SG_OpenFolders job enumerates folders with open access across the audited environment.

## Queries for the SG_OpenFolders Job

The SG_OpenFolders job uses the SystemInfo Data Collector for the following query:

![Queries for the SG_OpenFolders Job](/images/accessanalyzer/11.6/solutions/windows/openaccess/openfoldersquery.webp)

The query for the SG_OpenFolders job is:

- OpenAccess – Checks for folders with open access

    - (Optional) By default, the OpenAccess query used in this job has a search depth of 0 and will
      return share-level information. If needed, the subfolder depth can be increased in the query
      configuration. See the [Configure the OpenAccess Query](#configure-the-openaccess-query) topic
      for additional information.

### Configure the OpenAccess Query

The OpenAccess query has been preconfigured to run with the default settings. However, the subfolder
depth can optionally be increased on the Options page in the System Info Data Collector Wizard.
Follow the steps to customize the query. See the
[SystemInfo Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/systeminfo/overview.md)
topic for additional information.

**Step 1 –** Navigate to the **Jobs** > **Windows** > **Open Access** > **SG_OpenFolders** >
**Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The System Info Data Collector
Wizard opens.

![System Info Data Collector Wizard Options page](/images/accessanalyzer/11.6/solutions/windows/openaccess/configuresubfolderdepth.webp)

**Step 4 –** Navigate to the Options page and select the **Enumerate subfolders within shared
folder** checkbox and then the **Limit returned subfolders depth to** checkbox.

**Step 5 –** Select the desired subfolders depth level using the arrows. Click **Next**.

**Step 6 –** On the Summary page, click **Finish** to save the changes.

The subfolders depth is now saved to the configured level.

## Analysis Tasks for the SG_OpenFolders Job

Navigate to the **Windows** > **OpenAccess** > **SG_OpenFolders** > **Configure** node and select
**Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the SG_OpenFolders Job](/images/accessanalyzer/11.6/solutions/windows/openaccess/openfoldersanalysis.webp)

The default analysis tasks are:

- Enumerates open folders across the audited environment – Creates an interim processing table in
  the database for use by downstream analysis and report generation
- Enumerates hosts with open folders across the audited environment – Creates interim processing
  tables in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the SG_OpenFolders job produces the
following pre-configured reports.

| Report              | Description                                                                     | Default Tags | Report Elements                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Access By Host | This report enumerates hosts with openly accessible folders.                    | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays hosts with open folders</li><li>Table – Provides an open folder count by host</li></ul> |
| Open Folders        | This report enumerates folders with open access across the audited environment. | None         | This report is comprised of two elements: <ul><li>Line Chart – Displays open folders over time</li><li>Table – Provides details on all open folders</li></ul>   |
