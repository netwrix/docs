---
title: "Schema and Resources"
description: "Schema and Resources"
sidebar_position: 20
---

# Schema and Resources

The 8.0 API model consists of the following resources:

- Agent – Represents an Activity Monitor Agent. API allows you to view existing agents and their
  status, register, modify, or remove agents. There is no way to install, upgrade, or uninstall
  agents in the 6.0 API. You can list all the agents or the agents of a domain (AD-monitoring agents
  on the domain controllers).  
  Children: Host, Domain  
  See the [Agent](/docs/activitymonitor/8.0/restapi/resources/agent.md) topic for additional information.

- Host – Represents a host or platform monitored by the product (Windows, NetApp, SharePoint, SQL
  Server, etc). It is a Monitored Host in the Console. You can list all the hosts of the agent, or
  just all the hosts. The API Provides access to the settings of the host and its status; allows you
  to create new hosts, modify, enable/disable, or delete existing. Typical properties include a
  hostname, credentials to access API, connection settings. A Host is associated with at least one
  Output. Each Host can have multiple child Outputs, and each Output has its own unique filter
  settings.  
  Children: Output  
  See the [Host](/docs/activitymonitor/8.0/restapi/resources/host.md) topic for additional information.

- Domain – It is a Monitored Domain in the Console. The API provides summary information about each
  monitored domain. Similar to host, the domain also has one or more output. These outputs are
  common for all AD-monitoring agents of the domain. Each domain controller has the same log file
  settings, syslog, and AMQP.  
  Children: Output, Agent  
  See the [Domain](/docs/activitymonitor/8.0/restapi/resources/domain.md) topic for additional information.

- Output – A log file or Syslog or AMQP (DEFEND) destination for the activity data. Typical
  properties of the **Output** include log file settings (path, retention etc.), syslog settings
  (server, UDP/TCP, message template etc.), path filtering (include C:, exclude C:\temp), operations
  (Write File, Create File, Delete File, Create Share etc.), account filtering (exclude
  DOMAIN\service-account1), protocol (CIFS, NFS), etc.  
  Children: File

    - File information about the actual .TSV, .JSON, and .ZIP files stored on the agent. A file can
      be downloaded.
    - Policy represents an Active Directory monitoring policy. The API allows you to create new
      policies, list, modify, and delete existing.

    See the [Output](/docs/activitymonitor/8.0/restapi/resources/output.md) topic for additional information.

Data is transmitted as JSON objects or as JSON Merge Patch for PATCH requests. Dates are formatted
in UTC using the `YYYY-MM-DDTHH:MM:SS` DateTime format. Security-sensitive data like passwords,
certificates, and access tokens are not returned by the GET requests but can be set using POST and
PATCH requests.

## API

The API supports the following:

- GET – Returns a single resource or a list of resources. Additional parameters can be included in
  the URL. A successful response returns a `200 OK `status.
- POST – Creates a new resource. The request body contains a JSON object, content type
  `application/json`. A successful response returns a `201 Created` status.
- PATCH – Modifies a subset of attributes of the resource. The request body contains the change in
  the JSON Merge Patch format
  ([https://tools.ietf.org/html/rfc7396](https://tools.ietf.org/html/rfc7396)), content type
  `application/merge-patch+json`. A successful response returns a `200 OK` status.
- DELETE – Deletes the resource. A successful response returns a `204 No Content status.`

**GET /api/v1/agents**

Lists all the agents managed by the API server. If the client has no `Read` permission, returns only
the current agent.

- Permission – Read or Access activity data
- Response – Array of Agent

**Permission: Read or Access activity data**

Response: Array of Agent

Response Example:

```
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
    "siIpWhitelist": [
      "127.0.0.1",
      "::1"
    ],
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
    "siIpWhitelist": [
      "127.0.0.1",
      "::1"
    ],
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

Adds a new agent but does not install it. The host attribute must be unique.

- Permission – Modify agents
- Response Body – Agent
- Response – 201, Agent

**Permission: Modify agents**

Response Body: Agent

**Response: 201, Agent**

Required attributes:

- host
- platformId

    - Values:

        - windows
        - rhel7
        - rhel8 (Redhat Enterprise Linux version 8 and 9 use the same "rhel8" platformId)

- authenticationMethod

    - Values:

        - Password
        - PublicKey

- userName
- password
- privateKey (only required if PublicKey authenticationMethod is used)

Request Body Example:

```
{
    "host" : "SBNJQASAMDEV04",
    "platformId" : "windows",
    "authenticationMethod" : "Password",
    "userName" : "TESTDOMAIN\\TestUser1",
    "password" : "password123$"
}
```

**POST /api/v1/agents/«agentId»/deploy**

Installs, upgrades, or uninstalls a single agent that is already added to the console.

- Permission – `Modify agents`
- Response – 200
- Required attributes:

    - operation

Permission: `Modify agents`

**Response: 200**

Required attributes:

**operation**

The following attributes can be set:

- operation

    - Values

        - install
        - uninstall

- install.adModule

    - Default – False

- install.upgrade

    - Default – True

- install.installPath
- install.managementGroup
- uninstall.remove

    - Default – False

Request Body Structure:

```
{
    "operation" : "string",
    "install" : {
        "adModule" : bool,
        "upgrade" : bool,
        "installPath" : "string",
        "managementGroup" : "string"
    },
    "uninstall" : {
        "remove" : bool
    }
}
```

**POST /api/v1/agents/deploy**

Installs, upgrades, or uninstalls a set of agents that are already added to the console.

- Permission – Modify agents
- Response – 200

**Permission: Modify agents**

Response: 200

**Required attributes**

- operation
- agentsIds

The following attributes can be set:

- operation

    - Values

        - install
        - uninstall

- agentsIds
- install.adModule

    - Default – False

- install.upgrade

    - Default – True

- install.installPath
- install.managementGroup
- uninstall.remove

    - Default – False

Request Body Structure:

```
{
    "operation" : "string", 
    "agentsIds" : [ "string",  "string", "string", ... ],
    "install" : {
        "adModule" : bool,
        "upgrade" : bool,
        "installPath" : "string",
        "managementGroup" : "string"
    },
    "uninstall" : {
        "remove" : bool
    }
}
```

**GET /api/v1/agents/«agentId»**

Returns the agent by ID. If not found or no rights - 404.

- Permission – Read or Access activity data
- Response – Agent (with or without details)

**Permission: Read or Access activity data**

Response: Agent (with or without details)

**PATCH /api/v1/agents/«agentId»**

Modifies a subset of attributes of the specified agent.

- Permission – Modify agents
- Body: Content type – `application/merge-patch+json`, changes to the Agent in the JSON Merge Patch
  format
- Response – 200, Agent

**Permission: Modify agents**

Body: Content type: `application/merge-patch+json`, changes to the Agent in the JSON Merge Patch
format

**Response: 200, Agent**

The following attributes can be modified:

- `archive.isEnabled`
- `archive.path`
- `archive.password`
- `archive.userName`
- `archive.maxLocalSize` – Expected format: `{NUMBER}[KB,MB,GB]`
- `fpolicy.port`
- `fpolicy.auth` - `NoAuth` (default), `Server`, or `Mutual`.
- `fpolicy.ipWhitelist`
- `fpolicy.clientCertificate`
- `fpolicy.serverCertificate` – Must include a private key.
- `minLocalFreeSpace` – Expected format: `{NUMBER}[KB,MB,GB]`
- `cee.vcapsIsEnabled`
- `cee.vcapsInterval`
- `cee.vcapsEvents`
- `cee.httpEnabled`
- `cee.rpcEnabled`
- `cee.ipWhitelist`
- `inactivityAlerts.isEnabled`
- `inactivityAlerts.inactivityInterval`
- `inactivityAlerts.replayInterval`
- `inactivityAlerts.inactivityCheckInterval`
- `inactivityAlerts.syslog.server` – Must be a valid hostname of ip4/ip6 address.
- `inactivityAlerts.syslog.protocol` – `UDP` (default), `TCP`, or `TLS`.
- `inactivityAlerts.syslog.separator` – `Lf` (default), `Cr`, `CrLf`, `Nul`, or `Rfc5425`.
- `inactivityAlerts.syslog.template`
- `inactivityAlerts.email.server` – Must be a valid hostname of ip4/ip6 address.
- `inactivityAlerts.email.ssl`
- `inactivityAlerts.email.userName`
- `inactivityAlerts.email.password`
- `inactivityAlerts.email.from`
- `inactivityAlerts.email.to`
- `inactivityAlerts.email.subject`
- `inactivityAlerts.email.body`
- `ad.hardeningIsEnabled`
- `ad.safeModeIsEnabled`
- `ad.dnsResolveIsEnabled`
- `ad.siIpWhitelist`
- `panzura.port`
- `panzura.useCredentials`
- `panzura.username`
- `panzura.password`
- `panzura.ipWhitelist`
- `nutanix.port`
- `nutanix.ipWhitelist`
- `qumulo.port`
- `qumulo.ipWhitelist`
- `ctera.port`
- `ctera.ipWhitelist`
- `linux.serviceUsername`
- `dns.isEnabled`
- `dns.listenPort`
- `dns.parallelism`
- `dns.perfStatsTimeDebug`
- `dns.perfStatsTimeInfo`
- `dns.forwardDnsServer`
- `dns.cacheFile`
- `dns.successTtl`
- `dns.failedTtl`
- `dns.clientWaitTimeout`
- `dns.refreshThreshold`
- `dns.maxCacheSize`
- `dns.uselessAge`
- `dns.maxAttemptsToResolve`
- `dns.suffix`
- `adUsers.domainControllers`
- `adUsers.lookupTimeout`
- `adUsers.successCacheTtl`
- `adUsers.failedCacheTtl`
- `adUsers.maxCacheSize`
- `networkProxy.address`
- `networkProxy.useDefaultCredentials`
- `networkProxy.bypassProxyOnLocal`
- `networkProxy.userName`
- `networkProxy.password`
- `networkProxy.bypassList`
- `apiServerIpWhitelist`
- `apiServerMgmtConsole`
- `host` – Must be a unique and valid hostname or ip4/ip6 address.
- `userName`
- `password`
- `privateKey`
- `comment`
- `etwLogEnabled`
- `agentPort`
- `traceLevel` – `Trace`, `Debug`, `Info`, `Warning`, or `Error`
- `externaNicName` – Must be a valid NIC name of the agent. Use an empty string for auto detect.

**DELETE /api/v1/agents/«AgentId»**

Removes the agent without uninstalling it.

- Permission – Modify agents
- Response – 204

**Permission: Modify agents**

Response: 204

**GET /api/v1/domains**

Returns an array of monitored domains, or only the current domain if the client has no `Read`
permission.

- Permission – Read or Access activity data
- Response – Array of Domain

**Permission: Read or Access activity data**

Response: Array of Domain

Response Example:

```
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

**GET /api/v1/domains/«domainId»**

Returns the domain by its ID, or a 404 error if it is not found or the client lacks sufficient
permissions.

- Permission – Read or Access activity data
- Response – Domain

**Permission: Read or Access activity data**

Response: Domain

**GET /api/v1/agents/«agentId»/domain**

Returns a domain monitored by the specified agent, or a 404 error if the domain is not found, the
client lacks the necessary permissions, or the agent is not monitoring AD activity.

This endpoint is useful to get `Output` settings specific to the agent. Domain outputs are logical,
they are described once and used by all the domain controllers to create actual files/syslog/amqp
messages. However, there are some output fields that are different on each agent. For example, the
`archivePath`. If you need such agent-specific fields, use this endpoint.

- Permission – Read or Access activity data
- Response – Domain

**Permission: Read or Access activity data**

Response: Domain

**GET /api/v1/domains/«domainId»/agents**

Returns the domain controllers (agents) monitoring the specified domain, or a 404 error if the
domain is not found or the client lacks the necessary permissions.

- Permission – Read or Access activity data
- Response – Array of Agent

**Permission: Read or Access activity data**

Response: Array of Agent

**GET /api/v1/domains/«domainId»/outputs**

Returns the configured outputs for the specified domain, or 404 if no rights for the domain or the
domain was not found.

- Permission – Read or Access activity data
- Response – Array of Output

**Permission: Read or Access activity data**

Response: Array of Output

Response Example:

```
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

**GET /api/v1/domains/«domainId»/outputs/«outputId»**

Returns the output for the specified domain, or a 404 error if the domain is not found or the client
lacks the necessary permissions.

- Permission –Read or Access activity data
- Response – Output

**Permission: Read or Access activity data**

Response: Output

Response Example:

```
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

**POST /api/v1/domains/«domainId»/outputs**

Adds a new output for the specified domain.

- Permission – Modify hosts
- Response – 201, Output

**Permission: Modify hosts**

Response: 201, Output

Required attributes:

- type
    - Values (Case Sensitive)
        - LogFile
        - Syslog
        - Amqp
- syslog.server (Required only if Syslog is set to type)
- amqp.server (Required only if Amqp is set to type)

Request Body Structure:

```
{          
    "type" : "string",
    "syslog" : {
        "server" : "string"
    },
    "amqp" : {
        "server" : "string"
    }
}
```

**GET /api/v1/hosts**

Returns a combined list of hosts monitored by all agents. If the client lacks Read permission, only
the hosts of the current agent are returned.

- Permission – Read or Access activity data
- Response – Array of Host

**Permission: Read or Access activity data**

Response: Array of Host

**GET /api/v1/hosts/«hostId»**

Returns the specified host. If not found or no rights - 404.

- Permission – Read or Access activity data
- Response – Host

**Permission: Read or Access activity data**

Response: Host

Response Example:

```
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
      "agentsIds": [
        "AGENT3"
      ],
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
        "includePaths": [
          "C:"
        ],
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
      "agentsIds": [
        "AGENT3"
      ],
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
        "includePaths": [
          "E:"
        ],
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
        "excludeAccounts": [
          "S-1-5-17",
          "S-1-5-18",
          "S-1-5-19",
          "S-1-5-20"
        ],
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
      "agentsIds": [
        "AGENT3"
      ],
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
        "includePaths": [
          "O:"
        ],
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
        "excludeAccounts": [
          "S-1-5-17",
          "S-1-5-18",
          "S-1-5-19",
          "S-1-5-20"
        ],
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

**GET /api/v1/hosts/«hostId»/statusHistory**

Returns a journal of status changes for the host, ordered by time in descending order.

- Permission – Read
- Response – Array of Status

**Permission: Read**

Response: Array of Status

**GET /api/v1/agents/«agentId»/hosts**

Returns a list of hosts for the specified agent. If the agent is not found or the client lacks the
necessary permissions, a 404 error is returned.

- Permission – Read or Access activity data
- Response – Array of Host

**Permission: Read or Access activity data**

Response: Array of Host

**POST /api/v1/agents/«agentId»/hosts**

Adds a new Host to be monitored by the specified agent. A host is added with at least one output.

- Permission – Modify hosts
- Response Body – Host
- Response – 201, Host

**Permission: Modify hosts**

Response Body: Host

**Response: 201, Host**

Required Attributes:

- type
    - Values (Case Sensitive):
        - AzureAD
        - Celerra
        - Ctera
        - ExchangeOnline
        - Hitachi
        - Isilon
        - Nasuni
        - NetApp
        - Nutanix
        - Panzura
        - PowerStore
        - Qumulo
        - SharePoint
        - SharePointOnline
        - SqlServer
        - Unity
        - Windows
        - Linux
- host
- outputs

Request Body Example:

```
{
    "type" : "Windows",
    "host" : "SBNJQASAMDEV03",
    "outputs" : [
        {
            "type" : "LogFile"
        }
    ]
}
```

**PATCH /api/v1/hosts/«hostId»**

Modifies the host on all the agents that monitor the host.

- Permission – Modify hosts
- Body – Content type: `application/merge-patch+json`, changes to the Host resource in the JSON
  Merge Patch format
- Response – 200, Host

**Permission: Modify hosts**

Body: Content type: `application/merge-patch+json`, changes to the Host resource in the JSON Merge
Patch format

**Response: 200, Host**

The following attributes can be modified:

- `host` ¬ must be a valid hostname or ip4/ip6 address
- `autoConfigureAuditing`
- `monitorAuditingStatus`
- `hostAliases`
- `userName`
- `password`
- `inactivityAlerts.isEnabled`
- `inactivityAlerts.useCustomSettings`
- `inactivityAlerts.inactivityInterval`
- `inactivityAlerts.replayInterval`
- `inactivityAlerts.inactivityCheckInterval`
- `inactivityAlerts.syslog.server`
- `inactivityAlerts.syslog.protocol`
- `inactivityAlerts.syslog.separator`
- `inactivityAlerts.syslog.template`
- `inactivityAlerts.email.server`
- `inactivityAlerts.email.ssl`
- `inactivityAlerts.email.userName`
- `inactivityAlerts.email.password`
- `inactivityAlerts.email.from`
- `inactivityAlerts.email.to`
- `inactivityAlerts.email.subject`
- `inactivityAlerts.email.body`
- `uidTranslate.isEnabled`
- `uidTranslate.domainController`
- `uidTranslate.port`
- `uidTranslate.options`
- `uidTranslate.container`
- `uidTranslate.scope`
- `uidTranslate.filter`
- `hitachi.uncLogPath`
- `hitachi.logFileName`
- `hitachi.pollingInterval`
- `spo.azure.domain`
- `spo.azure.azureCloud`
- `spo.azure.tenantId`
- `spo.azure.tenantName`
- `spo.azure.clientId`
- `spo.azure.clientSecret`
- `spo.azure.region`
- `azureAd.azure.domain`
- `azureAd.azure.azureCloud`
- `azureAd.azure.tenantId`
- `azureAd.azure.tenantName`
- `azureAd.azure.clientId`
- `azureAd.azure.clientSecret`
- `azureAd.azure.region`
- `exchangeOnline.azure.domain`
- `exchangeOnline.azure.azureCloud`
- `exchangeOnline.azure.tenantId`
- `exchangeOnline.azure.tenantName`
- `exchangeOnline.azure.clientId`
- `exchangeOnline.azure.clientSecret`
- `exchangeOnline.azure.region`
- `sharePoint.pollingInterval`
- `api.protocol`
- `api.certificate`
- `api.hostNameVerification`
- `api.channel`
- `sql.pollingInterval`
- `sql.tweakOptions`
- `netapp.nfs3EventName`
- `netapp.nfs3FailedEventName`
- `netapp.nfs4FailedEventName`
- `netapp.nfs4EventName`
- `netapp.cifsEventName`
- `netapp.cifsFailedEventName`
- `netapp.policyName`
- `netapp.externalEngineName`

**PATCH /api/v1/agents/«agentId»/hosts/«hostId»**

Modifies the host on the specified agent only. The method is useful to set agent-specific settings.

- Permission – Modify hosts
- Body – Content type: `application/merge-patch+json`, changes to the Host resource in the JSON
  Merge Patch format
- Response – 200, Host

**Permission: Modify hosts**

Body: Content type: `application/merge-patch+json`, changes to the Host resource in the JSON Merge
Patch format

**Response: 200, Host**

The following attributes can be modified:

- `host` - must be a valid hostname or ip4/ip6 address
- `autoConfigureAuditing`
- `monitorAuditingStatus`
- hostAliases
- `userName`
- `password`
- `inactivityAlerts.isEnabled`
- `inactivityAlerts.useCustomSettings`
- `inactivityAlerts.inactivityInterval`
- `inactivityAlerts.replayInterval`
- `inactivityAlerts.inactivityCheckInterval`
- `inactivityAlerts.syslog.server`
- `inactivityAlerts.syslog.protocol`
- `inactivityAlerts.syslog.separator`
- `inactivityAlerts.syslog.template`
- `inactivityAlerts.email.server`
- `inactivityAlerts.email.ssl`
- `inactivityAlerts.email.userName`
- `inactivityAlerts.email.password`
- `inactivityAlerts.email.from`
- `inactivityAlerts.email.to`
- `inactivityAlerts.email.subject`
- `inactivityAlerts.email.body`
- `uidTranslate.isEnabled`
- `uidTranslate.domainController`
- `uidTranslate.port`
- `uidTranslate.options`
- `uidTranslate.container`
- `uidTranslate.scope`
- `uidTranslate.filter`
- `hitachi.uncLogPath`
- `hitachi.logFileName`
- `hitachi.pollingInterval`
- `spo.azure.domain`
- `spo.azure.azureCloud`
- `spo.azure.tenantId`
- `spo.azure.tenantName`
- `spo.azure.clientId`
- `spo.azure.clientSecret`
- `spo.azure.region`
- `azureAd.azure.domain`
- `azureAd.azure.azureCloud`
- `azureAd.azure.tenantId`
- `azureAd.azure.tenantName`
- `azureAd.azure.clientId`
- `azureAd.azure.clientSecret`
- `azureAd.azure.region`
- `exchangeOnline.azure.domain`
- `exchangeOnline.azure.azureCloud`
- `exchangeOnline.azure.tenantId`
- `exchangeOnline.azure.tenantName`
- `exchangeOnline.azure.clientId`
- `exchangeOnline.azure.clientSecret`
- `exchangeOnline.azure.region`
- `sharePoint.pollingInterval`
- `api.protocol`
- `api.certificate`
- `api.hostNameVerification`
- `api.channel`
- `sql.pollingInterval`
- `sql.tweakOptions`
- `netapp.nfs3EventName`
- `netapp.nfs3FailedEventName`
- `netapp.nfs4FailedEventName`
- `netapp.nfs4EventName`
- `netapp.cifsEventName`
- `netapp.cifsFailedEventName`
- `netapp.policyName`
- `netapp.externalEngineName`

**DELETE /api/v1/hosts/«hostId»**

Removes the host from being monitored from all the agents.

- Permission – Modify hosts
- Response – 204

**Permission: Modify hosts**

Response: 204

**DELETE /api/v1/agents/«agentId»/hosts/«hostId»**

Removes the host from being monitored from the specified agent.

- Permission – Modify hosts
- Response – 204

**Permission: Modify hosts**

Response: 204

**GET /api/v1/hosts/«hostId»/outputs**

Returns a list of outputs for the specified host. If the host is not found or the client lacks the
necessary permissions, a 404 error is returned.

- Permission – Read or Access activity data
- Response – Array of Output

**Permission: Read or Access activity data**

Response: Array of Output

**POST /api/v1/hosts/«hostId»/outputs**

Adds a new output for the specified host on all agents that monitor the host.

- Permission – Modify hosts
- Response – 201, Output

**Permission: Modify hosts**

Response: 201, Output

Required Attributes:

- type
    - Values (Case Sensitive)
        - LogFile
        - Syslog
        - Amqp
- syslog.server (Required only if Syslog is set to type)
- amqp.server (Required only if Amqp is set to type)

Request Body Structure:

```
{          
    "type" : "string",
    "syslog" : {
        "server" : "string"
    },
    "amqp" : {
        "server" : "string"
    }
}
```

**POST /api/v1/agents/«agentId»/hosts/«hostId»/outputs**

Adds a new output for the specified host on the specified agent only. The method may be useful to
have agent-specific outputs but is not recommended.

- Permission – Modify hosts
- Response – 201, Output

**Permission: Modify hosts**

Response: 201, Output

Required attributes:

- type
    - Values (Case Sensitive)
        - LogFile
        - Syslog
        - Amqp
- syslog.server (Required only if Syslog is set to type)
- amqp.server (Required only if Amqp is set to type)

Request Body Structure:

```
{          
    "type" : "string",
    "syslog" : {
        "server" : "string"
    },
    "amqp" : {
        "server" : "string"
    }
}
```

**GET /api/v1/hosts/«hostId»/outputs/«outputId»**

Returns the specified output of the host. If the host or output is not found, or the client lacks
the necessary permissions, a 404 error is returned.

- Permission – Read or Access activity data
- Response – Output

**Permission: Read or Access activity data**

Response: Output

Response Example:

```
{
  "id": "a556d7c3666d46babe895f2b9ce1316b",
  "url": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100/outputs/a556d7c3666d46babe895f2b9ce1316b",
  "hostId": "Windows-wrkst0100",
  "hostUrl": "https://localhost:4494/api/v1/hosts/Windows-wrkst0100",
  "agentsIds": [
    "AGENT3"
  ],
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
    "includePaths": [
      "E:"
    ],
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
    "excludeAccounts": [
      "S-1-5-17",
      "S-1-5-18",
      "S-1-5-19",
      "S-1-5-20"
    ],
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

**GET /api/v1/hosts/«hostId»/outputs/«outputId»/statusHistory**

Returns a journal of status changes for the output, ordered by time in descending order.

- Permission – Read
- Response – Array of Status

**Permission: Read**

Response: Array of Status

**PATCH /api/v1/hosts/«hostId»/outputs/«outputId»**

Modifies the specified output on all the agents that monitor the host.

- Permission – Modify hosts
- Body – content type: `application/merge-patch+json`, changes to the Output resource in the JSON
  Merge Patch format

**Permission: Modify hosts**

Body: content type: `application/merge-patch+json`, changes to the Output resource in the JSON Merge
Patch format

**Response: 200, Output**

The following attributes can be modified:

- `comment`
- `isEnabled`
- `managedBy`
- `type` ¬ for `LogFile`, the `logFile` attribute must be set; for `Syslog` ¬ the `syslog`
  attribute; for `Amqp` ¬ the `amqp` attribute.
- `windows.discardInheritedAcl`
- `windows.discardReorderedAcl`
- `windows.vssActivity`
- `windows.vssCreation`
- `amqp.server` - must be a a vaild hostname or ip4/ip6 address.
- `amqp.userName`
- `amqp.password`
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
- `fileFilter.includePaths` ¬ Depreciated. Has been replaced by 'pathFilters'.
- `fileFilter.excludePaths` ¬ Depreciated. Has been replaced by 'pathFilters'.
- `fileFilter.pathFilters` ¬ An ordered array of strings where each element has `{+/-}path` format.
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

- Permission – Modify hosts
- Body – content type: `application/merge-patch+json`, changes to the Output resource in the JSON
  Merge Patch format
- Response – 200, Output

**Permission: Modify hosts**

Body: content type: `application/merge-patch+json`, changes to the Output resource in the JSON Merge
Patch format

**Response: 200, Output**

The following attributes can be modified:

- `comment`
- `isEnabled`
- `managedBy`
- `type` - for `LogFile`, the `logFile` attribute must be set; for `Syslog` ¬ the `syslog`
  attribute; for `Amqp` ¬ the `amqp` attribute.
- `windows.discardInheritedAcl`
- `windows.discardReorderedAcl`
- `windows.vssActivity`
- `windows.vssCreation`
- `amqp.server` ¬ must be a a vaild hostname or ip4/ip6 address.
- `amqp.userName`
- amqp.password
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
- `fileFilter.includePaths` ¬ Depreciated. Has been replaced by 'pathFilters'.
- `fileFilter.excludePaths` ¬ Depreciated. Has been replaced by 'pathFilters'.
- `fileFilter.pathFilters` ¬ an ordered array of strings where each element has `{+/-}path` format.
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

**GET /api/v1/hosts/«hostId»/agents**

Returns a list of agents monitoring the specified host.

- Permission – Read or Access activity data
- Response – Array of Agent

**Permission: Read or Access activity data**

Response: Array of Agent

**GET /api/v1/logs/«outputId»?includeLocal=true&includeArchived=false**

Returns a list of files produced by the specified output.

**Parameters:**

| Name            | Type | Default | Description                                    |
| --------------- | ---- | ------- | ---------------------------------------------- |
| includeLocal    | bool | true    | Return log files on a local drive of the agent |
| includeArchived | bool | false   | Return log files in the archival location      |

- Permission – Read or Access activity data
- Response – Array of File

**Permission: Read or Access activity data**

Response: Array of File

Response Example:

```
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

```

**GET /api/v1/domains/«domainId»/policies**

Returns an array of existing policies for the specified domain.

- Permission – Read
- Response – Array of Policies

**Permission: Read**

Response: Array of Policies

Response Example:

```
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
XML are ignored, and new values are assigned.

**Permission: Policy change**

Input:

- Content type ¬ application/json, Body: Policy, `xml` is required. Other fields, if set, replace
  values in XML.
- Content type ¬ application/xml, Body: XML of the policy to be created

**Response: 201, Policy**

Required attributes:

- xml

**PATCH /api/v1/domains/«domainId»/policies/«policyId»**

Modifies attributes of the policy. If XML is updated, ID and GUID attributes in the XML are ignored,
and existing values are preserved.

**Permission: Policy change**

Input:

- Content type: application/merge-patch+json, Body: JSON Merge Patch of Policy.

**Response: 200, Policy**

Response Example:

```
  {
    "id": "10014",
    "url": "https://localhost:4494/api/v1/domains/TEST01/policies/10014",
    "name": "Authentication Monitor",
    "description": "",
    "path": "Policies\\Auditing",
    "guid": "8f5e4870-6d28-4f32-af18-2e6e6ed623cf",
    "isEnabled": false,
    "updatedAt": "2019-06-19T10:11:12Z"
    "xml": "......"
  }

```

Request Bbody Eexample:

```
{
  "isEnabled": false
}
```

**DELETE /api/v1/domains/«domainId»/policies/«policyId»**

Deletes the specified policy.

- Permission – Policy change
- Response – 204

**Permission: Policy change**

Response: 204
