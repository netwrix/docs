---
title: "MSSQL Server"
description: "MSSQL Server"
sidebar_position: 20
---

# MSSQL Server

## Required Version

:::tip
RECOMMENDED: Using MSSQL Server Express can lead to significant performance issues because of the various limitations. Netwrix recommends MSSQL Server Standard as a minimum.
:::

Follow Microsoft recommendations for system requirements for SQL Server.

| Attribute             | Minimum | Recommended |
| --------------------- | ------- | ----------- |
| MS SQL Server Version | 2019    | 2022        |

:::warning
**CAUTION:** If you plan to install the MS SQL Server on the machine with the Netwrix Password Secure application server, make sure the machine meets the combined minimum requirements for both systems.
:::

## Required Configuration

1. Service User: dbCreator (only required if Netwrix Password Secure creates the databases
   (recommended)), dbOwner  
   **a**. (Optional) Sysadmin (only when using the Netwrix Password Secure Backup Service)
2. Collation: Latin1_General_CI_AS (if the MS SQL Server uses a different collation, create the
   database manually with the right collation and then link it to Netwrix Password Secure)
3. Port/firewall rule: Port 1433 TCP for communication with application server (incoming)
