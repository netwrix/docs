---
title: "General - Microsoft Entra ID"
description: "General - Microsoft Entra ID"
sidebar_position: 10
---

# General - Microsoft Entra ID

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box to select or create the container or
   organizational unit to create the group in and click **OK**.

    If you want to create a container, click **Create** and then add container to create the group
    in. Click **Refresh** to remove the changes.

    This field will be read-only if the administrator has predefined a container for creating new
    groups.

2. In the **Group Name** box, provide a name for the group by selecting a prefix and then entering a
   name for the group.

    NOTE: The prefix box is displayed if the administrator has defined the prefixes. See the
    [Set Group Name Prefixes](/docs/directorymanager/11.0/signin/identitystore/configure/prefixes.md)
    topic.  
     These prefixes, when appended to group names, help standardize the group naming convention
    across the enterprise.

3. In the **Security** list, select a security type for the group.
4. Set the group type by selecting an option for **Group Type**.

    - **Security** - this group will be used for securing public folders, printers and other network
      resources.
    - **Distribution** - this group will only be used for email distribution.
    - **Teams** - this groups is used for manage Microsoft Teams and their associated channels.
    - **Microsoft 365** - this group will be used to select a set of people to collaborate and use a
      collection of resources.

    NOTE: If the administrator has predefined a group type, you cannot change it.

5. Enter a description for the group in the **Description** box.
6. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/createdynasty_1.md)
