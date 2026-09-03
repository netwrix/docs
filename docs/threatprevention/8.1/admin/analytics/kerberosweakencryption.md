---
title: "Kerberos Weak Encryption"
description: "Kerberos Weak Encryption Analytic Type"
sidebar_position: 110
---

# Kerberos Weak Encryption Analytic Type

The **Kerberos Weak Encryption** analytic type identifies Kerberos tickets with RC4_HMAC_MD5
encryption by detecting the use of weak encryption. Various attack methods use weak Kerberos
encryption cyphers, including Overpass-the-Hash.

| Kerberos Weak Encryption |                    |
| ------------------------ | ---------------------------- |
| Definition               | Kerberos tickets with RC4_HMAC_MD5 encryption.    |
| Example                  | Kerberos tickets are used as a sort of “pass card” to obtain access to resources. Once a domain controller authenticates a user, a TGT (ticket granting ticket) is granted with a limited lifespan. This is then used to obtain TGS (ticket granting service) and the TGS is what identifies a user to a resource on the network. <br />If RC4_HMAC_MD5 encryption is used then it makes possible to obtain password value using Kerberoasting attack. If a user on the network were to attempt to use such a ticket, this analytic would detect this ticket and generate an alert. |
| Trigger                  | Ticket uses RC4_HMAC_MD5 encryption.        |
| Recommended Settings     | No additional configuration needed    |

**Analytic Workflow**

1. Configure the analytic policy
2. Enable the analytic policy
3. Enable alerting on incidents through the
   [System Alerting Window](/docs/threatprevention/8.1/admin/configuration/systemalerting/overview.md).

See the Kerberos Weak Encryption Analytic Data Grid topic for information on event data collected
per incident.

## Configure Kerberos Weak Encryption Analytic Policy

Open the Kerberos Weak Encryption Policy in any of the following ways:

- Click Analytics in the left pane to launch the Analytics interface. Then click the gear icon for
  the analytic.
- Expand the Analytics node and click the analytic you want. On the analytic window, click the gear
  icon available in the top right corner.

The Configure Analytics window has one tab:

- Policy – Where you add filters, configure additional actions, set a custom schedule, and enable
  the policy

**Policy Tab**

![Kerberos Weak Encryption Analytic Type - Policy tab](/images/threatprevention/8.1/admin/analytics/policytab.webp)

The **Policy** tab for configuring analytics consists of three sub-tabs:

- General tab – Configured the same way a regular policy’s [General Tab](/docs/threatprevention/8.1/admin/policies/configuration/general.md) is
  configured. The only exception is that the Name and Description are hard coded, and can't be
  modified. The Tags field is disabled for analytics.
- Event Type tab – Configured the same way a regular policy’s
  [Event Type Tab](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/overview.md) is configured. The only exception is that the
  [Authentication Monitoring Event Type](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/authenticationmonitoring.md) is hard
  coded, and the Success filter can't be modified.

  - Scope the servers to include in or exclude from monitoring on the IP Addresses (from)
    filter, the IP Addresses (to) filter, the Hosts (from) filter, or the Hosts (to) filter.

    :::note
    Some authentication events may return only a host name (NetBIOS or FQDN), others
    may return only an IP address. Take this into account when entering
    filter values.
    :::


  - *Alternatively:* Scope the domains to include in or exclude from monitoring on the
    Domains/Servers filter.
  - \_Optional:\_Scope the protocol to monitor on the Authentication Protocol filter. If you
    enable the analytic on a domain controller, also scope the login type. The Authentication
    Protocol filter is hard coded to ensure that Threat Prevention monitors the Kerberos protocol.

    :::note
    The Exclude failed authentications with ‘N-2’ passwords option requires a GPO
    within the organization configured to ‘Enforce password history’ with a setting of a
    minimum of ‘3 passwords remembered’. Otherwise, the option has no effect.
    :::


  - _Optional_ – Scope the accounts to include in or exclude from monitoring on the AD
    Perpetrator filter.

- Actions tab – Configured the same way a regular policy’s
  [Actions Tab](/docs/threatprevention/8.1/admin/policies/configuration/actions/overview.md) is configured. The only exceptions are that the
  “Send to Event DB” and “Email Notifications” options are disabled. Analytic policies store the
  event data they collect in memory until an incident triggers. Use _caution_ with the “Send Raw
  Data to SIEM” option, as it sends all event data rather than the triggered incident, which
  could be a large volume of data. To send notifications on incidents, use the
  [System Alerting Window](/docs/threatprevention/8.1/admin/configuration/systemalerting/overview.md) to configure Email and SIEM
  alerts.

## Kerberos Weak Encryption Analytic Data Grid

The data grid on the **Kerberos Weak Encryption** node lists one row per incident identified.

![kerberosweakencryption](/images/threatprevention/8.1/admin/analytics/kerberosweakencryption.webp)

You can filter the data grid according to the Event Tracker status: All, New, or Reviewed. See the
[Event Tracker Window](/docs/threatprevention/8.1/admin/policies/configuration/recentevents/eventtracker.md) topic for additional information.

The top data grid includes the following information for each incident:

- From Host – Name of the originating host
- From Host IP Address – IP address of the originating host
- To Host – Name of the target host
- To Host IP Address – IP address of the target host
- Account Name – Security principal of the account that triggered the incident
- Account SID – Security Identifier of the account used in the event
- Access Type – Type of authentication with encryption, e.g. TGS: cifs/ enc:23/18, TGS: krbtgt/ enc:
  23/18, etc.
- SPN – The service principal name (SPN) included in the Kerberos ticket data
- Status – Indication of whether the authentication was successful
- Date/Time – Date timestamp of the monitored event. Hover over the data in this column to view the
  local time (of the Enterprise Manager) and UTC time simultaneously.
- Detected on DC – Fully-qualified name of the domain controller that detected the event
- Encryption Type – Type of encryption identified as weak that triggered the incident
- Agent Time Logged – Timestamp for when the Agent detected the event. This can be different from
  the Enterprise Manager time (displayed in the Date/Time column) due to latency.

This data grid employs features for sorting, filtering, searching, and more. See the
[ Data Grid Functionality](/docs/threatprevention/8.1/admin/navigation/datagrid.md) topic for additional information.
