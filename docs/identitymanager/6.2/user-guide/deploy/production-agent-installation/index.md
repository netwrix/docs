---
title: "Install the Production Agent"
description: "Install the Production Agent"
sidebar_position: 20
---

# Install the Production Agent

This guide shows how to install an agent separated from the server, for production environment. See
the [Architecture](/docs/identitymanager/6.2/introduction-guide/architecture/index.md)topic for additional
information.

## Overview

Like all agents, the production agent aims to extract data from a given managed system, and transmit
said data to the Identity Manager server. If necessary, the agent also enables the managed system's
provisioning according to the orders computed by the Identity Manager server. See the
[Architecture](/docs/identitymanager/6.2/introduction-guide/architecture/index.md) topic for additional
information.

Identity Manager solution can use several agents, each of them manages a given system. This section
is about installing the agent managing the production environment.

Once agents are configured in addition to the default one provided by SaaS, you need to think about
what agent to choose during each
[Create the Connector](/docs/identitymanager/6.2/user-guide/set-up/connect-system/connector-declaration/index.md)declaration. The
appropriate agent has access to the managed system.

## Requirements

Ensure that all
[Agent](/docs/identitymanager/6.2/installation-guide/requirements/agent-requirements/index.md)requirements can be
met before starting the installation of the production agent.

Requirements for the agent installation can change over the course of the project, according to the
project purpose.

### Encryption certificates

Ensure that your encryption certificates are valid by checking their: expiration date; signatory;
key size exceeding 2048; sha256 and not sha-1.

### Server Manager

Ensure that the device used for the installation has the Server Manager program.

## Participants and Artifacts

Integrators should have all the elements they need to operate.

| Input                                                                                                    | Output           |
| -------------------------------------------------------------------------------------------------------- | ---------------- |
| [Agent](/docs/identitymanager/6.2/installation-guide/requirements/agent-requirements/index.md) prerequisites (required) | Production agent |

## Install the Production Agent

Install the production agent by proceeding as follows:

1. [Create a Working Directory](/docs/identitymanager/6.2/installation-guide/production-ready/working-directory/index.md)
   and make sure it contains the folders: `Mails`; `Sources`; `Temp`; `Work`.
2. [Configure the Agent's Settings](/docs/identitymanager/6.2/user-guide/deploy/production-agent-installation/settings-files/index.md) via the `web.config`,
   `appsettings.json` and `appsettings.agent.json` files.
3. Configure the local server to [Install IIS via Server Manager](/docs/identitymanager/6.2/user-guide/deploy/production-agent-installation/iis-installation/index.md).
4. [Configure the Pool and Site](/docs/identitymanager/6.2/user-guide/deploy/production-agent-installation/iis-configuration/index.md) via IIS.
5. [Set the Working Directory's Permissions](/docs/identitymanager/6.2/user-guide/deploy/production-agent-installation/directory-permissions/index.md).
6. [Finalize the Installation](/docs/identitymanager/6.2/user-guide/deploy/production-agent-installation/finalization/index.md).

## Verify Agent Installation

In order to verify the process:

- make sure the website is accessible from IIS by clicking on **Browse** (in the menu on the right),
  and from your browser;
- if logs are enabled, then stop the pool to make sure that no error is thrown;
- perform from a local device agent-side actions such as sending test emails, reading and/or writing
  inside working folders, or launching/scheduling agent-side tasks.
