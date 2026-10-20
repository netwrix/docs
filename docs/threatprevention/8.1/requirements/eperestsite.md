---
title: "EPE Rest Site Requirements"
description: "EPE Rest Site Requirements"
sidebar_position: 60
---

# EPE Rest Site Requirements

Requirements for the EPE Rest Site are the same as documented for the Netwrix Threat Manager
Reporting Module. See the [Reporting Module Server Requirements](/docs/threatprevention/8.1/requirements/reportingserver.md) topic for
additional information.

You need the following additional component:

- Internet Information Services (IIS) v6 or higher

You can install the EPE Rest Site on the Netwrix Threat Manager Reporting Module server. To install
it on a different machine, ensure the machine has the following as a prerequisite:

- DotNet 4.5.2 or higher
- ASP.NET 4.5 or higher

## Database Requirements

While you install the EPE Rest Site, the installer requires an available SQL Server instance to
store locally hosted accounts to authenticate. The EPE Rest Site creates a database named “EpeUsers”
with ASP.NET related tables to manage such local accounts.

The EPE Rest Site database can reside on the same instance of the SQL Server as the Threat
Prevention database or a separate instance (such as a free instance of SQL Express) that you can
install locally on the machine where you install the EPE Rest Site.

:::note
The EPE Rest Site creates the “EpeUsers” database when you create the first “internal”
account rather than during the installation.
:::


Uninstalling the EPE Rest Site doesn't delete the database.
