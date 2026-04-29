---
title: "PolicyPak and MobileIron MDM"
description: "PolicyPak and MobileIron MDM"
sidebar_position: 30
---

# PolicyPak and MobileIron MDM

:::note
[PolicyPak and MobileIron MDM](/docs/policypak/deliverymethods/mdm/videos/gettingstarted/mobileiron.md) for a video
overview of PolicyPak and MobileIron.
:::


**Step 1 –** To use MobileIron with PolicyPak, go to the Apps section within
MobileIron, and click In-House to add an application. Next, add the PolicyPak CSE MSI
file, PolicyPak license MSI file, and the PolicyPak settings MSI file.

![using_policypak_with_mdm_and_9](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_9.webp)

**Step 2 –** Once uploaded, click Next.

![using_policypak_with_mdm_and_10](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_10.webp)

Sometimes MobileIron will ask you for the MSI product code of each MSI you upload. This is not a
PolicyPak problem but rather a MobileIron idiosyncrasy.

![using_policypak_with_mdm_and_11](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_11.webp)

**Step 3 –** To overcome this, PolicyPak has provided a utility in the PolicyPak download (in the PolicyPak Extras folder) called PolicyPak File
Information Viewer, which you can use to quickly get this information.

![using_policypak_with_mdm_and_12](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_12.webp)

**Step 4 –** Once the PolicyPak File Information Viewer is run, you can open an MSI
(e.g., the PolicyPak CSE MSI) and quickly output the MSI product code to copy. Once
you have copied the product code, you can paste it into MobileIron.

![using_policypak_with_mdm_and_13](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_13.webp)

![using_policypak_with_mdm_and_14](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_14.webp)

Additionally, each MSI must be assigned to a category and a location must be selected for the
installation.

![using_policypak_with_mdm_and_15](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_15.webp)

**Step 5 –** At this point, you must specify to install the application MSIs silently. That is done
by clicking Install Application configuration settings.

![using_policypak_with_mdm_and_16](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_16.webp)

**Step 6 –** Once you've clicked on Install Application configuration settings, turn on the option
Silently install on Windows devices.

![using_policypak_with_mdm_and_17](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_17.webp)

**Step 7 –** As a test, on an example client, perform your MDM enrollment to your MobileIron
service.

![using_policypak_with_mdm_and_18](/images/policypak/mdm/service/using_endpointpolicymanager_with_mdm_and_18.webp)

Be sure the computer is MDM-joined and in the correct group (if any). If the MSIs do not download as
expected, see [Troubleshooting](/docs/policypak/gettingstarted/mdmmanual/uemtools/mdm/overview.md).

