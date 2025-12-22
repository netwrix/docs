---
title: "Deploy the Add-On"
description: "Deploy the Add-On"
sidebar_position: 30
---

# Deploy the Add-On

Follow the step to deploy the Add-On:

**Step 1 –** Prepare Netwrix Auditor for Data Processing.

**Step 2 –** Download the Add-On.

**Step 3 –** Configure Parameters for Data Collection.

**Step 4 –** Register Windows Scheduled Task.

## Prepare Netwrix Auditor for Data Processing

In Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the **Leverage Integration API** is switched to **ON**.
2. Check the TCP communication port number – default is **9699**.

See the [Prerequisites](/docs/auditor/10.6/api/prerequisites.md) topic for
additional information.

By default, activity records are written to _Netwrix_Auditor_API_ database which is not associated
with a specific monitoring plan.

Optionally, you can create a dedicated monitoring plan in Auditor. In this case, data will be
written to a database linked to this plan. Target it at Netwrix API data source and enable for
monitoring. Add a dedicated item of _Integration_ type to the plan for data to be filtered by item
name. See the [Integration API](/docs/auditor/10.6/api/overview.md) topic for
additional information.

In such scenario, you will need to specify this monitoring plan in the _NetwrixAuditorPlan_ and
_NetwrixAuditorPlanItem_ parameters in the **settings.xml** file. See the
[Add-On Parameters](/docs/auditor/10.6/addon/hyperv/parameters.md) topic for
additional information.

## Download the Add-On

1. Download the distribution package **Netwrix_Auditor_Add-on_for_Microsoft_SCVMM.zip**.
2. Unpack it to a folder on the computer where you plan to deploy the add-on.

## Configure Parameters for Data Collection

In the add-on folder, open the **settings.xml** file and configure the add-on parameters for data
collection, as listed below.

See the [Add-On Parameters](/docs/auditor/10.6/addon/hyperv/parameters.md)topic
for the full list of configuration parameters.

| Parameter              | Default value | Description                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DataCollectionServer   | (empty)       | Specify SCVMM server to collect data from. You can use IP address, FQDN or NETBIOS name. For _localhost_, leave this parameter empty.                                                                                                                                                                                                                                  |
| DataCollectionUserName | (empty)       | Specify user account that will be used for data collection from SCVMM server. To use the account currently logged in, leave this parameter empty.s Make sure the account has administrative rights on that server (see the [Accounts and Rights](/docs/auditor/10.6/addon/hyperv/overview.md#accounts-and-rights) topic for additional information). |
| DataCollectionPassword |               | Specify user account password.                                                                                                                                                                                                                                                                                                                                         |
| ShortTermFolder        | ShortTerm     | Specify path to the short-term archive (Netwrix Auditor working folder). You can use full or relative path.                                                                                                                                                                                                                                                            |

Save the **settings.xml** file. New configuration settings will be applied automatically at the next
data collection.

For the full list of parameters, see the
[Add-On Parameters](/docs/auditor/10.6/addon/hyperv/parameters.md) topic for
additional information.

## Register Windows Scheduled Task

Run the **install.ps1** PowerShell script from the add-on folder. It will configure and register a
Windows scheduled task that will run periodically every 15 min to retrieve audit data from SCVMM.
