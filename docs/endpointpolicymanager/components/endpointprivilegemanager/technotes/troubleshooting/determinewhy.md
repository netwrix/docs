---
title: "What log can help me determine why an application (MSI, etc.) was ALLOWED, ELEVATED or BLOCKED?"
description: "What log can help me determine why an application (MSI, etc.) was ALLOWED, ELEVATED or BLOCKED?"
sidebar_position: 20
---

# What log can help me determine why an application (MSI, etc.) was ALLOWED, ELEVATED or BLOCKED?

The log file you want to look in is` %LOCALAPPDATA%\PolicyPak\PolicyPak`
[https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html)
and is called `ppUser_Operational.log.`

![544_1_dfdhdghjkhjkl](/images/endpointpolicymanager/troubleshooting/log/leastprivilege/544_1_dfdhdghjkhjkl.webp)

Once you locate and open the Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege
Manager Operational Log… you are looking for the following highlighted items:

1. Time / Date Stamp.
2. The item which succeeded in being ALLOWED, ELEVATED, or BLOCKED.
3. The POLICY OBJECT (GPO) name.
4. The POLICY name (that is, the name you gave it inside Endpoint Policy Manager Least Privilege
   Manager).
5. The RESULT.

![544_2_second](/images/endpointpolicymanager/troubleshooting/log/leastprivilege/544_2_second.webp)

Below, the top entry shows an application being denied (because SecureRun is enabled) and the bottom
entry shows an application being allowed by using an EXE policy.

![544_3_third](/images/endpointpolicymanager/troubleshooting/log/leastprivilege/544_3_third.webp)


