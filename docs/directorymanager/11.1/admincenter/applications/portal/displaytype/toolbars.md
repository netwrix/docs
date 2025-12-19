---
title: "Customize the Toolbars"
description: "Customize the Toolbars"
sidebar_position: 50
---

# Customize the Toolbars

Toolbars are available on different pages of the Directory Manager portal; however, not all of these
are customizable.

You can customize the following toolbars:

| Toolbar                                                | Availability in the portal                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User                                                   | The **My Profile** and user properties pages NOTE: The _Validate your profile_, _Extend_, and _Reinstate_ buttons on this toolbar are displayed in the portal when user profile validation is enabled:                                                                                                                                                       |
| Group                                                  | The group properties page NOTE: (1) The _Update_ button is not displayed for static groups. (2) The _Expire_ button is not displayed for groups with an expiation policy set to _Never Expire_. (3) The _Attest Group_ and _Renew_ buttons are displayed when group attestation is enabled. (4) The _Upgrade To_ button is displayed for static groups only. |
| Default Search                                         | The **All** tab on the **Search Results** page for Quick Search and Advanced Search                                                                                                                                                                                                                                                                          |
| Users Search                                           | The **Users** and **Contacts** tabs on the **Search Results** page for Quick Search and Advanced Search                                                                                                                                                                                                                                                      |
| Groups Search                                          | The **Groups** tab on the **Search Results** page for Quick Search and Advanced Search                                                                                                                                                                                                                                                                       |
| My Membership Groups                                   | The **My Memberships** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                         |
| My Expiring Groups                                     | The **My Expiring Groups** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                     |
| My Expired Groups                                      | The **My Expired Groups** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                      |
| My Deleted Groups                                      | The **My Deleted Groups** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                      |
| My Dynasties                                           | The **My Dynasties** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                           |
| My Smart Groups                                        | The **My Smart Groups** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                        |
| All Groups                                             | The **All Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                            |
| My Groups                                              | The **My Groups** tab of the **My Groups** page                                                                                                                                                                                                                                                                                                              |
| Expired Groups                                         | The **Expired Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                        |
| Expiring Groups                                        | The **Expiring Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                       |
| Private Groups                                         | The **Private Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                        |
| Semi-Private Groups                                    | The **Semi-Private Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                   |
| Public Groups                                          | The **Public Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                         |
| Smart Groups                                           | The **Smart Groups** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                          |
| Dynasties                                              | The **Dynasties** tab of the **All Groups** page                                                                                                                                                                                                                                                                                                             |
| My Direct Reports                                      | The **My Direct Reports** tab of the **Users** page                                                                                                                                                                                                                                                                                                          |
| Disabled Users                                         | The **Disabled Users** tab of the **Users** page                                                                                                                                                                                                                                                                                                             |
| Members Grid                                           | The **Members** tab in static group properties                                                                                                                                                                                                                                                                                                               |
| Smart Members Grid                                     | The **Members** tab in Smart Group and Dynasty properties                                                                                                                                                                                                                                                                                                    |
| User Members Of Grid                                   | The **Member Of** tab in user properties                                                                                                                                                                                                                                                                                                                     |
| Computer Members Of Grid                               | The **Member Of** tab in computer properties                                                                                                                                                                                                                                                                                                                 |
| Additional Owner                                       | The **Owner** tab in group properties                                                                                                                                                                                                                                                                                                                        |
| Additional Manager                                     | The **Organization** tab in user properties                                                                                                                                                                                                                                                                                                                  |
| Create Group Wizard – Members                          | The **Members** page of the Create New Group wizard (for static group only)                                                                                                                                                                                                                                                                                  |
| Create Group Wizard <ul><li>Additional Owner</li></ul> | The **Owners** page of the Create New Group wizard (for all group types)                                                                                                                                                                                                                                                                                     |
| Contact Member Of Grid                                 | The **Member Of** tab in contact properties                                                                                                                                                                                                                                                                                                                  |
| Group Member Of Grid                                   | The **Member Of** tab in group properties                                                                                                                                                                                                                                                                                                                    |
| Direct Reports Grid                                    | The **Organization** tab in user properties                                                                                                                                                                                                                                                                                                                  |

:::note
The **Computer Members of Grid** and **Contact Member of Grid** toolbars are not available for
a Microsoft Entra ID identity store.
:::


The buttons available on these toolbars are predefined. You cannot add or remove a button, but you
can update a few details for a button, such as its name and image.

## Update the Properties of a Toolbar Button

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Setting**s. You can design a
different portal for each of these.
4. Click **Toolbars** in the left pane; the **Toolbars** page is displayed.
5. In the **Select Toolbar Type** drop-down list, select the toolbar you want to update.  
   The **Name** area lists all buttons on this toolbar.
6. Click **Edit** for a toolbar button to update its properties.
7. On the **Toolbar Button Properties** pane, update the following information as required:

    1. **Name** – The name of the toolbar button. It is read-only.
    2. **Text** – The text displayed on the button as its name.
    3. **Show Text** – Select this check box to display the text on the button; else the button
       would be displayed without the text.
    4. **Tooltip Text** - The text to appear when a user hovers the mouse over the button.
    5. **Icon Class** – The image (icon) to be displayed for the button on the toolbar.
    6. **Active Icon Class** – The image (icon) to be displayed when a user hovers the mouse over
       this button.
    7. To manage images for Icon Class and Active Icon Class:

        - If no image has been uploaded, click **Upload** to browse and select an image to upload.
        - If an image has been uploaded, the very image is displayed. Click **Upload** to replace
          the existing image with a new one.

:::note
Image dimensions: 30 x 30 pixels
:::

        Supported formats: .webp, .jpg, .jpe, .jpeg

    8. **Visibility Level** – Select a security role. The toolbar button would be visible to users
       of this role and roles with a priority value higher than this role. See
       [Priority](/docs/directorymanager/11.1/admincenter/securityrole/manage.md).  
       Select _Never_ to hide the button from all users.

8. Click **OK**.
9. Click **Save** on the **Toolbars** page.

## Rearrange the Buttons on a Toolbar

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
different portal for each of these.
4. Click **Toolbars** in the left pane.
5. On the **Toolbars** page, select a toolbar in the **Select Toolbar Type** drop-down list.  
   The **Name** area lists all buttons on this toolbar.
6. To change the order of buttons on the toolbar, click the equal sign for a button and drag to
   change its position.
7. Click **Save**.