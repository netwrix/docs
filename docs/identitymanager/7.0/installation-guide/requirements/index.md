---
title: "Prerequisites"
description: "Prerequisites for installing Netwrix Identity Manager"
sidebar_position: 20
---

# Prerequisites

Netwrix Identity Manager is available as a **SaaS** offering and an **on-premises** offering.

- **SaaS**: Netwrix hosts and operates the server. You install and manage only the agent on your infrastructure.
- **On-premises**: You install and manage the server, agent, and database on your own infrastructure.

Both deployment models require an agent installed on your premises. The following sections organize prerequisites by deployment model.

## Both SaaS and On-Premises Deployments (Agent)

### Required Knowledge

- Windows Server administration

### Hardware

Each machine hosting an agent requires at minimum:

- **CPU**: dual-core
- **RAM**: 8 GB
- **Disk**: 20 GB

### Software

| Component | Requirement |
|---|---|
| .NET Runtime | [ASP.NET Core Runtime 10.0](https://dotnet.microsoft.com/en-us/download/dotnet/10.0) (Windows hosting bundle) |
| Web browser | Chrome, Firefox, Safari, or Edge Chromium (latest 2 versions) |

### Accounts and Permissions

- **Local administrator account** on the Windows Server machine where you will install the agent
- **Agent service account** with read/write permissions on the working directory
- **Managed system service accounts**: one per target managed system, with read and/or write permissions as required by each connector

### Certificates

- **Encryption key pair**: RSA-2048 (.pfx file or Windows certificate store entry) — used for agent encryption operations

### Network

- DNS hostname assigned for the agent, resolvable within the organization's domain
- SMTP server accessible from the agent host (required for email notifications)
- Agent must be able to reach the server over HTTPS

### License

A valid Netwrix Identity Manager license key is required. License keys are available from the [Netwrix portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

---

## On-Premises Only (Server and Database)

### Additional Required Knowledge

- Internet Information Services (IIS) administration
- SQL Server administration

### Hardware

**Server machine** (minimum):

- **CPU**: dual-core (4-core recommended if SQL Server is co-located)
- **RAM**: 8 GB
- **Disk**: 20 GB

**Database machine** (minimum):

- **Disk**: scales with data volume — approximately 15 GB per 100,000 identities

:::note
SQL Server Express has a maximum database size of 10 GB. For production use, Netwrix recommends a full SQL Server edition.
:::

### Software

| Component | Requirement |
|---|---|
| SQL Server | 2016 or later |
| SQL tooling | [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms) or [`sqlcmd`](https://docs.microsoft.com/en-us/sql/ssms/scripting/sqlcmd-use-the-utility) |
| IIS | 10.0 or later (recommended for hosting the server) |

### Accounts and Permissions

- **Server service account** with:
  - `db_owner` (database-level) and `bulkadmin` (server-level) roles on the SQL Server database
  - Read/write permissions on the working directory
- Netwrix recommends a **Domain account** over IIS application pool identity when the server connects to a remote SQL Server instance
- Setup requires an account with `sysadmin` or `securityadmin` server-level role to grant the `bulkadmin` role

### Certificates

- **SSL certificate**: required for HTTPS communication between end-users and the server, and between the server and agents. All client browsers must trust it — typically a certificate signed by the organization's PKI root CA.
- **Encryption key pair**: RSA-2048 (.pfx file or Windows certificate store entry) — used for server encryption operations and identity server authentication

### Network

- SQL feed open from the server host to the SQL Server instance
- DNS hostname assigned for the server, resolvable within the organization's domain
- SMTP server accessible from the server host (required for email notifications)

---

## Component Details

Full requirements for each component:

- [Integration Device](../../installation-guide/requirements/device-requirements)
- [Database](../../installation-guide/requirements/database-requirements)
- [Server](../../installation-guide/requirements/server-requirements)
- [Agent](../../installation-guide/requirements/agent-requirements)
