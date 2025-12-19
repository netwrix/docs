---
title: "Group Expiry"
description: "Group Expiry"
sidebar_position: 90
---

# Group Expiry

GroupID provides two ways to expire a group:

- Use the **Expire** button on the Group Properties toolbar to expire a group manually.
- The Group Lifecycle job expires groups automatically based on the expiry policy specified for each
  group.

    The expiry policy for a group specifies the period for which the group remains active. At the
    end of the period, the group expires.

The following events take place when a group expires:

- The group becomes inactive and is locked for all activities.
- "EXPIRED_" is added as a prefix to the group name.
- A mail-enabled group is mail-disabled, which means that any emails sent to the group and are
  bounced back with an expiration message.
- For a security group, its member list is cleared and any permissions set for that group no longer
  apply. However GroupID keeps a backup of its membership in the database.

GroupID moves an expired group to the Expired Groups tab; however all group attributes remain
intact. You can renew an expired group.

When you expire an Office 365 group using GroupID, its member list is backed up in the database and
cleared from Office 365.

**In case of an Active Directory identity store with Office 365 as messaging provider:**

In case of an Active Directory identity store with Office 365 as the messaging provider, the
following happens when a distribution group is expired manually or via the Group Lifecycle job:

- The group’s email address is removed in Active Directory.
- "EXPIRED_" is added as a prefix to the group name.
- The group is removed from Office 365 when the AAD Sync schedule runs.

On renewing an expired distribution group, the following happens:

- The group’s email address is added in Active Directory.
- The "EXPIRED_" prefix is removed from the group’s name.
- The group is created with members in Office 365 when the AAD Sync schedule runs.

In case of a Microsoft Entra ID identity store with Office 365 as messaging provider:

In case of a Microsoft Entra ID identity store with Office 365 as the messaging provider, the
following happens when a distribution group is expired manually or via the Group Lifeycle job:

- GroupID takes a backup of the group’s membership.
- It empties out the group’s membership in Office 365.

On renewing an expired distribution group, the following happens:

- The group’s membership is repopulated in Microsoft Entra IDand Office 365.

## Group Expiry policy

All settings related to group expiry are specified in the default Group Lifecycle policy. This
policy is defined for an identity store and applies to all groups.

The Group Life Cycle policy mainly defines:

- When to expire a group. Groups with a 'Never Expire' policy cannot be expired manually or by the
  Group Lifecycle job.
- Whether to notify the group owner or the default approver (in case the group has no owner) about
  group expiry x number of days before the group expires.
- The x number of days after which an expired group would be deleted, starting from the expiry date.
  This also applies to manually expired groups.

Of these, only the expiry period can be changed for individual groups. The remaining settings apply
to all groups in the identity store and cannot be changed for individual groups.

When the Group Lifeycle job executes the Group Lifecycle policy, it monitors group expiry dates as
determined by each group’s expiration period. See the
[Set a Default Expiry Policy for Groups](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md#set-a-default-expiry-policy-for-groups)
topic.

## Group Expiry Notifications

The Group Lifecycle job monitors the expiry policy of all groups. When a group approaches its
expiry, the job does the following:

- When notifications are not enabled in the Group Lifecycle policy, the Group Lifecycle job expires
  the group without notifying anyone.
- When notifications are enabled, the job notifies the primary and additional owners or the default
  approver (in case no owner is set for the group) about the approaching expiry.

    In case the notification could not be sent or no recipient is available, the schedule extends
    the expiry date of the group by 7 days on the group’s expiry day. It continues to do so until
    the notification is sent.

- When the **1 day before group expiration** option is selected for sending notifications and the
  Group Life Cycle schedule evaluates the group for the first time a day before its expiration date,
  GroupID will extend the group’s expiration date by 7 days.

Notifications are sent if an SMTP server is configured for the identity store. See the
[Set Group Expiry Notifications](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md#set-group-expiry-notifications)
topic for additional information.

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/welcome/group/workingwithgroups/workingwithgroups.md)
- [ Group Expiry and Deletion](/docs/directorymanager/11.0/signin/identitystore/configure/groupexpirydeletion.md)
- [Manage Group Lifecycle Settings](/docs/directorymanager/11.0/signin/identitystore/configure/grouplifecycle.md)
