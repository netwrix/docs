---
description: >-
  Explains why Activity Records show no non-owner mailbox access data for
  on-premise Exchange Server 2013, 2016, or 2019 and provides resolutions
  including updates and language settings.
keywords:
  - Exchange
  - mailbox auditing
  - non-owner mailbox access
  - Exchange 2013
  - Exchange 2016
  - Exchange 2019
  - monitoring plan
  - language settings
  - cumulative update
products:
  - auditor
sidebar_label: 'Non-Owner Mailbox Access Data Missing In Exchange '
tags: []
title: "Non-Owner Mailbox Access Data Missing In Exchange Auditing Monitoring Plan"
knowledge_article_id: kA04u00000111DICAY
---

# Non-Owner Mailbox Access Data Missing In Exchange Auditing Monitoring Plan

## Symptom

When attempting to review Activity Records for your on-premise Exchange Auditing monitoring plan, no data on non-owner mailbox access data can be found. The affected Exchange Server versions are Exchange Server 2013, 2016, and 2019.

## Causes

- The preset language for your on-premise Exchange Server is different from the system language.
- A secondary regional language as the language format is set in your Exchange Server.

## Resolutions

- Install the latest cumulative update for the corresponding Exchange Server version. Learn more about affected versions in [Search-AdminAuditLog and Search-MailboxAuditLog with parameters return empty results — Resolution ⸱ Microsoft 🤝](https://learn.microsoft.com/en-US/exchange/troubleshoot/compliance/search-adminauditlog-mailboxauditlog-return-no-result#resolution).
- Check the language format for system accounts. If a secondary regional language is set as the language format, update the format for the system and network service accounts to one of the following primary languages:

  - Arabic (United Arab Emirates)
  - English (United States)
  - German (Germany)
  - French (France)
  - Korean (Korea)
  - Spanish (Spain)

Learn more in [Search-AdminAuditLog and Search-MailboxAuditLog with parameters return empty results — Workaround ⸱ Microsoft 🤝](https://learn.microsoft.com/en-US/exchange/troubleshoot/compliance/search-adminauditlog-mailboxauditlog-return-no-result#workaround).

### Related articles

- [Search-AdminAuditLog and Search-MailboxAuditLog with parameters return empty results ⸱ Microsoft 🤝](https://learn.microsoft.com/en-US/exchange/troubleshoot/compliance/search-adminauditlog-mailboxauditlog-return-no-result)
