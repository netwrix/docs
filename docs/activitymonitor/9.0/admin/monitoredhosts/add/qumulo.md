---
title: "Qumulo"
description: "Qumulo"
sidebar_position: 120
---

# Qumulo

**Understanding File Activity Monitoring**

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of
  values

It provides the ability to feed activity data to SIEM products. The following dashboards have been
specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the
  [Netwrix File Activity Monitor App for QRadar](/docs/activitymonitor/9.0/siem/qradar/overview.md) for additional
  information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/docs/activitymonitor/9.0/siem/splunk/overview.md) for
  additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Access Analyzer
- Netwrix Threat Prevention
- Netwrix Threat Manager

Prior to adding a Qumulo host to the Activity Monitor, the prerequisites for the target environment
must be met. See the [Qumulo Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/qumulo-activity.md)
topic for additional information.

:::tip
Remember, the Activity Agent must be deployed to a Windows server that acts as a proxy for
monitoring the target environment.
:::


## Add Qumulo Host

Follow the steps to add a Qumulo host to be monitored.

**Step 1 –** In Activity Monitor, go to the Monitored Hosts & Services tab and click **Add**. The Add New Host
window opens.

![addagent01](/images/activitymonitor/9.0/admin/monitoredhosts/add/addagent01.webp)

**Step 2 –** On the Choose Agent page, select the Agent to monitor the file server from the
drop-down list. Click **Next**.

![addhostqumulo01](/images/activitymonitor/9.0/admin/monitoredhosts/add/addhostqumulo01.webp)

**Step 3 –** On the Add Host page, select the **Qumulo** radio button and enter the file server
name. Click **Next**.

![addhostqumulo02](/images/activitymonitor/9.0/admin/monitoredhosts/add/addhostqumulo02.webp)

**Step 4 –** On the Qumulo Options page, enter the user name and password.

- Protocol – Select from the following options in the drop-down list:
    - Auto Detect
    - HTTPS
    - HTTPS, ignore certificate errors
- Connect – Click **Connect** to connect to the Qumulo device using the selected protocol and
  validate the connection.

The following values are shown for information purposes. You can use them to configure auditing in
Qumulo.

- Syslog Address – Address to configure Qumulo cluster.
- Port – Port to configure Qumulo cluster.

Click **Next**.

![nutanixoptions_07](/images/activitymonitor/9.0/admin/monitoredhosts/add/nutanixoptions_07.webp)

**Step 5 –** On the Where To Log The Activity page, select whether to send the activity to either a
Log File or Syslog Server. Click **Next**.

:::note
An option must be selected before moving to the next step.
:::


![addhostqumulo04](/images/activitymonitor/9.0/admin/monitoredhosts/add/addhostqumulo04.webp)

**Step 6 –** If Log File is selected on the Where To Log The Activity page, configure the File
Output page.

- Specify output file path – Specify the file path where TSV log files are saved on the agent's
  server. Click the ellipses button (...) to open the Windows Explorer to navigate to a folder
  destination. Click **Test** to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered as the number of
  days elapses. The default is 10 days. Use the dropdown to specify whether to keep the Log files
  for a set number of Hours or Days.
- This log file is for Access Analyzer – Enable this option to have Access Analyzer collect this
  monitored host configuration

    :::info
    Identify the configuration to be read by Access Analyzer when integration is
    available.
    :::


    :::note
    While Activity Monitor can have multiple configurations for log file outputs per host,
    Access Analyzer can only read one of them.
    :::


- Add header to Log files – Adds headers to TSV files. This is used to feed data into Splunk.

    :::note
    Access Analyzer does not support log files with the header.
    :::


Click **Next**.

![nutanixoptions_09](/images/activitymonitor/9.0/admin/monitoredhosts/add/nutanixoptions_09.webp)

**Step 7 –** If Syslog Server is selected on the Where To Log The Activity page, configure the
Syslog Output page.

- Syslog server in SERVER[:PORT] format – Type the **Syslog server name** with a SERVER:Port format
  in the textbox.
    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used.
- Syslog Protocol – Identify the **Syslog protocol** to be used for the Event stream. The drop-down
  menu includes:

    - UDP
    - TCP
    - TLS

    The TCP and TLS protocols add the **Message framing** drop-down menu. See the
    [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md) topic for additional information.

- The Test button sends a test message to the Syslog server to check the connection. A green check
  mark or red will determine whether the test message has been sent or failed to send. Messages vary
  by Syslog protocol:

    - UDP – Sends a test message and does not verify connection
    - TCP/TLS – Sends test message and verifies connection
    - TLS – Shows error if TLS handshake fails

    See the [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md) topic for additional information.

Click **Finish**.

![addhostqumulo06](/images/activitymonitor/9.0/admin/monitoredhosts/add/addhostqumulo06.webp)

The added Qumulo host is displayed in the monitored hosts/services table. Once a host has been added for
monitoring, configure the desired outputs. See the [Output for Monitored Hosts](/docs/activitymonitor/9.0/admin/monitoredhosts/output/output.md) topic
for additional information.

## Host Properties for Qumulo

Configuration settings can be edited through the tabs in the host’s Properties window. The
configurable host properties are:

- [Qumulo Tab](/docs/activitymonitor/9.0/admin/monitoredhosts/properties/qumulo.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/9.0/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/activitymonitor/9.0/admin/monitoredhosts/properties/overview.md) topic for additional information.
