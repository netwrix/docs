---
title: "Set Up a Directory Manager Service Account for AD and Exchange"
description: "Create or reuse a service account with the Active Directory and Exchange permissions Directory Manager needs to manage identity store objects."
keywords:
  - Directory Manager service account
  - delegate Active Directory permissions
  - Exchange Recipient Management
  - Active Directory Users and Computers
  - local Administrators group
sidebar_position: 10
---

# Set Up a Directory Manager Service Account for AD and Exchange

You must have a service account to connect an identity store to an Active Directory domain. Directory Manager uses the account to access objects in Active Directory. If Microsoft Exchange is the messaging provider for the identity store, you can also delegate permissions to this account to access Exchange objects.

You can use an existing account that has the required permissions, or you can create a new one. Create a new service account instead of using an existing one.

:::note
You must add the service account to the Local Administrator group of the member server on which you installed Directory Manager.
:::

## Use an existing account as a service account

Verify that the account has the following Active Directory and Exchange permissions. Exchange permissions are required if Microsoft Exchange is the messaging provider for the identity store.

|                         |                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Active Directory        | Recommended: **Domain Admins** Minimum permissions: <ul><li>Grant permissions to create and delete users, contacts, and groups.</li><li>Grant permissions to modify users, contacts, and groups.</li></ul> See the Create a New Service Account topic for instructions on modifying the service account to grant the required permissions. |
| Exchange 2013/2016/2019 | Recipient Management                                                                                                                                                                                                                                                                                                                       |

## Create a new service account

If you don't have a service account, create one. This section covers three tasks:

1. Create a service account.
2. Delegate Active Directory permissions to the new account.
3. Delegate Exchange permissions to the new account. Do this only if Exchange is the messaging provider for the identity store.

### Create a service account

1. Open **Active Directory Users and Computers** in one of these ways:

    - Select **Server Manager** from the Windows Start screen. Then select **Tools > Active Directory Users and Computers**.

    **Or**

    - Select **Server Manager** from the Quick Launch toolbar on the Windows taskbar. Then select **Tools > Active Directory Users and Computers**.

    **Or**

    - Select **Administrative Tools** from the Windows Start screen. Then select **Active Directory Users and Computers** in the **Name** column.

2. In the directory tree, select the required container, point to **New**, and then click **User**. The **New User** dialog box appears.
3. Enter the required information for the user.

After you create the user, click the container to view the new user.

### Delegate Active Directory permissions to the new account

In the **Active Directory Users and Computers** console:

1. Select **Advanced Features** from the **View** menu.
2. In the left pane, right-click the domain name or organizational unit and select **Properties**. In the Properties window, select the **Security** tab.

    ![Security tab of the domain Properties window](/images/directorymanager/11.2/requirements/permissions/security_tab.webp)

3. Click **Advanced**. The **Advanced Security Settings** window appears.

    ![Advanced Security Settings window](/images/directorymanager/11.2/requirements/permissions/advsecsettings.webp)

4. Click **Add**. The **Permission Entry** window appears.

    ![Permission Entry window](/images/directorymanager/11.2/requirements/permissions/permissionentry.webp)

5. Click the **Select a principal** link next to **Principal**. The Select User, Computer, Service Account, or Group dialog box appears.

    ![Select User, Computer, Service Account, or Group dialog box](/images/directorymanager/11.2/requirements/permissions/select_user.webp)

    Enter the name of the service account in the **Enter the object name to select** box. Click **OK**. The **Permission Entry** window appears with all fields enabled (see step 4).

6. In the **Applies to** box, select **This object and all descendant objects**.
7. Grant permissions to create and delete users, contacts, and groups.

    1. Scroll down the list of permissions in the **Permissions** box and select the checkboxes for the following options:

        ![Permissions list with the checkboxes to select for creating and deleting objects](/images/directorymanager/11.2/requirements/permissions/permissions_list.webp)

    2. Click **OK**. The granted permissions appear in the **Advanced Security Settings** window as follows:

        ![Advanced Security Settings window showing the granted create and delete permissions](/images/directorymanager/11.2/requirements/permissions/advsecsettingsgrantedpermissions.webp)

8. Grant permissions to modify users, contacts, and groups.

    1. Click **Add** in the **Advanced Security Settings** window. The **Permission Entry** window appears (see step 4).
    2. Click the **Select a principal** link next to **Principal**. The Select User, Computer, Service Account, or Group dialog box appears. Enter the name of the service account in the **Enter the object name to select** box and click **OK**. The **Permission Entry** window appears.
    3. In the **Applies to** box, select **Descendant Contact objects**. In the _Permissions_ area, select the **Full control** checkbox. The following image shows the settings:

        ![Permission Entry window with Full control selected for Descendant Contact objects](/images/directorymanager/11.2/requirements/permissions/fullcontrolcontact.webp)

    4. Click **OK**. The granted permissions appear in the **Advanced Security Settings** window as follows:

        ![Advanced Security Settings window showing Full control on Descendant Contact objects](/images/directorymanager/11.2/requirements/permissions/advsecsettingsfullcontrolcontact.webp)

    5. Repeat steps a – d for **Descendant Group objects** and **Descendant User objects** in the Permission Entry window.

       The service account now has permissions to modify users, contacts, and groups. These permissions appear in the **Advanced Security Settings** window as follows:

        ![Advanced Security Settings window showing all required permissions](/images/directorymanager/11.2/requirements/permissions/advsecsettingsreqpermissions.webp)

9. Click **OK**.

### Delegate Exchange permissions to the new account

In addition to Active Directory permissions, the service account needs access permissions for Exchange when Exchange is the messaging provider for the identity store.

**For Exchange Server 2013/2016/2019:**

Open Exchange Management Shell and enter the following command:

```
Add-RoleGroupMember "Recipient Management" -Member domain name\user
```

## SQL Server account and database permissions

For the roles and permissions the SQL server and database accounts need, see [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.2/install/configure/setupauthentication.md). It covers [SQL Server Authentication](/docs/directorymanager/11.2/install/configure/setupauthentication.md#sql-server-authentication) mode and [Windows Authentication](/docs/directorymanager/11.2/install/configure/setupauthentication.md#windows-authentication) mode.

**See Also**

- [Create an Identity Store in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/create.md)
- [Manage an Identity Store in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/manage.md)
