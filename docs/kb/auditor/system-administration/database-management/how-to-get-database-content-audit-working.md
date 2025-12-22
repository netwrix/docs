---
description: >-
  Explains how to get Database Content Audit working for SQL Server in Netwrix
  Auditor by assigning the `sysadmin` role to the database owner to allow
  cross-database writes.
keywords:
  - Netwrix Auditor
  - Database Content Audit
  - SQL Server
  - sysadmin
  - database owner
  - cross-database write
  - MSSQL Management Console
  - audit reports
products:
  - auditor
sidebar_label: How to get Database Content Audit working
tags: []
title: "How to get Database Content Audit working"
knowledge_article_id: kA00g000000H9aYCAS
---

# How to get Database Content Audit working

You have enabled Data changes Audit in Netwrix Auditor for SQL Servers data source, configured as per our guide, but do not get data in reports without any errors, while you are sure some changes to data in the audited table were made.

---

The owner of the target database must have the `sysadmin` role on your SQL Server. It is needed for cross-database write.

---

### Resolution

1. Open **MSSQL Management Console** and connect to your SQL Server.
2. Select properties of the target database and pick an owner.
3. Go to **Security->Logins** and grant that account the `sysadmin` role.
