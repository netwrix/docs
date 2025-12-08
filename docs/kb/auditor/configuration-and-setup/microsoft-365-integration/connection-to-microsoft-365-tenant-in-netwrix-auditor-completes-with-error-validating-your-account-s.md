---
description: >-
  When connecting to a Microsoft 365 (Office 365) tenant using modern
  authentication in Netwrix Auditor, you may see an error stating the tenant
  name is not a valid DNS name. This article explains the cause and shows how to
  resolve the issue by ensuring the Directory (tenant) ID and Application
  (client) ID match between Netwrix Auditor and the Microsoft Office 365 Admin
  center.
keywords:
  - Microsoft 365
  - Office 365
  - tenant
  - modern authentication
  - tenant ID
  - Directory (tenant) ID
  - Application (client) ID
  - application ID
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Connection to Microsoft 365 Tenant in Netwrix Audi
tags: []
title: "Connection to Microsoft 365 Tenant in Netwrix Auditor Completes with Error Validating Your Account’s Rights and Permissions"
knowledge_article_id: kA04u000001111bCAA
---

# Connection to Microsoft 365 Tenant in Netwrix Auditor Completes with Error Validating Your Account’s Rights and Permissions

## Symptom

When trying to connect to Office 365 Tenant using modern authentication, the following error appears:

```
Error validating your account’s rights and permissions: Tenant name 'Tenant_name' specified is not a valid DNS name.
```

## Cause

The issue occurred due to incorrect Office 365 tenant credentials provided in Netwrix Auditor.

## Resolution

Make sure you provided the same parameters in a Netwrix Auditor monitoring plan and Microsoft Office 365 Admin center.

1. **Tenant name** in Netwrix should equal the `Directory (tenant) ID` in Microsoft Office 365 Admin center.
2. **Modern authentication application ID** should equal `Application (client) ID` in Microsoft Office 365 Admin center.

![00371273 O365 Tenant.PNG]./../0-images/ka04u00000117A1_0EM4u000008LuEC.png)

For additional information on configuring Office 365 tenant, refer to the following article: Microsoft 365. Select the data source you want to audit and review the corresponding section.



