# Architecture

Usercube is built to work via a specific architecture made of a server, an agent and a database.

## Server, Agent and Database

Usercube works via:

- a server which operates computation, stores all applicative data in the database, and serves a web
  User Interface;
- at least one agent which operates data flows to/from the managed systems.

    The managed systems' credentials are used only by the agent and are never disclosed to the
    server.

The agent can call the server, but the server cannot call the agent. The data flows' initiatives are
always from the agent.

## Installation Types

Usercube can be installed:

- SaaS so that the server dwells in the cloud and is provided as a service;

    ![Architecture: SaaS](/img/versioned_docs/usercube_6.1/usercube/integration-guide/architecture/saas/architecture_saas.png)

- on-premises so that the server is installed on an isolated network within the company.

    ![Architecture: On-Premises](/img/versioned_docs/usercube_6.1/usercube/integration-guide/architecture/on-prem/architecture_onprem.png)

## Next Steps

Let's learn about
[Usercube's configuration](/versioned_docs/usercube_6.1/usercube/introduction-guide/configuration/index.md).

## Learn More

[Learn more on Usercube's architecture](/versioned_docs/usercube_6.1/usercube/integration-guide/architecture/index.md).

[Learn more on network configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/index.md).
