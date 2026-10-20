# Index Reference

## Complete Index Listing

| Table | Index Name | Type | Unique | Columns |
|---|---|---|---|---|
| SA_SQLServer_AdditionalInformation | PK_SA_SQLServer_AdditionalInformation | CLUSTERED | Yes | id |
| SA_SQLServer_AdditionalInformation | UQ_SA_SQLServer_AdditionalInformation_AdditionalInformation | NONCLUSTERED | Yes | md5_additional_information |
| SA_SQLServer_AsymmetricKeys | UQ_SA_SQLServer_AsymmetricKeys_Type | NONCLUSTERED | Yes | database_id, name |
| SA_SQLServer_AuditActions | UQ_SA_SQLServer_AuditActions | NONCLUSTERED | Yes | action_id, class_type, parent_class_type |
| SA_SQLServer_AuditClassType | PK_SA_SQLServer_AuditClassType | CLUSTERED | Yes | class_type |
| SA_SQLServer_AuditFiles | PK_SA_SQLServer_AuditFiles | CLUSTERED | Yes | id |
| SA_SQLServer_AuditFiles | UQ_SA_SQLServer_AuditFiles_Path_Audit_Id | NONCLUSTERED | Yes | audit_id, md5_audit_file_path |
| SA_SQLServer_AuditInformation | PK_SA_SQLServer_AuditInformation | CLUSTERED | Yes | id |
| SA_SQLServer_Columns | UQ_SA_SQLServer_Columns_Name | NONCLUSTERED | Yes | object_id, column_id, name |
| SA_SQLServer_DatabasePermissions | PK_SA_SQLServer_DatabasePermissions | CLUSTERED | Yes | id |
| SA_SQLServer_DatabasePermissions | SA_SQLServer_DatabasePermissions_Database_Id_Grantee_Principal_IX | NONCLUSTERED | No | database_id, grantee_principal |
| SA_SQLServer_DatabasePrincipals | PK_SA_SQLServer_DatabasePrincipals | CLUSTERED | Yes | id |
| SA_SQLServer_DatabasePrincipals | UQ_SA_SQLServer_DatabasePrincipals_Id | NONCLUSTERED | Yes | database_id, principal_id |
| SA_SQLServer_DatabasePrincipals | UQ_SA_SQLServer_DatabasePrincipals_NameId | NONCLUSTERED | Yes | database_id, principal_id, principal_name |
| SA_SQLServer_DatabasePrincipals | UQ_SA_SQLServer_DatabasePrincipals_NameSid | NONCLUSTERED | Yes | database_id, principal_sid, principal_name |
| SA_SQLServer_DatabasePrincipals | IX_SA_SQLServer_Objects_Database_Id_Principal_Id | NONCLUSTERED | No | database_id, principal_id |
| SA_SQLServer_DatabasePrincipalTypes | PK_SA_SQLServer_DatabasePrincipalTypes | CLUSTERED | Yes | type |
| SA_SQLServer_DatabasePrincipalTypes | UQ_SA_SQLServer_DatabasePrincipalTypes_Type | NONCLUSTERED | Yes | type |
| SA_SQLServer_DatabasePrincipalTypes | UQ_SA_SQLServer_DatabasePrincipalTypes_TypeDesc | NONCLUSTERED | Yes | type_desc |
| SA_SQLServer_DatabaseRoleMembers | PK_SA_SQLServer_DatabaseRoles | CLUSTERED | Yes | id |
| SA_SQLServer_Databases | PK_SA_SQLServer_Databases | CLUSTERED | Yes | id |
| SA_SQLServer_Databases | SA_SQLServer_Databases_name_IDX | NONCLUSTERED | No | name |
| SA_SQLServer_Databases | UQ_SA_SQLServer_Databases | NONCLUSTERED | Yes | instance_id, database_id, name, create_date, sa_delete_date |
| SA_SQLServer_EventDatabasePrincipals | PK_SA_SQLServer_EventDatabasePrincipals | CLUSTERED | Yes | id |
| SA_SQLServer_EventDatabasePrincipals | UQ_SA_SQLServer_EventDatabasePrincipals_IdNameSid | NONCLUSTERED | Yes | database_id, principal_id, principal_name |
| SA_SQLServer_EventDatabases | PK_SA_SQLServer_EventDatabases | CLUSTERED | Yes | id |
| SA_SQLServer_EventDatabases | SA_SQLServer_EventDatabases_name_IDX | NONCLUSTERED | No | name |
| SA_SQLServer_EventDatabases | UQ_SA_SQLServer_EventDatabases | NONCLUSTERED | Yes | instance_id, name |
| SA_SQLServer_Events | UQ_SA_SQLServer_Events_StaleDataLookup | NONCLUSTERED | No | file_id, event_time |
| SA_SQLServer_EventServerPrincipals | PK_SA_SQLServer_EventServerPrincipals | CLUSTERED | Yes | id |
| SA_SQLServer_EventServerPrincipals | UQ_SA_SQLServer_EventServerPrincipals_IdNameSid | NONCLUSTERED | Yes | instance_id, principal_id, principal_sid, principal_name |
| SA_SQLServer_ExpressionDependencies | PK (auto) | CLUSTERED | Yes | id |
| SA_SQLServer_ExpressionDependencies | IDX_SA_SQLServer_ExpressionDependencies_Ids | NONCLUSTERED | No | instance_id, database_id, referencing_id |
| SA_SQLServer_Instances | PK_SA_SQLServer_Instances | CLUSTERED | Yes | id |
| SA_SQLServer_Instances | UQ_SA_SQLServer_Instances_Name | NONCLUSTERED | Yes | name |
| SA_SQLServer_Objects | PK_SA_SQLServer_Objects | CLUSTERED | Yes | id |
| SA_SQLServer_Objects | UQ_SA_SQLServer_Objects_Id | NONCLUSTERED | Yes | instance_id, database_id, object_id |
| SA_SQLServer_Objects | UQ_SA_SQLServer_Objects_Name | NONCLUSTERED | Yes | instance_id, database_id, name, schema_id |
| SA_SQLServer_Objects | IX_SA_SQLServer_Objects_Database_Id_Object_Id | NONCLUSTERED | No | name, is_deleted, database_id, object_id |
| SA_SQLServer_Objects | SA_SQLServer_Objects_Instance_Id_Object_Id_Is_Deleted_IX | NONCLUSTERED | No | id, name, instance_id, object_id, is_deleted |
| SA_SQLServer_PermissionClasses | PK_PermissionClasses | CLUSTERED | Yes | class |
| SA_SQLServer_PermissionClasses | UQ_SA_SQLServer_PermissionClasses_Class | NONCLUSTERED | Yes | class |
| SA_SQLServer_PermissionClasses | UQ_SA_SQLServer_PermissionClasses_ClassDesc | NONCLUSTERED | Yes | class_desc |
| SA_SQLServer_PermissionNames | PK_SA_SQLServer_PermissionNames | CLUSTERED | Yes | type |
| SA_SQLServer_PermissionNames | UQ_SA_SQLServer_PermissionNames_PermissionName | NONCLUSTERED | Yes | permission_name |
| SA_SQLServer_PermissionNames | UQ_SA_SQLServer_PermissionNames_Type | NONCLUSTERED | Yes | type |
| SA_SQLServer_PermissionStates | PK_SA_SQLServer_PermissionStates | CLUSTERED | Yes | state |
| SA_SQLServer_PermissionStates | UQ_SA_SQLServer_PermissionStates_State | NONCLUSTERED | Yes | state |
| SA_SQLServer_PermissionStates | UQ_SA_SQLServer_PermissionStates_StateDesc | NONCLUSTERED | Yes | state_desc |
| SA_SQLServer_Schemas | PK_SA_SQLServer_Schemas | CLUSTERED | Yes | id |
| SA_SQLServer_Schemas | UQ_SA_SQLServer_Schemas_IDs | NONCLUSTERED | Yes | database_id, schema_id |
| SA_SQLServer_SDD_Criteria | PK_SA_SQLServer_SDD_Criteria | CLUSTERED | Yes | id |
| SA_SQLServer_SDD_Criteria | UQ_SA_SQLServer_SDD_Criteria_pattern | NONCLUSTERED | Yes | pattern_guid |
| SA_SQLServer_SDD_DatabaseCriteria | SA_SQLServer_SDD_DatabaseCriteria_database_id | NONCLUSTERED | No | database_id |
| SA_SQLServer_SDD_MatchHits_SubjectProfile | PK_SA_SQLServer_SDD_MatchHits_SubjectProfile | CLUSTERED | Yes | resource_id, criteria_id, source_id, identity_id, attribute_id, order |
| SA_SQLServer_SDD_Resources | PK_SA_SQLServer_SDD_Resources | CLUSTERED | Yes | id |
| SA_SQLServer_SDD_Resources | SA_SQLServer_SDD_Resources_Database_Id_Object_Id_IX | NONCLUSTERED | No | database_id, object_id |
| SA_SQLServer_SDD_Resources | UQ_SA_SQLServer_SDD_Resources_Resource | NONCLUSTERED | Yes | type, instance_id, database_id, object_id, column_id |
| SA_SQLServer_SDD_ResourceTypes | PK_SA_SQLServer_ResourceTypes | CLUSTERED | Yes | id |
| SA_SQLServer_SDD_ResourceTypes | UQ_SA_SQLServer_ResourceTypes_TypeDesc | NONCLUSTERED | Yes | type_desc |
| SA_SQLServer_SDD_ScanHistory | PK_SA_SQLServer_SDD_ScanHistory | CLUSTERED | Yes | id |
| SA_SQLServer_SDD_SupportedDataTypes | PK_SA_SQLServer_SDD_SupportedDataTypes | CLUSTERED | Yes | id |
| SA_SQLServer_SDD_SupportedDataTypes | IX_SA_SQLServer_SDD_SupportedDataTypes | NONCLUSTERED | Yes | data_type |
| SA_SQLServer_ServerPermissions | PK_SA_SQLServer_ServerPermissions | CLUSTERED | Yes | id |
| SA_SQLServer_ServerPrincipals | PK_SA_SQLServer_ServerPrincipals | CLUSTERED | Yes | id |
| SA_SQLServer_ServerPrincipals | UQ_SA_SQLServer_ServerPrincipals_Id | NONCLUSTERED | Yes | instance_id, principal_id |
| SA_SQLServer_ServerPrincipals | UQ_SA_SQLServer_ServerPrincipals_NameId | NONCLUSTERED | Yes | instance_id, principal_id, principal_name |
| SA_SQLServer_ServerPrincipals | UQ_SA_SQLServer_ServerPrincipals_NameSid | NONCLUSTERED | Yes | instance_id, principal_sid, principal_name |
| SA_SQLServer_ServerPrincipalTypes | PK_SA_SQLServer_ServerPrincipalTypes | CLUSTERED | Yes | type |
| SA_SQLServer_ServerPrincipalTypes | UQ_SA_SQLServer_ServerPrincipalTypes_Type | NONCLUSTERED | Yes | type |
| SA_SQLServer_ServerPrincipalTypes | UQ_SA_SQLServer_ServerPrincipalTypes_TypeDesc | NONCLUSTERED | Yes | type_desc |
| SA_SQLServer_ServerRoleMembers | PK_SA_SQLServer_ServerRoleMembers | CLUSTERED | Yes | id |
| SA_SQLServer_SqlLogins | PK_SA_SQLServer_SqlLogins | CLUSTERED | Yes | id |
| SA_SQLServer_Statements | PK_SA_SQLServer_Queries | CLUSTERED | Yes | id |
| SA_SQLServer_Statements | UQ_SA_SQLServer_Statements_Statement | NONCLUSTERED | Yes | md5_statement |
| SA_SQLServer_UserEvents | PK_SA_SQLServer_UserEvents | CLUSTERED | Yes | id |
| SA_SQLServer_UserEvents | SA_SQLServer_UserEvents_user_defined_event_id_IDX | NONCLUSTERED | No | user_defined_event_id |
| SA_SQLServer_UserEvents | UQ_SA_SQLServer_UserEvents_UserDefinedInformation | NONCLUSTERED | Yes | md5_user_defined_information |
| SA_SQL_Instances | PK_SA_SQL_Instances | CLUSTERED | Yes | instance_id |
| SA_SQL_Instances | UQ_SA_SQL_Instances | NONCLUSTERED | Yes | instance_label |
| SA_SQL_Instances | UQ_SA_SQL_Instances_Host_Name_Service_Name_Port | NONCLUSTERED | Yes | host_name, service_name, port_number |
| SA_SQL_Patches | PK_SA_SQL_Patches | CLUSTERED | Yes | Patch_Source, Patch_Version |
| SA_SQL_PasswordIssues_LIST | SA_SQL_PasswordIssues_LIST_PK_Index | NONCLUSTERED | Yes | rowGUID |
| SA_SQL_PasswordIssues_LIST | SA_SQL_PasswordIssues_LIST_Host_Index | NONCLUSTERED | No | SA_HOST |
| SA_SQL_PasswordIssues_LIST | SA_SQL_PasswordIssues_LIST_JobRuntimeKey_Index | NONCLUSTERED | No | JobRunTimeKey |
