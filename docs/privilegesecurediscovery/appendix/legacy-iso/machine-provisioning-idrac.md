---
title: "Machine provisioning with iDRAC"
description: "Find the Dell references for provisioning a PowerEdge server through the integrated Dell Remote Access Controller (iDRAC) and its network settings."
sidebar_position: 30
---

This page applies to the deprecated ISO appliance on Dell PowerEdge hardware. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

The following Dell article describes how to set up and manage the integrated Dell Remote Access Controller (iDRAC) or the Chassis Management Controller (CMC) for Dell PowerEdge servers and blades: [How to set up and manage your iDRAC or CMC for Dell PowerEdge servers and blades](https://www.dell.com/support/kbdoc/en-us/000134243/how-to-setup-and-manage-your-idrac-or-cmc-for-dell-poweredge-servers-and-blades).

The iDRAC accepts a password of at most 20 characters, but doesn't indicate when a password exceeds this length. Dell lists the recommended characters for user names and passwords in the [iDRAC9 User's Guide](https://www.dell.com/support/manuals/en-us/idrac9-lifecycle-controller-v3.0-series/idrac_3.00.00.00_ug/recommended-characters-in-user-names-and-passwords?guid=guid-2255506d-6aa3-446c-909b-4fffb41c4cfb&lang=en-us).

## Configure the iDRAC9 and Lifecycle Controller network settings

For the network settings of the iDRAC9 and the Lifecycle Controller, see Dell's article [How to configure the iDRAC9 and the Lifecycle Controller network IP](https://www.dell.com/support/kbdoc/en-us/000177212/dell-poweredge-how-to-configure-the-idrac9-and-the-lifecycle-controller-network-ip). To configure the settings from the server console, see [Dell R430 and R440 iDRAC 9 network configuration](./dell-r430-r440-idrac-9-network-configuration.md).
