---
description: >-
  Instructions to reset multi-factor authentication (MFA) in Netwrix Recovery
  for Active Directory when a user loses access to their authenticator account.
keywords:
  - MFA
  - multi-factor authentication
  - Netwrix Recovery for Active Directory
  - NRAD
  - reset MFA
  - SQL Server
  - dbo.tusers
  - TwoFactorEnabled
products:
  - recovery-active-directory
sidebar_label: How to Reset Multi-Factor Authentication
tags: []
title: "How to Reset Multi-Factor Authentication"
knowledge_article_id: kA0Qk0000001zvtKAA
---

# How to Reset Multi-Factor Authentication

## Question

Can you reset multi-factor authentication (MFA) in Netwrix Recovery for Active Directory (NRAD) after losing access to their authenticator account?

## Answer

Yes, you can reset MFA in Netwrix Recovery for Active Directory (NRAD) by following the outlined steps below:

1. Open **SQL Server Management Studio** and connect to the SQL Server instance used for Netwrix Recovery for Active Directory (NRAD).
2. Expand the **Tables** in the database used by NRAD. The default database name is `NetwrixRecovery`.

> **NOTE:** The default database name may vary if it was modified during the installation of NRAD.

3. Right-click the `dbo.tusers` table and select **Edit Top 200 Rows**.
4. Locate the user account by identifying their login name in the **Data** column.
5. Change the `TwoFactorEnabled` column value from `True` to `False` and save the changes.
6. After resetting MFA, users can log in to the console without an authenticator code. To re-enable MFA, refer to the steps in the Configure MFA guide.


