---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 50
---

# Exporting Collections

Appendix A: [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) explains how
to use the Endpoint Policy Manager Exporter to wrap up any Endpoint Policy Manager directive and
deliver it using Microsoft Endpoint Manager (SCCM and Intune), KACE, your own MDM service, or
Endpoint Policy Manager Cloud. For Endpoint Policy Manager Cloud, you should automatically acquire a
license as seen in Figure 50. For Endpoint Policy Manager with an MDM service, the license should
come in your MSI license bundle.

![collections_policy_settings_17](/images/endpointpolicymanager/startscreentaskbar/collections_policy_settings_17.webp)

Figure 50. Endpoint Policy Manager Cloud customers are licensed for Endpoint Policy Manager Start
Screen & Taskbar Manager.

:::note
For a video demonstrating the use of Endpoint Policy Manager Cloud with Endpoint Policy
Manager Start Screen & Taskbar Manager, see
[Endpoint Policy ManagerStart Screen & Taskbar Manager: Manage non-domain joined machines using Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/components/startscreenandtaskbar/videos/methods/nondomainjoined.md).
:::


To export a policy for later use with Endpoint Policy Manager Exporter or Endpoint Policy Manager
Cloud, right-click the Start Screen Manager node, or a collection, and select "Export Collections as
XML," as demonstrated in Figure 51 and Figure 52.

:::note
For a video of exporting Endpoint Policy Manager Start Screen & Taskbar Manager and using
Endpoint Policy Manager Exporter with an MDM service, watch
[Endpoint Policy Manager and MDM walk before you run](/docs/endpointpolicymanager/deliverymethods/mdm/videos/gettingstarted/testsample.md).
:::


![collections_policy_settings_18](/images/endpointpolicymanager/startscreentaskbar/collections_policy_settings_18.webp)

Figure 51. Exporting all collections for later use.

![collections_policy_settings_19](/images/endpointpolicymanager/startscreentaskbar/collections_policy_settings_19.webp)

Figure 52. Exporting the policy for later use.

Note that exported collections or policies maintain any Item-Level Targeting set within them. If
you've used items that represent Group Membership in Active Directory, then those items will only
function when the machine is domain-joined. For more information about exporting settings and using
Endpoint Policy Manager Exporter utility, see Appendix A:
[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md).


