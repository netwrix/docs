---
title: "Deploy and Configure Add-On"
description: "Deploy and Configure Add-On"
sidebar_position: 20
---

# Deploy and Configure Add-On

This guide provides step-by-step instructions for deploying and configuring the Azure SQL Managed Instance add-on for Netwrix Auditor.

## Step 1: Configure Microsoft Entra ID Application

To integrate with Microsoft Entra ID, you need to create a separate application registration in the Azure portal.

### 1.1 Register a New Application

1. Navigate to the [Azure Portal](https://portal.azure.com)
2. Go to **Microsoft Entra ID** (formerly Azure Active Directory)
3. Select **App registrations** from the left-hand menu
4. Click **+ New registration**
5. Configure the application:
   - **Name**: Choose a descriptive name (e.g., `NetwrixSQLMIIntegration`)
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: Leave blank for this scenario
6. Click **Register**

### 1.2 Create a Client Secret

1. After registration, navigate to **Certificates & secrets**
2. Under **Client secrets**, click **+ New client secret**
3. Configure the secret:
   - **Description**: "Netwrix Integration Secret"
   - **Expires**: Choose appropriate expiration period (recommended: 12-24 months)
4. Click **Add**
5. **Important**: Copy the secret value - you cannot retrieve it later

### 1.3 Configure API Permissions (Optional)

If your setup requires specific Azure resource access:
1. Go to **API permissions**
2. Click **+ Add a permission**
3. Select appropriate Microsoft APIs based on your requirements
4. Grant admin consent if needed

### 1.4 Collect Required Information

Record the following values for later configuration:

- **Application (client) ID**
- **Directory (tenant) ID**
- **Client secret** value
- **Application name**

---

## Step 2: Configure Azure Storage Account for Log Storage

Azure SQL Managed Instance requires an Azure Storage Account with Blob container for audit log storage.

### 2.1 Create a Resource Group (if needed)

1. In Azure Portal, search for **Resource groups**
2. Click **+ Create**
3. Configure:
   - **Subscription**: Your Azure subscription
   - **Resource group name**: `rg-netwrix-sqlmi` (or your naming convention)
   - **Region**: Same region as your SQL Managed Instance
4. Click **Review + Create**, then **Create**

### 2.2 Create a Storage Account

1. Search for **Storage accounts** and click **+ Create**
2. On the **Basics** tab:
   - **Subscription**: Your subscription
   - **Resource group**: Select the created resource group
   - **Storage account name**: Must be globally unique (e.g., `stnetwrixsqlmi001`)
   - **Region**: Same as SQL Managed Instance for optimal performance
   - **Performance**: **Standard** (sufficient for audit logs)
   - **Redundancy**: **Locally-redundant storage (LRS)** or higher based on requirements
3. On the **Advanced** tab (optional):
   - **Secure transfer required**: Enabled
   - **Minimum TLS version**: Version 1.2
4. Click **Review + Create**, then **Create**

### 2.3 Create a Blob Container

1. Navigate to the deployed storage account
2. In the left menu, select **Containers** (under **Data storage**)
3. Click **+ Container**
4. Configure:
   - **Name**: `audit-logs` (consistent naming)
   - **Public access level**: **Private (no anonymous access)**
5. Click **Create**

### 2.4 Enable System-Assigned Managed Identity for SQL MI

1. Navigate to your **SQL Managed Instance**
2. Go to **Identity** under Settings
3. On the **System-assigned** tab:
   - Set **Status** to **On**
   - Click **Save**
4. Note the **Object ID** for the managed identity

### 2.5 Assign Storage Permissions

Assign the **Storage Blob Data Owner** role to the SQL Managed Instance:

1. In the storage account, go to **Access Control (IAM)**
2. Click **+ Add** > **Add role assignment**
3. On the **Role** tab:
   - Search and select **Storage Blob Data Owner**
4. Click **Next** to the **Members** tab
5. Select **Assign access to**: **Managed Identity**
6. Click **+ Select members**
7. Choose **SQL Server** and select your SQL Managed Instance
8. Click **Select**, then **Review + assign**

---

## Step 3: Configure Authentication in Azure SQL Managed Instance

Create a login for the Entra ID application to access audit configuration.

### 3.1 Connect to SQL Managed Instance

Use SQL Server Management Studio (SSMS) or Azure Data Studio with an account that has:
- Azure AD admin privileges on the SQL MI
- `sysadmin` server role or equivalent permissions

### 3.2 Create Login from External Provider

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
GRANT VIEW SERVER SECURITY AUDIT TO [NetwrixSQLMIIntegration];
```

> **Note**: Replace `NetwrixSQLMIIntegration` with your actual Azure AD application name. The name must match exactly as shown in Entra ID.

---

## Step 4: Configure Server-Level Audit

Set up comprehensive server-level auditing for login events and security changes.

### 4.1 Create Storage Credential

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

### 4.2 Create Server Audit

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

### 4.3 Create Server Audit Specification

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

---

## Step 5: Configure Database-Level Audit

Set up database-specific auditing for comprehensive monitoring.

### 5.1 Database Audit Configuration Script

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

---

## Step 6: Install and Configure Netwrix Add-on

### 6.1 Launch Add-on Setup Wizard

Run the Netwrix Auditor Add-on Setup Wizard and follow these configuration steps:

### 6.2 Netwrix Auditor Server Connection

**First Screen Configuration:**
- **Endpoint URL**: URL of your Netwrix Auditor Server
- **Credentials**: Valid credentials with sufficient privileges to register and manage data sources

### 6.3 Application Settings

**Microsoft Entra ID Authentication:**
- **Tenant ID**: Directory (tenant) ID from Step 1
- **Client ID**: Application (client) ID from Step 1
- **Client Secret**: The secret value you copied in Step 1

### 6.4 Target SQL Settings

**Azure SQL Managed Instance Connection:**
- **Azure SQL Server URL**:
  ```
  your-sql-instance.public.<region>.database.windows.net,1433
  ```
- **Database Name**: `master` (for audit collection)
- **Authentication**: Azure Active Directory
- **Blob Path**: Full path to audit logs container:
  ```
  https://stnetwrixsqlmi001.blob.core.windows.net/audit-logs/<managed-instance-name>
  ```

### 6.5 Finalize Setup

1. Review all configuration parameters
2. Click **Run** to complete the setup
3. Monitor the initial synchronization process

---

<!-- Note: Add screenshots to static/images/auditor/10.8/addon/azuresqlmi/ directory:
     - azure-sql-mi-wizard.gif (wizard configuration screenshot)
     - netwrix-auditor-search.png (search results in Netwrix Auditor)
-->

![Azure SQL MI - Wizard](/images/auditor/10.8/addon/azuresqlmi/azure-sql-mi-wizard.gif)

![Netwrix Auditor - Search](/images/auditor/10.8/addon/azuresqlmi/netwrix-auditor-search.png)

---

## Limitations and Considerations

### Current Limitations
- **Single Instance Support**: This add-on version supports monitoring one Azure SQL Managed Instance per installation
- **Processing Delay**: There may be a delay between events occurring and appearing in Netwrix Auditor

### Future Enhancements
- Support for multiple SQL Managed Instances
- Advanced filtering and categorization options
- Real-time event processing capabilities
- Enhanced reporting and analytics features

---

## Support and Feedback

This Azure SQL Managed Instance add-on is a **free integration solution** for Netwrix Auditor.

**We value your feedback!** Your experience and suggestions help us improve the add-on. Please share your feedback on:
- Functionality and features
- Documentation and setup process
- Additional requirements or use cases

---

## Additional Resources

### Microsoft Documentation
- [Create a storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create)
- [Azure SQL Managed Instance auditing](https://docs.microsoft.com/en-us/azure/azure-sql/managed-instance/auditing-configure)
- [Assign Azure roles using the Azure portal](https://docs.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)
