---
title: "Can I use both Endpoint Policy ManagerOn Premise mode and Endpoint Policy Manager Cloud simultaneously? Do they clash?"
description: "Can I use both Endpoint Policy ManagerOn Premise mode and Endpoint Policy Manager Cloud simultaneously? Do they clash?"
sidebar_position: 80
---

# Can I use both Endpoint Policy ManagerOn Premise mode and Endpoint Policy Manager Cloud simultaneously? Do they clash?

Netwrix Endpoint Policy Manager (formerly PolicyPak) On-Prem Suite and Endpoint Policy Manager Cloud
have been designed to play nicely together.

Therefore, you can use either the Endpoint Policy Manager Cloud to deliver your setting and/or, say,
Group Policy or SCCM to deliver your setting.

All policies are simply merged together. If there's a conflict, the on-premise directive (say, using
Group Policy) wins.

![609_1_img19-deliveryconflict005-resized-450px](/images/endpointpolicymanager/tips/609_1_img19-deliveryconflict005-resized-450px.webp)

