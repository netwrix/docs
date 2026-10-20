---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 20
---

# Exporting Collections

Appendix A: [Using PolicyPak with MDM and UEM Tools](/docs/policypak/gettingstarted/mdmmanual/uemtools/uemtools.md) explains
how to use the PolicyPak Exporter to wrap up any PolicyPak directive and
deliver it using an MDM service such as Microsoft Endpoint Manager (SCCM and Intune), KACE, and so
on, as well as via PolicyPak Cloud.

:::note
For a video demonstrating the use of PolicyPak scripts with PolicyPak Cloud and an MDM service see
[PolicyPakScripts .. Deploy Software via VPN or with PolicyPak Cloud](/docs/policypak/components/scriptstriggers/videolearningcenter/withcloud/cloud.md)
and
[PolicyPak Scripts and YOUR MDM service: Un-real power](/docs/policypak/components/scriptstriggers/videolearningcenter/methods/mdm.md)
:::


Remember that PolicyPak Scripts & Triggers Manager policies can be created and
exported on the User or Computer side. For instance, in Figure 30, you can see an export from the
User side.

![using_item_level_targeting_6](/images/policypak/scriptstriggers/itemleveltargeting/using_item_level_targeting_6.webp)

Figure 30. Exporting a policy from the User side.

In Figure 31, you can see an export of a PolicyPak Scripts & Triggers Manager XML file
from the Computer side.

![using_item_level_targeting_7](/images/policypak/scriptstriggers/itemleveltargeting/using_item_level_targeting_7.webp)

Figure 31. Exporting a collection from the Computer side.

Here are some helpful tips to decide which side to use:

- When you export a user-side policy, and deploy it using PolicyPak Cloud or MDM, it
  will apply to every user on the machine (like switched mode).
- When you export a computer-side policy that affects the system, and deploy it using PolicyPak Cloud or MDM, it will apply to the computer as system.
- When you export a computer-side policy that affect all users on the machine, and deploy it using
  PolicyPak Cloud or MDM, it will apply to every user on the machine (like switched
  mode).

To export a policy for later use with PolicyPak Exporter or PolicyPak
Cloud, right-click the collection or the policy and select "Export as XML," as demonstrated in
Figure 32.

:::note
For a video showing how to export policies and use PolicyPak Exporter, watch
[Deploying PolicyPakdirectives without Group Policy (PolicyPak Exporter Utility)](/docs/policypak/deliverymethods/mdm/videos/exportingtips/exporterutility.md).
:::


![using_item_level_targeting_8](/images/policypak/scriptstriggers/itemleveltargeting/using_item_level_targeting_8.webp)

Figure 32. Choosing this option will allow the user to export the policy for later use.

Note that exported collections or policies maintain any Item-Level Targeting set within them. If
you've used items that represent Group Membership in Active Directory, then those items will only
function when the machine is domain-joined.


