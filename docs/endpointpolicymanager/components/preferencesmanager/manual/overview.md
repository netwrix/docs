---
title: "Preferences Manager"
description: "Preferences Manager"
sidebar_position: 20
---

# Preferences Manager

:::note
Before reading this section, please ensure you have read the [Installation Quick Start](/docs/endpointpolicymanager/gettingstarted/overviewinstall/overviewinstall.md), which will help you
learn to do the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure
- Optionally, if you don't want to use Group Policy, read the section in Appendix A:
  [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) on Group Policy and
  non–Group Policy methods (MEMCM, KACE, and MDM service or Netwrix Endpoint Policy Manager
  (formerly PolicyPak) Cloud) to deploy your directives.

Microsoft Group Policy Preferences are great because they let you configure 21 categories of items,
including the following a,nd many more.

- Printers
- Shortcuts
- Drive maps
- VPN settings
- Device lock-down
- Regional settings

![about_policypak_gpo_export](/images/endpointpolicymanager/preferences/about_endpointpolicymanager_gpo_export.webp)

Despite these advantages, Microsoft's Group Policy Preferences have some issues that cannot be
overcome without a little help. That's where Endpoint Policy Manager Preferences Manager comes in.

## Main Concepts

Endpoint Policy Manager Preferences Manager does the following jobs:

- It maintains the compliance of a Group Policy Preference item even when the computer is offline.
- It enables a Group Policy Preference item to be delivered without using Active Directory Group
  Policy. Therefore, with Endpoint Policy Manager Preferences Manager, you may now use Microsoft
  Endpoint Manager (SCCM and Intune), LANDesk, or KACE to deliver Group Policy Preferences without
  the inbox Group Policy mechanism being involved.
- In conjunction with the Endpoint Policy Manager Cloud service, or your own mobile device
  management (MDM) service, you can deliver Group Policy Preference items to computers over the
  Internet (to both domain-joined and non-domain-joined machines). For more information on Endpoint
  Policy Manager Cloud, see Appendix E:
  [Setup, Download, Install, and Verify](/docs/endpointpolicymanager/gettingstarted/cloudmanual/quickstart/quickstart.md) and User Guide. For more
  information about using Endpoint Policy Manager with an MDM service, see Appendix A:
  [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md).

:::note
If you use the Endpoint Policy Manager Cloud service, you can deliver Group Policy
Preferences directives even to non-domain-joined machines.
:::


:::note
See
[Which settings can be managed with the Preferences Manager component?](/docs/endpointpolicymanager/components/admintemplatesmanager/knowledgebase/exportinggrouppolicypreferences/settings.md) for additional
information on Endpoint Policy Manager Preferences Manager used with SCCM, Endpoint Policy Manager
Cloud, or an MDM service,
:::


The basic way to use Endpoint Policy Manager Preferences Manager is to perform the following
procedures:

- Create a Microsoft Group Policy Preferences directive on your Windows administrative machine using
  the Microsoft GPMC and Group Policy Preferences Editor.
- Deliver the directive to the client machines. If you use Group Policy as the delivery mechanism,
  the directive is received via client machines. You can also use Endpoint Policy Manager
  Preferences Manager to deliver it via the following ways:

  - Microsoft Endpoint Manager (SCCM and Intune)
  - Your own systems management software
  - Endpoint Policy Manager Cloud service

- Allow the client machine to embrace the directives and perform the work.

This way you are not required to use the Group Policy mechanism as the transport to deploy Group
Policy Preferences directives.

## Moving Parts

Endpoint Policy Manager Preferences Manager has the following main components:

- A management station — Start out by creating a standard Group Policy Preference item using the
  GPMC you use every day. Then export the settings using the Endpoint Policy Manager Preferences
  Manager Export wizard. You can export these settings for use with Endpoint Policy Manager Cloud,
  or deploy these settings using methods other than Group Policy methods.
- The Endpoint Policy Manager client-side extension (CSE) — This runs on the client (target)
  machine. It is the same CSE for all Endpoint Policy Manager products. There isn't anything
  separate to install.
- Endpoints — Endpoints must be licensed for Endpoint Policy Manager Preferences Manager using one
  of the licensing methods.
- Endpoint Policy Manager Exporter (optional) — A free utility that lets you take Microsoft Group
  Policy Preferences and our other Endpoint Policy Manager XML data files and wrap them into a
  portable MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune), or your own
  systems management software.

![about_policypak_gpo_export_1](/images/endpointpolicymanager/preferences/about_endpointpolicymanager_gpo_export_1.webp)

Endpoint Policy Manager Preferences Manager does not require any particular type of domain
controllers (DCs). Nothing is installed on any DC, and you don't need to extend the Active Directory
schema. Additionally, you do not need to install any server components, upgrade any servers or DCs,
or buy any server-side infrastructure. There is no requirement for domain mode or functional level.
To be clear, every client computer (Windows 7 and higher) or Terminal Services (RDS)/Citrix machine
(Windows Server 2008 or higher) must have the Endpoint Policy Manager CSE installed and licensed.


