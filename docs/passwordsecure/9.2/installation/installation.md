---
title: "Installation"
description: "Installation"
sidebar_position: 20
---

# Installation

This section covers installing each Netwrix Password Secure component.

## System landscape

Netwrix Password Secure 9 supports multiple database servers across sites, synchronized using
Microsoft SQL Server tools. You can deploy any number of application servers for client connections,
ensuring load distribution and low-latency access. This architecture provides significant performance
advantages for installations spread across worldwide locations.

## Client (presentation layer)

The client layer renders all data and functions delivered by the application server.

## Application server (business logic)

The application server controls all business logic and delivers only the data for which the
corresponding permissions exist. The multi-tier architecture supports multiple application servers
for efficient load distribution.

## Database server (data storage)

Netwrix Password Secure uses Microsoft SQL Server (MSSQL) to store data. MSSQL provides
high-performance access even in large, geographically distributed environments. Smaller
installations can use the free SQL Server Express edition.

## Recommended server configuration

Netwrix recommends at least three servers:

- Database server (MSSQL)
- Application server (Netwrix Password Secure services)
- Web server (IIS, NginX, or Apache 2)

:::warning
For production databases, use a fail-safe cluster. Microsoft SQL Server can replicate data to a
different data center — for example, via WAN. Also dedicate a separate Windows server to each role. Separating roles makes it easier to expand and scale the system later. For smaller
installations or test environments, you can install all components on a single server.
:::

### Firewall rules and ports

#### MSSQL Server

- Port 1433 TCP — incoming communication from the application server

#### Application server

- Port 443 HTTPS — outgoing connection to the Netwrix Password Secure license server
- Port 11011 TCP — incoming connections from clients or the IIS web server
- Port 11014 TCP — backup service (typically doesn't need to be opened)
- Port 11016 TCP — incoming web services (required only when using the Web Application)
- Port 11018 TCP — incoming real-time updates
- Port 1433 TCP — outgoing communication to SQL Server

#### Web server (Web Application)

- Port 443 HTTPS — incoming access from clients
- Port 11016 — outgoing communication to the application server
- Port 11018 — outgoing real-time updates

#### Client

- Port 11011 TCP — outgoing communication to the application server
- Port 11018 TCP — outgoing
- Port 52120 TCP — outgoing communication with the add-on
