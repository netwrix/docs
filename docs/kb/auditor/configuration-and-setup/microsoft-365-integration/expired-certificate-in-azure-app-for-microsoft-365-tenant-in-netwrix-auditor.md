---
description: >-
  Explains whether you need to manually reissue an expiring certificate for a
  Microsoft 365 tenant monitored by Netwrix Auditor and how the application
  secret affects automatic certificate reissuance.
keywords:
  - Microsoft 365
  - Office 365
  - Azure AD
  - Entra ID
  - certificate
  - expired certificate
  - application secret
  - Netwrix Auditor
  - reissue
products:
  - auditor
sidebar_label: Expired Certificate in Azure App for Microsoft 365
tags: []
title: "Expired Certificate in Azure App for Microsoft 365 Tenant in Netwrix Auditor"
knowledge_article_id: kA04u0000011170CAA
---

# Expired Certificate in Azure App for Microsoft 365 Tenant in Netwrix Auditor

## Question

A certificate for a Microsoft 365 (Office 365) tenant monitored by Netwrix Auditor is expiring shortly. Should you reissue the certificate manually?

## Answer

No. Netwrix Auditor will reissue the certificate automatically as long as the application secret is valid. Once the certificate expires, Netwrix Auditor will use the valid application secret to reissue it. If your application secret has expired, a certificate won't be issued.

> **NOTE:** If you'd like to force the certificate reissue, you can delete the certificate from the corresponding Entra ID (Azure AD) app.

### Related articles

- Microsoft Entra ID — Permissions for Entra ID Auditing ⸱ v10.6
- SharePoint Online — Permissions for SharePoint Online Auditing ⸱ v10.6
- Exchange Online — Permissions for Exchange Online Auditing ⸱ v10.6
- Teams — Permissions for Teams Auditing ⸱ v10.6
