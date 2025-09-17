---
description: >-
  This article addresses the error message indicating that a certificate with a specific identifier is not registered on the application, providing insights into its cause and resolution steps.
keywords:
  - certificate error
  - Microsoft 365
  - Entra ID
sidebar_label: Certificate Not Registered Error
tags: []
title: "Error: Certificate With Identifier Is Not Registered on Application"
knowledge_article_id: kA04u000001113hCAA
products:
  - auditor
---

# Error: Certificate With Identifier Is Not Registered on Application

## Symptom

The following error appears in the Health Log for your Microsoft 365-based monitoring plan:

```
AADSTS700027: The certificate with identifier used to sign the client assertion is not registered on application. 
Reason - The key was not found. Thumbprint of key used by client: '%thumbprint%'
```

## Cause

Multiple Microsoft 365-based items use the same Entra ID application instead of dedicated applications, causing the certificate thumbprint to overwrite.

## Resolution

Set up a separate Entra ID application for every Microsoft 365-based item monitored in your environment. Refer to the related articles for additional information on Microsoft 365-based sources.

## Related Articles

- [Microsoft 365 — Permissions for Entra ID Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8)
- [Microsoft 365 — Permissions for Exchange Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/exchangeonline/permissions)
- [Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8)
- [Microsoft 365 — Permissions for Teams Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8)