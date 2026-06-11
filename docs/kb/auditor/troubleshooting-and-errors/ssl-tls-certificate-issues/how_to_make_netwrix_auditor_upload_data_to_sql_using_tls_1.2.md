---
description: >-
  This article describes how to configure Netwrix Auditor and SQL Server to communicate via a secure channel using TLS 1.2.
keywords:
  - Netwrix Auditor
  - SQL Server
  - TLS 1.2
  - SSL
  - OLE DB Driver
  - MSOLEDBSQL19
  - MSOLEDBSQL
  - SQLNCLI11
  - SQL Server Native Client
  - SNAC
  - secure channel
  - certificate
sidebar_label: Configure Netwrix Auditor for TLS 1.2
tags:
  - kb
  - troubleshooting-and-errors
title: "Configuring Netwrix Auditor to Upload Data to SQL Server Using TLS 1.2"
knowledge_article_id: kA00g000000H9dBCAS
products:
  - auditor
---

# Configuring Netwrix Auditor to Upload Data to SQL Server Using TLS 1.2

## Overview

This article describes how to configure Netwrix Auditor and SQL Server to communicate via a secure channel using TLS 1.2.

## Symptoms

You might encounter the following error when using the Search function in Netwrix Auditor:

```
Sql Server error occurred (18, [DBNETLIB][ConnectionOpen (SECDoClientHandshake().]SSL Security error.)
```

## Instructions

1. Ensure TLS 1.2 is enabled on both servers. Use the Microsoft guide to configure it: [Enabling TLS 1.2 ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2).
2. Ensure the certificate used for the connection is trusted on the Netwrix Auditor host.
3. Ensure one of the following drivers is installed on the Auditor host. The drivers are listed in order of preference:
   - Microsoft OLE DB Driver 19 for SQL Server
   - Microsoft OLE DB Driver 18 for SQL Server
   - SQL Server Native Client (SNAC), version 2011.110.7001.00 or later

   > **NOTE:** SQL Server Native Client, including SQLNCLI and SQLNCLI11, has been deprecated by Microsoft and removed in SQL Server 2025.

4. If the required driver is not installed, download and install the [Microsoft OLE DB Driver for SQL Server ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/sql/connect/oledb/download-oledb-driver-for-sql-server).
5. Restart the **Netwrix Auditor Archive Service**.

---

For more information about SQL and TLS 1.2, refer to [TLS 1.2 Support for Microsoft SQL Server ⸱ Microsoft 🡥](https://support.microsoft.com/en-us/help/3135244/tls-1-2-support-for-microsoft-sql-server).
