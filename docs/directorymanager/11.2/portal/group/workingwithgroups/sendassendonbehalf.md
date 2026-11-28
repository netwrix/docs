---
title: "Send As and Send on Behalf Features for Groups"
description: "Learn how the Send As and Send on Behalf features let one object send email in Outlook as another, and how to manage their lists in the portal."
keywords:
  - Send As
  - Send on Behalf
  - Outlook From address
  - mail-enabled groups
  - group properties
sidebar_position: 30
---

# Send As and Send on Behalf Features for Groups

The administrator can configure the Send As and Send on Behalf features for a Directory Manager portal.

## Send As

With the **Send As** feature, a portal user (User A) can set another object or objects in its Send As list. An added object (User B) can choose User A’s email address in the ‘From’ field when composing a message in Outlook. The message, although sent by User B, appears as sent by User A.

## Send on Behalf

With the **Send on Behalf** feature, a portal user (User A) can set another object or objects in its Send on Behalf list. An added object (User B) can choose User A’s email address in the ‘From’ field when composing a message in Outlook. Message recipients see both User A’s address and User B’s address, because User B is the actual author of the message.

When User B sends a message using User A’s address, the ‘From’ address shows ‘From: Mailbox `<User B's address>` on behalf of Mailbox `<User A’s address>`.

## Manage the lists

The administrator can provide the Send As and Send on Behalf features on any tab in [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.2/portal/group/properties/overview.md). They appear as follows.

![Send As and Send on Behalf lists with Add and Remove buttons on a group properties tab](/images/directorymanager/11.2/portal/group/manage/sendassendon.webp)

Use the **Add** and **Remove** buttons to add and remove objects in the Send As and Send on Behalf lists.

:::note
Only mailboxes and mail-enabled groups can add objects to their Send As and Send on Behalf lists.
:::
