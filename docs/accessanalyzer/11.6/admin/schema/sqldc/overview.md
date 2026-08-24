# SQL Data Collector Schema

## Overview

This is a comprehensive schema documentation for the **NAA 11.6 SQL Server Data Collector**. The SQL Server Data Collector is a component of the NAA 11.6 platform that discovers, audits, and reports on SQL Server instances, databases, principals, permissions, audit events, and sensitive data across the enterprise.

## Schema Categories

The tables fall into two categories:

1. **Core Data Collection Tables** (44 tables) — Normalized tables that data collectors populate directly. These contain raw audit data with full foreign key relationships. Includes shared infrastructure tables (`SA_SQL_Instances`, `SA_SQL_Patches`) used across all database collector modules.

2. **Reporting / Summary Tables** (59 tables) — Denormalized, report-ready tables that analysis jobs populate. These use human-readable column names (e.g., `"Instance"`, `"Database"`, `"Permission"`).

---

### [Core Data Collection Tables](coretables/overview.md)
  - [SA_SQLServer_Instances](coretables/overview.md#sasqlserverinstances)
  - [SA_SQLServer_Databases](coretables/overview.md#sasqlserverdatabases)
  - [SA_SQLServer_EventDatabases](coretables/overview.md#sasqlservereventdatabases)
  - [SA_SQLServer_Schemas](coretables/overview.md#sasqlserverschemas)
  - [SA_SQLServer_Objects](coretables/overview.md#sasqlserverobjects)
  - [SA_SQLServer_Columns](coretables/overview.md#sasqlservercolumns)
  - [SA_SQLServer_ServerPrincipalTypes](coretables/overview.md#sasqlserverserverprincipaltypes)
  - [SA_SQLServer_DatabasePrincipalTypes](coretables/overview.md#sasqlserverdatabaseprincipaltypes)
  - [SA_SQLServer_ServerPrincipals](coretables/overview.md#sasqlserverserverprincipals)
  - [SA_SQLServer_DatabasePrincipals](coretables/overview.md#sasqlserverdatabaseprincipals)
  - [SA_SQLServer_EventServerPrincipals](coretables/overview.md#sasqlservereventserverprincipals)
  - [SA_SQLServer_EventDatabasePrincipals](coretables/overview.md#sasqlservereventdatabaseprincipals)
  - [SA_SQLServer_SqlLogins](coretables/overview.md#sasqlserversqllogins)
  - [SA_SQLServer_ServerRoleMembers](coretables/overview.md#sasqlserverserverrolemembers)
  - [SA_SQLServer_DatabaseRoleMembers](coretables/overview.md#sasqlserverdatabaserolemembers)
  - [SA_SQLServer_EffectiveRoleMembership](coretables/overview.md#sasqlservereffectiverolemembership)
  - [SA_SQLServer_PermissionNames](coretables/overview.md#sasqlserverpermissionnames)
  - [SA_SQLServer_PermissionClasses](coretables/overview.md#sasqlserverpermissionclasses)
  - [SA_SQLServer_PermissionStates](coretables/overview.md#sasqlserverpermissionstates)
  - [SA_SQLServer_ServerPermissions](coretables/overview.md#sasqlserverserverpermissions)
  - [SA_SQLServer_DatabasePermissions](coretables/overview.md#sasqlserverdatabasepermissions)
  - [SA_SQLServer_AsymmetricKeys](coretables/overview.md#sasqlserverasymmetrickeys)
  - [SA_SQLServer_AuditInformation](coretables/overview.md#sasqlserverauditinformation)
  - [SA_SQLServer_AuditFiles](coretables/overview.md#sasqlserverauditfiles)
  - [SA_SQLServer_AuditClassType](coretables/overview.md#sasqlserverauditclasstype)
  - [SA_SQLServer_AuditActions](coretables/overview.md#sasqlserverauditactions)
  - [SA_SQLServer_Statements](coretables/overview.md#sasqlserverstatements)
  - [SA_SQLServer_AdditionalInformation](coretables/overview.md#sasqlserveradditionalinformation)
  - [SA_SQLServer_UserEvents](coretables/overview.md#sasqlserveruserevents)
  - [SA_SQLServer_Events](coretables/overview.md#sasqlserverevents)
  - [SA_SQLServer_ExpressionDependencies](coretables/overview.md#sasqlserverexpressiondependencies)
  - [SA_SQLServer_SDD_Criteria](coretables/overview.md#sasqlserversddcriteria)
  - [SA_SQLServer_SDD_InstanceCriteria](coretables/overview.md#sasqlserversddinstancecriteria)
  - [SA_SQLServer_SDD_DatabaseCriteria](coretables/overview.md#sasqlserversdddatabasecriteria)
  - [SA_SQLServer_SDD_ResourceTypes](coretables/overview.md#sasqlserversddresourcetypes)
  - [SA_SQLServer_SDD_Resources](coretables/overview.md#sasqlserversddresources)
  - [SA_SQLServer_SDD_Matches](coretables/overview.md#sasqlserversddmatches)
  - [SA_SQLServer_SDD_MatchHits](coretables/overview.md#sasqlserversddmatchhits)
  - [SA_SQLServer_SDD_MatchHits_SubjectProfile](coretables/overview.md#sasqlserversddmatchhitssubjectprofile)
  - [SA_SQLServer_SDD_ScanHistory](coretables/overview.md#sasqlserversddscanhistory)
  - [SA_SQLServer_SDD_SupportedDataTypes](coretables/overview.md#sasqlserversddsupporteddatatypes)
  - [SA_SQL_Patches](coretables/overview.md#sasqlpatches)
  - [SA_SQL_Instances](coretables/overview.md#sasqlinstances)
  - [SA_SQL_PasswordIssues_LIST](coretables/overview.md#sasqlpasswordissueslist)

### [Reporting Tables](reportingtables/overview.md)
#### [Activity](reportingtables/overview.md#activity)
  - [SA_SQLServer_Activity_Details](reportingtables/overview.md#sasqlserveractivitydetails)
  - [SA_SQLServer_Activity_UserDatabaseSummary](reportingtables/overview.md#sasqlserveractivityuserdatabasesummary)
  - [SA_SQLServer_Activity_UserInstanceSummary](reportingtables/overview.md#sasqlserveractivityuserinstancesummary)

#### [Authentication](reportingtables/overview.md#authentication)
  - [SA_SQLServer_Authentication_Details](reportingtables/overview.md#sasqlserverauthenticationdetails)
  - [SA_SQLServer_Authentication_Summary](reportingtables/overview.md#sasqlserverauthenticationsummary)

#### [Control Server](reportingtables/overview.md#control-server)
  - [SA_SQLServer_ControlServer_Details](reportingtables/overview.md#sasqlservercontrolserverdetails)
  - [SA_SQLServer_ControlServer_DomainUsers](reportingtables/overview.md#sasqlservercontrolserverdomainusers)
  - [SA_SQLServer_ControlServer_InstanceSummary](reportingtables/overview.md#sasqlservercontrolserverinstancesummary)

#### [Database Principals](reportingtables/overview.md#database-principals)
  - [SA_SQLServer_DatabasePrincipals_Details](reportingtables/overview.md#sasqlserverdatabaseprincipalsdetails)
  - [SA_SQLServer_DatabasePrincipals_InstanceSummary](reportingtables/overview.md#sasqlserverdatabaseprincipalsinstancesummary)

#### [Database Size](reportingtables/overview.md#database-size)
  - [SA_SQLServer_DatabaseSize_Details](reportingtables/overview.md#sasqlserverdatabasesizedetails)
  - [SA_SQLServer_DatabaseSize_Summary](reportingtables/overview.md#sasqlserverdatabasesizesummary)

#### [Direct Permissions](reportingtables/overview.md#direct-permissions)
  - [SA_SQLServer_DirectPermissions_DatabaseDetails](reportingtables/overview.md#sasqlserverdirectpermissionsdatabasedetails)
  - [SA_SQLServer_DirectPermissions_DatabaseSummary](reportingtables/overview.md#sasqlserverdirectpermissionsdatabasesummary)
  - [SA_SQLServer_DirectPermissions_SchemaDetails](reportingtables/overview.md#sasqlserverdirectpermissionsschemadetails)
  - [SA_SQLServer_DirectPermissions_SchemaSummary](reportingtables/overview.md#sasqlserverdirectpermissionsschemasummary)
  - [SA_SQLServer_DirectPermissions_ServerDetails](reportingtables/overview.md#sasqlserverdirectpermissionsserverdetails)
  - [SA_SQLServer_DirectPermissions_ServerSummary](reportingtables/overview.md#sasqlserverdirectpermissionsserversummary)

#### [Domain User Permissions](reportingtables/overview.md#domain-user-permissions)
  - [SA_SQLServer_DomainUserPermissions_Details](reportingtables/overview.md#sasqlserverdomainuserpermissionsdetails)
  - [SA_SQLServer_DomainUserPermissions_Summary](reportingtables/overview.md#sasqlserverdomainuserpermissionssummary)

#### [Effective Role Members](reportingtables/overview.md#effective-role-members)
  - [SA_SQLServer_EffectiveRoleMember_Summary](reportingtables/overview.md#sasqlservereffectiverolemembersummary)

#### [Instance Summary](reportingtables/overview.md#instance-summary)
  - [SA_SQLServer_InstanceSummary](reportingtables/overview.md#sasqlserverinstancesummary)

#### [Logons](reportingtables/overview.md#logons)
  - [SA_SQLServer_Logons_Details](reportingtables/overview.md#sasqlserverlogonsdetails)
  - [SA_SQLServer_Logons_Summary](reportingtables/overview.md#sasqlserverlogonssummary)

#### [Password Issues](reportingtables/overview.md#password-issues)
  - [SA_SQLServer_PasswordIssues_Details](reportingtables/overview.md#sasqlserverpasswordissuesdetails)
  - [SA_SQLServer_PasswordIssues_Summary](reportingtables/overview.md#sasqlserverpasswordissuessummary)

#### [Permission Changes](reportingtables/overview.md#permission-changes)
  - [SA_SQLServer_PermissionChanges_Details](reportingtables/overview.md#sasqlserverpermissionchangesdetails)
  - [SA_SQLServer_PermissionChanges_InstanceSummary](reportingtables/overview.md#sasqlserverpermissionchangesinstancesummary)

#### [Public Permissions](reportingtables/overview.md#public-permissions)
  - [SA_SQLServer_PublicPermissions_Details](reportingtables/overview.md#sasqlserverpublicpermissionsdetails)
  - [SA_SQLServer_PublicPermissions_DatabaseSummary](reportingtables/overview.md#sasqlserverpublicpermissionsdatabasesummary)
  - [SA_SQLServer_PublicPermissions_InstanceSummary](reportingtables/overview.md#sasqlserverpublicpermissionsinstancesummary)
  - [SA_SQLServer_PublicPermissions_NonDefault](reportingtables/overview.md#sasqlserverpublicpermissionsnondefault)

#### [Role Members](reportingtables/overview.md#role-members)
  - [SA_SQLServer_RoleMember_Details](reportingtables/overview.md#sasqlserverrolememberdetails)
  - [SA_SQLServer_RoleMember_Summary](reportingtables/overview.md#sasqlserverrolemembersummary)

#### [Security Assessment](reportingtables/overview.md#security-assessment)
  - [SA_SQLServer_SecurityAssessment_Results](reportingtables/overview.md#sasqlserversecurityassessmentresults)
  - [SA_SQLServer_SecurityAssessment_CategorySummary](reportingtables/overview.md#sasqlserversecurityassessmentcategorysummary)

#### [Sensitive Data](reportingtables/overview.md#sensitive-data)
  - [SA_SQLServer_SensitiveData_Details](reportingtables/overview.md#sasqlserversensitivedatadetails)
  - [SA_SQLServer_SensitiveData_DatabaseSummary](reportingtables/overview.md#sasqlserversensitivedatadatabasesummary)
  - [SA_SQLServer_SensitiveData_EnterpriseSummary](reportingtables/overview.md#sasqlserversensitivedataenterprisesummary)

#### [Sensitive Data Activity](reportingtables/overview.md#sensitive-data-activity)
  - [SA_SQLServer_SensitiveDataActivity_Details](reportingtables/overview.md#sasqlserversensitivedataactivitydetails)
  - [SA_SQLServer_SensitiveDataActivity_UserSummary](reportingtables/overview.md#sasqlserversensitivedataactivityusersummary)

#### [Sensitive Data Permissions](reportingtables/overview.md#sensitive-data-permissions)
  - [SA_SQLServer_SensitiveDataPermissions_Details](reportingtables/overview.md#sasqlserversensitivedatapermissionsdetails)
  - [SA_SQLServer_SensitiveDataPermissions_DatabaseSummary](reportingtables/overview.md#sasqlserversensitivedatapermissionsdatabasesummary)

#### [Server Permissions](reportingtables/overview.md#server-permissions)
  - [SA_SQLServer_ServerPermission_Details](reportingtables/overview.md#sasqlserverserverpermissiondetails)
  - [SA_SQLServer_ServerPermission_InstanceSummary](reportingtables/overview.md#sasqlserverserverpermissioninstancesummary)

#### [Server Principals](reportingtables/overview.md#server-principals)
  - [SA_SQLServer_ServerPrincipals_Details](reportingtables/overview.md#sasqlserverserverprincipalsdetails)
  - [SA_SQLServer_ServerPrincipals_InstanceSummary](reportingtables/overview.md#sasqlserverserverprincipalsinstancesummary)

#### [SysAdmins](reportingtables/overview.md#sysadmins)
  - [SA_SQLServer_SysAdmins_Details](reportingtables/overview.md#sasqlserversysadminsdetails)
  - [SA_SQLServer_SysAdmins_DomainUsers](reportingtables/overview.md#sasqlserversysadminsdomainusers)
  - [SA_SQLServer_SysAdmins_InstanceSummary](reportingtables/overview.md#sasqlserversysadminsinstancesummary)

#### [Unusual Activity](reportingtables/overview.md#unusual-activity)
  - [SA_SQLServer_UnusualHourlyUserActivity](reportingtables/overview.md#sasqlserverunusualhourlyuseractivity)
  - [SA_SQLServer_UnusualActivitySummary](reportingtables/overview.md#sasqlserverunusualactivitysummary)

#### [User Logins](reportingtables/overview.md#user-logins)
  - [SA_SQLServer_UserLogins_Details](reportingtables/overview.md#sasqlserveruserloginsdetails)
  - [SA_SQLServer_UserLogins_Summary](reportingtables/overview.md#sasqlserveruserloginssummary)

#### [Best Practices](reportingtables/overview.md#best-practices)
  - [SA_SQL_BestPractices](reportingtables/overview.md#sasqlbestpractices)
  - [SA_SQL_BestPractices_Summary](reportingtables/overview.md#sasqlbestpracticessummary)

#### [CMD Shell](reportingtables/overview.md#cmd-shell)
  - [SA_SQL_CMDShell_Status](reportingtables/overview.md#sasqlcmdshellstatus)

#### [Linked Servers](reportingtables/overview.md#linked-servers)
  - [SA_SQL_LinkedServer_Details](reportingtables/overview.md#sasqllinkedserverdetails)
  - [SA_SQL_LinkedServer_Summary](reportingtables/overview.md#sasqllinkedserversummary)
  
### [Views](views/overview.md)
  - [SA_SQLServer_FullEventsView](views/overview.md#sasqlserverfulleventsview)
  - [SA_SQLServer_ServerPrincipalsView](views/overview.md#sasqlserverserverprincipalsview)
  - [SA_SQLServer_SqlLoginsView](views/overview.md#sasqlserversqlloginsview)
  - [SA_SQLServer_DatabasePrincipalsView](views/overview.md#sasqlserverdatabaseprincipalsview)
  - [SA_SQLServer_PermissionsView](views/overview.md#sasqlserverpermissionsview)
  - [SA_SQLServer_RoleMembersView](views/overview.md#sasqlserverrolemembersview)
  - [SA_SQLServer_SqlDatabaseView](views/overview.md#sasqlserversqldatabaseview)
  - [SA_SQLServer_DailyLogonsView](views/overview.md#sasqlserverdailylogonsview)
  - [SA_SQLServer_SDD_ResourcesView](views/overview.md#sasqlserversddresourcesview)
  - [SA_SQLServer_SDD_MatchesView](views/overview.md#sasqlserversddmatchesview)
  - [SA_SQLServer_SDD_MatchHitsView](views/overview.md#sasqlserversddmatchhitsview)
  - [SA_SQLServer_SensitiveDataPermissionsView](views/overview.md#sasqlserversensitivedatapermissionsview)
  - [SA_SQLServer_SDD_MatchHits_SubjectProfileView](views/overview.md#sasqlserversddmatchhitssubjectprofileview)
  - [SA_SQLServer_SensitiveDataFullPermissionsView](views/overview.md#sasqlserversensitivedatafullpermissionsview)
  - [SA_SQLServer_EffectiveRoleMembershipView](views/overview.md#sasqlservereffectiverolemembershipview)
  - [SA_SQL_SDD_MatchesView](views/overview.md#sasqlsddmatchesview)
  - [SA_SQL_SDD_MatchHitsView](views/overview.md#sasqlsddmatchhitsview)
  
### [Enumeration & Lookup Values Reference](enumeration/overview.md)
  - [Server Principal Types](enumeration/overview.md#server-principal-types-sasqlserverserverprincipaltypes)
  - [Database Principal Types](enumeration/overview.md#database-principal-types-sasqlserverdatabaseprincipaltypes)
  - [Permission States](enumeration/overview.md#permission-states-sasqlserverpermissionstates)
  - [Permission Classes](enumeration/overview.md#permission-classes-sasqlserverpermissionclasses)
  - [Permission Names](enumeration/overview.md#permission-names-sasqlserverpermissionnames)
  - [Audit Class Types](enumeration/overview.md#audit-class-types-sasqlserverauditclasstype)
  - [Audit Actions (Common)](enumeration/overview.md#audit-actions-common-sasqlserverauditactions)
  - [SDD Resource Types](enumeration/overview.md#sdd-resource-types-sasqlserversddresourcetypes)
  - [SDD Match Location Bitmask](enumeration/overview.md#sdd-match-location-bitmask)
  - [Membership Source](enumeration/overview.md#membership-source-sasqlservereffectiverolemembershipmembershipsource)
  - [Database Type](enumeration/overview.md#database-type-sasqlservereffectiverolemembershipdatabasetype)

### [Table Relationship Diagrams (ERD)](erd/overview.md)
  - [High-Level Overview](erd/overview.md#high-level-overview)
  - [Instance & Database Hierarchy](erd/overview.md#instance--database-hierarchy)
  - [Principals & Permissions](erd/overview.md#principals--permissions)
  - [Audit Events](erd/overview.md#audit-events)
  - [Sensitive Data Discovery (SDD)](erd/overview.md#sensitive-data-discovery-sdd)

### [Index Reference](indexreference/overview.md)
  - [Complete Index List](indexreference/overview.md#complete-index-listing)

### [Scalar Functions & Stored Procedures](functions/overview.md)
  - [SA_SQL_GetFriendlyName](functions/overview.md#sasqlgetfriendlyname-scalar-function)
  - [SA_SQLServer_BinarySIDToString](functions/overview.md#sasqlserverbinarysidtostring-scalar-function)
  - [SA_SQLServer_GetAuditFileComparisonString](functions/overview.md#sasqlservergetauditfilecomparisonstring-scalar-function)
  - [SA_SQLServer_CreateOrUpdateSDDResource](functions/overview.md#sasqlservercreateorupdatesddresource-stored-procedure)

