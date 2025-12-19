---
title: "EPE Rest Site Requirements"
description: "EPE Rest Site Requirements"
sidebar_position: 60
---

# EPE Rest Site Requirements

Requirements for the EPE Rest Site are the same as documented for the Netwrix Threat Manager
Reporting Module. See the
[Reporting Module Server Requirements](/docs/threatprevention/7.4/requirements/reportingserver.md)
topic for additional information.

The following additional component is required:

- Internet Information Services (IIS) v6 or higher

You can install the EPE Rest Site on the Netwrix Threat Manager Reporting Module server. To install
it on a different machine, make sure the following is installed as a prerequisite:

- DotNet 4.5.2 or higher
- ASP.NET 4.5 or higher

## Database Requirements

While installing the EPE Rest Site, the installer requires an SQL Server instance to be available to
store locally hosted accounts to authenticate. The EPE Rest Site creates a database named “EpeUsers”
with ASP.NET related tables to manage such local accounts.

The EPE Rest Site database can reside on the same instance of the SQL Server as the Threat
Prevention database or a separate instance (such as a free instance of SQL Express) that can be
installed locally on the machine where the EPE Rest Site is installed.

:::note
The “EpeUsers” database is not created during the installation, but when you create the
first “internal” account.
:::


The database is not deleted when you uninstall the EPE Rest Site.
