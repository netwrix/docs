---
title: "File System Attacks (by User)"
description: "File System Attacks (by User) Analytic Type"
sidebar_position: 60
---

# File System Attacks (by User) Analytic Type

The **File System Attacks (by user)** analytic type identifies activity where a significant number
of file changes made by an account occurred in a short time period. Only the paths you select will
be monitored. It is **REQUIRED** to configure at least one path to enable this analytic. Selected
paths are specific to the server for which they were selected.

If desired, the analytic can be configured to lockdown the monitored file system resource from
‘perpetrators’ who trigger an incident. This feature is only available on Windows file systems.

| File System Attacks (by user) |                     |
| ----------------------------- | ------------------------ |
| Definition                    | Significant number of file changes made by an account in a short time period. Optionally block the perpetrator that triggers an incident by selecting the Enable Automatic Lockdown option.        |
| Example                       | Malware or a bad actor is attempting to delete/modify (such as encrypt) or copy large numbers of files residing locally or on the network, in order to prevent access to or steal file system data. In the case of a ransomware attack, end user files are typically targeted (such as documents, spreadsheets, presentations, etc.), which is followed by a warning to pay a ransom or the files will be erased. This analytic will identify unusual/abnormally high levels of file activity in a short timeframe, and trigger a file system attack alert as a result. |
| Trigger                       | X number of files changed by an account in Y minutes     |
| Recommended Settings          | Netwrix recommends configuring this analytic to trigger a hit if Threat Prevention monitors 500 files affected in 3 minutes.       |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/8.0/admin/configuration/systemalerting/overview.md).

See the File System Attacks (by User) Analytic Data Grid topic for information on event data
collected per incident.

## Configure File System Attacks (by User) Analytic Policy

Open the File System Attacks (by user) Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the desired analytic. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where the analytic trigger is defined
- Policy – Where filters can be added, additional actions configured, a custom schedule set, and the
  policy enabled

**Settings Tab**

![File System Attacks (by User) Analytic Type - Settings tab](/images/threatprevention/8.0/admin/analytics/filesystemattackssettings.webp)

Set the Number of Accessed Files and the Interval Duration that will trigger the incident. The
interval duration is set for (Hours:Minutes) and is capped at 1:00. When a particular user causes
the specified number of file changes to occur within the specified interval duration, it will
trigger an incident record.

By default, file event data is cached in memory for 1 hour. When an incident is triggered, an
incident record is saved to the database along with the events that triggered the incident. Raw file
event data that did not contribute to an incident are purged from memory once they are more than 1
hour old.

After an incident has been triggered, the next event will reset the interval timer. The event data
will continue to be added to the incident until the incident is closed. An incident is only closed
once no additional file event data arrives within the specified timeframe.

The File System Attacks (by user) Analytic Policy can be configured to enable automatic blocking of
perpetrators who trigger an incident. Check the Enable Automatic Lockdown box and click **Save**.
This will add the File System Lockdown Event Type to the analytic policy. After enabling this
feature, the **Modify Lockdown Perpetrators** link will redirect you to the **Policy** > **Event
Type: File System Lockdown** > **AD Perpetrator (for Lockdown)** filter. As incidents occur,
perpetrators of the triggering events will be added to the AD Perpetrators (for Lockdown) filter
list and blocked from initiating future events.

**Policy Tab for Monitoring Only**

![File System Attacks (by User) Analytic Type - Policy tab for Monitoring Only](/images/threatprevention/8.0/admin/analytics/policytabfsmonitoring.webp)

The **Policy** tab for configuring analytics consists of the following sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.0/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and cannot be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/overview.md) is configured. For monitoring only, it
  contains the File System Changes event type. The only exception is that the Success filter cannot
  be modified.

  - **Required:** Configure the File System Paths filter for Paths and Path Collections. This
    analytic requires that you specify at least one path for file system location monitoring.
    Multiple paths and/or collections can be included and excluded, along with the option to
    monitor sub-folders.

    :::tip
        Remember, if no path is provided, an error message displays when the analytic policy is
    enabled: The “File System Analytic” policy must have at least one path to monitor defined.
    :::


  - _Optional:_ Scope the operations being monitored on the File System filter. The default is to
    monitor Write and Rename operations.

    :::info
    Do not scope to include Read operations due to the quantity of files read
    within an organization.
    :::


  - _Optional:_ Scope the monitoring Agents to use for monitoring on the Additional Agents filter.
  - _Optional:_ Scope the accounts to include in or exclude from being monitored on the AD
    Perpetrator filter.

- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/8.0/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. The event data collected by
  analytic policies are stored in memory until an incident is triggered. For the “Send Raw Data to
  SIEM” option, use _caution_, as this will send all event data not the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/8.0/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

**Policy Tab for Monitoring & Lockdown**

![File System Attacks (by User) Analytic Type - Policy tab for Monitoring and Lockdown](/images/threatprevention/8.0/admin/analytics/policytabfsmonitoringlockdown.webp)

When the **Enable Automatic Lockdown** option is selected on the **Settings** tab, the **Policy**
tab > **Event Type** tab includes both the File System Lockdown Event Type and the File System
Changes Event Type.

The **Policy** tab for configuring analytics consists of the following sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.0/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and cannot be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/overview.md) is configured. It contains both the
  [File System Lockdown Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemlockdown.md) and the
  [File System Changes Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/filesystemchanges/filesystemchanges.md). The only exception
  is that for the Lockdown Event Type, the File System filter is hard coded to mirror the
  configuration of the File System Changes Event Type settings.

  - _Optional:_ Scope the monitoring Agents to use for monitoring on the Additional Agents filter.
  - The AD Perpetrator filter for Lockdown will auto-populate with perpetrators of the triggering
    events. The list is hard coded to be a ‘blocking’ list, not an ‘allow’ list.

    - _Optional:_ Scope the accounts to block additional perpetrators.
    - _Optional:_ Remove accounts that are being blocked from the list.

      :::note
      Perpetrators manually removed from the list may be automatically re-added if
      they trigger another incident
      :::


- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/8.0/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. The event data collected by
  analytic policies are stored in memory until an incident is triggered. For the “Send Raw Data to
  SIEM” option, use _caution_, as this will send all event data not the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/8.0/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

## File System Attacks (by User) Analytic Data Grid

The data grid on the **File System Attacks (by user)** node lists one row per incident identified.

![File System Attacks (by User) Analytic Type window](/images/threatprevention/8.0/admin/analytics/fsattacks.webp)

The data grid can be filtered according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/8.0/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacking Account Name – Security principal of the account that triggered the incident

  :::note
  The name will be red if the attacking account is the Administrator account.
  :::


- Attacking Account SID – Security Identifier of the account used in the event
- First Attempt – Date timestamp of the first monitored event Hover over the data in this column to
  view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Last Attempt – Date timestamp of the last event that triggered the incident Hover over the data in
  this column to view the local time (of the Enterprise Manager) and UTC time simultaneously..
- Number of Files – Number of affected files monitored, sum of both the events which triggered the
  incident and the events that have occurred before the incident closes
- Number of Events – Number of events monitored, sum of both the events which triggered the incident
  and the events that have occurred before the incident closes
- Attacked Host Count – Number of hosts accessed during the specified interval matching this rule ,
  sum of both the events that triggered the incident and the events that have occurred before the
  incident closes
- Attacked Share Count – Number of affected shares monitored, sum of both the events which triggered
  the incident and the events that have occurred before the incident closes
- Primary Attacked Host – Name of the target host with the highest number of events at the time the
  incident was triggered. It does not update after the incident is triggered.
- Primary Attacked Share – Name of the affected share on the primary attacked host with the highest
  number of events at the time the incident was triggered. It does not update after the incident is
  triggered.
- Primary Attacked Folder – Name of the affected folder on the primary attacked share with the
  highest number of events at the time the incident was triggered. It does not update after the
  incident is triggered.

Select an incident in the top data grid to view information on the events that triggered the :

- Agent: Domain – Active Directory domain where the Agent that monitored/blocked the event is
  deployed
- Affected Object: Host – Name of the host the security principal is trying to access
- Affected Object: IP Address – IP address of the host where the affected object resides
- Affected Object: Class – Active Directory class of the affected object and indicates if the event
  occurred against a file or folder
- Affected Object: Path – Original path of the affected file or folder
- Affected Object: New Path – New path of the affected file or folder
- Event: Name – Type of event monitored/blocked. The event name will be red if the event was blocked
  by the auto-blocking feature.
- Perpetrator: Process Name – Identifies remotely accessed objects with “system” or the name of
  process for locally accessed objects
- Perpetrator: Host – Name of the originating host
- Perpetrator: IP Address – IP address of the originating host. It will be blank if the affected
  host has an operating system older than Windows Server 2008 R2.
- Perpetrator: Protocol – Name of the share where the operation was monitored/blocked. It will be
  blank if the affected host has an operating system older than Windows Server 2008 R2.
- Date/Time – Date timestamp of the monitored event. Hover over the data in this column to view the
  local time (of the Enterprise Manager) and UTC time simultaneously.
- Agent Time Logged – Timestamp for when the Agent detected the event. This can be different from
  the Enterprise Manager time (displayed in the Date/Time column) due to latency.

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/8.0/admin/navigation/datagrid.md) topic for additional information.
