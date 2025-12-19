---
title: "Advanced tab"
description: "Object properties - Advanced tab"
sidebar_position: 20
---

# Advanced tab

Use this tab to specify advanced settings for a user/mailbox.

**Home Page**

The URL of the user/mailbox's website.

Use the Add and Remove buttons to add and remove the URL.

**Emp Type**

The job category of the user/mailbox.

**Emp #**

The employee ID of the user/mailbox.

**Hide from address book**

Indicates whether to hide the user in the messaging provider's address book (such as the Outlook
address book).

When selected, the user will not be visible in the address book.

This option is available for user objects only.

**Admin Notes**

Notes by the administrator.

## For mailbox objects only

**Server**

The server name of the messaging provider where the mailbox resides.

**Recipient**

An email address or mailbox object that should receive the emails sent to the particular mailbox.

Enter a search string to locate the object to add as a recipient, or click the ellipsis button to
use the [Find Dialog Box](/docs/directorymanager/11.1/portal/generalfeatures/find.md) for performing a search.

**Deliver messages to both forwarding address and mailbox**

Select the check box to ensure that any email sent to the mailbox is also forwarded to the
object/email specified in the Recipient box.

- When no recipient is set and this check box is cleared, emails are only sent to the mailbox.
- However, when an email/object is specified in the Recipient box and this check box is cleared,
  emails will not be sent to the mailbox but only to the recipient.
