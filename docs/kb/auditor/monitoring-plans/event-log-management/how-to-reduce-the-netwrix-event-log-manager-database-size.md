---
description: >-
  Learn how to reduce the NetWrix Event Log Manager SQL database size by
  configuring the database retention period to remove old events automatically.
keywords:
  - NetWrix Event Log Manager
  - database retention
  - SQL database
  - delete old events
  - database size
  - data retention
  - Enterprise Management Console
products:
  - auditor
sidebar_label: How to reduce the NetWrix Event Log Manager databa
tags: []
title: "How to reduce the NetWrix Event Log Manager database size"
knowledge_article_id: kA00g000000H9TCCA0
---

# How to reduce the NetWrix Event Log Manager database size

Our NetWrix Event Log Manager database size is getting too large. How can we reduce its size and delete old events?

You can reduce the database size by setting the SQL database retention period that allows controlling the amount of data stored in your SQL database. In accordance with this setting, the database size is automatically updated during the event collection process.

To configure the SQL database retention settings, do the following:

1. Start **NetWrix Enterprise Management Console**, and navigate to **Managed Objects** **`<your Managed Object>`** **Event Log Manager** **Reports**.  
2. In the right pane, switch to the **Settings** tab, select the **Store audit data in the database for () days** check box, and specify the number of days (for example, `30 days`). **Note**: the longer the period you specify, the larger your database size is.
3. Click **Apply** to save the changes.

The NetWrix Event Log Manager database size will be reduced during the next data collection.
