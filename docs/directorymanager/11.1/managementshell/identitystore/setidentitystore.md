---
title: "Set-IdentityStore"
description: "Use the Set-IdentityStore cmdlet to change an identity store's settings, roles, group lifecycle, history, logging, password rules and authentication."
keywords:
  - Set-IdentityStore
  - modify identity store
  - group lifecycle policy
  - security roles
  - password policy
  - Management Shell cmdlet
sidebar_position: 160
---

# Set-IdentityStore

Use the Set-IdentityStore cmdlet to modify the settings and configuration of an identity store.

:::note
Many parameters of this cmdlet require you to specify schema attribute names. You can use
the Get-SchemaAttributes cmdlet to retrieve a list of attributes available for an identity store.
:::

## Syntax

```
Set-IdentityStore
-IdentityStoreName <string>
-Credential <pscredential>
[-NewName <string>]
[-StoreDescription <string>]
[-StoreEnabled <bool>]
[-RoleOperation {add | remove | remove all}]
[-RoleName <string>]
[-RoleDescription <string>]
[-RolePriority <string>]
[-RoleCriteriaScope {Group | Container}]
[-RoleCriteriaDN <string>]
[-RoleCriteriaOperator {Or | And}]
[-RoleCriteriaFilters <string[][]>]
[-RolePermissions <string[]>]
[-RoleNameToCopy <string>]
[-DefaultAllowRolePermissions]
[-RoleReadonly]
[-RoleSystemOnly]
[-RoleDisabled]
[-GroupExpiryQuantity <string>]
[-GroupExpiryUnit {Never | Days | Weeks | Months | Years | Indefinite}]
[-GlmContainersPolicy {Exclude | Include}]
[-GlmContainers <string[]>]
[-GlmContainersOperation {add | remove | remove all}]
[-EnableSecurityGroupsExpiry]
[-DisableSecurityGroupsExpiry]
[-EnableExpiredGroupDeletion]
[-ExpiredGroupsDeletionInterval <string>]
[-DisableExpiredGroupDeletion]
[-EnableGUSLifecycle]
[-GroupExtensionPolicy {Extend | Reduce}]
[-GroupLifeDays <string>]
[-DisableGUSLifecycle]
[-EnableGroupAttestation]
[-DisableGroupAttestation]
[-DefaultApprover <string>]
[-GlmNotifyOwnersXDaysBeforeOperation {add | remove | remove all}]
[-GlmNotifyOwnersXDaysBefore <string[]>]
[-GlmEnableNotificationOfTodaysExpiry]
[-GlmDisableNotificationOfTodaysExpiry]
[-PrefixOperation {add | remove | remove all}]
[-Prefixes <string[]>]
[-HistoryTrackingOption {Nothing | All_Actions | Selected_Actions}]
[-HistoryActionsOperation {add | remove | remove all}]
[-HistorySelectedActions {OwnershipChange | AdditionalOwnerChange | ExpirationPolicyChange | GroupExpireRenew | QueryChange | SecurityTypeChange | ObjectCreated | ObjectDeleted | IdentityStoreHistory | SecurityRolesHistory | WorkflowsHistory}]
[-HistoryRetention {All | Last_30_Days | Last_60_Days | Last_90_Days | Last_120_Days | Last_6_Months | Last_1_Year | Last_2_Years | Last_5_Years}]
[-FileLoggingEvent {All | Debug | Info | Warn | Error | Off}]
[-WindowsLoggingEvent {FailureAudit | SuccessAudit | Info | Warn | Error}]
[-MaximumMembersPerGroup <string>]
[-WhenGroupMembershipThresholdReach {PreventUpdation | NestIntoChildGroups}]
[-EnableOrphanGroupsDeletion]
[-DisableOrphanGroupsDeletion]
[-EnableOutOfBoundsAlerts]
[-DisableOutOfBoundsAlerts]
[-MembershipCountThreshold <string>]
[-MembershipPercentageThreshold <string>]
[-ProfileValidationGroupDN <string>]
[-RegularProfileValidationLifecycle <string>]
[-EnableNewProfileValidationLifecycle]
[-DisableNewProfileValidationLifecycle]
[-NewProfileValidationLifecycle <string>]
[-ProfileValidationReminderOperation {add | remove}]
[-ProfileValidationReminders <string[][]>]
[-ProfileValidationExtensionPeriod <string>]
[-EnableAttributeUpdation]
[-DisableAttributeUpdation]
[-ProfileValidationAttributeName <string>]
[-ProfileValidationAttributeValue <string>]
[-EnableValidationDateRemoval]
[-DisableValidationDateRemoval]
[-ValidationDateRemovalInterval <string>]
[-EnrollmentEnabled <bool>]
[-AuthenticationTypeOperation {enable | disbale}]
[-AuthenticationType <string[]>]
[-QuestionOperation {add | remove | remove all}]
[-SecurityQuestions <string[]>]
[-PasswordExceptionOperation {add | remove | remove all}]
[-PasswordExceptions <string[][]>]
[-PasswordRuleOperation {add | remove | remove all}]
[-PasswordRules <string[]>]
[-DisallowingPasswordExceptionFilePath <string>]
[-EnableSWAuthenticationViaSecurityQuestions]
[-DisableSWAuthenticationViaSecurityQuestions]
[-SWAQuestionsOperation {add | remove}]
[-SWAQuestions <string[][]>]
[-EnableSWAuthenticationViaMobile]
[-DisableSWAuthenticationViaMobile]
[-SWAMobileAttribute <string>]
[- EnableSWAuthetnicationViaEmail]
[-DisableSWAuthenticationViaEmail]
[-SWEmailAttribute <string>]
[-SWAuthenticationFactor <string>]
[<CommonParameters>]
```

:::note
You can use the **Set-IdentityStore** cmdlet in a secure way by using the _Credential_
parameter. Specifying the credentials through the _Username_ and _Password_ parameters in plain
text isn't secure.
:::

## Required Parameters

- IdentityStoreName
- Credential / Username

## Examples

### Example 1

This command changes the name of the AdStore9 identity store to AdStore9_renamed.

```
Set-IdentityStore -IdentityStoreName AdStore9 -NewName 'AdStore9_renamed' -Credential $creds -Domain pucit.local
```

### Example 2

This command enables the Email Verification authentication type for the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -AuthenticationTypeOperation enable -AuthenticationType 'Email Verification'
```

### Example 3

This command disables enrollment for the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnrollmentEnabled $false
```

### Example 4

This command modifies the group lifecycle expiry policy of the AdStore9 identity store to 21 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GroupExpiryQuantity 21
```

### Example 5

This command modifies the group lifecycle expiration policy of the AdStore9 identity store to 10 months.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GroupExpiryQuantity 10 -GroupExpiryUnit Months
```

### Example 6

This command sets the group lifecycle expiration policy of the AdStore9 identity store to ‘never’ by
setting the value of the GroupExpiryUnit parameter to Indefinite, regardless of the value of the
GroupExpiryQuantity parameter.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GroupExpiryQuantity 10 -GroupExpiryUnit Indefinite
```

### Example 7

This command configures the containers policy and adds containers.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GlmContainersPolicy Include -GlmContainersOperation add -GlmContainers 'OU=WorkingOU,DC=pucit,DC=local','OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local'
```

### Example 8

This command enables expiry of security groups and deletion of expired groups, and sets the
interval of group deletion to 45 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableSecurityGroupsExpiry -EnableExpiredGroupDeletion -ExpiredGroupsDeletionInterval 45
```

### Example 9

This command enables the GUS lifecycle and reduces a group’s life if it isn’t used within 25 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableGUSLifecycle -GroupExtensionPolicy Reduce -GroupLifeDays 25
```

### Example 10

This command enables the group attestation feature and sets the TestingAccoun@pucit.local user as the
default approver for the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableGroupAttestation -DefaultApprover 'CN=Testing Account,CN=Users,DC=pucit,DC=local'
```

### Example 11

This command sets the notifications (in number of days) before group expiry. It also enables today’s
expiry reports and group attestation.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableGroupAttestation -GlmNotifyOwnersXDaysBeforeOperation add -GlmNotifyOwnersXDaysBefore 1,3,10 -GlmEnableNotificationOfTodaysExpiry
```

### Example 12

This command creates a new role, DemoRole1, for the AdStore9 identity store by specifying the
minimum possible parameters.

:::note
By default, this cmdlet denies all permissions to the role it creates.
Moreover, it adds no criteria filters or scope (group / container) to the role.
:::

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole1 -RolePriority 50 -RoleCriteriaScope Container
```

### Example 13

This command creates a new security role, DemoRole1, in the AdStore9 identity store and sets a container
as its role criteria.

:::note
By default, this cmdlet denies all permissions to the role it creates.
:::

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole1 -RolePriority 50 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local'
```

### Example 14

This command creates a new security role by specifying the container and criteria filters.

The value for the RoleCriteriaFilters parameter is specified as arrays of three items. At the first
index, specify the filter name, which can be either ‘name’ or ‘type’. The second index holds the
operator, which is either `is exactly` or `is not`. The third index holds the client name or client
type, depending on whether ‘name’ or ‘type’ is specified at the first index.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole4 -RolePriority 53 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local' -RoleCriteriaOperator Or -RoleCriteriaFilters @('name', 'is exactly', 'automate arslanahmadvm'), @('type', 'is not', 'managementshell')
```

### Example 15

This command creates a new security role by specifying the container, criteria filters and
permissions. In this example, only Manage My Groups and Create User permissions are granted to the
created role.

:::note
By default, this cmdlet denies all permissions to the role it creates, except those specified in the
RolePermissions parameter.  
You can retrieve the role permission names with the **Get-RolePermissionNames** cmdlet.
:::

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole6 -RolePriority 55 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local' -RoleCriteriaOperator Or -RoleCriteriaFilters @('name', 'is exactly', 'automate arslanahmadvm'), @('type', 'is not', 'managementshell') -RolePermissions 'manage my groups', 'create user'

```

### Example 16

This command creates a new security role by specifying a role criterion as container, criteria
filters and permissions.

By default, all the permissions except those specified in the RolePermissions parameter are granted.
This is due to the presence of DefaultAllowPermissions. In this example, only the Manage groups and
Create user permissions are denied (and the remaining ones are granted) to the created role.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole5 -RolePriority 54 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local' -RoleCriteriaOperator Or -RoleCriteriaFilters @('name', 'is exactly', 'automate arslanahmadvm'), @('type', 'is not', 'managementshell') -RolePermissions 'manage my groups', 'create user' –DefaultAllowRolePermissions

```

### Example 17

This command creates two group prefixes (dev and ment) at the identity store level.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -PrefixOperation add -Prefixes 'dev', 'ment'
```

### Example 18

This command tracks the history of the selected actions for the AdStore9 identity store. The selected
actions are additional owner change, expiration policy change and group renewal. The history
retention period is also set to the last 120 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -HistoryTrackingOption Selected_Actions -HistoryActionsOperation add -HistorySelectedActions AdditionalOwnerChange, ExpirationPolicyChange, GroupExpireRenew -HistoryRetention Last_120_Days
```

### Example 19

This command configures file and Windows logging settings for the AdStore9 identity store. File
logging is set to Debug level and Windows logging to FailureAudit.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -FileLoggingEvent Debug -WindowsLoggingEvent FailureAudit
```

### Example 20

This command configures out-of-bounds settings for the AdStore9 identity store.

Each group allows a maximum of 500 members, and when the threshold is reached, the members are
nested into child groups. The orphan groups are deleted. Don't update the membership, and send an
alert, if the change in membership exceeds 65% and either the current or new membership
exceeds 200 members.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -MaximumMembersPerGroup 500 -WhenGroupMembershipThresholdReach NestIntoChildGroups -EnableOrphanGroupsDeletion -EnableOutOfBoundsAlerts -MembershipCountThreshold 200 -MembershipPercentageThreshold 65
```

### Example 21

This command configures profile validation settings. It applies profile validation policies to the
group specified by the distinguished name
‘CN=ProfileValidation1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local’. Regular profiles must be
validated within 60 days. New profiles must be validated within 15 days. The validation extension
period is 7 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -ProfileValidationGroupDN 'CN=ProfileValidation1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -RegularProfileValidationLifecycle 60 -EnableNewProfileValidationLifecycle -NewProfileValidationLifecycle 15 -ProfileValidationExtensionPeriod 7
```

### Example 22

This command configures profile validation settings. It adds two profile validation reminders. It
also updates an attribute named ‘info’ with the value ‘Validation expired’ when the profile
validation expires. It also removes the validation date after 5 days (after which the policies for
new users apply to the users).

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -ProfileValidationReminderOperation add -ProfileValidationReminders @('fourth', 45), @('fifth', 60) -EnableAttributeUpdation -ProfileValidationAttributeName info -ProfileValidationAttributeValue 'Validation expired' -EnableValidationDateRemoval -ValidationDateRemovalInterval 5
```

### Example 23

This command adds two security questions in the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -QuestionOperation add -SecurityQuestions 'When was the first time you felt that it was raining even though it was not raining?', 'What would happen if there were no GroupID?'
```

### Example 24

This command configures password options.

This command enforces the following password policy: Don't allow passwords starting with
‘password123R’ or containing ‘123R’, and allow only passwords matching
'^(?=.\*[a-z])(?=.\*[A-Z])(?=.\*\d)(?=.\*[^\da-zA-Z]).{8,15}$' regular expression pattern.

The ‘PasswordExceptions’ parameter accepts arrays of two items: the operator at the first index and
the string at the second index. Allowed operators are ‘equals’, ‘startswith’, ‘endswith’,
‘contains’ and ‘regexp’.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -PasswordExceptionOperation add -PasswordExceptions @('startswith', 'password123R'), @('contains', '123R') -PasswordRuleOperation add -PasswordRules '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$'
```

### Example 25

This command configures second-way authentication via security questions.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableSWAuthenticationViaSecurityQuestions -SWAQuestionsOperation add -SWAQuestions @('when was the first time you felt that it is raining even though it was not raining?', 'info')
```
