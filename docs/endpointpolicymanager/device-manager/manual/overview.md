---
title: "Device Manager"
description: "Device Manager"
sidebar_position: 10
---

# Device Manager

This manual is designed to be both an overview of what you can do with Endpoint Policy Manager
Device Manager and a Quickstart guide for getting up and running quickly.

:::note
You may ignore the standard or complete designations in the Endpoint Policy Manager Device
Manager UI. Typically, Endpoint Policy Manager is sold in Enterprise or SaaS editions and in those
configurations you get complete (meaning all the features).
:::


Before reading this section, please ensure you have read Book 2: Installation Quick Start, which
will help you learn to do the following:

- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, this manual demonstrates how to use on-prem Active Directory and Group Policy to deploy
Endpoint Policy Manager Device Manager directives. If you don't want to use Group Policy, see the
[MDM & UEM Tools](/docs/endpointpolicymanager/manuals/introductionandquick/mdm/overview.md) topic to deploy directives for additional information.

:::note
For an overview of Endpoint Policy Manager Device Manager see the
[Video Learning Center](/docs/endpointpolicymanager/knowledgebase/devicemanager/videolearningcenter/videolearningcenter.md) topic for additional information.
:::


Endpoint Policy Manager Device Manager will manage USB and other removable media devices like
CD-ROMs, DVD ROMs, and phones which plug in and have storage when attached to Windows.

For an overview of managing USB and other removeable media devices using Endpoint Policy Manager
Device Manager, see the
[Instantly Put the smackdown on USB sticks and CD-ROMs](/docs/endpointpolicymanager/knowledgebase/devicemanager/videolearningcenter/gettingstarted/usbdrive.md) topic for
additional information.

The basic way to use Endpoint Policy Manager Device Manager is as follows:

- Block end-users from accessing removable devices
- Create a rule to specify which removable devices a user would need access rights to
- Use On-Prem Group Policy to accept the Endpoint Policy Manager Device Manager policies created

Alternatively, export the Endpoint Policy Manager Device Manger rules and deliver them in one of
these ways:

- Microsoft SCCM — See the Deploy Endpoint Policy Manager Settings Using SCCM or Other Management
  System! topic for additional information

- Microsoft Intune — See the
  [Block and Allow USB and CD-ROMs with your MDM solution](/docs/endpointpolicymanager/knowledgebase/devicemanager/videolearningcenter/methods/mdm.md) video overview
  for additional information

- PolicyPak Cloud service — See the
  [Block USB sticks using Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/knowledgebase/devicemanager/videolearningcenter/methods/cloud.md) topic for
  additional information

Then allow the client machine with the Endpoint Policy Manager client-side extension (CSE) to
receive the directives and perform the work.

:::note
If you use an MDM service or Endpoint Policy Manager cloud service, you can deliver
Endpoint Policy Manager Device Privilege Manager settings even to non-domain-joined machines over
the Internet.
:::


## Endpoint Policy Device Manager Components

Endpoint Policy Managerhas the following components:

- A Management Station — The Endpoint Policy Manager Admin Console MSI must be installed on the
  management station where you create GPOs. Once it’s installed, you’ll see the **Endpoint Policy
  Manager Settings** > **Endpoint Policy Manager Device Privilege Manager** node, as shown below.

- The Endpoint Policy Manager CSE — This runs on the client (target) machine and is the same CSE for
  all Endpoint Policy Manager components (such as Least Privilege Manager, Device Manager,
  Application Settings Manager)

- Windows Endpoints — In order to use these, they must be licensed for Endpoint Policy Manager
  Device Manager using one of the licensing methods

- Also available is Endpoint Policy Manager Cloud when you purchase Enterprise or SaaS

Endpoint Policy Manager Cloud enables you to create Endpoint Policy Manager Device Manager
directives using the in-cloud editors and connect endpoints to get Endpoint Policy Manager Device
Manager directives.

![ppcloud](assets/devicemanager/ppcloud.webp)

While this manual mostly demonstrates concepts using the Group Policy editor, nearly everything can
be done using the Endpoint Policy Manager Cloud editors. Additionally, you can take on-prem MMC
directives and upload them to Endpoint Policy Manager Cloud and take in-cloud directives and
download them back as MMC directives.

Also, you may use Endpoint Policy Manager Device Manager with any management system you like such as
SCCM, Intune, PDQ deploy or anything else. This is because Endpoint Policy Manager directives may be
exported as XML and wrapped up using the Exporter tool. This A free utility that lets you take
Endpoint Policy Manager Admin Templates Manager and our other products’ XML files and wrap them into
a portable MSI file for deployment using Microsoft Endpoint Manager (SCCM and Intune) or your own
systems management software.

The [MDM & UEM Tools](/docs/endpointpolicymanager/manuals/introductionandquick/mdm/overview.md) topic explains how to use the Endpoint Policy Manager
Exporter to wrap up any Endpoint Policy Manager directives and deliver them using Microsoft Endpoint
Manager (SCCM and Intune), KACE, your own MDM service, or Endpoint Policy Manager Cloud.

This topic will get you going with the concepts and results you’re looking for and then you may
choose whatever delivery method makes sense for your organization.

## Why you need Endpoint Policy Device Manager

Microsoft makes it easy to turn off all access to USB sticks and other removable devices. With a
simply GPO or MDM setting that can accomplished.

Here is exactly how to do that (without using Endpoint Policy Manager Device Manager) when using
ADMX settings via GPOs.

![device01](assets/devicemanager/device01.webp)

The same may be performed using and MDM service like Intune using similar settings.

![device02](assets/devicemanager/device02.webp)

The result will be the same where Removable Devices will be stopped.

![device03](assets/devicemanager/device03.webp)

In this way you can completely shut out all devices for all users for all times.

Unlike Microsoft policies, Endpoint Policy Manager Device Manager allows customized settings for USB
and other removable devices (henceforth written as devices).

You can perform the following management on devices:

- Which on-Prem Active Directory or Azure user can use devices
- What access type those devices has (Read, Read/Write, Full)
- Grant access to a device only if the device has Bitlocker on it
- Specify specific device vendors, device IDs and device revisions
- Specify specific serial numbers for devices

None of this is possible with the in-box settings with Microsoft GPOs or MDM policies (like Intune).

:::note
Consider integrating with Netwrix Privilege Secure for Endpoints for additional features
when managing devices:
:::


- Endpoint Policy Manager Device Manager only deals with aspects of removable data devices. For
  other device types, like Bluetooth, Serial Ports, printers and shares, consider Netwrix Endpoint
  Protector. See the Device Control topic in the User Manual section of the Netwrix Endpoint
  Protector [documentation](https://helpcenter.netwrix.com/category/endpointprotector) for
  additional information.
- Endpoint Policy Manager Device Manager doesn't inspect the data as it goes by looking for
  patterns. That is, PolicyPak Device Manager is not a traditional "Data Loss Prevention" (DLP)
  product. For that functionality, consider Netwrix Endpoint Protector. See the Content Aware
  Protection topics in the Administration section of the Netwrix Endpoint Protector
  [documentation](https://helpcenter.netwrix.com/category/endpointprotector) for additional
  information.
- Endpoint Policy Manager Device Manager isn't trying to protect against non-data devices like
  "RubberDucky" devices or similar devices which act as keyboards to perform malicious actions. For
  that functionality, consider Netwrix Endpoint Protector. See the Content Aware Protection topics
  in the Administration section of the Netwrix Endpoint Protector
  [documentation](https://helpcenter.netwrix.com/category/endpointprotector) for additional
  information.

To get started on device policies, create a link a GPO and link it to where your computers are. The
examples use East Sales Desktops.

You may also use Endpoint Policy Manager Cloud to create these policies, or export your GPOs created
in this example for use with an MDM service like Intune.
