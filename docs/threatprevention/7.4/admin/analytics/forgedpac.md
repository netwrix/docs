---
title: "Forged PAC Analytic Type"
description: "Forged PAC Analytic Type"
sidebar_position: 70
---

# Forged PAC Analytic Type

The **Forged Privilege Account Certificate** (PAC) analytic type identifies Kerberos tickets with a
modified PAC. By manipulating the PAC, a field in the Kerberos ticket that contains a user’s
authorization data (in Active Directory, this is group membership), an attacker is able to grant
themselves elevated privileges.

| Forged PAC           |             |
| -------------------- | ---------------- |
| Definition           | Kerberos tickets with modified Privilege Account Certificate (PAC)            |
| Example              | Kerberos tickets are used as a sort of “pass card” to obtain access to resources. Once a domain controller authenticates a user, a TGT (ticket granting ticket) is granted with a limited lifespan. This is then used to obtain TGS (ticket granting service) and the TGS is what identifies a user to a resource on the network. <br />A known vulnerability exists where PAC part of a ticket can be modified to include groups the user is not a member of. If a user on the network were to attempt to use such a ticket, this analytic would detect the altered ticket and generate an alert. |
| Trigger              | PAC of the ticket contains RIDs that are not TokenGroups attribute.          |
| Recommended Settings | No additional configuration needed         |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/7.4/admin/configuration/systemalerting/overview.md).

See the [Forged PAC Analytic Data Grid](#forged-pac-analytic-data-grid) topic for information on
event data collected per incident.

## Configure Forged PAC Analytic Policy

Open the Forged PAC Analytic Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the desired analytic. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has two tabs:

- Settings – Where the analytic trigger is defined
- Policy – Where filters can be added, additional actions configured, a custom schedule set, and the
  policy enabled

**Settings Tab**

![Forged PAC Analytic Type - Settings tab](/images/threatprevention/7.4/admin/analytics/forgedpacsettings.webp)

Remember, the Forged PAC analytic is monitoring for when the user is not a member of a group that is
listed in the PAC section of the user’s Kerberos ticket. This analytic can be scoped to monitor
specific groups. To reduce the number of false positives, Threat Prevention only checks for a
mismatch of sensitive groups you specify on the Settings tab.

You can select specific RIDs that Threat Prevention compares against the PAC and user’s access token
for a mismatch to trigger the incident.

- Click the **Add** (**+**) button to open the
  [Select AD Groups Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/groups.md),
  where you can select the desired Active Directory group(s). On selection, the RID of that group is
  monitored for modifications.
- The **Remove** (**x**) button removes the selected item(s) from the incident criteria.

**Policy Tab**

![Forged PAC Analytic Type - Policy tab](/images/threatprevention/7.4/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s
  [General Tab](/docs/threatprevention/7.4/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and cannot be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/overview.md)
  is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/authenticationmonitoring.md)
  is hard coded, and the Success filter cannot be modified.

  - Scope the servers to be included in or excluded from monitoring on the IP Addresses (from)
    filter, the IP Addresses (to) filter, the Hosts (from) filter, or the Hosts (to) filter.

    :::note
    Some authentication events may return only a host name (NetBIOS or FQDN), others
    may return only an IP address. It is recommended to take this into account when entering
    filter values.
    :::


  - _Alternatively:_ Scope the domains to be included in or excluded from monitoring on the
    Domains/Servers filter.
  - _Optional:_ Scope the protocol to be monitored on the Authentication Protocol filter. If
    enabling the analytic on a domain controller, also scope the login type. The Authentication
    Protocol filter is hard coded to ensure the Kerberos protocol is monitored.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization be configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’ or it will not have an effect.
    :::


  - _Optional:_ Scope the accounts to include in or exclude from being monitored on the AD
    Perpetrator filter.

- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/7.4/admin/policies/configuration/actions/overview.md)
  is configured. The only exceptions are that the “Send to Event DB” and “Email Notifications”
  options are disabled. The event data collected by analytic policies are stored in memory until an
  incident is triggered. For the “Send Raw Data to SIEM” option, use _caution_, as this will send
  all event data not the triggered incident, which could be a large volume of data. To send
  notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/7.4/admin/configuration/systemalerting/overview.md)
  to configure Email and SIEM alerts.

## Forged PAC Analytic Data Grid

The data grid on the **Forged PAC** node lists one row per incident identified.

![Forged PAC Analytic Type window](/images/threatprevention/7.4/admin/analytics/forgedpac.webp)

The data grid can be filtered according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/7.4/admin/policies/configuration/recentevents/eventtracker.md)
topic for additional information.

The top data grid includes the following information for each incident:

- From Host – Name of the originating host
- From Host IP Address – IP address of the originating host
- To Host – Name of the target host
- To Host IP Address –IP address of the target host
- Account Name – Security principal of the account that triggered the incident
- Account SID – Security Identifier of the account used in the event that triggered the incident
- Access Type – Type of authentication with encryption, e.g. TGS: cifs/ enc:23/18, TGS: krbtgt/ enc:
  23/18, etc.
- Status – Indication of whether the authentication was successful
- Date/Time – Date timestamp of the monitored event. Hover over the data in this column to view the
  local time (of the Enterprise Manager) and UTC time simultaneously.
- Detected on DC – Fully-qualified name of the domain controller that detected the event
- PAC Delta – RID for the group that does not have access
- Agent Time Logged – Timestamp for when the Agent detected the event. This can be different from
  the Enterprise Manager time (displayed in the Date/Time column) due to latency.

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/7.4/admin/navigation/datagrid.md)
topic for additional information.
