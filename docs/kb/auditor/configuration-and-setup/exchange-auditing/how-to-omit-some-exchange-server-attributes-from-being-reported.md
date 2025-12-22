---
description: >-
  Describes how to exclude specific Exchange Server attributes from reporting by
  Netwrix Auditor by editing the omitproplist_ecr.txt file.
keywords:
  - Exchange
  - attribute
  - omit
  - reporting
  - Netwrix Auditor
  - omitproplist_ecr.txt
  - msExchSafeSendersHash
  - Active Directory Auditing
products:
  - auditor
sidebar_label: How to omit some Exchange Server attributes from b
tags: []
title: "How to omit some Exchange Server attributes from being reported"
knowledge_article_id: kA00g000000H9V0CAK
---

# How to omit some Exchange Server attributes from being reported

How to omit some Exchange Server attributes from being reported?

To omit an Exchange Server attribute from reporting:

1. Navigate to the **Netwrix Auditor** installation folder. For example, `C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing.`
2. Locate the `omitproplist_ecr.txt` file and add the attributes you want to exclude from reporting in the following format:

   ```
   *.<attribute name>
   ```

   **For example:** `*.msExchSafeSendersHash`
