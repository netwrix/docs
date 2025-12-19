---
title: "Group properties - General tab"
description: "Group properties - General tab"
sidebar_position: 10
---

# Group properties - General tab

This tab allows you to view or modify the general information about the group.

**Display name**

The display name of the group.

**Alias**

The alias for the group.

**Manager can update membership**

Select this check box to enable the group managers (primary owner and Exchange additional owners) to
update this group’s membership directly on the directory server. Additional owners are not included
because they are GroupID-specific and the directory does not recognize them.

This is a provider-end permission and does not impact role-based permissions assigned at the
identity store level in GroupID. Nor do role-based permissions assigned at the identity store level
have any impact on this feature.

Enabling this setting auto-grants the required permissions to the manager. For Active Directory, for
example, the manager is granted the following permissions:

- Create, delete, and manage user accounts.
- Reset user password and force password change at next logon.
- Create, delete and manage groups.
- Modify the membership of a group.

NOTE: Do not update Smart Group membership manually; changes might be reversed when the Smart Group
Update job runs.

NOTE: The _manager can update membership_ feature is not available for groups in a Microsoft Entra
ID based identity store.

**Description**

The description provided for the group.

**Expiration Policy**

The expiry policy for this group. It specifies the duration the group remains active for. The group
would expire when the period ends.

If you select the Other option from the list, two boxes are displayed under the Expiration Policy
box. First, select an option (Days, Months, or Years) from the second list. Then enter a value for
the selected option in the first box. the group will remain active for the duration you specify
here.

The Group Life Cycle job is responsible for expiring groups.

**Expiration Date**

Displays the expiry date for the group. This box is blank when the expiration policy is set to
"Never expire".

When you change the expiration policy of a group, the expiration date is updated when you save the
changes.

**Group Scope**

The scope set for this group.

- **Domain Local** - Can only contain users in this domain.
- **Global Group** - Can contain users from other domains but is visible only within its own domain.
- **Universal Group** - Can contain users and groups from any domain and is visible in the Global
  Catalog.

NOTE: With Exchange 2013/2016/2019 configured as the messaging provider for the identity store, the
group scope must be set to _Universal_ for mail-enabled groups.

NOTE: In a Microsoft Entra ID based identity store, the group scope does not apply.

**Group Type**

The group type set for the group.

- **Security** - this group will be used for securing public folders, printers and other network
  resources.
- **Distribution** - this group will only be used for email distribution.

NOTE: In a Microsoft Entra ID based identity store, the group type is set to 'security' by default
and this option is not displayed.

**Security**

Indicates the security type set for the group.

**Email**

The email address of the group (applies to mail-enabled groups only, such as an Office 365 group).

**See Also**

- [Group Properties](/docs/directorymanager/11.0/welcome/group/properties/overview.md)
