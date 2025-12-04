---
description: >-
  Several SQL database servers report failed scans with an INSERT NULL error in
  collection jobs due to insufficient service account privileges or dynamic host
  list additions; this article explains the symptom, possible causes, and
  resolution steps.
keywords:
  - SQL
  - failed scans
  - VIEW ANY DEFINITION
  - service account
  - permissions
  - collection jobs
  - Netwrix Auditor
  - database servers
products:
  - access-analyzer
sidebar_label: Several SQL Database Servers Experience Failed Sca
tags:
  - database-auditing-and-configuration
title: "Several SQL Database Servers Experience Failed Scans"
knowledge_article_id: kA0Qk0000000aMrKAI
---

# Several SQL Database Servers Experience Failed Scans

## Symptom

Several SQL database servers are experiencing failed scans, with collection jobs showing the following error:

```text
(0x80131904): Cannot insert the value NULL into column 'member_principal', table column does not allow nulls. INSERT fails. The statement has been terminated.
```

## Cause

Refer to the possible causes:

1. Insufficient privileges of the service account (e.g., the service account lacks **VIEW ANY DEFINITION** permission on the master database), particularly when SQL servers are added dynamically to host lists.
2. Some SQL servers being dynamically added to host lists, leading to errors possibly caused by service account privileges not being properly configured. These errors occur intermittently, which is expected given the dynamic nature of the environment.

## Resolution

Ensure that the service account has the necessary privileges, including **VIEW ANY DEFINITION** on the master database. This permission allows the account to view the definition of any object in the SQL server instance.

While permissions requirements are outlined in existing documentation, for further guidance and troubleshooting, please refer to the following article: https://docs.netwrix.com/docs/auditor/10_8/accessreviews Analyzer/Solutions/SQL_Solution.htm#permissions

(Reference: Netwrix Auditor documentation linked above.)

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8/accessreviews Analyzer/Solutions/SQL_Solution.htm#permissions
