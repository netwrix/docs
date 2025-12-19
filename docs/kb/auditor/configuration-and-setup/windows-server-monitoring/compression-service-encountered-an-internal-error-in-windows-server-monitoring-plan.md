---
description: >-
  Explains how to resolve the "Compression Service has encountered an internal
  error" (Event ID 2009) in a Windows Server Auditing monitoring plan by
  enabling TLS 1.2, configuring .NET and Schannel registry settings, and
  reviewing WinHTTP settings.
keywords:
  - compression
  - schannel
  - TLS 1.2
  - Windows Server
  - Event ID 2009
  - WinHTTP
  - registry
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Compression Service Encountered an Internal Error '
tags: []
title: "Compression Service Encountered an Internal Error in Windows Server Monitoring Plan"
knowledge_article_id: kA04u00000111HZCAY
---

# Compression Service Encountered an Internal Error in Windows Server Monitoring Plan

## Symptom

The following error is prompted in the Health Log for your Windows Server Auditing monitoring plan:

```text
Source: Windows Server Audit Service
Event ID: 2009
Description: Monitoring plan: %affected_monitoring_plan%
Item: %affected_server%
The following error has occurred while processing %affected_server%:
The Compression Service has encountered an internal error: The Compression Service has encountered an internal error.
```

## Cause

The Windows Server Auditing host and compression service cannot operate due to different TLS protocol versions.

## Resolution

1. Enable TLS 1.2 via SChannel on both your Netwrix server and the target servers affected by the error. Refer to the following registry subkey:

   ```reg
   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client\Enabled
   ```

   The **Enabled** value on both your Netwrix server and the target servers affected should state `0x00000001 (1)` or `1` (hexadecimal).

2. On both your Netwrix server and the target servers affected, set the following registry keys to allow the operating system to select the protocol for incoming and outgoing communications:

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

   You can also use the following registry key file to apply the same changes: [TLS Registry Key](https://netwrix.com/download/products/KnowledgeBase/TLSRegkey.reg).

3. Allow all Schannel event logging levels to be logged. Refer to the following registry key:

   ```reg
   HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL
   ```

   Change the **EventLogging** subkey value to `7` (hexadecimal).

4. If the issue persists with all settings above configured correctly, review WinHTTP settings on both your Netwrix server and the target servers affected:

   ```reg
   HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\
   DefaultSecureProtocols = (DWORD): 0xAA0
   HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\
   DefaultSecureProtocols = (DWORD): 0xAA0
   ```

5. After you introduce the changes, close Registry Editor for the changes to take effect. It is recommended that you restart the affected servers. Alternatively, restart **Netwrix Auditor for Windows Server Compression Service** on each affected server.

> IMPORTANT: Once the issue is solved, limit the Schannel event logging level to `1`. Refer to the following registry key:
>
> ```reg
> HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL
> ```
>
> Change the **EventLogging** subkey value to `1` (hexadecimal).

## Attached files

- [TLS Registry Key](https://netwrix.com/download/products/KnowledgeBase/TLSRegkey.reg)

## Related articles

- [Connection Issue when TLS 1.2 Is Required](/docs/kb/auditor/troubleshooting-and-errors/ssl-tls-certificate-issues/connection_issue_when_tls_1.2_is_required)
- [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm)
