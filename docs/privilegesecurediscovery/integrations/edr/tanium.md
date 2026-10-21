---
title: "Configure the Tanium Cloud integration"
sidebar_label: "Tanium"
description: "Create the Tanium Cloud sensor, package, and API token, add the EDR provider, and enable bulk scanning in Netwrix Privilege Secure for Discovery."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Decide how customers obtain the management script that goes into the Tanium sensor and package. The script isn't published, and the product doesn't create the sensor or package for you by default (the `maintain_sensor` and `maintain_package` options default to off and have no setting in the interface). Evidence: docker/shared/python/src/remediant/integrations/powershell/secureone_management.ps1 (560 lines); windows/connector/strategies/tanium/config.py:58-59.

TODO: Confirm the minimum Tanium API token permissions and persona. The old page said "Full API access (or minimum required)". Evidence: none.

TODO: Confirm the supported Windows versions and PowerShell requirements on target devices (PowerShell 5.1 and the `Microsoft.PowerShell.LocalAccounts` module came from the old page). Evidence: none.

TODO: Confirm that Offline Access Management isn't supported with Tanium. The old page said so. Evidence: none found in the Tanium strategy code.

TODO: Confirm the single-device action timeout that the product uses. The schema default is 1200 seconds and the code default is 120 seconds. Evidence: node/packages/lib-api-common/schemas/edrIntegrationsConfig/taniumCloudConfig.js (action_timeout_seconds 1200); windows/connector/strategies/tanium/config.py:62 (2 minutes).
:::

The Tanium Cloud integration lets Netwrix Privilege Secure for Discovery scan Windows systems and manage local administrator access through Tanium. The product doesn't need a direct network connection to the target devices.

The integration uses two objects in Tanium that you create:

- A sensor named `NPSD Admin Members` that reports the members of the local Administrators group. The scan reads the sensor value.
- A package named `NPSD Management` that runs the management script. The product starts it as a Tanium action to change access on a device. You need the package only if you use just-in-time access (JITA).

For a single device, the product finds the device in Tanium, reads the sensor value or starts an action, waits for the action to finish, and parses the action log. For a bulk scan, the product starts one action against a whole computer group and parses the combined results.

For a system that uses this integration, the product scans through Tanium first. If that scan fails, it tries a direct connection.

## Prerequisites

In Privilege Secure for Discovery:

- Tanium Cloud appears in the provider list by default. You don't need to turn on a feature.
- HTTPS access (TCP 443) from the server to your Tanium Cloud API host. If the server uses a proxy, configure it under **Configure** > **Server** > **Proxy Configuration**.

In Tanium Cloud:

- An account that can create sensors, packages, and API tokens.
- The Tanium client on the target Windows devices, checking in to Tanium. The product rejects a device that hasn't checked in within the last 30 minutes.
- An action group named `Default - All Computers`. The product starts every action in that group.

## Create the sensor

The product looks up the sensor by name, so the name must match exactly.

1. In the Tanium Cloud console, select **Administration** > **Content** > **Sensors**, and select **Create New Sensor**.
2. Enter the properties in the following table.

   | Property | Value |
   | --- | --- |
   | **Name** | `NPSD Admin Members` (case-sensitive) |
   | **Result Type** | Text |
   | **Max Sensor Age** | 10 minutes. The product expects 600 seconds. |
   | **Ignore case in results** | Disabled |
   | **Hide sensor** | Disabled |
   | **Split into columns** | Disabled |

3. For Windows, set the script type to **PowerShell**, and paste the management script.
4. For other operating systems, set the script to **Disabled**.
5. Select **Preview** on a few Windows devices, confirm that JSON results appear, and select **Save Sensor**.

### Collect the sensor in the background

1. Select **Modules** > **Interact** > **Overview** > **Settings**.
2. Find **NPSD Admin Members**, and select **Actions** > **Add**.
3. Preview the results, and select **Confirm**.
4. Optionally, select **Collect Now**.

## Create the package

Create the package only if you use JITA.

1. Select **Administration** > **Content** > **Packages**, and select **Create New Package**.
2. Enter the properties in the following table.

   | Property | Value |
   | --- | --- |
   | **Package Name** | `NPSD Management` (case-sensitive) |
   | **Command** | `cmd.exe /d /c powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -NonInteractive -NoProfile -File expand_params.ps1 $0` |
   | **Command Timeout** | 60 seconds |

3. Add two files: the management script and `expand_params.ps1`. The `expand_params.ps1` wrapper accepts one JSON argument, runs the management script with the parameters in that argument, and wraps the output in `NPSD_OUTPUT_START` and `NPSD_OUTPUT_END` markers:

   ```powershell
   # NPSD Management: expand_params.ps1
   $argString = [System.Uri]::UnescapeDataString($args[0])
   $commandInfo = $argString | ConvertFrom-Json
   $scriptPath = $commandInfo.script_path
   $paramInfo = $commandInfo.params

   $params = @{ }
   foreach ($property in $paramInfo.PSObject.Properties) {
       $params[$property.Name] = $property.Value
   }

   Write-Output "Running: powershell.exe -NonInteractive -NoProfile -ExecutionPolicy Bypass $scriptPath ..."
   $out = & powershell.exe -NonInteractive -NoProfile -ExecutionPolicy Bypass $scriptPath @params

   Write-Output "NPSD_OUTPUT_START"
   Write-Output $out
   Write-Output "NPSD_OUTPUT_END"

   exit $LASTEXITCODE
   ```

4. Add one text parameter with the label `EncodedCommand`. Confirm that the parameter appears as `$0` in the command.
5. Select **Save Package**.

Tanium doesn't always number the first package parameter `$0`. If your console numbers it `$1`, change the command to use `$1`, and contact Netwrix Support to set the matching package parameter offset in the product.

## Create an API token

1. In Tanium Cloud, select **Administration** > **Permissions** > **API Tokens**, and select **New API Token**.
2. Enter a note that describes the token, such as `Privilege Secure for Discovery`.
3. Set an expiration that follows your security policy.
4. Select the permissions that the integration needs to read sensors, read computer groups, run questions, and create and run actions.
5. Copy the token to a secret manager. Tanium doesn't show it again.

See the Tanium [authentication documentation](https://developer.tanium.com/site/global/docs/how_tos/auth/index.gsp) for the token options.

## Add the provider configuration

1. In Privilege Secure for Discovery, select **Configure** > **Server**.
2. In **EDR Provider Configuration**, select **Add Provider**.
3. Set **Provider** to **Tanium Cloud**.
4. Enter a **Configuration Name**.
5. Under **Remote Systems Management**, set **Enable** to **Enabled**.
6. Set **Use Proxy Configuration** to **Enabled** if the server reaches Tanium through a proxy.
7. Enter the **API Base URL**, in the form `https://<customer-name>-api.cloud.tanium.com`.
8. Enter the **API Key**, the token from Tanium.

   ![The Tanium Cloud provider form with the Use Proxy Configuration, API Base URL, and API Key fields](/images/privilegesecurediscovery/integrations/edr-tanium-credentials.webp)

9. Enter the **Token Expiry**, the expiration date of the token. Privilege Secure for Discovery can't read the date from Tanium.
10. Select **Test Connection**. The product shows `<name> EDR Integration configuration validated successfully.` when the connection works.
11. Select **Save**.

The provider list shows a warning label when the token expires within 14 days, and a red label within 5 days. Administrators also see an alert after sign-in when a token expires within 5 days. Create a new token and update the configuration before the old one expires.

### Set connection options

| Setting | Default | Purpose |
| --- | --- | --- |
| **Skip Direct Connection** | Disabled | Connects through Tanium Cloud without first trying to reach the device. Enable it when the server can't reach the devices. |
| **Hostname Fallback** | Disabled | Matches a device by host name when Tanium doesn't find its fully qualified domain name. |
| **Rate Limiting Enabled** | Enabled | Limits API requests during bulk operations. |
| **Rate Limit (requests/second)** | 5.0 | The maximum sustained request rate. |
| **Burst Capacity** | 10 | The maximum number of requests in a short burst. |
| **Max Wait Time (seconds)** | 30.0 | The longest that a request waits for a rate limit slot. |

## Assign the configuration

A configuration has no effect until you assign it. You can assign it in three places:

- As the **EDR Configuration** of a domain. Select **Configure** > **Server**, and edit the domain.
- To one system. Select **Access** > **Grant Access**, select the Windows system, and choose the configuration in the **EDR Integration** list. Only administrators see this list.
- To many systems. Use the **Set EDR Configuration** bulk action. See [Bulk actions](../../admin/systems/bulk-actions.md).

You can't delete a configuration while a domain or a system uses it. The product shows `You cannot delete this EDR configuration as it is in use on one or more domains` (or `systems`). Assign a different configuration or **Disabled** first.

## Configure bulk scanning

A bulk scan reads every device in a Tanium computer group with one action instead of scanning each device in turn. The number of Tanium API calls stays small no matter how many devices the group holds.

The scan targets every device in the group. If the group holds more Windows devices than Privilege Secure for Discovery manages, the product scans the extra devices and discards their results. For example, if **All Windows Computers** has 10,000 devices and the product manages 9,500 of them, the bulk scan reads all 10,000 and keeps 9,500. To avoid the extra scans, create a Tanium computer group that holds only the managed devices.

1. Edit the Tanium Cloud configuration.
2. Set **Enable Bulk Scan** to **Enabled**.
3. Enter the **Computer Group Name**. The group must exist in Tanium Cloud. The form requires a name when bulk scanning is on.
4. Adjust the optional settings.

   ![The Bulk Scan section of the Tanium Cloud provider form](/images/privilegesecurediscovery/integrations/edr-tanium-bulk-scan.webp)

   | Setting | Default | Purpose |
   | --- | --- | --- |
   | **Bulk Scan Timeout (seconds)** | 600 | How long to wait for a bulk scan to finish. |
   | **Status Check Interval (seconds)** | 30 | How often to check a running bulk scan. |
   | **Bulk Scan Interval (hours)** | 4 | The minimum time between automatic bulk scans. Enter 0 to run on every scan cycle. |
   | **Retry Failed Devices Individually** | Disabled | Retries devices that fail with execution errors, timeouts, or parse errors by scanning them one at a time. The product skips offline devices. |

5. Select **Save**.

Bulk scans run as part of the regular scan cycle, before the per-device scans. The product removes devices that a bulk scan read from the per-device queue, and devices that fail return to per-device scanning. A bulk scan covers inventory only. Protect, deny, and JITA operations still use the per-device path.

### Monitor bulk scans

Select **Management** > **Bulk Scans** to see the history of bulk scans, including start and end times, device counts, duration, and status. A scan has the status Completed, Partial, or Failed. Each device in a scan has one of the following results.

| Result | Meaning |
| --- | --- |
| `SUCCESS` | The device returned valid administrator data. |
| `OFFLINE` | The device is in the group but didn't respond. |
| `EXECUTION_FAILED` | The script ran and returned an error. |
| `TIMEOUT` | The device started but didn't finish in time. |
| `PARSE_ERROR` | The product couldn't parse the response. This can mean a script version mismatch. |

If many devices fail, check the Tanium client on those devices, the API token, and the network path to Tanium Cloud.

## Validate the integration

1. In Tanium **Interact**, ask `Get NPSD Admin Members from all machines`, and confirm that JSON results appear for Windows devices.
2. To test the package, deploy **NPSD Management** to a test device with the parameter `Get-Date`, and confirm that the action completes.
3. In Privilege Secure for Discovery, select **Test Connection** on the configuration.
4. Scan one system that uses the configuration, and confirm that its local administrators appear.

## Troubleshoot the integration

| Symptom | Cause and fix |
| --- | --- |
| `No matches for computer name '<name>'` | Tanium doesn't know the device by its fully qualified domain name. Enable **Hostname Fallback**. |
| `Computer <name> has not checked in within 30 minutes` | The Tanium client on the device is offline or not reporting. Check the client. |
| `Sensor 'NPSD Admin Members' has no results for computer` or `results are unavailable` | Tanium hasn't collected the sensor on the device yet. Enable background collection, and select **Collect Now**. |
| A package parameter error | Tanium numbered the first parameter `$1` instead of `$0`. See [Create the package](#create-the-package). |
| A bulk scan finishes but no devices update | The computer group name doesn't match, or the group is empty. Compare **Computer Group Name** with the group in Tanium. |
| `Circuit breaker is open` in the logs | Repeated Tanium API failures paused bulk scans for 60 seconds. Fix the cause, then wait for the next scan cycle. |
| Timeouts during a bulk scan | Increase **Bulk Scan Timeout (seconds)**, or ask Netwrix Support about the single-device action timeout. |
