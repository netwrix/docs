---
title: "MDM & UEM Tools"
description: "MDM & UEM Tools"
sidebar_position: 50
---

# MDM & UEM Tools

Deploying PolicyPak Directives without Group Policy

If you're reading this section, you're likely interested in using Netwrix PolicyPak in conjunction with Microsoft Endpoint Configuration Manager (MEMCM) (formerly
known as SCCM), Microsoft Intune, KACE, or your own systems management utility. The bullet points
below give the general idea of how you can use PolicyPak with these utilities.

- All PolicyPak components can export their settings as XML files.
- Those XML files can be imported into the PolicyPak Exporter.
- The PolicyPak Exporter makes MSI files.
- Those MSI files can be delivered using any technique you want:

  - Using an mobile device management (MDM) provider like: Microsoft Intune, VMware Workspace ONE,
    etc.
  - Using an unified endpoint management (UEM) tool like: SCCM, KACE, and so on.

Therefore, you can deliver your settings to any machine with all the PolicyPak
components (PolicyPak Least Privilege Manager, PolicyPak Application
Settings Manager, PolicyPak Browser Router, PolicyPak File Associations
Manager, PolicyPak Preferences Manager, PolicyPak Security Settings
Manager, and all the others) without using Group Policy as the delivery mechanism.

:::note
For an overview of using PolicyPak Exporter with the PolicyPak
components, please see the following video:
[Deploying PolicyPakdirectives without Group Policy (PolicyPak Exporter Utility)](/docs/policypak/gettingstarted/misc/videos/methods/exporterutility.md).
:::


:::warning
Note that non-domain-joined machines are not supported with PolicyPak
products, unless you are using the MDM method. That is, the machine must have been previously
domain-joined and be in an organizational unit (OU) that is licensed (or will be licensed from a
licensing file). To deliver settings to non-domain-joined machines, you must use PolicyPak Cloud.
:::


In the next sections, we're going to work through the following procedures:

- Exporting settings from each PolicyPak application as an XML file
- Using the PolicyPak Exporter utility to make an MSI file
- Learning what happens after the MSI file is delivered

## Reasons to Use XML Data Files to Deliver Settings

There are a variety of scenarios in which you might not> want to use Group Policy to deliver
PolicyPak directives, including the following:

- You are using MEMCM, LANDesk, KACE, or similar software for software deployment, and your team
  doesn't want to use Group Policy, but wants to use the components and functionality of PolicyPak.
- You are using a mobile device management (MDM) service such as Microsoft Intune, MobileIron, or
  VMware Workspace ONE (formerly known as AirWatch).
- You have clients who have a domain-joined account but haven't been to the office to get the Group
  Policy settings.
- You have a special machine that is domain-joined, but you don't want it to get Group Policy.
  Instead, you want it to get some PolicyPak directives.
- You are using Microsoft Intune or another remote management system to manage machines, and you
  want to add Group Policy functionality, but that utility doesn't have Group Policy functionality.

