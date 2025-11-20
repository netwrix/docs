---
title: "Downloading On-Prem Software from the Portal"
description: "Downloading On-Prem Software from the Portal"
sidebar_position: 20
---

# Downloading On-Prem Software from the Portal

As part of your welcome kit to Endpoint Policy Manager Cloud, you should have received a second
email with access to the Endpoint Policy Manager Customer Portal. The Endpoint Policy Manager
Customer Portal is not the Endpoint Policy Manager Cloud service. The Endpoint Policy Manager
Customer Portal is where you can download the latest install files if you are also an on-prem
customer. The Portal enables you to download the on-prem version of the software (the Bits), AppSets
(for use with Endpoint Policy Manager Application Settings Manager), manuals, and XML examples,
which can be used with Endpoint Policy Manager Least Privilege Manager, Endpoint Policy Manager
Scripts Manager, and so on.

You might be wondering why you need access to the Portal if nearly everything can be done within the
Endpoint Policy Manager Cloud service. You still need the Endpoint Policy Manager on-prem "Bits"
when using Endpoint Policy Manager Cloud because you will need them to create some directives within
the Windows 10 GPMC MMC console whenever there is no corresponding in-cloud editor for a component.
As such, we recommend you download the Bits and organize them to create a small on-prem test lab.
Your on-prem test lab is 100% free and can be used to test examples without Endpoint Policy Manager
Cloud possibly interfering. This also enhances quick troubleshooting. Moreover, there are always
going to be some advanced policy creation items which can only be done in the MMC console first,
then exported for use with Endpoint Policy Manager cloud.

The main menu for the Endpoint Policy Manager Customer Portal is shown below.

![concepts_logons_and_downloads_10_374x437](/images/endpointpolicymanager/cloud/concepts_logons_and_downloads_10_374x437.webp)

Video: For an overview on how to use the Endpoint Policy Manager Customer Portal, please watch this
video: [https://www.policypak.com/customerportal](http://www.policypak.com/customerportal).

For now, downloading the Bits is sufficient, but you are also welcome to download everything. If you
do, you will get a ZIP file with the following:

- Manuals for this product and other products
- Examples to use in your Endpoint Policy Manager Cloud Quickstart
- A ZIP file containing pre-configured AppSets for Endpoint Policy Manager Application Settings
  Manager
- A ZIP file containing the CSE
- Our on-premise licensing utility (not used at all for Endpoint Policy Manager Cloud)

The Endpoint Policy Manager on-prem Bits files are shipped as an ISO so you can quickly make use of
the download in virtual environments (which can easily mount ISO files) or to burn your own CDs.

Below you can see the list of files and directories that are inside the Endpoint Policy Manager ISO
download.

![concepts_logons_and_downloads_11_624x287](/images/endpointpolicymanager/cloud/concepts_logons_and_downloads_11_624x287.webp)

You won't need most of these items for Endpoint Policy Manager Cloud. Indeed, the only folders you
need are the **Admin Console MSI** folder and the **Client Side Extension (CSE)** folder, as
explained in the next section.


