---
title: "Email tab"
description: "Group properties - Email tab"
sidebar_position: 70
---

# Email tab

Use this tab to view the email addresses assigned to this group. If your portal is connected to an
identity store having Exchange 2013/2016/2019 deployed; then on this tab, you can also specify
Exchange additional owners for the group. Exchange additional owners have the same privileges as the
primary owner.

**Addresses**

In case of a mail-enabled group, Microsoft Exchange assigns different addresses to it for
communication with different repositories (such as Address Book, SIP, Outlook). These addresses are
displayed in this box.

**Managed by**

Microsoft Exchange 2013/2016/2019 offers the co-managed by feature that enables you to specify
Exchange additional owners for a group.

The **Managed by** section is displayed when Microsoft Exchange Server 2013/2016/2019 is deployed as
the messaging provider for the identity store your portal is connected to. This list shows Exchange
additional owners specified for the group.

GroupID sends group expiry, deletion, and renewal notifications to all Exchange additional owners
along with the group’s primary owner and additional owners. See
[Group properties - Owner tab](/docs/directorymanager/11.1/portal/group/properties/owner.md) in group properties.

- Click **Add** to add an Exchange additional owner. Enter a search string to locate the required
  object, or click **Advance** to use the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a
  search.
- To remove an Exchange additional owner, select it and click **Remove**.

:::note
Only mail-enabled users can be designated as Exchange additional owners.

:::
