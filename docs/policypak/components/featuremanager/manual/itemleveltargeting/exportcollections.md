---
title: "Exporting Collections"
description: "Exporting Collections"
sidebar_position: 20
---

# Exporting Collections

In
[Using Item-Level Targeting with Collections and Policies](/docs/policypak/components/remotedesktopprotocolmanager/overview.md)
we explain how to use the PolicyPak Exporter to wrap up any PolicyPak
directives and deliver them using Microsoft Endpoint Manager (SCCM and Intune), KACE, your own MDM
service, or PolicyPak Cloud. To export a policy for later use using PolicyPak Exporter or PolicyPak Cloud, right-click the collection or the policy and
select Export to XML. This will enable you to save an XML file for later use.

:::note
For a video demonstrating the use of PolicyPak Feature Manager for Windows
with PolicyPak MDM see
[https://www.policypak.com/video/endpointpolicymanager-feature-manager-for-windows-mdm.html](https://www.policypak.com/video/endpointpolicymanager-feature-manager-for-windows-mdm.html).
:::


Remember that PolicyPak Feature Manager for Windows policies can be created and then
exported on the Computer side. For instance, below, you can see a setting being exported. You can
also do this for an entire collection (not shown).

![using_item_level_targeting_5](/images/policypak/feature/itemleveltargeting/using_item_level_targeting_5.webp)

:::note
For a video showing how to export policies and use PolicyPak Exporter, watch
[https://www.policypak.com/video/deploying-endpointpolicymanager-directives-without-group-policy-endpointpolicymanager-exporter-utility.html](https://www.policypak.com/video/deploying-endpointpolicymanager-directives-without-group-policy-endpointpolicymanager-exporter-utility.html).
:::


:::note
Exported collections or policies maintain any Item-Level Targeting set within them. If
you've used items that represent Group Membership in Active Directory, then those items will only
function when the machine is domain-joined.
:::


For more information on how to use exported policies with PolicyPak Cloud or PolicyPak MDM see
[Using PolicyPak with MDM and UEM Tools](/docs/policypak/gettingstarted/mdmmanual/uemtools/uemtools.md). 


