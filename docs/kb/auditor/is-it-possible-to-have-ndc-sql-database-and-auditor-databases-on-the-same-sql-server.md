---
description: >-
  Do not keep Netwrix Data Classification and Netwrix Auditor databases on the
  same SQL Server instance; this may cause significant performance loss. See
  migration guidance for moving the Netwrix Data Classification database to
  another server.
keywords:
  - Netwrix Data Classification
  - Netwrix Auditor
  - SQL Server
  - database
  - performance
  - NDC
  - migrate
  - database migration
products:
  - auditor
  - data-classification
sidebar_label: Is It Possible to Have NDC SQL Database and Audito
tags: []
title: "Is It Possible to Have NDC SQL Database and Auditor Databases on the Same SQL Server?"
knowledge_article_id: kA04u000001118ICAQ
---

# Is It Possible to Have NDC SQL Database and Auditor Databases on the Same SQL Server?

## Question

Is it possible to have both: Netwrix Data Classification (NDC) SQL database and the Netwrix Auditor databases on the same SQL Server instance?

## Answer

Netwrix strongly recommends **do not keep** these databases on the same SQL Server. This may lead to significant performance loss.

If, for some reasons, you need to migrate your Netwrix Data Classification (NDC) SQL database to another server, refer to the following article for additional information: [How to Migrate the Netwrix Data Classification Database](/docs/kb/dataclassification/migration-and-maintenance/how-to-migrate-the-netwrix-data-classification-database).
