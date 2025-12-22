---
title: "Overview"
description: "Overview"
sidebar_position: 10
---

# Overview

This section will give you an overview of Usercube's components, their requirements and constraints,
and possible interconnection schemes. At the end of this section, you should be able to choose the
installation setup that fits best your organization's needs.

## Usercube Components and Data Flow

![Components & Data Flow](/images/identitymanager/6.1/installation-guide/overview/components_data_flow.webp)

### Components

Usercube's solution includes at least three components.

#### **1.** Usercube server

One server handles all of Usercube's computing needs, internal database management and serves the UI
as a web application accessible through a browser.

The SaaS offering hosts the Usercube Server in the **Cloud**. This means that the server needs not
be installed within a Usercube SaaS installation.

#### **2.** Usercube database

One database stores Usercube's data.

With the SaaS offering, the Usercube Database is hosted in the **Cloud** and needs not be installed.

The port used to access the database depends on the
[database configuration](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/server-network-configuration?view=sql-server-ver15#database-configuration)
and the
[connectionString](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-8.0)
set in the
[technical configuration](/docs/identitymanager/6.1/integration-guide/network-configuration/index.md).

#### **3.** Usercube agents

One or several agents perform synchronization and provisioning to/from the managed systems.

### Data flow

Usercube needs the following data flows to be enabled:

- The **Server** requires opening connections to the **Database**.
- The **Agents** require opening HTTPS connections to the **Server**.
- The **Agents** require accessing **managed systems**.
- All end-users' **browsers** require opening HTTPS connections to the **Server**.
- All end-users' **browsers** require accessing the
  [authentication providers](/docs/identitymanager/6.1/installation-guide/production-ready/server/index.md#set-up-end-user-authentication).
- Some end-users' **browsers** require opening HTTPS connections to the **Agents**.

    These connections are used to launch `Jobs` or use the `Reset Password` capabilities of some
    connectors. This requirement only applies to a few specific **administrator type profiles**.

- The **Server** and the **Agent** both need to access an **SMTP server** to send
  [email notifications](/docs/identitymanager/6.1/installation-guide/production-ready/email-server/index.md).

## SaaS vs. On-Premise

Usercube comes in two flavors: SaaS and On-Premise.

- The **SaaS** offering only requires the
  [Agent](/docs/identitymanager/6.1/installation-guide/production-ready/agent/index.md)
  to be installed on your organization network.
- The **On-Premise** offering requires the
  [Agent](/docs/identitymanager/6.1/installation-guide/production-ready/agent/index.md),
  the
  [Server](/docs/identitymanager/6.1/installation-guide/production-ready/server/index.md),
  and the
  [Database](/docs/identitymanager/6.1/installation-guide/production-ready/database/index.md)
  to be installed.

## Hosting Hardware

Depending on the existing network infrastructure and constraints, Usercube's components can be
organized in several ways.

### Database & servers

The Usercube Database can be installed on the same workstation as the Usercube Server or run on a
separate machine. The second approach is recommended.

### Server & agents

The
[Usercube Server](/docs/identitymanager/6.1/installation-guide/production-ready/server/index.md)
and
[Agents](/docs/identitymanager/6.1/installation-guide/production-ready/agent/index.md)
can be spread between several workstations. Two scenarios unfold:

#### **1.** The server and agents are installed on separate workstations

This approach is useful when managed systems need to run on separate and isolated networks.

![Server & Agents isolated](/images/identitymanager/6.1/installation-guide/overview/distribution_1.webp)

#### **2.** The Server and one Agent are installed on the same workstation

In that case, the Usercube Agent can run directly within the Usercube Server process. The hosting
workstation would **only host a Usercube Server process** (with the integrated agent) and no
separate agent needs to be installed. The database could be installed on the same workstation or on
a separate one.

![Server & Agent together](/images/identitymanager/6.1/installation-guide/overview/distribution_2.webp)

## Authentication

End-users will be able to access Usercube after authentication. Several
[authentication methods](/docs/identitymanager/6.1/installation-guide/production-ready/server/index.md#set-up-end-user-authentication)
are available.

## Email Server

Usercube sends notifications to users by email. An
[email server](/docs/identitymanager/6.1/installation-guide/production-ready/email-server/index.md)
will have to be set up for the Agent and the Server.

Before you check out the installation steps, make sure that all the
[requirements](/docs/identitymanager/6.1/installation-guide/requirements/index.md) are
met.
