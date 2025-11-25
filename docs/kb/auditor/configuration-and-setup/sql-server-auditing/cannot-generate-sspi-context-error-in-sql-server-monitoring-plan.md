---
description: >-
  Shows how to troubleshoot and resolve the "Cannot generate SSPI context" error
  when Netwrix Auditor or the SQL Logons Connector for Netwrix OneSecutre DSPM
  attempts to connect to a SQL Server instance, including causes and
  step-by-step resolutions.
keywords:
  - SSPI
  - Kerberos
  - SPN
  - SQL Server
  - Netwrix Auditor
  - OneSecutre
  - setspn
  - TLS
  - time synchronization
products:
  - auditor
  - onesecure
sidebar_label: Cannot Generate SSPI Context Error in SQL Server M
tags: []
title: "Cannot Generate SSPI Context Error in SQL Server Monitoring Plan"
knowledge_article_id: kA04u0000000HefCAE
---

# Cannot Generate SSPI Context Error in SQL Server Monitoring Plan

## Symptom

The following error is displayed in the Health Log for your SQL Server monitoring plan, or when Netwrix Auditor or the SQL Logons Connector for Netwrix OneSecutre DSPM attempts to connect to a SQL Server instance:

```text
Source: SQL Server Audit Service
Computer: %affected_Auditor_server%
Description: Unable to retrieve a SQL Server instance name for the item %item_name%.
The instance was unreachable and the item was skipped from processing:
The target principal name is incorrect.
Cannot generate SSPI context.
```

This error may also affect the state-in-time snapshot collection, the SQL Server instance used by Netwrix Auditor to store and retrieve audit data, and the SQL Logons Connector for Netwrix OneSecutre DSPM.

## Causes

1. The firewall settings either in your SQL Server or Netwrix Auditor server are misconfigured.
2. The service account used to start the SQL Server service does not have a Service Principal Name (SPN) registered, or the SPN is missing or incorrect.
3. The Netwrix Auditor server and SQL Server cannot communicate due to different TLS protocol versions.
4. The SQL Server and the Netwrix Auditor server have a significant time difference.

## Resolutions

> **NOTE:** To refresh the monitoring plan after making changes, go to the main **Netwrix Auditor** menu > **Monitoring Plans** > select your SQL Server monitoring plan and click **Edit** > click the **Update** button in the right pane.

### Cause #1 – Firewall Settings

Verify the firewall settings in your environment. For additional information on ports required for SQL Server monitoring, see SQL Server – [SQL Server Ports](https://docs.netwrix.com/docs/auditor/10_8/configuration/sqlserver/ports)

### Cause #2 – SQL Server Service Accounts and SPN Registration

> **NOTE:** The SPN must be registered for the service startup account that the SQL Server service is running under. If the SPN is missing or incorrect, Kerberos authentication will fail and this error may occur.

To troubleshoot possible issues with Service Principal Names (SPNs), consider the following options:

- You can use Kerberos Configuration Manager on both your Netwrix Auditor and SQL servers to identify and resolve issues related to the service account used by SQL Server. For more information, see Cannot Generate SSPI Context – Fix the Error with Kerberos Configuration Manager · Microsoft: https://learn.microsoft.com/en-US/troubleshoot/sql/database-engine/connect/cannot-generate-sspi-context-error#fix-the-error-with-kerberos-configuration-manager-recommended

- You can create a `.udl` file to test SQL Server connectivity:
  1. On either the Netwrix Auditor server or SQL Server, open File Explorer > the **View** tab > check the **File name extensions** checkbox.
  2. Create a ` .txt` file.
  3. Change the file extension to `.udl` and open the file.
  4. In the **Connection** tab, specify the SQL Server name and the service account credentials, then click **Test Connection**.

SPNs for service accounts can be registered both automatically and manually. For information about automatic SPN registration, see Register Service Principal Name for Kerberos Connections – Automatic SPN Registration · Microsoft: https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/register-a-service-principal-name-for-kerberos-connections?view=sql-server-ver16#Auto

To register an SPN for a domain account or the Network Service account, use the following steps:

1. Launch an elevated Command Prompt on any server in the SQL Server forest.
2. If using a domain user account as the service account, run the following command to register an SPN for the server and verify there are no duplicates:

```bash
setspn -S http/testlab-sql domain\\user
```

3. If using the Network Service account as the service account, run the following command to register an SPN for the server and verify there are no duplicates:

```bash
setspn -s MSSQLSvc/testlab-sql testlab-sql
```

To register an SPN for a specific instance (using port 1433 or another port), run:

```bash
setspn -s MSSQLSvc/testlab-sql:1433 testlab-sql
```

> **IMPORTANT:** Replace placeholders with your actual SQL Server name, domain service account, and port. In the examples above, `testlab-sql` stands for the server name.

If you are unable to resolve the issue with SPN registration, and if your scenario allows, you may use SQL authentication as a workaround. However, SQL authentication is **not available** for SQL Server auditing in Netwrix Auditor.

### Cause #3 – Different TLS Protocol Versions

Allow the operating systems to select the protocol for incoming and outgoing communication on both your Netwrix Auditor and SQL servers. For more information, see Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm: [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm)

### Cause #4 – SQL and Netwrix Auditor Servers Time Difference

Synchronize the time on both SQL and Netwrix Auditor servers to eliminate clock skew. For more information, see Clock Skew Is Too Great: [Clock Skew Is Too Great](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/clock-skew-is-too-great)

## Related Articles

- [SQL Server Ports](https://docs.netwrix.com/docs/auditor/10_8/configuration/sqlserver/ports)
- Cannot Generate SSPI Context – Fix the Error with Kerberos Configuration Manager · Microsoft: https://learn.microsoft.com/en-US/troubleshoot/sql/database-engine/connect/cannot-generate-sspi-context-error#fix-the-error-with-kerberos-configuration-manager-recommended
- Register Service Principal Name for Kerberos Connections – Automatic SPN Registration · Microsoft: https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/register-a-service-principal-name-for-kerberos-connections?view=sql-server-ver16#Auto
- [Client and Server Cannot Communicate, Because They Do Not Possess a Common Algorithm](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/client-and-server-cannot-communicate-because-they-do-not-possess-a-common-algorithm)
- [Clock Skew Is Too Great](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/clock-skew-is-too-great)





