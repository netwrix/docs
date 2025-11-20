---
title: "Enabling Priority Mode for Multiple XML Items"
description: "Enabling Priority Mode for Multiple XML Items"
sidebar_position: 40
---

# Enabling Priority Mode for Multiple XML Items

When wrapping multiple XMLs into an MSI, you may want them to execute in a predictable order. There
are a couple of ways of doing this. The first is to enable Priority Mode. Once the multiple XMLs are
added using the Endpoint Policy Manager Exporter, right-click an item and select **Enable Priority
Mode**. Then move the item item up or down (with the arrow keys) and click Enter to change the
order.

![policypak_exporter_tips_tricks](/images/endpointpolicymanager/mdm/tips/endpointpolicymanager_exporter_tips_tricks.webp)

Another approach is to create a separate MSI for one or more XMLs. The objective then is to ensure
that one MSI's contents are processed before or after another MSI's contents. Before completing the
MSI process you can use the Process Layer field. The default value is 50000.

![policypak_exporter_tips_tricks_7](/images/endpointpolicymanager/mdm/tips/endpointpolicymanager_exporter_tips_tricks_7.webp)

The idea is that if you have multiple MSIs, they are unpacked and then processed alphabetically.
This value is prepended to all items in the XML. The result is that if you have multiple MSIs, you
can layer them by prepending the Policy Layer ID. Then when the items execute, they will execute in
the specific and desired order.

You can see these values in `c:\ProgramData\PolicyPak\XmlData\Computer` (or User, Group, etc.).
Below we have two MSIs, one with a Policy Layer ID of 50000 and one with a Policy Layer ID of 50010.
As you can see in the figure, items with lower numbered Policy Layer IDs will process before those
with higher numbered Policy Layer IDs.

![policypak_exporter_tips_tricks_1](/images/endpointpolicymanager/mdm/tips/endpointpolicymanager_exporter_tips_tricks_1.webp)

