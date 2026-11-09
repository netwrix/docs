---
title: "Architecture and components"
description: "Find the Privilege Secure components, their default ports, and how the single-server, distributed, and high availability topologies connect them."
sidebar_position: 30
---

# Architecture and components

Privilege Secure has a central web service, a database, and a set of services that run actions, record sessions, and send notifications. You can install every component on one server or spread them across several. The Remote Access Gateway is an optional add-on for external users.

For the complete port list, see [Ports](/docs/privilegesecure/26.07/requirements/ports.md). The ports on this page summarize the connections that the diagrams show.

## Components

| Component | Role | Default port |
| --- | --- | --- |
| Web service | Hosts the Privilege Secure Console and the REST API in Microsoft Internet Information Services (IIS). It reads and writes the database and communicates with each service. | TCP 6500 (HTTPS) |
| License service | Stores the license and reports the license state to the web service. It listens on the local host. | TCP 6501 |
| Action service | Connects to managed resources and runs the actions that activities define, such as Active Directory sync, password changes, and account orchestration. You can run several Action services. | Outgoing connections vary by action |
| Host Scan service | Scans resources for accounts, services, scheduled tasks, and other data. | Outgoing connections vary by scan |
| Scheduler service | Runs scheduled work such as password changes and scans. | Not applicable |
| Email service | Sends notifications through an external Simple Mail Transfer Protocol (SMTP) server. It supports authenticated and unauthenticated connections and TLS. | Not applicable |
| SIEM service | Processes events and forwards them to a configured Security Information and Event Management (SIEM) system. It has built-in Common Event Format (CEF) and Log Event Extended Format (LEEF) templates. | Not applicable |
| Message bus (NATS) | Carries messages between the web service and the services on the same server. The Proxy service hosts it, and the other services connect to it on the local host. | TCP 6521 (local, TLS) |
| Proxy service | Connects users to resources over Remote Desktop Protocol (RDP) and Secure Shell (SSH) and stores session recordings. You can run several proxies for load balancing and redundancy. | TCP 4489 (RDP), TCP 4422 (SSH), and TCP 6522 (connection broker) |
| Service mesh | Joins Proxy services into one message mesh. The Proxy service on a service node registers with the application server's proxy and joins as a leaf node. Application servers that you mesh route to each other. | TCP 6520 to register, TCP 6523 for leaf nodes, and TCP 6524 for cluster nodes |
| Remote Desktop Monitor service | Runs on target Windows hosts and sends the window and menu activity of an RDP session to the recording. | Not applicable |
| Database | Stores configuration, sessions, and credentials. PostgreSQL 16 or Microsoft SQL Server. | See [Database requirements](/docs/privilegesecure/26.07/requirements/database.md) |

The Proxy service connects to resources on TCP 3389 (RDP) and TCP 22 (SSH). The Action service uses PowerShell remoting over Windows Remote Management (WinRM) on TCP 5985 or 5986, or SSH on TCP 22. It also connects to Active Directory on several ports. The connection broker in the Proxy service listens on TCP 6522 on all network interfaces by default. It carries TLS-encrypted calls between Proxy service instances.

:::note
Open the console at `https://<nps-server>:6500`. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md) for where this port is set.
:::

## Data flow

![Session data flow. 1: a browser connects to the web service on 6500, which hands work to the Action service over the local message bus. 2 and 4: the Action service connects to the target over WinRM 5985 or 5986, SSH 22, or 443. 3: an RDP or SSH client connects to the proxy on 4489 or 4422, and the proxy connects to the target on 3389 or 22.](/images/privilegesecure/26.07/getting-started/architecture-network-data-flow.webp)

1. A user opens the console on the web service at TCP 6500.
2. The user starts a session. The web service hands the work to the Action service through the message bus. The Action service runs the pre-session actions on the resource over WinRM (TCP 5985 or 5986), SSH (TCP 22), or, for PAN-OS, the API on TCP 443.
3. The user connects to the Proxy service on TCP 4489 (RDP) or TCP 4422 (SSH). The proxy connects to the resource on TCP 3389 or TCP 22 and records the session.
4. When the session ends, the Action service runs the post-session actions.

## Remote Access Gateway components

The Remote Access Gateway lets external users start browser-based RDP and SSH sessions without direct access to the console. It is an add-on with its own installers. The components are:

| Component | Where it runs | Default port |
| --- | --- | --- |
| Portal | In the DMZ. It runs on nginx as the **NPS Rag Portal** Windows service and is the entry point for external users. | TCP 443, with TCP 80 redirecting to HTTPS |
| Gateway | Inside the network, on a Windows server that also runs guacd. It is an IIS site that passes a fixed set of requests from the Portal to the console. | TCP 6550 |
| guacd | On the Gateway host under Windows Subsystem for Linux 2 (WSL 2). It is the Apache Guacamole 1.6.0 daemon and runs in Docker. | TCP 4822 |

A browser session follows this path:

1. The browser connects to the Portal on TCP 443.
2. The Portal passes requests to the Gateway on TCP 6550.
3. The Gateway calls the web service on TCP 6500 and opens a tunnel to guacd on TCP 4822.
4. guacd connects to the Proxy service on TCP 4489 (RDP) or TCP 4422 (SSH), from the Gateway server's address. The proxy connects to the resource, so recording and command restrictions still apply.

![Remote Access Gateway. A browser connects to the portal in the DMZ on 443. The portal connects to the gateway on 6550. The gateway calls the web service on 6500 and connects to guacd, in Docker under WSL 2 on the gateway server, on 4822. guacd connects to the proxy on 4489 or 4422 from the gateway server's address, and the proxy connects to the target.](/images/privilegesecure/26.07/getting-started/remote-access-gateway-data-path.webp)

See [Remote Access Gateway overview](/docs/privilegesecure/26.07/remote-access-gateway/overview.md).

## Deployment topologies

### Single server

All components install on one Windows server. This topology suits a proof of concept or a test.

![Single server. One Windows server runs the web service, database, license service, Proxy service with its message bus, and the Action, Host Scan, Scheduler, Email, and SIEM services. Users connect on 6500, 4489, and 4422. The server connects to targets, domain controllers, Microsoft Entra ID, and your SMTP and SIEM servers.](/images/privilegesecure/26.07/getting-started/single-server-deployment.webp)

### Server with remote services

The Proxy and Action services use resources in proportion to load. Install them on additional hosts for scalability, redundancy, or network segmentation. You can then disable the services on the application server. On a service node, the Proxy service registers with the application server's proxy on TCP 6520 and joins its message bus on TCP 6523. The node's Proxy and Action services call the web service on TCP 6500. Proxies relay sessions and API calls to each other on TCP 6522.

![Server with remote services. A service node's proxy connects to the application server's proxy on 6520 and 6523. The node's proxy and Action service call the web service on 6500, and proxies reach each other on 6522. RDP and SSH clients connect to the node's proxy, which connects to targets, as does the Action service.](/images/privilegesecure/26.07/getting-started/distributed-deployment-remote-services.webp)

See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md) and [Install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md). A remote Proxy service installs from a Windows installer and supports Windows Server 2016 through 2025, the same versions as the application server.

### Active-passive database

Two identical servers run all components. The databases replicate from the primary to the standby. When the primary is unavailable, an administrator starts the failover manually. See [High availability options](/docs/privilegesecure/26.07/install/high-availability.md). This topology requires PostgreSQL and works with the bundled database. It is the simplest high-availability option. The high availability (HA) manager runs on both servers, and the standby database connects to the primary on the PostgreSQL port. After a failover, re-register the services and send users to the new primary.

![Active-passive. A primary and a standby server each run all components, PostgreSQL, and the HA manager. Users connect to the primary on 6500. The standby database connects to the primary database on 5432 or 5437 and copies its changes. The servers reach each other on 6500. An administrator starts failover in the HA manager on the standby.](/images/privilegesecure/26.07/getting-started/active-passive-database-deployment.webp)

### Active-active database

Several application servers share one database. Failover needs no manual step. This topology works with PostgreSQL and SQL Server. Setup is more complex, and you need an additional server for the database. If you mesh the application servers, their Proxy services connect to each other on TCP 6520, 6522, and 6524. See [How to create a service mesh between app servers](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-create-a-service-mesh-between-app-servers.md).

![Active-active. A browser connects to either of two application servers on 6500. Both connect to one shared PostgreSQL or SQL Server database on a separate server, on 5432 or 1433. When you mesh the servers, their Proxy services connect to each other on 6520, 6522, and 6524.](/images/privilegesecure/26.07/getting-started/active-active-database-deployment.webp)

### Cloud database

A customer-provided cloud database provides built-in high availability and automatic scaling, which suits an active-active deployment. Privilege Secure connects to your PostgreSQL or SQL Server database with standard connection strings. See [Database requirements](/docs/privilegesecure/26.07/requirements/database.md) for the engines and versions.

![Cloud database. A browser connects to either of two application servers on 6500. Both connect out to a PostgreSQL or SQL Server database that you run with a cloud provider, on 5432, 1433, or the provider's port. When you mesh the servers, they connect to each other on 6520, 6522, and 6524.](/images/privilegesecure/26.07/getting-started/cloud-database-deployment.webp)

For setup details, see [High availability options](/docs/privilegesecure/26.07/install/high-availability.md).

### Vault integrations

Activities can use credentials from other vaults and from Microsoft Local Administrator Password Solution (LAPS). The diagrams and setup are in [Vault connectors](/docs/privilegesecure/26.07/integrations/vaults/vault-connectors.md).
