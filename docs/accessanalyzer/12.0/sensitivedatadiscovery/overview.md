---
title: "Sensitive Data Discovery"
description: "Sensitive Data Discovery"
sidebar_position: 50
---

# Sensitive Data Discovery

Sensitive Data Discovery (SDD) allows Access Analyzer to scan file content for matches to the
sensitive data criteria. There are several pre-defined criteria, but you can also customize existing
criteria or create new criteria.

:::note
Sensitive Data Discovery requires a special license. If your license includes Sensitive
Data Discovery, then the necessary components for Sensitive Data Discovery are installed during the
Access Analyzer, FSAA Proxy, and SPAA Agent installations.
:::


Sensitive Data Discovery can be used with any of the following Access Analyzer solutions:

- AWS Solution
- Dropbox Solution
- Database Solutions

    - Azure SQL Solution
    - Db2 Solution
    - MongoDB Solution
    - MySQL Solution
    - Oracle Solution
    - PostgreSQL Solution
    - Redshift Solution
    - SQL Solution

- Exchange Solution – Only with specific data collectors:

    - EWSMailbox Data Collector
    - EWSPublicFolder Data Collector
    - ExchangeMailbox Data Collector

- File System Solution
- SharePoint Solution

:::note
Changes made in the Sensitive Data Criteria Editor are global for Sensitive Data Discovery
in Access Analyzer. In other words, any changes to criteria affects all solutions using Sensitive
Data Discovery.
:::


:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.

:::
