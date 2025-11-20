---
title: "Remote Work Delivery Manager"
description: "Remote Work Delivery Manager"
sidebar_position: 10
---

# Remote Work Delivery Manager

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

Netwrix Endpoint Policy Manager (formerly PolicyPak) Remote Work Delivery Manager (PPRWDM) enables
you to perform the following operations on Windows:

- Copy files from a server to a client
- Copy files recursively within SMB (standard file share) folders
- Keep files up to date between an SMB share and a desktop or laptop
- Copy files from an HTTP(S) source, like OneDrive, Dropbox, Amazon S3, and some other services, to
  a desktop

:::note
See [Install software with SMB (standard share)](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/videos/gettingstarted/smb.md)for an
overview of PolicyPak Remote Work Delivery Manager.
:::


Endpoint Policy Manager Remote Work Delivery Manager allows you to do the following:

- Create a rule to express which files, directory, or patterns, should be copied from which SMB
  share to a client.
- Create a rule to express which file should be copied from an HTTP(s) source to a client.
- Instead of using the Group Policy method, you can export the Endpoint Policy Manager Remote Work
  Delivery Manager rules and deliver them in one of four ways:

  - MEMCM
  - Your own systems management software
  - An MDM service
  - Endpoint Policy Manager Cloud service

- Allow the client machine with the Endpoint Policy Manager client-side extension (CSE) to embrace
  the directives and perform the work.

:::note
If you use theEndpoint Policy Manager Cloud service, you can deliver Group Policy settings
even to non-domain-joined machines over the Internet.
:::


## Moving Parts

- A management station — The Endpoint Policy Manager Admin Console MSI must be installed on the
  management station where you create GPOs. Once it is installed, you'll see the Endpoint Policy
  Manager | Endpoint Policy Manager Remote Work Delivery Manager node.
- The Endpoint Policy Manager CSE — This runs on the client (target) machine and is the same CSE for
  all Endpoint Policy Manager products. There isn't anything separate to install, and the Endpoint
  Policy Manager CSE must be present in order to accept Endpoint Policy Manager Remote Work Delivery
  Manager directives via Group Policy, or when using MEMCM, KACE, MDM, or similar utilities.
- Endpoints — In order to use these, they must be licensed for Endpoint Policy Manager Remote Work
  Delivery Manager using one of the licensing methods, which are described in the [Introduction and Basic Concepts](/docs/endpointpolicymanager/gettingstarted/basicconcepts/basicconcepts.md).
- PolicyPak Exporter (optional) — A free utility that lets you take Endpoint Policy Manager Admin
  Templates Manager and our other products' XML files and wrap them into a portable MSI file for
  deployment using MEMCM, an MDM service, or your own systems management software.


