---
title: "SIEM Tab"
description: "SIEM Tab"
sidebar_position: 30
---

# SIEM Tab

Alert notification via SIEM sends event notifications to a SIEM product using UDP or TCP protocol.
Before SIEM alerting can be enabled, the SIEM server must be configured. Follow the steps to set up
what events receive notifications.

**Step 1 –** Click **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 1 –** Click the **SIEM** tab.

**Step 2 –** Click **Configure** to configure a SIEM server. See the
[Configure a SIEM Server](#configure-a-siem-server) topic for additional information.

**Step 3 –** Once configured, click **Events** on the **SIEM** tab.

![Netwrix Threat Prevention System Alerting window - SEIM tab](/images/threatprevention/7.4/admin/configuration/systemalerting/seim.webp)

**Step 4 –** Click the button next to Disabled to toggle the setting to **Enabled**.

**Step 5 –** Select an event category (Security, Operations, Configuration, Analytics, Policies) in
the left pane.0

The [Configure a SIEM Server](#configure-a-siem-server) options allows administrators to set a SIEM
mapping file for each type of event category.

**Step 6 –** Check the checkbox for the event/incident/policy for which you want to trigger SIEM
notifications.

**Step 7 –** Click the Select Profile, please option for an event/incident/policy and select a
SEIM Profile from the drop-down menu to assign it to the event/incident/policy.

- For policies, multiple profiles can be assigned by either checking the desired profile(s) or the
  Select All option. Click **OK** in the drop-down menu to confirm the selection.

You can assign a profile to as many events as required.

**Step 8 –** For Analytics, choose whether or not to enable Ongoing Attack Alerts. When checked,
Threat Prevention sends periodic reminders of an ongoing attack if it continues after the initial
notification has been sent.

**Step 9 –** Click **OK** to save the settings.

Threat Prevention now sends SIEM notifications for the selected events/incidents/policies.

## Configure a SIEM Server

Multiple profiles can be created across SIEM servers to serve different alerting functionalities.
Follow the steps to configure one or more SIEM servers for alerting.

![Netwrix Threat Prevention System Alerting window – SEIM tab – Configure SEIM Server](/images/threatprevention/7.4/admin/configuration/systemalerting/seimserver.webp)

**Step 1 –** Click **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 1 –** On the SIEM tab, click **Configure**.

**Step 2 –** In the SIEM Profiles area, click the Add (+) button to create a new SIEM profile. To
rename the default text, select the name string and enter the new profile name.

:::info
For each profile, use a unique name for easy identification.
:::


**Step 3 –** Use the Protocol drop-down menu to select either protocol:

- UDP
- TCP – If selected, the Require SSL/TLS checkbox is displayed. If desired, check this box and
  ensure the certificate is saved in the certificate store.

**Step 4 –** In the Host Address box, provide either an IP address or server name for the SIEM
server.

**Step 5 –** In the Port box, provide the port number to communicate with the SIEM server.

**Step 6 –** Use the Mapping File for Events drop-down menu to select the SIEM product to receive
policy event notifications. The gear icon to the right of the drop-down allows you to import a
custom mapping file. These mapping file formats are specifically designed for policy events.

**Step 7 –** Use the Mapping File for System Alerts drop-down menu to select the SIEM product to
receive Threat Prevention Security, Threat Prevention Operations, and Threat Prevention
Configuration event alerts.

The gear icon to the right of the drop-down allows you to import a custom mapping file. These
mapping file formats are specifically designed for Threat Prevention system events.

**Step 8 –** Use the Mapping File for Authentication Analytics drop-down menu to select the SIEM
product to receive Authentication Analytics incident alerts.

The gear icon to the right of the drop-down allows you to import a custom mapping file. These
mapping file formats are specifically designed for Analytics incidents.

**Step 9 –** _(Optional)_ Use the **Test** button to confirm the configuration settings.

**Step 10 –** Click **OK** to save the settings.

Once a SIEM server is configured, assign it to events using the System Alerting window’s SIEM Tab or
the
[Actions Tab](/docs/threatprevention/7.4/admin/policies/configuration/actions/overview.md)
of a policy or the
[Actions Tab](/docs/threatprevention/7.4/admin/templates/configuration/actions.md) of a
policy template.

**IBM QRadar Integration**

Netwrix has created a custom app for integration between Threat Prevention and QRadar. See the
[Active Directory App for QRadar](/docs/threatprevention/7.4/siemdashboard/qradar/overview.md)
topic for additional information. There is also a custom app for File Activity, that can receive
data from either Threat Prevention or Netwrix Activity Monitor. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

**Splunk Integration**

Netwrix has created custom apps for integration between Threat Prevention and Splunk. See the
[Active Directory App for Splunk](/docs/threatprevention/7.4/siemdashboard/activedirectory/overview.md)
topic and the
[Threat Hunting App for Splunk](/docs/threatprevention/7.4/siemdashboard/threathunting/overview.md)
topic for additional information. There is also a custom app for File Activity, that can receive
data from either Threat Prevention or Netwrix Activity Monitor. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

## Add a Custom SIEM Mapping File

Custom SIEM mapping files can be added. First create the mapping file, and save it in a location
that the Administration Console can access. The default mapping files are stored in the following
folder:

**…\Netwrix\Netwrix Threat Prevention\SIWinConsole\SIEMTemplates\**

Follow the steps to add a custom SIEM mapping file.

![SIEM tab - Gear icon for Custom Mapping File](/images/threatprevention/7.4/admin/configuration/systemalerting/geariconformappingfile.webp)

**Step 1 –** Click **Configuration** > **Alerts** on the menu. The Netwrix Threat Prevention System
Alerting window opens.

**Step 2 –** On the SIEM tab, click **Configure**.

**Step 3 –** Click the **gear icon** next for the alert type to be configured to open the SIEM
Templates window. The new mapping file will only be available for the alert type selected.

![SIEM Templates window](/images/threatprevention/7.4/admin/configuration/systemalerting/siemtemplates.webp)

**Step 4 –** Click **Add** (+) to open the Import SIEM Mapping File window.

![Import SIEM Mapping File window](/images/threatprevention/7.4/admin/configuration/systemalerting/importfile.webp)

**Step 5 –** Select the desired mapping file and click **Open**. The SIEM Mapping File window closes
and the selected mapping file appears in the SIEM Templates window. It is now available in the
drop-down menu. Click **Close**.

**Step 6 –** Click **OK** to save the settings.

The new mapping file can now be selected from the drop-down menu for the selected alert type.
