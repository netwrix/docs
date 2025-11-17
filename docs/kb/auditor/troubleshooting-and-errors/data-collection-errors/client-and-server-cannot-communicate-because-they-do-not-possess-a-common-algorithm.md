---
description: >-
  This article explains the error "The client and server cannot communicate,
  because they do not possess a common algorithm." and how to resolve it by
  restoring TLS registry settings so the operating system can select protocols
  for incoming and outgoing communication.
keywords:
  - TLS
  - SchUseStrongCrypto
  - SystemDefaultTlsVersions
  - registry
  - Schannel
  - TLS 1.2
  - Windows Server Auditing
  - compression service
products:
  - auditor
sidebar_label: 'Client and Server Cannot Communicate, Because They'
tags: []
title: "Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm"
knowledge_article_id: kA04u000000PoK4CAK
---

# Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm

## Symptom

Error: The client and server cannot communicate, because they do not possess a common algorithm.

## Cause

Windows Server Auditing host and compression service cannot operate due to different TLS protocol versions. The Windows Server Auditing collector requires the same TLS version running for both host and compression service. Refer to the following link for additional information on TLS protocol versions: https://learn.microsoft.com/en-us/windows/win32/secauthn/protocols-in-tls-ssl--schannel-ssp-.

While usually Windows is able to set the TLS version automatically, the error arises in case changes to the TLS registry settings for either host or compression service were introduced.

## Solution

If TLS registry settings were changed to ensure the system operability, you must set the following registry keys to allow the operating system to select the protocol for incoming and outgoing communication:

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\.NETFramework\v2.0.50727]
"SystemDefaultTlsVersions"=dword:00000001
"SchUseStrongCrypto"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\.NETFramework\v4.0.30319]
"SystemDefaultTlsVersions"=dword:00000001
"SchUseStrongCrypto"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v2.0.50727]
"SystemDefaultTlsVersions"=dword:00000001
"SchUseStrongCrypto"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
"SystemDefaultTlsVersions"=dword:00000001
"SchUseStrongCrypto"=dword:00000001
```

If initial changes do not affect the system operability, you can revert them to solve the issue. A reboot of either your host or compression service is required.

Refer to the following Microsoft article for additional information on best TLS practices: [TLS Best Practices](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tls).

For additional information on mismatched TLS versions and limited ciphers, refer to the following article: Сonnection Issue when TLS 1.2 Is Required.
