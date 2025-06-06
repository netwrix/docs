# Access Analyzer Initial Configuration

Once the Access Analyzer installation process is complete, and before performing actions within Access Analyzer, the initial settings for the Access Analyzer Console must be configured.

![Newrix Access Governance shortcut](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/shortcut.png)

__Step 1 –__ Launch the Access Analyzer application. The installation wizard places the Access Analyzer icon on the desktop.

![Configuration Wizard Welcome page](/static/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

__Step 2 –__ On the Welcome page of the Access Analyzer Configuration Wizard, click __Next__ to continue.

![Configuration Wizard Version Selection page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/versionselection.png)

__Step 3 –__ On the Version Selection page, select the __I have no previous versions to migrate data from__ and click __Next__ to continue.

__NOTE:__ If you are upgrading from a previous version of Access Analyzer, select __Choose a StealthAUDIT root folder path to copy from__. See the [Access Analyzer Console Upgrade](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/upgrade/overview.md) topic for additional information.

![SQL Server Settings page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/sqlserver.png)

__Step 4 –__ Configure the options on the SQL Server Settings page.

- Server name – Enter the database server host name (NetBIOS name, FQDN, or IP Address)
- Instance name – If the SQL Server is configured to use an instance name, provide the instance name in the text box. If not, leave this text box blank.

  - To change the instance port number, provide the instance name in the format ```<Instance name>,<Port>```. For example, if using the default __MSSQLSERVER__ instance and port __12345__, the instance name should be entered as ```MSSQLSERVER,12345```.
- Command timeout [number] minutes – Number of minutes before Access Analyzer halts any SQL queries running for that amount of time. This prevents SQL queries from running excessively long. The default is 1440 minutes.
- Windows authentication – Leverages the account used to open the Access Analyzer Console. This option will use Windows NT Authentication to authenticate to the SQL Server. It also requires the Schedule Service Account to have proper permissions on the SQL database.
- SQL Server authentication – Leverages an account created within the SQL Server.

  - User name and password – If SQL Server authentication is selected, provide the __User name__ and __Password__ for the SQL account.
  - Specify a new password below – Specify a new password for the SQL server.
- Use existing database – Confirm the SQL Server connection has been established by selecting the radio button for __Use existing database__ and clicking the drop-down arrow. If a listing of databases appears, then the connection has been established. Select this option to use a pre-existing database. Then select a database from the drop-down menu of available databases.
- Create new database – Select this option to create a new database during the configuration of the storage profile. Enter a unique, descriptive name for the new database. If multiple databases might exist for Access Analyzer, then the default name of Access Analyzer is not recommended.

See the [Securing the Access Analyzer Database](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/database.md#Securing-the-Access-Analyzer-Database) topic for additional information on creating a SQL Server database for Access Analyzer.

__Step 5 –__ Click __Next__.

- If SQL Server authentication is used, the Options page is displayed next. Skip to Step 7.
- If Windows Server authentication is used, the __Schedule Account__ page is enabled for configuration. Continue to Step 6.

![Schedule Account Configuration page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/scheduleaccount.png)

__Step 6 –__ (Windows Authentication Only) Configure the schedule service account on the Scheduling page. The account configured here must be an Active Directory account and must have rights to the Access Analyzer Console server’s local Task folders as well as sufficient rights to the Access Analyzer database.

There are two options that can be selected:

- Skip this step, I will configure a schedule service account later – Select this radio button to skip this step and configure the schedule service account later
- Use the following service for account – Select this radio button to configure the schedule service account and enter the following information:

  - Domain – The domain for the service account
  - User name – The user name for the service account
  - Password – The password for the service account
  - Confirm – Re-enter the password for the service account

![Configuration wizard Options page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/options.png)

__Step 7 –__ On the Options page, select whether to send usage statistics to Netwrix to help us improve our product. After the Usage Statistics option is set as desired, click __Next__ to continue.

- If selected, usage statistics are collected and sent to Netwrix

  - Upon startup of the Access Analyzer console, the system checks if usage statistics have been sent in the last 7 days. If they have not been, stored procedures run against the Access Analyzer database and gather data about job runs, access times, and environmental details like resource counts, users counts, number of exceptions, and so on. This data is then sent back to Netwrix to help us identify usage trends and common pain points, so that we can use this information to improve the product.
  - Only anonymous statistic-level data is included. No private company or personal data is collected or sent to Netwrix.
- If cleared, no usage statistics are collected or sent to Netwrix

![Progress page when upgrade process has completed](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 8 –__ After the Access Analyzer Configuration Wizard finishes configuring your installation, click __Finish__ to open the Access Analyzer Console.

__NOTE:__ To view the log for the setup process, click __View Log__ to open it. If you need to view the log after exiting the wizard, it is located in the installation directory at ```..\STEALTHbits\StealthAUDIT\SADatabase\Logs```. See the [Troubleshooting](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/maintenance/troubleshooting.md) topic for more information about logs.

![Netwrix Acces Governance Settings Node](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/settingsnode.png)

The Access Analyzer Console is now ready for custom configuration and use. There are a few additional steps to complete in order to begin collecting data, such as configuring a Connection Profile and a Schedule Service account as well as discovering hosts and setting up host lists. See the [Getting Started](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/gettingstarted.md) topic for additional information.
