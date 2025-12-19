---
description: >-
  Explains where Netwrix Auditor stores collected data (SQL databases vs. the
  Audit Archive), retention recommendations, and how to import archived data
  back into SQL using Investigations.
keywords:
  - Netwrix Auditor
  - SQL
  - Audit Archive
  - retention
  - archived data
  - Investigations
  - reporting
  - database retention
  - compressed files
products:
  - auditor
sidebar_label: Difference between data stored in SQL versus the A
tags: []
title: "Difference between data stored in SQL versus the Audit Archive"
knowledge_article_id: kA00g000000H9SXCA0
---

# Difference between data stored in SQL versus the Audit Archive

When Netwrix Auditor performs data collections, the data is simultaneously sent and saved in two locations: SQL databases and a disk drive in the Audit Archive location.

The data in SQL databases is stored in a non-compressed format and used for fast operational reporting. It is not intended for long term storage. The default and recommended retention for SQL is 180 days. If you are collecting huge amounts of data, your SQL DBs might grow too big causing disk space and report generation speed issues. In this case it is recommended to reduce the database retention as explained in this article: https://docs.netwrix.com/docs/auditor/10_8

On the other hand the data stored in the audit archive consists of compressed flat files and is intended for long term storage. When you have a compliance or an internal requirement to store audit data for a long period of time this is where you would do that. If at any time you need to report on archived data that is no longer in the SQL database, it is possible to import it back to SQL using Investigations functionality: https://docs.netwrix.com/docs/auditor/10_8
