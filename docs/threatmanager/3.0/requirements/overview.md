---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of the organization, it is recommended to review
your environment and requirements with a Netwrix engineer prior to deployment to ensure all
exceptions are covered.

## Architecture Overview

The following servers are required for installation of the application:

**Core Component**

- Threat Manager Database Server – This is where the Threat Manager PostgreSQL database is
  installed.
- Threat Manager Application Server – This is where the v3.0 application is installed.
- Threat Manager Client – Threat Manager is a web service that can be accessed locally or remotely
  through a supported browser.
- Threat Manager Action Service Server – Actions automate security responses and connect various
  security applications and processes together. The Action Service is installed with Threat Manager
  on the application server. However, it can be installed on additional servers.

See the following topics for server requirements:

- [Database Server Requirements](/docs/threatmanager/3.0/requirements/database.md)
- [Application Server Requirements](/docs/threatmanager/3.0/requirements/server.md)
- [Action Service Requirements](/docs/threatmanager/3.0/requirements/actionservice.md)
- [Client Requirements](/docs/threatmanager/3.0/requirements/client.md)
- [Ports Requirements](/docs/threatmanager/3.0/requirements/ports.md)

**Target Environment Considerations**

The target environment encompasses all servers, devices, or infrastructure being monitored by
Netwrix Threat Prevention or Netwrix Activity Monitor in addition to data collected by Netwrix
Access Analyzer (formerly Enterprise Auditor).

- Active Directory Activity Data– Active Directory activity data is collected through integration
  with Threat Prevention or the Activity Monitor.
- File System Activity Data – File System activity data is collected through integration with Threat
  Prevention or the Activity Monitor.
- File System Sensitive Data – File System sensitive data is collected through integration with
  Access Analyzer.

See the following documents for server requirements:

- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
- [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
