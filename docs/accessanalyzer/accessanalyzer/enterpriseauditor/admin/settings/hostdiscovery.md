# Host Discovery

The Host Discovery node is for configuring the settings which dictate how Access Analyzer handles newly discovered hosts, what information is logged during the host discovery process, and how long the logged information is stored.

![Host Discovery page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/hostdiscovery.png)

In the Host Discovery Options section at the top is a checkbox for the __Perform the first inventory right away for newly discovered hosts__ option. This option is selected by default.

- If selected, Access Analyzer retrieves information about a host as soon as it is discovered
- If deselected, the host inventory information can be obtained later according to the Host Inventory node options

The configurable options in the Discovery Log section are:

- Retention period – Determines how long the Host Discovery query log is kept. This is set by default to 14 days which is based on average Access Analyzer usage.
- Log level – Determines what information is stored in the Host Discover query log

![Log level options](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/hostdiscoveryloglevels.png)

The log levels are:

- Debug – Records everything that happens during the host discovery process, most verbose level of logging

  - Records all Info level information
  - If files are referenced or updated during the process of running the query then the path to the affected file is shown
  - Helps [Netwrix Support](https://www.netwrix.com/support.html) to assist in diagnosing issues which may be causing host inventories to fail
  - Creates the largest file
- Info – Records information on the steps which occur during the host discovery process, in addition to warnings and errors

  - Records all Warning level information
  - Records start actions of each query
  - Records end actions of each query
- Warning – Records all warnings which occur during the host discovery process

  - Records all Error level information
  - When Access Analyzer encounters a host which only grants partial access
  - When Access Analyzer encounters something which allows for only partial data gathering
  - When Access Analyzer encounters something which causes it to produce a larger log file
- Error – Records all errors which occur during the host discovery process

  ___RECOMMENDED:___ Set the Log Level to Error. The default setting is Info, but it is recommended that the setting for daily use be set to Error. The other log levels are designed to assist with troubleshooting host discovery and host inventory issues.

The __Cancel__ and __Save__ buttons are in the lower-right corner of the Host Discovery view. These buttons become enabled when modifications are made to the Host Discovery global settings. Whenever changes are made at the global level, click __Save__ and then __OK__ to confirm the changes. Otherwise, click __Cancel__ if no changes were intended.

![Host Discovery Log under Host Discovery node](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/hostdiscoverylog.png)

The Host Discovery Log is located under the __Host Discovery__ node.
