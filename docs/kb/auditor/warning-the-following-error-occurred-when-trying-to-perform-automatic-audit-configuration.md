---
description: >-
  Explains how to resolve the "[WARNING] The following error occurred when
  trying to perform automatic audit configuration" message in Netwrix Auditor
  change summary emails and System Health logs, and provides two options to fix
  the issue.
keywords:
  - Netwrix Auditor
  - automatic audit configuration
  - DC collection warnings
  - GPO
  - System Health
  - change summary emails
  - audit settings
products:
  - auditor
sidebar_label: '[WARNING] The following error occurred when trying'
tags: []
title: "[WARNING] The following error occurred when trying to perform automatic audit configuration"
knowledge_article_id: kA00g000000H9ZwCAK
---

# [WARNING] The following error occurred when trying to perform automatic audit configuration

Change summary emails and **Netwrix Auditor System Health** log show the error saying: **DC collection warnings:** ` %DCName%` The message is: **[WARNING] The following error occurred when trying to perform automatic audit configuration:** ` %Error details%`

---

There are 2 options to fix the issue:

1. Remove or reconfigure settings that are conflicting with automatic audit configuration. Details of the error message usually specify which GPO affects this
2. Disable automatic audit configuration and configure audit settings manually as per the guidance from the Help Center: https://docs.netwrix.com/docs/auditor/10_8
