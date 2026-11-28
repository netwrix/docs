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

Schedules in Directory Manager run operations for an identity store automatically. Each schedule runs at the day, time, and frequency you specify.

## Schedules for Active Directory, Google Workspace, and Generic LDAP identity stores

You can define the following schedules for an identity store:

- The [Group Usage Service schedule](/docs/directorymanager/11.1/admincenter/schedule/groupusageservice.md) monitors group usage and time stamps groups with the date and time they were last used.
- The [Group Life Cycle schedule](/docs/directorymanager/11.1/admincenter/schedule/grouplifecycle.md) expires and deletes groups according to their expiry policy. It runs the Group Lifecycle policy for the identity store.
- The [History Retention schedule](/docs/directorymanager/11.1/admincenter/schedule/historyretention.md) archives identity store history data in Directory Manager.
- The [Entitlement schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md) replicates object permissions on file servers and SharePoint sites for an Active Directory and Microsoft Entra ID identity store respectively.
- The [Entitlement Scope schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementscope.md) replicates changes made to object permissions on file servers and SharePoint sites using Directory Manager.
- The [Entitlement Temporary Permissions schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementtemporarypermissions.md) updates the temporary permissions for objects on file servers and SharePoint sites.
- The [Managed By Life Cycle schedule](/docs/directorymanager/11.1/admincenter/schedule/managedbylifecycle.md) manages the temporary additional owners for groups and temporary additional managers for users.
- The [Membership Life Cycle schedule](/docs/directorymanager/11.1/admincenter/schedule/membershiplifecycle.md) updates the temporary membership of groups.
- The [Orphan Group Update schedule](/docs/directorymanager/11.1/admincenter/schedule/orphangroupupdate.md) sets the primary owner for an orphan group.
- The [Reports schedule](/docs/directorymanager/11.1/admincenter/schedule/reports.md) automatically generates the reports that you link with the schedule.
- The [Schema Replication schedule](/docs/directorymanager/11.1/admincenter/schedule/schemareplication.md) replicates the schema of an identity provider to the Directory Manager database.
- The [Smart Group Update schedule](/docs/directorymanager/11.1/admincenter/schedule/smartgroupupdate.md) updates Smart Groups and Dynasties.
- The [Synchronize schedule](/docs/directorymanager/11.1/admincenter/schedule/synchronize.md) runs Synchronize jobs and job groups at a set frequency.
- The [User Life Cycle schedule](/docs/directorymanager/11.1/admincenter/schedule/userlifecycle.md) disables users who don't validate their profiles within a given period, based on the settings defined for user profile validation.
- The [Workflow Acceleration schedule](/docs/directorymanager/11.1/admincenter/schedule/workflowacceleration.md) forwards workflow requests to approvers and automatically approves requests according to workflow approver acceleration rules.

:::note
Role members with the _Manage Scheduling_ permission in an identity store can create and manage scheduled jobs. See [Modify Role Permissions](/docs/directorymanager/11.1/admincenter/securityrole/manage.md#modify-role-permissions) for details.
:::

Schedules are saved in the Directory Manager database. The GroupIDSchedulerService, created in the GroupIDSite11 site in native IIS, initiates schedule runs.

## Schedules for Microsoft Entra ID Identity Store

Directory Manager automatically creates the following schedules when you complete their associated configurations in an identity store:

- Entitlement ([Entitlement schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlement.md), [Entitlement Scope schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementscope.md), and [Entitlement Temporary Permissions schedule](/docs/directorymanager/11.1/admincenter/schedule/entitlementtemporarypermissions.md))
- [User Life Cycle schedule](/docs/directorymanager/11.1/admincenter/schedule/userlifecycle.md)
- [History Retention schedule](/docs/directorymanager/11.1/admincenter/schedule/historyretention.md)
- [Workflow Acceleration schedule](/docs/directorymanager/11.1/admincenter/schedule/workflowacceleration.md)

In a Microsoft Entra ID identity provider, the Entra ID user must be signed in to Admin Center while configuring these schedules. The schedules then run in the context of the signed-in user. When you configure a schedule, the following dialog box shows the username of the signed-in user:

![Authentication dialog box showing the username of the signed-in Entra ID user for a schedule](/images/directorymanager/11.1/admincenter/schedule/entraidscheduleauthenticate.webp)

The Login with a different user option, which lets you provide the credentials of another account to run the schedule in the identity store, isn't available for a Microsoft Entra ID identity store.

:::note
Existing schedules continue to work. SAML provider authentication doesn't apply to them.
:::
