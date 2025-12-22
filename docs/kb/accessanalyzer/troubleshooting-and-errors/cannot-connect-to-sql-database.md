---
description: >-
  Users other than the `admin` account cannot access Netwrix Access Analyzer
  (AIC) when the SQL database password is expired or incorrect; this article
  explains how to update the database password in the Configure Console.
keywords:
  - SQL
  - database
  - password
  - AIC
  - Netwrix Access Analyzer
  - Configure Console
  - admin
  - login
  - cannot connect
products:
  - access-analyzer
sidebar_label: Cannot Connect to SQL Database
tags:
  - troubleshooting-and-errors
title: "Cannot Connect to SQL Database"
knowledge_article_id: kA0Qk0000001ybdKAA
---

# Cannot Connect to SQL Database

## Symptom
AIC users other than the `admin` user cannot access Netwrix Access Analyzer (AIC) even with the correct password.

## Cause
The database password in **Home** > **Configure Console** > **Database** has expired or is incorrect.

## Resolution
1. Ensure that the password for the Netwrix Access Analyzer database has been updated.
2. Log in to AIC using the default `admin` user and password.

> **NOTE:** If you need to reset the AIC Administrator password, see: https://docs.netwrix.com/docs/accessanalyzer/12_0

3. Navigate to **Home** > **Configure Console** > **Database**, enter the new database password for your SQL account, and click **Save**.
4. Verify that AIC is now functioning correctly.

> **NOTE:** Other users, apart from the `admin` user, cannot access AIC if the database password is expired or incorrect. It is recommended to log in as the `admin` user to update the database password.

## Related Link
- Resetting the AIC Administrator Password: https://docs.netwrix.com/docs/accessanalyzer/12_0
