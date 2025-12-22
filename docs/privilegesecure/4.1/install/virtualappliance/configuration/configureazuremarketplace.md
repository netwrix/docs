---
title: "Configure Azure Marketplace VM Instance"
description: "Configure Azure Marketplace VM Instance"
sidebar_position: 20
---

# Configure Azure Marketplace VM Instance

Follow the steps below to configure the Azure Marketplace VM instance.

**Step 1 –** Log in to the Microsoft Azure Marketplace and navigate to **Virtual machines**.

**Step 2 –** Select the Netwrix Privilege Secure image in the Software list.

**Step 3 –** Select Create VM and complete the following fields:

| Option                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                                                                | Specify the name for the new Virtual machine. For example, "NetwrixAuditor".                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| VM disk type                                                        | Select disk type that meets your business needs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User name and password                                              | Specify credentials to log on the new Virtual machine. This account will be granted the Global Administrator role in Netwrix Privilege Secure.                                                                                                                                                                                                                                                                                                                                                                                         |
| Subscription                                                        | Select your Azure subscription type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Resource group                                                      | In the list of resource groups, assuming you have some applicable assets in your Azure subscription, you should see a list of resource groups. You can use one of your configured resource groups or create the new one. When you create a new VM in a new cloud service using the portal, the domain name, virtual machine and virtual network will be placed in a new resource group. At the time of creating the new VM, you have the option to override this default behavior and add the resources to an existing resource group. |
| Size                                                                | Browse for required sizes and VM features. See the [Requirements](/docs/privilegesecure/4.1/install/virtualappliance/requirments.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                 |
| Settings                                                            | Configure the following virtual machine settings, if needed: <ul><li>High availability</li><li>Network</li><li>Extensions</li><li>Auto-shutdown</li><li>Monitoring</li></ul>                                                                                                                                                                                                                                                                                                                                                           |
| Summary — Review your Netwrix Privilege Secure image configuration. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


**Step 4 –** Wait until deployment completes.

The image may take up to 10 minutes to deploy.

**Step 5 –** Once the image has been deployed successfully, select **Go to resource** on the right
pane.

**Step 6 –** Navigate to **Virtual machines** and make sure that your Netwrix Privilege Secure image
status is **Running**.

**Step 7 –** Select **Connect**.

The Remote Desktop File will be downloaded automatically.

**Step 8 –** In the Windows Security dialog, provide the Netwrix Privilege Secure Global
Administrator credentials you specified on the step 3 and log on to the instance.
