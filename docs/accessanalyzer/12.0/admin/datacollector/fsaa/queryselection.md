---
title: "FSAA: Query Selection"
description: "FSAA: Query Selection"
sidebar_position: 20
---

# FSAA: Query Selection

The FSAA Data Collector Query Selection page contains the following query categories, sub-divided by
auditing focus:

![FSAA Data Collector Wizard Query Selection page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/queryselection.webp)

- The File System Access/Permission Auditing options scan hosts for file system information, and
  there are two categories to choose from:

    - Scan – Scans file systems for permission information, ownership, and content profiling
    - Bulk import– Imports access scan data into the SQL database

- The File System Activity options runs user and group activity and inactivity related queries based
  on FSAC data, and there are two categories to choose from:

    - Scan – Performs file system activity scan for the target host
    - Bulk import – Imports File System Activity scan data into the SQL database

- The Sensitive Data options scan hosts for sensitive data, and there are two categories to choose
  from:

    - Scan – Scans file system content for sensitive information
    - Bulk import – Imports SDD scan data into the SQL database

- The DFS options collect Distributed File System information, and there is one category:

    - Scan and import – Collects Distributed File System information

        :::note
        Starting with v8.1, DFS Audits are completed with a streaming method and do not
        require a bulk import query following the scan query.
        :::


- The Azure options collects Azure Files storage account information, and there is one category:

    - Scan and import – Collects Azure Files storage account information. The instant job
      preconfigured to use this query category must be used. See the
      [FS_AzureTenantScan Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/fs_azuretenantscan.md) topic
      for additional information.

- The Maintenance options perform maintenance for the FSAA Data Collector, and there are three
  categories to choose from:

    - Remove scan executables and data – Removes file system access audit scan applet and data from
      the remote server
    - Upgrade proxy service – Update FSAA binaries for hosts running the File System Proxy Service

        :::note
        The Upgrade proxy service category only applies to updating a v8.0+ File System
        Proxy installation to a newer version. Manual updating is necessary for v7.x File System
        Proxy installations.
        :::


    - Remove Host Data – Removes host from all SQL tables created by the FSAA Data Collector and
      deletes StrucMap (removes host assigned to job where query exists)

:::tip
Remember, the Sensitive Data category options require the Sensitive Data Discovery Add-On to be
installed on the Access Analyzer Console before the FSAA Data Collector can collect sensitive data.
:::


Once a query scan using the FSAA DC has been executed, the **Maintenance** button is enabled to
allow troubleshooting of scan errors that may have occurred.

:::warning
Do not use the Maintenance button unless instructed by
[Netwrix Support](https://www.netwrix.com/support.html). It is possible to cause corruption of the
database and loss of data to occur.
:::


## Maintenance Wizard

The Maintenance Wizard is opened by clicking the **Maintenance** button on the Query Selection page
of the FSAA Data Collector Wizard. You can use the wizard to reset hosts or repair file system data
errors.

![Maintenance Wizard Maintenance Selection page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/maintenancewizardselection.webp)

The Maintenance Selection page allows you to select the type of maintenance to be performed:

- Reset Hosts – Resets the Access GUID column value in the SA_FSAA_Hosts table for the Hosts
  selected. Allows data to be bulk imported when there is a GUID mismatch.
- Repair – Resets the MinResourceID and MinTrusteeID column values to 0. Removes duplicate and data
  consistency issues, including resources with nonexistent parents. Deletes StrucMap database.

Select the required option and click **Next**. The subsequent wizard page is determined by the
selection made.

- If Reset Hosts was selected, the Reset Hosts page displays:

    ![Maintenance Wizard Reset Hosts page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/maintenancewizardresethosts.webp)

    Select the desired hosts to reset the SQL data for, and click **Reset Hosts** to perform the
    maintenance.

- If Repair was selected, the Repair Tool page displays:

    ![Maintenance Wizard Repair Tool page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/maintenancewizardrepair.webp)

    Select the desired hosts to repair the SQL data for, and click **Run** to perform the
    maintenance.

Click **Finish** to close the wizard when you have completed the required maintenance.
