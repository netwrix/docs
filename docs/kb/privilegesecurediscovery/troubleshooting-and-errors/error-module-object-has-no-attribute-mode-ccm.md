---
title: "Error: 'module' Object Has No Attribute 'MODE_CCM'"
description: "Resolve the 'module' object has no attribute 'MODE_CCM' error in Access History or on rescan by disabling SMB encryption, and learn how to re-enable it."
sidebar_label: "Error: 'module' Object Has No Attribute 'MODE_CCM'"
keywords:
- "'module' object has no attribute 'MODE_CCM'"
- MODE_CCM
- SMB encryption
- Set-SmbServerConfiguration
- EncryptData
- Get-SmbServerConfiguration
- Grant Access
- Access History
- rescan
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- troubleshooting-and-errors
knowledge_article_id: kA04u00000110oNCAQ
---

## Symptom

You see the following error in the **Access History** of the system, or when you rescan the system from the **Grant Access** page:

```text
'module' object has no attribute 'MODE_CCM'
```

## Cause

SMB encryption is enabled on the system.

## Resolution

> **IMPORTANT:** To perform these troubleshooting steps, you must have the administrator role in the product, and you must be able to run PowerShell on the system.

> **IMPORTANT:** Disabling SMB encryption removes encryption for all SMB traffic to and from the server. Data in transit, including file transfers and credentials passed over SMB, is then exposed to anyone who can capture network traffic. Disable SMB encryption only if your security policy allows it, and limit the change to the affected servers. To restore encryption, see [Re-enable SMB Encryption](#re-enable-smb-encryption). The error returns on a system after you re-enable encryption on it.

1. Verify that SMB encryption is enabled. Run the following command in PowerShell:

   ```powershell
   Get-SmbServerConfiguration | Select-Object EncryptData
   ```

2. Disable SMB encryption on the affected servers:

   ```powershell
   Set-SmbServerConfiguration -EncryptData $false
   ```

3. Rescan the system from the **Grant Access** page to verify that the issue is resolved.

### Re-enable SMB Encryption

To restore SMB encryption on a server, run the following command in PowerShell:

```powershell
Set-SmbServerConfiguration -EncryptData $true
```

For more information, see [SMB security enhancements](https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-security) in the Microsoft documentation.
