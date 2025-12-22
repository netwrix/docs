---
title: "Create an AD Contact"
description: "Create an AD Contact"
sidebar_position: 20
---

# Create an AD Contact

The Directory Manager portal enables you to create the contact object in the directory.

:::note
The contact object type is not supported in a Microsoft Entra ID based identity store.
:::


:::note
Pages and fields on the Create Contact wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.
:::


## Create a contact

Follow the steps to create a contact in an Active Directory identity store.

Step 1 – In the Directory Manager portal, click the **Create New** button in the left pane and
select **Contact**.

Step 2 – The Create Contact wizard opens to the Account page.

Step 3 – On the Account page:

1. Click **Browse** next to Container to select a container to create the contact in.

    This field would be read-only if the administrator has pre-defined a container for creating new
    contacts.

2. Enter the contact's First Name, Initials, and Last Name in the respective boxes.

    The wizard uses this information to populate the Full Name and Display Name boxes.

3. Click **Next**.

Step 4 – Use the Exchange page to mail-enable the contact.

Step 5 – On the Summary page, review the settings and then click Finish to complete the wizard.

:::note
If the Directory Manager administrator has specified the contact creation action for review,
your changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.

:::
