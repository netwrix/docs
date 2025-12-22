---
title: "Log Files Tab"
description: "Log Files Tab"
sidebar_position: 40
---

# Log Files Tab

The Log Files tab on an output Properties window is where the activity log settings can be modified.
These settings are initially configured when the output is added.

Select a File output from either the Monitored Domains tab or the Monitored Hosts tab and click
**Edit** to open the output Properties window. The tab varies based on the type of domain/host
selected.

## For Active Directory Domains

The tab contains the following settings:

![logfilesactivedirectory](/images/activitymonitor/8.0/admin/outputs/logfilesactivedirectory.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days. The Active Directory activity log settings also affect log size by controlling the
  information recorded per event.

    :::note
    This setting effects activity log retention whether or not the archiving feature is
    enabled.
    :::


    :::info
    Keep a minimum of 10 days of activity logs. Raw activity logs should be
    retained to meet an organization’s audit requirements.
    :::


- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

    :::note
    While the Activity Monitor can have multiple configurations per host, Netwrix Access
    Analyzer (formerly Enterprise Auditor)can only read one of them.
    :::


- Enable periodic AD Status Check event reporting – Indicates periodic AD Status Check event
  reporting is enabled, which means the agent will send out status messages every five minutes to
  verify whether the connection is still active.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For File Server and NAS Device Hosts

The tab contains the following settings:

![Log File Tab - Windows File servers and NAS devices hosts](/images/activitymonitor/8.0/admin/outputs/windowsfilenasdevices.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

    :::note
    This setting effects activity log retention whether or not the archiving feature is
    enabled.
    :::


    :::info
    Keep a minimum of 10 days of activity logs. Raw activity logs should be
    retained to meet an organization’s audit requirements.
    :::


    - For integration with Netwrix Access Analyzer (formerly Enterprise Auditor) File System
      Solution, this value must be higher than the number of days between the 0.Collection > 1-FSAC
      System Scans Job scans. See the
      [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
      for additional information.
    - For integration with Netwrix Threat Prevention NAS monitoring, this setting only controls the
      log retention period for NAS devices, as Netwrix Threat Prevention does not read Windows file
      server activity from Activity Monitor.

- Report account names – Indicates if an Account Name column is added in the activity log files
- Add header to Log files – Indicates if headers are added in the activity log filesAdd header to
  Log files – Indicates if headers are added in the activity log files

    :::note
    This is needed to feed data into Splunk in a Syslog output. However, Netwrix Access
    Analyzer (formerly Enterprise Auditor) does not support log files with headers. Therefore, do
    not select this option for a File output designed for Netwrix Access Analyzer (formerly
    Enterprise Auditor).
    :::


- Report UNC paths – Indicates if a UNC Path column and a Rename UNC Path column are added in the
  activity log files. This option corresponds to the REPORT_UNC_PATH parameter in the INI file. When
  the option is enabled, the added columns are populated when a file is accessed remotely through
  the UNC Path. If a file is accessed locally, these columns are empty.

    - The UNC Path is in the following format:

        - For CIFS activity – The path is in `\\[HOST]\[SHARE]\[PATH]` format, e.g.
          `\\ExampleHost\TestShare\DocTeam\Temp.txt`
        - For NFS activity – The path is in `[HOST]:/[VOLUME]/[PATH] `format, e.g.
          `ExampleHost:/ExampleVolume/DocTeam/Temp.txt`

    :::note
    When this option is selected, a warning message might be displayed.
    :::


- Report operations with millisecond precision – Indicates the timestamps of events being recorded
  in the activity log file has been changed for better ordering of events if multiple events occur
  within the same second
- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

    :::note
    While the Activity Monitor can have multiple configurations per host, Netwrix Access
    Analyzer (formerly Enterprise Auditor)can only read one of them.
    :::


Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Linux Hosts

The tab contains the following settings:

![Log Files Tab for Linux Hosts](/images/activitymonitor/8.0/admin/outputs/linux.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

    :::note
    This setting effects activity log retention whether or not the archiving feature is
    enabled.
    :::


    :::info
    Keep a minimum of 10 days of activity logs. Raw activity logs should be
    retained to meet an organization’s audit requirements.
    :::


- Add header to Log files – Indicates if headers are added in the activity log filesAdd header to
  Log files – Indicates if headers are added in the activity log files

    :::note
    This is needed to feed data into Splunk in a Syslog output. However, Netwrix Access
    Analyzer (formerly Enterprise Auditor) does not support log files with headers. Therefore, do
    not select this option for a File output designed for Netwrix Access Analyzer (formerly
    Enterprise Auditor).
    :::


- Add C:\ to the beginning of the reported file paths – Adds C:\ to the beginning of the reported
  file paths in the activity log file
- Report UNC paths – Indicates if a UNC Path column and a Rename UNC Path column are added in the
  activity log files. This option corresponds to the REPORT_UNC_PATH parameter in the INI file. When
  the option is enabled, the added columns are populated when a file is accessed remotely through
  the UNC Path. If a file is accessed locally, these columns are empty.
- Report operations with millisecond precision – Indicates the timestamps of events being recorded
  in the activity log file has been changed for better ordering of events if multiple events occur
  within the same second
- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

    :::note
    While the Activity Monitor can have multiple configurations per host, Netwrix Access
    Analyzer (formerly Enterprise Auditor)can only read one of them.
    :::


Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For Microsoft Entra ID, SharePoint Online, and SQL Server Hosts

The tab contains the following settings:

![Log File Tab - Azure Active Directory](/images/activitymonitor/8.0/admin/outputs/azuread.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

    :::note
    This setting effects activity log retention whether or not the archiving feature is
    enabled.
    :::


    :::info
    Keep a minimum of 10 days of activity logs. Raw activity logs should be
    retained to meet an organization’s audit requirements.
    :::


- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

    :::note
    While the Activity Monitor can have multiple configurations per host, Netwrix Access
    Analyzer (formerly Enterprise Auditor)can only read one of them.
    :::


Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Hosts

The tab contains the following settings:

![Log File Tab - SharePoint On-Premises hosts](/images/activitymonitor/8.0/admin/outputs/sharepointonprem.webp)

- Log file path – Identifies the full path of the activity log files on the activity agent server.
  The date timestamp is appended to the file name automatically.
- Log file format – Indicates the file type used for the activity log. The default is JSON. See
  [SharePoint JSON Log File](/docs/activitymonitor/8.0/admin/monitoredhosts/output/sharepointjson.md) topic and the
  [SharePoint TSV Log File](/docs/activitymonitor/8.0/admin/monitoredhosts/output/sharepointtsv.md) topic for additional information.
- Period to keep Log files – Activity logs are deleted after the number of days entered. The default
  is 10 days.

    :::note
    This setting effects activity log retention whether or not the archiving feature is
    enabled.
    :::


    :::info
    Keep a minimum of 10 days of activity logs. Raw activity logs should be
    retained to meet an organization’s audit requirements.
    :::


- This log file is for Netwrix Access Analyzer (formerly Enterprise Auditor) (StealthAUDIT) –
  Indicates whether Netwrix Access Analyzer (formerly Enterprise Auditor) collect the data from this
  configured output

    :::note
    While the Activity Monitor can have multiple configurations per host, Netwrix Access
    Analyzer (formerly Enterprise Auditor)can only read one of them.
    :::


Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.
