---
description: >-
  This article helps you resolve an issue in Netwrix Auditor 10.5 builds 10936
  and 10942 where the File Servers Audit Service stops shortly after startup. It
  provides the required pre-upgrade steps and the upgrade workflow to restore
  normal operation.
keywords:
  - Netwrix Auditor
  - File Servers Audit Service
  - FileStorageAuditor
  - service stops
  - upgrade
  - '10.5'
  - '10936'
  - '10942'
  - data collection
products:
  - auditor
sidebar_label: Netwrix Auditor for File Servers Audit Service Sto
tags: []
title: "Netwrix Auditor for File Servers Audit Service Sto"
knowledge_article_id: kA04u000001112UCAQ
---

# Netwrix Auditor for File Servers Audit Service Stops After Each Startup

> **!** This article only applies to customers running Netwrix Auditor 10.5 builds 10936 and 10942.

## Symptoms

The Netwrix Auditor for File Servers Audit Service is not stay running and stops after each startup.

The following notification is shown for one or several monitoring plans:

```text
One of the Netwrix Auditor services is not responding.
Navigate to the Services snap-in and check the service statuses.
```

## Cause

This is a known issue that has been fixed in later builds of Netwrix Auditor.

## Resolution

Download the installation package for upgrade. Customers who are logged in to the Netwrix Customer Portal can download the latest version of their software products using the following link: https://www.netwrix.com/sign_in.html?rf=my_products.html (My Products).

> **IMPORTANT:** Take the steps 1 - 2 below before running the installation package, otherwise, the issue will persist.

1. On the Auditor Server host, run the **Services** snap-in and stop the Netwrix Auditor for File Servers Audit Service.
2. After that, navigate to your Working Folder (default location is `C:\ProgramData\Netwrix Auditor\FileStorageAuditor\Data`) and delete the **FileStorageAuditor** folder.
3. Run the upgrade package.
   
   > **NOTE:** Make sure you took all required upgrade preparatory steps. Learn more in the following article: https://docs.netwrix.com/docs/auditor/10_8 — Before Starting the Upgrade — v10.6).
4. Upon the upgrade completion, run data collection for your File Servers monitoring plan – click **Update** next to the plan.

   You will get the following error once that is expected:

   ```text
   Data collection has been failed: 0x80070002 The system cannot find the file specified.
   ```

You will have to wait from 30 minutes to several hours depending on the amount of data that is going to be collected.
