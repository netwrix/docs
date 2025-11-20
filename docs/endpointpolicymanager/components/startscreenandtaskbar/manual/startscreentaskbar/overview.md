---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 70
---

# Troubleshooting

The most common problem with Start Screen & Taskbar Manager is getting it to work the first time.
Here are some tips when trying to troubleshoot Start Screen & Taskbar Manager:

- Do not try to use Microsoft's method and Netwrix Endpoint Policy Manager (formerly PolicyPak)'s
  method for managing the Start Screen and Taskbar on the same Windows 10 endpoints. Only one method
  can be used at a time, and multiple methods are not supported.
- Do not try to use a built-in OMA-DM/MDM method and Endpoint Policy Manager's method for managing
  the Start Screen and Taskbar on the same Windows 10 endpoints. Only one method can be used at a
  time, and multiple methods are not supported.
- Taskbar Manager policies only take effect after the user has received a Group Policy update and
  then logs on again.
- Start Screen & Taskbar Manager's policies may not work the very first time a user logs onto a
  Windows 10 machine, but will take effect in the background a bit later.


