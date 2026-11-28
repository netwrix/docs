---
title: "Upgrade Notes and Limitations for GroupID 11"
description: "Review what the Upgrade wizard does not carry over and which settings change when you upgrade from GroupID 9 or 10 to GroupID 11."
keywords:
  - GroupID upgrade limitations
  - upgrade wizard behavior changes
  - source version file system
  - upgrade debug logs
  - settings not upgraded
sidebar_position: 20
---

# Upgrade Notes and Limitations for GroupID 11

:::note
GroupID 11.0 supported upgrade from GroupID 9 and GroupID 10. As of Directory Manager
11.2, you can upgrade only from GroupID 10 SR2. This page is kept for archive purposes. When you plan
an upgrade, use the
[Directory Manager 11.2 upgrade documentation](https://docs.netwrix.com/docs/directorymanager/11_2/install/upgrade/).
:::

Consider the following when you upgrade to GroupID 11 from GroupID 9 and 10.

:::note
In the following text, the term ‘source version’ refers to the GroupID version you are
upgrading from.
:::

**Notes**

1. Portals from the source version aren't upgraded to GroupID 11.
2. To upgrade to GroupID 11 on a different server, the source version file system must be
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
      To upgrade on a different server, the file that contains the selected attributes for each
      identity store must be present on the GroupID 11 server. If the wizard doesn't find
      it, GroupID 11 displays the default attributes for identity store replication
      (rather than your selected attributes).

        File name: `<name of the domain the identity store is created on>_<identity store ID>.xml`  
         Example: `techinfo.local_4.xml`, `techinfo.onmicrosoft.com_6.xml`  
         A separate file exists for each identity store.

        File path on the GroupID 11 server:
        `C:\Program Files\Imanami\GroupID <source version>\Replication\IdentityStoresReplicationAttributes\`

    - To upgrade schedules, Synchronize jobs, and generated reports on a different server, the
      relevant files must be available on the GroupID 11 server.
    - If you uploaded a CSV file containing a list of disallowed passwords for an identity store,
      that file must also be available on the GroupID 11 server for the Upgrade wizard to
      process it.

        File name: The name of the uploaded file.  
         Example: `DisallowedPasswords.txt`

        File path on the GroupID 11 server:
        `C:\Program Files\Imanami\GroupID <source version>\GroupIDDataService\PasswordCenter\PasswordExceptionLists\<identity store name>_<identity store ID>\`

        Example: `C:\Program Files\Imanami\GroupID 10.0\GroupIDDataService\PasswordCenter\PasswordExceptionLists\ADStore_4\`

3. When importing design settings of a Self-Service portal on the same server or on a different
   server, remember the following:

    - Design settings for toolbars and navigation bars aren't imported due to architectural changes
      in GroupID 11.
    - The Group Search and User Search forms aren't upgraded because they aren't available in
      GroupID 11.
    - Portal branding, logos, and any customizations to a Self-Service portal are lost.

4. When importing advanced settings for a portal on the same server or on a different server,
   remember the following:  
   If, in the source version, you set the value of the Self-Service portal’s advanced setting
   _Default Startup Page_ to ‘Group Search’ or ‘Organizational Hierarchy’, then the setting isn't
   upgraded. The ‘Group Search’ page is removed from GroupID 11, and the ‘Organizational
   Hierarchy’ page isn't supported as a startup page.
5. Notifications pending in the notification queue in the source version aren't upgraded.
6. Identity stores created for G Suite aren't upgraded.
7. When you upgrade on a different server, the DC Priority settings for an Active Directory domain
   aren't upgraded to GroupID version 11.0.23315.04.
8. In the source version, the upgrade debug logs were created in a temporary folder for the
   logged-on user, which you could access using the `%TEMP%` environment variable.  
   File name: `~GroupID10_Upgrade`

    In GroupID 11, these debug logs are created at the following location on the
    GroupID 11 server:  
     `C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\`  
     File name: `directorymanager11_Upgrade.log`

9. In the source version, Replication service logs were captured under the _debug_ mode, with no
   user interface to change this setting. When you upgrade to GroupID 11, the file
   logging and Windows logging modes are set to the default, ‘Error’. After the upgrade, change
   file logging to ‘Debug’ mode (if required) in the Replication service settings. See the
   [Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)
   topic.
10. In the source version, log settings for an identity store inherently applied to Data service
    logs. When you upgrade to GroupID 11, these log settings move to the Data service,
    with the file logging mode set to the default, ‘Error’. To change the mode in GroupID
    11, go to the Data service settings and change it as required. See the
    [Specify Log Settings for a Service](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#specify-log-settings-for-a-service)
    topic.
11. The following applies when you upgrade from GroupID 10 SR1.  
    When the approver in pending workflow requests is a variable, such as `managedBy` or
    `additionalOwner`, then during upgrade, the variable is resolved to the GUID of the object that
    it represents at that point in time. Therefore, the variable is replaced with a static value.
12. SAML configurations with the Self-Service portals, Password Center portals, Automate, or any
    other GroupID client are lost during upgrade and aren't available in GroupID
    11.
13. Reports are no longer available on a shared location, as they were in the source version. In
    GroupID 11, users can download reports in different formats, including PDF, from the
    GroupID portal.
14. When you upgrade on a different server, file-based Synchronize jobs available on shared
    locations move to the data sources created for them on the GroupID 11 file system.
15. During upgrade, scripts for Smart Groups and Synchronize jobs are upgraded to GroupID
    11 without any change. If a script contains a location in a variable (for example, for
    exporting files), that setting doesn't work when you upgrade on a different server. Change the
    location after the upgrade.
16. In the source version, Synchronize jobs saved the source and destination providers as connection
    strings in a file. Similarly, when using an external data source for Smart Groups, the
    connection was established based on a connection string. On upgrade, a data source is created
    for each distinct connection string.  
    The Upgrade wizard processes connection strings for Smart Groups first. Then, while processing
    Synchronize jobs, it doesn't create another data source if the same connection strings come up
    again.
17. When you upgrade on a different server, ODBC connections defined using a system DSN are lost.
    As a result:

    - Smart Groups whose memberships are determined using a system DSN (external data source) are
      affected.
    - Synchronize jobs with the source or destination provider configured using a system DSN don't
      work.

18. Insights in GroupID 10 is renamed to Entitlement in GroupID 11.  
    In GroupID 10, one schedule named ‘Insights’ existed for Insights, which is upgraded
    and renamed to ‘GroupID Entitlement’. GroupID 11 also has two new schedules for
    Entitlement: ‘Entitlement Scope’ and ‘Entitlement Temporary Permissions’. The upgrade
    automatically creates these new schedules for identity stores that have Entitlement settings
    defined.
19. You can't run the Configuration Tool and the Upgrade wizard more than once using the same
    database (for upgrade to GroupID version 11.0.23315.04).

See Also

- [Upgrade to GroupID 11 with the Wizard](/docs/directorymanager/11.0/about/upgrade/upgrade.md)
