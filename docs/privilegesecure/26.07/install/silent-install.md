---
title: "Install silently"
description: "Install the Privilege Secure application from the command line with NPS.exe, set the install folder, and write an installation log."
sidebar_position: 40
---

# Install silently

You can install the Netwrix Privilege Secure for Access Management (Privilege Secure) application from the command line without the installation wizard. This method suits scripted installations and software deployment tools.

## Before you begin

- If you copied the download from another computer, unblock the `.zip` file before you extract it. Right-click the file, select **Properties**, select **Unblock** if it appears, and click **OK**.
- Install PowerShell 7.6 or later on the application server. `NPS.exe` stops without it. See [Application server requirements](/docs/privilegesecure/26.07/requirements/application-server.md#software-to-install-before-you-run-the-installer).
- Install the database first. A silent installation of `NPS.exe` doesn't install PostgreSQL. Install PostgreSQL 16 with `NetwrixPostgreSQL16.exe` from the `Extras` folder, or use an existing database.
- Copy `NPS.exe` from the `Extras` folder to the application server.
- Open a command prompt as an administrator.

## Install with the default options

Run the following command:

```
NPS.exe /quiet
```

The application installs in the background to `C:\Program Files\Stealthbits\PAM`.

## Install to a different folder

Set the `InstallFolder` variable on the command line. The installer passes the folder to every component that `NPS.exe` installs. For example, to install to `D:\Stealthbits\PAM`, run:

```
NPS.exe /quiet InstallFolder="D:\Stealthbits\PAM"
```

The `PRODUCTDIR` property that earlier versions used isn't accepted.

## Write an installation log

Add `/log` and a file name to write the installation log to that file:

```
NPS.exe /quiet /log "C:\Temp\nps-install.log" InstallFolder="D:\Stealthbits\PAM"
```

Without `/log`, the installer writes its log to the `%TEMP%` folder.

## Installer switches

| Switch | Description |
| --- | --- |
| `/install` | Installs the application. |
| `/repair` | Repairs an existing installation. |
| `/uninstall` | Uninstalls the application. |
| `/layout <directory>` | Copies the installer files to a directory without installing. |
| `/quiet` | Runs with no user interface. |
| `/passive` | Shows the progress and requires no input. |
| `/norestart` | Doesn't restart the server after installation. |
| `/log <file>` | Writes the log to the file. |

## After the installation

### Restart the server after a silent installation

Restart the server after `NPS.exe /quiet` finishes. The [Netwrix Setup Launcher](/docs/privilegesecure/26.07/install/install-application-server.md) asks you to restart the server to complete the installation. `NPS.exe` doesn't ask, so restart the server yourself.

### Open the console

Open `https://localhost:6500` on the server, and then [run the setup wizard](/docs/privilegesecure/26.07/install/first-launch.md).

If the database wasn't reachable during the installation, the installer still completes. Check `ImportActivities.log` in the `Logs` folder under `C:\ProgramData\Stealthbits\PAM`.

## Install other components silently

The standalone installers for the Action, Scheduler, and SIEM services are bootstrapper executables that accept the same switches. They don't accept an `InstallFolder` value. They install to `C:\Program Files\Stealthbits\PAM` or to the folder of an earlier installation. The Host Scan Service ships as an `.msi` file only. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

The standalone installers take no console URL or encryption key. Register each service with the application server after the installation.
