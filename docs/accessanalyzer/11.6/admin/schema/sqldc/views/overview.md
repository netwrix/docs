# Views

## SA_SQLServer_FullEventsView

**Description:** Denormalizes the `SA_SQLServer_Events` fact table by LEFT JOINing all dimension tables. Provides a single, flat view of audit events with human-readable names instead of FK IDs. Resolves action names via a distinct subquery on AuditActions.

**Source Tables:** `SA_SQLServer_Events`, `SA_SQLServer_AuditFiles`, `SA_SQLServer_AuditInformation`, `SA_SQLServer_Instances`, `SA_SQL_Instances`, `SA_SQLServer_EventDatabases`, `SA_SQLServer_Databases`, `SA_SQLServer_EventServerPrincipals`, `SA_SQLServer_EventDatabasePrincipals`, `SA_SQLServer_Statements`, `SA_SQLServer_AdditionalInformation`, `SA_SQLServer_UserEvents`, `SA_SQLServer_AuditClassType`, `SA_SQLServer_AuditActions`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| Instance | int | | Yes | SA_SQLServer_Events.instance_id | FK to the SQL Server instance |
| Database | int | | Yes | SA_SQLServer_Events.database_id | FK to the database where the event occurred |
| event_time | datetime2 | | No | SA_SQLServer_Events.event_time | Timestamp of the audit event |
| sequence_number | int | | No | SA_SQLServer_Events.sequence_number | Sequence number within the audit record |
| action_id | varchar | 4 | Yes | SA_SQLServer_Events.action_id | Short code identifying the audit action (e.g., LGIS, SL) |
| action_name | nvarchar | 128 | Yes | SA_SQLServer_AuditActions.name | Human-readable name of the audit action |
| succeeded | bit | | No | SA_SQLServer_Events.succeeded | Whether the audited action succeeded |
| session_id | smallint | | No | SA_SQLServer_Events.session_id | SQL Server session ID |
| object_id | int | | Yes | SA_SQLServer_Events.object_id | ID of the object targeted by the action |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_Events.object_name | Name of the object targeted by the action |
| class_type | varchar | 2 | Yes | SA_SQLServer_AuditClassType.class_type | Two-character audit class type code |
| class_type_desc | nvarchar | 120 | Yes | SA_SQLServer_AuditClassType.class_type_desc | Description of the audit class type |
| schema_name | nvarchar | 128 | Yes | SA_SQLServer_Events.schema_name | Schema containing the target object |
| audit_file_offset | bigint | | No | SA_SQLServer_Events.audit_file_offset | Byte offset within the audit file |
| audit_schema_version | int | | Yes | SA_SQLServer_AuditInformation.audit_schema_version | Version of the audit schema |
| sequence_group_id | varbinary | 85 | Yes | SA_SQLServer_AuditInformation.sequence_group_id | Identifier for the sequence group |
| file_id | int | | Yes | SA_SQLServer_AuditFiles.file_id | FK to the audit file |
| client_ip | nvarchar | 128 | Yes | SA_SQLServer_Events.client_ip | IP address of the connecting client |
| application_name | nvarchar | 128 | Yes | SA_SQLServer_Events.application_name | Name of the client application |
| audit_file_path | nvarchar | 1024 | Yes | SA_SQLServer_AuditFiles.audit_file_path | File system path of the audit file |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_Databases.database_name | Name of the database |
| database_id | int | | Yes | SA_SQLServer_EventDatabases.database_id | Database ID from the event |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database (on-prem vs. Azure) |
| server_principal_id | int | | Yes | SA_SQLServer_EventServerPrincipals.server_principal_id | ID of the server principal who performed the action |
| server_principal_name | nvarchar | 128 | Yes | SA_SQLServer_EventServerPrincipals.server_principal_name | Name of the server principal |
| server_principal_sid | varbinary | 85 | Yes | SA_SQLServer_EventServerPrincipals.server_principal_sid | SID of the server principal |
| session_principal_id | int | | Yes | SA_SQLServer_EventServerPrincipals.session_principal_id | ID of the session-level principal |
| session_principal_name | nvarchar | 128 | Yes | SA_SQLServer_EventServerPrincipals.session_principal_name | Name of the session-level principal |
| session_principal_sid | varbinary | 85 | Yes | SA_SQLServer_EventServerPrincipals.session_principal_sid | SID of the session-level principal |
| database_principal_id | int | | Yes | SA_SQLServer_EventDatabasePrincipals.database_principal_id | ID of the database principal involved |
| database_principal_name | nvarchar | 128 | Yes | SA_SQLServer_EventDatabasePrincipals.database_principal_name | Name of the database principal |
| target_server_principal_id | int | | Yes | SA_SQLServer_EventServerPrincipals.target_server_principal_id | ID of the target server principal |
| target_server_principal_name | nvarchar | 128 | Yes | SA_SQLServer_EventServerPrincipals.target_server_principal_name | Name of the target server principal |
| target_server_principal_sid | varbinary | 85 | Yes | SA_SQLServer_EventServerPrincipals.target_server_principal_sid | SID of the target server principal |
| target_database_principal_id | int | | Yes | SA_SQLServer_EventDatabasePrincipals.target_database_principal_id | ID of the target database principal |
| target_database_principal_name | nvarchar | 128 | Yes | SA_SQLServer_EventDatabasePrincipals.target_database_principal_name | Name of the target database principal |
| permission_bitmask | varbinary | 16 | Yes | SA_SQLServer_Events.permission_bitmask | Bitmask of permissions relevant to the action |
| is_column_permission | bit | | Yes | SA_SQLServer_Events.is_column_permission | Whether the permission applies at the column level |
| statement | nvarchar | 4000 | Yes | SA_SQLServer_Statements.statement | The SQL statement that triggered the event |
| additional_information | nvarchar | 4000 | Yes | SA_SQLServer_AdditionalInformation.additional_information | Additional XML information about the event |
| user_defined_event_id | smallint | | Yes | SA_SQLServer_UserEvents.user_defined_event_id | ID for user-defined audit events |
| user_defined_information | nvarchar | 4000 | Yes | SA_SQLServer_UserEvents.user_defined_information | Custom information for user-defined events |

**Logic:** LEFT JOINs Events to all dimension tables (AuditFiles, AuditInformation, Instances, EventDatabases, Databases, EventServerPrincipals, EventDatabasePrincipals, Statements, AdditionalInformation, UserEvents, AuditClassType) using FK columns. Resolves action names via a `SELECT DISTINCT` subquery on AuditActions. Joins to SA_SQL_Instances to obtain `database_usage_mode`.

---

## SA_SQLServer_ServerPrincipalsView

**Description:** Enriches `SA_SQLServer_ServerPrincipals` with type descriptions, instance names, default database names, and SID-to-string conversion via `SA_SQLServer_BinarySIDToString()`. Filters to active databases where `sa_delete_date IS NULL`.

**Source Tables:** `SA_SQLServer_ServerPrincipals`, `SA_SQLServer_ServerPrincipalTypes`, `SA_SQLServer_Instances`, `SA_SQL_Instances`, `SA_SQLServer_Databases`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| server_principal_id | int | | No | SA_SQLServer_ServerPrincipals.id | Surrogate PK for the server principal record |
| instance_id | int | | No | SA_SQLServer_ServerPrincipals.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| principal_id | int | | Yes | SA_SQLServer_ServerPrincipals.principal_id | SQL Server principal_id from sys.server_principals |
| principal_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipals.principal_name | Login or principal name |
| principal_sid | varbinary | 85 | Yes | SA_SQLServer_ServerPrincipals.principal_sid | Binary SID of the principal |
| principal_sid_string | varchar | 100 | Yes | UDF: SA_SQLServer_BinarySIDToString | Human-readable SID string (S-1-...) |
| type | nchar | 1 | Yes | SA_SQLServer_ServerPrincipals.type | Single-character type code (S, U, G, R, C, K, E, X) |
| type_desc | nvarchar | 120 | Yes | SA_SQLServer_ServerPrincipalTypes.type_desc | Friendly type description (e.g., SQL_LOGIN, WINDOWS_LOGIN) |
| is_disabled | bit | | Yes | SA_SQLServer_ServerPrincipals.is_disabled | Whether the login is disabled |
| create_date | datetime | | Yes | SA_SQLServer_ServerPrincipals.create_date | Date the principal was created |
| modify_date | datetime | | Yes | SA_SQLServer_ServerPrincipals.modify_date | Date the principal was last modified |
| default_database_id | int | | Yes | SA_SQLServer_ServerPrincipals.default_database_id | FK to the default database |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database (on-prem vs. Azure) |
| default_database | nvarchar | 128 | Yes | SA_SQLServer_Databases.database_name | Name of the default database |
| default_language_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipals.default_language_name | Default language for the login |
| credential_id | int | | Yes | SA_SQLServer_ServerPrincipals.credential_id | Associated credential ID |
| is_deleted | bit | | No | SA_SQLServer_ServerPrincipals.is_deleted | Soft-delete flag for the principal |

**Logic:** JOINs ServerPrincipals to ServerPrincipalTypes for type descriptions and to Instances/SA_SQL_Instances for instance names and usage mode. LEFT JOINs to Databases to resolve default database name. Uses `SA_SQLServer_BinarySIDToString()` UDF to convert binary SID to human-readable `S-1-...` format. Filters where `sa_delete_date IS NULL` on the Databases table.

---

## SA_SQLServer_SqlLoginsView

**Description:** Combines SQL Login-specific properties (password policy, expiration, lock status) with the full server principal view via INNER JOIN.

**Source Tables:** `SA_SQLServer_SqlLogins`, `SA_SQLServer_ServerPrincipalsView`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| server_principal_id | int | | No | SA_SQLServer_ServerPrincipalsView.server_principal_id | Surrogate PK from the server principals view |
| instance_id | int | | No | SA_SQLServer_ServerPrincipalsView.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipalsView.instance_name | Name of the SQL Server instance |
| principal_id | int | | Yes | SA_SQLServer_ServerPrincipalsView.principal_id | SQL Server principal_id |
| principal_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipalsView.principal_name | Login name |
| principal_sid | varbinary | 85 | Yes | SA_SQLServer_ServerPrincipalsView.principal_sid | Binary SID of the principal |
| principal_sid_string | varchar | 100 | Yes | SA_SQLServer_ServerPrincipalsView.principal_sid_string | Human-readable SID string |
| type | nchar | 1 | Yes | SA_SQLServer_ServerPrincipalsView.type | Single-character type code |
| type_desc | nvarchar | 120 | Yes | SA_SQLServer_ServerPrincipalsView.type_desc | Friendly type description |
| is_disabled | bit | | Yes | SA_SQLServer_ServerPrincipalsView.is_disabled | Whether the login is disabled |
| create_date | datetime | | Yes | SA_SQLServer_ServerPrincipalsView.create_date | Date the principal was created |
| modify_date | datetime | | Yes | SA_SQLServer_ServerPrincipalsView.modify_date | Date the principal was last modified |
| default_database_id | int | | Yes | SA_SQLServer_ServerPrincipalsView.default_database_id | FK to the default database |
| database_usage_mode | int | | Yes | SA_SQLServer_ServerPrincipalsView.database_usage_mode | Usage mode of the database |
| default_database | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipalsView.default_database | Name of the default database |
| default_language_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipalsView.default_language_name | Default language for the login |
| credential_id | int | | Yes | SA_SQLServer_ServerPrincipalsView.credential_id | Associated credential ID |
| is_deleted | bit | | No | SA_SQLServer_ServerPrincipalsView.is_deleted | Soft-delete flag |
| sqllogin_id | int | | No | SA_SQLServer_SqlLogins.id | Surrogate PK for the SQL login record |
| is_policy_checked | bit | | No | SA_SQLServer_SqlLogins.is_policy_checked | Whether password policy is enforced |
| is_expiration_checked | bit | | No | SA_SQLServer_SqlLogins.is_expiration_checked | Whether password expiration is enforced |
| password_hash | varbinary | 256 | Yes | SA_SQLServer_SqlLogins.password_hash | Hashed password value |
| is_locked | bit | | Yes | SA_SQLServer_SqlLogins.is_locked | Whether the account is currently locked out |
| is_expired | bit | | Yes | SA_SQLServer_SqlLogins.is_expired | Whether the password has expired |
| is_must_change | bit | | Yes | SA_SQLServer_SqlLogins.is_must_change | Whether the password must be changed at next login |
| password_hash_algorithm | int | | Yes | SA_SQLServer_SqlLogins.password_hash_algorithm | Algorithm used to hash the password |

**Logic:** INNER JOINs SqlLogins to ServerPrincipalsView on the server_principal FK, combining login-specific properties with all inherited principal metadata.

---

## SA_SQLServer_DatabasePrincipalsView

**Description:** Enriches `SA_SQLServer_DatabasePrincipals` with instance, database, type, schema, and owning principal information. Uses `SA_SQLServer_BinarySIDToString()` UDF. Filters to active databases where `sa_delete_date IS NULL`.

**Source Tables:** `SA_SQLServer_DatabasePrincipals`, `SA_SQLServer_Databases`, `SA_SQLServer_Instances`, `SA_SQL_Instances`, `SA_SQLServer_DatabasePrincipalTypes`, `SA_SQLServer_Schemas`, `SA_SQLServer_ServerPrincipals`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| id | int | | No | SA_SQLServer_DatabasePrincipals.id | Surrogate PK for the database principal record |
| instance_id | int | | Yes | SA_SQLServer_Databases.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| database_id | int | | No | SA_SQLServer_DatabasePrincipals.database_id | FK to the database |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_Databases.database_name | Name of the database |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database (on-prem vs. Azure) |
| principal_id | int | | Yes | SA_SQLServer_DatabasePrincipals.principal_id | SQL Server principal_id from sys.database_principals |
| principal_name | nvarchar | 128 | Yes | SA_SQLServer_DatabasePrincipals.principal_name | Database principal name |
| principal_sid | varbinary | 85 | Yes | SA_SQLServer_DatabasePrincipals.principal_sid | Binary SID of the database principal |
| principal_sid_string | varchar | 100 | Yes | UDF: SA_SQLServer_BinarySIDToString | Human-readable SID string (S-1-...) |
| type | nchar | 1 | Yes | SA_SQLServer_DatabasePrincipals.type | Single-character type code |
| type_desc | nvarchar | 120 | Yes | SA_SQLServer_DatabasePrincipalTypes.type_desc | Friendly type description (e.g., SQL_USER, DATABASE_ROLE) |
| default_schema_id | int | | Yes | SA_SQLServer_DatabasePrincipals.default_schema_id | FK to the default schema |
| default_schema | nvarchar | 128 | Yes | SA_SQLServer_Schemas.schema_name | Name of the default schema |
| create_date | datetime | | Yes | SA_SQLServer_DatabasePrincipals.create_date | Date the principal was created |
| modify_date | datetime | | Yes | SA_SQLServer_DatabasePrincipals.modify_date | Date the principal was last modified |
| owning_principal_id | int | | Yes | SA_SQLServer_DatabasePrincipals.owning_principal_id | FK to the owning server principal |
| owning_principal_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipals.principal_name | Name of the owning server principal |
| is_fixed_role | bit | | Yes | SA_SQLServer_DatabasePrincipals.is_fixed_role | Whether this is a fixed database role |
| authentication_type | int | | Yes | SA_SQLServer_DatabasePrincipals.authentication_type | Authentication type code |
| authentication_type_desc | nvarchar | 60 | Yes | SA_SQLServer_DatabasePrincipals.authentication_type_desc | Authentication type description |
| is_deleted | bit | | No | SA_SQLServer_DatabasePrincipals.is_deleted | Soft-delete flag for the principal |

**Logic:** LEFT JOINs to Databases, Instances, SA_SQL_Instances, DatabasePrincipalTypes, Schemas, and ServerPrincipals to resolve all lookup values. Converts SID to string using `SA_SQLServer_BinarySIDToString()`. Resolves owning principal name from ServerPrincipals. Filters `sa_delete_date IS NULL` on the Databases table.

---

## SA_SQLServer_PermissionsView

**Description:** Unified view combining both server-level and database-level permissions into a single result set via UNION. Resolves grantee/grantor names, permission names, and target objects. CASE expressions map type codes to friendly names. Filters soft-deleted principals and objects.

**Source Tables:** `SA_SQLServer_DatabasePermissions`, `SA_SQLServer_ServerPermissions`, `SA_SQLServer_Databases`, `SA_SQLServer_Instances`, `SA_SQL_Instances`, `SA_SQLServer_DatabasePrincipals`, `SA_SQLServer_ServerPrincipals`, `SA_SQLServer_PermissionClasses`, `SA_SQLServer_PermissionNames`, `SA_SQLServer_PermissionStates`, `SA_SQLServer_Objects`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| id | int | | No | SA_SQLServer_DatabasePermissions.id / SA_SQLServer_ServerPermissions.id | Surrogate PK for the permission record |
| instance_id | int | | Yes | SA_SQLServer_Databases.instance_id / SA_SQLServer_ServerPermissions.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_DatabasePermissions.database_id | FK to the database (NULL for server-level) |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_Databases.database_name | Name of the database (NULL for server-level) |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database |
| class | tinyint | | No | SA_SQLServer_DatabasePermissions.class / SA_SQLServer_ServerPermissions.class | Permission class code |
| class_desc | nvarchar | 120 | Yes | SA_SQLServer_PermissionClasses.class_desc | Description of the permission class |
| major_id | int | | No | SA_SQLServer_DatabasePermissions.major_id / SA_SQLServer_ServerPermissions.major_id | ID of the securable (object, schema, etc.) |
| object_id | bigint | | Yes | SA_SQLServer_Objects.id | Surrogate PK of the target object |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_Objects.object_name | Name of the target object |
| minor_id | int | | No | SA_SQLServer_DatabasePermissions.minor_id / SA_SQLServer_ServerPermissions.minor_id | Sub-object ID (e.g., column ordinal) |
| grantee_principal_id | int | | Yes | SA_SQLServer_DatabasePrincipals.principal_id / SA_SQLServer_ServerPrincipals.principal_id | SQL Server principal_id of the grantee |
| grantee_id | int | | Yes | SA_SQLServer_DatabasePrincipals.id / SA_SQLServer_ServerPrincipals.id | Surrogate PK of the grantee principal |
| grantee_principal_sid | varbinary | 85 | Yes | SA_SQLServer_DatabasePrincipals.principal_sid / SA_SQLServer_ServerPrincipals.principal_sid | Binary SID of the grantee |
| grantee_principal_name | nvarchar | 128 | Yes | SA_SQLServer_DatabasePrincipals.principal_name / SA_SQLServer_ServerPrincipals.principal_name | Name of the grantee principal |
| grantee_type | nvarchar | 24 | Yes | Computed (CASE) | Friendly type name of the grantee (e.g., DATABASE_ROLE, SQL_USER) |
| grantor_principal_id | int | | Yes | SA_SQLServer_DatabasePrincipals.principal_id / SA_SQLServer_ServerPrincipals.principal_id | SQL Server principal_id of the grantor |
| grantor_id | int | | Yes | SA_SQLServer_DatabasePrincipals.id / SA_SQLServer_ServerPrincipals.id | Surrogate PK of the grantor principal |
| grantor_principal_sid | varbinary | 85 | Yes | SA_SQLServer_DatabasePrincipals.principal_sid / SA_SQLServer_ServerPrincipals.principal_sid | Binary SID of the grantor |
| grantor_principal_name | nvarchar | 128 | Yes | SA_SQLServer_DatabasePrincipals.principal_name / SA_SQLServer_ServerPrincipals.principal_name | Name of the grantor principal |
| type | nchar | 4 | No | SA_SQLServer_PermissionNames.type | Four-character permission type code |
| permission_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionNames.permission_name | Human-readable permission name (e.g., SELECT, EXECUTE) |
| state | nchar | 1 | No | SA_SQLServer_PermissionStates.state | Single-character state code (G, D, R, W) |
| state_desc | nvarchar | 120 | Yes | SA_SQLServer_PermissionStates.state_desc | Permission state description (GRANT, DENY, REVOKE, GRANT_WITH_GRANT_OPTION) |

**Logic:** UNION of database-level permissions (resolved via DatabasePrincipals, Objects) and server-level permissions (resolved via ServerPrincipals). Both halves use CASE expressions to map single-character type codes to friendly type names (e.g., `'R'` to `'DATABASE_ROLE'`, `'S'` to `'SQL_USER'`). Filters where `is_deleted = 0` on principals and `sa_delete_date IS NULL` on objects/databases.

---

## SA_SQLServer_RoleMembersView

**Description:** Unified view of server and database role memberships via UNION. Resolves role and member names with friendly type labels. Filters to non-deleted records.

**Source Tables:** `SA_SQLServer_DatabaseRoleMembers`, `SA_SQLServer_ServerRoleMembers`, `SA_SQLServer_DatabasePrincipals`, `SA_SQLServer_ServerPrincipals`, `SA_SQLServer_Databases`, `SA_SQLServer_Instances`, `SA_SQL_Instances`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| instance_id | int | | Yes | SA_SQLServer_Databases.instance_id / SA_SQLServer_ServerRoleMembers.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_DatabaseRoleMembers.database_id | FK to the database (NULL for server-level) |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_Databases.database_name | Name of the database (NULL for server-level) |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database |
| role | int | | No | SA_SQLServer_DatabasePrincipals.id / SA_SQLServer_ServerPrincipals.id | Surrogate PK of the role principal |
| role_sid | varbinary | 85 | Yes | SA_SQLServer_DatabasePrincipals.principal_sid / SA_SQLServer_ServerPrincipals.principal_sid | Binary SID of the role |
| role_name | nvarchar | 128 | Yes | SA_SQLServer_DatabasePrincipals.principal_name / SA_SQLServer_ServerPrincipals.principal_name | Name of the role |
| role_type | nvarchar | 27 | Yes | Computed (CASE) | Friendly type name of the role (e.g., DATABASE_ROLE, SERVER_ROLE) |
| member | int | | No | SA_SQLServer_DatabasePrincipals.id / SA_SQLServer_ServerPrincipals.id | Surrogate PK of the member principal |
| member_sid | varbinary | 85 | Yes | SA_SQLServer_DatabasePrincipals.principal_sid / SA_SQLServer_ServerPrincipals.principal_sid | Binary SID of the member |
| member_name | nvarchar | 128 | Yes | SA_SQLServer_DatabasePrincipals.principal_name / SA_SQLServer_ServerPrincipals.principal_name | Name of the member |
| member_type | nvarchar | 27 | Yes | Computed (CASE) | Friendly type name of the member (e.g., SQL_USER, WINDOWS_LOGIN) |

**Logic:** UNION of database role members (resolved via DatabasePrincipals, Databases) and server role members (resolved via ServerPrincipals). CASE expressions map single-character type codes to friendly names. Filters `is_deleted = 0` on principals and `sa_delete_date IS NULL` on databases.

---

## SA_SQLServer_SqlDatabaseView

**Description:** Simple convenience view joining databases to instances with database usage mode. Provides a quick lookup for instance-database relationships.

**Source Tables:** `SA_SQLServer_Databases`, `SA_SQLServer_Instances`, `SA_SQL_Instances`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| id | int | | No | SA_SQLServer_Databases.id | Surrogate PK for the database record |
| instance_id | int | | No | SA_SQLServer_Databases.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | No | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_Databases.database_id | SQL Server database_id |
| database_name | nvarchar | 128 | No | SA_SQLServer_Databases.database_name | Name of the database |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database (on-prem vs. Azure) |

**Logic:** JOINs Databases to Instances and SA_SQL_Instances to produce a flat listing of all databases with their instance names and usage modes.

---

## SA_SQLServer_DailyLogonsView

**Description:** Aggregates login events (successful and failed) by day, instance, and server principal. Filters to login action codes only.

**Source Tables:** `SA_SQLServer_Events`, `SA_SQLServer_ServerPrincipals`, `SA_SQLServer_Instances`, `SA_SQLServer_AuditActions`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| event_date | date | | Yes | Computed: CAST(event_time AS DATE) | Date of the login events (day granularity) |
| action_id | varchar | 4 | Yes | SA_SQLServer_Events.action_id | Login action code (LGIS or LGIF) |
| name | nvarchar | 128 | Yes | SA_SQLServer_AuditActions.name | Human-readable action name (Login Succeeded / Login Failed) |
| principal_id | int | | Yes | SA_SQLServer_ServerPrincipals.principal_id | SQL Server principal_id of the login |
| principal_name | nvarchar | 128 | Yes | SA_SQLServer_ServerPrincipals.principal_name | Name of the server principal |
| principal_sid | varbinary | 85 | Yes | SA_SQLServer_ServerPrincipals.principal_sid | Binary SID of the server principal |
| count | int | | Yes | Computed: COUNT(*) | Number of login events for this day/instance/principal/action combination |

**Logic:** Groups events by `CAST(event_time AS DATE)`, instance, principal, and action_id. Filters to `action_id IN ('LGIS', 'LGIF')` (Login Succeeded / Login Failed). Resolves principal and action names via JOINs. Excludes rows where principal_name IS NULL.

---

## SA_SQLServer_SDD_ResourcesView

**Description:** Enriches SDD resources with human-readable instance, database, object, and column names. LEFT JOINs to all dimension tables. Filters to active databases.

**Source Tables:** `SA_SQLServer_SDD_Resources`, `SA_SQLServer_SDD_ResourceTypes`, `SA_SQLServer_Instances`, `SA_SQL_Instances`, `SA_SQLServer_Databases`, `SA_SQLServer_Objects`, `SA_SQLServer_Columns`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_Resources.id | Surrogate PK for the SDD resource |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_Resources.resource_type_id | FK to the resource type |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_ResourceTypes.resource_type | Human-readable resource type name |
| instance_id | int | | No | SA_SQLServer_SDD_Resources.instance_id | FK to the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_Resources.database_id | FK to the database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_Resources.object_id | FK to the database object |
| column_id | int | | Yes | SA_SQLServer_SDD_Resources.column_id | FK to the column (NULL for non-column resources) |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_Instances.instance_name | Name of the SQL Server instance |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_Databases.database_name | Name of the database |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_Objects.object_name | Name of the database object |
| column_name | nvarchar | 128 | Yes | SA_SQLServer_Columns.column_name | Name of the column |
| sql_instance_id | int | | Yes | SA_SQL_Instances.sql_instance_id | StealthAUDIT internal instance ID |
| database_usage_mode | int | | Yes | SA_SQL_Instances.database_usage_mode | Usage mode of the database (on-prem vs. Azure) |

**Logic:** LEFT JOINs SDD_Resources to ResourceTypes, Instances, SA_SQL_Instances, Databases, Objects, and Columns to resolve all human-readable names. Filters where `sa_delete_date IS NULL` on the Databases table.

---

## SA_SQLServer_SDD_MatchesView

**Description:** Enriches SDD match aggregates with resource details and criteria names. Decodes the `match_location` bitmask to human-readable strings via a CASE expression.

**Source Tables:** `SA_SQLServer_SDD_Matches`, `SA_SQLServer_SDD_ResourcesView`, `SA_SQLServer_SDD_Criteria`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_Matches.resource_id | FK to the SDD resource |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_ResourcesView.resource_type_id | Resource type ID from the resources view |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_ResourcesView.resource_type | Human-readable resource type name |
| instance_id | int | | No | SA_SQLServer_SDD_ResourcesView.instance_id | FK to the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_ResourcesView.database_id | FK to the database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_ResourcesView.object_id | FK to the database object |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.instance_name | Name of the SQL Server instance |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.database_name | Name of the database |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.object_name | Name of the database object |
| sql_instance_id | int | | Yes | SA_SQLServer_SDD_ResourcesView.sql_instance_id | StealthAUDIT internal instance ID |
| database_usage_mode | int | | Yes | SA_SQLServer_SDD_ResourcesView.database_usage_mode | Usage mode of the database |
| criteria_id | int | | No | SA_SQLServer_SDD_Matches.criteria_id | FK to the SDD criteria |
| criteria_name | nvarchar | MAX | No | SA_SQLServer_SDD_Criteria.criteria_name | Name of the SDD matching criteria |
| match_count | int | | No | SA_SQLServer_SDD_Matches.match_count | Number of matches found for this resource/criteria combination |
| match_location | varchar | 25 | No | Computed (CASE on bitmask) | Human-readable match location (Content, Metadata, Content/Metadata, Filename, etc.) |

**Logic:** JOINs SDD_Matches to SDD_ResourcesView for resource details and to SDD_Criteria for criteria names. CASE expression decodes the `match_location` bitmask: 1=Content, 2=Metadata, 3=Content,Metadata, 4=Filename, 5=Filename,Content, 6=Filename,Metadata, 7=Filename,Content,Metadata.

---

## SA_SQLServer_SDD_MatchHitsView

**Description:** Enriches individual SDD match hits with resource and criteria details. Resolves column_id to column_name via Columns join. Decodes `match_location` bitmask via CASE expression.

**Source Tables:** `SA_SQLServer_SDD_MatchHits`, `SA_SQLServer_SDD_ResourcesView`, `SA_SQLServer_SDD_Criteria`, `SA_SQLServer_Columns`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_MatchHits.resource_id | FK to the SDD resource |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_ResourcesView.resource_type_id | Resource type ID from the resources view |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_ResourcesView.resource_type | Human-readable resource type name |
| instance_id | int | | No | SA_SQLServer_SDD_ResourcesView.instance_id | FK to the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_ResourcesView.database_id | FK to the database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_ResourcesView.object_id | FK to the database object |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.instance_name | Name of the SQL Server instance |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.database_name | Name of the database |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.object_name | Name of the database object |
| sql_instance_id | int | | Yes | SA_SQLServer_SDD_ResourcesView.sql_instance_id | StealthAUDIT internal instance ID |
| database_usage_mode | int | | Yes | SA_SQLServer_SDD_ResourcesView.database_usage_mode | Usage mode of the database |
| criteria_id | int | | No | SA_SQLServer_SDD_MatchHits.criteria_id | FK to the SDD criteria |
| criteria_name | nvarchar | MAX | No | SA_SQLServer_SDD_Criteria.criteria_name | Name of the SDD matching criteria |
| match_data | nvarchar | 1024 | No | SA_SQLServer_SDD_MatchHits.match_data | The actual matched data content |
| column_name | nvarchar | MAX | Yes | SA_SQLServer_Columns.column_name | Name of the column where the match was found |
| column_id | int | | No | SA_SQLServer_SDD_MatchHits.column_id | FK to the column |
| match_location | varchar | 25 | No | Computed (CASE on bitmask) | Human-readable match location (Content, Metadata, etc.) |

**Logic:** JOINs SDD_MatchHits to SDD_ResourcesView for resource details and to SDD_Criteria for criteria names. LEFT JOINs to Columns to resolve column_name from column_id. CASE expression decodes the `match_location` bitmask to human-readable strings.

---

## SA_SQLServer_SensitiveDataPermissionsView

**Description:** Cross-references SDD matches with database permissions to show which principals have access to sensitive data. Uses SELECT DISTINCT to eliminate duplicates.

**Source Tables:** `SA_SQLServer_SDD_MatchesView`, `SA_SQLServer_PermissionsView`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_MatchesView.resource_id | FK to the SDD resource |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_MatchesView.resource_type_id | Resource type ID |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_MatchesView.resource_type | Human-readable resource type name |
| instance_id | int | | No | SA_SQLServer_SDD_MatchesView.instance_id | FK to the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_MatchesView.database_id | FK to the database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_MatchesView.object_id | FK to the database object |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchesView.instance_name | Name of the SQL Server instance |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchesView.database_name | Name of the database |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchesView.object_name | Name of the database object |
| sql_instance_id | int | | Yes | SA_SQLServer_SDD_MatchesView.sql_instance_id | StealthAUDIT internal instance ID |
| database_usage_mode | int | | Yes | SA_SQLServer_SDD_MatchesView.database_usage_mode | Usage mode of the database |
| criteria_id | int | | No | SA_SQLServer_SDD_MatchesView.criteria_id | FK to the SDD criteria |
| criteria_name | nvarchar | MAX | No | SA_SQLServer_SDD_MatchesView.criteria_name | Name of the SDD matching criteria |
| match_count | int | | No | SA_SQLServer_SDD_MatchesView.match_count | Number of matches |
| match_location | varchar | 25 | No | SA_SQLServer_SDD_MatchesView.match_location | Human-readable match location |
| grantee_principal_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.grantee_principal_name | Name of the principal granted access |
| grantor_principal_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.grantor_principal_name | Name of the principal who granted the permission |
| state_desc | nvarchar | 120 | Yes | SA_SQLServer_PermissionsView.state_desc | Permission state (GRANT, DENY, etc.) |
| permission_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.permission_name | Name of the permission (e.g., SELECT, EXECUTE) |

**Logic:** JOINs SDD_MatchesView to PermissionsView on `(database_id, object_id)` to correlate sensitive data locations with the principals who have permissions on those objects. Uses SELECT DISTINCT to eliminate duplicate rows.

---

## SA_SQLServer_SDD_MatchHits_SubjectProfileView

**Description:** Links SDD match hits to Subject Profile identity records, enabling correlation of discovered sensitive data with known individuals. JOINs through Sources, Identities, and Attributes tables.

**Source Tables:** `SA_SQLServer_SDD_MatchHits_SubjectProfile`, `SA_SQLServer_SDD_ResourcesView`, `SA_SQLServer_SDD_Criteria`, `SA_SubjectProfile_Sources`, `SA_SubjectProfile_Identities`, `SA_SubjectProfile_Attributes`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_MatchHits_SubjectProfile.resource_id | FK to the SDD resource |
| instance_id | int | | No | SA_SQLServer_SDD_ResourcesView.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.instance_name | Name of the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_ResourcesView.database_id | FK to the database |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.database_name | Name of the database |
| database_usage_mode | int | | Yes | SA_SQLServer_SDD_ResourcesView.database_usage_mode | Usage mode of the database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_ResourcesView.object_id | FK to the database object |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_ResourcesView.object_name | Name of the database object |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_ResourcesView.resource_type_id | Resource type ID |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_ResourcesView.resource_type | Human-readable resource type name |
| criteria_id | int | | No | SA_SQLServer_SDD_MatchHits_SubjectProfile.criteria_id | FK to the SDD criteria |
| criteria_name | nvarchar | MAX | No | SA_SQLServer_SDD_Criteria.criteria_name | Name of the SDD matching criteria |
| pattern_guid | uniqueidentifier | | No | SA_SQLServer_SDD_MatchHits_SubjectProfile.pattern_guid | GUID identifying the matching pattern |
| source_id | int | | No | SA_SubjectProfile_Sources.source_id | Subject Profile source identifier |
| source_name | varchar | 256 | No | SA_SubjectProfile_Sources.source_name | Name of the Subject Profile data source |
| source_object_id | uniqueidentifier | | No | SA_SubjectProfile_Sources.source_object_id | Unique ID of the source object |
| source_updated | datetime | | No | SA_SubjectProfile_Sources.source_updated | Last update timestamp for the source |
| source_usn | int | | No | SA_SubjectProfile_Sources.source_usn | Update sequence number for the source |
| identity_id | bigint | | No | SA_SubjectProfile_Identities.identity_id | Subject Profile identity identifier |
| identity_type | varchar | 256 | No | SA_SubjectProfile_Identities.identity_type | Type of the identity (e.g., person, account) |
| identity_name | nvarchar | 256 | No | SA_SubjectProfile_Identities.identity_name | Display name of the identity |
| identity_platform_id | varchar | 256 | No | SA_SubjectProfile_Identities.identity_platform_id | Platform-specific identifier for the identity |
| attribute_id | int | | No | SA_SubjectProfile_Attributes.attribute_id | Subject Profile attribute identifier |
| attribute_name | nvarchar | 256 | No | SA_SubjectProfile_Attributes.attribute_name | Name of the attribute matched |
| attribute_required | bit | | No | SA_SubjectProfile_Attributes.attribute_required | Whether the attribute is required for identification |

**Logic:** JOINs SDD_MatchHits_SubjectProfile to SDD_ResourcesView for resource details and to SDD_Criteria for criteria names. Further JOINs to SubjectProfile_Sources, SubjectProfile_Identities, and SubjectProfile_Attributes to resolve identity information linked to the sensitive data match.

---

## SA_SQLServer_SensitiveDataFullPermissionsView

**Description:** Comprehensive view showing all permissions relevant to sensitive data -- both direct permissions on sensitive objects AND broad server/database permissions that grant implicit access. Uses UNION to combine both permission types.

**Source Tables:** `SA_SQLServer_PermissionsView`, `SA_SQLServer_SDD_MatchesView`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| instance_id | int | | Yes | SA_SQLServer_PermissionsView.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.instance_name | Name of the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_PermissionsView.database_id | FK to the database |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.database_name | Name of the database |
| database_usage_mode | int | | Yes | SA_SQLServer_PermissionsView.database_usage_mode | Usage mode of the database |
| object_id | bigint | | Yes | SA_SQLServer_PermissionsView.object_id / SA_SQLServer_SDD_MatchesView.object_id | FK to the database object |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.object_name / SA_SQLServer_SDD_MatchesView.object_name | Name of the database object |
| grantee_principal_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.grantee_principal_name | Name of the principal granted access |
| grantor_principal_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.grantor_principal_name | Name of the principal who granted the permission |
| state_desc | nvarchar | 120 | Yes | SA_SQLServer_PermissionsView.state_desc | Permission state (GRANT, DENY, etc.) |
| permission_name | nvarchar | 128 | Yes | SA_SQLServer_PermissionsView.permission_name | Name of the permission |
| permission_class | tinyint | | No | SA_SQLServer_PermissionsView.class | Permission class code |
| permission_class_description | nvarchar | 120 | Yes | SA_SQLServer_PermissionsView.class_desc | Description of the permission class |

**Logic:** UNION of (1) broad database-level permissions where `class IN (100, 101, 105)` with specific high-privilege permission types (e.g., CONTROL, ALTER, SELECT) that implicitly grant access to all objects, and (2) object-level permissions on tables that have SDD matches (joined via `database_id` and `object_id`).

---

## SA_SQLServer_EffectiveRoleMembershipView

**Description:** Presents the `SA_SQLServer_EffectiveRoleMembership` table with a computed `Database Type` column derived from the `database_type` integer field via a CASE expression.

**Source Tables:** `SA_SQLServer_EffectiveRoleMembership`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | Computed (CASE on database_type) | Human-readable database type: 'SQL Server' (default), 'Azure SQL Database' (2), 'Azure SQL Managed Instance' (6) |
| instance_id | int | | Yes | SA_SQLServer_EffectiveRoleMembership.instance_id | FK to the SQL Server instance |
| instance_name | nvarchar | 256 | Yes | SA_SQLServer_EffectiveRoleMembership.instance_name | Name of the SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_EffectiveRoleMembership.database_id | FK to the database |
| database_name | nvarchar | 256 | Yes | SA_SQLServer_EffectiveRoleMembership.database_name | Name of the database |
| role_name | nvarchar | 128 | Yes | SA_SQLServer_EffectiveRoleMembership.role_name | Name of the role |
| role_id | int | | Yes | SA_SQLServer_EffectiveRoleMembership.role_id | SQL Server principal_id of the role |
| role_sid | varchar | 184 | Yes | SA_SQLServer_EffectiveRoleMembership.role_sid | String representation of the role SID |
| role_member_name | nvarchar | 128 | Yes | SA_SQLServer_EffectiveRoleMembership.role_member_name | Name of the role member |
| role_member_id | int | | Yes | SA_SQLServer_EffectiveRoleMembership.role_member_id | SQL Server principal_id of the member |
| role_member_sid | varchar | 184 | Yes | SA_SQLServer_EffectiveRoleMembership.role_member_sid | String representation of the member SID |
| role_member_type | nvarchar | 27 | Yes | SA_SQLServer_EffectiveRoleMembership.role_member_type | Type description of the member |
| member_path | nvarchar | MAX | Yes | SA_SQLServer_EffectiveRoleMembership.member_path | Full nested membership path (e.g., RoleA > RoleB > User) |
| nested_level | int | | Yes | SA_SQLServer_EffectiveRoleMembership.nested_level | Depth of nesting (0 = direct member) |
| membership_source | int | | Yes | SA_SQLServer_EffectiveRoleMembership.membership_source | Source indicator for the membership record |
| database_type | int | | Yes | SA_SQLServer_EffectiveRoleMembership.database_type | Integer database type code from `DatabaseSystemType` enum (1=SqlServer, 2=AzureSqlServer, 6=AzureSqlServerManagedInstance) |

**Logic:** Selects all columns from `SA_SQLServer_EffectiveRoleMembership` and adds a computed `Database Type` column using a CASE expression: `database_type = 2` maps to `'Azure SQL Database'`, `database_type = 6` maps to `'Azure SQL Managed Instance'`, all other values (including 0 and 1) map to `'SQL Server'`.

---

## SA_SQL_SDD_MatchesView

**Description:** Filtered wrapper over `SA_SQLServer_SDD_MatchesView` that restricts results to on-premises SQL Server instances only (where `database_usage_mode = 0` or `NULL`). Used by cross-module reporting that needs SDD match data for non-cloud instances.

**Source Tables:** `SA_SQLServer_SDD_MatchesView`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_MatchesView.resource_id | SDD resource identifier |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_MatchesView.resource_type_id | Resource type code |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_MatchesView.resource_type | Resource type description |
| instance_id | int | | No | SA_SQLServer_SDD_MatchesView.instance_id | FK to SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_MatchesView.database_id | FK to database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_MatchesView.object_id | FK to database object |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchesView.instance_name | Instance name |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchesView.database_name | Database name |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchesView.object_name | Object name |
| sql_instance_id | int | | Yes | SA_SQLServer_SDD_MatchesView.sql_instance_id | FK to SA_SQL_Instances |
| database_usage_mode | int | | Yes | SA_SQLServer_SDD_MatchesView.database_usage_mode | Usage mode (always 0 or NULL in this view) |
| criteria_id | int | | No | SA_SQLServer_SDD_MatchesView.criteria_id | FK to SDD criteria |
| criteria_name | nvarchar | MAX | No | SA_SQLServer_SDD_MatchesView.criteria_name | Criteria pattern name |
| match_count | int | | No | SA_SQLServer_SDD_MatchesView.match_count | Number of matches found |
| match_location | varchar | 25 | No | SA_SQLServer_SDD_MatchesView.match_location | Decoded match location (Content, Metadata, Filename) |

**Logic:** `SELECT * FROM SA_SQLServer_SDD_MatchesView WHERE (database_usage_mode = 0 OR database_usage_mode IS NULL)`.

---

## SA_SQL_SDD_MatchHitsView

**Description:** Filtered wrapper over `SA_SQLServer_SDD_MatchHitsView` that restricts results to on-premises SQL Server instances only (where `database_usage_mode = 0` or `NULL`). Used by cross-module reporting that needs individual SDD match hit data for non-cloud instances.

**Source Tables:** `SA_SQLServer_SDD_MatchHitsView`

| Column Name | Data Type | Size | Nullable | Source | Description |
|---|---|---|---|---|---|
| resource_id | bigint | | No | SA_SQLServer_SDD_MatchHitsView.resource_id | SDD resource identifier |
| resource_type_id | tinyint | | No | SA_SQLServer_SDD_MatchHitsView.resource_type_id | Resource type code |
| resource_type | nvarchar | 100 | Yes | SA_SQLServer_SDD_MatchHitsView.resource_type | Resource type description |
| instance_id | int | | No | SA_SQLServer_SDD_MatchHitsView.instance_id | FK to SQL Server instance |
| database_id | int | | Yes | SA_SQLServer_SDD_MatchHitsView.database_id | FK to database |
| object_id | bigint | | Yes | SA_SQLServer_SDD_MatchHitsView.object_id | FK to database object |
| instance_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchHitsView.instance_name | Instance name |
| database_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchHitsView.database_name | Database name |
| object_name | nvarchar | 128 | Yes | SA_SQLServer_SDD_MatchHitsView.object_name | Object name |
| sql_instance_id | int | | Yes | SA_SQLServer_SDD_MatchHitsView.sql_instance_id | FK to SA_SQL_Instances |
| database_usage_mode | int | | Yes | SA_SQLServer_SDD_MatchHitsView.database_usage_mode | Usage mode (always 0 or NULL in this view) |
| criteria_id | int | | No | SA_SQLServer_SDD_MatchHitsView.criteria_id | FK to SDD criteria |
| criteria_name | nvarchar | MAX | No | SA_SQLServer_SDD_MatchHitsView.criteria_name | Criteria pattern name |
| match_data | nvarchar | 1024 | No | SA_SQLServer_SDD_MatchHitsView.match_data | Matched data fragment |
| column_name | nvarchar | MAX | Yes | SA_SQLServer_SDD_MatchHitsView.column_name | Column where the hit was found |
| column_id | int | | No | SA_SQLServer_SDD_MatchHitsView.column_id | Column ordinal position |
| match_location | varchar | 25 | No | SA_SQLServer_SDD_MatchHitsView.match_location | Decoded match location (Content, Metadata, Filename) |

**Logic:** `SELECT * FROM SA_SQLServer_SDD_MatchHitsView WHERE (database_usage_mode = 0 OR database_usage_mode IS NULL)`.
