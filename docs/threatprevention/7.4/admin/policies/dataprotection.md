---
title: "Data Protection"
description: "Data Protection"
sidebar_position: 10
---

# Data Protection

Under the Policies node, you can protect collected event data at the folder level.

Select a folder in the Policies node list to view the following two protection types available for
it:

- Permissions – Control the ability of Threat Prevention users to View Data or Manage Policies for
  the selected folder.

  - View Data checkbox – Affects the ability to see events data for these policies in the policy’s
    [Recent Events Tab](/docs/threatprevention/7.4/admin/policies/configuration/recentevents/overview.md)
    and the
    [Investigate Interface](/docs/threatprevention/7.4/admin/investigate/overview.md).

    Only users granted the View Data permission on the folder where the object has been
    identified for protection are able to view any results of events that include the object.
    See the [Protect Objects](#protect-objects) section for instructions on protecting policies
    or objects.

  - Manage Policies checkbox – Affects the ability to change policy configuration settings. See
    the [Protect Policies](#protect-policies)section for instructions on protecting policies or
    objects.

- Protected Objects – Monitors the selected
  [Select Active Directory Contexts Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/context.md)
  within the policy folder

  Protected objects are hidden from the following types of data no matter what policy
  monitored/blocked it:

  - [Recent Events Tab](/docs/threatprevention/7.4/admin/policies/configuration/recentevents/overview.md)
    data
  - [Investigate Interface](/docs/threatprevention/7.4/admin/investigate/overview.md)
    data

:::note
These protections only apply to viewing event data within the Administration Console, and
do not carry-over to the Netwrix Threat Manager Reporting Module application.
:::


## Protect Policies

Policies can be protected at the folder level under the Policies node. When a user is assigned
permission on a folder, all policies and subfolders within that folder are protected from any user
not included in the Permissions list.

Follow the steps to protect policies.

![Policy folder - Permissions page](/images/threatprevention/7.4/admin/policies/permissions.webp)

**Step 1 –** Select a folder under the Policies node in the Navigation pane. The Policies interface
is displayed.

**Step 2 –** In the Permissions ribbon, click the **Add** (+) button.

![Select User window](/images/threatprevention/7.4/admin/policies/selectuser.webp)

**Step 3 –** On the Select User window, select the user to be granted permission on this folder and
the policies within it.

:::note
Only users with rights assigned in the
[Users and Roles Window](/docs/threatprevention/7.4/admin/configuration/userroles/overview.md)
are available in the list.
:::


**Step 4 –** The window closes and the user is displayed in the Permissions list with the View Data
permission granted by default. To add the Manage Policies permission, check the box for that user.
Only those users specifically granted permission to this folder can view event data or configure the
policies within this folder or its subfolders.

- Select a user in the Permissions list and click the **Remove** (x) button to delete it from the
  list.

**Step 5 –** Click **Save** when the permissions are set as desired.

## Protect Objects

In addition to protecting policies, objects being monitored or blocked by policies can also be
protected. This feature ensures regulatory compliance. Any object granted protection is protected
across all policies and reports, including its child objects. That means if a policy from another
folder monitors or blocks a change affecting the protected object, the resulting event is not
included in any result data. Only users granted permissions on the folder where the object is
protected are able to view event data for that object. This protection applies to a policy’s Recent
Events tab and the Investigate interface.

Follow the steps to protect objects.

![Policy folder - Permissions page](/images/threatprevention/7.4/admin/policies/permissions.webp)

**Step 6 –** Select a folder under the Policies node in the Navigation pane. The Policies interface
is displayed.

**Step 7 –** In the Protected Objects ribbon, click the **Add** (+) button.

![Select Active Directory Contexts window](/images/threatprevention/7.4/admin/policies/adcontexts.webp)

**Step 8 –** On the Select Active Directory Contexts window, select an Agent from the drop-down menu
and click **Connect**. Expand the domain tree in the Navigation pane. Select an item in the Results
pane on the right and click **OK**. See the
[Selection Windows](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/overview.md)
topic for additional information.

**Step 9 –** The window closes and the object is displayed in the Protected Objects list. Only those
users specifically granted permission to this folder can view event data for the protected object or
its children.

- Select a user in the Protected Objects list and click the **Remove** (x) button to delete it from
  the list.

**Step 10 –** Click **Save** when the permissions are set as desired.

Protected objects have now been added to the Policies interface.
