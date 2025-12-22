---
title: "Processing Order and Precedence within a GPO"
description: "Processing Order and Precedence within a GPO"
sidebar_position: 90
---

# Processing Order and Precedence within a GPO

Within a particular GPO (Computer or User side), the processing order is counted in numerical order.
So lower-numbered collections attempt to process first, and higher-numbered collections attempt to
process last. Then, within any collection, each policy is processed in numerical order from lowest
to highest.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/processing_order_and_precedence.webp)

Within any collection, each policy is processed in numerical order from lowest to highest.

Policies can be delivered by Group Policy and non-Group Policy methods, such as Microsoft Endpoint
Manager (SCCM and Intune) via Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud. As
such, the Endpoint Policy Manager engine needs to make a final determination whether there is any
overlap of policies. Here is how the precedence works:

- Policies delivered through Endpoint Policy Manager Cloud have the lowest precedence.
- Policies delivered through Endpoint Policy Manager files have the next highest precedence.
- Policies delivered through Endpoint Policy Manager Group Policy directives have the highest
  precedence.

After that, user-side policy has precedence over computer-side (Switched) policy. This occurs in
order to specify a baseline setting for various computers. Then, specific (overriding) policies can
be used when specific users log on. If SecureRun™ is enabled and performs work (i.e., blocking
processes), then user-created processes aren’t created unless expressly allowed with the Allow and
log rule. At this point, each rule is applied one by one to perform elevation (or Block or Allow and
log).



