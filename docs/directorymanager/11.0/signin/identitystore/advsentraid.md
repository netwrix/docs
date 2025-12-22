---
title: "Microsoft Entra ID vs. Active Directory Identity Stores"
description: "Microsoft Entra ID vs. Active Directory Identity Stores"
sidebar_position: 40
---

# Microsoft Entra ID vs. Active Directory Identity Stores

This topic discusses the differences between an Active Directory and Microsoft Entra ID identity
store in GroupID.

## Group Expiration Policy

Microsoft Entra ID offers limited options to define a default expiry policy for groups whereas
GroupID provides a comprehensive Group Life Cycle policy. See the
[Manage Group Lifecycle Settings](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md)
topic.

Since these policies are not integrated; you should either useMicrosoft Entra ID’s or GroupID’s
expiration policy settings for groups in an Microsoft Entra ID identity store.

## Group Naming Policy

The group naming policy defined in Microsoft Entra ID is not integrated with the Group Name Prefixes
policy in GroupID. As a result:

- Microsoft Entra ID's group naming policy has no impact on groups created using GroupID.
- Using GroupID, you cannot modify the prefixes and suffixes that are applied to groups created
  directly in Microsoft Entra Admin Center.

To use the same prefixes for group names as are defined in Microsoft Entra Admin Center, the
administrator should define the same prefixes in GroupID. See the
[Set Group Name Prefixes](/docs/directorymanager/11.0/signin/identitystore/configure/prefixes.md)
topic.

## Dynamic Groups in Microsoft Entra ID

A dynamic group created in Microsoft Entra Admin Center will not be automatically upgraded to a
Smart Group in GroupID. It will be displayed as a static (unmanaged) group. However, its membership
will be managed dynamically in Microsoft Entra ID and displayed in GroupID.

You should apply a query to a group either in Microsoft Entra Admin Center or in GroupID. Do not
manipulate the same object simultaneously from GroupID and Microsoft Entra Admin Center.

## Multifactor Authentication Policy

The multifactor authentication (MFA) policy defined for Microsoft Entra Admin Center cannot be
integrated with the multifactor authentication policy defined for a Microsoft Entra ID identity
store in GroupID. MFA in Entra applies to Microsoft Entra Admin Center while MFA in GroupID applies
while performing account unlock and password reset in the respective identity store.

## User Roles in Microsoft Entra ID and GroupID

When a user, with a standard user role in Microsoft Entra Admin Center, is assigned an elevated role
in GroupID, he or she can manipulate directory objects using GroupID that he or she cannot otherwise
manipulate directly in Microsoft Entra Admin Center due to limited role permissions.

The actions that a user can perform in GroupID depend on the permissions assigned to his or her role
in GroupID. These permissions may conflict with the permissions that the user has in Microsoft Entra
Admin Center. For example, a user who does not have permissions to create groups in Microsoft Entra
Admin Center will be able to create groups in Microsoft Entra ID using GroupID if his or her GroupID
role has permissions to create new groups.

To avoid conflicts, GroupID administrators should grant permissions to security roles with
discretion.

## Groups in Microsoft Entra ID

- To create security groups and Office 365 groups using GroupID, Office 365 must be set as the
  messaging provider for the identity store. Security groups cannot be mail-enabled. Use an Office
  365 group as an alternative to a mail-enabled security group.
- Microsoft Entra ID does not allow a group to be added to the membership of an Office 365 group.
  For this reason:

    - An Office 365 group can only have user objects as its members.
    - Even if the query for an Office 365 group returns different object types, only user objects
      are added to group membership.
    - The nesting option in the _Out of Bounds_ settings for an identity store will empty the
      membership of a Smart Group of the Office 365 type, because nested groups cannot be added as
      group members. See the
      [Manage Group Membership Settings](/docs/directorymanager/11.0/signin/identitystore/configure/outofbounds.md)topic.
    - A Dynasty cannot be created as an Office 365 group.

- You can create and manage distribution groups.
- You can also create teams and channels in MS Teams.
- You cannot create Office 365 connected Yammer groups and Planner groups using GroupID. These
  groups can be created from their respective portals. However, Yammer and Planner groups are
  displayed in the GroupID portal when their respective subscriptions are added to Office 365. When
  you update these groups using GroupID, your changes will be reflected on the Yammer, and Planner
  portals respectively.
- Microsoft Entra ID supports multiple primary owners for a group. One primary owner is mandatory.
- Only user objects can be set as primary owners.
- When you expire an Office 365 group using GroupID, its member list is backed up in the database
  and then cleared from Office 365. The Microsoft Graph API does not allow for the modification and
  removal of the mail attribute; therefore, it is not possible to remove the group’s email and make
  it mail-disabled.
- GroupID cannot manipulate directory-synced objects (objects that are synced from on-premises
  Active Directory to Microsoft Entra ID).

## User and Contact Objects in Microsoft Entra ID

- You can create users (non mail-enabled) and mailboxes in a Microsoft Entra IDidentity store. The
  contact object type is not supported.
- The Photo attribute is only available for an Office 365 user (mailbox).
- The GroupID portal does not display the password expiry date of a user account in a Microsoft
  Entra ID identity store.
- The ‘block sign in’ option in Microsoft Entra Admin Center is enabled when a user's account is
  disabled or locked out in GroupID. For example, if a user is locked out due to the domain policy
  or disabled by the User Life Cycle schedule, block sign in will be enabled. The disabled/locked
  user will not be able to log into his or her workstation either.

## Miscellaneous

- For a Microsoft Entra ID identity store, you must configure Office 365 as the messaging provider
  and SMTP server.
- The Recycle Bin does not display any data for a Microsoft Entra ID identity store.
- GroupID Management Shell cannot communicate directly or remotely with Microsoft Entra ID and
  Office 365.
- Smart Groups and Dynasties in a Microsoft Entra ID identity store use a device structured query
  language (and not an LDAP query) to update group membership.
- Only the Microsoft Entra ID attributes listed in the Microsoft Graph API v 3.26.0 schema file are
  available in GroupID.
- The company attribute in Microsoft Entra ID stores the name of the company registered in Microsoft
  Entra Admin Center, and cannot be manipulated using GroupID. A Microsoft Entra ID identity stores
  uses the OfficeLocation attribute as an alternative to the company attribute.

**See Also**

- [Manage an Identity Store](/docs/directorymanager/11.0/signin/identitystore/manage.md)
