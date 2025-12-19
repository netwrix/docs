---
title: "Endpoint Policy Manager and MobileIron MDM"
description: "Endpoint Policy Manager and MobileIron MDM"
sidebar_position: 30
---

# Endpoint Policy Manager and MobileIron MDM

:::note
[Endpoint Policy Manager and MobileIron MDM](/docs/endpointpolicymanager/deliverymethods/mdm/videos/gettingstarted/mobileiron.md) for a video
overview of Endpoint Policy Manager and MobileIron.
:::


**Step 1 –** To use MobileIron with Endpoint Policy Manager, go to the Apps section within
MobileIron, and click In-House to add an application. Next, add the Endpoint Policy Manager CSE MSI
file, Endpoint Policy Manager license MSI file, and the Endpoint Policy Manager settings MSI file.

![using_policypak_with_mdm_and_9](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_9.webp)

**Step 2 –** Once uploaded, click Next.

![using_policypak_with_mdm_and_10](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_10.webp)

Sometimes MobileIron will ask you for the MSI product code of each MSI you upload. This is not a
Endpoint Policy Manager problem but rather a MobileIron idiosyncrasy.

![using_policypak_with_mdm_and_11](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_11.webp)

**Step 3 –** To overcome this, Endpoint Policy Manager has provided a utility in the Endpoint Policy
Manager download (in the Endpoint Policy Manager Extras folder) called Endpoint Policy Manager File
Information Viewer, which you can use to quickly get this information.

![using_policypak_with_mdm_and_12](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_12.webp)

**Step 4 –** Once the Endpoint Policy Manager File Information Viewer is run, you can open an MSI
(e.g., the Endpoint Policy Manager CSE MSI) and quickly output the MSI product code to copy. Once
you have copied the product code, you can paste it into MobileIron.

![using_policypak_with_mdm_and_13](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_13.webp)

![using_policypak_with_mdm_and_14](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_14.webp)

Additionally, each MSI must be assigned to a category and a location must be selected for the
installation.

![using_policypak_with_mdm_and_15](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_15.webp)

**Step 5 –** At this point, you must specify to install the application MSIs silently. That is done
by clicking Install Application configuration settings.

![using_policypak_with_mdm_and_16](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_16.webp)

**Step 6 –** Once you've clicked on Install Application configuration settings, turn on the option
Silently install on Windows devices.

![using_policypak_with_mdm_and_17](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_17.webp)

**Step 7 –** As a test, on an example client, perform your MDM enrollment to your MobileIron
service.

![using_policypak_with_mdm_and_18](/images/endpointpolicymanager/mdm/service/using_endpointpolicymanager_with_mdm_and_18.webp)

Be sure the computer is MDM-joined and in the correct group (if any). If the MSIs do not download as
expected, see [Troubleshooting](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/mdm/overview.md).

