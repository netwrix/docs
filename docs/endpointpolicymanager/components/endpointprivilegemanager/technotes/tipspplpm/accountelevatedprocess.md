---
title: "Which account does an elevated process run within?"
description: "Which account does an elevated process run within?"
sidebar_position: 10
---

# Which account does an elevated process run within?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager does not need a special
user to perform elevation, nor does it create some kind of temporary admin. All process elevation is
handled in the context of the actual user to which the rule applies.

The context is still the user and all activity happens in the user profile (in this example
EastSalesUser1).

But the process is elevated. Here is an example running UAC-Required PowerPointViewer.exe installer
with EastSalesUser1 when a Endpoint Policy Manager Least Privilege Manager rule is in place to
affect EastSalesUser1.

![649_1_img-1_950x524](/images/endpointpolicymanager/leastprivilege/649_1_img-1_950x524.webp)


