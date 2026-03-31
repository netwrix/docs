---
title: "How do I license my Citrix, RDS, WVD, VDI or other multi-session Windows version with PolicyPak Cloud ?"
description: "How do I license my Citrix, RDS, WVD, VDI or other multi-session Windows version with PolicyPak Cloud ?"
sidebar_position: 20
---

# How do I license my Citrix, RDS, WVD, VDI or other multi-session Windows version with PolicyPak Cloud ?

When you download your tenant's Netwrix PolicyPak Cloud client
MSI installer, it enables you to acquire a single license for each desktop and laptop you install
the Cloud client on. Typically, these machines serve exactly one person on the machine. On regular
machines, PolicyPak Cloud is licensed per machine.

That being said you may wish to use PolicyPak Cloud with a machine which can serve
multiple people and instances. This scenario would be using PolicyPak Cloud along
with:

- Microsoft RDS / Remote Desktops
- Microsoft Remote Apps
- Citrix Virtual Desktops
- Citrix Virtual Apps
- Windows Virtual Desktops (WVD) with Multi-Session Windows 10.

In all these cases, installing the PolicyPak Cloud client and consuming a single
license will technicallywork.

That being said, this goes against the PolicyPak EULA and is not permitted without an
agreement. As per the EULA:

_Any use of the Licensed Software not specifically authorized by this Agreement is prohibited. An
example prohibited use is using a single_ PolicyPak _Cloud license or_ PolicyPak _On-Prem license on a server computer hosting multiple Managed Connections without paying
for each Managed Connection._

So this doesn't mean you cannot ever use it in this manner. It means that PolicyPak
and your organization must have an acknowledged agreement to use PolicyPak Cloud with
the required number of total licenses.

Here's an example:

- You purchased 400 licenses in PP Cloud.
- You installed PolicyPak Cloud on 200 desktops and 198 laptops.
- With your two remaining PolicyPak Cloud licenses, you

  1. Install one PP Cloud license on a single Citrix Virtual Desktops physical machine, which can
     handle 50 inbound requests.
  2. Install one PP Cloud license on a WVD Multi-Session Windows 10 virtual machine, which can
     handle 20 inbound requests.

You would need an agreement with us for the Citrix Virtual Desktops and WVD Multi-Session Windows.

Typically this would mean that you would need to purchase another 70 total licenses to handle the 70
total inbound requests you want to field. Your PolicyPak Cloud pool of licenses will
go to 470. But you will only (in practice) use the 400 licenses:

- 200 Desktops.
- 200 Laptops.
- 1 for Citrix Virtual Desktops.
- 1 for Windows Virtual Desktops.

Total Usage: 402. Total in your pool after agreement: 470.

This is really no different than how we ask PP Group Policy customers to do. See
[Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.policypak.com/purchasing/vdi-licensing-scenarios/)
for additional information.

In summary: If you want to use PolicyPak Cloud with any kind of multi-session version
of Windows, you need to have enough licenses purchased, and cannot perform the installation on
multi-session Windows without an agreement first.

