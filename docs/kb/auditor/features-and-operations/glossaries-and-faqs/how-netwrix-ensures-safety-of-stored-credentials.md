---
description: >-
  Explains how Netwrix Auditor stores and protects data collection account
  credentials using Windows DPAPI (CryptoAPI), describing encryption, storage,
  decryption stages, and FAQs.
keywords:
  - DPAPI
  - CryptoAPI
  - CryptProtectData
  - CryptUnprotectData
  - Configuration.xml
  - CRYPTPROTECT_LOCAL_MACHINE
  - encrypted credentials
  - Netwrix Auditor
  - data protection
  - Windows DPAPI
products:
  - auditor
sidebar_label: How Netwrix Ensures Safety of Stored Credentials
tags: []
title: "How Netwrix Ensures Safety of Stored Credentials"
knowledge_article_id: kA00g000000H9eYCAS
---

# How Netwrix Ensures Safety of Stored Credentials

## Data Protection

Netwrix Auditor leverages accounts with privileges considered higher than regular users" for target systems configuration, access, and data collection. Therefore, credentials of those accounts must be stored on the Netwrix Auditor server in a secure manner.

For that, Netwrix Auditor utilizes a native Microsoft Windows cryptographic mechanism called Data Protection API (DPAPI) based on [Crypto API](https://docs.microsoft.com/en-us/windows/win32/seccrypto/cryptography-portal). Detailed information on DPAPI implementation by Microsoft can be found in [Windows Data Protection](https://docs.microsoft.com/en-us/previous-versions/ms995355(v=msdn.10)?redirectedfrom=MSDN#windataprotection-dpapi_topic04).

The benefits of this approach are

- Usage of DPAPI is recommended by Microsoft for encryption of sensitive data at rest (such as passwords or [master keys](https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/implementation/key-encryption-at-rest?view=aspnetcore-3.0#windows-dpapi)). Also, DPAPI is used by Microsoft services to store credentials (e.g., Remote Desktop Connection).
- DPAPI is built-in in the Microsoft Windows operating system. Therefore, all enhancements, updates and security bug fixes are provided through regular Windows Update.
- [CryptoAPI](https://docs.microsoft.com/en-us/windows/win32/seccrypto/cryptography-portal) under the hood of DPAPI uses proven cryptographic algorithms such as AES 256-bit for data encryption. They can be adjusted to the specific needs of a company through Cryptographic Service Providers configuration.
- Master keys used by DPAPI for data encryption are managed by Microsoft Windows OS; third-party applications and Netwrix Auditor, in particular, do not access or control them.

---

The following table describes how data containing passwords of data collection accounts is managed by Netwrix Auditor:

| Stage | Description | How Security is Ensured |
|---|---|---|
| Data Encryption | Netwrix Auditor invokes the [CryptProtectData](https://docs.microsoft.com/en-us/windows/win32/api/dpapi/nf-dpapi-cryptprotectdata) function, passes a password of a data collection account as sensitive data for encryption. The function then returns the encrypted data for storage. | The CryptProtectData function is a part of the CryptoAPI located in [Crypt32.dll](https://docs.microsoft.com/en-us/windows/win32/seccrypto/crypt32-dll-versions). The request for further processing is transferred through a secure RPC channel to the LSA system process. In the LSA, the data is encrypted and transferred back to the Netwrix Auditor components. |
| Data Storage | Data with encrypted passwords is stored in `Configuration.xml` file located in `%ProgramData%Netwrix AuditorAuditCoreConfigServer` on the Netwrix Auditor Server. | 1. Access to this folder is denied for anyone except for local Administrators on the Netwrix Auditor host.  2. Copying the data itself or the Configuration file to another machine does not pose data to risk since the data is encrypted with `CRYPTPROTECT_LOCAL_MACHINE` flag. This flag ensures that the data can be decrypted just on the machine it has been encrypted on. |
| Data Decryption | Netwrix Auditor invokes the [CryptUnprotectData](https://docs.microsoft.com/en-us/windows/win32/api/dpapi/nf-dpapi-cryptunprotectdata) function to get decrypted data with a password that is necessary for connecting to a specific target system | The decryption is performed in the same secure way as encryption. |

---

## Frequently Asked Questions

**Q:** What cryptographic algorithm is used for encryption?  
**A:** Since Netwrix Auditor relies on DPAPI instead of directly handling encryption, the actual mechanism is defined by the Windows operation system. Netwrix does not have control over selection of cryptographic algorithms.

[CryptoAPI](https://docs.microsoft.com/en-us/windows/win32/seccrypto/cryptography-portal) under the hood of DPAPI uses proven cryptographic algorithms for data encryption such as AES 256-bit.

**Q:** What if someone unauthorized gets a copy of the `Configuration.xml` file on another machine and then tries to decrypt passwords stored in it?  
**A:** Microsoft Data Protection API provides mechanism to associate encrypted data with the machine context. Netwrix uses this approach by utilizing `CRYPTPROTECT_LOCAL_MACHINE` flag for encryption. This ensures that the data can be decrypted only on the same machine it has been encrypted on.

**Q:** What should Netwrix administrators do to keep Netwrix Auditor as secure as possible?  
**A:** The most important thing is to limit access to the Netwrix Auditor server. Just authorized personnel should have access to the Netwrix Auditor server.

The access level must be thoroughly adjusted as well; regular Netwrix Auditor users don't need the local Administrators rights.

For detailed guidelines, see [Best Practices for Securing Netwrix Auditor](https://kb.netwrix.com/215).
