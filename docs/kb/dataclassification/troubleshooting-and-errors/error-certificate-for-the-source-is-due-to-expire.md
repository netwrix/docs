---
description: >-
  Netwrix Data Classification notifies you when the certificate used to
  authenticate a Microsoft 365-based source is about to expire. Follow the steps
  to update the certificate and avoid interruption in monitoring.
keywords:
  - certificate expiration
  - Microsoft 365
  - source certificate
  - Netwrix Data Classification
  - renew certificate
  - Azure AD app
  - modern authentication
  - crawling
  - classification
products:
  - data-classification
sidebar_label: 'Error: Certificate for the Source Is Due to Expire'
tags:
  - troubleshooting-and-errors
title: 'Error: Certificate for the Source Is Due to Expire'
knowledge_article_id: kA0Qk0000001RSnKAM
---

# Error: Certificate for the Source Is Due to Expire

## Symptom

Netwrix Data Classification (NDC) prompts the following error for your Microsoft 365-based source:

```text
Problem Details:

Problem Type: Source Certificate Expiring
Problem Severity: Error
Problem Source: %M365_source%
Problem Description
    
The certificate for the source: %M365_source% is due to expire on %datestamp%.
Configure a new certificate and update the credentials to maintain connectivity.
Current Certificate Name: %certificate_name%.
```

## Cause

The certificate used to authenticate to your Microsoft 365-based source is due to expire. This is a warning to allow you to renew the certificate before it expires and avoid any interruption in monitoring the source.

## Resolution

Update your certificate. Keep the existing certificate in place until you deploy the new certificate to all NDC servers and update the configuration to avoid any interruption in monitoring. Refer to the following steps for additional information: https://docs.netwrix.com/docs/dataclassification/5_7 (Configure Microsoft Exchange for Crawling and Classification — Create Azure AD app for Modern Authentication · v5.7).

## Related Articles

- Configure Microsoft Exchange for Crawling and Classification — Create Azure AD app for Modern Authentication · v5.7: https://docs.netwrix.com/docs/dataclassification/5_7
