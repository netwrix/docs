---
title: "Usercube-Get-JobSteps"
description: "Usercube-Get-JobSteps"
sidebar_position: 210
---

# Usercube-Get-JobSteps

This agent-side tool returns the list of all tasks present in a given job.

## Examples

```

.\Usercube-Get-JobSteps.exe --api-url "http://localhost:5000" --api-client-id "Job" --api-secret "secret" --job-identifier "InitializationJob"

Task : InitializationJob_0_CreateDatabaseViews, Order : 0
Task : InitializationJob_1_AD_ExportActiveDirectory_Initial_ADExport, Order : 1
Task : InitializationJob_2_LDAP_ExportLDAP_Initial_LDAPExport0, Order : 2
Task : InitializationJob_3_LDAP_ExportLDAP_Initial_LDAPExport1, Order : 3
Task : InitializationJob_4_AD_PrepareSynchronizationActiveDirectory_Initial, Order : 4
Task : InitializationJob_5_HR_PrepareSynchronization_Initial, Order : 5
Task : InitializationJob_6_LDAP_PrepareSynchronization_Initial, Order : 6
Task : InitializationJob_7_SAB_PrepareSynchronization_Initial, Order : 7
Task : InitializationJob_8_AD_SynchronizeActiveDirectory_ForceSynchronization, Order : 8
Task : InitializationJob_9_HR_Synchronize_ForceSynchronization, Order : 9
Task : InitializationJob_10_LDAP_Synchronize_ForceSynchronization, Order : 10
Task : InitializationJob_11_SAB_Synchronize_ForceSynchronization, Order : 11
Task : Init_SetAdminProfile, Order : 12
Task : Init_DatabaseIndex, Order : 13
Task : InitializationJob_14_AllEntities_UpdateEntityPropertyExpressions, Order : 14
Task : InitializationJob_15_AllEntities_ComputeCorrelationKeys, Order : 15
Task : InitializationJob_16_ComputeRoleModel, Order : 16
Task : InitializationJob_17_Directory_GenerateProvisioningOrders_ForceProvisioning, Order : 17
Task : InitializationJob_18_Directory_FulfillInternalResources_IgnoreHistorization, Order : 18
Task : InitializationJob_19_AllEntities_ComputeCorrelationKeys, Order : 19
Task : InitializationJob_20_ComputeRoleModel, Order : 20
Task : Init_SetManualAssignments, Order : 21
Task : Init_ApproveFutureuserAccountContol, Order : 22
Task : InitializationJob_23_AllEntities_ComputeCorrelationKeys, Order : 23
Task : InitializationJob_24_ComputeRoleModel, Order : 24
Task : InitializationJob_25_Directory_GenerateProvisioningOrders_ForceProvisioning, Order : 25
Task : InitializationJob_26_Directory_FulfillInternalResources_IgnoreHistorization, Order : 26
Task : InitializationJob_27_AllEntities_ComputeCorrelationKeys, Order : 27
Task : InitializationJob_28_ComputeRoleModel, Order : 28
Task : InitializationJob_29_Directory_GenerateProvisioningOrders_ForceProvisioning, Order : 29
Task : InitializationJob_30_Directory_FulfillInternalResources_IgnoreHistorization, Order : 30
Task : Directory_Collect_Initial, Order : 31
Task : Directory_Synchronization_Init, Order : 32
Task : InitializationJob_33_AllEntities_UpdateEntityPropertyExpressions, Order : 33
Task : InitializationJob_34_DeployConfiguration, Order : 34
Task : InitializationJob_36_AllEntities_ComputeCorrelationKeys, Order : 35
Task : InitializationJob_37_ComputeRoleModel, Order : 36
Task : InitializationJob_38_ComputeRiskScores, Order : 37
Task : Init_LoadApplications, Order : 38
Task : Init_LoadPhotos, Order : 39
Task : InitializationJob_41_UpdateClassification, Order : 40
Task : InitializationJob_42_SetInternalUserProfiles, Order : 41
Task : InitializationJob_43_ResetValidFrom, Order : 42
Task : InitializationJob_44_UpdateParametersContextDisplayNames, Order : 43
Task : Init_Translate, Order : 44
Task : Init_SetLastLogon, Order : 45
Task : Init_SuggestedRoles, Order : 46
Task : InitializationJob_49_AllEntities_ComputeCorrelationKeys, Order : 47
Task : InitializationJob_50_ComputeRoleModel, Order : 48
Task : InitializationJob_51_SavePreExistingAccessRights, Order : 49

```

## Arguments

| Argument Name             | Details                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id optional  | **Type** String **Description** Login to Identity Manager server.                                                                 |
| --api-secret optional     | **Type** String **Description** Password to Identity Manager server.                                                              |
| --api-url optional        | **Type** String **Description** URL of Identity Manager server.                                                                   |
| --job-identifier required | **Type** String **Description** Identifier of the job whose tasks/steps are to be listed.                                         |
|                           |                                                                                                                                   |
| ---                       | ---                                                                                                                               |
| --log-level optional      | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. |
