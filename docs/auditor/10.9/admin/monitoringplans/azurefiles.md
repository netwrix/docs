---
title: "Azure Files"
description: "Create and configure Azure Files monitoring plans in Netwrix Auditor v10.8"
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
 - [Audit database (SQL)](/docs/auditor/10_8/admin/settings/auditdatabase)
 - [Notifications (SMTP or Exchange Online)](/docs/auditor/10_8/admin/settings/notifications)
 - Plan name and description
 - Select **Add item now**


### Step 2: Add Item for Monitoring

- Option A – Storage Account → Enter **Storage Account Name, Subscription ID, Tenant Name, Application ID, Application Secret**
- Option B – Subscription → Enter **Subscription Name, Subscription ID, Tenant Name, Application ID, Application Secret**

**Tip:** If you have multiple storage accounts, use the subscription option for easier management


### Step 3: Configure Monitoring Scope and Actions

1. In the **Netwrix Auditor**, double-click your **Azure Files plan**
2. Enable **Monitor this data source and collect activity data**

3. Select actions:

   - **Changes (Success/Fail)** → Track file creation, modification, deletion, and failed attempts
     - **Successful** - Use this option to track changes to your data. It helps to find out who made changes to your files, including their creation and deletion
     - **Failed** - Use this option to detect suspicious activity on Azure Files. It helps to identify potential intruders who tried to modify or delete files, etc., but failed to do it

   - **Read Access (Success/Fail)** → Track file reads and unauthorized read attempts
     - **Successful** - Show successful attempts to read files
     - **Failed** - Use this option to track suspicious activity. Helps find out who was trying to access your private data without proper justification.Enabling this option on public shares will result in a high number of events generated on Azure Files and the amount of data written to the Long-Term Archive

**Note:** Enabling read access auditing on public shares may generate high event volume

**Tip:** Only enable read auditing where compliance requires it (e.g., HR, Finance)

4. Add exclusions → e.g., service accounts that produce excessive logs

- **Monitored object types** - Select from:
 - Files
 - Folders
 - Shares
- **Monitored actions** - Configure which file operations to track

### Step 5: Test Connection

Click **Test Connection** to verify:
- Azure Active Directory authentication
- Storage account access
- Audit log collection

## Next Steps

After creating the monitoring plan:
1. **Verify data collection** is working
2. **[Configure reports](/docs/auditor/10_8/admin/reports/overview)** as needed
3. **[Set up alerts](/docs/auditor/10_8/admin/alertsettings/create/)** for important events

For configuration requirements, see [Azure Files Configuration](/docs/auditor/10.9/configuration/azurefiles/overview.md)
