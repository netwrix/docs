---
title: "Administrative Templates Manager"
description: "Administrative Templates Manager"
sidebar_position: 10
---

# Administrative Templates Manager

:::note
Before reading this section, please see the
[Installation Quick Start](/docs/endpointpolicymanager/gettingstarted/overviewinstall/overviewinstall.md) topic  for more
information on the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, see the
[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) topic for more
information.

Endpoint Policy Manager Admin Templates Manager enables administrators to harness the existing power
of Microsoft's 3000+ Admin Template settings and a lot more.

:::note
See the
[Endpoint Policy Manager Admin Templates: Collections and Item Level Targeting](/docs/endpointpolicymanager/components/admintemplatesmanager/videolearningcenter/admintemplatesmanager/collections.md)
topic for more in formation on Endpoint Policy Manager Admin Templates Manager.
:::


![about_policypak_admin_templates](/images/endpointpolicymanager/adminstrativetemplates/about_endpointpolicymanager_admin_templates.webp)

Here we can see some of Microsoft's Admin Template settings.

![about_policypak_admin_templates_1](/images/endpointpolicymanager/adminstrativetemplates/about_endpointpolicymanager_admin_templates_1.webp)

Endpoint Policy Manager Admin Templates Manager is a node you see within every Group Policy Object
(GPO) you create.

Endpoint Policy Manager Admin Templates Manager enables you to perform the following functions:

- Assemble settings (policies) into collections
- Set Item-Level Targeting on policies and collections
- Deliver user-side policies to computers (without Group Policy Loopback mode)
- Use either Local Storage or Central Storage when choosing definitions
- Search for policies that match certain words in their titles or help text
- Export policies or collections as XML files (available with Endpoint Policy Manager Exporter and
  Endpoint Policy Manager Cloud). See the
  [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) topic for more
  information on using Endpoint Policy Manager with MDM and UEM Tools.

The basic way to use Endpoint Policy Manager Admin Templates Manager is as follows:

- Create a Microsoft GPO using Endpoint Policy Manager Admin Templates Manager. If you use Group
  Policy as the delivery mechanism, it is deployed to client machines.
- If you do not use Group Policy, deploy the GPO using one of these other ways:

  - Microsoft Endpoint Manager (SCCM and Intune)
  - Your own systems-management software
  - An MDM service
  - Endpoint Policy Manager Cloud service

- The client machine embraces the directives and performs the work

Endpoint Policy Manager Admin Templates Manager lets admins use Group Policy to deliver settings and
also lets you use a mechanism other than Group Policy to get policies delivered.

:::note
Additionally, using the Endpoint Policy Manager Cloud service, can even deliver Group
Policy settings to non-domain-joined machines over the Internet.
:::


## Components

Endpoint Policy Manager Admin Templates Manager has the following components:

- A management station — Start out by creating a standard GPO (which will be edited) and then use
  the Endpoint Policy Manager Admin Templates Manager node.
- The Endpoint Policy Manager client-side extension (CSE) — This runs on the client (target)
  machine. It is the same CSE for all Endpoint Policy Manager products. There isn't anything
  separate to install, and the Endpoint Policy Manager CSE must be present in order to accept
  Endpoint Policy Manager Admin Templates Manager directives.
- Endpoints — Must be licensed for Endpoint Policy Manager Admin Templates Manager using one of the
  licensing methods
- Endpoint Policy Manager Exporter (optional) — A free utility that lets you take Endpoint Policy
  Manager Admin Templates Manager and our other products XML files and wrap them into a portable MSI
  file for deployment using Microsoft Endpoint Manager (SCCM and Intune) or your own
  systems-management software.


