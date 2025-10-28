---
title: "Deployment"
description: "Deployment"
sidebar_position: 10
---

## Azure Application Registration

To integrate with Microsoft Entra ID, you need to create a separate application registration in the Azure portal

### Step 1: Create the App Registration

1. In the Azure Portal, go to **Microsoft Entra ID > Manage > App registrations > + New registration**
2. Enter:
   - **Name**: Name: `NetwrixAuditor-AzureFiles` (this is an example — you can use any descriptive name for the app)
   - **Supported account types**  Accounts in this organizational directory only
   - Leave **Redirect URI** blank
3. Click **Register**

**Account Types references:**

- **[Supported account types – Microsoft identity platform](https://learn.microsoft.com/en-us/entra/identity-platform/v2-supported-account-types)**

- **[Identity and account types for single- and multitenant apps](https://learn.microsoft.com/en-us/security/zero-trust/develop/identity-supported-account-types)**



### Step 2: Gather App Details

After registration, go to the **Overview** page of your new app and copy:
- **Application (Client) ID**


### Step 3: Create a Client Secret

1. In the same app, go to **Manage > Certificates & secrets > Client secrets**
2. Click **+ New client secret**
3. Enter a description (e.g., `NetwrixSecret`) and select expiration
4. Click **Add**
5. Copy the **secret value** immediately — it won't be shown again

Netwrix Auditor uses the **App ID** + **Client Secret** for authentication

**At the end of this step, you should have:**
- Application (Client) ID
- Client Secret (Secret Value)


## Configure API Permissions


**Microsoft Graph API permissions:**


### Step 1: Add API Permissions (Optional)

1. In your app in EntraID, go to **Manage > API permissions > + Add a permission**
2. Select **Microsoft Graph > Application permissions**
3. Add appropriate Microsoft APIs based on your requirements

### Step 2: Grant Admin Consent

Click **Grant admin consent for TenantName**

**Why this is required:**
- By default, applications cannot query Microsoft Graph for directory-wide information
- Without admin consent, audit logs will only show unresolved SIDs instead of usernames, making reports incomplete and less useful

**At the end of this step, your app has granted Microsoft Graph API permissions**


## Configure Azure Storage Account for Log Storage

Azure SQL Managed Instance requires an Azure Storage Account with Blob container for audit log storage

### Step 1: Create a Resource Group (if needed)

1. In Azure Portal, search for Resource groups
2. Click + Create
3. Configure:
   - **Subscription**: Your Azure subscription
   - **Resource group name**: rg-netwrix-sqlmi (or your naming convention)
   - **Region**: Same region as your SQL Managed Instance
4. Click **Review** + **Create**, then **Create**

### Step 2: Create a Storage Account

1. Search for **Storage accounts** and click **+ Create**

2. On the **Basics** tab:
   - **Subscription**: Your subscription
   - **Resource group**: Select the created resource group
   - **Storage account name**: Must be globally unique (e.g., `stnetwrixsqlmi001`)
   - **Region**: Same as SQL Managed Instance for optimal performance
   - **Performance**: Standard (sufficient for audit logs)
   - **Redundancy**: Locally-redundant storage (LRS) or higher based on requirements

3. On the **Advanced** tab (optional):
   - **Secure transfer required**: Enabled
   - **Minimum TLS version**: Version 1.2

4. Click **Review + Create**, then **Create**

### Step 3: Create a Blob Container

1. Navigate to the deployed **Storage Account**
2. In the left menu, select **Containers** (under *Data storage*)
3. Click **+ Container**
4. Configure:
   - **Name**: `audit-logs` (consistent naming)
   - **Public access level**: Private (no anonymous access)
5. Click **Create**

### Step 4: Enable System-Assigned Managed Identity for SQL MI

1. Navigate to your **SQL Managed Instance**
2. Go to **Identity** under *Settings*
3. On the **System-assigned** tab:
   - Set **Status** to **On**
   - Click **Save**
4. Note the **Object ID** for the managed identity

### Step 5: Assign Storage Permissions

Assign the **Storage Blob Data Owner** role to the SQL Managed Instance:

1. In the **Storage Account**, go to **Access Control (IAM)**
2. Click **+ Add > Add role assignment**
3. On the **Role** tab:
   - Search and select **Storage Blob Data Owner**
4. Click **Next** to go to the **Members** tab
5. Select **Assign access to**: *Managed Identity*
6. Click **+ Select members**
7. Choose **SQL Server** and select your **SQL Managed Instance**
8. Click **Select**, then **Review + assign**


## Configure Authentication in Azure SQL Managed Instance

Create a login for the Entra ID application to access audit configuration

### Step 1: Connect to SQL Managed Instance

Use SQL Server Management Studio (SSMS) or Azure Data Studio with an account that has:

- **Azure AD admin** privileges on the SQL MI
- **sysadmin** server role or equivalent permissions



### Step 2: Create Login from External Provider

Execute the following T-SQL commands:

```sql
-- Create login using the exact Display Name from Entra ID
CREATE LOGIN [NetwrixSQLMIIntegration] FROM EXTERNAL PROVIDER;

-- Grant basic connection permission
GRANT CONNECT SQL TO [NetwrixSQLMIIntegration];

-- Grant permissions for audit configuration and monitoring
GRANT ALTER ANY SERVER AUDIT TO [NetwrixSQLMIIntegration];
GRANT VIEW ANY DATABASE TO [NetwrixSQLMIIntegration];
GRANT VIEW SERVER STATE TO [NetwrixSQLMIIntegration];
GRANT VIEW SERVER SECURITY AUDIT TO [NetwrixSQLMIIntegration]

```

**Note**: Replace NetwrixSQLMIIntegration with your actual Azure AD application name
The name must match exactly as shown in Entra ID

## Configure Server-Level Audit

Set up comprehensive server-level auditing for login events and security changes

### Step 1: Create Storage Credential

```sql
USE master;
GO

-- Create credential for Azure Blob Storage using Managed Identity
IF NOT EXISTS (SELECT * FROM sys.credentials
               WHERE name = 'https://stnetwrixsqlmi001.blob.core.windows.net/audit-logs')
BEGIN
    CREATE CREDENTIAL [https://stnetwrixsqlmi001.blob.core.windows.net/audit-logs]
    WITH IDENTITY = 'Managed Identity';
    PRINT 'Created Managed Identity credential for audit-logs container';
END
ELSE
BEGIN
    PRINT 'Credential already exists for audit-logs container';
END
GO
```

### Step 2: Create Server Audit

```sql
USE master;
GO

-- Drop existing audit if it exists (for redeployment scenarios)
IF EXISTS (SELECT * FROM sys.server_audits WHERE name = 'SERVER_AUDIT')
BEGIN
    ALTER SERVER AUDIT [SERVER_AUDIT] WITH (STATE = OFF);
    DROP SERVER AUDIT [SERVER_AUDIT];
    PRINT 'Existing server audit dropped';
END

-- Create the server audit
PRINT 'Creating server audit...';
CREATE SERVER AUDIT [SERVER_AUDIT]
TO URL (
    PATH = 'https://stnetwrixsqlmi001.blob.core.windows.net/audit-logs',
    RETENTION_DAYS = 2  -- Adjust based on your retention requirements
)
WITH (
    QUEUE_DELAY = 1000,         -- 1 second delay for better performance
    ON_FAILURE = CONTINUE,      -- Continue operation if audit fails
    AUDIT_GUID = NEWID()        -- Unique identifier for audit
);
GO
```

### Step 3: Create Server Audit Specification
```sql
-- Drop existing specification if it exists
IF EXISTS (SELECT * FROM sys.server_audit_specifications WHERE name = 'SERVER_AUDIT_SPEC')
BEGIN
    ALTER SERVER AUDIT SPECIFICATION [SERVER_AUDIT_SPEC] WITH (STATE = OFF);
    DROP SERVER AUDIT SPECIFICATION [SERVER_AUDIT_SPEC];
    PRINT 'Existing server audit specification dropped';
END

-- Create comprehensive server audit specification
CREATE SERVER AUDIT SPECIFICATION [SERVER_AUDIT_SPEC]
FOR SERVER AUDIT [SERVER_AUDIT]
    ADD (FAILED_LOGIN_GROUP),                    -- Failed login attempts
    ADD (SUCCESSFUL_LOGIN_GROUP),                -- Successful logins
    ADD (SERVER_ROLE_MEMBER_CHANGE_GROUP),       -- Server role membership changes
    ADD (SERVER_PRINCIPAL_CHANGE_GROUP),         -- Server principal changes (logins)
    ADD (LOGIN_CHANGE_PASSWORD_GROUP),           -- Password changes
    ADD (SERVER_STATE_CHANGE_GROUP),             -- Server state changes
    ADD (SERVER_OBJECT_CHANGE_GROUP),            -- Server object changes
    ADD (SERVER_PERMISSION_CHANGE_GROUP),        -- Server permission changes
    ADD (AUDIT_CHANGE_GROUP),                    -- Audit configuration changes
    ADD (SERVER_OBJECT_OWNERSHIP_CHANGE_GROUP)   -- Ownership changes
WITH (STATE = OFF);
GO

-- Enable audit specification first, then audit
ALTER SERVER AUDIT SPECIFICATION [SERVER_AUDIT_SPEC] WITH (STATE = ON);
PRINT 'Server audit specification enabled';

ALTER SERVER AUDIT [SERVER_AUDIT] WITH (STATE = ON);
PRINT 'Server audit enabled successfully!';
GO
```

## Configure Database-Level Audit

Set up database-specific auditing for comprehensive monitoring

### Database Audit Configuration Script

```sql
-- Variables - modify these for your environment
DECLARE @DatabaseName NVARCHAR(128) = 'YourDatabaseName'; -- Change to your database name
DECLARE @ServerAuditName NVARCHAR(128) = 'SERVER_AUDIT'; -- Must match your server audit name
DECLARE @DatabaseAuditSpecName NVARCHAR(128) = 'DATABASE_AUDIT_SPEC';

-- Validate database exists
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = @DatabaseName)
BEGIN
    PRINT 'Database ' + @DatabaseName + ' does not exist!';
    RETURN;
END

DECLARE @SQL NVARCHAR(MAX);

-- Switch to target database and create audit specification
SET @SQL = N'
USE [' + @DatabaseName + N'];

-- Drop existing database audit specification if it exists
IF EXISTS (SELECT * FROM sys.database_audit_specifications
           WHERE name = ''' + @DatabaseAuditSpecName + N''')
BEGIN
    PRINT ''Dropping existing database audit specification...'';
    ALTER DATABASE AUDIT SPECIFICATION [' + @DatabaseAuditSpecName + N'] WITH (STATE = OFF);
    DROP DATABASE AUDIT SPECIFICATION [' + @DatabaseAuditSpecName + N'];
END

PRINT ''Creating database audit specification for: ' + @DatabaseName + N''';

CREATE DATABASE AUDIT SPECIFICATION [' + @DatabaseAuditSpecName + N']
FOR SERVER AUDIT [' + @ServerAuditName + N']
    -- User and Role Management (CreateUserStatement, DropUserStatement, AlterUserStatement)
    ADD (DATABASE_PRINCIPAL_CHANGE_GROUP),

    -- Role Operations (CreateRoleStatement, DropRoleStatement, AlterRoleStatement)
    ADD (DATABASE_ROLE_MEMBER_CHANGE_GROUP),

    -- Permission Changes (GrantStatement, RevokeStatement, DenyStatement)
    ADD (DATABASE_PERMISSION_CHANGE_GROUP),

    -- Schema Operations (CreateSchemaStatement, DropSchemaStatement)
    ADD (SCHEMA_OBJECT_CHANGE_GROUP),

    -- Table Operations (CreateTableStatement, DropTableStatement, AlterTableStatement and etc)
    ADD (DATABASE_OBJECT_CHANGE_GROUP),

    -- Ownership Changes (AlterAuthorizationStatement)
    ADD (DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP),

    -- Backup/Restore Operations (BackupStatement, RestoreStatement)
    ADD (BACKUP_RESTORE_GROUP),

WITH (STATE = OFF);

-- Enable the database audit specification
ALTER DATABASE AUDIT SPECIFICATION [' + @DatabaseAuditSpecName + N'] WITH (STATE = ON);
PRINT ''Database audit specification enabled for: ' + @DatabaseName + N''';
';

EXEC sp_executesql @SQL;

```

##  Install and Configure Netwrix Add-on

Run the Netwrix Auditor Add-on Setup Wizard and follow these configuration steps:

### Step 1: Netwrix Auditor Server Connection

**First Screen Configuration:**

- **Endpoint URL**: URL of your Netwrix Auditor Server
- **Credentials**: Valid credentials with sufficient privileges to register and manage data sources

### Step 2: Application Settings

**Microsoft Entra ID Authentication:**

- **Tenant ID**: Directory (tenant) ID from **[Azure Application Registration](#azure-application-registration)**
- **Client ID**: Application (client) ID from **[Azure Application Registration](#step-2-gather-app-details)**
- **Client Secret**: The secret value you copied in **[Azure Application Registration](#step-3-create-a-client-secret)**

### Step 3: Target SQL Settings

**Azure SQL Managed Instance Connection:**

- **Azure SQL Server URL:**

```text
your-sql-instance.public.<region>.database.windows.net,1433
```
- **Database Name**: `master` (for audit collection)
- **Authentication**: Azure Active Directory
- **Blob Path**: Full path to audit logs container

```text
https://stnetwrixsqlmi001.blob.core.windows.net/audit-logs/<managed-instance-name>
```

### Step 4: Finalize Setup

1. Review all configuration parameters
2. Click **Run** to complete the setup
3. Monitor the initial synchronization process


