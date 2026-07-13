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
sidebar_label: Configure the Auditor SQL Server Connection Using TLS 1.2
tags:
  - kb
  - configuration-and-setup
title: "Configuring the Auditor SQL Server Connection Using TLS 1.2"
knowledge_article_id: kA00g000000H9dBCAS
products:
  - auditor
---

# Configuring the Auditor SQL Server Connection Using TLS 1.2

## Overview

This article describes how to configure Netwrix Auditor and SQL Server to communicate via a secure channel using TLS 1.2. For background on TLS 1.2 and SQL Server compatibility, see [TLS 1.2 Support for Microsoft SQL Server ⸱ Microsoft](https://support.microsoft.com/en-us/help/3135244/tls-1-2-support-for-microsoft-sql-server). If you encounter the following error when using the **Search** function in Netwrix Auditor, follow the instructions below:

```
Sql Server error occurred (18, [DBNETLIB][ConnectionOpen (SECDoClientHandshake().]SSL Security error.)
```

## Instructions

1. Enable TLS 1.2 on both servers. Use the Microsoft guide to configure it: [Enabling TLS 1.2 ⸱ Microsoft](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2).
2. Ensure the Netwrix Auditor host trusts the certificate used for the connection.
3. Ensure the Auditor host has one of the following drivers installed, listed in order of preference:
   - Microsoft OLE DB Driver 19 for SQL Server
   - Microsoft OLE DB Driver 18 for SQL Server
   - SQL Server Native Client (SNAC), version 2011.110.7001.00 or later

   > **NOTE:** Microsoft deprecated SQL Server Native Client, including SQLNCLI and SQLNCLI11, and removed it in SQL Server 2025.

4. If the required driver is not installed, download and install the [Microsoft OLE DB Driver for SQL Server ⸱ Microsoft](https://learn.microsoft.com/en-us/sql/connect/oledb/download-oledb-driver-for-sql-server).
5. Restart the **Netwrix Auditor Archive Service**.
