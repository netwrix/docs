---
title: "File Associations Manager"
description: "File Associations Manager"
sidebar_position: 10
---

# File Associations Manager

:::warning
Even though PolicyPak MDM and PolicyPak Cloud can deliver a
wide variety of PolicyPak and Group Policy settings to non-domain-joined machines,
neither the in-box Microsoft method, nor PolicyPak File Associations Manager, can
configure machines unless the machine is domain-joined.
:::


This is a self-imposed limitation by Microsoft on this Windows 10 feature.

## About File Associations Manager

:::note
Before reading this section, please ensure you have read
[Installation Quick Start](/docs/policypak/gettingstarted/overviewinstall/overviewinstall.md), which will help you
learn to do the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the section on Advanced Concepts on Group
Policy and non–Group Policy methods (MEMCM, KACE, and MDM service or Netwrix PolicyPak Cloud), located in the
[Least Privilege Manager Implementation QuickStart Guide](/docs/policypak/components/leastprivilegemanager/technotes/implementationguide.md)
to deploy your directives.

PolicyPak File Associations Manager enables you to perform the following operations in
Windows 10:

- Set up file associations for extensions such as .pdf with Acrobat Reader or FoxIT Pro Reader, or
  .zip with WinZip or 7-Zip
- Set up protocol associations like MAILTO: or FTP: to specific applications
- Map an entire category of Windows 10 items
- Map a file extension to a Windows 10 "universal" application, such as Universal Windows Platform
  (UWP)/Metro applications

:::note
For an overview of PolicyPak File Associations Manager, see
[https://www.policypak.com/products/endpointpolicymanager-file-associations-manager.html](https://www.policypak.com/products/endpointpolicymanager-file-associations-manager.html).
:::


The basic way to use PolicyPak File Associations Manager is as follows:

- Create rules to express which file extensions should launch which applications.
- Export the PolicyPak File Associations Manager rules and deliver them using:

  - Microsoft Endpoint Manager (SCCM and Intune) or your own on-prem systems management software
  - A mobile device management (MDM) service
  - PolicyPak Cloud service

- Allow the client machine with the PolicyPak client-side extension (CSE) to embrace
  the directives and perform the work.

:::note
If you use the PolicyPak Cloud service, you can even deliver Group Policy
settings to non-domain-joined machines over the Internet.
:::


## Moving Parts

- A management station: The PolicyPak Admin Console MSI must be installed on the
  management station where you create Group Policy Objects (GPOs). Once installed, you'll see the
  PolicyPak | PolicyPak File Associations Manager node.
- The PolicyPak CSE: This runs on the client (target) machine and is the same CSE for
  all PolicyPak products. There isn't anything separate to install, and the PolicyPak CSE must be present in order to accept PolicyPak File Associations
  Manager directives via Group Policy, or when using Microsoft Endpoint Manager (SCCM and Intune),
  KACE, MDM, or similar utilities.
- Endpoints: In order to use these, they must be licensed for PolicyPak File
  Associations Manager using one of the licensing methods.
- The PolicyPak Exporter (optional): A free utility that lets you take PolicyPak Admin Templates Manager and our other products' XML files and wrap them into a "portable"
  MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune), an MDM service, or
  your own systems management software.


