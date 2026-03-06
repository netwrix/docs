# Core Data Collection Tables

## SA_SQLServer_Instances

**Description:** Root entity table. Stores one row per discovered SQL Server instance (including Azure SQL). All other data collection tables reference back to an instance.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Auto-incrementing surrogate primary key |
| name | nvarchar | 128 | No | | | | Fully qualified SQL Server instance name (e.g., `SERVER\INSTANCE`) |
| sql_instance_id | int | | Yes | | | | FK reference to the shared `SA_SQL_Instances` table for cross-module linkage |

**Primary Key:** `PK_SA_SQLServer_Instances` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_Instances_Name` on `name`

**Foreign Keys:** None (root table)

---

## SA_SQLServer_Databases

**Description:** Stores one row per database discovered on each SQL Server instance. Supports soft-delete via `sa_delete_date` to track removed databases.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Auto-incrementing surrogate primary key |
| instance_id | int | | No | | FK | | Reference to `SA_SQLServer_Instances.id` |
| database_id | int | | Yes | | | | Native SQL Server `database_id` from `sys.databases` |
| name | nvarchar | 128 | No | | | | Database name |
| create_date | datetime | | Yes | | | | Database creation timestamp |
| sa_delete_date | datetime2 | | Yes | | | | Timestamp when NAA detected the database was deleted; NULL while active |

**Primary Key:** `PK_SA_SQLServer_Databases` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_Databases` on `(instance_id, database_id, name, create_date, sa_delete_date)`

**Indexes:** `SA_SQLServer_Databases_name_IDX` on `name` (nonclustered)

**Extended Properties:** `instance_id` — "ref to SA_SQLServer_Instances.id"

---

## SA_SQLServer_EventDatabases

**Description:** Lightweight database reference used by the audit event subsystem. Decoupled from `SA_SQLServer_Databases` to avoid blocking event ingestion when databases are being scanned/deleted.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | | | Reference to the hosting SQL Server instance |
| active_database_id | int | | Yes | | FK | | FK to `SA_SQLServer_Databases.id`; links to the currently active database record |
| name | nvarchar | 128 | No | | | | Database name as recorded in audit events |
| minimum_event_datetime | datetime2 | | Yes | | | | Earliest event timestamp recorded for this database |

**Primary Key:** `PK_SA_SQLServer_EventDatabases` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_EventDatabases` on `(instance_id, name)`

**Foreign Keys:**
- `FK_SA_SQLServer_Active_Database_Id` → `SA_SQLServer_Databases.id`

**Indexes:** `SA_SQLServer_EventDatabases_name_IDX` on `name` (nonclustered)

---

## SA_SQLServer_Schemas

**Description:** Stores database schemas discovered on target SQL Server instances. Maps the `sys.schemas` catalog view.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| database_id | int | | No | | | | Reference to `SA_SQLServer_Databases.id` |
| schema_id | int | | No | | | | Native SQL Server `schema_id` |
| name | nvarchar | 128 | Yes | | | | Schema name (e.g., `dbo`, `Sales`) |
| database_principal | int | | Yes | | | | Owning principal ID within the database |

**Primary Key:** `PK_SA_SQLServer_Schemas` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_Schemas_IDs` on `(database_id, schema_id)`

---

## SA_SQLServer_Objects

**Description:** Stores database objects (tables, views, stored procedures, functions, etc.) discovered on target instances. Mirrors `sys.objects`. Supports soft-delete via `is_deleted`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | bigint | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | | | Reference to `SA_SQLServer_Instances.id` |
| database_id | int | | Yes | | | | Reference to `SA_SQLServer_Databases.id` |
| name | nvarchar | 128 | No | | | | Object name |
| object_id | int | | Yes | | | | Native SQL Server `object_id` |
| principal_id | int | | Yes | | | | Owner principal ID |
| schema_id | int | | Yes | | | | Schema ID the object belongs to |
| parent_object_id | int | | Yes | | | | Parent object (for triggers, constraints, etc.) |
| type | nchar | 2 | Yes | | | | Object type code (e.g., `U`, `V`, `P`, `FN`) |
| type_desc | nvarchar | 120 | Yes | | | | Object type description |
| create_date | datetime | | Yes | | | | Object creation date |
| modify_date | datetime | | Yes | | | | Last modification date |
| is_ms_shipped | bit | | Yes | | | | Whether the object is Microsoft-shipped |
| is_published | bit | | Yes | | | | Whether the object is published for replication |
| is_schema_published | bit | | Yes | | | | Whether the schema is published |
| is_deleted | bit | | No | | | `0` | Soft-delete flag; set to 1 when object no longer exists on target |

**Primary Key:** `PK_SA_SQLServer_Objects` on `id`

**Indexes:**
- `UQ_SA_SQLServer_Objects_Id` — UNIQUE on `(instance_id, database_id, object_id)` WHERE `object_id IS NOT NULL`
- `UQ_SA_SQLServer_Objects_Name` — UNIQUE on `(instance_id, database_id, name, schema_id)` WHERE `object_id IS NULL`
- `IX_SA_SQLServer_Objects_Database_Id_Object_Id` on `(database_id, object_id)` INCLUDE `(name, is_deleted)`
- `SA_SQLServer_Objects_Instance_Id_Object_Id_Is_Deleted_IX` on `(instance_id, object_id, is_deleted)` INCLUDE `(id, name)`

---

## SA_SQLServer_Columns

**Description:** Stores column metadata for database objects. Mirrors `sys.columns`. Cascades delete from `SA_SQLServer_Objects`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| object_id | bigint | | No | | FK | | FK to `SA_SQLServer_Objects.id` (CASCADE delete) |
| name | nvarchar | 128 | No | | | | Column name |
| column_id | int | | No | | | | Ordinal position of the column |
| system_type_id | tinyint | | Yes | | | | System data type ID |
| user_type_id | int | | Yes | | | | User-defined type ID |
| max_length | smallint | | Yes | | | | Maximum length in bytes |
| precision | tinyint | | Yes | | | | Numeric precision |
| scale | tinyint | | Yes | | | | Numeric scale |
| collation_name | nvarchar | 128 | Yes | | | | Column collation |
| is_nullable | bit | | Yes | | | | Whether column allows NULLs |
| is_ansi_padded | bit | | Yes | | | | ANSI padding setting |
| is_rowguidcol | bit | | Yes | | | | ROWGUIDCOL flag |
| is_identity | bit | | Yes | | | | Identity column flag |
| is_computed | bit | | Yes | | | | Computed column flag |
| is_filestream | bit | | Yes | | | | FILESTREAM flag |
| is_replicated | bit | | Yes | | | | Replication flag |
| is_non_sql_subscribed | bit | | Yes | | | | Non-SQL subscription flag |
| is_merge_published | bit | | Yes | | | | Merge publication flag |
| is_dts_replicated | bit | | Yes | | | | DTS replication flag |
| is_xml_document | bit | | Yes | | | | XML document flag |
| xml_collection_id | int | | Yes | | | | XML schema collection ID |
| default_object_id | int | | Yes | | | | Default constraint object ID |
| rule_object_id | int | | Yes | | | | Rule object ID |
| is_sparse | bit | | Yes | | | | Sparse column flag |
| is_column_set | bit | | Yes | | | | Column set flag |
| is_deleted | bit | | No | | | `0` | Soft-delete flag |

**Primary Key:** None (no PK constraint — uses unique constraint as logical key)

**Unique Constraints:** `UQ_SA_SQLServer_Columns_Name` on `(object_id, column_id, name)`

**Foreign Keys:** `FK_SA_SQLServer_Columns_ObjectId` → `SA_SQLServer_Objects.id` (ON DELETE CASCADE)

---

## SA_SQLServer_ServerPrincipalTypes

**Description:** Lookup table for server principal type codes (e.g., S=SQL Login, U=Windows Login, R=Server Role, G=Windows Group).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| type | nchar | 1 | No | PK | | | Single-character principal type code |
| type_desc | nvarchar | 120 | No | | | | Human-readable description |

**Primary Key:** `PK_SA_SQLServer_ServerPrincipalTypes` on `type`

**Unique Constraints:**
- `UQ_SA_SQLServer_ServerPrincipalTypes_Type` on `type`
- `UQ_SA_SQLServer_ServerPrincipalTypes_TypeDesc` on `type_desc`

---

## SA_SQLServer_DatabasePrincipalTypes

**Description:** Lookup table for database principal type codes (e.g., S=SQL User, R=Database Role, U=Windows User).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| type | nchar | 1 | No | PK | | | Single-character principal type code |
| type_desc | nvarchar | 120 | No | | | | Human-readable description |

**Primary Key:** `PK_SA_SQLServer_DatabasePrincipalTypes` on `type`

**Unique Constraints:**
- `UQ_SA_SQLServer_DatabasePrincipalTypes_Type` on `type`
- `UQ_SA_SQLServer_DatabasePrincipalTypes_TypeDesc` on `type_desc`

---

## SA_SQLServer_ServerPrincipals

**Description:** Stores SQL Server-level principals (logins, server roles). Mirrors `sys.server_principals`. Supports soft-delete via `is_deleted`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | FK | | FK to `SA_SQLServer_Instances.id` (CASCADE) |
| principal_id | int | | Yes | | | | Native `principal_id` from `sys.server_principals` |
| principal_name | nvarchar | 128 | Yes | | | | Login/role name |
| principal_sid | varbinary | 85 | Yes | | | | Security identifier (SID) |
| type | nchar | 1 | Yes | | | | Principal type code (S, U, G, R, C, K) |
| is_disabled | bit | | Yes | | | | Whether the login is disabled |
| create_date | datetime | | Yes | | | | Creation date |
| modify_date | datetime | | Yes | | | | Last modification date |
| default_database | int | | Yes | | | | FK to `SA_SQLServer_Databases.id` |
| default_language_name | nvarchar | 128 | Yes | | | | Default language |
| credential_id | int | | Yes | | | | Associated credential ID |
| is_deleted | bit | | No | | | `0` | Soft-delete flag |
| owning_principal_id | int | | Yes | | | | Owning principal for server roles |
| is_fixed_role | bit | | Yes | | | | Whether this is a fixed server role |

**Primary Key:** `PK_SA_SQLServer_ServerPrincipals` on `id`

**Foreign Keys:** `FK_SA_SQLServer_ServerPrincipals_Instances` → `SA_SQLServer_Instances.id` (ON DELETE CASCADE)

**Indexes:**
- `UQ_SA_SQLServer_ServerPrincipals_Id` — UNIQUE on `(instance_id, principal_id)` WHERE `is_deleted = 0`
- `UQ_SA_SQLServer_ServerPrincipals_NameId` — UNIQUE on `(instance_id, principal_id, principal_name)` WHERE `is_deleted = 0`
- `UQ_SA_SQLServer_ServerPrincipals_NameSid` — UNIQUE on `(instance_id, principal_sid, principal_name)` WHERE `is_deleted = 0`

---

## SA_SQLServer_DatabasePrincipals

**Description:** Stores database-level principals (users, database roles). Mirrors `sys.database_principals`. Supports soft-delete via `is_deleted`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| database_id | int | | No | | FK | | FK to `SA_SQLServer_Databases.id` (CASCADE) |
| principal_id | int | | Yes | | | | Native `principal_id` from `sys.database_principals` |
| principal_name | nvarchar | 128 | Yes | | | | User/role name |
| principal_sid | varbinary | 85 | Yes | | | | Security identifier (SID) |
| type | nchar | 1 | Yes | | FK | | FK to `SA_SQLServer_DatabasePrincipalTypes.type` (CASCADE) |
| default_schema_name | nvarchar | 128 | Yes | | | | Default schema for the principal |
| create_date | datetime | | Yes | | | | Creation date |
| modify_date | datetime | | Yes | | | | Last modification date |
| owning_principal | int | | Yes | | | | Owning principal ID (for roles) |
| is_fixed_role | bit | | Yes | | | | Whether this is a fixed database role |
| authentication_type | int | | Yes | | | | Authentication type code |
| authentication_type_desc | nvarchar | 60 | Yes | | | | Authentication type description |
| is_deleted | bit | | No | | | `0` | Soft-delete flag |

**Primary Key:** `PK_SA_SQLServer_DatabasePrincipals` on `id`

**Foreign Keys:**
- `FK_SA_SQLServer_DatabasePrincipals_Databases` → `SA_SQLServer_Databases.id` (ON DELETE CASCADE)
- `FK_SA_SQLServer_DatabasePrincipals_DatabasePrincipalTypes` → `SA_SQLServer_DatabasePrincipalTypes.type` (ON DELETE CASCADE)

**Indexes:**
- `UQ_SA_SQLServer_DatabasePrincipals_Id` — UNIQUE on `(database_id, principal_id)` WHERE `is_deleted = 0`
- `UQ_SA_SQLServer_DatabasePrincipals_NameId` — UNIQUE on `(database_id, principal_id, principal_name)` WHERE `is_deleted = 0`
- `UQ_SA_SQLServer_DatabasePrincipals_NameSid` — UNIQUE on `(database_id, principal_sid, principal_name)` WHERE `is_deleted = 0`
- `IX_SA_SQLServer_Objects_Database_Id_Principal_Id` on `(database_id, principal_id)`

---

## SA_SQLServer_EventServerPrincipals

**Description:** Lightweight server principal reference for audit events. Decoupled from `SA_SQLServer_ServerPrincipals` so events can reference principals that may no longer exist in the current scan.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | FK | | FK to `SA_SQLServer_Instances.id` (CASCADE) |
| principal_id | int | | Yes | | | | Server principal ID from the audit event |
| principal_name | nvarchar | 128 | Yes | | | | Principal name from the audit event |
| principal_sid | varbinary | 85 | Yes | | | | SID from the audit event |

**Primary Key:** `PK_SA_SQLServer_EventServerPrincipals` on `id`

**Foreign Keys:** `FK_SA_SQLServer_EventServerPrincipals_Instances` → `SA_SQLServer_Instances.id` (ON DELETE CASCADE)

**Indexes:** `UQ_SA_SQLServer_EventServerPrincipals_IdNameSid` — UNIQUE on `(instance_id, principal_id, principal_sid, principal_name)`

---

## SA_SQLServer_EventDatabasePrincipals

**Description:** Lightweight database principal reference for audit events.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| database_id | int | | No | | FK | | FK to `SA_SQLServer_EventDatabases.id` (CASCADE) |
| principal_id | int | | Yes | | | | Database principal ID from the audit event |
| principal_name | nvarchar | 128 | Yes | | | | Principal name from the audit event |

**Primary Key:** `PK_SA_SQLServer_EventDatabasePrincipals` on `id`

**Foreign Keys:** `FK_SA_SQLServer_EventDatabasePrincipals_EventDatabases` → `SA_SQLServer_EventDatabases.id` (ON DELETE CASCADE)

**Indexes:** `UQ_SA_SQLServer_EventDatabasePrincipals_IdNameSid` — UNIQUE on `(database_id, principal_id, principal_name)`

---

## SA_SQLServer_SqlLogins

**Description:** Stores SQL authentication-specific properties for server principals of type SQL Login. Extends `SA_SQLServer_ServerPrincipals`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| server_principal | int | | No | | FK | | FK to `SA_SQLServer_ServerPrincipals.id` (CASCADE) |
| is_policy_checked | bit | | No | | | | Whether password policy is enforced |
| is_expiration_checked | bit | | No | | | | Whether password expiration is enforced |
| password_hash | varbinary | 256 | Yes | | | | Hashed password value |
| is_locked | bit | | Yes | | | | Account lockout status |
| is_expired | bit | | Yes | | | | Password expiration status |
| is_must_change | bit | | Yes | | | | Whether password must be changed at next login |
| password_hash_algorithm | int | | Yes | | | | Algorithm used for hashing (SHA-1, SHA-512, etc.) |

**Primary Key:** `PK_SA_SQLServer_SqlLogins` on `id`

**Foreign Keys:** `FK_SA_SQLServer_SqlLogins_ServerPrincipals` → `SA_SQLServer_ServerPrincipals.id` (ON DELETE CASCADE)

---

## SA_SQLServer_ServerRoleMembers

**Description:** Maps server role membership relationships. Each row represents one principal's membership in one server role.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| role_principal | int | | No | | FK | | FK to `SA_SQLServer_ServerPrincipals.id` — the server role |
| member_principal | int | | No | | FK | | FK to `SA_SQLServer_ServerPrincipals.id` — the member |

**Primary Key:** `PK_SA_SQLServer_ServerRoleMembers` on `id`

**Foreign Keys:**
- `FK_SA_SQLServer_ServerRoleMembers_RolePrincipals` → `SA_SQLServer_ServerPrincipals.id`
- `FK_SA_SQLServer_ServerRoleMembers_MemberPrincipals` → `SA_SQLServer_ServerPrincipals.id`

---

## SA_SQLServer_DatabaseRoleMembers

**Description:** Maps database role membership relationships. Each row represents one principal's membership in one database role.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| role_principal | int | | No | | FK | | FK to `SA_SQLServer_DatabasePrincipals.id` — the database role |
| member_principal | int | | No | | FK | | FK to `SA_SQLServer_DatabasePrincipals.id` — the member |

**Primary Key:** `PK_SA_SQLServer_DatabaseRoles` on `id`

**Foreign Keys:**
- `FK_SA_SQLServer_DatabaseRoleMembers_RolePrincipals` → `SA_SQLServer_DatabasePrincipals.id`
- `FK_SA_SQLServer_DatabaseRoleMembers_MemberPrincipals` → `SA_SQLServer_DatabasePrincipals.id`

---

## SA_SQLServer_EffectiveRoleMembership

**Description:** Stores the fully resolved (transitive) role membership hierarchy. Includes nested memberships with the full `member_path` showing how a principal inherits a role through nested groups. This is a denormalized analysis table.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| instance_id | int | | Yes | | | | Instance reference |
| instance_name | nvarchar | 256 | Yes | | | | Instance name (denormalized) |
| database_id | int | | Yes | | | | Database reference (NULL for server roles) |
| database_name | nvarchar | 256 | Yes | | | | Database name (denormalized) |
| role_name | nvarchar | 128 | Yes | | | | Role name |
| role_id | int | | Yes | | | | Role principal ID |
| role_sid | varchar | 184 | Yes | | | | Role SID as string |
| role_member_name | nvarchar | 128 | Yes | | | | Member name |
| role_member_id | int | | Yes | | | | Member principal ID |
| role_member_sid | varchar | 184 | Yes | | | | Member SID as string |
| role_member_type | nvarchar | 27 | Yes | | | | Member type description |
| member_path | nvarchar | MAX | Yes | | | | Full nesting path (e.g., `Role1 > Role2 > User`) |
| nested_level | int | | Yes | | | | Depth of nesting (0 = direct member) |
| membership_source | int | | Yes | | | | Source system: 0=Unset, 1=SqlServer, 2=ADI, 3=AzureADI, 4=Azure SQL, 5=Azure SQL Managed |
| database_type | int | | Yes | | | | Database platform type |

**Primary Key:** None (heap table)

---

## SA_SQLServer_PermissionNames

**Description:** Lookup table mapping SQL Server permission type codes to their names (e.g., `SL` → `SELECT`, `EX` → `EXECUTE`).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| type | nchar | 4 | No | PK | | | Permission type code from `sys.database_permissions` |
| permission_name | nvarchar | 128 | No | | | | Human-readable permission name |

**Primary Key:** `PK_SA_SQLServer_PermissionNames` on `type`

**Unique Constraints:**
- `UQ_SA_SQLServer_PermissionNames_Type` on `type`
- `UQ_SA_SQLServer_PermissionNames_PermissionName` on `permission_name`

---

## SA_SQLServer_PermissionClasses

**Description:** Lookup table mapping permission class codes to descriptions (e.g., 0=SERVER, 1=DATABASE, 100=SERVER_PRINCIPAL).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| class | tinyint | | No | PK | | | Permission class ID from `sys.database_permissions` |
| class_desc | nvarchar | 120 | No | | | | Class description (DATABASE, OBJECT_OR_COLUMN, etc.) |

**Primary Key:** `PK_PermissionClasses` on `class`

**Unique Constraints:**
- `UQ_SA_SQLServer_PermissionClasses_Class` on `class`
- `UQ_SA_SQLServer_PermissionClasses_ClassDesc` on `class_desc`

---

## SA_SQLServer_PermissionStates

**Description:** Lookup table mapping permission state codes to descriptions (e.g., `G` → `GRANT`, `D` → `DENY`).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| state | nchar | 1 | No | PK | | | Permission state code |
| state_desc | nvarchar | 120 | No | | | | State description (GRANT, DENY, REVOKE, GRANT_WITH_GRANT_OPTION) |

**Primary Key:** `PK_SA_SQLServer_PermissionStates` on `state`

**Unique Constraints:**
- `UQ_SA_SQLServer_PermissionStates_State` on `state`
- `UQ_SA_SQLServer_PermissionStates_StateDesc` on `state_desc`

---

## SA_SQLServer_ServerPermissions

**Description:** Stores server-level permissions. Each row maps a grantee, grantor, permission type, and state for a server-scope securable.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | FK | | FK to `SA_SQLServer_Instances.id` (CASCADE) |
| class | tinyint | | No | | FK | | FK to `SA_SQLServer_PermissionClasses.class` (CASCADE) |
| major_id | int | | No | | | | Major securable ID |
| minor_id | int | | No | | | | Minor securable ID (column-level) |
| grantee_principal | int | | No | | FK | | FK to `SA_SQLServer_ServerPrincipals.id` |
| grantor_principal | int | | No | | FK | | FK to `SA_SQLServer_ServerPrincipals.id` |
| type | nchar | 4 | No | | FK | | FK to `SA_SQLServer_PermissionNames.type` (CASCADE) |
| state | nchar | 1 | No | | FK | | FK to `SA_SQLServer_PermissionStates.state` (CASCADE) |

**Primary Key:** `PK_SA_SQLServer_ServerPermissions` on `id`

**Foreign Keys:**
- `FK_SA_SQLServer_ServerPermissions_Instances` → `SA_SQLServer_Instances.id` (CASCADE)
- `FK_SA_SQLServer_ServerPermissions_PermissionClasses` → `SA_SQLServer_PermissionClasses.class` (CASCADE)
- `FK_SA_SQLServer_ServerPermissions_PermissionNames` → `SA_SQLServer_PermissionNames.type` (CASCADE)
- `FK_SA_SQLServer_ServerPermissions_PermissionStates` → `SA_SQLServer_PermissionStates.state` (CASCADE)
- `FK_SA_SQLServer_ServerPermissions_GranteeServerPrincipals` → `SA_SQLServer_ServerPrincipals.id`
- `FK_SA_SQLServer_ServerPermissions_GrantorServerPrincipals` → `SA_SQLServer_ServerPrincipals.id`

---

## SA_SQLServer_DatabasePermissions

**Description:** Stores database-level permissions. Each row maps a grantee, grantor, permission type, and state for a database-scope securable.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| database_id | int | | No | | FK | | FK to `SA_SQLServer_Databases.id` |
| class | tinyint | | No | | FK | | FK to `SA_SQLServer_PermissionClasses.class` (CASCADE) |
| major_id | int | | No | | | | Major securable ID (object, schema, etc.) |
| minor_id | int | | No | | | | Minor securable ID (column) |
| grantee_principal | int | | No | | FK | | FK to `SA_SQLServer_DatabasePrincipals.id` |
| grantor_principal | int | | No | | FK | | FK to `SA_SQLServer_DatabasePrincipals.id` |
| type | nchar | 4 | No | | FK | | FK to `SA_SQLServer_PermissionNames.type` |
| state | nchar | 1 | No | | FK | | FK to `SA_SQLServer_PermissionStates.state` |

**Primary Key:** `PK_SA_SQLServer_DatabasePermissions` on `id`

**Foreign Keys:**
- `FK_SA_SQLServer_DatabasePermissions_Databases` → `SA_SQLServer_Databases.id`
- `FK_SA_SQLServer_DatabasePermissions_GranteeDatabasePrincipals` → `SA_SQLServer_DatabasePrincipals.id`
- `FK_SA_SQLServer_DatabasePermissions_GrantorDatabasePrincipals` → `SA_SQLServer_DatabasePrincipals.id`
- `FK_SA_SQLServer_DatabasePermissions_PermissionClasses` → `SA_SQLServer_PermissionClasses.class` (ON DELETE CASCADE)
- `FK_SA_SQLServer_DatabasePermissions_PermissionNames` → `SA_SQLServer_PermissionNames.type`
- `FK_SA_SQLServer_DatabasePermissions_PermissionStates` → `SA_SQLServer_PermissionStates.state`

**Indexes:** `SA_SQLServer_DatabasePermissions_Database_Id_Grantee_Principal_IX` on `(database_id, grantee_principal)` INCLUDE `(id, class, major_id, minor_id, grantor_principal, type, state)`

---

## SA_SQLServer_AsymmetricKeys

**Description:** Stores asymmetric key metadata discovered in databases. Maps `sys.asymmetric_keys`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| database_id | int | | No | | FK | | FK to `SA_SQLServer_Databases.id` |
| name | nvarchar | 128 | No | | | | Key name |
| database_principal | int | | Yes | | FK | | FK to `SA_SQLServer_DatabasePrincipals.id` |
| asymmetric_key_id | int | | Yes | | | | Native key ID |
| pvt_key_encryption_type | nchar | 2 | Yes | | | | Private key encryption type code |
| pvt_key_encryption_type_desc | nvarchar | 120 | Yes | | | | Encryption type description |
| thumbprint | varbinary | 32 | Yes | | | | Key thumbprint |
| algorithm | nchar | 2 | Yes | | | | Algorithm code |
| algorithm_desc | nvarchar | 120 | Yes | | | | Algorithm description |
| key_length | int | | Yes | | | | Key length in bits |
| public_key | varbinary | MAX | Yes | | | | Public key bytes |
| sid | varbinary | 85 | Yes | | | | SID mapped to the key |
| string_sid | nvarchar | 128 | Yes | | | | SID as string |
| attested_by | nvarchar | 260 | Yes | | | | Attestation path |
| provider_type | nvarchar | 120 | Yes | | | | Cryptographic provider type |
| cryptographic_provider_guid | uniqueidentifier | | Yes | | | | Provider GUID |
| cryptographic_provider_algid | sql_variant | | Yes | | | | Provider algorithm ID |

**Primary Key:** None

**Unique Constraints:** `UQ_SA_SQLServer_AsymmetricKeys_Type` on `(database_id, name)`

**Foreign Keys:**
- `FK_SA_SQLServer_AsymmetricKeys_Databases` → `SA_SQLServer_Databases.id`
- `FK_SA_SQLServer_AsymmetricKeys_DatabasePrincipal` → `SA_SQLServer_DatabasePrincipals.id`

---

## SA_SQLServer_AuditInformation

**Description:** Stores SQL Server audit configuration metadata. Each row represents one audit definition on an instance.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | | | Reference to hosting instance |
| database_id | int | | Yes | | | | Database scope (used by Azure Activity) |
| audit_id | int | | No | | | | Native audit ID |
| name | nvarchar | 128 | No | | | | Audit name |
| audit_guid | uniqueidentifier | | Yes | | | | Audit GUID |
| create_date | datetime | | No | | | | Audit creation date |
| modify_date | datetime | | No | | | | Last modification date |
| principal_id | int | | Yes | | | | Owner principal |
| type | char | 2 | No | | | | Audit type (SL=Security Log, AL=Application Log, FL=File) |
| type_desc | nvarchar | 120 | Yes | | | | Type description |
| on_failure | tinyint | | Yes | | | | Failure action code |
| on_failure_desc | nvarchar | 120 | Yes | | | | Failure action description |
| is_state_enabled | bit | | Yes | | | | Whether audit is enabled |
| queue_delay | int | | Yes | | | | Queue delay in milliseconds |
| predicate | nvarchar | 3000 | Yes | | | | Filter predicate expression |
| status_desc | nvarchar | 512 | Yes | | | | Current status description |
| status_time | datetime2 | | Yes | | | | Status timestamp |
| event_session_address | varbinary | 8 | Yes | | | | Extended events session address |
| audit_file_path | nvarchar | 1024 | Yes | | | | File path for file-based audits |
| audit_file_size | bigint | | Yes | | | | Current audit file size |
| max_file_size | bigint | | Yes | | | | Maximum file size |
| max_rollover_files | int | | Yes | | | | Maximum rollover file count |
| max_files | int | | Yes | | | | Maximum total file count |
| reserve_disk_space | int | | Yes | | | | Disk space reservation |
| log_file_path | nvarchar | 1024 | Yes | | | | Log file path |
| log_file_name | nvarchar | 520 | Yes | | | | Log file name |

**Primary Key:** `PK_SA_SQLServer_AuditInformation` on `id`

---

## SA_SQLServer_AuditFiles

**Description:** Stores audit file paths. Multiple files can be associated with one audit via rollover.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| audit_id | int | | Yes | | FK | | FK to `SA_SQLServer_AuditInformation.id` (CASCADE) |
| audit_file_path | nvarchar | 1024 | No | | | | Full path to the audit file |
| md5_audit_file_path | varbinary | 16 | Yes | | | | **Computed column:** `CONVERT(varbinary(16), HASHBYTES('MD5', audit_file_path))`. MD5 hash for uniqueness lookups |

**Primary Key:** `PK_SA_SQLServer_AuditFiles` on `id`

**Foreign Keys:** `FK_SA_SQLServer_AuditFiles_AuditId` → `SA_SQLServer_AuditInformation.id` (ON DELETE CASCADE)

**Indexes:** `UQ_SA_SQLServer_AuditFiles_Path_Audit_Id` — UNIQUE on `(audit_id, md5_audit_file_path)` WHERE `audit_id IS NOT NULL`

---

## SA_SQLServer_AuditClassType

**Description:** Lookup table for audit class type codes used in audit events.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| class_type | nchar | 2 | No | PK | | | Two-character class type code |
| class_type_desc | nvarchar | 120 | No | | | | Class type description (e.g., SERVER, DATABASE) |
| securable_class_desc | nvarchar | 120 | No | | | | Associated securable class |

**Primary Key:** `PK_SA_SQLServer_AuditClassType` on `class_type`

---

## SA_SQLServer_AuditActions

**Description:** Lookup table for audit action types. Maps action IDs to human-readable names.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| action_id | nvarchar | 4 | No | | | | Action code (e.g., LGIS, LGIF, SL, EX) |
| class_type | nchar | 2 | No | | | | Class type this action applies to |
| parent_class_type | nchar | 2 | Yes | | | | Parent class type (for nested actions) |
| name | nvarchar | 128 | No | | | | Action name (e.g., LOGIN_SUCCEEDED, SELECT) |

**Primary Key:** None

**Unique Constraints:** `UQ_SA_SQLServer_AuditActions` on `(action_id, class_type, parent_class_type)`

---

## SA_SQLServer_Statements

**Description:** Stores unique SQL statements captured in audit events. Uses MD5 deduplication to avoid storing identical statements repeatedly.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| statement | nvarchar | 4000 | No | | | | SQL statement text |
| md5_statement | varbinary | 16 | Yes | | | | **Computed column:** `CONVERT(varbinary(16), HASHBYTES('MD5', statement))`. MD5 hash for deduplication |

**Primary Key:** `PK_SA_SQLServer_Queries` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_Statements_Statement` on `md5_statement`

---

## SA_SQLServer_AdditionalInformation

**Description:** Stores unique `additional_information` XML fragments from audit events. MD5-deduplicated.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| additional_information | nvarchar | 4000 | No | | | | Additional information text from audit event |
| md5_additional_information | varbinary | 16 | Yes | | | | **Computed column:** `CONVERT(varbinary(16), HASHBYTES('MD5', additional_information))`. MD5 hash for deduplication |

**Primary Key:** `PK_SA_SQLServer_AdditionalInformation` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_AdditionalInformation_AdditionalInformation` on `md5_additional_information`

---

## SA_SQLServer_UserEvents

**Description:** Stores unique user-defined event information from audit records. MD5-deduplicated.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | | | Reference to hosting instance |
| user_defined_event_id | smallint | | No | | | | User event ID code |
| user_defined_information | nvarchar | 4000 | No | | | | User-defined event payload |
| md5_user_defined_information | varbinary | 16 | Yes | | | | **Computed column:** `CONVERT(varbinary(16), HASHBYTES('MD5', user_defined_information))`. MD5 hash for deduplication |

**Primary Key:** `PK_SA_SQLServer_UserEvents` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_UserEvents_UserDefinedInformation` on `md5_user_defined_information`

**Indexes:** `SA_SQLServer_UserEvents_user_defined_event_id_IDX` on `user_defined_event_id` (nonclustered)

---

## SA_SQLServer_Events

**Description:** Central audit event fact table. Stores one row per audit event. Has extensive foreign keys to dimension/lookup tables for normalization.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| event_time | datetime2(7) | | No | | | | Event timestamp with high precision |
| sequence_number | int | | No | | | | Sequence within the same timestamp |
| action_id | varchar | 4 | Yes | | | | Audit action code (e.g., LGIS, SL) |
| succeeded | bit | | No | | | | Whether the action succeeded |
| session_id | smallint | | No | | | | SQL Server session ID |
| object_id | int | | No | | | | Target object ID |
| object_name | nvarchar | 128 | Yes | | | | Target object name |
| class_type | varchar | 2 | Yes | | | | Audit class type code |
| schema_name | nvarchar | 128 | Yes | | | | Schema of the target object |
| audit_file_offset | bigint | | No | | | | Byte offset within the audit file |
| audit_schema_version | int | | Yes | | | | Audit schema version |
| sequence_group_id | varbinary | 85 | Yes | | | | Sequence group identifier |
| file_id | int | | Yes | | FK | | FK to `SA_SQLServer_AuditFiles.id` |
| instance_id | int | | Yes | | FK | | FK to `SA_SQLServer_Instances.id` |
| database_id | int | | Yes | | FK | | FK to `SA_SQLServer_EventDatabases.id` |
| server_principal | int | | Yes | | FK | | FK to `SA_SQLServer_EventServerPrincipals.id` |
| session_server_principal | int | | Yes | | FK | | FK to `SA_SQLServer_EventServerPrincipals.id` |
| database_principal | int | | Yes | | FK | | FK to `SA_SQLServer_EventDatabasePrincipals.id` |
| target_server_principal | int | | Yes | | FK | | FK to `SA_SQLServer_EventServerPrincipals.id` |
| target_database_principal | int | | Yes | | FK | | FK to `SA_SQLServer_EventDatabasePrincipals.id` |
| permission_bitmask | varbinary | 16 | Yes | | | | Permission bitmask |
| is_column_permission | bit | | Yes | | | | Whether this is a column-level permission |
| statement_id | int | | Yes | | FK | | FK to `SA_SQLServer_Statements.id` |
| additional_information_id | int | | Yes | | FK | | FK to `SA_SQLServer_AdditionalInformation.id` |
| user_event_id | int | | Yes | | FK | | FK to `SA_SQLServer_UserEvents.id` |
| client_ip | nvarchar | 128 | Yes | | | | Client IP address |
| application_name | nvarchar | 128 | Yes | | | | Application name from the connection |

**Primary Key:** None (heap table — events are append-only)

**Foreign Keys (11):**
- `FK_SA_SQLServer_Events_Instances` → `SA_SQLServer_Instances.id`
- `FK_SA_SQLServer_Events_EventDatabases` → `SA_SQLServer_EventDatabases.id`
- `FK_SA_SQLServer_Events_FileId` → `SA_SQLServer_AuditFiles.id`
- `FK_SA_SQLServer_Events_EventServerPrincipals` → `SA_SQLServer_EventServerPrincipals.id`
- `FK_SA_SQLServer_Events_SessionEventServerPrincipals` → `SA_SQLServer_EventServerPrincipals.id`
- `FK_SA_SQLServer_Events_TargetEventServerPrincipals` → `SA_SQLServer_EventServerPrincipals.id`
- `FK_SA_SQLServer_Events_EventDatabasePrincipals` → `SA_SQLServer_EventDatabasePrincipals.id`
- `FK_SA_SQLServer_Events_TargetEventDatabasePrincipals` → `SA_SQLServer_EventDatabasePrincipals.id`
- `FK_SA_SQLServer_Events_Statements` → `SA_SQLServer_Statements.id`
- `FK_SA_SQLServer_Events_AdditionalInformation` → `SA_SQLServer_AdditionalInformation.id`
- `FK_SA_SQLServer_Events_UserEvents` → `SA_SQLServer_UserEvents.id`

**Indexes:** `UQ_SA_SQLServer_Events_StaleDataLookup` on `(file_id, event_time)` (nonclustered, non-unique despite UQ_ prefix)

> **Note:** Despite the `UQ_` prefix used in some environments, this index is **not unique** per the live schema (`is_unique = 0`).

---

## SA_SQLServer_ExpressionDependencies

**Description:** Stores SQL expression dependencies between database objects. Mirrors `sys.sql_expression_dependencies`.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | bigint | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | | | Instance reference |
| database_id | int | | No | | | | Database reference |
| referencing_id | int | | No | | | | Object ID of the referencing entity |
| referencing_minor_id | int | | No | | | | Column ID of the referencing entity |
| referencing_class | tinyint | | Yes | | | | Referencing entity class |
| referencing_class_desc | nvarchar | 60 | Yes | | | | Referencing class description |
| is_schema_bound_reference | bit | | No | | | | Whether this is a schema-bound reference |
| referenced_class | tinyint | | Yes | | | | Referenced entity class |
| referenced_class_desc | nvarchar | 60 | Yes | | | | Referenced class description |
| referenced_server_name | nvarchar | 256 | Yes | | | | Cross-server reference target |
| referenced_database_name | nvarchar | 256 | Yes | | | | Cross-database reference target |
| referenced_schema_name | nvarchar | 256 | Yes | | | | Referenced schema |
| referenced_entity_name | nvarchar | 256 | Yes | | | | Referenced entity name |
| referenced_id | int | | Yes | | | | Referenced object ID |
| referenced_minor_id | int | | No | | | | Referenced column ID |
| is_caller_dependent | bit | | No | | | | Caller-dependent resolution flag |
| is_ambiguous | bit | | No | | | | Ambiguous reference flag |
| referencing_schema_name | nvarchar | 256 | Yes | | | | Referencing schema name |
| referencing_object_name | nvarchar | 256 | Yes | | | | Referencing object name |

**Primary Key:** Auto-generated on `id`

**Indexes:** `IDX_SA_SQLServer_ExpressionDependencies_Ids` on `(instance_id, database_id, referencing_id)`

---

## SA_SQLServer_SDD_Criteria

**Description:** Stores Sensitive Data Discovery (SDD) pattern criteria definitions. Each criterion defines a pattern to match (e.g., SSN, credit card numbers).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| name | nvarchar | MAX | No | | | | Criteria name (e.g., "Social Security Number") |
| pattern_guid | uniqueidentifier | | No | | | | Unique GUID identifying the pattern definition |

**Primary Key:** `PK_SA_SQLServer_SDD_Criteria` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_SDD_Criteria_pattern` on `pattern_guid`

---

## SA_SQLServer_SDD_InstanceCriteria

**Description:** Junction table linking SDD criteria to instances they should be scanned against.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| instance_id | int | | No | | FK | | FK to `SA_SQLServer_Instances.id` |
| criteria_id | int | | No | | FK | | FK to `SA_SQLServer_SDD_Criteria.id` |

---

## SA_SQLServer_SDD_DatabaseCriteria

**Description:** Junction table linking SDD criteria to specific databases.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| database_id | int | | No | | FK | | FK to `SA_SQLServer_Databases.id` |
| criteria_id | int | | No | | FK | | FK to `SA_SQLServer_SDD_Criteria.id` |

**Indexes:** `SA_SQLServer_SDD_DatabaseCriteria_database_id` on `database_id`

---

## SA_SQLServer_SDD_ResourceTypes

**Description:** Lookup table for SDD resource types (e.g., Table, Column, Instance, Database).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | tinyint | | No | PK | | | Resource type ID |
| type_desc | nvarchar | 100 | No | | | | Resource type description |

**Primary Key:** `PK_SA_SQLServer_ResourceTypes` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_ResourceTypes_TypeDesc` on `type_desc`

---

## SA_SQLServer_SDD_Resources

**Description:** Stores scannable resources (instances, databases, tables, columns) for SDD. Each resource represents a specific scope that can be scanned for sensitive data.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | bigint | | No | PK | | IDENTITY | Surrogate primary key |
| type | tinyint | | No | | FK | | FK to `SA_SQLServer_SDD_ResourceTypes.id` |
| instance_id | int | | No | | FK | | FK to `SA_SQLServer_Instances.id` |
| database_id | int | | Yes | | FK | | FK to `SA_SQLServer_Databases.id` |
| object_id | bigint | | Yes | | FK | | FK to `SA_SQLServer_Objects.id` |
| column_id | int | | Yes | | | | Column ordinal (if column-level resource) |
| last_scanned | int | | Yes | | FK | | FK to `SA_SQLServer_SDD_ScanHistory.id` |

**Primary Key:** `PK_SA_SQLServer_SDD_Resources` on `id`

**Unique Constraints:** `UQ_SA_SQLServer_SDD_Resources_Resource` on `(type, instance_id, database_id, object_id, column_id)`

**Indexes:** `SA_SQLServer_SDD_Resources_Database_Id_Object_Id_IX` on `(database_id, object_id)` (nonclustered)

---

## SA_SQLServer_SDD_Matches

**Description:** Stores aggregate match results — how many times a criteria pattern matched within a resource.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| resource_id | bigint | | No | | FK | | FK to `SA_SQLServer_SDD_Resources.id` |
| criteria_id | int | | No | | FK | | FK to `SA_SQLServer_SDD_Criteria.id` |
| match_count | int | | No | | | | Number of matches found |
| match_location | bigint | | No | | | `0` | Bitmask: 1=Content, 2=Metadata, 4=Filename |

---

## SA_SQLServer_SDD_MatchHits

**Description:** Stores individual match hit details — the actual data fragments that matched a criteria pattern.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| resource_id | bigint | | No | | FK | | FK to `SA_SQLServer_SDD_Resources.id` |
| criteria_id | int | | No | | FK | | FK to `SA_SQLServer_SDD_Criteria.id` |
| match_data | nvarchar | 1024 | No | | | | Matched data fragment (potentially masked) |
| hit_column | nvarchar | MAX | Yes | | | | Column name where the hit was found |
| match_location | bigint | | No | | | `0` | Location bitmask |

---

## SA_SQLServer_SDD_MatchHits_SubjectProfile

**Description:** Links SDD match hits to Subject Profile identities (e.g., mapping a discovered SSN to a known person). Cross-references `SA_SubjectProfile_*` tables.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| resource_id | bigint | | No | PK | FK | | FK to `SA_SQLServer_SDD_Resources.id` (CASCADE) |
| criteria_id | int | | No | PK | FK | | FK to `SA_SQLServer_SDD_Criteria.id` |
| source_id | int | | No | PK | FK | | FK to `SA_SubjectProfile_Sources.Id` |
| identity_id | bigint | | No | PK | FK | | FK to `SA_SubjectProfile_Identities.Id` |
| attribute_id | int | | No | PK | FK | | FK to `SA_SubjectProfile_AttributeValues` (composite) |
| order | int | | No | PK | | | Ordering within the attribute value set |

**Primary Key:** Composite on `(resource_id, criteria_id, source_id, identity_id, attribute_id, order)`

---

## SA_SQLServer_SDD_ScanHistory

**Description:** Tracks SDD scan execution history with timestamps and completion status.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| instance_id | int | | No | | FK | | FK to `SA_SQLServer_Instances.id` |
| scan_date | datetime2(7) | | No | | | `GETUTCDATE()` | Scan start timestamp |
| aborted | bit | | No | | | `0` | Whether the scan was aborted |
| last_resource_scanned | bigint | | Yes | | FK | | FK to `SA_SQLServer_SDD_Resources.id` (CASCADE); resume point |

**Primary Key:** `PK_SA_SQLServer_SDD_ScanHistory` on `id`

---

## SA_SQLServer_SDD_SupportedDataTypes

**Description:** Configuration table listing SQL Server data types that can be scanned by SDD, with conversion rules for binary types.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| id | int | | No | PK | | IDENTITY | Surrogate primary key |
| data_type | nvarchar | 64 | No | | | | SQL Server data type name (e.g., `varchar`, `int`) |
| is_converted | bit | | No | | | `0` | Whether the type requires conversion before scanning |
| is_enabled | bit | | No | | | `0` | Whether scanning is enabled for this type |
| converted_data_type | nvarchar | 128 | Yes | | | | Target data type after conversion |
| converted_data_byte_size | int | | Yes | | | | Byte size of converted type |
| converted_character_set | nvarchar | 128 | Yes | | | | Character set for conversion |

**Primary Key:** `PK_SA_SQLServer_SDD_SupportedDataTypes` on `id`

**Unique Constraints:** `IX_SA_SQLServer_SDD_SupportedDataTypes` on `data_type`

---

## SA_SQL_Patches

**Description:** Schema version tracking table used by the NAA patching system. Records which incremental schema patches have been applied to this database. The `SaSchemaUpdator` component checks this table at runtime to determine which patches are pending and applies them sequentially. Each `Patch_Source` represents a different data collector module, and `Patch_Version` is incremented with each schema change for that module.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| Patch_Source | nvarchar | 64 | No | PK | | | Data collector module identifier (e.g., `SqlServer`, `Oracle`, `DC`, `MySQL`, `PostgreSql`, `Db2LUW`, `AzureSqlStandalone`) |
| Patch_Version | int | | No | PK | | | Sequential patch version number; version 1 = initial table creation, versions 2+ = incremental schema modifications |

**Primary Key:** `PK_SA_SQL_Patches` on `(Patch_Source, Patch_Version)`

**Patching Architecture:**
- **Version 1** for each source is the initial `CREATE TABLE` script (marked `AlwaysRun = true` — re-executed every run for idempotent initialization)
- **Versions 2+** are incremental patches (e.g., `SqlServer_1_2.sql` through `SqlServer_1_15.sql`) that alter columns, add indexes, etc.
- Patches marked `IsCritical = true` (default) halt the updater on failure; non-critical patches log errors and continue
- The `SelfInsertsPatchRecord` flag allows patches to manage their own version tracking entry
- Thread-safe: `SaSchemaUpdator` uses a static lock to prevent concurrent schema modifications

**Patch Levels:**

| Patch_Source | Versions Applied | Latest Version |
|---|---|---|
| SqlServer | 1–15 | 15 |
| Oracle | 1–9 | 9 |
| DC | 3, 4, 5, 7, 8 | 8 |
| MySQL | 1–2 | 2 |
| PostgreSql | 1, 3 | 3 |
| Db2LUW | 1 | 1 |
| AzureSqlServer | 1 | 1 |

---

## SA_SQL_Instances

**Description:** Central cross-module instance registry table. Stores metadata about all monitored SQL Server instances and is referenced by the `sql_instance_id` column in `SA_SQLServer_Instances` and by multiple views via `database_usage_mode`. This table is shared across all database collector modules (SQL Server, Oracle, MySQL, PostgreSQL, Db2 LUW).

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| instance_id | int | | No | PK | | IDENTITY | Auto-incrementing surrogate primary key |
| instance_label | nvarchar | 256 | No | | | | Unique display label for the instance |
| service_name | nvarchar | 128 | Yes | | | | Named instance or service/database name |
| is_active | bit | | No | | | `1` | Whether the instance is currently active for data collection |
| enable_impersonation | bit | | No | | | `0` | Whether Windows impersonation is enabled for connecting to this instance |
| database_type | int | | No | | | | Database platform type (see Section 6.11) |
| host_name | nvarchar | 150 | No | | | | Server hostname or IP address |
| port_number | int | | No | | | | TCP port number |
| database_usage_mode | int | | No | | | `0` | Usage mode: 0=On-Premises, other values for cloud deployments |
| default_database_name | nvarchar | 150 | Yes | | | | Default database name for the connection |
| was_inspected | bit | | No | | | `0` | Whether the instance has been inspected/discovered |
| inspected_date | datetime2 | | No | | | `1950-01-01` | Timestamp of last inspection |
| connection_string | nvarchar | 1024 | Yes | | | | Stored connection string for the instance |

**Primary Key:** `PK_SA_SQL_Instances` on `instance_id`

**Unique Constraints:**
- `UQ_SA_SQL_Instances` on `instance_label`
- `UQ_SA_SQL_Instances_Host_Name_Service_Name_Port` on `(host_name, service_name, port_number)`

---

## SA_SQL_PasswordIssues_LIST

**Description:** Stores password audit list metadata used by the password issues scan. Tracks which password lists have been applied to which hosts, with versioning to detect when lists need updating.

| Column Name | Data Type | Size | Nullable | PK | FK | Default | Description |
|---|---|---|---|---|---|---|---|
| SA_HOST | varchar | 255 | No | | | | Target host identifier |
| rowGUID | uniqueidentifier | | No | | | `NEWSEQUENTIALID()` | Unique row identifier |
| JobRunTimeKey | smalldatetime | | Yes | | | | Job execution timestamp key |
| HOST | varchar | 255 | Yes | | | | Host name |
| HOSTSTATUS | varchar | 20 | Yes | | | | Host processing status |
| SequenceID | varchar | 64 | Yes | | | | Sequence identifier |
| ListVersion | varchar | 256 | Yes | | | | Password list version |
| DbListVersion | varchar | 256 | Yes | | | | Database-stored list version |
| Updated | varchar | 5 | Yes | | | | Whether the list was updated (True/False) |
| TableName | varchar | 256 | Yes | | | | Target table name |
| ROWKEY | varchar | 1600 | Yes | | | | Row key for identifying records |

**Indexes:**
- `SA_SQL_PasswordIssues_LIST_PK_Index` — UNIQUE on `rowGUID`
- `SA_SQL_PasswordIssues_LIST_Host_Index` on `SA_HOST`
- `SA_SQL_PasswordIssues_LIST_JobRuntimeKey_Index` on `JobRunTimeKey`

