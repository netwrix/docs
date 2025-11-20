---
title: "How are Terminal Services and/or Citrix connections licensed?"
description: "How are Terminal Services and/or Citrix connections licensed?"
sidebar_position: 10
---

# How are Terminal Services and/or Citrix connections licensed?

To be in compliance with Netwrix Endpoint Policy Manager (formerly PolicyPak) licensing, you must
express the number of inbound Terminal Server or Citrix inbound connections you are licensed for.

For instance, if you want to use Endpoint Policy Manager Group Policy Edition with Terminal Services
and/or Citrix, and you have a farm with 3 servers and 250 inbound connections, you must license all
the inbound connections (250) as if they were counted in Active Directory.

Therefore to be fully compliant, you would license the number of computers in Active Directory, plus
the inbound Terminal Server and/or Citrix inbound connections. If you don't wish to run Endpoint
Policy Manager Group Policy Edition on your Terminal Services or Citrix machines, these inbound
connections do not need to be declared at purchase time.

For example scenarios of how to license Endpoint Policy Manager Group Policy Edition with Citrix
and/or Terminal Services, please
see [Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.policypak.com/purchasing/vdi-licensing-scenarios/)[.](https://www.policypak.com/support-sharing/citrix-licensing-scenarios.html)

