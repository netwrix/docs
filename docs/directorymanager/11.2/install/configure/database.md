---
title: "Add a Directory Manager Server to an Existing Cluster"
description: "Configure a new Directory Manager server that joins an existing cluster and uses the existing database."
keywords:
  - Directory Manager cluster
  - add Directory Manager server to cluster
  - existing SQL Server database
  - Elasticsearch replication
  - signing key import
sidebar_position: 30
---

# Add a Directory Manager Server to an Existing Cluster

While installing Directory Manager, you can choose to create a Directory Manager server with load
balancing support, where the load is balanced in real time across multiple Data Services, portals, and
Elasticsearch instances.

This option also configures the Directory Manager Elasticsearch Service as a secondary node to the
primary node for the Elasticsearch Service cluster configured on the Directory Manager server.

## Before You Begin

All Directory Manager servers in a multi-instance deployment share the same Directory Manager password,
passphrase, and signing key. Before you configure the new server, export all three from the primary
server. Import the Directory Manager password and passphrase on the new server before you run the
Configuration Tool. Import the signing key while you run the Configuration Tool.

Step 1 – On the primary server, export the Directory Manager password with the GroupIDPasswordTransfer
utility. You don't need to generate a new password first. See the
[Export/Import the New Password](/docs/directorymanager/11.2/install/securityutility.md#exportimport-the-new-password)
section of the [Directory Manager Security Utility](/docs/directorymanager/11.2/install/securityutility.md) topic.

Step 2 – On the primary server, export the passphrase. See the
[Directory Manager Passphrase Utility](/docs/directorymanager/11.2/install/passphraseutility.md) topic.

Step 3 – On the primary server, export the signing key. See the
[Export a Signing Key](/docs/directorymanager/11.2/admincenter/service/securityservice/signkeyutility.md#export-a-signing-key)
section of the [Signing Key Utility](/docs/directorymanager/11.2/admincenter/service/securityservice/signkeyutility.md)
topic.

Step 4 – Copy the exported files to the new server.

Step 5 – On the new server, import the Directory Manager password and the passphrase.

## Configure the Server

To configure a Directory Manager server with an existing database:

Step 1 – On the Select to create new server or use existing server page of the Configuration Tool,
select the **Configure a new Directory Manager 11 server to add it into an existing Directory Manager 11 cluster with an existing database**
option. See Step 3 of the [Run the Directory Manager Configuration Tool](/docs/directorymanager/11.2/install/configure/configure.md) topic.

Step 2 – Click **Next**.

![Database Settings page for entering SQL Server, account credentials, and database name](/images/directorymanager/11.2/install/configure/databasesettings.webp)

Step 3 – In the **SQL Server** box, enter the name of the SQL Server to use with this new Directory
Manager server. The SQL Server must be the same one used with the primary node of Directory Manager.

Step 4 – Under **Account Credentials**, set the credentials that the **Config Tool** and
**Services** accounts use to connect to SQL Server. Each account can use SQL Server or Windows
authentication independently. For each account, select the authentication mode in the **Auth**
list. Modes are:

- SQL Server – To connect using a SQL Server account. See the
  [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.2/install/configure/setupauthentication.md) topic for
  additional information.
- Windows – To connect using a Windows user account. See the
  [SQL Server Authentication Modes for Directory Manager](/docs/directorymanager/11.2/install/configure/setupauthentication.md) topic for
  additional details.

Step 5 – Depending on the authentication mode selected, do the following:

- For SQL Server: enter the user name and password of the SQL Server account in the **Username** and
  **Password** boxes.
- For Windows: enter the user name and password of a domain account or a Windows local account that
  the account uses to connect with SQL Server, or click the ellipsis button next to
  **Username** to select the account.

Step 6 – In the **SQL Database** box, specify the name of the SQL database being used by the primary
Directory Manager node. This new Directory Manager instance uses the same database. The
**Trust Server Certificate** checkbox is selected by default. See the
[SQL Certificate for Windows Authentication](/docs/directorymanager/11.2/requirements/sqlcertificate.md)
topic for details on the SQL certificate.

Step 7 – Click **Next**.

![License page showing the license information from the primary node](/images/directorymanager/11.2/install/configure/license_w_existing_db_option.webp)

Step 8 – On the License page, Directory Manager displays the license information from the primary node. A valid license and key enable the **Next** button. If the **Next** button remains disabled, check your entries for errors.

Step 9 – Click **Next**.

![Services Configuration page listing the services Directory Manager configures](/images/directorymanager/11.2/install/configure/servicesconfiguration.webp)

Step 10 – Directory Manager requires two services:

- Directory Manager Data Service: A web-based service that Directory Manager uses to
  communicate with Microsoft SQL Server for storing and fetching data in the database.
- Directory Manager Security Service: Also a web-based service that Directory Manager uses
  to:

    - Authenticate and authorize users on different Directory Manager functionalities in accordance
      with their roles.
    - Encrypt and decrypt data that Directory Manager Data Service stores and fetches from the SQL
      database.

    To deploy these services, the Configuration Tool creates and configures a new website in IIS
    with the name _GroupIDSite11_. By default, it uses port 4443 if available, or a random port.
    You can change the port.

    Click **Advanced Options** and enter the port in the **Port Number** box.

- Replication service: Replicates object attributes from the provider (such as Active
  Directory) to Elasticsearch.
- Admin Center: A web-based application that you can access over the Internet and intranet.

:::note
This Directory Manager instance uses the Email and Scheduler services of the selected cluster.
:::


Step 11 – Click **Next**.

![Elasticsearch Settings page with options to install and manage Elasticsearch](/images/directorymanager/11.2/install/configure/elasticsearchsettings.webp)

Step 12 – Directory Manager provides the following two options for Elasticsearch configuration.
Select the relevant option:

- **Let Directory Manager install and manage Elasticsearch**: If you select this option, the Directory Manager Configuration Tool installs Elasticsearch. It presents the default configuration of the Elasticsearch cluster it creates:

    ![Select Elastic Cluster page showing cluster name, port, and TCP port](/images/directorymanager/11.2/install/configure/select_cluster_w_existing_db_option.webp)

    1. Cluster Name: lists all the clusters defined so far. Select one to create an Elasticsearch
       node within the selected cluster.
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

Step 13 – Click **Next**.

![Service Account settings page for the App Pool service account](/images/directorymanager/11.2/install/configure/service_account_settings_w_existing_db.webp)

:::note
If you configure a Group Managed Service Account (gMSA) as an App Pool service account, then the Directory Manager Configuration Tool adds this account to the local Administrators and IIS_IUSRS groups.
:::


:::note
If you configure a normal user account as an App Pool service account and an AD identity store
is created with a gMSA service account, then the App Pool service account must have the
_PrincipalsAllowedToRetrieveManagedPassword_ property. The App Pool service account must also be a member of Backup Operators and IIS_IUSRS groups.
:::


Step 14 – On the Service Account settings page, specify the service account to use for the Directory
Manager app pool in IIS and Windows services.

- Use a domain account or a Group Managed Service Account (gMSA).
- The account must be a member of the Administrators group or both the Backup Operators and
  IIS_IUSRS groups.
- The account you specify manages the Directory Manager app pool in IIS. Directory
  Manager Data Service, Security Service, and the portals run under the app pool.
- By default, a local account, GroupIDSSuser, is set for the Directory Manager app pool, but you
  can't proceed unless you change it to a domain account or gMSA.
- You can specify a local account (with local administrator rights) in app pool for a machine that
  isn't joined to any domain (this applies to a Microsoft Entra ID identity store only).

    :::note
    Use a domain account for Directory Manager App Pool on a machine joined to a
    domain.
    :::


    :::note
    Before you use a Group Managed Service Account, ensure that:
    :::


    - Key Distribution Service (KDS) is enabled on the Directory Manager machine.
    - Microsoft AD module for PowerShell is installed on the machine.

Step 15 – You can specify a service account for the app pool in any of the following ways:

- Use an existing account: Click **Browse**.

    ![Find Service Account dialog box for selecting an existing account](/images/directorymanager/11.2/install/configure/findserviceaccount.webp)

    On the Find Service Account dialog box, search, select the required account, and click **OK**.

- Create a new service account: Click the **Create New** button on the Service Account settings page.

    ![Create Service Account dialog box for creating a new account](/images/directorymanager/11.2/install/configure/createserviceaccount.webp)

    On the Create Service Account dialog box, select the kind of account you want to create. Enter a
    name, container, and password for the account. Click **Create**.

    :::note
    The logged-in user must have appropriate rights to create a new account.
    :::


    :::note
    If Key Distribution Service (KDS) isn't configured in the environment, a warning appears stating that you can't use a Group Managed Service Account.
    :::


Step 16 – Provide the password for the App Pool service account (except for a Group Managed Service
Account) in the Password box.

Step 17 – Click **Configure**.

![Configuring Directory Manager page showing configuration progress](/images/directorymanager/11.2/install/configure/configuring.webp)

Step 18 – If the Configuration Tool displays the Import Signing Key page, click **Browse** next to
the Select file box, select the signing key file that you exported from the primary server, enter its
password in the **Password** box, and click **Next**.

The next page displays the progress while a Directory Manager server is configured on the
machine. While configuring the machine, the Configuration Tool checks the application's signing key
status and updates it according to your Directory Manager environment. See the
[Update the Directory Manager Signing Key](/docs/directorymanager/11.2/install/configure/signingkeyinfo.md) topic for information about how the Configuration Tool updates Directory Manager's signing key.

Step 19 – This completes the configuration of Directory Manager as a secondary node on your machine.
Click **Launch Directory Manager** to start using Directory Manager. The Sign In page opens:

![Directory Manager Sign In page with fields for user name and password](/images/directorymanager/11.2/install/configure/launchgid.webp)

To sign in to Directory Manager Admin Center for the first time, enter the Directory Manager Administrator user name and password.

**or**

Click **Next** to launch the Upgrade wizard for upgrading Directory Manager.

## Resolve Elasticsearch Replication Issues

If the nodes use a Directory Manager-managed Elasticsearch cluster, replication can fail because the
Elasticsearch state on the nodes has drifted apart. To resolve this, complete the following steps on
each node:

Step 1 – Edit `elasticsearch.yml`:

- `cluster.name` – Must match the value on the primary node.
- `discovery.seed_hosts` – Must include the primary node and list it first.
- `cluster.initial_master_nodes` – Must include the primary node and list it first, or you can
  omit the setting.

Step 2 – Delete the contents of the existing Elasticsearch data directory.

Step 3 – Restart the Elasticsearch service.
