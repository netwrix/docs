---
description: >-
  This article provides a resolution for the issue where the Web Reports URL becomes inaccessible after upgrading Access Analyzer.
keywords:
  - Access Analyzer
  - Web Reports URL
  - upgrade issue
sidebar_label: Web Reports URL Not Working
tags: []
title: "Error: Web Reports URL Not Working After Upgrade"
knowledge_article_id: kA0Qk0000002nMPKAY
products:
  - accessanalyzer
---

# Error: Web Reports URL Not Working After Upgrade

## Related Query

- "Post Upgrading Enterprise Auditor (NEA) Web Report URL is not working."

## Symptom

After upgrading **Access Analyzer** (formerly **Netwrix Enterprise Auditor**) to a later version, the Web Reports URL becomes inaccessible or does not load as expected.

## Cause

This issue occurs because the upgrade process changes the logon account for the **Access Analyzer** service from the configured service account to the **Local System account**. The **Local System account** may not have the necessary permissions to access resources required for Web Reports.

## Resolution

1. Open the **Services** management console on the server where **Access Analyzer** is installed.
2. Locate the **Netwrix Access Analyzer Web Server** service (or **Netwrix Enterprise Auditor Web Server** service, depending on your version).
3. Right-click the service and select **Properties**.
4. Go to the **Log On** tab.
5. Change the logon account from **Local System account** to the dedicated service account previously used.
6. Click **OK** to save changes.
7. Restart the service for the changes to take effect.
8. Verify that the Web Reports URL is now accessible.

> **IMPORTANT:** Ensure the service account has the necessary permissions to access all required resources for **Access Analyzer** Web Reports.