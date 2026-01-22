---
title: "Target Environments"
description: "Target Environments"
sidebar_position: 40
---

# Target Environments

Netwrix Privilege Secure supports management of the following target environments:

- Microsoft® Active Directory®
- Window Server 2008 R2 or later – Requires PowerShell v5.1
- Windows Desktop – Requires the winrm service to be running
- Cisco IOS
- Websites
- Microsoft SQL Server databases
- Oracle databases (container instances)
- Microsoft Entra ID (formerly Azure AD)
- Linux distributions with SSHv2 or higher that are under LTS

    - Debian
    - CentOS
    - Red Hat Enterprise Linux (RHEL)
    - openSUSE

Additional Supported Platforms (no local account management or pre-configured activity steps)

- Any device that supports a SSH Connection
- Any device / platform / web site that is AD / Microsoft Entra ID Authenticated

## Permissions

The following permissions are required for the service accounts:

- For Active Directory and Windows member server/desktop management:

    - Membership in the Domain Administrators group in the target domain(s)

- For Linux server management:

    - Service account on each server to be managed or a central domain account in the case of
      AD-bridged hosts
    - Permissions may either be root or delegated via sudo or other commercial least privilege
      solutions

- For standalone Windows Servers/desktops:

    - Membership in the local Administrator group on each server/desktop to be managed

- For Cisco

    - Level 15 Privileged EXEC — Full access to the device for configuration and management

- For Microsoft Entra ID management:

    - Microsoft Graph API

        - Application Permissions:

            - Directory.ReadWrite.All
            - Group.ReadWrite.All
            - User.ReadWrite.All
            - RoleManagement.ReadWrite.Directory

        - Delegated Permissions:

            - User.Read

    - App Registration added to the User Administrators directory role

- For Oracle database management:

    - SYSDBA privileges

- For Microsoft SQL Server database management:

    - sysadmin privileges
