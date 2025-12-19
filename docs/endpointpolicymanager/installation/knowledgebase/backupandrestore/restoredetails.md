---
title: "Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?"
description: "Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?"
sidebar_position: 10
---

# Endpoint Policy Manager details with GPO contents appear deleted. How can I restore them?

First, you can always restore ANY GPO if you have a full GPO backup.  If you have a GPO backup, then
follow these steps: Here's our video on it.. 
[Integration with Group Policy (Basics: Installation, Backup, Restore and Reporting !)](/docs/endpointpolicymanager/deliverymethods/grouppolicy/videos/gettingstarted/integration.md)

However, if you do not have a full GPO backup, but only have an Active Directory backup you can
still use this as a restore point.

The way to do this is to find the file that will be in the backup, like this.

Note the path, in this case, LPM is about Netwrix Endpoint Policy Manager (formerly PolicyPak) Least
Privilege Manager.

![896_1_image002_950x151](/images/endpointpolicymanager/troubleshooting/896_1_image002_950x151.webp)

Then you can use this file from the backup, and perform an "Import from XML" like this.

![896_2_image003_950x650](/images/endpointpolicymanager/troubleshooting/896_2_image003_950x650.webp)

Note this might not work for all types of Endpoint Policy Manager items, like Endpoint Policy
Manager Application Settings Manager; but should work in most cases.

