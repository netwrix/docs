---
title: "What must I install on Windows 7 to make Endpoint Policy Manager work as expected?"
description: "What must I install on Windows 7 to make Endpoint Policy Manager work as expected?"
sidebar_position: 40
---

# What must I install on Windows 7 to make Endpoint Policy Manager work as expected?

Windows 7 and Netwrix Endpoint Policy Manager (formerly PolicyPak) may not have all functions work.
This is because all Endpoint Policy Manager binaries are digitally signed, but with a newer hash
algorithm that un-patched Windows 7 doesn't understand.

So to get Endpoint Policy Manager Application Settings Manager Re-apply on Launch to work, Group
Policy Preferences Scheduled Tasks, and Endpoint Policy Manager
 [https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html) to
work as expected, Windows 7 requires and updated patch.

For Endpoint Policy Manager to work as expected on Windows 7, Windows 7
requires [https://www.microsoft.com/en-us/download/details.aspx?id=46148](https://www.microsoft.com/en-us/download/details.aspx?id=46148) for
64-bit and requires
32-bit [https://www.microsoft.com/en-pk/download/details.aspx?id=46078](https://www.microsoft.com/en-pk/download/details.aspx?id=46078)

