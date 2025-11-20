---
title: "Understanding Group Action Modes"
description: "Understanding Group Action Modes"
sidebar_position: 10
---

# Understanding Group Action Modes

In the Start Screen Tile Group Editor, there are various values that can be selected for the Action
field. The options are described below.

- Create: The option for "Create" only takes effect when a matching group of the same name is added
  by an existing Endpoint Policy Manager policy. If a matching group is found, then selecting
  "Create" will add icons to this group. The result is that groups with the same name are not
  changed. If a group of the same name does NOT exist, then selecting "Create" will create the group
  and add the icons listed in this group. In short, a new group with new icons is only created when
  one does not already exist.
- Replace: The option for "Replace" only takes effect when a matching group of the same name is
  created by another Endpoint Policy Manager policy—it does nothing if there is not a matching group
  of the same name. If a group of the same name is created by another Endpoint Policy Manager
  policy, selecting "Replace" will REMOVE all existing icons in the group, and REPLACE them with
  what is in this group. If a group of the same name was NOT created by another Endpoint Policy
  Manager policy, then NOTHING will occur.
- Update (Default): The option for "Update" will create groups if they don't exist, and update
  groups if they do exist. It will then add your icons to the group. Update mode will not update a
  group unless the group is already present; so you may want to ensure the "Create if not present"
  checkbox is checked (it is by default); this will create groups if they do not already exist.
- Delete: The option for "Delete" will delete a group with a matching name. If a group of the same
  name does NOT exist because of a Endpoint Policy Manager policy, then NOTHING will occur.
- Update + "Create if not present": This setting will explicitly check to see if the group already
  exists. If the group doesn't exist, and this checkbox is checked, the group will be created.
- Replace + "Skip if not present": This option is only available when "Replace" is selected. When
  this checkbox is checked, the group will be replaced only if a matching group name is not found.
- The default behavior is: create new groups if they do not exist and update groups if they do
  exist.


