---
title: "Agent"
description: "Agent"
sidebar_position: 10
---

# Agent

| Attribute                                | Type     | Detailed Only | Description                                                                                                                                                                                         |
| ---------------------------------------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                       | string   |               | Agent ID                                                                                                                                                                                            |
| platformId                               | string   |               | Platform of the agent: Windows , Linux                                                                                                                                                              |
| url                                      | string   |               | Self URL                                                                                                                                                                                            |
| host                                     | string   |               | Host name/address as specified by user                                                                                                                                                              |
| netbiosName                              | string   |               | NETBIOS name                                                                                                                                                                                        |
| authenticationMethod                     | string   |               | The authentication method for connecting to the agent: Password, PublicKey                                                                                                                          |
| agentPort                                | int      |               | The port that is used by the agent. Default: 4498.                                                                                                                                                  |
| userName                                 | string   |               | Account for connecting to the agent.                                                                                                                                                                |
| password                                 | string   | X             | Account password for connecting to the agent. Password is not exposed.                                                                                                                              |
| privateKey                               | string   |               | The private key used when PublicKey authentication method is used. The private key is not exposed.                                                                                                  |
| clientCertificate                        | string   |               | The agent's client certificate.                                                                                                                                                                     |
| protocol                                 | string   |               | The protocol used for connecting to the agent: GRPC                                                                                                                                                 |
| domain                                   | string   |               | Domain name of the agent                                                                                                                                                                            |
| machineSid                               | string   |               | The Machine SID of the Agent Server.                                                                                                                                                                |
| osVersion                                | string   |               | OS version or version servicepack                                                                                                                                                                   |
| isDC                                     | bool     |               | Is Agent a domain controller                                                                                                                                                                        |
| errorMessage                             | string   |               | Description of the failure condition                                                                                                                                                                |
| installState                             | string   |               | State of Activity Monitor agent: `NotInstalled`, `Unknown`, `Installed`, `Installing`, `Upgrading`, `Uninstalling`, `Outdated`, `Failed`, `ManagedBySI` (last one for Threat Prevention agents)     |
| version                                  | string   |               | Activity Monitor agent version                                                                                                                                                                      |
| siInstallState                           | string   |               | State of Threat Prevention agent: `NotInstalled`, `Unknown`, `Installed`, `Installing`, `Upgrading`, `Uninstalling`, `Outdated`, `Failed`, `ManagedBySI` (last one for Threat Prevention agents)    |
| siVersion                                | string   |               | Threat Prevention agent version                                                                                                                                                                     |
| managedBySI                              | bool     |               | True if the Threat Prevention Agent configuration is managed by Threat Prevention. Otherwise Activity Monitor managed the Threat Prevention Agent                                                   |
| configVersion                            | string   |               | A hash of the config file                                                                                                                                                                           |
| monitoredHostsUrl                        | string   |               | URL to the list of agent's hosts                                                                                                                                                                    |
| monitoredDomainUrl                       | string   |               | URL to the domain monitored by the agent, if any                                                                                                                                                    |
| warnings                                 | string[] | X             | Array of errors/warnings if any                                                                                                                                                                     |
| ad.safeModeStatus                        | string   | X             | `pending`, `approved`. If `pending`, the AD Module is in the safe (not yet loaded) mode.                                                                                                                   |
| ad.safeModeMessage                       | string   | X             | If in the safe mode, contains a reason why the agent switched to the mode.                                                                                                                          |
| ad.hardeningIsEnabled                    | bool     | X             | AD Module hardening is enabled or disabled.                                                                                                                                                         |
| ad.safeModeIsEnabled                     | bool     | X             | AD Module safe mode is enabled or disabled.                                                                                                                                                         |
| ad.dnsResolveIsEnabled                   | bool     | X             | AD Module DNS hostname resolution is enabled or disabled.                                                                                                                                           |
| ad.siIpWhitelist                         | string[] | X             | Whitelist of IPs allowed to connect to the AD Module port.                                                                                                                                          |
| archive.IsEnabled                        | bool     | X             | Whether the archiving feature is enabled                                                                                                                                                            |
| archive.path                             | string   | X             | UNC path of the archival location                                                                                                                                                                   |
| archive.userName                         | string   | X             | An account to access the archival location.                                                                                                                                                         |
| archive.password                         | string   | X             | User password to access the archival location. Password is not exposed.                                                                                                                             |
| archive.maxLocalSize                     | string   | X             | Maximum space the agent is allowed to use on the local drives.                                                                                                                                      |
| fpolicy.port                             | int      | X             | NetApp c-mode fpolicy port                                                                                                                                                                          |
| fpolicy.auth                             | string   | X             | `NoAuth`, `Server`, `Mutual`                                                                                                                                                                        |
| fpolicy.ipWhitelist                      | string[] | X             | IP whitelist                                                                                                                                                                                        |
| fpolicy.clientCertificate                | string   | X             | The Client or CA certificate that is currently set.                                                                                                                                                 |
| fpolicy.serverCertificate                | string   | X             | The FPolicy Server certificate that is currently set. Server Certificate is not exposed.                                                                                                            |
| minLocalFreeSpace                        | string   | X             | Free disk threshold after which the agent stops writing data to the log files                                                                                                                       |
| cee.vcapsIsEnabled                       | bool     | X             | CEE Asynchronous bulk delivery (VCAPS) is enabled or disabled.                                                                                                                                      |
| cee.vcapsInterval                        | int      | X             | Interval in seconds on how often events are delivered by CEE.                                                                                                                                       |
| cee.vcapsEvents                          | int      | X             | Interval in number of events on how often events are delivered by CEE.                                                                                                                              |
| cee.httpEnabled                          | bool     | X             | CEE HTTP protocol is enabled or disabled                                                                                                                                                            |
| cee.rpcEnabled                           | bool     | X             | CEE RPC protocol is enabled or disabled                                                                                                                                                             |
| cee.ipWhitelist                          | string[] | X             | Whitelist of IPs that are allowed to connect to the agent via http protocol. If blank the agent will accept connections from any host.                                                              |
| inactivityAlerts.isEnabled               | bool     | X             | Whether Inactivity Alerting is enabled                                                                                                                                                              |
| inactivityAlerts.inactivityInterval      | int      | X             | The time interval to elapse after the Monitored Host stops receiving events.                                                                                                                        |
| inactivityAlerts.replayInterval          | int      | X             | How often to repeat an alert if the inactivity period is long lasting.                                                                                                                              |
| inactivityAlerts.inactivityCheckInterval | int      | X             | The time interval to check the Monitored Host for new events.                                                                                                                                       |
| inactivityAlerts.syslog.server           | string   | X             | The syslog server that is sent inactivity alerts.                                                                                                                                                   |
| inactivityAlerts.syslog.protocol         | string   | X             | The syslog server protocol that is used: "UDP" , "TCP" , "TLS"                                                                                                                                      |
| inactivityAlerts.syslog.separator        | string   | X             | The syslog server separator / message framing that is used: "LF ASCII 10" , "CR ASCII 13" , "CRLF ASCII 13, 10" , "NUL ASCII 0" , "Octet Count RFC 5425". Only used for TCP and TLS protocols.      |
| inactivityAlerts.syslog.template         | string   | X             | The syslog server template text that is used.                                                                                                                                                       |
| inactivityAlerts.email.server            | string   | X             | The email SMTP server that is sent inactivity alerts.                                                                                                                                               |
| inactivityAlerts.email.ssl               | bool     | X             | Email SMTP Server SSL / TLS is enabled or disabled.                                                                                                                                                 |
| inactivityAlerts.email.userName          | string   | X             | Email SMTP Server Username.                                                                                                                                                                         |
| inactivityAlerts.email.password          | string   | X             | Email SMTP Server Password. Password is not exposed.                                                                                                                                                |
| inactivityAlerts.email.from              | string   | X             | Email address of where the inactivity alert is from.                                                                                                                                                |
| inactivityAlerts.email.to                | string   | X             | Email address of where the inactivity alert is sent to.                                                                                                                                             |
| inactivityAlerts.email.subject           | string   | X             | Email message subject of the inactivity alert.                                                                                                                                                      |
| inactivityAlerts.email.body              | string   | X             | Email message body of the inactivity alert.                                                                                                                                                         |
| apiServerIsEnabled                       | bool     |               | API Server is enabled or disabled                                                                                                                                                                   |
| apiServerPort                            | int      |               | API Server TCP/IP port                                                                                                                                                                              |
| apiServerIpWhitelist                     | string[] | X             | Whitelist of IPs allowed to connect to the API Server port.                                                                                                                                         |
| apiServerMgmtConsole                     | string   | X             | NETBIOS name of the Console machine that manages the agent list of the API Server (only available for agent(s) that are running the api server)                                                     |
| traceLevel                               | string   | X             | The logging trace level of the agent.                                                                                                                                                               |
| externalNicName                          | string   | X             | The selected network interface that is used for connections. If blank, the agent will auto-detect the network interface to use.                                                                     |
| comment                                  | string   |               | The agent's set comment.                                                                                                                                                                            |
| etwLogEnabled                            | bool     |               | If true or enabled the windows agent will produce extended debugging data (ETW) logs from the windows driver when Trace logging is enabled for the agent.                                           |
| linux.serviceUsername                    | string   | X             | The linux agent's service username that is used to run the agent service / daemon. If blank, root user is used.                                                                                     |
| networkProxy.address                     | string   | X             | HTTP Proxy Server set in SERVER[:PORT] format. If blank HTTP Proxy is disabled.                                                                                                                     |
| networkProxy.useDefaultCredentials       | bool     | X             | If enabled the proxy server authenticates as the agent's machine account.                                                                                                                           |
| networkProxy.bypassProxyOnLocal          | bool     | X             | If enabled the agent will bypass the proxy server for local addresses.                                                                                                                              |
| networkProxy.userName                    | string   | X             | The Proxy Server Username                                                                                                                                                                           |
| networkProxy.password                    | string   | X             | The Proxy Server Password. Password is not exposed.                                                                                                                                                 |
| networkProxy.bypassList                  | string[] | X             | List of regular expressions that describe URIs that do not use the proxy server when accessed.                                                                                                      |
| dns.isEnabled                            | bool     | X             | Local DNS caching service is enabled or disabled.                                                                                                                                                   |
| dns.listenPort                           | int      | X             | Port used by the DNS caching service.                                                                                                                                                               |
| dns.parallelism                          | int      | X             | Parallelism level to use while processing DNS requests.                                                                                                                                             |
| dns.perfStatsTimeDebug                   | TimeSpan | X             | Period to dump performance statistics on debug level.                                                                                                                                               |
| dns.perfStatsTimeInfo                    | TimeSpan | X             | Period to dump performance statistics on info level.                                                                                                                                                |
| dns.forwardDnsServer                     | string[] | X             | List of DNS servers specified to be used for lookups. If blank, the default DNS servers of the agent are used.                                                                                      |
| dns.cacheFile                            | string   | X             | The DNS cache buffer filename that is used.                                                                                                                                                         |
| dns.successTtl                           | TimeSpan | X             | How long to cache successful lookup results before attempting the search again.                                                                                                                     |
| dns.failedTtl                            | TimeSpan | X             | How long to cache a failed lookup result before attempting the search again.                                                                                                                        |
| dns.clientWaitTimeout                    | TimeSpan | X             | The amount of the DNS service is allowed to process a request before sending a not found response. If no results are received the lookup operation continues in the background.                     |
| dns.refreshThreshold                     | TimeSpan | X             | An interval between expired items in the cache check.                                                                                                                                               |
| dns.maxCacheSize                         | int      | X             | The max size of the dns service buffer file.                                                                                                                                                        |
| dns.uselessAge                           | TimeSpan | X             | The DNS service does not resolve names for events older then the set time period.                                                                                                                   |
| dns.maxAttemptsToResolve                 | int      | X             | Maximum attempts that the DNS service will use to resolve addresses. If 0 is set, the DNS service will resolve addresses infinitely.                                                                |
| dns.suffix                               | string   | X             | The DNS suffix identifies the domain name that is appended to an unqualified host name to obtain a fully qualified domain name (FQDN) suitable for a dns name query.                                |
| adUsers.domainControllers                | string[] | X             | List of Domain Controllers to be used for user lookups. If blank, the default behavior is used.                                                                                                     |
| adUsers.lookupTimeout                    | TimeSpan | X             | The amount of time the agent will wait for the query results. If no results are received , the agent reports an empty username in the events, but continues the lookup operation in the background. |
| adUsers.successCacheTtl                  | TimeSpan | X             | How long to cache successful lookup results before attempting the lookup from Active Directory again.                                                                                               |
| adUsers.failedCacheTtl                   | TimeSpan | X             | How long to cache failed lookup results before attempting the lookup from Active Directory again.                                                                                                   |
| adUsers.maxCacheSize                     | int      | X             | The max size of the cache buffer file.                                                                                                                                                              |
| panzura.port                             | int      | X             | Agent port used for Panzura.                                                                                                                                                                        |
| panzura.useCredentials                   | bool     | X             | Protection of Panzura port is enabled or disabled.                                                                                                                                                  |
| panzura.username                         | string   | X             | Panzura's MQ username used for port protection.                                                                                                                                                     |
| panzura.password                         | string   | X             | Panzura's MQ password used for port protection. Password is not exposed.                                                                                                                            |
| panzura.ipWhitelist                      | string[] | X             | Whitelist of IP addresses of Panzura nodes that are allowed to connect to the Agent's Panzura port. If blank, connections from any host are accepted.                                               |
| nutanix.port                             | int      | X             | Agent port used for Nutanix.                                                                                                                                                                        |
| nutanix.ipWhitelist                      | string[] | X             | Whitelist of IP addresses of Nutanix nodes that are allowed to connect to the Agent's Nutanix port. If blank, connections from any host are accepted.                                               |
| qumulo.port                              | int      | X             | Agent port used for Qumulo.                                                                                                                                                                         |
| qumulo.ipWhitelist                       | string[] | X             | Whitelist of IP addresses of Qumulo nodes that are allowed to connect to the Agent's Qumulo port. If blank, connections from any host are accepted.                                                 |
| ctera.port                               | int      | X             | Agent port used for Ctera.                                                                                                                                                                          |
| ctera.ipWhitelist                        | string[] | X             | Whitelist of IP addresses of CTERA portals that are allowed to connect to the Agent's CTERA port. If blank, connections from any host are accepted.                                                 |

**Response Example**

```
{
    "warnings": [],
    "archive": {
        "isEnabled": false,
        "path": "\\\\KDVM01\\SBACTIVITYLOGS",
        "userName": "",
        "maxLocalSize": "5GB"
    },
    "cee": {
        "vcapsIsEnabled": false,
        "vcapsInterval": 60,
        "vcapsEvents": 100,
        "httpEnabled": false,
        "rpcEnabled": true,
        "ipWhitelist": []
    },
    "ad": {
        "safeModeStatus": null,
        "safeModeMessage": null,
        "hardeningIsEnabled": false,
        "safeModeIsEnabled": true,
        "dnsResolveIsEnabled": true,
        "siIpWhitelist": []
    },
    "minLocalFreeSpace": "64MB",
    "fpolicy": {
        "port": 9999,
        "auth": "NoAuth",
        "ipWhitelist": [],
        "clientCertificate": "",
        "serverCertificate": ""
    },
    "inactivityAlerts": {
        "isEnabled": false,
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
    "panzura": {
        "port": 4497,
        "useCredentials": false,
        "username": "guest",
        "ipWhitelist": []
    },
    "nutanix": {
        "port": 4501,
        "ipWhitelist": []
    },
    "qumulo": {
        "port": 4496,
        "ipWhitelist": []
    },
    "ctera": {
        "port": 4499,
        "ipWhitelist": []
    },
    "linux": {
        "serviceUsername": ""
    },
    "apiServerIpWhitelist": [],
    "apiServerMgmtConsole": "KDVM01",
    "traceLevel": "Info",
    "externalNicName": "",
    "dns": {
        "isEnabled": false,
        "listenPort": 4503,
        "parallelism": 4,
        "perfStatsTimeDebug": "00:01:00",
        "perfStatsTimeInfo": "00:10:00",
        "forwardDnsServer": [],
        "cacheFile": "dns.cache",
        "successTtl": "01:00:00",
        "failedTtl": "00:01:00",
        "clientWaitTimeout": "00:00:01.8000000",
        "refreshThreshold": "00:00:01",
        "maxCacheSize": 1000000,
        "uselessAge": "1.00:00:00",
        "maxAttemptsToResolve": 30,
        "suffix": ""
    },
    "adUsers": {
        "domainControllers": [],
        "lookupTimeout": "00:00:02",
        "successCacheTtl": "10:00:00",
        "failedCacheTtl": "00:01:00",
        "maxCacheSize": 300000
    },
    "networkProxy": {
        "address": "",
        "useDefaultCredentials": false,
        "bypassProxyOnLocal": false,
        "userName": "",
        "bypassList": []
    },
    "id": "AGENT0",
    "platformId": "windows",
    "url": "https://127.0.0.1:4494/api/v1/agents/AGENT0",
    "host": "KDVM01",
    "netbiosName": "KDVM01",
    "authenticationMethod": "Password",
    "userName": "KDUD1\\Administrator",
    "clientCertificate": "",
    "protocol": "GRPC",
    "domain": "KDUD1",
    "machineSid": "S-1-5-21-3126412784-2087258618-1984987930-1105",
    "osVersion": "10.0.14393.0",
    "isDC": false,
    "errorMessage": "",
    "installState": "Installed",
    "version": "7.1.164",
    "siInstallState": "NotInstalled",
    "siVersion": "",
    "managedBySI": false,
    "configVersion": "xVdvRQnWGvifzQ8Q9rpfVj227Jo=",
    "monitoredHostsUrl": "https://127.0.0.1:4494/api/v1/agents/AGENT0/hosts",
    "monitoredDomainUrl": "https://127.0.0.1:4494/api/v1/agents/AGENT0/domain",
    "apiServerIsEnabled": true,
    "apiServerPort": 4494,
    "comment": "",
    "agentPort": 4498
}
```
