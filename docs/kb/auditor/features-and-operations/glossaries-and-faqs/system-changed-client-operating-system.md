---
description: >-
  Explains why Active Directory reports changes to Operating System attributes
  as made by System and how client restarts affect reporting.
keywords:
  - Active Directory
  - System
  - Operating System
  - Operating System Version
  - Service Pack
  - Netwrix Auditor
  - client restart
  - computer account
  - attribute updates
products:
  - auditor
sidebar_label: System Changed Client Operating System
tags: []
title: "System Changed Client Operating System"
knowledge_article_id: kA00g000000H9SaCAK
---

# System Changed Client Operating System

## Question

Why were changes to Operating System, Operating System Version or Operating System Service Pack attributes reported as made by System?

## Answer

This behavior is expected. Changes to the Operating System, Operating System Version and Operating System Service Pack attributes are reported as made by System due to the Active Directory architecture. Active Directory represented by System relies on individual computer accounts to update these attributes on each computer restart.

- Active Directory receives the Operating System Version attribute data during the communication with a client. This data is then stored in the Active Directory client account. Once local changes occur, the client operating system relays new data to Active Directory.

If these attributes were changed manually, Netwrix Auditor will report the corresponding user account that introduced these changes.

> **NOTE:** Once you restart the client with changed attributes, Active Directory represented by System will modify these attributes to be reported by System.
