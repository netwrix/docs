---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

This topic describes the recommended configuration of the servers needed to install the application
in a production environment. Depending on the size of the organization, Netwrix recommends that you review
your environment and requirements with a Netwrix engineer before deployment to ensure you address
all exceptions.

## Architecture Overview

The application installation requires the following servers:

**Core Component**

- Threat Manager Database Server – This is where you install the Threat Manager PostgreSQL database.
- Threat Manager Application Server – This is where you install the v3.3 application.
- Threat Manager Client – Threat Manager is a web service that you can access locally or remotely
  through a supported browser.
- Threat Manager Action Service Server – Actions automate security responses and connect various
  security applications and processes together. Threat Manager installs the Action Service on the
  application server. However, you can install it on additional servers.

See the following topics for server requirements:

- [Database Server Requirements](/docs/threatmanager/3.3/requirements/database.md)
- [Application Server Requirements](/docs/threatmanager/3.3/requirements/server.md)
- [Action Service Requirements](/docs/threatmanager/3.3/requirements/actionservice.md)
- [Client Requirements](/docs/threatmanager/3.3/requirements/client.md)
- [Ports Requirements](/docs/threatmanager/3.3/requirements/ports.md)

**Target Environment Considerations**

The target environment encompasses all servers, devices, or infrastructure that Netwrix Threat
Prevention or Netwrix Activity Monitor monitors, in addition to the data Netwrix Access Analyzer
(formerly Enterprise Auditor) collects.

- Active Directory Activity Data– Threat Manager collects Active Directory activity data through
  integration with Threat Prevention or the Activity Monitor.
- File System Activity Data – Threat Manager collects File System activity data through integration
  with Threat Prevention or the Activity Monitor.
- File System Sensitive Data – Threat Manager collects File System sensitive data through
  integration with Access Analyzer.

See the following documents for server requirements:

- [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
- [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
- [Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
