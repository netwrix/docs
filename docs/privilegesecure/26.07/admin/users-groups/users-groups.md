---
title: "Users and groups"
description: "See who has access to the Privilege Secure console, how many licenses are in use, and how to filter, add, and remove users, groups, and application accounts."
sidebar_position: 10
---

# Users and groups

The **Users & Groups** page lists every account that has access to the console. An account is onboarded when you add it to this page. Onboarded users sign in to manage policies or run sessions. Onboarded groups give their members the same access.

To open the page, select **Users & Groups** in the left navigation. The same list also appears as the **Users** tile on the dashboard. See [Dashboard](/docs/privilegesecure/26.07/admin/sessions/dashboard.md).

{/* TODO screenshot: the Users & Groups list with the Licenses counter, the filters, and the LOCKED column */}

## Account types

The list shows four types of account.

| Type | What it is | Add it with |
|---|---|---|
| User | An Active Directory (AD) user | [Add domain users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md) |
| Group | An AD group. Members sign in with their own accounts. | [Add domain users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md) |
| Application | An account for an automation tool that calls the REST API. It can't sign in to the console. | [Add application users](/docs/privilegesecure/26.07/admin/users-groups/application-users.md) |
| Local User | An account stored in the Privilege Secure database. It doesn't depend on AD. | [Add and manage local users](/docs/privilegesecure/26.07/admin/users-groups/local-users.md) |

You can also group accounts into collections to grant the same rights to a set. See [User and group collections](/docs/privilegesecure/26.07/admin/users-groups/collections.md).

## Toolbar

The toolbar has these controls:

- **Add:** Opens a menu with **New Domain User**, **New Application User**, and **New Local User**.
- **Remove:** Removes the selected accounts. The button stays disabled until you select a row.
- **Search:** Filters the list to rows that match the text you enter.
- **Type:** Shows one type only. The values are **All**, **User**, **Group**, **Application**, and **Local User**.
- **License:** Shows licensed or unlicensed accounts. The values are **All**, **Licensed**, and **Unlicensed**.
- **Last Login:** Shows accounts whose last sign-in falls between a start date and an end date.
- **Refresh:** Reloads the list.

The **Licenses** counter at the top right of the page shows the licenses in use and the licensed total, for example 7 / 50. The list also shows the number of results.

## Columns

| Column | Shows |
|---|---|
| **TYPE** | An icon for the account type. |
| **NAME** | The account name. Select the name to open the account's details page. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md). An account with no display name shows `<null>`. |
| **USER NAME** | The `sAMAccountName` value. Groups leave this blank. |
| **USER PRINCIPAL NAME** | The user principal name (UPN). Groups leave this blank. |
| **LICENSED** | Whether the account uses a license. For a group, a badge such as x2 shows how many members are licensed. Hover over it to see the count, for example "2 users licensed". |
| **EMAIL** | The email address, if the account has one. |
| **LAST LOGIN** | The date and time of the last sign-in. A group shows **N/A** until a member signs in. |
| **LOCKED** | Whether the account is locked. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).{/* TODO verify: whether a failed-sign-in lockout also shows in this column (only administrator locks were documented in 26.03; no locked account was seen in the lab) */} |
| **ACTIVE SESSIONS** | The number of sessions in progress. |
| **SCHEDULED SESSIONS** | The number of sessions scheduled for a later time. |
| **ACCESS POLICIES** | The number of access policies that include the account. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md). |

You can resize the columns and sort each one in ascending or descending order.

## Remove users and groups

Removing an account takes away its console access.

:::warning
Removing a user permanently deletes that user's history and events from Privilege Secure. Export any records you need before you remove the user.
:::

To remove an account:

1. Select **Users & Groups** in the left navigation.
2. Select the checkbox for each account to remove.
3. Click **Remove**.
4. Confirm the warning.

For example, to remove a contractor who has left, export the user's history from the Activity Log, select the row, click **Remove**, and confirm.

{/* TODO verify: whether removing a user frees its license, whether recordings remain after removal, and why the Licenses counter can show more used than total (a community thread reports 19 / 10). */}

For how licenses are counted, see [Licensing](/docs/privilegesecure/26.07/requirements/licensing.md).
