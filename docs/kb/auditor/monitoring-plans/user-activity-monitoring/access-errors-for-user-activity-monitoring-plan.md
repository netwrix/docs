---
description: >-
  Shows how to resolve "Requested registry access is not allowed" and related
  access errors for a User Activity monitoring plan by checking Remote Registry
  service configuration and winreg registry permissions.
keywords:
  - user activity
  - UAVR
  - access denied
  - winreg
  - Remote Registry
  - HKEY_LOCAL_MACHINE
  - registry permissions
  - monitoring plan
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Access Errors for User Activity Monitoring Plan
tags: []
title: "Access Errors for User Activity Monitoring Plan"
knowledge_article_id: kA04u00000110zkCAA
---

# Access Errors for User Activity Monitoring Plan

## Symptom

User Activity (UAVR) monitoring plan generates errors on missing access permissions:

```text
Requested registry access is not allowed
```

```text
Cannot open HKEY_Local_Machine: error while opening key
```

```text
Access is denied
```

## Causes

- Misconfigured Remote Registry service.
- Misconfigured permissions for the `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg` registry subkey on the affected client.

## Resolution

- Review the Remote Registry service configuration. Refer to the following article for additional information on configuration steps: Configure IT Infrastructure — Windows Event Logs.

- Review the permissions to the `SYSTEM\CurrentControlSet\Control\winreg` registry subkey. Refer to the following steps to configure the permissions for the affected client:

  1. Run Registry Editor on the affected client.
  2. Either expand the registry nodes in the left pane to reach the subkey, or enter the following path in the corresponding path window:

     ```text
     Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg
     ```

  3. Right-click **winreg**, and click **Permissions**.
  4. Click **Add**, and enter **local service** in the **Enter the object names to select**. Click **OK** to save the changes.
  5. Select the **LOCAL SERVICE** user and check the **Read — Allow** checkbox under the **Permissions** section. Click **Apply** to save the changes.
  6. Restart the client.
