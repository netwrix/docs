---
title: "Configure Removable Storage Media for Monitoring"
description: "Configure Removable Storage Media for Monitoring"
sidebar_position: 80
---

# Configure Removable Storage Media for Monitoring

You can configure IT infrastructure for monitoring removable storage media both locally and
remotely.

Review the following for additional information:

- [Configure Removable Storage Media Monitoring on the Local Server](#configure-removable-storage-media-monitoring-on-the-local-server)
- [Configure Removable Storage Media Monitoring Remotely](#configure-removable-storage-media-monitoring-remotely)
- [Review Event Trace Session Object Configuration](#review-event-trace-session-object-configuration)

## Configure Removable Storage Media Monitoring on the Local Server

**Step 1 –** On the target server, create the following folder to store event logs:
_"%ALLUSERSPROFILE%\Netwrix Auditor\Windows Server Audit\ETS\"_. For instructions on how to modify
the root directory, see [Review Event Trace Session Object Configuration](#review-event-trace-session-object-configuration).

:::note
If you do not want to use the Netwrix Auditor for Windows Server Compression Service for data
collection, make sure that this path is readable via any shared resource.
:::

After environment variable substitution, the path is as follows:

`C:\ProgramData\Netwrix Auditor\Windows Server Audit\ETS`

:::note
If your environment variable accesses another directory, update the path.
:::

**Step 2 –** Run the Command Prompt as Administrator.

**Step 3 –** Execute the commands below.

- To create the Event Trace Session object:

    `logman import -n "Session\NetwrixAuditorForWindowsServer" -xml "<path to the EventTraceSessionTemplate.xml file>"`

- To start the Event Trace Session object automatically every time the server starts:

    `logman import -n "AutoSession\NetwrixAuditorForWindowsServer" -xml "<path to the EventTraceSessionTemplate.xml file>"`

    where:

    - `NetwrixAuditorForWindowsServer`—Fixed name the product uses to identify the Event Trace
      Session object. The name cannot be changed.
    - `<path to the EventTraceSessionTemplate.xml file>`—Path to the Event Trace Session
      template file that comes with Netwrix Auditor. The default path is _"C:\Program Files
      (x86)\Netwrix Auditor\Windows Server Auditing\EventTraceSessionTemplate.xml"_.

## Configure Removable Storage Media Monitoring Remotely

**Step 1 –** On the target server, create the following folder to write data to:
_"%ALLUSERSPROFILE%\Netwrix Auditor\Windows Server Audit\ETS\"_. For instructions on how to modify
the root directory, see [Review Event Trace Session Object Configuration](#review-event-trace-session-object-configuration).

:::note
If you do not want to use the Netwrix Auditor for Windows Server Compression Service for data
collection, make sure that this path is readable via any shared resource.
:::

After environment variable substitution, the path is as follows:

`\\<target_server_name>\c$\ProgramData\Netwrix Auditor\Windows Server Audit\ETS`

:::note
If your environment variable accesses another directory, update the path.
:::

**Step 2 –** Run the Command Prompt under the target server Administrator's account.

**Step 3 –** Execute the commands below.

- To create the Event Trace Session object:

    `logman import -n "Session\NetwrixAuditorForWindowsServer" -xml "<path to the EventTraceSessionTemplate.xml file>" -s <target server name>`

- To create the Event Trace Session object automatically every time the server starts:

    `logman import -n "AutoSession\NetwrixAuditorForWindowsServer" -xml "<path to the EventTraceSessionTemplate.xml file>" -s <target server name>`

    where:

    - `NetwrixAuditorForWindowsServer`—Fixed name the product uses to identify the Event Trace
      Session object. The name cannot be changed.
    - `<path to the EventTraceSessionTemplate.xml file>`—Path to the Event Trace Session
      template file that comes with Netwrix Auditor. The default path is _"C:\Program Files
      (x86)\Netwrix Auditor\Windows Server Auditing\EventTraceSessionTemplate.xml"_.
    - `<target server name>`—Name of the target server. Provide a server name by entering its
      FQDN, NETBIOS or IPv4 address.

## Review Event Trace Session Object Configuration

:::note
An Administrator can only modify the root directory and log file name. Other configurations are not
supported by Netwrix Auditor.
:::

**Step 1 –** On the target server, navigate to Start → Administrative Tools → Performance Monitor.

**Step 2 –** In the Performance Monitor snap-in, navigate to Performance → Data Collectors Set →
Event Trace Sessions.

**Step 3 –** Stop the NetwrixAuditorForWindowsServer object.

**Step 4 –** Locate the NetwrixAuditorForWindowsServer object, right-click it and select
**Properties**. Complete the following fields:

| Option | Description |
| --- | --- |
| Directory → Root Directory | Path to the directory where the event log is stored. To change the root directory: <br/>1. Under the Root directory option, click **Browse** and select a new root directory. <br/>2. Navigate to _C:\ProgramData\Netwrix Auditor\Windows Server Audit_ and copy the ETS folder to the new location. |
| File → Log file name | Name of the event log where the events are stored. |

**Step 5 –** Start the NetwrixAuditorForWindowsServer object.

**Step 6 –** In the Performance Monitor snap-in, navigate to Performance → Data Collectors Set →
Startup Event Trace Sessions.

**Step 7 –** Locate the NetwrixAuditorForWindowsServer object, right-click it and select
**Properties**. Complete the following fields:

| Option | Description |
| --- | --- |
| Directory → Root Directory | Path to the directory where the event log is stored. Under the Root directory option, click **Browse** and select a new root directory. |
| File → Log file name | Name of the event log where the events are stored. |
