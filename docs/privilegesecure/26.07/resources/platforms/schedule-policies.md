---
title: "Schedule policies"
description: "Create, edit, and delete schedule policies that set how often Privilege Secure rotates, verifies, scans, and protects."
sidebar_position: 40
---

# Schedule policies

A schedule policy in Netwrix Privilege Secure for Access Management (Privilege Secure) defines how often a recurring task runs. You create a policy once and select it wherever a schedule is needed. Changing a policy changes the schedule of every task that uses it.

Select a schedule policy in these places:

- **Platforms**: Each platform has schedules for its resources, such as the scheduled change policy (password rotation), the scan schedule, and the verification schedule. See [Platforms](/docs/privilegesecure/26_07/resources/platforms).
- **Protection policies**: A protection policy runs on the **Protection Policy Schedule** of each resource's platform. See [Protection policies](/docs/privilegesecure/26_07/resources/protection-policies).
- **Credential policy overrides**: An override sets scan, protect, rotate, and verify schedules for specific credentials or resources. See [Credential policy overrides](/docs/privilegesecure/26_07/admin/credentials/policy-overrides).
- **Report subscriptions**: A subscription emails a report on a schedule. See [Reports](/docs/privilegesecure/26_07/admin/audit-reporting/reports).

{/* TODO verify: that a schedule policy you create appears in the Subscription Schedule list of a report subscription. admin/audit-reporting/reports.md marks the same claim as unverified. */}

The schedules mean the following:

- **Rotation** changes the password of a managed account.
- **Verification** checks that the password of a managed account matches the password Privilege Secure set.
- **Host scan** collects the local users, groups, services, and scheduled tasks of a host.

## Open the Schedule Policies page

1. In the left navigation, select **Platforms**.
1. Select **Schedule Policies**.

The page lists every schedule policy. Each policy is named after its recurrence, such as `Every 4 hours`. Use **Search** to filter the list.

{/* TODO screenshot: Schedule Policies page with the policy list and the selected policy details */}

## Frequency types

The **Schedule Policy Editor** offers four frequencies under **Select Frequency**. The fields change with the frequency you select.

| Frequency | Fields |
|---|---|
| **Every x Hours** | The number of hours between runs. The default is 1. |
| **Every x Days** | The number of days between runs and the time of day. |
| **Weekly** | The day of the week and the time of day. |
| **Monthly** | The day of the month and the time of day. |

{/* TODO verify: Weekly selects one day in the 26.03 docs, but the code stores a set of weekdays. Confirm whether the editor allows several days. */}
{/* TODO verify: the code accepts a Monthly day from 1 to 28 and a "last day" value (99). Confirm the editor range and how the last day is selected. */}

Times use the time zone of the Privilege Secure server. {/* TODO verify: confirm the time zone shown in the editor */}

## Create a schedule policy

1. Open the **Schedule Policies** page.
1. Select the **+** button above the policy list. The **Schedule Policy Editor** opens.
1. Under **Select Frequency**, select **Every x Hours**, **Every x Days**, **Weekly**, or **Monthly**.
1. Enter the values the editor shows for that frequency.
1. Select **Save**. **Save** is unavailable until you fill in the required fields.

The new policy appears in the list and in the schedule dropdown lists on platforms, credential policy overrides, and report subscriptions.

For example, to verify passwords every 2 hours, select **Every x Hours**, enter `2`, and select **Save**. The policy appears as `Every 2 hours`.

{/* TODO verify: the capitalization of the generated policy name (Every 2 hours or Every 2 Hours) */}
{/* TODO screenshot: Schedule Policy Editor with the four frequency options */}

## Edit a schedule policy

1. Open the **Schedule Policies** page.
1. Select the policy in the list.
1. Select the **Edit** (pencil) icon in the details pane. The **Schedule Policy Editor** opens.
1. Change the frequency or its values.
1. Select **Save**.

Tasks that use the policy run on the new schedule.

## Delete a schedule policy

1. Open the **Schedule Policies** page.
1. Hover over the policy in the list.
1. Select the trash can icon, and then confirm the deletion.

{/* TODO verify: what happens to platforms, protection policies, and overrides that still use a deleted policy, and whether the console blocks deleting a policy that is in use */}
{/* TODO verify: the 26.03 page says the default policy can't be deleted. Confirm which policy this refers to in 26.07. */}

## Related topics

- [Platforms](/docs/privilegesecure/26_07/resources/platforms)
- [Scheduled tasks](/docs/privilegesecure/26_07/admin/service-nodes/scheduled-tasks)
