---
title: "Merging and Reducing Existing GPOs"
description: "Merging and Reducing Existing GPOs"
sidebar_position: 60
---

# Merging and Reducing Existing GPOs

Netwrix PolicyPak ships with the PolicyPak Group
Policy Merge Utility. It is designed to help you take advantage of the PolicyPak Admin
Templates Manager, as well as combine multiple collections within one single GPO. Many users want a
way to reduce the number of GPOs they have, and the PolicyPak Group Policy Merge
Utility allows you to do just that. Identify the source GPOs that contain Microsoft ADM/ADMX
settings (known as REG.POL settings), and then specify a target GPO, to create a collection.

:::note
See the
[Reduce GPOs (and/or export them for use with PolicyPak Cloud or with MDM)](/docs/policypak/deliverymethods/grouppolicy/videos/tipsandtricks/exportgpos.md)
topic for more information.
:::


A secondary use for the PolicyPak **Group Policy Merge Utility** is to merge multiple
GPOs into thePolicyPak Admin Templates Manager format, and then export the collection
for use with PolicyPak Cloud or an MDM service. This way, you can take a set of real
Group Policy settings and export them quickly and easily into one export file, which is uploaded
into PolicyPak Cloud or an MDM service for use later.

![merging_and_reducing_existing](/images/policypak/adminstrativetemplates/merging_and_reducing_existing.webp)

To run the tool, locate the downloadable ISO file in the PolicyPak Extras folder, as
seen below.

![merging_and_reducing_existing_1](/images/policypak/adminstrativetemplates/merging_and_reducing_existing_1.webp)

Currently, the PolicyPak **Group Policy Merge Tool** can only migrate GPOs containing
ADM/ADMX (REG.POL) items. In the future, more formats will be available for other scenarios.


