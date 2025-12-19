---
title: "Smart Group page"
description: "Smart Group page"
sidebar_position: 40
---

# Smart Group page

This page displays the default query for the Smart Group; however, you can modify it. The group’s
membership is updated with the records fetched by the query.

- The **Container(s)** area displays the domain or containers the query will run on.
- **Object Types**: Lists the object types the query will fetch.
- The **Server** and **Storage** areas are displayed if the query only fetches messaging system
  recipients. These areas display the server and storage for the query to fetch the records from.

In an Active Directory identity store, the default query returns the following:

- If a messaging provider is configured for the identity store, the default query returns messaging
  system recipients (users with mailboxes, users with external email addresses, and contacts with
  external email addresses).
- Without a messaging provider, the default query returns all users, contacts and groups in the
  identity store.

In a Microsoft Entra IDidentity store, the default query returns the following:

- If a messaging provider is configured for the identity store, the default query returns messaging
  system recipients (users with mailboxes and users with external email addresses).
- Without a messaging provider, the default query returns all users and groups. For an Office 365
  group, however, only user objects are added to group membership.

You can do the following:

1. To modify the query, click the **Query Designer** button. This launches the
   [Query Designer](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
   dialog box, where you can modify the query.
2. You can also associate a Smart Group Update job with the group; this is a scheduled job that
   updates the group’s membership when it runs.

    From the **Scheduled Job** list, select a Smart Group Update job to associate with the group.

    This list contains Smart Group Update jobs defined in the identity store.

    NOTE: If the administrator has enforced the job selection option, you cannot proceed unless you
    select a scheduled job for this group.

3. Click **Next**.

**See Also**

- [Create Active Directory Groups](/docs/directorymanager/11.0/welcome/group/create/group/group.md)
