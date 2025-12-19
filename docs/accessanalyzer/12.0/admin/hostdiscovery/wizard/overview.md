---
title: "Host Discovery Wizard"
description: "Host Discovery Wizard"
sidebar_position: 30
---

# Host Discovery Wizard

The Host Discovery Wizard gives complete control over how hosts are discovered on the targeted
network and which hosts are discovered.

![Console with Create Query Option Highlighted](/images/accessanalyzer/12.0/admin/hostdiscovery/wizard/createqueryhighlighted.webp)

Use the Host Discovery Wizard to create new queries. The wizard opens in the Results pane. Use any
of the following methods in order to access the Host Discovery Wizard from the Host Discovery node:

- Select **Create Query** in the Activities pane
- Right-click the **Host Discovery** node and select **Create Query** from the pop-up menu
- Right-click anywhere in the Host Discovery Queries table and select **Create Query** from the
  pop-up menu

![Host Discovery Wizard](/images/accessanalyzer/12.0/admin/hostdiscovery/wizard/hostdiscoverywizard.webp)

The first step in creating a Host Discovery query is to select the source where the query searches
for hosts. Hosts are discoverable using one of the following options:

- [Scan IP Network](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/ipnetwork.md) – Scans a specified range of IP Addresses for active hosts and
  resolves the names of machines using DNS
- [Query an Active Directory Server (General)](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/adgeneral.md) – Scans the default domain controller
  or a specified server for all computer objects, can be scoped
- [Query an Active Directory Server (Discover Exchange servers)](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/adexchange.md) – Scans the default
  domain controller or a specified server but is scoped to return only computer objects sitting in
  the configuration container for Exchange servers
- [Query an Active Directory server (Discover Domain Controllers)](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/addomaincontrollers.md) – Scans
  the default domain controller or a specified server but is scoped to return only machines which
  are domain controllers
- [Import From a Local CSV File](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/csv.md) – Imports a host list from a specified CSV file
- [Import From a Database](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/database.md) – Imports a host list from a specified SQL Server database

:::note
The Advanced Options checkbox in the lower-left corner is a legacy item and should not be
selected.

:::
