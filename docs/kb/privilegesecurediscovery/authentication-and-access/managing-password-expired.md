---
description: 'When the web UI or API shows "Password Expired", the Active Directory account that Netwrix Privilege Secure Discovery uses to bind to the domain controller has an expired password. This article explains how to verify the account status and update the password.'
keywords:
- password expired
- Active Directory
- bind account
- domain controller
- Netwrix Privilege Secure Discovery
- net user
- Password Expires
- Config->Domains
- troubleshooting
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116XhAAI
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-07'
  knowledge_article_id: kA04u00000110omCAA
  last_modified_date: '2023-07-07'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: Managing Password Expired
tags: []
title: "Managing Password Expired"
knowledge_article_id: kA04u00000110omCAA
---

# Managing Password Expired

*Formerly SecureONE*

## Symptom

Upon attempting to utilize the web UI or the API, the following message is displayed:

```
Password Expired
```

## Cause

When this error message is displayed, Netwrix Privilege Secure Discovery has received a response from the Active Directory server indicating that the password has expired. Specifically, the Active Directory account that Netwrix Privilege Secure Discovery uses to bind to the Active Directory server has a password that has expired, according to the directory server.

- It is a recommended best practice that the account Netwrix Privilege Secure Discovery uses to bind to the Active Directory server be set not to have an expiring password.
- If there are multiple domains configured, each domain may utilize a different account to bind to that domain's domain controller.

## Resolution

> **IMPORTANT.** In order to perform these troubleshooting steps, you must be an administrator of Netwrix Privilege Secure Discovery

1. Confirm that the account used to bind to the Domain Controller has not expired. Open a command prompt and type:
   ```bash
   net user %USERNAME% /domain
   ```
2. In the output, look for a line that begins "Password Expires". If this date is in the past, the password has expired.
3. Change the account's password and update the account's password on the **Config->Domains page**.