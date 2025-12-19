---
title: "Group Policy Delivery Quick Start"
description: "Group Policy Delivery Quick Start"
sidebar_position: 10
---

# Group Policy Delivery Quick Start

For an overview of Group Policy Quick Start, the
[Admin Console And CSE Installation](/docs/endpointpolicymanager/deliverymethods/grouppolicy/videos/gettingstarted/install.md) video.

**Step 1 –** Install the Endpoint Policy Manager Client on an example endpoint

In the download, find the **Client Side Extensions (CSE)** folder. Install it by hand on a few
Windows 10 or Windows 11 endpoints. Alternatively, use your software deployment tool (like SCCM,
Intune or PDQ deploy) to deliver the CSE to a few endpoints.

**Step 2 –** Install the Endpoint Policy Manager Admin Console on a management machine with the GPMC
pre-installed

In the download, find the **Admin Console MSI**and install it by hand on your machine. Your machine
needs to also have the GPMC pre-installed from Microsoft. We recommend you have both the Endpoint
Policy Manager Admin Console and the GPMC installed on a “fake DC” exclusively for editing purposes.
See the [How to create a DC for editing purposes](/docs/endpointpolicymanager/deliverymethods/cloud/videos/testlabbestpractices/createdc.md) video for
details and how to do this.

**Step 3 –** Install your license key or rename your example endpoint to have computer in the name

:::note
If you got a license file back from the Netwrix sales team, you can import it to enable
computers in the locations (scope) you requested. Alternatively, you can merely rename an endpoint
have the word Computer in the name, and the computer will act fully licensed.
:::


Follow the
[How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md)
video to install a license file.

Check the
[What is the fastest way to get started in an Endpoint Policy Manager trial, without running the License Request Tool?](/docs/endpointpolicymanager/licensing/knowledgebase/requestingall/trial.md)
topic to see how to rename a computer or perform alternative licensing.

