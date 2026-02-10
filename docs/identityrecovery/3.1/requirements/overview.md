---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install Identity Recovery
in a production environment.

:::info
Review your environment and requirements with a Netwrix support engineer prior to
deployment to ensure all exceptions are covered.
:::


## Architecture Overview

The following servers are required for installation of the application:

Core Component

- Netwrix Identity Recovery Application Server – This is where the application is installed
- SQL Server for Identity Recovery Database – As a data-intensive application, a well-provisioned, dedicated SQL Server is recommended
- RSAT Extension – Active Directory Users and Computers extension enabling Identity Recovery features from within Microsoft management utilities

See the following topics for server requirements:

- [Application Server Requirements](/docs/identityrecovery/3.1/requirements/server.md)
- [SQL Server Requirements](/docs/identityrecovery/3.1/requirements/sqlserver.md)
- [RSAT Extension Requirements](/docs/identityrecovery/3.1/requirements/rsatextension.md)

Target Domain Considerations

The target domains include the Active Directory domains that can be added through the
[Domains Page](/docs/identityrecovery/3.1/admin/configuration/domain.md). See the following topic for target domain considerations:

- [Target Domains](/docs/identityrecovery/3.1/requirements/targetdomain.md)

Target Server Considerations

Target servers include the servers and environments where you want to restore a domain controller or
an entire forest. See the following topic for target server requirements:

- [Target Server Considerations](/docs/identityrecovery/3.1/requirements/targetserver.md)
