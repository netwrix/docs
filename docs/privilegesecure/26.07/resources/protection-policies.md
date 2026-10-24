---
title: "Protection policies"
description: "Create a protection policy that removes unauthorized members from local groups on your resources, and learn how sessions interact with it."
sidebar_position: 130
---

# Protection policies

A protection policy keeps unauthorized members out of local groups on your resources. You list the groups to protect and the accounts allowed in each group. When the policy runs, Netwrix Privilege Secure for Access Management (Privilege Secure) removes every member that isn't on the list from the local group on the resource.

:::warning
A protection policy removes group members. Any member of a protected group that isn't listed on the **Allowed Members** tab loses that membership the next time the policy runs. List every account that must keep its membership before you add resources to the policy.
:::

## How a protection policy works

A protection policy has three parts.

| Part | What it holds |
|---|---|
| Resources | The resources whose local groups the policy checks. |
| Allowed members | The groups to protect, and the members each group may contain. |
| Schedule | The tasks that run the policy on each resource. |

The policy runs on the **Protection Policy Schedule** of the platform that each resource uses. To change how often it runs, change that schedule on the platform. See [Platforms](/docs/privilegesecure/26_07/resources/platforms) and [Schedule policies](/docs/privilegesecure/26_07/resources/platforms/schedule-policies).

To run the policies that apply to a resource when a session ends, instead of waiting for the schedule, add the **Invoke Protection Policy** action to the Post-Session group of an activity. See [Action types](/docs/privilegesecure/26_07/configuration/activities/action-types).

{/* TODO verify: what the 60-minute group monitor interval (GroupMonitorInterval) governs, and whether it changes how often a policy runs. The 26.03 pages say only that policies run on the platform schedule. */}

{/* TODO verify: which resource types a protection policy supports. The Protection Policy Schedule field appears on the BSD, Linux, Palo Alto PanOS, and Windows platforms in the console. */}

### Sessions and protected groups

An activity can add a user to a group for the length of a session. A protection policy doesn't remove those users while the session runs.

The **Leave Existing Members in Group** setting on a connection profile controls what happens to a user who was already in the group before the session. When the setting is on, that user stays in the group. See [Connection profiles](/docs/privilegesecure/26_07/configuration/access-policies/connection-profiles).

## Create a protection policy

1. Select **Resources** > **Protection Policies**.
1. Select the plus (**+**) button above the list of policies.
1. In **Name**, enter a name for the policy.
1. Optional: In **Description**, enter the purpose of the policy.
1. Select **Save**.

A new policy shows only **Name** and **Description** until you save it. After you save, the **Resources**, **Allowed Members**, and **Schedule** tabs appear.

{/* TODO screenshot: the Protection Policies page with the policy list and the three tabs */}

Use the search box above the list to find a policy. Hover over a policy to show the copy icon, which creates a new policy from the selected one, and the trash icon, which deletes the policy after you confirm.

## Add a protected group

A protected group must already exist on the resource. Privilege Secure can't create it.

1. Select **Resources** > **Protection Policies**, then select the policy.
1. Select the **Allowed Members** tab.
1. Select **Add Group**.
1. In **Group Name**, enter the name of the local group, for example `Administrators`.
1. In **Group Member**, enter the account that may stay in the group, for example `<domain>\<account>`.
1. Select **Save**.

The group appears in the **Group Name** column, and the member appears in the **Allowed Member(s)** column. Privilege Secure treats a member name without a domain as an account that is local to the resource.

{/* TODO verify: the window titles "Add Protected Group and Member" and "Edit Protected Group Members". They come from the 26.03 pages and weren't opened in the 26.07 console. */}

## Edit the allowed members of a group

1. Select **Resources** > **Protection Policies**, then select the policy.
1. Select the **Allowed Members** tab.
1. Select **Edit Members**.
1. To remove a member from the allowed list, select the trash icon next to the member and confirm.
1. To allow another member, enter the account in the **Group Member** field and select **Add**.

Removing a member from the allowed list doesn't remove the account from the group right away. The policy removes it the next time it runs.

## Add resources to a protection policy

1. Select **Resources** > **Protection Policies**, then select the policy.
1. Select the **Resources** tab.
1. Select **Add**.
1. In the **Available Resources** table, select each resource to add. The resource moves to the **Resources to Add** table. Select a resource in that table to move it back.
1. Select **Add**.

The **Resources** tab lists each resource with its **Name**, **DNS Host Name**, and **Operating System**. To remove a resource from the policy, select it and select **Remove**.

{/* TODO verify: whether resource groups can be added to a protection policy. The 26.03 Add Resources window is titled "Resources And Groups to Add". */}

## View the schedule of a protection policy

1. Select **Resources** > **Protection Policies**, then select the policy.
1. Select the **Schedule** tab.

The tab shows the scheduled tasks for the resources in the policy. It has these columns.

| Column | Description |
|---|---|
| **Task Name** | The name of the scheduled task. |
| **Last Run Time** | When the task last ran. |
| **Next Run Time** | When the task runs next. |
| **Recurrence** | How often the task runs. |
| **Last Status** | The result of the last run. |
| **Status** | The current state of the task. |

To read the log of a task, select the task and select **View Logs**.

## Related topics

- [Platforms](/docs/privilegesecure/26_07/resources/platforms)
- [Schedule policies](/docs/privilegesecure/26_07/resources/platforms/schedule-policies)
- [Server details](/docs/privilegesecure/26_07/resources/servers)
