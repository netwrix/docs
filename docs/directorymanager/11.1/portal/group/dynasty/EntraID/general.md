---
title: "Set Dynasty General Properties for Microsoft Entra ID"
description: "Specify the container, name, security, group type, and description when you create a Dynasty in Microsoft Entra ID."
keywords:
  - Dynasty general page
  - Microsoft Entra ID group
  - group name prefix
  - group type
  - Directory Manager portal
sidebar_position: 10
---

# Set Dynasty General Properties for Microsoft Entra ID

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box. Select or create the container or organizational unit to create the group in, and click **OK**.

   To create a container, click **Create** and add a container to create the group in. Click **Refresh** to remove the changes.

   This field is read-only if the administrator has predefined a container for creating new groups.

2. In the **Group Name** box, select a prefix and enter a name for the group.

   :::note
   The prefix box appears if the administrator has defined the prefixes. See the [Configure Group Name Prefixes in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/prefixes.md) topic.
   These prefixes, when appended to group names, help standardize the group naming convention across the enterprise.
   :::

3. In the **Security** list, select a security type for the group.
4. For **Group Type**, select an option:

   - **Security** - this group secures public folders, printers, and other network resources.
   - **Distribution** - this group is for email distribution only.
   - **Teams** - this group manages Microsoft Teams and their associated channels.
   - **Microsoft 365** - this group selects a set of people to collaborate and use a collection of resources.

   :::note
   If the administrator has predefined a group type, you can't change it.
   :::

5. Enter a description for the group in the **Description** box.
6. Click **Next**.
