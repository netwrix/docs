---
title: "Silent Installer Option"
description: "Application Silent Installer Option"
sidebar_position: 30
---

# Application Silent Installer Option

To install the Privilege Secure application from the command prompt.

1. Copy the `NPS.exe` file to the desktop of the application server.
2. Run the following command as an administrator:

   ```text
   nps.exe /quiet
   ```

   - To add a non-default installation directory, append the following to the command where the
     `[Path]` parameter is the installation you want directory location:

     ```text
     nps.exe /quiet PRODUCTDIR="[Path]"
     ```

     For example: `nps.exe /quiet PRODUCTDIR="D:\Stealthbits\PAM"`

   The Privilege Secure application installs in the background to the specified folder location.
