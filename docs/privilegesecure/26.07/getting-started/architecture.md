---
title: "Architecture and components"
description: "Learn which components make up Privilege Secure, which ports they use, and how the deployment topologies connect them."
sidebar_position: 30
---

# Architecture and components

Privilege Secure has a central web service, a database, and a set of services that run actions, record sessions, and send notifications. You can install every component on one server or spread them across several. The Remote Access Gateway is an optional add-on for external users.

For the complete port list, see [Ports](/docs/privilegesecure/26.07/requirements/ports.md). The ports on this page summarize the connections that the diagrams show.

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
| Database | Stores configuration, sessions, and credentials. PostgreSQL 16 or Microsoft SQL Server. | See [Database requirements](/docs/privilegesecure/26.07/requirements/database.md) |

The Proxy service connects to resources on TCP 3389 (RDP) and TCP 22 (SSH). The Action service uses PowerShell remoting over Windows Remote Management (WinRM) on TCP 5985 or 5986, or SSH on TCP 22. It also connects to Active Directory on several ports. The connection broker in the Proxy service listens on TCP 6522 on all network interfaces by default. It carries TLS-encrypted calls between Proxy service instances.

:::note
Open the console at `https://<nps-server>:6500`. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md) for where this port is set.
:::

## Data flow

![Network diagram. A user browser reaches the web service on port 6500. The Remote Access Gateway reaches the web service on 6500. An RDP or SSH client reaches the proxy on 4489 or 4422. Remote services join the web service through the service mesh on 6520, 6523, and 6524. The action service reaches targets on 5985, 5986, and 22, and the proxy reaches them on 3389 and 22.](/images/privilegesecure/26.07/getting-started/architecture-network-data-flow.webp)

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
| guacd | On the Gateway host under Windows Subsystem for Linux 2 (WSL 2). It is the Apache Guacamole 1.6.0 daemon and runs in Docker. {/* TODO verify: whether Netwrix supports guacd on a separate Linux host. */} | TCP 4822 |

A browser session follows this path:

1. The browser connects to the Portal on TCP 443.
2. The Portal passes requests to the Gateway on TCP 6550.
3. The Gateway calls the web service on TCP 6500 and opens a tunnel to guacd on TCP 4822.
4. guacd connects to the Proxy service on TCP 4489 (RDP) or TCP 4422 (SSH). The proxy connects to the resource, so recording and command restrictions still apply.

![Remote Access Gateway data path. A user browser connects to the Portal in the DMZ on port 443. The Portal passes requests to the Gateway on 6550. The Gateway calls the web service on 6500 and connects to guacd on 4822. guacd connects to the proxy service on 4489 for RDP or 4422 for SSH, and the proxy connects to the target on 3389 or 22.](/images/privilegesecure/26.07/getting-started/remote-access-gateway-data-path.webp)

See [Remote Access Gateway overview](/docs/privilegesecure/26.07/remote-access-gateway/overview.md).

## Deployment topologies

### Single server

All components install on one Windows server. This topology suits a proof of concept or a test.

![Single-server deployment. All components run on one Windows server: web service, database, license service, message bus, Host Scan, Scheduler, Action, Email, SIEM, and Proxy services. A user browser reaches the web service on port 6500, and the Action and Proxy services reach targets on 5985, 5986, 22, 3389, and 22.](/images/privilegesecure/26.07/getting-started/single-server-deployment.webp)

### Server with remote services

The Proxy and Action services use resources in proportion to load. Install them on additional hosts for scalability, redundancy, or network segmentation. You can then disable the services on the application server. Remote services reach the web service through the service mesh.

![Distributed deployment. The application server holds the web service, service mesh, and database. A remote server runs the Proxy and Action services and joins the service mesh on ports 6520, 6523, and 6524. The remote services reach targets on 3389, 22, 5985, 5986, and 22.](/images/privilegesecure/26.07/getting-started/distributed-deployment-remote-services.webp)

See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md) and [Install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md). A remote Proxy service installs from a Windows installer and supports Windows Server 2016 through 2025, the same versions as the application server.

### Active-passive database

Two identical servers run all components. The databases replicate from the primary to the standby. When the primary is unavailable, an administrator starts the failover manually. See [High availability options](/docs/privilegesecure/26.07/install/high-availability.md). This topology requires PostgreSQL and works with the bundled database. It is the simplest high-availability option.

![Active-passive database deployment. A primary server and an identical standby server each run all components and a PostgreSQL database. The primary database replicates to the standby, and an administrator starts the failover manually when the primary is unavailable.](/images/privilegesecure/26.07/getting-started/active-passive-database-deployment.webp)

### Active-active database

Several application servers share one database. Failover needs no manual step. This topology works with PostgreSQL and SQL Server. Setup is more complex, and you need an additional server for the database.

![Active-active database deployment. A user browser reaches either of two application servers on port 6500, and both application servers share one database on a separate database server, which runs PostgreSQL or SQL Server. Failover needs no manual step.](/images/privilegesecure/26.07/getting-started/active-active-database-deployment.webp)

### Cloud database

A customer-provided cloud database provides built-in high availability and automatic scaling, which suits an active-active deployment. Privilege Secure connects to your PostgreSQL or SQL Server database with standard connection strings. See [Database requirements](/docs/privilegesecure/26.07/requirements/database.md) for the engines and versions.

![Cloud database deployment. Two application servers share a cloud database that provides built-in high availability and automatic scaling.](/images/privilegesecure/26.07/getting-started/cloud-database-deployment.webp)

For setup details, see [High availability options](/docs/privilegesecure/26.07/install/high-availability.md).

### Vault integrations

Activities can use credentials from other vaults and from Microsoft Local Administrator Password Solution (LAPS). The diagrams and setup are in [Vault connectors](/docs/privilegesecure/26.07/integrations/vaults/vault-connectors.md).
