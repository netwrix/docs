---
title: "Configure the Tanium Cloud integration"
sidebar_label: "Tanium"
description: "Create the Tanium Cloud sensor, package, and API token, configure the EDR provider, and enable bulk scanning in Netwrix Privilege Secure for Discovery."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: The old page told administrators to paste secureone_management.ps1 into the Tanium sensor and package, but the script isn't provided to customers. Supply the script (or a download) and decide how customers obtain it. Evidence: docker/shared/python/src/remediant/integrations/powershell/secureone_management.ps1 at v26.09.1-rc (internal repository path).

TODO: The old page named the sensor "NPS Admin Members", but the product default is "NPSD Admin Members" and the sensor name isn't editable in the UI or API. This page uses the defaults. Confirm. Evidence: docker/node/packages/lib-api-common/schemas/edrIntegrationsConfig/taniumCloudConfig.js (sensor_name, package_name).

TODO: Confirm the sensor settings table (result type, max sensor age, ignore case, split into columns) against the sensor that the product expects. Evidence: none.

TODO: Confirm the exact menu path of the Bulk Scans page in the interface. Evidence: docker/web/cloud/mgmt/config.js (url /mgmt/bulk-scans, title Bulk Scans).

TODO: Confirm the minimum Tanium API token permissions. The old page said "Full API access (or minimum required)". Evidence: none.

TODO: Confirm the supported Windows versions and the PowerShell requirements on target devices. Evidence: none.

TODO: Confirm that offline access management isn't supported with Tanium. Evidence: none (carried over from the old page).

TODO: Confirm the bulk scan scale statement (10,000 or more devices) and the monitoring thresholds that this page doesn't state. Evidence: none.
:::

The Tanium Cloud integration lets Netwrix Privilege Secure for Discovery scan Windows devices and manage local Windows accounts through Tanium's remote execution capabilities. The product doesn't need a direct network connection to the target devices.

## Supported use cases

| Use case | Description | Mode |
| --- | --- | --- |
| Privileged account discovery | Enumerate local administrator accounts on Windows systems | Scan, Protect |
| Account lifecycle management | Create, modify, and delete local Windows accounts | Protect |
| Password rotation | Change passwords automatically, with RSA encryption of the password in transit | Protect |
| Security compliance scanning | Gather system configuration and security posture data | Scan |
| Access control | Enable or disable local accounts based on policy | Protect |
| Group membership management | Add users to and remove users from local Windows groups | Protect |
| Bulk scanning | Scan an entire computer group in one operation | Scan |

## How the integration works

For a single device, the product:

1. Queries Tanium to find the target device and obtain a temporary group ID.
2. Creates an action that runs a PowerShell script with encrypted parameters.
3. Monitors the action until it completes.
4. Retrieves and parses the action logs.
5. Updates the device record.

For a bulk scan, the product:

1. Queries Tanium for the members of a computer group.
2. Creates one action that targets the whole group.
3. Monitors the action until it completes.
4. Parses the consolidated results.
5. Updates all device records in a batch.

## Prerequisites

### Privilege Secure for Discovery

- Release 26.06 or later.
- Network access from the server to your Tanium Cloud API endpoint.
- Tanium Cloud is available as an EDR provider by default. You don't need to enable a feature toggle.

### Tanium

- Tanium Cloud with API v2 access.
- Administrator permissions for the configuration.
- Content Set permissions (Base or a custom content set).
- Permission to create sensors and packages.
- The Tanium agent installed on the target Windows devices.

### Target devices

- A vendor-supported version of Windows or Windows Server.
- PowerShell 5.1 or later.
- The `Microsoft.PowerShell.LocalAccounts` module.
- A Tanium agent that is installed and communicating.

## Prepare Tanium Cloud

A Tanium administrator performs the following configuration. The names in this section must match exactly, because the product looks up the sensor and the package by name.

### Create the NPSD Admin Members sensor

1. In the Tanium Cloud console, go to **Administration > Content > Sensors**, and select **Create New Sensor**.
2. Configure the sensor properties.

   | Property | Value | Notes |
   | --- | --- | --- |
   | **Name** | `NPSD Admin Members` | Must match exactly (case-sensitive) |
   | Description | Administrator discovery sensor | Can be customized |
   | Content Set | Base or a custom set | Use the same content set as the package |
   | Category | Security | Recommended |
   | **Result Type** | Text | Required |
   | **Max Sensor Age** | 10 minutes | Minimum that Tanium recommends |
   | Max String Age | Disabled, or 86400 | Use a large value |
   | Max Strings | Disabled, or 10000 | Use a large value |
   | Ignore case in results | Disabled | Required |
   | Hide sensor | Disabled | The sensor must be visible |
   | Split into columns | Disabled | Required |

3. Set the script type for Windows to `PowerShell`, and paste the management script.
4. For other operating systems, set the script to `Disabled` or return an error message, such as `Not available on Linux`.
5. Select **Preview** on several Windows computers, verify that JSON results appear for most of them, and select **Save Sensor**.

:::warning[Needs dev input: remove before publishing]
TODO: The management script (secureone_management.ps1) isn't provided. See the note at the top of this page.
:::

### Enable the sensor for background collection

1. Go to **Modules > Interact > Overview > Settings**.
2. Find **NPSD Admin Members** in the sensor list, and select **Actions > Add**.
3. Preview the results to verify that JSON results appear, and select **Confirm**.
4. Optionally, select **Collect Now** to start collection immediately.

### Create the NPSD Management package

You need this package only for Protect mode (Just-In-Time Access) and Deny. For scan-only operations, skip this section.

1. Go to **Administration > Content > Packages**, and select **Create New Package**.
2. Configure the package properties.

   | Property | Value | Notes |
   | --- | --- | --- |
   | **Package Name** | `NPSD Management` | Must match exactly |
   | Display Name | Management package | Can be customized |
   | Content Set | Base or a custom set | Same as the sensor |
   | **Command** | `cmd.exe /d /c powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -NonInteractive -NoProfile -File expand_params.ps1 $0` | Required |
   | Command Timeout | 3 minutes | Adjust as needed |
   | Download Timeout | 10 minutes | Adjust as needed |
   | Ignore Action Lock | Disabled | Default |
   | Launch in process group | Enabled | Required |

3. Add the package files `expand_params.ps1` and the management script.

   The `expand_params.ps1` wrapper decodes the Base64-encoded parameters from Tanium and runs the decoded command:

   ```powershell
   param([string]$EncodedCommand)

   $decodedBytes = [System.Convert]::FromBase64String($EncodedCommand)
   $decodedCommand = [System.Text.Encoding]::UTF8.GetString($decodedBytes)

   Invoke-Expression $decodedCommand
   ```

4. Add one text parameter with the label `EncodedCommand`. Verify that the parameter appears as `$0`.
5. Review the settings, and select **Save Package**.

If Tanium numbers the parameter `$1`, change `$0` to `$1` in the command. Netwrix Support can help you set the matching package parameter offset in the product.

### Identify the computer groups

For standard scanning, use the **All Windows Computers** group or a custom group.

For bulk scanning, use an existing computer group or create one that contains the Windows devices to scan. Record the exact group name. A custom group such as `Managed Devices` that contains only the devices loaded in Privilege Secure for Discovery avoids unnecessary scans. See [Match the computer group to your inventory](#match-the-computer-group-to-your-inventory).

### Create an API token

1. Go to **Administration > Permissions > API Tokens**, and select **New API Token**.
2. Enter a name, such as `Privilege Secure Integration`.
3. Select the permissions that the integration requires.
4. Set an expiration that follows your security policy.
5. Copy the token to a secret manager. Tanium doesn't display the token again.

## Configure the EDR provider

1. In Privilege Secure for Discovery, go to **Configure > Server > EDR Provider Configuration**, and select **Add Provider**.
2. Select **Tanium Cloud**.
3. Enter the settings.

   | Field | Value |
   | --- | --- |
   | Configuration Name | A descriptive name, such as `Tanium Cloud production`. |
   | Remote Systems Management: Enable | Select **Enabled**. |
   | Use Proxy Configuration | Select **Enabled** if the server reaches Tanium through a proxy. |
   | API Base URL | The URL of your Tanium Cloud API, in the form `https://<customer-name>-api.cloud.tanium.com`. |
   | API Key | The API token from Tanium. |
   | Token Expiry | The expiration date of the API token. |

4. Select **Test Connection**, and verify that the connection succeeds.
5. Save the configuration.

### Configure rate limiting and connection options

The configuration also includes the following optional settings.

| Setting | Purpose |
| --- | --- |
| Skip Direct Connection | Connects through Tanium Cloud without first trying to reach the device directly. Enable this when the server can't reach the devices. |
| Hostname Fallback | Matches a device by host name only when the fully qualified domain name isn't found in Tanium. |
| Rate Limiting Enabled | Limits the API request rate to avoid overloading Tanium Cloud during bulk operations. |
| Rate Limit (requests/second) | The maximum requests per second. The default is 5.0. |
| Burst Capacity | The maximum requests in a short burst. The default is 10. |
| Max Wait Time (seconds) | The maximum time to wait for a rate-limit token. The default is 30.0. |

### Configure the devices

Configure each device in the interface or through the API.

| Setting | Value | Purpose |
| --- | --- | --- |
| Scan | Enabled | Background scanning |
| Protect | Disabled or Enabled | Disabled uses cached data. Enabled performs real-time operations. |
| Offline Access | Unmanaged | Not supported with Tanium |
| EDR Integration | The Tanium Cloud configuration | Selects the provider |

You can't delete an EDR provider configuration while it is assigned to a domain or a system.

## Configure bulk scanning

Bulk scanning scans all Windows devices in a Tanium computer group with one action, instead of scanning each device in turn. It reduces the number of Tanium API calls to a small, fixed number regardless of the number of devices, and it scales to environments with 10,000 or more devices.

### Match the computer group to your inventory

The bulk scan targets every device in the Tanium computer group. If Tanium contains more Windows devices than Privilege Secure for Discovery, the product scans the extra devices and discards their results. The scan still works, but it uses Tanium resources unnecessarily.

For example, if the **All Windows Computers** group contains 10,000 devices and 9,500 devices are loaded in the product, the bulk scan scans all 10,000 devices and processes results for 9,500.

To avoid the extra scans, create a custom Tanium computer group that contains only the devices loaded in the product, and use it as the bulk scan group. If the difference is small, you can use the default group.

### Enable bulk scanning

1. In the Tanium Cloud configuration, set **Enable Bulk Scan** to **Enabled**.
2. Enter the **Computer Group Name**. The group must exist in Tanium Cloud.
3. Optionally, adjust the following settings.

   | Setting | Description | Default |
   | --- | --- | --- |
   | Bulk Scan Timeout (seconds) | How long to wait for a bulk scan to complete | 600 |
   | Status Check Interval (seconds) | How often to check the status of a running bulk scan | 30 |
   | Bulk Scan Interval (hours) | The minimum time between automatic bulk scans. Set 0 to run on every scan cycle. | 4 |
   | Retry Failed Devices Individually | Retries devices that fail with execution errors, timeouts, or parse errors by using individual scans. Offline devices aren't retried. | Disabled |

4. Save the configuration.

Bulk scans run automatically as part of the regular scan cycle. They run before individual device scans, the product removes successfully scanned devices from the individual scan queue, and devices that fail return to individual scanning.

Bulk Scan is an inventory path. It doesn't replace the standard per-device path for Protect, Deny, Just-In-Time Access, or password-management operations.

### Monitor bulk scans

Use the **Bulk Scans** page in the management area of the interface to review scan progress, success rate, and failures. Review the counts of completed devices, offline devices, and devices with no match after each run. If many devices fail, check the health of the Tanium agent on those devices, the API token, and the network path to Tanium Cloud.

## Validate the integration

### Validate Tanium

1. Sensor test: in Tanium **Interact**, ask the question `Get NPSD Admin Members from all machines`, and verify that JSON results appear for Windows machines.
2. Package test, for Protect mode: go to **Actions > Deploy Action**, select the **NPSD Management** package, target a test machine, enter the test parameter `Get-Date`, and verify that the action completes.
3. API token test: run the following command, and verify that it returns the sensor list.

   ```bash
   curl -H "session: <token>" \
     https://<customer-name>-api.cloud.tanium.com/api/v2/sensors
   ```

### Validate Privilege Secure for Discovery

1. In **Configure > Server > EDR Provider Configuration**, select the Tanium Cloud configuration, select **Test Connection**, and verify that the connection succeeds.
2. Scan one device, and verify that its local administrators are discovered.
3. If you enabled bulk scanning, run a scan cycle, and verify that multiple devices update.
4. If you use Protect mode, grant access to a test user, and verify that the user is added. Rotate a test password, and verify that the password changes.

## Troubleshoot the integration

| Symptom | Cause and solution |
| --- | --- |
| Sensor not found | The sensor name doesn't match. Verify that the sensor is named exactly `NPSD Admin Members` (case-sensitive) and that it is in the content set that the product uses. |
| Bulk scan completes but no devices update | The computer group name doesn't match, or the group is empty. Verify that the group name in Tanium matches the **Computer Group Name** setting exactly and that the group contains Windows devices. |
| Action timeouts or API timeout errors | Network issues or large result sets. Increase **Bulk Scan Timeout (seconds)**, or contact Netwrix Support to adjust the single-device action timeout. |
| Package parameter error (`$0` or `$1`) | Tanium numbers the first package parameter inconsistently. Check the parameter number in the package and adjust the command and the package parameter offset to match. |
| Devices not found in Tanium | The device is registered in Tanium without its domain suffix. Enable **Hostname Fallback**. |

## Security considerations

- The product encrypts API tokens at rest.
- Passwords use session-specific RSA key pairs.
- All API communication uses Transport Layer Security (TLS).
- The product doesn't log sensitive data in plain text.
- The product supports an HTTP proxy with authentication.
