# Global Settings

The global settings have an overall impact on the running ofAccess Analyzer jobs. Settings are inherited through a parent-child structure from the Settings node through the Jobs tree to the individual jobs unless inheritance is broken by direct assignment at either the job group or the individual job level.

![Configuration Settings](/static/img/product_docs/dataclassification/ndc/admin/taxonomies/globalsettings.png)

Some of these settings are configured during the initial launching of theAccess Analyzer Console. Others are configured as desired by the end-user. Expand the Settings node in the Navigation pane to select a global setting to configure:

- [Access](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/access/overview.md)
  - Configure what applications users, and groups have access to Access Analyzer
  - Configure Role Based Access control of Access Analyzer and the Web Console
  - Configure REST API
- [Application](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/application/overview.md)
  - Configure the Access Analyzer application logging level
  - Configure profile security
  - Configure options to connecting to host targets
  - Configure grid view parameters for data tables and views
  - Configure database cleanup options
  - Configure the Access Analyzer application’s exit options
- [Connection](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/overview.md)
  - Optional configuration during the initial launch, but required for host inventory query execution and job execution
  - Provide credential sets with adequate permissions to remotely contact and gather information from target hosts
  - Creating a Connection Profile requires credentials with appropriate levels of permissions according to the data collector being used
- [Exchange](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/exchange.md)
  - Required for auditing an organization’s Exchange environment
  - Only enabled for configuration once the Access Analyzer for Exchange Solution prerequisites are installed
  - Configure Microsoft Exchange server connections and requires Exchange server versions and names
  - The ExchangeMailbox, Exchange2K, ExchangePS, and ExchangePublicFolder Data Collectors utilize these global settings
- [History](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/history.md)
  - Configure job data retention period settings
  - Configure diagnostics retention period settings
- [Host Discovery](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/hostdiscovery.md)
  - Configure host discovery settings
  - Configure discovery log settings
- [Host Inventory](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/hostinventory.md)
  - Configure inventory items, performance tuning, and desired host list views
- [Notification](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/notification.md)
  - Required for the Access Analyzer application to send email
  - Provide SMTP server information and sender information
  - Configuration requires an organization’s SMTP server name and authentication credentials (if applicable)
  - Encryption Options can be configured
- [Reporting](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/reporting.md)
  - Required for report publishing
  - Configure settings for publishing reports outside of the Access Analyzer Console (e.g. distribution via email, posting to an internal share, or posting to the Report Index)
  - Use information to configure accessing published reports via the Web Console
- [Schedule](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/schedule.md)
  - Optional configuration during the initial launch if Windows authentication is used with the Storage Profile
  - Required in order to schedule host inventory, job, analysis task, and action task execution
  - Provide credentials used against the Access Analyzer Console server to execute scheduled jobs with the Windows Task Scheduler
  - Creating a Schedule Service Account requires credentials on the Access Analyzer Console server
  - Multiple Schedule Service Accounts can be configured
- [Sensitive Data](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/sensitivedata/overview.md)
  - Flag locations which are known to contain false positive criteria matches to be filtered out of Sensitive Data Discovery reports
- [ServiceNow](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/servicenow.md)
  - Required for integration between Access Analyzer and ServiceNow®
  - Configure the ServiceNow Action Module authentication credentials
  - Configuration requires an organization’s ServiceNow instance name and authentication credentials
- [Storage](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/storage/overview.md)
  - Required configuration during the initial launch
  - Create profiles for storing output data from queries
  - Creating a Storage Profiles requires Microsoft® SQL® Server information

See the [Getting Started](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/gettingstarted.md#Getting-Started) topic for additional information.
