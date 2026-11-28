---
title: "Schedules in GroupID"
description: "Learn which schedules you can create for a GroupID identity store and which ones GroupID creates automatically for Microsoft Entra ID."
keywords:
  - GroupID schedules
  - scheduled jobs
  - identity store schedules
  - Microsoft Entra ID schedules
  - Scheduler service
sidebar_position: 60
---

# Schedules in GroupID

The scheduling feature in GroupID lets you perform several operations by creating
scheduled jobs for an identity store. These schedules run automatically at the specified day, time,
and frequency.

## Schedules for Active Directory, Google Workspace, and Generic LDAP Identity Stores

You can define the following schedules for an identity store:

- A
  [Create a Group Usage Service Schedule in GroupID](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md)
  monitors group usage and time stamps groups with the date and time they were last used.
- A
  [Create a Group Life Cycle Schedule in GroupID](/docs/directorymanager/11.0/signin/schedule/grouplifecycle.md)
  expires and deletes groups according to their expiry policy. It executes the Group Lifecycle
  policy for the identity store.
- A
  [GroupID History Retention Schedule](/docs/directorymanager/11.0/signin/schedule/historyretention.md)
  archives identity store history data in GroupID.
- A
  [Edit the GroupID Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md)
  replicates object permissions on file servers and SharePoint sites for an Active Directory and
  Microsoft Entra ID identity store respectively.
- An
  [Edit the GroupID Entitlement Scope Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementscope.md)
  replicates changes made to object permissions on file servers and SharePoint sites using
  GroupID.
- An
  [Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementtemporarypermissions.md)
  updates the temporary permissions for objects on file servers and SharePoint sites.
- A
  [Managed By Life Cycle Schedule in GroupID](/docs/directorymanager/11.0/signin/schedule/managedbylifecycle.md)
  manages the temporary additional owners for groups and temporary additional managers for users.
- A
  [Membership Life Cycle Schedule in GroupID](/docs/directorymanager/11.0/signin/schedule/membershiplifecycle.md)
  updates the temporary membership of groups.
- An
  [Orphan Group Update Schedule in GroupID](/docs/directorymanager/11.0/signin/schedule/orphangroupupdate.md)
  sets the primary owner for an orphan group.
- A [Create a Reports Schedule in GroupID](/docs/directorymanager/11.0/signin/schedule/reports.md) can automatically
  generate reports that you link with the schedule.
- A
  [Update the GroupID Schema Replication Schedule](/docs/directorymanager/11.0/signin/schedule/schemareplication.md)
  replicates the schema of an identity provider to the GroupID database.
- A
  [Create a GroupID Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
  updates Smart Groups and Dynasties.
- A [Create a GroupID Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md) can execute
  Synchronize jobs and job groups at a set frequency.
- A
  [Create a GroupID User Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/userlifecycle.md)
  disables users who don't validate their profiles within a given period, based on the settings
  defined for user profile validation.
- A
  [Update the GroupID Workflow Acceleration Schedule](/docs/directorymanager/11.0/signin/schedule/workflowacceleration.md)
  forwards workflow requests to approvers and automatically approves requests according to workflow
  approver acceleration rules.

:::note
Role members with the _Manage Scheduling_ permission in an identity store can create and
manage scheduled jobs. See the
[Modify Role Permissions](/docs/directorymanager/11.0/signin/securityrole/manage.md#modify-role-permissions)
topic.
:::

Schedules are saved in the GroupID database. The GroupIDSchedulerService, created in the
GroupIDSite11 site in native IIS, is responsible for initiating schedule runs.

## Schedules for Microsoft Entra ID Identity Store

GroupID automatically creates the following schedules when you complete their associated
configurations in an identity store.

- Entitlement
  ([Edit the GroupID Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md),
  [Edit the GroupID Entitlement Scope Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementscope.md),
  [Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementtemporarypermissions.md))
- [Create a GroupID User Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/userlifecycle.md)
- [GroupID History Retention Schedule](/docs/directorymanager/11.0/signin/schedule/historyretention.md)
- [Update the GroupID Workflow Acceleration Schedule](/docs/directorymanager/11.0/signin/schedule/workflowacceleration.md)

In a Microsoft Entra ID identity provider, the Entra ID user must be signed in to Admin Center while
configuring these schedules. The schedules then run in the context of the signed-in user. The
following dialog box displays the username of the signed-in user when you configure a schedule:

![Authentication dialog box showing the username of the signed-in Entra ID user for a schedule](/images/directorymanager/11.0/admincenter/schedule/entraidscheduleauthenticate.webp)

The Login with a different user option, which lets you provide the credentials of another account to
run the schedule in the identity store, isn't available for a Microsoft Entra ID identity store.

:::note
Existing schedules continue to work. SAML provider authentication doesn't apply to them.
:::

**See Also**

- [Manage Schedules in GroupID](/docs/directorymanager/11.0/signin/schedule/manage.md)
- [GroupID Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
