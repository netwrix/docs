---
title: How to Assign db_owner Permissions
sidebar_label: How to Assign db_owner Permissions
description: how to assign db_owner permissions to the Netwrix Auditor service account using SQL Server Management Studio to ensure proper access to audit databases.
keywords:
- Netwrix Auditor
- SQL Server
- db_owner
- database permissions
- SQL Server Management Studio

products:
- auditor

---

## Overview

The account used by Netwrix Auditor to collect and store audit data must have **db_owner** permissions on all target audit databases. Without this level of access, certain audit operations or data retrieval tasks may fail.

This article provides step-by-step instructions for granting **db_owner** rights to the Netwrix Auditor service account in **SQL Server Management Studio**.

## Instructions

To assign **db_owner** permissions to a Netwrix Auditor account:

1. On the computer where the SQL Server instance resides, navigate to **Start** > **All Programs** > **Microsoft SQL Server** > **SQL Server Management Studio**.
2. Connect to the SQL Server instance using an account that has sufficient privileges to modify database roles.
3. In the **Object Explorer** pane, expand **Security**, then expand **Logins**.
4. Locate and right-click the login account used by Auditor, and select **Properties**.
5. In the **Login Properties** window, select **User Mapping** in the left pane.
6. In the **Users mapped to this login** section, select all databases that the Auditor account must access.
7. In the **Database role membership for:** section, select **db_owner**.
8. Click **OK** to save the changes.
