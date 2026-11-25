---
title: "Directory Manager group properties: General tab"
description: "View or change a group's display name, alias, expiration policy, scope, type, and manager permissions on the General tab."
keywords:
  - "Directory Manager group properties"
  - "group expiration policy"
  - "group scope"
  - "group type"
  - "manager can update membership"
sidebar_position: 10
---

# Directory Manager group properties: General tab

This tab lets you view or modify the general information about the group.

**Display name**

The display name of the group.

**Alias**

The alias for the group.

**Manager can update membership**

Select this checkbox to enable the group managers (primary owner and Exchange additional owners) to
update this group's membership directly on the directory server. Additional owners aren't included
because they are Directory Manager-specific and the directory doesn't recognize them.

This is a provider-end permission and doesn't impact role-based permissions assigned at the
identity store level in Directory Manager. Nor do role-based permissions assigned at the identity
store level have any impact on this feature.

Enabling this setting automatically grants the required permissions to the manager. For Active Directory, for
example, the manager is granted the following permissions:

- Create, delete, and manage user accounts.
- Reset user password and force password change at next logon.
- Create, delete, and manage groups.
- Modify the membership of a group.

:::note
Don't update Smart Group membership manually; changes might be reversed when the Smart Group
Update job runs.
:::


:::note
The _manager can update membership_ feature isn't available for groups in a Microsoft Entra
ID based identity store.
:::


**Description**

The description provided for the group.

**Expiration Policy**

The expiry policy for this group. It specifies how long the group remains active. The group
expires when the period ends.

If you select the Other option from the list, two boxes are displayed under the Expiration Policy
box. First, select an option (Days, Months, or Years) from the second list. Then enter a value for
the selected option in the first box. The group remains active for the duration you specify
here.

The Group Life Cycle job is responsible for expiring groups.

**Expiration Date**

Displays the expiry date for the group. This box is blank when the expiration policy is set to
"Never expire".

When you change the expiration policy of a group, the expiration date is updated when you save the
changes.

**Group Scope**

The scope set for this group.

- **Domain Local** - Can contain only users in this domain.
- **Global Group** - Can contain users from other domains but is visible only within its own domain.
- **Universal Group** - Can contain users and groups from any domain and is visible in the Global
  Catalog.

:::note
With Exchange 2013/2016/2019 configured as the messaging provider for the identity store, the
group scope must be set to _Universal_ for mail-enabled groups.
:::


:::note
In a Microsoft Entra ID based identity store, the group scope doesn't apply.
:::


**Group Type**

The group type set for the group.

- **Security** - this group is used for securing public folders, printers, and other network
  resources.
- **Distribution** - this group is used only for email distribution.

:::note
In a Microsoft Entra ID based identity store, the group type is set to security by default
and this option isn't displayed.
:::


**Security**

Indicates the security type set for the group.

**Email**

The email address of the group (applies to mail-enabled groups only, such as an Office 365 group).
