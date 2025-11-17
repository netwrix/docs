---
description: >-
  This article addresses the error encountered when attempting to run an SPAA/SPSEEK scan against a SharePoint Online host, detailing the symptoms, causes, and resolutions.
keywords:
  - SharePoint Online
  - SPAA
  - SPSEEK
  - remote registry error
  - Netwrix Enterprise Auditor
sidebar_label: Unable to Determine Administrative Site Error
tags: []
title: "Unable to Determine Administrative Site for Domain.sharepoint.com Error Accessing Remote Registry"
knowledge_article_id: kA0Qk0000001i2DKAQ
products:
  - auditor
---

# Unable to Determine Administrative Site for Domain.sharepoint.com Error Accessing Remote Registry

## Symptom

When attempting to run an SPAA/SPSEEK scan against a SharePoint Online host, you receive the following error:

```
Unable to determine administrative site for domain.sharepoint.com error accessing remote registry: The network path was not found
```

## Cause

This error appears when attempting to scan SharePoint Online with On-Prem/AD Credentials.

## Resolutions

Refer to the following options to resolve this error:

1. Confirm that the SharePoint Online app has been configured for auditing by referring to the following link: SharePoint Online Access & Sensitive Data Auditing Configuration.

2. Confirm that a connection profile has been created in **Netwrix Enterprise Auditor** for SharePoint Online auditing using the following link: SharePoint Custom Connection Profile & Host List.

3. Configure the SPAA/SPSEEK jobs to scan the SharePoint Online host and use the SharePoint Online connection profile. For more information, please see the articles below:
   - SharePoint Custom Connection Profile & Host List
   - SharePoint Online Access & Sensitive Data Auditing Configuration
   - SP_RegisterAzureAppAuth Job