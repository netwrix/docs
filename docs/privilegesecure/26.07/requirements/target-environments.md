---
title: "Target environment requirements"
description: "Find the platforms Privilege Secure manages, the service account permissions each needs, and the Windows and Linux settings to put in place."
sidebar_position: 60
---

# Target environment requirements

Netwrix Privilege Secure for Access Management (Privilege Secure) manages resources on the platforms in this table. Each platform needs its own service account permissions. See [Service account permissions](#service-account-permissions).

| Platform | Requirement |
| --- | --- |
| Active Directory | Domain controllers that the application server can reach. |
| Windows | <ul><li>Windows Server 2016 or later</li><li>Windows 11</li></ul>The host needs PowerShell 5.1 and the Windows Remote Management (WinRM) service running. |
| Microsoft Entra ID | An app registration with Microsoft Graph permissions. |
| Linux | <ul><li>[AlmaLinux](https://almalinux.org/get-almalinux/) / [CentOS](https://www.centos.org/download/) / [Rocky Linux](https://rockylinux.org/download)</li><li>[Azure Linux](https://github.com/microsoft/azurelinux/releases). See [Prepare an Azure Linux resource](/docs/privilegesecure/26.07/configuration/service-accounts/prepare-azure-linux.md).</li><li>[Debian](https://www.debian.org/releases/)</li><li>[Fedora](https://docs.fedoraproject.org/en-US/releases/lifecycle/)</li><li>[openSUSE](https://en.opensuse.org/Lifetime)</li><li>[Oracle Linux](https://www.oracle.com/a/ocom/docs/elsp-lifetime-069338.pdf) / [Red Hat Enterprise Linux (RHEL)](https://access.redhat.com/support/policy/updates/errata)</li><li>[SUSE Linux Enterprise](https://www.suse.com/lifecycle/)</li><li>[Ubuntu](https://ubuntu.com/about/release-cycle)</li></ul>Use a distribution under long-term support (LTS) with SSHv2 or later. |
| BSD | <ul><li>[FreeBSD](https://www.freebsd.org/security/)</li><li>[NetBSD](https://www.netbsd.org/releases/)</li><li>[OpenBSD](https://www.openbsd.org/security.html)</li></ul>The host needs SSH access. |
| Cisco | <ul><li>[Cisco IOS](https://www.cisco.com/c/en/us/products/ios-nx-os-software/ios-technologies/index.html)</li><li>[Cisco IOS XE](https://www.cisco.com/c/en/us/products/ios-nx-os-software/ios-xe/index.html)</li></ul>The device needs SSH access. |
| Palo Alto | <ul><li>[PAN-OS](https://www.paloaltonetworks.com/services/support/end-of-life-announcements/end-of-life-summary)</li></ul>The device needs SSH access and the PAN-OS API. |
| Microsoft SQL Server | <ul><li>SQL Server 2017</li><li>SQL Server 2019</li><li>SQL Server 2022</li><li>SQL Server 2025</li></ul>A database instance. See [SQL Server lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/?products=sql-server) for the supported versions. |
| Oracle | <ul><li>Oracle Database 19c</li><li>Oracle Database 21c</li><li>Oracle Database 23ai</li></ul>A container database instance. See the [Oracle Lifetime Support Policy](https://www.oracle.com/us/support/library/lifetime-support-technology-069183.pdf) for the supported versions. |

For BSD targets, the service account signs in over SSH and runs commands with `sudo`. The command plans use the FreeBSD `pw` utility. For PAN-OS targets, Privilege Secure manages administrator accounts through the PAN-OS XML API over HTTPS at the device's address.

Privilege Secure also supports any device that accepts an SSH connection, and any device or website that uses Active Directory or Microsoft Entra ID authentication. These devices have no local account management and no preconfigured activity steps.

Privilege Secure has no Arista-specific platform in 26.07.

Websites and secret vaults are platforms too. For the full platform list and their settings, see [Platforms](/docs/privilegesecure/26.07/resources/platforms/platforms.md).

## Service account permissions

| Target | Permission |
| --- | --- |
| Active Directory, and Windows member servers and desktops | Membership in the Domain Administrators group in the target domains. |
| Standalone Windows servers and desktops | Membership in the local Administrators group on each server or desktop. |
| Linux | A service account on each server, or a central domain account for hosts bridged to Active Directory. The account is root, or has permissions delegated through sudo or another least-privilege solution. |
| Cisco | Level 15 Privileged EXEC, which gives full access for configuration and management. |
| Microsoft Entra ID | An app registration with Microsoft Graph application permissions and Entra directory role assignments. For the permission and role list, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26.07/configuration/service-accounts/entra-id-app-registration.md). |
| Oracle | `SYSDBA` privileges. |
| Microsoft SQL Server | `sysadmin` privileges. |

For the Entra ID app registration, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26.07/configuration/service-accounts/entra-id-app-registration.md).

For BSD targets, use root or an account that can run the needed commands through `sudo`. For the least-privilege policy, see [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md). For PAN-OS targets, use an administrator whose role enables the XML API and allows configuration changes and commits. See [Configure an admin role profile](https://docs.paloaltonetworks.com/ngfw/administration/firewall-administration/manage-firewall-administrators/configure-an-admin-role-profile) in the Palo Alto Networks documentation.

## Windows targets

### WinRM

Privilege Secure manages Windows hosts through PowerShell remoting over WinRM. Open TCP port 5985 (HTTP) or 5986 (HTTPS) from the application server to each Windows host. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

### Kerberos delegation

A host scan runs on the target host itself. It reads local users and local groups with local WMI and ADSI calls, so it doesn't contact a domain controller. You don't need delegation for a host scan.

Some actions on Active Directory resources run a command on the target host that then reads from a domain controller. This makes a second network hop, from the target host to the domain controller. The command reaches the domain controller only when the target host can forward the administrator's credentials on that second hop. Configure Kerberos delegation so the target host can authenticate to the domain controllers on the second hop.

Without delegation, the second hop fails. The command can't read the domain, so the collected data is incomplete. Password rotation can still proceed while a session holds the old password. This can cause recurring Active Directory account lockouts.

### Non-domain-joined hosts

On a Windows host that isn't joined to a domain, remote PowerShell can fail with "Access is denied" for a local service account. User Account Control (UAC) filters remote sign-ins by local accounts, which causes the error. First, confirm that the service account is a member of the local **Administrators** group on the host. If the error continues, run this command in a PowerShell session that you started as an administrator:

```powershell
New-ItemProperty -Name LocalAccountTokenFilterPolicy `
-Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System `
-PropertyType DWord -Value 1
```

The command sets the `LocalAccountTokenFilterPolicy` registry value to 1, which turns off UAC remote restrictions for local accounts. For more information, see these articles:

- [Access Denied Error Connecting to a Non-domain-joined Windows Resource](/docs/kb/privilegesecure/resource-management/access-denied-error-connecting-to-a-non-domain-joined-windows-resource)
- [Managing Non-domain-joined Windows Computers with Netwrix Privilege Secure](/docs/kb/privilegesecure/resource-management/managing-non-domain-joined-windows-computers-with-privilege-secure)

## Linux targets

Use a dedicated service account with least privilege instead of root. Create a sudoers file for the account that allows only the commands Privilege Secure needs, and don't grant blanket sudo access. The same applies to BSD targets.

Azure Linux 4.0 resources need extra preparation before you add them. See [Prepare an Azure Linux resource](/docs/privilegesecure/26.07/configuration/service-accounts/prepare-azure-linux.md).

The account name that you add as a service account in Privilege Secure must match the account name in the sudoers file. For the policy, the command list, and how to check it, see [Configure a least-privilege sudoers policy for Linux and BSD](/docs/privilegesecure/26.07/configuration/service-accounts/linux-bsd-sudoers.md).
