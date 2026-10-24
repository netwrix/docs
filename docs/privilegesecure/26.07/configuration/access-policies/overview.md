---
title: "Access policies"
description: "Learn how an access policy combines users, activities, a connection profile, and either resources or credentials to grant just-in-time access."
sidebar_position: 10
---

# Access policies

An access policy grants users just-in-time access. It defines who can run which activities on which resources, or who can check out which credentials and files, and under which session rules. Users can't start a session unless an access policy allows it.

Each access policy combines four things:

- **Who:** users, groups, collections, application users, and local users.
- **What:** activities and activity groups. See [Activities](../activities/activities.md).
- **Where:** resources and resource groups for a resource-based policy, or credentials and files for a credential-based policy.
- **How:** one connection profile, which sets the session rules. See [Connection profiles](connection-profiles.md).

## Policy types

Every access policy has one of two types.

| Type | Use it to | Page |
|---|---|---|
| **Resource Based** | Let users run activities on remote devices such as computers, databases, and network equipment. | [Create a resource-based access policy](resource-based-policy.md) |
| **Credential Based** | Let users check out managed credentials, and credentials and files that are stored in a secret vault. | [Create a credential-based access policy](credential-based-policy.md) |

## Access Policy menu

In the console, the left navigation has an **Access Policy** item. It expands to these pages:

- **Connection Profiles**. See [Connection profiles](connection-profiles.md).
- **Activity Token Complexity**. See [Activity token complexity](activity-token-complexity.md).
- **Command Restriction**. See [Restrict SSH commands](command-restrictions.md).

Select **Access Policy** to open the policy list.

## Policy list

The page uses a list on the left and the selected policy on the right. The list has these controls:

- **Search Policies...** filters the list by name.
- The plus (**+**) button creates a policy.
- The copy icon clones a policy. It appears when you point to a row.
- The trash icon deletes a policy after you confirm. It appears when you point to a row.

The console selects the first policy in the list when you open the page.

The selected policy shows its **Name**, **Description**, **Type**, and **Connection Profile**. The **Connection Profile** field is required. The round arrow next to it opens the selected connection profile. **Save** and **Cancel** appear when you change a field.

The tabs under the fields hold the users, activities, resources, and credentials that belong to the policy. The tabs depend on the policy type.

## Policy selection for a session

When a user requests a session, the console picks one access policy:

1. If the request names an access policy, the console uses that policy.
2. Otherwise, the console uses the first matching policy when the matching policies are sorted by name in alphabetical order. A policy matches when it includes the requested activity and applies to the user and to the resource or credential.

{/* TODO verify: the policy Priority value is stored but the 26.07.3 code doesn't use it to choose a policy. Confirm with engineering that Priority has no effect, and that no priority field appears in the console. */}

Because the first match by name wins, two policies that both match the same request can give different connection profiles. Give overlapping policies names that sort in the order you want them applied, or avoid overlap.

{/* TODO: add an example of two overlapping policies and the policy the console selects */}

If no policy matches, the console shows this message: `Unable to find policy for activity: <activity>, with resource: <resource>. Contact the NPS Administrator to request access.` {/* TODO verify: confirm the exact message text in the 26.07 console. */}

{/* TODO verify: a policy named "Default" is seeded with the Default connection profile and the default activities. Confirm on a fresh install. */}

## Delegated policy management

Custom roles can delegate parts of policy management. The permissions are **[AP] Modify Name**, **[AP] Modify Description**, **[AP] Modify Connection Profile**, **[AP] Modify Activities**, **[AP] Modify Users**, and **[AP] Modify Resources**. Each permission lets a role member change only that part of a policy. See [Create a custom role](../../admin/roles/custom-roles.md).

{/* TODO verify: confirm the exact permission labels in the custom role editor, and whether the console shows the user icon on a policy that a custom role manages (26.03 behavior). */}

## Set up access policies

1. Create or review the [connection profile](connection-profiles.md) that the policy uses.
2. Create the [activities](../activities/activities.md) that users need, and optionally [activity groups](../activities/activity-groups.md).
3. Create a [resource-based policy](resource-based-policy.md) or a [credential-based policy](credential-based-policy.md).
4. Add users, activities, and resources or credentials to the policy.

{/* TODO screenshot: the Access Policy page with the policy list, a selected policy, and the Users tab. */}
