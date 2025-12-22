---
title: "Join/Leave a Group"
description: "Join/Leave a Group"
sidebar_position: 110
---

# Join/Leave a Group

Directory Manager provides you the facility to join/leave a group temporarily or permanently for a
specified period of time.

## Join a group permanently

You can join a semi-private or public group as a permanent member.

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group(s) you want to join.
2. On the page displayed, select the group(s) to join.
3. Point to the **Join** button on the toolbar, make sure that the **Join Perpetually** option is
   selected, and click **Join**.

    You can also join a group on the group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page by
    using the **Join** button on the toolbar.

When a user joins a Smart Group or Dynasty, he or she is added to the **Include** list on the
[Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md) of the Query Designer. As
a result, the user remains a group member even when it does not fall in the scope of the query.

:::note
For a semi-private group, the group owner must approve your _join_ request before you are
added to group membership. See [Requests](/docs/directorymanager/11.1/portal/request/overview.md).
:::


## Join a group temporarily

The logged-in user can join a semi-private or public group as a temporary member.

1. [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group(s) you want to join.
2. On the page displayed, select the group(s) to join.
3. Point to the **Join** button on the toolbar and select the **Join Temporarily** option.
4. In the **Duration** list, select one of the following options:

    - 7 Days – to join the selected group(s) for 7 days starting today
    - 30 Days – to join the selected group(s) for 30 days starting today.
    - 60 Days – to join the selected group(s) for 60 days starting today.
    - 90 Days – to join the selected group(s) for 90 days starting today.
    - Custom – to join the selected group(s) for the time period you specify in the **From Date**
      and **To Date** boxes. You will become a member of the selected group(s) on the date given in
      the **From Date** box.

5. Click **Join**.

    You can also join a group on the group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page by
    using the **Join** button on the toolbar.

When a user joins a Smart Group or Dynasty, he or she is added to the **Include** list on the
[Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md) of the Query Designer. As
a result, the user remains a group member even when it does not fall in the scope of the query.

:::note
For a semi-private group, the group owner must approve your _join_ request before you are
added to group membership. See [Requests](/docs/directorymanager/11.1/portal/request/overview.md).
:::


## Leave a group permanently

The logged-in user can permanently leave the membership of a semi-private or public group.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.

    Select the **My Groups**/**My Memberships** tab.

**Or**

    [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group(s) you want to leave.

2. On the page displayed, select the required group(s).
3. Point to the **Leave** button on the toolbar, make sure that the **Leave Perpetually** option is
   selected, and click **Leave**.

    You can also leave a group on the group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page by
    using the **Leave** button on the toolbar.

When a user leaves a Smart Group or Dynasty, he or she is added to the **Exclude** list on the
[Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md) of the Query Designer. As
a result, the user is not added to group membership even when it falls in the scope of the query.

:::note
For a semi-private group, the group owner must approve your _leave_ request before you are
removed from group membership. See [Requests](/docs/directorymanager/11.1/portal/request/overview.md).
:::


## Leave a group temporarily

The logged-in user can leave the membership of a semi-private or public group on a temporary basis.

1. In Directory Manager portal, click **Groups** in the left navigation pane, select Groups.

    Select the **My Groups**/**My Memberships** tab.

**Or**

    [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group(s) you want to leave.

2. On the page displayed, select the required group(s).
3. Point to the **Leave** button on the toolbar and select the **Leave Temporarily** option.
4. In the **Duration** list, select one of the following options:

    - 7 Days – to leave the selected group(s) for 7 days starting today.
    - 30 Days – to leave the selected group(s) for 30 days starting today.
    - 60 Days – to leave the selected group(s) for 60 days starting today.
    - 90 Days – to leave the selected group(s) for 90 days starting today.
    - Custom – to leave the selected group(s) for the time period you specify in the **From Date**
      and **To Date** boxes. You will be removed from group membership on the date selected in the
      **From Date** box.

5. Click **Leave**.

    You can also leave a group on the group's [Group Properties](/docs/directorymanager/11.1/portal/group/properties/overview.md) page by
    using the **Leave** button on the toolbar.

When a user leaves a Smart Group or Dynasty, he or she is added to the **Exclude** list on the
[Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md) of the Query Designer. As
a result, the user is not added to group membership even when it falls in the scope of the query.

:::note
For a semi-private group, the group owner must approve your _leave_ request before you are
removed from group membership. See [Requests](/docs/directorymanager/11.1/portal/request/overview.md).
:::


## Join or leave a group on behalf of a direct report or peer

Using the Directory Manager portal, a user can join or leave a group on behalf of another user.

- If a user has the ‘Manage my Direct Reports’ permission in the identity store, he or she can join
  or leave a group on behalf of any of his or her direct reports.

    For example, User A has two direct reports, User B and User C. User A can have User B and User C
    join/leave a group.

- Similarly, if a user has the ‘Join/Leave on behalf of Peer’ permission in the identity store, he
  or she can join or leave a group on behalf of any of his or her peers.

    For example, User A, User B and User C are peers (users having the same manager are considered
    as peers). If User A has the ‘Join/Leave on behalf of Peer’ permission, he or she can have User
    B and User C join/leave a group.

**To join on behalf**:

The logged-in user can join a group on behalf of a direct report or peer.

1. On the left navigation bar, click **Groups** and then select the **My Groups**, **My
   Memberships**, or **My Expiring Groups** tab.

    You can also [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to join on behalf of
    a direct report or peer.

2. On the page displayed, select the group to join.
3. Click **Join** on the toolbar and then click **Other** on the dialog box.

    The _Other_ option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on
    behalf of Peer’ permission or both.

4. Search the required direct report or peer.

    - A user with the ‘Manage My Direct Reports’ permission can only search and select direct
      reports.
    - A user with the ‘Join/Leave on behalf of Peer’ permission can only search and select peers.
    - A user with both permissions can search and select both direct reports and peers.

5. Specify whether this direct report/peer should join the group for a permanent or temporary
   period, and click **Join**.

When a user is joined on behalf to a Smart Group or Dynasty, he or she is added to the **Include**
list on the [Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md) of the Query
Designer. As a result, the user remains a group member even when it does not fall in the scope of
the query.

**To leave on behalf:**

The logged-in user can leave a group on behalf of a direct report or peer.

1. On the left navigation bar, click **Groups** and then select the **My Groups**, **My
   Memberships**, or **My Expiring Groups** tab.

    You can also [Directory Search](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to leave on behalf of
    a direct report or peer.

2. On the page displayed, select the group to leave.
3. Click **Leave** on the toolbar and then click **Other** on the dialog box.

    The _Other_ option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on
    behalf of Peer’ permission or both.

4. Search the required direct report or peer.

    - A user with the ‘Manage My Direct Reports’ permission can only search and select direct
      reports.
    - A user with the ‘Join/Leave on behalf of Peer’ permission can only search and select peers.
    - A user with both permissions can search and select both direct reports and peers.

5. Specify whether this direct report/peer should leave the group for a permanent or temporary
   period, and click **Leave**.

When a user is removed on behalf from a Smart Group or Dynasty, he or she is added to the
**Exclude** list on the [Query Designer - Include/Exclude tab](/docs/directorymanager/11.1/portal/group/querydesigner/includeexclude.md)
of the Query Designer. As a result, the user is not added to group membership even when it falls in
the scope of the query.

:::note
For a semi-private group, workflow is triggered and a notification is sent to the group’s
primary owner for approval. If the requester is the default approver, the request is auto approved.
Else, the request must be approved by an authorized user for changes to take effect.

:::
