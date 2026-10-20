---
description: >-
  Use Smart Groups in Netwrix Endpoint Protector to automatically assign
  computers and users to groups based on property-based rules. Configure
  conditions across properties like Computer ID, Username, Department, and
  OS, then synchronize entities to keep group membership current without
  manual intervention.
keywords:
  - smart groups
  - Netwrix Endpoint Protector
  - endpoint protector
  - device control
  - groups
  - default groups
  - synchronization
  - automatic assignment
  - computers
  - users
products:
  - endpointprotector
sidebar_label: Using Smart Groups for Automatic Computer and User
tags:
  - features-and-operations
  - kb
title: "Using Smart Groups for Automatic Computer and User Assignment"
knowledge_article_id: kA0Qk0000002B6MKAU
---

# Using Smart Groups for Automatic Computer and User Assignment

## Overview

Smart Groups are a dynamic category of computer and user groups whose membership is defined by rules based on entity properties, rather than assigned manually. Endpoint Protector synchronizes entities into Smart Groups periodically, so membership stays current without manual intervention.

For the full reference, see [Groups](/docs/endpointprotector/admin/dc_module/usersandgroups#groups).

## Instructions

### Step 1: Enable Smart Groups

1. Navigate to **System Configuration** > **System Settings** > **Smart Groups** section.
2. Scroll to the bottom of the page and click **Save**.

:::note
Enabling Smart Groups means Computers and Users are no longer automatically assigned to the Default Group unless you create a Smart Group.
:::

### Step 2: Create a Smart Group

1. Navigate to **Device Control** > **Groups** and click **Create**.
2. Provide a group name, description, and Department.
3. Enable the **Smart Group** setting.
4. Select the entity type: **Computers** or **Users**.
5. Add one or more rules by selecting a property, an operator, and a value (for example, `XYZ*`, `*XYZ*`, `*XYZ`). You can combine multiple rules using the same or different properties.

Computers and Users support similar, but slightly different, sets of filterable properties:

| Computers | Users |
|---|---|
| Computer ID | First Name |
| Username | Last Name |
| Main IP | Employee ID |
| Main MAC Address | Phone |
| Serial Number | E-mail |
| Domain | Team |
| Workgroup | Last Computer |
| Department | Domain |
| Groups | Department |
| OS | Groups |
| Last Seen | Last Seen |
| Location | Certificate added to Keychain/store |
| Client Version | |
| Terminal Server | |
| Certificate added to Keychain/store | |

:::warning
Rule values are case-sensitive. After defining your rules, click **Validate** to check the conditions — if they're built correctly, the top ten matching results are displayed.
:::

:::note
Once created, you can manage a Smart Group's priority relative to other Smart Groups by dragging and dropping it in the list.
:::

6. Click **Save**.

### Step 3: Synchronize entities to the Smart Group

Smart Groups don't remove entities from regular groups to reassign them — entities are added to a Smart Group only through synchronization.

1. After creating the Smart Group, click **Sync** to start synchronization. Synchronization then runs automatically at a 1-minute interval.

If a newly registered computer matches a Smart Group's rules, Endpoint Protector automatically assigns it to that group. If it doesn't match any rule, it's assigned to the Default Group instead, provided Default Groups are enabled.

:::note
Synchronization doesn't change settings for regular groups.
:::

### Step 4: Delete a Smart Group

Select the group from the list and click **Delete** in the **Actions** column, or select the group and click **Delete**.

## Limitations

- Smart Groups don't display their assigned computers or users.
- You can't manually add an entity to a Smart Group.
- Smart Groups belong to the Default Department and don't use Departments themselves.
- If you disable Smart Groups from System Settings, each Smart Group converts to a Regular Group — this preserves its settings, rights, and other configuration, but the group loses its entities, and the Default Group for Computers and Default Group for Users are removed.
- User entities are only assigned to Smart Groups through the synchronization process, not at the moment a computer registers. This is because Endpoint Protector receives computer information at registration, but user information is relayed later through events, logs, or regular pings — and is inherently volatile, since different users can log in or out of the same computer over time.

## Default Groups

Default Groups hold Computers and Users that don't match any Smart Group's rules. Default Groups are only available when Smart Groups are enabled.

1. Navigate to **System Configuration** > **System Settings** > **Smart Groups** section, enable Default Groups for Computers and Users, scroll to the bottom, and click **Save**.

:::tip
You don't need to manually create Default Groups — enabling this setting automatically creates the Default Group for Users and the Default Group for Computers.
:::

2. To synchronize entities into the Default Groups, navigate to **Device Control** > **Groups**, find the group in the **List of Groups**, select **Edit** from the **Actions** column, and click **Sync**.

Default Groups have the following limitations:

- You can only edit a Default Group's description, not its name.
- Default Groups can't be deleted, but they can be disabled from **System Configuration** > **System Settings** > **Smart Groups** section.
- Disabling Default Groups deletes them along with all their dependencies.
