---
title: "Customize Toolbars in the Directory Manager Portal"
description: "Rename toolbar buttons, change their icons and visibility, and rearrange their order on the Directory Manager portal toolbars."
keywords:
  - Directory Manager
  - portal toolbars
  - toolbar buttons
  - button icons
  - button visibility
sidebar_position: 50
---

# Customize Toolbars in the Directory Manager Portal

Toolbars appear on different pages of the Directory Manager portal, but not all of them are customizable. The buttons on each toolbar are predefined. You can't add or remove a button, but you can change some of its details, such as its name and image.

## Customizable toolbars

You can customize the following toolbars:

| Toolbar | Availability in the portal |
| --- | --- |
| User | The **My Profile** and user properties pages<br />Note: The _Validate your profile_, _Extend_, and _Reinstate_ buttons on this toolbar are displayed in the portal when user profile validation is enabled. |
| Group | The group properties page<br />Note: (1) The _Update_ button isn't displayed for static groups. (2) The _Expire_ button isn't displayed for groups with an expiration policy set to _Never Expire_. (3) The _Attest Group_ and _Renew_ buttons are displayed when group attestation is enabled. (4) The _Upgrade To_ button is displayed for static groups only. |
| Default Search | The **All** tab on the **Search Results** page for Quick Search and Advanced Search |
| Users Search | The **Users** and **Contacts** tabs on the **Search Results** page for Quick Search and Advanced Search |
| Groups Search | The **Groups** tab on the **Search Results** page for Quick Search and Advanced Search |
| My Membership Groups | The **My Memberships** tab of the **My Groups** page |
| My Expiring Groups | The **My Expiring Groups** tab of the **My Groups** page |
| My Expired Groups | The **My Expired Groups** tab of the **My Groups** page |
| My Deleted Groups | The **My Deleted Groups** tab of the **My Groups** page |
| My Dynasties | The **My Dynasties** tab of the **My Groups** page |
| My Smart Groups | The **My Smart Groups** tab of the **My Groups** page |
| All Groups | The **All Groups** tab of the **All Groups** page |
| My Groups | The **My Groups** tab of the **My Groups** page |
| Expired Groups | The **Expired Groups** tab of the **All Groups** page |
| Expiring Groups | The **Expiring Groups** tab of the **All Groups** page |
| Private Groups | The **Private Groups** tab of the **All Groups** page |
| Semi-Private Groups | The **Semi-Private Groups** tab of the **All Groups** page |
| Public Groups | The **Public Groups** tab of the **All Groups** page |
| Smart Groups | The **Smart Groups** tab of the **All Groups** page |
| Dynasties | The **Dynasties** tab of the **All Groups** page |
| My Direct Reports | The **My Direct Reports** tab of the **Users** page |
| Disabled Users | The **Disabled Users** tab of the **Users** page |
| Members Grid | The **Members** tab in static group properties |
| Smart Members Grid | The **Members** tab in Smart Group and Dynasty properties |
| User Members Of Grid | The **Member Of** tab in user properties |
| Computer Members Of Grid | The **Member Of** tab in computer properties |
| Additional Owner | The **Owner** tab in group properties |
| Additional Manager | The **Organization** tab in user properties |
| Create Group Wizard – Members | The **Members** page of the Create New Group wizard (for static group only) |
| Create Group Wizard <ul><li>Additional Owner</li></ul> | The **Owners** page of the Create New Group wizard (for all group types) |
| Contact Member Of Grid | The **Member Of** tab in contact properties |
| Group Member Of Grid | The **Member Of** tab in group properties |
| Direct Reports Grid | The **Organization** tab in user properties |

:::note
The **Computer Members of Grid** and **Contact Member of Grid** toolbars aren't available for a Microsoft Entra ID identity store.
:::

## Update toolbar button properties

To update the properties of a toolbar button:

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, the card for each portal displays its information.
2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Design Settings**, select an identity store to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Toolbars** in the left pane. The **Toolbars** page appears.
5. In the **Select Toolbar Type** dropdown list, select the toolbar you want to update. The **Name** area lists all buttons on this toolbar.
6. Click **Edit** for the toolbar button you want to update.
7. On the **Toolbar Button Properties** pane, update the following information as needed:

   - **Name** – The name of the toolbar button. It is read-only.
   - **Text** – The text displayed on the button as its name.
   - **Show Text** – Select this checkbox to display the text on the button. Otherwise, the button appears without the text.
   - **Tooltip Text** – The text that appears when a user hovers the mouse over the button.
   - **Icon Class** – The image (icon) displayed for the button on the toolbar.
   - **Active Icon Class** – The image (icon) displayed when a user hovers the mouse over the button.
   - **Visibility Level** – Select a security role. The toolbar button is visible to users of this role and roles with a priority value higher than this role. See [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md). Select _Never_ to hide the button from all users.

   To manage the images for **Icon Class** and **Active Icon Class**:

   - If no image has been uploaded, click **Upload** to browse to an image and select it.
   - If an image has been uploaded, the image appears. Click **Upload** to replace it with a new one.

   :::note
   Image dimensions: 30 x 30 pixels. Supported formats: .webp, .jpg, .jpe, .jpeg
   :::

8. Click **OK**.
9. Click **Save** on the **Toolbars** page.

## Rearrange the buttons on a toolbar

To change the order of the buttons on a toolbar:

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, the card for each portal displays its information.
2. Click the ellipsis button for a portal and select **Settings**.
3. Under **Design Settings**, select an identity store to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Toolbars** in the left pane.
5. On the **Toolbars** page, select a toolbar in the **Select Toolbar Type** dropdown list. The **Name** area lists all buttons on this toolbar.
6. Click the equal sign for a button and drag it to a new position.
7. Click **Save**.
