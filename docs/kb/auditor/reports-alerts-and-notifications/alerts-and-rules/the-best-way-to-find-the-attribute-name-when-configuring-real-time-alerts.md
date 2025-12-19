---
description: >-
  Shows how to find the exact attribute name (PropNameInt) for configuring Real
  Time Alerts in Netwrix Auditor by querying the NetWrix Active Directory SQL
  database.
keywords:
  - netwrix auditor
  - real time alerts
  - attribute name
  - PropNameInt
  - PropChanges
  - SQL
  - Active Directory
products:
  - auditor
visibility: public
sidebar_label: The best way to find the Attribute Name when confi
tags: []
title: "The best way to find the Attribute Name when configuring Real Time Alerts"
knowledge_article_id: kA00g000000H9WFCA0
---

# The best way to find the Attribute Name when configuring Real Time Alerts

When configuring Real Time Alerts in Netwrix Auditor it can sometimes be difficult to ensure you have the proper attribute names selected.

There are various methods for ensuring you get the proper attribute name; however, the best method if you have access to the Netwrix SQL databases is to simply run a query to find exactly what it is.

1. Find a change in your Change Summary Reports that you want to create a real time alert for.
2. Note the bold text in the **Details** column. For purposes of this KB we will call this the **friendly attribute name**.
3. Log into **SQL Management Studio** and connect to the SQL Instance which contains your Netwrix Active Directory database.
4. Expand **Databases** and find the Netwrix Active Directory database. By default this is `NetWrix_AD_Change_Reporter`.
5. **Right click** the database and select **New Query**.
6. Run the following query against the database replacing the variables between the %.

```sql
Select * from dbo.PropChanges where PropName like '%friendly attribute name%'
```

For example, if you are wanting to create a real time alert for when someone gets locked out, the friendly attribute name would be `User Account Locked Out` and so you would run the following query against the database:

```sql
Select * from dbo.PropChanges where PropName like 'User Account Locked Out'
```

7. In the query results you will see two columns **PropName** and **PropNameInt**. All `PropName` values should be exactly what you queried for and the resulting `PropNameInt` is the attribute name you will use in your real time alert.

For the above example the `PropNameInt` for `User Account Locked Out` is `lockoutTime`.
