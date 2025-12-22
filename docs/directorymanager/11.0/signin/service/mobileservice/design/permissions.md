---
title: "Grant Permissions to Security Roles"
description: "Grant Permissions to Security Roles"
sidebar_position: 40
---

# Grant Permissions to Security Roles

In GroupID, three security roles are defined by default in an identity store: Administrator,
Helpdesk, and User. More security roles can be added as required.

NOTE: In a Microsoft Entra ID identity store, the Helpdesk role is not available by default.

You can grant permissions on the GroupID app to security roles that exist in an identity store
associated with a Mobile service, so that role members can access the allowed features only.

What do you want to do?

- Grant Permissions to Security Roles

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
    - **Workflow**: Enables role members to view the workflow requests.

5. To grant permission to a role on a function, select the check box for it.  
   To deny permission, clear the respective check box.
6. Click **Save**.

**See Also**

- [Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Design Settings](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md)
