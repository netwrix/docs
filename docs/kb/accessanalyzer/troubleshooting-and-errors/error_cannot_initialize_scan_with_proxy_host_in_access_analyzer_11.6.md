---
description: >-
  This article addresses the error encountered when initializing a scan with a proxy host in Netwrix Access Analyzer, detailing symptoms, causes, and resolutions.
keywords:
  - Access Analyzer
  - FSAAException
  - proxy host
  - scan initialization
  - certificate issues
products:
  - access-analyzer
sidebar_label: "Error: Cannot Initialize Scan with Proxy Host"
tags:
  - troubleshooting-and-errors
title: "Error: Cannot Initialize Scan with Proxy Host in Access Analyzer 11.6"
knowledge_article_id: kA0Qk0000000WSvKAM
---

# Error: Cannot Initialize Scan with Proxy Host in Access Analyzer 11.6

## Symptom

When running a file system scan using proxies—such as permissions, activity, or sensitive data—you receive the following error message:

```
FSAAException: Unable to start scan: Could not initialize scan session with any proxy host supplied
```

## Causes

1. The creation of multiple redundant certificates when targeting a single proxy with multiple hosts for the first time prevents the scan from starting (a certificate creation race condition).
2. Certificates are not stored under the proper user account’s certificate store in multi-user scenarios (e.g., running interactively using one account and as a scheduled task with a different account).
3. The certificate was not properly created by the proxy scan.

## Resolution

Upgrade your Netwrix Access Analyzer instance to v11.6.0.65 or above and your File System Proxy Service instance to v11.6.0.19 or above—refer to the following articles for additional information: Access Analyzer Console Upgrade · v11.6 and Upgrade Proxy Service Procedure · v11.6. Download the latest Access Analyzer version from the [My Products](https://www.netwrix.com/my_products.html) page. If you still run into issues with certificate generation on FSAA proxy scans, follow the steps provided below.

> **IMPORTANT:** If the service account for the `FSAA Proxy Scanner` service in your FSAA proxy server is `LocalSystem`, perform the following steps before deleting the certificates:

1. On the target proxy server, download **PsExec**. Extract the contents of the downloaded compressed folder to a local folder. Download **PsExec** in [PsExec · Microsoft 🡥](https://learn.microsoft.com/en-us/sysinternals/downloads/psexec).
2. In an elevated Command Prompt instance, navigate to the target folder and run the following line:

   ```plaintext
   .\psexec.exe -i -s cmd.exe
   ```

3. In the new Command Prompt instance, start the Certificate Manager Tool for the SYSTEM account by running the following line:

   ```plaintext
   certmgr.msc
   ```

4. Delete all certificates in the FSAA Certificate Authority Store, FSAA Client Certificate Store, and FSAA Server Certificate Store:
   - User certificates on the proxy server under the proxy service user account
   - User certificates on the console under the scheduled task account
   - User certificates on the console under the FS connection profile account
   - User certificates on the console under the interactive user account(s)

5. Run a single scan with proxy on a single host using a scheduled task to establish new certificates (this should be done once per proxy to properly establish the certificate on the proxy).
6. Verify user certificates on the console and the proxy server (you should have a single FSAA Client Certificate on the console, a single FSAA Server Certificate on the proxy, and a single FSAA Certificate Authority on both).
7. Run all subsequent scans as scheduled tasks (not interactively through the console) until a fix is issued.

Additionally, the scans run in local mode should not run into this issue. To learn more about local mode, see the following article: Requirements — File System Solution — File System Scan Options — v11.6.

## Related Articles

- Installation & Configuration Overview — Access Analyzer Console Upgrade · v11.6
- File System Proxy as a Service Overview — Upgrade Proxy Service Procedure · v11.6
- [My Products · Netwrix](https://www.netwrix.com/my_products.html)
- [PsExec · Microsoft 🡥](https://learn.microsoft.com/en-us/sysinternals/downloads/psexec)
- Requirements — File System Solution — File System Scan Options — v11.6