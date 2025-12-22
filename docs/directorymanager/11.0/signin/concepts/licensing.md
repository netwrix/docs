---
title: "License GroupID"
description: "License GroupID"
sidebar_position: 80
---

# License GroupID

You can license GroupID under one or more of these license types:

- **Suite** - enables access to all GroupID functionality and its clients, including the GroupID
  portal, mobile app, Management Shell, and APIs.
- **Group Management** - enables access to all the group management features in GroupID, except
  those licensed under add-ons.
- **User Management** - enables access to all the user management features in GroupID, except those
  licensed under add-ons.
- **Password Management** - enables access to password management functions in GroupID, that are:

    - Account unlock and password reset by both end users and helpdesk
    - Multifactor authentication
    - Second way authentication

- **Add-ons** - licenses for the following add-ons are available:

    - **API** - separate licenses are required for user-specific and group-specific APIs.
    - **Workflow** - enables you to create new workflows, update existing workflows, specify a
      default approver, and delete workflow requests. Separate licenses are required for
      user-specific and group-specific workflows.
    - **Workflow Acceleration** - enables you to use the workflow approver acceleration function.
      Separate licenses are required to accelerate user-specific and group-specific workflows.
    - **Management Shell** - separate licenses are required for user-specific and group-specific
      cmdlets.
    - **Entitlement** - separate licenses are required to manage entitlements for users and groups.
    - **Synchronize Jobs** - separate licenses are required for user-specific and group-specific
      Synchronize jobs.
    - **Group Lifecycle** - required to run the Group Lifecycle schedule in the identity stores.
    - **Dynamic Groups** - required to create and manage Smart Groups and Dynasties in GroupID.
    - **Power Automate** - enables you to integrate GroupID workflows with Power Automate flows.
      Separate licenses are required for integrating user-specific and group-specific workflows.
    - **Group Usage Service** - required to run the Group Usage Service schedule in the identity
      stores.
    - **Group Attestation** - required to enable the group attestation function in the identity
      stores.
    - **Linked Identity Stores** - required to manage identical user objects and identical group
      objects in the identity store(s). It works as follows with other GroupID licenses:

        - **Suite License**: enables the linked identity stores feature fully functional. You can
          manage your linked identities. In case of an Active Directory identity store and Microsoft
          Entra ID identity store link, you can manage entitlements of File Servers and SharePoint
          sites also.
        - **Group Management license**: enables you to manage identical groups in the linked
          identity store(s) and auto sync them.
        - **User Management license**: enables you to manage identical user objects in the linked
          identity store(s) and auto sync them.
        - **Password Management license**: the linked identity stores feature works in preview mode.

A license is valid for a period of 12 months.

NOTE: All the above licenses are also available for a trial period.

NOTE: Licenses for certain add-ons are dependent on other licenses, such as the Group Attestation
license is dependent on the Group Usage Service license, which in turn is dependent on the Group
Management license.

What happens when your license expires

When a license expires, its respective functions get read-only but you can configure certain
settings, such as create identity stores, create data sources, and define replication settings.
Moreover, unlicensed functions are displayed with a yellow icon next to them. On hovering the mouse
over the icon, a message is displayed with two buttons: **Learn more** and **Upgrade**. Both buttons
redirect you to the
[Group and User Management Software from Netwrix](https://www.netwrix.com/group_and_user_management_software.html)
page, where you can learn more about GroupID and purchase or renew your GroupID licenses.

What do you want to do?

- [Add a License](#add-a-license)
- [Update a License](#update-a-license)
- [Remove a License](#remove-a-license)

## Add a License

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Licensing Settings** tab of the **GroupID Settings** page, click **Add New License**.
3. Enter a valid license number and key for your product copy in the respective boxes. A valid
   license and key enable the **Add License** button; if it remains disabled, check your entries for
   errors.
4. Click **Add License**.

    License details are displayed on the **Licensing Settings** tab as:

    - **Status:** the license status as _Valid_ or _Expired_
    - **Module:** the license type, such as _Suite_ or _Group Management_
    - **Expire:** the expiration date of the license
    - **License(s):** the number of users covered under the license
    - **Actions:** displays the _Edit_ and _Delete_ icons, enabling you to update or remove the
      license accordingly.

5. If you have multiple GroupID licenses, repeat steps 2 – 4 for each license.

## Update a License

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Licensing Settings** tab of the **GroupID Settings** page, click **Edit** for a license
   in the **Actions** column to update it.
3. On the **Update/Replace License** dialog box, update the license number and key.
4. Click **Update** to save the changes.

## Remove a License

On removing a license, users lose all access to the functionality covered under the license.

NOTE: A dependent license is rendered ineffective when you remove its parent license.

To remove a license:

1. In Admin Center, click **Settings** at the bottom of the left navigation pane.
2. On the **Licensing Settings** tab of the **GroupID Settings** page, click **Delete** for a
   license in the **Actions** column to remove it.
