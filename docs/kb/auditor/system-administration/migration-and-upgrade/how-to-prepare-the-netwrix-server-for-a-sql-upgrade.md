---
description: >-
  Guidance on preparing the Netwrix server for an in-place upgrade of Microsoft
  SQL Server 2014 to SQL Server 2019, including precautions and links to
  migration guidance.
keywords:
  - SQL upgrade
  - SQL Server 2019
  - SQL Server 2014
  - Netwrix server
  - backup
  - snapshot
  - database migration
  - MS SQL
products:
  - auditor
sidebar_label: How to Prepare the Netwrix Server for a SQL Upgrad
tags: []
title: "How to Prepare the Netwrix Server for a SQL Upgrade"
knowledge_article_id: kA04u000001115OCAQ
---

# How to Prepare the Netwrix Server for a SQL Upgrade

## Question

Is there a process we need to follow on the Netwrix server to prepare for an upgrade? This is an in-place upgrade of SQL 2014 to SQL 2019. We have backups and plan to snapshot the virtual machines before starting. Are there any steps to take on the Netwrix application server before and after the SQL upgrade?

## Answer

There is no need to back up anything on the Netwrix server when performing SQL upgrades. You also don't need to back up the config file.

> **NOTE:** However, as an additional precautionary measure, you have the option of taking a snapshot of the Netwrix host before starting any upgrade procedures

There are some best practices that can help you to properly upgrade your SQL.

- Read about prerequisites and instructions in this article: [Upgrade to a different edition of SQL Server (Setup) ⸱ Microsoft 👍](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/upgrade-to-a-different-edition-of-sql-server-setup?view=sql-server-ver16)
- Read how to Migrate Netwrix Databases to Another MS SQL Server Instance
