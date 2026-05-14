---
title: "EPE Rest Site Requirements"
description: "EPE Rest Site Requirements"
sidebar_position: 60
---

# EPE Rest Site Requirements

The Enterprise Password Enforcer (EPE) Rest Site has the same requirements as the Netwrix Threat Manager Reporting Module. See [Reporting Module Server Requirements](/docs/threatprevention/7.5/requirements/reportingserver.md) for additional information.

The following additional component is required:

- Internet Information Services (IIS) v6 or higher

You can install the EPE Rest Site on the Netwrix Threat Manager Reporting Module server. To install
it on a different machine, first install these prerequisites:

- DotNet 4.5.2 or higher
- ASP.NET 4.5 or higher

## Database Requirements

While installing the EPE Rest Site, the installer requires an SQL Server instance to be available to
store locally hosted accounts to authenticate. The EPE Rest Site creates a database named “EpeUsers”
with ASP.NET related tables to manage such local accounts.

The EPE Rest Site database can reside on the same SQL Server instance as the Threat Prevention database, or on a separate instance (such as a local SQL Express instance) on the EPE Rest Site machine.

:::note
The installer creates the “EpeUsers” database when you create the first “internal” account, not during installation.
:::


Uninstalling the EPE Rest Site does not delete the database.
