---
title: "Version 26.9.100.34193"
description: "List of all changes introduced in Netwrix Password Secure version 26.9.100"
sidebar_position: 4
---

## New
You can now use **PostgreSQL** as a database for Netwrix Password Secure. You no longer need a Microsoft SQL Server or Azure SQL instance.

:::tip
If your database already migrated to elliptic curve cryptography (ECC), you can automatically migrate it from MSSQL to Postgres.
:::

## Fixed
### Server
- You can change the Active Directory profile of organizational units again.

### Windows App and Autofill add-on
- If both the auto login and the cross-client authentication are active, the Autofill add-on no longer authenticates to the same database twice.

### .NET SDK
- Using the .NET SDK, users can authenticate via username and password again if they need to configure a second factor or change their password during login.