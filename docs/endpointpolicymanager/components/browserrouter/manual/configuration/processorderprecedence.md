---
title: "Understanding Processing Order and Precedence"
description: "Understanding Processing Order and Precedence"
sidebar_position: 100
---

# Understanding Processing Order and Precedence

When you use Endpoint Policy Manager Browser Router you might have multiple policies and/or
conflicting settings. When you do, you need to troubleshoot by understanding the processing order
and precedence order as explained in the following sections.

## Processing Order

Within a particular GPO (Computer or User side), the processing order is counted in numerical order.
So, lower-numbered collections attempt to process first, and higher-numbered collections attempt to
process last.

![about_policypak_browser_router_42](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_42.webp)

Within any collection, each policy is processed in numerical order from lowest to highest.

![about_policypak_browser_router_43](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_43.webp)

## Precedence

Policies can be delivered by Group Policy and non-Group Policy methods, such as Microsoft Endpoint
Manager (SCCM and Intune) via Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud. As
such, the Endpoint Policy Manager engine needs to make a final determination whether there is any
overlap of policies. Here is how the precedence works:

- Policies delivered through Endpoint Policy Manager Cloud have the lowest precedence.
- Policies delivered through Endpoint Policy Manager files have the next highest precedence.
- Policies delivered through Endpoint Policy Manager Group Policy directives have the highest
  precedence.

After that, user-side policy has precedence over computer-side (switched) policy. This is so that
you can specify a baseline setting for various computers and then have particular (overriding)
policies when specific users log on.

If policies are on the same side, a more-specific URL pattern takes precedence over a less-specific
URL pattern. For example, mail.policypak.com takes precedence over \*.policypak.com.

If patterns are equally specific, a pattern in a more specific policy always takes precedence over a
pattern in a less-specific policy. For example, a pattern in a GPO linked to an OU wins over a
pattern in a GPO linked to a domain (unless the OU GPO is set to **Enforced**). In other words,
Endpoint Policy Manager Browser Router honors all Group Policy rules and constructs.

If policies are equally specific, the policy with a higher precedence (which is determined based on
the link order for GPOs and file names for XML Data policies) takes precedence.

If policies have the same precedence (e.g., we have two patterns in the same GPO), the "last"
pattern takes precedence over previous patterns. For example, patterns in Collection 2 win over
patterns in Collection 1, and any pattern in a collection wins over all previous patterns in the
same collection.

## Rule Precedence

Endpoint Policy Manager Browser Router has four rule types.

![about_policypak_browser_router_14](/images/endpointpolicymanager/browserrouter/about_endpointpolicymanager_browser_router_14.webp)

The following precedence order applies to these rule types.

| Precedence  | Rule          |
| ----------- | ------------- |
| Most        | URL           |
| Second Most | Internet Zone |
| Third Most  | Wildcard      |
| Last        | Regex         |

For instance, if you have a specific URL rule, like google.com gets routed to Firefox, when end
users go directly to google.com, it will open in Firefox. If \*.google.com is routed to Internet
Explorer, then when users go to gmail.google.com, it will open in Internet Explorer.

Next, we'll look at the precedence of specific rule types of Wildcard and RegEx.

## Precedence with Wildcards

Example precedence order with wildcards would be arranged in the following way:

- google\*
- g\*
- \*

## Precedence with RegEx

Items with additional RegEx characters will be considered more specific than those with fewer RegEx
characters. So an example of priority order would be as follows:

- (x)(.\*)(x)(.\*)(x).com
- (blue)(.\*)
- (.\*)


