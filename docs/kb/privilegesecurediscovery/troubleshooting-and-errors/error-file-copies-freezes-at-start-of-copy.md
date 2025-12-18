---
description: 'Netwrix Privilege Secure Discovery may freeze file copies at the start of copy and prevent web UI login with specific errors. This article lists the symptoms, possible causes, and recommended resolutions.'
keywords: [file copies, DR Copies Freeze, SCP, MTU, SSO, SAML, unicode password, EVP_EncryptFinal_ex, Netwrix Privilege Secure Discovery]
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116dLAAQ
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110qECAQ
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "Error: File Copies Freezes at Start of Copy"
tags: []
title: 'Error: File Copies Freezes at Start of Copy'
knowledge_article_id: kA04u00000110qECAQ
---

# Error: File Copies Freezes at Start of Copy

Netwrix Privilege Secure Discovery (formerly SecureONE)

## Symptom

Error Message:

```text
File Copies Freezes at Start of Copy (DR Copies Freeze)
```

### Symptom 1

When attempting to login through the web UI:

```text
Invalid Request
```

In the browser Developer Tools, Headers Status Code will show:

```text
500 Internal Server Error
```

coupled with the following error:

```text
error:0607F08A:digital envelope routines:EVP_EncryptFinal_ex:data not multiple of block length
```

### Symptom 2

When attempting to login through the web UI:

```text
Invalid Request
```

In the browser Developer Tools, Headers Status Code will show:

```text
500 Internal Server Error
```

coupled with the following error:

```text
Missing attribute value for attribute Destination of element samlp:AuthnRequest
```

### Symptom 3

Files copied between Netwrix Privilege Secure Discovery nodes freezes at the start of copy. This affects the backup files form being copied from the PROD node to DR node (Disaster Recovery) using SCP (Secure Copy Protocol).

## Cause

### Cause 1

A domain user is using a unicode chars in their password. Example: `Password£123`

### Cause 2

SSO enabled in and mis-configured or one or more field showing `Empty`.

### Cause 3

MTU set below 1500 on a network device in the path to the receiving node, and MTU set at or larger than 1500 on the sending device.

## Resolution

### Resolution 1

Workaround is to remove the unicode character cause the error. A fix is scheduled for Netwrix Privilege Secure Discovery v. 2.17.

### Resolution 2

Fix or disable SSO in **Configure** > **Server** > **SAML Configuration**.

### Resolution 3

Allow MTU standard sizes or 1500 or greater. Lowering MTUs on network adapters may allow copies and transfers to complete, but will slow down those transfers and database replications considerably.