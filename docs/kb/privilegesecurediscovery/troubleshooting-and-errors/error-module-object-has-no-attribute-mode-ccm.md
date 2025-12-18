---
description: 'You see the error ''module'' object has no attribute ''MODE_CCM'' in Access History or when you run a rescan from the Grant Access page. This article explains the cause (SMB encryption enabled) and provides PowerShell steps to resolve the issue.'
keywords:
- SMB
- SMB encryption
- PowerShell
- MODE_CCM
- Grant Access
- Access History
- troubleshoot
- Privilege Secure Discovery
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116WpAAI
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-06'
  knowledge_article_id: kA04u00000110oNCAQ
  last_modified_date: '2023-07-06'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: 'Error: ''Module'' Object has no Attribute ''MODE_CCM'''
tags: []
title: 'Error: ''Module'' Object has no Attribute ''MODE_CCM'''
knowledge_article_id: kA04u00000110oNCAQ
---

# Error: 'Module' Object has no Attribute 'MODE_CCM'

Formerly SecureONE

## Symptom

You see the following error in the system **Access History** or when you run a rescan from the **Grant Access** page:

```text
'module' object has no attribute 'MODE_CCM'
```

## Cause

This error is caused when SMB encryption is enabled on the system.

## Resolution

**IMPORTANT.** To perform troubleshooting steps, you must have:

- the administrator role
- an ability to run PowerShell on the system

Troubleshooting steps:

1. Verify SMB encryption is enabled from PowerShell:

```powershell
Get-SmbServerConfiguration | Select EncryptData
```

2. Disable SMB encryption on affected servers:

```powershell
Set-SmbServerConfiguration -EncryptData $false
```

3. Rescan the system from the **Grant Access** page to verify the issue is resolved

Learn more in SMB security enhancements ⸱ Microsoft: https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-security