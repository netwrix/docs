---
title: "Configure a new GroupID server to add it into an existing GroupID 11 cluster with an existing database"
description: "Configure a new GroupID server to add it into an existing GroupID 11 cluster with an existing database"
sidebar_position: 30
---

# Configure a new GroupID server to add it into an existing GroupID 11 cluster with an existing database

While installing GroupID, you can choose to create a GroupID server with load balancing support,
where load will be balanced in real time with multiple Data Services, portals and Elasticsearch
instances.

This option also configures the GroupID Elasticsearch Service as a slave node to the master node for
the Elasticsearch Service cluster configured on the GroupID server.

To configure a GroupID server with existing database:

1. On the **Select to create new server or use existing server** page of the Configuration Tool,
   select
   [Configure a new GroupID server with a new or an existing database](/docs/directorymanager/11.0/about/configure/gidserver.md)
   option. See point # 2 on the
   [Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md) topic.
2. Click **Next**.

    ![database settings](/images/directorymanager/11.0/install/configure/databasesettings.webp)

3. In the **SQL Server** list, select the SQL Server to use with this new GroupID Server. The
   SQL Server must be the same used with the master node of GroupID.

    If the required server does not appear in the list, make sure that **the SQL Server Browser**
    service is running on the SQL Server machine and then click the **Refresh** button.

4. In the **Authentication** list, select an authentication mode to be used when connecting to the
   SQL Server database. Modes are:

    - **SQL Server Authentication** - To set SQL Server to work with GroupID using an SQL Server
      account. See the
      [Authentication Modes](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic for additional information.
    - **Windows Authentication** - To set SQL Server to work with GroupID using a Windows user
      account. See the
      [Authentication Modes](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic for additional details.

5. Depending on the authentication mode selected, do the following:

    - For SQL Server Authentication: enter the user name and password of the selected SQL Server in
      the **SQL Username** and **SQL Password** boxes.
    - For Windows Authentication: User name and password fields will be disabled with Windows
      Authentication. The logged-in user credentials will be populated here.

6. In the **SQL Database** box, specify name of the SQL database being used by the master
   GroupID node. This new GroupID instance will use the same database.

    NOTE: While configuring a new GroupID machine with an existing database option, the Copy
    Database button has no relevance here.

7. Click **Next**.

    ![License page](/images/directorymanager/11.0/install/configure/license_w_existing_db_option.webp)

8. On the **License** page, license information of GroupID installed on the master node is
   displayed. A valid license and key enable the **Next** button. If the **Next** button remains
   disabled, check your entries for errors.
9. Click **Next**.

    ![GroupID Service Configurations](/images/directorymanager/11.0/install/configure/servicesconfiguration.webp)

10. GroupID requires two services:

    - **GroupID Data Service**: This is a web-based service that GroupID uses to communicate with
      Microsoft SQL Server for storing and fetching data in the database.
    - **GroupID Security Service**: This is also a web-based service that GroupID uses to:

        - Authenticate and authorize users on different GroupID functionalities in accordance with
          their roles.
        - Encrypt and decrypt data that GroupID Data Service stores and fetches from the SQL
          database.

        To deploy these services, the Configuration Tool creates and configures a new website in IIS
        with the name GroupIDSite11. By default, it binds this site to any of the available ports.
        However, if you have a different preference, you can change the port.

        Click **Advanced Options** and enter the port in **the Port Number** box.

    - **Replication service**: This service replicates object attributes from the provider (such as
      Active Directory) to Elasticsearch.
    - **Admin Center**: Admin Center is a web-based application that can be accessed over the
      Internet and Intranet.

    NOTE: This GroupID instance will use Email and Scheduler services of the selected cluster.

11. Click **Next**.

    ![Elasticsearch Settings page](/images/directorymanager/11.0/install/configure/elasticsearchsettings.webp)

12. GroupID provides the following two options for Elasticsearch configuration. Select the relevant
    option:

    - **Let GroupID install and manage Elasticsearch**: If you select this option, GroupID
      Configuration Tool will install Elasticsearch. It presents you default configuration of
      Elasticsearch cluster it will create:

        ![Select Elastic Cluster page](/images/directorymanager/11.0/install/configure/select_cluster_w_existing_db_option.webp)

        1. **Cluster Name**: lists all the clusters defined so far. Select one to create an
           Elasticsearch node within the selected cluster.
        2. **Port**: the default port for Elasticsearch API communication. Modify the port number if
           the mentioned default port is not available.
        3. **TCP Port**: the default port for communication between nodes within the cluster. Modify
           the port number if the mentioned default port is not available.

            NOTE: Make sure that the specified ports are available and unblocked.

    - **I will install and manage Elasticsearch myself**: If you select this option, the following
      page is displayed:

        ![Elasticsearch settings page](/images/directorymanager/11.0/install/configure/elasticsearchsettings-2.webp)

        Provide configurations of Elasticsearch you want to use with GroupID:

        - **Elasticsearch URL**: URL for accessing the Elasticsearch.
        - **Elasticsearch Username**: service account for Elasticsearch.
        - **Elasticsearch Password**: password of the Elasticsearch service account.

13. Click **Next**.

    ![Service Account Settings page](/images/directorymanager/11.0/install/configure/service_account_settings_w_existing_db.webp)

    NOTE: If you configure a Group Managed Service Account (gMSA) as an App Pool service account
    then the GroupID Configuration tool will add this account in the local administrators and
    IIS_IUSRS groups.

    NOTE: If you configure a normal user account as an App Pool service account and an AD identity
    store is created with a gMSA service account, then the App Pool service account must have the
    _PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account also must be
    a member of Backup Operators and IIS_IUSRS groups.

14. The **Service Account Settings** page, specify the service account to use for the GroupID app
    pool in IIS and Windows services.

    - Use a domain account or a Group Managed Service Account (gMSA).
    - The account must be a member of the Administrators group or both the Backup Operators and
      IIS_IUSRS groups.
    - The account you specify will be used to manage the GroupID app pool in IIS. GroupID Data
      Service, Mobile Service, Security Service, and the portals run under the app pool.
    - By default, a local account, GroupIDSSuser, is set for the GroupID app pool, but you cannot
      proceed unless you change it to a domain account or gMSA.
    - You can specify a local account (with local administrator rights) in app pool for a machine
      that is not joined to any domain (this applies to an Microsoft Entra ID identity store only).

        NOTE: For GroupID App Pool, a domain account can be used for a machine joined to a domain.

        NOTE: Before you use a Group Managed Service Account, make sure that:

        - Key Distribution Service (KDS) is enabled on the GroupID machine.
        - Microsoft AD module for PowerShell is installed on the machine.

15. You can specify a service accounts for the app pool in any of the following ways:

    - **Use an existing account**: Click **Browse**.

        ![Find Service Account page](/images/directorymanager/11.0/install/configure/findserviceaccount.webp)

        On the **Find Service Account** dialog box, search and select the required account and click
        **OK**.

    - **Create a new service account**: Click the **Create New** button on the Service Account
      Setting page.

        ![Create a new service account page](/images/directorymanager/11.0/install/configure/createserviceaccount.webp)

        On the **Create Service Account** dialog box, select the kind of account you want to create.
        Enter a name, container and password for the account. Click **Create**.

        NOTE: The logged-in user must have appropriate rights to create a new account.

        NOTE: If Key Distribution Service (KDS) is not configured in the environment, a warning will
        be displayed that you cannot use a Group Managed Service Account.

16. Provide password for the App Pool service account (except for a Group Managed Service Account)
    in the Password box.
17. Click **Configure**.

    ![Configuring GroupID ](/images/directorymanager/11.0/install/configure/configuring.webp)

18. The next page displays the progress while a GroupID server is configured on the machine.

    ![GroupID Configured successfully](/images/directorymanager/11.0/install/configure/configuresuccess.webp)

19. This completes the configuration of GroupID as a slave node on your machine.
    Click **Launch GroupID** to start using GroupID. The Sign In page opens:

    ![GroupID Sign In page](/images/directorymanager/11.0/install/configure/launchgid.webp)

    To login in to GroupID Admin Center for the first time, provide GroupID Administrator user name
    and password.

    or

    click **Next** to launch the Upgrade wizard for upgrading GroupID.

See Also

- [Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
