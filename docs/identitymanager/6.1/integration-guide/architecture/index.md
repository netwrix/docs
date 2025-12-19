---
title: "Architecture"
description: "Architecture"
sidebar_position: 220
---

# Architecture

This article dives deeper into Usercube's design principles. Security and flexibility are the main
concerns of the architecture.

## A Two-Tier Architecture

Usercube is made of two parts:

- The Usercube server operates the main process. It uses a dedicated database, serves the client
  side part of the web application and exposes its API.
- The Usercube agent operates data exchange with the information system. It implements a specific
  API called by the web client application.

Agent and server are [ASP.Net](https://docs.microsoft.com/en-us/aspnet/core/) applications running
on Windows. Usercube's database is a
[Microsoft SQLServer](https://www.microsoft.com/en-us/sql-server) relational database.

![Architecture](/images/identitymanager/6.1/integration-guide/architecture/architecture.webp)

[See more details on NETWRIX' recommended architecture when working in a SaaS environment](/docs/identitymanager/6.1/integration-guide/architecture/saas/index.md).

[See more details on NETWRIX' recommended architecture when working in an on-premises environment.](/docs/identitymanager/6.1/integration-guide/architecture/on-prem/index.md)

[See how to protect the communication between agent and server](/docs/identitymanager/6.1/integration-guide/architecture/how-tos/protect-agent-server-communication/index.md).

## Isolation Principle

Usercube server has no direct access to the information system of the organization. It can be
installed on an isolated network (typically in the cloud). Only the agent can read or write the
information system. All exchanges between agent and server are operated through the HTTP protocol
(HTTPS recommended in production).

## Unidirectional Command Flow

All reading or writing actions in the information system are initiated by the agent. Usercube server
will never call the agent. The Agent periodically polls the server to gather the actions to process.

Tasks can run on the Server side or on the Agent side.

Tasks that run on the Server side are still executed by an _Agent_. This is the application of the
one-way data flow principle. _Agents_ can send _commands_ to the _Server_ to execute a Task through
an HTTP request but the _Server_ cannot _command_ an Agent, hence isolating the sensitive _Agents_
from the exposed _Server_.

As a result, each set of planned Tasks is assigned to a specific Agent, depending on the managed
systems its Tasks relate to.

_Agents_ also receive HTTP/HTTPS requests from the browser to allow authenticated end-users to
launch jobs from the UI.

## Authentication

Usercube can authenticate users within an Active Directory domain or using an OpenID identity
server. For development mode, Usercube implements a form-based authentication using a unique
password for all users (see
[Server settings](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md)).

## Multi-Agent Capability

Multiple agents can be installed. This allows Usercube to operate in a context where the information
system is partitioned over several networks.
