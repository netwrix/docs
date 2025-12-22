---
description: >-
  Explains why changes to Active Directory Foreign Security Principals appear as
  made by the System account and confirms this behavior is expected.
keywords:
  - Active Directory
  - Foreign Security Principals
  - System account
  - security principals
  - external trust
  - Netwrix Auditor
  - auditing
products:
  - auditor
sidebar_label: System Changed Directory Objects for Foreign Secur
tags: []
title: "System Changed Directory Objects for Foreign Security Principals"
knowledge_article_id: kA00g000000H9SoCAK
---

# System Changed Directory Objects for Foreign Security Principals

## Question

Why were changes to the directory objects for Foreign Security Principals reported as made by System?

## Answer

This behavior is expected. The Foreign Security Principals container in Active Directory represent security principals from trusted domains external to the forest. It allows foreign security principals to become members of groups within the domain. The Foreign Security Principals objects are created automatically by Active Directory represented by System. Changes of foreignSecurityPrincipal objects reported as made by System are reported as intended.

For additional information on the Foreign Security Principals container and the Foreign Security Principals objects, refer to the following Microsoft articles: [When to Create an External Trust](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc755427(v=ws.10)?redirectedfrom=MSDN) and [How Security Principals Work](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc779144(v=ws.10)?redirectedfrom=MSDN).
