---
title: "Mail-enable a user on the Exchange page"
description: "Create a user or mailbox as mail-enabled by setting the alias, email type, and email address on the Exchange page of the GroupID wizards."
keywords:
  - GroupID
  - mail-enabled user
  - Create User wizard
  - email address
  - messaging provider
sidebar_position: 60
---

# Mail-enable a user on the Exchange page

Use this page to create the object as mail-enabled.

1. Ensure that the **Mail-Enabled** checkbox is selected to create the user as mail-enabled.

    A mail-enabled user is one with an email address.

2. The **Alias** box displays an alias for the user.
3. The **Email Type** dropdown list displays all the types of email you can create.
4. In the **Email Address** box, enter an email address for the user. GroupID uses this
   email address to send email notifications to the user.
5. Click **Next**.

:::note
To create a mail-enabled user, a messaging provider (such as Microsoft Exchange) must be configured
for the identity store. If it isn't configured, the **Messaging** page is disabled.
:::

**See Also**

- [Create an AD user in GroupID](/docs/directorymanager/11.0/welcome/user/create/activedirectory/user.md)
- [Create an Active Directory contact in GroupID](/docs/directorymanager/11.0/welcome/user/create/activedirectory/contact.md)
