---
title: "Application Server"
description: "Application Server"
sidebar_position: 10
---

# Application Server

The requirements for the (Privilege Secure) application server are:

- Windows Server 2016 R2 through Windows Server 2025

:::info
Keep the Privilege Secure server non-domain-joined for additional security.
:::


- American English language installation
- Hardened / dedicated to Netwrix Privilege Secure (recommended)
- Controlled administrative access (recommended)
- 2.0 GHz or faster dual core 64-bit (x64) processor
-.NET Framework 4.7.2 installed (required for Windows Server 2012 R2 and Windows Server 2016 only)

-.NET Framework 4.7.2+ is in the “Pre-Reqs” folder of the product zip file.
Alternatively, download it from the following link:

[https://dotnet.microsoft.com/download/thank-you/net472](https://dotnet.microsoft.com/download/thank-you/net472)

- Windows Management Framework 5.1 installed (required for Window Server 2012 R2 only)

- Windows Management Framework is in the “Extras” folder of the product zip file.
Alternatively, download it from the following link:

[https://www.microsoft.com/en-us/download/details.aspx?id=54616](https://www.microsoft.com/en-us/download/details.aspx?id=54616)

- Properly functional domain-integrated DNS with ability to resolve all managed components both
forwards and backwards
- Multi-Factor Authentication (MFA) token (Authenticator, DUO, Symantec VIP, etc.)

RAM, CPU, and Disk Space

These depend on the total number of administrators using Privilege Secure.

| Environment | Extra Large | Large | Medium | Small |
| ----------------- | ----------- | ------- | ------ | ---------- |
| Number of Admins | 500-1000 | 100-500 | 50-100 | 50 or less |
| RAM | 64 GB | 32 GB | 16 GB | 16 GB |
| Cores | 8-16 | 6-8 | 4-6 | 4 |
| C: drive | 80 GB | 80 GB | 80 GB | 80 GB |
| Application drive | 300 GB | 200 GB | 100 GB | 100 GB |
| Recording drive | 500 GB | 300 GB | 200 GB | 150 GB |

Permissions

To install the application, you need the following permission:

- Membership in the local Administrators group on the Privilege Secure server
- Active Directory Synchronization for Vault Connectors – The account used must have Domain Admin
privileges

## Virtual Environment Recommendations

Netwrix prefers physical machines but fully supports virtual machines. This
section contains special considerations when using virtualization.

- VMWare® ESX® – If using ESX, Netwrix recommends the following specifications:
- ESX 4.0 / ESXi™ 4.1 or higher
- Virtual Hardware 7 or higher
- All Virtual Machines installed on the same datacenter / rack
- Virtual Storage Consideration
- When the server requirements specify separate disks for the servers, configure
separate data stores on the VM host machine.
