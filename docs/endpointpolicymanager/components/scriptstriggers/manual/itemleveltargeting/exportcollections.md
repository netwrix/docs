---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 20
---

# Exporting Collections

Appendix A: [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) explains
how to use the Endpoint Policy Manager Exporter to wrap up any Endpoint Policy Manager directive and
deliver it using an MDM service such as Microsoft Endpoint Manager (SCCM and Intune), KACE, and so
on, as well as via Endpoint Policy Manager Cloud.

:::note
For a video demonstrating the use of Endpoint Policy Manager scripts with Endpoint Policy
Manager Cloud and an MDM service see
[Endpoint Policy ManagerScripts .. Deploy Software via VPN or with Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/components/scriptstriggers/videolearningcenter/withcloud/cloud.md)
and
[Endpoint Policy Manager Scripts and YOUR MDM service: Un-real power](/docs/endpointpolicymanager/components/scriptstriggers/videolearningcenter/methods/mdm.md)
:::


Remember that Endpoint Policy Manager Scripts & Triggers Manager policies can be created and
exported on the User or Computer side. For instance, in Figure 30, you can see an export from the
User side.

![using_item_level_targeting_6](/images/endpointpolicymanager/scriptstriggers/itemleveltargeting/using_item_level_targeting_6.webp)

Figure 30. Exporting a policy from the User side.

In Figure 31, you can see an export of a Endpoint Policy Manager Scripts & Triggers Manager XML file
from the Computer side.

![using_item_level_targeting_7](/images/endpointpolicymanager/scriptstriggers/itemleveltargeting/using_item_level_targeting_7.webp)

Figure 31. Exporting a collection from the Computer side.

Here are some helpful tips to decide which side to use:

- When you export a user-side policy, and deploy it using Endpoint Policy Manager Cloud or MDM, it
  will apply to every user on the machine (like switched mode).
- When you export a computer-side policy that affects the system, and deploy it using Endpoint
  Policy Manager Cloud or MDM, it will apply to the computer as system.
- When you export a computer-side policy that affect all users on the machine, and deploy it using
  Endpoint Policy Manager Cloud or MDM, it will apply to every user on the machine (like switched
  mode).

To export a policy for later use with Endpoint Policy Manager Exporter or Endpoint Policy Manager
Cloud, right-click the collection or the policy and select "Export as XML," as demonstrated in
Figure 32.

:::note
For a video showing how to export policies and use Endpoint Policy Manager Exporter, watch
[Deploying Endpoint Policy Managerdirectives without Group Policy (Endpoint Policy Manager Exporter Utility)](/docs/endpointpolicymanager/deliverymethods/mdm/videos/exportingtips/exporterutility.md).
:::


![using_item_level_targeting_8](/images/endpointpolicymanager/scriptstriggers/itemleveltargeting/using_item_level_targeting_8.webp)

Figure 32. Choosing this option will allow the user to export the policy for later use.

Note that exported collections or policies maintain any Item-Level Targeting set within them. If
you've used items that represent Group Membership in Active Directory, then those items will only
function when the machine is domain-joined.


