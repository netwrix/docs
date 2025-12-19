---
title: "Resources"
description: "Resources"
sidebar_position: 20
---

# Resources

This page provides an overview of various REST APIs for Activity Monitor, outlining their attributes
and functionality. The information includes examples to help you understand and utilize REST APIs
effectively.

## Agent

Agent represents an Activity Monitor Agent. The API allows you to view existing agents and their
statuses; register, modify or remove agents. The following table displays the attributes for Agent
API:

| Attribute                     | Type          | Detailed Only | Description                                                                                                                                                                                      |
| ----------------------------- | ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                            | string        |               |                                                                                                                                                                                                  |
| url                           | string        |               | Self URL                                                                                                                                                                                         |
| host                          | string        |               | Host name/address as specified by user                                                                                                                                                           |
| netbiosName                   | string        |               | NETBIOS name                                                                                                                                                                                     |
| userName                      | string        |               | Account for connecting to the agent. Password is not exposed.                                                                                                                                    |
| domain                        | string        |               | Domain name of the agent                                                                                                                                                                         |
| machineSid                    | string        |               |                                                                                                                                                                                                  |
| osVersion                     | string        |               | OS "version" or "version servicepack"                                                                                                                                                            |
| isDC                          | bool          |               | Is domain controller                                                                                                                                                                             |
| errorMessage                  | string        |               | Description of the failure condition                                                                                                                                                             |
| installState                  | string        |               | State of Activity Monitor agent: `NotInstalled`, `Unknown`, `Installed`, `Installing`, `Upgrading`, `Uninstalling`, `Outdated`, `Failed`, `ManagedBySI` (last one for Threat Prevention agents)  |
| version                       | string        |               | Activity Monitor agent version                                                                                                                                                                   |
| siInstallState                | string        |               | State of Threat Prevention agent: `NotInstalled`, `Unknown`, `Installed`, `Installing`, `Upgrading`, `Uninstalling`, `Outdated`, `Failed`, `ManagedBySI` (last one for Threat Prevention agents) |
| siVersion                     | string        |               | Threat Prevention agent version                                                                                                                                                                  |
| managedBySI                   | bool          |               | True if the Threat Prevention Agent configuration is managed by Threat Prevention. Otherwise Activity Monitor managed the Threat Prevention Agent                                                |
| configVersion                 | string        |               | A hash of the config file                                                                                                                                                                        |
| monitoredHostsUrl             | string        |               | URL to the list of agent's hosts                                                                                                                                                                 |
| monitoredDomainUrl            | string        |               | URL to the domain monitored by the agent, if any                                                                                                                                                 |
| warnings                      | string[]      | yes           | Array of errors/warnings if any                                                                                                                                                                  |
| safeModeStatus                | string        | yes           | `pending`, `approved`. If `pending` the Threat Prevention agent in the safe mode.                                                                                                                |
| safeModeMessage               | string        | yes           | If in the safe mode, contains a reason why the agent switched to the mode.                                                                                                                       |
| archiveIsEnabled              | bool?         | yes           | Whether the archiving feature is enabled                                                                                                                                                         |
| archivePath                   | string        | yes           | UNC path of the archival location                                                                                                                                                                |
| archiveUserName               | string        | yes           | An account to access the archival location. Password is not exposed.                                                                                                                             |
| archiveMaxLocalSize           | string        | yes           | Maximum space the agent is allowed to use on the local drives.                                                                                                                                   |
| fpolicyPort                   | int?          | yes           | NetApp c-mode fpolicy port                                                                                                                                                                       |
| fpolicyAuth                   | string        | yes           | `NoAuth`, `Server`, `Mutual`                                                                                                                                                                     |
| fpolicyIpWhitelist            | string[]      | yes           | IP whitelist                                                                                                                                                                                     |
| minLocalFreeSpace             | string        | yes           | Free disk threshold after which the agent stops writing data to the log files                                                                                                                    |
| ceeVcapsIsEnabled             | bool?         | yes           |                                                                                                                                                                                                  |
| ceeVcapsInterval              | int?          | yes           |                                                                                                                                                                                                  |
| ceeVcapsEvents                | int?          | yes           |                                                                                                                                                                                                  |
| alertsIsEnabled               | bool?         | yes           | Whether Inactivity Alerting is enabled                                                                                                                                                           |
| alertsInactivityInterval      | int?          | yes           |                                                                                                                                                                                                  |
| alertsReplayInterval          | int?          | yes           |                                                                                                                                                                                                  |
| alertsInactivityCheckInterval | int?          | yes           |                                                                                                                                                                                                  |
| alertsSyslog                  | SyslogOptions | yes           |                                                                                                                                                                                                  |
| alertsEmail                   | EmailOptions  | yes           |                                                                                                                                                                                                  |
| hardeningIsEnabled            | bool?         | yes           |                                                                                                                                                                                                  |
| safeModeIsEnabled             | bool?         | yes           |                                                                                                                                                                                                  |
| dnsResolveIsEnabled           | bool?         | yes           |                                                                                                                                                                                                  |
| siIpWhitelist                 | string[]      | yes           |                                                                                                                                                                                                  |
| apiServerIsEnabled            | bool?         |               | API Server is enabled or disabled                                                                                                                                                                |
| apiServerPort                 | int?          |               | API Server TCP/IP port                                                                                                                                                                           |
| apiServerIpWhitelist          | string[]      | yes           | API Server IP whitelist                                                                                                                                                                          |
| apiServerMgmtConsole          | string        | yes           | NETBIOS name of the Console machine that manages the agent list of the API Server                                                                                                                |

Example:

```json
{
    "id": "AGENT0",
    "url": "https://localhost:4494/api/v1/agents/AGENT0",
    "host": "192.168.1.124",
    "netbiosName": "VAGRANT-2016",
    "userName": "test01\\administrator",
    "domain": "TEST01",
    "machineSid": "S-1-5-21-1367674131-2422966069-737923105-1001",
    "osVersion": "6.2.9200.0",
    "isDC": false,
    "errorMessage": "",
    "installState": "Installed",
    "version": "4.1.119",
    "siInstallState": "Installed",
    "siVersion": "6.0.0.388",
    "managedBySI": false,
    "configVersion": "UFZXT9Fijt5mZ6GNOaoclaVMRy4=",
    "monitoredHostsUrl": "https://localhost:4494/api/v1/agents/AGENT0/hosts",
    "monitoredDomainUrl": "https://localhost:4494/api/v1/agents/AGENT0/domain",
    "apiServerIsEnabled": false,
    "apiServerPort": 4494,
    "warnings": [],
    "safeModeStatus": "",
    "safeModeMessage": "",
    "archiveIsEnabled": false,
    "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS",
    "archiveUserName": "",
    "archiveMaxLocalSize": "5GB",
    "fpolicyPort": 9999,
    "fpolicyAuth": "NoAuth",
    "fpolicyIpWhitelist": [],
    "minLocalFreeSpace": "64MB",
    "ceeVcapsIsEnabled": false,
    "ceeVcapsInterval": 60,
    "ceeVcapsEvents": 100,
    "alertsIsEnabled": false,
    "alertsInactivityInterval": 360,
    "alertsReplayInterval": 360,
    "alertsInactivityCheckInterval": 10,
    "alertsSyslog": {
        "server": "",
        "protocol": "UDP",
        "separator": null
    },
    "alertsEmail": {
        "server": "",
        "ssl": false,
        "userName": "",
        "from": "",
        "to": "",
        "subject": ""
    },
    "hardeningIsEnabled": false,
    "safeModeIsEnabled": true,
    "dnsResolveIsEnabled": false,
    "siIpWhitelist": [],
    "apiServerIpWhitelist": [],
    "apiServerMgmtConsole": "WRKST0100"
}
```

## Domain

Domain is a Monitored Domain in the Console. The API provides summary information about each
monitored domain. The following table displays the attributes for Domain API:

| Attribute      | Type     | Detailed Only | Description                                                                                                                                                                                                           |
| -------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string   |               |                                                                                                                                                                                                                       |
| url            | string   |               | Self URL                                                                                                                                                                                                              |
| name           | string   |               | Domain NETBIOS name                                                                                                                                                                                                   |
| managedBySI    | bool     |               | Whether the monitoring configuration is managed by Threat Prevention or Activity Monitor                                                                                                                              |
| outputs        | Output[] |               | Domain outputs. Domain outputs are common for all the domain controllers. However, there are several agent-specific settings, like `archivePath`. Do get agent-specific outputs use `api/v1/agents/«agentId»/domain`. |
| outputsUrl     | string   |               | Link to domain outputs                                                                                                                                                                                                |
| agentsUrl      | string   |               | Link to domain controllers                                                                                                                                                                                            |
| masterAgentId  | string   |               | ID of the Master agent - the one whose configuration is considered the master one                                                                                                                                     |
| masterAgentUrl | string   |               | Link to the Master agent                                                                                                                                                                                              |

Example:

```json
{
    "id": "TEST01",
    "url": "https://localhost:4494/api/v1/domains/TEST01",
    "name": "TEST01",
    "managedBySI": false,
    "outputs": [
        {
            "id": "657eaa95f0804608acef581e728868e2",
            "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/657eaa95f0804608acef581e728868e2",
            "domainId": "TEST01",
            "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
            "agentsIds": null,
            "isEnabled": true,
            "type": "LogFile",
            "logFile": {
                "format": "Json",
                "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\192.168.1.124_Log_.json",
                "archivePath": "",
                "daysToRetain": 10,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": false,
                "stealthAudit": true
            },
            "syslog": null,
            "amqp": null,
            "fileFilter": null,
            "sharePointFilter": null,
            "comment": "",
            "managedBy": "",
            "windows": null
        },
        {
            "id": "fe9eb58ef02e40b8ab4a3e02e51a9d95",
            "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/fe9eb58ef02e40b8ab4a3e02e51a9d95",
            "domainId": "TEST01",
            "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
            "agentsIds": null,
            "isEnabled": true,
            "type": "Amqp",
            "logFile": null,
            "syslog": null,
            "amqp": {
                "server": "127.0.0.1:10001",
                "userName": "StealthINTERCEPT",
                "queue": "StealthINTERCEPT",
                "vhost": ""
            },
            "fileFilter": null,
            "sharePointFilter": null,
            "comment": "",
            "managedBy": "",
            "windows": null
        }
    ],
    "outputsUrl": "https://localhost:4494/api/v1/domains/TEST01/outputs",
    "agentsUrl": "https://localhost:4494/api/v1/domains/TEST01/agents",
    "masterAgentId": "AGENT0",
    "masterAgentUrl": "https://localhost:4494/api/v1/agents/AGENT0"
}
```

## Host

Host represents a host or platform monitored by the product (Windows, NetApp, SharePoint, SQL
Server, etc). It is a Monitored Host in the Console. The API provides access to the settings of the
host and its status. It allows you to create new hosts, modify, enable/disable, or delete
exisisting. The following table displays the attributes for Host API:

| Attribute             | Type     | Detailed Only | Description                                                                                                                                                            |
| --------------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string   |               |                                                                                                                                                                        |
| url                   | string   |               | Self URL                                                                                                                                                               |
| host                  | string   |               | Host name/Address as specified by a user                                                                                                                               |
| altHost               | string   |               | A hostname that is reported in the activity events instead of the real hostname                                                                                        |
| type                  | string   |               | `Windows`,`NetApp`,`Celerra`,`Isilon`,`Hitachi`,`SharePoint`,`Unity`,`Nasuni`,`OceanStor`,`HuaweiTPPI`, `Panzura`, `SharePointOnline`, `AzureAD`, `Linux`, `SqlServer` |
| userName              | string   |               | An account to connect to the host to                                                                                                                                   |
| autoConfigureAuditing | bool     | yes           | Automatically enable the auditing on the device, if supported                                                                                                          |
| monitorAuditingStatus | bool     | yes           | Constantly verify that the auditing is enabled, fix if needed                                                                                                          |
| outputs               | Output[] |               | Array of host's outputs                                                                                                                                                |
| outputsUrl            | string   |               | Link to the host's outputs                                                                                                                                             |
| agentsUrl             | string   |               | Link to the agents that are monitoring the host                                                                                                                        |

Example:

```json
{
    "autoConfigureAuditing": false,
    "monitorAuditingStatus": false,
    "id": "Windows-wrkst0100",
    "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
    "host": "WRKST0100",
    "type": "Windows",
    "altHost": "",
    "userName": "",
    "outputs": [
        {
            "id": "9c90791891774715bdb3415823790d7c",
            "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/9c90791891774715bdb3415823790d7c",
            "hostId": "Windows-wrkst0100",
            "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
            "agentsIds": ["AGENT3"],
            "logsUrl": "https://localhost:4494/api/v1/logs/9c90791891774715bdb3415823790d7c",
            "isEnabled": false,
            "type": "LogFile",
            "logFile": {
                "format": "Tsv",
                "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_.tsv",
                "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_9c907918-9177-4715-bdb3-415823790d7c\\localhost_Log_.tsv",
                "daysToRetain": 11111,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": false,
                "stealthAudit": true
            },
            "syslog": null,
            "amqp": null,
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
                "readOptimize": false,
                "includePaths": ["C:"],
                "excludePaths": [],
                "excludeExtensions": [],
                "excludeProcesses": [],
                "excludeReadProccesses": [],
                "excludeAccounts": [],
                "filterGroups": false,
                "officeFiltering": true
            },
            "sharePointFilter": null,
            "comment": "",
            "managedBy": "",
            "windows": {
                "vssCreation": true,
                "vssActivity": true,
                "discardReorderedAcl": true,
                "discardInheritedAcl": false
            }
        },
        {
            "id": "a556d7c3666d46babe895f2b9ce1316b",
            "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/a556d7c3666d46babe895f2b9ce1316b",
            "hostId": "Windows-wrkst0100",
            "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
            "agentsIds": ["AGENT3"],
            "logsUrl": "https://localhost:4494/api/v1/logs/a556d7c3666d46babe895f2b9ce1316b",
            "isEnabled": false,
            "type": "LogFile",
            "logFile": {
                "format": "Tsv",
                "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\WRKST0100_E_Activity_Log_.Tsv",
                "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_a556d7c3-666d-46ba-be89-5f2b9ce1316b\\WRKST0100_E_Activity_Log_.Tsv",
                "daysToRetain": 3,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": false,
                "stealthAudit": false
            },
            "syslog": null,
            "amqp": null,
            "fileFilter": {
                "allowed": true,
                "denied": true,
                "cifs": true,
                "nfs": true,
                "read": false,
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
                "readOptimize": false,
                "includePaths": ["E:"],
                "excludePaths": [],
                "excludeExtensions": [],
                "excludeProcesses": [
                    "SBTService.exe",
                    "FSAC",
                    "FPolicyServerSvc.exe",
                    "CelerraServerSvc.exe",
                    "FSACLoggingSvc.exe",
                    "HitachiService.exe",
                    "SIWindowsAgent.exe",
                    "SIGPOAgent.exe",
                    "SIWorkstationAgent.exe",
                    "StealthAUDIT",
                    "LogProcessorSrv.exe",
                    "SearchIndexer.exe",
                    "WindowsSearch.exe"
                ],
                "excludeReadProccesses": [],
                "excludeAccounts": ["S-1-5-17", "S-1-5-18", "S-1-5-19", "S-1-5-20"],
                "filterGroups": false,
                "officeFiltering": false
            },
            "sharePointFilter": null,
            "comment": "Updates on E:",
            "managedBy": "",
            "windows": {
                "vssCreation": true,
                "vssActivity": true,
                "discardReorderedAcl": true,
                "discardInheritedAcl": true
            }
        },
        {
            "id": "e7c98bc9e96a41d0813b35858a0475bd",
            "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/e7c98bc9e96a41d0813b35858a0475bd",
            "hostId": "Windows-wrkst0100",
            "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
            "agentsIds": ["AGENT3"],
            "logsUrl": "https://localhost:4494/api/v1/logs/e7c98bc9e96a41d0813b35858a0475bd",
            "isEnabled": false,
            "type": "Syslog",
            "logFile": null,
            "syslog": {
                "reportUncPath": false,
                "addCToPath": true,
                "server": "192.168.1.1",
                "protocol": "UDP",
                "separator": "Lf"
            },
            "amqp": null,
            "fileFilter": {
                "allowed": true,
                "denied": true,
                "cifs": true,
                "nfs": true,
                "read": false,
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
                "readOptimize": false,
                "includePaths": ["O:"],
                "excludePaths": [],
                "excludeExtensions": [],
                "excludeProcesses": [
                    "SBTService.exe",
                    "FSAC",
                    "FPolicyServerSvc.exe",
                    "CelerraServerSvc.exe",
                    "FSACLoggingSvc.exe",
                    "HitachiService.exe",
                    "SIWindowsAgent.exe",
                    "SIGPOAgent.exe",
                    "SIWorkstationAgent.exe",
                    "StealthAUDIT",
                    "LogProcessorSrv.exe",
                    "SearchIndexer.exe",
                    "WindowsSearch.exe"
                ],
                "excludeReadProccesses": [],
                "excludeAccounts": ["S-1-5-17", "S-1-5-18", "S-1-5-19", "S-1-5-20"],
                "filterGroups": false,
                "officeFiltering": false
            },
            "sharePointFilter": null,
            "comment": "SIEM feed",
            "managedBy": "",
            "windows": {
                "vssCreation": false,
                "vssActivity": false,
                "discardReorderedAcl": true,
                "discardInheritedAcl": false
            }
        }
    ],
    "outputsUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs",
    "agentsUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/agents"
}
```

## Output

Output is a log file or Syslog or AMQP (DEFEND) destination for the activity data. The following
table displays the attributes for Output API:

| Attribute        | Type             | Detailed Only | Description                                                                                                  |
| ---------------- | ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| id               | string           |               |                                                                                                              |
| url              | string           |               | Self URL                                                                                                     |
| hostId           | string           |               | File/SP only: ID of the owning host                                                                          |
| hostUrl          | string           |               | File/SP only: Link to the owning host                                                                        |
| agentIds         | string[]         |               | If set, lists IDs of the agents serving the output. If not set, all host's/domain's agents serve the output. |
| domainId         | string           |               | AD only: ID of the owning domain                                                                             |
| domainUrl        | string           |               | AD only: Link to the owning domain                                                                           |
| logsUrl          | string           |               | Link to the file output log files (for the local agent only)                                                 |
| isEnabled        | bool             |               | Whether or not the output is enabled. If disabled, no activity is forwarded to it.                           |
| type             | string           |               | `LogFile`,`Syslog`,`Amqp`                                                                                    |
| logFile          | FileOutput       |               | Log file settings                                                                                            |
| syslog           | SyslogOutput     |               | Syslog settings                                                                                              |
| amqp             | AmqpOutput       |               | AMQP/DEFEND settings                                                                                         |
| fileFilter       | FileFilter       |               | Filtering settings for file activity                                                                         |
| sharePointFilter | SharePointFilter |               | Filtering settings for SharePoint                                                                            |
| comment          | string           |               | User's comment                                                                                               |
| managedBy        | string           |               | Name of a product that manages this output. Typically `StealthINTERCEPT`                                     |
| windows          | WindowsOptions   |               | Windows filtering settings                                                                                   |

### FileOutput

The following table displays the attributes for FileOutput API:

| Attribute          | Type   | Detailed Only | Description                                                                           |
| ------------------ | ------ | ------------- | ------------------------------------------------------------------------------------- |
| format             | string |               | `Tsv`, `Json`                                                                         |
| path               | string |               | Log file path on the agent's drive. Timestamp is added before the extension.          |
| archivePath        | string |               | Log file path in the archival location (UNC path)                                     |
| daysToRetain       | int    |               | Number of days to keep the log files alive both on the local drive and in the archive |
| reportUserName     | bool   |               | Resolve and report user name                                                          |
| reportUncPath      | bool   |               | Report UNC paths in addition to local/native paths                                    |
| addCToPath         | bool   |               | Prepend the path `C:\` and change the forward slashes to backslashes.                 |
| reportMilliseconds | bool   |               | Report events' time with milliseconds                                                 |
| stealthAudit       | bool   |               | The file was marked for consumption by Enterprise Auditor                             |

### SyslogOutput

The following table displays the attributes for SyslogOutput API:

| Attribute     | Type   | Detailed Only | Description                                                           |
| ------------- | ------ | ------------- | --------------------------------------------------------------------- |
| server        | string |               | Hostname/address of the syslog server                                 |
| protocol      | string |               | `UDP`, `TCP`, `TLS`                                                   |
| separator     | string |               | `Lf, `Cr `CrLf`, `Nul`, `Rfc5425`                                     |
| reportUncPath | bool   |               | Report UNC paths in addition to local/native paths                    |
| addCToPath    | bool   |               | Prepend the path `C:\` and change the forward slashes to backslashes. |

### AmqpOutput

The following table displays the attributes for AmqpOutput API:

| Attribute | Type   | Detailed Only | Description                                                                                                                         |
| --------- | ------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| server    | string |               | Hostname/address of the AMQP server or the Threat Manager server and the port in the SERVER:PORT format                             |
| userName  | string |               | User name for the AMQP connection, if needed. ForThreat Managerintegration, use an empty string.                                    |
| password  |        |               | Password for the AMQP connection, if needed. ForThreat Managerintegration, use the App Token generated in Threat Manager.           |
| queue     | string |               | Message queue name to post events to. ForThreat Manager integration, use an empty string.                                           |
| exchange  |        |               | Exchange name to post events to. ForThreat Manager integration, use "StealthINTERCEPT" for domain outputs or "AM" for host outputs. |
| vhost     | string |               | Virtual Host name, if needed. ForThreat Managerintegration, use an empty string.                                                    |

### FileFilter

The following table displays the attributes for FileFilter API:

| Attribute             | Type     | Detailed Only | Description |
| --------------------- | -------- | ------------- | ----------- |
| allowed               | bool     |               |             |
| denied                | bool     |               |             |
| cifs                  | bool     |               |             |
| nfs                   | bool     |               |             |
| read                  | bool     |               |             |
| dirRead               | bool     |               |             |
| create                | bool     |               |             |
| dirCreate             | bool     |               |             |
| rename                | bool     |               |             |
| dirRename             | bool     |               |             |
| delete                | bool     |               |             |
| dirDelete             | bool     |               |             |
| update                | bool     |               |             |
| permission            | bool     |               |             |
| dirPermission         | bool     |               |             |
| readOptimize          | bool     |               |             |
| includePaths          | string[] |               |             |
| excludePaths          | string[] |               |             |
| excludeExtensions     | string[] |               |             |
| excludeProcesses      | string[] |               |             |
| excludeReadProccesses | string[] |               |             |
| excludeAccounts       | string[] |               |             |
| filterGroups          | bool     |               |             |
| officeFiltering       | bool     |               |             |

### SharePointFilter

The following table displays the attributes for SharePointFilter API:

| Attribute       | Type     | Detailed Only | Description |
| --------------- | -------- | ------------- | ----------- |
| operations      | string[] |               |             |
| includeUrls     | string[] |               |             |
| excludeUrls     | string[] |               |             |
| excludeAccounts | string[] |               |             |

### WindowsOptions

The following table displays the attributes for WindowsOptions API:

| Attribute           | Type | Detailed Only | Description |
| ------------------- | ---- | ------------- | ----------- |
| vssCreation         | bool |               |             |
| vssActivity         | bool |               |             |
| discardReorderedAcl | bool |               |             |
| discardInheritedAcl | bool |               |             |

Example:

```json
{
    "id": "7eb54a50fb634fe5a0ac61278136ff00",
    "url": "https://localhost:4494/api/v1/hosts/NetApp-192.168.25.247/outputs/7eb54a50fb634fe5a0ac61278136ff00",
    "hostId": "NetApp-192.168.25.247",
    "hostUrl": "https://localhost:4494/api/v1/hosts/NetApp-192.168.25.247",
    "agentsIds": ["AGENT3"],
    "logsUrl": "https://localhost:4494/api/v1/logs/7eb54a50fb634fe5a0ac61278136ff00",
    "isEnabled": false,
    "type": "LogFile",
    "logFile": {
        "format": "Tsv",
        "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\192.168.25.247_Log_.tsv",
        "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\192.168.25.247_7eb54a50-fb63-4fe5-a0ac-61278136ff00\\192.168.25.247_Log_.tsv",
        "daysToRetain": 10,
        "reportUserName": false,
        "reportUncPath": false,
        "addCToPath": true,
        "reportMilliseconds": false,
        "stealthAudit": true
    },
    "syslog": null,
    "amqp": null,
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
        "readOptimize": false,
        "includePaths": ["C:"],
        "excludePaths": [],
        "excludeExtensions": [],
        "excludeProcesses": [],
        "excludeReadProccesses": [],
        "excludeAccounts": [],
        "filterGroups": false,
        "officeFiltering": true
    },
    "sharePointFilter": null,
    "comment": "",
    "managedBy": "",
    "windows": null
}
```

## File

File is the information about the actual .TSV, .JSON, and .ZIP files stored on the agent. A file can
be downloaded. The following table displays the attributes for File API:

| Attribute    | Type     | Detailed Only | Description                                                                                     |
| ------------ | -------- | ------------- | ----------------------------------------------------------------------------------------------- |
| id           | string   |               |                                                                                                 |
| size         | long     |               | File size in bytes                                                                              |
| localPath    | string   |               | File path on the local disk                                                                     |
| isZip        | bool     |               | Is it a Zip archive                                                                             |
| isArchived   | bool     |               | Determines whether the file is on a local drive of the agent or moved to the archival location. |
| type         | string   |               | `Tsv`, `Json`                                                                                   |
| updatedAt    | DateTime |               | Last time the file was updated                                                                  |
| activityFrom | DateTime |               | Activity events in the file are not younger than the date.                                      |
| activityTo   | DateTime |               | Activity events in the file are not older than the date.                                        |
| outputId     | string   |               | ID of the output that produced the file.                                                        |
| contentUrl   | string   |               | Link to the file content. MIME type `application/x-msdownload`                                  |

Example:

```json
[
    {
        "id": "localhost_Log_20190410_000000.tsv",
        "size": 81658576,
        "localPath": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_20190410_000000.tsv",
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
        "localPath": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_20190401_000000.tsv.zip",
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

Policy represents an Active Directory monitoring policy. The API allows you to create new policies,
list, modify, and delete existing. The following table displays the attributes for Policy API:

| Attribute   | Type     | Detailed Only | Read-Only | Description                                                                           |
| ----------- | -------- | ------------- | --------- | ------------------------------------------------------------------------------------- |
| id          | string   |               | yes       |                                                                                       |
| url         | string   |               | yes       |                                                                                       |
| name        | string   |               |           | Policy name.                                                                          |
| description | string   |               |           | Policy name.                                                                          |
| path        | string   |               |           | Policy location.                                                                      |
| guid        | string   |               | yes       |                                                                                       |
| isEnabled   | bool     |               |           | Whether the policy is enabled.                                                        |
| updatedAt   | datetime |               | yes       | When the policy was last modified.                                                    |
| xml         | string   | yes           |           | Policy body in XML format. It's the same format used by Threat Prevention Powershell. |

## EndpointsAPI

The API supports the following verbs:

- `GET` - returns a resource or resource list. Additional parameters are specified in the URL. On
  success returns `200 OK`.
- `POST` - creates a new resource. The request body contains a JSON object, content type
  `application/json`,. On success returns `201 Created`.
- `PATCH` - modifies a subset of attributes of the resource. The request body contains the change in
  the JSON Merge Patch format
  ([https://tools.ietf.org/html/rfc7396](https://tools.ietf.org/html/rfc7396)), content type
  `application/merge-patch+json`. On success returns `200 OK`.
- `DELETE` - deletes the resource. On success returns `204 No Content`.

**GET /api/v1/agents**

Lists all the agents managed by the API server. If the client has no `Read` permission, returns only
the current agent.

Permission: `Read` or `Access activity data`

**Response: array of Agent**

Example:

```json
[
    {
        "warnings": [],
        "safeModeStatus": "",
        "safeModeMessage": "",
        "archiveIsEnabled": false,
        "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS",
        "archiveUserName": "",
        "archiveMaxLocalSize": "5GB",
        "fpolicyPort": 9999,
        "fpolicyAuth": "NoAuth",
        "fpolicyIpWhitelist": [],
        "minLocalFreeSpace": "64MB",
        "ceeVcapsIsEnabled": false,
        "ceeVcapsInterval": 60,
        "ceeVcapsEvents": 100,
        "alertsIsEnabled": false,
        "alertsInactivityInterval": 360,
        "alertsReplayInterval": 360,
        "alertsInactivityCheckInterval": 10,
        "alertsSyslog": {
            "server": "",
            "protocol": "UDP",
            "separator": null
        },
        "alertsEmail": {
            "server": "",
            "ssl": false,
            "userName": "",
            "from": "",
            "to": "",
            "subject": ""
        },
        "hardeningIsEnabled": false,
        "safeModeIsEnabled": true,
        "dnsResolveIsEnabled": false,
        "siIpWhitelist": [],
        "apiServerIpWhitelist": [],
        "apiServerMgmtConsole": "WRKST0100",
        "id": "AGENT0",
        "url": "https://localhost:4494/api/v1/agents/AGENT0",
        "host": "192.168.1.124",
        "netbiosName": "VAGRANT-2016",
        "userName": "test01\\administrator",
        "domain": "TEST01",
        "machineSid": "S-1-5-21-1367674131-2422966069-737923105-1001",
        "osVersion": "6.2.9200.0",
        "isDC": false,
        "errorMessage": "",
        "installState": "Installed",
        "version": "4.1.119",
        "siInstallState": "Installed",
        "siVersion": "6.0.0.388",
        "managedBySI": false,
        "configVersion": "UFZXT9Fijt5mZ6GNOaoclaVMRy4=",
        "monitoredHostsUrl": "https://localhost:4494/api/v1/agents/AGENT0/hosts",
        "monitoredDomainUrl": "https://localhost:4494/api/v1/agents/AGENT0/domain",
        "apiServerIsEnabled": false,
        "apiServerPort": 4494
    },
    {
        "warnings": [],
        "safeModeStatus": null,
        "safeModeMessage": null,
        "archiveIsEnabled": false,
        "archivePath": "",
        "archiveUserName": "",
        "archiveMaxLocalSize": "5GB",
        "fpolicyPort": 9999,
        "fpolicyAuth": "NoAuth",
        "fpolicyIpWhitelist": [],
        "minLocalFreeSpace": "64MB",
        "ceeVcapsIsEnabled": false,
        "ceeVcapsInterval": 60,
        "ceeVcapsEvents": 100,
        "alertsIsEnabled": false,
        "alertsInactivityInterval": 360,
        "alertsReplayInterval": 360,
        "alertsInactivityCheckInterval": 10,
        "alertsSyslog": {
            "server": "",
            "protocol": "UDP",
            "separator": null
        },
        "alertsEmail": {
            "server": null,
            "ssl": false,
            "userName": null,
            "from": null,
            "to": null,
            "subject": ""
        },
        "hardeningIsEnabled": false,
        "safeModeIsEnabled": true,
        "dnsResolveIsEnabled": false,
        "siIpWhitelist": ["127.0.0.1", "::1"],
        "apiServerIpWhitelist": null,
        "apiServerMgmtConsole": null,
        "id": "AGENT1",
        "url": "https://localhost:4494/api/v1/agents/AGENT1",
        "host": "nonexistent",
        "netbiosName": "nonexistent",
        "userName": "",
        "domain": "",
        "machineSid": "",
        "osVersion": "",
        "isDC": false,
        "errorMessage": "Cannot detect if an agent is installed. The RPC server is unavailable. (Exception from HRESULT: 0x800706BA)",
        "installState": "Failed",
        "version": null,
        "siInstallState": "Failed",
        "siVersion": "",
        "managedBySI": false,
        "configVersion": null,
        "monitoredHostsUrl": "https://localhost:4494/api/v1/agents/AGENT1/hosts",
        "monitoredDomainUrl": "https://localhost:4494/api/v1/agents/AGENT1/domain",
        "apiServerIsEnabled": false,
        "apiServerPort": 4494
    },
    {
        "warnings": [],
        "safeModeStatus": "",
        "safeModeMessage": "",
        "archiveIsEnabled": false,
        "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS",
        "archiveUserName": "wrkst0100\\testuser",
        "archiveMaxLocalSize": "5GB",
        "fpolicyPort": 9999,
        "fpolicyAuth": "Server",
        "fpolicyIpWhitelist": [],
        "minLocalFreeSpace": "64MB",
        "ceeVcapsIsEnabled": false,
        "ceeVcapsInterval": 60,
        "ceeVcapsEvents": 100,
        "alertsIsEnabled": true,
        "alertsInactivityInterval": 360,
        "alertsReplayInterval": 360,
        "alertsInactivityCheckInterval": 10,
        "alertsSyslog": {
            "server": "12",
            "protocol": "UDP",
            "separator": null
        },
        "alertsEmail": {
            "server": "",
            "ssl": false,
            "userName": "",
            "from": "",
            "to": "",
            "subject": ""
        },
        "hardeningIsEnabled": false,
        "safeModeIsEnabled": true,
        "dnsResolveIsEnabled": false,
        "siIpWhitelist": ["127.0.0.1", "::1"],
        "apiServerIpWhitelist": [],
        "apiServerMgmtConsole": "WRKST0100",
        "id": "AGENT3",
        "url": "https://localhost:4494/api/v1/agents/AGENT3",
        "host": "WRKST0100",
        "netbiosName": "WRKST0100",
        "userName": "",
        "domain": "LOGIC-LAB",
        "machineSid": "",
        "osVersion": "6.2.9200.0",
        "isDC": false,
        "errorMessage": "",
        "installState": "Installed",
        "version": "4.1.119",
        "siInstallState": "NotInstalled",
        "siVersion": "",
        "managedBySI": false,
        "configVersion": "efkL3mKD8BJF/LtD/SC+ClS/xuE=",
        "monitoredHostsUrl": "https://localhost:4494/api/v1/agents/AGENT3/hosts",
        "monitoredDomainUrl": "https://localhost:4494/api/v1/agents/AGENT3/domain",
        "apiServerIsEnabled": false,
        "apiServerPort": 4494
    }
]
```

**POST /api/v1/agents**

Adds a new agent (but does not install it). The `host` attribute must be unique.

Permission: `Modify agents`

**Body: Agent**

Response: 201, Agent

**GET /api/v1/agents/«id»**

Returns the agent by ID. If not found or no rights - 404.

Permission: `Read` or `Access activity data`

**Response: Agent (with or without details)**

PATCH /api/v1/agents/«id»

Modifies a subset of attributes of the specified agent.

Permission: `Modify agents`

Body: content type: `application/merge-patch+json`, changes to the Agent in the JSON Merge Patch
format

**Response: 200, Agent**

The following attributes can be modified:

- `archive.isEnabled`
- `archive.path`
- `archive.password`
- `archive.userName`
- `archive.maxLocalSize` - Expected format: `{NUMBER}[KB,MB,GB]`
- `fpolicy.port`
- `fpolicy.auth` - `NoAuth` (default), `Server`, or `Mutual`.
- `fpolicy.ipWhitelist`
- `fpolicy.clientCertificate`
- `fpolicy.serverCertificate` - Must include a private key.
- `minLocalFreeSpace` - Expected format: `{NUMBER}[KB,MB,GB]`
- `cee.vcapsIsEnabled`
- `cee.vcapsInterval`
- `cee.vcapsEvents`
- `alerts.isEnabled`
- `alerts.inactivityInterval`
- `alerts.replayInterval`
- `alerts.inactivityCheckInterval`
- `alerts.syslog.server` - Must be a valid hostname of ip4/ip6 address.
- `alerts.syslog.protocol` - `UDP` (default), `TCP`, or `TLS`.
- `alerts.syslog.separator` - `Lf` (default), `Cr`, `CrLf`, `Nul`, or `Rfc5425`.
- `alerts.email.server` - Must be a valid hostname of ip4/ip6 address.
- `alerts.email.ssl`
- `alerts.email.userName`
- `alerts.email.password`
- `alerts.email.from`
- `alerts.email.to`
- `alerts.email.subject`
- `ad.hardeningIsEnabled`
- `ad.safeModeIsEnabled`
- `ad.dnsResolveIsEnabled`
- `ad.siIpWhitelist`
- `panzura.port`
- `panzura.useCredentials`
- `panzura.username`
- `panzura.password`
- `panzura.ipWhitelist`
- `apiServerIpWhitelist`
- `apiServerMgmtConsole`
- `host` - Must be a unique and valid hostname or ip4/ip6 address.
- `userName`
- `password`
- `comment`
- `agentPort`
- `traceLevel` - `Trace`, `Debug`, `Info`, `Warning`, or `Error`
- `externaNicName` - Must be a valid NIC name on the agent. Use an empty string for auto detect.

**DELETE /api/v1/agents/«id»**

Removes the agent. Does not uninstall.

Permission: `Modify agents`

**Response: 204**

GET /api/v1/domains

Returns an array of monitored domains. Or only the current domain if the client has no `Read`
permission.

Permission: `Read` or `Access activity data`

**Response: array of Domain**

Example:

```json
[
    {
        "id": "TEST01",
        "url": "https://localhost:4494/api/v1/domains/TEST01",
        "name": "TEST01",
        "managedBySI": false,
        "outputs": [
            {
                "id": "657eaa95f0804608acef581e728868e2",
                "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/657eaa95f0804608acef581e728868e2",
                "domainId": "TEST01",
                "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
                "agentsIds": [],
                "isEnabled": true,
                "type": "LogFile",
                "logFile": {
                    "format": "Json",
                    "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\192.168.1.124_Log_.json",
                    "archivePath": "",
                    "daysToRetain": 10,
                    "reportUserName": false,
                    "reportUncPath": false,
                    "addCToPath": true,
                    "reportMilliseconds": false,
                    "stealthAudit": true
                },
                "syslog": null,
                "amqp": null,
                "fileFilter": null,
                "sharePointFilter": null,
                "comment": "",
                "managedBy": "",
                "windows": null
            },
            {
                "id": "fe9eb58ef02e40b8ab4a3e02e51a9d95",
                "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/fe9eb58ef02e40b8ab4a3e02e51a9d95",
                "domainId": "TEST01",
                "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
                "agentsIds": [],
                "isEnabled": true,
                "type": "Amqp",
                "logFile": null,
                "syslog": null,
                "amqp": {
                    "server": "127.0.0.1:10001",
                    "userName": "StealthINTERCEPT",
                    "queue": "StealthINTERCEPT",
                    "vhost": ""
                },
                "fileFilter": null,
                "sharePointFilter": null,
                "comment": "",
                "managedBy": "",
                "windows": null
            }
        ],
        "outputsUrl": "https://localhost:4494/api/v1/domains/TEST01/outputs",
        "agentsUrl": "https://localhost:4494/api/v1/domains/TEST01/agents",
        "masterAgentId": "AGENT0",
        "masterAgentUrl": "https://localhost:4494/api/v1/agents/AGENT0"
    }
]
```

**GET /api/v1/domains/«id»**

Returns the domain by ID. Or 404 if no rights or not found.

Permission: `Read` or `Access activity data`

**Response: Domain**

GET /api/v1/agents/«agentId»/domain

Returns a domain monitored by the specified agent. Or 404 if no rights or not found or the agent
does not monitor AD activity.

This endpoint is useful to get `Output` settings specific to the agent. Domain outputs are
_logical_ - they are described once and used by all the domain controllers to create actual
files/syslog/amqp messages. But there are some output's fields that are different on each agent. For
example, the `archivePath`. If you need such agent-specific fields, use this endpoint.

Permission: `Read` or `Access activity data`

**Response: Domain**

GET /api/v1/domains/«domainId»/agents

Returns the domain controllers (agents) having this domain monitored. Or 404 if no rights or the
domain was not found.

Permission: `Read` or `Access activity data`

**Response: array of Agent**

GET /api/v1/domains/«domainId»/outputs

Returns the configured outputs for the specified domain, or 404 if no rights for the domain or the
domain was not found.

Permission: `Read` or `Access activity data`

**Response: array of Output**

Example:

```json
[
    {
        "id": "657eaa95f0804608acef581e728868e2",
        "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/657eaa95f0804608acef581e728868e2",
        "domainId": "TEST01",
        "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
        "agentsIds": [],
        "isEnabled": true,
        "type": "LogFile",
        "logFile": {
            "format": "Json",
            "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\192.168.1.124_Log_.json",
            "archivePath": "",
            "daysToRetain": 10,
            "reportUserName": false,
            "reportUncPath": false,
            "addCToPath": true,
            "reportMilliseconds": false,
            "stealthAudit": true
        },
        "syslog": null,
        "amqp": null,
        "fileFilter": null,
        "sharePointFilter": null,
        "comment": "",
        "managedBy": "",
        "windows": null
    },
    {
        "id": "fe9eb58ef02e40b8ab4a3e02e51a9d95",
        "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/fe9eb58ef02e40b8ab4a3e02e51a9d95",
        "domainId": "TEST01",
        "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
        "agentsIds": [],
        "isEnabled": true,
        "type": "Amqp",
        "logFile": null,
        "syslog": null,
        "amqp": {
            "server": "127.0.0.1:10001",
            "userName": "StealthINTERCEPT",
            "queue": "StealthINTERCEPT",
            "vhost": ""
        },
        "fileFilter": null,
        "sharePointFilter": null,
        "comment": "",
        "managedBy": "",
        "windows": null
    }
]
```

**GET /api/v1/domains/«domainId»/outputs/«id»**

Returns the specified domain's output. Or 404 if no rights for the domain or the domain was not
found.

Permission: `Read` or `Access activity data`

**Response: Output**

Example:

```json
{
    "id": "657eaa95f0804608acef581e728868e2",
    "url": "https://localhost:4494/api/v1/domains/TEST01/outputs/657eaa95f0804608acef581e728868e2",
    "domainId": "TEST01",
    "domainUrl": "https://localhost:4494/api/v1/domains/TEST01",
    "agentsIds": [],
    "isEnabled": true,
    "type": "LogFile",
    "logFile": {
        "format": "Json",
        "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\192.168.1.124_Log_.json",
        "archivePath": "",
        "daysToRetain": 10,
        "reportUserName": false,
        "reportUncPath": false,
        "addCToPath": true,
        "reportMilliseconds": false,
        "stealthAudit": true
    },
    "syslog": null,
    "amqp": null,
    "fileFilter": null,
    "sharePointFilter": null,
    "comment": "",
    "managedBy": "",
    "windows": null
}
```

**GET /api/v1/hosts**

Returns the combined list of hosts monitored by all the agents. If no `Read` permission, returns
only hosts of the current agent.

Permission: `Read` or `Access activity data`

**Response: array of Host**

GET /api/v1/hosts/«id»

Returns the specified host. If not found or no rights - 404.

Permission: `Read` or `Access activity data`

**Response:Host**

Example:

```json
{
    "autoConfigureAuditing": false,
    "monitorAuditingStatus": false,
    "id": "Windows-wrkst0100",
    "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
    "host": "WRKST0100",
    "type": "Windows",
    "altHost": "",
    "userName": "",
    "outputs": [
        {
            "id": "9c90791891774715bdb3415823790d7c",
            "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/9c90791891774715bdb3415823790d7c",
            "hostId": "Windows-wrkst0100",
            "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
            "agentsIds": ["AGENT3"],
            "logsUrl": "https://localhost:4494/api/v1/logs/9c90791891774715bdb3415823790d7c",
            "isEnabled": false,
            "type": "LogFile",
            "logFile": {
                "format": "Tsv",
                "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_.tsv",
                "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_9c907918-9177-4715-bdb3-415823790d7c\\localhost_Log_.tsv",
                "daysToRetain": 11111,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": false,
                "stealthAudit": true
            },
            "syslog": null,
            "amqp": null,
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
                "readOptimize": false,
                "includePaths": ["C:"],
                "excludePaths": [],
                "excludeExtensions": [],
                "excludeProcesses": [],
                "excludeReadProccesses": [],
                "excludeAccounts": [],
                "filterGroups": false,
                "officeFiltering": true
            },
            "sharePointFilter": null,
            "comment": "",
            "managedBy": "",
            "windows": {
                "vssCreation": true,
                "vssActivity": true,
                "discardReorderedAcl": true,
                "discardInheritedAcl": false
            }
        },
        {
            "id": "a556d7c3666d46babe895f2b9ce1316b",
            "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/a556d7c3666d46babe895f2b9ce1316b",
            "hostId": "Windows-wrkst0100",
            "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
            "agentsIds": ["AGENT3"],
            "logsUrl": "https://localhost:4494/api/v1/logs/a556d7c3666d46babe895f2b9ce1316b",
            "isEnabled": false,
            "type": "LogFile",
            "logFile": {
                "format": "Tsv",
                "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\WRKST0100_E_Activity_Log_.Tsv",
                "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_a556d7c3-666d-46ba-be89-5f2b9ce1316b\\WRKST0100_E_Activity_Log_.Tsv",
                "daysToRetain": 3,
                "reportUserName": false,
                "reportUncPath": false,
                "addCToPath": true,
                "reportMilliseconds": false,
                "stealthAudit": false
            },
            "syslog": null,
            "amqp": null,
            "fileFilter": {
                "allowed": true,
                "denied": true,
                "cifs": true,
                "nfs": true,
                "read": false,
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
                "readOptimize": false,
                "includePaths": ["E:"],
                "excludePaths": [],
                "excludeExtensions": [],
                "excludeProcesses": [
                    "SBTService.exe",
                    "FSAC",
                    "FPolicyServerSvc.exe",
                    "CelerraServerSvc.exe",
                    "FSACLoggingSvc.exe",
                    "HitachiService.exe",
                    "SIWindowsAgent.exe",
                    "SIGPOAgent.exe",
                    "SIWorkstationAgent.exe",
                    "StealthAUDIT",
                    "LogProcessorSrv.exe",
                    "SearchIndexer.exe",
                    "WindowsSearch.exe"
                ],
                "excludeReadProccesses": [],
                "excludeAccounts": ["S-1-5-17", "S-1-5-18", "S-1-5-19", "S-1-5-20"],
                "filterGroups": false,
                "officeFiltering": false
            },
            "sharePointFilter": null,
            "comment": "Updates on E:",
            "managedBy": "",
            "windows": {
                "vssCreation": true,
                "vssActivity": true,
                "discardReorderedAcl": true,
                "discardInheritedAcl": true
            }
        },
        {
            "id": "e7c98bc9e96a41d0813b35858a0475bd",
            "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/e7c98bc9e96a41d0813b35858a0475bd",
            "hostId": "Windows-wrkst0100",
            "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
            "agentsIds": ["AGENT3"],
            "logsUrl": "https://localhost:4494/api/v1/logs/e7c98bc9e96a41d0813b35858a0475bd",
            "isEnabled": false,
            "type": "Syslog",
            "logFile": null,
            "syslog": {
                "reportUncPath": false,
                "addCToPath": true,
                "server": "192.168.1.1",
                "protocol": "UDP",
                "separator": "Lf"
            },
            "amqp": null,
            "fileFilter": {
                "allowed": true,
                "denied": true,
                "cifs": true,
                "nfs": true,
                "read": false,
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
                "readOptimize": false,
                "includePaths": ["O:"],
                "excludePaths": [],
                "excludeExtensions": [],
                "excludeProcesses": [
                    "SBTService.exe",
                    "FSAC",
                    "FPolicyServerSvc.exe",
                    "CelerraServerSvc.exe",
                    "FSACLoggingSvc.exe",
                    "HitachiService.exe",
                    "SIWindowsAgent.exe",
                    "SIGPOAgent.exe",
                    "SIWorkstationAgent.exe",
                    "StealthAUDIT",
                    "LogProcessorSrv.exe",
                    "SearchIndexer.exe",
                    "WindowsSearch.exe"
                ],
                "excludeReadProccesses": [],
                "excludeAccounts": ["S-1-5-17", "S-1-5-18", "S-1-5-19", "S-1-5-20"],
                "filterGroups": false,
                "officeFiltering": false
            },
            "sharePointFilter": null,
            "comment": "SIEM feed",
            "managedBy": "",
            "windows": {
                "vssCreation": false,
                "vssActivity": false,
                "discardReorderedAcl": true,
                "discardInheritedAcl": false
            }
        }
    ],
    "outputsUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs",
    "agentsUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/agents"
}
```

**GET /api/v1/agents/«agentId»/hosts**

Returns a list of hosts of the specified agent. If the agent was not found or no rights - 404.

Permission: `Read` or `Access activity data`

**Response: array of Host**

POST /api/v1/agents/«agentId»/hosts

Adds a new Host to be monitored by the specified agent. A host is added with at least one output.

Permission: `Modify hosts`

**Body: Host**

Response: 201, Host

Required attributes:

- `type`
- `host`
- `outputs`

**PATCH /api/v1/hosts/«id»**

Modifies the host on all the agents that monitor the host.

Permission: `Modify hosts`

Body: content type: `application/merge-patch+json`, changes to the Host resource in the JSON Merge
Patch format

**Response: 200, Host**

The following attributes can be modified:

- `host` - must be a valid hostname or ip4/ip6 address
- `autoConfigureAuditing`
- `monitorAuditingStatus`
- `userName`
- `password`
- TBD

**PATCH /api/v1/agents/«agentId»/hosts/«hostId»**

Modifies the host on the specified agent only. The method may be useful to set agent-specific
settings.

Permission: `Modify hosts`

Body: content type: `application/merge-patch+json`, changes to the Host resource in the JSON Merge
Patch format

**Response: 200, Host**

The following attributes can be modified:

- `host` - must be a valid hostname or ip4/ip6 address
- `autoConfigureAuditing`
- `monitorAuditingStatus`
- `userName`
- `password`
- TBD

**DELETE /api/v1/hosts/«id»**

Removes the host from being monitored from all the agents.

Permission: `Modify hosts`

**Response: 204**

DELETE /api/v1/agents/«agentId»/hosts/«hostId»

Removes the host from being monitored from the specified agent only.

Permission: `Modify hosts`

**Response: 204**

GET /api/v1/hosts/«hostId»/outputs

Returns a list of outputs of the specified host. If the host was not found or no rights - 404.

Permission: `Read` or `Access activity data`

**Response: array of Output**

POST /api/v1/hosts/«hostId»/outputs

Adds a new output for the specified host on all agents that monitor the host.

Permission: `Modify hosts`

**Response: 201, Output**

Required attributes:

- `type`
- `isEnabled`
- `logFile` or `syslog` or `amqp`

**POST /api/v1/agents/«agentId»/hosts/«hostId»/outputs**

Adds a new output for the specified host on the specified agent only. The method may be useful to
have agent-specific outputs. Not recommended.

Permission: `Modify hosts`

**Response: 201, Output**

Required attributes:

- `type`
- `isEnabled`
- `logFile` or `syslog` or `amqp`

**GET /api/v1/hosts/«hostId»/outputs/«id»**

Returns the specified output of the host. If the host was not found or no rights, or the output was
not found - 404.

Permission: `Read` or `Access activity data`

**Response: Output**

Example:

```json
{
    "id": "a556d7c3666d46babe895f2b9ce1316b",
    "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/a556d7c3666d46babe895f2b9ce1316b",
    "hostId": "Windows-wrkst0100",
    "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
    "agentsIds": ["AGENT3"],
    "logsUrl": "https://localhost:4494/api/v1/logs/a556d7c3666d46babe895f2b9ce1316b",
    "isEnabled": false,
    "type": "LogFile",
    "logFile": {
        "format": "Tsv",
        "path": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\WRKST0100_E_Activity_Log_.Tsv",
        "archivePath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_a556d7c3-666d-46ba-be89-5f2b9ce1316b\\WRKST0100_E_Activity_Log_.Tsv",
        "daysToRetain": 3,
        "reportUserName": false,
        "reportUncPath": false,
        "addCToPath": true,
        "reportMilliseconds": false,
        "stealthAudit": false
    },
    "syslog": null,
    "amqp": null,
    "fileFilter": {
        "allowed": true,
        "denied": true,
        "cifs": true,
        "nfs": true,
        "read": false,
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
        "readOptimize": false,
        "includePaths": ["E:"],
        "excludePaths": [],
        "excludeExtensions": [],
        "excludeProcesses": [
            "SBTService.exe",
            "FSAC",
            "FPolicyServerSvc.exe",
            "CelerraServerSvc.exe",
            "FSACLoggingSvc.exe",
            "HitachiService.exe",
            "SIWindowsAgent.exe",
            "SIGPOAgent.exe",
            "SIWorkstationAgent.exe",
            "StealthAUDIT",
            "LogProcessorSrv.exe",
            "SearchIndexer.exe",
            "WindowsSearch.exe"
        ],
        "excludeReadProccesses": [],
        "excludeAccounts": ["S-1-5-17", "S-1-5-18", "S-1-5-19", "S-1-5-20"],
        "filterGroups": false,
        "officeFiltering": false
    },
    "sharePointFilter": null,
    "comment": "Updates on E:",
    "managedBy": "",
    "windows": {
        "vssCreation": true,
        "vssActivity": true,
        "discardReorderedAcl": true,
        "discardInheritedAcl": true
    }
}
```

**PATCH /api/v1/hosts/«hostId»/outputs/«outputId»**

Modifies the specified output on all the agents that monitor the host.

Permission: `Modify hosts`

Body: content type: `application/merge-patch+json`, changes to the Output resource in the JSON Merge
Patch format

**Response: 200, Output**

The following attributes can be modified:

- `comment`
- `isEnabled`
- `managedBy`
- `type` - for `LogFile`, the `logFile` attribute must be set; for `"Syslog"` - the `syslog`
  attribute; for `Amqp` - the `amqp` attribute.
- `windows.discardInheritedAcl`
- `windows.discardReorderedAcl`
- `windows.vssActivity`
- `windows.vssCreation`
- `amqp.server` - must be a a vaild hostname or ip4/ip6 address.
- `amqp.userName`
- `amqp.vhost`
- `amqp.queue`
- `fileFilter.cifs`
- `fileFilter.nfs`
- `fileFilter.create`
- `fileFilter.delete`
- `fileFilter.dirCreate`
- `fileFilter.dirDelete`
- `fileFilter.dirPermission`
- `fileFilter.dirRead`
- `fileFilter.dirRename`
- `fileFilter.excludeExtensions`
- `fileFilter.excludeProcesses`
- `fileFilter.excludeReadProccesses`
- `fileFilter.filterGroups`
- `fileFilter.officeFiltering`
- `fileFilter.permission`
- `fileFilter.read`
- `fileFilter.readOptimize`
- `fileFilter.rename`
- `fileFilter.update`
- `logFile.addCToPath`
- `logFile.archivePath`
- `logFile.daysToRetain`
- `logFile.format` - `Tsv` or `Json`
- `logFile.path`
- `logFile.reportMilliseconds`
- `logFile.reportUncPath`
- `logFile.reportUserName`
- `logFile.stealthAudit`
- `syslog.protocol` - `UDP` (default), `TCP`, `TLS`
- `syslog.addCToPath`
- `syslog.reportUncPath`
- `syslog.separator` - `Lf` (default), `Cr`, `CrLf`, `Nul`, or `Rfc5425`
- `syslog.server` - must be a vaild hostname or ip4/ip6 address.

For File System hosts:

- `fileFilter.excludeAccounts`
- `fileFilter.includePaths`
- `fileFilter.excludePaths`
- `fileFilter.pathFilters` - an ordered array of strings where each element has `{+/-}path` format.
  `+` means include path, `-` means exclude path. `?`, `*`, and `**` wildcards are supported.
  Example: `['+c:/windows/**', '-c:/temp/**']`

For SharePoint hosts:

- `sharePointFilter.excludeAccounts`
- `sharePointFilter.excludeUrls`
- `sharePointFilter.includeUrls`
- `sharePointFilter.operations` - `CheckOut`, `CheckIn`, `View`, `Delete`, `Update`,
  `ProfileChange`, `ChildDelete`, `SchemaChange`, `Undelete`, `Workflow`, `Copy`, `Move`,
  `AuditMaskChange`, `Search`, `ChildMove`, `FileFragmentWrite`, `SecGroupCreate`, `SecGroupDelete`,
  `SecGroupMemberAdd`, `SecGroupMemberDel`, `SecRoleDefCreate`, `SecRoleDefDelete`,
  `SecRoleDefModify`, `SecRoleDefBreakInherit`, `SecRoleBindUpdate`, `SecRoleBindInherit`,
  `SecRoleBindBreakInherit`, `EventsDeleted`, `AppPermissionGrant`, `AppPermissionDelete`, `Custom`

**PATCH /api/v1/agents/«agentId»/hosts/«hostId»/outputs/«outputId»**

Modifies the specified output on the specified agent only. The method may be useful to set
agent-specific attributes.

Permission: `Modify hosts`

Body: content type: `application/merge-patch+json`, changes to the Output resource in the JSON Merge
Patch format

**Response: 200, Output**

GET /api/v1/hosts/«hostId»/agents

Returns a list of agents monitoring the specified host.

Permission: `Read` or `Access activity data`

**Response: array of Agent**

GET /api/v1/logs/«outputId»?includeLocal=true&includeArchived=false

Returns a list of files produced by the specified output.

Parameters:

````||Name|Type|Default|Description||
|includeLocal|bool|true|Return log files on a local drive of the agent|
|includeArchived|bool|false|Return log files in the archival location|```

Permission: ```Read``` or ```Access activity data```

**Response: array of File**

Example:

```json
[
  {
    "id": "localhost_Log_20190419.tsv",
    "size": 20619226,
    "localPath": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_20190419.tsv",
    "isZip": false,
    "isArchived": false,
    "type": "Tsv",
    "updatedAt": "2019-04-19T10:17:32.0546644Z",
    "activityFrom": "2019-04-15T14:30:51",
    "activityTo": "2019-04-19T10:17:32",
    "outputId": "9c90791891774715bdb3415823790d7c",
    "contentUrl": "https://localhost:4494/api/v1/logs/get/localhost_Log_20190419.tsv"
  },
  {
    "id": "localhost_Log_20190419.tsv.zip",
    "size": 1413338,
    "localPath": "C:\\Program Files\\STEALTHbits\\StealthAUDIT\\FSAC\\SBTFileMon_Logs\\localhost_Log_20190419.tsv.zip",
    "isZip": true,
    "isArchived": false,
    "type": "Tsv",
    "updatedAt": "2019-04-19T10:17:32.0546644Z",
    "activityFrom": "2019-04-15T14:30:51",
    "activityTo": "2019-04-19T10:17:32",
    "outputId": "9c90791891774715bdb3415823790d7c",
    "contentUrl": "https://localhost:4494/api/v1/logs/get/localhost_Log_20190419.tsv.zip"
  },
  {
    "id": "localhost_Log_20290410.tsv.zip",
    "size": 16861634,
    "localPath": "\\\\WRKST0100\\SBACTIVITYLOGS\\WRKST0100\\WRKST0100_9c907918-9177-4715-bdb3-415823790d7c\\localhost_Log_20290410.tsv.zip",
    "isZip": true,
    "isArchived": true,
    "type": "Tsv",
    "updatedAt": "2019-04-10T02:01:42.4996667Z",
    "activityFrom": "2019-04-05T18:16:57",
    "activityTo": "2019-04-10T02:01:45",
    "outputId": "9c90791891774715bdb3415823790d7c",
    "contentUrl": "https://localhost:4494/api/v1/logs/archive/get/WRKST0100/WRKST0100_9c907918-9177-4715-bdb3-415823790d7c/localhost_Log_20290410.tsv.zip"
  }
]

````

**GET /api/v1/domains/«domainId»/policies**

Returns an array of existing policies for the specified domain.

Parameters:

| Name      | Type   | Default | Description                                                          |
| --------- | ------ | ------- | -------------------------------------------------------------------- |
| isEnabled | bool?  | null    | Return either enabled or disabled policies. Or all if not specified. |
| path      | string | null    | Return policies with the specified path only.                        |

Permission: `Read`

**Response: array of Policy**

Example:

```json
[
    {
        "id": "10013",
        "url": "https://localhost:4494/api/v1/domains/TEST01/policies/10013",
        "name": "LDAP Monitor",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "8f5e4870-6d28-4f32-af18-2e6e6ed623ce",
        "isEnabled": true,
        "updatedAt": "2019-04-19T10:17:32.0546644Z"
    },
    {
        "id": "10014",
        "url": "https://localhost:4494/api/v1/domains/TEST01/policies/10014",
        "name": "Authentication Monitor",
        "description": "",
        "path": "Policies\\Auditing",
        "guid": "8f5e4870-6d28-4f32-af18-2e6e6ed623cf",
        "isEnabled": true,
        "updatedAt": "2019-04-19T10:17:32.0546644Z"
    }
]
```

**POST /api/v1/domains/«domainId»/policies**

Creates a new policy for the specified domain using the provided XML. ID and GUID attributes in the
XML are ignored, new values are assigned.

Permission: `Policy change`

Input:

- Content type: application/json, Body: Policy, `xml` is required. Other fields, if set, replace
  values in XML.
- Content type: application/xml, Body: XML of the policy to be created

**Response: 201, Policy**

PATCH /api/v1/domains/«domainId»/policies/«id»

Modifies attributes of the policy. If XML is updated, ID and GUID attributes in the XML are ignored,
existing values are preserved.

Permission: `Policy change`

Input:

- Content type: application/merge-patch+json, Body: JSON Merge Patch of Policy.

**Reponse: 200, Policy**

Example:

Body:

```json
{
    "isEnabled": false
}
```

**Response: 200**

```json
{
    "id": "10014",
    "url": "https://localhost:4494/api/v1/domains/TEST01/policies/10014",
    "name": "Authentication Monitor",
    "description": "",
    "path": "Policies\\Auditing",
    "guid": "8f5e4870-6d28-4f32-af18-2e6e6ed623cf",
    "isEnabled": false,
    "updatedAt": "2019-06-19T10:11:12Z",
    "xml": "......"
}
```

**DELETE /api/v1/domains/«domainId»/policies/«id»**

Deletes the specified policy.

Permission: `Policy change`

**Response: 204**
