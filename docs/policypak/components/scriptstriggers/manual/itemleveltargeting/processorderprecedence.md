---
title: "Understanding Processing Order and Precedence"
description: "Understanding Processing Order and Precedence"
sidebar_position: 10
---

# Understanding Processing Order and Precedence

Within a particular GPO (Computer or User side), the processing order is counted in numerical order.
So lower-numbered collections attempt to process first, and higher-numbered collections attempt to
process last as shown in Figure 28. Then, within any collection, each policy is processed in
numerical order from lowest to highest, as seen in Figure 29.

![using_item_level_targeting_4](/images/policypak/scriptstriggers/itemleveltargeting/using_item_level_targeting_4.webp)

Figure 28. The order collections are processed in.

![using_item_level_targeting_5](/images/policypak/scriptstriggers/itemleveltargeting/using_item_level_targeting_5.webp)

Figure 29. The order policies are processed in.

## Merging and Conflicts

PolicyPak Scripts & Triggers Manager will merge all policies that come from the Group
Policy method (and/or policies and collections deployed from methods other than Group Policy),
unless there is a conflict.

## Precedence

Policies can be delivered by Group Policy and non-Group Policy methods such as Microsoft Endpoint
Manager (SCCM and Intune) via PolicyPak Exporter or PolicyPak Cloud. As
such, the PolicyPak engine needs to make a final determination whether there is any
overlap of policies. Here is how the precedence works:

- Policies delivered through PolicyPak Cloud have the lowest precedence.
- Policies delivered through PolicyPak files have the next highest precedence.
- Policies delivered through PolicyPak Group Policy directives have the highest
  precedence.


