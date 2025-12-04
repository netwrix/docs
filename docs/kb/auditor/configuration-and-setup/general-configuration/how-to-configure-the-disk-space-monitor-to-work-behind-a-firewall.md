---
description: >-
  Use these steps to allow the Disk Space Monitor to connect through a Firewall
  by ensuring TCP port 135 (DCOM) is allowed and the scheduled task runs.
keywords:
  - disk space monitor
  - firewall
  - port 135
  - DCOM_TCP135
  - Netwrix Disk Space Monitor
  - netsh
  - scheduled task
products:
  - auditor
sidebar_label: How to configure the Disk Space Monitor to work be
tags: []
title: "How to configure the Disk Space Monitor to work behind a Firewall"
knowledge_article_id: kA00g000000H9ULCA0
---

# How to configure the Disk Space Monitor to work behind a Firewall

How do I configure the Disk Space Monitor to work behind a Firewall?

## Overview

A Firewall may prevent Disk Space Monitor attempts to connect to the server and get information about the disk space. Make sure that port `135` is open.

## Resolution

Perform the following steps:

1. Run the firewall by going to **Start** | **Control Panel** | **Windows Firewall**.
2. Click the **Exceptions** tab and check the list of Programs and Services.
3. Make sure the list of Programs and Services contains the `DCOM_TCP135` line.

If `DCOM_TCP135` is not in the list of Programs and Services, perform the following steps:

1. Go to **Start** | **Run** | type `cmd` and press **OK**.
2. Type `netsh firewall add portopening protocol=tcp port=135 name=DCOM_TCP135` and press **Enter**.
3. Go to **Start** | **Control Panel** | **Windows Firewall**.
4. Click the **Exceptions** tab and make sure `DCOM_TCP135` has been added to the list of Program and Services.
5. Go to **Start** | **Control Panel** | **Scheduled Tasks**. Run the Netwrix Disk Space Monitor scheduled task.
6. Open the mailbox you have specified to receive notifications and make sure the report displays disk space information about the server in question.
