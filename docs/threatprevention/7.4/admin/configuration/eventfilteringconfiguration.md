---
title: "Event Filtering Configuration Window"
description: "Event Filtering Configuration Window"
sidebar_position: 50
---

# Event Filtering Configuration Window

The Event Filtering Configuration window enables you to exclude specific Active Directory and
Authentication events from being monitored. A latency threshold can be set to generate alerts for AD
events.

:::note
This window is only available to Threat Prevention administrators.
:::


Follow the steps to enable event filtering.

**Step 1 –** Click **Configuration** > **Event Filtering** on the menu to open the Event Filtering
Configuration window.

![Event Filtering Configuration Window](/images/threatprevention/7.4/admin/configuration/eventfiltering.webp)

**Step 2 –** The filter options are grouped by AD Global Pre Filters, Authentication Global Pre
Filters, and Alerts. Check the checkboxes to activate the filters and click **Save**.

To disable a filter for diagnostic purposes, simply uncheck its checkbox and click **Save**.

Click the Help icon (?) for an option in the AD Global Pre Filters area to view the type of “noise”
events being filtered.

:::note
All Authentication Global Pre Filters options require configuration before they can be
enabled.
:::


:::info
Enable all the AD Global Pre Filters options as well as the Exclude Logins from
Machine Accounts option in the Authentication Global Pre Filters section.
:::


When activated, the Agent filters out the event data according to configurations defined in the
filters.json file located in the installation directory of the Enterprise Manager.

## Exclude ‘Noise’ Events Option

The Exclude ‘Noise’ Events option is enabled by default to filter out login and internal low level
attributes that can be considered ‘noise’ events, resulting in a bloating of the database. This
option can be scoped to include any combination of the following ‘noise’ events:

- Successful AD User Logins – Excludes events with the following attributes where ‘objectClass’ does
  not equal computer:
  - logonCount
  - lastLogon
  - badPwdCount
  - lastLogonTimestamp
- AD User Logins with Bad Password – Excludes events with the following set of attributes where
  ‘objectClass’ does not equal computer:
  - badPwdCount
  - badPasswordTime
- AD Computer Logins – Excludes events with the following set of attributes where ‘objectClass’
  equals computer:
  - logonCount
  - lastLogon
  - badPwdCount
  - lastLogonTimestamp
  - badPasswordTime
  - badPwdCount
- Low Level Attributes – Excludes the following attributes from event:
  - ImPwdHistory
  - dBCSPwd
  - ntPwdHistory

## Exclude AD DNS Events Option

The Exclude AD DNS Events option is enabled by default to filter out DNS events. These events can
result in a bloating of the database. They must meet both of the following conditions to be
excluded:

- objectClass = ‘dnsNode’ or ‘dnsZone’
- Contains the ‘dnsRecord’ or ‘dNSTombstoned’ attribute

When the Exclude AD DNS Events checkbox is unchecked, DNS record events are displayed in a
human-readable format on the Recent Events tab of the Active Directory policy. In order to search
these results, the Affected Object: Class can be set to equals dnsNode for the dnsRecord attribute
to display.

## Exclude Logins from Machine Accounts Option

The Exclude Logins from Machine Accounts option is enabled by default to filter out machine logins.
These events can result in a bloating of the database. Click the **configure** link to open the Edit
Collection window.

![Edit Collection window - For Machine Accounts](/images/threatprevention/7.4/admin/configuration/editcollectionmachineaccounts.webp)

The Exclude Logins from Machine Accounts collection is only accessible through the Event Filtering
Configuration window. Either use the **Add** (+) button to open the
[Select Active Directory Perpetrators Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/perpetrators.md)
to browse for machine accounts or type the account name in the textbox.

Only perpetrators with accounts ending in “$” are considered for this filter. Wild cards (\*) can be
used for partial matches to account names.

All machine accounts in the textbox are either included or excluded from event data monitoring by
the Agent. Machine accounts not in the list have the unselected property applied.

Select one of the following radio buttons to apply to the list of account names:

- Pass to agent on match – Included and passed to the Agent for event data monitoring. Machine
  accounts not in the list are excluded and ignored by the Agent.
- Remove on match – Excluded and ignored by the Agent. Machine accounts not in the list are included
  and sent to the Agent for event data monitoring.

Repeat the process until all machine accounts to be included or excluded from Authentication event
data have been entered in the list. Then click **OK**.

**Usage Tip**

Windows Server 2012 introduced gMSA (Group Managed Service Accounts). gMSA accounts include
“$” in their names, so by default Threat Prevention filters out authentication traffic generated by these accounts because they ‘look’ like machine accounts which prior to Server 2012 were the only account names ending in “$”.
The ability in Threat Prevention to add a list of filter strings to the “Exclude Logins from Machine
Accounts” global filter enables you to capture activity by gMSA type accounts as this activity is
typically of interest whereas true ‘machine accounts’ is not. By supplying either an explicit list
of gMSA account names, or if a naming convention has been adopted, a set of wild card strings such
as “gMSA\*” or “svc\*”, allows capturing authentication activity from such accounts while ignoring
the noisy ‘machine accounts’.

## Exclude Authentication Events from Selected Hosts Option

The Exclude Authentication Events from Selected Hosts option is disabled by default as it requires
configuration before it can be enabled. Click the **selected hosts** link to open the Edit
Collection window.

![Edit Collection window - For Hosts](/images/threatprevention/7.4/admin/configuration/editcollectionhosts.webp)

The Exclude Authentication Events from Hosts collection is only accessible through the Event
Filtering Configuration window. All three methods of identification for a host (IP address, NETBIOS
host name, or DNS host name) must be known in order to effectively exclude authentication from the
host. Identify the host to be excluded in the textbox under the IP Address column and hit **Enter**
or select the next row in the grid. Threat Prevention attempts to discover the NETBIOS host name and
the DNS host name associated with the supplied IP address. If the host identification is not
resolved or is inaccurate, manually type the information.

Repeat the process until all hosts for which authentication event data will not be collected have
been entered in the list. Then click **OK**. The Edit Collection window closes, and the Exclude
Authentication Events from selected hosts option can be enabled.

## Exclude Authentication Events from Selected Accounts Option

The Exclude Authentication Events from Selected Accounts option is disabled by default as it
requires configuration before it can be enabled. Click the selected accounts link to open the Edit
Collection window.

![Edit Collection window - For Selected Accounts](/images/threatprevention/7.4/admin/configuration/editcollectionaccounts_1.webp)

The Exclude Authentication Events from Selected Accounts collection is only accessible through the
Event Filtering Configuration window. Use the **Add** (+) button to open the
[Select Active Directory Perpetrators Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/perpetrators.md)
to browse for the desired accounts. Account names [domain name\account] can also be typed in the
textbox. Wild cards (\*) can be used as part of either the domain name or account. An asterisk (\*)
appearing anywhere other than as the first character or the last character are treated as a literal
character instead of as a wild card. For example: \*\Service1 would exclude all Service1 accounts
whether it is a domain or local account, and Example\Service\* would exclude all accounts that start
with “Service” for the Example domain.

Repeat the process until all accounts to be excluded from Authentication event data have been
entered in the list. Then click OK. The Edit Collection window closes, and the Exclude
Authentication Events from selected accounts option can be enabled.

## AD Events Latency Threshold Option

The Send Latency Alerts option is disabled by default. It is used to generate alerts if the time
delay between when the Agent detects an AD event and the time the Enterprise Manager receives it
exceeds the specified latency threshold. This option is helpful for troubleshooting when
experiencing slow connection in the environment. These events can result in a bloating of the
database especially if the latency threshold is set too low.

Select the Send Latency Alerts checkbox to enable this option. Use the arrows, or type into the
textbox, to set the latency threshold in minutes for the time when the Agent detects the event and
the Enterprise Manager receives it. When events exceed the timeframe, alerts are displayed in the
[Alerts Interface](/docs/threatprevention/7.4/admin/alerts/overview.md).
Email or SIEM alerts can be generated by selecting the Agent Latency checkbox in the Operations tab
of the
[System Alerting Window](/docs/threatprevention/7.4/admin/configuration/systemalerting/overview.md).
