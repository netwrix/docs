# Schedules

The scheduling feature in Directory Manager enables you to perform several operations by creating scheduled jobs for an identity store. These schedules auto run at the specified day, time, and frequency.

## Schedules for Active Directory, Google Workspae, and Generic LDAP Identity Stores

You can define the following schedules for an identity store:

- A [Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md) monitors group usage and time stamps groups with the date and time they were last used.
- A [Group Life Cycle Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/grouplifecycle.md) expires and deletes groups according to their expiry policy. It executes the Group Lifecycle policy for the identity store.
- A [History Retention Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/historyretention.md) archives identity store history data in Directory Manager.
- A [GroupID Entitlement Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/entitlement.md) replicates object permissions on file servers and SharePoint sites for an Active Directory and Microsoft Entra ID identity store respectively.
- An [Entitlement Scope Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/entitlementscope.md) replicates changes made to object permissions on file servers and SharePoint sites using Directory Manager.
- An [Entitlement Temporary Permissions Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/entitlementtemporarypermissions.md) updates the temporary permissions for objects on file servers and SharePoint sites.
- A [Managed By Life Cycle Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/managedbylifecycle.md) manages the temporary additional owners for groups and temporary additional managers for users.
- A [Membership Life Cycle Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/membershiplifecycle.md) updates the temporary membership of groups.
- An [Orphan Group Update Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/orphangroupupdate.md) sets the primary owner for an orphan group.
- A [Reports Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/reports.md)can automatically generate reports that you link with the schedule.
- A [Schema Replication Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/schemareplication.md) replicates the schema of an identity provider to the Directory Manager database.
- A [Smart Group Update Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/smartgroupupdate.md)updates Smart Groups and Dynasties.
- A [Synchronize Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/synchronize.md) can execute Synchronize jobs and job groups at a set frequency.
- A [User Life Cycle Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/userlifecycle.md) disables users who do not validate their profiles within a given period, based on the settings defined for user profile validation.
- A [Workflow Acceleration Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/workflowacceleration.md) forwards workflow requests to approvers and auto approves requests according to workflow approver acceleration rules.

NOTE: Role members with the _Manage Scheduling_ permission in an identity store can create and manage scheduled jobs. See the [Modify Role Permissions](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md#Modify-Role-Permissions) topic for additional information.

Schedules are saved in the Directory Manager database. The GroupIDSchedulerService, created in the GroupIDSite11 site in native IIS is responsible for initiating schedule runs.

## Schedules for Microsoft Entra ID Identity Store

The following schedules are automatically created when their associated configurations are done in an identity store.

- Entitlement ([GroupID Entitlement Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/entitlement.md), [Entitlement Scope Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/entitlementscope.md), [Entitlement Temporary Permissions Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/entitlementtemporarypermissions.md))
- [User Life Cycle Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/userlifecycle.md)
- [History Retention Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/historyretention.md)
- [Workflow Acceleration Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/workflowacceleration.md)

In a Microsoft Entra ID identity provider, the Entra ID user must be logged into the Admin Center while making configurations of these schedules. The schedules are then run in the context of the logged in user. The following dialog box displays the username of the logged-in user when you configure a schedule:

![entraidscheduleauthenticate](/static/img/product_docs/groupid/groupid/admincenter/schedule/entraidscheduleauthenticate.png)

Use the Login with a different user option to provide the credentials of another account to run the schedule in the identity store is not available for a Microsoft Entra ID identity store.

NOTE: The existing schedules will continue to work. The SAML provider authentication does not apply on them.
