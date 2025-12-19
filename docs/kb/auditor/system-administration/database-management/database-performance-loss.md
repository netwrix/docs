---
description: >-
  There is some performance loss on the database selected for auditing via the
  Database Content Audit feature of Netwrix Auditor for SQL Servers. This
  article explains why and how to reduce the SQL Server performance impact.
keywords:
  - database performance
  - Database Content Audit
  - SQL Server
  - Netwrix Auditor
  - auditing overhead
  - performance impact
  - monitoring
products:
  - auditor
sidebar_label: Database performance loss
tags: []
title: "Database performance loss"
knowledge_article_id: kA00g000000H9bWCAS
---

# Database performance loss

## Overview

There is some performance loss on the database selected for auditing via the Database Content Audit feature of Netwrix Auditor for SQL Servers.

---

This is a standard overhead inherent in any change auditing systems. This overhead can only affect the database you have selected for monitoring. It is recommended to enable the Database Content Audit feature for the databases with low load only.

---

## Recommendation

To reduce the SQL Server performance impact, specify the exact databases where you want to track data changes, with exact tables for these databases.
