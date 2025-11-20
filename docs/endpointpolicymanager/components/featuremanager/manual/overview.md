---
title: "Feature Manager for Windows"
description: "Feature Manager for Windows"
sidebar_position: 20
---

# Feature Manager for Windows

:::note
Before reading this section, please ensure you have read
[Installation Quick Start](/docs/endpointpolicymanager/gettingstarted/overviewinstall/overviewinstall.md), which will help you
with the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the section on
[MDM & UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/overview.md)[MDM & UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/overview.md).

Endpoint Policy Manager Feature Manager for Windows allows you to perform the following operations
on Windows 10 or Windows Server (2016 and later):

- Add features to existing Windows machines
- Remove features from existing Windows machines
- Add optional features to existing Windows machines
- Remove optional features from existing Windows machines
- Limit which machines get policies via Item-Level Targeting
- Specify how to handle reboot requests when features need them

:::note
Watch this video for an overview of Endpoint Policy Manager Feature Manager for Windows:
[https://www.policypak.com/video/endpointpolicymanager-feature-manager-for-windows.html](https://www.policypak.com/video/endpointpolicymanager-feature-manager-for-windows.html)
:::


Endpoint Policy Manager Feature Manager for Windows allows you to do the following:

- Export the Endpoint Policy Manager Feature Manager for Windows rules and deliver them in one of
  these four ways:

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

- A management station: The Endpoint Policy Manager Admin Console MSI must be installed on the
  management station where you create group policy objects (GPOs). Once it is installed, you'll see
  the `PolicyPak | PolicyPak Feature Manager` for Windows node.
- The Endpoint Policy Manager CSE: This runs on the client (target) machine and is the same CSE for
  all Endpoint Policy Manager products. There isn't anything separate to install, and the Endpoint
  Policy Manager CSE must be present in order to accept Endpoint Policy Manager Feature Manager for
  Windows directives via Group Policy, or when using Microsoft Endpoint Manager (SCCM and Intune),
  KACE, MDM, or similar utilities.
- Endpoints: In order to use these, they must be licensed for Endpoint Policy Manager Feature
  Manager for Windows using one of the licensing methods.
- Endpoint Policy Manager Exporter (optional): A free utility that lets you take Endpoint Policy
  Manager Admin Templates Manager and our other products' XML files and wrap them into a portable
  MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune), an MDM service, or
  your own systems management software.

## Ins and Outs

Endpoint Policy Manager Feature Manager for Windows solves several important Windows 10 issues. Its
basic goal is to turn on and off Windows features and optional features. Many IT admins will preset
the features and optional features they want into their workstation and server images, only to find
out later they need to pull back from them, or add another feature or an optional feature. Once your
systems are deployed, it is very difficult to change your mind later and add features, languages,
or, starting with Windows 10 (build 1809), add tools from the Remote Server Admin Toolkit (RSAT).
Endpoint Policy Manager File Delivery Manager automates the process by allowing you to add or remove
whatever features or optional features you want with a few clicks.

There is an in-box method of managing features and optional features on each machine, which requires
you to address each feature one by one. On any given machine, you can manage features and optional
features.

![about_policypak_feature_manager](/images/endpointpolicymanager/feature/about_endpointpolicymanager_feature_manager.webp)

There are two ways to manage features: with the Windows Features Control Pane, or the Windows
Settings page . These options can be accessed through the Start Menu.

![about_policypak_feature_manager_1](/images/endpointpolicymanager/feature/about_endpointpolicymanager_feature_manager_1.webp)

![about_policypak_feature_manager_2](/images/endpointpolicymanager/feature/about_endpointpolicymanager_feature_manager_2.webp)

With optional features, you can add or subtract the feature you want. Below is an example of what
this looks like.

![about_policypak_feature_manager_3](/images/endpointpolicymanager/feature/about_endpointpolicymanager_feature_manager_3.webp)

An alternate way to perform similar functions is via the DISM command on the command line. For
example, to install the Hyper-V feature on a machine, you would use the DISM command.

![about_policypak_feature_manager_4](/images/endpointpolicymanager/feature/about_endpointpolicymanager_feature_manager_4.webp)

This process can be scripted, but the challenge is that the system will typically reboot when it
wants to, perhaps during a user's session. Additionally, scripts will typically run over and over
again, which is not great, and could cause undesired reboots. This is why Endpoint Policy Manager
Feature Manager for Windows eliminates the need to use scripts to add or remove features. Also,
Endpoint Policy Manager Feature Manager for Windows gives you time back, so you don't have to deal
with adding or removing features and optional features from the build process. So, instead of
presetting these into your image or just dealing with it later, Endpoint Policy Manager Feature
Manager for Windows enables you to manage these settings with policies.

## Advantages of Using Feature Manager for Windows

With Endpoint Policy Manager Feature Manager for Windows, the advantages you get are based upon the
policy method you already employ.

- For those using Group Policy:

  - You can add or remove features for any number of computers (desktops or servers).
  - You can use Item-Level Targeting to determine which computers should get which features.

- For those using Endpoint Policy Manager Cloud and Endpoint Policy Manager MDM: Because your
  machines might be roaming, you can use Endpoint Policy Manager to deliver a new policy to install
  or uninstall a required feature.


