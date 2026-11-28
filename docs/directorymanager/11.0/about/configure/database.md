---
title: "Add a GroupID Server to an Existing Cluster"
description: "Configure a new GroupID server to join an existing cluster and share its database, Elasticsearch cluster, and service settings."
keywords:
  - add GroupID server to cluster
  - GroupID load balancing
  - GroupID existing database
  - elasticsearch secondary node
  - GroupID app pool service account
  - GroupID shared sql database
sidebar_position: 30
---

# Add a GroupID Server to an Existing Cluster

While installing GroupID, you can choose to create a GroupID server with load
balancing support, where the load is balanced in real time across multiple Data Services, portals,
and Elasticsearch instances.

This option also configures the GroupID Elasticsearch Service as a secondary node to the
primary node for the Elasticsearch Service cluster configured on the GroupID server.

To configure a GroupID server with an existing database:

1. On the **Select to create new server or use existing server** page of the Configuration Tool,
   select the
   [Configure a GroupID Server and Database](/docs/directorymanager/11.0/about/configure/gidserver.md)
   option. See step 2 in the
   [Run the GroupID Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md) topic.
2. Click **Next**.

    ![Database settings page with SQL Server, authentication, and database fields](/images/directorymanager/11.0/install/configure/databasesettings.webp)

3. In the **SQL Server** list, select the SQL Server to use with this new GroupID server.
   The SQL Server must be the same one used with the primary node of GroupID.

    If the required server doesn't appear in the list, ensure that the **SQL Server Browser**
    service is running on the SQL Server machine and then click **Refresh**.

4. In the **Authentication** list, select an authentication mode to use when connecting to the SQL
   Server database. The modes are:

    - **SQL Server Authentication** - Sets SQL Server to work with GroupID using a SQL
      Server account. See the
      [SQL Server Authentication Modes for GroupID](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic for additional information.
    - **Windows Authentication** - Sets SQL Server to work with GroupID using a Windows
      user account. See the
      [SQL Server Authentication Modes for GroupID](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic for additional details.

5. Depending on the authentication mode you selected, do the following:

    - For SQL Server Authentication: enter the user name and password of the selected SQL Server in
      the **SQL Username** and **SQL Password** boxes.
    - For Windows Authentication: the user name and password fields are disabled and populated with
      the credentials of the signed-in user.

6. In the **SQL Database** box, specify the name of the SQL database that the primary GroupID
   node uses. This new GroupID instance uses the same database.

    :::note
    When you configure a new GroupID machine with the existing database option, the **Copy
    Database** button has no relevance.
    :::

7. Click **Next**.

    ![License page showing the license information from the primary node](/images/directorymanager/11.0/install/configure/license_w_existing_db_option.webp)

8. On the **License** page, the license information of GroupID installed on the primary
   node is displayed. A valid license and key enable the **Next** button. If the **Next** button
   remains disabled, check your entries for errors.
9. Click **Next**.

    ![GroupID Service Configurations page](/images/directorymanager/11.0/install/configure/servicesconfiguration.webp)

10. GroupID requires two services:

    - **GroupID Data Service**: A web-based service that GroupID uses to communicate with
      Microsoft SQL Server for storing and fetching data in the database.
    - **GroupID Security Service**: A web-based service that GroupID uses to:

        - Authenticate and authorize users on different GroupID functionalities according
          to their roles.
        - Encrypt and decrypt data that the Data Service stores in and fetches from the SQL
          database.

        To deploy these services, the Configuration Tool creates and configures a new website in IIS
        named `GroupIDSite11`. By default, it binds this site to any of the available ports. If you
        prefer a different port, click **Advanced Options** and enter the port in the **Port
        Number** box.

    - **Replication service**: Replicates object attributes from the provider (such as Active
      Directory) to Elasticsearch.
    - **Admin Center**: A web-based application that you can access over the Internet and Intranet.

    :::note
    This GroupID instance uses the Email and Scheduler services of the selected cluster.
    :::

11. Click **Next**.

    ![Elasticsearch Settings page](/images/directorymanager/11.0/install/configure/elasticsearchsettings.webp)

12. GroupID provides the following two options for Elasticsearch configuration. Select
    the relevant option:

    - **Let GroupID install and manage Elasticsearch**: If you select this option, the GroupID
      Configuration Tool installs Elasticsearch. It presents the default configuration of
      the Elasticsearch cluster it creates:

        ![Select Elastic Cluster page](/images/directorymanager/11.0/install/configure/select_cluster_w_existing_db_option.webp)

        1. **Cluster Name**: Lists all the clusters defined so far. Select one to create an
           Elasticsearch node within the selected cluster.
        2. **Port**: The default port for Elasticsearch API communication. Change the port number if
           the default port isn't available.
        3. **TCP Port**: The default port for communication between nodes within the cluster. Change
           the port number if the default port isn't available.

            :::note
            Ensure that the specified ports are available and unblocked.
            :::

    - **I will install and manage Elasticsearch myself**: If you select this option, the following
      page is displayed:

        ![Elasticsearch settings page for an existing Elasticsearch installation](/images/directorymanager/11.0/install/configure/elasticsearchsettings-2.webp)

        Provide the configuration of the Elasticsearch instance you want to use with GroupID:

        - **Elasticsearch URL**: The URL for accessing Elasticsearch.
        - **Elasticsearch Username**: The service account for Elasticsearch.
        - **Elasticsearch Password**: The password of the Elasticsearch service account.

13. Click **Next**.

    ![Service Account Settings page](/images/directorymanager/11.0/install/configure/service_account_settings_w_existing_db.webp)

    :::note
    If you configure a Group Managed Service Account (gMSA) as an App Pool service account, the
    GroupID Configuration Tool adds this account to the local Administrators and IIS_IUSRS
    groups.
    :::

    :::note
    If you configure a normal user account as an App Pool service account and an AD identity store
    is created with a gMSA service account, the App Pool service account must have the
    _PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account must also
    be a member of the Backup Operators and IIS_IUSRS groups.
    :::

14. On the **Service Account Settings** page, specify the service account to use for the GroupID
    app pool in IIS and Windows services.

    - Use a domain account or a Group Managed Service Account (gMSA).
    - The account must be a member of the Administrators group or both the Backup Operators and
      IIS_IUSRS groups.
    - The account you specify manages the GroupID app pool in IIS. The Data Service,
      Mobile Service, Security Service, and the portals run under the app pool.
    - By default, a local account, `GroupIDSSuser`, is set for the GroupID app pool, but
      you can't proceed unless you change it to a domain account or gMSA.
    - You can specify a local account (with local administrator rights) in the app pool for a
      machine that isn't joined to any domain (this applies to a Microsoft Entra ID identity store
      only).

        :::note
        For the GroupID app pool, you can use a domain account for a machine joined to a
        domain.
        :::

        :::note
        Before you use a Group Managed Service Account, ensure that:

        - Key Distribution Service (KDS) is enabled on the GroupID machine.
        - The Microsoft AD module for PowerShell is installed on the machine.
        :::

15. Specify a service account for the app pool in either of the following ways:

    - **Use an existing account**: Click **Browse**.

        ![Find Service Account dialog box](/images/directorymanager/11.0/install/configure/findserviceaccount.webp)

        On the **Find Service Account** dialog box, search for and select the required account and
        click **OK**.

    - **Create a new service account**: Click **Create New** on the **Service Account Settings**
      page.

        ![Create Service Account dialog box](/images/directorymanager/11.0/install/configure/createserviceaccount.webp)

        On the **Create Service Account** dialog box, select the kind of account you want to create.
        Enter a name, container, and password for the account. Click **Create**.

        :::note
        The signed-in user must have the appropriate rights to create a new account.
        :::

        :::note
        If Key Distribution Service (KDS) isn't configured in the environment, a warning is
        displayed that you can't use a Group Managed Service Account.
        :::

16. In the **Password** box, provide the password for the App Pool service account (except for a
    Group Managed Service Account).
17. Click **Configure**.

    ![Configuring GroupID progress page](/images/directorymanager/11.0/install/configure/configuring.webp)

18. The next page displays the progress while GroupID configures the server on the
    machine.

    ![GroupID configured successfully page](/images/directorymanager/11.0/install/configure/configuresuccess.webp)

19. This completes the configuration of GroupID as a secondary node on your machine. Click
    **Launch GroupID** to start using GroupID. The Sign In page opens:

    ![GroupID Sign In page](/images/directorymanager/11.0/install/configure/launchgid.webp)

    To sign in to GroupID Admin Center for the first time, provide the GroupID Administrator
    user name and password.

    Alternatively, click **Next** to launch the Upgrade wizard for upgrading GroupID.

See Also

- [Run the GroupID Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
