---
title: "I created a Collection and/or items, but I don't see them in the Group Policy settings report. Why and how can I fix it?"
description: "I created a Collection and/or items, but I don't see them in the Group Policy settings report. Why and how can I fix it?"
sidebar_position: 20
---

# I created a Collection and/or items, but I don't see them in the Group Policy settings report. Why and how can I fix it?

If you use Netwrix Endpoint Policy Manager (formerly PolicyPak) Admin Templates Manager to create
Collections or Items, you might not see them in the Group Policy Settings report, like what's seen
here.

![494_1_image002](/images/endpointpolicymanager/troubleshooting/administrativetemplates/494_1_image002.webp)

This is because the Endpoint Policy Manager Admin Console MSI (MMC snap-in) needs to be upgraded to
at least version 753.Once you upgrade to Endpoint Policy Manager

Admin Console MSI 753 you need to open and save each collection and policy.

After that, reporting is written as seen here. (An example of a Policy in a Collection.)

![494_2_image0041](/images/endpointpolicymanager/troubleshooting/administrativetemplates/494_2_image0041.webp)


