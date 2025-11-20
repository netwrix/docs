---
title: "Merging and Reducing Existing GPOs"
description: "Merging and Reducing Existing GPOs"
sidebar_position: 60
---

# Merging and Reducing Existing GPOs

Netwrix Endpoint Policy Manager (formerly PolicyPak) ships with the Endpoint Policy Manager Group
Policy Merge Utility. It is designed to help you take advantage of the Endpoint Policy Manager Admin
Templates Manager, as well as combine multiple collections within one single GPO. Many users want a
way to reduce the number of GPOs they have, and the Endpoint Policy Manager Group Policy Merge
Utility allows you to do just that. Identify the source GPOs that contain Microsoft ADM/ADMX
settings (known as REG.POL settings), and then specify a target GPO, to create a collection.

:::note
See the
[Reduce GPOs (and/or export them for use with Endpoint Policy Manager Cloud or with MDM)](/docs/endpointpolicymanager/deliverymethods/grouppolicy/videos/tipsandtricks/exportgpos.md)
topic for more information.
:::


A secondary use for the Endpoint Policy Manager **Group Policy Merge Utility** is to merge multiple
GPOs into theEndpoint Policy Manager Admin Templates Manager format, and then export the collection
for use with Endpoint Policy Manager Cloud or an MDM service. This way, you can take a set of real
Group Policy settings and export them quickly and easily into one export file, which is uploaded
into Endpoint Policy Manager Cloud or an MDM service for use later.

![merging_and_reducing_existing](/images/endpointpolicymanager/adminstrativetemplates/merging_and_reducing_existing.webp)

To run the tool, locate the downloadable ISO file in the Endpoint Policy Manager Extras folder, as
seen below.

![merging_and_reducing_existing_1](/images/endpointpolicymanager/adminstrativetemplates/merging_and_reducing_existing_1.webp)

Currently, the Endpoint Policy Manager **Group Policy Merge Tool** can only migrate GPOs containing
ADM/ADMX (REG.POL) items. In the future, more formats will be available for other scenarios.


