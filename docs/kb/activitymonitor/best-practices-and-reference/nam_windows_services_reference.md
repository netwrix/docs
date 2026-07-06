---
description: >-
  Lists all Windows services installed by Netwrix Activity Monitor, including display names, internal service names, and what each service does.
keywords:
  - Netwrix Activity Monitor
  - Windows services
  - service names
  - NAM agent
  - SBFileMonAgentSvc
  - SBTLoggingSvc
  - SBTApiServer
  - NwxDnsCacheSvc
  - FPolicyServerSvc
  - SBTAzureService
  - SBTActiveDirectoryService
  - NAS monitoring services
sidebar_label: Activity Monitor Windows Services
tags:
  - kb
title: "What Windows Services Does Activity Monitor Install?"
products:
  - activitymonitor
---

# What Windows Services Does Activity Monitor Install?

## Question

What Windows services does Netwrix Activity Monitor (NAM) install on agent hosts, and what does each one do?

## Answer

Activity Monitor installs a set of Windows services on each agent host. The services present on a given host depend on which monitoring modules are configured.

### Core Services

#### Netwrix Activity Monitor Agent Service (`SBFileMonAgentSvc`)

The central hub of the NAM agent. It starts and manages all the other monitoring plugins, and exposes the channel the Console and API Server use to push configuration and check agent status. Without it, nothing else runs.

#### Netwrix Logging Service (`SBTLoggingSvc`)

Takes activity events from all the monitoring plugins and delivers them to your configured outputs: log files, syslog, Advanced Message Queuing Protocol (AMQP), Access Analyzer 2026, or 1Secure. Every plugin funnels its events here rather than handling output on its own, so there is one place to configure where your data goes.

#### Netwrix Windows File Monitoring Service (`SBTService`)

Monitors file system activity on the Windows server where the agent is installed. It captures file opens, reads, writes, deletes, renames, and permission changes using a kernel-level driver that sits directly on the file system stack. That means it sees everything at the source, before the data reaches the network.

#### Netwrix API Server Service (`SBTApiServer`)

Exposes a REST interface so StealthAUDIT, scripts, and third-party tools can manage NAM agents programmatically. It translates REST calls into the same management channel the Console uses, so anything the Console can do, the API can do too.

#### Netwrix DNS Cache Service (`NwxDnsCacheSvc`)

Resolves IP addresses to hostnames for the Activity Monitor agent. File server activity events often only log an IP address, so without this service, you'd see "192.168.1.45" in your activity data instead of a readable hostname like "DESKTOP-JOHN." By caching results locally, the service speeds up resolution and reduces the load on your DNS infrastructure.

When the agent needs to resolve an IP, it queries this service on localhost first. If the answer is already cached, it replies instantly. If not, it goes to DNS, caches the result, and uses it next time. It also refreshes cached entries in the background before they expire.

The service saves the cache to disk, so when it restarts it already has answers loaded and ready. There is no delay while the cache rebuilds.

### NAS / File System Services

Each of these services monitors a specific NAS platform. They handle getting events off the appliance and into the NAM pipeline.

#### Netwrix NetApp File Monitoring Service (`FPolicyServerSvc`)

Collects file system events from NetApp NAS appliances using NetApp's FPolicy framework, which lets an external engine (NAM) receive file operation events in real time. The NetApp appliance connects to the agent and pushes events as they happen. Supports both legacy 7-mode and modern ONTAP.

#### Netwrix Dell File Monitoring Service (`CelerraServerSvc`)

Collects file system events from Dell EMC NAS appliances (VNX, Celerra, Unity, Isilon/PowerScale, PowerStore). Dell appliances do not push directly to NAM. Instead, they push to the Dell Common Event Enabler (CEE), a separate Dell component that administrators must install in the environment, which then forwards events to this service.

#### Netwrix Hitachi NAS File Monitoring Service (`SBHitachiNasSrv`)

Monitors file system activity on Hitachi NAS appliances. Rather than receiving pushed events, it reads binary audit log files that the appliance writes to a CIFS share. It keeps track of where it left off so it does not re-process events after a restart.

#### Netwrix Nasuni Monitoring Service (`SBTNasuniService`)

Collects file system events from Nasuni CloudFS appliances. Nasuni nodes push events to the agent over an encrypted AMQP connection. The agent also uses the Nasuni REST API to configure auditing on the appliance, so you do not have to set that up manually on the Nasuni side.

#### Netwrix Huawei OceanStor 9000 Monitoring Service (`SBTOceanStorService`)

Collects file system events from Huawei OceanStor 9000 scale-out NAS appliances. The appliance pushes events to the agent over an encrypted AMQP connection, and the agent uses the OceanStor REST API to configure audit settings on the appliance.

#### Netwrix Huawei OceanStor V5 Monitoring Service (`SBTTppiService`)

Collects file system events from Huawei OceanStor V5 enterprise NAS appliances using Huawei's proprietary TPPI protocol. The appliance connects inbound over TCP and pushes events. The agent uses the OceanStor REST API for share enumeration and supports an IP allowlist to restrict which appliances can connect.

#### Netwrix Panzura Monitoring Service (`SBTPanzuraService`)

Collects file system events from Panzura CloudFS appliances. Panzura nodes push events to the agent over an encrypted AMQP connection. The agent uses the Panzura REST API to configure auditing, so the appliance knows where to send events.

#### Netwrix Nutanix Monitoring Service (`SBTNutanixService`)

Collects file system events from Nutanix Files (AFS) NAS. The agent registers as a peer with Nutanix Files over TCP, and Nutanix pushes events to it directly. It also periodically checks the cluster for new file servers, so it automatically picks up newly added servers without restarting.

#### Netwrix Qumulo Monitoring Service (`SBTQumuloService`)

Collects file system events from Qumulo Core NAS clusters. Qumulo pushes events to the agent in standard syslog format over UDP or TCP. The agent uses the Qumulo REST API to map raw file paths back to share names, so activity shows up with a readable share path instead of an internal system path.

#### Netwrix CTERA Monitoring Service (`SBTCteraService`)

Collects file system events from CTERA enterprise file services portals. The CTERA portal connects inbound to the agent over TLS and streams events in syslog format. The agent uses the CTERA REST API to verify auditing is enabled on the portal and to configure it to point back to the agent as the syslog destination.

#### Netwrix Cohesity Monitoring Service (`SBTCohesityService`)

Collects file system events from Cohesity storage appliances. Unlike the push-based NAS services, this one polls the Cohesity REST API on a set interval for new audit log entries. It also supports reading audit log files from a CIFS share as a secondary method.

#### Netwrix Azure Files Monitoring Service (`SBTAzureFilesService`)

Collects file access activity from Azure Files storage accounts, which are SMB and NFS file shares hosted in Azure. The agent polls the Azure Monitor REST API for audit log entries and supports multiple Azure AD tenants.

> **NOTE:** This service is for Azure Files storage only. For Entra ID and Microsoft 365 activity, see `SBTAzureService`.

### Cloud / Identity Services

#### Netwrix Entra ID and Office 365 Monitoring Service (`SBTAzureService`)

Monitors user activity across Microsoft 365: Entra ID, SharePoint Online, Exchange Online, and Microsoft 365 Copilot. The agent pulls audit events from the Microsoft Graph API and the Office 365 Management Activity API, polling each service independently and supporting multiple tenants.

#### Netwrix Active Directory Monitoring Service (`SBTActiveDirectoryService`)

Collects Active Directory events from domain controllers: logons, object changes, group policy changes, privilege use, and more. This service depends on the Netwrix Threat Prevention (SI) agent installed on each DC. The SI agent does the actual DC-side collection and pushes events to this service over TLS. NAM generates the SI agent's configuration automatically to point it at the right destination.

#### Netwrix SharePoint On-Prem Monitoring Service (`SBTSharePointService`)

Monitors user activity in on-premises SharePoint farms (2010 through 2019). The agent polls each SharePoint farm for new activity records on a configurable interval.

#### Netwrix MS SQL Server Monitoring Service (`SBTSqlServerService`)

Monitors activity on SQL Server instances: queries, logins, permission changes, stored procedure execution, and more. The agent connects to SQL Server and uses Extended Events sessions to capture data activity, plus a logon trigger to capture login events. Supports filtering by database, schema, table, user, and operation type so you can focus on relevant activity instead of the full event volume.
