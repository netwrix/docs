---
title: "Silent Installation"
description: "Install Threat Manager from the command line with Name=Value variables for install mode, folders, database, HTTPS, and firewall rules."
sidebar_position: 25
---

# Silent Installation

Install Threat Manager without the wizard by passing `Name=Value` variables to the installer on the command line.

## Install variables

| Variable | Accepted values | Default | What it does |
| --- | --- | --- | --- |
| `ProductInstallSettings_InstallMode` | `AllServices` or `Remote` | `AllServices` | Sets the install mode. The installer ignores it after a first install locks the machine to a mode. |
| `ProductInstallSettings_EnableAdvancedInstall` | `True` or `False` | `False` | Shows the Advanced Settings page on a first install. |
| `ProductInstallSettings_RemoteServicesSelected` | A number | Empty | Selects the services for a `Remote` install. Add the values of the services you want: Action Service is 128 and Integration Service is 256. The installer ignores other values. |
| `ProductInstallSettings_PreferFullInstall` | `True` or `False` | `False` | When `True`, forces an All Services install and hides the Advanced Settings page on a first install. |
| `WebServiceCertificate` | Empty, `Unsecured`, or a certificate thumbprint | Empty | Sets the HTTPS choice. See [Secure the Threat Manager Console](/docs/threatmanager/3.4/install/secure.md). |
| `InstallFolder` | A folder path | `[ProgramFiles64Folder]STEALTHbits\StealthDEFEND` | Sets the install folder. |
| `DataFolder` | A folder path | `[CommonAppDataFolder]STEALTHbits\StealthDEFEND` | Sets the data folder. |
| `Host` | A host name | `localhost` | Sets the database host. |
| `Port` | A port number | | Sets the database port. |
| `Database` | A database name | | Sets the database name. |
| `UpdateFirewallSettings` | `True` | | Creates inbound Windows Firewall rules. |
| `InstallADModules` | `False` | | Skips the AD PowerShell module install. |
| `InstallEntraModules` | `False` | | Skips the Entra PowerShell module install. |

### Install mode

If a prior install locked the machine to Remote, `ProductInstallSettings_PreferFullInstall=True` doesn't stop the run. The installer shows the locked Advanced Settings page.

For example, `ProductInstallSettings_RemoteServicesSelected=384` installs both Action Service and Integration Service (128 + 256).

### HTTPS

An empty `WebServiceCertificate` leaves the HTTPS settings unchanged. `Unsecured` selects HTTP. Any other value is the thumbprint of a certificate in the Local Computer Personal store. On a fresh silent install with no value, the services use HTTP.

### PowerShell modules

`InstallADModules` and `InstallEntraModules` apply only when you install Action Service.

## Examples

Install all services to custom folders, connect to a database, and create firewall rules:

```text
ProductInstallSettings_PreferFullInstall=True InstallFolder=<install folder> DataFolder=<data folder> Host=<database host> Port=<database port> Database=<database name> UpdateFirewallSettings=True
```

Install only Action Service and Integration Service on a remote server:

```text
ProductInstallSettings_InstallMode=Remote ProductInstallSettings_RemoteServicesSelected=384
```
