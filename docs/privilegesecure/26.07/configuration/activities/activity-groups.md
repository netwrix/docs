---
title: "Activity groups"
description: "Create an activity group, add activities to it, and use it in an access policy to cover several platforms with one entry."
sidebar_position: 70
---

# Activity groups

An activity group collects activities so that one entry in an access policy covers all of them. An activity targets one platform, so a group is useful for work that spans platforms, such as granting local administrator access on both Windows and Linux. For the difference between activities and groups, see [Activities](activities.md).

Privilege Secure includes two activity groups: **Domain Administrator Access** and **Local Administrator Access**.

:::warning
Before you upgrade from a release earlier than 26.07.3, don't delete a default activity group and then create a group with the same name. The upgrade can fail on the duplicate name, and Linux access can be lost. Upgrade to 26.07.3 or later. See [Upgrade Privilege Secure](../../install/upgrade.md).
:::

## Open the Activity Groups page

Select **Activities** in the left navigation pane, and then select **Activity Groups**. The left pane lists the groups. It has these controls:

- **Search Groups...**: filter the list by name.
- Green **+** button (**Add Activity Group**): create a group.
- Trash can icon: delete the group after you confirm. The icon appears when you hover over a group.

The top of the main pane shows the **Name**, **Description**, and **Created By** of the selected group. When you change the name or description, **Save** and **Cancel** appear. Click **Save** to keep the change, or **Cancel** to discard it.

The activities table lists the activities in the group. Its columns are **Name** and **Created**. The **Created** column shows the date the activity was created. Resize or sort the columns as needed. The table has these controls:

- **Search**: filter the table.
- **Add**: open the **Add Activities** dialog.
- **Remove**: remove the selected activities from the group after you confirm. This doesn't delete the activities.
- **Refresh**: reload the table.

{/* TODO verify: the column headers of the activities table render as raw localization keys in the 26.07.3 lab console. This page describes them as Name and Created. Confirm the labels after the product fixes the headers. */}

{/* TODO screenshot: the Activity Groups page with a group selected and its activities listed */}

## Create an activity group

1. Select **Activities** in the left navigation pane, and then select **Activity Groups**.
2. Click the green **+** button.
3. Enter a name in **Enter Activity Group Name**.
4. (Optional) Enter a **Description**.
5. Click **Save**.
6. With the new group selected, add activities. See [Add activities to a group](#add-activities-to-a-group).

For example, create a group named `Local Administrator Access for All Platforms`, and then add one Windows activity and one Linux activity to it.

## Add activities to a group

1. On the **Activity Groups** page, select the group.
2. In the activities table controls, click **Add**.
3. In the **Add Activities** dialog, use the search box to find activities. The dialog has two panes: **Available** activities and the activities to add.
4. Click a row to move it to the list of activities to add. Click a row in that list to move it back.
5. Click **Add**.

The activities appear in the table.

{/* TODO verify: confirm the exact pane titles and column labels in the Add Activities dialog on 26.07.3. The code names the dialog "Add Activities" and the 26.03 pages describe "Available Activities" and "Activities to Add". */}

## Use an activity group in an access policy

Add the group to the **Activities** tab of an access policy. The **Add Activities and Activity Groups** dialog lists both activities and groups, and its **Type** filter separates them. Users who match the policy can then run every activity in the group on the resources of the policy. See [Create a resource-based access policy](../access-policies/resource-based-policy.md).
