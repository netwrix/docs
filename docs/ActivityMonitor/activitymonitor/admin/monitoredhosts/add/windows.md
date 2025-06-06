# Windows

Understanding File Activity Monitoring

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of values

It provides the ability to feed activity data to SIEM products. The following dashboards have been specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the [Netwrix File Activity Monitor App for QRadar](/docs/product_docs/activitymonitor/activitymonitor/siem/qradar/overview.md) for additional information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/docs/product_docs/activitymonitor/activitymonitor/siem/splunk/overview.md) for additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Access Analyzer (formerly Enterprise Auditor)
- Netwrix Threat Manager

Prior to adding a Windows host to the Activity Monitor, the prerequisites for the target environment must be met. See the [Windows File Server Activity Auditing Configuration](/docs/product_docs/activitymonitor/config/windowsfile/activity.md) topic for additional information.

_Remember,_ the Activity Agent must be deployed to the server. It cannot be deployed to a proxy server.

## Add Agent's Windows Host

Follow the steps to add a Windows host to be monitored, if it was not configured when the agent was deployed.

__Step 1 –__ In Activity Monitor, go to the Monitored Hosts tab and click Add. The Add New Host window opens.

![Choose Agent](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/chooseagent.png)

__Step 2 –__ On the Choose Agent page, select the __Agent__ to monitor deployed on the Windows file server. Click __Next__.

![Add Host page with Windows selected](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhostwindows.png)

__Step 3 –__ On the Add Host page, select the Agent’s Windows host radio button. Remember, the agent must be deployed on the Windows file server to be monitored. If desired, add a __Comment__. Click __Next__.

![Protocols page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/protocolspage.png)

__Step 4 –__ On the Protocols page, select which protocols to monitor. The protocols that can be monitored are:

- All
- CIFS
- NFS

Click __Next__.

![Configure Operations page for Windows host](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/configureoperationswindows.png)

__Step 5 –__ On the Configure Operations page, select the __File Operations__,__Directory Operations__, __Share Operations__ and __VSS Opertions__ to be monitored. Users may also filter events by operation type by selecting the radio button:

- All – Reports both allowed and denied operations
- Allowed only – Reports only allowed operations
- Denied only – Reports only denied operations

Additional options include:

__CAUTION:__ Enabling the Suppress subsequent Read operations in the same folder option can result in Read events not being monitored.

- Suppress subsequent Read operations in the same folder – Logs only one Read operation when subsequent Read operations occur in the same folder. This option is provided to improve overall performance and reduce output log volume.
- Suppress reporting of File Explorer's excessive directory traversal activity – Filters out events of excessive directory traversal in File Explorer.
- Suppress Permission Change operations with reordered ACL – Prevents tracking events where permission updates occurred resulting in reordered ACEs (Access Control Entries) but with no other changes in the ACL (Access Control List). For example, if a user is removed in the security settings of a file, and then the same user is added back with the same security permissions, the change is not logged.
- Suppress Inherited Permission Changes – Filters out events for inherited permission changes. This option is provided to improve overall performance and reduce output activity log volume.
- Suppress Microsoft Office operations on temporary files – Filters out events for Microsoft Office temporary files. When Microsoft Office files are saved or edited, many temporary files are created. With this option enabled, events for these temporary files are ignored.

Click __Next__.

![Configure Basic Options page for Windows](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/configurebasicoptionswindows.png)

__Step 6 –__ On the Configure Basic Options page, choose which settings to enable. The “Log files” are the activity logs created by the activity agent on the target host. Select the desired options:

- Report Account Names – Adds an Account Name column in the generated TSV files
- Report UNC paths – Adds a UNC Path column and a Rename UNC Path column in the generated TSV files
  - This option corresponds to the REPORT\_UNC\_PATH parameter in the INI file. It is disabled by default. The UNC Path is in the following format:
    - For CIFS activity – \\[HOST]\[SHARE]\[PATH]
    - Example CIFS activity – \\ExampleHost\TestShare\DocTeam\Temp.txt
  - When the option is enabled, the added columns are populated when a file is accessed remotely through the UNC Path. If a file is accessed locally, these columns are empty. These columns have also been added as Syslog macros.
- Report operations with millisecond precision – Changes the timestamps of events being recorded in the TSV log file for better ordering of events if multiple events occur within the same second

Click __Next__.

![Where to log activity page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/wheretologgeneric.png)

__Step 7 –__ On the Where To Log The Activity page, select whether to send the activity to either a __Log File)__ or __Syslog Server__. Click __Next__.

![File Output page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/fileouputpage.png)

__Step 8 –__ If __Log File)__ is selected on the __Where To Log The Activity__ page, the __File Output__ page can be configured.

- Specify output file path – Specify the file path where log files are saved. Click the ellipses button (__...__) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files – Log files will be deleted after the period entered number of days entered. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days.
- This log file is for Access Analyzer – Enable this option to have Access Analyzer collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Access Analyzer when integration is available.

  - While Activity Monitor can have multiple configurations per host, Access Analyzer can only read one of them.

Click __Next__.

![Syslog Output page](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/syslogoutputpage.png)

__Step 9 –__ If Syslog Server is selected on the __Where To Log The Activity__ page, the Syslog Output page can be configured.

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:Port format in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used. The Event stream is the activity being monitored according to this configuration for the monitored host.
- Syslog Protocol – Identify the __Syslog protocol__ to be used for the Event stream. The drop-down menu includes:
  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the Message framing drop-down menu. See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.
- The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.

Click __Finish__.

![Activity Monitor with Windows Host added](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/activitymonitorwindows.png)

The added Windows file server host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Windows File Server

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Windows Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/windows.md)
- [Inactivity Alerts Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
