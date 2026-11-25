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

You must have a service account to connect an identity store to an Active Directory domain.
Directory Manager uses the account to access objects in Active Directory. If Microsoft Exchange is
configured as the messaging provider for the identity store, you can also delegate permissions to
this account to access Exchange objects.

You can use an existing account, provided it has the required permissions, or you can create a new
one. Instructions for both options appear in the following sections, although it is
recommended that you create a new service account rather than use an existing account.

:::note
You must add the service account to the Local Administrator group of the
member server on which you installed Directory Manager.
:::

What do you want to do?

- [Use an Existing Account as a Service Account](#use-an-existing-account-as-a-service-account)
- [Create a New Service Account](#create-a-new-service-account)
- [SQL Server Account and Database Permissions](#sql-server-account-and-database-permissions)

## Use an Existing Account as a Service Account

Verify that the account you want to use as a service account has the following Active Directory
and Exchange permissions:

Exchange permissions are required if Microsoft Exchange is configured as the messaging provider for
the identity store.

|                         |                                                                                                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Active Directory        | Recommended: **Domain Admins** Minimum permissions: <ul><li>Grant permissions to create and delete users, contacts, and groups.</li><li>Grant permissions to modify users, contacts, and groups.</li></ul> See the Create a New Service Account topic for instructions on modifying the service account to grant the required permissions. |
| Exchange 2013/2016/2019 | Recipient Management                                                                                                                                                                                                                                                                                                                       |

## Create a New Service Account

If you don't have a service account, you need to create one. Follow the three sets of instructions
in this section to:

1. Create a Service Account
2. Delegate Active Directory Permissions to the New Account
3. Delegate Exchange Permissions to the New Account

    (If Exchange is configured as the messaging provider for the identity store)

### Create a Service Account

1. Select either:

    - **Server Manager** from the Windows Start screen.

        Or

    - **Server Manager** from the Quick Launch toolbar available by default on the Windows taskbar.

        Or

    - **Administrative Tools** from the Windows Start screen.

2. If you selected Server Manager, select **Tools > Active Directory Users and Computers**.
   If you selected Administrative Tools, select the **Active Directory Users and Computers**
   option in the **Name** column.
3. In the directory tree, select the required container, point to **New**, and then click **User**.
   The **New User** dialog box is displayed.
4. Enter the required information for the user.

After creating the user, you can click the container to view the newly created user.

### Delegate Active Directory Permissions to the New Account

In the **Active Directory Users and Computers** console:

1. Select **Advanced Features** from the **View** menu.
2. In the left pane, right-click the domain name or organizational unit and select the
   **Properties** option. On the Properties window, select the **Security** tab.

    ![Security tab of the domain Properties window](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/security_tab.webp)

3. Click the **Advanced** button; the **Advanced Security Settings** window is displayed.

    ![Advanced Security Settings window](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/advsecsettings.webp)

4. Click the **Add** button. The **Permission Entry** window is displayed.

    ![Permission Entry window](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/permissionentry.webp)

5. Click the **Select a principal** link next to **Principal**. The Select User, Computer, Service
   Account, or Group dialog box is displayed.

    ![Select User, Computer, Service Account, or Group dialog box](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/select_user.webp)

    Enter the name of the service account in the **Enter the object name to select** box. Click
    **OK**. The **Permission Entry** window is displayed with all fields enabled (see step 4).

6. In the **Applies to** box, select **This object and all descendant objects**.
7. Grant permissions to create and delete users, contacts, and groups.

    1. Scroll down the list of permissions in the **Permissions** box and select the checkboxes for
       the following options:

        ![Permissions list with the checkboxes to select for creating and deleting objects](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/permissions_list.webp)

    2. Click **OK**. The granted permissions appear in the **Advanced Security Settings** window as
       shown in the following:

        ![Advanced Security Settings window showing the granted create and delete permissions](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/advsecsettingsgrantedpermissions.webp)

8. Grant permissions to modify users, contacts, and groups.

    1. Click the **Add** button on the **Advanced Security Settings** window. The **Permission
       Entry** window is displayed (see step 4).
    2. Click the **Select a principal** link next to **Principal**. The Select User, Computer, Service
       Account, or Group dialog box is displayed. Enter the name of the service account in the
       **Enter the object name to select** box and click **OK**. The **Permission Entry** window is
       displayed.
    3. In the **Applies to** box, select the **Descendant Contact objects** option and select the
       **Full control** checkbox in the _Permissions_ area. The following image shows the settings:

        ![Permission Entry window with Full control selected for Descendant Contact objects](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/fullcontrolcontact.webp)

    4. Click **OK**. The granted permissions appear in the **Advanced Security Settings** window as
       shown in the following:

        ![Advanced Security Settings window showing Full control on Descendant Contact objects](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/advsecsettingsfullcontrolcontact.webp)

    5. Repeat steps a – d for **Descendant Group objects** and **Descendant User objects** on the
       Permission Entry window.
       The service account now has permissions to modify users, contacts, and groups. These
       permissions appear in the **Advanced Security Settings** window as shown in the following:

        ![Advanced Security Settings window showing all required permissions](/images/directorymanager/11.0/admincenter/identitystore/moreinfo/advsecsettingsreqpermissions.webp)

9. Click **OK**.

### Delegate Exchange Permissions to the New Account

In addition to Active Directory permissions, the service account also needs access permissions for
Exchange when Exchange is configured as the messaging provider for the identity store.

The following instructions delegate permissions for each supported Exchange Server version.

**For Exchange Server 2013/2016/2019:**

Open Exchange Management Shell and enter the following command:

```
Add-RoleGroupMember "Recipient Management" -Member domain name\user
```

## SQL Server Account and Database Permissions

See the [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
topic for information about the roles and permissions the SQL server and database accounts must have
for
[SQL Server Authentication](/docs/directorymanager/11.0/about/configure/setupauthentication.md#sql-server-authentication)
mode and for
[Windows Authentication](/docs/directorymanager/11.0/about/configure/setupauthentication.md#windows-authentication)
mode.

**See Also**

- [Create an Identity Store in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/create.md)
- [Manage an Identity Store in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/manage.md)
