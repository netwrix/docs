# Enumeration & Lookup Values Reference

This section documents the possible values stored in lookup/enumeration tables and coded columns used throughout the schema. These serve as the domain constraints for foreign key and type columns in the core data collection tables.

---

## Server Principal Types (`SA_SQLServer_ServerPrincipalTypes`)

Referenced by `SA_SQLServer_ServerPrincipals.type`. Values are populated at runtime from `sys.server_principals` on each target instance.

| Code | Description |
|---|---|
| `C` | CERTIFICATE_MAPPED_LOGIN |
| `E` | EXTERNAL_LOGIN |
| `G` | WINDOWS_GROUP |
| `K` | ASYMMETRIC_KEY_MAPPED_LOGIN |
| `R` | SERVER_ROLE |
| `S` | SQL_LOGIN |
| `U` | WINDOWS_LOGIN |

:::note
Actual values present in the database depend on the SQL Server version and instance configuration. Types `E` (EXTERNAL_LOGIN) and `K` (ASYMMETRIC_KEY_MAPPED_LOGIN) may not be present on all instances.
:::
---

## Database Principal Types (`SA_SQLServer_DatabasePrincipalTypes`)

Referenced by `SA_SQLServer_DatabasePrincipals.type`. Values are populated at runtime from `sys.database_principals` on each target instance.

| Code | Description |
|---|---|
| `C` | CERTIFICATE_MAPPED_USER |
| `E` | EXTERNAL_USER |
| `G` | WINDOWS_GROUP |
| `K` | ASYMMETRIC_KEY_MAPPED_USER |
| `R` | DATABASE_ROLE |
| `S` | SQL_USER |
| `U` | WINDOWS_USER |
| `X` | EXTERNAL_GROUP |

:::note
Actual values present in the database depend on the SQL Server version and instance configuration. Types `E` (EXTERNAL_USER), `K` (ASYMMETRIC_KEY_MAPPED_USER), and `X` (EXTERNAL_GROUP) may not be present on all instances.
:::
---

## Permission States (`SA_SQLServer_PermissionStates`)

Referenced by `SA_SQLServer_ServerPermissions.state` and `SA_SQLServer_DatabasePermissions.state`. Values are populated at runtime from `sys.server_permissions` and `sys.database_permissions`.

| Code | Description |
|---|---|
| `D` | DENY |
| `G` | GRANT |
| `R` | REVOKE |
| `W` | GRANT_WITH_GRANT_OPTION |

:::note
These are the four standard SQL Server permission states. The most commonly encountered are `D` (DENY) and `G` (GRANT).
:::
---

## Permission Classes (`SA_SQLServer_PermissionClasses`)

Referenced by `SA_SQLServer_ServerPermissions.class` and `SA_SQLServer_DatabasePermissions.class`. Values are populated at runtime from `sys.server_permissions` and `sys.database_permissions`.

| Code | Description |
|---|---|
| `0` | DATABASE |
| `1` | OBJECT_OR_COLUMN |
| `3` | SCHEMA |
| `4` | DATABASE_PRINCIPAL |
| `5` | ASSEMBLY |
| `6` | TYPE |
| `10` | XML_SCHEMA_COLLECTION |
| `11` | MESSAGE_TYPE |
| `12` | SERVICE_CONTRACT |
| `13` | SERVICE |
| `14` | REMOTE_SERVICE_BINDING |
| `15` | ROUTE |
| `16` | FULLTEXT_CATALOG |
| `17` | SYMMETRIC_KEY |
| `18` | CERTIFICATE |
| `19` | ASYMMETRIC_KEY |
| `100` | SERVER |
| `105` | ENDPOINT |

:::note
 Actual values present in the database depend on the SQL Server version and which features are in use. Not all classes will be present on every instance.
:::
---

## Permission Names (`SA_SQLServer_PermissionNames`)

Referenced by `SA_SQLServer_ServerPermissions.type` and `SA_SQLServer_DatabasePermissions.type`. Values are populated at runtime from `sys.server_permissions` and `sys.database_permissions`. The table below lists commonly encountered permission names; additional permissions may be present depending on SQL Server version and features in use.

| Code | Permission Name |
|---|---|
| `AAES` | ALTER ANY EVENT SESSION |
| `ALAG` | ALTER ANY AVAILABILITY GROUP |
| `AUTH` | AUTHENTICATE SERVER |
| `CADB` | CONNECT ANY DATABASE |
| `CL` | CONTROL SERVER |
| `CO` | CONNECT |
| `COSQ` | CONNECT SQL |
| `CRTB` | CREATE TABLE |
| `DL` | DELETE |
| `EX` | EXECUTE |
| `IM` | IMPERSONATE |
| `IN` | INSERT |
| `RF` | REFERENCES |
| `SL` | SELECT |
| `UP` | UPDATE |
| `VW` | VIEW DEFINITION |
| `VWAD` | VIEW ANY DEFINITION |
| `VWCK` | VIEW ANY COLUMN ENCRYPTION KEY DEFINITION |
| `VWCM` | VIEW ANY COLUMN MASTER KEY DEFINITION |
| `VWDB` | VIEW ANY DATABASE |
| `VWSS` | VIEW SERVER STATE |

---

## Audit Class Types (`SA_SQLServer_AuditClassType`)

Referenced by `SA_SQLServer_AuditActions.class_type` and `SA_SQLServer_Events.class_type`. The full list contains 107 entries; the most commonly encountered types are shown below.

| Code | Description | Code | Description |
|---|---|---|---|
| `A` | SERVER AUDIT | `OB` | OBJECT |
| `AK` | ASYMMETRIC KEY | `P` | STORED PROCEDURE |
| `AR` | APPLICATION ROLE | `PK` | PRIMARY KEY |
| `AS` | ASSEMBLY | `RL` | ROLE |
| `CR` | CERTIFICATE | `S` | TABLE SYSTEM |
| `DA` | DATABASE AUDIT SPECIFICATION | `SA` | SERVER AUDIT SPECIFICATION |
| `DB` | DATABASE | `SC` | SCHEMA |
| `EP` | ENDPOINT | `SE` | EVENT SESSION |
| `FN` | FUNCTION SCALAR SQL | `SG` | SERVER ROLE |
| `IF` | FUNCTION TABLE-VALUED INLINE SQL | `SK` | SYMMETRIC KEY |
| `IT` | INTERNAL TABLE | `SL` | SQL LOGIN |
| `IX` | INDEX | `SN` | SYNONYM |
| `LX` | LOGIN | `SO` | SEQUENCE OBJECT |
| `MK` | MASTER KEY | `SR` | SERVER |
| `U` | TABLE | `V` | VIEW |
| `US` | USER | `X` | STORED PROCEDURE EXTENDED |

> **Full list:** 107 class types are defined. Additional types include `AF` (AGGREGATE), `AG` (AVAILABILITY GROUP), `AL` (ASYMMETRIC KEY LOGIN), `AQ` (ADHOC QUERY), `BN` (REMOTE SERVICE BINDING), `C` (CHECK CONSTRAINT), `CD` (CREDENTIAL), `CK` (COLUMN ENCRYPTION KEY), `CM` (COLUMN MASTER KEY), `CO` (SERVER CONFIG), `CP` (CRYPTOGRAPHIC PROVIDER), `CT` (CONTRACT), `DT` (TRIGGER DATABASE), `ED` (EXTERNAL DATA SOURCE), `EN` (EVENT NOTIFICATION), `FC` (FULLTEXT CATALOG), `FL` (FULLTEXT STOPLIST), `FP` (SEARCH PROPERTY LIST), `FS` (FUNCTION SCALAR ASSEMBLY), `FT` (FUNCTION TABLE-VALUED ASSEMBLY), `MT` (MESSAGE TYPE), `PC` (STORED PROCEDURE ASSEMBLY), `PF` (PARTITION FUNCTION), `PS` (PARTITION SCHEME), `RT` (ROUTE), `SQ` (QUEUE), `ST` (STATISTICS), `SV` (SERVICE), `SX` (XML SCHEMA COLLECTION), `TF` (FUNCTION TABLE-VALUED SQL), `TR` (TRIGGER), `TY` (TYPE), `WG` (WINDOWS GROUP), `WL` (WINDOWS LOGIN), `WU` (WINDOWS USER), and others.

---

## Audit Actions (Common) (`SA_SQLServer_AuditActions`)

Referenced by `SA_SQLServer_Events.action_id`. The full list contains 173 action definitions; frequently referenced actions are shown below.

**Login / Logout Actions:**

| Action ID | Action Name |
|---|---|
| `LGIS` | LOGIN SUCCEEDED |
| `LGIF` | LOGIN FAILED |
| `LGO` | LOGOUT |
| `LGDA` | DISABLE |
| `LGEA` | ENABLE |
| `LGDB` | CHANGE DEFAULT DATABASE |
| `LGLG` | CHANGE DEFAULT LANGUAGE |
| `LGNM` | NAME CHANGE |

**DML / DDL Actions:**

| Action ID | Action Name |
|---|---|
| `SL` | SELECT |
| `IN` | INSERT |
| `UP` | UPDATE |
| `DL` | DELETE |
| `EX` | EXECUTE |
| `CR` | CREATE |
| `AL` | ALTER |
| `DR` | DROP |

**Permission Actions:**

| Action ID | Action Name |
|---|---|
| `G` | GRANT |
| `D` | DENY |
| `R` | REVOKE |
| `GWG` | GRANT WITH GRANT |
| `DWC` | DENY WITH CASCADE |
| `RWC` | REVOKE WITH CASCADE |
| `RWG` | REVOKE WITH GRANT |

**Audit Group Actions:**

| Action ID | Action Name |
|---|---|
| `ADSP` | SERVER_ROLE_MEMBER_CHANGE_GROUP |
| `ADDP` | DATABASE_ROLE_MEMBER_CHANGE_GROUP |
| `GRDB` | DATABASE_PERMISSION_CHANGE_GROUP |
| `GRSV` | SERVER_PERMISSION_CHANGE_GROUP |
| `MNDB` | DATABASE_CHANGE_GROUP |
| `MNSP` | SERVER_PRINCIPAL_CHANGE_GROUP |
| `MNDP` | DATABASE_PRINCIPAL_CHANGE_GROUP |
| `BRDB` | BACKUP_RESTORE_GROUP |
| `LGFL` | FAILED_LOGIN_GROUP |
| `LGSD` | SUCCESSFUL_LOGIN_GROUP |
| `CNAU` | AUDIT_CHANGE_GROUP |

---

## SDD Resource Types (`SA_SQLServer_SDD_ResourceTypes`)

Referenced by `SA_SQLServer_SDD_Resources.type`.

| ID | Description |
|---|---|
| `1` | DatabaseName |
| `2` | TableName |
| `3` | ColumnName |
| `4` | ColumnData |
| `5` | Object |
| `6` | TableRow |

---

## SDD Match Location Bitmask

Used in `SA_SQLServer_SDD_Matches.match_location` and `SA_SQLServer_SDD_MatchHits.match_location`. The underlying column stores an integer bitmask; views decode it to a human-readable string.

| Value | Decoded String |
|---|---|
| `0` | None |
| `1` | Content |
| `2` | Metadata |
| `3` | Content,Metadata |
| `4` | Filename |
| `5` | Content,Filename |
| `6` | Metadata,Filename |
| `7` | Content,Metadata,Filename |

---

## Membership Source (`SA_SQLServer_EffectiveRoleMembership.membership_source`)

| Value | Description |
|---|---|
| `0` | Unset |
| `1` | SqlServer |
| `2` | ADI (Active Directory Inventory) |
| `3` | AzureADI (Azure Active Directory Inventory) |
| `4` | Azure SQL |
| `5` | Azure SQL Managed Instance |

---

## Database Type (`SA_SQLServer_EffectiveRoleMembership.database_type`)

Used to compute the `Database Type` column in `SA_SQLServer_EffectiveRoleMembershipView`. Values correspond to the `DatabaseSystemType` enum defined in `Stealthbits.StealthAUDIT.DataCollectors.Databases.Shared`.

| Value | Enum Name | Description |
|---|---|---|
| `0` | Unset | Default / not yet determined |
| `1` | SqlServer | On-premise SQL Server |
| `2` | AzureSqlServer | Azure SQL Database (Standalone) |
| `3` | Oracle | Oracle Database |
| `4` | PostgreSql | PostgreSQL |
| `5` | MySql | MySQL |
| `6` | AzureSqlServerManagedInstance | Azure SQL Managed Instance |
| `7` | SaDataSource | StealthAUDIT Data Source |
| `8` | AWSPostgres | AWS PostgreSQL (not currently supported) |
| `9` | AWSMySql | AWS MySQL (not currently supported) |
| `10` | EDBPostgreSql | EDB PostgreSQL (not currently supported) |
| `11` | SqlServerCluster | SQL Server Cluster (not currently supported) |
| `12` | Db2LUW | IBM Db2 LUW |
| `20` | MongoDb | MongoDB |

:::note
Within the SQL Server Data Collector context, only values `0` (Unset), `1` (SqlServer), `2` (AzureSqlServer), and `6` (AzureSqlServerManagedInstance) are applicable. The remaining values are used by other database collector modules that share the `SA_SQL_Instances` table.
:::