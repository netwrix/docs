---
title: "Agent Service Fails to Start Due to Service Timeout"
description: "Agent Service Fails to Start Due to Service Timeout"
sidebar_position: 70
---

# Agent Service Fails to Start Due to Service Timeout

If an Agent service fails to start due to a service timeout, setting the NT Service timeout higher
than the default of 30 seconds typically resolves this issue. Windows attempts to get the
certification revocation list (which must time out when there is no internet access) in addition to
the normal service start time that may exceed the default of 30 seconds.

Follow the steps to modify the ServicesPipeTimeout value.

**Step 1 –** Open the Registry Editor.

- From the Windows Start menu, click **Run**.
- In the Run window's open field, type **regedit**.
- Click **OK**.

**Step 2 –** In the Computer pane, navigate to the following registry folder:

- HKEY_LOCAL_MACHINE > SYSTEM > CurrentControlSet > Control

**Step 3 –** In the right pane, select **ServicesPipeTimeout**.

:::note
If the ServicesPipeTimeout entry does not exist, you must create it. See the
[Create the ServicesPipeTimeout Entry](#create-the-servicespipetimeout-entry) topic for additional
information.
:::


**Step 4 –** Right-click **ServicesPipeTimeout** and click **Modify**. This opens the Edit Value
window.

**Step 5 –** Select the **Decimal** radio button.

**Step 6 –** In the Value data field, enter **60000** and click **OK**. This value represents the
time in milliseconds before a service times out.

**Step 7 –** Restart the computer.

The ServicesPipeTimeout value is now modified.

## Create the ServicesPipeTimeout Entry

Follow the steps to create the ServicesPipeTimeout entry using the Registry Editor.

**Step 1 –** In the Edit menu, click **New** and then select **DWORD Value**.

**Step 2 –** Type **ServicesPipeTimeout** and press **Enter**.

The ServicesPipeTimeout entry is now added.

See the
[Best Practices and Troubleshooting](/docs/threatprevention/7.4/troubleshooting/overview.md)
topic for additional information.
