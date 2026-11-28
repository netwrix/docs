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

Use this tab to view or change the general information about the group.

**Display name**

The display name of the group.

**Alias**

The alias for the group.

**Manager can update membership**

Select this checkbox to let the group managers (primary owner and Exchange additional owners) update the group's membership directly on the directory server. Additional owners aren't included because they are specific to Directory Manager and the directory doesn't recognize them.

This is a provider-end permission. It doesn't affect role-based permissions assigned at the identity store level in Directory Manager, and those permissions don't affect this feature.

Enabling this setting automatically grants the required permissions to the manager. For Active Directory, for example, the manager gets the following permissions:

- Create, delete, and manage user accounts.
- Reset a user's password and force a password change at next logon.
- Create, delete, and manage groups.
- Modify the membership of a group.

:::note
Don't update Smart Group membership manually. Changes might be reversed when the Smart Group Update job runs.
:::

:::note
The _manager can update membership_ feature isn't available for groups in a Microsoft Entra
ID based identity store.
:::

**Description**

The description provided for the group.

**Expiration Policy**

The expiry policy for this group. It specifies how long the group remains active. The group expires when the period ends.

If you select the Other option from the list, two boxes appear under the Expiration Policy box. Select an option (Days, Months, or Years) from the second list. Then enter a value for the selected option in the first box. The group remains active for the duration you specify.

The Group Life Cycle job expires groups.

**Expiration Date**

The expiry date for the group. This box is blank when the expiration policy is set to "Never expire".

When you change a group's expiration policy, the expiration date updates when you save the changes.

**Group Scope**

The scope set for this group.

- **Domain Local** - Can contain only users in this domain.
- **Global Group** - Can contain users from other domains but is visible only within its own domain.
- **Universal Group** - Can contain users and groups from any domain and is visible in the Global
  Catalog.

:::note
With Exchange 2013/2016/2019 configured as the messaging provider for the identity store, set the group scope to _Universal_ for mail-enabled groups.
:::

:::note
In a Microsoft Entra ID based identity store, the group scope doesn't apply.
:::

**Group Type**

The group type set for the group.

- **Security** - Used for securing public folders, printers, and other network resources.
- **Distribution** - Used only for email distribution.

:::note
In a Microsoft Entra ID based identity store, the group type is set to security by default and this option doesn't appear.
:::

**Security**

Indicates the security type set for the group.

**Email**

The email address of the group. It applies to mail-enabled groups only, such as an Office 365 group.
