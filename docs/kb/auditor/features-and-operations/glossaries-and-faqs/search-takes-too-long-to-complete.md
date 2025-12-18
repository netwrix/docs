---
description: >-
  If search queries in Netwrix Auditor are slow to complete, narrow the search
  scope with filters and verify SQL Server resources and network bandwidth. This
  article lists recommended steps to optimize search queries.
keywords:
  - search performance
  - slow search
  - SQL Server
  - filters
  - Netwrix Auditor
  - Data source filter
  - When filter
  - query optimization
products:
  - auditor
sidebar_label: Search Takes Too Long to Complete
tags: []
title: "Search Takes Too Long to Complete"
knowledge_article_id: kA04u000000wnllCAA
---

# Search Takes Too Long to Complete

## Question

A search query in Netwrix Auditor takes too long to complete and are slow. What are the recommended steps to optimize the search queries?

## Answer

1. Narrow down the search scope by introducing additional filters:

   - The **When** filter can significantly reduce the amount of Activity Records depending on the time frame specified.
   - The **Data source** filter allows to limit the search scope to a particular source of monitoring data. Both **Data source** and **When** filters help to focus on relevant Activity Records either in a larger environment, or when the SQL Server Express edition with multiple audit databases is implemented.

2. Review the resources allocated to your SQL Server − Netwrix Auditor is directly dependent on the SQL Server performance when the search queries are resolved. In case your SQL Server instance does not share the same server with Netwrix Auditor, the network bandwidth should be considered.
