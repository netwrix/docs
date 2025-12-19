---
title: "Sensitive Data Discovery Add-On"
description: "Sensitive Data Discovery Add-On"
sidebar_position: 50
---

# Sensitive Data Discovery Add-On

The Sensitive Data Discovery Add-On allows Enterprise Auditor to scan file content for matches to
the sensitive data criteria. There are several pre-defined criteria, but you can also customize
existing criteria or create new criteria.

The Sensitive Data Discovery Add-on can be used with any of the following Enterprise Auditor
solutions:

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
in Enterprise Auditor. In other words, any changes to criteria affects all solutions using the
Sensitive Data Discovery Add-on.
:::


:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for installation information and prerequisites.
