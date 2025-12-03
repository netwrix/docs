---
description: >-
  Describes how to force Netwrix Auditor to collect a specific Applications and
  Services event log by obtaining the log's full name in Event Viewer and
  entering it into the Event Log filter.
keywords:
  - Netwrix Auditor
  - Event Log
  - Applications and Services
  - Event Viewer
  - Event Log Manager
  - log name
  - Full Name
  - filter
products:
  - auditor
sidebar_label: How to force Netwrix Auditor to collect a specific
tags: []
title: "How to force Netwrix Auditor to collect a specific Applications and Services event log?"
knowledge_article_id: kA00g000000H9WdCAK
---

# How to force **Netwrix Auditor** to collect a specific **Applications and Services** event log?

---

When creating a new filter for **Event Log Manager**, you can select the log name from the drop-down list or enter the name of any custom log. In order to get the log name, please do the following:

1. On the server where the log is located, start **Event Viewer** and navigate to the desired event log.
2. Right click on it and select **Log Properties**.
3. On the **Properties** window, copy **Full Name** of the event log.

![EventViewer - select desired log]./../0-images/ka04u000000HcPp_0EM700000005DIQ.png)

4. Paste that name to the **Event Log** field of the filter:

![image.png]./../0-images/ka04u000000HcPp_0EM4u000007qsVK.png)

