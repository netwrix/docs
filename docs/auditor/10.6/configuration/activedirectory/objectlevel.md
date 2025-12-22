---
title: "Configure Object-Level Auditing"
description: "Configure Object-Level Auditing"
sidebar_position: 70
---

# Configure Object-Level Auditing

Object-level auditing must be configured for the **Domain** partition if you want to collect
information on user activity in the domain. If you also want to audit changes to AD configuration
and schema, you must enable object-level auditing for **Configuration** and **Schema** partitions.

Auditing of the Configuration partition is enabled by default. See the
[Active Directory](/docs/auditor/10.6/admin/monitoringplans/activedirectory/overview.md)
topic for detailed instructions on how to enable monitoring of changes to the Schema partition in
the target AD domain.

Perform the following procedures to configure object-level auditing for the Domain, Configuration
and Schema partitions:

- [Configuring object-level auditing for the Domain partition](#configuring-object-level-auditing-for-the-domain-partition)
- [Enabling object-level auditing for the Configuration and Schema partitions](#enabling-object-level-auditing-for-the-configuration-and-schema-partitions)

## Configuring object-level auditing for the Domain partition

1. Open the **Active Directory Users and Computers** console on any domain controller in the target
   domain: navigate to Start > Windows Administrative Tools → **Active Directory Users and
   Computers**.
2. In the **Active Directory Users and Computers** dialog, click **View** in the main menu and
   ensure that the **Advanced Features** are enabled.

    ![manualconfig_aduc_advsecwinserver2016](/images/auditor/10.6/configuration/activedirectory/manualconfig_aduc_advsecwinserver2016.webp)

3. Right-click the **`<domain_name>`** node and select **Properties.** Select the **Security** tab
   and click **Advanced**. In the **Advanced Security Settings for `<domain_name>`** dialog, select
   the **Auditing** tab.

    ![manualconfig_aduc_advauditing_winserver2016](/images/auditor/10.6/configuration/activedirectory/manualconfig_aduc_advauditing_winserver2016.webp)

4. Do one of the following depending on the OS:

    - On pre-Windows Server 2012 versions:

        1. Click **Add**. In the **Select user, Computer, Service account, or Group** dialog, type
           _"Everyone"_ in the **Enter the object name to select** field.
        2. In the **Audit Entry** dialog that opens, set the _"Successful"_ flag for all access
           entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and
           _Read Permissions_.

            ![manualconfig_objectlevel_entry2008](/images/auditor/10.6/configuration/activedirectory/manualconfig_objectlevel_entry2008.webp)

        3. Make sure that the **Apply these auditing entries to objects and/or containers within
           this container only** checkbox is cleared. Also, make sure that the **Apply onto**
           parameter is set to _"This object and all descendant objects"_.

    - On Windows Server 2012 and above

        1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
        2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in
           the **Enter the object name to select** field.
        3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant
           objects"_.
        4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
           Contents_, _Read All Properties_ and _Read Permissions_.
        5. Scroll to the bottom of the list and make sure that the **Only apply these auditing
           settings to objects and/or containers within this container** checkbox is cleared.

            ![manualconfig_objectlevel_winserver2016](/images/auditor/10.6/configuration/activedirectory/manualconfig_objectlevel_winserver2016.webp)

## Enabling object-level auditing for the Configuration and Schema partitions

To perform this procedure, you will need the
[ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx) utility. In Windows
Server 2008 and above, this component is installed together with the AD DS role, or it can be
downloaded and installed along with Remote Server Administration Tools. See the topic for additional
information on how to install the ADSI Edit utility.

1. On any domain controller in the target domain, navigate to Start > Windows Administrative Tools
   **→ ADSI Edit**.
2. Right-click the **ADSI Edit** node and select **Connect To**. In the **Connection Settings**
   dialog, enable **Select a well-known Naming Context** and select **Configuration** from the
   drop-down list.

    ![manualconfig_adsi_connectionwinserver2016](/images/auditor/10.6/configuration/activedirectory/manualconfig_adsi_connectionwinserver2016.webp)

3. Expand the **Configuration `<Your_Root_Domain_Name>`** node. Right-click the **CN=Configuration,
   DC=`<name>`,DC=`<name>`…** node and select **Properties.**
4. In the **CN=Configuration, DC=`<name>`, DC=`<name>` Properties** dialog select the **Security**
   tab and click **Advanced**. In the **Advanced Security Settings for Configuration** dialog, open
   the **Auditing** tab.
5. Do one of the following depending on the OS:

    - On pre-Windows Server 2012 versions:

        1. Click **Add**. In the **Select user, Computer, Service account, or Group** dialog, type
           _"Everyone"_ in the **Enter the object name to select** field.
        2. In the **Audit Entry** dialog that opens, set the _"Successful"_ flag for all access
           entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and
           _Read Permissions_.

            ![manualconfig_objectlevel_entry2008](/images/auditor/10.6/configuration/activedirectory/manualconfig_objectlevel_entry2008.webp)

        3. Make sure that the **Apply these auditing entries to objects and/or containers within
           this container only** checkbox is cleared. Also, make sure that the **Apply onto**
           parameter is set to _"This object and all descendant objects"_.

    - On Windows Server 2012 and above

        1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
        2. In the **Select user, Computer, Service account, or Group** dialog, type _"Everyone"_ in
           the **Enter the object name to select** field.
        3. Set **Type** to _"Success"_ and **Applies to** to _"This object and all descendant
           objects"_.
        4. Under **Permissions**, select all checkboxes except the following: _Full Control_, _List
           Contents_, _Read All Properties_ and _Read Permissions_.
        5. Scroll to the bottom of the list and make sure that the **Only apply these auditing
           settings to objects and/or containers within this container** checkbox is cleared.

            ![manualconfig_objectlevel_winserver2016](/images/auditor/10.6/configuration/activedirectory/manualconfig_objectlevel_winserver2016.webp)

6. Repeat these steps for the Schema container if necessary.
