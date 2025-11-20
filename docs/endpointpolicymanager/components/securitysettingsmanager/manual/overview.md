---
title: "Security Settings Manager"
description: "Security Settings Manager"
sidebar_position: 40
---

# Security Settings Manager

:::note
Before reading this section, please ensure you have read the [Installation Quick Start](/docs/endpointpolicymanager/gettingstarted/overviewinstall/overviewinstall.md), which will help you
learn to do the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the section in Appendix A:
[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) to deploy your
directives.

Netwrix Endpoint Policy Manager (formerly PolicyPak) Security Settings Manager enables
administrators to harness the power of Microsoft's existing security settings and deliver those
settings without Group Policy (via Microsoft Endpoint Manager [SCCM], KACE, or Endpoint Policy
Manager Cloud). The supported Microsoft security settings can be seen below.  Red lines indicate
these items are not supported by Endpoint Policy Manager.

![about_policypak_security_settings](/images/endpointpolicymanager/securitysettings/about_endpointpolicymanager_security_settings.webp)

:::note
The following items are NOT supported by Endpoint Policy Manager Security Settings
Manager:
:::


- IP Security
- Wired network (IEEE 802.3) policies
- Wireless network (IEEE 802.11) policies
- Advanced audit policies

## Moving Parts

Endpoint Policy Manager Security Settings Manager has the following components:

- A management station — To start, create a standard Group Policy Object (GPO), editing it with the
  security settings you want (**Computer Configuration** **>** **Policies | Security**). Then use
  the **Endpoint Policy Manager** **>** **Endpoint Policy Manager Security Settings Manager** node.
- The Endpoint Policy Manager client-side extension (CSE) — This runs on the client (target)
  machine. It is the same CSE for all Endpoint Policy Manager products. There isn't anything
  separate to install, and the Endpoint Policy Manager CSE must be present in order to accept
  Endpoint Policy Manager Security Settings Manager directives when using Microsoft Endpoint Manager
  (SCCM and Intune), KACE, similar utilities, or Endpoint Policy Manager Cloud.
- Endpoints — Endpoints must be licensed for Endpoint Policy Manager Security Settings Manager using
  one of the licensing methods.
- Endpoint Policy Manager Exporter (optional) — This is a free utility that lets you take Endpoint
  Policy Manager Admin Templates Manager and other Endpoint Policy Manager products' XML files and
  wrap them into a portable MSI file for deployment using Microsoft Endpoint Manager (SCCM and
  Intune), a mobile device management service, or your own systems management software.


