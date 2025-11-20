---
title: "Understanding Processing Order and Precedence"
description: "Understanding Processing Order and Precedence"
sidebar_position: 10
---

# Understanding Processing Order and Precedence

Within a particular GPO (Computer or User side), the processing order is counted in numerical order.
So, lower-numbered collection attempt to process first, and higher-numbered collections attempt to
process last. Then, within any collection, each policy is processed in numerical order from lowest
to highest. Below we can see a potential conflict within a collection. Item #4 is installing the
Telnet Client, while Item #11 is uninstalling it.

![using_item_level_targeting_4](/images/endpointpolicymanager/feature/itemleveltargeting/using_item_level_targeting_4.webp)

The net effect of this scenario would be that the Telnet Client would be uninstalled because it is
processed later.

Not shown but also important are multiple collections and nested collections. Within any collection,
there may be other nested collections, as well as policies. As such, each policy and collection is
also processed in numerical order, starting at each level with the lowest-numbered policies and
collections.

## Merging and Conflicts

Endpoint Policy Manager Feature Manager for Windows will merge all policies that come from the Group
Policy method (and policies deployed from methods other than Group Policy methods and/or
collections), unless there is a conflict. If there is a conflict, the last policy wins.

## Precedence

Policies can be delivered by Group Policy and non-Group Policy methods such as Microsoft Endpoint
Manager (SCCM and Intune) via Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud. As
such, the Endpoint Policy Manager engine needs to make a final determination whether there is any
overlap of policies. Here is how the precedence works:

- Policies delivered through Endpoint Policy Manager Cloud have the lowest precedence.
- Policies delivered through Endpoint Policy Manager files have the next highest precedence.
- Policies delivered through Endpoint Policy Manager Group Policy directives have the highest
  precedence.


