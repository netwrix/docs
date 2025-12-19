---
title: "Services Data Collector"
description: "Services Data Collector"
sidebar_position: 330
---

# Services Data Collector

The Services Data Collector enumerates status and settings from remote services. The Services Data
Collector is a core component of Access Analyzer, but it has been preconfigured within the Windows
Solution. While the data collector is available with all Access Analyzer license options, the
Windows Solution is only available with a special Access Analyzer license. See the
[Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md) topic for additional information.

**Protocols**

- RPC
- WMI

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports

**Permissions**

- Member of the Local Administrators group

## Services Query Configuration

The Services Data Collector is configured through the Service Browser window.

![Service Browser window](/images/accessanalyzer/12.0/admin/datacollector/servicebrowser.webp)

- Host – Enter a sample host which contains all of the services desired for the query
- All Services – Select this option to build the query to extract information from all services on
  the target host
- Specific Services – Select this option to build the query to extract information from specific
  services on the target host. Select the checkboxes next to the desired services for the query
  after clicking **Connect**.
- Connect – Click **Connect** to connect to the host and display a list of all services found
- Available Properties – Select the properties to be returned

:::note
In cases where the query does not find the selected services on the target host, the
`InternalName` column that is returned reflects the `DisplayName` column and no other values are
retrieved. If the services are found on the host, the `DisplayName` value in the table is resolved.

:::
