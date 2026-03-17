---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 60
---

# Exporting Collections

In Appendix A:[Using PolicyPak with MDM and UEM Tools](/docs/policypak/gettingstarted/mdmmanual/uemtools/uemtools.md), you can
learn how to use the Netwrix PolicyPak Exporter to wrap up
PolicyPak directives and deliver them using PolicyPak Cloud, an MDM
service, or a non-Group Policy method such as MEMCM, KACE, and so on.

:::note
For a video demonstrating the use of PolicyPak Remote Work Delivery Manager
with PolicyPak MDM see
[Copy files and keep them up to date with your MDM service](/docs/policypak/components/remoteworkdeliverymanager/videos/methods/mdm.md).
:::


Remember that PolicyPak Remote Work Delivery Manager policies can be created and
exported on the User side or Computer side. In the example below you can see an export from the User
side.

![exporting_collections](/images/policypak/remoteworkdelivery/exporting_collections.webp)

Choosing this option from the User side will allow the user to export the policy or collection for
later use with PolicyPak Cloud or an MDM service.

Below you can see an Export of PolicyPak Remote Work Delivery Manager XML from the
Computer side.

![exporting_collections_1](/images/policypak/remoteworkdelivery/exporting_collections_1.webp)

Choosing this option from the Computer side will allow the user to export the Policy or collection
for later use with PolicyPak Cloud or an MDM service.

Here are some helpful tips to decide which side to use:

- When you export a user-side policy and deploy it using PolicyPak Cloud or MDM, it
  will apply to every user on the machine (like switched mode).
- When you export a computer-side policy (which affects the system) and deploy it using PolicyPak Cloud or MDM, it will apply to the computer as System.
- When you export a computer-side policy (which affects all users on the machine), and deploy it
  using PolicyPak Cloud or MDM, it will apply to every user on the machine (like
  switched mode).

:::note
See
[Deploying PolicyPakdirectives without Group Policy (PolicyPak Exporter Utility)](/docs/policypak/deliverymethods/mdm/videos/exportingtips/exporterutility.md)
for additional information on how to export policies and use PolicyPak Exporter
:::


Note that exported collections or policies maintain any Item-Level Targeting set within them. If
you've used items that represent Group Membership in Active Directory, then those items will only
function when the machine is domain-joined.


