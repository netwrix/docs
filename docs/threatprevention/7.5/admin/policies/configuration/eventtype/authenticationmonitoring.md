---
title: "Authentication Monitoring"
description: "Authentication Monitoring Event Type"
sidebar_position: 60
---

# Authentication Monitoring Event Type

The Authentication Monitoring event type captures events according to policy filters for Kerberos,
TGT, TGS and/or NTLM authentication requests.

The event filters for the Authentication Monitoring event type are:

- Authentication Protocol
- Domains/Servers
- Success
- AD Perpetrator
- IP Addresses (from)
- IP Addresses (to)
- Hosts (from)
- Hosts (to)

![Policy window - Authentication Monitoring Event Type](/images/threatprevention/7.5/admin/policies/eventtype/authenticationmonitoring.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::note
When the Authentication Monitoring or Lockdown event type is assigned to a policy outside
of the Analytic policies, then all collected authentication event data is stored in the database,
not in memory as it is for the Analytic policies. However, it does consolidate the authentication
events which occur every minute, resulting in up to a one minute delay between the event and the
reporting of the event.
:::


## Authentication Protocol Filter

Use the Authentication Protocol filter for monitoring to set the scope of the policy to only monitor
specific authentication event protocols or to exclude specific authentication event protocols from
being monitored.

![Policy window - Authentication Protocol filter for monitoring](/images/threatprevention/7.5/admin/policies/eventtype/authenticationprotocolmonitoring.webp)

- In the Monitor These Protocols section, check the **All** box to include all protocols or select
  specific protocols:

  - Kerberos (TGT and/or TGS)
  - NTLM

> > **CAUTION:** Saving all TGT and/or TGS authentication data results in the bloating of the Threat
> > Prevention database. Configure policy filters and use Database Maintenance while monitoring
> > these protocols to retain data for the necessary timeframe. See the
> > [Database Maintenance Window](/docs/threatprevention/7.5/admin/configuration/databasemaintenance/overview.md) topic for
> > additional information.
> >
> > **_RECOMMENDED:_** Save only a few days' worth of TGT and TGS data at a time.

- The Login Type options apply only to domain controllers. Use them to scope for **All** login types
  or only **Local** or **Remote** logins to the selected domain controllers.

- The **Exclude failed authentications with previously valid (N-2) passwords** option, if enabled,
  allows the Authentication policy or Analytic policy to ignore failed authentications that failed
  due to use of a previously valid, but now expired, password.

  You must configure a GPO within the organization to Enforce password history with a setting of a
  minimum of 3 passwords remembered in order for the Threat Prevention policy to exclude failed
  authentications for N-2. This policy is located within a **GPO** > **Computer Configuration** >
  **Windows Settings** > **Security Settings** > **Account Policies** > **Password Policy** (shown
  in the example GPO > Default DomainPolicy).

  ![Default Domain Policy](/images/threatprevention/7.5/admin/policies/eventtype/gpo.webp)

- When enabled, the **Exclude failed authentications with expired passwords** option allows the
  Authentication or Analytic policy to ignore failed authentications with a newly expired password
  that has not been reset by the user yet. This functionality removes events that clutter the
  database.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or
to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](/images/threatprevention/7.5/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the [Select Domains and Servers Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectdomainsservers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Success Filter

The Success filter is where the policy is set to only monitor successful events, failed events, or
both.

![Event Type – Success filter](/images/threatprevention/7.5/admin/policies/eventtype/success.webp)

Select the radio button for the desired monitoring filter:

- Success – Only monitors successful events
- Failure – Only monitors failed events
- Both Success and Failure – Monitors all events that are within the scope of the respective filters
  for the event type

## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific
security principals committing changes or to exclude specific security principals committing changes
from being monitored.

![Event Type - AD Perpetrator Monitoring filter](/images/threatprevention/7.5/admin/policies/eventtype/adperpetratormonitoring.webp)

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude
Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/perpetrators.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


**Sub Tree**

![Sub-Tree option in event type filters](/images/threatprevention/7.5/admin/policies/eventtype/subtree.webp)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent
and all child contexts. Uncheck it to apply the filter to the listed context only.

## IP Addresses (from) Filter

Use the IP Addresses (from) filter to set the scope of the policy to specific IP addresses as
originators of an event or to exclude specific IP addresses.

![Event Type – IP Addresses (from) filter](/images/threatprevention/7.5/admin/policies/eventtype/ipaddressesfrom.webp)

Use the buttons in the Include IP Addresses, Include Collections, Exclude IP Addresses, and Exclude
Collections areas to edit the lists.

- The IP Addresses Add (+) button opens the [Add IP Address Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/addipaddress.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## IP Addresses (to) Filter

Use the IP Addresses (to) filter to set the scope of the policy to specific IP addresses as target
hosts of an event or to exclude specific IP addresses.

![ipaddressesto](/images/threatprevention/7.5/admin/policies/eventtype/ipaddressesto.webp)

Use the buttons in the Include IP Addresses, Include Collections, Exclude IP Addresses, and Exclude
Collections areas to edit the lists.

- The IP Addresses Add (+) button opens the [Add IP Address Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/addipaddress.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Hosts (from) Filter

Use the Hosts (from) filter for monitoring to set the scope of the policy to only monitor specific
hosts as originators of an event or to exclude specific hosts from being monitored.

![Event Type – Hosts (from) filter](/images/threatprevention/7.5/admin/policies/eventtype/hostsfrom.webp)

Use the buttons in the Include Hosts, Include Collections, Exclude Hosts, and Exclude Collections
areas to edit the lists.

- The Hosts Add (+) button opens the [Select Computer Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectcomputers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Hosts (to) Filter

Use the Hosts (to) filter for monitoring the scope of the policy to only monitor specific hosts as
target hosts of an event or to exclude specific hosts from being monitored.

![Policy window - Hosts (to) filter for monitoring](/images/threatprevention/7.5/admin/policies/eventtype/hoststo.webp)

Use the buttons in the Include Hosts, Include Collections, Exclude Hosts, and Exclude Collections
areas to edit the lists.

- The Hosts Add (+) button opens the [Select Computer Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectcomputers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.

:::
