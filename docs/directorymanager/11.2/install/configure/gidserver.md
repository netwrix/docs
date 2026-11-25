---
title: "Configure a Directory Manager Server and Database"
description: "Configure a new Directory Manager server, its Data Service, and an Elasticsearch primary node with a new or existing SQL database."
keywords:
  - Directory Manager server configuration
  - SQL Server database settings
  - Elasticsearch primary node
  - Directory Manager Data Service
  - Directory Manager Security Service
sidebar_position: 20
---

# Configure a Directory Manager Server and Database

This option configures the Directory Manager server and the Directory Manager Data Service on the
machine where you install Directory Manager. It also configures the Directory Manager
Elasticsearch Service as a primary node for the Elasticsearch service cluster to support load
balancing.

To configure a Directory Manager server on the machine where you run the Configuration Tool:

1. Select the **Configure a new Directory Manager 11 server with new or existing database** option on the
Select to create new server or use existing server page of the Configuration Tool and click
**Next**.

![Database Settings page for entering SQL Server, account credentials, and database name](/images/directorymanager/11.2/install/configure/databasesettings.webp)

2. In the **SQL Server** box, enter the name of the SQL Server to use with Directory Manager.

3. Under **Account Credentials**, set the credentials that the **Config Tool** and **Services**
accounts use to connect to SQL Server. Each account can use SQL Server or Windows authentication
independently. For each account, select the authentication mode in the **Auth** list. Modes are:

- SQL Server – To connect using a SQL Server account. See SQL Authentication in
  [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.2/install/configure/setupauthentication.md) topic.
- Windows – To connect using a Windows user account. See Windows Authentication in
  [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.2/install/configure/setupauthentication.md) topic.

4. Depending on the authentication mode you selected, do the following:

- For SQL Server: enter the user name and password of the SQL Server account in the **Username** and
  **Password** boxes.
- For Windows: enter the user name and password of a domain account or a Windows local account that
  the account uses to connect with SQL Server, or click the ellipsis button next to
  **Username** to select the account. The system authenticates with that account on SQL Server via
  Windows authentication.

5. In the **SQL Database** box, either specify the name of a new SQL database to use for Directory
Manager or select your existing database. The **Trust Server Certificate** checkbox is selected by
default. See the
[Configure a SQL Certificate for Directory Manager](/docs/directorymanager/11.2/requirements/sqlcertificate.md)
topic for details on the SQL certificate.

6. Click **Next**.

![License page for entering the license number and key](/images/directorymanager/11.2/install/configure/license.webp)

7. On the License page, enter a valid license number and key in the respective boxes. A valid
license and key enable the **Next** button. If the **Next** button remains disabled, check your
entries for errors.

8. Click **Next**.

![Elasticsearch Settings page with options to install and manage Elasticsearch](/images/directorymanager/11.2/install/configure/elasticsearchsettings.webp)

9. Directory Manager provides the following two options for Elasticsearch configuration.
Select the relevant option:

- **Let Directory Manager install and manage Elasticsearch**: If you select this option, the Directory Manager Configuration Tool installs Elasticsearch. It presents the default configuration of the Elasticsearch cluster it creates:

    ![Select Elastic Cluster page showing cluster name, port, and TCP port](/images/directorymanager/11.2/install/configure/selectelasticcluster.webp)

    1. Cluster Name: for Elasticsearch nodes within the cluster. You can modify the name.
    2. Port: the default port for Elasticsearch API communication. Modify the port number if the default port isn't available.
    3. TCP Port: the default port for communication between nodes within the cluster. Modify the
       port number if the default port isn't available.

        :::note
        Verify that the specified ports are available and unblocked.
        :::


    **I will install and manage Elasticsearch myself**: If you select this option, the following page
    opens:

    ![Elasticsearch settings page for entering the URL, user name, and password of your own Elasticsearch](/images/directorymanager/11.2/install/configure/elasticsearchsettings-2.webp)

    Provide the configuration of the Elasticsearch instance you want to use with Directory Manager:

    - **Elasticsearch Url**: URL for accessing Elasticsearch.
    - **Elasticsearch Username**: service account for Elasticsearch.
    - **Elasticsearch Password**: password of the Elasticsearch service account.

    Step 10 – Click **Next**.

    ![Services Configuration page listing the services Directory Manager configures](/images/directorymanager/11.2/install/configure/servicesconfiguration.webp)

    Step 11 – At this point, Directory Manager configures the following:

    - Directory Manager Data Service: A web-based service that Directory Manager uses to
      communicate with Microsoft SQL Server for storing and fetching data in the database.
    - Directory Manager Security Service: Also a web-based service that Directory Manager
      uses to:

        - Authenticate and authorize users on different Directory Manager functionalities in
          accordance with their roles.
        - Encrypt and decrypt data that Directory Manager Data Service stores and fetches from the
          SQL database.

        To deploy these services, the Configuration Tool creates and configures a new website in IIS
        with the name _GroupIDSite11_. By default, it uses port 4443 if available, or a random port.
        You can change the port.

        Click **Advanced Options** and enter the port in the **Port Number** box.

    - Replication service: Replicates object attributes from the provider (such as
      Active Directory) to Elasticsearch.
    - Admin Center: A web-based application that users access over the Internet
      and intranet.
    - Email service: Maintains a queue of all notification requests generated by identity stores,
      and sends them one by one. Directory Manager deploys this service for each cluster.
    - Scheduler service: Initiates schedule runs for scheduled jobs defined in
      Directory Manager. Directory Manager configures this service for each cluster.

    Step 12 – Click **Next**.

    ![Service Account Settings page for the App Pool and Administrator accounts](/images/directorymanager/11.2/install/configure/serviceaccount.webp)

    :::note
    If you configure a Group Managed Service Account (gMSA) as an App Pool service account,
    then the Directory Manager Configuration Tool adds this account to the local Administrators and IIS_IUSRS groups.
    :::


    :::note
    If you configure a normal user account as an App Pool service account and an AD identity
    store is created with a gMSA service account, then the App Pool service account must have the
    _PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account must also be a member of Backup Operators and IIS_IUSRS groups.
    :::


    Step 13 – Specify the service accounts to use for the Directory Manager App Pool and a default administrative account for Directory Manager Admin Center.

    | Service                         | Service Account Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Directory Manager App Pool      | Use a domain account or a Group Managed Service Account (gMSA). The account must be a member of the Administrators group or both the Backup Operators and IIS_IUSRS groups. The account you specify manages the Directory Manager app pool in IIS. Directory Manager Data Service, Security Service, and the portals run under the app pool. By default, the Directory Manager app pool uses a local account, GroupIDSSuser, but you can't proceed unless you change it to a domain account or gMSA. You can specify a local account (with local administrator rights) in the app pool for a machine that isn't joined to any domain (this applies to a Microsoft Entra ID identity store only). |
    | Directory Manager Administrator | Use this account as the default administrative account for the first sign-in to Directory Manager Admin Center. This account isn't associated with any identity store, but is specific to Directory Manager. This account works as an Admin of all Admin accounts of defined identity stores in Admin Center.                                                                                                                                                                                                                                                                                                                                                                                                    |

    :::note
    For the Directory Manager App Pool on a machine joined to a domain, use a domain account.
    :::


    :::note
    Before you use a Group Managed Service Account, ensure that:
    :::


    - Key Distribution Service (KDS) is enabled on the Directory Manager machine.
    - Microsoft AD module for PowerShell is installed on the machine.

    Step 14 – You can specify a service account for the app pool in any of the following ways:

    - Use an existing account: Click **Browse**.

        ![Find Service Account dialog box for selecting an existing account](/images/directorymanager/11.2/install/configure/findserviceaccount.webp)

        On the Find Service Account dialog box, search, select the required account, and click
        **OK**.

Create a new service account: Click the **Create New** button on the Service Account settings page.

![Create Service Account dialog box for creating a new account](/images/directorymanager/11.2/install/configure/createserviceaccount.webp)

On the Create Service Account dialog box, select the kind of account you want to create. Enter a
name, container, and password for the account. Click **Create**.

:::note
The logged-in user must have appropriate rights to create a new account.
:::


:::note
If Key Distribution Service (KDS) isn't configured in the environment, a warning appears stating that you can't use a Group Managed Service Account.
:::


Step 15 – Provide the password for the App Pool service account (except for a Group Managed Service
Account) in the Password box.

Step 16 – Provide the password for the Directory Manager Administrator account in the **Password** box.

:::note Password Requirements
The Directory Manager Administrator password must meet the following complexity requirements:
- Be at least **16 characters** in length
- Contain at least **3 out of 4** of the following:
  - At least one uppercase letter (A-Z)
  - At least one lowercase letter (a-z)
  - At least one digit (0-9)
  - At least one special character (`!@#$%^&*?_~-£().,`)
:::

Step 17 – Click **Configure**.

![Configuring Directory Manager page showing configuration progress](/images/directorymanager/11.2/install/configure/configuring.webp)

The Configuring Directory Manager page displays the progress while the Configuration Tool configures a
Directory Manager server on the machine.

While configuring the machine, the Configuration Tool checks the application's signing key status and updates it according to your Directory Manager environment. See the
[Update the Directory Manager Signing Key](/docs/directorymanager/11.2/install/configure/signingkeyinfo.md) topic for information about how the Configuration Tool updates Directory Manager's signing key.

After successful configuration, the Directory Manager is successfully configured page opens.

Step 18 – Click **Launch Directory Manager** on the Directory Manager is successfully configured page to start
using Directory Manager. The Sign In page opens:

![Directory Manager Sign In page with fields for user name and password](/images/directorymanager/11.2/install/configure/launchgid.webp)

To sign in to Directory Manager Admin Center for the first time, enter the Directory Manager Administrator user name and password.

**or**

Click **Next** to launch the Upgrade wizard for upgrading Directory Manager.
