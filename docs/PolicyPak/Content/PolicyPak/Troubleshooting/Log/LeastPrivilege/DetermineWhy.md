---
sidebar_position: 3937
title: What log can help me determine why an application (MSI, etc.) was ALLOWED,
  ELEVATED or BLOCKED?
---

# What log can help me determine why an application (MSI, etc.) was ALLOWED, ELEVATED or BLOCKED?

The log file you want to look in is `%LOCALAPPDATA%\PolicyPak\PolicyPak` [https://www.policypak.com/products/policypak-least-privilege-manager.html](https://www.policypak.com/products/policypak-least-privilege-manager.html "Least Privilege Manager") and is called `ppUser_Operational.log.`

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Log/LeastPrivilege/544_1_dfdhdghjkhjkl.jpg)

Once you locate and open the Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager Operational Log… you are looking for the following highlighted items:

1. Time / Date Stamp.
2. The item which succeeded in being ALLOWED, ELEVATED, or BLOCKED.
3. The POLICY OBJECT (GPO) name.
4. The POLICY name (that is, the name you gave it inside Endpoint Policy Manager Least Privilege Manager).
5. The RESULT.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Log/LeastPrivilege/544_2_Second.png)

Below, the top entry shows an application being denied (because SecureRun is enabled) and the bottom entry shows an application being allowed by using an EXE policy.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Log/LeastPrivilege/544_3_Third.png)