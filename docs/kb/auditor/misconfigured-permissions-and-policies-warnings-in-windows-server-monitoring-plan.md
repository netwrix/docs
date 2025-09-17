---
description: >-
  This article lists common Health Log events related to misconfigured
  permissions and audit/policy settings in Windows Server monitoring plans,
  explains probable causes, and provides step-by-step resolutions to correct the
  configurations on target servers.
keywords:
  - Windows Server
  - audit permissions
  - Remote Registry
  - event log
  - gpresult
  - audit policies
  - Netwrix Auditor
  - monitoring plan
products:
  - auditor
sidebar_label: Misconfigured Permissions and Policies Warnings in
tags: []
title: "Misconfigured Permissions and Policies Warnings in Windows Server Monitoring Plan"
knowledge_article_id: kA00g000000H9bMCAS
---

# Misconfigured Permissions and Policies Warnings in Windows Server Monitoring Plan

## Symptoms

One of the following events is prompted in Health Log in your Netwrix Auditor instance:

```
Windows Registry audit permissions are not enabled for this server. Adjust Windows Registry audit permissions automatically or manually.
```

```
The Registry data provider failed to get the information on registry key %key% due to the following error: Access is denied.
```

```
Unable to configure the following policies due to a conflict: %audit_policy%
```

```
Unable to configure the following audit policies on this computer because it is a domain controller: %audit_policy%
```

```
The following event log settings may lead to incorrect or incomplete data in reports: %setting%
```

```
Security log overwrites occurred on this computer since the last collection. Please increase the maximum size of the %affected% event log.
```

```
Data provider %name% failed during data collection from server %name% due to the following error: The Remote Registry service is not running.
```

```
Data provider %name% failed during data collection from server %name% due to the following error:
The interface is unknown. (Exception from HRESULT: 0x800706B5).
```

```
Data provider %name% failed during data collection from server %name% due to the following error:
The network path was not found. (Exception from HRESULT: 0x80070035).
```

```
The following error occurred when collecting data from the Application log: Failed to open log %affected_log%.
Error details: The interface is unknown. (Error number: 0x800706B5).
```

```
The following error occurred when collecting data from the Application log: Failed to open log %affected_log%.
Error details: The network path was not found. (Error number: 0x80070035)
```

```
Unable to configure the following policies due to a conflict: %setting%.
```

## Causes

The audit settings in the target server are misconfigured. The affected server is stated in the **Item** line of the event.

## Resolutions

> **IMPORTANT:** To review the possible conflicts in your environment, use the `gpresult` line in elevated Command Prompt. Learn more in gpresult · Microsoft: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/gpresult

> **NOTE:** To disable the automatic configuration of audit settings in your Windows Server monitoring plan, navigate to **Monitoring Plans** > select the affected monitoring plan and click **Edit** > click **Edit data source** in the right pane > uncheck the **Adjust audit settings automatically** checkbox > click **Save**.

Review the resolutions to ensure the settings are configured correctly in your target servers.

- Verify both the `Remote Registry` and `Windows Management Instrumentation` services are set up to have the **Automatic** startup type. Refer to the following article for additional information: Windows Server − Enable Remote Registry and Windows Management Instrumentation Services · v10.6: https://docs.netwrix.com/docs/auditor/10_8

- Verify the Windows Registry audit settings are configured correctly − refer to the following article for additional information on the manual setup: Windows Server − Configure Windows Registry Audit Settings · v10.6: https://docs.netwrix.com/docs/auditor/10_8

- Verify the local audit policies are configured correctly − refer to the following article for additional information on the manual setup: Windows Server − Configure Local Audit Policies · v10.6: https://docs.netwrix.com/docs/auditor/10_8 you can set up the advanced audit policies − refer to the following article for additional information on the manual setup: Windows Server − Configure Advanced Audit Policies · v10.6: https://docs.netwrix.com/docs/auditor/10_8

- Verify the event log size and retention method settings in target servers − refer to the following article for additional information: Windows Server − Adjusting Event Log Size and Retention Settings · v10.6: https://docs.netwrix.com/docs/auditor/10_8

## Related articles

- gpresult · Microsoft: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/gpresult
- Windows Server − Enable Remote Registry and Windows Management Instrumentation Services · v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Windows Server − Configure Windows Registry Audit Settings · v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Windows Server − Configure Local Audit Policies · v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Windows Server − Configure Advanced Audit Policies · v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Windows Server − Adjusting Event Log Size and Retention Settings · v10.6: https://docs.netwrix.com/docs/auditor/10_8
