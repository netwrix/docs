---
title: "Horizontal Movement Attacks"
description: "Horizontal Movement Attacks Analytic Type"
sidebar_position: 90
---

# Horizontal Movement Attacks Analytic Type

The **Horizontal Movement Attacks** analytic type identifies security principals that are accessing
more than the threshold of resources during the specified time interval.

:::info
Configure a subset of accounts and/or servers to monitor to avoid
the excessive volume of event activity that monitoring all of them generates.
:::


| Horizontal Movement Attacks |                     |
| --------------------------- | ------------------------------- |
| Definition                  | User account authentications across multiple network assets in a specified time period    |
| Example                     | Malware uses several techniques to spread its payload during the initial phase of an attack including Pass the Hash, Impersonation, and current session logged on credentials. Regardless of the method, authentication takes place against other targets on the network, triggering a Threat Prevention horizontal movement alert. |
| Trigger                     | Successful or failed authentications of a given account across X number of resources in Y minutes        |
| Recommended Settings        | Configure this analytic to trigger a hit if Threat Prevention monitors successful or failed authentications of a given account across 10 resources in 3 minutes.    |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/8.1/admin/configuration/systemalerting/overview.md).

See the Horizontal Movement Attacks Analytic Data Grid topic for information on event data collected
per incident.

## Configure Horizontal Movement Attacks Analytic Policy

Open the Horizontal Movement Attacks Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the analytic you want. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where you define the analytic trigger
- Policy – Where you add filters, configure additional actions, set a custom schedule, and enable
  the policy

**Settings Tab**

![Horizontal Movement Attacks Analytic Type - Settings tab](/images/threatprevention/8.1/admin/analytics/horizontalattackssettings.webp)

Set the Number of Hosts and the Interval Duration to trigger the incident. The interval duration
uses (hours:minutes) and is capped at 23:59. When successful or failed authentications of a given
account occur across the specified number of hosts within the specified interval duration, Threat
Prevention triggers an incident record.

By default, Threat Prevention caches authentication event data in memory for 24 hours. When an
incident triggers, Threat Prevention saves an incident record to the database along with the events
that triggered the incident. It purges raw authentication event data that didn't contribute to an
incident from memory once that data is more than 24 hours old.

If checked, the Ignore failed logins for unresolved user names option excludes bad user IDs from
contributing to Horizontal Movement Attacks incidents.

**Policy Tab**

![Horizontal Movement Attacks Analytic Type - Policy tab](/images/threatprevention/8.1/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and can't be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter can't be modified.

  - Scope the accounts to include in or exclude from monitoring on the AD Perpetrator filter.
  - \_Optional:\_Scope the protocol to monitor on the Authentication Protocol filter. If you
    enable the analytic on a domain controller, also scope the login type.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’. Otherwise, the option has no effect.
    :::


  - \_Optional:\_Scope the domains to include in or exclude from monitoring on the
    Domains/Servers filter.
  - _Optional:_ Scope the servers to include in or exclude from monitoring on the IP
    Addresses (from) filter, the IP Addresses (to) filter, the Hosts (from) filter, or the Hosts
    (to) filter.

    :::note
    Some authentication events may return only a host name (NetBIOS or FQDN), others
    may return only an IP address. Take this into account when entering
    filter values.
    :::


- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/8.1/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. Analytic policies store the
  event data they collect in memory until an incident triggers. Use _caution_ with the “Send Raw
  Data to SIEM” option, as it sends all event data rather than the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/8.1/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

## Horizontal Movement Attacks Analytic Data Grid

The data grid on the **Horizontal Movement Attacks** node lists one row per incident identified.

![Horizontal Movement Attacks Analytic Type window](/images/threatprevention/8.1/admin/analytics/horizontalmovement.webp)

You can filter the data grid according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/8.1/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacking Account Name – Security principal of the account that triggered the incident

  :::note
  The name displays in red if the attacking account is the Administrator account.
  :::


- Attacking Account SID – Security Identifier of the account used in the event
- First Attempt – Date timestamp of the first monitored event that triggered the incident. Hover
  over the data in this column to view the local time (of the Enterprise Manager) and UTC time
  simultaneously.
- Last Attempt – Date timestamp of the last event that triggered the incident. Hover over the data
  in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Protocol – Protocols used for the monitored operation
- Number of Attempts – Number of attempts monitored during the specified interval matching this rule
- Number of Hosts – Number of hosts accessed during the specified interval matching this rule

Select an incident in the top data grid to view information on the events that triggered the
incident:

- From Host – Name of the originating host
- From Host IP Address – IP address of the originating host
- To Host – Name of the target host
- To Host IP Address – IP address of the target host
- Protocol – Protocols used for the monitored operation
- Access Type – Type of authentication, e.g. RDP, CIFS, etc.
- Status – Detailed information on the error generated by the event
- Detected on DC – Fully-qualified name of the domain controller that detected the event
- Events Count – Number of identical events that occurred in one minute
- Date/Time – Date timestamp of the monitored event. Hover over the data in this column to view the
  local time (of the Enterprise Manager) and UTC time simultaneously.
- Agent Time Logged – Timestamp for when the Agent detected the event. This can be different from
  the Enterprise Manager time (displayed in the Date/Time column) due to latency.

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/8.1/admin/navigation/datagrid.md) topic for additional information.
