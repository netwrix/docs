---
title: "Group Expiry Functions"
description: "Group Expiry Functions"
sidebar_position: 120
---

# Group Expiry Functions

You can expire, renew or delete a group using GroupID portal. You can change expiry policy of a
group and attest an expiring group, if required.

What do you want to do?

- [Expire a group manually ](#expire-a-group-manually)
- [Change the expiry policy for a group](#change-the-expiry-policy-for-a-group)
- [Attest an expiring group](#attest-an-expiring-group)
- [Renew an expired group](#renew-an-expired-group)

## Expire a group manually

1. On the left navigation bar, click **Groups** and then select the **My Groups**, **My
   Memberships**, or **My Expiring Groups** tab.

    You can also [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
    the group you want to expire.

2. On the page displayed, select the required group and click **Expire** on the toolbar.

NOTE: Note the following:

- When you try to manually expire a group with the expiry policy set to ‘Never Expire’, an error
  message is displayed, informing you that the group cannot be expired.
- When you manually expire a group with an expiry policy other than ‘Never Expire’, the group
  expires and is moved it to the
  [My Expired Groups](/docs/directorymanager/11.0/welcome/group/mygroups/myexpiredgroups.md) page.
- A group without an expiry policy will not expire.

    Directory groups that are created outside of GroupID do not have an expiry policy.

    In GroupID, you cannot distinguish groups with an expiry policy from group without an expiry
    policy because groups without an expiry policy are displayed with "Never Expire' set as policy.

If expired groups are not renewed within a specific period (set by the GroupID administrator in the
Group Lifecycle policy for the identity store), they are logically deleted when the period ends. See
Group life cycle job.

Logically deleted groups are moved to the
[My Deleted Groups](/docs/directorymanager/11.0/welcome/group/mygroups/mydeletedgroups.md) page with
the “Deleted_” prefix added to their names.

## Change the expiry policy for a group

When a group is created, it has its expiry policy set to 'Never Expire'. You can change this policy
as required.

The Group Life Cycle job expires groups according to their respective expiry policies and moves them
to the [My Expired Groups](/docs/directorymanager/11.0/welcome/group/mygroups/myexpiredgroups.md)
page.

1. [Directory Search](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) the group you
   want to change the expiry policy for.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

    The group's
    [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed with the **General** tab in view.

3. From the **Expiration Policy** list, select the duration that the group would remain active for,
   starting today. The group expires when the period ends.

    If you select the _Other_ option from the list, two boxes are displayed under the Expiration
    Policy box. First, select an option (Days, Months, or Years) from the second list. Then enter a
    value for the selected option in the first box. The group will remain active for the duration
    you specify here.

    The **Expiration Date** box displays the group's expiry date after you save the changes.

4. Click **Save**.

NOTE: If the GroupID administrator has specified this action for review, your changes will not take
effect until verified by an approver. See
[Requests](/docs/directorymanager/11.0/welcome/request/overview.md).

## Attest an expiring group

See
[Attest an Expiring Group](/docs/directorymanager/11.0/welcome/group/workingwithgroups/attestation.md).

## Renew an expired group

To use an expired group again, you can renew it. On renewal, the group becomes active again and its
expiry policy is re-applied to it, starting from the date of renewal.

In the Group Life Cycle policy, the administrator can specify a period for retaining expired groups
in the directory. If a group is not renewed within this period, the Group Life Cycle job
automatically deletes it from the directory.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.
2. Go to **My Expired Groups** tab and select the required group and click **Renew** on the toolbar.
3. Click **OK** to confirm the renewal.

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
