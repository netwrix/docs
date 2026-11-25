---
title: "Delegate Send on Behalf and Send As Permissions"
description: "Let portal users delegate the Send on Behalf and Send As permissions by adding the fields to mailbox and group properties in the Directory Manager portal."
keywords:
  - Directory Manager
  - Send on Behalf
  - Send As
  - mail delegation
  - publicDelegates
  - Exchange permissions
sidebar_position: 150
---

# Delegate Send on Behalf and Send As Permissions

In the portal, a user can delegate the _Send on Behalf_ and _Send As_ permissions to other objects.

## Send on Behalf permission

The _Send on Behalf_ permission in Microsoft Exchange and Office 365 lets a user send an email as another user. The recipient sees that the message was sent by one user on behalf of another.

For example, User A grants Send on Behalf permission to User B. User B can then send email on behalf of User A. In Outlook, User B can choose User A's email address in the "From" field when composing a message. Message recipients see both addresses, because the "From" address reads:

_From: Mailbox `<User B's address>` on behalf of Mailbox `<User A's address>`._

## Send As permission

The _Send As_ permission in Microsoft Exchange and Office 365 lets a user send a message as another user. For example, User A grants _Send As_ permission to User B. User B can then choose User A's email address in the "From" field when composing a message in Outlook. User B sends the message, but it appears as sent by User A.

## Prerequisites for the Send As and Send on Behalf permissions

In this topic, a "target object" is the object that can add other objects to its Send As and Send on Behalf lists using the portal.

- The target object can be a mailbox or a mail-enabled group.
- Microsoft Exchange or Office 365 must be configured as the messaging provider for the identity store.
- An SMTP server must be configured for the identity store.
- The user signed in to the portal must have the "Manage any Profile" permission for its role in the identity store.
- The XAdPermissionExtendedRights attribute must be available for Send As. The publicDelegates attribute must be available for Send on Behalf.
- The ExchangeTrustedsubsystem object must have modify permissions on the target objects in Active Directory so that you can set the Send As permission using the portal. For more information, see [Access denied when you try to give user "send-as" or "receive as" permission for a Distribution Group in Exchange Server](https://support.microsoft.com/en-us/topic/access-denied-when-you-try-to-give-user-send-as-or-receive-as-permission-for-a-distribution-group-in-exchange-server-505822f4-8dca-7b97-d378-c8416553f6d2).

## Set up the Send As feature

You can add the Send As setting to any tab of an object's properties page in the portal. The object can then delegate the Send As permission to users.

To set up the Send As feature:

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, the card for each portal displays its information.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Properties** in the left pane. The **Properties** page appears.
5. In the **Select Directory Object** dropdown list, select a Mailbox or Group object to add the Send As setting to its properties page. The **Name** list shows the tabs on the object's properties page.
6. Click **Edit** for a tab, for example the **Email** tab. The **Edit Design Category** pane appears. The **Fields** area shows the fields on the tab.
7. Click **Add Field** to add the **Send As** field. The **Add Field** pane appears.
8. In the **Field** dropdown list, select the _XAdPermissionExtendedRights_ attribute.
9. In the **Display Name** box, enter a label for the field, such as "Send As Permissions". The portal shows the Send As field with this name.
10. In the **Display Type** dropdown list, select "DNs".
11. In the **Visibility Level** dropdown list, select a security role. The Send As field is visible to users of this role and roles with a higher priority value. If group owners (for their groups) and user managers (for their direct reports) are in a lower priority role, the field isn't visible to them. See [Priority](/docs/directorymanager/11.2/admincenter/securityrole/manage.md).

    - Select _Never_ to hide the field from all users.
    - Select _Manager and Owner_ to make the field visible only to the owner (for a group) or the manager (for a mailbox). It is hidden from other users, such as group members or the mailbox itself. In other words, group owners see the field for their groups, and managers see it for their direct reports in the portal.
    - If you selected "Mailbox" in the Select Directory Object list, the _Self_ option is also available in the **Visibility Level** dropdown list. Select _Self_ to make the field visible only to the mailbox on its properties page. It isn't visible to any other user, such as a role with a higher priority value or a role with the "Manage any profile" permission in the identity store.

12. In the **Access Level** dropdown list, select a security role. Users of this role and roles with a higher priority value can add and update the value of the Send As field. That is, they can add and remove objects in the Send As list. If group owners and user managers are in a lower priority role, they can't update the field for their groups and direct reports.

    - Select _Never_ to make the field read-only for all users.
    - Select _Manager and Owner_ to let only the owner (for a group) or the manager (for a mailbox) specify or change the value of this field. It is read-only for other users, such as group members or the mailbox itself. In other words, only group owners can specify or change the value for their groups in the portal. A role with a higher priority value can't change it. Group members can't change it. Even a role with the "Manage any Group" permission in the identity store can't change it. Similarly, only mailbox managers can specify or change the value for their direct reports in the portal. A role with a higher priority value can't change it. Even a role with the "Manage any profile" permission in the identity store can't change it.
    - If you selected "Mailbox" in the Select Directory Object dropdown list, the _Self_ option is available in the **Access Level** dropdown list. Select **Self** to let the mailbox specify or change the value of the field. It is read-only for other users, such as the mailbox's manager, a role with a higher priority value, or even a role with the "Manage any profile" permission in the identity store.

13. As with access level and visibility level, the field is editable and visible to members of the selected role and roles with a higher priority value. In the **Exclude Roles** area, select the checkboxes for the higher priority roles to deny them access and visibility.
14. In the **Search Object Types** area, specify the object types that users can search for in the portal's Find dialog box to set as the value of the _Send As_ field. The following display types support the Find dialog box:

    - DN
    - DNs
    - Custom display types created with the Grid type

    When you select any of these display types, Directory Manager knows that the value for the _Send As_ field must be searched with the Find dialog box. The **Search Object Types** area appears, where you select the object types you need. For example, if you select User, users can search for and select only user objects as the value for the field.

15. Select the **Is Required** checkbox to make users add at least one object to the _Send As_ list.
16. Select the **Is Read Only** checkbox to make the _Send As_ field read-only.
17. Click **OK** on the **Add Field** pane and the **Edit Design Category** pane.
18. Click **Save** on the **Properties** page.

### Send As field in the portal

To see the Send As field, launch the portal and go to the properties of the target object (group or mailbox) you defined the Send As field for. Then click the tab that holds the field. The Send As field looks like this:

![The Send As field on a mailbox properties tab in the portal, with Add and Remove buttons](/images/directorymanager/11.2/admincenter/portal/design/sendas.webp)

Use the **Add** and **Remove** buttons to add and remove objects in the Send As list. The added objects can send email for the target object under the Send As permission.

## Set up the Send on Behalf feature

You can add the Send on Behalf setting to any tab of an object's properties page in the portal. The object can then delegate the Send on Behalf permission to users.

To set up the Send on Behalf feature:

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, the card for each portal displays its information.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Properties** in the left pane. The **Properties** page appears.
5. In the **Select Directory Object** list, select a Mailbox or Group object to add the Send on Behalf setting to its properties page. The **Name** list shows the tabs on the object's properties page.
6. Click **Edit** for a tab, for example the **Email** tab. The **Edit Design Category** pane appears. The **Fields** area shows the fields on the tab.
7. Click **Add Field** to add the **Send on Behalf** field. The **Add Field** pane appears.
8. In the **Field** dropdown list, select the _publicDelegates_ attribute.
9. In the **Display Name** box, enter a label for the field, such as "Send on Behalf Permissions". The portal shows the Send on Behalf field with this name.
10. In the **Display Type** dropdown list, select "DNs".
11. In the **Visibility Level** dropdown list, select a security role. The Send on Behalf field is visible to users of this role and roles with a higher priority value. If group owners (for their groups) and user managers (for their direct reports) are in a lower priority role, the field isn't visible to them. See [Priority](/docs/directorymanager/11.2/admincenter/securityrole/manage.md).

    - Select _Never_ to hide the field from all users.
    - Select _Manager and Owner_ to make the field visible only to the owner (for a group) or the manager (for a mailbox). It is hidden from other users, such as group members or the mailbox itself. In other words, group owners see the field for their groups, and managers see it for their direct reports in the portal.
    - If you selected "Mailbox" in the Select Directory Object list, the _Self_ option is also available in the **Visibility Level** dropdown list. Select _Self_ to make the field visible only to the mailbox on its properties page. It isn't visible to any other user, such as a role with a higher priority value or a role with the "Manage any profile" permission in the identity store.

12. In the **Access Level** dropdown list, select a security role. Users of this role and roles with a higher priority value can add and update the value of the Send on Behalf field. That is, they can add and remove objects in the Send on Behalf list. If group owners and user managers are in a lower priority role, they can't update the field for their groups and direct reports.

    - Select _Never_ to make the field read-only for all users.
    - Select _Manager and Owner_ to let only the owner (for a group) or the manager (for a mailbox) specify or change the value of this field. It is read-only for other users, such as group members or the mailbox itself. In other words, only group owners can specify or change the value for their groups in the portal. A role with a higher priority value, group members, or a role with the "Manage any Group" permission in the identity store can't change it. Similarly, only mailbox managers can specify or change the value for their direct reports in the portal. A role with a higher priority value or a role with the "Manage any profile" permission in the identity store can't change it.
    - If you selected "Mailbox" in the _Select Directory Object_ dropdown list, the _Self_ option is available in the **Access Level** dropdown list. Select **Self** to let the mailbox specify or change the value of the field. It is read-only for other users, such as the mailbox's manager, a role with a higher priority value, or even a role with the "Manage any profile" permission in the identity store.

13. As with access level and visibility level, the field is editable and visible to members of the selected role and roles with a higher priority value. In the **Exclude Roles** area, select the checkboxes for the higher priority roles to deny them access and visibility.
14. In the **Search Object Types** area, specify the object types that users can search for in the portal's Find dialog box to set as the value of the _Send on Behalf_ field. The following display types support the Find dialog box:

    - DN
    - DNs
    - Custom display types created with the Grid type

    When you select any of these display types, Directory Manager knows that the value for the _Send on Behalf_ field must be searched with the Find dialog box. The **Search Object Types** area appears, where you select the object types you need. For example, if you select _User_, users can search for and select only user objects as the value for the field.

15. Select the **Is Required** checkbox to make users add at least one object to the _Send on Behalf_ list.
16. Select the **Is Read Only** checkbox to make the _Send on Behalf_ field read-only.
17. Click **OK** on the **Add Field** pane and the **Edit Design Category** pane.
18. Click **Save** on the **Properties** page.

### Send on Behalf field in the portal

To see the Send on Behalf field, launch the portal and go to the properties of the target object (group or mailbox) you defined the Send on Behalf field for. Then click the tab that holds the field. The Send on Behalf field looks like this:

![The Send on Behalf field on a mailbox properties tab in the portal, with Add and Remove buttons](/images/directorymanager/11.2/admincenter/portal/design/sendonbehalf.webp)

Use the **Add** and **Remove** buttons to add and remove objects in the Send on Behalf list. The added objects can send email on behalf of the target object under the Send on Behalf permission.
