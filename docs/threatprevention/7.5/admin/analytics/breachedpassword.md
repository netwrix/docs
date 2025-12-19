---
title: "Breached Password"
description: "Breached Password Analytic Type"
sidebar_position: 30
---

# Breached Password Analytic Type

The **Breached Password** analytic type identifies multiple failed authentications followed by a
successful authentication in the specified time frame.

| Breached Password    |                       |
| -------------------- | ---------------------- |
| Definition           | Multiple failed authentications followed by a successful authentication          |
| Example              | This analytic alert may follow one or more alerts identifying repeated failed authentications against an account. This alert is of special importance as it signals that an attacked account may have been breached and a successful login occurred. This could also identify a scenario where an attacker has attempted multiple authentications with a user’s account but has failed, and then subsequent to that, the real user logs in and authenticates successfully. |
| Trigger              | X failed authentication attempts from the same account followed by a successful authentication in Y hours       |
| Recommended Settings | Netwrix recommends configuring this analytic to trigger a hit if Threat Prevention monitors at least 30 failed authentication attempts from the same account followed by a successful authentication in 4 hours.      |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md).

See the Breached Password Analytic Data Grid topic for information on event data collected per
incident.

## Configure Breached Password Analytic Policy

Open the Breached Password Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the desired analytic. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where the analytic trigger is defined
- Policy – Where filters can be added, additional actions configured, a custom schedule set, and the
  policy enabled

**Settings Tab**

![Breached Password Analytic Type - Settings tab](/images/threatprevention/7.5/admin/analytics/breachedpasswordsettings.webp)

Set the Number of Failed Attempts preceding a successful login and the Interval Duration that will
trigger the incident. The interval duration is set for (Hours:Minutes) and is capped at 23:59. When
the specified number of failed login attempts for an individual user account precede a successful
login within the specified interval duration, it will trigger an incident record.

By default, authentication event data is cached in memory for 24 hours. When an incident is
triggered, an incident record is saved to the database along with the events that triggered the
incident. Raw authentication event data that did not contribute to an incident are purged from
memory once they are more than 24 hours old.

**Policy Tab**

![Breached Password Analytic Type - Policy tab](/images/threatprevention/7.5/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/7.5/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and cannot be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter cannot be modified.

  - Scope the protocol to be monitored on the Authentication Protocol filter. If enabling the
    analytic on a domain controller, also scope the login type.

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
  [Actions Tab](/docs/threatprevention/7.5/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. The event data collected by
  analytic policies are stored in memory until an incident is triggered. For the “Send Raw Data to
  SIEM” option, use _caution_, as this will send all event data not the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

## Breached Password Analytic Data Grid

The data grid on the **Breached Password** node lists one row per incident identified.

![Breached Password Analytic Type window](/images/threatprevention/7.5/admin/analytics/breachedpassword.webp)

The data grid can be filtered according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/7.5/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacked Account Name – Security principal of the account affected by the event

  :::note
  The name will be red if the attacking account is the Administrator account.
  :::


- Attacked Account SID – Security Identifier of the account used in the event that was attacked
- First Failed Attempt – Date timestamp of the first monitored event that triggered the incident.
  Hover over the data in this column to view the local time (of the Enterprise Manager) and UTC time
  simultaneously.
- Last Failed Attempt – Date timestamp of the last event that triggered the incident. Hover over the
  data in this column to view the local time (of the Enterprise Manager) and UTC time
  simultaneously.
- Breach Date – Date timestamp of the first monitored event that was successful. Hover over the data
  in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Breach Source Host – Name of the originating host
- Breach Source Host IP Address – IP address of the originating host
- Protocols – Protocol(s) used for the monitored operation
- Number of Attempts – Number of attempts monitored during the specified interval matching this rule
- Number of Hosts – Number of hosts accessed during the specified interval matching this rule

Select an incident in the top data grid to view information on the events thath triggered the
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
- Date/Time – Date timestamp of the monitored event. Hover over data in this column to view Local
  time (of the Enterprise Manager) and UTC time simultaneously.
- Agent Time Logged – Timestamp for when the Agent detected the event. This can be different from
  the Enterprise Manager time (displayed in the Date/Time column) due to latency.

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/7.5/admin/navigation/datagrid.md) topic for additional information.
