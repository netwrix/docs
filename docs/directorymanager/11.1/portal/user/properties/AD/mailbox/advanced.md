---
title: "Mailbox Properties Advanced Tab in Directory Manager"
description: "Set the home page, alternate recipient, and other advanced settings for a user or mailbox."
keywords:
  - mailbox advanced tab
  - alternate recipient
  - hide from address book
  - forwarding address
sidebar_position: 10
---

# Mailbox Properties Advanced Tab in Directory Manager

Use this tab to configure advanced settings for a user.

The **Server** box shows whether the object is a user or a mailbox. If it displays the name of a messaging server, the object is a mailbox. If it is empty, the object is a user.

**Home Page**

The URL of the user's website.

**Emp #**

The employee ID of the user.

**Hide from address book**

Controls whether the user appears in the messaging provider's address book, such as the Outlook address book.

If you select it, the user isn't visible in the address book.

**Recipient**

Specify an alternate recipient to receive the emails sent to this user.

Click the ellipsis button to open [Find Users, Groups, and Contacts in Directory Manager](/docs/directorymanager/11.1/portal/generalfeatures/find.md). There, you can search for and select the recipient.

To remove the alternate recipient, click the **Remove** button.

**Server**

The distinguished name (DN) of the messaging server, such as the Exchange server.

Directory Manager fills this field for a mailbox object only.

**Emp Type**

The job category of this user.

**Admin Notes**

Notes by the administrator.

**Deliver messages to both forwarding address and mailbox**

Controls whether Directory Manager also sends every email for this user to the alternate recipient.
