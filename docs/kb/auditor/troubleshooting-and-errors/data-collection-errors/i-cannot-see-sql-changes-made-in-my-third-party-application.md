---
description: >-
  Explains why changes made inside an ERP application's internal database are
  not reported by SQL Server Auditing and how this behavior affects Netwrix
  Auditor. Clarifies that application-level changes do not affect SQL Server
  instance properties and therefore are not tracked.
keywords:
  - SQL Server Auditing
  - ERP
  - managed SQL Server
  - auditing
  - Netwrix Auditor
  - third-party application
  - database changes
  - not tracked
products:
  - auditor
sidebar_label: I cannot see SQL changes made in my third-party ap
tags: []
title: "I cannot see SQL changes made in my third-party application"
knowledge_article_id: kA00g000000H9W3CAK
---

# I cannot see SQL changes made in my third-party application

I made some changes in my ERP system (which uses a managed SQL Server) like adding users and this is not reported by SQL Server Auditing.

---

Your application has its own internal DB structure, and all changes you make are only related to internal logic of this application, like access to objects of this application only, and don't affect any real SQL Server instance properties and as such changes are not tracked.
