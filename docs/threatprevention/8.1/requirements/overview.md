---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install the Threat
Prevention application in a production environment. Depending on the size of the organization, you
must review your environment and requirements with a Netwrix engineer before deployment to ensure
all exceptions are covered.

## Architecture Overview

You need the following servers to install the application:

**Core Component**

- Threat Prevention Application Server – You install the following v8.1 application components
  here:

  - Enterprise Manager
  - Administration Console

- Agents – You deploy the Agents in the target environment to monitor and/or block activity
- Netwrix Threat Manager Reporting Module Server – You install the Reporting Console here. It can
  be on the same server as the Threat Prevention server, but that server must have resources
  sufficient for both applications.
- SQL Server for the Threat Prevention Database – Because Threat Prevention is a data-intensive
  application, Netwrix recommends a well-provisioned, dedicated SQL Server. The SQL Server should be
  on a separate server from the Threat Prevention server.

See the following topics for additional information:

- [Application Server Requirements](/docs/threatprevention/8.1/requirements/application.md)
- [SQL Server Requirements](/docs/threatprevention/8.1/requirements/sqlserver/sqlserver.md)
- [Agent Server Requirements](/docs/threatprevention/8.1/requirements/agent/agent.md)
- [Reporting Module Server Requirements](/docs/threatprevention/8.1/requirements/reportingserver.md)

**Optional Components**

- Remote Administration Console Instances – You can deploy the Administration Console remotely on
  additional machines. As a prerequisite, the Threat Prevention server must already be provisioned.
- EPE Rest Site – This is an optional web server that third parties can use to integrate with the
  Threat Prevention Enterprise Password Enforcer (EPE) solution. It allows third-party applications
  to submit a candidate password to check whether it complies with the current EPE rules defined on
  the [EPE Settings Window](/docs/threatprevention/8.1/admin/configuration/epesettings.md).

  :::note
  This interface doesn't change the password; it only validates it against the EPE
  rules.
  :::


See the following topics for additional information:

- [Remote Administration Console Requirements](/docs/threatprevention/8.1/requirements/adminconsole.md)
- [EPE Rest Site Requirements](/docs/threatprevention/8.1/requirements/eperestsite.md)

**Target Environment Considerations**

The target environment encompasses all servers, devices, or infrastructure that Threat Prevention
monitors and/or protects:

- Active Directory – Deploy an Agent to all domain controllers
- Exchange – Deploy an Agent to all HUB, CAS, and Mailbox Exchange servers and one domain controller
- File System:

  - Windows – Deploy an Agent to all file servers containing objects that require protection
  - Network Attached Storage (NAS) Devices – This requires integration with Netwrix Activity
    Monitor. Deploy an Agent to the proxy server where you deployed the Netwrix Activity Monitor
    Activity Agent. See the
    [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
    for installation requirements and information on collecting activity data.
