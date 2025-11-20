---
title: "Understanding Processing Order and Precedence"
description: "Understanding Processing Order and Precedence"
sidebar_position: 30
---

# Understanding Processing Order and Precedence

When you use Endpoint Policy Manager Java Rules Manager you might have multiple policies and/or
conflicting settings. When you do, you should attempt to troubleshoot by understanding the
processing order and precedence order as explained in the following sections.

## Processing Order

Within a particular GPO (Computer or User side), the processing order is counted in numerical order.
So, lower-numbered collections attempt to process first, and higher-numbered collections attempt to
process last. Then, within any collection, each policy is processed in numerical order from lowest
to highest.

![using_policypak_java_rules_11](/images/endpointpolicymanager/javaenterpriserules/using_endpointpolicymanager_java_rules_11.webp)

![using_policypak_java_rules_12](/images/endpointpolicymanager/javaenterpriserules/using_endpointpolicymanager_java_rules_12.webp)

## Precedence

Policies can be delivered by Group Policy and non-Group Policy methods such as Microsoft Endpoint
Manager (SCCM and Intune) via Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud. As
such, the Endpoint Policy Manager engine needs to make a final determination whether there is any
overlap of policies. Here is how the precedence works:

- Policies delivered through Endpoint Policy Manager Cloud have the lowest precedence.
- Policies delivered through Endpoint Policy Manager files have the next highest precedence.
- Policies delivered through Endpoint Policy Manager k Group Policy directives have the highest
  precedence.


