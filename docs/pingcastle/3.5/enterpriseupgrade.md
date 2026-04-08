# PingCastle Enterprise Upgrade Guide

## Before proceeding to the upgrade

**Version check**

You can check the existing version using the About link at the bottom of
each page.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseupgrade/rid9.webp)

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseupgrade/rid12.webp)

**Database backup**

We highly recommend to backup the data before proceeding to an upgrade.

The data is stored I the database. No data is stored outside of the DB.

# Software requirements

Before performing the upgrade, the software requirements for the new
version need to be met. The table below lays out the different
requirements for versions.

| Version    | Requirement                              |
| ---------- | ---------------------------------------- |
| 2.x        | All versions have same requirements      |
| 2.x to 3.2 | ASP.NET must be upgraded from 3.1 to 6.0 |
| 3.2 to 3.x | ASP.NET must be upgraded from 6.0 to 8.0 |

# Performing the upgrade

**Download the software**

You have to download the .zip file of the program.

The .msi file has not been designed for upgrade.

![Une image contenant texte Description générée automatiquement](/images/pingcastle/enterpriseupgrade/rid17.webp)

**Recommended installation on Windows**

If the program was installed through the MSI, the upgrade path is simple. IIS must be stopped.

All the files installed have to be replaced from the ones from the zip.

Untouched files should be configuration files (appsettings.\* and the web.config file)

Then IIS must be started.

**Other installations**

You must upgrade the program files and ensure that the library requirements (dotnet version, ...) are fulfilled.

# Post installation

You should check that the version of the application changed in the about page.
