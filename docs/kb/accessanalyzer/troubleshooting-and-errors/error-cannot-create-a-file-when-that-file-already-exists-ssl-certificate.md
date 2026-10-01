---
description: >-
  Explains how to resolve the "Cannot create a file when that file already
  exists" (Error 183) when creating an SSL binding for Netwrix Access Analyzer
  Access Reports or Access Information Center by unbinding the prior certificate and
  binding a new one.
keywords:
  - SSL
  - certificate
  - netsh
  - sslcert
  - Error 183
  - Cannot create a file when that file already exists
  - Netwrix Access Analyzer
  - Access Information Center
products:
  - accessanalyzer
  - accessinformationcenter
visibility: public
sidebar_label: 'Error: Cannot Create a File When That File Already'
tags:
  - troubleshooting-and-errors
title: 'Error: Cannot Create a File When That File Already Exists (SSL Certificate)'
knowledge_article_id: kA0Qk0000001JBtKAM
---

# Error: Cannot Create a File When That File Already Exists (SSL Certificate)

## Symptom

When you attempt to create an SSL binding for Netwrix Access Analyzer Access Reports or Access Information Center, your PowerShell instance prompts the following error:

```
SSL Certificate add failed, Error: 183
Cannot create a file when that file already exists.
```

## Cause

The target port has a bound SSL certificate. If you would like to bind a different certificate, unbind the prior certificate from the target port.

## Resolution

Refer to the following steps to verify that the target port has a bound SSL certificate and unbind the certificate:

1. Run the following line in an elevated Command Prompt instance to generate a `result.txt` file containing certificates bound to ports in your server:

   ```text
   netsh http show sslcert > c:\result.txt
   ```

2. Open the created `result.txt` file and search for the target port. If you confirm the bound certificate, run the following line in the elevated PowerShell instance to unbind the certificate:

   ```text
   netsh http delete sslcert ipport=0.0.0.0:481
   ```

   Replace `481` with the target port.

3. Bind a new certificate. For more information, see: [Enable SSL for the Web Console](https://docs.netwrix.com/docs/accessanalyzer/12_0/install/application/reports/secure#enable-ssl-for-the-web-console).

## Related Articles

- [Securing the Web Console](https://docs.netwrix.com/docs/accessanalyzer/12_0/install/application/reports/secure)
