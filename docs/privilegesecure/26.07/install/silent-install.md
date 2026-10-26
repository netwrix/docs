---
title: "Install silently"
description: "Install the Privilege Secure application from the command line with NPS.exe, set the install folder, and write an installation log."
sidebar_position: 40
---

# Install silently

You can install the Netwrix Privilege Secure for Access Management (Privilege Secure) application from the command line without the installation wizard. This method suits scripted installations and software deployment tools.

## Before you begin

- Install PowerShell 7.6 or later on the application server. `NPS.exe` stops without it.
- Install the database first. A silent installation of `NPS.exe` doesn't install PostgreSQL. Install PostgreSQL 16 with `NetwrixPostgreSQL16.exe` from the `Extras` folder, or use an existing database.
- Copy `NPS.exe` from the `Extras` folder to the application server.
- Open a command prompt as an administrator.

{/* TODO verify: the Netwrix-supported way to install the bundled PostgreSQL silently. `NetwrixPostgreSQL16.exe` is a prebuilt package, the Setup Launcher starts it without arguments, and its command-line switches aren't in the product source. */}

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
|---|---|
| `/install` | Installs the application. |
| `/repair` | Repairs an existing installation. |
| `/uninstall` | Uninstalls the application. |
| `/layout <directory>` | Copies the installer files to a directory without installing. |
| `/quiet` | Runs with no user interface. |
| `/passive` | Shows the progress and requires no input. |
| `/norestart` | Doesn't restart the server after installation. |
| `/log <file>` | Writes the log to the file. |

## After the installation

{/* TODO verify: whether the application needs a server restart to finish and whether a silent installation restarts the server on its own, and the exit codes for success and for a pending restart. The installer source schedules no restart itself, and the bootstrapper's restart and exit-code behavior depends on the Windows installer at run time, so a silent install test on a host settles it. */}

Open `https://localhost:6500` on the server, and then [run the setup wizard](/docs/privilegesecure/26.07/install/first-launch.md).

If the database wasn't reachable during the installation, the installer still completes. Check `ImportActivities.log` in the `Logs` folder under `C:\ProgramData\Stealthbits\PAM`.

## Install other components silently

The standalone installers for the Action, Scheduler, and SIEM services are bootstrapper executables that accept the same switches, except that they don't accept an `InstallFolder` value and install to `C:\Program Files\Stealthbits\PAM` or to the folder of an earlier installation. The Host Scan Service ships as an `.msi` file only. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

The standalone installers take no console URL or encryption key. Register each service with the application server after the installation.
