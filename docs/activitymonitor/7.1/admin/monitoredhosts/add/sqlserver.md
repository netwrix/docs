---
title: "SQL Server"
description: "SQL Server"
sidebar_position: 150
---

# SQL Server

**Understanding SQL Server Activity Monitoring**

The Activity Monitor provides the ability to feed activity data to other Netwrix products:

- Netwrix Enterprise Auditor

Prior to adding a SQL Server host to the Activity Monitor, the prerequisites for the target
environment must be met. See the
[SQL Server Activity Auditing Configuration](/docs/activitymonitor/7.1/requirements/activityagent/sqlserver-activity.md)
topic for additional information.

:::tip
Remember, the Activity Agent must be deployed to a Windows server that acts as a proxy for
monitoring the target environment.
:::


## Add MS SQL Server Host

Follow the steps to add a SQL Server host to be monitored.

**Step 1 –** In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host
window opens.

![chooseagent](/images/activitymonitor/7.1/admin/monitoredhosts/add/chooseagent.webp)

**Step 2 –** On the Choose Agent page, select the **Agent** to monitor the storage device, then
click **Next**.

![addhost](/images/activitymonitor/7.1/admin/monitoredhosts/add/addhost.webp)

**Step 3 –** On the **Add Host** page, select **MS SQL Server** and enter the **Server name or
address** for the SQL Server host., then click **Next**.

![mssqlserveroptionspage](/images/activitymonitor/7.1/admin/monitoredhosts/add/mssqlserveroptionspage.webp)

**Step 4 –** On the MS SQL Server Options page, configure the following options:

- Enable Audit automatically — Check the box to enable automatic auditing if it is ever disabled
- Open instruction — Opens the **How to create a SQL Login for Monitoring** page. See the SQL Server
  Database section of the
  [SQL Server Activity Auditing Configuration](/docs/activitymonitor/7.1/requirements/activityagent/sqlserver-activity.md)
  topic for additional information.
- User name — Enter the user name for the credentials for the SQL Server
- User password — Enter the password for the credentials for the SQL Server

Click **Connect** to test the settings, then click **Next**.

![configureoperations](/images/activitymonitor/7.1/admin/monitoredhosts/add/configureoperations.webp)

**Step 5 –** On the Configure Operations page, select which SQL Server events to monitor, then click
**Next**.

![SQL Server Objects Page](/images/activitymonitor/7.1/admin/monitoredhosts/add/sqlserverobjects.webp)

**Step 6 –** On the SQL Server Objects page, click **Refresh**. Select the SQL Server objects to be
monitored. Click **Next**.

![sqlserverlogontriggerpage](/images/activitymonitor/7.1/admin/monitoredhosts/add/sqlserverlogontriggerpage.webp)

**Step 7 –** On the SQL Server Logon Trigger page, copy and paste the SQL script into a New Query in
the SQL database. Execute the query to create a logon trigger. Netwrix Activity Monitor will monitor
SQL logon events and obtain IP addresses for connections. The script is:

```
CREATE TRIGGER SBAudit_LOGON_Trigger ON ALL SERVER FOR LOGON AS BEGIN declare @str varchar(max)=cast(EVENTDATA() as varchar(max));raiserror(@str,1,1);END
```

![SQL Server Logon Success](/images/activitymonitor/7.1/admin/monitoredhosts/add/sqlserverlogontriggersuccess.webp)

> Click **Check Status** to see if the trigger is configured properly, then click **Next**.

![configurebasicoptions](/images/activitymonitor/7.1/admin/monitoredhosts/add/configurebasicoptions.webp)

**Step 8 –** On the Configure Basic Options page,

- Period to keep Log files - Activity logs are deleted after the number of days entered. Default is
  set to 10 days.

    :::info
    Keep a minimum of 10 days of activity logs. Raw activity logs should be
    retained to meet an organization’s audit requirements.
    :::


Click **Next**.

![Where To Log The Activity page](/images/activitymonitor/7.1/admin/monitoredhosts/add/wheretologgeneric.webp)

**Step 9 –** On the Where To Log The Activity page, select whether to send the activity to either a
**Log File (TSV)** or **Syslog Server**, then click **Next**.

![fileoutput](/images/activitymonitor/7.1/admin/monitoredhosts/add/fileoutput.webp)

**Step 10 –** If **Log File** is selected on the **Where To Log The Activity** page, the **File
Output** page can be configured.

- Specify output file path – Specify the file path where log files are saved. Click the ellipses
  button (**...**) to open the Windows Explorer to navigate to a folder destination. Click **Test**
  to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days
  entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a
  set amount of Minutes, Hours, or Days.
- This log file is for Enterprise Auditor – Enable this option to have Enterprise Auditor collect
  this monitored host configuration

    :::info
    Identify the configuration to be read by Enterprise Auditor when integration
    is available.
    :::


    - While Activity Monitor can have multiple configurations per host, Enterprise Auditor can only
      read one of them.

![syslogoutput](/images/activitymonitor/7.1/admin/monitoredhosts/add/syslogoutput.webp)

**Step 11 –** If Syslog Server is selected on the **Where To Log The Activity** page, the Syslog
Output page can be configured.

- Syslog server in SERVER[:PORT] format – Type the **Syslog server name** with a SERVER:Port format
  in the textbox.
    - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the
      organization’s environment can resolve the name format used. The Event stream is the activity
      being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the **Syslog protocol** to be used for the Event stream. The drop-down
  menu includes:

    - UDP
    - TCP
    - TLS

    The TCP and TLS protocols add the Message framing drop-down menu. See the
    [Syslog Tab](/docs/activitymonitor/7.1/admin/outputs/syslog/syslog.md) topic
    for additional information.

- The Test button sends a test message to the Syslog server to check the connection. A green check
  mark or red will determine whether the test message has been sent or failed to send. Messages vary
  by Syslog protocol:

    - UDP – Sends a test message and does not verify connection
    - TCP/TLS – Sends test message and verifies connection
    - TLS – Shows error if TLS handshake fails

    See the
    [Syslog Tab](/docs/activitymonitor/7.1/admin/outputs/syslog/syslog.md) topic
    for additional information.

Click **Finish**.

![activitymonitorsqlserverhost](/images/activitymonitor/7.1/admin/monitoredhosts/add/activitymonitorsqlserverhost.webp)

The added SQL Server host is displayed in the monitored hosts table. Once a host has been added for
monitoring, configure the desired ouptuts. See the
[Output for Monitored Hosts](/docs/activitymonitor/7.1/admin/monitoredhosts/output/output.md)
topic for additional information.

## Host Properties for SQL Server

Configuration settings can be edited through the tabs in the host’s Properties window. The
configurable host properties are:

- [MS SQL Server Tab](/docs/activitymonitor/7.1/admin/monitoredhosts/properties/mssqlserver.md)
- [Logon Trigger Tab](/docs/activitymonitor/7.1/admin/monitoredhosts/properties/logontrigger.md)
- [Tweak Options Tab](/docs/activitymonitor/7.1/admin/monitoredhosts/properties/tweakoptions.md)
- [Inactivity Alerts Tab](/docs/activitymonitor/7.1/admin/monitoredhosts/properties/inactivityalerts.md)

See the
[Host Properties Window](/docs/activitymonitor/7.1/admin/monitoredhosts/properties/overview.md)
topic for additional information.
