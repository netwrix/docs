# Configuring State-in-Time Data Collection for Azure Files

This topic describes how to enable State-in-Time data collection for an Azure Files monitoring plan in Netwrix Auditor, configure the monitoring scope using omit lists, and set up optional Azure diagnostic settings for activity-based reports.

> **Note:** By default, Azure Files permission reports show display names only for Entra ID accounts, and Netwrix Auditor doesn't expand on-premises AD groups that aren't synced to Microsoft Entra ID. To show display names for on-premises accounts and list individual members of AD groups, see [Configuring Active Directory integration (optional)](#configuring-active-directory-integration-optional).

## Prerequisites

- An Azure Files monitoring plan must already exist in Netwrix Auditor [Azure Files Configuration Overview](/docs/auditor/10_8/configuration/azurefiles/overview)
- The monitoring plan must target Azure file shares mounted via SMB (Netwrix Auditor doesn't support Azure File Sync or NFS).
- The service account that the monitoring plan uses must have sufficient permissions to enumerate file and folder ACLs on the Azure file shares.
- To collect "Times Accessed" data for the Excessive Access Permissions report, you need an Azure storage account configured to receive diagnostic logs.

## Enabling State-in-Time data collection

**To enable State-in-Time data collection in an Azure Files monitoring plan:**

1. In Netwrix Auditor, navigate to **Configuration → Monitoring Plans**.
2. Select the Azure Files monitoring plan and click **Edit**.
3. On the **General** tab, locate the **State-in-Time** section.
4. Select the **Collect data for state-in-time reports** checkbox.
5. (Optional) Click **Modify** in the **Schedule** section to customize the snapshot collection schedule. By default, Netwrix Auditor collects snapshots daily.
6. Click **Save** to apply the changes.

After you save the monitoring plan, Netwrix Auditor will begin collecting State-in-Time snapshots according to the configured schedule.

> **Note:** Netwrix Auditor collects the first snapshot at the next scheduled run. Reports won't contain data until then.

## Configuring Active Directory integration (optional)

By default, only Entra ID accounts appear with display names in Azure Files reports. If your environment uses on-premises Active Directory (AD DS), you can provide read-only AD credentials so that Netwrix Auditor can:

- Resolve display names for on-premises accounts not synced to Microsoft Entra ID.
- List individual members of on-premises AD groups (including members of nested groups, resolved transitively) as separate rows in permission reports.

If you don't provide credentials, report output remains identical to earlier versions — this capability is optional and additive.

> **Note:** Effective permission calculations that depend on a trust relationship between Active Directory domains or forests aren't always fully accurate. If a group contains members from a trusted domain in another forest, Netwrix Auditor can't guarantee it resolves those members with the same accuracy as members from the AD domain you configure it to query.

**To configure Active Directory integration:**

1. In Netwrix Auditor, navigate to **Configuration → Monitoring Plans**.
2. Select the Azure Files monitoring plan and click **Edit**.
3. Open a monitored item (Azure Subscription or Azure Storage Account) and click **Edit**.
4. Go to the **Active Directory Integration** tab. (The **Learn more…** link on this tab points to this section.)
5. Turn on the toggle under **Specify Active Directory account**.
6. In the **User name** field, enter an AD account with read access to Active Directory. Use the format `domain\user` or `user@domain.local`.
7. Enter the **Password** for the account.
8. Click **Save**.

> **Note:** If Netwrix Auditor can't authenticate with the configured AD account, it records a collection error in the System Health log and continues snapshot collection using cloud-resolved identities only. Netwrix Auditor records transient AD connectivity issues as warnings and doesn't stop collection for these issues.

## Configuring the monitoring scope (omit lists)

Use omit lists to exclude specific folders or files from State-in-Time data collection, reducing collection time and storage requirements.

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

The **Times Accessed** column in the **Excessive Access Permissions in Azure Files** report requires Azure diagnostic settings. Without diagnostic settings, "Times Accessed" defaults to 0 for all objects. [Configuring Diagnostic Settings](/docs/auditor/10_8/configuration/azurefiles/overview#diagnostic-settings)

> **Note:** The current version supports only **blob storage** as the destination, not Event Hub or Log Analytics Workspace.

## Schedule management and historical snapshots

### Customizing the snapshot schedule

By default, Netwrix Auditor collects State-in-Time snapshots daily. To customize the schedule:

1. Edit the Azure Files monitoring plan.
2. In the **State-in-Time** section, click **Modify**.
3. Select the days of the week for snapshot collection.
4. Save the changes.

### Importing historical snapshots

Historical snapshots let you generate reports for past dates. A Global administrator must import historical snapshots.

**To import a historical snapshot:**

1. In Netwrix Auditor, go to **Configuration → Monitoring Plans**.
2. Select the Azure Files monitoring plan.
3. In the **State-in-Time** section, click **Manage** next to **Historical snapshots**.
4. Select the snapshots you want to import.
5. Click **Import**.

> **Note:** Historical snapshot import isn't available for Office 365 data sources.

## Related topics

- [Azure Files State-in-Time Reports Overview](/docs/auditor/10_9/admin/reports/types/stateintime/azurefiles)
- [Azure Files Configuration Overview](/docs/auditor/10_9/configuration/azurefiles/overview)
- [Configuring Diagnostic Settings](/docs/auditor/10_9/configuration/azurefiles/overview#diagnostic-settings)
