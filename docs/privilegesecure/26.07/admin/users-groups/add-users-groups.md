---
title: "Add domain users and groups"
description: "Onboard Active Directory users and groups to the Privilege Secure console so they can sign in, be assigned roles, and be added to access policies."
sidebar_position: 20
---

# Add domain users and groups

Onboard an Active Directory (AD) user or group to give it access to the console. The **Add Users & Groups** window lists the accounts that the AD sync found. Members of an onboarded group sign in with their own accounts.

{/* TODO verify: whether members of an onboarded group appear in the group's Members tab and Users & Groups list automatically */}

## Prerequisites

- You have the Administrator role.
- The Active Directory domain is onboarded, and an AD sync has completed. The **Add Users & Groups** window lists only accounts that the sync found. See [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md) and [How Active Directory synchronization works](/docs/privilegesecure/26.07/resources/ad-sync.md).

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

Other pages, such as access policies and roles, open their own add window with the same two-table layout. There, you pick accounts that are already onboarded. Their type list offers **All**, **User**, **Group**, **Application**, **Collection**, and **Local User**. The window for adding members to a collection offers the same values except **Collection**. The columns depend on the page.

## Next steps

- Assign a role. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).
- Review the account. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).
- Grant session access. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).
