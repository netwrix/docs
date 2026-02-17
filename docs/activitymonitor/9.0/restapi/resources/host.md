---
title: "Host"
description: "Host"
sidebar_position: 30
---

# Host

| Attribute                                | Type     | Detailed Only | Description                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                                       | string   |               | ID of the host.                                                                                                                                                                                                                                                                      |
| url                                      | string   |               | Self URL                                                                                                                                                                                                                                                                             |
| host                                     | string   |               | Host name/Address as specified by a user                                                                                                                                                                                                                                             |
| type                                     | string   |               | `Windows`,`NetApp`,`Celerra`,`Isilon`,`Hitachi`,`SharePoint`,`Unity`,`Nasuni`, `Panzura`, `SharePointOnline`, `AzureAD`, `Linux`, `SqlServer`                                                                                                                                        |
| userName                                 | string   |               | An account to connect the host to                                                                                                                                                                                                                                                    |
| password                                 | string   | X             | Account password to connect the host to. Password is not exposed.                                                                                                                                                                                                                    |
| autoConfigureAuditing                    | bool     |               | Automatically enable the auditing on the device, if supported                                                                                                                                                                                                                        |
| monitorAuditingStatus                    | bool     |               | Constantly verify that the auditing is enabled, fix if needed                                                                                                                                                                                                                        |
| hostAliases                              | string[] |               | List of server names for NAS if they are different from the set name of the host.                                                                                                                                                                                                    |
| outputs                                  | output[] |               | Array of host's outputs                                                                                                                                                                                                                                                              |
| inactivityAlerts.isEnabled               | bool     |               | Whether Inactivity Alerting is enabled                                                                                                                                                                                                                                               |
| inactivityAlerts.useCustomSettings       | bool     |               | Whether to use custom host settings, or inherit from agent settings.                                                                                                                                                                                                                 |
| inactivityAlerts.inactivityInterval      | int      |               | The time interval to elapse after the Monitored Host stops receiving events.                                                                                                                                                                                                         |
| inactivityAlerts.replayInterval          | int      |               | How often to repeat an alert if the inactivity period is long lasting.                                                                                                                                                                                                               |
| inactivityAlerts.inactivityCheckInterval | int      |               | The time interval to check the Monitored Host for new events.                                                                                                                                                                                                                        |
| inactivityAlerts.syslog.server           | string   |               | The syslog server that is sent inactivity alerts.                                                                                                                                                                                                                                    |
| inactivityAlerts.syslog.protocol         | string   |               | The syslog protocol that is used: "UDP" , "TCP" , "TLS"                                                                                                                                                                                                                              |
| inactivityAlerts.syslog.separator        | string   |               | The syslog server separator / message framing that is used: "LF ASCII 10" , "CR ASCII 13" , "CRLF ASCII 13, 10" , "NUL ASCII 0" , "Octet Count RFC 5425". Only used for TCP and TLS protocols.                                                                                       |
| inactivityAlerts.syslog.template         | string   |               | The syslog message template text.                                                                                                                                                                                                                                                    |
| inactivityAlerts.email.server            | string   |               | The email or SMTP server or IP that is used to send host inactivity alerts.                                                                                                                                                                                                          |
| inactivityAlerts.email.ssl               | bool     |               | Email SMTP Server SSL / TLS is enabled or disabled.                                                                                                                                                                                                                                  |
| inactivityAlerts.email.userName          | string   |               | The email or SMTP server user name.                                                                                                                                                                                                                                                  |
| inactivityAlerts.email.password          | string   | X             | The email or SMTP server password. Password is not exposed.                                                                                                                                                                                                                          |
| inactivityAlerts.email.from              | string   |               | Email address of where the inactivity alert is from.                                                                                                                                                                                                                                 |
| inactivityAlerts.email.to                | string   |               | Email address of where the inactivity alert is sent to.                                                                                                                                                                                                                              |
| inactivityAlerts.email.subject           | string   |               | Email message subject of the inactivity alert.                                                                                                                                                                                                                                       |
| inactivityAlerts.email.body              | string   |               | Email message body of the inactivity alert.                                                                                                                                                                                                                                          |
| uidTranslate.isEnabled                   | bool     |               | NFS UID translation to Windows SID is enabled or disabled.                                                                                                                                                                                                                           |
| uidTranslate.domainController            | string   |               | The name of the forest or a Domain Controller. Used for Active Directory searches.                                                                                                                                                                                                   |
| uidTranslate.port                        | int      |               | The port used for Active Directory searches.                                                                                                                                                                                                                                         |
| uidTranslate.options                     | string   |               | The set options used for Active Directory searches.                                                                                                                                                                                                                                  |
| uidTranslate.container                   | string   |               | The Active Directory container set to be searched.                                                                                                                                                                                                                                   |
| uidTranslate.scope                       | string   |               | The scope of the Active Directory search.                                                                                                                                                                                                                                            |
| uidTranslate.filter                      | string   |               | The filter of the Active Directory search.                                                                                                                                                                                                                                           |
| hitachi.uncLogPath                       | string   |               | The path of the hitachi audit event log file.                                                                                                                                                                                                                                        |
| hitachi.logFileName                      | string   |               | The filename of the hitachi audit event log.                                                                                                                                                                                                                                         |
| hitachi.pollingInterval                  | TimeSpan |               | The interval of polling the log for new events.                                                                                                                                                                                                                                      |
| api.protocol                             | string   |               | The API Protocol being used: "AutoDetect", "HTTPS", "HTTPSIgnoreErrors", "HTTP".                                                                                                                                                                                                     |
| api.certificate                          | string   |               | The text output of the HTTPS certificate.                                                                                                                                                                                                                                            |
| api.hostNameVerification                 | bool     |               | If certificate hostname verification is enabled or disabled.                                                                                                                                                                                                                         |
| api.channel                              | string   |               | The communication method being used: "AutoDetect", "ONTAPI", "REST" (only used for netapp hosts)                                                                                                                                                                                     |
| netapp.managementLif                     | string   |               | The Management LIF of the netapp host. Disabled / Empty by default.                                                                                                                                                                                                                  |
| netapp.nfs3EventName                     | string   |               | The fpolicy Event Name for successful NFSv3 Events. Default: "StealthAUDITScreeningNfsV3"                                                                                                                                                                                            |
| netapp.nfs3FailedEventName               | string   |               | The fpolicy Event Name for failed NFSv3 Events. Default: "StealthAUDITScreeningFailedNfsV3"                                                                                                                                                                                          |
| netapp.nfs4FailedEventName               | string   |               | The fpolicy Event Name for failed NFSv4 Events. Deafult: "StealthAUDITScreeningFailedNfsV4"                                                                                                                                                                                          |
| netapp.nfs4EventName                     | string   |               | The fpolicy Event Name for successful NFSv4 Events. Default: "StealthAUDITScreeningNfsV4"                                                                                                                                                                                            |
| netapp.cifsEventName                     | string   |               | The fpolicy Event Name for successful CIFS Events. Default: "StealthAUDITScreeningCifs"                                                                                                                                                                                              |
| netapp.cifsFailedEventName               | string   |               | The fpolicy Event Name for failed CIFS Events. Default: "StealthAUDITScreeningCifs"                                                                                                                                                                                                  |
| netapp.policyName                        | string   |               | Deprecated, use `policyNames`. The fpolicy Policy Name used for the Activity Monitor. Default: "StealthAUDIT"|
| netapp.policyNames                       | string[] |               | The fpolicy Policy names used for the Activity Monitor. The first policy will be created if `autoConfigureAuditing` is enabled; all listed policies will be monitored if `monitorAuditingStatus` is enabled. Default: [ "StealthAUDIT" ]|
| netapp.externalEngineName                | string   |               | The fpolicy External Engine Name used for the Activity Monitor. Default: "StealthAUDITEngine"                                                                                                                                                                                        |
| netapp.persistentStore.volume            | string   |               | Name of the volume to use for the Persistent Store feature.|
| netapp.persistentStore.size              | long     |               | Initial size of the volume for the Persistent Store feature.|
| netapp.persistentStore.autoSize          | string   |               | `off` (default), `grow`, or `grow_shrink`.|
| sharePoint.pollingInterval               | TimeSpan |               | The polling interval set for sharepoint on premise hosts.                                                                                                                                                                                                                            |
| spo.azure.domain                         | string   |               | The Azure Active Directory domain being monitored for SharePoint Online.                                                                                                                                                                                                             |
| spo.azure.azureCloud                     | string   |               | The selected Azure Cloud being used: "Azure", "Azure for US Government GCC", "Azure for Government GCC High", "Azure for US Government DoD", "Azure Germany", "Azure China by 21Vianet"                                                                                              |
| spo.azure.tenantId                       | string   |               | The azure Tenant ID                                                                                                                                                                                                                                                                  |
| spo.azure.tenantName                     | string   |               | The azure Tenant Name                                                                                                                                                                                                                                                                |
| spo.azure.clientId                       | string   |               | The azure Tenant Client ID.                                                                                                                                                                                                                                                          |
| spo.azure.clientSecret                   | string   | X             | The azure Client Secret. Client Secret is not exposed.                                                                                                                                                                                                                               |
| spo.azure.region                         | string   |               | The azure Region.                                                                                                                                                                                                                                                                    |
| azureAd.azure.domain                     | string   |               | The Azure Active Directory domain being monitored.                                                                                                                                                                                                                                   |
| azureAd.azure.azureCloud                 | string   |               | The selected Azure Cloud being used: "Azure", "Azure for US Government GCC", "Azure for Government GCC High", "Azure for US Government DoD", "Azure Germany", "Azure China by 21Vianet"                                                                                              |
| azureAd.azure.tenantId                   | string   |               | The azure Tenant ID                                                                                                                                                                                                                                                                  |
| azureAd.azure.tenantName                 | string   |               | The azure Tenant Name                                                                                                                                                                                                                                                                |
| azureAd.azure.clientId                   | string   |               | The azure Tenant Client ID.                                                                                                                                                                                                                                                          |
| azureAd.azure.clientSecret               | string   | X             | The azure Client Secret. Client Secret is not exposed.                                                                                                                                                                                                                               |
| azureAd.azure.region                     | string   |               | The azure Region.                                                                                                                                                                                                                                                                    |
| exchangeOnline.azure.domain              | string   |               | The Azure Active Directory domain being monitored for Exchange Online.                                                                                                                                                                                                               |
| exchangeOnline.azure.azureCloud          | string   |               | The selected Azure Cloud being used: "Azure", "Azure for US Government GCC", "Azure for Government GCC High", "Azure for US Government DoD", "Azure Germany", "Azure China by 21Vianet"                                                                                              |
| exchangeOnline.azure.tenantId            | string   |               | The azure Tenant ID                                                                                                                                                                                                                                                                  |
| exchangeOnline.azure.tenantName          | string   |               | The azure Tenant Name                                                                                                                                                                                                                                                                |
| exchangeOnline.azure.clientId            | string   |               | The azure Tenant Client ID.                                                                                                                                                                                                                                                          |
| exchangeOnline.azure.clientSecret        | string   | X             | The azure Client Secret. Client Secret is not exposed.                                                                                                                                                                                                                               |
| exchangeOnline.azure.region              | string   |               | The azure Region.                                                                                                                                                                                                                                                                    |
| sql.pollingInterval                      | string   |               | The interval for polling SQL log for new events.                                                                                                                                                                                                                                     |
| sql.tweakOptions                         | string[] |               | Extended Events tweaking options for SQL hosts.                                                                                                                                                                                                                                      |
| outputsUrl                               | string   |               | URL to the host's outputs                                                                                                                                                                                                                                                            |
| agentsUrl                                | string   |               | URL to the agents that are monitoring the host                                                                                                                                                                                                                                       |
| status.updatedAt                         | DateTime |               | A timestamp when the status has changed to this value.                                                                                                                                                                                                                               |
| status.type                              | string   |               | OK, Error, or Warning - indicates a type of the status.                                                                                                                                                                                                                              |
| status.summary                           | string   |               | A user-friendly summary string of the status. May be empty for the OK type, non-empty otherwise.                                                                                                                                                                                     |
| status.details                           | string   |               | A user-friendly message that describes the status. May be empty.                                                                                                                                                                                                                     |
| status.helpUrl                           | string   |               | A URL to a documentation or KB article about the issue. May be empty.                                                                                                                                                                                                                |
| statusHistoryUrl                         | string   |               | URL to the status history of the host.                                                                                                                                                                                                                                               |
| stats.receivedAt                         | DateTime |               | Timestamp indicating the last time the Agent received something from the Host.                                                                                                                                                                                                       |
| stats.receivedCount                      | long     |               | Total number of events received by the agent for the Host.                                                                                                                                                                                                                           |
| stats.lastEventTime                      | DateTime |               | The most recent timestamp among all recent events received for the Host. File servers and other event sources can deliver events out of order. For example, each node of PowerScale cluster has its log and delivery cadence. This field shows the MAX(timestamp) for recent events. |

**Response Example**

```
{
    "autoConfigureAuditing": false,
    "monitorAuditingStatus": false,
    "hostAliases": [],
    "inactivityAlerts": {
        "isEnabled": false,
        "useCustomSettings": false,
        "inactivityInterval": 360,
        "replayInterval": 360,
        "inactivityCheckInterval": 1,
        "syslog": {
            "server": "",
            "protocol": "UDP",
            "separator": "Lf",
            "template": "<14>1 %TIME_STAMP_UTC% %AGENT% %PRODUCT% - NO_DATA - [origin ip=\"%INACTIVE_SERVER_IP%\"][noactivity@33334 host=\"%INACTIVE_SERVER%\" lastEvent=\"%LAST_EVENT_TIME_STAMP_UTC%\" activityType=\"%ACTIVITY_TYPE%\"] No activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours."
        },
        "email": {
            "server": "",
            "ssl": false,
            "userName": "",
            "from": "",
            "to": "",
            "subject": "[Activity Monitor] No activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours",
            "body": "There were no activity events from %INACTIVE_SERVER% for %INACTIVITY_PERIOD_HOURS% hours.\n  \nHost:                 %INACTIVE_SERVER%\n  Activity Type: %ACTIVITY_TYPE%\n  Period of inactivity: %INACTIVITY_PERIOD_HOURS% hours / %INACTIVITY_PERIOD_MINUTES% minutes\n  Last event received:  %LAST_EVENT_TIME_STAMP_UTC% (UTC)\n  Last event received:  %LAST_EVENT_TIME_STAMP% (agent time)\n  Agent:                %AGENT%\n  \n  \n  %PRODUCT% %PRODUCT_VERSION%\n"
        }
    },
    "id": "Windows-kdvm01",
    "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01",
    "host": "KDVM01",
    "type": "Windows",
    "userName": "",
    "outputs": [
        {
            "id": "b08e3c84905b4aed8718f42d2ecc523d",
            "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/b08e3c84905b4aed8718f42d2ecc523d",
            "hostId": "Windows-kdvm01",
            "hostUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01",
            "agentsIds": [
                "AGENT0"
            ],
            "logsUrl": "https://127.0.0.1:4494/api/v1/logs/b08e3c84905b4aed8718f42d2ecc523d",
            "isEnabled": true,
            "type": "LogFile",
            "logFile": {
                "format": "Tsv",
                "path": "C:\\ProgramData\\Netwrix\\Activity Monitor\\Agent\\ActivityLogs\\KDVM01_Log_.tsv",
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
                "updatedAt": "2024-09-16T17:32:24.9987211Z",
                "type": "OK"
            },
            "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/b08e3c84905b4aed8718f42d2ecc523d/statusHistory",
            "altHost": "",
            "stats": {
                "reportedAt": "2024-09-16T16:33:13.803Z",
                "reportedCount": 0,
                "lastEventTime": "2024-09-16T16:33:13.803Z",
                "filesCount": 2,
                "filesSize": 1440,
                "archiveFilesCount": 0,
                "archiveFilesSize": 0
            }
        },
        {
            "id": "f20aa0a8b7de4961b8ea9016b0d5d579",
            "url": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/f20aa0a8b7de4961b8ea9016b0d5d579",
            "hostId": "Windows-kdvm01",
            "hostUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01",
            "agentsIds": [
                "AGENT0"
            ],
            "isEnabled": true,
            "type": "Syslog",
            "syslog": {
                "reportUncPath": false,
                "addCToPath": true,
                "server": "192.168.2.1:514",
                "protocol": "UDP",
                "separator": "Lf",
                "template": "%SYSLOG_DATE% %HOST% LEEF:1.0|%COMPANY%|%PRODUCT%|%PRODUCT_VERSION%|%EVENT_SOURCE_TYPE%%CLASS_NAME%%EVENT_NAME%%SUCCESS%%BLOCKED_EVENT%|cat=%EVENT_NAME%\tdevTimeFormat=yyyy-MM-dd HH:mm:ss.SSS\tdevTime=%TIME_STAMP%\tSettingName=%SETTING_NAME%\tdomain=%EVENT_SOURCE_NAME%\tusrName=%PERPETRATOR%\tsrc=%ORIGINATING_CLIENT_IP%\tdst=%ORIGINATING_SERVER_IP%\tDistinguishedName=%FILE_PATH%\tAffectedObject=\tClassName=%CLASS_NAME%\tOrigServer=%ORIGINATING_SERVER%\tSuccess=%SUCCESS%\tBlocked=%BLOCKED_EVENT%\tAttrName=%ATTRIBUTE_NAME%\tAttrNewValue=%ATTRIBUTE_VALUE%\tAttrOldValue=%OLD_ATTRIBUTE_VALUE%\tOperation=%OPERATION%"
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
                "updatedAt": "2024-09-16T17:32:24.9987211Z",
                "type": "OK"
            },
            "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs/f20aa0a8b7de4961b8ea9016b0d5d579/statusHistory",
            "altHost": "",
            "stats": {
                "reportedCount": 0
            }
        }
    ],
    "outputsUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/outputs",
    "agentsUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/agents",
    "status": {
        "updatedAt": "2024-09-16T17:32:24.9987211Z",
        "type": "OK"
    },
    "statusHistoryUrl": "https://127.0.0.1:4494/api/v1/hosts/Windows-kdvm01/statusHistory",
    "stats": {
        "receivedCount": 0,
        "lastEventTime": "2024-09-16T16:33:13.803Z"
    }
}
```
