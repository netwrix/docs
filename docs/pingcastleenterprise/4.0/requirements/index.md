---
sidebar_position: 1
sidebar_label: Requirements
---
# PingCastle Enterprise Requirements

**System Specifications**

PingCastle Enterprise requires:

- Windows Server operating systems that support ASP.NET 10.0
  - Windows Server 2016
  - Windows Server 2019
  - Windows Server 2022 (recommended)
  - Windows Server 2025 (recommended)

To check Windows Server support lifecycle details, refer to the [Windows Lifecycle Fact Sheet](https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet).

For ASP.NET 10.0 operating system compatibility, refer to the [.NET 10.0 supported OS documentation](https://learn.microsoft.com/en-us/dotnet/core/install/windows#supported-versions).

**PingCastle.exe**

The PingCastle.exe scanner targets .NET 10.0 (`net10.0-windows`) and is self-contained: it bundles its own runtime and has no ASP.NET dependency. It can run on any Windows operating system without additional dependencies. The Enterprise server component, by contrast, requires the ASP.NET Core 10.0 Hosting Bundle — see [External System Dependencies](#external-system-dependencies).

## Database

PingCastle Enterprise requires a Microsoft SQL Server database to store its data.

Supported database editions:

- **SQL Server Express**: Suitable for testing and lite user environments
- **SQL Server Standard**: Recommended for production environments as needed
- **SQL Server Enterprise**: Supported for high-availability production environments

PingCastle Enterprise uses Entity Framework Core 10.0.8 (the `Microsoft.EntityFrameworkCore.SqlServer`, `Relational`, `Design`, `Tools`, and `InMemory` packages) for database operations, with the Npgsql provider at version 10.0.2 for PostgreSQL. PingCastle Enterprise provides partial support for PostgreSQL on a best-effort basis. It doesn't specifically support other database engines.

### General database requirements

Database backups are the customer's responsibility.

PingCastle Enterprise requires a database user account with database owner permissions. The application automatically creates and updates database tables during initial setup and software updates.

### SQL Server permissions

When connecting to an existing database, the account PingCastle Enterprise uses requires database owner permissions. If PingCastle Enterprise runs under the IIS application pool's Windows account, grant permissions with the following SQL:

```sql
IF NOT EXISTS (SELECT loginname FROM master.dbo.syslogins
WHERE loginname = 'IIS APPPOOL\PingCastleEnterprise')
BEGIN
    CREATE LOGIN [IIS APPPOOL\PingCastleEnterprise] FROM WINDOWS;
END

USE PingCastleEnterprise;
EXEC sp_addrolemember 'db_owner', 'IIS APPPOOL\PingCastleEnterprise';
```

## External System Dependencies

PingCastle Enterprise requires:

- **ASP.NET 10.0 Hosting Bundle**: Required for hosting the web application
- **IIS (Internet Information Services)**: Serves as the web server, with Windows Authentication enabled by default

:::info
PingCastleEnterpriseInstaller.exe installs and configures IIS, Windows Authentication, and the ASP.NET 10.0 Hosting Bundle automatically. Manual installation is only necessary if you're preparing a server in advance or troubleshooting.
:::

## Logon Providers

PingCastle Enterprise supports multiple authentication methods:

- **Local Authentication**: Built-in username and password authentication
- **Windows Authentication**: Integrated Windows authentication using Active Directory credentials
- **OpenID Connect**: Standards-based authentication with identity providers such as Entra ID, Okta, and others
- **SAML2**: SAML 2.0 federation for enterprise single sign-on solutions
- **Certificate Authentication**: Authenticates users with a client SSL certificate presented to IIS
- **Header Authentication**: Delegates authentication to a reverse proxy that sets a header identifying the authenticated user

## Network ports

### PingCastle Enterprise Server

| Service | Port | Protocol | Notes |
|---------|------|----------|-------|
| HTTP | 80 | TCP | Optional; typically redirects to HTTPS |
| HTTPS | 443 | TCP | Recommended |

### Active Directory Scanning

| Service | Ports | Protocol | Notes |
|---------|---------|----------|-------|
| LDAP | 389 | TCP/UDP | LDAP - Fallback when ADWS isn't present. Less performant |
| LDAPS | 636 | TCP | Checks for LDAPS <br /> Also you can run the entire scan with LDAPS using `-port 636` in the command line|
| Kerberos | 88 | TCP/UDP | |
| DNS | 53 | TCP/UDP | |
| SMB | 445 | TCP | |
| ADWS | 9389 | TCP | Active Directory Web Services for performant scans |

### Entra Scanning

| Service | Port | Protocol | Notes |
|---------|------|----------|-------|
| Microsoft Graph | 443 | TCP | HTTPS outbound from the CloudAPI service |
| Microsoft 365 (SharePoint, Teams, Exchange, Azure role-based access control (RBAC)) | 443 | TCP | HTTPS outbound from the CloudAPI service |
