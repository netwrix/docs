---
description: >-
  This article provides step-by-step instructions for configuring monitored Exchange servers to ensure non-owner mailbox access attempts are reflected in reports.
keywords:
  - Exchange server
  - mailbox access
  - diagnostics logging
sidebar_label: Non-owner Mailbox Access
tags: [troubleshooting-and-errors]
title: "Non-owner Mailbox Access Attempts Not Reflected in Reports"
knowledge_article_id: kA00g000000H9SQCA0
products:
  - general
---

# Non-owner Mailbox Access Attempts Not Reflected in Reports

## Overview

This article provides instructions for configuring monitored Exchange servers to ensure that non-owner mailbox access attempts are accurately reflected in reports.

## Instructions

### For Exchange Server 2003

1. Start the Microsoft Management Console (MMC) Exchange System Management snap-in.
2. Expand your administrative group → **Servers**.
3. Right-click the Exchange Server and select **Properties**.
4. Open the **Diagnostics Logging** tab.
5. Under the **Services List**, expand the **MSExchangeIS Service** and select **Mailbox**.
6. In the **Categories** list, select **Logons**, set the logging level to **Minimum**, and click **Apply**.
7. Click **OK**.
8. Navigate to **Start** → **Administrative Tools** → **Services**. Click **Microsoft Exchange Information Store** and restart the service.

### For Exchange 2007/2010

1. Start the Exchange Management Shell.
2. Run the following command:
   ```powershell
   Set-EventLogLevel "MSExchangeIS9000 PrivateLogons" -Level Low
   ```
3. Navigate to **Start** → **Administrative Tools** → **Services**. Click **Microsoft Exchange Information Store** and restart the service.