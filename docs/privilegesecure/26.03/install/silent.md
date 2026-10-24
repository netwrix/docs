---
title: "Silent Installer Option"
description: "Install the Privilege Secure application from the command prompt with the silent installer, including a non-default installation directory."
keywords:
  - silent installer
  - quiet install
  - nps.exe /quiet
  - PRODUCTDIR
  - command prompt install
sidebar_position: 30
---

# Silent Installer Option

To install the Privilege Secure application from the command prompt.

1. Copy the `NPS.exe` file to the desktop of the application server.
2. Run the following command as an administrator:

   ```text
   nps.exe /quiet
   ```

   - To add a non-default installation directory, append the following to the command where the
     `[Path]` parameter is the directory location you want for the installation:

     ```text
     nps.exe /quiet PRODUCTDIR="[Path]"
     ```

     For example: `nps.exe /quiet PRODUCTDIR="D:\Stealthbits\PAM"`

   The Privilege Secure application installs in the background to the specified folder location.
