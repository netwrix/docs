---
title: "Software Requirements"
description: "Software Requirements"
sidebar_position: 20
---

# Software Requirements

The following are the software requirements for Netwrix Data Classification installation:

**Operating System**
- Windows 2012 R2 and above Server Operating System Software.

**Windows Features**
- Web Server Role (IIS)
- Common HTTP Features:
  - Default Document
  - HTTP Errors
  - Static Content
  - HTTP Redirection
- Security:
  - Windows Authentication
  - Anonymous Authentication
    - **NOTE:** The Anonymous Authentication element is included in the default installation of IIS 7. Make sure you use IIS 7 and above.
- Application Development:
  - ISAPI Extensions
  - ISAPI Filters
- Other features:
  - .NET Framework Features:
    - .NET Framework 4.7.2
    - ASP.NET
  - WCF Services:
    - HTTP Activation
    - Named Pipe Activation
    - **NOTE:** To activate these features, select them under **.Net Framework Advanced Services** - **WCF Services** from **Windows Features**.

**SQL Server**
- [SQL Server 2008 R2 Standard Edition](https://www.microsoft.com/en-us/download/details.aspx?id=26113) (or later).
- SQL Server 2016 SP2 recommended (for better performance).
- **NOTE:** For large environments, SQL Server Enterprise edition may be needed; see [Deployment Planning](/docs/dataclassification/5.6.2/deployment/deploymentplan/overview.md).

**Visual Studio**
- [Visual C++ Redistributable Packages for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145) and above.

**Other Software**

**Antivirus**
- Netwrix recommends adding NDC Index files to the list of exclusions (white list) of any installed antivirus. These files have _.CSE_ extension.
