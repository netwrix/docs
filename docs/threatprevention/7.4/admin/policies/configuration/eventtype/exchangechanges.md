---
title: "Exchange Changes Event Type"
description: "Exchange Changes Event Type"
sidebar_position: 90
---

# Exchange Changes Event Type

The Exchange Changes event type produces events for specified activities on the Exchange Server.

The event filters for the Exchange Changes event type are:

- Exchange Event
- Exchange Mailbox Objects and Containers
- Exchange Trustees
- Exchange Perpetrators
- Rule Preview

![Policy window - Exchange Changes Event Type](/images/threatprevention/7.4/admin/policies/eventtype/exchangechanges.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

## Exchange Event Filter

On the Exchange Event filter for monitoring, select the types of Exchange events to be monitored by
the policy.

![Policy window - Exchange Event filter for monitoring](/images/threatprevention/7.4/admin/policies/eventtype/exchangeevent.webp)

Check the **All** box at the top of the tab to include all operations and permissions or select
specific operations and permissions:

- Operations:

  - All – All listed operation events
  - Logons – Scope to Exchange logon events
  - Attachments – Scope to events with Attachments added to an Exchange message
  - Create Message – Scope to Exchange message creation events
  - Delete Message – Scope to Exchange message deletion events
  - Modify Message – Scope to Exchange message modification events
  - Read Message – Scope to Exchange message read events
  - Send Message – Scope to Exchange message send events

- Permissions:

  - All – All listed permission changes
  - Mailbox Permissions – Scope to mailbox permissions changes
  - Folder Permissions – Scope to folder permissions changes

## Exchange Mailbox Objects and Containers Filter

Use the Exchange Mailbox Objects and Containers filter for monitoring to set the scope of the policy
to monitor changes to specific objects or containers within Exchange or to exclude changes to
specific objects or containers from being monitored.

![Policy window - Exchange Mailbox Objects and Containers filter](/images/threatprevention/7.4/admin/policies/eventtype/exchangemailboxobjectsandcontainers.webp)

Select the **Include** or **Exclude** button and then edit the list.

- The **Add** (+) button opens the
  [Select Exchange Objects from Active Directory Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/exchangeobjects.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

## Exchange Trustees Filter

Use the Exchange Trustees filter for monitoring to set the scope of the policy to only monitor
specific Exchange trustees. Trustees are the accounts receiving permissions. For example, if an
administrator grants Joe Smith access to Bob Wilson's mailbox, Joe Smith is the trustee that is
granted permissions.

![Policy window - Exchange Trustees filter](/images/threatprevention/7.4/admin/policies/eventtype/exchangetrustees.webp)

Select the **Include** or **Exclude** button and then edit the list. Select the radio button for
either **Include** or **Exclude**.

Use the buttons in the Trustees and Collections of Trustees areas to edit the lists.

- The Trustees **Add** (+) button opens the
  [Select Active Directory Trustees Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/trustees.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

The other option button options dictate how the Exchange Trustees filter and the Exchange
Perpetrators filter relate to each other. They include:

- Trustee OR Perpetrator Must Be Met – When either the Trustee selection OR the Perpetrator
  selection is met, the filter will be set to true

  - For an Include example, if this policy is monitoring a CEO mailbox, the Trustee list is set to
    includes Brad Wilson, and the Perpetrator list is set to include Administrator, then the
    policy will monitor when Brad Wilson is added as the mailbox trustee by anyone AND it will
    monitor anyone else added as the mailbox trustee by Administrator.
  - For an Exclude example, if this policy is monitoring a CEO mailbox, the Trustee list is set to
    exclude Brad Wilson, and the Perpetrator list is set to exclude Administrator, then the policy
    will not monitor when Brad Wilson is added as the mailbox trustee by anyone AND it will not
    monitor anyone else added as the mailbox trustee by Administrator.

- Trustee AND Perpetrator Must Be Met – Both the Trustee selection AND the Perpetrator selection
  must be met

  - For an Include example, if this policy is monitoring a CEO mailbox, the Trustee list is set to
    includes Brad Wilson, and the Perpetrator list is set to include Administrator, then the
    policy will monitor when Administrator adds Brad Wilson as the mailbox trustee.
  - For an Exclude example, if this policy is monitoring a CEO mailbox, the Trustee list is set to
    exclude Brad Wilson, and the Perpetrator list is set to exclude Administrator, then the policy
    will not monitor when Administrator adds Brad Wilson as the mailbox trustee.

## Exchange Perpetrators Filter

Use the Exchange Perpetrator filter for monitoring to set the scope of the policy to only monitor
specific security principals committing changes or to exclude specific security principals
committing changes from being monitored.

![Policy window - Exchange Perpetrator filter](/images/threatprevention/7.4/admin/policies/eventtype/exchangeperpetrator.webp)

Options at the top enable you to include or exclude monitoring user access to mailboxes based on the
assigned roles.

The Logged on As checkbox options are:

- Delegate – User who is not the owner of the mailbox being accessed
- Administrator – User who is not the owner of the mailbox being accessed but has administrative
  privileges
- Owner – User who is the owner of the mailbox being accessed

The Logged on As radio button options include:

- AND Perpetrators Must be Met – Both the Logged On As selection AND the Perpetrator must be met
  before the event passes the filter

  - When the Include option button is selected for both the Logged On As options – If the
    Administrator is Included for the Logged On As option and Joe Smith is Included in the
    Perpetrator list, then the filter will only be true if the event is triggered by Joe Smith AND
    Joe Smith is an Administrator of the affected mailbox.
  - When the Include option button is selected for the Logged On As checkboxes and the Exclude
    option button is selected for the AND/OR options – FIf the Administrator is Included for the
    Logged On As option and Joe Smith is Excluded in the Perpetrator list, then the filter will
    only be true if the event is triggered by Joe Smith AND Joe Smith is not an administrator of
    the affected mailbox.

- OR Perpetrators Must Be Met – When either the Logged On As selection OR the Perpetrator is met,
  the filter is set to true

  - When the Include option button is selected for both the Logged On As options – , If
    Administrator is Included for the Logged On As option and Joe Smith is Included in the
    Perpetrator list, then the filter will be true if the event is triggered when Joe Smith made
    changes to the mailbox OR when an Administrator made a change to the mailbox.
  - When the Include option button is selected for the Logged On As checkboxes and the Exclude
    option button is selected for the AND/OR options – If Administrator is Included for the Logged
    On As option and Joe Smith is Excluded in the Perpetrator list, then the filter will be true
    if the event is triggered when anyone other than Joe Smith made changes to the mailbox OR when
    an Administrator made a change to the mailbox.

Both the checkboxes and the option buttons have their own set of Include or Exclude options.

Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

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


## Rule Preview Filter

The Rule Preview filter displays a summary of the selected filter options. This is primarily used
for troubleshooting.

![Event Type - Rule Preview filter](/images/threatprevention/7.4/admin/policies/eventtype/rulepreview.webp)

The text displayed represents the rules created based on the policy’s selected filters. Each row is
a selected filter. Notice the Word Wrap checkox. If checked, a filter statement may cover multiple
rows so that all of it is visible.
