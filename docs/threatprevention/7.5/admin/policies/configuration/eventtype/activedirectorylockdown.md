---
title: "Active Directory Lockdown"
description: "Active Directory Lockdown Event Type"
sidebar_position: 20
---

# Active Directory Lockdown Event Type

Based on policy rules, the Active Directory Lockdown event type can prevent a change in Active
Directory. Every time a change is prevented, an event with details about the prevented change is
generated.

The event filters for the Active Directory Lockdown event type are:

- AD Event
- AD Objects and Containers
- AD Classes and Attributes
- AD Perpetrator
- Hosts (from)
- User Account Control
- Rule Preview

![Policy window - Active Directory Lockdown Event Type](/images/threatprevention/7.5/admin/policies/eventtype/adlockdown.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


## AD Event Filter

Use the AD Event filter to select Active Directory events to be monitored or locked down by the
policy.

![Policy window - AD Event filter](/images/threatprevention/7.5/admin/policies/eventtype/adevent.webp)

Check the **All** box to monitor or lockdown all operations, or select specific operations:

- Object Added – The policy monitors for objects being added to Active Directory
- Object Deleted – The policy monitors for objects being deleted from Active Directory
- Object Modified – The policy monitors for Active Directory objects being modified
- Object Moved or Renamed – The policy monitors for Active Directory objects being moved or renamed

If applied to a Lockdown Event Type, the policy both monitors and lockdowns the objects based on the
selection.

## AD Objects and Containers Filter

Use the AD Objects and Containers filter to set the scope of the policy to lockdown changes to
specific objects or containers within Active Directory or to exclude changes to specific objects or
containers from being locked down.

![Policy window - AD Objects and Containers filter](/images/threatprevention/7.5/admin/policies/eventtype/adobjectsandcontainers.webp)

Select the **Block** or **Allow** option button and then edit the list.

Use the buttons in the Objects and Containers, Collections of Objects and Containers, and GUIDs
areas to edit the lists.

- Objects and Containers area – The Add (+) button opens the
  [Select Active Directory Contexts Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/context.md).
- Collection of Objects and Containers area – The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- GUIDs area – The Add (+) button opens the
  [Select Active Directory Contexts Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/context.md).
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

**Don’t check object names inside ‘member’ attribute**

This checkbox works with the Block option button. It controls the blocking behavior when the change
is related to adding members to a group.

- If Unchecked – Blocks attempts to add a user (DN) listed in this filter to a group
- If Checked – Allows a user (DN) listed in this filter to be added to a group

## AD Classes and Attributes Filter

Use the AD Classes And Attributes filter to set the scope of the policy to lockdown changes to
specific Active Directory classes and/or attributes, or to exclude changes to specific classes
and/or attributes from being locked down.

![Policy window - AD Classes And Attributes filter](/images/threatprevention/7.5/admin/policies/eventtype/adclassesattributes.webp)

Select the **Block** or **Allow** option button and then edit the list.

Use the buttons in the Classes and Attributes areas to edit the lists.

- Classes area – The Add (+) buttons open the [Class List Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/classlist.md).
- Attributes area – The Attributes Add (+) button opens the
  [Attribute List Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/attributelist.md).
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

## User Account Control Filter

Use the User Account Control (UAC) filter to block specific UAC settings by the policy.

![Policy window - User Account Control (UAC) filter](/images/threatprevention/7.5/admin/policies/eventtype/useraccountcontrol.webp)

The User Account Control filter displays a list of UAC flags. Choose specific userAccountControl
flags from the list using the **Attribute Set** and/or **Attribute Clear** checkboxes. If an
attribute is added or removed in Active Directory, it is blocked based on the filter set.

## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used
for troubleshooting.

![Event Type - Rule Preview filter](/images/threatprevention/7.5/admin/policies/eventtype/rulepreview.webp)

The text displayed represents the rules created based on the policy’s selected filters. Each row is
a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple
rows so that all of it is visible.
