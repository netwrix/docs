---
title: "Azure Files Monitoring Plan"
description: "Create and configure Azure Files monitoring plans in Netwrix Auditor v10.8"
sidebar_position: 85
---

# Azure Files Monitoring Plan

Create monitoring plans for Azure Files to track file and folder changes across your Azure storage accounts.

## Prerequisites

- **[Azure Files Configuration](/docs/auditor/10.8/configuration/azurefiles/overview.md)** completed
- **Azure Application** registered with required permissions
- **Diagnostic settings** enabled for storage accounts

## Create Monitoring Plan

### Step 1: Create New Monitoring Plan

1. Navigate to **Home > Monitoring Plans**
2. Click **Create New Monitoring Plan**
3. Provide monitoring plan name
4. Create audit database
5. Configure email notification method

### Step 2: Add Azure Files Data Source

1. Click **Add Data Source**
2. Select **Azure Files**
3. Configure connection settings:
   - **Tenant ID** (use ID, not tenant name)
   - **Application ID**
   - **Application Secret**
   - **Subscription ID**

### Step 3: Configure Storage Accounts

Configure storage account settings (requires separate accounts):
- **File Share Storage Account** - Contains the file shares to monitor
- **Audit Log Storage Account** - Stores diagnostic logs (must be separate account)
- **Resource Group** - Resource group containing the storage accounts

### Step 4: Configure Monitoring Options

Select monitoring options:
- **Track changes** (successful/failed operations)
- **Monitor read access** (optional - increases audit volume)
- **User monitoring restrictions** (specify users to exclude from monitoring)
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
2. **Configure reports** as needed
3. **Set up alerts** for important events

For configuration requirements, see [Azure Files Configuration](/docs/auditor/10.8/configuration/azurefiles/overview.md).