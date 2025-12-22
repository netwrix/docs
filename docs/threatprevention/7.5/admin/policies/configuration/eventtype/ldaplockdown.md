---
title: "LDAP Lockdown"
description: "LDAP Lockdown Event Type"
sidebar_position: 170
---

# LDAP Lockdown Event Type

The LDAP Lockdown event type can prevent execution of LDAP queries that meet policy filters/rules.
Be careful as overly broad rules can ‘break’ the environment. An event is generated with details for
each blocked LDAP query.

The event filters for the LDAP Monitoring event type are:

- LDAP
- Domains/Servers
- AD Perpetrator – For LDAP Search operations only
- LDAP Query
- Hosts (from)
- Rule Preview

![Policy window - LDAP Lockdown Event Type](/images/threatprevention/7.5/admin/policies/eventtype/ldaplockdown.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


This event type can only be used in a policy by itself or with another LDAP event type. This means
that:

- If you select this event type, all other event types will be grayed out except the LDAP event
  types
- If you select an event type other than LDAP, this event type will be grayed out

## LDAP Filter

Use the LDAP filter to set the scope of the policy to include one or more communication security
types.

![New Policy - LDAP filter](/images/threatprevention/7.5/admin/policies/eventtype/ldap.webp)

The operation selected affects what options are available on this filter and what other filters are
available for the event type:

- LDAP Search – Use the LDAP Search operation to search for and identify activity that does not
  conform to your security configurations

  - This option displays additional filters for Secure configurations and Search scopes. See the
    [LDAP Search Operations Use Case](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldapmonitoring/ldapsearch.md) topic for additional information.

- LDAP Ping – LDAP Ping is a Microsoft Active Directory specific Lightweight Directory Access
  Protocol (LDAP) or Connection-less Lightweight Directory Access Protocol (CLDAP) search that
  returns information about whether services are live on a domain controller

  - See the [LDAP Ping Operations Use Case](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/ldapmonitoring/ldapping.md) topic for additional information.

  When LDAP Ping is selected, the Secure Configurations and Search scopes sections are not
  displayed.

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


## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific
security principals committing changes or to exclude specific security principals committing changes
from being locked down.

![AD Perpetrator Protect filter](/images/threatprevention/7.5/admin/policies/eventtype/adperpetratorprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.

:::note
For the [Password Enforcement Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md), selecting **Allow**
means that this policy will not validate the new passwords for the accounts listed here. Selecting
**Block** means that this policy will validate the new passwords for the accounts listed here.
:::


Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## LDAP Query Filter

Use the LDAP Query filter for lockdown to set the scope of the policy to lockdown specific LDAP
queries or to exclude specific queries from being locked down.

![Policy window - LDAP Query filter](/images/threatprevention/7.5/admin/policies/eventtype/ldapquerylockdown.webp)

Select the **Block** or **Allow** option button and then edit the list.

- Allow – From the list of strings you specify in the LDAP Queries area, if at least one is found as
  substring in a candidate LDAP query, then the query will be executed
- Block – From the list of strings you specify in the LDAP Queries area, if at least one is found as
  substring in a candidate LDAP query, then thequery will be blocked

:::warning
Users should fully understand the blocking rule summary displayed in the Rule Preview
filter in order to understand the scope of what will be blocked. Blocking more than the intended
queries will adversely impact the LDAP environment.
:::


Enter a query in the LDAP Queries box. You can type a string in the textbox. Alternatively, use the
buttons in the respective sections.

- The Add (+) buttons open the
  [Select Active Directory Objects Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/objects.md).
- The Remove (x) button deletes the selected item(s) from that box.

## Hosts (from) Filter

Use the Hosts (from) filter for lockdown to set the scope of the policy to only lockdown specific
hosts as originators of an event.

![Policy window - Hosts (from) filter](/images/threatprevention/7.5/admin/policies/eventtype/hostsfromlockdown.webp)

Select the **Block** or **Allow** option button and then edit the list.

- For the [Password Enforcement Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md), selecting **Allow** means that
  this policy will not validate the new passwords for the accounts listed here. Selecting **Block**
  means that this policy will validate the new passwords for the accounts listed here.
- For the [Authentication Lockdown Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/authenticationlockdown.md), this filter blocks or
  only allows authentication from the identified host(s).

Use the buttons in the Include Hosts area to edit the list.

- The Hosts Add (+) button opens the [Select Computer Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectcomputers.md).
- The Remove (x) button deletes the selected item(s) from that box.

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used
for troubleshooting.

![Event Type - Rule Preview filter](/images/threatprevention/7.5/admin/policies/eventtype/rulepreview.webp)

The text displayed represents the rules created based on the policy’s selected filters. Each row is
a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple
rows so that all of it is visible.
