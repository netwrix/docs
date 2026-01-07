---
description: >-
  Instructions to bulk re-enroll users after an email domain change by updating
  the DomainName field in the Password Reset SQL database. Includes SqlCeCmd40
  examples for SQL Server Compact and guidance for SQL Server.
keywords:
  - domain change
  - bulk re-enroll
  - SqlCeCmd40
  - SQL Server Compact
  - Password Reset
  - apr.sdf
  - DomainName
  - UPDATE query
products:
  - password-reset
sidebar_label: How To Change a Domain Name for All Enrolled Users
tags: []
title: "How To Change a Domain Name for All Enrolled Users?"
knowledge_article_id: kA0Qk0000000LkPKAU
---

# How To Change a Domain Name for All Enrolled Users?

## Question

How to to bulk re-enroll users that have had their email domain changed?

## Answer

A domain name is stored in the SQL database. To change a domain name for the enrolled users, you need to update the database with a SQL query.

> **IMPORTANT:** Always backup the database with the Data Console closed and the Netwrix Password Reset service stopped before modifying the database.

If you are using **SQL Server Compact**, you can use the open source [SqlCeCmd40](https://github.com/ErikEJ/SqlCeCmd/releases) tool.

The queries below can be used for SQL Server, but with a different tool. Ask your Database Administrator for more information.

- Use this query to set the domain name for all users:

```text
SqlCeCmd40.exe -d "Data Source=apr.sdf" -q "UPDATE Usr SET DomainName = 'NewDomain'"
```

where `NewDomain` is the name of your new domain.

- If you only want to update one user, for example, for testing purposes, then use the following query:

```text
SqlCeCmd40.exe -d "Data Source=apr.sdf" -q "UPDATE Usr SET DomainName = 'NewDomain' where (LogonName = 'Test') AND (DomainName = 'OldDomain')"
```

where `NewDomain` is the name of your new domain and `OldDomain` is the old name arrordingly.
