---
title: "Manage Dynasty Settings"
description: "Manage Dynasty Settings"
sidebar_position: 60
---

# Manage Dynasty Settings

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. The Smart Groups that a Dynasty creates are called child groups that become members of
their respective parent Dynasties.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups. To learn more about Dynasties,
see the [Dynasties](/docs/directorymanager/11.0/signin/concepts/concepts.md#dynasties)
topic.

You can control how GroupID processes Dynasties through the following settings:

- Auto update Dynasty children when parent changes
- Auto delete empty and orphan child Dynasties
- Specify attributes for inheritance

**How does GroupID update Dynasties?**

Each Smart Group and Dynasty has a query defined for it. On update, this query is executed to update
membership.

The GroupID portal provides two methods to update Smart Groups and Dynasties:

- **Manual update:** you can manually execute the query for a Dynasty and Smart Group any time.
- **Scheduled update**: Scheduled updates, powered by a Smart Group Update schedule, auto run at a
  specified frequency to update the target groups and Dynasties. See the
  [Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
  topic.

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
disable the Dynasty children update option, in which case, each child group will have to be updated
like a single Smart Group.

**To apply auto update settings:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, select the **Update Dynasty Children** check box. This will update the
   child groups every time the parent Dynasty is updated.  
   Clear this check box to prevent Dynasty children from getting updated with the parent Dynasty.
5. Click **Save**.

## Auto Delete Empty and Orphan Dynasty Children

An empty child Dynasty is one with no member and an orphan child Dynasty is one whose parent Dynasty
has been removed.

By default, empty and orphan Dynasty children are auto deleted from the identity store. However, you
can disable this setting to retain empty and orphan Dynasty children in the identity store.

**To auto delete empty and orphan Dynasty children:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Dynasties**.
4. On the **Dynasties** page, select the **Delete Empty and Orphan Dynasty Children** check box.
   This ensures that empty and orphan Dynasty children are automatically deleted from the identity
   store.  
   When this check box is not selected, empty and orphan Dynasty children are retained in the
   identity store.
5. Click **Save**.

## Specify Attributes for Inheritance

You can control the attributes that a child Dynasty inherits from its parent.

By default, the values of the following attributes are passed on from the parent to child Dynasties
(for an Active Directory identity store):

| Attribute        | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| unauthOrig       | Contains the list of DNs of users who do not have permissions to send email to the group. |
| authOrig         | Contains the list of DNs of users who have permissions to send email to the group.        |
| dLMemRejectPerms | Contains the DNs of groups that do not have permissions to send email to the group.       |
| dLMemSubmitPerms | Contains the DNs of groups that have permissions to send email to the group.              |
| delivContLength  | Contains the maximum limit for incoming messages to the group.                            |
| managedBy        | Contains information about the group’s primary owner.                                     |
| groupType        | Contains information about the group’s type, i.e., security or distribution group.        |

You can add and remove attributes to this list.

**To add/remove attributes for inheritance:**

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

NOTE: (1) At the Dynasty level, you can control whether child Dynasties should inherit these
attributes only when child Dynasties are created, or every time the parent Dynasty is updated. You
can also opt to disable attribute inheritance for child Dynasties.  
 (2) If, for a managerial Dynasty, the ‘Set manager as owner’ option is applied and the managedBy
attribute is set for inheritance, then the latter settings will not have any impact and the manager
of a child Dynasty will be set as its owner.

NOTE: In a Microsoft Entra ID identity store, where a group can have multiple primary owners, the
owner of the parent Dynasty and the manager of a child Dynasty are collectively set as owners of
that child Dynasty.

**See Also**

- [Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
