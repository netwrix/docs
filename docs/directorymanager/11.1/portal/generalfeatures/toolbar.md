---
title: "Directory Manager Portal Toolbar Buttons"
description: "Look up what each toolbar button does in the Directory Manager portal, such as expire, join, leave, renew, export, and reset password."
keywords:
  - portal toolbar
  - toolbar buttons
  - join group
  - leave group
  - expire group
  - renew group
sidebar_position: 10
---

# Directory Manager Portal Toolbar Buttons

Use the toolbar to perform different actions on the portal pages. The buttons on the toolbar vary with the page you are on. The following table lists the toolbar buttons.

| Button | Description |
| --- | --- |
| ![Expire button](/images/directorymanager/11.1/portal/expire.webp) | The behavior of this button depends on the expiry policy of the selected group. <ul><li>When the group has its expiry policy set to ‘never expire’, clicking this button displays an error message that the group can't be expired.</li><li>When the group has an expiry policy other than ‘never expire’, clicking this button expires the group and moves it to the My Expired Groups page.</li><li>A group without an expiry policy doesn't expire. <br />Directory groups created outside of Directory Manager don't have an expiry policy.</li></ul> |
| ![Properties button](/images/directorymanager/11.1/portal/properties.webp) | View the properties of the selected object.   |
| ![Update button](/images/directorymanager/11.1/portal/update.webp) | Use this button to manually update a Smart Group. <br />Clicking this button displays a dialog box showing the progress of the Smart Group Update job. To run this job in the background, click the **Run in Background** button. <br />Use the **Background Tasks** icon in the top right corner to view the status of the Smart Group Update jobs. |
| ![Join button](/images/directorymanager/11.1/portal/join.webp) | Use this button to join groups. <ol><li>Click the arrow and select one of the following: <ul><li>**Join perpetually** - to join the selected groups permanently.</li><li>**Join temporarily** - to join the selected groups for a specified period. At the end of the period, you are automatically removed from the group membership.</li></ul></li><li>Click the **Join** button.</li></ol> The **Other** option is visible to users with the **Manage my Direct Reports** or **Join/Leave on behalf of Peer** permission in the identity store. It allows a user to join a group permanently or temporarily on behalf of a direct report or peer. |
| ![Leave button](/images/directorymanager/11.1/portal/leave.webp) | Use this button to leave groups. <ol><li>Click the arrow and select one of the following: <ul><li>**Leave perpetually** - to leave the selected groups permanently.</li><li>**Leave temporarily** - to leave the selected groups for a specified period. At the end of the period, you are automatically added back to the group membership.</li></ul></li><li>Click the **Leave** button.</li></ol> The **Other** option is visible to users with the **Manage my Direct Reports** or **Join/Leave on behalf of Peer** permission in the identity store. It allows a user to leave a group permanently or temporarily on behalf of a direct report or peer. |
| ![Managed By button](/images/directorymanager/11.1/portal/managedby.webp) | View the groups managed by the selected object, which are the groups for which the selected object is a primary or additional owner. |
| ![Add to Group button](/images/directorymanager/11.1/portal/addtogroup.webp) | Adds the selected objects to the membership of one or more groups. Click the button to search for groups to add the selected objects to. |
| ![Export Result button](/images/directorymanager/11.1/portal/exportresult.webp) | Exports the displayed object list to a Microsoft Excel file. |
| ![Add to Contacts button](/images/directorymanager/11.1/portal/addtocontacts.webp) | Creates a vCard file for the selected object and prompts you to save it on your machine. You can then use it to add the group's email address to your email contact list. <br />This feature requires a program registered for the vCard MIME type, such as Microsoft Outlook or Microsoft Outlook Express. |
| ![Send Email button](/images/directorymanager/11.1/portal/sendemail.webp) | Sends an email to the selected objects. <br />Clicking this button launches the default Windows email application for sending email. |
| ![Renew button](/images/directorymanager/11.1/portal/renew.webp) | Renews the selected groups by re-applying the expiration policy of the group, starting from today. |
| ![Attest button](/images/directorymanager/11.1/portal/attesticon.webp) | Verify and validate a group's attributes and membership, and then renew the group by re-applying its expiration policy, starting from today. |
| ![Delete button](/images/directorymanager/11.1/portal/delete.webp) | Deletes the selected users and contacts. <br />For groups, it physically deletes expired and logically deleted groups. Physically deleted groups aren't available in the portal anymore. <br />It doesn't delete groups with a valid expiry policy. |
| ![Save button](/images/directorymanager/11.1/portal/save.webp) | Saves your changes. |
| ![Import button](/images/directorymanager/11.1/portal/import.webp) | Add members or additional owners to a group using an external file. |
| ![Export button](/images/directorymanager/11.1/portal/export.webp) | Export members or additional owners of a group to an external file. |
| ![Move Group button](/images/directorymanager/11.1/portal/movegroup.webp) | Move groups from one container to another. |
| ![Set Owner button](/images/directorymanager/11.1/portal/setowner.webp) | Set the owner of a group. |
| ![Security Type button](/images/directorymanager/11.1/portal/securitytype.webp) | Set the security type of a group. |
| ![Expiration button](/images/directorymanager/11.1/portal/expiration.webp) | Set the expiration policy of a group. |
| ![Reset Password button](/images/directorymanager/11.1/portal/resetpassword.webp) | Reset the password of a user. |
| ![Hierarchy button](/images/directorymanager/11.1/portal/heirarchy.webp) | View the organizational hierarchy chart of a user. |
| ![Validate button](/images/directorymanager/11.1/portal/validate.webp)  | Verify and update your profile information. |
| ![Subscribe button](/images/directorymanager/11.1/portal/subscribe.webp) | Subscribe to the Teams channel. <br />Only non-MFA Microsoft Entra ID users can subscribe to the Teams channel. |
| ![Unsubscribe button](/images/directorymanager/11.1/portal/unsubscribe.webp) | Unsubscribe from the Teams channel. |
