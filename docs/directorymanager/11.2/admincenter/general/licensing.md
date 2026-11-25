---
title: "Manage Directory Manager Licenses"
description: "Learn about Directory Manager license types and add-ons, and how to add, update, or remove a license in Admin Center."
keywords:
  - Directory Manager licensing
  - license types
  - add a license
  - license expiration
sidebar_position: 100
---

# Manage Directory Manager Licenses

You can license Directory Manager under one or more of these license types:

- **Suite**: Enables access to all Directory Manager functionality and its clients, including the Directory Manager portal, Management Shell, and APIs.
- **Group Management**: Enables access to all the group management features in Directory Manager, except those licensed under add-ons.
- **User Management**: Enables access to all the user management features in Directory Manager, except those licensed under add-ons.
- **Password Management**: Enables access to password management functions in Directory Manager, namely:

    - Account unlock and password reset by both end users and helpdesk
    - Multifactor authentication
    - Second way authentication

- **Add-ons**: Licenses for the following add-ons are available:

    - **API**: Separate licenses are required for user-specific and group-specific APIs.
    - **Workflow**: Create new workflows, update existing workflows, specify a default approver, and delete workflow requests. Separate licenses are required for user-specific and group-specific workflows.
    - **Workflow Acceleration**: Use the workflow approver acceleration function. Separate licenses are required to accelerate user-specific and group-specific workflows.
    - **Management Shell**: Separate licenses are required for user-specific and group-specific cmdlets.
    - **Entitlement**: Separate licenses are required to manage entitlements for users and groups.
    - **Synchronize Jobs**: Separate licenses are required for user-specific and group-specific Synchronize jobs.
    - **Group Lifecycle**: Required to run the Group Lifecycle schedule in the identity stores.
    - **Dynamic Groups**: Required to create and manage Smart Groups and Dynasties in Directory Manager.
    - **Power Automate**: Integrate Directory Manager workflows with Power Automate flows. Separate licenses are required to integrate user-specific and group-specific workflows.
    - **Group Usage Service**: Required to run the Group Usage Service schedule in the identity stores.
    - **Group Attestation**: Required to enable the group attestation function in the identity stores.
    - **Linked Identity Stores**: Required to manage identical user objects and identical group objects in the identity stores. It works as follows with other Directory Manager licenses:

        - **Suite License**: The linked identity stores feature is fully functional. You can manage your linked identities. For a link between an Active Directory identity store and a Microsoft Entra ID identity store, you can also manage entitlements of file servers and SharePoint sites.
        - **Group Management license**: Manage identical groups in the linked identity stores and synchronize them automatically.
        - **User Management license**: Manage identical user objects in the linked identity stores and synchronize them automatically.
        - **Password Management license**: The linked identity stores feature works in preview mode.

A license is valid for a period of 12 months.

:::note
All the preceding licenses are also available for a trial period.
:::

:::note
Licenses for certain add-ons depend on other licenses. For example, the Group Attestation license depends on the Group Usage Service license, which in turn depends on the Group Management license.
:::

**What happens when your license expires**

When a license expires, its functions become read-only. You can still configure certain settings, such as creating identity stores, creating data sources, and defining replication settings.

Directory Manager displays a yellow icon next to unlicensed functions. When you hover over the icon, a message appears with two buttons: **Directory Manager licensing** and **Upgrade**. Both buttons open the [Directory Manager licensing and pricing page](https://www.netwrix.com/group_and_user_management_software.html), where you can review the available licenses and purchase or renew them.

## Add a license

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Licensing Settings** tab of the **Directory Manager Settings** page, click **Add New License**.
3. Enter a valid license number and key for your product copy in the respective boxes.

    A valid license and key enable the **Add License** button. If the button stays disabled, check your entries for errors.

4. Click **Add License**.

    The **Licensing Settings** tab displays the license details:

    - **Status:** The license status, _Valid_ or _Expired_.
    - **Module:** The license type, such as _Suite_ or _Group Management_.
    - **Expire:** The expiration date of the license.
    - **Licenses:** The number of users covered under the license.
    - **Actions:** The _Edit_ and _Delete_ icons, which let you update or remove the license.

5. If you have multiple Directory Manager licenses, repeat steps 2 through 4 for each license.

## Update a license

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Licensing Settings** tab of the **Directory Manager Settings** page, click **Edit** for a license in the **Actions** column.
3. In the **Update/Replace License** dialog box, update the license number and key.
4. Click **Update** to save the changes.

## Remove a license

When you remove a license, users lose all access to the functionality covered under the license.

:::note
A dependent license becomes ineffective when you remove its parent license.
:::

To remove a license:

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Licensing Settings** tab of the **Directory Manager Settings** page, click **Delete** for a license in the **Actions** column.
