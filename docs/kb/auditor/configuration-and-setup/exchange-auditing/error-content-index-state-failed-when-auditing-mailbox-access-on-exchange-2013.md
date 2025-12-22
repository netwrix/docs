---
description: >-
  When auditing mailbox access on Exchange 2013, Netwrix Auditor may fail to
  collect audit data if Exchange content indexes are in a failed state. This
  article shows how to identify the affected database and how to reseed the
  search catalog.
keywords:
  - Exchange 2013
  - Content Index State Failed
  - Get-MailboxDatabaseCopyStatus
  - Search-MailboxAuditLog
  - Netwrix Auditor
  - reseed search catalog
  - mailbox audit
products:
  - auditor
sidebar_label: "Error: Content Index State Failed when auditing mailbox access on Exchange 2013"
tags: []
title: >-
  Error: Content Index State Failed when auditing mailbox access on
  Exchange 2013
knowledge_article_id: kA00g000000H9YcCAK
---

# Error: "Content Index State Failed"  when auditing mailbox access on Exchange 2013

When auditing mailbox access on Exchange 2013, you receive the following error:

**"Cannot audit mailboxes stored in the AAA database on the BBB server. The "Content Index State Failed" error has occurred on your Exchange server."**

---

Your Exchange server databases have unhealthy status "ContextIndexState:Failed".  
As a result, Netwrix Auditor cannot collect audit data about mailboxes with the `Search-MailboxAuditLog` cmdlet.

To determine the exact database that has failed indexes, run the following command: `Get-MailboxDatabaseCopyStatus`  
See Microsoft documentation for more information: https://technet.microsoft.com/en-us/library/dd298044%28v=exchg.150%29.aspx

---

Rebuild failed indexes on your Exchange server side. See the Microsoft article "Reseed the search catalog" for more information: https://technet.microsoft.com/EN-US/library/ee633475(v=exchg.150).aspx

After fixing the failed indexes, restart data collection.
