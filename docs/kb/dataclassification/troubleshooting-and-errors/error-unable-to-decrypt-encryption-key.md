---
description: >-
  When Netwrix Data Classification displays "Unable to decrypt encryption key"
  in the browser or Service Viewer, follow these checks to ensure the same
  service account runs services across DQS servers or to correct DPAPI
  configuration by upgrading to a fixed version.
keywords:
  - data classification
  - encryption key
  - DPAPI
  - DQS
  - Netwrix Data Classification
  - upgrade
  - error
  - decrypt
products:
  - data-classification
sidebar_label: 'Error: Unable to Decrypt Encryption Key'
tags:
  - troubleshooting-and-errors
title: 'Error: Unable to Decrypt Encryption Key'
knowledge_article_id: kA04u00000110liCAA
---

# Error: Unable to Decrypt Encryption Key

## Symptom

Netwrix Data Classification (NDC) prompts the following error in the browser and NDC Service Viewer:

```text
Unable to decrypt encryption key
```

## Causes

One of the following causes is present in your environment:

1. In a DQS environment, different service accounts run the NDC services in different DQS servers.
2. In a Netwrix Data Classification v5.7.0.58 environment, the Data Protection Application Programming Interface (DPAPI) used to share encryption keys between the application servers is misconfigured. Learn more about DPAPI in How to: Use Data Protection · Microsoft 🤝: https://learn.microsoft.com/en-us/dotnet/standard/security/how-to-use-data-protection

## Resolutions

Refer to the corresponding resolution steps:

1. In a DQS environment, verify that the same service account runs the Netwrix Data Classification services on all DQS servers.
2. Netwrix Data Classification v5.7.1.20 and later versions introduced a check to verify the correct setup of the DPAPI-related registry key. Upgrade your Netwrix Data Classification instance to v5.7.1.20 or later to resolve the issue. Download the new Netwrix Data Classification version in My Products · Netwrix: https://www.netwrix.com/my_products.html

## Related Articles

- How to: Use Data Protection · Microsoft 🤝: https://learn.microsoft.com/en-us/dotnet/standard/security/how-to-use-data-protection
- My Products · Netwrix: https://www.netwrix.com/my_products.html
