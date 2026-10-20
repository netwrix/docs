---
description: >-
  Describes how to resolve the "Error getting scan database from execution host:
  One or more errors occurred" message when a file system scan using a proxy
  fails due to insufficient disk space by migrating the File System Proxy
  service to another drive.
keywords:
  - file system proxy
  - scan database
  - execution host
  - disk space
  - Netwrix Access Analyzer
  - FSAA
  - proxy service
  - StealthAUDIT
products:
  - access-analyzer
sidebar_label: 'Error Getting Scan Database from Execution Host — '
tags:
  - troubleshooting-and-errors
title: "Error Getting Scan Database from Execution Host — One or More Errors Occurred"
knowledge_article_id: kA0Qk0000000awLKAQ
---

# Error Getting Scan Database from Execution Host — One or More Errors Occurred

## Symptom

A file system scan using a proxy server prompts the following error in Netwrix Access Analyzer:

```text
Error getting scan database from execution host: One or more errors occurred
```

## Causes

The installation drive for the File System Proxy service is running out of space.

## Resolution

Review the installation of the File System Proxy service and verify that there is enough space in the installation drive. Proceed with the following steps to migrate the File System Proxy service to another drive:

1. Back up the files located in the following folder or a custom install location to the new target installation drive:

   ```text
   C:\Program Files (x86)\STEALTHbits\StealthAUDIT\FSAA\
   ```

2. Uninstall the File System Proxy service. Refer to the following article for additional information: https://docs.netwrix.com/docs/accessanalyzer/12_0 (File System Proxy as a Service Overview — Uninstall Proxy Service Process · v11.6).

3. Install the File System Proxy service to a different drive to allow operation without disk space errors. Refer to the following article for additional information: https://docs.netwrix.com/docs/accessanalyzer/12_0 (File System Proxy as a Service Overview — File System Proxy Service Installation · v11.6).

4. Navigate to **Services** and stop the proxy service named **Netwrix Enterprise Auditor FSAA Proxy Scanner**.

5. Move the backed-up files to the following folder or a custom install location:

   ```text
   %x%:\Program Files (x86)\STEALTHbits\StealthAUDIT\FSAA\
   ```

   > **IMPORTANT:** Replace the `%x%` placeholder with the target drive letter.

6. In **Services**, start the proxy service.

## Related Articles

- https://docs.netwrix.com/docs/accessanalyzer/12_0 (File System Proxy as a Service Overview — Uninstall Proxy Service Process · v11.6)
- https://docs.netwrix.com/docs/accessanalyzer/12_0 (File System Proxy as a Service Overview — File System Proxy Service Installation · v11.6)
