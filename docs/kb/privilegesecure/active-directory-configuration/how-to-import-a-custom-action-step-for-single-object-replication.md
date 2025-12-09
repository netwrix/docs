---
description: >-
  Use this procedure to import a custom single-object replication action step
  into Netwrix Privilege Secure to force faster Active Directory replication
  when provisioning sessions. Applies to releases prior to 3.7CU1 (3.7.1250); in
  3.7.1250 and later the step is included by default.
keywords:
  - single-object replication
  - Active Directory replication
  - PowerShell
  - Install-Addon.ps1
  - Netwrix Privilege Secure
  - Run AD Replication for User
  - addon
  - provisioning
products:
  - privilege-secure-access-management
sidebar_label: How to Import a Custom Action Step for Single-obje
tags: []
title: "How to Import a Custom Action Step for Single-object Replication"
knowledge_article_id: kA04u000000LLNTCA4
---

# How to Import a Custom Action Step for Single-object Replication

## Summary

It can be necessary in certain Active Directory environments to force replication when provisioning sessions. Netwrix Privilege Secure offers an out-of-the-box "Run Replication" step, but in certain Active Directory environments — often those geographically dispersed across multiple sites — this full replication step can be time consuming. In these instances, you can use a single-object replication step, which runs more quickly.

* **Note:** these instructions apply only to releases of Netwrix Privilege Secure prior to 3.7CU1 (3.7.1250). In Netwrix Privilege Secure 3.7.1250 and all subsequent releases, the **Run AD Replication for User** step is included by default.

## Instructions

1. First, download the `SingleObjReplication.Addon.zip` zip archive to the Netwrix Privilege Secure server:  
   https://www.netwrix.com/download/SingleObjReplication.Addon.zip

2. Extract the archive, which contains a README file, an ActionTemplates directory, and an `Install-Addon.ps1` script file. Right-click `Install-Addon.ps1` and select **Run with PowerShell**.  
   ![Untitled.png](./../0-images/ka04u000000HdDb_0EM4u000005f3zs.png)

3. When prompted, select "Y" to proceed.  
   ![Untitled2.png](./../0-images/ka04u000000HdDb_0EM4u000005f3zZ.png)

4. The PowerShell window should quickly execute the script and close.

5. Log in to the Netwrix Privilege Secure console. (If Netwrix Privilege Secure was already open, be sure to refresh the console.)

6. In Netwrix Privilege Secure, navigate to **Activities**, select an Activity, and click the green plus sign in either the **Pre-Session** or **Post-Session**. Note that the **Run AD Replication for User** activity step is now available.  
   ![Untitled3.png](./../0-images/ka04u000000HdDb_0EM4u000005f40R.png)
