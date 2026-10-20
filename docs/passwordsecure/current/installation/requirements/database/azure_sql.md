---
title: "Azure SQL"
description: "Azure SQL"
sidebar_position: 30
---

# Azure SQL

## Required Version

Azure SQL Database has no equivalent to a SQL Server version. Netwrix Password Secure detects which Azure SQL deployment type you use, and doesn't require or check a minimum service tier, service objective, or compatibility level.

## Required Configuration

1. Service User: SQL Authentication only; Netwrix Password Secure doesn't support Microsoft Entra ID authentication
2. Database creation: Netwrix Password Secure can create and manage the database schema itself, or you can connect it to an existing database
3. Collation: `Latin1_General_CI_AS` (recommended); use a different collation if your organization requires one
4. Port/firewall rule: none required; configure network access according to your organization's requirements
