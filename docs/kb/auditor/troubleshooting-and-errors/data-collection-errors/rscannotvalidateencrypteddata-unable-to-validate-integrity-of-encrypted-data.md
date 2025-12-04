---
description: >-
  Describes causes and remediation steps for rsCannotValidateEncryptedData and
  related encryption key errors in SQL Server Reporting Services, including
  restoring a backup encryption key or deleting encrypted content and restarting
  services.
keywords:
  - rsCannotValidateEncryptedData
  - encryption key
  - SQL Server Reporting Services
  - ReportServer
  - DeleteEncryptedContent
  - Report Server Configuration Manager
  - Netwrix Management Service
  - encrypted data
products:
  - auditor
sidebar_label: rsCannotValidateEncryptedData — Unable to Validate
tags: []
title: "rsCannotValidateEncryptedData — Unable to Validate Integrity of Encrypted Data"
knowledge_article_id: kA04u000001111lCAA
---

# rsCannotValidateEncryptedData — Unable to Validate Integrity of Encrypted Data

## Symptom

You've encountered either of the following errors when running a report:

```
The report server was unable to validate the integrity of encrypted data in the database.
(rsCannotValidateEncryptedData)
Keyset does not exist (Exception from HRESULT: 0x80090016)
```

```
The report server cannot decrypt the symmetrical key used to access sensitive or encrypted data in a report server database
```

## Cause

SQL Server Reporting Services suite is unable to access the reports as it cannot validate the encryption key configured for the SQL instance.

## Solutions

- You can restore the encryption key via a previously generated backup key:

  1. Run **Report Server Configuration Manager** in your SQL server.
  2. Once authorized, select **Encryption Keys** in the left pane, and click **Restore**.
  3. Specify the location of your backup encryption key and the password set up for the encryption key, and click **OK**.

- If you do not have the backup encryption key, you can execute the following query to delete the encrypted content:

```sql
USE ReportServer
EXEC [dbo].[DeleteEncryptedContent]
```

  Once the query completes, restart the SQL Server Reporting Services service in your SQL server, and Netwrix Management Service in the Netwrix server.

  You can also generate a backup encryption key after you've deleted the encrypted content:

  1. Run **Report Server Configuration Manager** in your SQL server, and select **Encryption Keys** in the left pane, once authorized.
  2. Click **Backup**, and specify the file location and password for the backup key.
