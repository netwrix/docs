---
title: "MSSQL Server"
description: "MSSQL Server"
sidebar_position: 20
---

# MSSQL Server

#### Required Version

RECOMMENDED: Using MS SQL Server Express can lead to significant performance issues because of the
various limitations. Our recommendation is to use MS SQL Server Standard as a minimum.

Please follow Microsoft recommendations for system requirements for SQL Server.

|                       |         |             |
| --------------------- | ------- | ----------- |
| Attribute             | Minimum | Recommended |
| MS SQL Server Version | 2019    | 2022        |

**CAUTION:** If you plan to install the MS SQL Server on the machine with the Netwrix Password
Secure application server, please ensure to meet the combined minimum requirements for both systems.

#### Required Configuration

1. Service User: dbCreator (only required if the Netwrix Password Secure is used to create databases
   (recommended)), dbOwner  
   **a**. (Optional) Sysadmin (only when using the Netwrix Password Secure Backup Service)
2. Collation: Latin1_General_CI_AS (if the MS SQL Server is using a different collasion, the
   database needs to be created manually with the right collation and then be linked to/in Netwrix
   Password Secure)
3. Port/firewall rule: Port 1433 TCP for communication with application server (incoming)
