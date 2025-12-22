---
title: "Notes on Upgrade"
description: "Notes on Upgrade"
sidebar_position: 20
---

# Notes on Upgrade

Consider the following when upgrading to GroupID 11 from GroupID 9 and 10.

NOTE: In the following text, the term ‘source version’ refers to the GroupID version you are
upgrading from.

**Notes**

1. Portals from the source version will not be upgraded to GroupID 11.
2. To upgrade to GroupID 11 on a different box, the GroupID source version file system must be
   available on the GroupID 11 server. To ensure this, follow step 1 in the
   [Prerequisites for Upgrade](/docs/directorymanager/11.0/about/upgrade/overview.md#prerequisites-for-upgrade)
   topic.

    The source version file system is required for the following:

    - When you create a new portal in GroupID 11, you can import the advanced settings and design
      settings of a Self-Service portal from the source version. See step 12 in the
      [Create a Portal in Native IIS](/docs/directorymanager/11.0/signin/applications/portal/create.md#create-a-portal-in-native-iis)
      topic.
    - In the source version, you specified a list of attributes to replicate for an identity store.
      These attributes are saved to a file on the GroupID file system.  
      To upgrade on a different box, the file containing the selected attributes for each identity
      store must be present on the GroupID 11 server. If the wizard does not find it, GroupID 11
      will display the default attributes for identity store replication (rather than your selected
      attributes).

        File name: `<name of the domain the identity store is created on>_<identity store ID>.xml`  
         Example: techinfo.local_4.xml, techinfo.onmicrosoft.com_6.xml  
         A separate file exists for each identity store.

        File Path on the GroupID 11 server:
        `C:\Program Files\Imanami\GroupID <source version>\Replication\IdentityStoresReplicationAttributes\`

    - To upgrade schedules, Synchronize jobs, and generated reports on a different box, the relevant
      files must be available on the GroupID 11 server.
    - If you have uploaded a CSV file containing a list of disallowed passwords for an identity
      store, that file should also be available on the GroupID 11 server for the Upgrade wizard to
      process it.

        File name: The name of the uploaded file.  
         For example: DisallowedPasswords.txt

        File Path on the GroupID 11 server:
        `C:\Program Files\Imanami\GroupID <source version>\GroupIDDataService\PasswordCenter\PasswordExceptionLists\<identity store name>_<identity store ID>\`

        Example: C:\Program Files\Imanami\GroupID
        10.0\GroupIDDataService\PasswordCenter\PasswordExceptionLists\ADStore_4\

3. When importing design settings of a Self-Service portal on the same box or on a different box,
   remember the following:

    - Design settings for the toolbars and navigation bars will not be imported due to architectural
      changes in GroupID 11.
    - The Group Search and User Search forms will not be upgraded as they are not available in
      GroupiD 11.
    - Portal branding, logo, and any customizations to a Self-Service portal will be lost.

4. When importing advanced settings for a portal on the same box or on a different box, remember the
   following:  
   If, in the source version, you have set the value of the Self-Service portal’s advanced setting
   _Default Startup Page_ to ‘Group Search’ or ‘Organizational Hierarchy’, then it will not be
   upgraded. The ‘Group Search’ page has been removed from GroupID 11 while the ‘Organizational
   Hierarchy’ page is not supported as a startup page.
5. Any notifications pending in the notification queue in the source version will not be upgraded.
6. An identity store created for G Suite will not be upgraded.
7. In case of upgrade on a different box, the DC Priority settings for an Active Directory domain
   are not upgraded to GroupID version 11.0.23315.04.
8. In the source version, the debug logs for upgrade were created in a temporary folder for the
   logged-on user, that could be accessed using the %TEMP% environment variable.  
   File name: ~GroupID10_Upgrade

    In GroupID 11, these debug logs will be created at the following location on the GroupID 11
    server:  
     C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\  
     File name: directorymanager11_Upgrade.log

9. In the GroupID source version, Replication service logs were captured under the _debug_ mode,
   with no user interface to change this setting. On upgrade to GroupID 11, the file logging and
   Windows logging mode is set to default, i.e., ‘Error’. After upgrade, it is recommended that you
   go to Replication service settings and change file logging to the ‘Debug’ mode (if required). See
   the
   [Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)
   topic.
10. In the GroupID source version, log settings for an identity store inherently applied to Date
    service logs. On upgrade to GroupID 11, these log settings are moved to the Data service, with
    the file logging mode set to default, i.e., ‘Error’. To change the mode in GroupID 11, go to
    Data service settings and change it as required. See the
    [Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)
    topic.
11. The following applies in case of upgrade from GroupID 10 SR1.  
    When the approver in pending workflow requests is a variable, such as managedBy,
    additionalOwner, etc., then during upgrade, the variable will be resolved to the GUID of the
    object that it represents at that point in time. Hence, the variable is replaced with a static
    value.
12. SAML configurations with the Self-Service portals, Password Center portals, Automate, or any
    other GroupID client will be lost during upgrade, and will not be available in GroupID 11.
13. Reports will no longer be available on a shared location, as was in the source version. In
    GroupID 11, users can download reports in different formats, including PDF, from the GroupID
    portal.
14. When upgraded on a different box, file-based Synchronize jobs available on shared locations will
    move to the data sources created for them on the GroupID 11 file system.
15. During upgrade, scripts for Smart Groups and Synchronize jobs are upgraded to GroupID 11 without
    any change. If a script contains a location in a variable (for example, for exporting files),
    that setting will not work in case of upgrade on a different box. Make sure you change the
    location after upgrade.
16. In the GroupID source version, source and destination providers in Synchronize jobs were saved
    as connection strings in a file. Similarly, when using an external data source for Smart Groups,
    connection was established on the basis of a connection string. On upgrade, a data source will
    be created for each distinct connection string.  
    The Upgrade wizard will process connection strings for Smart Groups first. Then while processing
    Synchronize jobs, it will not create another data source if the same connection strings come up
    again.
17. In case of upgrade on a different box, OBBC connections defined using system DSN will be lost.
    As a result:

    - Smart Groups whose memberships are determined using system DSN (external data source) will be
      affected.
    - Synchronize jobs with the source or destination provider configured using system DSN will not
      work.

18. Insights in GroupID 10 has been renamed to Entitlement in GroupID 11.  
    In GroupID 10, one schedule named ‘Insights’ existed for Insights, which will be upgraded and
    renamed to ‘GroupID Entitlement’. GroupID 11 will also have two new schedules for Entitlement;
    ‘Entitlement Scope’ and ‘Entitlement Temporary Permissions’. These new schedules will be auto
    created for identity stores that have Entitlement settings defined.
19. You cannot run the Configuration Tool and the Upgrade wizard more than once using the same
    database (for upgrade to GroupID version 11.0.23315.04).

See Also

- [Upgrade to GroupID 11](/docs/directorymanager/11.0/about/upgrade/upgrade.md)
