---
title: "Group Email tab and Exchange additional owners"
description: "View a group's email addresses and add Exchange additional owners who share the primary owner's privileges, from the Email tab."
keywords:
  - Exchange additional owners
  - Managed by
  - mail-enabled group
  - group email addresses
sidebar_position: 70
---

# Group Email tab and Exchange additional owners

Use this tab to view the email addresses assigned to the group. If your portal connects to an identity store that has Exchange 2013/2016/2019 deployed, you can also specify Exchange additional owners for the group on this tab. Exchange additional owners have the same privileges as the primary owner.

**Addresses**

For a mail-enabled group, Microsoft Exchange assigns different addresses for communication with different repositories, such as Address Book, SIP, and Outlook. This box displays these addresses.

**Managed by**

Microsoft Exchange 2013/2016/2019 offers the co-managed by feature. Use it to specify additional owners for a group.

The **Managed by** section appears when Microsoft Exchange Server 2013/2016/2019 is the messaging provider for the identity store your portal connects to. This list shows the Exchange additional owners specified for the group.

Directory Manager sends group expiry, deletion, and renewal notifications to all Exchange additional owners, the group's primary owner, and its additional owners. See [Group properties - Owner tab](/docs/directorymanager/11.1/portal/group/properties/owner.md) in group properties.

- To add an Exchange additional owner, click **Add**. Enter a search string to locate the object, or click **Advance** to search with [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md).
- To remove an Exchange additional owner, select it and click **Remove**.

:::note
Only mail-enabled users can be Exchange additional owners.
:::

