---
title: "SIEM Tab"
description: "SIEM Tab"
sidebar_position: 30
---

# SIEM Tab

Alert notification via SIEM sends event notifications to a SIEM product using UDP or TCP protocol.
Before you can enable SIEM alerting, you must configure the SIEM server.

**Step 1 –** Click **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 2 –** Click the **SIEM** tab.

**Step 3 –** Click **Configure** to configure a SIEM server. See the Configure a SIEM Server topic
for additional information.

**Step 4 –** Once configured, click **Events** on the **SIEM** tab.

![Netwrix Threat Prevention System Alerting window - SEIM tab](/images/threatprevention/8.0/admin/configuration/systemalerting/seim.webp)

**Step 5 –** Click the button next to Disabled to toggle the setting to **Enabled**.

**Step 6 –** Select an event category (Security, Operations, Configuration, Analytics, Policies) in
the left pane.

You can set a SIEM mapping file for each type of event category, as discussed in the Configure a
SIEM Server topic.

**Step 7 –** Check the checkbox for the event/incident/policy for which you want to trigger SIEM
notifications.

**Step 8 –** Click the **Select Profile, please** dropdown menu for an event/incident/policy and
select a SIEM Profile to assign to it. When Threat Prevention generates an alert for the
event/incident/policy, it sends a notification to the SIEM server specified in the SIEM Profile.

- For policies, you can assign multiple profiles by either checking the profiles you want or
  selecting the Select All option. Click **OK** in the dropdown menu to confirm the selection.

You can assign a profile to as many events as required.

**Step 9 –** For the Security, Operations, and Configuration event categories, the Suppression time
option is also available for each event. Use it to prevent Threat Prevention from generating alerts
for an event for a specified time period. This limits the volume of repeat alerts for the respective
event.

Click **Suppression time** for an event and select an option from the dropdown menu:

- A duration ( 1 min, 2 min, 5 min, 10 min, 30 min, 60 min) – Once Threat Prevention generates an
  alert for the event, it doesn't generate another alert for it during the next X minutes (X is
  the duration you selected) even if the event occurs.
- Disabled – Threat Prevention doesn't suppress alerts

**Example**

You select a suppression time of 30 minutes for an event. Next, Threat Prevention generates an
alert for that event. If the event occurs again within the next 30 minutes, Threat Prevention does
not generate another alert.

Use the suppression time feature to prevent situations where an event, such as Agent Latency,
generates numerous alerts that cause the Enterprise Manager and Administration Console to freeze.

**Step 10 –** For Analytics, choose whether to enable Ongoing Attack Alerts. When checked,
Threat Prevention sends periodic reminders of an ongoing attack if it continues after Threat
Prevention sends the initial notification.

**Step 11 –** Click **OK** to save the settings.

Threat Prevention now sends SIEM notifications for the selected events/incidents/policies to the
SIEM product configured in the assigned SIEM profile. The
[SIEM Output Viewer](/docs/threatprevention/8.0/admin/configuration/siemoutputviewer.md) window also displays all notifications sent to
SIEM.

## Configure a SIEM Server

You can create multiple profiles across SIEM servers to serve different alerting functions. Follow
the steps to configure one or more SIEM servers for alerting.

![Netwrix Threat Prevention System Alerting window – SEIM tab – Configure SEIM Server](/images/threatprevention/8.0/admin/configuration/systemalerting/seimserver.webp)

**Step 1 –** Click **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 2 –** On the SIEM tab, click **Configure**.

**Step 3 –** In the SIEM Profiles area, click the Add (+) button to create a new SIEM profile. To
rename the default text, select the name string and enter the new profile name.

:::info
For each profile, use a unique name for easy identification.
:::


**Step 4 –** Use the Protocol dropdown menu to select either protocol:

- UDP
- TCP – If selected, the Require SSL/TLS checkbox appears. If desired, check this box and ensure
  you save the certificate in the certificate store.

**Step 5 –** In the Host Address box, provide either an IP address or server name for the SIEM
server.

**Step 6 –** In the Port box, provide the port number to communicate with the SIEM server.

**Step 7 –** Use the Mapping File for Events dropdown menu to select the SIEM product to receive
policy event notifications. Use the gear icon to the right of the dropdown to import a custom
mapping file. Netwrix designed these mapping file formats specifically for policy events.

**Step 8 –** Use the Mapping File for System Alerts dropdown menu to select the SIEM product to
receive Threat Prevention Security, Threat Prevention Operations, and Threat Prevention
Configuration event alerts.

Use the gear icon to the right of the dropdown to import a custom mapping file. Netwrix designed
these mapping file formats specifically for Threat Prevention system events.

**Step 9 –** Use the Mapping File for Authentication Analytics dropdown menu to select the SIEM
product to receive Authentication Analytics incident alerts.

Use the gear icon to the right of the dropdown to import a custom mapping file. Netwrix designed
these mapping file formats specifically for Analytics incidents.

**Step 10 –** Use the Mapping File for File Analytics dropdown menu to select the SIEM product to
receive File Analytics incident alerts.

Use the gear icon to the right of the dropdown to import a custom mapping file. Netwrix designed
these mapping file formats specifically for Analytics incidents.

**Step 11 –** _(Optional)_ Use the **Test** button to confirm the configuration settings.

**Step 12 –** Click **OK** to save the settings.

After you configure a SIEM server, assign it to events using the System Alerting window's SIEM Tab or
the [Actions Tab](/docs/threatprevention/8.0/admin/policies/configuration/actions/overview.md) of a policy or the
[Actions Tab](/docs/threatprevention/8.0/admin/templates/configuration/actions.md) of a policy template.

**IBM QRadar Integration**

Netwrix has created a custom app for integration between Threat Prevention and QRadar. See the
[Active Directory App for QRadar](/docs/threatprevention/8.0/siemdashboard/qradar/overview.md) topic for additional
information. A custom app for File Activity can also receive data from either Threat Prevention or
Netwrix Activity Monitor. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

**Splunk Integration**

Netwrix has created custom apps for integration between Threat Prevention and Splunk. See the
[Active Directory App for Splunk](/docs/threatprevention/8.0/siemdashboard/activedirectory/overview.md) topic
and the [Threat Hunting App for Splunk](/docs/threatprevention/8.0/siemdashboard/threathunting/overview.md)
topic for additional information. A custom app for File Activity can also receive data from either
Threat Prevention or Netwrix Activity Monitor. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

## Add a Custom SIEM Mapping File

You can add custom SIEM mapping files. First create the mapping file, and save it at a location
that the Administration Console can access. The default mapping files are stored in the following
folder:

**…\Netwrix\Netwrix Threat Prevention\SIWinConsole\SIEMTemplates\**

![SIEM tab - Gear icon for Custom Mapping File](/images/threatprevention/8.0/admin/configuration/systemalerting/geariconformappingfile.webp)

**Step 1 –** Click **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 2 –** On the SIEM tab, click **Configure**.

**Step 3 –** Click the **gear** icon for an alert type to open the SIEM Templates window. The new
mapping file will only be available for the specific type selected.

![SIEM Templates window](/images/threatprevention/8.0/admin/configuration/systemalerting/siemtemplates.webp)

**Step 4 –** Click **Add** (+) to open the Import SIEM Mapping File window.

![Import SIEM Mapping File window](/images/threatprevention/8.0/admin/configuration/systemalerting/importfile.webp)

**Step 5 –** Select the mapping file you want and click **Open**. The SIEM Mapping File window closes
and the selected mapping file appears in the SIEM Templates window. It is now available in the
dropdown menu. Click **Close**.

**Step 6 –** Click **OK** to save the settings.

You can now select the new mapping file from the dropdown menu for the respective alert type.
