---
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
