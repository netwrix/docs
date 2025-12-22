---
description: >-
  Use this procedure to specify a single Exchange Server with IIS configured so
  Netwrix products collect the Administrator Audit Log and avoid Administrator
  Audit Log errors in reports.
keywords:
  - Exchange
  - Administrator Audit Log
  - IIS
  - aal_serverlist.txt
  - AALCollectionVersion
  - registry
  - Netwrix
  - audit collection
  - Exchange Server
  - aal_serverlist
products:
  - auditor
sidebar_label: How to specify Exchange Server to collect Administ
tags: []
title: "How to specify Exchange Server to collect Administrator Audit Log"
knowledge_article_id: kA00g000000H9SFCA0
---

# How to specify Exchange Server to collect Administrator Audit Log

If for some reason you cannot configure **IIS** (steps **5-8** from **Procedure 16** of the **Installation and Configuration Guide** attached to this article) on all Exchange Servers in your organization, it is enough to configure it on just one Exchange Server. You can specify the Exchange Server with configured IIS to be used by Netwrix products to avoid the Administrator Audit Log error appearing in reports.

## Procedure

In order to specify properly configured servers to the product, perform the following steps:

1. On the computer where the Netwrix host resides, navigate to the `C:ProgramDataNetWrixAD Change ReporterOmitlists%Managed object name%` folder.
2. Add the properly configured server's FQDN to the `aal_serverlist.txt` file. (Each server's FQDN in a separate line).
3. Click **Start -> Run** and type `regedit` to open **Registry Editor**.
4. Navigate to the following folder depending on your operating system:
   - **32-bit OS:** `HKLM\SOFTWARE\Node\NetWrix\AD Change Reporter\AALCollectionVersion`
   - **64-bit OS:** `HKLM\SOFTWARE\Wow6432Node\NetWrix\AD Change Reporter\AALCollectionVersion`
5. Check that the `AALCollectionVersion` key value is set to `1`.

## Explanation

**Explanation:** In this scenario the first server where the product will try to get the Administrator Audit Log will be the first server from the `aal_serverlist.txt`. If all servers from `aal_serverlist.txt` fail to provide the Administrator Audit Log, the product will try to collect the Administrator Audit Log from other Exchange Servers in your organization, and the Administrator Audit Log error can appear in the report.
