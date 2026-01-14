---
title: "Concurrent Logins"
description: "Concurrent Logins Analytic Type"
sidebar_position: 50
---

# Concurrent Logins Analytic Type

The **Concurrent Logins** analytic type identifies same account logins from multiple locations
within the specified time frame.

:::info
Configure a subset of accounts and/or servers to be monitored in order to avoid
the excessive volume of event activity from monitoring all.
:::


| Concurrent Logins    |                   |
| -------------------- | ---------------------------- |
| Definition           | Logins from multiple locations simultaneously        |
| Example              | A user does not normally login from multiple locations simultaneously within a short time window. If one or more accounts has been compromised by malware, or in the event of an insider attack, one might see a compromised account authenticating from many systems in parallel and a corresponding analytic alert identifying the account and the authenticating systems. |
| Trigger              | Successful and failed authentications using the same account from at least X hosts in Y minutes              |
| Recommended Settings | Netwrix recommends configuring this analytic to trigger a hit if Threat Prevention monitors either successful or failed authentications using the same account from at least 3 hosts in 1 hour.     |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/8.0/admin/configuration/systemalerting/overview.md).

See the Concurrent Logins Analytic Data Grid topic for information on event data collected per
incident.

## Configure Concurrent Logins Analytic Policy

Open the Concurrent Logins Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the desired analytic. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where the analytic trigger is defined
- Policy – Where filters can be added, additional actions configured, a custom schedule set, and the
  policy enabled

**Settings Tab**

![Concurrent Logins Analytic Type - Settings tab](/images/threatprevention/8.0/admin/analytics/concurrentloginssettings.webp)

Set the Number of Hosts and the Interval Duration that will trigger the incident. The interval
duration is set for (Hours:Minutes) and is capped at 23:59. When the specified number of hosts have
successful logins by the same individual user account within the specified interval duration, it
will trigger an incident record.

By default, authentication event data is cached in memory for 24 hours. When an incident is
triggered, an incident record is saved to the database along with the events that triggered the
incident. Raw authentication event data that did not contribute to an incident are purged from
memory once they are more than 24 hours old.

**Policy Tab**

![Concurrent Logins Analytic Type - Policy tab](/images/threatprevention/8.0/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.0/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and cannot be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter cannot be modified.

  - _Optional:_ Scope the protocol to be monitored on the Authentication Protocol filter. If
    enabling the analytic on a domain controller, also scope the login type.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization be configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’ or it will not have an effect.
    :::


  - _Optional:_ Scope the domains to be included in or excluded from monitoring on the
    Domains/Servers filter.
  - _Optional:_ Scope the accounts to include in or exclude from being monitored on the AD
    Perpetrator filter.
  - _Optional:_ Scope the servers to be included in or excluded from monitoring on the IP
    Addresses (from) filter, the IP Addresses (to) filter, the Hosts (from) filter, or the Hosts
    (to) filter.

    :::note
    Some authentication events may return only a host name (NetBIOS or FQDN), others
    may return only an IP address. It is recommended to take this into account when entering
    filter values.
    :::


- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/8.0/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. The event data collected by
  analytic policies are stored in memory until an incident is triggered. For the “Send Raw Data to
  SIEM” option, use _caution_, as this will send all event data not the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/8.0/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

## Concurrent Logins Analytic Data Grid

The data grid on the **Concurrent Logins** node lists one row per incident identified.

![Concurrent Logins Analytic Type window](/images/threatprevention/8.0/admin/analytics/concurrentlogins.webp)

The data grid can be filtered according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/8.0/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacking Account Name – Security principal of the account that triggered the incident

  :::note
  The name will be red if the attacking account is the Administrator account.
  :::


- Attacking Account SID – Security Identifier of the account used in the event that triggered the
  incident
- Number of Attacking Hosts – Number of hosts the account used during the specified interval
  matching this rule
- First Attempt – Date timestamp of the first monitored event that triggered the incident. Hover
  over the data in this column to view the local time (of the Enterprise Manager) and UTC time
  simultaneously.
- Last Attempt – Date timestamp of the last event that triggered the incident. Hover over the data
  in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Protocols – Protocol(s) used for the monitored operation
- Number of Attempts – Number of attempts monitored during the specified interval matching this rule

Select an incident in the top data grid to view information on the events that triggered the
incident:

- From Host – Name of the originating host
- From Host IP Address – IP address of the originating host
- To Host – Name of the target host
- To Host IP Address – IP address of the target host
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
[ Data Grid Functionality](/docs/threatprevention/8.0/admin/navigation/datagrid.md) topic for additional information.
