---
title: "Brute Force Attacks"
description: "Brute Force Attacks Analytic Type"
sidebar_position: 40
---

# Brute Force Attacks Analytic Type

The **Brute Force Attacks** analytic type identifies failed attempts from a single host to access a
given host.

:::info
Configure a subset of servers to be monitored in order to avoid the excessive
volume of event activity from monitoring all servers.
:::


| Brute Force Attacks  |                  |
| -------------------- | ---------------------- |
| Definition           | Repeated failed authentications against systems and other network assets in a specified time range     |
| Example              | Malware or a bad actor on the network is attempting to gain access to a system, application, or data resource such as a file share by sequentially leveraging multiple user accounts and their credentials until they gain access |
| Trigger              | X failed logins from a single host against a single host in Y minutes    |
| Recommended Settings | Configure this analytic to trigger a hit if Threat Prevention monitors at least 40 failed logins from a single host against a single host in 3 minutes.            |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).

See the Brute Force Attacks Analytic Data Grid topic for information on event data collected per
incident.

## Configure Brute Force Attacks Analytic Policy

Open the Brute Force Attacks Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the desired analytic. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where the analytic trigger is defined
- Policy – Where filters can be added, additional actions configured, a custom schedule set, and the
  policy enabled

**Settings Tab**

![Brute Force Attacks Analytic Type - Settings tab](/images/threatprevention/7.5/admin/analytics/bruteforceattackssettings.webp)

Set the Number of Failed Attempts preceding a successful login and the Interval Duration that will
trigger the incident. The interval duration is set for (Hours:Minutes) and is capped at 23:59. When
the specified number of failed logins have occurred from a single host against a single host within
the specified interval duration, it will trigger an incident record.

By default, authentication event data is cached in memory for 24 hours. When an incident is
triggered, an incident record is saved to the database along with the events that triggered the
incident. Raw authentication event data that did not contribute to an incident are purged from
memory once they are more than 24 hours old.

Click the **Configure Hosts** link to open the **Policy** > **Event Type** > **Hosts (to)** filter.

If checked, the **Ignore failed logins for unresolved user names** option will exclude bad user IDs
from contributing to Brute Force Attacks incidents.

**Policy Tab**

![Brute Force Attacks Analytic Type - Policy tab](/images/threatprevention/7.5/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/7.5/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and cannot be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter cannot be modified.

  - Scope the servers to be included in or excluded from monitoring on the IP Addresses (from)
    filter, the IP Addresses (to) filter, the Hosts (from) filter, or the Hosts (to) filter.

    :::note
    Some authentication events may return only a host name (NetBIOS or FQDN), others
    may return only an IP address. It is recommended to take this into account when entering
    filter values.
    :::


  - *Alternatively:* Scope the domains to be included in or excluded from monitoring on the
    Domains/Servers filter.
  - _Optional:_ Scope the protocol to be monitored on the Authentication Protocol filter. If
    enabling the analytic on a domain controller, also scope the login type.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization be configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’ or it will not have an effect.
    :::


  - _Optional:_ Scope the accounts to include in or exclude from being monitored on the AD
    Perpetrator filter.

- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/7.5/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. The event data collected by
  analytic policies are stored in memory until an incident is triggered. For the “Send Raw Data to
  SIEM” option, use _caution_, as this will send all event data not the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

## Brute Force Attacks Analytic Data Grid

The data grid on the **Brute Force Attacks** node lists one row per incident identified.

![Brute Force Attacks Analytic Type window](/images/threatprevention/7.5/admin/analytics/bruteforce.webp)

The data grid can be filtered according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/7.5/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacking Host – Name of the originating host
- Attacking Host IP Address – IP address of the originating host
- Attacked Host – Name of the target host
- Attacked Host IP Address – IP address of the target host
- First Attempt – Date timestamp of the first monitored event that triggered the incident. Hover
  over the data in this column to view the local time (of the Enterprise Manager) and UTC time
  simultaneously.
- Last Attempt – Date timestamp of the last event that triggered the incident. Hover over the data
  in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Number of Attempts – Number of attempts monitored during the specified interval matching this rule
- Protocols – Protocol(s) used for the monitored operation

Select an incident in the top data grid to view information on the events that triggered the
incident:

- Account – Security principal of the account that triggered the event
- Account SID – Security Identifier of the account used in the event
- Protocol – Protocol(s) used for the monitored operation
- Access Type – Type of authentication, e.g. RDP, CIFS, etc.
- Status – Detailed information on the error generated by the event
- Detected on DC – Fully-qualified name of the domain controller that detected the event
- Events Count – Number of identical events that occurred in one minute
- Date/Time – Date timestamp of the monitored event. Hover over the data in this column to view the
  local time (of the Enterprise Manager) and UTC time simultaneously.
- Agent Time Logged – Timestamp for when the Agent detected the event. This can be different from
  the Enterprise Manager time (displayed in the Date/Time column) due to latency.

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/7.5/admin/navigation/datagrid.md) topic for additional information.
