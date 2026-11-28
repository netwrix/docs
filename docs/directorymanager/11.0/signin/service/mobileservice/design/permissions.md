---
title: "Grant Security Role Permissions in the Mobile App"
description: "Grant security roles permission to use the Directory Search and Workflow features of the GroupID mobile app in an identity store."
keywords:
  - mobile app security role permissions
  - mobile app directory search permission
  - mobile app workflow permission
  - mobile app role permission settings
sidebar_position: 40
---

# Grant Security Role Permissions in the Mobile App

In GroupID, three security roles are defined by default in an identity store:
Administrator, Helpdesk, and User. You can add more security roles as required.

:::note
In a Microsoft Entra ID identity store, the Helpdesk role isn't available by default.
:::

You can grant permissions on the GroupID app to security roles that exist in an identity
store associated with a Mobile service, so that role members can access only the allowed features.

What do you want to do?

- [Grant Permissions to Security Roles](#grant-permissions-to-security-roles)

## Grant Permissions to Security Roles

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Features** in the left pane.  
   All security roles in the identity store are listed in the **Role** column. You can grant
   permissions to a role on the following app features:

    - **Directory Search**: Enables role members to search the directory.
    - **Workflow**: Enables role members to view workflow requests.

5. To grant permission to a role on a function, select the checkbox for it.  
   To deny permission, clear the respective checkbox.
6. Click **Save**.

**See Also**

- [GroupID Mobile Service Overview](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Design Settings for the Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md)
