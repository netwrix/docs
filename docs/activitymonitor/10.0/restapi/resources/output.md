---
title: "Output"
description: "Output"
sidebar_position: 40
---

# Output

| Attribute                  | Type             | Detailed Only | Description                                                                                              |
| -------------------------- | ---------------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| id                         | string           |               | ID of the output.                                                                                        |
| url                        | string           |               | Self URL                                                                                                 |
| hostId                     | string           |               | ID of the host that owns the output.                                                                     |
| hostUrl                    | string           |               | URL of the host that owns the output.                                                                    |
| agentsIds                  | string[]         |               | List of Agent IDs of the agents managing the output.                                                     |
| domainId                   | string           |               | AD only: ID of the owning domain                                                                         |
| domainUrl                  | string           |               | AD only: Link to the owning domain                                                                       |
| logsUrl                    | string           |               | Link to the file output log files (for the local agent only, that has the API Server running)            |
| isEnabled                  | bool             |               | Whether or not the output is enabled. If disabled, no activity is forwarded to it.                       |
| type                       | string           |               | `LogFile`,`Syslog`,`Amqp`                                                                                |
| logFile                    | FileOutput       |               | Log file settings                                                                                        |
| syslog                     | SyslogOutput     |               | Syslog settings                                                                                          |
| amqp                       | AmqpOutput       |               | AMQP/DEFEND settings                                                                                     |
| fileFilter                 | FileFilter       |               | Filtering settings for file activity                                                                     |
| sharePointFilter           | SharePointFilter |               | Filtering settings for SharePoint                                                                        |
| comment                    | string           |               | User's comment                                                                                           |
| managedBy                  | string           |               | Name of a product that manages this output, if not self managed by NAM Agent. Values: `Threat Prevention`|
| windows                    | WindowsOptions   |               | Windows filtering settings                                                                               |
| status.updatedAt           | DateTime         |               | A timestamp when the status has changed to this value.                                                   |
| status.type                | string           |               | OK, Error, or Warning - indicates a type of the status.                                                  |
| status.summary             | string           |               | A user-friendly summary string of the status. May be empty for the OK type, non-empty otherwise.         |
| status.details             | string           |               | A user-friendly message that describes the status. May be empty.                                         |
| statusHistoryUrl           | string           |               | URL of the output's status history.                                                                      |
| altHost                    | string           |               | A hostname that is reported in the activity events instead of the real hostname.                         |
| stats.reportedAt           | DateTime         |               | Timestamp indicating the last time when an event was reported to the Output.                             |
| stats.reportedCount        | long             |               | Total number of events reported to the Output.                                                           |
| stats.lastEventTime        | DateTime         |               | The most recent timestamp among all reported events to the Output.                                       |
| stats.filesCount           | int              |               | Number of log files on the agent's server.                                                               |
| stats.filesSize            | long             |               | Total size of log files on the agent's server.                                                           |
| stats.archiveFilesCount    | int              |               | Number of log files in the archival location.                                                            |
| stats.archiveFilesSize     | long             |               | Total size of log files in the archival location.                                                        |
| stats.archiveLastEventTime | DateTime         |               | The most recent timestamp in the recently archived log file.                                             |

## FileOutput

| Attribute          | Type   | Detailed Only | Description                                                                           |
| ------------------ | ------ | ------------- | ------------------------------------------------------------------------------------- |
| format             | string |               | `Tsv`, `Json`                                                                         |
| path               | string |               | Log file path on the agent's drive. Timestamp is added before the extension.          |
| archivePath        | string |               | Log file path in the archival location (UNC path)                                     |
| periodToRetainLog  | int    |               | Number of days to keep the log files alive both on the local drive and in the archive |
| reportUserName     | bool   |               | Resolve and report user name                                                          |
| reportUncPath      | bool   |               | Report UNC paths in addition to local/native paths                                    |
| addCToPath         | bool   |               | Prepend the path `C:\` and change the forward slashes to backslashes.                 |
| reportMilliseconds | bool   |               | Report events' time with milliseconds                                                 |
| stealthAudit       | bool   |               | The file was marked for consumption by Access Analyzer                                |

## SyslogOutput

| Attribute     | Type   | Detailed Only | Description                                                           |
| ------------- | ------ | ------------- | --------------------------------------------------------------------- |
| server        | string |               | Hostname/address of the syslog server in the format HOST:PORT.        |
| protocol      | string |               | `UDP`, `TCP`, `TLS`                                                   |
| separator     | string |               | `Lf`,Cr, `CrLf`, `Nul`, `Rfc5425`                                     |
| reportUncPath | bool   |               | Report UNC paths in addition to local/native paths                    |
| addCToPath    | bool   |               | Prepend the path `C:\` and change the forward slashes to backslashes. |
| template      | string |               | Text of the syslog template that is currently set to be used.         |

## AmqpOutput

| Attribute | Type   | Detailed Only | Description                                                                                                                         |
| --------- | ------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| server    | string |               | Hostname/address of the AMQP server or the Threat Manager server and the port in the SERVER:PORT format                             |
| userName  | string |               | User name for the AMQP connection, if needed. ForThreat Managerintegration, use an empty string.                                    |
| password  | string |               | Password / App Token for the AMQP connection. Password / App Token is not exposed.                                                  |
| queue     | string |               | Message queue name to post events to. ForThreat Manager integration, use an empty string.                                           |
| exchange  | string |               | Exchange name to post events to. For Threat Manager integration, use "StealthINTERCEPT" for domain outputs or "AM" for host outputs. |
| vhost     | string |               | Virtual Host name, if needed. ForThreat Managerintegration, use an empty string.                                                    |
| caCertificate| string |            | Certificate Autority certificate to validate the TLS connection.                                                  |
| protocol  | string |               | `TCP` (default) or `TLS`.                                                                                         |
| hostNameVerification | bool |      | Whether or not verify the hostname during the TLS handshake.                                                      |

## FileFilter

| Attribute                            | Type     | Detailed Only | Description                                                                     |
| ------------------------------------ | -------- | ------------- | ------------------------------------------------------------------------------- |
| allowed                              | bool     |               |                                                                                 |
| denied                               | bool     |               |                                                                                 |
| cifs                                 | bool     |               |                                                                                 |
| nfs                                  | bool     |               |                                                                                 |
| read                                 | bool     |               |                                                                                 |
| dirRead                              | bool     |               |                                                                                 |
| create                               | bool     |               |                                                                                 |
| dirCreate                            | bool     |               |                                                                                 |
| rename                               | bool     |               |                                                                                 |
| dirRename                            | bool     |               |                                                                                 |
| delete                               | bool     |               |                                                                                 |
| dirDelete                            | bool     |               |                                                                                 |
| update                               | bool     |               |                                                                                 |
| permission                           | bool     |               |                                                                                 |
| dirPermission                        | bool     |               |                                                                                 |
| attribute                            | bool     |               |                                                                                 |
| dirAttribute                         | bool     |               |                                                                                 |
| readOptimize                         | bool     |               | Suppress subsequent read operations in the same folder, by the same user.       |
| shareAdd                             | bool     |               |                                                                                 |
| shareDelete                          | bool     |               |                                                                                 |
| shareUpdate                          | bool     |               |                                                                                 |
| sharePermission                      | bool     |               |                                                                                 |
| streamRead                           | bool     |               | Reads of Alternate Data Streams.                                                |
| streamUpdate                         | bool     |               | Updates of Alternate Data Streams.                                              |
| streamDelete                         | bool     |               | Deletes of Alternate Data Streams.                                              |
| streamAdd                            | bool     |               | Adds of Alternate Data Streams.                                                 |
| includePaths                         | string[] |               | Depreciated. This has been replaced by 'pathFilters'.                           |
| excludePaths                         | string[] |               | Depreciated. This has been replaced by 'pathFilters'.                           |
| excludeExtensions                    | string[] |               |                                                                                 |
| excludeProcesses                     | string[] |               |                                                                                 |
| excludeReadProccesses                | string[] |               |                                                                                 |
| excludeAccounts                      | string[] |               |                                                                                 |
| filterGroups                         | bool     |               | Process group membership when filtering.                                        |
| officeFiltering                      | bool     |               | Suppress Microsoft Office and other applications operations on temporary files. |
| pathFilters                          | string[] |               | List of paths to include and exclude.                                           |
| discardPreviewSubfolderReads         | bool     |               |                                                                                 |
| discardPreviewSubfolderReadsInterval | int      |               |                                                                                 |
| discardPreviewFileReads              | bool     |               |                                                                                 |
| discardPreviewFileReadsInterval      | int      |               |                                                                                 |
| discardPreviewFileReadsFilenames     | string[] |               |                                                                                 |
| duplicateReadsInterval               | int      |               |                                                                                 |

## SharePointFilter

| Attribute       | Type     | Detailed Only | Description |
| --------------- | -------- | ------------- | ----------- |
| operations      | string[] |               |             |
| includeUrls     | string[] |               |             |
| excludeUrls     | string[] |               |             |
| excludeAccounts | string[] |               |             |

## WindowsOptions

| Attribute           | Type | Detailed Only | Description |
| ------------------- | ---- | ------------- | ----------- |
| vssCreation         | bool |               |             |
| vssDeletion         | bool |               |             |
| vssActivity         | bool |               |             |
| discardReorderedAcl | bool |               |             |
| discardInheritedAcl | bool |               |             |

**Response Example**

```
{
    "id": "fcf4ad5d951548f0af10a8909c9cc284",
    "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm02/outputs/fcf4ad5d951548f0af10a8909c9cc284",
    "hostId": "Windows-kdvm02",
    "hostUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm02",
    "agentsIds": [
        "AGENT2"
    ],
    "isEnabled": false,
    "type": "LogFile",
    "logFile": {
        "format": "Tsv",
        "path": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\KDVM02_Log_.tsv",
        "archivePath": "",
        "periodToRetainLog": 10,
        "reportUserName": false,
        "reportUncPath": false,
        "addCToPath": true,
        "reportMilliseconds": true,
        "stealthAudit": true
    },
    "fileFilter": {
        "allowed": true,
        "denied": true,
        "cifs": true,
        "nfs": true,
        "read": true,
        "dirRead": false,
        "create": true,
        "dirCreate": true,
        "rename": true,
        "dirRename": true,
        "delete": true,
        "dirDelete": true,
        "update": true,
        "permission": true,
        "dirPermission": true,
        "attribute": true,
        "dirAttribute": true,
        "readOptimize": false,
        "shareAdd": false,
        "shareDelete": false,
        "shareUpdate": false,
        "sharePermission": false,
        "streamRead": true,
        "streamUpdate": true,
        "streamDelete": true,
        "streamAdd": true,
        "includePaths": [],
        "excludePaths": [],
        "excludeExtensions": [
            ".TMP",
            ".RCV",
            ".DS_STORE",
            ".POLICY",
            ".MANIFEST",
            ".LACCDB",
            ".LDB"
        ],
        "excludeProcesses": [
            "SBTService.exe",
            "FPolicyServerSvc.exe",
            "CelerraServerSvc.exe",
            "FSACLoggingSvc.exe",
            "HitachiService.exe",
            "SIWindowsAgent.exe",
            "SIGPOAgent.exe",
            "LogProcessorSrv.exe",
            "SearchIndexer.exe",
            "WindowsSearch.exe",
            "StealthAUDIT",
            "MonitorService35.exe",
            "MonitorService40.exe",
            "MonitorService45.exe",
            "Configuration.exe",
            "ConfigurationAgent.exe",
            "ConfigurationAgent.Grpc.Host.exe"
        ],
        "excludeReadProcesses": [],
        "excludeAccounts": [
            "S-1-5-17",
            "S-1-5-18",
            "S-1-5-19",
            "S-1-5-20"
        ],
        "filterGroups": false,
        "officeFiltering": false,
        "pathFilters": [
            "-**\\~$*.DOC",
            "-**\\~$*.DOCX",
            "-**\\~$*.ODT",
            "-**\\~$*.PPT",
            "-**\\~$*.PPTX",
            "-**\\~$*.PUB",
            "-**\\~$*.RTF",
            "-**\\~$*.TXT",
            "-**\\~$*.WPS",
            "-**\\~$*.XLSX",
            "-**\\~$*.XSN",
            "-**\\~$*.XML",
            "-**\\~$*.DOCM",
            "-**\\~$*.DOTX",
            "-**\\~$*.DOTM",
            "-**\\~$*.DOT",
            "-**\\~$*.MHT",
            "-**\\~$*.HTM",
            "-**\\~$*.XLSM",
            "-**\\~$*.XLSB",
            "-**\\~$*.XLTX",
            "-**\\~$*.XLTM",
            "-**\\~$*.XLAM",
            "-**\\~$*.ODS",
            "-**\\~$*.PPTM",
            "-**\\~$*.POTX",
            "-**\\~$*.POTM",
            "-**\\~$*.POT",
            "-**\\~$*.THMX",
            "-**\\~$*.PPSX",
            "-**\\~$*.PPSM",
            "-**\\~$*.PPS",
            "-**\\~$*.ODP",
            "-**\\~$*.PDF",
            "-**\\~$*.XPS",
            "-**\\.TEMPORARYITEMS\\**",
            "-**\\~SNAPSHOT\\**",
            "-**\\WATSONRC.DAT",
            "-**\\DESKTOP.INI",
            "-C:\\Windows\\**",
            "-C:\\Program Files\\**",
            "-C:\\Program Files (x86)\\**",
            "-C:\\ProgramData\\**",
            "-C:\\Documents and Settings\\**",
            "-C:\\Users\\**"
        ],
        "discardPreviewSubfolderReads": true,
        "discardPreviewSubfolderReadsInterval": 10,
        "discardPreviewFileReads": false,
        "discardPreviewFileReadsInterval": 60,
        "discardPreviewFileReadsFilenames": [
            "*.exe",
            "*.url",
            "*.lnk"
        ],
        "duplicateReadsInterval": 60
    },
    "comment": "",
    "managedBy": "",
    "windows": {
        "vssCreation": true,
        "vssDeletion": true,
        "vssActivity": true,
        "discardReorderedAcl": true,
        "discardInheritedAcl": false
    },
    "status": {
        "updatedAt": "2024-10-01T18:46:00.6768171Z",
        "type": "OK",
        "summary": "OK",
        "details": "OK"
    },
    "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm02/outputs/fcf4ad5d951548f0af10a8909c9cc284/statusHistory",
    "altHost": "",
    "stats": {
        "reportedAt": "2024-09-30T18:49:12.282Z",
        "reportedCount": 12,
        "lastEventTime": "2024-09-30T18:49:12.282Z",
        "filesCount": 1,
        "filesSize": 2204,
        "archiveFilesCount": 0,
        "archiveFilesSize": 0
    }
}
```

## File

| Attribute    | Type     | Detailed Only | Description                                                                                     |
| ------------ | -------- | ------------- | ----------------------------------------------------------------------------------------------- |
| id           | string   |               | Activity Log File ID.                                                                           |
| size         | int      |               | File size in bytes                                                                              |
| localPath    | string   |               | File path on the local disk                                                                     |
| isZip        | bool     |               | Is it a Zip archive                                                                             |
| isArchived   | bool     |               | Determines whether the file is on a local drive of the agent or moved to the archival location. |
| type         | string   |               | `Tsv`, `Json`                                                                                   |
| updatedAt    | DateTime |               | Last time the file was updated                                                                  |
| activityFrom | DateTime |               | Activity events in the file are not younger than the date.                                      |
| activityTo   | DateTime |               | Activity events in the file are not older than the date.                                        |
| outputId     | string   |               | ID of the output that produced the file.                                                        |
| contentUrl   | string   |               | Link to the file content. MIME type `application/x-msdownload`                                  |

**Response Example**

```
[
    {
        "id": "localhost_Log_20190410_000000.tsv",
        "size": 81658576,
        "localPath": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\localhost_Log_20190410_000000.tsv",
        "isZip": false,
        "isArchived": false,
        "type": "Tsv",
        "updatedAt": "2019-04-10T17:45:07.2211753Z",
        "activityFrom": "2019-04-05T18:16:57",
        "activityTo": "2019-04-10T17:45:07",
        "outputId": "9c90791891774715bdb3415823790d7c",
        "contentUrl": "https://localhost:4494/api/v1/logs/get/localhost_Log_20190410_000000.tsv"
    },
    {
        "id": "localhost_Log_20190401_000000.tsv.zip",
        "size": 11,
        "localPath": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\localhost_Log_20190401_000000.tsv.zip",
        "isZip": true,
        "isArchived": false,
        "type": "Tsv",
        "updatedAt": "2019-04-10T02:03:48.8899252Z",
        "activityFrom": "0001-01-01T00:00:00",
        "activityTo": "2019-04-10T02:03:48.8879242Z",
        "outputId": "9c90791891774715bdb3415823790d7c",
        "contentUrl": "https://localhost:4494/api/v1/logs/get/localhost_Log_20190401_000000.tsv.zip"
    },
  {
    "id": "localhost_Log_20190405.tsv.zip",
    "size": 295102,
    "localPath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_9c907918-9177-4715-bdb3-415823790d7c\\localhost_Log_20190405.tsv.zip",
    "isZip": true,
    "isArchived": true,
    "type": "Tsv",
    "updatedAt": "2019-04-05T20:59:55.1462518Z",
    "activityFrom": "2019-04-05T18:16:57",
    "activityTo": "2019-04-05T20:59:55",
    "outputId": "9c90791891774715bdb3415823790d7c",
    "contentUrl": "https://localhost:4494/api/v1/logs/archive/get/WRKST0100/WRKST0100_9c907918-9177-4715-bdb3-415823790d7c/localhost_Log_20190405.tsv.zip"
  }
]

```

## Policy

| Attribute   | Type     | Detailed Only | Read-Only | Description                                                                           |
| ----------- | -------- | ------------- | --------- | ------------------------------------------------------------------------------------- |
| id          | string   |               | X         | Policy ID.                                                                            |
| url         | string   |               | X         | Self URL.                                                                             |
| name        | string   |               |           | Policy name.                                                                          |
| description | string   |               |           | Policy description.                                                                   |
| path        | string   |               |           | Policy location.                                                                      |
| guid        | string   |               | X         | Policy GUID.                                                                          |
| isEnabled   | bool     |               |           | Whether the policy is enabled.                                                        |
| updatedAt   | DateTime |               | X         | When the policy was last modified.                                                    |
| xml         | string   |               |           | Policy body in XML format. It's the same format used by Threat Prevention Powershell. |

**Response Example**

```
[
    {
        "id": "1000",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1000",
        "name": "SAM AD Changes",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "56abcb01-0248-4f9c-8e61-aaeb8a30b5ff",
        "isEnabled": true,
        "updatedAt": "2024-08-22T19:05:31.22",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1000\" enabled=\"true\" enabledHint=\"ManualSwitch\" name=\"SAM AD Changes\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.724\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.220\" owner=\"KDDC01$\" guid=\"56abcb01-0248-4f9c-8e61-aaeb8a30b5ff\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"true\" name=\"Active Directory Changes\" description=\"\" erTypeIds=\"1400\">\r\n    <filter type=\"successFailure\" success=\"true\" failure=\"true\" />\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"windowsObject\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsAdEvents\">\r\n      <eventTypeFilter>\r\n        <item>Object Added</item>\r\n        <item>Object Modified</item>\r\n        <item>Object Deleted</item>\r\n        <item>Object Moved/Renamed</item>\r\n      </eventTypeFilter>\r\n    </filter>\r\n    <filter type=\"windowsAttr\">\r\n      <includeList />\r\n      <excludeList />\r\n      <includeAttributesList />\r\n      <excludeAttributesList />\r\n    </filter>\r\n    <filter type=\"windowsClass\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsContext\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"ipAddressFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1001",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1001",
        "name": "SAM Authentication",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "b3d5397b-ef67-4d72-860c-4efa311ad37f",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1001\" enabled=\"false\" name=\"SAM Authentication\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.730\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"b3d5397b-ef67-4d72-860c-4efa311ad37f\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"false\" name=\"Authentication Monitor\" description=\"\" erTypeIds=\"1409\">\r\n    <filter type=\"successFailure\" success=\"true\" failure=\"true\" />\r\n    <filter type=\"authProtocol\" protocol=\"0\" n2password=\"false\" remote_login=\"false\" local_login=\"false\" password_expired=\"false\" />\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs>\r\n        <item rid=\"512\" />\r\n        <item rid=\"518\" />\r\n        <item rid=\"519\" />\r\n      </includeRIDs>\r\n    </filter>\r\n    <filter type=\"hostTo\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"ipAddressTo\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"ipAddressFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1002",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1002",
        "name": "SAM Ldap Monitor",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "b119a08c-5304-45b1-b981-22023a113690",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1002\" enabled=\"false\" name=\"SAM Ldap Monitor\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.732\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"b119a08c-5304-45b1-b981-22023a113690\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"LDAP\" enabled=\"false\" name=\"LDAP Monitoring\" description=\"\" erTypeIds=\"1701\">\r\n    <filter type=\"ldapmQuerry\">\r\n      <includeList />\r\n    </filter>\r\n    <filter type=\"successFailure\" success=\"true\" failure=\"true\" />\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"ldapmResult\">\r\n      <includeList />\r\n    </filter>\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"LdapRule\">\r\n      <overrideRule>false</overrideRule>\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1003",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1003",
        "name": "SAM LSASS Guardian",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "409b77be-f0c2-4ba9-9fb9-d17d2c19084a",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1003\" enabled=\"false\" name=\"SAM LSASS Guardian\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.733\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"409b77be-f0c2-4ba9-9fb9-d17d2c19084a\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"false\" name=\"LSASS Guardian - Monitor\" description=\"\" erTypeIds=\"1802\">\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"windowsProcess\">\r\n      <includeList />\r\n      <excludeList>\r\n        <item>MsMpEng.exe</item>\r\n        <item>svchost.exe</item>\r\n        <item>VsTskMgr.exe</item>\r\n        <item>WmiPrvSE.exe</item>\r\n        <item>scan64.exe</item>\r\n        <item>mcshield.exe</item>\r\n      </excludeList>\r\n    </filter>\r\n    <filter type=\"windowsOpenProcessFlags\">3</filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    },
    {
        "id": "1004",
        "url": "https://127.0.0.1:4494/api/v1/domains/KDUD1/policies/1004",
        "name": "SAM Replication",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "e6feb176-8a14-4a61-914b-6c864babd55a",
        "isEnabled": false,
        "updatedAt": "2024-08-22T19:05:31.251",
        "xml": "<?xml version=\"1.0\" encoding=\"utf-16\"?>\r\n<AdConfigPolicy xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" id=\"1004\" enabled=\"false\" name=\"SAM Replication\" path=\"Policies\\Auditing\" builtIn=\"false\" odbcEnabled=\"true\" syslogEnabled=\"false\" emailAlertingEnabled=\"false\" emailLimiterEnabled=\"true\" emailLimiterMode=\"1\" emailLimiterInterval=\"15\" createdBy=\"SAM\" createdOn=\"2024-08-21T19:14:26.734\" modifiedBy=\"KDDC01$\" modifiedOn=\"2024-08-22T19:05:31.251\" owner=\"KDDC01$\" guid=\"e6feb176-8a14-4a61-914b-6c864babd55a\" description=\"\" templateCategory=\"\" policyType=\"kNvMonitor\" ldapPolicyRunDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyEndDateUtc=\"0001-01-01T00:00:00.000\" ldapPolicyStarted=\"false\" eventSinks=\"{'SAM':{'url':'amqp://localhost:4499','login':'G59/xvKl2Guna0By1UCduG3otKlbUBJD','password':'9TCPAXDkl6IIyx+SvmBNlw=='}}\" eventConsumers=\"\">\r\n  <linkedReports />\r\n  <schedule enabled=\"false\" origin=\"Server\" />\r\n  <registration eventSource=\"AD\" enabled=\"false\" name=\"AD Replication Monitoring\" description=\"\" erTypeIds=\"1801\">\r\n    <filter type=\"hostFrom\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n    <filter type=\"windowsPerpetrator\">\r\n      <enableForgedPAC>false</enableForgedPAC>\r\n      <includeList />\r\n      <excludeList />\r\n      <includeRIDs />\r\n    </filter>\r\n    <filter type=\"windowsDomain\">\r\n      <includeList />\r\n      <excludeList />\r\n    </filter>\r\n  </registration>\r\n</AdConfigPolicy>"
    }
]
```
