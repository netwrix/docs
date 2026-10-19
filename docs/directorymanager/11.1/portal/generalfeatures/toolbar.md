---
title: "Toolbar"
description: "Toolbar"
sidebar_position: 10
---

# Toolbar

Use the toolbar to perform different actions on the portal pages. Buttons on the toolbar vary,
depending on the page you are on. Toolbar buttons are listed in the following table.

| Button | Description |
| --- | --- |
| ![expire](/images/directorymanager/11.1/portal/expire.webp) | The behavior of this button depends on the expiry policy of the selected group. <ul><li>When the group has its expiry policy set to ‘never expire’, clicking this button displays an error message that the group can't be expired.</li><li>When the group has an expiry policy other than ‘never expire’, clicking this button expires the group and moves it to the My Expired Groups page.</li><li>A group without an expiry policy will not expire. <br />Directory groups that are created outside of Directory Manager don't have an expiry policy.</li></ul> |
| ![properties](/images/directorymanager/11.1/portal/properties.webp) | View the properties of the selected object.   |
| ![update](/images/directorymanager/11.1/portal/update.webp) | Use this button to manually update a Smart Group. <br />Clicking this button displays a dialog box showing the progress of the Smart Group Update job. To run this job in the background, click the **Run in Background** buttons. <br />Use the **Background Tasks** icon in the top right corner to view the status of the Smart Group Update jobs. |
| ![join](/images/directorymanager/11.1/portal/join.webp) | Use this button to join groups. <ol><li>Click the arrow and select one of the following: <ul><li>**Join perpetually** - to join the selected groups permanently.</li><li>**Join temporarily** - to join the selected groups for a specified period. At the end of the period, you are automatically removed from the group membership.</li></ul></li><li>Click the **Join** button.</li></ol> The **Other** option is visible to users with the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission in the identity store. It allows a user to join a group permanently or temporarily on behalf of a direct report or peer. |
| ![leave](/images/directorymanager/11.1/portal/leave.webp) | Use this button to leave groups. <ol><li>Click the arrow and select one of the following: <ul><li>**Leave perpetually** - to leave the selected groups permanently.</li><li>**Leave temporarily** - to leave the selected groups for a specified period. At the end of the period, you are automatically added back to the group membership.</li></ul></li><li>Click the **Leave** button.</li></ol> The **Other** option is visible to users with the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission in the identity store. It allows a user to leave a group permanently or temporarily on behalf of a direct report or peer. |
| ![managedby](/images/directorymanager/11.1/portal/managedby.webp) | View the groups managed by the selected object, i.e., the groups for which the selected object is a primary or additional owner. |
| ![addtogroup](/images/directorymanager/11.1/portal/addtogroup.webp) | Adds the selected objects to the membership of one or more groups. Click the button to search for groups to add the selected objects to. |
| ![exportresult](/images/directorymanager/11.1/portal/exportresult.webp) | Exports the displayed object list to a Microsoft Excel file. |
| ![addtocontacts](/images/directorymanager/11.1/portal/addtocontacts.webp) | Creates a vCard file for the selected object and prompts you to save it on your machine. You can then use it to add the group's email address to your email contact list. <br />This feature requires a program registered for the vCard MIME type, such as Microsoft Outlook or Microsoft Outlook Express. |
| ![sendemail](/images/directorymanager/11.1/portal/sendemail.webp) | Sends an email to the selected objects. <br />Clicking this button launches the default Windows email application for sending email. |
| ![renew](/images/directorymanager/11.1/portal/renew.webp) | Renews the selected groups by re-applying the expiration policy of the group, starting from today. |
| ![attesticon](/images/directorymanager/11.1/portal/attesticon.webp) | Verify and validate a group's attributes and membership; then renew the group by re-applying its expiration policy, starting from today. |
| ![delete](/images/directorymanager/11.1/portal/delete.webp) | Deletes the selected users and contacts. <br />For groups, it physically deletes expired and logically deleted groups. Physically deleted groups aren't available in the portal anymore. <br />It doesn't delete groups with a valid expiry policy. |
| ![save](/images/directorymanager/11.1/portal/save.webp) | Saves your changes. |
| ![import](/images/directorymanager/11.1/portal/import.webp) | Add members or additional owners to a group using an external file. |
| ![export](/images/directorymanager/11.1/portal/export.webp) | Export members or additional owners of a group to an external file. |
| ![movegroup](/images/directorymanager/11.1/portal/movegroup.webp) | Move groups from one container to another. |
| ![setowner](/images/directorymanager/11.1/portal/setowner.webp) | Set owner for a group. |
| ![securitytype](/images/directorymanager/11.1/portal/securitytype.webp) | Set security type of a group. |
| ![expiration](/images/directorymanager/11.1/portal/expiration.webp) | Set the expiration policy of a group. |
| ![resetpassword](/images/directorymanager/11.1/portal/resetpassword.webp) | Reset password for a user. |
| ![heirarchy](/images/directorymanager/11.1/portal/heirarchy.webp) | View the organizational hierarchy chart of a user. |
| ![validate](/images/directorymanager/11.1/portal/validate.webp)  | Verify and update your profile information. |
| ![subscribe](/images/directorymanager/11.1/portal/subscribe.webp) | Subscribe to the Teams channel. <br />Only non MFA Microsoft Entra ID users can subscribe to the Teams channel. |
| ![unsubscribe](/images/directorymanager/11.1/portal/unsubscribe.webp) | Unsubscribe from the Team channel. |
