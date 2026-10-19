---
title: "Sensitive Data Discovery"
description: "Sensitive Data Discovery"
sidebar_position: 80
---

# Sensitive Data Discovery

Sensitive Data Discovery is an integration module between Auditor and Netwrix Data Classification.
It allows Auditor users to generate reports and configure alerts and search for the sensitive data
collected and classified with Netwrix Data Classification (NDC). See the
[Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)
for more information about NDC.

The integration can be configured for the following Auditor data sources:

SharePoint

- SharePoint
- SharePoint Online

File Storage Systems

- Windows File Servers
- EMC
- Netapp
- Nutanix Files
- Qumulo
- Synology

Databases

- SQL Server

The following integration options are available:

- NDC SQL Database Provider – With this integration, users can generate State-in-Time reports
  showing data categories for the sensitive data classified with Netwrix Data Classification.
  Available for File storage systems, SharePoint, and SharePoint Online.
- NDC Endpoint Provider – With this integration, users can receive alerts triggered by specific
  events related to the sensitive data classified with Netwrix Data Classification. When enabled,
  Netwrix users can also browse sensitive data with the search. Available for File storage systems
  (including Windows file server, EMC, NetApp, Nutanix File server, Synology, and Qumulo),
  SharePoint Online, and SQL Server.

This section lists all requirements for monitoring plans configuration and required versions of
Netwrix Auditor and Netwrix Data Classification. Also, it lists requirements for the accounts used
by Sensitive Data Discovery .

## Permissions for Integration with Netwrix Data Classification

The account must be granted the following rights and permissions:

- The Database datareader server role must be assigned to the account on the SQL Server instance
  where the NDC SQL database resides.

Netwrix recommends using different accounts to connect to the SQL Server instances where NDC SQL
database and Categories database reside.

**NOTE:** Netwrix Data Classification and Netwrix Auditor integration (NDC Provider) does
not support Single Sign-On. Single Sign-on needs to be disabled in Netwrix Data Classification in
order for the account used by the NDC Provider to authenticate.

The account you are using for integration should have Rest API access in the Netwrix Data
Classification. You can add it in **NDC console > Settings > Users**. Refer to the
[Netwrix Data Classification documentation](https://helpcenter.netwrix.com/category/dataclassification)
for additional information.

## Requirements for Monitoring Plans in Netwrix Auditor

For File Storage Systems:

- Monitoring plan for File Servers data source with activity audit enabled in Netwrix Auditor;
- Netwrix Data Classification instance configured to crawl from the same source (naming must exactly
  match)

For SharePoint:

- Monitoring plan for SharePoint data source with activity audit enabled in Netwrix Auditor
- Netwrix Data Classification  instance configured to crawl from the same source;

For SharePoint Online:

- Monitoring plan for SharePoint Online data source with activity audit enabled in Netwrix Auditor
- Netwrix Data Classification instance configured to crawl from the same source

For SQL Server:

- Monitoring plan for SQL Server data source with activity audit enabled in Netwrix Auditor
- Netwrix Data Classification instance configured to crawl from the same source;

## Software Requirements

| Component                   | Version |
| --------------------------- | ------- |
| Netwrix Auditor             | 10.0+   |
| Netwrix Data Classification | 5.6.1+  |

## Enable and configure Sensitive Data Discovery

This section contains instructions on how to enable and configure Sensitive Data Discovery to
include sensitive data in Netwrix Auditor reports, search, and alerts.

Ensure that your account meets the requirements and has all server roles assigned. Follow these
steps to enable and configure Sensitive Data Discovery:

**Step 1 –** In Netwrix Auditor, navigate to Setting in the upper right corner.

**Step 2 –** Select **Sensitive Data Discovery**.

**Step 3 –** Configure the following settings:

- Enable NDC SQL Database Provider – Select Enable in the Connect to NDC SQL database field and then
  click Configure to specify NDC SQL database connection settings.
- SQL Server instance – Specify the name of the SQL Server instance where the NDC SQL database
  resides
- Database – Specify the name of the database (NDC SQL database by default)
- Authentication – Select the authentication type you want to use to connect to the SQL Server
  instance:

    - Windows authentication
    - SQL Server authentication

- User name – Specify the account to be used to connect to the SQL Server instance. For example,
  _WORKSTATIONNDC/integrator_.
- Password – Provide a password for that account
- Enable NDC Endpoint Provider – Select Enable in the Connect to NDC via API field and then click
  Configure to specify NDC endpoint connection settings.

    - NDC Web Console address – Provide the URL of your Netwrix Data Classification web console. For
      example: _http://workstationndc/conceptQS_.
    - User name – Provide the name of account that will be used to connect to NDC web console. For
      example, _WORKSTATIONNDC/integrator_. A user must be granted both: the 'REST API User' and
      'Superuser' permissions in NDC. See the User Management topic in the
      [Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)
      for additional information.
    - Password – Provide a password for that account

## What is Next

To run a data collection and review sensitive data:

**Step 1 –** Navigate to your File storage system, SharePoint, SharePoint Online, or SQL Server
monitoring plan.

**Step 2 –** Run data collection.

**Step 3 –** Consider that data collection for SharePoint Online may take a while.

**Step 4 –** Perform some changes and run data collection again.

**Step 5 –** Review sensitive data.

Netwrix suggests the following integration scenarios:

For NDC SQL Database Provider:

Review your sensitive data in Data Discovery and Classification reports. See the
[Data Discovery and Classification Reports](/docs/auditor/10.9/admin/reports/types/datadiscoveryclassification.md)
Netwrix Auditor Help Center article for more information.

For NDC Endpoint Provider:

- Browse your data with Netwrix search.
- Click the **Select** column in the Tools menu and review data categories (taxonomies) of your
  sensitive documents.
- Use filtering capabilities to narrow your search results. See the
  [Use Filters in Advanced Mode](/docs/auditor/10.9/admin/search/filteradvanced.md) topic for additional information.
- Create an alert triggered by specific actions with your sensitive data.

:::note
Shortly after the data collection, changes related to sensitive content are reported
without data categories. For example, if a user adds some sensitive data to the SharePoint Online
document that initially doesn't contain sensitive data, Auditor reports this as a document
modification with an empty "_data categories_" field. Another example: a user creates a new document
containing sensitive data on a file server; Auditor reports this as a file add with an empty "data
categories" field. In this case, wait until Netwrix Auditor processes information
collected by NDC. It takes a while depending on the number of processed objects in your
infrastructure and reindexing settings configured in Netwrix Data Classification. See the Manage
Sources and Control Data Processing topic in the
[Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)
for additional information.
:::

**_RECOMMENDED:_** Netwrix recommends enable threshold to trigger the new alert. In this case, a
single alert will be sent instead of many alerts. This can be helpful when Netwrix Auditor detects
many activity records matching the filters you specified. See the
[Alerts](/docs/auditor/10.9/admin/alertsettings/overview.md) topic for additional information.
