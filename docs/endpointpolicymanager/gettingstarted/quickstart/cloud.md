---
title: "Endpoint Policy Manager Cloud Delivery Quick Start"
description: "Endpoint Policy Manager Cloud Delivery Quick Start"
sidebar_position: 30
---

# Endpoint Policy Manager Cloud Delivery Quick Start

For an overview of delivery via PolicyPak Cloud, see the
[Endpoint Policy Manager Cloud: QuickStart](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/quickstart.md) video .

Follow the steps below to carry out the Endpoint Policy Manager cloud delivery:

**Step 1 –** Install the Endpoint Policy Manager Cloud Client on an example endpoint

Log on to [cloud.policypak.com](https://cloud.policypak.com/) with the credentials provided to you
via email from Netwrix sales. In the Company tab download the PolicyPak Cloud Client MSI for your
PolicyPak Cloud tenant.

Install it by hand on a few Windows 10 or Windows 11 endpoints. Alternatively, use your software
deployment tool (like Intune) to deliver the CSE to a few endpoints. See the
[Endpoint Policy Manager Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy.](/docs/endpointpolicymanager/deliverymethods/cloud/videos/usingwithothermethods/mdm.md)
video of using Intune to bootstrap the PolicyPak cloud client install.

The Endpoint Policy Manager Cloud Client automatically installs the PolicyPak CSE at the same time.

:::note
Each time you install the Endpoint Policy Manager Cloud Client you will consume one of
your 10 example licenses
:::


**Step 2 –** (optional, recommended): Install the Endpoint Policy Manager Admin Console on a
management machine with the GPMC pre-installed

In the download, find the **Admin Console MSI**. Install it by hand on your machine. Your machine
needs to also have the GPMC pre-installed from Microsoft. We recommend you have both the Endpoint
Policy Manager Admin Console and the GPMC installed on a “fake DC” exclusively for editing purposes.
See the [How to create a DC for editing purposes](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/createdc.md) video for
details and how to do this.

:::note
If you bypass this step, you can still use the Endpoint Policy Manager in-cloud editors,
but some options may not be available to you for editing without an on-prem editor station.
:::


**Step 3 –** Start creating policies using Endpoint Policy Manager Cloud

If you want to make Microsoft Group Policy settings via Endpoint Policy Manager Cloud, see the
[Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/grouppolicysettings.md)video.

If you want to make Endpoint Policy Manager specific settings (like Endpoint Policy Manager Least
Privilege Manager, etc.) via Endpoint Policy Manager Cloud, see the
[Endpoint Policy ManagerCloud: How to deploy Endpoint Policy Manager specific settings (using in-cloud editors and exporting from on-prem)](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/endpointpolicymanagersettings.md)
video.

