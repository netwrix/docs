# SQL Data Collector Schema

## Overview

This is a comprehensive schema documentation for the **NAA 12.0 SQL Server Data Collector**. The SQL Server Data Collector is a component of the NAA 12.0 platform that discovers, audits, and reports on SQL Server instances, databases, principals, permissions, audit events, and sensitive data across the enterprise.

## Schema Categories

The tables fall into two categories:

1. **Core Data Collection Tables** (44 tables) — Normalized tables populated directly by data collectors. These contain raw audit data with full foreign key relationships. Includes shared infrastructure tables (`SA_SQL_Instances`, `SA_SQL_Patches`) used across all database collector modules.

2. **Reporting / Summary Tables** (59 tables) — Denormalized, report-ready tables populated by analysis jobs. These use human-readable column names (e.g., `"Instance"`, `"Database"`, `"Permission"`).

---

### [Core Data Collection Tables](coretables/overview.md)
  - [SA_SQLServer_Instances](coretables/overview.md#sa_sqlserver_instances)
  - [SA_SQLServer_Databases](coretables/overview.md#sa_sqlserver_databases)
  - [SA_SQLServer_EventDatabases](coretables/overview.md#sa_sqlserver_eventdatabases)
  - [SA_SQLServer_Schemas](coretables/overview.md#sa_sqlserver_schemas)
  - [SA_SQLServer_Objects](coretables/overview.md#sa_sqlserver_objects)
  - [SA_SQLServer_Columns](coretables/overview.md#sa_sqlserver_columns)
  - [SA_SQLServer_ServerPrincipalTypes](coretables/overview.md#sa_sqlserver_serverprincipaltypes)
  - [SA_SQLServer_DatabasePrincipalTypes](coretables/overview.md#sa_sqlserver_databaseprincipaltypes)
  - [SA_SQLServer_ServerPrincipals](coretables/overview.md#sa_sqlserver_serverprincipals)
  - [SA_SQLServer_DatabasePrincipals](coretables/overview.md#sa_sqlserver_databaseprincipals)
  - [SA_SQLServer_EventServerPrincipals](coretables/overview.md#sa_sqlserver_eventserverprincipals)
  - [SA_SQLServer_EventDatabasePrincipals](coretables/overview.md#sa_sqlserver_eventdatabaseprincipals)
  - [SA_SQLServer_SqlLogins](coretables/overview.md#sa_sqlserver_sqllogins)
  - [SA_SQLServer_ServerRoleMembers](coretables/overview.md#sa_sqlserver_serverrolemembers)
  - [SA_SQLServer_DatabaseRoleMembers](coretables/overview.md#sa_sqlserver_databaserolemembers)
  - [SA_SQLServer_EffectiveRoleMembership](coretables/overview.md#sa_sqlserver_effectiverolemembership)
  - [SA_SQLServer_PermissionNames](coretables/overview.md#sa_sqlserver_permissionnames)
  - [SA_SQLServer_PermissionClasses](coretables/overview.md#sa_sqlserver_permissionclasses)
  - [SA_SQLServer_PermissionStates](coretables/overview.md#sa_sqlserver_permissionstates)
  - [SA_SQLServer_ServerPermissions](coretables/overview.md#sa_sqlserver_serverpermissions)
  - [SA_SQLServer_DatabasePermissions](coretables/overview.md#sa_sqlserver_databasepermissions)
  - [SA_SQLServer_AsymmetricKeys](coretables/overview.md#sa_sqlserver_asymmetrickeys)
  - [SA_SQLServer_AuditInformation](coretables/overview.md#sa_sqlserver_auditinformation)
  - [SA_SQLServer_AuditFiles](coretables/overview.md#sa_sqlserver_auditfiles)
  - [SA_SQLServer_AuditClassType](coretables/overview.md#sa_sqlserver_auditclasstype)
  - [SA_SQLServer_AuditActions](coretables/overview.md#sa_sqlserver_auditactions)
  - [SA_SQLServer_Statements](coretables/overview.md#sa_sqlserver_statements)
  - [SA_SQLServer_AdditionalInformation](coretables/overview.md#sa_sqlserver_additionalinformation)
  - [SA_SQLServer_UserEvents](coretables/overview.md#sa_sqlserver_userevents)
  - [SA_SQLServer_Events](coretables/overview.md#sa_sqlserver_events)
  - [SA_SQLServer_ExpressionDependencies](coretables/overview.md#sa_sqlserver_expressiondependencies)
  - [SA_SQLServer_SDD_Criteria](coretables/overview.md#sa_sqlserver_sdd_criteria)
  - [SA_SQLServer_SDD_InstanceCriteria](coretables/overview.md#sa_sqlserver_sdd_instancecriteria)
  - [SA_SQLServer_SDD_DatabaseCriteria](coretables/overview.md#sa_sqlserver_sdd_databasecriteria)
  - [SA_SQLServer_SDD_ResourceTypes](coretables/overview.md#sa_sqlserver_sdd_resourcetypes)
  - [SA_SQLServer_SDD_Resources](coretables/overview.md#sa_sqlserver_sdd_resources)
  - [SA_SQLServer_SDD_Matches](coretables/overview.md#sa_sqlserver_sdd_matches)
  - [SA_SQLServer_SDD_MatchHits](coretables/overview.md#sa_sqlserver_sdd_matchhits)
  - [SA_SQLServer_SDD_MatchHits_SubjectProfile](coretables/overview.md#sa_sqlserver_sdd_matchhits_subjectprofile)
  - [SA_SQLServer_SDD_ScanHistory](coretables/overview.md#sa_sqlserver_sdd_scanhistory)
  - [SA_SQLServer_SDD_SupportedDataTypes](coretables/overview.md#sa_sqlserver_sdd_supporteddatatypes)
  - [SA_SQL_Patches](coretables/overview.md#sa_sql_patches)
  - [SA_SQL_Instances](coretables/overview.md#sa_sql_instances)
  - [SA_SQL_PasswordIssues_LIST](coretables/overview.md#sa_sql_passwordissues_list)

### [Reporting Tables](reportingtables/overview.md)
#### [Activity](reportingtables/overview.md#activity)
  - [SA_SQLServer_Activity_Details](reportingtables/overview.md#sa_sqlserver_activity_details)
  - [SA_SQLServer_Activity_UserDatabaseSummary](reportingtables/overview.md#sa_sqlserver_activity_userdatabasesummary)
  - [SA_SQLServer_Activity_UserInstanceSummary](reportingtables/overview.md#sa_sqlserver_activity_userinstancesummary)

#### [Authentication](reportingtables/overview.md#authentication)
  - [SA_SQLServer_Authentication_Details](reportingtables/overview.md#sa_sqlserver_authentication_details)
  - [SA_SQLServer_Authentication_Summary](reportingtables/overview.md#sa_sqlserver_authentication_summary)

#### [Control Server](reportingtables/overview.md#control-server)
  - [SA_SQLServer_ControlServer_Details](reportingtables/overview.md#sa_sqlserver_controlserver_details)
  - [SA_SQLServer_ControlServer_DomainUsers](reportingtables/overview.md#sa_sqlserver_controlserver_domainusers)
  - [SA_SQLServer_ControlServer_InstanceSummary](reportingtables/overview.md#sa_sqlserver_controlserver_instancesummary)

#### [Database Principals](reportingtables/overview.md#database-principals)
  - [SA_SQLServer_DatabasePrincipals_Details](reportingtables/overview.md#sa_sqlserver_databaseprincipals_details)
  - [SA_SQLServer_DatabasePrincipals_InstanceSummary](reportingtables/overview.md#sa_sqlserver_databaseprincipals_instancesummary)

#### [Database Size](reportingtables/overview.md#database-size)
  - [SA_SQLServer_DatabaseSize_Details](reportingtables/overview.md#sa_sqlserver_databasesize_details)
  - [SA_SQLServer_DatabaseSize_Summary](reportingtables/overview.md#sa_sqlserver_databasesize_summary)

#### [Direct Permissions](reportingtables/overview.md#direct-permissions)
  - [SA_SQLServer_DirectPermissions_DatabaseDetails](reportingtables/overview.md#sa_sqlserver_directpermissions_databasedetails)
  - [SA_SQLServer_DirectPermissions_DatabaseSummary](reportingtables/overview.md#sa_sqlserver_directpermissions_databasesummary)
  - [SA_SQLServer_DirectPermissions_SchemaDetails](reportingtables/overview.md#sa_sqlserver_directpermissions_schemadetails)
  - [SA_SQLServer_DirectPermissions_SchemaSummary](reportingtables/overview.md#sa_sqlserver_directpermissions_schemasummary)
  - [SA_SQLServer_DirectPermissions_ServerDetails](reportingtables/overview.md#sa_sqlserver_directpermissions_serverdetails)
  - [SA_SQLServer_DirectPermissions_ServerSummary](reportingtables/overview.md#sa_sqlserver_directpermissions_serversummary)

#### [Domain User Permissions](reportingtables/overview.md#domain-user-permissions)
  - [SA_SQLServer_DomainUserPermissions_Details](reportingtables/overview.md#sa_sqlserver_domainuserpermissions_details)
  - [SA_SQLServer_DomainUserPermissions_Summary](reportingtables/overview.md#sa_sqlserver_domainuserpermissions_summary)

#### [Effective Role Members](reportingtables/overview.md#effective-role-members)
  - [SA_SQLServer_EffectiveRoleMember_Summary](reportingtables/overview.md#sa_sqlserver_effectiverolemember_summary)

#### [Instance Summary](reportingtables/overview.md#instance-summary)
  - [SA_SQLServer_InstanceSummary](reportingtables/overview.md#sa_sqlserver_instancesummary)

#### [Logons](reportingtables/overview.md#logons)
  - [SA_SQLServer_Logons_Details](reportingtables/overview.md#sa_sqlserver_logons_details)
  - [SA_SQLServer_Logons_Summary](reportingtables/overview.md#sa_sqlserver_logons_summary)

#### [Password Issues](reportingtables/overview.md#password-issues)
  - [SA_SQLServer_PasswordIssues_Details](reportingtables/overview.md#sa_sqlserver_passwordissues_details)
  - [SA_SQLServer_PasswordIssues_Summary](reportingtables/overview.md#sa_sqlserver_passwordissues_summary)

#### [Permission Changes](reportingtables/overview.md#permission-changes)
  - [SA_SQLServer_PermissionChanges_Details](reportingtables/overview.md#sa_sqlserver_permissionchanges_details)
  - [SA_SQLServer_PermissionChanges_InstanceSummary](reportingtables/overview.md#sa_sqlserver_permissionchanges_instancesummary)

#### [Public Permissions](reportingtables/overview.md#public-permissions)
  - [SA_SQLServer_PublicPermissions_Details](reportingtables/overview.md#sa_sqlserver_publicpermissions_details)
  - [SA_SQLServer_PublicPermissions_DatabaseSummary](reportingtables/overview.md#sa_sqlserver_publicpermissions_databasesummary)
  - [SA_SQLServer_PublicPermissions_InstanceSummary](reportingtables/overview.md#sa_sqlserver_publicpermissions_instancesummary)
  - [SA_SQLServer_PublicPermissions_NonDefault](reportingtables/overview.md#sa_sqlserver_publicpermissions_nondefault)

#### [Role Members](reportingtables/overview.md#role-members)
  - [SA_SQLServer_RoleMember_Details](reportingtables/overview.md#sa_sqlserver_rolemember_details)
  - [SA_SQLServer_RoleMember_Summary](reportingtables/overview.md#sa_sqlserver_rolemember_summary)

#### [Security Assessment](reportingtables/overview.md#security-assessment)
  - [SA_SQLServer_SecurityAssessment_Results](reportingtables/overview.md#sa_sqlserver_securityassessment_results)
  - [SA_SQLServer_SecurityAssessment_CategorySummary](reportingtables/overview.md#sa_sqlserver_securityassessment_categorysummary)

#### [Sensitive Data](reportingtables/overview.md#sensitive-data)
  - [SA_SQLServer_SensitiveData_Details](reportingtables/overview.md#sa_sqlserver_sensitivedata_details)
  - [SA_SQLServer_SensitiveData_DatabaseSummary](reportingtables/overview.md#sa_sqlserver_sensitivedata_databasesummary)
  - [SA_SQLServer_SensitiveData_EnterpriseSummary](reportingtables/overview.md#sa_sqlserver_sensitivedata_enterprisesummary)

#### [Sensitive Data Activity](reportingtables/overview.md#sensitive-data-activity)
  - [SA_SQLServer_SensitiveDataActivity_Details](reportingtables/overview.md#sa_sqlserver_sensitivedataactivity_details)
  - [SA_SQLServer_SensitiveDataActivity_UserSummary](reportingtables/overview.md#sa_sqlserver_sensitivedataactivity_usersummary)

#### [Sensitive Data Permissions](reportingtables/overview.md#sensitive-data-permissions)
  - [SA_SQLServer_SensitiveDataPermissions_Details](reportingtables/overview.md#sa_sqlserver_sensitivedatapermissions_details)
  - [SA_SQLServer_SensitiveDataPermissions_DatabaseSummary](reportingtables/overview.md#sa_sqlserver_sensitivedatapermissions_databasesummary)

#### [Server Permissions](reportingtables/overview.md#server-permissions)
  - [SA_SQLServer_ServerPermission_Details](reportingtables/overview.md#sa_sqlserver_serverpermission_details)
  - [SA_SQLServer_ServerPermission_InstanceSummary](reportingtables/overview.md#sa_sqlserver_serverpermission_instancesummary)

#### [Server Principals](reportingtables/overview.md#server-principals)
  - [SA_SQLServer_ServerPrincipals_Details](reportingtables/overview.md#sa_sqlserver_serverprincipals_details)
  - [SA_SQLServer_ServerPrincipals_InstanceSummary](reportingtables/overview.md#sa_sqlserver_serverprincipals_instancesummary)

#### [SysAdmins](reportingtables/overview.md#sysadmins)
  - [SA_SQLServer_SysAdmins_Details](reportingtables/overview.md#sa_sqlserver_sysadmins_details)
  - [SA_SQLServer_SysAdmins_DomainUsers](reportingtables/overview.md#sa_sqlserver_sysadmins_domainusers)
  - [SA_SQLServer_SysAdmins_InstanceSummary](reportingtables/overview.md#sa_sqlserver_sysadmins_instancesummary)

#### [Unusual Activity](reportingtables/overview.md#unusual-activity)
  - [SA_SQLServer_UnusualHourlyUserActivity](reportingtables/overview.md#sa_sqlserver_unusualhourlyuseractivity)
  - [SA_SQLServer_UnusualActivitySummary](reportingtables/overview.md#sa_sqlserver_unusualactivitysummary)

#### [User Logins](reportingtables/overview.md#user-logins)
  - [SA_SQLServer_UserLogins_Details](reportingtables/overview.md#sa_sqlserver_userlogins_details)
  - [SA_SQLServer_UserLogins_Summary](reportingtables/overview.md#sa_sqlserver_userlogins_summary)

#### [Best Practices](reportingtables/overview.md#best-practices)
  - [SA_SQL_BestPractices](reportingtables/overview.md#sa_sql_bestpractices)
  - [SA_SQL_BestPractices_Summary](reportingtables/overview.md#sa_sql_bestpractices_summary)

#### [CMD Shell](reportingtables/overview.md#cmd-shell)
  - [SA_SQL_CMDShell_Status](reportingtables/overview.md#sa_sql_cmdshell_status)

#### [Linked Servers](reportingtables/overview.md#linked-servers)
  - [SA_SQL_LinkedServer_Details](reportingtables/overview.md#sa_sql_linkedserver_details)
  - [SA_SQL_LinkedServer_Summary](reportingtables/overview.md#sa_sql_linkedserver_summary)
  
### [Views](views/overview.md)
  - [SA_SQLServer_FullEventsView](views/overview.md#sa_sqlserver_fulleventsview)
  - [SA_SQLServer_ServerPrincipalsView](views/overview.md#sa_sqlserver_serverprincipalsview)
  - [SA_SQLServer_SqlLoginsView](views/overview.md#sa_sqlserver_sqlloginsview)
  - [SA_SQLServer_DatabasePrincipalsView](views/overview.md#sa_sqlserver_databaseprincipalsview)
  - [SA_SQLServer_PermissionsView](views/overview.md#sa_sqlserver_permissionsview)
  - [SA_SQLServer_RoleMembersView](views/overview.md#sa_sqlserver_rolemembersview)
  - [SA_SQLServer_SqlDatabaseView](views/overview.md#sa_sqlserver_sqldatabaseview)
  - [SA_SQLServer_DailyLogonsView](views/overview.md#sa_sqlserver_dailylogonsview)
  - [SA_SQLServer_SDD_ResourcesView](views/overview.md#sa_sqlserver_sdd_resourcesview)
  - [SA_SQLServer_SDD_MatchesView](views/overview.md#sa_sqlserver_sdd_matchesview)
  - [SA_SQLServer_SDD_MatchHitsView](views/overview.md#sa_sqlserver_sdd_matchhitsview)
  - [SA_SQLServer_SensitiveDataPermissionsView](views/overview.md#sa_sqlserver_sensitivedatapermissionsview)
  - [SA_SQLServer_SDD_MatchHits_SubjectProfileView](views/overview.md#sa_sqlserver_sdd_matchhits_subjectprofileview)
  - [SA_SQLServer_SensitiveDataFullPermissionsView](views/overview.md#sa_sqlserver_sensitivedatafullpermissionsview)
  - [SA_SQLServer_EffectiveRoleMembershipView](views/overview.md#sa_sqlserver_effectiverolemembershipview)
  - [SA_SQL_SDD_MatchesView](views/overview.md#sa_sql_sdd_matchesview)
  - [SA_SQL_SDD_MatchHitsView](views/overview.md#sa_sql_sdd_matchhitsview)
  
### [Enumeration & Lookup Values Reference](enumeration/overview.md)
  - [Server Principal Types](enumeration/overview.md#server-principal-types-sa_sqlserver_serverprincipaltypes)
  - [Database Principal Types](enumeration/overview.md#database-principal-types-sa_sqlserver_databaseprincipaltypes)
  - [Permission States](enumeration/overview.md#permission-states-sa_sqlserver_permissionstates)
  - [Permission Classes](enumeration/overview.md#permission-classes-sa_sqlserver_permissionclasses)
  - [Permission Names](enumeration/overview.md#permission-names-sa_sqlserver_permissionnames)
  - [Audit Class Types](enumeration/overview.md#audit-class-types-sa_sqlserver_auditclasstype)
  - [Audit Actions (Common)](enumeration/overview.md#audit-actions-common-sa_sqlserver_auditactions)
  - [SDD Resource Types](enumeration/overview.md#sdd-resource-types-sa_sqlserver_sdd_resourcetypes)
  - [SDD Match Location Bitmask](enumeration/overview.md#sdd-match-location-bitmask)
  - [Membership Source](enumeration/overview.md#membership-source-sa_sqlserver_effectiverolemembershipmembership_source)
  - [Database Type](enumeration/overview.md#database-type-sa_sqlserver_effectiverolemembershipdatabase_type)

### [Table Relationship Diagrams (ERD)](erd/overview.md)
  - [High-Level Overview](erd/overview.md#high-level-overview)
  - [Instance & Database Hierarchy](erd/overview.md#instance--database-hierarchy)
  - [Principals & Permissions](erd/overview.md#principals--permissions)
  - [Audit Events](erd/overview.md#audit-events)
  - [Sensitive Data Discovery (SDD)](erd/overview.md#sensitive-data-discovery-sdd)

### [Index Reference](indexreference/overview.md)
  - [Complete Index List](indexreference/overview.md#complete-index-listing)

### [Scalar Functions & Stored Procedures](functions/overview.md)
  - [SA_SQL_GetFriendlyName](functions/overview.md#sa_sql_getfriendlyname-scalar-function)
  - [SA_SQLServer_BinarySIDToString](functions/overview.md#sa_sqlserver_binarysidtostring-scalar-function)
  - [SA_SQLServer_GetAuditFileComparisonString](functions/overview.md#sa_sqlserver_getauditfilecomparisonstring-scalar-function)
  - [SA_SQLServer_CreateOrUpdateSDDResource](functions/overview.md#sa_sqlserver_createorupdatesddresource-stored-procedure)

