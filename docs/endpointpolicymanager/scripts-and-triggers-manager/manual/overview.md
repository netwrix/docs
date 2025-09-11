---
title: "Scripts & Triggers Manager"
description: "Scripts & Triggers Manager"
sidebar_position: 20
---

# Scripts & Triggers Manager

:::note
Before reading this section, please ensure you have read Book 2:
[Installation Quick Start](/docs/endpointpolicymanager/manuals/introductionandquick/overviewinstall/overviewinstall.md), which will help you
learn to do the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the section in Appendix A:
[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/manuals/introductionandquick/mdm/uemtools/uemtools.md) to deploy your
directives.

Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts & Triggers Manager enables you to
perform the following operations on Windows 10:

- Deliver scripts of most usual types (Batch, Powershell, VB and JavaScript)
- Deliver scripts to both User and Computer sides
- Deliver an "On" script when conditions are true, and an "Off" script when conditions are false.

:::note
Watch this video for an overview of Endpoint Policy Manager Scripts & Triggers Manager:
[Use with on-prem Group Policy](/docs/endpointpolicymanager/knowledgebase/scriptstriggers/videolearningcenter/gettingstarted/onpremise.md)
:::


The basic way to use Scripts & Triggers Manager is as follows:

- Create a rule to express which file extensions should launch which applications.
- Export the Scripts & Triggers Manager rules and deliver them using:

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

- A management station. The Endpoint Policy Manager Admin Console MSI must be installed on the
  management station where you create group policy objects (GPOs). Once it's installed, you'll see
  the Endpoint Policy Manager | Endpoint Policy Manager Scripts & Triggers Manager node.
- The Endpoint Policy Manager CSE. This runs on the client (target) machine and is the same CSE for
  all Endpoint Policy Manager products. There isn't anything separate to install, and the Endpoint
  Policy Manager CSE must be present in order to accept Endpoint Policy Manager Scripts & Triggers
  Manager directives via Group Policy, or when using Microsoft Endpoint Manager (SCCM and Intune),
  KACE, MDM, or similar utilities.
- Endpoints. In order to use these, they must be licensed for Endpoint Policy Manager Scripts &
  Triggers Manager using one of the licensing methods.
- Endpoint Policy Manager Exporter (optional). A free utility that lets you take Endpoint Policy
  Manager Scripts & Triggers Manager and our other products' XML files and wrap them into a
  "portable" MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune), an MDM
  service, or your own systems management software.
