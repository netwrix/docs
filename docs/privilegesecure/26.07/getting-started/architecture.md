---
title: "Architecture and components"
description: "Learn which components make up Privilege Secure, which ports they use, and how the deployment topologies connect them."
sidebar_position: 30
---

# Architecture and components

Privilege Secure has a central web service, a database, and a set of services that run actions, record sessions, and send notifications. You can install every component on one server or spread them across several. The Remote Access Gateway is an optional add-on for external users.

For the complete port list, see [Ports](/docs/privilegesecure/26_07/requirements/ports). The ports on this page summarize the connections that the diagrams show.

## Components

| Component | Role | Default port |
|---|---|---|
| Web service | Hosts the Privilege Secure Console and the REST API in Microsoft Internet Information Services (IIS). It reads and writes the database and communicates with each service. | TCP 6500 (HTTPS) |
| License service | Stores the license and reports the license state to the web service. It listens on the local host. | TCP 6501 |
| Action service | Connects to managed resources and runs the actions that activities define, such as Active Directory sync, password changes, and account orchestration. You can run several Action services. | Outgoing connections vary by action |
| Host Scan service | Scans resources for accounts, services, scheduled tasks, and other data. | Outgoing connections vary by scan |
| Scheduler service | Runs scheduled work such as password changes and scans. | Not applicable |
| Email service | Sends notifications through an external SMTP server. It supports authenticated and unauthenticated connections and TLS. | Not applicable |
| SIEM service | Processes events and forwards them to a configured SIEM. It has built-in Common Event Format (CEF) and Log Event Extended Format (LEEF) templates. | Not applicable |
| Message bus (NATS) | Carries messages between the web service and the services on the same server. | TCP 6521 (local, TLS) |
| Proxy service | Connects users to resources over RDP and SSH and stores session recordings. You can run several proxies for load balancing and redundancy. | TCP 4489 (RDP in) and TCP 4422 (SSH in) |
| Service mesh | Connects remote services to the central web service. Each remote node joins the mesh so that traffic takes the most efficient route to the web service. | TCP 6520 to register, TCP 6523 for leaf nodes, and TCP 6524 for cluster nodes |
| Remote Desktop Monitor service | Runs on target Windows hosts and sends the window and menu activity of an RDP session to the recording. | Not applicable |
| Database | Stores configuration, sessions, and credentials. PostgreSQL 16 or Microsoft SQL Server. | See [Database requirements](/docs/privilegesecure/26_07/requirements/database) |

The Proxy service connects to resources on TCP 3389 (RDP) and TCP 22 (SSH). The Action service uses PowerShell remoting over Windows Remote Management (WinRM) on TCP 5985 or 5986, or SSH on TCP 22. It also connects to Active Directory on several ports. {/* TODO verify: Host Scan service ports and connection broker port 6522 */}

:::note
Open the console at `https://<nps-server>:6500`. See [Ports](/docs/privilegesecure/26_07/requirements/ports) for where this port is set.
:::

## Data flow

{/* TODO screenshot: network and data-flow diagram showing the browser, web service (6500), proxy (4489 and 4422), Action service (5985, 5986, 22), service mesh (6520, 6523, 6524), and the Remote Access Gateway */}

1. A user opens the console on the web service at TCP 6500.
2. The user starts a session. The Action service runs the pre-session actions on the resource.
3. The user connects to the Proxy service on TCP 4489 (RDP) or TCP 4422 (SSH). The proxy connects to the resource on TCP 3389 or TCP 22 and records the session.
4. When the session ends, the Action service runs the post-session actions.

## Remote Access Gateway components

The Remote Access Gateway lets external users start browser-based RDP and SSH sessions without direct access to the console. It is an add-on with its own installers. The components are:

| Component | Where it runs | Default port |
|---|---|---|
| Portal | In the DMZ. It runs on nginx as the `SbPAMRagPortal` Windows service and is the entry point for external users. | TCP 443, with TCP 80 redirecting to HTTPS |
| Gateway | Inside the network. It is an IIS site that passes a fixed set of requests from the Portal to the console. | TCP 6550 |
| guacd | On the Gateway host under Windows Subsystem for Linux 2 (WSL 2), or on a separate Linux host. It is the Apache Guacamole 1.6.0 daemon and runs in Docker. {/* TODO verify: separate Linux host still supported with guacd 1.6.0 */} | TCP 4822 |

A browser session follows this path:

1. The browser connects to the Portal on TCP 443.
2. The Portal passes requests to the Gateway on TCP 6550.
3. The Gateway calls the web service on TCP 6500 and opens a tunnel to guacd on TCP 4822.
4. guacd connects to the Proxy service on TCP 4489 (RDP) or TCP 4422 (SSH). The proxy connects to the resource, so recording and command restrictions still apply.

{/* TODO screenshot: diagram of the Remote Access Gateway data path from browser to Portal (443), Gateway (6550), web service (6500), guacd (4822), proxy (4489 and 4422), and target */}

See [Remote Access Gateway overview](/docs/privilegesecure/26_07/remote-access-gateway/overview).

## Deployment topologies

### Single server

All components install on one Windows server. This topology suits a proof of concept or a test.

{/* TODO screenshot: diagram of the single-server deployment */}

### Server with remote services

The Proxy and Action services use resources in proportion to load. Install them on additional hosts for scalability, redundancy, or network segmentation. You can then disable the services on the application server. Remote services reach the web service through the service mesh.

{/* TODO screenshot: diagram of the distributed architecture with remote Proxy and Action services */}

See [Install services on additional servers](/docs/privilegesecure/26_07/install/additional-services) and [Install a proxy service on another server](/docs/privilegesecure/26_07/install/remote-proxy). {/* TODO verify: supported host operating systems for a remote Proxy service */}

### Active-passive database

Two identical servers run all components. The databases replicate from the primary to the standby. When the primary is unavailable, an administrator starts the failover manually. See [High availability options](/docs/privilegesecure/26_07/install/high-availability). This topology requires PostgreSQL and works with the bundled database. It is the simplest high-availability option.

{/* TODO screenshot: diagram of the active-passive database deployment */}

### Active-active database

Several application servers share one database. Failover needs no manual step. This topology works with PostgreSQL and SQL Server. Setup is more complex, and you need an additional server for the database.

{/* TODO screenshot: diagram of the active-active database deployment */}

### Cloud database

A cloud database provides built-in high availability and automatic scaling, which suits an active-active deployment. Examples are Amazon Aurora PostgreSQL, Amazon RDS for SQL Server, and the Azure database services for PostgreSQL and SQL Server. See [Database requirements](/docs/privilegesecure/26_07/requirements/database) for supported versions. {/* TODO verify: supported cloud database services and versions */}

{/* TODO screenshot: diagram of the cloud database deployment */}

For setup details, see [High availability options](/docs/privilegesecure/26_07/install/high-availability).

### Vault integrations

Activities can use credentials from other vaults and from Microsoft Local Administrator Password Solution (LAPS). The diagrams and setup are in [Vault connectors](/docs/privilegesecure/26_07/integrations/vaults/vault-connectors).
