---
title: "Configure the Tanium Cloud integration"
sidebar_label: "Tanium"
description: "Create the Tanium Cloud sensor, package, and API token, add the EDR provider, and enable bulk scanning in Netwrix Privilege Secure for Discovery."
sidebar_position: 40
---

The Tanium Cloud integration lets Netwrix Privilege Secure for Discovery scan Windows systems and manage local administrator access through Tanium. The product doesn't need a direct network connection to the target devices.

The integration uses two objects in Tanium:

- A sensor named `NPSD Admin Members` that reports the members of the local Administrators group. The scan reads the sensor value.
- A package named `NPSD Management` that runs the management script. The product starts it as a Tanium action to change access on a device. Bulk scans and just-in-time access (JITA) require the package.

For a single device, the product finds the device in Tanium, reads the sensor value or starts an action, waits for the action to finish, and parses the action log. For a bulk scan, the product starts one action against a whole computer group and parses the combined results.

Scheduled scans of a system that uses this integration go through Tanium first. If that scan fails, the product tries a direct connection. For a refresh that you start, the order depends on the **Skip Direct Connection** setting. See [Set connection options](#set-connection-options).

Start with one test system, and confirm its results before you enable bulk scanning for a group.

## Prerequisites

In Privilege Secure for Discovery:

- Tanium Cloud appears in the provider list by default from release 26.06. You don't need to turn on a feature. If it's missing, contact Netwrix Support.
- The Scan account and directory configuration that the product needs to scan Windows systems. These requirements still apply when you enable **Skip Direct Connection**.
- HTTPS access (TCP 443) from the server to your Tanium Cloud API host. If the server uses a proxy, configure it under **Configure** > **Server** > **Proxy Configuration**.

In Tanium Cloud:

- An account that can create sensors, packages, and API tokens.
- The Tanium client on the target Windows devices, checking in to Tanium. The product rejects a device that hasn't checked in within the last 30 minutes.
- An action group named `Default - All Computers`. The product starts every action in that group.
- On the target Windows devices, the management script requires the `Microsoft.PowerShell.LocalAccounts` module, version 1.0.0 or later. The package starts `powershell.exe`, so use 64-bit Windows PowerShell on 64-bit Windows. The product doesn't specify supported Windows versions.

### Check device names

The product finds a device in Tanium by its fully qualified domain name (FQDN). Before you assign the integration, confirm that each system in the product matches one Tanium device.

| Directory model | What to check |
| --- | --- |
| Active Directory (AD) only | The system represents the intended AD computer, and its FQDN matches the correct Tanium device. |
| Microsoft Entra ID only | The imported device exists in the product, and you know its name in Tanium. A Microsoft Entra ID tenant domain isn't always the DNS suffix of the device. |
| AD and Microsoft Entra ID hybrid | Both synchronizations resolve to one system, and its FQDN identifies the same Tanium device. |

Resolve duplicate records and repeated host names first. Exclude domain controllers from the first test and from the bulk scan group. For directory setup, see [Microsoft Entra ID integration](../microsoft-entra-id/overview.md).

## Download the scripts

The product has no setting that creates the sensor or the package for you. Download the two scripts, and use them to create the objects in the following sections. The product looks up each object by name, so the names must match exactly.

| File | Use |
| --- | --- |
| [`secureone_management.ps1`](/files/privilegesecurediscovery/tanium/secureone_management.ps1) | The management script. Paste its contents into the sensor, and upload the file to the package. |
| [`expand_params.ps1`](/files/privilegesecurediscovery/tanium/expand_params.ps1) | The wrapper that the package runs. Upload the file to the package. |

Use both files together, and don't change their contents.

### What the scripts do

`secureone_management.ps1` runs on the Windows device. It requires the `Microsoft.PowerShell.LocalAccounts` module, version 1.0.0 or later. It takes a target and an action, and it returns structured JSON. With no parameters, it returns the members of the built-in Administrators group (SID `S-1-5-32-544`), which is what the sensor uses. When the product starts the package, it passes the target and action as parameters. The script supports the following targets.

| Target | Actions |
| --- | --- |
| `LocalGroup` | `MemberList`, `MemberAdd`, and `MemberRemove` for a local group, the built-in Administrators group by default. |
| `LocalUser` | `List`, `Show`, `Create`, `Rename`, `Enable`, `Disable`, `SetPassword`, and `Remove` for local user accounts. |
| `General` | `TestPrint`, `GenerateKeys`, and `RemoveOldTempFiles`. The product uses these to set up password encryption and to remove temporary files. |

`expand_params.ps1` is the wrapper that the package command runs. It accepts one JSON argument from the product, runs `secureone_management.ps1` with the parameters in that argument, and wraps the output in `NPSD_OUTPUT_START` and `NPSD_OUTPUT_END` markers. The product reads the result between the markers.

### Verify the downloaded files

1. On a Windows device, run the following commands in the folder that holds the files.

   ```powershell
   Get-FileHash .\expand_params.ps1 -Algorithm SHA256
   Get-FileHash .\secureone_management.ps1 -Algorithm SHA256
   ```

2. Compare each result with the following values.

   ```text
   14467f0bc53bb822d70aa6bcc44bdd58fab509b493d4d7794f7c4aa9fffe613c  expand_params.ps1
   edd266bc421f4b2938e66b6b8c889ad8c9a078e63c6c214b7a7d20610f60d10a  secureone_management.ps1
   ```

The management script uses Windows (CRLF) line endings. If you change them, the hash changes.

If you already created the sensor or package, back up their definitions and files before you replace the content. The product doesn't update existing sensor or package content.

## Create the sensor

1. In the Tanium Cloud console, select **Administration** > **Content** > **Sensors**, and select **Create New Sensor**.
2. Enter the properties in the following table.

   | Property | Value |
   | --- | --- |
   | **Name** | `NPSD Admin Members` (case-sensitive) |
   | **Content Set** | `Default` |
   | **Result Type** | Text |
   | **Max Sensor Age** | 10 minutes. The product expects 600 seconds. |
   | **Ignore case in results** | Disabled |
   | **Hide sensor** | Disabled |
   | **Split into columns** | Disabled |

3. For Windows, set the script type to **PowerShell**, and paste the complete contents of `secureone_management.ps1`. Don't add arguments.
4. For other operating systems, set the script to **Disabled**.
5. Select **Preview** on one test Windows device, confirm that JSON results appear, and select **Save Sensor**.

### Collect the sensor in the background

Enable collection in Tanium Data Service so that the product can read cached sensor values.

1. In Tanium, open the sensor collection settings for Tanium Data Service. The location depends on your Tanium version. In older versions, select **Modules** > **Interact** > **Overview** > **Settings**. See the Tanium documentation for your tenant.
2. Find **NPSD Admin Members**, and register it for collection. In older versions, select **Actions** > **Add**.
3. Preview the results, and select **Confirm**.
4. Optionally, select **Collect Now**.

Allow collection to refresh after membership changes on a device before you compare results.

## Create the package

Bulk scans and JITA require the package.

1. Select **Administration** > **Content** > **Packages**, and select **Create New Package**.
2. Enter the properties in the following table.

   | Property | Value |
   | --- | --- |
   | **Package Name** | `NPSD Management` (case-sensitive) |
   | **Command** | `cmd.exe /d /c powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -NonInteractive -NoProfile -File expand_params.ps1 $0` |
   | **Content Set** | `Default` |
   | **Command Timeout** | 60 seconds |

3. Upload both files with their original names: `expand_params.ps1` and `secureone_management.ps1`.

4. Add one text parameter with the label `EncodedCommand`. Confirm that the parameter appears as `$0` in the command. Leave the default value empty.
5. Select **Save Package**.

The product supplies the parameter value as JSON when it starts the package. Don't enter a command or a Base64 string in the parameter, and don't change `$0` in the command.

## Create an API token

1. In Tanium Cloud, select **Administration** > **Permissions** > **API Tokens**, and select **New API Token**.
2. Enter a note to describe the token, such as `Privilege Secure for Discovery`.
3. Set an expiration that follows your security policy. If your Tanium tenant restricts the source address of a token, allow the outbound address of the server or its proxy.
4. Create the token for a dedicated integration identity with the permissions in the following table. The product calls the Tanium Gateway GraphQL API for endpoints, computer groups, sensors, questions, packages, and actions, and the Tanium REST API to look up packages and sensors by name.

   | Resource | Required access |
   | --- | --- |
   | API connection | Read basic server information. |
   | Sensor and endpoint data | Read the `NPSD Admin Members` sensor, the endpoint identity data, and the collected results. |
   | Questions | Ask questions. The product uses them to find the target computer group and its members. |
   | Packages and content | Read the `NPSD Management` package and its content set. |
   | Groups and targeting | Read the action group, and for bulk scans, the computer group. |
   | Package actions | Deploy the package to the intended computers, and read action status, logs, and results. |

   Run the connection test and the first scan with this identity, because its permissions can differ from your administrator account. The action group `Default - All Computers` isn't the same as the computer group for bulk scans. The action group sets which computers the identity can run actions on, and the computer group selects the devices to scan. The interface has no setting for the action group or the content set.
5. Copy the token to a secret manager. Tanium doesn't show it again.
6. Get the API host from your Tanium administrator. It can differ from the host of the Tanium console. Use the host exactly as supplied, with `https://` and without a `/api/v2` suffix.

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

9. Enter the **Token Expiry**, the expiration date of the token. Privilege Secure for Discovery can't read the date from Tanium. This value doesn't extend or rotate the token.
10. Select **Test Connection**. The product shows `<name> EDR Integration configuration validated successfully.` when the connection works. This test checks only that the API is reachable and that the token is valid. It doesn't check the sensor, the package, the computer group, or action deployment.
11. Select **Save**.

The product shows a badge and warns administrators when they sign in if the token expires in 5 days or less. See [Provider tokens that expire](./overview.md#provider-tokens-that-expire). Create a new token and update the configuration before the old one expires.

### Set connection options

| Setting | Default | Purpose |
| --- | --- | --- |
| **Skip Direct Connection** | Disabled | Controls the order for a refresh that you start, such as **Rescan**. When enabled, the product uses Tanium Cloud without first trying a direct connection. When disabled, it tries a direct connection first. Scheduled scans always try Tanium first, so this setting doesn't change them. Enable it when the server can't reach the devices. |
| **Hostname Fallback** | Disabled | Matches a device by host name when Tanium doesn't find its fully qualified domain name. Keep it disabled unless you have checked how it works with your device names. Some lookups can still use host names, so resolve duplicate host names first. |
| **Rate Limiting Enabled** | Enabled | Limits API requests during bulk operations. |
| **Rate Limit (requests/second)** | 5.0 | The maximum sustained request rate. |
| **Burst Capacity** | 10 | The maximum number of requests in a short burst. |
| **Max Wait Time (seconds)** | 30.0 | The longest that a request waits for a rate limit slot. |

The product always uses the default rate limit values. It doesn't save changes to these fields.

The product waits up to 1200 seconds (20 minutes) for a single-device action to finish. The interface stores this value when you save an integration, and a stored value takes precedence over the product default. The interface has no setting for it. Contact Netwrix Support to change it.

## Assign the configuration

A configuration has no effect until you assign it to a domain or to systems. See [Assign a configuration](./overview.md#assign-a-configuration). To delete a configuration, see [Delete a configuration](./overview.md#delete-a-configuration).

## Test one system

Test with one system before you enable bulk scanning. Rescan can also run configured policy actions, so use a system with Protect and Offline Access Management (OAM) disabled for the first test.

1. Open the Tanium Cloud configuration, and confirm that **Bulk Scan** is disabled.
2. Select **Management** > **Systems**, and open the test system. Under **Access** > **Grant Access**, set **Scan Mode** to **Enabled** and **EDR Integration** to the Tanium Cloud configuration.
3. To confirm that the scan uses Tanium, enable **Skip Direct Connection** on a configuration that only this test system uses. Save it, and reopen it to confirm the value.
4. Select **Rescan**.
5. When the operation finishes, look for the message `Successfully refreshed system via Tanium Cloud.` A success message that doesn't mention Tanium Cloud can mean that the scan used a direct connection.
6. Compare the local administrators that the product shows with the members on the device. Confirm that the product updated the intended system.

## Configure bulk scanning

A bulk scan reads every device in a Tanium computer group with one action instead of scanning each device in turn. The number of Tanium API calls stays small no matter how many devices the group holds.

The scan runs on every device in the group. The product matches each result to a system by its fully qualified domain name or host name, regardless of the provider that the system uses. Assigning the configuration to systems doesn't limit the group, and choosing the group doesn't assign its members. If the group holds devices that the product doesn't manage, the action runs on those devices, and a result can match the wrong record or none. Create a dedicated Tanium computer group that holds only the intended systems. Start with a small static group, and compare its member names with the systems assigned to this configuration in both directions, not only their counts.

1. Edit the Tanium Cloud configuration.
2. Set **Enable Bulk Scan** to **Enabled**.
3. Enter the **Computer Group Name**. The group must exist in Tanium Cloud. The form requires a name when bulk scanning is on. Exclude domain controllers, duplicate records, and devices whose host names are ambiguous.
4. Adjust the optional settings.

   ![The Bulk Scan section of the Tanium Cloud provider form](/images/privilegesecurediscovery/integrations/edr-tanium-bulk-scan.webp)

   | Setting | Default | Purpose |
   | --- | --- | --- |
   | **Bulk Scan Timeout (seconds)** | 600 | How long to wait for a bulk scan to finish. |
   | **Status Check Interval (seconds)** | 30 | How often to check a running bulk scan. |
   | **Bulk Scan Interval (hours)** | 4 | The minimum time between automatic bulk scans. It's not a fixed start time. Enter a positive whole number. |
   | **Retry Failed Devices Individually** | Disabled | Scans devices that the bulk scan didn't read successfully one at a time. This includes `OFFLINE` devices. Leave it disabled for the first test, and enable it after per-system scans work. |

5. Select **Save**.

Bulk scans run as part of the regular scan cycle, before the per-device scans. **Rescan** and **Scan Systems** scan one system and don't start a bulk scan. While bulk scanning is enabled, the product skips the per-device scan for every system that uses the configuration, including systems that aren't in the computer group. If **Retry Failed Devices Individually** is enabled, devices that the bulk scan couldn't read return to per-device scanning. A bulk scan collects inventory only. It doesn't run Protect, Offline Access Management (OAM), password rotation, or account changes. If a system needs those policy actions during every scan cycle, don't enable bulk scanning for its configuration, because the product skips the per-device scan that runs them.
### Monitor bulk scans

Select **Management** > **Bulk Scans** to see the history of bulk scans, including start and end times, duration, status, and device counts. A scan has the status Completed, Partial, or Failed. The list has the following indicators.

| Indicator | How to read it |
| --- | --- |
| **Total Devices** | The number of devices in the computer group. Compare it with the size you expect. A live group can leave out offline devices, so compare device names after each run, not only the counts. |
| **Success** | Devices that returned valid administrator data. Confirm that the results updated the intended systems. |
| **Offline** | Devices that didn't respond. This doesn't always mean that the device is powered off. Check the last Tanium check-in and the action log. A stalled package process can appear as Offline instead of a timeout. |
| **Failed** | Devices that returned an error, timed out, or returned data that the product couldn't parse. Open the scan to see the result for each device. |
| **Unmatched** | Results that the product couldn't match to a system. Correct the device names and the system assignment before you add more devices. |
| **Status** | Completed means that the group action finished. It doesn't mean that every device succeeded or that the product stored every result. |

Open a scan to see the result for each device. Each device has one of the following results.

| Result | Meaning |
| --- | --- |
| `SUCCESS` | The device returned valid administrator data. |
| `OFFLINE` | The device is in the group but didn't respond. |
| `EXECUTION_FAILED` | The script ran and returned an error. |
| `TIMEOUT` | The device started but didn't finish in time. |
| `PARSE_ERROR` | The product couldn't parse the response. This can mean a script version mismatch. |

In Tanium, select **Administration** > **Actions** > **Action History** to find the `NPSD Management` action and see which devices it targeted. If many devices fail, check the Tanium client on those devices, the API token, and the network path to Tanium Cloud. Compare a sample of successful results with the devices before you expand the group.

## Rotate the API token

1. In Tanium, create a replacement token with the same permissions and an expiration date.
2. In the Tanium Cloud configuration, enter the new **API Key** and **Token Expiry**, save the configuration, and open it again to confirm the values.
3. Select **Test Connection**, and scan one test system. If you use bulk scanning, check the next bulk scan.
4. Revoke the old token after you confirm that nothing else uses it.

Changing **Token Expiry** in the product doesn't rotate the token or change the expiration in Tanium.

## Disable bulk scanning

1. Edit the Tanium Cloud configuration, set **Enable Bulk Scan** to **Disabled**, and save it. Open the configuration again to confirm the change.
2. Keep the provider enabled and the systems assigned to scan them one at a time through Tanium.
3. Run **Rescan** on one test system, and check the next regular scan cycle.

Disabling bulk scanning stops future bulk scans. An action that is already running can continue, and the product keeps the inventory it already saved. To cancel a running action, use your Tanium procedure.

## Remove the integration

1. Assign the affected systems to a different configuration, and change any domain default that uses the provider. See [Delete a configuration](./overview.md#delete-a-configuration).
2. Confirm that the replacement scan path works.
3. Delete the Tanium Cloud configuration, and revoke its token in Tanium.
4. Delete the sensor and the package in Tanium only if no other configuration uses them. Keep a backup of their definitions until the change is accepted.

## Validate the integration

1. In Tanium **Interact**, ask for the `NPSD Admin Members` sensor on the test device only, and confirm that JSON results appear.
2. In Privilege Secure for Discovery, select **Test Connection** on the configuration.
3. Scan one system as described in [Test one system](#test-one-system), and confirm that its local administrators appear.
4. Enable bulk scanning, and confirm the first bulk scan in **Management** > **Bulk Scans**.

Don't deploy the package manually with a test parameter. The product generates the package parameters when it runs a scan.

## Troubleshoot the integration

| Symptom | Cause and fix |
| --- | --- |
| **Test Connection** fails | Check the API host, which can differ from the console host, and the HTTPS route or proxy. Also check the token expiry, the permissions of the integration identity, and any source-address restriction on the token. |
| **Test Connection** succeeds but scans fail | The test checks only the API and the token. Check the sensor and package names, background collection, the device name, the token's read access, and the Scan account and directory configuration. |
| `No matches for computer name '<name>'` | Tanium doesn't know the device by its fully qualified domain name. Fix the device name in Tanium or in the product. Leave **Hostname Fallback** disabled unless you have checked how it matches devices. See [Check device names](#check-device-names). |
| `Computer <name> has not checked in within 30 minutes` | The Tanium client on the device is offline or not reporting. Check the client. |
| Sensor not found | Use the exact name `NPSD Admin Members`, including the final D. Confirm that the integration identity can see the content set that holds the sensor. |
| `Sensor 'NPSD Admin Members' has no results for computer` or `results are unavailable` | Tanium hasn't collected the sensor on the device yet. Enable background collection, and select **Collect Now**. |
| `Tanium sensor cache may be out of date` in the logs | The cached sensor value can be old. Check that collection is running and that the device has checked in recently, and wait for a new collection before you test again. |
| The sensor returns a parameter error or raw text | The sensor script isn't the downloaded `secureone_management.ps1`. Paste the complete file into the sensor. |
| A package parameter or parse error | The scripts don't match, or the package parameter was changed. Verify the hashes of both scripts, the `$0` parameter, and the complete command. See [Verify the downloaded files](#verify-the-downloaded-files). |
| A `Microsoft.PowerShell.LocalAccounts` module error | The PowerShell process that Tanium starts can't load the module. Check that version 1.0.0 or later is available to 64-bit Windows PowerShell on the device. |
| A rescan succeeds but doesn't mention Tanium Cloud | The scan used a direct connection. See [Test one system](#test-one-system). |
| No bulk scan appears in **Bulk Scans** | Confirm that the provider and **Enable Bulk Scan** are enabled and saved, that **Computer Group Name** is exact, that systems are assigned to the configuration, and that **Bulk Scan Interval (hours)** has passed since the last run. Bulk scans start in the regular scan cycle, not when you select **Rescan**. |
| A bulk scan finishes but no devices update | The computer group name doesn't match, or the group is empty. Compare **Computer Group Name** with the group in Tanium. |
| **Unmatched** is more than 0, or the device count differs from what you expect | Compare the exact members of the computer group with the systems assigned to the configuration. Check fully qualified domain names, duplicate records from hybrid synchronization, and repeated host names. |
| A bulk scan is Completed but inventory is missing | Completed doesn't mean that every device succeeded. Check the device counts, the **Unmatched** value, and the result for each device. Then open the affected system. |
| Failed devices weren't scanned one at a time | **Retry Failed Devices Individually** is disabled. Enable it. The product must still match the device to a system and connect to it. |
| Protect or OAM didn't run after a successful bulk scan | A bulk scan collects inventory only, and it skips the per-device scan that runs these actions. Disable bulk scanning for the configuration, and contact Netwrix Support. |
| A saved rate limit or interval value changes or disappears | The product doesn't save the rate limit fields. Use a positive whole number for **Bulk Scan Interval (hours)**, and open the configuration again after you save it. |
| `Circuit breaker is open` in the logs | Repeated Tanium API failures paused bulk scans for 60 seconds. Fix the cause, then wait for the next scan cycle. |
| Timeouts during a bulk scan | Increase **Bulk Scan Timeout (seconds)**, or contact Netwrix Support. |

## Information for Netwrix Support

If you contact Netwrix Support, include the following:

- The product version and the name of the configuration.
- The time window and time zone of the problem.
- The sensor and package names, and the SHA-256 hashes of both scripts.
- The computer group name and its expected size.
- The ID of the bulk scan or the Tanium action, the device counts, and the result for each affected device.

Collect the `svc-scan.log` and `svc-worker.log` files. See [Application logs](../../troubleshooting/application-logs.md). Messages such as `Error scanning system. Attempting scan using Tanium Cloud.` and `Error scanning system with Tanium Cloud. Attempting direct connection.` show which connection the product used. Some of these messages appear only when you raise the log level.

Remove API tokens, credentials, action parameters, and account inventory from anything that you share.
