---
title: "Check a User's Security Role in GroupID"
description: "Find out which security role takes precedence for a user in a GroupID client by checking the highest priority role in Admin Center."
keywords:
  - check security role
  - highest priority role
  - Check Security Roles dialog
  - user access level
  - role precedence
sidebar_position: 50
---

# Check a User's Security Role in GroupID

As discussed in the
[Assign Distinct Roles to a User in GroupID Clients](/docs/directorymanager/11.0/signin/securityrole/overview.md#assign-distinct-roles-to-a-user-in-groupid-clients)
topic, a user in an identity store can have different security roles assigned to it in different
GroupID clients. Moreover, a user can also have multiple roles in a client, in which case the
highest priority role takes precedence when the user signs in to that specific client. See
[Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md).

Use GroupID to view the highest priority role of a user in a client. This role identifies
the access level of that user in the client. Select a client and specify a user. GroupID
retrieves the highest priority role of the user for that client.

## View the Highest Priority Role of a User in a GroupID Client

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Check Security Roles**. The **Check Security Roles**
   dialog box is displayed.
5. In the **Client name** dropdown list, select a GroupID client to view the highest priority role
   of a user within it. For example, select a GroupID portal to view the highest priority role that
   a user has in the portal.  
   This list displays the names of the deployed clients only. If a client, such as the GroupID
   mobile app, isn't deployed for the identity store, it isn't listed.  
   To view the highest privileged role that a user has in the identity store, select _None_ in the
   **Client Name** list.
6. In the box below, specify a user.

    - Enter a search string and press **Enter**. User names starting with the string are displayed.
      Select the required user.

        OR

    - Click **Advanced** to search a user by different parameters, such as name, department,
      company, and email. Enter a search string and click **Search**. Users matching the string are
      displayed. Select the required user.

    To remove the selected user, click **Remove** for it.

7. On selecting a user, its highest priority role within the selected client is displayed along with
   the role priority number.  
   For _None_, the highest privileged role of the user in the identity store is displayed,
   irrespective of any client.
8. Click **Close** to close the dialog box.

See Also

- [Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Manage Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/manage.md)
