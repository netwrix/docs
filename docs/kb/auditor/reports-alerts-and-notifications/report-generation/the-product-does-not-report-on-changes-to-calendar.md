---
description: >-
  The Calendar folder is excluded from auditing by default to avoid reporting
  shared calendars as unauthorized non-owner mailbox access. This article
  explains how to include the Calendar folder in monitoring by editing the
  exclusion file.
keywords:
  - calendar
  - mailbox
  - non-owner access
  - auditing
  - Netwrix
  - Exchange
  - mailboxestoexclude.txt
  - monitoring
  - exclude
  - Calendar folder
products:
  - auditor
sidebar_label: The product does not report on changes to Calendar
tags: []
title: "The product does not report on changes to Calendar"
knowledge_article_id: kA00g000000H9XyCAK
---

# The product does not report on changes to Calendar

The **Calendar** folder is excluded from auditing by default, because users often share their calendars. Access to a shared mailbox folder by non-owners will be qualified as unauthorized non-owner access to the mailbox by the product.

If you still want to monitor the **Calendar** folder, do the following:

1. Navigate to the Netwrix Non-Owner Mailbox Access Reporter for Exchange installation directory.
2. Open the `mailboxestoexclude.txt` file and delete the `*/calendar*` line.
3. Save the changes.
