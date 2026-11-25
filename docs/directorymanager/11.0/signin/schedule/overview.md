---
title: "Schedules in Directory Manager"
description: "Learn which schedules you can create for a Directory Manager identity store and which ones Directory Manager creates automatically for Microsoft Entra ID."
keywords:
  - Directory Manager schedules
  - scheduled jobs
  - identity store schedules
  - Microsoft Entra ID schedules
  - Scheduler service
sidebar_position: 60
---

# Schedules in Directory Manager

The scheduling feature in Directory Manager lets you perform several operations by creating
scheduled jobs for an identity store. These schedules run automatically at the specified day, time,
and frequency.

## Schedules for Active Directory, Google Workspace, and Generic LDAP Identity Stores

You can define the following schedules for an identity store:

- A
  [Create a Group Usage Service Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md)
  monitors group usage and time stamps groups with the date and time they were last used.
- A
  [Create a Group Life Cycle Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/grouplifecycle.md)
  expires and deletes groups according to their expiry policy. It executes the Group Lifecycle
  policy for the identity store.
- A
  [Directory Manager History Retention Schedule](/docs/directorymanager/11.0/signin/schedule/historyretention.md)
  archives identity store history data in Directory Manager.
- A
  [Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md)
  replicates object permissions on file servers and SharePoint sites for an Active Directory and
  Microsoft Entra ID identity store respectively.
- An
  [Edit the Directory Manager Entitlement Scope Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementscope.md)
  replicates changes made to object permissions on file servers and SharePoint sites using
  Directory Manager.
- An
  [Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementtemporarypermissions.md)
  updates the temporary permissions for objects on file servers and SharePoint sites.
- A
  [Managed By Life Cycle Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/managedbylifecycle.md)
  manages the temporary additional owners for groups and temporary additional managers for users.
- A
  [Membership Life Cycle Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/membershiplifecycle.md)
  updates the temporary membership of groups.
- An
  [Orphan Group Update Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/orphangroupupdate.md)
  sets the primary owner for an orphan group.
- A [Create a Reports Schedule in Directory Manager](/docs/directorymanager/11.0/signin/schedule/reports.md) can automatically
  generate reports that you link with the schedule.
- A
  [Update the Directory Manager Schema Replication Schedule](/docs/directorymanager/11.0/signin/schedule/schemareplication.md)
  replicates the schema of an identity provider to the Directory Manager database.
- A
  [Create a Directory Manager Smart Group Update Schedule](/docs/directorymanager/11.0/signin/schedule/smartgroupupdate.md)
  updates Smart Groups and Dynasties.
- A [Create a Directory Manager Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md) can execute
  Synchronize jobs and job groups at a set frequency.
- A
  [Create a Directory Manager User Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/userlifecycle.md)
  disables users who don't validate their profiles within a given period, based on the settings
  defined for user profile validation.
- A
  [Update the Directory Manager Workflow Acceleration Schedule](/docs/directorymanager/11.0/signin/schedule/workflowacceleration.md)
  forwards workflow requests to approvers and automatically approves requests according to workflow
  approver acceleration rules.

:::note
Role members with the _Manage Scheduling_ permission in an identity store can create and
manage scheduled jobs. See the
[Modify Role Permissions](/docs/directorymanager/11.0/signin/securityrole/manage.md#modify-role-permissions)
topic.
:::

Schedules are saved in the Directory Manager database. The GroupIDSchedulerService, created in the
GroupIDSite11 site in native IIS, is responsible for initiating schedule runs.

## Schedules for Microsoft Entra ID Identity Store

Directory Manager automatically creates the following schedules when you complete their associated
configurations in an identity store.

- Entitlement
  ([Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.0/signin/schedule/entitlement.md),
  [Edit the Directory Manager Entitlement Scope Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementscope.md),
  [Edit the Entitlement Temporary Permissions Schedule](/docs/directorymanager/11.0/signin/schedule/entitlementtemporarypermissions.md))
- [Create a Directory Manager User Life Cycle Schedule](/docs/directorymanager/11.0/signin/schedule/userlifecycle.md)
- [Directory Manager History Retention Schedule](/docs/directorymanager/11.0/signin/schedule/historyretention.md)
- [Update the Directory Manager Workflow Acceleration Schedule](/docs/directorymanager/11.0/signin/schedule/workflowacceleration.md)

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

- [Manage Schedules in Directory Manager](/docs/directorymanager/11.0/signin/schedule/manage.md)
- [Directory Manager Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
