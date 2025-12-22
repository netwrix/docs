---
title: "Work with Collected Data"
description: "Work with Collected Data"
sidebar_position: 30
---

# Work with Collected Data

To leverage data collected with the add-on, you can do the following in Auditor:

- **Search for required data**. For that, start Auditor client and navigate to **Search**. After
  specifying the criteria you need, click **Search**. You will get a list of activity records with
  detailed information on who did what in the reported time period.

You can apply a filter to narrow down your search results to the Netwrix **API** data source only.

![Azure SQL MI Activity Records in Netwrix Auditor](/images/auditor/10.8/addon/azuresqlmi/netwrix-auditor-search.png)

- Also, you can click **Tools** in the upper-right corner and select the command you need. For
  example:
    - If you want to periodically receive the report on the results of search with the specified
      criteria, click **Subscribe**. Then specify how you want the report to be delivered – as an
      email or as a file stored to the file share.
    - To create an alert on the specific occurrences, click **Create alert**.
    - To export filtered data to PDF or CSV, click **Export data**.
- You can also configure and receive alerts on the events you are interested in.

## Activity Records for Azure SQL Managed Instance

The add-on collects comprehensive audit data from Azure SQL Managed Instance and converts it into Netwrix Auditor Activity Records. Each Activity Record contains:

- **Who**: User account or principal that performed the action
- **What**: Type of action performed (login, permission change, object modification, etc.)
- **When**: Timestamp of the event
- **Where**: Database and object affected
- **Additional Details**: Before and after values for changes, success/failure status

### Server-Level Activity Records

The following server-level activities are captured:

- **Login Events**: Failed and successful authentication attempts
- **Security Changes**: Server role membership modifications, login creation/deletion
- **Permission Changes**: Grant, revoke, and deny operations at server level
- **Configuration Changes**: Server settings and audit configuration modifications
- **Password Changes**: Password modification events

### Database-Level Activity Records

The following database-level activities are captured:

- **User Management**: Database user creation, modification, and deletion
- **Role Operations**: Database role changes and membership modifications
- **Object Changes**: Table, view, stored procedure, and function modifications
- **Schema Changes**: Schema creation, modification, and deletion
- **Permission Changes**: Database-level grant, revoke, and deny operations
- **Backup/Restore**: Database backup and restore operations

## Working with Search Results

See the following topics for additional information:

- [Alerts](/docs/auditor/10.8/admin/alertsettings/overview.md)
- [View and Search Collected Data](/docs/auditor/10.8/admin/search/overview.md)
- [Subscriptions](/docs/auditor/10.8/admin/subscriptions/overview.md)
