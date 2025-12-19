---
title: "Configure a new Directory Manager server to add it to an existing Directory Manager 11 cluster with an existing database"
description: "Configure a new Directory Manager server to add it to an existing Directory Manager 11 cluster with an existing database"
sidebar_position: 30
---

# Configure a new Directory Manager server to add it to an existing Directory Manager 11 cluster with an existing database

While installing Directory Manager, you can choose to create a Directory Managerserver with load
balancing support, where load will be balanced in real time with multiple Data Services, portals and
Elasticsearch instances.

This option also configures the Directory Manager Elasticsearch Service as a slave node to the
master node for the Elasticsearch Service cluster configured on the Directory Manager server.

To configure a Directory Manager server with existing database:

Step 1 – On the Select to create new server or use existing server page of the Configuration Tool,
select [Configure a New Directory Manager Server with a New or an Existing Database](/docs/directorymanager/11.1/install/configure/gidserver.md)
option. See Step 3 on the [Configuration Tool](/docs/directorymanager/11.1/install/configure/configure.md) topic.

Step 2 – Click **Next**.

![database_settings](/images/directorymanager/11.1/install/configure/databasesettings.webp)

Step 3 – In the SQL Server list, select the SQL Server to use with this new Directory Manager
Server. The SQL Server must be the same used with the master node of Directory Manager.

If the required server does not appear in the list, make sure that the SQL Server Browser service is
running on the SQL Server machine and then click the **Refresh** button.

Step 4 – In the Authentication list, select an authentication mode to be used when connecting to the
SQL Server database. Modes are:

- SQL Server Authentication - To set SQL Server to work with Directory Manager using an SQL Server
  account. See the [Authentication Modes](/docs/directorymanager/11.1/install/configure/setupauthentication.md) topic for
  additional information.
- Windows Authentication - To set SQL Server to work with Directory Manager using a Windows user
  account. See the [Authentication Modes](/docs/directorymanager/11.1/install/configure/setupauthentication.md) topic for
  additional details.

Step 5 – Depending on the authentication mode selected, do the following:

- For SQL Server Authentication: enter the user name and password of the selected SQL Server in the
  **SQL Username** and **SQL Password** boxes.
- For Windows Authentication: User name and password fields will be disabled with Windows
  Authentication. The logged-in user credentials will be populated here.

Step 6 – In the SQL Database box, specify name of the SQL database being used by the master
Directory Manager node. This new Directory Manager instance will use the same database.

:::note
While configuring a new Directory Manager machine with an existing database option, the Copy
Database button has no relevance here.
:::


Step 7 – Click **Next**.

![License page](/images/directorymanager/11.1/install/configure/license_w_existing_db_option.webp)

Step 8 – On the License page, license information of Directory Manager installed on the master node
is displayed. A valid license and key enable the Next button. If the Next button remains disabled,
check your entries for errors.

Step 9 – Click **Next**.

![GroupID Service Configurations](/images/directorymanager/11.1/install/configure/servicesconfiguration.webp)

Step 10 – Directory Manager requires two services:

- Directory Manager Data Service: This is a web-based service that Directory Manager uses to
  communicate with Microsoft SQL Server for storing and fetching data in the database.
- Directory Manager Security Service: This is also a web-based service that Directory Manager uses
  to:

    - Authenticate and authorize users on different Directory Manager functionalities in accordance
      with their roles.
    - Encrypt and decrypt data that Directory Manager Data Service stores and fetches from the SQL
      database.

    To deploy these services, the Configuration Tool creates and configures a new website in IIS
    with the name _GroupIDSite11_. By default, it binds this site to any of the available ports.
    However, if you have a different preference, you can change the port.

    Click **Advanced Options** and enter the port in the Port Number box.

- Replication service: This service replicates object attributes from the provider (such as Active
  Directory) to Elasticsearch.
- Admin Center: Admin Center is a web-based application that can be accessed over the Internet and
  Intranet.

:::note
This Directory Manager instance will use Email and Scheduler services of the selected cluster.
:::


Step 11 – Click **Next**.

![Elasticsearch Settings page](/images/directorymanager/11.1/install/configure/elasticsearchsettings.webp)

Step 12 – Directory Manager provides the following two options for Elasticsearch configuration.
Select the relevant option:

- Let Directory Managerinstall and manage Elasticsearch: If you select this option, Directory
  Manager Configuration Tool will install Elasticsearch. It presents you default configuration of
  Elasticsearch cluster it will create:

    ![Select Elastic Cluster page](/images/directorymanager/11.1/install/configure/select_cluster_w_existing_db_option.webp)

    1. Cluster Name: lists all the clusters defined so far. Select one to create an Elasticsearch
       node within the selected cluster.
    2. Port: the default port for Elasticsearch API communication. Modify the port number if the
       mentioned default port is not available.
    3. TCP Port: the default port for communication between nodes within the cluster. Modify the
       port number if the mentioned default port is not available.

        :::note
        Make sure that the specified ports are available and unblocked.
        :::


    I will install and manage Elasticsearch myself: If you select this option, the following page is
    displayed:

    ![Elasticsearch settings page](/images/directorymanager/11.1/install/configure/elasticsearchsettings-2.webp)

    Provide configurations of Elasticsearch you want to use with Directory Manager:

    - Elasticsearch URL: URL for accessing the Elasticsearch.
    - Elasticsearch Username: service account for Elasticsearch.
    - Elasticsearch Password: password of the Elasticsearch service account.

Step 13 – Click **Next**.

![Service Account Settings page](/images/directorymanager/11.1/install/configure/service_account_settings_w_existing_db.webp)

:::note
If you configure a Group Managed Service Account (gMSA) as an App Pool service account then
the Directory ManagerConfiguration tool will add this account in the local administrators and
IIS_IUSRS groups.
:::


:::note
If you configure a normal user account as an App Pool service account and an AD identity store
is created with a gMSA service account, then the App Pool service account must have the
_PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account also must be a
member of Backup Operators and IIS_IUSRS groups.
:::


Step 14 – On the Service Account Settings page, specify the service account to use for the Directory
Manager app pool in IIS and Windows services.

- Use a domain account or a Group Managed Service Account (gMSA).
- The account must be a member of the Administrators group or both the Backup Operators and
  IIS_IUSRS groups.
- The account you specify will be used to manage the Directory Manager app pool in IIS. Directory
  Manager Data Service, Security Service, and the portals run under the app pool.
- By default, a local account, GroupIDSSuser, is set for the Directory Manager app pool, but you
  cannot proceed unless you change it to a domain account or gMSA.
- You can specify a local account (with local administrator rights) in app pool for a machine that
  is not joined to any domain (this applies to an Microsoft Entra ID identity store only).

    :::note
    For Directory Manager App Pool, a domain account can be used for a machine joined to a
    domain.
    :::


    :::note
    Before you use a Group Managed Service Account, make sure that:
    :::


    - Key Distribution Service (KDS) is enabled on the Directory Manager machine.
    - Microsoft AD module for PowerShell is installed on the machine.

Step 15 – You can specify a service accounts for the app pool in any of the following ways:

- Use an existing account: Click **Browse**.

    ![Find Service Account page](/images/directorymanager/11.1/install/configure/findserviceaccount.webp)

    On the Find Service Account dialog box, search and select the required account and click **OK**.

- Create a new service account: Click the **Create New** button on the Service Account Setting page.

    ![Create a new service account page](/images/directorymanager/11.1/install/configure/createserviceaccount.webp)

    On the Create Service Account dialog box, select the kind of account you want to create. Enter a
    name, container and password for the account. Click **Create**.

    :::note
    The logged-in user must have appropriate rights to create a new account.
    :::


    :::note
    If Key Distribution Service (KDS) is not configured in the environment, a warning will be
    displayed that you cannot use a Group Managed Service Account.
    :::


Step 16 – Provide password for the App Pool service account (except for a Group Managed Service
Account) in the Password box.

Step 17 – Click **Configure**.

![Configuring GroupID ](/images/directorymanager/11.1/install/configure/configuring.webp)

Step 18 – The next page displays the progress while a Directory Manager server is configured on the
machine. While configuring the machine, the Configuration Tool checks the application’s signing key
status and update it according to your Directory Manager environment. See the
[Update Signing Key](/docs/directorymanager/11.1/install/configure/signingkeyinfo.md) topic for information how Configuration Tool will update
Directory Manager's Signing Key.

Step 19 – This completes the configuration of Directory Manager as a slave node on your machine.
Click **Launch GroupID** to start using Directory Manager. The Sign In pa ge opens:

![GroupID Sign In page](/images/directorymanager/11.1/install/configure/launchgid.webp)

To login in to Directory Manager Admin Center for the first time, provide Directory Manager
Administrator user name and password.

**or**

click **Next** to launch the Upgrade wizard for upgrading Directory Manager.
