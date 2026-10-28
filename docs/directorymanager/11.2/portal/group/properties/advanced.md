---
title: "Advanced tab"
description: "Group properties - Advanced tab"
sidebar_position: 80
---

# Advanced tab

Use this tab to control the group's visibility in the messaging provider's address book and manage
out-of-office notifications.

You can also specify non-delivery report (NDR) recipients when this group doesn't receive a message
sent to it. The non-delivery report lets the recipient know that the message wasn't delivered.

**Admin Note**

Notes from the administrator.

**OOF Reply to originator**

Set a mail-enabled group (Group A) to send out-of-office auto-replies to the message originator
(sender), when the group (Group A) receives a message and one or more group members have
out-of-office status.

:::note
This setting applies if Microsoft Exchange is configured as the messaging system for the
identity store.
:::


**Hide membership**

Indicates whether to hide the membership of mail-enabled groups in the messaging provider's address
book (such as the Outlook address book).

If selected, the group members will not be visible from within the address book.

**Delivery Reports**

Specify non-delivery report (NDR) recipients when a message sent to this group isn't delivered. The
non-delivery report lets the recipient know that the message wasn't delivered.

Options are:

- **Report to originator** - The non-delivery report is sent to the sender to inform him or her that
  the message wasn't delivered to the target group.
- **Report to owner** - The non-delivery report is sent to the group owner to inform him or her that
  a message sent to the group wasn't delivered to group members.
- **Don't send delivery report** - Non-delivery reports aren't sent to anyone.

:::note
Non-delivery reports are sent if an SMTP server is configured for the identity store.

:::
