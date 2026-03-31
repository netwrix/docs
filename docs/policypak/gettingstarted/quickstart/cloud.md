---
title: "PolicyPak Cloud Delivery Quick Start"
description: "PolicyPak Cloud Delivery Quick Start"
sidebar_position: 30
---

# PolicyPak Cloud Delivery Quick Start

For an overview of delivery via PolicyPak Cloud, see the
[PolicyPak Cloud: QuickStart](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/quickstart.md) video .

Follow the steps below to carry out the PolicyPak cloud delivery:

**Step 1 –** Install the PolicyPak Cloud Client on an example endpoint

Log on to [cloud.policypak.com](https://cloud.policypak.com/) with the credentials provided to you
via email from Netwrix sales. In the Company tab download the PolicyPak Cloud Client MSI for your
PolicyPak Cloud tenant.

Install it by hand on a few Windows 10 or Windows 11 endpoints. Alternatively, use your software
deployment tool (like Intune) to deliver the CSE to a few endpoints. See the
[PolicyPak Cloud + MDM Services: Install Cloud Client + automatically join PPC Groups and get policy.](/docs/policypak/deliverymethods/cloud/videos/usingwithothermethods/mdm.md)
video of using Intune to bootstrap the PolicyPak cloud client install.

The PolicyPak Cloud Client automatically installs the PolicyPak CSE at the same time.

:::note
Each time you install the PolicyPak Cloud Client you will consume one of
your 10 example licenses
:::


**Step 2 –** (optional, recommended): Install the PolicyPak Admin Console on a
management machine with the GPMC pre-installed

In the download, find the **Admin Console MSI**. Install it by hand on your machine. Your machine
needs to also have the GPMC pre-installed from Microsoft. We recommend you have both the PolicyPak Admin Console and the GPMC installed on a “fake DC” exclusively for editing purposes.
See the [How to create a DC for editing purposes](/docs/policypak/deliverymethods/cloud/videos/testlabbestpractices/createdc.md) video for
details and how to do this.

:::note
If you bypass this step, you can still use the PolicyPak in-cloud editors,
but some options may not be available to you for editing without an on-prem editor station.
:::


**Step 3 –** Start creating policies using PolicyPak Cloud

If you want to make Microsoft Group Policy settings via PolicyPak Cloud, see the
[PolicyPakCloud: How to deploy Microsoft Group Policy Settings using PolicyPak Cloud](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/grouppolicysettings.md)video.

If you want to make PolicyPak specific settings (like PolicyPak Least
Privilege Manager, etc.) via PolicyPak Cloud, see the
[PolicyPakCloud: How to deploy PolicyPak specific settings (using in-cloud editors and exporting from on-prem)](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/endpointpolicymanagersettings.md)
video.

