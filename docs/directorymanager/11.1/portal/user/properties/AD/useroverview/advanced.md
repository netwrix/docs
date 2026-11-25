---
title: "Advanced User and Mailbox Settings in Directory Manager"
description: "Set the home page, employee details, address book visibility, and mail forwarding for a user or mailbox on the Advanced tab."
keywords:
  - Advanced tab
  - hide from address book
  - mailbox forwarding
  - employee ID
sidebar_position: 20
---

# Advanced User and Mailbox Settings in Directory Manager

Use this tab to specify advanced settings for a user or mailbox.

**Home Page**

The URL of the website of the user or mailbox.

Use the Add and Remove buttons to add or remove the URL.

**Emp Type**

The job category of the user or mailbox.

**Emp #**

The employee ID of the user or mailbox.

**Hide from address book**

Select this checkbox to hide the user in the address book of the messaging provider, such as the Outlook address book. The user isn't visible in the address book.

This option is available for user objects only.

**Admin Notes**

Notes from the administrator.

## For mailbox objects only

**Server**

The server name of the messaging provider where the mailbox resides.

**Recipient**

An email address or mailbox object that receives the emails sent to the mailbox.

Enter a search string to locate the object to add as a recipient. Or click the ellipsis button to search with [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md).

**Deliver messages to both forwarding address and mailbox**

Select this checkbox to also forward any email sent to the mailbox to the object or email address in the Recipient box.

- When no recipient is set and this checkbox is cleared, emails are sent only to the mailbox.
- When a recipient is specified in the Recipient box and this checkbox is cleared, emails go only to the recipient, not to the mailbox.
