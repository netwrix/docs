---
title: "Group Advanced Settings in Directory Manager"
description: "Control a group's address book visibility, out-of-office replies, and non-delivery report recipients on the Advanced tab of group properties."
keywords:
  - group Advanced tab
  - out-of-office reply
  - non-delivery report
  - hide group membership
  - Microsoft Exchange
sidebar_position: 80
---

# Group Advanced Settings in Directory Manager

Use this tab to control the group's visibility in the messaging provider's address book and manage out-of-office notifications. You can also specify non-delivery report (NDR) recipients when the group doesn't receive a message sent to it. The non-delivery report lets the recipient know that the message wasn't delivered.

## Settings

**Admin Note**

Notes from the administrator.

**OOF Reply to originator**

Set a mail-enabled group (Group A) to send out-of-office auto-replies to the message originator (sender). The group sends the reply when it receives a message and one or more group members have out-of-office status.

:::note
This setting applies if Microsoft Exchange is configured as the messaging system for the identity store.
:::

**Hide membership**

Indicates whether to hide the membership of mail-enabled groups in the messaging provider's address book (such as the Outlook address book). If selected, the group members aren't visible from within the address book.

**Delivery Reports**

Specify non-delivery report (NDR) recipients when a message sent to this group isn't delivered. The non-delivery report lets the recipient know that the message wasn't delivered.

Options are:

- **Report to originator** - The non-delivery report is sent to the sender to inform them that the message wasn't delivered to the target group.
- **Report to owner** - The non-delivery report is sent to the group owner to inform them that a message sent to the group wasn't delivered to group members.
- **Don't send delivery report** - Non-delivery reports aren't sent to anyone.

:::note
Non-delivery reports are sent if an SMTP server is configured for the identity store.
:::
