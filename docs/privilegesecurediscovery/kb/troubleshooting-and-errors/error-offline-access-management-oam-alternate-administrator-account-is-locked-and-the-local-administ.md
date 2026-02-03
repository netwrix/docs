---
description: 'Explains the Offline Access Management (OAM) alternate administrator account locked error and how to resolve it by using Windows Safe Mode to access the local Administrator (RID 500) account.'
keywords:
- OAM
- Offline Access Management
- alternate administrator
- RID 500
- locked account
- local Administrator
- Windows Safe Mode
- domain trust
- Netwrix Privilege Secure Discovery
- disabled account
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116duAAA
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110qTCAQ
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "Error: Offline Access Management (OAM) Alternate Administrator Account is Locked and the Local Administrator (RID 500) Account is Disabled"
tags: []
title: 'Error: Offline Access Management (OAM) Alternate Administrator Account is
  Locked and the Local Administrator (RID 500) Account is Disabled'
---

Formerly SecureONE

# Error: Offline Access Management (OAM) Alternate Administrator Account is Locked and the Local Administrator (RID 500) Account is Disabled

## Symptom

Error message:

```text
Offline Access Management (OAM) alternate administrator account is locked and the local Administrator (RID 500) account is disabled
```

The system has either left the domain or lost trust.

## Cause

The alternate administrator OAM account is a local account. Netwrix Privilege Secure Discovery does not use the account to log into the system and does not have the ability to lock the OAM account. Typically, any local account is either locked by an Administrator or exceeded the threshold for failed login attempts.

## Resolution

Use Windows Safe Mode to log in with the disabled Administrator (RID 500) account.