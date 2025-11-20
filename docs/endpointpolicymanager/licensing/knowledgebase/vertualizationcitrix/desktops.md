---
title: "Are there any special Endpoint Policy Manager licensing issues for virtual desktops?"
description: "Are there any special Endpoint Policy Manager licensing issues for virtual desktops?"
sidebar_position: 50
---

# Are there any special Endpoint Policy Manager licensing issues for virtual desktops?

This depends on what kind of virtual desktops they are:

- Session Based / Citrix Shared machines can only be licensed when the customer is Netwrix Endpoint
  Policy Manager (formerly PolicyPak) Enterprise Edition or Endpoint Policy Manager Professional
  Edition and the Citrix licenses are accounted for.
- Same with Windows Virtual Desktop (if using Multi-session Windows). Those sessions each count as
  onelicense. See
  [Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.policypak.com/purchasing/vdi-licensing-scenarios/)
  for additional information.
- However, full VDI single-session desktops are licensed in the same manner as physical desktops.
  From a licensing perspective, there is no difference between the two. If there's a computer
  account in Active Directory, and it's active, it counts your Endpoint Policy Manager licensing. In
  this case you may use it with Endpoint Policy Manager SaaS / Cloud.

