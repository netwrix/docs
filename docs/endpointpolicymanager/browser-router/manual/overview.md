---
title: "Browser Router"
description: "Browser Router"
sidebar_position: 20
---

# Browser Router

:::note
Before reading this section, please ensure you have read
[Installation Quick Start](/docs/endpointpolicymanager/manuals/introductionandquick/overviewinstall/overviewinstall.md), which explain how to:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the sectionon **Advanced Concepts on Group
Policy and non-Group Policy methods** (MEMCM, KACE, and MDM service or Netwrix Endpoint Policy
Manager (formerly PolicyPak) Cloud), located
in[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/manuals/introductionandquick/mdm/uemtools/uemtools.md). This information on
how to deploy your directives.

:::note
Watch this video for an overview of Endpoint Policy Manager Browser Router:
[](http://www.endpointpolicymanager.com/video/endpointpolicymanager-browser-router-ensure-users-utilize-the-right-browser-for-the-right-website.html)[Ensure users utilize the RIGHT browser for the right website !](/docs/endpointpolicymanager/knowledgebase/browserrouter/videolearningcenter/gettingstarted/rightbrowser.md).
:::


Let's say you wanted to apply the following routing policies:

- www.microsoft.com is set to Internet Explorer.
- www.gpanswers.com is set to Firefox.
- \*.endpointpolicymanager.com is set to Edge.
- abc.endpointpolicymanager.com is set to Firefox via App-V.
- xyz.endpointpolicymanager.com is set to Chrome via ThinApp.
- All websites with \*xxx\* in the name are blocked; that is, a browser will not launch for them.

With Endpoint Policy Manager Browser Router, you can apply all of the above policies and more.
Browser Router enables you to perform the following functions:

- Assemble settings (policies) into collections.
- Set Item-Level Targeting on policies and collections.
- Deliver user-side policies to the Computer side without Group Policy Loopback mode.
- Create exact criteria for when specific websites should open, and in which browser.
- Export policies or collections as XML files (which can be used with Endpoint Policy Manager
  Exporter and Endpoint Policy Manager Cloud). See
  [Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/manuals/introductionandquick/mdm/uemtools/uemtools.md) for more details.
- Set custom messages when you have blocked a website.
- Dynamically set Internet Explorer 11 Enterprise Mode (IE 11 EM) and Document Modes site lists.
- Automatically write Internet Explorer 11 EM version 1 or version 2 site lists, based on the
  machine type.
- Route all intranet traffic from Microsoft Edge to IE 11.
- Route all sites on Internet Explorer Site List from Edge to IE 11.

If you would like to perform your own Quickstart with Endpoint Policy Manager Browser Router, it is
recommended that you have one endpoint (Windows 10) set up with the following browsers:

- Internet Explorer 11
- Firefox (latest)
- Chrome (latest)

There are more advanced scenarios, but this will get you going quickly.

There are a few basic ways to use Endpoint Policy Manager Browser Router. First, you can create one
or multiple Microsoft Group Policy Objects (GPOs) using Endpoint Policy Manager Browser Router. If
you use Group Policy as the delivery mechanism, that directive is deployed to client machines.
Alternatively, you can export the Endpoint Policy Manager Browser Router rules and deliver them via
the following methods:

Microsoft Endpoint Manager (SCCM and/or Intune)

- Systems management software
- Endpoint Policy Manager Cloud service

The client machine with the Endpoint Policy Manager client-side extension (CSE) embraces the
directives and performs the work.

:::note
If you use the Endpoint Policy Manager Cloud service, you can deliver Group Policy
settings over the Internet, even to non-domain-joined machines.
:::


:::note
You can also use Endpoint Policy Manager Browser Router with your Citrix or RDS servers.
See the following video for more information:
[Using PP Browser Router on Citrix or RDS servers with published browser applications](/docs/endpointpolicymanager/knowledgebase/browserrouter/videolearningcenter/citrixvirtualapps/citrix.md).
:::


## Endpoint Policy Manager Browser Router Moving Parts

You will need the following to get started with Endpoint Policy Manager Browser Router:

- A management station. You must install the Endpoint Policy Manager Admin Console MSI on the
  management station where you create GPOs. Once it's installed, you'll see the Endpoint Policy
  Manager | Endpoint Policy Manager Browser Router node.
- The Endpoint Policy Manager CSE that runs on the client (target) machine. This is the same CSE for
  all Endpoint Policy Manager products; there isn't anything separate to install. The Endpoint
  Policy Manager CSE must be present in order to accept Endpoint Policy Manager Security Settings
  Manager directives when using Microsoft Endpoint Manager (SCCM and Intune), KACE, similar
  utilities, or Endpoint Policy Manager Cloud.
- Endpoints. Endpoints must be licensed for Endpoint Policy Manager Browser Router using one of the
  licensing methods.
- Endpoint Policy Manager Exporter (optional). This is a free utility that lets you take exported
  Group Policy and Endpoint Policy Manager XML files and wrap them into a "portable" MSI file for
  deployment using Microsoft Endpoint Manager (SCCM and Intune) or your own systems management
  software.
