# Reporting Tables

The following 59 tables are **denormalized reporting tables** populated by NAA analysis jobs. They use human-readable column names with spaces (e.g., `"Database Type"`, `"Instance"`) and are designed for direct consumption by the NAA console and reports. They do not participate in foreign key relationships with the core tables.

:::note
All reporting tables share a common `Database Type` column (varchar/nvarchar) that identifies the SQL Server platform variant (e.g., `"SQL Server"`, `"Azure SQL Database"`, `"Azure SQL Managed Instance"`). None of these tables have primary keys or foreign keys — they are heap tables optimized for bulk INSERT/TRUNCATE patterns.
:::

---

## Activity

### SA_SQLServer_Activity_Details

**Description:** Stores detailed records of database activity events captured from SQL Server audit logs. Each row represents a single audited action performed by a user.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Target database name |
| Event Time | datetime | | Yes | | Timestamp of the activity event |
| Object | nvarchar | 128 | Yes | | Target database object name |
| User | nvarchar | 128 | Yes | | Principal who performed the action |
| Statement | nvarchar | 4000 | Yes | | SQL statement text executed |
| Action Name | nvarchar | 128 | Yes | | Audit action name (e.g., SELECT, INSERT, EXECUTE) |
| Column Permission | varchar | 5 | No | | Whether the action involved column-level permissions (True/False) |
| Has Login | varchar | 5 | No | | Whether the user has a corresponding server login (True/False) |
| Client | nvarchar | 128 | Yes | | Client IP address or hostname |
| Application | nvarchar | 128 | Yes | | Application name from the connection string |

---

### SA_SQLServer_Activity_UserDatabaseSummary

**Description:** Aggregates activity events by user, instance, and database, providing event counts and last event timestamps.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| User | nvarchar | 128 | Yes | | Principal name |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Event Count | int | | Yes | | Total number of activity events |
| Last Event | datetime | | Yes | | Timestamp of the most recent event |

---

### SA_SQLServer_Activity_UserInstanceSummary

**Description:** Aggregates activity events by user and instance (across all databases).

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| User | nvarchar | 128 | Yes | | Principal name |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Event Count | int | | Yes | | Total number of activity events across all databases |
| Last Event | datetime | | Yes | | Timestamp of the most recent event |

---

## Authentication

### SA_SQLServer_Authentication_Details

**Description:** Reports per-instance authentication configuration: whether Windows-only authentication is enforced, whether the `sa` account has been renamed, and the count of SQL logins.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | varchar | 510 | Yes | | SQL Server instance name |
| Integrated Security Only | char | 5 | Yes | | Whether the instance is configured for Windows Authentication only (True/False) |
| Renamed 'sa' Account | char | 5 | Yes | | Whether the built-in `sa` login has been renamed (True/False) |
| Number of SQL Logins | int | | Yes | | Count of SQL Authentication logins on the instance |

---

### SA_SQLServer_Authentication_Summary

**Description:** Enterprise-level summary of authentication configurations across all instances.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Configuration | varchar | 32 | Yes | | Authentication configuration category |
| Number of Instances | int | | Yes | | Count of instances with this configuration |

---

## Control Server

### SA_SQLServer_ControlServer_Details

**Description:** Lists all principals that hold the CONTROL SERVER permission (or equivalent), including those who inherit it through nested role memberships.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Grantee | nvarchar | 128 | Yes | | Principal directly granted the permission |
| Grantee Id | int | | Yes | | Grantee principal ID |
| Trustee | nvarchar | 128 | Yes | | Effective trustee who exercises the permission |
| Trustee Id | int | | Yes | | Trustee principal ID |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantor Id | int | | Yes | | Grantor principal ID |
| Source Trustee | nvarchar | 128 | Yes | | Original source of permission if inherited |
| Grantee Type | nvarchar | 120 | Yes | | Type of the grantee principal |
| Grantee SID | nvarchar | 128 | Yes | | Security Identifier of the grantee |
| Member Path | nvarchar | MAX | Yes | | Full nested role membership path |

---

### SA_SQLServer_ControlServer_DomainUsers

**Description:** Summarizes domain user access to CONTROL SERVER at the instance level with login type breakdown.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Permission Count | int | | Yes | | Total CONTROL SERVER permissions on this instance |
| SQL Logins | int | | Yes | | Count of SQL Authentication logins with CONTROL SERVER |
| Windows Logins | int | | Yes | | Count of Windows logins with CONTROL SERVER |
| Non Default Logins | int | | Yes | | Count of non-default logins with CONTROL SERVER |

---

### SA_SQLServer_ControlServer_InstanceSummary

**Description:** Per-instance count of principals with CONTROL SERVER permission.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Count | int | | Yes | | Number of principals with CONTROL SERVER |

---

## Database Principals

### SA_SQLServer_DatabasePrincipals_Details

**Description:** Detailed inventory of database-level principals with type, creation/modification dates, and stale account detection.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Principal | nvarchar | 128 | Yes | | Principal name |
| Principal Type | nvarchar | 120 | Yes | | Type description (SQL_USER, WINDOWS_USER, DATABASE_ROLE, etc.) |
| Created | datetime | | Yes | | Principal creation date |
| Modified | datetime | | Yes | | Principal last modification date |
| Disabled | char | 5 | Yes | | Whether the associated login is disabled (True/False) |
| Stale Domain User | char | 5 | Yes | | Whether the domain account is stale in AD (True/False) |

---

### SA_SQLServer_DatabasePrincipals_InstanceSummary

**Description:** Per-instance summary of database principal counts broken down by type.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Domain Principal Count | int | | Yes | | Count of domain-based principals |
| SQL User Count | int | | Yes | | Count of SQL authentication users |
| Certificate Mapped User Count | int | | Yes | | Count of certificate-mapped users |
| Database Role Count | int | | Yes | | Count of database roles |

---

## Database Size

### SA_SQLServer_DatabaseSize_Details

**Description:** Detailed database and file sizing information including space used, free space, and growth settings.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Host | nvarchar | 256 | Yes | | Host machine name |
| Instance | nvarchar | 256 | Yes | | SQL Server instance name |
| Database | nvarchar | 255 | Yes | | Database name |
| Database Size (GB) | decimal | (18,3) | Yes | | Total database size in gigabytes |
| Database Size (MB) | decimal | (18,3) | Yes | | Total database size in megabytes |
| Space Used (MB) | decimal | (18,3) | Yes | | Space used in megabytes |
| Free Space (MB) | decimal | (18,3) | Yes | | Free space in megabytes |
| File | nvarchar | 256 | Yes | | Database file logical name |
| File Path | nvarchar | 260 | Yes | | Physical file path |
| State | nvarchar | 255 | Yes | | File state (ONLINE, OFFLINE, etc.) |
| Growth (MB) | decimal | (18,3) | Yes | | Auto-growth increment in MB |
| Max Size (MB) | nvarchar | 60 | Yes | | Maximum file size (or UNLIMITED) |

---

### SA_SQLServer_DatabaseSize_Summary

**Description:** Per-host summary of total database storage consumption.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Host | nvarchar | 256 | Yes | | Host machine name |
| Size (GB) | decimal | (18,3) | Yes | | Total database size across all databases on the host |

---

## Direct Permissions

### SA_SQLServer_DirectPermissions_DatabaseDetails

**Description:** Lists direct (non-inherited) permissions at the database level with grantee, trustee, and grantor resolution.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Grantee | nvarchar | 128 | Yes | | Principal directly granted the permission |
| Grantee Id | nvarchar | 128 | Yes | | Grantee identifier |
| Trustee | nvarchar | 128 | Yes | | Effective trustee exercising the permission |
| Trustee Id | nvarchar | 128 | Yes | | Trustee identifier |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantee SID | nvarchar | 128 | Yes | | Security Identifier of the grantee |

---

### SA_SQLServer_DirectPermissions_DatabaseSummary

**Description:** Count of direct permissions per database.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Direct Permissions | int | | Yes | | Total count of direct permissions |

---

### SA_SQLServer_DirectPermissions_SchemaDetails

**Description:** Lists direct permissions at the schema level.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Grantee | nvarchar | 128 | Yes | | Principal directly granted the permission |
| Grantee Id | nvarchar | 128 | Yes | | Grantee identifier |
| Trustee | nvarchar | 128 | Yes | | Effective trustee |
| Trustee Id | nvarchar | 128 | Yes | | Trustee identifier |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantee SID | nvarchar | 128 | Yes | | Security Identifier of the grantee |

---

### SA_SQLServer_DirectPermissions_SchemaSummary

**Description:** Count of direct schema-level permissions per database.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Direct Permissions | int | | Yes | | Total count of direct schema permissions |

---

### SA_SQLServer_DirectPermissions_ServerDetails

**Description:** Lists direct permissions at the server level.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Server | nvarchar | 128 | Yes | | SQL Server instance name |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Grantee | nvarchar | 128 | Yes | | Principal directly granted the permission |
| Grantee Id | nvarchar | 128 | Yes | | Grantee identifier |
| Trustee | nvarchar | 128 | Yes | | Effective trustee |
| Trustee Id | nvarchar | 128 | Yes | | Trustee identifier |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantee SID | nvarchar | 128 | Yes | | Security Identifier of the grantee |

---

### SA_SQLServer_DirectPermissions_ServerSummary

**Description:** Count of direct server-level permissions per instance.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Server | nvarchar | 128 | Yes | | SQL Server instance name |
| Direct Permissions | int | | Yes | | Total count of direct server permissions |

---

## Domain User Permissions

### SA_SQLServer_DomainUserPermissions_Details

**Description:** Detailed listing of permissions held by domain user accounts, including effective permissions gained through role membership.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Trustee | nvarchar | 513 | Yes | | Domain user/group exercising the permission |
| Disabled | nvarchar | 5 | Yes | | Whether the account is disabled |
| Trustee Type | nvarchar | 128 | Yes | | Principal type (WINDOWS_LOGIN, WINDOWS_GROUP, etc.) |
| Trustee SID/ID | varchar | 184 | Yes | | Security Identifier or principal ID |
| Source Trustee | nvarchar | 128 | Yes | | Original source if permission is inherited |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Object | nvarchar | 128 | Yes | | Target securable object |
| Object Type | nvarchar | 120 | Yes | | Securable object type |
| Path | nvarchar | MAX | Yes | | Full role membership path to permission |

---

### SA_SQLServer_DomainUserPermissions_Summary

**Description:** Enterprise-level summary of domain user permissions.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Trustee | nvarchar | 128 | Yes | | Domain user/group name |
| SID/ID | nvarchar | 184 | Yes | | Security Identifier |
| Permissions | int | | Yes | | Total permission count |
| Instances | int | | Yes | | Number of instances where user has permissions |
| Stale Domain Account | varchar | 5 | Yes | | Whether the account is stale in AD (True/False) |

---

## Effective Role Members

### SA_SQLServer_EffectiveRoleMember_Summary

**Description:** Per-instance summary of effective (transitive) role memberships with login type breakdown.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 256 | Yes | | SQL Server instance name |
| Role Membership Count | int | | Yes | | Total effective role memberships |
| Domain Login | int | | Yes | | Count of domain login memberships |
| SQL Login | int | | Yes | | Count of SQL login memberships |

---

## Instance Summary

### SA_SQLServer_InstanceSummary

**Description:** High-level overview of scanned SQL Server instances with counts of key objects.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 10 | No | | SQL platform variant identifier |
| Instances | int | | Yes | | Total number of instances |
| Databases | int | | Yes | | Total number of databases |
| Tables | int | | Yes | | Total number of tables |
| Users | int | | Yes | | Total number of users/principals |
| Roles | int | | Yes | | Total number of roles |

---

## Logons

### SA_SQLServer_Logons_Details

**Description:** Detailed login event records (both successful and failed) from audit logs.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 10 | No | | SQL platform variant identifier |
| Host | varchar | 100 | Yes | | Host machine name |
| Instance | varchar | 100 | Yes | | SQL Server instance name |
| Event Date | datetime | | Yes | | Date/time of the login event |
| Trustee | varchar | 1000 | Yes | | Principal who attempted to log in |
| Client | varchar | 250 | Yes | | Client IP or hostname |
| Type | varchar | 50 | Yes | | Login type (Successful/Failed) |

---

### SA_SQLServer_Logons_Summary

**Description:** Per-instance summary of login events with success/failure counts.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 10 | No | | SQL platform variant identifier |
| Host | varchar | 100 | Yes | | Host machine name |
| Instance | varchar | 100 | Yes | | SQL Server instance name |
| Failed Logins | int | | Yes | | Count of failed login attempts |
| Successful Logins | int | | Yes | | Count of successful logins |
| Trustee Count | int | | Yes | | Number of distinct principals who logged in |

---

## Password Issues

### SA_SQLServer_PasswordIssues_Details

**Description:** Lists SQL logins with password policy violations (weak passwords, shared passwords, blank passwords, etc.).

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Username | nvarchar | 128 | Yes | | SQL login name |
| User Id | int | | Yes | | Principal ID |
| User SID | varchar | 128 | Yes | | Security Identifier |
| Type | nvarchar | 120 | Yes | | Principal type description |
| Issue | nvarchar | 56 | Yes | | Password issue type (Weak, Blank, Shared, etc.) |
| Disabled | nvarchar | 28 | Yes | | Whether the login is disabled |
| Created Date | datetime | | Yes | | Login creation date |
| Modified Date | datetime | | Yes | | Login last modification date |
| Value | nvarchar | 512 | Yes | | Additional context for the issue |
| Users with Shared Passwords | nvarchar | MAX | Yes | | List of other users sharing the same password hash |

---

### SA_SQLServer_PasswordIssues_Summary

**Description:** Per-instance count of weak passwords.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Weak Passwords | int | | Yes | | Count of SQL logins with password issues |

---

## Permission Changes

### SA_SQLServer_PermissionChanges_Details

**Description:** Audit trail of permission modification events (GRANT, DENY, REVOKE operations).

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| User | nvarchar | 128 | Yes | | Principal who made the change |
| Action | nvarchar | 128 | Yes | | Action performed (GRANT, DENY, REVOKE) |
| Object | nvarchar | 128 | Yes | | Target object of the permission change |
| Date | datetime2 | | No | | Timestamp of the permission change |
| Client | nvarchar | 128 | Yes | | Client IP or hostname |
| Application | nvarchar | 128 | Yes | | Application name |

---

### SA_SQLServer_PermissionChanges_InstanceSummary

**Description:** Per-instance count of permission change events.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Permission Changes | int | | Yes | | Total number of permission change events |

---

## Public Permissions

### SA_SQLServer_PublicPermissions_Details

**Description:** Lists all permissions granted to the `public` database role, which are inherited by every database user.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Object | nvarchar | 128 | Yes | | Securable object name |
| Object Type | nvarchar | 120 | Yes | | Object type description |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantee | nvarchar | 128 | Yes | | Grantee (always `public`) |
| Default SQL Object | varchar | 5 | No | | Whether this is a default SQL Server object (True/False) |

---

### SA_SQLServer_PublicPermissions_DatabaseSummary

**Description:** Per-database count of public role permissions.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Public Permissions | int | | Yes | | Count of permissions granted to public |

---

### SA_SQLServer_PublicPermissions_InstanceSummary

**Description:** Per-instance count of public role permissions across all databases.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Public Permissions | int | | Yes | | Total public permissions across all databases |

---

### SA_SQLServer_PublicPermissions_NonDefault

**Description:** Lists non-default public role permissions — permissions on objects not shipped by Microsoft. These represent potential security risks.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Object | nvarchar | 128 | Yes | | Securable object name |
| Object Type | nvarchar | 120 | Yes | | Object type description |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantee | nvarchar | 128 | Yes | | Grantee (always `public`) |
| Default SQL Object | varchar | 5 | No | | Always `False` (filtered to non-default only) |

---

## Role Members

### SA_SQLServer_RoleMember_Details

**Description:** Detailed listing of direct role membership relationships at both server and database levels with type classification and stale account detection.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Instance Id | int | | Yes | | Internal instance ID |
| Database | nvarchar | 128 | Yes | | Database name (NULL for server roles) |
| Database Id | int | | Yes | | Internal database ID |
| Role | nvarchar | 128 | Yes | | Role name |
| Role Id | int | | No | | Role principal ID |
| Role SID String | varchar | 100 | Yes | | Role SID as human-readable string |
| Role Type | nvarchar | 27 | Yes | | Role type (SERVER_ROLE, DATABASE_ROLE) |
| Role Member | nvarchar | 128 | Yes | | Member principal name |
| Role Member Id | int | | No | | Member principal ID |
| Role Member Type | nvarchar | 27 | Yes | | Member type (SQL_LOGIN, WINDOWS_LOGIN, etc.) |
| Role Member SID String | varchar | 100 | Yes | | Member SID as human-readable string |
| Disabled | varchar | 5 | No | | Whether the member is disabled (True/False) |
| Stale Domain User | varchar | 5 | No | | Whether the domain account is stale (True/False) |

---

### SA_SQLServer_RoleMember_Summary

**Description:** Per-instance summary of role memberships broken down by server/database and login type.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Role Membership Count | int | | Yes | | Total role memberships |
| Server Role Membership | int | | Yes | | Server-level role memberships |
| Server Role Domain Login | int | | Yes | | Domain logins in server roles |
| Server Role SQL Login | int | | Yes | | SQL logins in server roles |
| Database Role Membership | int | | Yes | | Database-level role memberships |
| Database Role Domain User | int | | Yes | | Domain users in database roles |
| Database Role SQL User | int | | Yes | | SQL users in database roles |

---

## Security Assessment

### SA_SQLServer_SecurityAssessment_Results

**Description:** Individual security check results with risk ratings.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Category | nvarchar | MAX | Yes | | Security check category |
| Check | nvarchar | MAX | Yes | | Name/description of the security check |
| Finding | int | | Yes | | Finding count (0 = pass) |
| Risk | nvarchar | MAX | Yes | | Risk level (No Findings, Low, Medium, High) |

---

### SA_SQLServer_SecurityAssessment_CategorySummary

**Description:** Aggregated security assessment results by category with risk distribution.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Category | nvarchar | MAX | Yes | | Security check category name |
| No Findings | int | | Yes | | Count of checks with no findings |
| Low | int | | Yes | | Count of low-risk findings |
| Medium | int | | Yes | | Count of medium-risk findings |
| High | int | | Yes | | Count of high-risk findings |
| Total Exceptions | int | | Yes | | Total number of exceptions/findings |

---

## Sensitive Data

### SA_SQLServer_SensitiveData_Details

**Description:** Detailed SDD scan results showing which tables contain sensitive data, matched criteria, and hit counts.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Schema | nvarchar | 128 | Yes | | Schema name |
| Table | nvarchar | 128 | Yes | | Table name containing sensitive data |
| Criteria | nvarchar | MAX | Yes | | Matched SDD criteria name(s) |
| Table Row Count | bigint | | Yes | | Total rows in the table |
| Match Count | bigint | | Yes | | Number of sensitive data matches |
| Match Types | nvarchar | MAX | Yes | | Types of matches found |
| Match Hits | nvarchar | MAX | Yes | | Sample match hit data |

---

### SA_SQLServer_SensitiveData_DatabaseSummary

**Description:** Per-database summary of SDD findings.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Tables With Sensitive Data | int | | Yes | | Count of tables with SDD matches |
| Match Count | bigint | | Yes | | Total match count |

---

### SA_SQLServer_SensitiveData_EnterpriseSummary

**Description:** Enterprise-wide rollup of sensitive data findings by criteria category.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Category | nvarchar | 512 | Yes | | SDD criteria category name |
| Matches | bigint | | Yes | | Total matches across enterprise |
| Instances | bigint | | Yes | | Number of affected instances |
| Databases | bigint | | Yes | | Number of affected databases |
| Tables | bigint | | Yes | | Number of affected tables |

---

## Sensitive Data Activity

### SA_SQLServer_SensitiveDataActivity_Details

**Description:** Activity events on tables that contain sensitive data, correlating audit events with SDD findings.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 266 | Yes | | SQL Server instance name |
| Activity Date | datetime | | Yes | | Timestamp of the activity event |
| User | nvarchar | 266 | Yes | | Principal who performed the action |
| Object | nvarchar | 128 | Yes | | Object name containing sensitive data |
| Object ID | bigint | | Yes | | Internal object ID |
| Column | nvarchar | 128 | Yes | | Column name if column-level access |
| Client | nvarchar | 128 | Yes | | Client IP or hostname |
| Application | nvarchar | 128 | Yes | | Application name |
| Action | nvarchar | 56 | Yes | | Action type (SELECT, INSERT, UPDATE, etc.) |
| Criteria | nvarchar | 256 | Yes | | SDD criteria name(s) for the object |
| Match Data | nvarchar | 256 | Yes | | Sample match data |

---

### SA_SQLServer_SensitiveDataActivity_UserSummary

**Description:** Per-user summary of activity on sensitive data objects.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 266 | Yes | | SQL Server instance name |
| User | nvarchar | 266 | Yes | | Principal name |
| Event Count | int | | Yes | | Total events on sensitive data |
| Last Event | datetime | | Yes | | Timestamp of the most recent event |

---

## Sensitive Data Permissions

### SA_SQLServer_SensitiveDataPermissions_Details

**Description:** Lists principals with permissions on objects containing sensitive data, with trustee resolution through role membership.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Object | nvarchar | 128 | Yes | | Object name containing sensitive data |
| Criteria | nvarchar | MAX | Yes | | SDD criteria name(s) |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Grantee | nvarchar | 513 | Yes | | Grantee principal |
| Grantee Id | nvarchar | 128 | Yes | | Grantee identifier |
| Trustee | nvarchar | 128 | Yes | | Effective trustee |
| Trustee Id | nvarchar | 128 | Yes | | Trustee identifier |
| Grantor | nvarchar | 128 | Yes | | Grantor principal |
| Source Trustee | nvarchar | 128 | Yes | | Original permission source |
| Grantee SID | varchar | 184 | Yes | | Security Identifier |

---

### SA_SQLServer_SensitiveDataPermissions_DatabaseSummary

**Description:** Per-database count of permissions on sensitive data objects.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name |
| Sensitive Data Permissions | int | | Yes | | Count of permissions on sensitive data |
| Match Count | int | | Yes | | SDD match count in the database |

---

## Server Permissions

### SA_SQLServer_ServerPermission_Details

**Description:** Detailed listing of server-level permissions with grantee, trustee, and path information for inherited permissions.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Grantee | nvarchar | 128 | Yes | | Principal directly granted the permission |
| Grantor | nvarchar | 128 | Yes | | Principal who granted the permission |
| Grantee Type | nvarchar | 128 | Yes | | Grantee principal type |
| Trustee | nvarchar | 128 | Yes | | Effective trustee |
| Grantee SID | nvarchar | 128 | Yes | | Security Identifier |
| Permission | nvarchar | 128 | Yes | | Permission name |
| Source Trustee | nvarchar | 128 | Yes | | Original permission source |
| Path | nvarchar | MAX | Yes | | Full role membership path |
| Grantable | nvarchar | 26 | Yes | | Whether the permission is grantable (WITH GRANT OPTION) |

---

### SA_SQLServer_ServerPermission_InstanceSummary

**Description:** Per-instance count of server-level permissions.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Count | int | | Yes | | Total server-level permissions |

---

## Server Principals

### SA_SQLServer_ServerPrincipals_Details

**Description:** Detailed server principal inventory with role membership aggregation and stale account detection.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Principal | nvarchar | 128 | Yes | | Principal name |
| Disabled | varchar | 5 | No | | Whether the login is disabled (True/False) |
| Created | date | | Yes | | Creation date |
| Modified | date | | Yes | | Last modification date |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Principal Type | nvarchar | 120 | Yes | | Type description (SQL_LOGIN, WINDOWS_LOGIN, etc.) |
| Roles | nvarchar | MAX | Yes | | Comma-separated list of server roles |
| Stale Domain User | varchar | 5 | No | | Whether the domain account is stale (True/False) |

---

### SA_SQLServer_ServerPrincipals_InstanceSummary

**Description:** Per-instance count of server principals.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Principals | int | | Yes | | Total number of server principals |

---

## SysAdmins

### SA_SQLServer_SysAdmins_Details

**Description:** Lists all members of the `sysadmin` fixed server role, including nested members with full membership path.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Role | nvarchar | 128 | Yes | | Role name (sysadmin or equivalent) |
| Member | nvarchar | 128 | Yes | | Member name |
| Member Type | nvarchar | 128 | Yes | | Member type description |
| Member Path | nvarchar | MAX | Yes | | Full nesting path to the role |

---

### SA_SQLServer_SysAdmins_DomainUsers

**Description:** Domain user details for sysadmin role members, enriched with Active Directory attributes.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| User | nvarchar | 513 | Yes | | Domain user name (DOMAIN\User format) |
| Display Name | nvarchar | 256 | Yes | | AD display name |
| Object SID/ID | varchar | 184 | Yes | | Security Identifier |
| DN | nvarchar | 450 | Yes | | Distinguished Name from AD |
| When Created | datetime | | Yes | | AD account creation date |
| Days Since Created | int | | Yes | | Number of days since creation |
| When Changed | datetime | | Yes | | AD account last change date |
| Days Since Changed | int | | Yes | | Number of days since last change |
| Mail | nvarchar | 256 | Yes | | Email address from AD |
| Last Logon | datetime | | Yes | | AD last logon timestamp |
| Days Since Last Logon | int | | Yes | | Number of days since last logon |
| Account Expires | datetime | | Yes | | AD account expiration date |
| Instance Count | smallint | | Yes | | Number of instances where user is sysadmin |

---

### SA_SQLServer_SysAdmins_InstanceSummary

**Description:** Per-instance count of sysadmin members.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Count | int | | Yes | | Number of sysadmin members |

---

## Unusual Activity

### SA_SQLServer_UnusualHourlyUserActivity

**Description:** Stores hourly activity counts by user with statistical outlier detection using Modified Z-Score analysis.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Username | nvarchar | 128 | Yes | | Server principal name |
| Database User | nvarchar | 128 | Yes | | Database principal name |
| Action Name | nvarchar | 128 | Yes | | Audit action name |
| Date | date | | Yes | | Activity date |
| Day | nvarchar | 30 | Yes | | Day of week |
| Hour | nvarchar | 36 | Yes | | Hour of day |
| Count | int | | Yes | | Event count for this hour |
| Median | int | | Yes | | Median event count for this user/hour |
| Modified Z-score | decimal | (10,2) | Yes | | Statistical deviation score; values > 3.5 indicate outliers |

---

### SA_SQLServer_UnusualActivitySummary

**Description:** Per-instance count of detected activity outliers.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Number of Outliers | int | | Yes | | Count of detected unusual activity events |

---

## User Logins

### SA_SQLServer_UserLogins_Details

**Description:** Comprehensive SQL login inventory with password policy, lockout, and expiration status.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Trustee | nvarchar | 128 | Yes | | Login name |
| SID | varchar | 100 | Yes | | Security Identifier |
| PrincipalType | varchar | 24 | Yes | | Principal type (SQL_LOGIN, WINDOWS_LOGIN, etc.) |
| Disabled | varchar | 5 | No | | Whether login is disabled (True/False) |
| Created | datetime | | Yes | | Login creation date |
| Last Modified | datetime | | Yes | | Login last modification date |
| Default DB | nvarchar | 128 | Yes | | Default database name |
| Policy Checked | varchar | 5 | No | | Whether password policy is enforced (True/False) |
| Expiration Checked | varchar | 5 | No | | Whether password expiration is enforced (True/False) |
| Locked | varchar | 5 | No | | Whether the login is locked out (True/False) |
| Expired | varchar | 5 | No | | Whether the password is expired (True/False) |
| Must Change | varchar | 5 | No | | Whether password must be changed at next login (True/False) |
| Permissions | bigint | | Yes | | Total number of permissions held |

---

### SA_SQLServer_UserLogins_Summary

**Description:** Per-instance summary of SQL login status with issue breakdown.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | varchar | 26 | No | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Login Count | int | | Yes | | Total SQL logins |
| Disabled Logins | int | | Yes | | Count of disabled logins |
| Policy Not Checked | int | | Yes | | Count of logins without password policy |
| Expiration Not Checked | int | | Yes | | Count of logins without expiration checking |
| Locked Logins | int | | Yes | | Count of locked out logins |
| Expired Logins | int | | Yes | | Count of expired logins |
| Must Change | int | | Yes | | Count of logins requiring password change |

---

## Best Practices

### SA_SQL_BestPractices

**Description:** Stores individual best practice check results for SQL Server instances and databases. Each row is a single configuration setting evaluated against a known best practice recommendation.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Database | nvarchar | 128 | Yes | | Database name (NULL for instance-level checks) |
| Name | nvarchar | 256 | Yes | | Best practice check name |
| Value | nvarchar | 256 | Yes | | Current configuration value |
| Description | nvarchar | MAX | Yes | | Explanation of the best practice recommendation |
| Best Practice | nvarchar | 5 | Yes | | Whether the setting meets best practice (True/False) |

---

### SA_SQL_BestPractices_Summary

**Description:** Aggregates best practice results by instance, showing pass and fail counts.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | nvarchar | 128 | Yes | | SQL Server instance name |
| Pass | int | | Yes | | Number of best practice checks passed |
| Fail | int | | Yes | | Number of best practice checks failed |

---

## CMD Shell

### SA_SQL_CMDShell_Status

**Description:** Stores xp_cmdshell and related security configuration status for SQL Server instances. Tracks dangerous server-level configuration options.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Instance | varchar | 510 | Yes | | SQL Server instance name |
| Name | varchar | 255 | Yes | | Configuration option name (e.g., xp_cmdshell) |
| Description | varchar | 255 | Yes | | Configuration option description |
| Configuration | char | 8 | Yes | | Configured value |
| Value in Use | varchar | 255 | Yes | | Current runtime value |

---

## Linked Servers

### SA_SQL_LinkedServer_Details

**Description:** Stores detailed information about linked servers configured on SQL Server instances, including security configuration and access settings.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Server Id | int | | Yes | | Linked server ID |
| Server Name | varchar | 255 | Yes | | Linked server name |
| Instance | varchar | 255 | Yes | | Host SQL Server instance name |
| Product | varchar | 255 | Yes | | Product name (e.g., SQL Server, Oracle) |
| Provider | varchar | 255 | Yes | | OLE DB provider name |
| Provider String | varchar | 255 | Yes | | Provider connection string |
| Catalog | varchar | 255 | Yes | | Default catalog/database |
| Is Linked | varchar | 5 | Yes | | Whether it is a linked server (True/False) |
| Local Login | varchar | 255 | Yes | | Local login mapped to the linked server |
| Remote Login Name | varchar | 255 | Yes | | Remote login used on the linked server |
| Linked Server Security Status | varchar | 255 | Yes | | Security mapping status description |
| RPC Out Enabled | varchar | 5 | Yes | | Whether RPC out is enabled (True/False) |
| Data Access Enabled | varchar | 5 | Yes | | Whether data access is enabled (True/False) |
| Modify Date | datetime | | Yes | | Last modification date |

---

### SA_SQL_LinkedServer_Summary

**Description:** Aggregates linked server counts per instance.

| Column Name | Data Type | Size | Nullable | Default | Description |
|---|---|---|---|---|---|
| Database Type | nvarchar | 56 | Yes | | SQL platform variant identifier |
| Server Name | varchar | 255 | Yes | | Server name |
| Instance | varchar | 255 | Yes | | SQL Server instance name |
| Linked Servers | int | | Yes | | Total number of linked servers configured |
