---
title: "Production-Ready Installation"
description: "Production-Ready Installation"
sidebar_position: 40
---

# Production-Ready Installation

This guide leads the reader through the steps to install Usercube for production purposes.

**1.__**Before proceeding__, you should go through the
[Overview](/docs/identitymanager/6.1/installation-guide/overview/index.md) and
[Requirements](/docs/identitymanager/6.1/installation-guide/requirements/index.md)
sections to make fundamental decisions about Usercube setup, including:

- Whether to install the database within the Usercube Server or on a separated workstation.
- How many Agents will be installed?
- If only one Agent is installed, whether to install it as an integrated agent or a separate agent.
- What end-user authentication methods are to be used?
- What hosting environment is used for the Agent and the Server?

**2.** You should **get the following archives ready**:

- Usercube runtime: `runtime_<version>.zip`
- Usercube database scheme: `Usercube.sql` from the `SQL_<version>.zip`

**3.** This guide is **based on the following choices**:

- Usercube Server running with IIS
- Usercube Database connection with Windows authentication

This guide will allow you to **extrapolate** less common configurations and will provide links to
the relevant
[Technical Configuration](/docs/identitymanager/6.1/integration-guide/network-configuration/index.md)
sections.

Our examples use the fabled
[Contoso Corporation](https://docs.microsoft.com/en-us/microsoft-365/enterprise/contoso-overview?view=o365-worldwide)
as target organization.

## What's Next?

The first step consists in creating a
[Working Directory](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md).
