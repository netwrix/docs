---
description: >-
  Shows how to set up auditing of PostgreSQL databases in Netwrix Access
  Analyzer, including creating SQL logins, connection profiles, host lists, and
  configuring the PostgreSQL collection job set.
keywords:
  - PostgreSQL
  - audit
  - Netwrix Access Analyzer
  - connection profile
  - host list
  - AWS RDS
  - Aurora
  - SQL Authentication
  - collection job
products:
  - access-analyzer
sidebar_label: Audit PostgreSQL Databases in Netwrix Access Analy
tags:
  - database-auditing-and-configuration
title: "Audit PostgreSQL Databases in Netwrix Access Analyzer"
knowledge_article_id: kA04u00000111H0CAI
---

# Audit PostgreSQL Databases in Netwrix Access Analyzer

## Question

How to set up the PostgreSQL databases audit in Netwrix Access Analyzer?

## Answer

### Requirements

Requirements for PostgreSQL:

- Read access to all databases contained within each PostgreSQL instance.
- Domain Admin or Local Admin privilege (Windows only).

### Create the SQL logins

Create a login on each instance of PostgreSQL to be audited.

### Configure the connection profile

While this guide describes the configuration steps to audit PostgreSQL standard edition with PostgreSQL logins, the GSSAPI protocol support in PostgreSQL allows for the use of Active Directory. If available, Active Directory authentication to PostgreSQL is recommended and supported by Netwrix Access Analyzer.

1. Open the Netwrix Access Analyzer console. Click **Settings** -> **Connection**.
2. Click **Add Connection Profile**.
3. Replace the default name with **PostgreSQL**.
4. Click **Add User Credential**.
5. Set **Select Account Type** to **SQL Authentication**.
6. Enter the username and password of the PostgreSQL login.
7. If different logins were created on different instances, add them all to the connection profile.

### Create the host list

1. Under **Host Management**, click **Add hosts** and enter the domain name or IP address into the **Host name** input box. Repeat this for each instance.

> **NOTE:** For AWS RDS instances, enter the endpoint. This value may change after saving the list if the instance is part of a cluster.

2. Click **Next** and name the host list **PostgreSQL Instances**.
3. Select the **PostgreSQL** connection profile as the credentials to use when querying hosts in this list.
4. Click **Finish**.

### Configure and run the PostgreSQL Collection job set

1. Go to **Jobs** -> **Databases** -> **PostgreSQL** -> **Settings** -> **Connection**. Select the **PostgreSQL** connection profile. Click to set all child objects to inherit the setting. Click **Save** and **OK**.
2. Go to **Jobs** -> **Databases** -> **PostgreSQL** -> **Settings** -> **Host List Assignment**. Uncheck the **Use Default Setting** checkbox and select the **PostgreSQL Instances** host list and click **Save**.
3. For AWS RDS and Aurora instances, right click each job in the PostgreSQL -> **0.Collection folder** and open the properties window. Ensure the checkbox **Skip Hosts that do not respond to PING** is unchecked in the **Performance** tab.
