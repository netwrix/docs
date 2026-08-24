---
title: "Additional FSAA Workflows"
description: "Additional FSAA Workflows"
sidebar_position: 150
---

# Additional FSAA Workflows

The following FSAA Data Collector query categories that provide additional functionality:

- Remove scan executables and data – Removes file system access audit scan applet and data from
  remote server
- Update proxy service – Update FSAA binaries for hosts running the File System Proxy Service

    :::note
    Requires the existing File System Proxy Service to be v8.0 or later.
    :::


- Remove host data – Removes host from all SQL tables created by the FSAA Data Collector and deletes
  StrucMap (removes host assigned to job where query exists)

Additional workflows include:

- Remove Host and Criteria SDD Data – Removes SDD data for a host or a criteria from the SQL tables
- Drop Tables & Views – Drops the standard reference tables and views

:::tip
Remember, the FSAA Data Collector always records data in Standard Reference Tables, no matter which
job runs it.
:::


## Remove File System Access Scan Category

Use the FSAA Data Collector to clean up or troubleshoot the applet and proxy scanning
servers. Do this through a new job’s query. Set the host list and Connection
Profile to target the applet and proxy servers you want.

To build a new query using the FSAA Data Collector with the Remove scan
executables and data category:

**Step 1 –** Navigate to the **Configure** node of a new or chosen job and select the **Queries**
node.

**Step 2 –** In the Query Selection view, click the **Create Query** link. The Query Properties
window displays.

**Step 3 –** Select the **Data Source** tab. From the **Data Collector** dropdown menu, select
**FILESYSTEMACCESS** and then click the **Configure** button. The File System Access Auditor Data
Collector Wizard opens.

![FSAA Data Collector Wizard Query Selection page with Remove scan executables and data option selected](/images/accessanalyzer/12.0/admin/datacollector/fsaa/queryselectionremovescanexecutablesdata.webp)

**Step 4 –** On the Query Selection page, select the **Remove scan executables and data** category.

**Step 5 –** Click **Finish** to save the selection and close the wizard. Then click **OK** to close
the Query Properties window.

You've now configured this job to run the FSAA Data Collector and remove the file system access
audit scan applet and data from the target server. Run the job to clean-up the targeted hosts.

## Update Proxy Service Category

Use the FSAA Data Collector to upgrade the File System Proxy Service already installed on
proxy servers. The FS_UpdateProxy Job is preconfigured to run with the default settings with the
category of Update proxy service. It is available through the Instant Job Library under the File
System library.

The Update Proxy Service category option lets users update v8.0+ File System Proxy Service
installations to newer versions. When you use this query, the job compresses the updated binaries
and deploys them to the proxy server. When the proxy server has no active sessions, the Netwrix
Access Analyzer (formerly Enterprise Auditor) FSAA Proxy Scanner service shuts down and updates the
components. Finally, the service restarts itself.

:::note
This option isn't for updating v7.x File System Proxy installations. You must manually update
those to at least v8.0 on the proxy server before you can use this query to automate the
process.
:::


Follow the [Upgrade Proxy Service Procedure](/docs/accessanalyzer/12.0/install/filesystemproxy/upgrade.md) and use
the FS_UpdateProxy Job.

## Remove Host Category

Use the FSAA Data Collector to clean up the Standard Reference Tables by removing data for
particular hosts. Do this through a new job’s query. Set the host to remove as the host list for
the new job. The Connection Profile applied should be the same as the one
used for the associated **FileSystem** > **0.Collection** > … **Bulk Import** Job.

:::warning
Be careful when applying this query task, as it deletes collected
data. Ensure proper configuration before job execution.
:::


:::info
Manually enter individual hosts into the host list executing this query.
:::


To build a new query using the FSAA Data Collector with the Remove host data
category:

**Step 1 –** Navigate to the **Configure** node of a new or chosen job and select the **Queries**
node.

**Step 2 –** In the Query Selection view, click the **Create Query** link. The Query Properties
window displays.

**Step 3 –** Select the **Data Source** tab. From the **Data Collector** dropdown menu, select
**FILESYSTEMACCESS** and then click **Configure**. The File System Access Auditor Data Collector
Wizard opens.

![FSAA Data Collector Wizard Query Selection page with Remove host data option selected](/images/accessanalyzer/12.0/admin/datacollector/fsaa/queryselectionremovehostdata.webp)

**Step 4 –** On the Query Selection page, select the **Remove host data** category.

**Step 5 –** Click **Finish** to save the selection and close the wizard. Then click **OK** to close
the Query Properties window.

You've now configured this job to run the FSAA Data Collector and remove the host identified in the
job’s **Configure** > **Hosts** node. Run the job to clean-up the targeted hosts.

:::tip
Remember, this job deletes data from the Access Analyzer database. Use caution and ensure proper
configuration before job execution.
:::


## Remove Host and Criteria SDD Data

The FS_SDD_DELETE job removes host and criteria sensitive data matches from the Tier 1 database. It
is preconfigured to run analysis tasks with temporary tables that requires modification before job
execution. It is available through the Instant Job Library under the File System library. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for additional information.

![FS_SDD_DELETE Job in Job's Tree](/images/accessanalyzer/12.0/admin/datacollector/fsaa/sdddelete.webp)

Run the 0.Collection Job Group before executing the FS_SDD_DELETE Job.

### Analysis Tasks for the FS_SDD_DELETE Job

The analysis tasks are deselected by default. View the analysis tasks by navigating to the
**Jobs** > **FS_SDD_DELETE** > **Configure** node and select **Analysis**.

:::warning
Applying these analysis tasks deletes collected data.
:::


![FS_SDD_DELETE Job Analysis Selection page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/sdddeleteanalysistasks.webp)

- Delete Criteria – Remove all SDD Data for a Specified Criteria
- Delete Host – Remove all SDD Data Related to a Host
- Remove Host & Criteria – Remove all SDD Data for a Specific Host and Criteria Combination

### Configure the FS_SDD_DELETE Analysis Tasks

Configure and run the analysis tasks:

**Step 1 –** Before job execution, modify the analysis tasks you want using the
[Customizable Analysis Parameters for FS_SDD_DELETE Job](#customizable-analysis-parameters-for-fs_sdd_delete-job)
instructions.

**Step 2 –** In the Analysis Selection Pane, check the type of analysis task that will be run.

**Step 3 –** Right-click the **FS_SDD_DELETE** Job and select **Run Job**. The analysis execution
status is visible from the **Running Instances** node.

**Step 4 –** When the job has completed, return to the Analysis Selection Pane and deselect all
analysis tasks.

:::warning
Don't leave these analysis tasks checked to avoid accidental data loss.
:::


The job has dropped all of these tables from the SQL Server database, and the data is no longer
available.

### Customizable Analysis Parameters for FS_SDD_DELETE Job

A customizable parameter lets Access Analyzer users set the sensitive data values that this job
deletes during its analysis.

| Analysis Task          | Customizable Parameter Name | Value Indicates                               |
| ---------------------- | --------------------------- | --------------------------------------------- |
| Delete Host            | #hosts                      | List of Host Names to be removed              |
| Delete Criteria        | #Criteria                   | List of Criteria to be removed                |
| Remove Host & Criteria | #Criteria #hosts            | List of Criteria and Host Names to be removed |

You can customize these parameters in a section at the bottom of the SQL Script Editor. To customize analysis task parameters:

**Step 1 –** Navigate to the **FS_SDD_DELETE** > **Configure** node and select **Analysis**.

**Step 2 –** In the Analysis Selection view, select the analysis task you want and click
**Analysis Configuration**. The SQL Script Editor opens.

![ FS_SDD_DELETE Job Analysis Task in SQL Script Editor](/images/accessanalyzer/12.0/admin/datacollector/fsaa/sdddeletesqlscripteditor.webp)

**Step 3 –** In the Parameters section at the bottom of the editor, select either the **#Criteria**
or **#hosts** row, depending on the analysis task chosen, and then **Edit Table**. The Edit Table
window opens.

:::warning
Don't change any parameters where the Value states `Created during execution`.
:::


![SQL Script Editor Edit Table window](/images/accessanalyzer/12.0/admin/datacollector/fsaa/sdddeletesqlscripteditoredittable.webp)

**Step 4 –** Use the **Add New Item** button to enter host names or criteria to the temporary table
list manually, or select the **Browse** button to upload a list of hosts in CSV format. Click **OK**
to save any changes. Other Edit Table buttons include:

- Edit a Value
- Delete this row/column
- Move up
- Move down

**Step 5 –** Click Save and Close to finalize the customization and close the SQL Script Editor.

The job is now ready to run.

## Drop Tables & Views

If it becomes necessary to clear the FSAA Data Collector tables and views to resolve an issue, the
FS_DropTables Job is preconfigured to run analysis tasks that drop functions and views for the File
System Solution as well as the standard tables and views generated by the FSAA Data Collector.

It is available through the Instant Job Library under the File System library. Since this job does
not require a host to target, select Local host on the Hosts page of the Instant Job Wizard. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for additional information.

![FS_DropTables Job in Job's Tree](/images/accessanalyzer/12.0/admin/datacollector/fsaa/droptables.webp)

The 0.Collection Job Group must be run before executing the FS_DropTables Job.

### Analysis Tasks for the FS_DropTables Job

The analysis tasks are deselected by default. View the analysis tasks by navigating to the
**Jobs** > **FS_DropTables** > **Configure** node and select **Analysis**.

:::warning
Applying these analysis tasks deletes collected data.
:::


![FS_DropTables Job Analysis Selection page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/droptablesanalysistasks.webp)

-   **1. Drop FSAA functions** – Removes all functions and views from previous runs of the File System
       Solution
-   **2. Drop FSAC tables** – Drops the File System Activity Auditing tables imported from the previous
       runs
-   **3. Drop FSDLP Tables** – Drops the File System Sensitive Data Discovery Auditing tables imported
       from the previous runs
-   **4. Drop FSDFS Tables** – Drops the File System DFS Auditing tables imported from the previous runs
-   **5. Drop FSAA Tables** – Drops File System Access Auditing tables imported from the previous runs

Don't try to run these tasks separately, as they are designed to work together. Follow these steps
to run the analysis tasks:

**Step 1 –** In the Analysis Selection Pane, click **Select All**. All tasks will be checked.

**Step 2 –** Right-click the **FS_DropTables** Job and select **Run Job**. The analysis execution
status is visible from the **Running Job** node.

**Step 3 –** When the job has completed, return to the Analysis Selection Pane and click **Select
All** to deselect these analysis tasks.

:::warning
Don't leave these analysis tasks checked to avoid accidental data loss.
:::


The job has dropped all of these tables from the SQL Server database, and the data is no longer
available.
