# Configuring State-in-Time Data Collection for Azure Files

This topic describes how to enable State-in-Time data collection for an Azure Files monitoring plan in Netwrix Auditor, configure the monitoring scope using omit lists, and set up optional Azure diagnostic settings for activity-based reports.

## Prerequisites

- An Azure Files monitoring plan must already be created in Netwrix Auditor [Azure Files Configuration Overview](/docs/auditor/10_8/configuration/azurefiles/overview)
- The monitoring plan must target Azure file shares mounted via SMB (Azure File Sync and NFS are not supported).
- The service account used by the monitoring plan must have sufficient permissions to enumerate file and folder ACLs on the Azure file shares.
- To collect "Times Accessed" data for the Excessive Access Permissions report, you need an Azure storage account configured to receive diagnostic logs.

## Enabling State-in-Time data collection

**To enable State-in-Time data collection in an Azure Files monitoring plan:**

1. In Netwrix Auditor, navigate to **Configuration → Monitoring Plans**.
2. Select the Azure Files monitoring plan and click **Edit**.
3. On the **General** tab, locate the **State-in-Time** section.
4. Select the **Collect data for state-in-time reports** checkbox.
5. (Optional) Click **Modify** in the **Schedule** section to customize the snapshot collection schedule. By default, snapshots are collected daily.
6. Click **Save** to apply the changes.

After you save the monitoring plan, Netwrix Auditor will begin collecting State-in-Time snapshots according to the configured schedule.

> **Note:** The first snapshot is collected at the next scheduled run. Reports will not contain data until the first snapshot is collected.

## Configuring the monitoring scope (omit lists)

Omit lists allow you to exclude specific folders or files from State-in-Time data collection, reducing collection time and storage requirements.

Netwrix Auditor for Azure Files supports two types of omit lists:

| Omit list type | Scope |
|----------------|-------|
| **All** | Excludes objects from all data collection (activity and State-in-Time) |
| **SiT** | Excludes objects from State-in-Time data collection only |

### Configuring omit lists in the Netwrix Auditor UI

1. Open the Azure Files monitoring plan in edit mode.
2. Navigate to the **Scope** tab.
3. Click **Omit List** and specify the UNC paths to exclude.
4. Select the appropriate list type: **All** or **SiT**.
5. Save the monitoring plan.

### Using omit list text files

You can also define omit lists using plain text files:

1. Create a `.txt` file with one UNC path per line.
   - Example:
     ```
     \\storageaccount.file.core.windows.net\share\SystemFolder
     \\storageaccount.file.core.windows.net\share\Temp
     ```
2. Place the file in the appropriate location or specify its path in the monitoring plan scope settings.
3. Restart the data collection service to apply changes.

## Configuring Azure diagnostic settings (optional)

Azure diagnostic settings are required to populate the **Times Accessed** column in the **Excessive Access Permissions in Azure Files** report. Without diagnostic settings, "Times Accessed" defaults to 0 for all objects. [Configuring Diagnostic Settings](docs/auditor/10_8/configuration/azurefiles/overview#diagnostic-settings)

> **Note:** Only **blob storage** as the destination is supported in the current version. Event Hub and Log Analytics Workspace destinations are not supported.

## Schedule management and historical snapshots

### Customizing the snapshot schedule

By default, Netwrix Auditor collects State-in-Time snapshots daily. To customize the schedule:

1. Edit the Azure Files monitoring plan.
2. In the **State-in-Time** section, click **Modify**.
3. Select the day(s) of the week for snapshot collection.
4. Save the changes.

### Importing historical snapshots

Historical snapshots allow generating reports for past dates. Historical snapshots must be imported by a Global administrator.

**To import a historical snapshot:**

1. In Netwrix Auditor, go to **Configuration → Monitoring Plans**.
2. Select the Azure Files monitoring plan.
3. In the **State-in-Time** section, click **Manage** next to **Historical snapshots**.
4. Select the snapshots you want to import.
5. Click **Import**.

> **Note:** Historical snapshot import is not available for Office 365 data sources.

## Related topics

- [Azure Files State-in-Time Reports Overview](/docs/auditor/10_8/admin/reports/types/stateintime/azurefiles)
- [Azure Files Configuration Overview](/docs/auditor/10_8/configuration/azurefiles/overview)
- [Configuring Diagnostic Settings](docs/auditor/10_8/configuration/azurefiles/overview#diagnostic-settings)