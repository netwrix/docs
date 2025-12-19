---
title: "Silent Installer Option for Proxy"
description: "Silent Installer Option for Proxy"
sidebar_position: 30
---

# Silent Installer Option for Proxy

It is possible to use one of the following methods to complete a silent installation of the File
System Proxy Service.

:::warning
For all Active Directory versions, aside from Windows 2012 R2, the silent installer
does not prompt an error message if a duplicate SPN value exists in the targeted domain for
[Option 1: Run as LocalSystem](#option-1-run-as-localsystem). Having duplicate SPN’s in the targeted
Active Directory environment prohibits connection to the proxy service, resulting in a failed scan.
:::


If a desired SPN already exists in a Windows 2012 R2 domain, the silent installer displays the
following message:

> _There is a problem with this Windows Installer package. A script required for this install to
> complete could not be run. Contact your support personnel or package vendor_.

To resolve the problem, remove the duplicate SPN value and rerun the installer to complete
installation. For any additional issues, verbose logging is included in the silent installer and
creates an `install.txt` file on the desktop.

## Option 1: Run as LocalSystem

Follow the steps to install the File System Proxy Service on the targeted proxy servers with a
silent installer.

**Step 1 –** Copy the `FileSystemProxy.msi` executable to the desktop of the server designated as
the proxy server.

**Step 2 –** Run the following command:

```
msiexec /i FileSystemProxy.msi /qb /l*v install.log SVC_ACCOUNT_TYPE=SYSTEM
```

- To add a non-default install directory, append `PRODUCTDIR="[path]"` to the command.

    - `path` – The path to the desired installation directory and must include
      `...\STEALTHbits\StealthAUDIT\FSAA\...`

    For example:

    ```
    msiexec /i FileSystemProxy.msi /qb /l*v install.log SVC_ACCOUNT_TYPE=SYSTEM PRODUCTDIR="E:\STEALTHbits\StealthAUDIT\FSAA"
    ```

The SPN value is automatically added to the computer object in Active Directory with this option.

## Option 2: Run as a Service Account

Follow the steps to install the File System Proxy Service on the targeted proxy servers with a
silent installer.

**Step 1 –** Copy the `FileSystemProxy.exe` executable to the desktop of the server designated as
the proxy server.

**Step 2 –** Run the following command:

```
msiexec /i FileSystemProxy.msi /qb /l*v install.log SVC_ACCOUNT_TYPE=DOMAIN SVC_USERNAME=DOMAIN\USERNAME SVC_PASSWORD="secret"
```

- `DOMAIN\USERNAME` – The service account credentials, which need to be a member the Local
  Administrators group and have the**Log on as a service** local policy  (**Local Policies** >
  **User Rights Assignment**)
- `secret` – The password for the credentials provided above (within quotes)

- To add a non-default install directory, append `PRODUCTDIR="[path]"` to the command.

    - `path` – The path to the desired installation directory and must include
      `...\STEALTHbits\StealthAUDIT\FSAA\...`

    For example:

    ```
    msiexec /i FileSystemProxy.msi/qb /l*v install.log SVC_ACCOUNT_TYPE=DOMAIN SVC_USERNAME=DOMAIN\USERNAME SVC_PASSWORD="secret" PRODUCTDIR="E:\STEALTHbits\StealthAUDIT\FSAA"
    ```
