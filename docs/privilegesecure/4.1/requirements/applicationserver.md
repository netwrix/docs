---
title: "Application Server Requirements"
description: "Application Server Requirements"
sidebar_position: 10
---

# Application Server Requirements

The requirements for the (Privilege Secure) application server are:

- Windows Server 2016 R2 through Windows Server 2022

    :::info
    Windows Server 2022, non-domain-joined for security
    :::


- US English language installation
- Hardened / dedicated to Netwrix Privilege Secure (recommended)
- Controlled administrative access (recommended)
- 2.0 GHz or faster dual core 64-bit (x64) processor
- .NET Framework 4.7.2 installed (required for Windows Server 2012 R2 and Windows Server 2016 only)

    - .NET Framework 4.7.2+ is included in the “Pre-Reqs” folder of the product zip file.
      Alternatively, download from the following link:

        [https://dotnet.microsoft.com/download/thank-you/net472](https://dotnet.microsoft.com/download/thank-you/net472)

- Windows Management Framework 5.1 installed (required for Window Server 2012 R2 only)

    - Windows Management Framework is included in the “Extras” folder of the product zip file.
      Alternatively, download from the following link:

        [https://www.microsoft.com/en-us/download/details.aspx?id=54616](https://www.microsoft.com/en-us/download/details.aspx?id=54616)

- Properly functional domain-integrated DNS with ability to resolve all managed components both
  forwards and backwards
- Multi-Factor Authentication (MFA) token (Authenticator, DUO, Symantec VIP, etc.)

**RAM, CPU and Disk Space**

These are dependent upon the total number of administrators using Privilege Secure.

| Environment       | Extra Large | Large   | Medium | Small      |
| ----------------- | ----------- | ------- | ------ | ---------- |
| Number of Admins  | 500-1000    | 100-500 | 50-100 | 50 or less |
| RAM               | 64 GB       | 32 GB   | 16 GB  | 16 GB      |
| Cores             | 8-16        | 6-8     | 4-6    | 4          |
| C: drive          | 80 GB       | 80 GB   | 80 GB  | 80 GB      |
| Application drive | 300 GB      | 200 GB  | 100 GB | 100 GB     |
| Recording drive   | 500 GB      | 300 GB  | 200 GB | 150 GB     |

**Permissions**

The following permission is required to install the application:

- Membership in the local Administrators group on the Privilege Secure server
- Active Directory Synchronization for Vault Connectors – The account used must have Domain Admin
  privileges

## Virtual Environment Recommendations

While physical machines are always preferred, we fully support the use of virtual machines. This
section contains special considerations when leveraging virtualization.

- VMWare® ESX® – If using ESX, the following specifications are recommended:
    - ESX 4.0 / ESXi™ 4.1 or higher
    - Virtual Hardware 7 or higher
    - All Virtual Machines installed on the same datacenter / rack
- Virtual Storage Consideration
    - In the server requirements, when separate disks are required for the servers, that should
      translate to separate data stores on the VM host machine.
