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

{/* TODO verify: the supported way to install the bundled PostgreSQL silently. */}

## Install with the default options

Run the following command:

```
NPS.exe /quiet
```

The application installs in the background to `C:\Program Files\Stealthbits\PAM`.

## Install to a different folder

Set the `InstallFolder` variable on the command line. For example, to install to `D:\Stealthbits\PAM`, run:

```
NPS.exe /quiet InstallFolder="D:\Stealthbits\PAM"
```

{/* TODO verify: the exact syntax of the InstallFolder variable on the command line, that the installer uses the folder, and that PRODUCTDIR (used in the 26.03 docs) isn't accepted. PRODUCTDIR doesn't appear in the 26.07.3 installer source. */}

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

The application needs a server restart to finish. Restart the server before you open the console.

{/* TODO verify: whether a silent installation restarts the server on its own, and the exit codes for success and for a pending restart. */}

Open `https://localhost:6500` on the server, and then [run the setup wizard](/docs/privilegesecure/26.07/install/first-launch.md).

If the database wasn't reachable during the installation, the installer still completes. Check `ImportActivities.log` in the Privilege Secure log folder under `C:\ProgramData\Stealthbits\PAM`.

## Install other components silently

The standalone installers for the Action, Scheduler, Email, and SIEM services accept the same switches, including `InstallFolder`. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

{/* TODO verify: the switches for the Host Scan installer, which components.md lists as an `.exe` file but the installer source builds as a bundle, and the switches and parameters that each standalone service installer accepts for the console URL and the encryption key. */}
