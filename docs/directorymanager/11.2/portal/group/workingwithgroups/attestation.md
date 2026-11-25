---
title: "Attest an Expiring Group in Directory Manager"
description: "Review and validate an expiring group's attributes and membership as its owner so the group can be renewed instead of expiring."
keywords:
  - group attestation
  - expiring group
  - group renewal
  - member attestation
  - membership type
sidebar_position: 20
---

# Attest an Expiring Group in Directory Manager

If the Directory Manager administrator enables group attestation for the identity store, group owners must review and validate the attributes and membership of an expiring group before renewing it. A group expires when it isn't attested and renewed during its expiring days.

While attesting a group, the owner can:

- Update a few attributes, such as the group's display name, expiration policy, and security type.
- Verify the group's membership and inactivate unrequired members. Inactive members are removed from group membership instantly or after a number of days, depending on the configuration the administrator made.

**History Logging**

Directory Manager tracks and maintains history for group attestation. On the [Object properties - History tab](/docs/directorymanager/11.2/portal/group/properties/history.md) in group properties, it logs the following:

- The date the group was attested on.
- Any attribute value updated during group attestation.
- The status of a group member set to 'active' or 'inactive'.

## Attest a group

To attest a group:

1. In the Directory Manager portal, on the left navigation bar, click **Groups**. On the **Groups** page, select the **All Groups** tab.
2. Select an expiring group and click **Attest Group** on the toolbar.

    The button is disabled if you select multiple groups.

3. In the **Attest Group** wizard, review the values provided for the group attributes and update any information, if required. Then click **Next Step**.
4. On the **Step 2: Member Attestation** page, verify the group members. The page has three tabs:

    - **Disabled Members**: Lists group members that are disabled in the directory.
    - **Not logged in 30 days**: Lists group members that haven't signed in to their workstations in the last 30 days.
    - **All Members**: Lists active group members only. Disabled members and those who haven't signed in during the last 30 days aren't included.

5. On each of these tabs, review the members list and set their status to active or inactive.

    - Use the **Active All** and **Inactive All** buttons to mark the status of all members as active or inactive. To mark an individual member, click the relevant button for that member.

        The **Active All** and **Inactive All** buttons are available if the administrator has allowed group owners to specify the status of all members in a single click.

    - If the **Active All** and **Inactive All** buttons aren't available, the group owner must verify each member one by one by specifying its status as active or inactive.

    :::note
    Setting 'active' as status for a disabled user doesn't activate or enable the user's account.

    Setting 'active' as status for users who haven't signed in during the last 30 days doesn't move them to the **All Members** listing.
    :::

6. In the **Membership** column, review the membership type for active members.

    You can change the membership type of users in all three listings: **All Members**, **Disabled
    Members** and **Not logged in 30 days**. The membership types are:

    - Perpetual: Makes the object a permanent member of the group.
    - Temporary Member: Makes the object a temporary member of the group for the period you specify in the Beginning and Ending boxes. At the end of the period, the object is removed from the group membership.
    - Addition Pending: Indicates that the object is scheduled to become a temporary member of the group for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object's membership type is displayed as 'Addition Pending'. On the beginning date, the membership type changes to 'Temporary Member'.

        For example, you add Smith as a temporary member to Group A on May 15 for future dates, May 20-30.

        Smith appears in Group A's membership with 'Addition Pending' as its membership type from May 15 to 19. However, Smith isn't added to group membership in the provider.

        On May 20, Smith becomes a temporary member of Group A and its membership type changes to 'Temporary Member' from May 20 to 30. Smith is also added to group membership in the provider.

        After May 30, Smith is removed from Group A as a member in Directory Manager and in the provider.

    - Removal Pending: Indicates that the object is scheduled to be temporarily removed from group membership for a period in the future. Use the Beginning and Ending boxes to set a period. Before the beginning date, the object's membership type is displayed as 'Removal Pending'. On the beginning date, the membership type changes to 'Temporary Removed'.

        For example, you remove Smith from Group A on May 15 for future dates, May 20-30.

        Smith appears in Group A's membership with 'Removal Pending' as membership type from May 15 to 19.

        On May 20, Smith's membership type in Directory Manager changes to 'Temporary Removed', lasting until May 30. However, Smith is removed from Group A's membership in the provider.

        After May 30, Smith is added back to Group A as a permanent member in Directory Manager and in the provider.

    - Temporary Removed: Indicates that the object is temporarily removed from group membership for the period specified in the Beginning and Ending boxes. At the end of the period, the object is added back to the group membership as a permanent member.

7. For inactive members, the **Membership** column displays the status as Inactive. The duration for an inactive member to remain in group membership depends on the configuration the administrator made.

    - The administrator can specify a number of days, for example 5.

        When you set a member's status to inactive, the member is immediately removed from group membership in the directory provider. In Directory Manager, however, the member remains a group member until the specified number of days, counted from the inactivation date, passes. On the **Attest & Renew Group** wizard, the **Beginning** column displays the date when the user's status was set to inactive. The **Ending** column displays the date when the user is removed from group membership in Directory Manager, based on the specified days.

        During this period, you can activate the member to add it back to group membership. When the member isn't activated, the Membership Life Cycle job removes it from group membership in Directory Manager too.

    - If the administrator hasn't specified any days, the inactivated member is removed from group membership in the directory provider and in Directory Manager when the **Attest & Renew
      Group** wizard completes. In this case, the **Beginning** and **Ending** columns remain blank.

8. Click **Next Step**.
9. On the **Summary** page, review the attributes that have been updated and the members' updated status.
10. Click **Attest Group** to attest and renew the group.

    On attestation, Directory Manager reapplies the group's expiration policy, starting from today.
