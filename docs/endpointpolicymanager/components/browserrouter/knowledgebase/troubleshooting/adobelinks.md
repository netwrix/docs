---
title: "Hyperlinks in Adobe documents do not work when Browser Router is set as the Default Browser"
description: "Hyperlinks in Adobe documents do not work when Browser Router is set as the Default Browser"
sidebar_position: 230
---

# Hyperlinks in Adobe documents do not work when Browser Router is set as the Default Browser

## PROBLEM:

When using Adobe, URLs in PDF documents do not open in a web browser whenNetwrix Endpoint Policy
Manager (formerly PolicyPak) Browser Router (PPBR) is set as the default browser.

## CAUSE:

There is a Windows Defender Attack Surface Reduction Rule in place for Adobe:

![892_1_image-20211223020010-6](/images/endpointpolicymanager/troubleshooting/browserrouter/892_1_image-20211223020010-6.webp)

![892_2_image-20211223020010-7](/images/endpointpolicymanager/troubleshooting/browserrouter/892_2_image-20211223020010-7.webp)

## RESOLUTION:

### Option 1: Remove the Attack Surface Reduction Rule for Adobe by deleting the rule highlighted below.

![892_3_image-20211223020010-8](/images/endpointpolicymanager/troubleshooting/browserrouter/892_3_image-20211223020010-8.webp)

### Option 2: (Recommended) Add exclusions for Endpoint Policy Manager under "Exclude files and paths from Attack Surface Reduction Rules" policy.

:::note
If you prefer you can block only the PPBR Agent executable instead of the entire Endpoint
Policy Manager folder:` "C:\Program Files\PolicyPak\Browser Router\Client\PPBRAgent.exe"`
:::


Excluding the "`C:\Program Files\PolicyPak"` folder, (or if you prefer just
`"C:\Program Files\PolicyPak\Browser Router\Client\PPBRAgent.exe") `should be enough to resolve the
issue with Adobe and Browser Router.

![892_4_image-20211223020010-9](/images/endpointpolicymanager/troubleshooting/browserrouter/892_4_image-20211223020010-9.webp)

For a list of additional Endpoint Policy Manager items that may need to be excluded please see the
KB below:

[How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md)


