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

1. Click **Browse** next to the **Container** box and select the container or organizational unit to create the group in.

   This field is read-only if the administrator has predefined a container for creating new groups.

2. In the **Group Name** box, select a prefix and enter a name for the group.

   :::note
   The prefix box appears if the administrator has defined prefixes. See the [Configure Group Name Prefixes in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md) topic for additional information.
   Prefixes appended to group names help standardize the group naming convention across the enterprise.
   :::

3. Check the **Name Preview**, which appears if the prefix list is available. It shows the prefix combined with the group name.
4. In the **Security** list, select a security type for the group.
5. For **Group Type**, select one option:

   - **Security** - Secures public folders, printers, and other network resources.
   - **Distribution** - Used only for email distribution.
   - **Teams** - Manages Microsoft Teams and their associated channels.
   - **Microsoft 365** - Lets a set of people collaborate and use a collection of resources.

6. Enter a description for the group in the **Description** box.
7. Click **Next**.
