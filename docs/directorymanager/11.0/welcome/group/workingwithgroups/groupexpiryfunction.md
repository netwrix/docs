---
title: "Expire, Renew, and Change Group Expiry in GroupID"
description: "Expire a group manually, change its expiry policy, attest an expiring group, and renew an expired group in the GroupID portal."
keywords:
  - expire group
  - renew expired group
  - group expiry policy
  - Never Expire policy
  - expiring group attestation
sidebar_position: 120
---

# Expire, Renew, and Change Group Expiry in GroupID

You can expire, renew, or delete a group using the GroupID portal. You can change the
expiry policy of a group and attest an expiring group, if required.

What do you want to do?

- [Expire a group manually](#expire-a-group-manually)
- [Change the expiry policy for a group](#change-the-expiry-policy-for-a-group)
- [Attest an expiring group](#attest-an-expiring-group)
- [Renew an expired group](#renew-an-expired-group)

## Expire a group manually

To expire a group manually:

1. On the left navigation bar, click **Groups** and then select the **My Groups**, **My
   Memberships**, or **My Expiring Groups** tab.

    You can also use [Search Directory Objects in the GroupID Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
    to find the group you want to expire.

2. On the page displayed, select the required group and click **Expire** on the toolbar.

:::note
Keep the following in mind:
:::

- When you try to manually expire a group with the expiry policy set to "Never Expire", an error
  message is displayed, informing you that the group can't be expired.
- When you manually expire a group with an expiry policy other than "Never Expire", the group
  expires and is moved to the
  [View My Expired Groups in GroupID](/docs/directorymanager/11.0/welcome/group/mygroups/myexpiredgroups.md) page.
- A group without an expiry policy doesn't expire.

    Directory groups that are created outside of GroupID don't have an expiry policy.

    In GroupID, you can't distinguish groups with an expiry policy from groups without an
    expiry policy because groups without an expiry policy are displayed with "Never Expire" set as
    policy.

If expired groups aren't renewed within a specific period (set by the GroupID
administrator in the Group Lifecycle policy for the identity store), they are logically deleted when
the period ends. See Group life cycle job.

Logically deleted groups are moved to the
[View My Deleted Groups in GroupID](/docs/directorymanager/11.0/welcome/group/mygroups/mydeletedgroups.md) page with
the "Deleted\_" prefix added to their names.

## Change the expiry policy for a group

When a group is created, it has its expiry policy set to "Never Expire". You can change this policy
as required.

The Group Life Cycle job expires groups according to their respective expiry policies and moves them
to the [View My Expired Groups in GroupID](/docs/directorymanager/11.0/welcome/group/mygroups/myexpiredgroups.md)
page.

1. [Search Directory Objects in the GroupID Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md) the group you
   want to change the expiry policy for.
2. Select this group on the **Search Results** page and click **Properties** on the toolbar.

    The group's
    [View and Edit Group Properties in GroupID](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
    page is displayed with the **General** tab in view.

3. From the **Expiration Policy** list, select the duration that the group remains active for,
   starting today. The group expires when the period ends.

    If you select the _Other_ option from the list, two boxes are displayed under the Expiration
    Policy box. First, select an option (Days, Months, or Years) from the second list. Then enter a
    value for the selected option in the first box. The group remains active for the duration
    you specify here.

    The **Expiration Date** box displays the group's expiry date after you save the changes.

4. Click **Save**.

:::note
If the GroupID administrator has specified this action for review, your changes don't take
effect until verified by an approver. See
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md).

:::

## Attest an expiring group

See
[Attest an Expiring Group in GroupID](/docs/directorymanager/11.0/welcome/group/workingwithgroups/attestation.md).

## Renew an expired group

To use an expired group again, you can renew it. On renewal, the group becomes active again and its
expiry policy is re-applied to it, starting from the date of renewal.

In the Group Life Cycle policy, the administrator can specify a period for retaining expired groups
in the directory. If a group isn't renewed within this period, the Group Life Cycle job
automatically deletes it from the directory.

1. On the left navigation bar, click **Groups** and then select the **My Groups** tab.
2. Go to the **My Expired Groups** tab, select the required group, and click **Renew** on the toolbar.
3. Click **OK** to confirm the renewal.

**See Also**

- [Work with Groups in the GroupID Portal](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
