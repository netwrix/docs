---
title: "Smart Group Page in the Create Group Wizard"
description: "Review and change the query that builds Smart Group membership, and associate a Smart Group Update job, on the Smart Group page of the Create Group wizard."
keywords:
  - Smart Group query
  - Query Designer
  - Smart Group Update job
  - Create Group wizard
sidebar_position: 40
---

# Smart Group Page in the Create Group Wizard

This page displays the default query for the Smart Group; however, you can modify it. The group’s
membership is updated with the records fetched by the query.

- The **Container(s)** area displays the domain or containers the query runs on.
- **Object Types**: Lists the object types the query fetches.
- The **Server** and **Storage** areas are displayed if the query only fetches messaging system
  recipients. These areas display the server and storage the query fetches the records from.

In an Active Directory identity store, the default query returns the following:

- If a messaging provider is configured for the identity store, the default query returns messaging
  system recipients (users with mailboxes, users with external email addresses, and contacts with
  external email addresses).
- Without a messaging provider, the default query returns all users, contacts, and groups in the
  identity store.

In a Microsoft Entra ID identity store, the default query returns the following:

- If a messaging provider is configured for the identity store, the default query returns messaging
  system recipients (users with mailboxes and users with external email addresses).
- Without a messaging provider, the default query returns all users and groups. For an Office 365
  group, however, only user objects are added to group membership.

You can do the following:

1. To modify the query, click the **Query Designer** button. This opens the
   [Query Designer in the Directory Manager portal](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
   dialog box, where you can modify the query.
2. You can also associate a Smart Group Update job with the group. This scheduled job
   updates the group’s membership when it runs.

    From the **Scheduled Job** list, select a Smart Group Update job to associate with the group.

    This list contains Smart Group Update jobs defined in the identity store.

    :::note
    If the administrator has enforced the job selection option, you can't proceed unless you
    select a scheduled job for this group.
    :::

3. Click **Next**.

**See Also**

- [Create Active Directory Groups in Directory Manager](/docs/directorymanager/11.0/welcome/group/create/group/group.md)
