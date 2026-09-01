---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 40
---

# Troubleshooting

There are some general things to know when getting started troubleshooting Enterprise Auditor:

- Enterprise Auditor Install Directory Shortcut – `%sainstalldir%`

The shortcut opens the installation folder location where the Enterprise Auditor application is
installed. The default installation directory is:

`C:\Program Files (x86)\STEALTHbits\StealthAUDIT\`

If you customized the installation directory during installation, it will be:

`…\STEALTHbits\StealthAUDIT\`

The Enterprise Auditor install directory has several logs that you can access for troubleshooting
purposes. This includes:

- The Application log which contains logging of all activities within Enterprise Auditor
- The Upgrade log which logs activities related to the upgrade process
- The upgrade archive which is a zip file containing all of your Enterprise Auditor jobs before
  the upgrade process
- Sensitive Data logs that contain details from sensitive data scans performed against various
  repositories
- Artifacts from various data collection routines such as tier 2 database files created from File
  System or SharePoint scanning

See the [Logs](#logs) topic for additional information.

## Logs

Enterprise Auditor has a few areas where it stores logs. Ensure you set the log level to DEBUG in
Enterprise Auditor to gather all necessary information. After you create and send the logs to
Netwrix Support, reset the logging level to save disc space.

To set your logging level to debug go to **Settings** > **Application** – **Set the Application log
level to Debug** and restart the application.

#### Log File Locations

| Log Name                                               | Log Location                                                                                                                                                               |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SADebug (Enterprise Auditor Console)                   | `%sainstalldir%SADatabase\Logs\Application` <br />SADebug Logs will be saved in the format:<br /> SADebug-[timestamp]-[PID].tsv                                                        |
| Job Log (Enterprise Auditor Console)                   | Windows File Explorer Shortcut: <br />`%sainstalldir%Jobs\Group_Name\Job_Name\Output\nameofjob.tsv` <br />Console Shortcut:<br /> **Right click job** > **Explore folder** > `nameofjob.tsv` |
| ExchangePS logs (Enterprise Auditor Console)           | `%sainstalldir%PrivateAssemblies\GUID`                                                                                                                                     |
| PowerShell Logs (Enterprise Auditor Console)           | `%sainstalldir%Jobs\SA_CommonData\PowerShell`                                                                                                                              |
| PowerShell logs (Remote Host):                         | ` C:\Program Files(x86)\STEALTHbits\StealthAUDIT\Applet\Powershell\GUID`                                                                                                   |
| RPC logs (File System Action Module)                   | `FileSystemAM\RPCLogs`                                                                                                                                                     |
| SMARTLog logs (Remote Host)                            | `C:\Program Files(x86)\STEALTHbits\StealthAUDIT\Applet\SmartLog`                                                                                                           |
| SMARTLog logs (Enterprise Auditor Console)             | `%SAInstallDir%Jobs\SA_CommonData\SmartLog`                                                                                                                                |
| SMARTLog Persistence File (Enterprise Auditor Console) | `%SAInstallDir%Jobs\SA_CommonData\SmartLog\GUID\Host`                                                                                                                      |
| Metrics Logs (Remote Host)                             | `{Location of Message Tracking Logs}\ SA_ExchangeMetricsData\NameofQuery`                                                                                                  |
| Metrics Persistence File (Enterprise Auditor Console)  | `%SAInstallDir%Jobs\SA_CommonData\Metrics\GUID\Host`                                                                                                                       |
| Web Server Logs                                        | `%sainstalldir%SADatabase\Logs\Web`                                                                                                                                        |

## FSAA Log Naming Conventions

FSAA Applet Logs:

All FSAA applet logs have the following naming convention for permissions, activity, sensitive data,
and DFS scan types:

- `[SCAN TYPE]_[HOSTNAME]_[YEAR]_[MONTH]_[DAY]_[TIME]_{JOB_GUID}_[SessionID].log`

FSAA Trace Logs:

The following are two types of FSAA trace logs created while in local, applet, or proxy modes:

- Parent Trace Log – StealthAUDITRPC*[YYYYMMDD_hhmmss]*[Execution_Host].log
    - ProccessID appears in the job log
- Child Trace Log –
  StealthAUDITRPC*[session_id]*[ScanType]_[Execution_host]_[Target_host]_[YYMMDD_hhmmss].log
    - ProcessID appears in the Parent trace log

When running StealthAUDITRPC as a service, the parent trace log reads as:

- StealthAUDITRPC.log
