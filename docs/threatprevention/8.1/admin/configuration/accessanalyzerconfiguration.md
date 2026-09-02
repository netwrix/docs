---
title: "Send Active Directory Event Data from Netwrix Threat Prevention to Netwrix Access Analyzer"
description: "Send Active Directory Event Data from Netwrix Threat Prevention to Netwrix Access Analyzer"
sidebar_position: 90
---

# Send Active Directory Event Data from Netwrix Threat Prevention to Netwrix Access Analyzer

When you configure Netwrix Threat Prevention to monitor a domain, you can provide the event data the
policies collect to Netwrix Access Analyzer (formerly Enterprise Auditor) for auditing and
analysis. To do this, configure Threat Prevention to send data to Netwrix Activity
Monitor, which in turn creates the activity log files that Access Analyzer collects.

:::note
You can configure Threat Prevention to send event data to only one Netwrix application,
either Netwrix Activity Monitor or Netwrix Threat Manager, but not both. However, you can configure
the Activity Monitor with outputs for Access Analyzer and Threat Manager.
:::


To configure this integration:

:::info
As a best practice, use the API Server option of the Activity Monitor for
this integration between Threat Prevention and Access Analyzer.
:::


**Step 1 –** In the Threat Prevention Administration Console, click **Configuration** > **Netwrix
Threat Manager Configuration** on the menu. The Netwrix Threat Manager Configuration window opens.

**Step 2 –** On the Event Sink tab, configure the following:

- Netwrix Threat Manager URI – Enter the name of the Activity Monitor agent host and port, which is
  4499 by default, in the following format:

  `amqp://localhost:4499`

  You must use localhost, even if Activity Monitor and Threat Prevention are installed on
  different servers.

- App Token – Leave this field blank for integration with Activity Monitor
- Policies – The table displays all policies created in Threat Prevention along with a State icon
  indicating if the policy is active. Check the **Send** box for the policies you want that monitor
  the target domain activity.

**Step 3 –** Click **Save**.

Threat Prevention now sends all real-time event data from the selected policies to Activity Monitor.
You can add more policies to this data stream through the Netwrix Threat Manager Configuration
window or by selecting the **Send to Netwrix Threat Manager** option on the Actions tab of the
respective policy.
