---
title: "Add Action Window"
description: "Add Action Window"
sidebar_position: 20
---

# Add Action Window

The Add Action window varies slightly based on the Action Type selected and the associated session
part. Follow the instructions to add actions to the activity.

**Step 1 –** Navigate to the **Activities** page.

**Step 2 –** In the Activities list, select the name of an activity.

**Step 3 –** In the Actions section, for each of the following, click the **Add** icon.

- Pre-Session (Grant) — List of actions that will run before the session begins. These actions may
  be paired with a corresponding Post-Session action.
- Session (Connect) — List of actions that will run during the session
- Post-Session (Remove) — List of actions that will run after the session completes.

These actions may be paired with a corresponding Pre-Session action.

![addactionwindow](/images/privilegesecure/4.2/accessmanagement/admin/policy/window/activities/addactionwindow.webp)

**Step 4 –** Complete the following fields:

- Action Type - Icon indicates the type of object.
- AD Object Type - AD Object Type — Select which type of object to manage in the Organizational
  Unit, a User or Computer..
- AD Organizational Unit for the Action - AD Organizational Unit — Enter a pre-existing
  Organizational Unit the login account will have delegated permissions for.
- AD Rights to be Added - AD Rights to be Added — Select which right will be delegated to the login
  account for managing the previously specified Organizational Unit.
- Continue on Error - Continue on Error — If an error occurs, continue to the next step rather than
  halting the action.
- Action Name - Action Name — (Optional) Edit the name of the action.
- Paired Actions Name - Paired Action's Name — (Optional) Edit the name of the paired action

See the [Action Types](/docs/privilegesecure/4.2/admin/interface/activities/addaction/activityactiontypes.md) section for detailed descriptions of the
fields.

:::note
The fields will change depending on the selected Action Type.
:::


**Step 5 –** Click **Okay** to create the new action.

**Step 6 –** Continue to create as many actions for each stage of the session (Grant, Connect,
Remove) as required.

:::note
It is not possible to change the Action Type once the action is created. Delete the
existing action and then create a new action to get a new Action Type.
:::


**Step 7 –** If desired, it is possible to automatically run any Protection Policies associated with
the resource when the session completes. Simply add the **Invoke Protection Policies** action to the
Post-Session group. See the [Protection Policies Page](/docs/privilegesecure/4.2/admin/interface/protectionpolicies/protectionpolicies.md) topic for
additional information.

:::note
It is not necessary to select a protection policy. All protection policies that apply to
the session host are executed.
:::


The new actions are added to the activity.
