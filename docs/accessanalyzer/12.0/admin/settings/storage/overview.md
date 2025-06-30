# Storage

The Storage node contains objects known as Storage Profiles. Storage Profiles house the information
Access Analyzer uses to connect to a SQL Server database within your environment.

![Storage Node](/img/product_docs/accessanalyzer/12.0/admin/settings/storage/storage.webp)

Each Storage Profile consists of the following parts:

- Profile name – Unique, descriptive name which distinguishes the profile from others in cases where
  multiple profiles exist
- Server name – Name of the SQL Server serving the database to be used for the Access Analyzer
  database. The value format can be either a NetBIOS name, a fully qualified domain name, or an IP
  Address.
- Instance name – Value of the named instance, if the SQL Server being connected to is configured to
  use a named instance

    - To change the instance port number, provide the instance name in the format
      `<Instance name>,<Port>`. For example, if using the default **MSSQLSERVER** instance and port
      **12345**, the instance name should be entered as `MSSQLSERVER,12345`.

- Command Timeout – Number of minutes before Access Analyzer halts any SQL queries running for that
  amount of time. This prevents SQL queries from running excessively long. The default is 1440
  minutes.
- Authentication – Mode of authentication to the SQL Server. In general, it is recommended to
  connect with an account configured with the DBO role (database owner rights) and provisioned to
  use DBO Schema.

    **_RECOMMENDED:_** When possible, use Windows Authentication. Windows Authentication is more
    secure than SQL Server Authentication. See the Microsoft
    [Choose an authentication mode](https://learn.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode) article
    for additional information.

    - Windows authentication – Leverages the account used to run the Access Analyzer Console

        **NOTE:** This option affects the credentials used for Schedule Service Accounts. See the
        [Schedule](/docs/accessanalyzer/12.0/admin/settings/schedule.md) topic for additional information.

    - SQL Server authentication – Leverages the account provided in the **User name** and
      **Password** textboxes
    - Use existing password – Use the password configured for the Storage Profile account
    - Specify a new password below – Enter a new password for the selected Storage Profile account

- Database name – Name of the Access Analyzer database to use in this storage profile

    - Use existing database – Drop-down menu provides a list of databases on the named SQL Server,
      provided the connection information supplied is correct. If the menu is empty, then a
      connection to the SQL Server was not established.
    - Create new database – Access Analyzer automatically creates a new database using the name
      provided in the textbox. This value should be a unique, descriptive name.

![Operations on the Storage view](/img/product_docs/accessanalyzer/12.0/admin/settings/storage/storageoperations.webp)

At the Storage view, the following operations are available:

- Add Storage profile – Create a new Storage Profile. See the [Add a Storage Profile](/docs/accessanalyzer/12.0/admin/settings/storage/add.md) topic
  for additional information.
- Set as default – Change the default Storage Profile. See the
  [Set a Default Storage Profile](/docs/accessanalyzer/12.0/admin/settings/storage/default.md) topic for additional information.
- Delete – Remove a Storage Profile. See the [Delete a Storage Profile](/docs/accessanalyzer/12.0/admin/settings/storage/delete.md) topic for
  additional information.

**NOTE:** A green checkmark in the Storage Profiles list indicates the default Storage Profile.

The **Cancel** and **Save** buttons are in the lower-right corner of the Storage view. These buttons
become enabled when modifications are made to the Storage global setting. Whenever changes are made
at the global level, click **Save** and then **OK** to confirm the changes. Otherwise, click
**Cancel** if no changes were intended.

The vault provides enhanced security through enhanced encryption to various credentials stored by
the Access Analyzer application. See the [Vault](/docs/accessanalyzer/12.0/admin/settings/application/vault.md) topic for additional
information.
