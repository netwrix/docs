---
title: "Target environment requirements"
description: "Find the platforms Privilege Secure manages, the permissions its service accounts need on each, and the Windows and Linux settings that must be in place."
sidebar_position: 60
---

# Target environment requirements

Netwrix Privilege Secure for Access Management (Privilege Secure) manages resources on the platforms in this table. Each platform needs its own service account permissions; see [Service account permissions](#service-account-permissions).

| Platform | Requirement |
| --- | --- |
| Active Directory | Domain controllers that the application server can reach. |
| Windows | Windows Server 2008 R2 or later with PowerShell 5.1, or a Windows desktop with the Windows Remote Management (WinRM) service running. |
| Microsoft Entra ID | An app registration with Microsoft Graph permissions. |
| Linux | A distribution under long-term support (LTS) with SSHv2 or later, such as Debian, CentOS, Red Hat Enterprise Linux (RHEL), or openSUSE. |
| BSD | SSH access. |
| Cisco | SSH access. |
| Palo Alto PAN-OS | SSH access and the PAN-OS API. |
| Microsoft SQL Server | A database instance. |
| Oracle | A container database instance. |

Privilege Secure also manages websites and secret vaults. For their settings, see [Platforms](/docs/privilegesecure/26_07/resources/platforms).

{/* TODO verify: Windows Server 2008 R2 and PowerShell 5.1 still apply to 26.07 targets. These values come from the 26.03 page. */}
{/* TODO verify: SSH and API requirements for BSD and PAN-OS targets. */}

Privilege Secure also supports any device that accepts an SSH connection, and any device or website that uses Active Directory or Microsoft Entra ID authentication. These devices have no local account management and no preconfigured activity steps.

{/* TODO SME: support statement for Arista. The 26.07.3 lab shows 11 platforms and no Custom, Arista, or "Cisco (Custom)" platform. */}

For the full platform list and settings, see [Platforms](/docs/privilegesecure/26_07/resources/platforms).

## Service account permissions

| Target | Permission |
| --- | --- |
| Active Directory, and Windows member servers and desktops | Membership in the Domain Administrators group in the target domains. |
| Standalone Windows servers and desktops | Membership in the local Administrators group on each server or desktop. |
| Linux | A service account on each server, or a central domain account for hosts bridged to Active Directory. The account is root, or has permissions delegated through sudo or another least-privilege solution. |
| Cisco | Level 15 Privileged EXEC, which gives full access for configuration and management. |
| Microsoft Entra ID | Microsoft Graph application permissions `Directory.ReadWrite.All`, `Group.ReadWrite.All`, `User.ReadWrite.All`, and `RoleManagement.ReadWrite.Directory`. Delegated permission `User.Read`. The app registration is a member of the User Administrators directory role. |
| Oracle | `SYSDBA` privileges. |
| Microsoft SQL Server | `sysadmin` privileges. |

For the Entra ID app registration, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26_07/configuration/service-accounts/entra-id-app-registration).

{/* TODO verify: service account permissions for BSD and PAN-OS targets. */}

## Windows targets

### WinRM

Privilege Secure manages Windows hosts through PowerShell remoting over WinRM. Open TCP port 5985 (HTTP) or 5986 (HTTPS) from the application server to each Windows host. See [Ports](/docs/privilegesecure/26_07/requirements/ports).

### Kerberos delegation

When a Windows resource must reach a domain controller during a host scan, the request makes a second network hop from the resource to the domain controller. This second hop needs Kerberos delegation between the resource and the domain controller. Without it, the host scan fails, the operating system stays blank, and password rotation can proceed while a session still holds the old password. The result can be recurring Active Directory account lockouts.

Configure Kerberos delegation, such as resource-based constrained delegation, between the resource and the domain controllers.

{/* TODO verify: the delegation configuration and steps that Netwrix supports (PSAM-1331). */}

### Non-domain-joined hosts

On a Windows host that isn't joined to a domain, remote PowerShell can fail with "Access is denied" for a local service account because User Account Control (UAC) filters remote sign-ins by local accounts. First, confirm that the service account is a member of the local **Administrators** group on the host. If the error continues, run this command in a PowerShell session that you started as an administrator:

```powershell
New-ItemProperty -Name LocalAccountTokenFilterPolicy `
-Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System `
-PropertyType DWord -Value 1
```

The command sets the `LocalAccountTokenFilterPolicy` registry value to 1, which turns off UAC remote restrictions for local accounts. For more information, see these articles:

- [Access Denied Error Connecting to a Non-domain-joined Windows Resource](/docs/kb/privilegesecure/resource-management/access-denied-error-connecting-to-a-non-domain-joined-windows-resource)
- [Managing Non-domain-joined Windows Computers with Netwrix Privilege Secure](/docs/kb/privilegesecure/resource-management/managing-non-domain-joined-windows-computers-with-privilege-secure)

## Linux targets

Use a dedicated service account with least privilege instead of root. Create a sudoers file for the account that allows only the commands Privilege Secure needs, and don't grant blanket sudo access.

The account name that you add as a service account in Privilege Secure must match the account name in the sudoers file. For the account setup and the command list, see [Creating a Least Privilege Service Account for Linux Resources](/docs/kb/privilegesecure/user-and-service-accounts/creating-a-least-privilege-service-account-for-linux-resources).

{/* TODO verify: the KB command list against the 26.07 Linux command plans. The plans changed in 26.07 and may need more commands. */}
