---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 20
---

# Exporting Collections

[Using PolicyPak with MDM and UEM Tools](/docs/policypak/gettingstarted/mdmmanual/uemtools/uemtools.md) explains how to use
the PolicyPak Exporter to wrap up any PolicyPak directives and deliver
them using Microsoft Endpoint Manager (SCCM and Intune), KACE, you own MDM service, or PolicyPak Cloud. However, we recommend NOT using PolicyPak File Associations
Manager directives with PolicyPak Cloud or an MDM service. This is because PolicyPak File Associations Manager directives cannot work with non-domain-joined machines.
Regardless, all PolicyPak Cloud customers are licensed for PolicyPak
File Associations Manager, so if you decide to use PolicyPak Cloud with some
domain-joined machines, PolicyPak File Associations Manager will function as expected
using PolicyPak Cloud.

![using_item_level_targeting_8](/images/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_8.webp)

:::note
For a video demonstrating the use of PolicyPak Cloud with domain-joined
machines. See the
[PolicyPakCloud and PolicyPak OnPremise – Together using PPCloud Licenses](/docs/policypak/deliverymethods/cloud/videos/usingwithothermethods/onpremise.md)
topic for additional information.
:::


To export a policy for later use with PolicyPak Exporter or PolicyPak
Cloud, right-click the collection or the policy, and select **Export to XML**.

:::note
For a video showing how to export policies and how to use PolicyPak
Exporter.See the
[Deploying PolicyPakdirectives without Group Policy (PolicyPak Exporter Utility)](/docs/policypak/deliverymethods/mdm/videos/exportingtips/exporterutility.md)
topic for additional information.
:::


![using_item_level_targeting_9](/images/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_9.webp)

![using_item_level_targeting_10](/images/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_10.webp)

:::note
Exported collections or policies maintain any Item-Level Targeting set within them. If
you've used items that represent Group Membership in Active Directory, then those items will only
function when the machine is domain-joined.

:::


