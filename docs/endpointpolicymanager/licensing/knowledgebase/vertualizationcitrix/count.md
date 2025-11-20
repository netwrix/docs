---
title: "What must I show to prove my current RDS and/or Citrix, or other Multi-Session windows concurrent license count for Endpoint Policy Manager Cloud (or if on-prem LT cannot auto-discover them)?"
description: "What must I show to prove my current RDS and/or Citrix, or other Multi-Session windows concurrent license count for Endpoint Policy Manager Cloud (or if on-prem LT cannot auto-discover them)?"
sidebar_position: 40
---

# What must I show to prove my current RDS and/or Citrix, or other Multi-Session windows concurrent license count for Endpoint Policy Manager Cloud (or if on-prem LT cannot auto-discover them)?

It is optional to license RDS and/or Citrix XenApp, and/or Citrix XenDesktop connections for use
with Netwrix Endpoint Policy Manager (formerly PolicyPak). When you install the Endpoint Policy
Manager CSE on a RDS or Citrix XenApp server, or within Citrirx XenDesktop, you must pay for every
connection.

In other words, if one Citrix server can handle 100 inbound connections, that would require a
declaration of 100 Endpoint Policy Manager licenses. See
[Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.policypak.com/purchasing/vdi-licensing-scenarios/)
for additional information on how we count licenses for any kind of multi-session Windows.

## On-Prem / Active Directory Notes

If you do choose to enable those locations for use with Endpoint Policy Manager, you need to first
try to use our LT tool to learn about your Citrix and RDS licenses. But if the Endpoint Policy
Manager LT tool cannot discover them, you will likely hear from our sales team asking what the
accurate count is. This document will help you through that.

## Endpoint Policy Manager Cloud Notes

When the Endpoint Policy Manager Cloud client is installed on an RDS or Citrix machine, there is no
way to know how many licenses should be claimed. Endpoint Policy Manager Cloud sees the install as
one license, when in reality one RDS or Citrix machine could be handling 10, 25 or 100 inbound
connections.

Therefore in both cases, on-prem and Endpoint Policy Manager Cloud, you need to declare how many RDS
or Citrix licenses you will actually use.

Then, what you'll pay for in Endpoint Policy Manager Cloud looks like this:

- Actual monthly or yearly usage (for desktop and laptops)
- All the RDS or Citrix connections as if ALL were being used

For example, if you were a Endpoint Policy Manager Cloud monthly customer with 500 laptops (but 222
in use) and two Citrix servers which would handle 100 incoming connections, your monthly cost would
be:

- 222 licenses (for your laptops which are in use), and
- 100 licenses for your two Citrix servers (even if you are not using all the connections all month)

Once you understand the licensing model, there are two ways to get us what we need:

Option 1: Microsoft RDS licensing tool

Option 2: Citrix License Admin Console

![154_1_image0021](/images/endpointpolicymanager/license/virtualization/154_1_image0021.webp)

If you choose option 1, please take this screenshot and return it to us:

![154_2_image004](/images/endpointpolicymanager/license/virtualization/154_2_image004.webp)

:::note
In this example this would be counted as 50 + 50 or, 100 concurrent RDS licenses.
:::


If you choose option 2, please take this screenshot and send it to us

![154_3_image005](/images/endpointpolicymanager/license/virtualization/154_3_image005.webp)

:::note
In this example the count of licenses would be 10 (Presentation) + 10 (XenDesktop
System) + 10 (User), or 30 concurrent licenses.
:::


Therefore, wherever you pay either Microsoft or Citrix, Endpoint Policy Manager also gets paid a
license (whichever is higher,if one is higher).

:::note
If you purchased or acquired either Microsoft Volume License keys, or got your keys from
the Microsoft CSP (Cloud Solution Provider) Program, you might find that these licenses show up as
500 licenses purchased, instead of the actual quantity you purchased. In this case Endpoint Policy
Manager License Request Tool (LT) will think you have purchased 500 licenses, where you might have
bought only 10, 20, etc.
:::


![154_4_image001_950x198](/images/endpointpolicymanager/license/virtualization/154_4_image001_950x198.webp)

If this is your situation, simply express the raw number of purchased licenses to your sales or
renewals person.

