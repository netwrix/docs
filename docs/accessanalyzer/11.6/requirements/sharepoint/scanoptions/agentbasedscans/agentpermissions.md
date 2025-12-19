---
title: "SharePoint Agent Permissions"
description: "SharePoint Agent Permissions"
sidebar_position: 10
---

# SharePoint Agent Permissions

When Enterprise Auditor SharePoint scans are run in agent-based mode, the Enterprise Auditor
SharePoint Agent must be installed on the SharePoint Application server which hosts the Central
Administration component prior to executing the scans. This is typically the first server stood up
during the SharePoint farm installation process in this mode. The data collection processing is
conducted by the SharePoint Agent for the target environment. The final step in data collection is
to transfer the data collected in the SQLite databases, or Tier 2 databases, on the Enterprise
Auditor SharePoint Agent server back to the Enterprise Auditor Console server.

The Enterprise Auditor SharePoint Agent needs to be installed on the:

- SharePoint Application server hosting the Central Administration component

    - SharePoint® 2013 through SharePoint® 2019
    - Windows® Server 2012 through Windows® Server 2022

**Additional Server Requirements**

The following are additional requirements for the Enterprise Auditor SharePoint Agent server:

- .NET Framework 4.8 installed
- Port Sharing network feature

**Sensitive Data Discovery Auditing Requirement**

In addition to having the Sensitive Data Discovery Add-on be installed on the Enterprise Auditor
Console server, The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On, 64-bit version, installed on the Enterprise Auditor SharePoint
  Agent server
- .NET Framework 4.7.2 or later

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## Permissions Explained

If limited provisioning of the service account is not required by the organization, then the
following permissions are sufficient for successful agent-based scans:

- Membership in the local Administrator group on the on server where the Enterprise Auditor
  SharePoint Agent is installed

    - Only needed for agent installation

- SharePoint Application Server permissions:

    - Membership in the local Backup Operators group

        - This is required so Enterprise Auditor can read remote registry to identify if the server
          is part of the farm, what the server’s role is, and to identify the location of the
          SharePoint configuration database

    - Membership in the local WSS_WPG group

        - This is required to gain read access to system resources used by Microsoft SharePoint
          Foundation

    - Log on as a Service in the Local Security Policy
    - Full Control on the agent install directory, default path is:

        `C:\Program Files\STEALTHbits\StealthAUDIT\SPAA`

- SharePoint Farm permissions:

    - Membership in the Farm Read group at the farm level

        - This is required so the Enterprise Auditor auditing account can make calls against the
          SharePoint web services to remotely gather information around permissions, site hierarchy,
          content and more
        - If the group does not exist already, then you need to create a new group at that level and
          grant it Read access. Specifically, it is a group that exists within Central
          Administration at the farm administrator level. This group only requires Read access and
          is not giving farm admin access. Once the group is created, add the service account that
          Enterprise Auditor will be leveraging to scan SharePoint.

- Web Application permissions:

    - Custom Role with Site Collection Auditor at the web application level with the Open Items
      permission

        - This is needed for Enterprise Auditor to execute web service calls against Central
          Administration

- SharePoint Database Server permissions:

    - SPDataAccess on the SharePoint Content database and all Configuration databases

        - This permission should be applied on the desired Configuration database and all Content
          databases for the SharePoint version
        - This version-specific permission is required for Enterprise Auditor to execute read
          operations directly against the SharePoint databases, gather information from the
          configuration database regarding the names and locations of the web applications and
          content databases, and give read access around sites, roles, and users

- DB_Owner on Enterprise Auditor database if using Windows Authentication for the Storage Profile
- MySites permissions are based on the SharePointAccess Data Collector configuration option:

    - Forcing the service account to become a temporary admin of the personal sites either as the
      service account or as a member of the Company Administrators group requires SharePoint Farm
      Administrator role or Site Collection Auditor at the web application housing MySites
    - The skipping inaccessible personal sites option only scans sites where the service account has
      administrative access
    - This grants Enterprise Auditor rights to scan MySites

Additional permission models are explained for a less and least permission model.

## SharePoint Agent-Based Less Privilege Permission Model

If restricted permissions are desired by the organization, then the following permissions are needed
for the service account to successfully run SharePoint Agent-based scans.

Prior to installation of the SharePoint Agent, the service account to be supplied during
installation and later used to run the Access Auditing (SPAA) and Sensitive Data Discovery Auditing
scans against the targeted SharePoint environment needs the following permissions:

- Log on as a Service in the Local Security Policy
- Membership in the local IIS_IUSRS group
- Performance Log Users (for Sensitive Data Discovery only)

After the SharePoint Agent installation, this service account needs the following additional
permissions to run the Access Auditing (SPAA) and Sensitive Data Discovery Auditing scans:

- Site Collection Administrator on all Site Collections to be scanned
- Membership in the local Users group on the server where the SharePoint Agent is installed
- DB_Owner on Enterprise Auditor database if using Windows Authentication for the Storage Profile

If the scans include Web Application scoping, then the following permissions are needed (can be
skipped if running full farm scans):

- Membership in the local Backup Operators group
- Membership in the local WSS_WPG group
- WSS_CONTENT_APPLICATION_POOLS on the SharePoint Configuration database

After the Enterprise Auditor SharePoint Agent is installed, ensure that the service account has the
following permissions:

- Full Control on the agent install directory, default path is:

    `C:\Program Files\STEALTHbits\StealthAUDIT\SPAA`

The Enterprise Auditor SharePoint Agent utilizes Microsoft APIs. The Microsoft APIs require an
account with the following permissions in order to collect all of the data:

- WSS_CONTENT_APPLICATION_POOLS on the SharePoint Content databases
- WSS_CONTENT_APPLICATION_POOLS on the SharePoint Configuration database

:::note
If scans include Web Application scoping, this last permission requirement is already met.
:::


## SharePoint Agent-Based Least Privilege Permission Model

If a least privilege model is required by the organization, then the following permissions are
needed for the service account to successfully run SharePoint Agent-based scans.

Prior to installation of the SharePoint Agent, the service account to be supplied during
installation and later used to run the Access Auditing (SPAA) and Sensitive Data Discovery Auditing
scans the targeted SharePoint environment needs the following permissions:

- Log on as a Service in the Local Security Policy
- Service Account SID added to the `SMSvcHost.exe.config` file
- Performance Log Users (for Sensitive Data Discovery only)

After the SharePoint Agent installation, this service account needs the following additional
permissions to run the Access Auditing (SPAA) scans:

- Site Collection Administrator on all Site Collections to be scanned
- Membership in the local Users group on the server where the SharePoint Agent is installed
- DB_Owner on Enterprise Auditor database if using Windows Authentication for the Storage Profile

If the scans include Web Application scoping, then the following permissions are needed (can be
skipped if running full farm scans):

- READ Access on the following registry keys:

    - `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`
    - `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg\AllowPaths`
    - `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg\AllowExactPaths`
    - For SharePoint 2013:

        - `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Web Server Extensions\15.0\Secure`
        - `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Web Server Extensions\15.0\Secure\ConfigDB`

- DB_DataReader on the SharePoint Configuration database
- `'GRANT EXECUTE'` permissions on the following stored procedures in the SharePoint Configuration
  database:

    - `proc_getObject`
    - `proc_getObjectsByClass`
    - `proc_getObjectsByBaseClass`
    - `proc_getDependentObjectsByBaseClass`
    - `proc_ReturnWebFeatures`

After the Enterprise Auditor SharePoint Agent is installed, ensure that the service account has the
following permissions:

- Full Control on the agent install directory, default path is:

    `C:\Program Files\STEALTHbits\StealthAUDIT\SPAA`

The Enterprise Auditor SharePoint Agent utilizes Microsoft APIs. The Microsoft APIs require an
account with the following permissions in order to collect all of the data:

- `'GRANT EXECUTE'` permissions on the following stored procedures in the SharePoint Configuration
  database:

    - `proc_getObject`
    - `proc_getObjectsByClass`
    - `proc_getObjectsByBaseClass`
    - `proc_getDependentObjectsByBaseClass`
    - `proc_ReturnWebFeatures`

        :::note
        The above four stored procedures would already have the correct permissions if Web
        Application scoping is desired.
        :::


    - `[dbo].proc_getSiteName`
    - `[dbo].proc_getSiteMap`
    - `[dbo].proc_getSiteMapById`

- DB_DataReader on the SharePoint Content databases and SharePoint AdminContent database, if
  applicable
- `'GRANT EXECUTE'` permissions on the following stored procedures in the SharePoint Content
  databases and SharePoint AdminContent database (if applicable):

    - `[dbo].proc_EnumLists`
    - `[dbo].proc_GetTpWebMetaDataAndListMetaData`
    - `[dbo].proc_GetListMetaDataAndEventReceivers`
    - `[dbo].proc_GetSiteProps`
    - `[dbo].proc_GetListWebParts`
    - `[dbo].proc_GetWebFeatureList`
    - `[dbo].proc_GetListFields`
    - `[dbo].proc_GetDocsMetaInfo`
    - `[dbo].proc_GetDocIdUrl`
    - `[dbo].proc_ListChildWebs`
    - `[dbo].proc_ListChildWebs`
    - `[dbo].proc_ListUrls`
    - `[dbo].proc_ListChildWebs`
    - `[dbo].proc_SecListAllSiteMembers`
    - `[dbo].proc_SecRefreshToken`
    - `[dbo].proc_SecListSiteGroups`
    - `[dbo].proc_SecListSiteGroupMembership`
    - `[dbo].proc_SecGetRoleDefs`
    - `[dbo].proc_SecListSiteGroups`
    - `[dbo].proc_SecListScopeUsers`
    - `[dbo].proc_SecListScopeGroups`
    - `[dbo].proc_SecAddWebMembership`
    - `[dbo].proc_SecGetSecurityInfo`
    - `[dbo].proc_SecGetPrincipalByLogin`
    - `[dbo].proc_SecGetPrincipalDisplayInformation20`
    - `[dbo].proc_SecGetRoleBindingsForAllPrincipals`
