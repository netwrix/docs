---
description: >-
  Step-by-step instructions to configure MySQL database auditing in Netwrix
  Access Analyzer, including prerequisites, creating SQL logins, connection
  profiles, host lists, and collection job configuration.
keywords:
  - MySQL
  - audit
  - Netwrix Access Analyzer
  - host list
  - connection profile
  - AWS RDS
  - Aurora
  - WinRM
  - SQL Authentication
  - collection job
products:
  - access-analyzer
sidebar_label: Audit MySQL Databases in Netwrix Access Analyzer
tags:
  - database-auditing-and-configuration
title: "Audit MySQL Databases in Netwrix Access Analyzer"
knowledge_article_id: kA04u00000111GvCAI
---

# Audit MySQL Databases in Netwrix Access Analyzer

## Question

How to configure the MySQL databases audit in Netwrix Access Analyzer?

## Answer

### Requirements

- Requirements for Windows (Netwrix Access Analyzer host):
  - Windows Management Framework 3+ installed on the Netwrix Access Analyzer Console server (applicable to Windows 2012 and older).
- Requirements for Windows (MySQL host):
  - WinRM enabled.
- Requirements for MySQL:
  - Read access to all databases contained within each MySQL instance.
  - Domain Admin or Local Admin privilege (Windows only).

### Create the SQL logins

Create a login on each instance of MySQL to be audited.

### Configure the connection profile

While this guide describes the configuration steps to audit MySQL standard edition with MySQL logins, Netwrix Access Analyzer supports Active Directory. If available, Active Directory authentication to MySQL is recommended and supported by Netwrix Access Analyzer.

1. Open the Netwrix Access Analyzer console. Click **Settings** -> **Connection**.
2. Click **Add Connection Profile**.
3. Replace the default name with **MySQL**.
4. Click **Add User Credential**.
5. Set **Select Account Type** to **SQL Authentication**.
6. Enter the username and password of the MySQL login.
7. If different logins were created on different instances, add them all to the connection profile.

### Create the host list

1. Under **Host Management**, click **Add hosts** and enter the domain name or IP address into the **Host name** input box. Repeat this for each instance.

> **NOTE:** For AWS RDS instances, enter the endpoint. This value may change after saving the list if the instance is part of a cluster.

2. Click **Next** and name the host list **MySQL Instances**.
3. Select the **MySQL** connection profile as the credentials to use when querying hosts in this list.
4. Click **Finish**.

### Configure and run the MySQL Collection job set

1. Go to **Jobs** -> **Databases** -> **MySQL** -> **Settings** -> **Connection**. Select the MySQL connection profile. Click to set all child objects to inherit the setting. Click **Save** and **OK**.
2. Go to **Jobs** -> **Databases** -> **MySQL** -> **Settings** -> **Host List Assignment**. Untick **Use Default Setting**, select the **MySQL Instances** host list and click **Save**.
3. For AWS RDS and Aurora instances, right-click each job in the **MySQL** -> **0.Collection folder** and open the properties window. Ensure the checkbox **Skip Hosts that do not respond to PING** is unchecked in the **Performance** tab.
