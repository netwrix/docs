# Nutanix

Understanding File Activity Monitoring

The Activity Monitor can be configured to monitor the following:

- Ability to collect all or specific file activity for specific values or specific combinations of values

It provides the ability to feed activity data to SIEM products. The following dashboards have been specifically created for Activity Monitor event data:

- For IBM® QRadar®, see the [Netwrix File Activity Monitor App for QRadar](/docs/product_docs/activitymonitor/activitymonitor/siem/qradar/overview.md) for additional information.
- For Splunk®, see the [File Activity Monitor App for Splunk](/docs/product_docs/activitymonitor/activitymonitor/siem/splunk/overview.md) for additional information.

It also provides the ability to feed activity data to other Netwrix products:

- Netwrix Access Analyzer (formerly Enterprise Auditor)
- Netwrix Threat Prevention
- Netwrix Threat Manager

Prior to adding a Nutanix files host to the Activity Monitor, the prerequisites for the target environment must be met. See [Nutanix Files Activity Auditing Configuration](/docs/product_docs/activitymonitor/config/nutanix/activity.md) for more information.

_Remember,_ the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.

## Network Adapter for Nutanix File Server

Ensure that the correct network adapter is specified in the Network page for an agent before adding a Nutanix file server to be monitored.

![nutanixnetworkadapter](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixnetworkadapter.png)

The agent registers the IP address of the network adapter in the Nutanix auditing configuration for activity delivery. Nutanix Files server connects to the agent using the TCP port 4501. See the [Network Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/agents/properties/network.md) topic for additional information.

## Add Nutanix Host

Follow the steps to add a Nutanix files host to be monitored.

__Step 1 –__ In Activity Monitor, go to the Monitored Hosts tab and click __Add__. The Add New Host window opens.

![Choose Agent](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addagent01.png)

__Step 2 –__ On the Choose Agent page, select the Agent to monitor the file server from the drop-down list. Click __Next__.

![Add Host](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/addhost02.png)

__Step 3 –__ On the Add Host page, select the __Nutanix Files__ radio button and enter the file server name. Click __Next__.

![Nutanix Options](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_04.png)

__Step 4 –__ On the Nutanix Options page, enter the user name and password.

__NOTE:__ The credentials used on the Nutanix Options page are for the Nutanix user having REST API access.

- Protocol – Select from the following options in the drop-down list:
  - Auto Detect
  - HTTPS
  - HTTPS, ignore certificate errors
- Connect – Click __Connect__ to connect to the Nutanix device using the selected protocol and validate the connection.

Click __Next__.

![Configure Operations](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_05.png)

__Step 5 –__ On the Configure Operations page, select the File Operations and Directory Operations to be monitored.

Click __Next__.

![Configure Operations](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_06.png)

__Step 6 –__ On the Configure Basic Operations page, choose which settings to enable. The “Log files” are the activity logs created by the activity agent on the agent's server. Select one of the following options:

- Report account names: Adds an Account Name column in the generated TSV files.
- Add C:\ to the beginning of the reported file paths: Adds ‘C:\” to file paths to be displayed like a Windows file path:
  - Display example if checked: C:\Folder\file.txt
  - Display example if unchecked: /Folder/file.text
- Report operations with millisecond precision - Changes the timestamps of events being recorded in the TSV log file for better ordering of events if multiple events occur within the same second.
  - Access Analyzer 8.1+ is required to use this feature.

Click __Next__.

![Where to log the activity](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_07.png)

__Step 7 –__ On the Where To Log The Activity page, select whether to send the activity to either a Log File or Syslog Server. Click __Next__.

__NOTE:__ An option must be selected before moving to the next step.

![File Output](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_08.png)

__Step 8 –__ If Log File is selected on the Where To Log The Activity page, configure the File Output page.

- Specify output file path – Specify the file path where TSV log files are saved on the agent's server. Click the ellipses button (...) to open the Windows Explorer to navigate to a folder destination. Click __Test__ to test if the path works.
- Period to keep Log files –Log files will be deleted after the period entered as the number of days elapses. The default is 10 days. Use the dropdown to specify whether to keep the Log files for a set amount of Minutes, Hours, or Days. This setting applies to both the local files on the agent's server and to the archived files.
- This log file is for Access Analyzer – Enable this option to have Access Analyzer collect this monitored host configuration

  ___RECOMMENDED:___ Identify the configuration to be read by Access Analyzer when integration is available.

  __NOTE:__ While Activity Monitor can have multiple configurations for log file outputs per host, Access Analyzer can only read one of them.
- Add header to Log files – Adds headers to TSV files. This is used to feed data into Splunk.

  __NOTE:__ Access Analyzer does not support log files with the header.

Click __Next__.

![Syslog Output](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_09.png)

__Step 9 –__ If Syslog Server is selected on the Where To Log The Activity page, configure the Syslog Output page.

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:Port format in the textbox.
  - The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used.
- Syslog Protocol – Identify the __Syslog protocol__ to be used for the Event stream. The drop-down menu includes:
  - UDP
  - TCP
  - TLS

  The TCP and TLS protocols add the __Message framing__ drop-down menu. See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.
- The Test button sends a test message to the Syslog server to check the connection. A green check mark or red will determine whether the test message has been sent or failed to send. Messages vary by Syslog protocol:
  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails

  See the [Syslog Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/outputs/syslog.md) topic for additional information.

Click __Finish__.

![nutanixoptions_10](/static/img/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/add/nutanixoptions_10.png)

The added Nutanix host is displayed in the monitored hosts table. Once a host has been added for monitoring, configure the desired ouptuts. See the [Output for Monitored Hosts](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/output.md) topic for additional information.

## Host Properties for Nutanix

Configuration settings can be edited through the tabs in the host’s Properties window. The configurable host properties are:

- [Nutanix Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/nutanix.md)
- [Inactivity Alerts Tab](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/inactivityalerts.md)

See the [Host Properties Window](/docs/product_docs/activitymonitor/activitymonitor/admin/monitoredhosts/properties/overview.md) topic for additional information.
