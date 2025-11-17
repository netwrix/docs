---
description: >-
  Deleted Active Directory user accounts still appear in Netwrix Access Analyzer
  reports because the AD Inventory (ADI) scan did not detect deletions; this
  article explains how to run a full AD Inventory Scan to resolve the issue.
keywords:
  - Active Directory
  - AD Inventory
  - ADI
  - deleted user
  - SA_ADInventory_UsersView
  - IsDeleted
  - Access Analyzer
  - 1-AD_Scan
products:
  - access-analyzer
sidebar_label: Deleted AD User(s) Still Show In Netwrix Access An
tags:
  - active-directory-auditing
title: "Deleted AD User(s) Still Show In Netwrix Access Analyzer Reports"
knowledge_article_id: kA0Qk0000001i73KAA
---

# Deleted AD User(s) Still Show In Netwrix Access Analyzer Reports

## Symptom

A deleted user account(s) from AD still shows in Netwrix Access Analyzer Reports and is not flagged as deleted.

## Cause

A failure on the ADI scan that could be caused by a myriad of reasons.

## Resolution

Run a full **AD Inventory Scan** by disabling differential scanning for the **1-AD_Scan** job using the steps below:

1. Navigate to **Access Analyzer > Jobs > .Active Directory Inventory > 1-AD_Scan > Configure > Queries > Query Properties > Configure > Options**.  
   ![Image_2024-11-19_15-36-30.png](./../0-images/ka0Qk000000DYa9_0EMQk00000AdoIX.png)
2. Uncheck the box for **Collect only updates since the last scan**.  
   ![Image_2024-11-19_15-37-33.png](./../0-images/ka0Qk000000DYa9_0EMQk00000AdoSD.png)
3. Click **Next** through the end of the Active Directory Inventory DC Wizard.
4. Re-run the **1-AD_Scan** job.
5. Select the previously-unchecked box for **Collect only updates since the last scan**.
6. Re-run the **1-AD_Scan** job.
7. To determine whether the job was successful, verify the results in the `SA_ADInventory_UsersView`. Search for the deleted user to confirm whether it exists or is marked `IsDeleted`.
8. If the deleted user does not exist or is not marked `IsDeleted`, then verify the permissions on the scan account. The permissions must have **List contents & read Property** on the **Deleted Objects** container.
9. For more information, please see the following article: ADInventory Data Collector.
