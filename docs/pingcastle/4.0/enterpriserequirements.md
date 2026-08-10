---
sidebar_label: Requirements
---
# PingCastle Enterprise Requirements

## Requirements

**System Specifications**

PingCastle Enterprise requires:

- Windows Server operating systems that support ASP.NET 10.0
  - Windows Server 2012 R2 (not recommended)
  - Windows Server 2016
  - Windows Server 2019
  - Windows Server 2022 (recommended)
  - Windows Server 2025 (recommended)

To check Windows Server support lifecycle details, refer to the [Windows Lifecycle Fact Sheet](https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet).

For ASP.NET 10.0 operating system compatibility, refer to the [.NET 10.0 supported OS documentation](https://learn.microsoft.com/en-us/dotnet/core/install/windows#supported-versions).

**PingCastle.exe**

The PingCastle.exe scanner has an embedded ASP.NET package and can run on any Windows operating system without additional dependencies.

### Database

PingCastle Enterprise requires a Microsoft SQL Server database to store its data.

Supported database editions:

- **SQL Server Express**: Suitable for testing and lite user environments
- **SQL Server Standard**: Recommended for production environments as needed
- **SQL Server Enterprise**: Supported for high-availability production environments

PingCastle Enterprise uses Entity Framework Core 2 for database operations. PingCastle Enterprise provides partial support for PostgreSQL on a best-effort basis at this stage. It doesn't specifically support other database engines.

### External System Dependencies

PingCastle Enterprise requires:

- **ASP.NET 10.0 Hosting Bundle**: Required for hosting the web application
- **IIS (Internet Information Services)**: Used as the web server with Windows Authentication enabled by default

:::info
PingCastleEnterpriseInstaller.exe installs and configures IIS, Windows Authentication, and the ASP.NET 10.0 Hosting Bundle automatically. Manual installation is only necessary if you're preparing a server in advance or troubleshooting.
:::

### Logon Providers

PingCastle Enterprise supports multiple authentication methods:

- **Local Authentication**: Built-in username and password authentication
- **Windows Authentication**: Integrated Windows authentication using Active Directory credentials
- **OpenID Connect**: Standards-based authentication with identity providers such as Entra ID, Okta, and others
- **SAML2**: SAML 2.0 federation for enterprise single sign-on solutions
