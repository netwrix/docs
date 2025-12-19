---
description: >-
  Provides the least privilege model for the MS SQL Server service accounts used
  by Netwrix Privilege Secure when a SQL Server backend and SQL authentication
  are required.
keywords:
  - MS SQL Server
  - service account
  - least privilege
  - Netwrix Privilege Secure
  - PAM database
  - db_datareader
  - db_datawriter
  - db_ddladmin
products:
  - privilege-secure-access-management
sidebar_label: Least Privilege Model for SQL Server Backend
tags: []
title: "Least Privilege Model for SQL Server Backend"
knowledge_article_id: kA04u000000wnnrCAA
---

# Least Privilege Model for SQL Server Backend

## Overview

This article provides the least privilege model for the MS SQL Server service accounts used by Netwrix Privilege Secure. This model applies exclusively to Privilege Secure for Access Management version 4.1 and higher, and only in environments where a SQL Server backend is being used. Further, you must use a SQL user, as Windows (Active Directory) authentication is not supported at this time.

## Instructions

The service account used by Netwrix Privilege Secure requires the following privileges:

### During regular usage

The service account requires the following roles on the PAM database:

1. `db_datareader`
2. `db_datawriter`
3. EXECUTE permission: `GRANT EXECUTE TO [serviceaccount]`
4. ALTER permission on the dbo schema
5. CREATE TABLE

> **NOTE:** As an alternate privilege, instead of 4. and 5. in the above list, the `db_ddladmin` role may be granted. The purpose of the ALTER/CREATE permissions, whether granted directly or through `ddladmin`, is to allow for non-temporary tables to be created and dropped inside of the NPS database during regular operation of the software.

### During installations and upgrades

The service account must be granted the following additional permissions:

- CREATE TABLE permission: `GRANT CREATE TABLE TO [serviceaccount]`
- CREATE VIEW permission: `GRANT CREATE VIEW TO [serviceaccount]`
- REFERENCES permission ON `activity_configuration`: `GRANT REFERENCES ON activity_configuration TO [serviceaccount]`
- REFERENCES permission ON `scheduled_change_policy`: `GRANT REFERENCES ON scheduled_change_policy TO [serviceaccount]`
- REFERENCES permission ON `email_settings`: `GRANT REFERENCES ON email_settings TO [serviceaccount]`

These permissions can then be revoked after installation and upgrade:

- CREATE TABLE permission: `REVOKE CREATE TABLE TO [serviceaccount]`
- CREATE VIEW permission: `REVOKE CREATE VIEW TO [serviceaccount]`
- REFERENCES permission ON `activity_configuration`: `REVOKE REFERENCES ON activity_configuration TO [serviceaccount]`
- REFERENCES permission ON `scheduled_change_policy`: `REVOKE REFERENCES ON scheduled_change_policy TO [serviceaccount]`
- REFERENCES permission ON `email_settings`: `REVOKE REFERENCES ON email_settings TO [serviceaccount]`

> **IMPORTANT:** It is critical that these permissions be granted to the service account during all installations and upgrades.
