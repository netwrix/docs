---
description: >-
  Instructions to migrate Netwrix Password Reset to a new server using either
  the SQL Server Compact database (copying .sdf files) or by configuring a SQL
  Server database, with step-by-step commands and paths.
keywords:
  - Netwrix Password Reset
  - migrate
  - migration
  - SQL Server Compact
  - apr.sdf
  - aprlog.sdf
  - services.msc
  - database
  - SQL Server
products:
  - password-reset
sidebar_label: Migrate Netwrix Password Reset
tags: []
title: "Migrate Netwrix Password Reset"
knowledge_article_id: kA04u00000111CPCAY
---

# Migrate Netwrix Password Reset

## Question

How to migrate Netwrix Password Reset?

## Answer

### Migrating Netwrix Password Reset using SQL Server Compact database

Refer to the following steps to migrate Netwrix Password Reset with SQL Server Compact database:

1. On both servers, close Netwrix Password Reset Data Console, if open.
2. On both servers, stop the **Netwrix Password Reset** service. You can do it manually via **Services**, `services.msc`, or using the following line in elevated PowerShell:

```powershell
Stop-Service -DisplayName "Netwrix Password Reset"
```

3. Locate `apr.sdf` and `aprlog.sdf` files by following the Password Reset installation path and copy them to your new server:

```text
%Program Files (x86)%\Netwrix Password Reset\
to
%Program Files%\Netwrix Password Reset\ in your new server
```

4. In your new server, open **Configuration Console**. In the **General** tab, select **Change** under the **Database** section.
5. Click **Browse** to locate the copied files located in `%Program Files%\Netwrix Password Reset\` in your new server.
6. Click **OK** twice, and click **Apply**.
7. In your new server, start the **Netwrix Password Reset** service. You can do it manually via **Services**, `services.msc`, or using the following line in elevated PowerShell:

```powershell
Start-Service -DisplayName "Netwrix Password Reset"
```

### Migrating Netwrix Password Reset using SQL Server database

For additional information on migrating Netwrix Password Reset using SQL Server database, refer to the following article: https://docs.netwrix.com/docs/passwordreset/3_23 (Moving to SQL Server — Configure Netwrix Password Reset to Connect to SQL Server ⸱ v3.3).

### Related articles

- https://docs.netwrix.com/docs/passwordreset/3_23 (Working with the Database — Moving to SQL Server ⸱ v3.3)
