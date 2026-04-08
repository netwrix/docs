---
title: "LDAP Monitoring"
description: "LDAP Monitoring Event Type"
sidebar_position: 160
---

# LDAP Monitoring Event Type

The LDAP Monitoring event type generates an event for LDAP queries that match policy filter rules.
It is important to specify rules that zero in on specific or unusual activity. Since Active
Directory is mostly LDAP queries, insufficient policy filters/rules will adversely impact
performance.

The event filters for the LDAP Monitoring event type are:

- LDAP
- LDAP Runtime – For LDAP Search operations only
- Domains/Servers
- Success – For LDAP Search operations only
- AD Perpetrator – For LDAP Search operations only
- LDAP Query
- LDAP Result
- LDAP Attributes – For LDAP Search operations only
- Hosts (from)
- Rule Preview

![Policy window - LDAP Monitoring Event Type](/images/threatprevention/8.0/admin/policies/eventtype/ldapmonitoring.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

This event type can only be used in a policy by itself or with another LDAP event type. This means
that:

- If you select this event type, all other event types will be grayed out except the LDAP event
  types
- If you select an event type other than LDAP, this event type will be grayed out

## LDAP Filter

Use the LDAP filter to set the scope of the policy to include one or more communication security
types.

![New Policy - LDAP filter](/images/threatprevention/8.0/admin/policies/eventtype/ldap.webp)

The operation selected affects what options are available on this filter and what other filters are
available for the event type:

- LDAP Search – Use the LDAP Search operation to search for and identify activity that does not
  conform to your security configurations

  - This option displays additional filters for Secure configurations and Search scopes. See the
    [LDAP Search Operations Use Case](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldapmonitoring/ldapsearch.md) topic for additional information.

- LDAP Ping – LDAP Ping is a Microsoft Active Directory specific Lightweight Directory Access
  Protocol (LDAP) or Connection-less Lightweight Directory Access Protocol (CLDAP) search that
  returns information about whether services are live on a domain controller

  - See the [LDAP Ping Operations Use Case](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/ldapmonitoring/ldapping.md) topic for additional information.

  When LDAP Ping is selected, the Secure Configurations and Search scopes sections are not
  displayed.

## LDAP Runtime Filter

Use the LDAP Runtime filter to set the scope of the policy to capture events based on query
execution times.

![Policy window - LDAP Runtime filter](/images/threatprevention/8.0/admin/policies/eventtype/ldapruntime.webp)

Identical LDAP queries occurring within a ten second aggregation window are reported as a single
event with a count indicating the number of occurrences within that ten second window. The single
reported event also has a minimum, maximum, and average runtime reflecting the individual events
that occurred during the ten second window.

Check the desired options and set the range for the LDAP event collection threshold:

- Minimum runtime – Save event if minimum runtime is within the minimum and maximum range specified
  in milliseconds
- Average runtime – Save event if average runtime is within the minimum and maximum range specified
  in milliseconds
- Maximum runtime – Save event if maximum runtime is within the minimum and maximum range specified
  in milliseconds
- Filter out queries with runtime less than N ms – This option discards any LDAP queries that
  execute in less time than the specified value

  - It is evaluated before and independent of any other event filters
  - It is implemented inside the Agent instrumentation layer (LSASS). It is more efficient than
    the other LDAP Query Runtime options, which are implemented in the Agent Service.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or
to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](/images/threatprevention/8.0/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the [Select Domains and Servers Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/selectdomainsservers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Success Filter

The Success filter is where the policy is set to only monitor successful events, failed events, or
both.

![Event Type – Success filter](/images/threatprevention/8.0/admin/policies/eventtype/success.webp)

Select the radio button for the desired monitoring filter:

- Success – Only monitors successful events
- Failure – Only monitors failed events
- Both Success and Failure – Monitors all events that are within the scope of the respective filters
  for the event type

## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific
security principals committing changes or to exclude specific security principals committing changes
from being monitored.

![Event Type - AD Perpetrator Monitoring filter](/images/threatprevention/8.0/admin/policies/eventtype/adperpetratormonitoring.webp)

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude
Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/perpetrators.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


**Sub Tree**

![Sub-Tree option in event type filters](/images/threatprevention/8.0/admin/policies/eventtype/subtree.webp)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent
and all child contexts. Uncheck it to apply the filter to the listed context only.

## LDAP Query Filter

Use the LDAP Query filter to set the scope of the policy to only monitor specific LDAP queries or to
exclude specific queries from being monitored.

![Policy window - LDAP Query filter](/images/threatprevention/8.0/admin/policies/eventtype/ldapquery.webp)

Enter a query in the Include LDAP Queries and/or Exclude LDAP Queries boxes. You can type a string
in the textbox. Alternatively, use the buttons in the respective sections.

- The Add (+) buttons open the
  [Select Active Directory Objects Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/objects.md).
- The Remove (x) button deletes the selected item(s) from that box.

## LDAP Result Filter

Use the LDAP Result filter to set the scope of the policy to only monitor what is returned by the
query, quantity of objects and/or specific objects, or exclude the query from being monitored based
on the results.

![Policy window - LDAP Result filter](/images/threatprevention/8.0/admin/policies/eventtype/queryresult.webp)

To scope by the number of objects returned by a query, check the Number of objects box and set the
number of objects to be returned in the Minumun and Maximum boxes.

Specify the desired object in the Include Objects box. You can type a string in the textbox.
Alternatively, use the buttons in the respective sections.

- The Add (+) buttons open the
  [Select Active Directory Objects Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/objects.md).
- The Remove (x) button deletes the selected item(s) from that box.

## LDAP Attributes Filter

Use the LDAP Attributes filter to set the scope of the policy to only monitor specific
LDAP attributes or exclude specific attributes from being monitored.

![Policcy window - LDAP Attributes filter](/images/threatprevention/8.0/admin/policies/eventtype/ldapattributes.webp)

Use the buttons in the Include Attributes and Exclude Attributes boxes to edit the lists.

- The Attributes Add (+) button opens the [Attribute List Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/attributelist.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

## Hosts (from) Filter

Use the Hosts (from) filter for monitoring to set the scope of the policy to only monitor specific
hosts as originators of an event or to exclude specific hosts from being monitored.

![Event Type – Hosts (from) filter](/images/threatprevention/8.0/admin/policies/eventtype/hostsfrom.webp)

Use the buttons in the Include Hosts, Include Collections, Exclude Hosts, and Exclude Collections
areas to edit the lists.

- The Hosts Add (+) button opens the [Select Computer Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/selectcomputers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used
for troubleshooting.

![Event Type - Rule Preview filter](/images/threatprevention/8.0/admin/policies/eventtype/rulepreview.webp)

The text displayed represents the rules created based on the policy’s selected filters. Each row is
a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple
rows so that all of it is visible.
