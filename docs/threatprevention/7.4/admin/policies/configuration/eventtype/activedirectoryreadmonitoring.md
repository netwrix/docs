---
title: "Active Directory Read Monitoring Event Type"
description: "Active Directory Read Monitoring Event Type"
sidebar_position: 30
---

# Active Directory Read Monitoring Event Type

The Active Directory Read Monitoring event type reports on a user's accessing or reading specific
security-related Active Directory attributes. Active Directory processes a high volume of 'Read'
requests. This event type is not designed to capture all or a majority of the 'Read' activity.

The event filters for the Active Directory Read Monitoring event type are:

- Domains/Servers
- AD Classes
- AD Objects
- AD Context
- AD Perpetrator
- AD Attributes
- Hosts (from)
- Rule Preview

![Policy window - Active Directory Read Monitoring Event Type](/images/threatprevention/7.4/admin/policies/eventtype/adreadmonitoring.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
This event type monitors all specified domain controller Read events. Use this event
type with significant filters or else it can adversely impact overall system performance and
significantly increase the size of the Event Database. Limit the policy to specific attributes in
order to avoid overwhelming the database with a high volume of unnecessary events.
:::


## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or
to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](/images/threatprevention/7.4/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the
  [Select Domains and Servers Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/selectdomainsservers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the
[Dynamic Collections](/docs/threatprevention/7.4/admin/configuration/collectionmanager/dynamic.md)
topic for additional information.
:::


## AD Classes Filter

Use the AD Classes filter to set the scope of the policy to only monitor specific classes within
Active Directory or to exclude specific classes from being monitored.

![Policy window - AD Classes filter](/images/threatprevention/7.4/admin/policies/eventtype/adclasses.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the
  [Class List Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/classlist.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

## AD Objects Filter

Use the AD Objects filter to set the scope of the policy to only monitor specific objects in Active
Directory or to exclude specific objects from being monitored.

![Policy window - AD Objects filter](/images/threatprevention/7.4/admin/policies/eventtype/adobjects.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the
  [Select Active Directory Objects Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/objects.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the
[Dynamic Collections](/docs/threatprevention/7.4/admin/configuration/collectionmanager/dynamic.md)
topic for additional information.
:::


## AD Context Filter

Use the AD Context filter to set the scope of the policy to only monitor specific contexts (e.g.
containers and organizational units) in Active Directory or to exclude specific contexts from being
monitored.

![Policy window - AD Context filter](/images/threatprevention/7.4/admin/policies/eventtype/adcontext.webp)

Use the buttons in the Include Contexts, Include Collections, Exclude Contexts, and Exclude
Collections areas to edit the lists.

- The Context Add (+) button opens the
  [Select Active Directory Contexts Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/context.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

**Sub Tree**

![Sub-Tree option in event type filters](/images/threatprevention/7.4/admin/policies/eventtype/subtree.webp)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent
and all child contexts. Uncheck it to apply the filter to the listed context only.

## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific
security principals committing changes or to exclude specific security principals committing changes
from being monitored.

![Event Type - AD Perpetrator Monitoring filter](/images/threatprevention/7.4/admin/policies/eventtype/adperpetratormonitoring.webp)

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude
Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/perpetrators.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the
[Dynamic Collections](/docs/threatprevention/7.4/admin/configuration/collectionmanager/dynamic.md)
topic for additional information.
:::


**Sub Tree**

![Sub-Tree option in event type filters](/images/threatprevention/7.4/admin/policies/eventtype/subtree.webp)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent
and all child contexts. Uncheck it to apply the filter to the listed context only.

## AD Attributes Filter

Use the AD Attributes filter to set the scope of the policy to only monitor specific Active
Directory attributes or to exclude specific attributes from being monitored.

![Policy window - AD Attributes Monitoring filter](/images/threatprevention/7.4/admin/policies/eventtype/adattributesmonitor.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Attributes Add (+) button opens the
  [Attribute List Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/attributelist.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

## Hosts (from) Filter

Use the Hosts (from) filter for monitoring to set the scope of the policy to only monitor specific
hosts as originators of an event or to exclude specific hosts from being monitored.

![Event Type – Hosts (from) filter](/images/threatprevention/7.4/admin/policies/eventtype/hostsfrom.webp)

Use the buttons in the Include Hosts, Include Collections, Exclude Hosts, and Exclude Collections
areas to edit the lists.

- The Hosts Add (+) button opens the
  [Select Computer Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/selectcomputers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the
[Dynamic Collections](/docs/threatprevention/7.4/admin/configuration/collectionmanager/dynamic.md)
topic for additional information.
:::


## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used
for troubleshooting.

![Event Type - Rule Preview filter](/images/threatprevention/7.4/admin/policies/eventtype/rulepreview.webp)

The text displayed represents the rules created based on the policy’s selected filters. Each row is
a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple
rows so that all of it is visible.
