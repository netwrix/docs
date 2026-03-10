# Table Relationship Diagrams (ERD)

## High-Level Overview

The schema is organized into four major subsystems, each detailed in the diagrams below. This overview shows only the top-level entities and how the subsystems connect.

```mermaid
erDiagram
    SA_SQL_Instances {
        int instance_id PK
        nvarchar instance_label
        int database_type
    }

    Instances["SA_SQLServer_Instances"] {
        int id PK
        nvarchar name
        int sql_instance_id FK
    }

    Databases["SA_SQLServer_Databases"] {
        int id PK
        int instance_id FK
        nvarchar name
    }

    Objects["SA_SQLServer_Objects"] {
        bigint id PK
        int database_id FK
        nvarchar name
    }

    ServerPrincipals["SA_SQLServer_ServerPrincipals"] {
        int id PK
        int instance_id FK
        nvarchar principal_name
    }

    DatabasePrincipals["SA_SQLServer_DatabasePrincipals"] {
        int id PK
        int database_id FK
        nvarchar principal_name
    }

    Events["SA_SQLServer_Events"] {
        datetime2 event_time
        int instance_id FK
        int database_id FK
    }

    SDD_Resources["SA_SQLServer_SDD_Resources"] {
        bigint id PK
        int instance_id FK
        int database_id FK
    }

    SA_SQL_Patches {
        nvarchar Patch_Source PK
        int Patch_Version PK
    }

    SA_SQL_Instances ||--o| Instances : "registers"
    Instances ||--o{ Databases : "hosts"
    Instances ||--o{ ServerPrincipals : "has logins"
    Databases ||--o{ DatabasePrincipals : "has users"
    Databases ||--o{ Objects : "contains"
    Instances ||--o{ Events : "audited on"
    Instances ||--o{ SDD_Resources : "scanned on"
    Objects ||--o{ SDD_Resources : "scanned as"
```

---

## Instance & Database Hierarchy

Shows how SQL Server instances, databases, schemas, objects, and columns relate. Includes the cross-module instance registry and asymmetric keys.

```mermaid
erDiagram
    SA_SQL_Instances {
        int instance_id PK
        nvarchar instance_label
        nvarchar host_name
        int port_number
        int database_type
        int database_usage_mode
    }

    Instances["SA_SQLServer_Instances"] {
        int id PK
        nvarchar name
        int sql_instance_id FK
    }

    Databases["SA_SQLServer_Databases"] {
        int id PK
        int instance_id FK
        int database_id
        nvarchar name
        datetime create_date
        datetime2 sa_delete_date
    }

    EventDatabases["SA_SQLServer_EventDatabases"] {
        int id PK
        int instance_id
        int active_database_id FK
        nvarchar name
    }

    Schemas["SA_SQLServer_Schemas"] {
        int id PK
        int database_id FK
        int schema_id
        nvarchar name
    }

    Objects["SA_SQLServer_Objects"] {
        bigint id PK
        int instance_id FK
        int database_id FK
        nvarchar name
        nchar type
        bit is_deleted
    }

    Columns["SA_SQLServer_Columns"] {
        bigint object_id FK
        nvarchar name
        int column_id
        bit is_deleted
    }

    AsymmetricKeys["SA_SQLServer_AsymmetricKeys"] {
        int database_id FK
        nvarchar name
        int database_principal FK
    }

    ExprDeps["SA_SQLServer_ExpressionDependencies"] {
        bigint id PK
        int instance_id FK
        int database_id FK
        int referencing_id
    }

    SA_SQL_Instances ||--o| Instances : "registers"
    Instances ||--o{ Databases : "hosts"
    Databases ||--o{ Schemas : "contains"
    Databases ||--o{ Objects : "contains"
    Databases ||--o{ AsymmetricKeys : "contains"
    Objects ||--o{ Columns : "has columns (CASCADE)"
    Objects ||--o{ ExprDeps : "referenced by"
    EventDatabases }o--o| Databases : "active link"
```

---

## Principals & Permissions

Shows server-level and database-level principals, role memberships, permissions, and their shared lookup tables.

```mermaid
erDiagram
    Instances["SA_SQLServer_Instances"] {
        int id PK
        nvarchar name
    }

    Databases["SA_SQLServer_Databases"] {
        int id PK
        int instance_id FK
    }

    SPTypes["SA_SQLServer_ServerPrincipalTypes"] {
        nchar type PK
        nvarchar type_desc
    }

    DPTypes["SA_SQLServer_DatabasePrincipalTypes"] {
        nchar type PK
        nvarchar type_desc
    }

    ServerPrincipals["SA_SQLServer_ServerPrincipals"] {
        int id PK
        int instance_id FK
        nvarchar principal_name
        nchar type
        bit is_deleted
    }

    DatabasePrincipals["SA_SQLServer_DatabasePrincipals"] {
        int id PK
        int database_id FK
        nvarchar principal_name
        nchar type FK
        bit is_deleted
    }

    SqlLogins["SA_SQLServer_SqlLogins"] {
        int id PK
        int server_principal FK
        varbinary password_hash
    }

    ServerRoleMembers["SA_SQLServer_ServerRoleMembers"] {
        int id PK
        int role_principal FK
        int member_principal FK
    }

    DatabaseRoleMembers["SA_SQLServer_DatabaseRoleMembers"] {
        int id PK
        int role_principal FK
        int member_principal FK
    }

    PermNames["SA_SQLServer_PermissionNames"] {
        nchar type PK
        nvarchar permission_name
    }

    PermClasses["SA_SQLServer_PermissionClasses"] {
        tinyint class PK
        nvarchar class_desc
    }

    PermStates["SA_SQLServer_PermissionStates"] {
        nchar state PK
        nvarchar state_desc
    }

    ServerPerms["SA_SQLServer_ServerPermissions"] {
        int id PK
        int instance_id FK
        int grantee_principal FK
        int grantor_principal FK
        nchar type FK
        tinyint class FK
        nchar state FK
    }

    DatabasePerms["SA_SQLServer_DatabasePermissions"] {
        int id PK
        int database_id FK
        int grantee_principal FK
        int grantor_principal FK
        nchar type FK
        tinyint class FK
        nchar state FK
    }

    Instances ||--o{ ServerPrincipals : "has (CASCADE)"
    Databases ||--o{ DatabasePrincipals : "has (CASCADE)"
    SPTypes ||--o{ ServerPrincipals : "type lookup"
    DPTypes ||--o{ DatabasePrincipals : "type lookup (CASCADE)"
    ServerPrincipals ||--o{ SqlLogins : "extends (CASCADE)"
    ServerPrincipals ||--o{ ServerRoleMembers : "role/member"
    DatabasePrincipals ||--o{ DatabaseRoleMembers : "role/member"
    ServerPrincipals ||--o{ ServerPerms : "grantee/grantor"
    DatabasePrincipals ||--o{ DatabasePerms : "grantee/grantor"
    Instances ||--o{ ServerPerms : "scoped to (CASCADE)"
    PermNames ||--o{ ServerPerms : "type lookup"
    PermNames ||--o{ DatabasePerms : "type lookup"
    PermClasses ||--o{ ServerPerms : "class lookup"
    PermClasses ||--o{ DatabasePerms : "class lookup"
    PermStates ||--o{ ServerPerms : "state lookup"
    PermStates ||--o{ DatabasePerms : "state lookup"
```

---

## Audit Events

Shows the star-schema audit event fact table and all its dimension/lookup tables. The Events table is a heap (no PK) with 11 foreign keys.

```mermaid
erDiagram
    Instances["SA_SQLServer_Instances"] {
        int id PK
    }

    EventDatabases["SA_SQLServer_EventDatabases"] {
        int id PK
        int instance_id
        nvarchar name
    }

    EventServerPrincipals["SA_SQLServer_EventServerPrincipals"] {
        int id PK
        int instance_id FK
        nvarchar principal_name
    }

    EventDatabasePrincipals["SA_SQLServer_EventDatabasePrincipals"] {
        int id PK
        int database_id FK
        nvarchar principal_name
    }

    AuditInfo["SA_SQLServer_AuditInformation"] {
        int id PK
        int instance_id
        nvarchar name
        char type
    }

    AuditFiles["SA_SQLServer_AuditFiles"] {
        int id PK
        int audit_id FK
        nvarchar audit_file_path
    }

    AuditClassType["SA_SQLServer_AuditClassType"] {
        nchar class_type PK
        nvarchar class_type_desc
    }

    AuditActions["SA_SQLServer_AuditActions"] {
        nvarchar action_id
        nchar class_type
        nvarchar name
    }

    Statements["SA_SQLServer_Statements"] {
        int id PK
        nvarchar statement
        varbinary md5_statement
    }

    AddlInfo["SA_SQLServer_AdditionalInformation"] {
        int id PK
        nvarchar additional_information
    }

    UserEvents["SA_SQLServer_UserEvents"] {
        int id PK
        int instance_id
        nvarchar user_defined_information
    }

    Events["SA_SQLServer_Events"] {
        datetime2 event_time
        int sequence_number
        varchar action_id
        bit succeeded
        int file_id FK
        int instance_id FK
        int database_id FK
        int server_principal FK
        int database_principal FK
        int statement_id FK
        int additional_information_id FK
        int user_event_id FK
    }

    AuditInfo ||--o{ AuditFiles : "produces (CASCADE)"
    AuditFiles ||--o{ Events : "sourced from"
    Instances ||--o{ Events : "occurred on"
    EventDatabases ||--o{ Events : "in database"
    EventDatabases ||--o{ EventDatabasePrincipals : "contains (CASCADE)"
    Instances ||--o{ EventServerPrincipals : "has (CASCADE)"
    EventServerPrincipals ||--o{ Events : "server principal"
    EventDatabasePrincipals ||--o{ Events : "database principal"
    Statements ||--o{ Events : "SQL executed"
    AddlInfo ||--o{ Events : "extra details"
    UserEvents ||--o{ Events : "user event"
```

---

## Sensitive Data Discovery (SDD)

Shows the SDD subsystem: criteria definitions, scannable resources, match aggregates, individual match hits, subject profile linkage, and scan history.

```mermaid
erDiagram
    Instances["SA_SQLServer_Instances"] {
        int id PK
    }

    Databases["SA_SQLServer_Databases"] {
        int id PK
    }

    Objects["SA_SQLServer_Objects"] {
        bigint id PK
    }

    Criteria["SA_SQLServer_SDD_Criteria"] {
        int id PK
        nvarchar name
        uniqueidentifier pattern_guid
    }

    InstanceCriteria["SA_SQLServer_SDD_InstanceCriteria"] {
        int instance_id FK
        int criteria_id FK
    }

    DatabaseCriteria["SA_SQLServer_SDD_DatabaseCriteria"] {
        int database_id FK
        int criteria_id FK
    }

    ResourceTypes["SA_SQLServer_SDD_ResourceTypes"] {
        tinyint id PK
        nvarchar type_desc
    }

    Resources["SA_SQLServer_SDD_Resources"] {
        bigint id PK
        tinyint type FK
        int instance_id FK
        int database_id FK
        bigint object_id FK
        int last_scanned FK
    }

    Matches["SA_SQLServer_SDD_Matches"] {
        bigint resource_id FK
        int criteria_id FK
        int match_count
        bigint match_location
    }

    MatchHits["SA_SQLServer_SDD_MatchHits"] {
        bigint resource_id FK
        int criteria_id FK
        nvarchar match_data
        nvarchar hit_column
    }

    MatchHitsSP["SA_SQLServer_SDD_MatchHits_SubjectProfile"] {
        bigint resource_id PK
        int criteria_id PK
        int source_id PK
        bigint identity_id PK
    }

    ScanHistory["SA_SQLServer_SDD_ScanHistory"] {
        int id PK
        int instance_id FK
        datetime2 scan_date
        bit aborted
    }

    SupportedTypes["SA_SQLServer_SDD_SupportedDataTypes"] {
        int id PK
        nvarchar data_type
        bit is_enabled
    }

    Criteria ||--o{ InstanceCriteria : "assigned to"
    Criteria ||--o{ DatabaseCriteria : "assigned to"
    Criteria ||--o{ Matches : "matched by"
    Criteria ||--o{ MatchHits : "hit by"
    Instances ||--o{ InstanceCriteria : "scoped to"
    Databases ||--o{ DatabaseCriteria : "scoped to"
    ResourceTypes ||--o{ Resources : "type lookup"
    Instances ||--o{ Resources : "scanned on"
    Databases ||--o{ Resources : "scanned in"
    Objects ||--o{ Resources : "scanned as"
    ScanHistory ||--o{ Resources : "last scan"
    Instances ||--o{ ScanHistory : "scan history"
    Resources ||--o{ Matches : "has matches"
    Resources ||--o{ MatchHits : "has hits"
    Resources ||--o{ MatchHitsSP : "profile link (CASCADE)"
