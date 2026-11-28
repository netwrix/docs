---
title: "Expire, Renew, and Change Group Expiry in Directory Manager"
description: "Expire a group manually, change its expiry policy, attest an expiring group, and renew an expired group in the Directory Manager portal."
keywords:
  - expire group
  - renew expired group
  - group expiry policy
  - Never Expire policy
  - expiring group attestation
sidebar_position: 120
---

# Expire, Renew, and Change Group Expiry in Directory Manager

In the Directory Manager portal, you can expire or renew a group. You can also change a group's expiry policy and attest an expiring group.

## Expire a group manually

To expire a group manually:

1. On the left navigation bar, click **Groups**, and then select the **My Groups**, **My
   Memberships**, or **My Expiring Groups** tab.

   You can also [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to expire.

2. On the page displayed, select the group and click **Expire** on the toolbar.

:::note
The result depends on the group's expiry policy:

- When you try to manually expire a group with the expiry policy set to "Never Expire", an error message tells you that the group can't be expired.
- When you manually expire a group with an expiry policy other than "Never Expire", the group expires and is moved to the [View My Expired Groups in Directory Manager](/docs/directorymanager/11.1/portal/group/mygroups/myexpiredgroups.md) page.
- A group without an expiry policy doesn't expire.

Directory groups that are created outside of Directory Manager don't have an expiry policy. In Directory Manager, you can't tell groups with an expiry policy from groups without one. Groups without an expiry policy are displayed with "Never Expire" set as the policy.
:::

If expired groups aren't renewed within a specific period, they are logically deleted when the period ends. The Directory Manager administrator sets this period in the Group Lifecycle policy for the identity store. See Group life cycle job.

Logically deleted groups are moved to the [View My Deleted Groups in Directory Manager](/docs/directorymanager/11.1/portal/group/mygroups/mydeletedgroups.md) page with the "Deleted\_" prefix added to their names.

## Change the expiry policy for a group

When a group is created, its expiry policy is set to "Never Expire". You can change this policy as required.

The Group Life Cycle job expires groups according to their expiry policies and moves them to the [View My Expired Groups in Directory Manager](/docs/directorymanager/11.1/portal/group/mygroups/myexpiredgroups.md) page.

To change the expiry policy for a group:

1. [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.1/portal/generalfeatures/search.md) the group you want to change the expiry policy for.
2. Select the group on the **Search Results** page and click **Properties** on the toolbar.

   The group's [View and Edit Group Properties in Directory Manager](/docs/directorymanager/11.1/portal/group/properties/overview.md) page opens with the **General** tab in view.

3. From the **Expiration Policy** list, select the duration that the group remains active for, starting today. The group expires when the period ends.

   If you select the _Other_ option from the list, two boxes are displayed under the Expiration Policy box. First, select an option (Days, Months, or Years) from the second list. Then enter a value for the selected option in the first box. The group remains active for the duration you specify.

   The **Expiration Date** box displays the group's expiry date after you save the changes.

4. Click **Save**.

:::note
If the Directory Manager administrator has specified this action for review, your changes don't take effect until verified by an approver. See [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md).
:::

## Attest an expiring group

See [Attest an Expiring Group in Directory Manager](/docs/directorymanager/11.1/portal/group/workingwithgroups/attestation.md).

## Renew an expired group

To use an expired group again, renew it. On renewal, the group becomes active again and its expiry policy is re-applied to it, starting from the date of renewal.

In the Group Life Cycle policy, the administrator can specify a period for retaining expired groups in the directory. If a group isn't renewed within this period, the Group Life Cycle job automatically deletes it from the directory.

To renew an expired group:

1. On the left navigation bar, click **Groups**, and then select the **My Groups** tab.
2. Go to the **My Expired Groups** tab, select the group, and click **Renew** on the toolbar.
3. Click **OK** to confirm the renewal.
