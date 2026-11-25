---
title: "Manage Dynasty Settings in Directory Manager"
description: "Control how Directory Manager updates Dynasty child groups, deletes empty and orphan children, and passes attributes from parent to child Dynasties."
keywords:
  - Dynasty settings
  - child Dynasties
  - attribute inheritance
  - Smart Group update
  - orphan Dynasties
sidebar_position: 60
---

# Manage Dynasty Settings in Directory Manager

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. The Smart Groups that a Dynasty creates are called child groups, and they become members of
their respective parent Dynasties.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups. For more information, see the
[Dynasties](/docs/directorymanager/11.0/signin/concepts/concepts.md#dynasties) topic.

You can control how Directory Manager processes Dynasties through the following settings:

- Auto update Dynasty children when parent changes
- Auto delete empty and orphan child Dynasties
- Specify attributes for inheritance

**How does Directory Manager update Dynasties?**

Each Smart Group and Dynasty has a query defined for it. On update, this query is executed to update
membership.

The Directory Manager portal provides two methods to update Smart Groups and Dynasties:

- **Manual update:** You can manually run the query for a Dynasty or Smart Group at any time.
- **Scheduled update:** Scheduled updates, powered by a Smart Group Update schedule, run automatically at a
  specified frequency to update the target groups and Dynasties. See the
  [Create a Directory Manager Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md) topic.

**What happens on Dynasty update?**

When a Dynasty is updated, the following happens:

- Each Dynasty has a query defined for it. On update, the query retrieves records from the directory
  and updates Dynasty membership.
- You can specify certain attributes whose values are passed on from parent to child Dynasties. The
  values of these attributes are updated when the Dynasty is updated. See the
  [Specify Attributes for Inheritance](#specify-attributes-for-inheritance) topic.

What do you want to do?

- [Auto Update Dynasty Children When Parent Changes](#auto-update-dynasty-children-when-parent-changes)
- [Auto Delete Empty and Orphan Dynasty Children](#auto-delete-empty-and-orphan-dynasty-children)
- [Specify Attributes for Inheritance](#specify-attributes-for-inheritance)

## Auto Update Dynasty Children When Parent Changes

By default, when you update a parent Dynasty, its child groups are also updated. However, you can
disable the Dynasty children update option, in which case you must update each child group
like a single Smart Group.

**To apply auto update settings:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, select the **Update Dynasty Children** checkbox. This updates the
   child groups every time the parent Dynasty is updated.  
   Clear this checkbox to prevent Dynasty children from being updated with the parent Dynasty.
5. Click **Save**.

## Auto Delete Empty and Orphan Dynasty Children

An empty child Dynasty is one with no members, and an orphan child Dynasty is one whose parent Dynasty
has been removed.

Directory Manager deletes empty and orphan Dynasty children from the identity store automatically by default. However, you
can disable this setting to retain empty and orphan Dynasty children in the identity store.

**To auto delete empty and orphan Dynasty children:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, select the **Delete Empty and Orphan Dynasty Children** checkbox.
   This ensures that empty and orphan Dynasty children are automatically deleted from the identity
   store.  
   Empty and orphan Dynasty children are retained in the identity store when this checkbox isn't
   selected.
5. Click **Save**.

## Specify Attributes for Inheritance

You can control the attributes that a child Dynasty inherits from its parent.

By default, the values of the following attributes are passed on from the parent to child Dynasties
(for an Active Directory identity store):

| Attribute        | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| unauthOrig       | Contains the list of DNs of users who don't have permissions to send email to the group. |
| authOrig         | Contains the list of DNs of users who have permissions to send email to the group.        |
| dLMemRejectPerms | Contains the DNs of groups that don't have permissions to send email to the group.       |
| dLMemSubmitPerms | Contains the DNs of groups that have permissions to send email to the group.              |
| delivContLength  | Contains the maximum limit for incoming messages to the group.                            |
| managedBy        | Contains information about the group's primary owner.                                     |
| groupType        | Contains information about the group's type: security or distribution group.        |

You can add and remove attributes to this list.

**To add or remove attributes for inheritance:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, the **Attributes** area lists the attributes that child Dynasties
   inherit from their respective parent Dynasties.

    - To add an attribute, click **Add Attributes**. On the **Add Fields** dialog box, select the
      required attributes and click **Add**.
    - To remove an attribute, click **Remove** for it.

5. Click **Save**.

:::note
(1) At the Dynasty level, you can control whether child Dynasties inherit these
attributes only when child Dynasties are created, or every time the parent Dynasty is updated. You
can also disable attribute inheritance for child Dynasties.  
(2) If, for a managerial Dynasty, the "Set manager as owner" option is applied and the managedBy
attribute is set for inheritance, the latter setting has no impact and the manager
of a child Dynasty is set as its owner.
:::

:::note
In a Microsoft Entra ID identity store, where a group can have multiple primary owners, the
owner of the parent Dynasty and the manager of a child Dynasty are collectively set as owners of
that child Dynasty.
:::

**See Also**

- [Create a Directory Manager Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
