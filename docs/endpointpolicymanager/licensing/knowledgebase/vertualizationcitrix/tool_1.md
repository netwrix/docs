---
title: "Why must I run LT from a Windows Server if I want to properly count Citrix / Terminal Services / RDS connections?"
description: "Why must I run LT from a Windows Server if I want to properly count Citrix / Terminal Services / RDS connections?"
sidebar_position: 30
---

# Why must I run LT from a Windows Server if I want to properly count Citrix / Terminal Services / RDS connections?

When you license Citrix / Terminal Services / RDS, you purchase keypak licenses in blocks of 50 from
Microsoft and Citrix, and apply them to your servers.

Netwrix Endpoint Policy Manager (formerly PolicyPak) LT attempts to read these keypak files and
report on your maximum inbound connections. In short, LT can only look for these Keypack licenses
when running on a Windows server and not a Windows client machine. That is what this message is
about.

![352_2_image001](</images/endpointpolicymanager/license/virtualization/352_1_image001.webp>)

:::note
Sometimes LT can acquired the correct number of RDS connections, and sometimes it cannot.
:::


![352_2_image002](/images/endpointpolicymanager/license/virtualization/352_2_image002.webp)

To be compliant with our EULA, if the count returned by LT shows zero, or otherwise fails to acquire
the number of Citrix / Terminal Services / RDS licenses, you must manually declare them to your
sales representative.

There are also multiple ways the Endpoint Policy Manager On-Prem suite can be licensed for Citrix.
For understanding all the scenarios, please see the following additional technotes:

- [How are Terminal Services and/or Citrix connections licensed?](/docs/endpointpolicymanager/licensing/knowledgebase/vertualizationcitrix/terminalservices.md)
- [Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.policypak.com/purchasing/vdi-licensing-scenarios/)

