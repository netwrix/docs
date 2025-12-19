---
description: >-
  Explains why Netwrix Auditor subscriptions fail with "Access is denied" when
  uploading report results to a file share and which accounts require access.
keywords:
  - access denied
  - subscription
  - file share
  - Long-Term Archive
  - LTA
  - SSRS
  - Local System
  - Netwrix Auditor
  - report delivery
products:
  - auditor
sidebar_label: 'Netwrix Auditor was Unable to Deliver the subscription due to following error: "Access is denied"'
tags: []
title: >-
  Netwrix Auditor was Unable to Deliver the subscription due to following error:
  "Access is denied"
knowledge_article_id: kA04u0000000HjkCAE
---

# Netwrix Auditor was Unable to Deliver the subscription due to following error: "Access is denied"

## Problem

When I subscribe to the report and want to have report results delivered to the certain folder, I get an "Access Denied" error, despite the fact that the account has full permissions to upload a file there.

## Answer

When you select the **Upload to a file share** option in the **create\edit subscription** menu (**'General'** tab), Netwrix uses different accounts to upload the report to the share:

- For SSRS-based subscriptions, the account specified for Long-Term Archive (LTA) is used, as reflected in our documentation: https://docs.netwrix.com/docs/auditor/10_8
- For Search-based and Risk Assessment reports, Netwrix uses a Local System account, regardless of which account was specified for LTA.

As a result, with different types of subscriptions and a custom LTA account, you must give access to the share to two accounts at once: the computer account of the Netwrix server and the LTA account.
