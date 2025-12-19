---
title: "Configure a new GroupID server with a new or an existing database"
description: "Configure a new GroupID server with a new or an existing database"
sidebar_position: 20
---

# Configure a new GroupID server with a new or an existing database

This option configures the GroupID server and the GroupID Data Service on the machine where GroupID
is being installed. It also configures the GroupID Elasticsearch Service as a master node for the
Elasticsearch service cluster to support load balancing.

To configure GroupID server on the machine where the Configuration Tool is being run:

1. Select the **Configure a new GroupID server with new or existing database** option on the
   **Select to create new server or use existing server** page of the Configuration Tool and select
   **Next**.

    ![Database Settings page](/images/directorymanager/11.0/install/configure/databasesettings.webp)

2. In the **SQL Server** list, select the SQL Server to use with GroupID.

    If the required server does not appear in the list, make sure that **the SQL Server Browser**
    service is running on the SQL Server machine and then click the **Refresh** button.

3. In the **Authentication** list, select an authentication mode to be used when connecting to the
   SQL Server database. Modes are:

    - **SQL Server Authentication** - To set SQL Server to work with GroupID using an SQL Server
      account. See SQL Authentication in
      [Authentication Modes](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic.
    - **Windows Authentication** - To set SQL Server to work with GroupID using a Windows user
      account. See Windows Authentication in in
      [Authentication Modes](/docs/directorymanager/11.0/about/configure/setupauthentication.md)
      topic.

4. Depending on the authentication mode selected, do the following:

    - For SQL Server Authentication: enter the user name and password of the selected SQL Server in
      the **SQL Username** and **SQL Password** boxes.
    - For Windows Authentication: provide the credentials of a domain account or a Windows local
      account that GroupID will use to connect with SQL Server. On clicking **OK**, the system
      authenticates with that account on SQL Server via Windows authentication.

5. In the **SQL Database** box, specify name of a new SQL database to use for GroupID.

    NOTE: For GroupID 11.0 Beta, you have to create a new database. You cannot use an existing
    database or a copy of an existing database.

    A message is displayed to inform that the database does not exist. Click Yes to create it.

6. Click **Next**.

    ![Security Settings page](/images/directorymanager/11.0/install/configure/securitysettings.webp)

7. On the **Security Settings** page, enter an encryption key in the **Passphrase** and **Confirm
   Passphrase** boxes to secure GroupID data.

    GroupID Data Service uses this key to encrypt and decrypt the data that it stores in, and
    retrieves from, the SQL Server database.

    - The passphrase must have at least eight characters.
    - Be sure to save this passphrase with you. Providing an incorrect passphrase at any later point
      will result in the loss of GroupID data.

8. Click **Next**.

    ![License page](/images/directorymanager/11.0/install/configure/license.webp)

9. On the **License** page, enter a valid license number and key in the respective boxes. A valid
   license and key enable the **Next** button. If the **Next** button remains disabled, check your
   entries for errors.
10. Click **Next**.

    ![Elasticsearch setting page](/images/directorymanager/11.0/install/configure/elasticsearchsettings.webp)

11. GroupID provides the following two options for Elasticsearch configuration. Select the relevant
    option:

    - **Let GroupID install and manage Elasticsearch**: If you select this option, GroupID
      Configuration Tool will install Elasticsearch. It presents you default configuration of
      Elasticsearch cluster it will create:

        ![Select Elastic Cluster page](/images/directorymanager/11.0/install/configure/selectelasticcluster.webp)

        1. Cluster Name: for Elasticsearch node(s) within the cluster. You can modify the name.
        2. Port: the default port for Elasticsearch API communication. Modify the port number if the
           mentioned default port is not available.
        3. TCP Port: the default port for communication between nodes within the cluster. Modify the
           port number if the mentioned default port is not available.

            NOTE: Make sure that the specified ports are available and unblocked.

    - **I will install and manage Elasticsearch myself**: If you select this option, the following
      page is displayed:

        ![Elasticsearch settings page](/images/directorymanager/11.0/install/configure/elasticsearchsettings-2.webp)

        Provide configurations of Elasticsearch you want to use with GroupID:

        - **Elasticsearch URL**: URL for accessing the Elasticsearch.
        - **Elasticsearch Username**: service account for Elasticsearch.
        - **Elasticsearch Password**: password of the Elasticsearch service account.

12. Click **Next**.

    ![Services Configuration page](/images/directorymanager/11.0/install/configure/servicesconfiguration.webp)

13. At this point, GroupID configures the following:

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
    - **Email service**: It maintains a queue of all notification requests generated by identity
      stores, and sends them one by one. This service is deployed for each cluster.
    - **Scheduler service**: This service initiates schedule runs for scheduled jobs defined in
      GroupID. GroupID configures this service for each cluster.

14. Click **Next**.

    ![Service Account Setting page](/images/directorymanager/11.0/install/configure/serviceaccount.webp)

    NOTE: If you configure a Group Managed Service Account (gMSA) as an App Pool service account
    then the GroupID Configuration tool will add this account in the local administrators and
    IIS_IUSRS groups.

    NOTE: If you configure a normal user account as an App Pool service account and an AD identity
    store is created with a gMSA service account, then the App Pool service account must have the
    _PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account also must be
    a member of Backup Operators and IIS_IUSRS groups.

15. GroupID enables you to specify the service accounts to use for the GroupID App Pool and a
    default Administrative account for GroupID Admin Center.

    | Service               | Service Account Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | GroupID App Pool      | Use a domain account or a Group Managed Service Account (gMSA). The account must be a member of the Administrators group or both the Backup Operators and IIS_IUSRS groups. The account you specify will be used to manage the GroupID app pool in IIS. GroupID Data Service, Mobile Service, Security Service, and the portals run under the app pool. By default, a local account, GroupIDSSuser, is set for the GroupID app pool, but you cannot proceed unless you change it to a domain account or gMSA. NOTE: You can specify a local account (with local administrator rights) in app pool for a machine that is not joined to any domain (this applies to an Microsoft Entra ID identity store only). |
    | GroupID Administrator | Use this account as default Administrative account for first time login to GroupID Admin Center. This account is not associated with any identity store, but one that is specific to GroupID. This account works as an Admin of all Admin accounts of defined identity stores in Admin Center.                                                                                                                                                                                                                                                                                                                                                                                                                |

    NOTE: For GroupID App Pool, a domain account can be used for a machine joined to a domain.

    NOTE: Before you use a Group Managed Service Account, make sure that:

    - Key Distribution Service (KDS) is enabled on the GroupID machine.
    - Microsoft AD module for PowerShell is installed on the machine.

16. You can specify a service accounts for the app pool in any of the following ways:

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

17. Provide password for the App Pool service account (except for a Group Managed Service Account)
    in the Password box.
18. Provide password for the GroupID Administrator account in the **Password** box.
19. Click **Configure**.

    ![Configuring GroupID page](/images/directorymanager/11.0/install/configure/configuring.webp)

    **We are configuring GroupID** page displays the progress while a GroupID server is configured
    on the machine. On successful configuration, the **GroupID is successfully configured** page
    opens.

    ![GroupID successfully configured page](/images/directorymanager/11.0/install/configure/configuresuccess.webp)

20. GroupID is configured on your machine.

    Click **Launch GroupID** to start using GroupID. The Sign In page opens:

    ![GroupID Sign In page](/images/directorymanager/11.0/install/configure/launchgid.webp)

    To login in to GroupID Admin Center for the first time, provide GroupID Administrator user name
    and password.

    or

    click **Next** to launch the Upgrade wizard for upgrading GroupID

See Also

- [Installation Tool](/docs/directorymanager/11.0/about/installer/install.md)
- [Configuration Tool](/docs/directorymanager/11.0/about/configure/configure.md)
