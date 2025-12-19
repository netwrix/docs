---
title: "Security Role – Permissions"
description: "Security Role – Permissions"
sidebar_position: 40
---

# Security Role – Permissions

You can allow or deny permissions to a security role on different GroupID functions.

On the **Create Security Role/Copy Security Role/Update Security Role** page, click **Select what
members can do** in the **Permissions** area to grant permissions to role members.

By default, all permissions displayed on the **Add Permissions** dialog box are denied to the new
role. Select the **Allow** option button for a permission to grant it to the role. To deny a
permission, select the **Deny** option button. After assigning the required permissions, click
**OK**.

Permissions are grouped under the following heads, with each tab representing a different head:

- [Users](#users)
- [Groups](#groups)
- [Admin Center](#admin-center)
- [Synchronize](#synchronize)
- [Password Management](#password-management)
- [Miscellaneous](#miscellaneous)
- [Container](#container)
- [Entitlement](#entitlement)

## Users

User-related permissions apply to all the GroupID clients that facilitate user management, such as
the GroupID portal, GroupID Management Shell, and the GroupID mobile app.

Click the **Users** tab on the **Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions                      | Descriptions                                                                                                                                     |
| --- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.  | Create Mailbox                   | Enables role members to create mailbox-enabled users.                                                                                            |
| 2.  | Manage My Direct Reports         | Enables role members to update the properties of their respective direct reports and add/remove them from the membership of groups.              |
| 3.  | Create Contact                   | Enables role members to create contact objects.                                                                                                  |
| 4.  | Create User                      | Enables role members to create users (both mail-enabled and non-mail enabled).                                                                   |
| 5.  | Delete                           | Enables role members to delete users from the directory.                                                                                         |
| 6.  | Join/Leave on behalf of any user | Enables role members to add/remove any user from the membership of groups.                                                                       |
| 7.  | Join/Leave on behalf of Peer     | Enables role members to add/remove their peers from the membership of groups. ‘Peers’ refer to users who report to the same manager as the user. |
| 8.  | Manage Any Profile               | Enables role members to update the profiles of other users.                                                                                      |
| 9.  | Manage My Profile                | Enables role members to update their directory profiles.                                                                                         |

Remember, Generalized permissions override limited permissions. Hence, if **Manage My Profile** is
denied and **Manage Any Profile** allowed, role members can manage their own profiles as well.

## Groups

Group-related permissions apply to all the GroupID clients that facilitate group management, such as
the GroupID portal, GroupID Management Shell, and the GroupID mobile app.

Click the **Groups** tab on the **Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions         | Descriptions                                                                                                                                                                                                           |
| --- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Manage My Groups    | Enables role members to modify the groups they own as primary owner, additional owner, and Exchange 2013/2016/2019 additional owner. Role members can update group properties, delete groups, expire groups, and more. |
| 2.  | Create Static Group | Enables role members to create static (unmanaged) groups.                                                                                                                                                              |
| 3.  | Create Smart Group  | Enables role members to create Smart Groups and Dynasties (managed groups).                                                                                                                                            |
| 4.  | Manage Any Group    | Enables role members to update the properties of any group, delete any group, expire any group, and more.                                                                                                              |

Remember, Generalized permissions override limited permissions. So, if **Manage My Groups** is
denied and **Manage Any Group** allowed, role members can manage all groups, including their own
groups.

## Admin Center

To manage permissions for Admin Center, click the **Admin Center** tab on the **Add Permissions**
dialog box.

Permissions are discussed in the following table:

|     | Permissions                          | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.  | Create Application                   | Enables role members to create a new application using the **Applications** node in Admin Center: This permission only allows role members to create an application from scratch. They cannot create an application by copying an existing one or create another instance of an application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.  | Create Data Source                   | Enables role members to create data sources for Synchronize jobs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.  | Create Identity Store                | Enables role members to create identity stores in GroupID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.  | Manage Admin Center Settings         | Enables role members to manage the following in Admin Center settings: - Add and remove question to the global question pool. - Add, edit, and remove GroupID licenses. - Download log files for GroupID. These options can be accessed by clicking the **Settings** button at the bottom of the left navigation pane in Admin Center. If this permission is denied, role members can view the question pool, licenses, and dump logs function as read-only.                                                                                                                                                                                                                                                                                                                         |
| 5.  | Manage Application Design Settings   | Enables role members to update the design settings for an application in Admin Center. Applications can be accessed using the **Applications** node in the left pane. If this permission is denied, design settings are displayed to role members as read-only. NOTE: The **Manage Applications** permission must be granted to the role as a prerequisite to the **Manage Application Design Settings** permission.                                                                                                                                                                                                                                                                                                                                                                 |
| 6.  | Manage Application Server Settings   | Enables role members to update the server settings for an application in Admin Center. Applications can be accessed using the **Applications** node in the left pane. If this permission is denied, server settings are displayed to role members as read-only. NOTE: The **Manage Applications** permission must be granted to the role as a prerequisite to the **Manage Application Server Settings** permission.                                                                                                                                                                                                                                                                                                                                                                 |
| 7.  | Manage Applications                  | Enables role members to do the following using the **Applications** node in Admin Center: - Create new applications by copying an existing application, deploy instances of an application, and delete an application. - View the already created applications as read-only. NOTE: If you allow this permission to the role while denying the **Manage Application Server Settings** and **Manage Application Design Settings** permissions, role members will not be able to update the server and design settings for an application. These settings will be displayed as read-only. To enable them to update the server and design configurations for an application, this permission must be granted as a prerequisite along with the respective permission(s).                  |
| 8.  | Manage Data Source                   | Enables role members to update and delete the data sources created for Synchronize jobs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9.  | Manage Entitlement                   | **For an Active Directory identity store:** Enables role members to specify and manage file servers for entitlement analysis in an Active Directory identity store. **For a Microsoft Entra ID identity store:** Enables role members to specify and manage SharePoint sites for entitlement analysis in a Microsoft Entra ID identity store. If this permission is denied, the Entitlement page in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Entitlement** permission.                                                                                                                                                                             |
| 10. | Manage Identity Store                | Enables role members to do the following using the **Identity Stores** node in Admin Center: - Disable and delete identity stores. - View the properties of identity stores as read-only. NOTE: To enable role members to define and update identity store properties, you must grant the **Manage Identity Store** permission along with the following identity store-specific permissions: - Manage Entitlement - Manage Identity Store Configurations - Manage Identity Store General Info - Manage Replication - Manage Scheduling - Manage Security Roles - Manage Workflows If you deny any of the above permissions, the respective area in identity store properties will be read-only.                                                                                      |
| 11. | Manage Identity Store Configurations | Enables role members to manage all the configurations for an identity store. These configurations are displayed when you select the **Configurations** option in identity store properties. If this permission is denied, these configurations will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Identity Store Configurations** permission.                                                                                                                                                                                                                                                                                                                                          |
| 12. | Manage Identity Store General Info   | Enables role members to: - Update the general info for an identity store, such as the identity store name and the service account used to connect to the provider. - Include/exclude child domains from replication. - Set DC priority. If this permission is denied, the Identity Store Detail page in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Identity Store General Info** permission.                                                                                                                                                                                                                                                         |
| 13. | Manage Identity Store Link           | Enables role members to create, update, and delete identity store links.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 14. | Manage Notifications Editor          | Enables role members to manage the Notification Editor in Admin Center, such as search and edit notification templates. The Notification Editor can be accessed in any of the following ways: - Using the Notification Editor button at the bottom of the left navigation pane in Admin Center. - Using the Notification Editor button on the Notification Queue page. If this permission is denied, the following happens: - The Notification Editor button on the Notification Queue page is disabled. - When launched using the Notification Editor button in the navigation pane, the Notification Editor page is displayed as read-only.                                                                                                                                        |
| 15. | Manage Notifications Queue           | Enables role members to manage the notification queue in Admin Center, such as resend and delete queued notifications . The Notification Queue page can be accessed using the Notifications node in the left pane. If this permission is denied, role members can only view the page as read-only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 16. | Manage Replication                   | Enables role members to manage replication in GroupID. Role members will be able to manage the following: - Global replication settings on the Replication page, that can be accessed by clicking the Replication node in Admin Center. - Replication settings for an identity store, that are controlled from within that identity store. - Run replication for an identity store from the identity store card pinned on the Identity Stores page. If this permission is denied, the Replication pages for both global and identity store settings will be read-only, while the replication option will not be available on the identity store card. NOTE: The Manage Identity Store permission must be granted to the role as a prerequisite to the Manage Replication permission. |
| 17. | Manage SAML                          | Enables role members to access GroupID Authenticate and manage: - GroupID as an identity provider - GroupID as a service provider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 18. | Manage Scheduling                    | Enables role members to create, update, and delete scheduled jobs for the identity store. If this permission is denied, the Scheduling page in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Scheduling** permission.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 19. | Manage Security Roles                | Enables role members to manage security roles in the identity store, such as create, update, and delete roles. Role members would also be able to manage policies and permissions for roles. If this permission is denied, security roles and their configurations in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Security Roles** permission.                                                                                                                                                                                                                                                                                                        |
| 20. | Manage SMS Gateways                  | Enables role members to create, update, and delete SMS gateway accounts in Admin Center. If this permission is denied, role members can view the gateway accounts as read-only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 21. | Manage Workflows                     | Enables role members to manage workflows in the identity store, such as create, update, and delete workflows. Role members can also manage advanced workflow settings for the identity store. If this permission is denied, workflows and related settings in identity store properties will be read-only for role members. NOTE: The **Manage Identity Store** permission must be granted to the role as a prerequisite to the **Manage Workflows** permission.                                                                                                                                                                                                                                                                                                                     |

## Synchronize

To manage permissions for Synchronize in the GroupID portal, click the **Synchronize** tab on the
**Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions  | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Create Job   | Enables role members to create Synchronize jobs and job collections in the identity store.                                                                                                                                                                                                                                                                                                                                                |
| 2.  | Delete Job   | Enables role members to delete the Synchronize jobs and job collections for which they are the owners. To enable them to delete any job, grant the **View Any Job** permission with this permission.                                                                                                                                                                                                                                      |
| 3.  | Edit Job     | Enables role members to edit Synchronize jobs and job collections in the identity store, such as change field mappings, apply transformations, update notification options, schedule the job run, and add/remove jobs from a job collection. Role members can only edit the jobs and job collections for which they are the owners. To enable them to edit any job, grant the **View Any Job** permission with this permission.           |
| 4.  | Run Job      | Enables role members to manually run the jobs and job collections for which they are the owners. To enable them to run any job, grant the **View Any Job** permission with this permission.                                                                                                                                                                                                                                               |
| 5.  | View Any Job | Enables role members to view a list of all jobs and job collections in the identity store, regardless of whether they are the job owner or not. NOTE: If you only grant this permission to the role, jobs and job collections will be displayed to role members as read-only. To enable them to edit, delete, or run jobs and job collections, this permission must be granted as a prerequisite along with the respective permission(s). |

## Password Management

To manage password reset and account unlock permissions, click the **Password Management** tab on
the **Add Permissions** dialog box.

End-users can manage their identity store account passwords and unlock their accounts using the
GroupID portal while helpdesk users can reset passwords and unlock accounts for other users through
Admin Center.

Permissions are discussed in the following table:

|     | Permissions           | Descriptions                                                                             |
| --- | --------------------- | ---------------------------------------------------------------------------------------- |
| 1.  | Unlock My Account     | Enables role members to unlock their identity store account.                             |
| 2.  | Manage Linked Account | Enables role members to link their accounts that exist in different identity stores.     |
| 3.  | Change My Password    | Enables role members to change their identity store account password.                    |
| 4.  | Reset Any Password    | Enables helpdesk users to reset the account password for any user in the identity store. |
| 5.  | Reset My Password     | Enables role members to reset their identity store account password.                     |
| 6.  | Unenroll              | Enables helpdesk users to unenroll a user’s identity store account in GroupID.           |
| 7.  | Unlock Any Account    | Enables helpdesk users to unlock the identity store account for any user.                |

NOTE: Account unlock is not supported in a Microsoft Entra ID identity store.

Remember, Generalized permissions override limited permissions. For example, if Unlock My Account is
denied and Unlock Any Account allowed, role members can unlock all accounts, including their own.

## Miscellaneous

To grant permissions on miscellaneous functions in GroupID, click the **Misc** tab on the **Add
Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions                      | Descriptions                                                                                                                                                           |
| --- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Enable Login to Service Provider | Enables role members to log into third-party applications using GroupID as an identity provider.                                                                       |
| 2.  | Manage All Requests              | Enables roles members to approve/deny workflow requests, even when they are not designated as approvers of those requests.                                             |
| 3.  | Manage Report                    | Enables role members to create, edit, and delete reports for the identity store in the GroupID portal. Role members will not be able to view and download the reports. |
| 4.  | View and Download Report         | Enables role members to view and download the reports generated for the identity store in the GroupID portal.                                                          |

## Container

To manage permissions related to containers in the directory, click the **Container** tab on the
**Add Permissions** dialog box.

Permissions are discussed in the following table:

|     | Permissions      | Descriptions                                                                     |
| --- | ---------------- | -------------------------------------------------------------------------------- |
| 1.  | Create Container | Enables role members to create new containers in the directory (identity store). |

## Entitlement

To grant permissions on entitlements in the GroupID portal, click the **Entitlement** tab on the
**Add Permissions** dialog box.

For an Active Directory identity store, this tab lists the file servers that have been selected for
permissions analysis on the **Entitlement** page. Click a file server to manage permissions for it.

Permissions are discussed in the following table:

|     | Permissions                          | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Permission Set                       | Select the kind of permission set to grant to role members. - Administrative: Grants all the effective NTFS permissions to role members on all the file server shares. - Basic: Enables role members to navigate within the file server to view shared resources and the permissions assigned on them. You can change the permission set for both Administrative and Basic. Use the toggle button for each of the listed permissions to allow or deny it. |
| 2.  | Allow user to navigate to this share | Enables role members to navigate this file server and explore the shared resources along with the permissions assigned on them. If this check box is not selected, role members will be able to view basic information about the file server only. They will not be able to navigate the file server to view the shares and permissions.                                                                                                                  |
| 3.  | Add new user / group                 | Enables role members to search and select users/groups from the directory and grant permissions to them on one or more shares on the file server. The **Type** column lists the effective NTFS permissions. While adding users, role members will be able to grant permissions that you enable here.                                                                                                                                                      |
| 4.  | Modify user / group                  | Enables role members to update the permissions assigned to users and groups on file server shares. The **Type** column lists the effective NTFS permissions. Role members will only be able to modify the permissions that you enable here.                                                                                                                                                                                                               |
| 5.  | Remove user / group                  | Enables role members to remove users and groups from the permission list of shares on the file server. Removed users and groups will not be able to access the respective share on the file server.                                                                                                                                                                                                                                                       |

For a Microsoft Entra ID identity store, this tab lists the SharePoint sites that have been selected
for permissions analysis on the **Entitlement** page. Click a site to manage permissions for it.

Permissions are discussed in the following table:

|     | Permissions                          | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Permission Set                       | Select the kind of permission set to grant to role members. - Administrative: Grants all the effective permissions to role members on all the document libraries in the site. - Basic: Enables role members to navigate within the site to view the document libraries and the permissions assigned on them. You can change the permission set for both Administrative and Basic. Use the toggle button for each of the listed permissions to allow or deny it.   |
| 2.  | Allow user to navigate to this share | Enables role members to navigate this SharePoint site and explore the document libraries along with the permissions assigned on them. If this check box is not selected, role members will be able to view basic information about the site only. They will not be able to navigate the site to view the document libraries and permissions.                                                                                                                      |
| 3.  | Add new user                         | Enables role members to search and select users from the directory and grant permissions to them on one or more document libraries in the site. NOTE: The facility to search and select groups is not available. Groups have to be added from SharePoint. Using GroupID, role members can manage group permissions. The **Type** column lists the effective permissions. While adding users, role members will be able to grant permissions that you enable here. |
| 4.  | Modify user / group                  | Enables role members to update the permissions assigned to users and groups on document libraries in the site. The **Type** column lists the effective permissions. Role members will only be able to modify the permissions that you enable here.                                                                                                                                                                                                                |
| 5.  | Remove user / group                  | Enables role members to remove users and groups from the permission list of document libraries in the site. Removed users and groups will not be able to access the respective document library in the site.                                                                                                                                                                                                                                                      |

NOTE: For more information on role permissions, see the
[User Roles in Microsoft Entra ID and GroupID](/docs/directorymanager/11.0/signin/identitystore/advsentraid.md#user-roles-in-microsoft-entra-id-and-groupid)
topic.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Create a Security Role](/docs/directorymanager/11.0/signin/securityrole/create.md)
- [Manage Security Roles](/docs/directorymanager/11.0/signin/securityrole/manage.md)
