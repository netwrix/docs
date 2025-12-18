---
description: >-
  Explain how to exclude access events to the Calendar and Contacts folders from
  Netwrix Auditor reports by editing the mailboxestoexclude.txt file and
  ensuring the Compression service option is enabled.
keywords:
  - exclude calendar access
  - mailboxestoexclude.txt
  - Non-owner Mailbox Access Reporter for Exchange
  - Netwrix Auditor
  - exclude contacts access
  - compression service
  - agents
  - Exchange
products:
  - auditor
sidebar_label: How do I exclude access events to the Calendar and
tags: []
title: "How do I exclude access events to the Calendar and Contacts folders from Netwrix Auditor reports?"
knowledge_article_id: kA00g000000H9UMCA0
---

# How do I exclude access events to the Calendar and Contacts folders from Netwrix Auditor reports?

How can I exclude access events to the Calendar folder from the product reports?

Access events to the Calendar folder are excluded by default (this is set in the `mailboxestoexclude.txt` file located in `C:\Program Files (x86)\Netwrix Auditor\Non-owner Mailbox Access Reporter for Exchange` by default). However, Netwrix Auditor only recognizes this file if agents are enabled, so make sure that you enable the **Compression service** option.

In order to exclude Contacts access from being reported please add the following line to the `mailboxestoexclude.txt` file:

```
*/Contacts*
```
