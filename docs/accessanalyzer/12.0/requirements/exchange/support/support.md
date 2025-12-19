---
title: "Exchange Support and Permissions Explained"
description: "Exchange Support and Permissions Explained"
sidebar_position: 10
---

# Exchange Support and Permissions Explained

This topic outlines what is supported for each type of Exchange version.

:::note
Sensitive Data Discovery is available with the EWSMailbox, EWSPublicFolder, and
ExchangeMailbox data collectors.
:::


## Support by Data Collector

The following tables provide a breakdown of support by data collector:

| Data Collector       | Exchange Online | Exchange 2019 | Exchange 2016 | Exchange 2013 | Exchange 2010 | MAPI-Based |
| -------------------- | --------------- | ------------- | ------------- | ------------- | ------------- | ---------- |
| EWSMailbox           | Yes             | Yes           | Yes           | Yes           | Limited\*     | No         |
| EWSPublicFolder      | Yes             | Yes           | Yes           | Yes           | Limited\*     | No         |
| Exchange2k           | No              | No            | No            | Yes           | Yes           | Yes        |
| ExchangeMailbox      | No              | No            | No            | Yes           | Yes           | Yes        |
| ExchangeMetrics      | No              | Yes           | Yes           | Yes           | Yes           | No         |
| ExchangePS           | Yes             | Yes           | Yes           | Yes           | Yes           | No         |
| ExchangePublicFolder | No              | No            | No            | Yes           | Yes           | Yes        |
| SMARTLog             | No              | Yes           | Yes           | Yes           | Yes           | No         |

\* The data collector can target Exchange 2010 Service Pack 1 and later.

## Support by Job Group

The following tables provide a breakdown of support by job group:

| Job Group             | Exchange Online | Exchange 2019 | Exchange 2016 | Exchange 2013 | Exchange 2010 | MAPI-Based |
| --------------------- | --------------- | ------------- | ------------- | ------------- | ------------- | ---------- |
| 1. HUB Metrics        | No              | Yes           | Yes           | Yes           | Yes           | No         |
| 2. CAS Metrics        | No              | Yes           | Yes           | Yes           | Yes           | No         |
| 3. Database           | No              | Limited\*     | Limited\*     | Yes           | Yes           | Yes        |
| 4. Mailboxes          | Yes             | Yes           | Yes           | Yes           | Yes           | No         |
| 5. Public Folders     | No              | No            | No            | Yes           | Yes           | Yes        |
| 6. Distribution Lists | Yes             | Yes           | Yes           | Yes           | Yes           | No         |
| 7. Sensitive Data     | Yes             | Yes           | Yes           | Yes           | Limited\*     | Mix\*\*    |
| 8. Exchange Online    | Yes             | No            | No            | No            | No            | No         |

\* Limited indicates that some of the data collectors can target the environment, but not all.

\*\* Mix indicates some data collectors are MAPI-based, but not all.

## Exchange Solution to Permissions Alignment

See the following sections for permission requirements according to the job group, data collector,
or action module to be used:

- [Exchange Mail-Flow Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/mailflow.md)

    - ExchangeMetrics Data Collector
    -   1. HUB Metrics Job Group

- [Exchange Remote Connections Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/remoteconnections.md)

    - SMARTLog Data Collector
    -   2. CAS Metrics Job Group

- [Exchange PowerShell Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/powershell.md)

    - ExchangePS Data Collector
    - PublicFolder Action Module
    - Mailbox Action Module
    -   2. CAS Metrics Job Group
    -   3. Databases Job Group
    -   4. Mailboxes Job Group
    -   5. Public Folders Job Group
    -   8. Exchange Online Job Group

- [Exchange Web Services API Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/webservicesapi.md)

    - EWSMailbox Data Collector
    - EWSPublicFolder Data Collector
    -   7. Sensitive Data Job Group

- [MAPI-Based Data Collector Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/mapi.md)

    - Exchange2K Data Collector
    - ExchangeMailbox Data Collector
    - ExchangePublicFolder Data Collector
    -   3. Databases Job Group
    -   5. Public Folders Job Group
    -   7. Sensitive Data Job Group

:::note
All MAPI-based data collectors require the **Settings** > **Exchange** node configured in
the Access Analyzer Console.

:::
