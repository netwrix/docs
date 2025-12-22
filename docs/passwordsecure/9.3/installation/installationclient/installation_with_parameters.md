---
title: "Installation with parameters"
description: "Installation with parameters"
sidebar_position: 10
---

# Installation with parameters

## What is installation with parameters?

The installation of the Netwrix Password Secure client can also be optionally run on the command
line. This method also requires the transfer of parameters. These can be combined with one another.
In this case, the individual parameters are separated from one another by a blank space. The
parameters listed in the following section enable you to adapt the type of client installation.

## Running on the command line with parameters

Run the installation via the command line: **MSI-FILE.msi [PARAMETER]**

**Parameter**

- **AUTOFILL_ADDON_AUTOSTART=“0”**: Deactivates launching the Autofill Add-on in Windows autostart
- **INSTALL_AUTOFILL_ADDON=“0**”: Deactivates the installation of the Autofill Add-on. In the list
  of the components to be installed in the setup, a check mark has not been set but this can be set
  again by the user
- **INSTALL_OFFLINE_ADDON=“0”**: Deactivates the installation of the Offline Add-on. In the list of
  the components to be installed in the setup, a check mark has not been set but this can be set
  again by the user
