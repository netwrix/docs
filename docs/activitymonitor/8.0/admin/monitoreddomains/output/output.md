---
title: "Output for Monitored Domains"
description: "Output for Monitored Domains"
sidebar_position: 20
---

# Output for Monitored Domains

Once a domain is being monitored the event stream can be sent to multiple outputs.

![Monitored Domains tab with Domain Outputs added](/images/activitymonitor/8.0/admin/monitoreddomains/actiivtymonitordomainoutputsadded.webp)

Configured outputs are grouped under the domain. You can have multiple outputs configured for a
domain. The domain event outputs are:

- File – Creates an activity log as a JSON file for every day of activity

    :::note
    This is required to search event data for Active Directory within the application.
    :::


- Syslog – Sends activity events to the configured SIEM server
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or
  receives Active Directory monitoring events from Netwrix Threat Prevention for integration with
  Netwrix Access Analyzer (formerly Enterprise Auditor)

## Add File Output

Follow the steps to add a File output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **File** from the drop-down menu. The Add New Output window opens.

![Log Files configuration](/images/activitymonitor/8.0/admin/monitoreddomains/logfiles.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/admin/outputs/overview.md) topic for additional
information.

## Add Syslog Output

Follow the steps to add a Syslog output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Syslog** from the drop-down menu. The Add New Output window opens.

![Syslog Properties](/images/activitymonitor/8.0/admin/monitoreddomains/syslogudp.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/admin/outputs/overview.md) topic for additional
information.

## Add Netwrix Threat Manager Output

:::note
An App Token created by Netwrix Threat Manager is used to authenticate connection between
the applications. See the App Tokens Page topic of the
[Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend) for
additional information.
:::


Follow the steps to add a Netwrix Threat Manager output.

**Step 1 –** On the Monitored Domains tab, select the desired domain and click **Add Output**.

**Step 2 –** Select **Netwrix Threat Manager (StealthDEFEND)** from the drop-down menu. The Add New
Output window opens.

![StealthDEFEND Properties](/images/activitymonitor/8.0/admin/monitoreddomains/stealthdefendproperties.webp)

**Step 3 –** Configure the tab(s) as desired.

**Step 4 –** Click **Add Output** to save your settings. The Add New Output window closes.

The new output displays in the table. Click the **Edit** button to open the Output properties window
to modify these settings. See the [Output Types](/docs/activitymonitor/8.0/admin/outputs/overview.md) topic for additional
information.
