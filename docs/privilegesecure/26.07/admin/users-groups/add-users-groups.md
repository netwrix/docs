---
title: "Add domain users and groups"
description: "Onboard Active Directory users and groups to the Privilege Secure console so they can sign in, be assigned roles, and be added to access policies."
sidebar_position: 20
---

# Add domain users and groups

Onboard an Active Directory (AD) user or group to give it access to the console. The **Add Users & Groups** window lists the accounts that the AD sync found. Members of an onboarded group sign in with their own accounts.

{/* TODO verify: whether members of an onboarded group appear in the group's Members tab and Users & Groups list automatically (PSAM-625, group members discovered) */}

## Prerequisites

- You have the Administrator role.
- The AD domain is onboarded as a resource, and its accounts have synced. See [Resources](/docs/privilegesecure/26.07/resources/overview.md).

{/* TODO verify: the exact resource page name and path for the prerequisite link, and whether an AD sync must run before accounts appear in the list */}

## Add users and groups

1. Select **Users & Groups** in the left navigation.
2. Click **Add** and select **New Domain User**. The **Add Users & Groups** window opens.
3. Optionally, select **User** or **Group** in the type list to narrow the **Available Accounts** table, or enter text in **Search Accounts...**.
4. Select the checkbox for each account to add. The selected accounts move to the **Accounts to Add** table.
5. Click **Add**. The button stays disabled until you select an account.

The accounts now appear on the **Users & Groups** page. For example, to give the AD group `Server-Admins` console access, search for `Server-Admins`, select its checkbox, and click **Add**.

![The Add Users & Groups window with a search for NPS, three available accounts, and NPS 1. Credential in Accounts to Add.](/images/privilegesecure/26.07/admin/add-users-groups-window.webp)

## Window reference

The window has two tables. **Available Accounts** lists the accounts that the AD sync found. **Accounts to Add** lists your selection and starts empty.

| Column | Shows |
|---|---|
| **TYPE** | An icon for a user or a group. |
| **NAME** | The account name. |
| **USER PRINCIPAL NAME** | The user principal name. |
| **DOMAIN** | The domain that holds the account. |

The same window also opens from other pages, such as role and access policy pages, where you pick accounts that are already onboarded. In those places, the type list also offers **Application**, **Collection**, and **Local User**.

{/* TODO verify: the type list values and columns in the picker when it opens from other pages (the 26.03 page lists User, Group, Application, Collection, and Local User). Only the onboarding view was seen in the lab. */}

## Next steps

- Assign a role. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).
- Review the account. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).
- Grant session access. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).
