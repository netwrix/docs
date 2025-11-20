---
title: "Start Screen & Taskbar Manager"
description: "Start Screen & Taskbar Manager"
sidebar_position: 30
---

# Start Screen & Taskbar Manager

:::note
Before reading this section, please ensure you have read
[Installation Quick Start](/docs/endpointpolicymanager/gettingstarted/overviewinstall/overviewinstall.md), which will help you
learn to do the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the section in Appendix A: Advanced Concepts
on Group Policy and non-Group Policy methods (MEMCM, KACE, and MDM service or Endpoint Policy
Manager Cloud) ([Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md)) to
deploy your directives.

Netwrix Endpoint Policy Manager (formerly PolicyPak) Start Screen & Taskbar Manager enables you to
perform the following operations on Windows 10:

- Place specific tiles for Desktop Edge and Universal Windows Platform (UWP) applications into your
  own desired Start Menu groups
- Remove all existing Start Menu groups (created by users or default from Microsoft)
- Configure the Start Menu to enable users to create their own groups
- Pin applications to the Taskbar or remove user-pinned applications from the Taskbar

:::note
For an overview of Endpoint Policy Manager Start Screen & Taskbar Manager, watch the
videos at
[https://www.policypak.com/products/endpointpolicymanager-start-screen-taskbar-manager.html](https://www.policypak.com/products/endpointpolicymanager-start-screen-taskbar-manager.html).
:::


The basic way to use Start Screen & Taskbar Manager is as follows:

- Create rules to express which applications should appear in which Start Menu group
- Export the Start Screen & Taskbar Manager rules and deliver them using:

  - Microsoft Endpoint Manager (SCCM and Intune)
  - Your own systems management software
  - A mobile device management (MDM) service
  - Endpoint Policy Manager Cloud service

- Allow the client machine with the Endpoint Policy Manager client-side extension (CSE) to embrace
  the directives and perform the work.

:::note
If you use the Endpoint Policy Manager Cloud service, you can deliver Group Policy
settings even to non-domain-joined machines over the Internet.
:::


## Moving Parts

- A management station. The Endpoint Policy Manager Admin Console MSI must be installed on your
  management station where you create group policy objects (GPOs). Once it's installed, you'll see
  the Endpoint Policy Manager | Start Screen Manager node and Endpoint Policy Manager | Taskbar
  Manager node.
- The Endpoint Policy Manager CSE. This runs on the client (target) machine and is the same CSE for
  all Endpoint Policy Manager products. There isn't anything separate to install, and the Endpoint
  Policy Manager CSE must be present in order to accept Endpoint Policy Manager Start Screen &
  Taskbar Manager directives via Group Policy, or when using Microsoft Endpoint Manager (SCCM and
  Intune), KACE, MDM, or similar utilities.
- Endpoints. In order to use these, they must be licensed for Endpoint Policy Manager Start Screen &
  Taskbar Manager using one of the licensing methods.
- Endpoint Policy Manager Exporter (optional). A free utility that lets you take Endpoint Policy
  Manager Admin Templates Manager and our other products' XML files and wrap them into a "portable"
  MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune), an MDM service, or
  your own systems management software.


