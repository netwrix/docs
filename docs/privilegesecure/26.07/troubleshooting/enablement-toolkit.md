---
title: "Run diagnostics with the Enablement Toolkit"
description: "Run the Enablement Toolkit to test Active Directory, WinRM, SSH, and ports from the server, and export diagnostics for support."
sidebar_position: 20
---

# Run diagnostics with the Enablement Toolkit

The Enablement Toolkit is a Windows application with a graphical interface for common connectivity tests. Use it to check Active Directory (AD) lookups, group membership, Windows Remote Management (WinRM), Secure Shell (SSH), and ports from the Privilege Secure server, and to export diagnostics for support.

## Prerequisites

- The Privilege Secure installer package. The toolkit is in the `Extras` folder. See [Installation components and methods](/docs/privilegesecure/26_07/install/components).
- A local administrator account on the server where you run the toolkit.

{/* TODO verify: the exact Enablement Toolkit .exe file name in the 26.07.3 Extras folder */}

## Start the toolkit

1. Unzip the installer package, and open the `Extras` folder.
1. Run the Enablement Toolkit as a local administrator. If your account isn't a local administrator, Windows asks for administrator credentials.
1. Accept the end-user license agreement (EULA). The Enablement Toolkit window opens.

{/* TODO screenshot: Enablement Toolkit main window with the operation menu open */}

## The toolkit window

The fields in the window change with the selected operation. These controls are always present:

| Control | Description |
|---|---|
| **File** > **Save Results** | Saves the results after an operation runs successfully. |
| **File** > **Exit** | Closes the toolkit. |
| **Help** > **About** | Shows information about the toolkit. |
| **Help** > **Help (Selected Operation)** | Shows the operation name, required fields, notes, and a description. Press **F1** for the same window. |
| Operation menu | Lists the operations. |
| **Execute** | Runs the selected operation. |
| **Stop** | Stops the running operation. |
| **Use TLS** | Forces the operation to use Lightweight Directory Access Protocol over SSL (LDAPS) lookups instead of LDAP. |
| Status | Shows the status of the current job. |

## Run an operation

1. Select an operation from the operation menu.
1. Optional: press **F1** to read the help for the operation, and click **Close**.
1. Fill in the fields for the operation. The [Operations](#operations) table lists the required fields.
1. Click **Execute**. The results appear in the window.
1. Optional: select **File** > **Save Results** to keep the output.

For example, to check which management ports a Linux or Windows target accepts:

1. Select **Port Scan for Host**.
1. In **Host**, enter the name or IP address of the target, such as `<target-host>`.
1. Click **Execute**.

The results list whether ports 22 (SSH), 3389 (Remote Desktop Protocol, RDP), 5985 (WinRM), and 5986 (WinRM over HTTPS) are open. The heading also reports the result of a ping test.

## Operations

| Operation | What it does | Required fields | Notes |
|---|---|---|---|
| **Enumerate Active Directory Objects** | Counts users, group members, and computers in the domain or domain controller you enter. | **Domain**, **Username**, **Password** | Enter the domain or controller as a DNS name or an IP address. Select **Use TLS** for LDAPS. |
| **Verify Domain Group Membership for Credential** | Checks that a domain group exists and that a user is a member of it. | **Domain / User**, **Group**, **Username**, **Password** | Enter **Domain / User** as `<domain>\<user>`. **Username** and **Password** can be any domain user. Enter the domain controller as an IP address, a DNS name, or a domain name. Select **Use TLS** for LDAPS. |
| **Verify Local Windows Group Membership for User Account** | Checks that a local Windows group exists on a host and that a user is a member of it. | **User / Host**, **Group**, **Username**, **Password** | Enter **User / Host** as `<user>@<hostname>`. **Username** and **Password** must belong to an account that is a local administrator on the host. It can be a domain account or a local account. To check a domain user's membership, authenticate with a domain user. |
| **Verify WinRM Status for Host** | Tests WinRM (PowerShell remoting) on port 5985: the port, whether WinRM is enabled, whether the credentials authenticate, and whether `Invoke-Command` runs with them. | **Host** | With only **Host**, the toolkit runs the port and WinRM checks. Add **Username** and **Password** to run all checks. The toolkit doesn't test port 5986. |
| **Port Scan for Host** | Scans ports 22, 3389, 5985, and 5986 and runs a ping test. | **Host** | |
| **Verify SSH Connectivity for Host** | Tests SSH connectivity and authentication. Also checks whether the user can run `sudo`, which commands the user can run, and whether those commands use the "NOPASSWD" directive. | **Host**, **Port**, **Username**, **Password** | The port defaults to 22. |
| **Set Privilege Secure AppSettingUser Config Files** | Sets the host name in each Privilege Secure `appsettings.user.json` file. | **Host** | Enter the full URL, such as `https://<nps-server>:6500`. The host name must match the common name (CN) of the certificate bound in IIS to the Privilege Secure web application. Run it on each Privilege Secure server that has an IIS-bound certificate. |
| **Export Privilege Secure Diagnostics** | Exports logs, configuration files, and version information into a zip file. | **Date Range** | Select a date range to shorten the run. The toolkit prompts for a save location. It exports diagnostics only for the server that runs the toolkit. |

{/* TODO verify: whether the Set Privilege Secure AppSettingUser Config Files operation is still current in 26.07, and which services' config files it changes. */}

## Export diagnostics for support

1. Run the toolkit on the Privilege Secure server.
1. Select **Export Privilege Secure Diagnostics**.
1. Select a **Date Range** that covers the time of the problem.
1. Click **Execute**.
1. When prompted, choose a folder for the zip file.

The export includes logs and configuration files. Send it only to [Netwrix Support](https://www.netwrix.com/support.html). Run the export on each server that runs a Privilege Secure service, because it covers only the local server.

{/* TODO verify: that the diagnostics export removes secrets from the configuration files it collects. */}

## Related topics

- [Troubleshooting](/docs/privilegesecure/26_07/troubleshooting/overview)
- [Log files](/docs/privilegesecure/26_07/admin/audit-reporting/log-files)
