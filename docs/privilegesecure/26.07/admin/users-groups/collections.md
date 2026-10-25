---
title: "User and group collections"
description: "Create a collection of users and groups so you can grant the same rights to all of them at once in Netwrix Privilege Secure."
sidebar_position: 60
---

# User and group collections

A collection is a named set of users and groups that you manage as one unit. Add a collection where you would add a single user or group, such as an access policy, and every member gets the same rights. Use a collection when many accounts need the same access, so you change one list instead of many.

Only accounts that are already onboarded on the **Users & Groups** page can join a collection. To onboard accounts first, see [Add domain users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md).

Open the page from the left navigation: click **Users & Groups**, then **User and Group Collections**.

{/* TODO screenshot: the User and Group Collections page with one collection selected and its members listed */}

## Page layout

The left pane lists the collections. It has a **Search Collections...** box and a **+** button that starts a new collection. Hover over a collection to show the trash can icon, which deletes the collection after you confirm. Deleting a collection doesn't delete its members. Their accounts stay on the **Users & Groups** page.

Select a collection to show its name, its description, and its members in the main pane.

The member list has these controls:

| Control | What it does |
|---|---|
| **Search** | Filters the members by the text you enter. |
| **Type** | Shows only users, groups, applications, or local users. |
| **Add Users and Groups** | Opens a window to add members. |
| **Remove** | Takes the selected members out of the collection. It's available after you select a member. |
| **Refresh** | Reloads the list. |

The list shows each member's type, name, user name, user principal name (UPN), email address, last sign-in, and the number of active sessions, scheduled sessions, and access policies. Click a name to open its [details page](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).

## Create a collection

1. In the left navigation, click **Users & Groups**, then click **User and Group Collections**.
2. Click the **+** button in the left pane.
3. Enter a name in **Enter User and Group Collection Name**.
4. Enter a **Description**.
5. Click **Save**.

The new collection appears in the list with no members.

### Example

This example creates a collection for the help desk.

| Field | Value |
|---|---|
| **Enter User and Group Collection Name** | `Help desk` |
| **Description** | `Tier 1 and tier 2 support staff` |

## Add members to a collection

1. Select the collection in the list.
2. Click **Add Users and Groups**. The **Add Users and Groups** window opens.
3. Optionally, select a type in the type list or enter text in **Search Users and Groups...** to narrow **Available Users and Groups**.
4. Select each account to add. The selected accounts move to **Users and Groups to Add**.
5. Click **Add**. The button stays unavailable until you select an account.

The accounts appear in the member list.

### Example

To give the help desk the same access, select the `Help desk` collection, click **Add Users and Groups**, and add the groups `<helpdesk-tier1-group>` and `<helpdesk-tier2-group>`. Both groups then appear in the member list.

## Remove members from a collection

1. Select the collection in the list.
2. Select the checkbox for each member to remove.
3. Click **Remove**, then click **Remove** again to confirm.

The members leave the collection. Their accounts stay on the **Users & Groups** page.

## Use a collection

Add a collection wherever the add window offers **Collection** in its type list:

- In an access policy, to give every member the policy's activities on its resources. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).
- In the Administrators, Reviewers, or role members window, to give every member the role. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).
