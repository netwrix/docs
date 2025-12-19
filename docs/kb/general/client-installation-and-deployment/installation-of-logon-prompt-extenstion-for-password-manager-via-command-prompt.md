---
description: >-
  Shows how to install the Netwrix Password Manager Logon Prompt Extension using
  msiexec from the command prompt and describes package-specific MSI options and
  examples.
keywords:
  - Netwrix Password Manager
  - msiexec
  - MSI installation
  - logon prompt
  - PM_URL
  - PM_NOLPE
  - PM_NOREBOOT
  - ALLUSERS
products:
  - general
sidebar_label: 'Installation of Logon Prompt Extenstion for Password Manager via command prompt'
tags:
  - client-installation-and-deployment
title: >-
  Installation of Logon Prompt Extenstion for Password Manager via command
  prompt
knowledge_article_id: kA00g000000H9dRCAS
---

# Installation of Logon Prompt Extenstion for Password Manager via command prompt

Netwrix Password Manager Logon Prompt Extension is an .msi package and there for can be installed via command prompt.
To install the client, use `msiexec` with any of its options enabled, for example:

```bash
msiexec.exe /i prm_client.msi /quiet
```

**NOTE:** To check all available options, in command line type in `msiexec /?` and press ENTER.

Except default `msiexec` options, Logon Prompt Extension package has its own options that can be set by the command parameters:

- `PM_NOLPE` — can be `"true"` or `"false"`, quotes needed. If `true`, only enrollment wizard is installed, but logon prompt extensions, which helps you to reset password from logon screen, is not
- `PM_URL` — URL of the Password Manager server, usually it should be as follows: `http://%PRMservername%/pm`. If you do not specify this value, client will consider it as `https://localhost/pm`
- `ALLUSERS` — can be `"0"` or `"1"`, if `1` - enrollment wizard is installed for All users
- `PM_NOREBOOT` — can be `"true"` or `"false"`, quotes needed. If `true`, Windows XP/2003 machines will not reboot after installation

To enable these options, add their names with the required value to the command prompt when installing the client.

The options should be added in the following format: `msiexec /i \<file name\>.msi <option name=%option value%> /quiet`.
Example:

```bash
msiexec.exe /i prm_client.msi ALLUSERS="1" PM_URL=https://prmserver/pm /quiet
```

You can add several options separated by a space, in the following format: `msiexec /i \<file name\>.msi <option1 name=%option1 value%> <option2 name=%option2 value%> /quiet`.
Example:

```bash
msiexec.exe /i prm_client.msi ALLUSERS="1" PM_NOLPE="false" PM_URL=https://prmserver/pm PM_NOREBOOT="true" /quiet.
```
