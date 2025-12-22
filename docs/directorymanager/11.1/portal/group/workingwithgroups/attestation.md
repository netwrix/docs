---
title: "Attest an Expiring Group"
description: "Attest an Expiring Group"
sidebar_position: 20
---

# Attest an Expiring Group

If the Directory Manager administrator enables group attestation for the identity store, then group
owners must review and validate the attributes and membership of an expiring group before renewing
it.

While attesting a group, the owner can:

- Update a few attributes, such as the group’s display name, expiration policy, security type, etc.
- Verify the group’s membership and inactivate unrequired members. Inactive members are removed from
  group membership instantly or after x number of days, depending on the configurations made by the
  administrator.

A group expires when it is not attested and renewed during its expiring days.

**History Logging**

Directory Manager tracks and maintains history for group attestation. On the
[Object properties - History tab](/docs/directorymanager/11.1/portal/group/properties/history.md) in group properties, the following is
logged:

- The date the group was attested on.
- Any attribute value updated during group attestation.
- The status of a group member set to ‘active’ or ‘inactive’.

## Attest a group

Follow the steps to attest a group.

1. In Directory Manager portal, on the left navigation bar, click **Groups.** On the **Groups** page
   select the **All Groups** tab.
2. Select an expiring group and click **Attest Group** on the toolbar.

    The button would be disabled if you select multiple groups.

3. On the **Attest Group** wizard, review the values provided for the group attributes and update
   any information, if required. Then click **Next Step**.
4. On the **Step 2: Member Attestation** page, verify the group members. The page has 3 tabs:

    - **Disabled Members**: Lists group members that are disabled in the directory.
    - **Not logged in 30 days**: Lists group members that have not logged into their workstations in
      the last 30 days.
    - **All Members**: Lists active group members only. Disabled members and those who have not
      logged in during the last 30 days are not included.

5. On each of these tabs, review the members list and set their status to _active_ or _inactive_.

    - Use the **Active All** and **Inactive All** buttons to mark the status of all members as
      active or inactive respectively. To individually mark an active member as inactive and vice
      versa, click the relevant button for it.

        The **Active All** and **Inactive All** buttons are available if the administrator has
        allowed group owners to specify the status of all member in a single click.

    - If the **Active All** and **Inactive All** buttons are not available, the group owner must
      verify each member one by one (by individually specifying its status as active or inactive.

    :::note
    Setting ‘active’ as status for a disabled user does not activate or enable the user's
    account.  
    Setting ‘active’ as status for users who have not logged in during the last 30 days does not
    move them to the **All Members** listing.
    :::


6. The **Membership** column displays the membership type for active members.

    You can change the membership type of users in all three listings – **All Members**,**Disabled
    Members** and **Not logged in 30 days**.

    Membership types are:

    - Perpetual – To make the object a permanent member of the group.
    - Temporary Member – To make the object a temporary member of the group for the period you
      specify in the Beginning and Ending boxes. At the end of the period, the object is removed
      from the group membership.
    - Addition Pending – Indicates that the object will be a temporary member of the group for a
      period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning
      date, the object’s membership type is displayed as ‘Addition Pending’. On the beginning date,
      the membership type changes to ‘Temporary Member’.

        Example.

        You add Smith as a temporary member to Group A on May 15 for future dates, May 20-30.

        Smith will be displayed in Group A’s membership with ‘Addition Pending’ as its membership
        type from May 15 to 19. However, Smith would not be added to group membership in the
        provider.

        On May 20, Smith will become a temporary member of Group A and its membership type will
        change to ‘Temporary Member’ from May 20 to 30. Smith will also be added to group membership
        in the provider.

        After May 30, Smith will be removed from Group A as a member in Directory Manager and in the
        provider.

    - Removal Pending - Indicates that the object will be temporarily removed from group membership
      for a period in the future. Use the Beginning and Ending boxes to set a period. Before the
      beginning date, the object’s membership type is displayed as ‘Removal Pending’. On the
      beginning date, the membership type will change to ‘Temporary Removed’.

        Example.

        You remove Smith from Group A on May 15 for future dates, May 20-30.

        Smith will be displayed in Group A’s membership with ‘Removal Pending’ as membership type
        from May 15 to 19.

        On May 20, Smith’s membership type in Directory Manager will change to ‘Temporary Removed’;
        lasting till May 30. However, Smith will be removed from Group A’s membership in the
        provider.

        After May 30, Smith will be added back to Group A as a permanent member in Directory Manager
        and in the provider.

    - Temporary Removed – Indicates that the object is temporarily removed from group membership for
      the period specified in the Beginning and Ending boxes. At the end of the period, the object
      is added back to the group membership as a permanent member.

7. For inactive members, the **Membership** column displays the status as _Inactive_. The duration
   for an inactive member to remain in group membership depends on configurations made by the
   administrator.

    - The administrator can specify X number of days, say 5.

        When the status of a member is set to inactive, he/she is immediately removed from group
        membership in the directory provider. In Directory Manager, however, he/she remains a group
        member till the specified number of days, starting from the inactivation date. On the
        **Attest & Renew Group** wizard, the **Beginning** column displays the date when the user’s
        status was set to inactive, and the **Ending** column displays the date when the user would
        be removed from group membership in Directory Manager, based on the specified days.

        During this period, the member can be activated (added back to group membership). When the
        member is not activated, the Membership Life Cycle job removes it from group membership in
        Directory Manager too.

    - If the administrator has not specified any days, the inactivated member is removed from group
      membership in the directory provider and in Directory Manager when the **Attest & Renew
      Group** wizard completes. In this case, the **Beginning** and **Ending** columns remain blank.

8. Click **Next Step**.
9. The **Summary** page displays the attributes that have been updated and the members’ updated
   status.

    Click **Attest Group** to attest and renew the group.

    On attestation, the group’s expiration policy is re-applied to it, starting from today.
