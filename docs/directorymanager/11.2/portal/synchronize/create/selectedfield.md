---
title: "Configure Selected Fields in a Synchronize Job"
description: "Choose the create, update, delete, or skip action for each object type and select the fields a Synchronize job syncs to the destination."
keywords:
  - Synchronize selected fields
  - object types
  - Member Key
  - two-way synchronization
  - destination container
  - Directory Manager
sidebar_position: 50
---

# Configure Selected Fields in a Synchronize Job

In the **Selected Fields for Object type** section, click **Add/Edit Fields**. You can specify the action to take if the data or object exported from the source doesn't exist at the destination.

To configure the selected fields:

1. Select the operation that you want to perform. Click **Create** to create new objects and **Update** to update existing objects.

    - If a table provider is the destination, you can enable two-way synchronization.

        - If an object exists in the source but doesn't exist in the destination, select one of the following options:

            - **Create**: Create objects at the destination for source objects that have no counterparts in the destination during synchronization.
            - **Skip**: Ignore items that don't exist on the destination and update only those that do.

        - If an object doesn't exist in the source but exists in the destination, select one of the following options:

            - **Delete**: Delete such objects from the destination.
            - **Skip**: Ignore objects at the destination that don't exist at the source.

    - If an LDAP-compliant directory server or a phone system is the destination, you can do the following:

        - For LDAP providers such as Active Directory, you can select one or more object types that are synced between the source and destination directories. For other LDAP providers, you can create or update objects of a specific type.

            For each object type, specify the action to take.

            - **Create**: Create objects at the destination for source objects that have no counterparts in the destination during synchronization. You must specify a target container for each object type.

                Click the **Container** button to view each **Create** action that you selected in the preceding step, and select one of the following:

                - **Create objects in this container**: Click **Browse** to change the displayed destination container (specified on the Destination Provider page) or select a new container.
                - **Create objects in the container specified in this source field**: Enter the distinguished name of the container.
                - **Create objects in a container specified in script**: Click the **Edit Script** button and write a script that identifies the target container.

            - **Skip**: Skip items that don't exist on the destination and only update those that do. This is the default selection.

        - For phone systems such as a third-party Switchvox provider, you can select only one object type to sync between the source and destination directories.

            For the selected object type, specify the action to take.

            - **Create**: Create an object at the destination for a source object that has no counterparts in the destination during synchronization. You must specify a target container for the selected object type.
            - **Skip**: Ignore any source objects that don't exist at the destination during synchronization.

2. Select the fields to sync. Repeat for each object type you want. The object types listed are based on the source directory that you selected on the previous page.
3. If the destination isn't an Active Directory domain, select the names of the fields to sync from the list.

    By default, Synchronize selects some fields from the list by analyzing the fields from the source.

4. For the Group object type, click _member (sAMAccountName)_ to display the **Member Key** list. Select the required Active Directory attribute from it to search for matching group members in the destination.

    :::note
    A Synchronize job can only create groups at the destination. To sync group members, it searches Active Directory for the matching objects based on the Member Key field and adds them to the group membership.
    :::

5. To select all the fields, select the **All Fields** checkbox.
6. Click **Save**.
