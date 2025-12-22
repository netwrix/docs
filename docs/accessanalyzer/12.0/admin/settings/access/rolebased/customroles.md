---
title: "Custom Roles"
description: "Custom Roles"
sidebar_position: 20
---

# Custom Roles

A custom role can be created within Access Analyzer to combine the rights of other defined roles.
Follow the steps below to create a custom role.

**Step 1 –** In the Access Analyzer directory, navigate to **PrivateAssemblies** and edit the
**rba-roles.conf** file.  Add a new section for the custom role as shown in the following
instructions:

```
<role name="Special User">
<translations>
<translation displayname= "Special User" description="Description of Special User" />
</translations>
<privileges>
</privileges>
</role>
```

- Replace `Special User` between the double quotes in the script above with the name of the new
  role.
- Replace `Description of Special User` between the double quotes in the script above with a
  description of what a user assigned the new role is able to do.

**Step 2 –** Add privileged values for the desired rights on new lines between the beginning comment
`<privileges>` and ending comment `</privileges>` in the script above.

- For example, to create a single role which has the same privileges as the Host Management
  Administrator and Global Options Administrator roles, copy the privileges from the sections of the
  **rba-roles.conf** file to the newly added section, and remove duplicate values if there is any
  overlap.

See the sections below for examples of how roles should be added in the **rba-roles.conf** file.

## Default Global Options Administrator Privileges

The following example shows what is currently contained in the Global Options Administrator role,
and how the created role should be added in the **rba-roles.conf** file.

```
<role name="GlobalOptionsAdministrator">
<translations>
<translation displayname= "Global Options Administrator" description="Able to modify global settings, except for the settings of Roles" />
</translations>
<privileges>
<privilege value="RunSA"/>
<privilege value="GlobalSettingsModify"/>   
<privilege value="GlobalSettingsAddOrModifyStorage"/>
<privilege value="GlobalSettingsDeleteStorage"/>
<privilege value="GlobalSettingsSetDefaultStorage"/>
<privilege value="GlobalSettingsHistoryModification"/>
<privilege value="GlobalSettingsConnectionAddOrModifyProfile"/>
<privilege value="GlobalSettingsConnectionDeleteProfile"/>
<privilege value="GlobalSettingsConnectionSetDefaultProfile"/>
<privilege value="GlobalSettingsScheduledTaskProfileModification"/>
<privilege value="GlobalSettingsNotificationMailServerModification"/>
<privilege value="GlobalSettingsNotificationUserInformationModification"/>
<privilege value="GlobalSettingsExchangeConnectionSettingsModification"/>
<privilege value="GlobalSettingsReportingSettingsModification"/>
<privilege value="GlobalSettingsHMDiscoverySettingsModification"/>
<privilege value="GlobalSettingsHMDiscoveryLogSettingsModification"/>
<privilege value="GlobalSettingsHMDiscoveryPerformanceTuningSettingsModification"/>
<privilege value="GlobalSettingsHMInventoryItemsModification"/>
<privilege value="GlobalSettingsHMInventoryPerformanceSettingsModification"/>
<privilege value="GlobalSettingsHMInventoryHostListViewsModification"/>
<privilege value="GlobalSettingsServiceNowSettingsModification"/>
<privilege value="GlobalSettingsOtherCulumnNamingModification"/>
<privilege value="GlobalSettingsOtherGridViewParametersModification"/>
<privilege value="GlobalSettingsOtherAppLogSettingsModification"/>
<privilege value="GlobalSettingsOtherHelpSettingsModification"/>
<privilege value="GlobalSettingsOtherDatabaseCleanupSettingModification"/>
<privilege value="GlobalSettingsOtherJobEngineFolderRetentionSettingsModification"/>
<privilege value="ScheduleDelete"/>
<privilege value="ScheduleEdit"/>
<privilege value="GlobalSettingsAllowExamineSettingsTree"/>
</privileges>
</role>
```

## Default Host Management Administrator Privileges

The following example shows what is currently contained in the Host Management Administrator role,
and how the created role should be added in the **rba-roles.conf** file.

```
<role name="HostManagementAdministrator">
<translations>
<translation displayname= "Host Management Administrator" description="Able to modify host management settings, as well as run host inventory queries" />
</translations>
<privileges>
<privilege value="RunSA"/>
<privilege value="HMManageHostInventoryRunState"/>
<privilege value="HMRefreshHosts"/>
<privilege value="HMScheduleHostInventory"/>
<privilege value="HMExportHosts"/>
<privilege value="HMCreateHostsList"/>
<privilege value="HMRenameHostList"/>
<privilege value="HMDeleteHostList"/>
<privilege value="HMEditHostList"/>
<privilege value="HMRunExternalCommand"/>
<privilege value="HMEditHost"/>
<privilege value="HMDiscoveryCreateQuery"/>
<privilege value="HMDiscoveryEditQuery"/>
<privilege value="HMDiscoveryDeleteQuery"/>
<privilege value="HMDiscoveryQueryRunStateManagement"/>
<privilege value="HMDiscoveryScheduleQuery"/>
<privilege value="HMAllowExamineHostManagementTree"/>
<privilege value="ScheduleDelete"/>
<privilege value="ScheduleEdit"/>
</privileges>
</role>
```

## New Role Combining the Global Options Administrator and Host Management Administrator Roles

The following is an example of a custom role that combines the Global Options Administrator and Host
Management Administrator roles. The script contains duplicate privileges of `RunSA`,
`ScheduleDelete`, and `ScheduleEdit` that need to be removed.

```
<role name="HMGOAdmin"><translations>
<translation displayname= "Host and Global Administrator" description="Able to modify host management, run host inventory queries, and modify global settings except for the settings of Roles" /> 
</translations>
<privileges>
<privilege value="RunSA"/>
<privilege value="GlobalSettingsModify"/>         
<privilege value="GlobalSettingsAddOrModifyStorage"/>
<privilege value="GlobalSettingsDeleteStorage"/>
<privilege value="GlobalSettingsSetDefaultStorage"/>
<privilege value="GlobalSettingsHistoryModification"/>
<privilege value="GlobalSettingsConnectionAddOrModifyProfile"/>
<privilege value="GlobalSettingsConnectionDeleteProfile"/>
<privilege value="GlobalSettingsConnectionSetDefaultProfile"/>
<privilege value="GlobalSettingsScheduledTaskProfileModification"/>
<privilege value="GlobalSettingsNotificationMailServerModification"/>
<privilege value="GlobalSettingsNotificationUserInformationModification"/>
<privilege value="GlobalSettingsExchangeConnectionSettingsModification"/>
<privilege value="GlobalSettingsReportingSettingsModification"/>
<privilege value="GlobalSettingsHMDiscoverySettingsModification"/>
<privilege value="GlobalSettingsHMDiscoveryLogSettingsModification"/>
<privilege value="GlobalSettingsHMDiscoveryPerformanceTuningSettingsModification"/>
<privilege value="GlobalSettingsHMInventoryItemsModification"/>
<privilege value="GlobalSettingsHMInventoryPerformanceSettingsModification"/>
<privilege value="GlobalSettingsHMInventoryHostListViewsModification"/>
<privilege value="GlobalSettingsServiceNowSettingsModification"/>
<privilege value="GlobalSettingsOtherCulumnNamingModification"/>
<privilege value="GlobalSettingsOtherGridViewParametersModification"/>
<privilege value="GlobalSettingsOtherAppLogSettingsModification"/>
<privilege value="GlobalSettingsOtherHelpSettingsModification"/>
<privilege value="GlobalSettingsOtherDatabaseCleanupSettingModification"/>
<privilege value="GlobalSettingsOtherJobEngineFolderRetentionSettingsModification"/>
<privilege value="ScheduleDelete"/>
<privilege value="ScheduleEdit"/>
<privilege value="GlobalSettingsAllowExamineSettingsTree"/>
<privilege value="RunSA"/>
<privilege value="HMManageHostInventoryRunState"/>
<privilege value="HMRefreshHosts"/>
<privilege value="HMScheduleHostInventory"/>
<privilege value="HMExportHosts"/>
<privilege value="HMCreateHostsList"/>
<privilege value="HMRenameHostList"/>
<privilege value="HMDeleteHostList"/>
<privilege value="HMEditHostList"/>
<privilege value="HMRunExternalCommand"/>
<privilege value="HMEditHost"/>
<privilege value="HMDiscoveryCreateQuery"/>
<privilege value="HMDiscoveryEditQuery"/>
<privilege value="HMDiscoveryDeleteQuery"/>
<privilege value="HMDiscoveryQueryRunStateManagement"/>
<privilege value="HMDiscoveryScheduleQuery"/>
<privilege value="HMAllowExamineHostManagementTree"/>
<privilege value="ScheduleDelete"/>
<privilege value="ScheduleEdit"/>
</privileges>
</role>
```
