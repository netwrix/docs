---
description: 'When you try to sign in to Netwrix Privilege Secure Discovery using Active Directory Federation Services (ADFS), you may see the error "SAML assertion not yet valid". Add the NotBeforeSkew value to the relying party in ADFS to resolve the issue.'
keywords:
- SAML
- ADFS
- NotBeforeSkew
- NotBeforeValue
- Netwrix Privilege Secure Discovery
- Set-ADFSRelyingPartyTrust
- SAML assertion not yet valid
- identity provider
- SSO
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116Y6AAI
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-07'
  knowledge_article_id: kA04u00000110p6CAA
  last_modified_date: '2023-07-07'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: SAML Assertion not yet Valid
tags: []
title: "SAML Assertion not yet Valid"
knowledge_article_id: kA04u00000110p6CAA
---

# SAML Assertion not yet Valid

Formerly SecureONE

## Symptom

When attempting to log in to Netwrix Privilege Secure Discovery UI using Active Directory Federation Service (ADFS) as the identity provider, you receive the following error:

```
SAML assertion not yet valid
```

## Resolution

In ADFS add the `NotBeforeSkew` value to the relying party on the ADFS server. The number after `NotBeforeSkew` represent the number of minutes to skew the `NotBeforeValue`, so a setting of 3 would result in a `NotBefore` of -3 minutes.

This is the PowerShell command to set `NotBeforeSkew`:

```powershell
Set-ADFSRelyingPartyTrust -TargetIdentifier "" -NotBeforeSkew 3"
```