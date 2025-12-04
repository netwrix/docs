---
description: >-
  Explains the AADSTS700027 certificate error shown in the Health Log for
  Microsoft 365 monitoring plans and how to resolve it by using separate Entra
  ID applications in Netwrix Auditor.
keywords:
  - AADSTS700027
  - certificate
  - Entra ID
  - Microsoft 365
  - Health Log
  - thumbprint
  - application
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Error: Certificate With Identifier Is Not Register'
tags: []
title: 'Error: Certificate With Identifier Is Not Registered on Application'
knowledge_article_id: kA04u00000111FnCAI
---

# Error: Certificate With Identifier Is Not Registered on Application

## Symptom

The following error appears in the Health Log for your Microsoft 365-based monitoring plan:

```
AADSTS700027: The certificate with identifier used to sign the client assertion is not registered on application. 
Reason - The key was not found. Thumbprint of key used by client: '%thumbprint%'
```

## Cause

Multiple Microsoft 365-based items use the same Entra ID application instead of dedicated applications causing the certificate thumbprint overwrites.

## Resolution

Set up a separate Entra ID application for every Microsoft 365-based item monitored in your environment. Refer to the related articles for additional information on Microsoft 365-based sources.

## Related Articles

- Microsoft 365 — Permissions for Entra ID Auditing ⸱ v10.6
- Microsoft 365 — Permissions for Exchange Online Auditing ⸱ v10.6
- Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6
- Microsoft 365 — Permissions for Teams Auditing ⸱ v10.6
