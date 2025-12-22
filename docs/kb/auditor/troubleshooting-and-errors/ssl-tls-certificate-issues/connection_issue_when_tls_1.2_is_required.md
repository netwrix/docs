---
description: >-
  This article provides guidance on setting up connections between internal environments and Microsoft 365 when facing TLS version mismatches and limited ciphers.
keywords:
  - TLS 1.2
  - Microsoft 365
  - WinHTTP
sidebar_label: Connection Issue with TLS 1.2
tags: []
title: "Connection Issue When TLS 1.2 Is Required"
knowledge_article_id: kA00g000000H9eOCAS
products:
  - auditor
---

# Connection Issue When TLS 1.2 Is Required

## Question

How to set up connections between the internal environment and Microsoft (Office) 365 with mismatched TLS versions and limited ciphers?

## Answers

### Option 1: For Up-to-Date Environments

For up-to-date environments, refer to the following KB article for additional information: [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm). You can also use this registry key to achieve the same results: [TLS Registry Key](https://netwrix.com/download/products/KnowledgeBase/TLSRegkey.reg).

### Option 2: For Pre-Windows Server 2019 Environments and Earlier

> **NOTE:** For additional information, refer to the following Microsoft articles: [How to enable TLS 1.2 on clients ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client) and [TLS best practices — Configuring security via the Windows Registry ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#configuring-security-via-the-windows-registry).

#### Step 1: Update Windows and WinHTTP

Earlier versions of Windows (e.g., Windows 7, Windows Server 2012, etc.) do not enable TLS 1.1 or TLS 1.2 by default for secure communications using WinHTTP. For earlier versions of Windows, install [Update 3140245 ⸱ Microsoft Support 🡥](https://support.microsoft.com/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392) to enable the registry value below, which can be set to add TLS 1.1 and TLS 1.2 to the default secure protocols list for WinHTTP. With the patch installed, create the following registry values:

> **NOTE:** Enable these settings for all clients running earlier versions of Windows **before** enabling TLS 1.2 and disabling the older protocols in the Configuration Manager servers. Otherwise, you can inadvertently orphan them.

Verify the value of the **DefaultSecureProtocols** registry setting:

```Registry
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\
DefaultSecureProtocols = (DWORD): 0xAA0
HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\
DefaultSecureProtocols = (DWORD): 0xAA0
```

The Microsoft article [Update to enable TLS 1.1 and TLS 1.2 as default secure protocols in WinHTTP in Windows ⸱ Microsoft 🡥](https://support.microsoft.com/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392) lists hexadecimal values for each protocol. By default in Windows, the value **0x0A0** is used to enable SSL 3.0 and TLS 1.0 for WinHTTP. The example provided above allows you to keep default values and enable TLS 1.1 and TLS 1.2 for WinHTTP. This configuration ensures the change doesn't affect any other application that might still rely on SSL 3.0 or TLS 1.0. You can use the **0xA00** value to only enable TLS 1.1 and TLS 1.2. Configuration Manager supports the most secure protocol supported by both Windows devices.

> **NOTE:** If you change this value, make sure to reboot your computer to apply these changes.

#### Step 2: Ensure That TLS 1.2 Is Enabled as a Protocol for SChannel at the Operating System Level

Verify the `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols` registry subkey setting, as specified in the following article: [TLS best practices — Configuring security via the Windows Registry ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls#configuring-security-via-the-windows-registry).

#### Step 3: Update and Configure the .NET Framework to Support TLS 1.2

##### Step 3.1: Install .NET Updates

Install .NET updates to enable strong cryptography. Some versions of .NET Framework might require updates to enable strong cryptography; refer to the following guidelines:

- .NET Framework 4.6.2 and later supports TLS 1.1 and TLS 1.2. Confirm the registry settings; no additional changes are required.

  > **NOTE:** Starting version 2107, Configuration Manager requires Microsoft .NET Framework version 4.6.2 for site servers, specific site systems, clients, and the console. If possible in your environment, install the latest version of .NET version 4.8.

- Update .NET Framework 4.6 and earlier versions to support TLS 1.1 and TLS 1.2. For additional information, refer to the following article: [.NET Framework versions and dependencies ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies).

- If you're using .NET Framework 4.5.1 or 4.5.2 on Windows 8.1, Windows Server 2012 R2, or Windows Server 2012, it is strongly recommended to install the latest security updates for .NET Framework 4.5.1 and 4.5.2 to ensure TLS 1.2 can be enabled.

  > **NOTE:** TLS 1.2 was first introduced into .NET Framework 4.5.1 and 4.5.2 with the following hotfix rollups:
  
  - For Windows 8.1 and Server 2012 R2: [Hotfix rollup 3099842 ⸱ Microsoft 🡥](https://support.microsoft.com/topic/hotfix-rollup-3099842-for-the-net-framework-4-5-2-and-the-net-framework-4-5-1-on-windows-7b629c7e-bea4-4838-2512-e22e8bad368a).
  
  - For Windows Server 2012: [Hotfix rollup 3099844 ⸱ Microsoft 🡥](https://support.microsoft.com/topic/hotfix-rollup-3099844-for-the-net-framework-4-5-2-4-5-1-and-4-5-on-windows-ee48ac0d-79be-28f7-563d-e7bd46040dd3).

##### Step 3.2: Configure for Strong Cryptography

Configure .NET Framework to support strong cryptography. Set the **SchUseStrongCrypto** registry setting to **DWORD:00000001**. This value disables the RC4 stream cipher and requires a restart. For additional information on the setting, refer to the following article: [Microsoft Security Advisory 296038 ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/security-updates/SecurityAdvisories/2015/2960358).

Make sure to set the following registry keys on any computer that communicates across the network with a TLS 1.2-enabled system. For example, Configuration Manager clients, remote site system roles not installed on the site server, and the site server itself.

For 32-bit applications that are running on 32-bit OSs and for 64-bit applications that are running on 64-bit OSs, update the following subkey values:

```Registry
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v2.0.50727]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
```

For 32-bit applications that are running on 64-bit OSs, update the following subkey values:

```Registry
[HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\.NETFramework\v2.0.50727]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\.NETFramework\v4.0.30319]
      "SystemDefaultTlsVersions" = dword:00000001
      "SchUseStrongCrypto" = dword:00000001
```

> **NOTE:** The `SchUseStrongCrypto` setting allows .NET to use TLS 1.1 and TLS 1.2. The **SystemDefaultTlsVersions** setting allows .NET to use the OS configuration. For additional information, refer to the following article: [TLS best practices ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls).

### Attached Files

- [TLS Registry Key](https://netwrix.com/download/products/KnowledgeBase/TLSRegkey.reg)

### Related Articles

- [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm)

- [How to enable TLS 1.2 on clients ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client)

- [TLS best practices — Configuring security via the Windows Registry ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls#configuring-security-via-the-windows-registry)

- [Update 3140245 ⸱ Microsoft Support 🡥](https://support.microsoft.com/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392)

- [Update to enable TLS 1.1 and TLS 1.2 as default secure protocols in WinHTTP in Windows ⸱ Microsoft 🡥](https://support.microsoft.com/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392)

- [TLS best practices — Configuring security via the Windows Registry ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls#configuring-security-via-the-windows-registry)

- [.NET Framework versions and dependencies ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies)

- [Hotfix rollup 3099842 ⸱ Microsoft 🡥](https://support.microsoft.com/topic/hotfix-rollup-3099842-for-the-net-framework-4-5-2-and-the-net-framework-4-5-1-on-windows-7b629c7e-bea4-4838-2512-e22e8bad368a)

- [Hotfix rollup 3099844 ⸱ Microsoft 🡥](https://support.microsoft.com/topic/hotfix-rollup-3099844-for-the-net-framework-4-5-2-4-5-1-and-4-5-on-windows-ee48ac0d-79be-28f7-563d-e7bd46040dd3)

- [Microsoft Security Advisory 296038 ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/security-updates/SecurityAdvisories/2015/2960358)

- [TLS best practices ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls)