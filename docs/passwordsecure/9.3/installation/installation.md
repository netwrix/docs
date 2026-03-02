---
title: "Installation"
description: "Installation"
sidebar_position: 20
---

# Installation

This section covers how to install each Netwrix Password Secure component.

## System landscape

A basic production Netwrix Password Secure system landscape consists of the three tiers described below. Version 9 supports multiple database servers across all sites, synchronized using Microsoft SQL Server tools. You can deploy any number of application servers to handle client connections, which distributes load and reduces latency. This is especially valuable for installations spread across multiple geographic locations.

## Client (presentation layer)

The client layer handles the presentation of all data and functions that the application server provides.

## Application server (business logic)

The application server controls all business logic and only delivers data for which the corresponding permissions exist. The multi-tier architecture supports multiple application servers, ensuring efficient load distribution.

## Database server (data storage)

Netwrix Password Secure uses Microsoft SQL Server for data storage, which provides high-performance access in large and geographically distributed environments. Smaller installations can use the free SQL Express edition.

## Recommended server configuration

A minimum of three servers is recommended:

- Database server (MSSQL)
- Application server (Netwrix Password Secure services)
- Web server (IIS, NginX, Apache 2)

:::warning
For production systems, use a fail-safe database cluster. Microsoft SQL Server can replicate data to a different data center, for example via WAN. Netwrix also recommends a dedicated Windows Server for each role — separating roles makes it easier to expand and scale the environment later. For smaller installations or test environments, you can install all components on a single server.
:::

## Firewall rules and ports

### MSSQL Server

- Port 1433 TCP for communication with the application server (incoming)

### Application server

- Port 443 HTTPS for connection to the Netwrix Password Secure license server (outgoing)
- Port 11011 TCP for communication with clients or the IIS web server (incoming)
- Port 11014 TCP for the backup service (usually doesn't need to be opened)
- Port 11016 TCP for web services (incoming; only required when using the Web Application)
- Port 11018 TCP for real-time updates (incoming)
- Port 1433 TCP for communication with SQL Server (outgoing)

### Web server (Web Application)

- Port 443 HTTPS to access the web server from the client (incoming)
- Port 11016 for communication with the application server (outgoing)
- Port 11018 for real-time updates (outgoing)

### Client

- Port 11011 TCP for communication with the application server (outgoing)
- Port 11018 TCP (outgoing)
- Port 52120 TCP with the add-on (outgoing)
