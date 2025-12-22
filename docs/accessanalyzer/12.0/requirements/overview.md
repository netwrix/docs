---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of the organization, it is recommended to review
your environment and requirements with a Netwrix engineer prior to deployment to ensure all
exceptions are covered.

## Architecture Overview

The following servers and applications are required for installation of the application:

**Core Components**

- Access Analyzer Console Server – This is where the v12.0 application is installed.
- SQL Server for Access Analyzer Database – As a data-intensive application, a well-provisioned,
  dedicated SQL Server is recommended.
- Access Information Center Application Server – This application is typically installed on the
  Access Analyzer Console server and is a browser-based, interactive dashboard for exploring
  permissions, activity, and sensitive data.

    :::note
    The Access Information Center is often installed on the same server as the Access
    Analyzer application, but it can be installed separately.
    :::


**Exchange Solution-Specific Components**

- Access Analyzer MAPI CDO – This application is installed on the Access Analyzer Console server to
  enable the Settings > Exchange global configuration interface within Access Analyzer.

**File System Solution-Specific Components**

- Access Analyzer File System Proxy Server – In certain environments, a proxy server may be utilized
  to scan hosts in remote or firewalled sites to increase scan capacity in large environments. This
  feature can be implemented through either an applet or a service. The applet would be deployed as
  part of the data collection process. The service should be installed prior to data collection. See
  the [Proxy Mode as a Service](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md#proxy-mode-as-a-service) topic
  for server requirements.

**SharePoint Solution-Specific Components**

- Access Analyzer SharePoint Agent Server – For agent-based scans, this application can be installed
  on the SharePoint application server that hosts the “Central Administration” component of the
  targeted farm(s) to auditing permissions, content, and sensitive data for SharePoint On-Premise.
  See the [SharePoint Scan Options](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/scanoptions.md) topic for server
  requirements.

**Activity Event Data Considerations**

- Netwrix Activity Monitor – Access Analyzer depends upon integration with the Activity Monitor for
  monitored event data for several solutions. See the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for installation requirements and information on collecting activity data.
- Netwrix Threat Prevention – Access Analyzer can integrate with Threat Prevention for Active
  Directory and Windows File System event data. This integration works in conjunction with Netwrix
  Activity Monitor. See the
  [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
  for installation requirements and information on collecting activity data.

**Target Environment Considerations**

The target environment encompasses all servers, devices, or infrastructure to be audited by Access
Analyzer. Most solutions have additional target requirements.

## Access Analyzer Console & Access Information Center Server Requirements

The server can be physical or virtual. The requirements are:

- Windows Server 2016 through Windows Server 2022

Additionally the server must meet these requirements:

- US English language installation
- Domain member

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment. See the following topics for
additional:

- [Active Directory Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/activedirectory/activedirectory.md#active-directory-solution-requirements-on-the-access-analyzer-console)
- [Active Directory Permissions Analyzer Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/activedirectorypermissionsanalyzer/activedirectorypermissionsanalyzer.md#active-directory-permissions-analyzer-solution-requirements-on-the-access-analyzer-console)
- [AWS Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/aws/aws.md#aws-solution-requirements-on-the-access-analyzer-console)
- [Box Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/box/box.md#box-solution-requirements-on-the-access-analyzer-console)
- [Databases Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/databases/databases.md#databases-solution-requirements-on-the-access-analyzer-console)
- [Dropbox Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/dropbox/dropbox.md#dropbox-solution-requirements-on-the-access-analyzer-console)
- [Entra ID Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/entraid/entraid.md#entra-id-solution-requirements-on-the-access-analyzer-console)
- [Exchange Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/exchange/exchange.md#exchange-solution-requirements-on-the-access-analyzer-console)
- [File System Solution Requirements on the Access Analyzer Console ](/docs/accessanalyzer/12.0/requirements/filesystem/filesystem.md#file-system-solution-requirements-on-the-access-analyzer-console)
- [SharePoint Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint.md#sharepoint-solution-requirements-on-the-access-analyzer-console)
- [Unix Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/unix/unix.md#unix-solution-requirements-on-the-access-analyzer-console)
- [Windows Solution Requirements on the Access Analyzer Console](/docs/accessanalyzer/12.0/requirements/windows/windows.md#windows-solution-requirements-on-the-access-analyzer-console)

**Additional Server Requirements**

The following are additional requirements for the Console server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article.
- Microsoft SQL Server supports TLS 1.2, which requires the Access Analyzer Console server to have
  either SQL Server Native Client 11 or Microsoft OleDB 18 installed

**Additional Server Considerations**

The following are recommended for the Console server:

- 100/1000 Mb Network Connection
- SQL Server Management Studio installed (Optional)
- Font "arial-unicode-ms" installed (Needed for report Unicode character support)

**Permissions for Installation**

The following permissions are required to install and use the application:

- Membership in the local Administrators group for the Access Analyzer Console server

    :::note
    Role based access can be enabled for a least privilege user model.
    :::


**Supported Browsers**

The following is a list of supported browsers for the Web Console and the Access Information Center:

- Google® Chrome®
- Microsoft® Edge®
- Mozilla® Firefox®

## SQL Server Requirements

The server requirements include one of the following SQL Server versions:

- SQL Server 2016 through SQL Server 2022
- Azure SQL Managed Instances

Additionally the server must meet this requirement:

- US English language installation

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment. See the following topics for
additional:

- [Active Directory Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/activedirectory/activedirectory.md#active-directory-solution-requirements-on-the-sql-server)
- [Active Directory Permissions Analyzer Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/activedirectorypermissionsanalyzer/activedirectorypermissionsanalyzer.md#active-directory-permissions-analyzer-solution-requirements-on-the-sql-server)
- [AWS Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/aws/aws.md#aws-solution-requirements-on-the-sql-server)
- [Box Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/box/box.md#box-solution-requirements-on-the-sql-server)
- [Databases Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/databases/databases.md#databases-solution-requirements-on-the-sql-server)
- [Entra ID Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/entraid/entraid.md#entra-id-solution-requirements-on-the-sql-server)
- [Exchange Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/exchange/exchange.md#exchange-solution-requirements-on-the-sql-server)
- [File System Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/filesystem/filesystem.md#file-system-solution-requirements-on-the-sql-server)
- [SharePoint Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint.md#sharepoint-solution-requirements-on-the-sql-server)
- [Unix Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/unix/unix.md#unix-solution-requirements-on-the-sql-server)
- [Windows Solution Requirements on the SQL Server](/docs/accessanalyzer/12.0/requirements/windows/windows.md#windows-solution-requirements-on-the-sql-server)

**Additional Server Requirements**

The following are additional requirements for the SQL Server:

- SQL Server must be equal or newer version than the version to be targeted
- All SQL Server databases configured to use ‘Simple Recovery Model’

**Additional Server Considerations**

The following additional considerations are recommended for the SQL Server:

- The standard Autogrowth setting can cause Access Analyzer job delays. Database growth is
  computationally intensive. While SQL Server is growing the database, no other activity can occur.
  If this option is employed, please speak with a Netwrix engineer to determine an appropriate
  setting for best performance.
- Microsoft SQL Server supports TLS 1.2, which requires the Access Analyzer Console server to have
  either SQL Server Native Client 11 or Microsoft OleDB 18 installed.
- _Optional_: SQL Server Management Studio installed on the Access Analyzer Console server

**Database Permissions**

The following permissions are required on the databases:

- Database Owner
- Provisioned to use Default Schema of ‘dbo’

## Virtual Environment Recommendations

While physical machines are always preferred, we fully support the use of virtual machines. This
section contains special considerations when leveraging virtualization.

- VMWare® ESX® – If using ESX, the following specifications are recommended:

    - ESX 4.0 / ESXi™ 4.1 or higher
    - Virtual Hardware 7 or higher
    - All Virtual Machines installed on the same datacenter / rack

- Virtual Storage Consideration

    - In the server requirements, when separate disks are required for the servers, that should
      translate to separate data stores on the VM host machine.
