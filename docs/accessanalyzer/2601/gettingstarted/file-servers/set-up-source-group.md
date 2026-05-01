---
title: "Set Up File Server Source Group"
description: "Configure a file server source group in Access Analyzer"
sidebar_position: 3
---

# Set Up File Server Source Group

1. Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.
2. Select **File Server** and click **Next**.
3. Enter a **Source Group Name**.
4. Select a service account from the **Service Account** dropdown, or click **+** to create one inline. See [Service Accounts](../../configurations/service-accounts/overview.md) for details.
5. Optionally, enter a **Domain** name to apply to all file servers in this source group. Leave blank if your servers are in a workgroup or if you want to specify credentials without a domain prefix.
6. Click **Add** under **File Servers** and enter the hostname or IP address of each file server to include. Click **Done** when finished.
7. Click **Test Connection** to verify connectivity. Each server displays a **Connected** or **Failed** status. Resolve any failures before proceeding.
8. Click **Next**.
9. Enable the scan types you want to run:

   **Access scan:**

   - Toggle **Access** to enable scanning of file permissions and access controls.
   - Under **Include Shares**, select **All shares** to scan every share on the server, or **Custom selection** to specify a list of shares to include.
   - Optionally, add share paths to the **Exclude Shares** field to skip specific locations. Wildcards are supported (for example, `\\fileserver\*\temp*`).
   - Select **Automatically enumerate hidden shares** to include hidden shares in the scan. Use the **Exclude Hidden Shares** field to exclude specific hidden shares (for example, `ADMIN$, C$, IPC$`).
   - Select **Include file-level permission data** to collect permissions at the file level in addition to folder level. This increases scan time.
   - Set **Workers** to control the number of concurrent threads used during enumeration. The default is `3`. The valid range is `1–20`.
   - Set **Scan Depth** to limit how many directory levels deep the scan traverses. The default is `50`.

   **Sensitive Data scan:**

   - Toggle **Sensitive Data** to enable scanning of file contents for sensitive data patterns.
   - Configure share selection using the same options as the Access scan above.
   - Select **Inherit from Global Settings** to use the sensitive data types configured at the system level, or disable this option to configure types for this source group specifically.
   - If configuring types directly, enable each sensitive data type you want to detect and assign a classification label.
   - Select **Run OCR** to scan images, screenshots, and scanned documents for sensitive text using optical character recognition (OCR). This increases processing time.

10. Under **Scanner Location**, select **System scanner** to run scans from the Access Analyzer service, or select **Custom scanner** to use a deployed scanner. See [Scanners](../../configurations/source-groups/scanners/overview.md) for details.
11. Under **Scan Schedule**, select when to run the scan:
    - **Now** — Starts the scan immediately after setup completes.
    - **At** — Runs the scan once at a specific date and time.
    - **Advanced** — Runs the scan on a recurring schedule defined by a cron expression.
12. Click **Complete Setup**.

## What happens next

Access Analyzer creates the source group and a scan for each file server you added. If you selected **Now**, the enabled scans start immediately.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

## Edit a source group

To modify an existing file server source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens with your current configuration pre-populated. You can update the source group name, service account, file servers, and scan settings.
