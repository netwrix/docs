---
description: >-
  Explains how Netwrix Auditor for VMware collects auditing events and inventory
  data, how often it runs, and how it uses the VMware EventHistoryCollector API
  to retrieve events from ESXi servers and vCenter.
keywords:
  - Netwrix Auditor
  - VMware
  - ESXi
  - vCenter
  - EventHistoryCollector
  - audit events
  - snapshots
  - inventory
  - data collector
products:
  - auditor
sidebar_label: How does Netwrix Auditor for VMware work
tags: []
title: "How does Netwrix Auditor for VMware work"
knowledge_article_id: kA00g000000H9SkCAK
---

# How does Netwrix Auditor for VMware work

## Overview
Netwrix Auditor collects changes every 15 minutes and refreshes its full snapshot every day. To generate change and inventory reports, Netwrix Auditor collects the following data:

- Auditing events (which are generated on monitored ESXi server/vCenter)
- Virtual environment objects and properties (which are then used to build snapshots of monitored virtual environment)

### Collecting Events
To collect the auditing events, Netwrix Auditor uses the VMware API method called [`EventHistoryCollector`](http://pubs.vmware.com/vsphere-50/index.jsp?topic=%2Fcom.vmware.wssdk.pg.doc_50%2FPG_Ch15_Alarms.17.4.html), which retrieves auditing events from the specified ESX server vCenter. In other words Netwrix Auditor just asks the monitored ESXi Server vCenter for auditing events it has without direct access to the audit log files databases on the monitored ESXi Server vCenter (all these operations are being handled by VMware API).

Before gathering new auditing events, the VMware data collector looks into its repository and identifies the last collected audit event - which the previous data collection has stopped on and the current data collection should start from.

For example:
1. The previous data collection stopped on an event which was generated on 12/27/2022 at 6:26 AM
2. The first event Netwrix Auditor for VMware expects to get in the current data collection will be same - generated on 12/27/2022 at 6:26 AM (because events in the event chain should be inseparably linked with each other)

In other cases (when the first received event was generated later than 12/27/2022 at 6:26 AM) the product will consider this as an event overwrite - because this means that some event chain pieces are missing. Audit events are stored in different places for different VMware products, for a standalone ESXi server events are retained in memory and how back they go depends on the available memory. vCenter pulls events from its managed ESXi servers and stores them in the vCenter Event Database.
