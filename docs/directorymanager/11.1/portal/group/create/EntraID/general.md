---
title: "General Page for Entra ID Groups in Create Group Wizard"
description: "Set the container, name, prefix, security type, and group type for a new Microsoft Entra ID group on the General page of the Create Group wizard."
keywords:
  - Entra ID group
  - group name prefix
  - Microsoft 365 group
  - Create Group wizard
sidebar_position: 10
---

# General Page for Entra ID Groups in Create Group Wizard

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box to select the container or organizational unit to
   create the group in.

    This field is read-only if the administrator has predefined a container for creating new
    groups.

2. In the **Group Name** box, provide a name for the group by selecting a prefix and then entering a
   name for the group.

    :::note
    The prefix box is displayed if the administrator has defined the prefixes. See the
    [Configure Group Name Prefixes in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md)
    topic for additional information.  
    These prefixes, when appended to group names, help standardize the group naming convention
    across the enterprise.
    :::

3. The **Name Preview** is displayed if the prefix list is available. It shows a preview of the
   prefix combined with the group name.
4. In the **Security** list, select a security type for the group.
5. Set the group type by selecting an option for **Group Type**:

    - **Security** - this group is used for securing public folders, printers, and other network
      resources.
    - **Distribution** - this group is used only for email distribution.
    - **Teams** - this group is used to manage Microsoft Teams and their associated channels.
    - **Microsoft 365** - this group is used to select a set of people to collaborate and use a
      collection of resources.

6. Enter a description for the group in the **Description** box.
7. Click **Next**.
