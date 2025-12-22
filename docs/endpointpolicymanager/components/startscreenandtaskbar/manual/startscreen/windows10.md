---
title: "Creating a Windows 10 Screen Collection and Group"
description: "Creating a Windows 10 Screen Collection and Group"
sidebar_position: 10
---

# Creating a Windows 10 Screen Collection and Group

**Step 1 –** To start out, assume that we have a GPO named "PP Start Screen & Taskbar Policies,"
which is linked to the Sales OU, which contains user accounts. Now, in User Configuration | Endpoint
Policy Manager | Start Screen Manager for Windows 10, select Add | New Collection, as seen in
Figure 6.

![quickstart_start_screen_manager_1](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_1.webp)

Figure 6. Creating a new collection using Endpoint Policy Manager Start Screen Manager.

**Step 2 –** Next, you'll see the "Add new collection" dialog, as shown in Figure 7.

![quickstart_start_screen_manager_2](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_2.webp)

Figure 7. Endpoint Policy Manager Start Screen Manager collections are used to group together
policies and configure the layout mode of all the groups.

There are two layout modes for a Netwrix Endpoint Policy Manager (formerly PolicyPak) Start Screen
Manager collection. One is "Partial (Preserve)," which will maintain a user's existing groups, as
well as any default groups, while adding your new groups to theirs. Users will not be able to modify
the groups you assign. The other layout mode is "Full (Replace)," which will remove any existing
groups and replace them with your new groups. Users will not be able to modify the groups you
assign.

**Step 3 –** Let's select the "Partial (Preserve)" layout mode and click "OK" as shown in Figure 8.

![quickstart_start_screen_manager_3](/images/endpointpolicymanager/startscreentaskbar/settings/startscreen/quickstart_start_screen_manager_3.webp)

Figure 8. Selecting the "Partial (Preserve)" layout mode.

You'll see the collection created in both panels in Figure 9.

![quickstart_start_screen_manager_4](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_4.webp)

Figure 9. A Endpoint Policy Manager Start Screen Manager collection can be seen in both MMC pane
views.

**Step 4 –** Double-click "Collection 1" to enter it. Then, right-click and select Add | New Group,
as shown in Figure 10.

![quickstart_start_screen_manager_5](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_5.webp)

Figure 10. Endpoint Policy Manager Start Screen groups must be added to collections.

**Step 5 –** Next, you'll see the Start Screen Tile Group Editor, shown in Figure 11.

![quickstart_start_screen_manager_6](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_6.webp)

Figure 11. The Start Screen Tile Group Editor is used to edit the Windows 10 Start Screen group.

The Group Editor enables you to create or update a Windows 10 Start Menu Group.

:::note
The Group Editor only applies to groups you make using Endpoint Policy Manager, and
doesn't effect Windows 10 built-in, pre-made groups.
:::


The fields inside the Group Editor are as follows:

- Group Name: The name of the actual item you'll be creating (or changing) on the Windows 10 target
  machine.
- Comment: Space for optional comments to be added.
- State: Determines if the policy should apply or not.
- Action: Default settings are "Update" and "Create if not present." This will be described in more
  detail in an upcoming section.
- Update Mode: Determines where new icons will be added. "Add to the Tail" will add new icons from
  the end and "Insert at the top" will insert new icons from the front of the group.
- Placeholder: This is needed when an application is absent, but you want to make a pointer or
  reference to them anyway. In this case, you can make a "gap" (which puts in a black, empty gap
  tile) or you can insert an "Edge link" (which will explain what was missing). This will be
  described in more detail in an upcoming section.
- Item-Level Targeting: This will be described in more detail in an upcoming section.

**Step 6 –** For now, input the Group Name "My Important Apps" as seen in Figure 10. Then, keeping
the remainder of the details as shown, click "OK" to continue. Now you'll see a policy entry for the
group "My important apps" as shown in Figure 12.

![quickstart_start_screen_manager_7](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_7.webp)

Figure 12. A Start Screen group called "My important apps" is created on the end user's machine.

**Step 7 –** Double-click "My important apps" to go inside the Group. In the next three sections,
you'll add one of each of the icon types (universal [UWP] application tile, desktop application
tile, and Edge tile), by right-clicking and selecting "Add to Group," as seen in Figure 13.

![quickstart_start_screen_manager_8](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager_8.webp)

Figure 13. Use the MMC editor to add a new universal (UWP) application tile, desktop application
tile, and new Edge tile.


