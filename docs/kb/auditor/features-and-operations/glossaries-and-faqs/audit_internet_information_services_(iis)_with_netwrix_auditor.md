---
description: >-
  This article provides step-by-step instructions on configuring Internet Information Services (IIS) events monitoring using Netwrix Auditor.
keywords:
  - IIS monitoring
  - Netwrix Auditor
  - event log configuration
sidebar_label: Configure IIS Monitoring
tags: []
title: "Audit Internet Information Services (IIS) with Netwrix Auditor"
knowledge_article_id: kA00g000000H9SCCA0
products:
  - auditor
---

# Audit Internet Information Services (IIS) with Netwrix Auditor

## Question

How to configure Internet Information Services (IIS) events monitoring?

## Answer

### Prerequisites

1. Enable the **Remote Registry** service — for additional information, refer to the following article: Configuration – Windows Server: Windows Event Logs · v10.6.
2. Configure the operational log of Internet Information Services — for additional information, refer to the following article: [Configuration – Windows Server – Internet Information Services (IIS) · v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/windowsserver/iis).

### Set Up IIS Monitoring Plan

1. In the **Start** menu, open the **Netwrix Auditor** folder and launch **Netwrix Auditor Event Log Manager**.
2. Create a new monitoring plan by clicking **Add**.
3. Fill in the **Monitoring plan**, **Notification recipients**, and account credentials fields.
4. Specify the IIS server you’d like to monitor — click **Add** to add a computer to your monitoring plan.
5. In the bottom section, click **Configure** for **Audit archiving filters**.

   1. Click **Add** for **Inclusive Filters**.
   2. Fill in the filter name and description fields. Enter the following line in the **Event Log** field:

   ```plaintext
   Microsoft-IIS-Configuration/Operational
   ```

   3. Switch the **Write to** switch to **Both**. Refer to the following screenshot for reference.

   ![Configuration of Audit Archiving Filters with the Write to switch set to Both]./../0-images/servlet_image_69af0d1737a5.png)

Dedicated predefined reports are available in Netwrix Auditor. Follow **Reports** > **Predefined** > **Windows Server** > **Event Log** to see both IIS reports, **IIS Application Pool Changes** and **IIS Website Changes**.