---
title: "Architecture"
description: "Architecture"
sidebar_position: 20
---

# Architecture

Identity Manager is built to work via a specific architecture made of a server, an agent and a
database.

## Server, Agent and Database

Identity Manager works via:

- a server which operates computation, stores all applicative data in the database, and serves a web
  User Interface;
- at least one agent which operates data flows to/from the managed systems.

    The managed systems' credentials are used only by the agent and are never disclosed to the
    server.

The agent can call the server, but the server cannot call the agent. The data flows' initiatives are
always from the agent.

## Installation Types

Identity Manager can be installed:

- SaaS so that the server dwells in the cloud and is provided as a service;

    ![Architecture: SaaS](/images/identitymanager/saas/integration-guide/architecture/saas/architecture_saas.webp)

- on-premises so that the server is installed on an isolated network within the company.

    ![Architecture: On-Premises](/images/identitymanager/saas/integration-guide/architecture/on-prem/architecture_onprem.webp)

## Next Steps

Let's learn about Identity Manager [Configuration](/docs/identitymanager/6.2/introduction-guide/configuration/index.md).

## Learn More

Learn more on Identity Manager's Architecture .

See the [Network Configuration](/docs/identitymanager/6.2/integration-guide/network-configuration/index.md) topic for
additional information.
