---
description: >-
  This article provides steps to enable HTTPS and replace SSL certificates in the Netwrix Recovery for Active Directory web console.
keywords:
  - Netwrix Recovery for Active Directory
  - HTTPS
  - SSL certificates
sidebar_label: Recovery for AD Web Console via HTTPS
tags: []
title: "Recovery for Active Directory Web Console Only Available via HTTP"
knowledge_article_id: kA0Qk0000002fn3KAA
products:
  - recovery-active-directory
---

# Recovery for Active Directory Web Console Only Available via HTTP

## Related Query

- "I need steps to enable HTTPS and replace SSL certificates in NR."

## Symptom

The Netwrix Recovery for Active Directory web console is accessible via HTTP, but the customer environment requires HTTPS.

## Cause

Recovery for Active Directory was installed in HTTP mode with no SSL enabled.

## Resolution

1. Open the **`appsettings.json`** file. By default, the configuration appears as shown below. You need to change the **Scheme** and **CertName** values.

   ![Default appsettings.json configuration for Netwrix Recovery for Active Directory web console](./images/servlet_image_76800672d835.png)

2. Ensure the certificate you select has an associated private key. This is indicated by the key icon in the Certificates Manager.

3. If you are only replacing a certificate, update the certificate name in the **`appsettings.json`** file.

4. After making changes, restart the **Netwrix Recovery Web Console** service to apply the changes.