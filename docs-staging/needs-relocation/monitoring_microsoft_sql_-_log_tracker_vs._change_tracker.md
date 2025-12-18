---
description: >-
  This article explains how to monitor Microsoft SQL Servers using Netwrix Log Tracker and Change Tracker, detailing their functionalities and compliance checks.
keywords:
  - Microsoft SQL Server
  - Netwrix Log Tracker
  - Netwrix Change Tracker
sidebar_label: Monitoring SQL Servers
tags: []
title: "Monitoring Microsoft SQL - Log Tracker vs. Change Tracker"
knowledge_article_id: kA04u0000000JWACA2
products:
  - logtracker
---

# Monitoring Microsoft SQL - Log Tracker vs. Change Tracker

## Overview

Do you want to monitor Microsoft SQL Servers? Are you not quite sure how Netwrix can help you achieve that? - GREAT! All the information you need is displayed below.

Using **Netwrix Log Tracker** will enable you to keep track of and report on SQL database audit events such as successful or failed logins, user account changes, or schemas being created, just to name a few. All of these SQL audit events can either be written to the normal Windows event logs, which a Netwrix Log Tracker agent monitors and forwards through events to the Log Tracker server as they are seen. If the SQL audit events were written to a custom log file stored elsewhere, we can configure the Netwrix Log Tracker agent to tail the log file and forward through syslog events whenever new entries are seen within the file. 

Once the events are on the Log Tracker server, we can configure correlation threads to group together different types of events depending on their contents. Once grouped together, you can configure alerts and ticketing for when different scenarios occur – one example may be that a ticket is created and emailed to a member of staff when a certain number of failed SQL login attempts are made within a short period, which may signify a brute force attack.

Once the SQL audit events are on the Netwrix Log Tracker server, you can also run queries looking for specific events, from specific dates or users, and then create reports using the results, which can be saved in .PDF/.CSV/.TXT/.HTML formats.

Just so you are aware, different versions of SQL offer different levels of auditing. Below is a table that shows what auditing is available in each version and how the server and database auditing differs.

| **Edition**                       | **SQL Server 2008 and 2008 R2** | **SQL Server 2012 and 2014** |
|-----------------------------------|----------------------------------|-------------------------------|
| **Enterprise**                    | Server- and database-level       | Server- and database-level    |
| **Evaluation**                    | Server- and database-level       | Server- and database-level    |
| **Developer**                     | Server- and database-level       | Server- and database-level    |
| **Datacentre**                    | Server- and database-level       | N/A                           |
| **Business Intelligence**         | None                             | Server-level                  |
| **Standard**                      | None                             | Server-level                  |
| **Web**                           | None                             | Server-level                  |
| **Express**                       | None                             | Server-level                  |

- **Server-level auditing** consists of server-level audit action groups, which include server operations, such as security operations involving logins, roles and permissions, logon and logoff operations, database backup and restore, manipulation of certain database, server, and schema objects.

- **Database-level auditing** is auditing at the database scope, and it is set on each database individually. This feature is not available in all editions of SQL Server, only in Enterprise editions. Database-level auditing utilizes database-level audit action groups and database-level audit actions.
  - The *database-level audit action groups* cover some similar areas as the server-level audit groups, if applicable, but at the database level.
  - Additionally, database-level auditing also enables auditing certain individual actions, such as `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `EXECUTE`, `RECEIVE`, and `REFERENCES`. These database-level audit actions can be restricted to a specific database, an object (such as table, view, stored procedure), or a schema.

Using **Netwrix Change Tracker** will enable you to check the integrity of a database stored on an SQL server in line with the CIS standard. This is achieved using our SQL compliance reports, which enable us to run specific queries against the database to see if it is configured in a way that the CIS deems ‘secure’. Below is a list of different rules/checks that we make against the database to check its integrity:

---

**Rule 1** - Revoke Execute on `xp_regwrite` to PUBLIC  
**Description:** Writes key values to the server's registry.
**Rationale:** Ensuring this procedure is disabled will prevent a SQL Server user from writing to the Windows registry via SQL Server.

---

**Rule 2** - Set the `CHECK_POLICY` Option to ON for All SQL Authenticated Logins  
**Description:** Applies the same password complexity policy used in Windows to passwords used inside SQL Server.  
**Rationale:** Ensuring SQL logins comply with the secure password policy applied by the Windows Server Benchmark will ensure SQL logins are not blank and cannot be easily compromised via brute force attack.

---

**Rule 3** - Revoke CONNECT permissions on the `guest user` within all SQL Server databases excluding the master, msdb, and tempdb  
**Description:** Removes the right of guest users to connect to SQL Server user databases.  
**Rationale:** A login assumes the identity of the guest user when a login has access to SQL Server but does not have access to a database through its own account and the database has a guest user account. Revoking the connect permission for the guest user will ensure that a login is not able to access database information without explicit access to do so.

---

As you can see from above, the use of a compliance report within Change Tracker will not enable you to keep track of audit logs and report when changes are made to a database. We are simply making checks on the database and configuring it in a way that is secure. Using CIS standards will ensure that inside/outside attackers will not be able to exploit well-known vulnerabilities within SQL, which they could use to access a database and from there either create, edit, or delete data.