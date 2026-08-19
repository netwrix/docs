---
title: "Azure Files"
description: "Create and configure Azure Files monitoring plans in Netwrix Auditor v10.9"
sidebar_position: 85
---

# Azure Files

Create monitoring plans for Azure Files to track file and folder changes across your Azure storage accounts

## Prerequisites

- **[Azure Application registered](/docs/auditor/10.9/configuration/azurefiles/overview.md#azure-application-registration)** with required **[permissions](/docs/auditor/10.9/configuration/azurefiles/overview.md#configure-api-permissions)**
- **[Diagnostic Settings configured](/docs/auditor/10.9/configuration/azurefiles/overview.md#diagnostic-settings)** for storage accounts
- **[Azure Files Configuration](/docs/auditor/10.9/configuration/azurefiles/overview.md)** completed


## Create Monitoring Plan

### Step 1: Create New Monitoring Plan

1. In the **Netwrix Auditor**, go to **Home > Monitoring Plans > + Add Plan**
2. Select **Azure Files**
3. Configure:
 - [Audit database (SQL)](/docs/auditor/10.9/admin/settings/auditdatabase)
 - [Notifications (SMTP or Exchange Online)](/docs/auditor/10.9/admin/settings/notifications)
 - Plan name and description
 - Select **Add item now**


### Step 2: Add Item for Monitoring

- Option A – Storage Account → Enter **Storage Account Name, Subscription ID, Tenant Name, Application ID, Application Secret**
- Option B – Subscription → Enter **Subscription Name, Subscription ID, Tenant Name, Application ID, Application Secret**

**Tip:** If you have multiple storage accounts, use the subscription option to manage them from a single monitored item


### Step 3: Configure Monitoring Scope and Actions

1. In the **Netwrix Auditor**, double-click your **Azure Files plan**
2. Enable **Monitor this data source and collect activity data**

3. Select actions:

   - **Changes (Success/Fail)** → Track file creation, modification, deletion, and failed attempts
     - **Successful** - Use this option to track changes to your data. It shows who created, modified, and deleted your files
     - **Failed** - Use this option to detect suspicious activity on Azure Files. It helps to identify potential intruders who tried to modify or delete files but failed

   - **Read Access (Success/Fail)** → Track file reads and unauthorized read attempts
     - **Successful** - Show successful attempts to read files
     - **Failed** - Use this option to detect unauthorized attempts to read your data. Enabling this option on public shares generates a high volume of events on Azure Files and increases the amount of data Netwrix Auditor writes to the Long-Term Archive

**Note:** Enabling read access auditing on public shares may generate high event volume

**Tip:** Only enable read auditing where compliance requires it (e.g., HR, Finance)

4. **Monitored object types** - Select from:
 - Files
 - Folders
 - Shares
5. **Monitored actions** - Configure which file operations to track
6. **Collect data for state-in-time reports** – Enable this option to have Netwrix Auditor store periodic snapshots of your Azure Files permissions. State-in-Time reports, including permission and effective access reports, require these snapshots. See [Configuring State-in-Time Data Collection for Azure Files](/docs/auditor/10.9/configuration/azurefiles/stateintime.md) for the snapshot schedule, historical snapshot import, and optional Active Directory integration for on-premises accounts and groups.
7. Click **Save**

### Step 4: Configure Exclusions (optional)

What you can exclude depends on the monitored item type:

- **Azure Subscription items** – On the item's **Scope** tab, exclude specific **storage accounts** by name so Netwrix Auditor skips them entirely for this subscription.
- **Azure Storage Account items** – On the item's **Scope** tab, use the **Omit List** to exclude specific shares, folders, or files (Universal Naming Convention (UNC) paths). Choose **All** to exclude an object from all data collection, or **SiT** to exclude it from State-in-Time snapshots only. See [Configuring the monitoring scope (omit lists)](/docs/auditor/10.9/configuration/azurefiles/stateintime.md#configuring-the-monitoring-scope-omit-lists) for details.

## Next Steps

After creating the monitoring plan:
1. **Verify data collection** is working
2. **[Configure reports](/docs/auditor/10.9/admin/reports/overview)** as needed
3. **[Set up alerts](/docs/auditor/10.9/admin/alertsettings/create/)** for important events

For configuration requirements, see [Azure Files Configuration](/docs/auditor/10.9/configuration/azurefiles/overview.md)
