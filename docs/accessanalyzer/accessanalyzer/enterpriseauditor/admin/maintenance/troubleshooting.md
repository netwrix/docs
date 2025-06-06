# Troubleshooting

There are some general things to know when getting started troubleshooting Access Analyzer:

- Access Analyzer Install Directory Shortcut – ```%sainstalldir%```

The shortcut opens the installation folder location where the Access Analyzer application is installed. The default installation directory is:

C:\Program Files (x86)\STEALTHbits\StealthAUDIT\

If the installation directory was customized during installation, it will be:

…\STEALTHbits\StealthAUDIT\

The Access Analyzer install directory has several logs that can be accessed for troubleshooting purposes. This includes:

- The Application log which contains logging of all activities within Access Analyzer
- The Upgrade log which logs activities related to the upgrade process
- The upgrade archive which is a zip file containing all of your Access Analyzer jobs prior to the upgrade process
- Sensitive Data logs that contain details from sensitive data scans performed against various repositories
- Artifacts from various data collection routines such as tier 2 database files created from File System or SharePoint scanning

See the [Logs](#Logs) topic for additional information.

## Logs

Access Analyzer has a few areas where it stores logs. Make sure the log level is set to DEBUG in Access Analyzer to gather all necessary information. Once the logs have been created and sent to Netwrix Support, then reset the logging level to save disc space.

To set your logging level to debug go to __Settings__ > __Application__ – __Set the Application log level to Debug__ and restart the application.

#### Where Are the Logs Located?

| Log Name | Log Location |
| --- | --- |
| SADebug (Access Analyzer Console) | ```%sainstalldir%SADatabase\Logs\Application```  SADebug Logs will be saved in the format:  SADebug-[timestamp]-[PID].tsv |
| Job Log (Access Analyzer Console) | Windows File Explorer Shortcut:  ```%sainstalldir%Jobs\Group_Name\Job_Name\Output\nameofjob.tsv```  Console Shortcut:  __Right click job__ > __Explore folder__ > ```nameofjob.tsv``` |
| ExchangePS logs (Access Analyzer Console) | ```%sainstalldir%PrivateAssemblies\GUID``` |
| PowerShell Logs (Access Analyzer Console) | ```%sainstalldir%Jobs\SA_CommonData\PowerShell``` |
| PowerShell logs (Remote Host): | ``` C:\Program Files(x86)\STEALTHbits\StealthAUDIT\Applet\Powershell\GUID``` |
| RPC logs (File System Action Module) | ```FileSystemAM\RPCLogs``` |
| SMARTLog logs (Remote Host) | ```C:\Program Files(x86)\STEALTHbits\StealthAUDIT\Applet\SmartLog``` |
| SMARTLog logs (Access Analyzer Console) | ```%SAInstallDir%Jobs\SA_CommonData\SmartLog``` |
| SMARTLog Persistence File (Access Analyzer Console) | ```%SAInstallDir%Jobs\SA_CommonData\SmartLog\GUID\Host``` |
| Metrics Logs (Remote Host) | ```{Location of Message Tracking Logs}\ SA_ExchangeMetricsData\NameofQuery``` |
| Metrics Persistence File (Access Analyzer Console) | ```%SAInstallDir%Jobs\SA_CommonData\Metrics\GUID\Host``` |
| Web Server Logs | ```%sainstalldir%SADatabase\Logs\Web``` |

## FSAA Log Naming Conventions

FSAA Applet Logs:

All FSAA applet logs have the following naming convention for permissions, activity, sensitive data, and DFS scan types:

- [SCAN TYPE]\_[HOSTNAME]\_[YEAR]\_[MONTH]\_[DAY]\_[TIME]\_{JOB\_GUID}\_[SessionID].log

FSAA Trace Logs:

Below are two types of FSAA trace logs created while in local, applet, or proxy modes:

- Parent Trace Log – StealthAUDITRPC\_[YYYYMMDD\_hhmmss]\_[Execution\_Host].log
  - ProccessID is logged in the job log
- Child Trace Log – StealthAUDITRPC\_[session\_id]\_[ScanType]\_[Execution\_host]\_[Target\_host]\_[YYMMDD\_hhmmss].log
  - ProcessID is logged in the Parent trace log

When running StealthAUDITRPC as a service, the parent trace log reads as:

- StealthAUDITRPC.log
