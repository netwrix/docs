---
title: "User Account Hacking"
description: "User Account Hacking Analytic Type"
sidebar_position: 120
---

# User Account Hacking Analytic Type

The **User Account Hacking** analytic type identifies multiple bad passwords provided for a given
valid user account in the specified time interval.

:::info
Configure a subset of accounts to monitor to avoid the excessive
volume of event activity that monitoring all accounts generates.
:::


| User Account Hacking |                           |
| -------------------- | ------------------------------- |
| Definition           | Repeated failed logins below lockout thresholds and/or over extended periods         |
| Example              | Malware or a bad actor on the network is attempting to compromise an account by guessing the account’s password repeatedly until access is granted. To circumvent built-in lockout policies in Active Directory, the malware or bad actor will only guess so many times before backing off, making sure not to lockout the account. After a period of time has expired, it will continue its routine until the password is guessed correctly. This type of attack is easily automated using a script. The quiet nature of this type of attack often results in the attack going undetected. <br />\*The Enterprise Admin account (SID ending in -500) in Active Directory can't be locked out making it vulnerable to hacking and eventual breach. While Active Directory will show the account is locked out on the object itself, as soon as the correct password is supplied, the account will be automatically unlocked, giving the perpetrator “God-rights” to the enterprise. |
| Trigger              | (X1 failed login attempts from an individual user account in Y1 minutes) OR (X2 failed login attempts from an individual user account in Y3 minutes) OR …         |
| Recommended Settings | Set the number of attempts 1 or 2 increments below the organization’s Active Directory lockout policy settings.    |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/8.1/admin/configuration/systemalerting/overview.md).

See the User Account Hacking Analytic Data Grid topic for information on event data collected per
incident.

## Configure User Account Hacking Analytic Policy

Open the User Account Hacking Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the analytic you want. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where you define the analytic trigger
- Policy – Where you add filters, configure additional actions, set a custom schedule, and enable
  the policy

**Settings Tab**

![User Account Hacking Analytic Type - Settings tab](/images/threatprevention/8.1/admin/analytics/accounthackingsettings.webp)

Set the Number of Failed Logins and the Interval Duration to trigger the incident. The interval
duration uses (hours:minutes) and is capped at 23:59. When the specified number of failed
logins have occurred for an individual user account within the specified interval duration, Threat
Prevention triggers an incident record.

By default, Threat Prevention caches authentication event data in memory for 24 hours. When an
incident triggers, Threat Prevention saves an incident record to the database along with the events
that triggered the incident. It purges raw authentication event data that didn't contribute to an
incident from memory once that data is more than 24 hours old.

- Click the **Add** **(+)** button to include additional trigger conditions. Meeting any of the
  specified conditions triggers an incident. For example, you can set one trigger condition to
  generate an incident if there are _5 Failed Logins_ during an interval of _1 minutes_,
  and another trigger condition to generate an incident if there are _10 Failed Logins_
  during an interval of _30 minutes_. Meeting either condition triggers an incident.
- Use the **Remove** **(x)** button to remove trigger conditions.

The **Configure Accounts** link redirects you to the **Policy** > **Event Type** > **AD
Perpetrator** filter.

If checked, the **Ignore failed logins for unresolved user names** option excludes bad user IDs
from contributing to User Account Hacking incidents.

**Policy Tab**

![User Account Hacking Analytic Type - Policy tab](/images/threatprevention/8.1/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and can't be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter can't be modified.

  - Scope the accounts to include in or exclude from monitoring on the AD Perpetrator filter.
  - _Optional_: Scope the protocol to monitor on the Authentication Protocol filter. If you
    enable the analytic on a domain controller, also scope the login type.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’. Otherwise, the option has no effect.
    :::


  - _Optional_: Scope the domains to include in or exclude from monitoring on the
    Domains/Servers filter.
  - _Optional_: Scope the servers to include in or exclude from monitoring on the IP
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

## User Account Hacking Analytic Data Grid

The data grid on the **User Account Hacking** node lists one row per incident identified.

![User Account Hacking Analytic Type window](/images/threatprevention/8.1/admin/analytics/useraccounthacking.webp)

You can filter the data grid according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/8.1/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- Attacked Account Name – Security principal of the account that triggered the incident

  :::note
  The name displays in red if the attacking account is the Administrator account.
  :::


- Attacked Account SID – Security Identifier of the account used in the event
- First Attempt – Date timestamp of the first monitored event that triggered the incident. Hover
  over the data in this column to view the local time (of the Enterprise Manager) and UTC time
  simultaneously.
- Last Attempt – Date timestamp of the last event that triggered the incident. Hover over the data
  in this column to view the local time (of the Enterprise Manager) and UTC time simultaneously.
- Number of Attempts – Number of attempts monitored during the specified interval matching this rule

Select an incident in the top data grid to view information on the events that triggered the
incident:

- From Host – Name of the originating host
- From Host IP Address – IP address of the originating host
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
