---
title: "User and group collections"
description: "Create a collection of users and groups so you can grant the same rights to all of them at once in Netwrix Privilege Secure."
sidebar_position: 60
---

# User and group collections

A collection is a named set of users and groups that you manage as one unit. Add a collection where you would add a single user or group, such as an access policy, and every member gets the same rights. Use a collection when many accounts need the same access, so you change one list instead of many.

Only accounts that are already onboarded on the **Users & Groups** page can join a collection. To onboard accounts first, see [Add domain users and groups](/docs/privilegesecure/26_07/admin/users-groups/add-users-groups).

Open the page from the left navigation: click **Users & Groups**, then **User and Group Collections**.

{/* TODO screenshot: the User and Group Collections page with one collection selected and its members listed */}

## Page layout

The left pane lists the collections. It has a **Search Collections...** box and a **+** button that starts a new collection. Hover over a collection to show the trash can icon, which deletes the collection after you confirm. Deleting a collection doesn't delete its members.

{/* TODO verify: that deleting a collection leaves its member accounts in place on the Users & Groups page. */}

Select a collection to show its name, its description, and its members in the main pane.

{/* TODO verify: the member list toolbar and columns on a populated collection. The lab collection list was empty, so the layout in this section comes from the 26.03 documentation. */}

The member list has these controls:

| Control | What it does |
|---|---|
| **Search** | Filters the members by the text you enter. |
| **Filter** | Shows only users, groups, or applications. |
| **Add Users and Groups** | Opens a window to add members. |
| **Remove** | Takes the selected members out of the collection. |
| **Refresh** | Reloads the list. |

The list shows each member's type, name, user name, user principal name (UPN), email address, and the number of active sessions, scheduled sessions, and access policies. Click a name to open its [details page](/docs/privilegesecure/26_07/admin/users-groups/user-details).

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
2. Click **Add Users and Groups**.
3. In the window, move the accounts you want from **Available Accounts** to **Accounts to Add**.
4. Click **Add**.

The accounts appear in the member list.

{/* TODO verify: the steps and button labels of the Add Users and Groups window for a collection. The lab tour didn't open it, and the 26.03 page links to the add window for domain users, which is a different window. */}

### Example

To give the help desk the same access, select the `Help desk` collection, click **Add Users and Groups**, and add the groups `<helpdesk-tier1-group>` and `<helpdesk-tier2-group>`. Both groups then appear in the member list.

## Remove members from a collection

1. Select the collection in the list.
2. Select the checkbox for each member to remove.
3. Click **Remove**.

The members leave the collection. Their accounts stay on the **Users & Groups** page.

{/* TODO verify: that Remove takes the account out of the collection only, and shows or skips a confirmation. */}

## Use a collection

Add a collection wherever you add users and groups:

- In an access policy, to give every member the policy's activities on its resources. See [Access policies](/docs/privilegesecure/26_07/configuration/access-policies/overview).
- In a role, to give every member the role. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26_07/admin/roles/assign-roles).

{/* TODO verify: that a collection can be added to an access policy and to each built-in role. The 26.03 pages say collections are valid in policies and in the role windows. */}
