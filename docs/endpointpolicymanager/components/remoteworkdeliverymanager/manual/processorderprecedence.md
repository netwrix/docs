---
title: "Understanding Processing Order and Precedence within a GPO"
description: "Understanding Processing Order and Precedence within a GPO"
sidebar_position: 50
---

# Understanding Processing Order and Precedence within a GPO

Within a particular GPO (User side or Computer side), policies and collections process in numerical
order. So, lower-numbered policies attempt to process first, and higher-numbered policies attempt to
process last. Then, lower-numbered collections attempt to process first, and higher-numbered
collections attempt to process last.

![understanding_processing_order](/images/endpointpolicymanager/remoteworkdelivery/understanding_processing_order.webp)

Within any collection, there may be other collections, as well as policies. As such, each policy and
collection is also processed in numerical order, starting at each level with the lowest-numbered
policies and collections.

## Understanding Merging and Conflicts

Netwrix Endpoint Policy Manager (formerly PolicyPak) Remote Work Delivery Manager will simply merge
all Endpoint Policy Manager Remote Work Delivery Manager policies that come from the Group Policy
method (and policies deployed from the non-Group Policy methods and collections), unless there is a
conflict. If there is a conflict, the last policy wins.

## Precedence Between Delivery Types

Endpoint Policy Manager Remote Work Delivery Manager policies can be delivered by Group Policy and
non-Group Policy methods such as MEMCM (via Endpoint Policy Manager Exporter or Endpoint Policy
Manager MDM) or Endpoint Policy Manager Cloud. As such, the Endpoint Policy Manager Remote Work
Delivery Manager engine needs to make a final determination regarding whether there is any conflict
between Endpoint Policy Manager Remote Work Delivery Manager policies (which are essentially rules).
Here is how precedence works:

- Polices delivered by Endpoint Policy Manager Cloud have the lowest precedence.
- Endpoint Policy Manager file-based policies (including those delivered from an MDM service) have
  the next highest precedence.
- Endpoint Policy Manager Group Policy policies have the highest precedence.


