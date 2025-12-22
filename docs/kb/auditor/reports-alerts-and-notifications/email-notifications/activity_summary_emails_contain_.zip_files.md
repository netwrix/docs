---
description: >-
  This article explains the behavior of Activity Summary emails containing compressed attachments and the conditions under which they are sent.
keywords:
  - Activity Summary
  - compressed attachments
  - monitoring plan
sidebar_label: Activity Summary Emails
tags: []
title: "Activity Summary Emails Contain .zip Files"
knowledge_article_id: kA0Qk0000000KwPKAU
products:
  - auditor
---

# Activity Summary Emails Contain .zip Files

## Question

Activity Summary emails include compressed attachments while attachments are disabled in the monitoring plan settings. Should this behavior be expected?

## Answer

The amount of activity records in an Activity Summary email may vary depending on your environment and the monitoring scope of the affected monitoring plan. Compressed attachments are used to optimize daily emails containing Activity Records for the corresponding monitoring plan—this behavior is expected with the following limitations enforced:

- The email will include an attachment in case the amount of Activity Records in the Summary exceeds 3000.
- The email will include an attachment in case the email size exceeds 10 MB.

You can select the **Attach Activity Summary as a CSV file** option in the affected monitoring plan settings to receive an uncompressed `.csv` file instead.