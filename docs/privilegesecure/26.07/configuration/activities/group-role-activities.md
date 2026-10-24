---
title: "Grant group or role membership without a resource"
description: "Build an activity that lets users pick groups or roles to join for a session. A connection to a resource is optional."
sidebar_position: 60
---

# Grant group or role membership without a resource

Some privileged work happens outside a Privilege Secure session. A user needs temporary membership in a group or role, and then does the work with their own tools. The **Add User to Groups & Roles (User Selected)** action type supports this. The administrator lists the groups and roles an activity can grant. The user picks from that list when requesting a session. Privilege Secure adds the user to the selected groups and roles when the session starts and removes the user when the session ends.

The groups and roles can come from these platforms:

- Active Directory
- Entra ID
- SQL Server
- Oracle

A connection to a resource is optional. The session request doesn't require resource selection for these activities.

## Create the activity

1. Click **Activities** in the left navigation pane, and then click the green **+** button.
2. Enter a name, select a **Login Account** (not Vault or Resource), and select an **Activity Type**. See [Create an activity](create-activity.md) for the other fields.
3. Click **Save**. The action groups are disabled until you save the activity.
4. In the **Pre-Session (Grant)** group, click the green **+** button.
5. In **Add Action to Pre-Session Group**, open **Action Type** and select **Add User to Groups & Roles (User Selected)**.
6. Click **Select Groups/Roles**.
7. In the **Add Groups/Roles** dialog, add the groups and roles that users can choose from. Use these controls:
   - **Platform**: filter the list by **All Platforms** (default), **Active Directory**, **Entra ID**, **SQL Server**, or **Oracle**.
   - Use the search box to filter the list by name, type, platform, or context.
   - The list shows the **Name**, **Type**, **Platform**, and **Context** of each group or role.
8. Confirm the selection. The button changes to **Change Groups/Roles** and the action lists the selected items. Select at least one group or role. The console shows "Please select at least one group or role" if you select none.
9. Click **Okay**.

Privilege Secure creates the paired action **Remove User from Groups & Roles (User Selected)** in the **Post-Session (Remove)** group. This action removes the user from the groups and roles when the session ends. See [Action types reference](action-types.md) for both action types.

For example, to let users request temporary membership in the **Domain Admins** group, add that Active Directory group in step 7.

After you add this action, the **Platform** field is disabled because group and role activities don't use a platform. The Vault and Resource login accounts aren't available.

The new action is named Add User to Groups/Roles by default. This is the default action name, not a separate action type.

{/* TODO verify: which service account Privilege Secure uses to change membership on each platform. */}

{/* TODO screenshot: the Add Groups/Roles dialog with the Platform list open and several groups and roles selected */}

## Request a session with group selection

When a user requests a session for one of these activities, the request dialog includes a **Group Selection** step after **Activity Selection**. The step is titled **Select Groups & Roles**.

1. Select the activity.
2. In **Select Groups & Roles**, click **Choose Groups/Roles**.
3. Select the groups and roles to join during the session. The list shows only the groups and roles that the administrator added to the activity.
4. Continue through the remaining steps and finish the request.

The step shows the message "Resource selection is not required for this activity." For the other steps of a request, see [Request a session](../../user-guide/request-session.md).

## Session length

The session length follows the **Max Duration** setting of the connection profile in the access policy. See [Connection profiles](../access-policies/connection-profiles.md).

## Give users access to the activity

An activity runs only when an access policy includes it. Add the activity, or an activity group that contains it, to the **Activities** tab of an access policy that includes the users. See [Create a resource-based access policy](../access-policies/resource-based-policy.md).

{/* TODO verify: confirm whether a resource-based policy needs a resource entry for an activity that doesn't use one, and whether a credential-based policy can include these activities. */}
