---
title: "How to set \"Choose which browser opens web links in Office365\" so that Browser Router properly routes web links in Outlook"
description: "How to set \"Choose which browser opens web links in Office365\" so that Browser Router properly routes web links in Outlook"
sidebar_position: 270
---

# How to set "Choose which browser opens web links in Office365" so that Browser Router properly routes web links in Outlook

:::note
Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud already has the
Office2016/Office365 ADMX settings available in the Cloud and they can be accessed via the Endpoint
Policy Manager Admin Templates Manager built-in cloud editor.‌
:::


For the Endpoint Policy Manager OnPrem version, you can download the Office 365 ADMX files from
here -
[https://www.microsoft.com/en-US/download/details.aspx?id=49030](https://www.microsoft.com/en-US/download/details.aspx?id=49030)
for use in your On-Prem environment.

Also, this policy will not work for Microsoft 365 Apps for Business, See Group Policy Support
section in the table at the link below:

[https://learn.microsoft.com/en-us/office365/servicedescriptions/office-applications-service-description/office-applications-service-description](https://learn.microsoft.com/en-us/office365/servicedescriptions/office-applications-service-description/office-applications-service-description)

![966_1_image-20231114102807-2](/images/endpointpolicymanager/troubleshooting/browserrouter/966_1_image-20231114102807-2.webp)

11 Limited to policies for web apps and privacy policies for client apps.

## SCENARIO 1: Using Endpoint Policy Manager Cloud

Create a new Admin Template policy with the appropriate setting from the ADMX template (use Keyword
section to search):

![966_2_image-20230922212443-1](/images/endpointpolicymanager/troubleshooting/browserrouter/966_2_image-20230922212443-1.webp)

Now set the value to "System default browser" instead of "Microsoft Edge" in the policy:

![966_3_image-20230922212443-2_950x650](/images/endpointpolicymanager/troubleshooting/browserrouter/966_3_image-20230922212443-2_950x650.webp)

## SCENARIO 2: Using Endpoint Policy Manager On-Prem

Once Office ADMX is deployed, create a new Admin Template policy with the appropriate setting from
the ADMX template (use Keyword section to search):

![966_4_image-20230922212443-3_950x397](/images/endpointpolicymanager/troubleshooting/browserrouter/966_4_image-20230922212443-3_950x397.webp)

Now set the value to "System default browser" instead of "Microsoft Edge" in the policy:

![966_5_image-20230922212443-4](/images/endpointpolicymanager/troubleshooting/browserrouter/966_5_image-20230922212443-4.webp)

## Verification:

### BEFORE:

![966_6_image-20230922212443-5](/images/endpointpolicymanager/troubleshooting/browserrouter/966_6_image-20230922212443-5.webp)

### AFTER:

![966_7_image-20230922212443-6](/images/endpointpolicymanager/troubleshooting/browserrouter/966_7_image-20230922212443-6.webp)


