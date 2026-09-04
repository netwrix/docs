---
title: "Bad User ID (by Source Host)"
description: "Bad User ID (by Source Host) Analytic Type"
sidebar_position: 10
---

# Bad User ID (by Source Host) Analytic Type

The **Bad User ID (by source host)** analytic type identifies pre-authentication failures due to
using account names that don't exist in Active Directory. Threat Prevention groups these incidents
per source host. Every time a previously unseen machine is the source of a failed login due to a bad
user name, Threat Prevention stores an incident in the database. The attempt count increments each
time that same machine attempts to authenticate with a bad user name, until the specified day limit
expires. After the time expires, any additional attempt generates a new incident. This lets you
report on the number of times a particular host used bad user accounts to try to log in during
the time frame.

:::info
Configure the day limit to 30 days.
:::


| Bad User ID (by source host) |                       |
| ---------------------------- | -------------------------- |
| Definition                   | Pre-authentication failures using one or more non-existing user IDs       |
| Example                      | Similar to the “Bad User ID (by User)” analytic type, this analytic looks for multiple failed authentications against non-existing accounts, but from a single source host. This analytic identifies a perpetrator that hunts for accounts from a single source computer.         |
| Trigger                      | Any number of failed authentication attempts using non-existing accounts made from a specific host         |
| Recommended Settings         | Bad User ID (by source host) groups attacks by where failed authentication attempts by non-existing accounts are coming from to trigger analytic hits. The user-configurable parameter is based on time, where time is used to visualize how often an attempt is made to authenticate using a non-existing account from an individual system. <br />Netwrix recommends setting the default value to 30 days. If a failed authentication attempt using a non-existing account occurs from the same host after the 30 day time period, a new analytic hit will be produced rather than incrementing the previous hit count. |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/8.1/admin/configuration/systemalerting/overview.md).

See the Bad User ID (by Source Host) Analytic Data Grid topic for information on event data
collected per incident.

## Configure Bad User ID (by Source Host) Analytic Policy

Open the Bad User ID (by source host) Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the analytic you want. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where you define the analytic trigger
- Policy – Where you add filters, configure additional actions, set a custom schedule, and enable
  the policy

**Settings Tab**

![Bad User ID (by Source Host) Analytic Type - Settings tab](/images/threatprevention/8.1/admin/analytics/baduseridsettings.webp)

Set the Number of Days over which Threat Prevention tallies repeated authentication attempts by a
machine using a bad user account. An incident triggers for every previously unseen host where a
bad user account attempts login. Threat Prevention adds each additional attempt for the same host to
the total number of attempts, through the limit of days you set here, e.g. 30 days. After this
number of days elapses from the first attempt, any additional attempt triggers a new incident with a
new count.

**Policy Tab**

![Bad User ID (by Source Host) Analytic Type - Policy tab](/images/threatprevention/8.1/admin/analytics/policytab.webp)

The Policy tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and can't be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter can't be modified. Additionally, there is no AD Perpetrator filter.

  - _Optional:_ Scope the protocol to monitor on the Authentication Protocol filter. If you
    enable the analytic on a domain controller, also scope the login type.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’. Otherwise, the option has no effect.
    :::


  - _Optional:_ Scope the domains to include in or exclude from monitoring on the
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

## Bad User ID (by Source Host) Analytic Data Grid

The data grid on the **Bad User ID (by source host)** node lists one row per incident identified.
Threat Prevention groups these incidents per unique source machine.

![Bad User ID by Source Host window](/images/threatprevention/8.1/admin/analytics/baduseridsourcehost.webp)

You can filter the data grid according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/8.1/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacking Host – Name of the originating host
- Attacking Host IP Address – IP address of the originating host
- Last Attempt – Date timestamp of the last event that triggered the incident. Hover over the data
  in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Number of Accounts – Number of unique accounts that attempted to login from this host
- Protocols – Protocols used for the monitored operation
- Number of Attempts – Number of attempts monitored during the specified interval matching this rule
- Number of Hosts – Number of hosts accessed during the specified interval matching this rule

Select an incident in the top data grid to view information on the events that triggered the
incident:

- Account Name – Name of the bad user account that attempted to login
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
