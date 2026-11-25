---
title: "Configure a Directory Manager Server and Database"
description: "Configure a new Directory Manager server, its Data Service, and an Elasticsearch primary node with a new SQL database."
keywords:
  - Directory Manager server configuration
  - SQL Server database settings
  - Elasticsearch primary node
  - Directory Manager Data Service
  - Directory Manager Security Service
sidebar_position: 20
---

# Configure a Directory Manager Server and Database

This option configures the Directory Manager server and the GroupID Data Service on the
machine where you install Directory Manager. It also configures the GroupID Elasticsearch
Service as a primary node for the Elasticsearch service cluster to support load balancing.

To configure a Directory Manager server on the machine where you run the Configuration Tool:

1. Select the **Configure a new GroupID server with new or existing database** option on the
   **Select to create new server or use existing server** page of the Configuration Tool and select
   **Next**.

    ![Database Settings page with SQL Server, authentication, and database fields](/images/directorymanager/11.0/install/configure/databasesettings.webp)

2. In the **SQL Server** list, select the SQL Server to use with Directory Manager.

    If the required server doesn't appear in the list, ensure that the **SQL Server Browser**
    service is running on the SQL Server machine and then click **Refresh**.

3. In the **Authentication** list, select an authentication mode to use when connecting to the SQL
   Server database. The modes are:

    - **SQL Server Authentication** - Sets SQL Server to work with Directory Manager using a SQL
      Server account. See SQL Server Authentication in the
      [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic.
    - **Windows Authentication** - Sets SQL Server to work with Directory Manager using a Windows
      user account. See Windows Authentication in the
      [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic.

4. Depending on the authentication mode you selected, do the following:

    - For SQL Server Authentication: enter the user name and password of the selected SQL Server in
      the **SQL Username** and **SQL Password** boxes.
    - For Windows Authentication: provide the credentials of a domain account or a Windows local
      account that Directory Manager uses to connect with SQL Server. When you click **OK**, the
      system authenticates with that account on SQL Server through Windows Authentication.

5. In the **SQL Database** box, specify the name of a new SQL database to use for Directory
   Manager.

    :::note
    For GroupID 11.0 Beta, you have to create a new database. You can't use an existing database or
    a copy of an existing database.
    :::

    A message informs you that the database doesn't exist. Click **Yes** to create it.

6. Click **Next**.

    ![Security Settings page with passphrase fields](/images/directorymanager/11.0/install/configure/securitysettings.webp)

7. On the **Security Settings** page, enter an encryption key in the **Passphrase** and **Confirm
   Passphrase** boxes to secure Directory Manager data.

    The GroupID Data Service uses this key to encrypt and decrypt the data that it stores
    in, and retrieves from, the SQL Server database.

    - The passphrase must have at least eight characters.
    - Save this passphrase. Providing an incorrect passphrase at any later point results in the loss
      of Directory Manager data.

8. Click **Next**.

    ![License page with license number and key fields](/images/directorymanager/11.0/install/configure/license.webp)

9. On the **License** page, enter a valid license number and key in the respective boxes. A valid
   license and key enable the **Next** button. If the **Next** button remains disabled, check your
   entries for errors.
10. Click **Next**.

    ![Elasticsearch Settings page](/images/directorymanager/11.0/install/configure/elasticsearchsettings.webp)

11. Directory Manager provides the following two options for Elasticsearch configuration. Select
    the relevant option:

    - **Let GroupID install and manage Elasticsearch**: If you select this option, the Directory
      Manager Configuration Tool installs Elasticsearch. It presents the default configuration of
      the Elasticsearch cluster it creates:

        ![Select Elastic Cluster page](/images/directorymanager/11.0/install/configure/selectelasticcluster.webp)

        1. Cluster Name: The name for Elasticsearch nodes within the cluster. You can change the
           name.
        2. Port: The default port for Elasticsearch API communication. Change the port number if the
           default port isn't available.
        3. TCP Port: The default port for communication between nodes within the cluster. Change the
           port number if the default port isn't available.

            :::note
            Ensure that the specified ports are available and unblocked.
            :::

    - **I will install and manage Elasticsearch myself**: If you select this option, the following
      page is displayed:

        ![Elasticsearch settings page for an existing Elasticsearch installation](/images/directorymanager/11.0/install/configure/elasticsearchsettings-2.webp)

        Provide the configuration of the Elasticsearch instance you want to use with Directory
        Manager:

        - **Elasticsearch URL**: The URL for accessing Elasticsearch.
        - **Elasticsearch Username**: The service account for Elasticsearch.
        - **Elasticsearch Password**: The password of the Elasticsearch service account.

12. Click **Next**.

    ![Services Configuration page](/images/directorymanager/11.0/install/configure/servicesconfiguration.webp)

13. At this point, Directory Manager configures the following:

    - **GroupID Data Service**: A web-based service that Directory Manager uses to communicate with
      Microsoft SQL Server for storing and fetching data in the database.
    - **GroupID Security Service**: A web-based service that Directory Manager uses to:

        - Authenticate and authorize users on different Directory Manager functionalities according
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
    - **Email service**: Maintains a queue of all notification requests generated by identity
      stores, and sends them one by one. Directory Manager deploys this service for each cluster.
    - **Scheduler service**: Initiates schedule runs for scheduled jobs defined in Directory
      Manager. Directory Manager configures this service for each cluster.

14. Click **Next**.

    ![Service Account Settings page](/images/directorymanager/11.0/install/configure/serviceaccount.webp)

    :::note
    If you configure a Group Managed Service Account (gMSA) as an App Pool service account, the
    Directory Manager Configuration Tool adds this account to the local Administrators and IIS_IUSRS
    groups.
    :::

    :::note
    If you configure a normal user account as an App Pool service account and an AD identity store
    is created with a gMSA service account, the App Pool service account must have the
    _PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account must also
    be a member of the Backup Operators and IIS_IUSRS groups.
    :::

15. Specify the service accounts to use for the GroupID App Pool and a default administrative
    account for Directory Manager Admin Center.

    | Service | Service Account Description |
    | --- | --- |
    | GroupID App Pool | Use a domain account or a Group Managed Service Account (gMSA). The account must be a member of the Administrators group or both the Backup Operators and IIS_IUSRS groups. The account you specify manages the Directory Manager app pool in IIS. The Data Service, Mobile Service, Security Service, and the portals run under the app pool. By default, a local account, `GroupIDSSuser`, is set for the Directory Manager app pool, but you can't proceed unless you change it to a domain account or gMSA. You can specify a local account (with local administrator rights) in the app pool for a machine that isn't joined to any domain (this applies to a Microsoft Entra ID identity store only). |
    | GroupID Administrator | Use this account as the default administrative account for the first sign-in to Directory Manager Admin Center. This account isn't associated with any identity store. It is specific to Directory Manager and works as an Admin of all Admin accounts of the identity stores defined in Admin Center. |

    :::note
    For the Directory Manager app pool, you can use a domain account for a machine joined to a
    domain.
    :::

    :::note
    Before you use a Group Managed Service Account, ensure that:

    - Key Distribution Service (KDS) is enabled on the Directory Manager machine.
    - The Microsoft AD module for PowerShell is installed on the machine.
    :::

16. Specify a service account for the app pool in either of the following ways:

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

17. In the **Password** box, provide the password for the App Pool service account (except for a
    Group Managed Service Account).
18. In the **Password** box, provide the password for the GroupID Administrator account.
19. Click **Configure**.

    ![Configuring Directory Manager progress page](/images/directorymanager/11.0/install/configure/configuring.webp)

    The **We are configuring GroupID** page displays the progress while Directory Manager configures
    the server on the machine. On successful configuration, the **GroupID is successfully
    configured** page opens.

    ![Directory Manager configured successfully page](/images/directorymanager/11.0/install/configure/configuresuccess.webp)

20. Directory Manager is configured on your machine.

    Click **Launch GroupID** to start using Directory Manager. The Sign In page opens:

    ![Directory Manager Sign In page](/images/directorymanager/11.0/install/configure/launchgid.webp)

    To sign in to Directory Manager Admin Center for the first time, provide the GroupID
    Administrator user name and password.

    Alternatively, click **Next** to launch the Upgrade wizard for upgrading Directory Manager.

See Also

- [Install Directory Manager](/docs/directorymanager/11.0/about/installer/install.md)
- [Run the Directory Manager Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
