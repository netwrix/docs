---
title: "Create a resource-based access policy"
description: "Create a resource-based access policy and add the users, activities, and resources that let users run activities on remote devices."
sidebar_position: 20
---

# Create a resource-based access policy

A resource-based access policy lets users run activities on resources such as computers, databases, and network equipment. For an overview of policies, see [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).

## Prerequisites

- A [connection profile](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md). The **Connection Profile** field is required on every policy.
- The [activities](/docs/privilegesecure/26.07/configuration/activities/activities.md) that you want users to run.
- The users, groups, and resources that you want to include. The resources must already be onboarded.

## Create the policy

1. Select **Access Policy** in the left navigation.
2. Click the plus (**+**) button above the policy list.
3. Enter a **Name**. This field is required.
4. (Optional) Enter a **Description**.
5. Select **Resource Based** in the **Type** list. A new policy uses this type by default.
6. Select a profile in the **Connection Profile** list.
7. Click **Save**.

A new policy shows `<none>` in the **Connection Profile** list. If you click **Save** without selecting a profile, the console shows "Please correct the errors" and "A value is required." under **Connection Profile**. If the profile doesn't exist yet, create it on the **Connection Profiles** page first. The round arrow next to the list opens the selected profile.

For example, to give a team access to a set of web servers, enter the name `Web servers - maintenance`, select **Resource Based**, and select an existing connection profile. Then add the team's group, an activity, and a resource group on the tabs.

A new policy has three tabs: **Users**, **Activities**, and **Resources**. Add items to each tab so the policy can match a session request.

## Add users and groups

On the **Users** tab, you choose who the policy applies to.

1. Select the policy, and then select the **Users** tab.
2. Click **Add**. The **Add Users and Groups** window opens.
3. (Optional) Use **Search Users and Groups...** or the type filter to narrow the list. The filter offers **All**, **User**, **Group**, **Application**, **Collection**, and **Local User**.
4. Click a row in **Available Users and Groups** to move it to **Users and Groups to Add**. Click a row in **Users and Groups to Add** to move it back.
5. Click **Add**.

To remove an item, select its checkbox and click **Remove**. **Remove** stays unavailable until you select a row.

The table has these columns:

| Column | Description |
|---|---|
| **NAME** | The name of the user, group, or other item. Expand the row to list the activities and resources the item can use. |
| **EMAIL** | The email address, if one is available. Groups show `<None>`. |
| **USER NAME** | The account name, if one is available. Groups show `<None>`. |
| **TYPE** | An icon for the type of item. |
| **CERTIFIED** | The result of access certification for the item. |

When you search for a user who isn't in the policy, an **Add User** box appears. Click it to open the add window with the search results.

For more on user types, see [Add domain users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md) and [User and group collections](/docs/privilegesecure/26.07/admin/users-groups/collections.md).

The **CERTIFIED** column shows an icon for each user, application, and local user:

- A thumbs-up means an access certification approved access.
- A thumbs-down means an access certification denied access.
- A question mark means no access certification has reviewed the access yet.

Expand a row to see the details under the headings **Access Approved**, **Access Denied**, and **Not Certified**. Each list shows the activity, the resource or credential, and, for reviewed items, the access certification that made the decision. Under **Access Denied**, the **Enable** column has an unlock icon for each row. Click the icon and confirm the prompt to remove that denial. Only administrators can do this.

For how access certification affects a policy, see [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md).

## Add activities and activity groups

On the **Activities** tab, you choose what users can do.

1. Select the **Activities** tab.
2. Click **Add**. The **Add Activities and Activity Groups** window opens.
3. (Optional) Search, or filter by **All**, **Activity**, or **Activity Group**.
4. Click a row in the available list to move it to **Activities and Activity Groups to Add**.
5. Click **Add**.

The table has the columns **NAME**, **TYPE**, and **DESCRIPTION**. The type icon shows whether a row is an activity or an activity group. To remove an item, select its checkbox and click **Remove**.

To create activities and groups, see [Activities](/docs/privilegesecure/26.07/configuration/activities/activities.md) and [Activity groups](/docs/privilegesecure/26.07/configuration/activities/activity-groups.md).

## Add resources and resource groups

On the **Resources** tab, you choose where users can run the activities.

1. Select the **Resources** tab.
2. Click **Add**. The **Add Resources and Resource Groups** window opens.
3. (Optional) Search, or filter by **All**, **Resource**, or **Resource Group**.
4. Click a row in **Available Resources and Resource Groups** to move it to **Resources and Resource Groups to Add**.
5. Click **Add**.

The table has these columns:

| Column | Description |
|---|---|
| **NAME** | The name of the resource or resource group. |
| **TYPE** | **Resource** or **Resource Group**. |
| **DNS HOST NAME** | The DNS host name of a host, or the fully qualified domain name of a domain. |
| **OPERATING SYSTEM** | The operating system of the resource. |
| **ACTIVE SESSION COUNT** | The number of active sessions on the resource. |

To remove an item, select its checkbox and click **Remove**.

## Related topics

- [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md)
- [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md)
- [Create a credential-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md)

![The Users tab of a resource-based access policy with the Type and Connection Profile fields and the Users, Activities, and Resources tabs.](/images/privilegesecure/26.07/configuration/access-policy-users-tab.webp)
{/* TODO screenshot: the Add Activities and Activity Groups window with the two panes. */}
{/* TODO screenshot: a new policy form with the required Connection Profile error before Save. */}
