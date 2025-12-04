---
description: >-
  Use Netwrix Auditor to omit changes to the msExchMobileMailboxPolicyBL
  attribute from being reported by adding the attribute pattern to the omit list
  file. This article shows the exact file path and the line to add.
keywords:
  - msExchMobileMailboxPolicyBL
  - omit
  - omitproplist_ecr.txt
  - Active Directory
  - Netwrix Auditor
  - auditing
  - exclude attribute
  - mailbox policy
products:
  - auditor
sidebar_label: How to omit changes to the "msExchMobileMailboxPol
tags: []
title: How to omit changes to the "msExchMobileMailboxPolicyBL" attribute?
knowledge_article_id: kA00g000000H9VRCA0
---

# How to omit changes to the "msExchMobileMailboxPolicyBL" attribute?

---

To exclude changes to the `msExchMobileMailboxPolicyBL` attribute from being reported, perform the following steps:

1. On the machine where **Netwrix Auditor** is installed, navigate to the product installation directory. By default it is `C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing`
2. Open the `omitproplist_ecr.txt` file for editing and add the following line:
   `*.msExchMobileMailboxPolicyBL*`
3. Save this file
