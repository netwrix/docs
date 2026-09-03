---
title: "Getting Data from NTP for AD Activity Reporting"
description: "Getting Data from NTP for AD Activity Reporting"
sidebar_position: 20
---

# Getting Data from NTP for AD Activity Reporting

When you configure Netwrix Threat Prevention to monitor a domain, you can provide the event data
collected by the policies to Netwrix Enterprise Auditor for Active Directory Activity reporting. To
do this, configure Threat Prevention to send data to Netwrix Activity Monitor, which in turn creates
the activity log files that Enterprise Auditor collects.

:::note
You can only configure Threat Prevention to send event data to one Netwrix application,
either Netwrix Activity Monitor or Netwrix Threat Manager but not both. However, you can configure
the Activity Monitor with outputs for Enterprise Auditor and Threat Manager.
:::


Configure this integration.

:::info
It is a best practice to use the API Server option of the Activity Monitor for
this integration between Threat Prevention and Enterprise Auditor.
:::


**Step 1 –** In the Threat Prevention Administration Console, click **Configuration** > **Netwrix
Threat Manager Configuration** on the menu. The Netwrix Threat Manager Configuration window opens.

**Step 2 –** On the Event Sink tab, configure the following:

- Netwrix Threat Manager URI – Enter the name of the Activity Monitor agent host and port, which is
  4499 by default, in the following format:

    `amqp://localhost:4499`

    You must use localhost, even if you install Activity Monitor and Threat Prevention on
    different servers.

- App Token – Leave this field blank for integration with Activity Monitor
- Policies – The table displays all policies created in Threat Prevention along with a State icon
  indicating if the policy is active. Check the **Send** box for the policies you want to send that
  monitor the target domain activity.

**Step 3 –** Click **Save**.

Activity Monitor now receives all real-time event data from the selected policies. You can add
additional policies to this data stream through the Netwrix Threat Manager Configuration window or
by selecting the **Send to Netwrix Threat Manager** option on the Actions tab of the policy.
