---
title: "Active Directory Auditing Configuration"
description: "Active Directory Auditing Configuration"
sidebar_position: 10
---

# Active Directory Auditing Configuration

The Enterprise Auditor for Active Directory Solution is compatible with the following Active
Directory versions as targets:

- Windows Server 2016 and later
- Windows 2003 Forest level or higher

:::note
See the Microsoft
[Windows Server end of support and Microsoft 365 Apps](https://learn.microsoft.com/en-us/deployoffice/endofsupport/windows-server-support)
article for additional information.
:::


**Domain Controller Requirements**

The following are requirements for the domain controllers to be scanned:

- .NET Framework 4.5+ installed
- WINRM Service installed

**Data Collectors**

Successful use of the Enterprise Auditor Active Directory solution requires the necessary settings
and permissions in a Microsoft® Active Directory® environment described in this topic and its
subtopics. This solution employs the following data collectors to scan for groups, users, computers,
passwords, permissions, group policies, and domain information:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/overview.md)
- [ActiveDirectory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/overview.md)
- [ADActivity Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adactivity/overview.md)
- [GroupPolicy Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/grouppolicy/overview.md)
- [LDAP Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/ldap.md)
- [PasswordSecurity Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/passwordsecurity/overview.md)
- [PowerShell Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/powershell/overview.md)
- [Registry Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/registry.md)

## Permissions

- Member of the Domain Administrators group

The majority of jobs in the Active Directory solutions rely on tables with queried data from the
data collectors mentioned above to perform analysis and generate reports. The remaining jobs utilize
data collectors to scan environments, and require additional permissions on the target host.

:::info
Use Domain/Local Administrator privileges to run Enterprise Auditor against an
Active Directory domain controller.
:::


There is a least privilege model for scanning your domain. See the
[Least Privilege Model](#least-privilege-model) topic for additional information.

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For ActiveDirectory Data Collector**

- TCP 389/636
- TCP 135-139
- Randomly allocated high TCP ports

**For ADActivity Data Collector**

- TCP 4494 (configurable within the Netwrix Activity Monitor)

**For GroupPolicy Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For LDAP Data Collector**

- TCP 389

**For PasswordSecurity Collector**

- TCP 389/636

**For PowerShell Data Collector**

- Randomly allocated high TCP ports

**For Registry Data Collector**

- TCP 135-139
- Randomly allocated high TCP ports

## Least Privilege Model

A least privilege model can be configured based on your auditing needs and the data collection jobs
you will be using. The following jobs and their corresponding data collectors can be run with a
least privilege permissions model.

**1-AD_Scan Job Permissions**

The ADInventory Data Collector in the .Active Directory Inventory > 1-AD_Scan Job has the following
minimum requirements, which must be configured at the Domain level in Active Directory:

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

    :::note
    See the Microsoft
    [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
    article and the Microsoft
    [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for
    additional information.
    :::


**AD_WeakPasswords Job Permissions**

The PasswordSecurity Data Collector in the 2.Users > AD_WeakPasswords Job has the following minimum
requirements:

- At the domain level:

    - Read
    - Replicating Directory Changes
    - Replicating Directory Changes All
    - Replicating Directory Changes in a Filtered Set
    - Replication Synchronization

**AD_CPassword Job Permissions**

While the PowerShell Data Collector typically requires Domain Administrator permissions when
targeting a domain controller, that level of access is not required to run the 4.Group Policy >
AD_CPasswords job. The minimum requirements for running this job are:

- Read access to SYSVOL on the targeted Domain Controller(s) and all of its children

**AD_GroupPolicy Job Permissions**

While the GroupPolicy Data Collector typically requires Domain Administrator permissions when
targeting a domain controller, that level of access is not required to run the 4.Group Policy >
AD_GroupPolicy Job. The minimum requirements for running this job are:

- Requires Read permissions on Group Policy Objects

**AD_PasswordPolicies Job Permissions**

While the LDAP Data Collector typically requires Domain Administrator permissions when targeting a
domain controller, that level of access is not required to run the 4.Group Policy >
AD_PasswordPolicies Job. The minimum requirements for running this job are:

- Requires Read permissions on the Password Settings Container

**AD_DomainControllers Job Permissions**

While the LDAP Data Collector and Active Directory Data Collector typically requires Domain
Administrator permissions when targeting a domain controller, that level of access is not required
to run the 5.Domains > 0.Collection > AD_DomainControllers Job. The minimum requirements for running
this job are:

- Read access to CN=Servers,%SITEDN% and its children
- Read access to: %PARTITIONDNS% and its children
- Read access to: %SCHEMADN%
- Read access to: %SITESDN% and its children

See the [Variable Definitions](#variable-definitions) for variable definitions.

**AD_DSRM Job Permissions**

While the Registry Data Collector typically requires Domain Administrator permissions when targeting
a domain controller, that level of access is not required to run the 5.Domains > 0.Collection >
AD_DSRM Job. The minimum requirements for running this job are:

- Requires read access to the following Registry key and its children:

  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa
  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg

Alternatively, granting access to the Server Operators group also allows read-only access to the Lsa key, just requiring access added to the winreg key.

**AD_TimeSync Job Permissions**

While the Registry Data Collector typically requires Domain Administrator permissions when targeting
a domain controller, that level of access is not required to run the 5.Domains > 0.Collection >
AD_TimeSync Job. The minimum requirements for running this job are:

- Requires Read access to the following Registry keys and its children:

  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W32Time
  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg

Alternatively, granting access to the Network Configuration Operators group also allows read-only access to the W32Time key, just requiring access added to the winreg key.

**AD_DomainInfo Job Permissions**

While the LDAP Data Collector and Active Directory Data Collector typically requires Domain
Administrator permissions when targeting a domain controller, that level of access is not required
to run the 5.Domains > AD_DomainInfo Job. The minimum requirements for running this job, which must
be configured at the Domain level in Active Directory, are:

- Read access to: %DOMAINDN% and its children
- Read access to: CN=System,%DOMAINDN% and its children
- Read access to: %SITEDN% and its children
- Read access to: %PARTITIONDNS% and its children

See the [Variable Definitions](#variable-definitions) for variable definitions.

**AD_ActivityCollection Job Permission**

The ADActivity Data Collector in the 6.Activity > 0.Collection > AD_ActivityCollection Job has the
following minimum requirements:

- Netwrix Activity Monitor API Access activity data
- Netwrix Activity Monitor API Read
- Read access to the Netwrix Activity Monitor Log Archive location

### Variable Definitions

The following variables are referenced for Active Directory Least Privileged Models:

`%PARTITIONDNS%` is the distinguished name of the accessed partition;
`CN=Partitions,CN=Configuration,DC=contoso,DC=com`

`%SITEDN%` is the distinguished name of the accessed site;
`CN=Sites,CN=Configuration,DC=contoso,DC=com`

`%CONFIGDN%` is the distinguished name of the configuration naming context;
`CN=Configuration,DC=company,DC=com`

`%SCHEMADN%` is the distinguished name of the accessed schema;
`CN=Schema,CN=Configuration,DC=company,DC=com`

`%DOMAINDN%`" is the distinguished name of the accessed domain object; `DC=company,DC=com`
