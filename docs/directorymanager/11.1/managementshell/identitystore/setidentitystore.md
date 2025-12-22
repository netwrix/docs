---
title: "Set-IdentityStore"
description: "Set-IdentityStore"
sidebar_position: 160
---

# Set-IdentityStore

The commandlet Set-IdentityStore modifies the identity store settings and configurations.

:::note
Many parameters of this cmdlet require the user to specify schema attribute names. You can use
Get-SchemaAttributes commandlet to retrieve a list of attributes available for an identity store.
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
You can use the **Set-IdentityStore** commandlet in a secure way by using the _Credential_
parameter or by specifying the credentials through _Username_ and _Password_ parameters in plain
text format which is not a secure way.
:::


## Required Parameters

- IdentityStoreName
- Credential / Username

Example 1:

This example changes name of AdStore9 identity store to AdStore9_renamed.

```
Set-IdentityStore -IdentityStoreName AdStore9 -NewName 'AdStore9_renamed' -Credential $creds -Domain pucit.local
```

Example 2:

This example enables the email verification authentication type for the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -AuthenticationTypeOperation enable -AuthenticationType 'Email Verification'
```

Example 3:

This example disables enrollment for the AdSore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnrollmentEnabled $false
```

Example 4:

This example modifies the group lifecycle expiry policy of the AdStore9 identity store to 21 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GroupExpiryQuantity 21
```

Example 5:

This example modifies the group lifecycle expiration policy of AdStore9 identity store to 10 months.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GroupExpiryQuantity 10 -GroupExpiryUnit Months
```

Example 6:

This example sets the group lifecycle expiration policy of the AdStore9 identity store to ‘never’ by
setting value of the GroupExpiryUnit parameter to Indefinite. Even though the GroupExpiryQuantity
parameter is set to any value.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GroupExpiryQuantity 10 -GroupExpiryUnit Indefinite
```

Example 7:

This example Configures containers policy and add containers.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -GlmContainersPolicy Include -GlmContainersOperation add -GlmContainers 'OU=WorkingOU,DC=pucit,DC=local','OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local'
```

Example 8:

This example enables expiry of security groups, deletion of expired groups and sets interval of
group deletion to 45 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableSecurityGroupsExpiry -EnableExpiredGroupDeletion -ExpiredGroupsDeletionInterval 45
```

Example 9:

This example enables GUS lifecycle and reduces group’s life if not used within 25 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableGUSLifecycle -GroupExtensionPolicy Reduce -GroupLifeDays 25
```

Example 10:

This example enables group attestation feature and sets the TestingAccoun@pucit.local user as the
default approver for the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableGroupAttestation -DefaultApprover 'CN=Testing Account,CN=Users,DC=pucit,DC=local'
```

Example 11:

This example sets the notifications (in number of days) before group expiry. It also enables today’s
expiry reports as well as it enables the group attestation.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableGroupAttestation -GlmNotifyOwnersXDaysBeforeOperation add -GlmNotifyOwnersXDaysBefore 1,3,10 -GlmEnableNotificationOfTodaysExpiry
```

Example 12:

This example creates a new role – DemoRole1 – for the AdStore9 identity store by specifying the
minimum possible parameters.

:::note
By default, all permissions are declined to the role created through this commandlet.
Moreover, no criteria filters or scope (group / container) are added to the role.
:::


```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole1 -RolePriority 50 -RoleCriteriaScope Container
```

Example 13:

This example creates a new security role – DemoRole1 – in AdStore9 identity store and a container is
set as its role criteria.

:::note
By default, all permissions are declined to the role created through this commandlet.
:::


```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole1 -RolePriority 50 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local'
```

Example 14:

This example creates a new security role by specifying the container and criteria filters.

The value for RoleCriteriaFilters parameter is specified as 3-length arrays. At first index, specify
the filter name which can be either ‘name’ or ‘type’. Second index holds the operator which is one
of the ‘is exactly’ and ‘is not’ operator. The third index of the array holds the client name or
client type depending upon whether ‘name’ or ‘type’ is specified at the first index.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole4 -RolePriority 53 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local' -RoleCriteriaOperator Or -RoleCriteriaFilters @('name', 'is exactly', 'automate arslanahmadvm'), @('type', 'is not', 'managementshell')
```

Example 15:

This example creates a new security role by specifying the container, criteria filters and
permissions. In this example, only Manage My Groups and Create User permissions are granted to the
created role.

:::note
By default, all the permissions except those specified in RolePermissions parameter are denied
to the role created through this commandlet.  
The role permission names can be retrieved from **Get-RolePermissionNames** commandlet.
:::


```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole6 -RolePriority 55 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local' -RoleCriteriaOperator Or -RoleCriteriaFilters @('name', 'is exactly', 'automate arslanahmadvm'), @('type', 'is not', 'managementshell') -RolePermissions 'manage my groups', 'create user'

```

Example 16:

This example creates a new security role by specifying a role criterion as container, criteria
filters and permissions.

By default, all the permissions except those specified in RolePermissions parameter are granted.
This is due to the presence of DefaultAllowPermissions. In this example, only Manage my groups and
Create user permissions are denied (and the remaining ones are granted) to the created role.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -RoleOperation add -RoleName DemoRole5 -RolePriority 54 -RoleCriteriaScope Container -RoleCriteriaDN 'ou=workingou,dc=pucit,dc=local' -RoleCriteriaOperator Or -RoleCriteriaFilters @('name', 'is exactly', 'automate arslanahmadvm'), @('type', 'is not', 'managementshell') -RolePermissions 'manage my groups', 'create user' –DefaultAllowRolePermissions

```

Example 17:

This example creates two group prefixes – dev and ment –at identity store level.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -PrefixOperation add -Prefixes 'dev', 'ment'
```

Example 18:

This example tracks history of the selected actions for the AdStore9 identity store. The selected
actions are additional owner change, expiration policy change and renewal of group. History
retention period is also specified as last 120 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -HistoryTrackingOption Selected_Actions -HistoryActionsOperation add -HistorySelectedActions AdditionalOwnerChange, ExpirationPolicyChange, GroupExpireRenew -HistoryRetention Last_120_Days
```

Example 19:

This example configures file and windows logging settings for the AdStore9 identity store. File
logging is set to Debug level and windows logging to FailureAudit.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -FileLoggingEvent Debug -WindowsLoggingEvent FailureAudit
```

Example 20:

This example configures out of bounds settings for the AdStore9 identity store.

Maximum 500 members are allowed in each group and when the threshold reaches, the members will be
nested into child groups. The orphan groups will be deleted. Do not update the membership and alert
if the percentage in membership exceeds by more than 65% and either the current or new membership
exceeds 200 members.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -MaximumMembersPerGroup 500 -WhenGroupMembershipThresholdReach NestIntoChildGroups -EnableOrphanGroupsDeletion -EnableOutOfBoundsAlerts -MembershipCountThreshold 200 -MembershipPercentageThreshold 65
```

Example 21:

This example configures profile validation settings. This example specifies that profile validation
policies should be applied on group specified by distinguished name
‘CN=ProfileValidation1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local’. Regular profiles should be
validated within 60 days. New profiles should also be validated within 15 days. Validation extension
period should be 7 days.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -ProfileValidationGroupDN 'CN=ProfileValidation1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' -RegularProfileValidationLifecycle 60 -EnableNewProfileValidationLifecycle -NewProfileValidationLifecycle 15 -ProfileValidationExtensionPeriod 7
```

Example 22:

This example configures profile validation settings. This example cmdlet adds two profile validation
reminders. It also causes an attribute named ‘info’ to be updated with value ‘Validation expired’
when the profile validation is expired. It also causes the validation date to be removed after 5
days (after which the policies for new users are applied to the users).

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -ProfileValidationReminderOperation add -ProfileValidationReminders @('fourth', 45), @('fifth', 60) -EnableAttributeUpdation -ProfileValidationAttributeName info -ProfileValidationAttributeValue 'Validation expired' -EnableValidationDateRemoval -ValidationDateRemovalInterval 5
```

Example 23:

This example adds two security questions in the AdStore9 identity store.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -QuestionOperation add -SecurityQuestions 'When was the first time you felt that it was raining even though it was not raining?', 'What would happen if there were no GroupID?'
```

Example 24:

This example configures password options.

This example enforces the following password policy: Do not allow passwords starting with either
‘password123R’ or containing ‘123R’ and allow only those passwords matching
'^(?=.\*[a-z])(?=.\*[A-Z])(?=.\*\d)(?=.\*[^\da-zA-Z]).{8,15}$' regular expression pattern.

‘PPasswordExceptions’ parameter accepts 2-Length arrays having at first index the operator and at
second index the string. Allowed operators contain: ‘equals’; ‘startswith’; ‘endswith’; ‘contains’;
and ‘regexp’.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -PasswordExceptionOperation add -PasswordExceptions @('startswith', 'password123R'), @('contains', '123R') -PasswordRuleOperation add -PasswordRules '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$'
```

Example 25:

This example configures the second way authentication via security questions.

```
Set-IdentityStore -IdentityStoreName AdStore9 -Credential $creds -Domain pucit.local -EnableSWAuthenticationViaSecurityQuestions -SWAQuestionsOperation add -SWAQuestions @('when was the first time you felt that it is raining even though it was not raining?', 'info')
```
