---
title: "Azure Files"
description: "Add Azure Files Storage Accounts"
sidebar_position: 11
---

# Add Azure Files Storage Accounts

Prior to adding Azure Files storage accounts to the Activity Monitor, the prerequisites for the target environment
must be met. See the [Azure Files Requirements](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/azure-files/azurefiles-activity.md) 
topic for additional information.

Follow the steps to add Azure Files storage accounts to be monitored.

1. On the **Monitored Hosts & Services** page, select **Add Host/Service**.  
2. Select the agent that will be monitoring Azure Files, and then select **Next**.  
3. Select **Azure Files**, specify the tenant’s domain name, and then select **Next**.  
4. On the **Connection** page, specify the Tenant ID (if it was not resolved automatically), Client ID, and Client Secret—values  
copied in the previous steps during application registration.  
5. Select **Connect**.  
The button will verify the connection to Azure, enumerate all storage accounts, and retrieve their settings visible to the registered application.  

:::note
If the product fails to enumerate storage accounts, the RBAC roles were either assigned incorrectly or have not yet become effective. Retry later.
:::

6. On the **Storage Accounts** page, select the storage accounts to be monitored, and then select **Next**.  
7. Complete the wizard by selecting operations and output settings.  

:::tip
You can use this wizard multiple times to add newly created storage accounts—already added accounts will be ignored.  
:::

8. Check the status of the added storage accounts on the **Monitored Hosts & Services** page.  
Address any audit setting misconfigurations or missing RBAC roles.
