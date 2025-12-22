---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 2
---

# Getting Started

To help get you started, this topic points you towards videos that will get you on the road and
working with Netwrix Endpoint Policy Manager (formerly PolicyPak) quickly.

## Choose Your Deployment Method

Select the deployment method that matches your environment:

- **Cloud** - For Endpoint Policy Manager Cloud deployments
- **Group Policy** - For traditional Active Directory environments
- **MDM** - For mobile device management and modern management
- **Misc** - General getting started information and support resources

## Quick Resources

- **Support and Resources** - Fast support options and important resources
- **General Getting Started Information** - Basic concepts, tips, and FAQs

## The Portal and Downloads

In order to get the latest Endpoint Policy Manager downloads, you need access to the Endpoint Policy
Manager Customer Portal (shown in Figure 1). You can only get access to the portal from a Endpoint
Policy Manager sales associate.

![getting_started_right_away](/images/endpointpolicymanager/getting_started_right_away.webp)

Figure 1. Inside the Endpoint Policy Manager Customer Portal.

:::note
Video: For an overview on how to use the Endpoint Policy Manager Customer Portal and
understand subscriptions, please watch the following video:
[https://www.policypak.com/video/endpointpolicymanager-portal-how-to-download-endpointpolicymanager-and-get-free-training.html](https://www.policypak.com/video/endpointpolicymanager-portal-how-to-download-endpointpolicymanager-and-get-free-training.html)
:::


Go to the Download section and select "Download Everything (Bits, Paks, Manuals but not Advice),"
and you will get a ZIP file with manuals. You will also receive the following:

- A ZIP file containing all pre-configured AppSets for Endpoint Policy Manager Application Settings
  Manager
- An ISO or ZIP file with the Endpoint Policy Manager installation files and licensing utility

The Endpoint Policy Manager installation files are delivered as both ZIP and ISO so you can use
Endpoint Policy Manager in virtual environments (which can easily mount ISO files) or burn a CD of
the contents.

You may also want to utilize the free 7-Zip program to open ZIP or ISO downloads and extract the
files. Download 7-Zip from [http://www.7-zip.org/](http://www.7-zip.org/). In Figure 2, you can see
the list of files and directories that are inside the Endpoint Policy Manager ZIP or ISO download.

![getting_started_right_away_1](/images/endpointpolicymanager/getting_started_right_away_1.webp)

Figure 2. The folders that are inside the download.

Following is a description of what each folder contains and where it should be installed.

### Licensing for All On-Premise Products

The licensing for All On-Premise Products contains the licensing utility needed to request and
implement Endpoint Policy Manager license keys. We will be discussing the utility (LT.exe) later.

### Admin Console MSI for all On-Premise Products

The Admin Console MSI for all On-Premise Products is installed on your management stations (wherever
you have the GPMC) or in the location where you wish to create Endpoint Policy Manager directives.
This installation also has the Endpoint Policy Manager Exporter and Group Policy Object (GPO) touch
utility (both are explained later). Once this is installed, you'll see a Endpoint Policy Manager
node whenever you edit a GPO. You can choose between a 32-bit and a 64-bit file.

### Client-Side Extension (CSE) for All On-Premise Products

The Client-Side Extension (CSE) for All On-Premise Products is installed on every client machine
(Windows 7 and later, Terminal Services (RDS), and Citrix). You can choose between a 32-bit and a
64-bit file.

### PolicyPak ADMX (Troubleshooting)

Endpoint Policy Manager ADMX (Troubleshooting) is meant to be used in conjunction with minor
configuration changes or working with tech support. These are ADMX files that can be placed in your
local or central Group Policy store to provide configurable options.

### PolicyPak Application Manager Extras

Endpoint Policy Manager Application Manager Extras contains the Endpoint Policy Manager DesignStudio
installer, which is used to create your own AppSets for Endpoint Policy Manager Application Settings
Manager.

### PolicyPak Extras

Endpoint Policy Manager Extras contains some miscellaneous utilities and helper tools.

### PolicyPak Group Policy Compliance Reporter

Endpoint Policy Manager Group Policy Compliance Reporter contains the Endpoint Policy Manager Group
Policy Compliance Reporter console and Endpoint Policy Manager Group Policy Compliance Reporter
server (optional) for Group Policy reporting. Note that the Compliance Reporter must be specifically
licensed.

## Get Licensed

With the exception of Endpoint Policy Manager Cloud (which is self licensed), Endpoint Policy
Manager requires the endpoint to be licensed to work with the components you wish to use. Therefore,
for Endpoint Policy Manager to work after you download everything from the portal, you need to do
the following:

**Step 1 –** Request a license and send that key to Sales for processing. You can watch a video on
how to request a license at the following link:
[How to Request Licenses from Endpoint Policy Manager by Creating a "License Request Key"](/docs/endpointpolicymanager/licensing/videolearningcenter/requestall/licenserequestkey.md).

**Step 2 –** Receive a license and install it. You can watch a video on how to install the license
you receive at the following
link:[How to install UNIVERSAL licenses for NEW Customers (via GPO, SCCM or MDM)](/docs/endpointpolicymanager/licensing/videolearningcenter/installall/installuniversal.md).

## Get Started with the GPO Method

Most customers want to use Endpoint Policy Manager with Group Policy. You can watch the getting
started video on how to install and run some initial tests at the following link:
[Endpoint Policy Manager with Group Policy Method: Getting Started](/docs/endpointpolicymanager/deliverymethods/grouppolicy/videos/gettingstarted/gettingstartedv.md).

## GetStarted with the Endpoint Policy Manager Cloud Method

If you want to get started right away with Endpoint Policy Manager Cloud, watch this video for a
quick overview: [Endpoint Policy Manager Cloud: QuickStart](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/quickstart.md).

## Get Started with Your MDM Provider or UEM Tool

Getting started with your mobile device management (MDM) provider or UEM tool takes a few more steps
than is covered in one video. In this case, instead of a single video, we recommend you watch each
of the videos at the links below in order to get prepared to use Endpoint Policy Manager with your
MDM provider.

- For video overviews of using Endpoint Policy Manager with an MDM service see: Getting Started with
  MDM > [Video Learning Center](/docs/endpointpolicymanager/deliverymethods/mdm/videos/videolearningcenter.md).
- For video overviews of using Endpoint Policy Manager with a UEM tool like SCCM see: Getting
  Started with Endpoint Policy Manager (Misc) >
  [Knowledge Base](/docs/endpointpolicymanager/).


