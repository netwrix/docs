---
title: "Platform Governor Status"
description: "Platform Governor Status"
sidebar_position: 90
---

# Platform Governor Status

This is a live status update of the Usage of SFDC Governor Limit. Access it from **Netwrix
Dashboard** > **Settings** > **Platform Governor Status**

When Platform Governance for Salesforce reaches the threshold, executions are reschedule for the
next day so the organization limit is not reached.

![governor](/images/platgovsalesforce/installing_strongpoint/governor.webp)

## Set a Threshold

You can set or edit the organization limits through the Setup menu.

1. Open **Setup** > **Custom Code** > **Custom Settings**
2. Click **Manage** next to **Strongpoint General Config CS**
3. Click **Edit** next to **Strongpoint Apex Method Daily**
4. Change the **Value Number** as needed.
5. Click **Save**
