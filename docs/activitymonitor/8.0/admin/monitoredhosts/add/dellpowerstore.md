---
title: "Dell PowerStore"
description: "Dell PowerStore"
sidebar_position: 30
---

# Dell PowerStore

**Understanding File Activity Monitoring**

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of
  values

It provides the ability to feed activity data to SIEM products. The following dashboards have been
specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the
  [Netwrix File Activity Monitor App for QRadar](/docs/activitymonitor/8.0/siem/qradar/overview.md) for additional
  information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/docs/activitymonitor/8.0/siem/splunk/overview.md) for
  additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Threat Prevention
- Netwrix Threat Manager

Prior to adding a Dell PowerStore host to the Activity Monitor, the prerequisites for the target
environment must be met. See the
[Dell PowerStore Activity Auditing Configuration](/docs/activitymonitor/8.0/requirements/activityagent/nas-device-configuration/powerstore-aac/powerstore-activity.md)
topic for additional information.

:::tip
Remember, the Activity Agent must be deployed to a Windows server that acts as a proxy for
monitoring the target environment.
:::


## Add Dell PowerStore Host

Follow the steps to add a Dell PowerStore host to be monitored.

**Step 1 –** In Activity Monitor, go to the Monitored Hosts tab and click **Add**. The Add New Host
window opens.

![addagent01](/images/activitymonitor/8.0/admin/monitoredhosts/add/addagent01.webp)

**Step 2 –** On the **Choose Agent** page, select the Agent to monitor the file server.
Click**Next**.

![powerstoreaddhost01](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost01.webp)

**Step 3 –** On the Add Host page, select the Dell PowerStore radio button and enter the file server
name. Click **Next**.

:::note
All Dell event source types must have the CEE Monitor Service installed on the agent in
order to collect events. Activity Monitor will detect if the CEE Monitor is not installed and
display a warning to install the service. If the CEE Monitor service is installed on a remote
machine, manual configuration is required. See the
[Dell CEE Options Tab](/docs/activitymonitor/8.0/admin/agents/properties/dellceeoptions.md) topic for additional information.
:::


![powerstoreaddhost02](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost02.webp)

**Step 4 –** On the Protocols page, specify the protocols to monitor. The list of protocols that can
be monitored are, All, CIFS, or NFS. Once a protocol is selected, click **Next**.

![powerstoreaddhost03](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost03.webp)

**Step 5 –** On the Configure Operations page, select the File Operations and Directory Operations
to be monitored.

- Suppress reporting of File Explorer's excessive directory traversal activity – Filters out events
  of excessive directory traversal in File Explorer.

Click **Next**.

![powerstoreaddhost04](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost04.webp)

**Step 6 –** On the Configure Basic Operations page, choose which settings to enable. Select one of
the following options:

- Report account names – Adds an Account Name column in the generated TSV files.
- Add C:\ to the beginning of the reported file paths – Adds ‘C:\” to file paths to be displayed
  like a Windows file path:
    - Display example if checked – C:\Folder\file.txt
    - Display example if unchecked – /Folder/file.text
- Report UNC paths – Adds a UNC Path column and a Rename UNC Path column in the generated TSV files
    - This option corresponds to the REPORT_UNC_PATH parameter in the INI file. It is disabled by
      default. The UNC Path is in the following format:
        - For CIFS activity – `\\[HOST]\[SHARE]\[PATH]`
        - Example CIFS activity – `\\ExampleHost\TestShare\DocTeam\Temp.txt`
        - For NFS activity – `[HOST]:/[VOLUME]/[PATH]`
        - Example NFS activity – `ExampleHost:/ExampleVolume/DocTeam/Temp.txt`
    - When the option is enabled, the added columns are populated when a file is accessed remotely
      through the UNC Path. These columns have also been added as Syslog macros.
- Report operations with millisecond precision – Changes the timestamps of events being recorded in
  the TSV log file for better ordering of events if multiple events occur within the same second.

Click **Next**.

![powerstoreaddhost05](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost05.webp)

**Step 7 –** On the Where to log the activity page, select whether to send the activity to either a
Log File or Syslog Server. Click **Next**.

:::note
An option must be selected before moving to the next step.
:::


![powerstoreaddhost06](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost06.webp)

**Step 8 –** If Log File is selected on the Where To Log The Activity page, the File Output page can
be configured.

- Specify output file path – Specify the file path where TSV log files are saved on the agent's
  server. Click the ellipses button (...) to open the Windows Explorer to navigate to a folder
  destination. Click **Test** to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered as the number of
  days elapses. The default is 10 days. Use the dropdown to specify whether to keep the Log files
  for a set amount of Minutes, Hours, or Days. This retention setting applies both to the local
  files on the agent's server and to the archived files.
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

![powerstoreaddhost07](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost07.webp)

**Step 9 –** If Syslog Server is selected on the Where To Log The Activity page, the Syslog Output
page can be configured.

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
    [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md) topic for additional information.

- The Test button sends a test message to the Syslog server to check the connection. A green check
  mark or red will determine whether the test message has been sent or failed to send. Messages vary
  by Syslog protocol:

    - UDP – Sends a test message and does not verify connection
    - TCP/TLS – Sends test message and verifies connection
    - TLS – Shows error if TLS handshake fails

    See the [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md) topic for additional information.

Click **Finish**.

![powerstoreaddhost08](/images/activitymonitor/8.0/admin/monitoredhosts/add/powerstoreaddhost08.webp)

The added Dell PowerStore host is displayed in the monitored hosts table. Once a host has been added
for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/activitymonitor/8.0/admin/monitoredhosts/output/output.md)
topic for additional information.

## Host Properties for Dell PowerStore

Configuration settings can be edited through the tabs in the host’s Properties window. The
configurable host properties are:

- [Dell Tab](/docs/activitymonitor/8.0/admin/monitoredhosts/properties/dell.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/8.0/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/activitymonitor/8.0/admin/monitoredhosts/properties/overview.md) topic for additional information.
