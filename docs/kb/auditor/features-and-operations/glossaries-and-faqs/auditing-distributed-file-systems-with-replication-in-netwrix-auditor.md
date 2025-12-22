---
description: >-
  Instructions to configure auditing for Distributed File Systems with
  replication (DFSR) in Netwrix Auditor, including prerequisites, SACL
  replication considerations, staging area sizing, and related resources.
keywords:
  - DFSR
  - SACL
  - file server auditing
  - Netwrix Auditor
  - replication
  - staging area
  - UNC path
  - object access audit
  - data collection account
products:
  - auditor
sidebar_label: Auditing Distributed File Systems with Replication
tags: []
title: "Auditing Distributed File Systems with Replication in Netwrix Auditor"
knowledge_article_id: kA00g000000H9SyCAK
---

# Auditing Distributed File Systems with Replication in Netwrix Auditor

## Question

How to configure File Servers audit settings for Distributed File Systems with replication?

## Answer

### Prerequisites

> **NOTE:** It is recommended to either check the **Adjust audit settings automatically** checkbox when setting up a new monitoring plan, or to keep the checkbox checked when adding a DFSR file share to the existing monitoring plan.

Refer to the following steps to ensure the DFSR audit is configured correctly in your environment:

- The corresponding data collection account should meet requirements for the file server audit. For additional information on the account setup, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview (Windows File Servers — Permissions for Windows File Server Auditing).

- Object access audit should be enabled for DFS file shares or every cluster node. For additional information on object access audit, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview (Windows File Servers — Configure Object-Level Access Auditing).

- When adding a DFS file share for auditing, specify a Windows file share item and provide the UNC path of the whole namespace or UNC path of the DFS link (folder).

  - `\domain\dfsnamespace\` (domain-based namespace)
  - `\server\dfsnamespace\` (in case of stand-alone namespace)

Refer to the following article for additional information on the initial setup: https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview (Configuration — Windows File Servers).

### SACL replication

> **NOTE:** During the initial SACL replication, the **Who** field in corresponding Activity Records will state **System**.

Refer to the following steps to optimize the initial SACL replication:

1. To approximate the time (in hours) to be spent on the SACL replication, use the following formula:

   ```
   Number of audited objects / 180000
   ```

   In larger environments, a monitoring plan containing DFSR shares can be created on Friday to allow it to replicate SACL for DFSR during the non-working hours.

2. In case you're experiencing performance issues, you can increase the staging area. The default setting for the replication staging area size is 4 GB to be increased based on the environment needs. Refer to the following steps for additional information:

   1. If your staging area is configured to be too small, DFS Replication might consume additional CPU and disk resources to regenerate the staged files. Replication might also slow down, or even stop. Learn more about staging area in How to determine if you have a staging area problem ⸱ Microsoft: https://learn.microsoft.com/en-us/windows-server/troubleshoot/how-to-determine-the-minimum-staging-area-dfsr-needs-for-a-replicated-folder

   2. Microsoft recommends expanding your staging area to the size of the 32 largest files present in the replicated folder. Run the following lines in elevated PowerShell to calculate the total size of 32 largest files located in your replicated folder:

      ```powershell
      $big32 = Get-ChildItem “path_to_the_replicated_folder” -recurse | Sort-Object length -descending | select-object -first 32 | measure-object -property length –sum
      $big32.sum /1gb
      ```

   3. Refer to the following steps to set the staging area size:

      1. Open the **DFS Management** tool in **Server Management** app.
      2. In the left pane, select **Replication** > corresponding replication group.
      3. Right-click the replicated folder and click **Properties**.
      4. Select the **Staging** tab, and edit the **Quota** window. Specify the folder size you've previously calculated, and save changes.

### Related articles

- Windows File Servers — Permissions for Windows File Server Auditing ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview

- Windows File Servers — Configure Object-Level Access Auditing ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview

- Configuration — Windows File Servers ⸱ v10.6  
  https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/windows/overview

- How to determine the minimum staging area DFSR needs for a replicated folder ⸱ Microsoft  
  https://learn.microsoft.com/en-us/windows-server/troubleshoot/how-to-determine-the-minimum-staging-area-dfsr-needs-for-a-replicated-folder
