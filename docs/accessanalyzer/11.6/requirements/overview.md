---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of your organization, review your environment
and requirements with a Netwrix engineer before deployment to ensure all exceptions are covered.

## Architecture Overview

Installing the application requires the following servers and applications:

**Core Components**

- Enterprise Auditor Console Server – This is where you install the v11.6 application.
- SQL Server for Enterprise Auditor Database – Because Enterprise Auditor is a data-intensive
  application, Netwrix recommends a well-provisioned, dedicated SQL Server.
- Access Information Center Application Server – You typically install this application on the
  Enterprise Auditor Console server. It is a browser-based, interactive dashboard for exploring
  permissions, activity, and sensitive data.

    :::note
    You often install the Access Information Center on the same server as the Enterprise
    Auditor application, but you can install it separately.
    :::


**Add-on Component**

- Enterprise Auditor Sensitive Data Discovery Add-On – You install this application on the
  Enterprise Auditor Console server as an add-on enabling Sensitive Data criteria for scans. In some
  cases you must also install it on additional servers. See the
  [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
  topic for additional information.

**Exchange Solution-Specific Components**

- Enterprise Auditor MAPI CDO – You install this application on the Enterprise Auditor Console
  server to enable the Settings > Exchange global configuration interface within Enterprise Auditor.

**File System Solution-Specific Components**

- Enterprise Auditor File System Proxy Server – In certain environments, a proxy server can scan
  hosts in remote or firewalled sites to increase scan capacity in large environments. You can
  implement this feature through either an applet or a service: the applet deploys as part of the
  data collection process, and you install the service before data collection. See the
  [Proxy Mode as a Service](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md#proxy-mode-as-a-service)
  topic for server requirements.
- Enterprise Auditor Sensitive Data Discovery Add-On – You install this application on the file
  system proxy server that hosts the File System Proxy Service, as an add-on enabling
  Sensitive Data criteria for scans.

**SharePoint Solution-Specific Components**

- Enterprise Auditor SharePoint Agent Server – For agent-based scans, you can install this
  application on the SharePoint application server that hosts the “Central Administration”
  component of the targeted farms to auditing permissions, content, and sensitive data for
  SharePoint On-Premise. See the
  [SharePoint Scan Options](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/scanoptions.md)
  topic for server requirements.
- Enterprise Auditor Sensitive Data Discovery Add-On – You install this application on the same
  server as the Enterprise Auditor SharePoint Agent, as an add-on enabling Sensitive
  Data criteria for scans.

**Activity Event Data Considerations**

- Netwrix Activity Monitor – Enterprise Auditor depends upon integration with the Activity Monitor
  for monitored event data for several solutions. See the
  [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
  for installation requirements and information on collecting activity data.
- Netwrix Threat Prevention – Enterprise Auditor can integrate with Threat Prevention for Active
  Directory and Windows File System event data. This integration works in conjunction with Netwrix
  Activity Monitor. See the
  [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
  for installation requirements and information on collecting activity data.

**Target Environment Considerations**

The target environment encompasses all servers, devices, or infrastructure that Enterprise Auditor
audits. Most solutions have additional target requirements.

## Enterprise Auditor Console & Access Information Center Server Requirements

The server can be physical or virtual. The requirements are:

- Windows Server 2016 through Windows Server 2025

Additionally the server must meet these requirements:

- English (United States) language installation
- Domain member

**RAM, CPU, and Disk Space**

These depend on the size of the target environment. See the following topics for additional
information:

- [Active Directory Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/activedirectory/activedirectory.md#active-directory-solution-requirements-on-the-enterprise-auditor-console)
- [Active Directory Permissions Analyzer Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/activedirectorypermissionsanalyzer/activedirectorypermissionsanalyzer.md#active-directory-permissions-analyzer-solution-requirements-on-the-enterprise-auditor-console)
- [AWS Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/aws/aws.md#aws-solution-requirements-on-the-enterprise-auditor-console)
- [Box Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/box/box.md#box-solution-requirements-on-the-enterprise-auditor-console)
- [Databases Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/databases/databases.md#databases-solution-requirements-on-the-enterprise-auditor-console)
- [Dropbox Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/dropbox/dropbox.md#dropbox-solution-requirements-on-the-enterprise-auditor-console)
- [Entra ID Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/entraid/entraid.md#entra-id-solution-requirements-on-the-enterprise-auditor-console)
- [Exchange Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/exchange/exchange.md#exchange-solution-requirements-on-the-enterprise-auditor-console)
- [File System Solution Requirements on the Enterprise Auditor Console ](/docs/accessanalyzer/11.6/requirements/filesystem/filesystem.md#file-system-solution-requirements-on-the-enterprise-auditor-console)
- [SharePoint Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint.md#sharepoint-solution-requirements-on-the-enterprise-auditor-console)
- [Unix Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/unix/unix.md#unix-solution-requirements-on-the-enterprise-auditor-console)
- [Windows Solution Requirements on the Enterprise Auditor Console](/docs/accessanalyzer/11.6/requirements/windows/windows.md#windows-solution-requirements-on-the-enterprise-auditor-console)

**Additional Server Requirements**

The following are additional requirements for the Console server:

- .NET Framework 4.7.2 installed, which you can download from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article.
- Microsoft SQL Server supports TLS 1.2, which requires the Enterprise Auditor Console server to
  have either SQL Server Native Client 11 or Microsoft OleDB 18 installed

**Additional Server Considerations**

The following are recommended for the Console server:

- 100/1000 Mb Network Connection
- SQL Server Management Studio installed (Optional)
- Font "arial-unicode-ms" installed (Needed for report Unicode character support)

**Permissions for Installation**

The following permissions are required to install and use the application:

- Membership in the local Administrators group for the Enterprise Auditor Console server

    :::note
    You can enable role based access for a least privilege user model.
    :::


**Supported Browsers**

The following is a list of supported browsers for the Web Console and the Access Information Center:

- Google® Chrome®
- Microsoft® Edge®
- Mozilla® Firefox®

## SQL Server Requirements

The server requirements include one of the following SQL Server versions:

- SQL Server 2016 through SQL Server 2025
- Azure SQL Managed Instances

Additionally the server must meet this requirement:

- English (United States) language installation

**RAM, CPU, and Disk Space**

These depend on the size of the target environment. See the following topics for additional
information:

- [Active Directory Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/activedirectory/activedirectory.md#active-directory-solution-requirements-on-the-sql-server)
- [Active Directory Permissions Analyzer Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/activedirectorypermissionsanalyzer/activedirectorypermissionsanalyzer.md#active-directory-permissions-analyzer-solution-requirements-on-the-sql-server)
- [AWS Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/aws/aws.md#aws-solution-requirements-on-the-sql-server)
- [Box Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/box/box.md#box-solution-requirements-on-the-sql-server)
- [Databases Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/databases/databases.md#databases-solution-requirements-on-the-sql-server)
- [Entra ID Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/entraid/entraid.md#entra-id-solution-requirements-on-the-sql-server)
- [Exchange Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/exchange/exchange.md#exchange-solution-requirements-on-the-sql-server)
- [File System Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/filesystem/filesystem.md#file-system-solution-requirements-on-the-sql-server)
- [SharePoint Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint.md#sharepoint-solution-requirements-on-the-sql-server)
- [Unix Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/unix/unix.md#unix-solution-requirements-on-the-sql-server)
- [Windows Solution Requirements on the SQL Server](/docs/accessanalyzer/11.6/requirements/windows/windows.md#windows-solution-requirements-on-the-sql-server)

**Additional Server Requirements**

The following are additional requirements for the SQL Server:

- SQL Server must be an equal or newer version than the targeted version
- All SQL Server databases configured to use ‘Simple Recovery Model’

**Additional Server Considerations**

The following additional considerations are recommended for the SQL Server:

- The standard Autogrowth setting can cause Enterprise Auditor job delays. Database growth is
  computationally intensive. While SQL Server is growing the database, no other activity can occur.
 If you use this option, speak with a Netwrix engineer to determine an appropriate
  setting for best performance.
- Microsoft SQL Server supports TLS 1.2, which requires the Enterprise Auditor Console server to
  have either SQL Server Native Client 11 or Microsoft OleDB 18 installed.
- _Optional_: SQL Server Management Studio installed on the Enterprise Auditor Console server

**Database Permissions**

The following permissions are required on the databases:

- Database Owner
- Provisioned to use Default Schema of ‘dbo’

## Virtual Environment Recommendations

While physical machines are always preferred, Enterprise Auditor fully supports virtual machines.
This section contains special considerations for virtualized environments.

- VMWare® ESX® – If you use ESX, Netwrix recommends the following specifications:

    - ESX 4.0 / ESXi™ 4.1 or higher
    - Virtual Hardware 7 or higher
    - All Virtual Machines installed on the same datacenter / rack

- Virtual Storage Consideration

    - When the server requirements call for separate disks, use separate data stores on the VM
      host machine.
