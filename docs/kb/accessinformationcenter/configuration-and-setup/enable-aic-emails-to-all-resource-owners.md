---
description: >-
  Enable the AIC to send email notifications to all resource owners by changing
  the NotifyAllOwners setting in the common.config file. No IIS reset is
  required.
keywords:
  - AIC
  - NotifyAllOwners
  - common.config
  - email notifications
  - resource owners
  - Netwrix Access Analyzer
  - StealthAudit Compliance
  - IIS
products:
  - access_info_center
sidebar_label: Enable AIC emails to all Resource Owners
tags: []
title: "Enable AIC emails to all Resource Owners"
knowledge_article_id: kA04u0000000Is9CAE
---

# Enable AIC emails to all Resource Owners

## Summary
By default, the AIC in Netwrix Access Analyzer only sends emails to the primary owner of resources. This article shows you how to enable email notifications for all users.

## Issue
The AIC by default will only send email notifications to the assigned primary owner of resources. This can be changed by editing a config file.

No IIS reset is required.

## Instructions
1. Open the `C:\inetpub\wwwroot\StealthAudit Compliance\Bin\common.config` file with **Notepad**.
2. Set the `NotifyAllOwners` parameter to `'True'`.
3. Navigate to **File > Save**.

## Result
All owners assigned to resources should now receive email notifications concerning their resources.
