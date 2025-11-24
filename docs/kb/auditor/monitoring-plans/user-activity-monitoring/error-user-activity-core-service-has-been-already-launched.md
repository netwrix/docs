---
description: >-
  This article explains why the Netwrix Auditor User Activity Core Service shows
  as already launched and a monitored server appears as Duplicate, and provides
  step-by-step instructions to resolve the issue by removing duplicate agent
  entries and reinstalling the Core Service.
keywords:
  - Netwrix Auditor
  - User Activity
  - Core Service
  - Duplicate status
  - UniqID
  - Agents.xml
  - NwUserActivitySvc
  - monitoring plan
products:
  - auditor
sidebar_label: 'Error: User Activity Core Service Has Been Already'
tags: []
title: 'Error: User Activity Core Service Has Been Already Launched'
knowledge_article_id: kA04u0000011167CAA
---

# Error: User Activity Core Service Has Been Already Launched

## Symptoms

The following symptoms are present in your Netwrix Auditor environment:

- Auditor prompts the following error in Health Log for your User Activity monitoring plan:

```text
Source: User Activity Audit Service
Event ID: 2001
The Netwrix Auditor User Activity Core Service has been already launched on this computer.
The computer is included in this or another monitoring plan
```

- The list of monitored computers in your User Activity monitoring plan states the **Duplicate** status for one or multiple servers.

![Duplicate status screenshot]./../0-images/ka0Qk0000004pqL_0EM4u000008M4JN.png)

- No monitoring data is available for the **Duplicate** servers.

## Causes

- The affected server is monitored by two separate monitoring plans.

> IMPORTANT: After performing the troubleshooting steps, make sure the server is included in a single User Activity plan.

- The affected server was previously monitored by a different monitoring plan, and it is now being added to a new monitoring plan.

## Resolution

Refer to the following steps to resolve the issue:

1. Remove the affected server from all existing User Activity monitoring plans. Allow Netwrix Auditor to uninstall the User Activity Core Service—in the monitoring plan screen, click **Edit Data Source** > **Monitored Computers** to track the Core Service status.

   > IMPORTANT: Verify the Netwrix Auditor User Activity Core Service is uninstalled on the affected server—review the list of installed apps on the server and uninstall, if still present.

2. On the Auditor host, run the following line in an elevated PowerShell instance to stop the User Activity service:

```powershell
Stop-Service -Name "NwUserActivitySvc"
```

3. On the affected server, start the Registry Editor and locate the following key:

```registry
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix\User Activity Video Reporter Agent
```

   ![Registry key screenshot]./../0-images/ka0Qk0000004pqL_0EM4u000008M4JS.png)

   Locate the `UniqID` value. Copy the value data and refer to it in the future steps—right-click the key and select **Modify...**. Once you copy the value, delete the `UniqID` value.

4. On the Auditor host, proceed to the following path to locate the `Agents.xml` document:

```text
%Working_Folder%\User Activity Video Reporter\Agents.xml
```

   Refer to the following default Working Folder path:

```text
%ProgramData%\Netwrix Auditor\
```

5. Open the `Agents.xml` document in a text editor. Locate the node containing the `UniqID` value copied from the affected server. Delete the parent node containing the `UniqID` value and save the changes.

6. On the Auditor host, run the following line in an elevated PowerShell instance to start the User Activity service:

```powershell
Start-Service -Name "NwUserActivitySvc"
```

7. Re-add the affected server to your User Activity monitoring plan. Allow Netwrix Auditor some time to install the Core Service and verify the new `UniqID` value is created by comparing it to the previously copied value.

## Related articles

- Uninstall Netwrix Auditor — Delete Netwrix Auditor User Activity Core Service · v10.7  
  https://docs.netwrix.com/docs/auditor/10_8

