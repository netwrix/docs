---
title: "Specify Basic Group Information in Directory Manager"
description: "Set the container, name, alias, type, scope and security of a new group on the General page of the Create Group wizard."
keywords:
  - Create Group wizard
  - group name prefix
  - group scope
  - mail-enabled group
sidebar_position: 10
---

# Specify Basic Group Information in Directory Manager

Use this page to specify basic information about the group.

1. Click **Browse** next to the **Container** box, select or create the container or organizational unit to create the group in, and click **OK**.

   To create a container, click **Create** and add the container to create the group in. Click **Refresh** to remove the changes.

   This field is read-only if the administrator has predefined a container for creating new groups.

2. In the **Group Name** box, select a prefix and enter a name for the group.

   :::note
   The prefix box appears if the administrator has defined the prefixes. See Group name prefixes.  
   These prefixes, when appended to group names, help standardize the group naming convention across the enterprise.
   :::

3. If the prefix list is available, **Name Preview** shows the prefix combined with the group name.
4. Review the group name in the **Group Name (Pre-Windows 2000)** box. It matches the group name. Modify it if required.
5. Select the **Mail Enabled** checkbox to create the group as mail-enabled. A mail-enabled group has an email address, and its members can receive emails.
6. Review the alias in the **Alias** box. The alias is used to create the group's email address. Modify it if required.

   If Microsoft Exchange Server is the designated messaging provider for the identity store, the alias is limited to 64 characters, can't contain spaces, and must be unique to the forest. For other messaging systems, the alias can't exceed the number of characters the messaging system supports.

   The alias can't contain characters that are invalid for the configured messaging system.

   The **Alias** box appears if you select the **Mail Enabled** checkbox.

7. For **Group Type**, select the group type.

   - **Security** – Secures public folders, printers, and other network resources.
   - **Distribution** – Used only for email distribution.

   :::note
   If the administrator has predefined a group type, you can't change it.
   :::

8. In the **Group Scope** list, select a scope for the group.

   - **Domain Local** – Select this scope if the group contains only users in this domain.
   - **Global Group** – Select this scope if the group contains users from other domains but is visible only within its own domain.
   - **Universal Group** – Select this scope if the group contains users and groups from any domain and is visible in the Global Catalog.

   :::note
   (1) If the administrator has predefined a group scope, you can't change it.  
   (2) To create a mail-enabled group (with Exchange 2013/2016/2019 as the messaging provider), you must select **Universal** as the group scope.
   :::

9. In the **Security** list, select a security type for the group.
10. Enter a description for the group in the **Description** box.
11. Click **Next**.
