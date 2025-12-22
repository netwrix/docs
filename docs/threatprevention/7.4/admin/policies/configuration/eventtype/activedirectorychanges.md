---
title: "Active Directory Changes Event Type"
description: "Active Directory Changes Event Type"
sidebar_position: 10
---

# Active Directory Changes Event Type

The Active Directory Changes event type can be configured to generate an event when an Active
Directory object or attribute is changed (add, delete, modify, move, rename).

The event filters for the Active Directory Changes event type are:

- AD Event
- Domains/Servers
- AD Context
- AD Classes
- AD Attributes
- AD Objects
- AD Perpetrator
- IP Addresses (from)
- Hosts (from)
- Success

![Policy window - Active Directory Changes Event Type](/images/threatprevention/7.4/admin/policies/eventtype/adchanges.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

## AD Event Filter

Use the AD Event filter to select Active Directory events to be monitored or locked down by the
policy.

![Policy window - AD Event filter](/images/threatprevention/7.4/admin/policies/eventtype/adevent.webp)

Check the **All** box to monitor or lockdown all operations, or select specific operations:

- Object Added – The policy monitors for objects being added to Active Directory
- Object Deleted – The policy monitors for objects being deleted from Active Directory
- Object Modified – The policy monitors for Active Directory objects being modified
- Object Moved or Renamed – The policy monitors for Active Directory objects being moved or renamed

If applied to a Lockdown Event Type, the policy both monitors and lockdowns the objects based on the
selection.

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

## AD Attributes Filter

Use the AD Attributes filter to set the scope of the policy to only monitor specific Active
Directory attributes or to exclude specific attributes from being monitored.

![Policy window - AD Attributes filter](/images/threatprevention/7.4/admin/policies/eventtype/adattributes.webp)

Use the buttons in the Include Attributes, Include Collections, Exclude Attributes, and Exclude
Collections areas to edit the lists.

- The Attributes Add (+) button opens the
  [Attribute List Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/attributelist.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

**Attribute, Operator and Value**

When an attribute is selected, it is added to the filter and a drop-down menu is displayed in the
Operation column with **Any Value** selected. You can further scope the attributes to enable the
policy to only capture events based on the new value. Use the Operation and Value columns of the
Include Attributes and Exclude Attributes boxes to achieve this.

The Operation drop-down menu has the following options:

- Any Value – No scoping applied for this attribute
- (empty value) – Blank attribute values
- Equal – Attribute values that are identical to the Value field
- Not Equal – Attribute values that do not match the Value field
- Less Than – Attribute values below the numeric value or before the alphabetical value supplied in
  the Value field
- Greater Than – Attribute values above the numeric value or after the alphabetical value supplied
  in the Value field
- Contains – Attribute value includes the user supplied string (numbers are treated as strings) in
  the Value field
- Not Contain – Attribute values do not include the user supplied string (numbers are treated as
  strings) in the Value field
- Starts with – Attribute values start with the user supplied string in the Value field

Select an **Operation** and type a value in the textbox. The value may include alphanumeric
characters, string type, or dates. Only one value is supported; do not specify multiple values for
the attribute. Also the Value field is not case sensitive.

When you select another attribute, a new row is added, where you can specify an operator and a value
for that attribute. Each row is treated as an “OR” statement. If any event matches any of the
attribute filters, then the event data includes all attributes in the list.

:::note
You cannot specify more than one value for an attribute and you cannot select the same
attribute twice. To use the same attribute again, you have to add the same event type again to the
policy, select that event type and then select a previously used attribute to include in the Add
Attributes filter.
:::


When the userAccountControl attribute is included or excluded in the filter, selecting the Any Value
dropdown opens the
[User Account Control Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/useraccountcontrol.md)
with additional UAC flags to add to the filter.

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

## IP Addresses (from) Filter

Use the IP Addresses (from) filter to set the scope of the policy to specific IP addresses as
originators of an event or to exclude specific IP addresses.

![Event Type – IP Addresses (from) filter](/images/threatprevention/7.4/admin/policies/eventtype/ipaddressesfrom.webp)

Use the buttons in the Include IP Addresses, Include Collections, Exclude IP Addresses, and Exclude
Collections areas to edit the lists.

- The IP Addresses Add (+) button opens the
  [Add IP Address Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/addipaddress.md).
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


## Success Filter

The Success filter is where the policy is set to only monitor successful events, failed events, or
both.

![Event Type – Success filter](/images/threatprevention/7.4/admin/policies/eventtype/success.webp)

Select the radio button for the desired monitoring filter:

- Success – Only monitors successful events
- Failure – Only monitors failed events
- Both Success and Failure – Monitors all events that are within the scope of the respective filters
  for the event type
