---
title: "Create an Active Directory contact in Directory Manager"
description: "Create a contact object in an Active Directory identity store by using the Create Contact wizard in the Directory Manager portal."
keywords:
  - Directory Manager
  - Active Directory contact
  - Create Contact wizard
  - mail-enable contact
  - Active Directory identity store
sidebar_position: 20
---

# Create an Active Directory contact in Directory Manager

The Directory Manager portal lets you create the contact object in the directory.

:::note
The contact object type isn't supported in a Microsoft Entra ID based identity store.
:::

:::note
Pages and fields on the Create Contact wizard might differ from those discussed here because the
administrator can customize the wizard by adding or removing pages and fields.
:::


## Create a contact

To create a contact in an Active Directory identity store:

Step 1 – In the Directory Manager portal, click the **Create New** button in the left pane and
select **Contact**.

Step 2 – The Create Contact wizard opens to the Account page.

Step 3 – On the Account page:

1. Click **Browse** next to Container to select a container to create the contact in.

    This field is read-only if the administrator has predefined a container for creating new
    contacts.

2. Enter the contact's First Name, Initials, and Last Name in the respective boxes.

    The wizard uses this information to populate the Full Name and Display Name boxes.

3. Click **Next**.

Step 4 – Use the Exchange page to mail-enable the contact.

Step 5 – On the Summary page, review the settings, and then click **Finish** to complete the wizard.

:::note
If the Directory Manager administrator has specified the contact creation action for review,
your changes won't take effect until verified by an approver. See the
[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.2/portal/request/overview.md) topic for additional information.

:::
