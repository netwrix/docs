---
title: "Netwrix Access Analyzer (formerly Enterprise Auditor) v12.0 Documentation"
description: "Netwrix Access Analyzer (formerly Enterprise Auditor) v12.0 Documentation"
sidebar_position: 1
---

# Netwrix Access Analyzer (formerly Enterprise Auditor) v12.0 Documentation

Netwrix Access Analyzer (formerly Enterprise Auditor) automates the collection and analysis of the
data you need to answer the most difficult questions you face in the management and security of
dozens of critical IT assets, including data, directories, and systems.

The platform framework contains the following key components:

- Data Collection through Data Collectors
- Analysis through Analysis Modules
- Remediation through Action Modules
- Reporting through Published Reports and the Web Console

Access Analyzer contains over 40 built-in data collection modules covering both on-premises and
cloud-based platforms from Operating Systems to Office 365. Leveraging an agentless architectural
approach, our proprietary AnyData collector provides an easy, wizard-driven interface for
configuring the application to collect exactly the data needed, enabling fast, flawless,
lightest-weight possible data collection from dozens of data sources.

## Instant Solutions Overview

There are several predefined instant solutions available with Access Analyzer. Each solution
contains specific data collectors, jobs, analysis modules, action modules, and pre-created reports.
A few solutions are core components available to all Access Analyzer users, but most solutions
require a license.

### .Active Directory Inventory Solution

The .Active Directory Inventory Solution is designed to provide essential user, group membership,
and computer details from the targeted domains to many Access Analyzer built-in solutions. Key
information includes user status, user attributes, and group membership. The collected data is
accessed by other Access Analyzer solutions and the Netwrix Access Information Center for analysis.

This is a core solution available to all Access Analyzer users.

See the [.Active Directory Inventory Solution](/docs/accessanalyzer/12.0/solutions/activedirectoryinventory/overview.md) topic
for additional information.

### .Entra ID Inventory Solution

The .Entra ID Inventory Solution is designed to inventory, analyze, and report on Microsoft Entra
ID. It provides essential user and group membership details to the Entra ID Solution. Key
information includes managers, email addresses, and direct memberships. Collected data helps an
organization identify toxic conditions like nested groups, circular nesting, disabled users, and
duplicate groups. The user and group information assists with understanding probable group
ownership, group memberships, largest groups, user status, attribute completion, and synchronization
status between on-premises Active Directory and Microsoft Entra ID.

This solution also provides information on Microsoft Entra roles. This includes role definitions,
role assignments, security principals, scope (management groups, subscriptions, and resources), and
effective role permissions.

This is a core solution available to all Access Analyzer users.

See the [.Entra ID Inventory Solution](/docs/accessanalyzer/12.0/solutions/entraidinventory/overview.md) topic for additional
information.

### .NIS Inventory Solution

The .NIS Inventory Solution is designed to provide essential user and group membership information
from a NIS domain, mapping these principals to Windows-style SIDs. This provides valuable
information to the File Systems Solution when auditing NFS shares.

This is a core solution available to all Access Analyzer users.

See the [.NIS Inventory Solution](/docs/accessanalyzer/12.0/solutions/nisinventory/overview.md) topic for additional
information.

### Active Directory Solution

The Active Directory Solution is designed to provide the information every administrator needs
regarding Active Directory configuration, operational management, troubleshooting, analyzing
effective permissions, and tracking who is making what changes within your organization.

See the [Active Directory Solution](/docs/accessanalyzer/12.0/solutions/activedirectory/overview.md) topic for additional
information.

### Active Directory Permissions Analyzer Solution

The Active Directory Permissions Analyzer Solution is designed to easily and automatically determine
effective permissions applied to any and all Active Directory objects, at any scope, allowing for
the most authoritative view available of who has access to what in Active Directory.

See the
[Active Directory Permissions Analyzer Solution](/docs/accessanalyzer/12.0/solutions/activedirectorypermissionsanalyzer/overview.md)
topic for additional information.

### Amazon Web Services Solution

Access Analyzer for AWS allows organizations to secure their data residing in Amazon Web Services
(AWS) S3 platform, reducing their risk exposure through proactive, automated auditing and reporting
of S3 permissions, sensitive data, and ultimately a consolidated view of user access rights across
dozens of structured and unstructured data resources both on-premises and in the cloud.

See the [AWS Solution](/docs/accessanalyzer/12.0/solutions/aws/overview.md) topic for additional information.

### Entra ID Solution

The Entra ID Solution is a comprehensive set of audit jobs and reports that provide the information
regarding Microsoft Entra ID configuration, operational management, and troubleshooting. The jobs
within this group help pinpoint potential areas of administrative and security concerns related to
Microsoft Entra ID users and groups, including syncing with on-premises Active Directory.

See the [Entra ID Solution](/docs/accessanalyzer/12.0/solutions/entraid/overview.md) topic for additional information.

### Box Solution

The Box solution set contains jobs to provide visibility into Box access rights, policies,
configurations, activities, and more, ensuring you never lose sight or control of your critical
assets residing in Box.

See the [Box Solution](/docs/accessanalyzer/12.0/solutions/box/overview.md) topic for additional information.

### Databases Solutions

Access Analyzer Databases Solution Set is a comprehensive set of pre-configured audit jobs and
reports that provide visibility into various aspects of supported databases.

- Azure SQL – The Azure SQL Solution Set is a comprehensive set of pre-configured audit jobs and
  reports that provide visibility into various aspects of Azure SQL : Users and Roles, Sensitive
  Data Discovery, Object Permissions, Configuration, and User Activity.
- Db2 – The Db2 Solution Set is a comprehensive set of pre-configured audit jobs and reports that
  provides visibility into various aspects of a Db2 Databases: Sensitive Data Discovery and Object
  Permissions.
- Instance Discovery – The Instance Discovery Solution discovers instances on supported database
  servers.
- MongoDB Solution – The MongoDB Solution automates the process of understanding where MongDB
  databases exist and provides an overview of the MongoDB environment in order to answer questions
  around data access. With visibility into every corner of MongoDB and the operating system it
  relies upon, organizations can proactively highlight and prioritize risks to sensitive data.
  Additionally, organizations can automate manual, time-consuming, and expensive processes
  associated with compliance, security, and operations to easily adhere to best practices that keep
  MongoDB Server safe and operational.
- MySQL Solution – The MySQL Solution automates the process of understanding where SQL databases
  exist and provides an overview of the MySQL environment in order to answer questions around data
  access. With visibility into every corner of Microsoft SQL Server and the Windows operating system
  it relies upon, organizations can proactively highlight and prioritize risks to sensitive data.
  Additionally, organizations can automate manual, time-consuming, and expensive processes
  associated with compliance, security, and operations to easily adhere to best practices that keep
  SQL Server safe and operational.
- Oracle Solution – The Oracle Solution delivers comprehensive permissions, activity, and sensitive
  data auditing and reporting for Oracle databases. Through the power of Access Analyzer, users can
  automate Oracle instance discovery, understand who has access to their Oracle databases, the level
  of permission they have, and who is leveraging their access privileges, identify the location of
  sensitive information, measure adherence to best practices, and generate workflows and reports to
  satisfy security, compliance, and operational requirements.
- PostgreSQL Solution – Access Analyzer PostgreSQL Solution Set is a set of pre-configured audit
  jobs and reports that provides visibility into PostgreSQL Sensitive Data.
- Redshift – Access Analyzer Redshift Solution Set is a set of pre-configured audit jobs and reports
  that provides visibility into Redshift Sensitive Data.
- SQL Solution – The SQL Solution is an auditing, compliance, and governance solution for Microsoft
  SQL Server database. Key capabilities include effective access calculation, sensitive data
  discovery, security configuration assessment, and database activity monitoring.

See the [Databases Solutions](/docs/accessanalyzer/12.0/solutions/databases/overview.md) topic for additional information.

### Dropbox Solution

The Dropbox Solution is an auditing, compliance, and governance solution for Dropbox for Business.
Key capabilities include effective access calculation, sensitive data discovery, file content
inspection, inactive access and stale data identification, and entitlement collection for
integration with Identity & Access Management (IAM) processes.

See the [Dropbox Solution](/docs/accessanalyzer/12.0/solutions/dropbox/overview.md) topic for additional information.

:::note
Sensitive data auditing requires the Sensitive Data Discovery Add-on.
:::


### Exchange Solution

The Exchange Solution provides auditing and reporting on multiple aspects of the Exchange
environment to assist with identifying risk, understanding usage, and decreasing bloat. Areas of
focus include Audit and Compliance, Maintenance and Cleanup, Metrics and Capacity, Operations and
Health, Public Folders and Configuration Baseline.

See the [Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional information.

:::note
Sensitive data auditing requires the Sensitive Data Discovery Add-on.
:::


### File Systems Solution

The File Systems Solution is an auditing, compliance, and governance solution for Windows, NAS,
Unix, and Linux file systems. Key capabilities include effective access calculation, data owner
identification, governance workflows including entitlement reviews and self-service access requests,
sensitive data discovery and classification, open access remediation, least-privilege access
transformation, and file activity monitoring.

See the [File System Solution](/docs/accessanalyzer/12.0/solutions/filesystem/overview.md) topic for additional information.

:::note
Activity auditing requires the Activity Monitor. Sensitive data auditing requires the
Sensitive Data Discovery Add-on.
:::


### SharePoint Solution

The SharePoint Solution is a comprehensive set of audit jobs and reports which provide the
information every administrator needs regarding SharePoint on-premises and SharePoint Online
infrastructure, configuration, performance, permissions, required ports, and effective rights.

See the [SharePoint Solution](/docs/accessanalyzer/12.0/solutions/sharepoint/overview.md) topic for additional information.

:::note
Sensitive data auditing requires the Sensitive Data Discovery Add-on.
:::


### Unix Solution

The Unix Solution reports on areas of administrative concern for Unix and Linux systems. Attention
is given to users and group details, privileged access rights, and NFS and Samba sharing
configurations.

See the [Unix Solution](/docs/accessanalyzer/12.0/solutions/unix/overview.md) topic for additional information.

### Windows Solution

The Windows Solution allows organizations to quickly inventory, assess, and secure their Windows
desktop and server infrastructure from a central location. Key capabilities include privileged
account discovery, security configuration and vulnerability assessment, compliance reporting, and
asset inventory.

See the [Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md) topic for additional information.
