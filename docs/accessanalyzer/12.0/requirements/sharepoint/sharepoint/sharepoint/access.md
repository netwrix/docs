---
title: "SharePoint required permissions for Access Analyzer"
description: "SharePoint required permissions for Access Analyzer"
sidebar_position: 10
---

# SharePoint required permissions for Access Analyzer

## Overview

Access Analyzer requires specific permissions on the SharePoint farm, web applications, and
databases to execute Access Auditing (SPAA) and Sensitive Data Discovery Auditing scans.
Agent-less scans require additional permissions on the SharePoint Application Server.

## Application server permissions (agent-less only)

Agent-less scans perform all data collection from the Access Analyzer Console server across the
network. The service account requires the following permissions on the SharePoint Application
Server:

- Membership in the local `Backup Operators` group — required so Access Analyzer can read the
  remote registry to identify the server's role in the farm and locate the SharePoint
  configuration database.
- Membership in the local `WSS_WPG` group — required for read access to system resources used
  by Microsoft SharePoint Foundation.

## SharePoint farm permissions

The service account must be a member of the `Farm Read` group at the farm level. This allows
Access Analyzer to call the SharePoint web services to gather permissions, site hierarchy, and
content information remotely.

Follow these steps to configure farm-level permissions on SharePoint 2013 through SharePoint 2019:

1. In the SharePoint **Central Administration Center**, navigate to the **Security** section.
2. Select **Manage the farm administrators group** under **Users**.
3. If the `Farm Read` group exists, add the service account to that group. If the group has been
   deleted, create a new group:
   - Select **More** under the **Groups** section.
   - Select **New Group** from the **New** drop-down menu.
   - Ensure the group has the `Read – Can view pages and list items and download documents`
     permission.
   - Add the service account to the new group.

The service account now has Read-level access at the farm level.

## SharePoint web application permissions

The service account requires a custom policy role with `Site Collection Auditor` and `Open Items`
permissions at the web application level. This allows Access Analyzer to execute web service calls
against **Central Administration**.

Follow these steps to configure web application-level permissions on SharePoint 2013 through
SharePoint 2019:

1. In the **Central Administration Center**, navigate to the **Application Management** section.
2. Select **Manage web applications** under **Web Applications**.
3. Create a new permission policy for the web application:
   - Click **Permission Policy**. The **Manage Permission Policy Levels** window opens.
   - Click **Add Permission Policy Level** and configure the following:
     - Select the `Site Collection Auditor` permission.
     - Select the `Open Items` box in the **Site Permissions Grant** column.
     - Click **Save**.
4. Repeat step 3 for each web application in scope. Use the same policy name across all web
   applications.
5. Add the service account to the newly created role for each web application:
   - Select a web application with the newly created role.
   - Click **User Policy**. The **Policy for Web Application** window opens.
   - Click **Add Users**, leave all zones selected, and click **Next**.
   - Enter the service account in the **Users** field.
   - Select the newly created role with `Site Collection Auditor` in the **Permissions** section,
     then click **Finish**.
6. Repeat step 5 for each web application in scope.

The service account is provisioned as `Site Collection Auditor` on all web applications to be
audited.

## SharePoint database server permissions

The service account requires the `SPDataAccess` database role membership on the SharePoint
configuration database and all content databases. This allows Access Analyzer to execute read
operations directly against the SharePoint databases and gather information about web application
and content database locations.

Follow these steps to configure database server permissions:

1. Open the SharePoint database server user configuration in SQL Server Management Studio.
2. Grant the service account the `SPDataAccess` database role membership on the following
   databases:
   - The SharePoint Configuration database (`SharePoint_Config`)
   - All SharePoint Content databases that house web application data (by default, content
     databases begin with `WSS_Content`, but they can be customized)

The service account is provisioned with the required SharePoint database permissions.

## MySites and OneDrive permissions

MySites and OneDrive permissions depend on the SharePoint Access Data Collector configuration:

- **Force temporary admin access**: Granting the service account temporary admin access to
  personal sites — either directly or as a member of the `Company Administrators` group —
  requires the SharePoint Farm Administrator role or `Site Collection Auditor` at the web
  application that hosts MySites.
- **Skip inaccessible personal sites**: This option scans only sites where the service account
  already has administrative access. You must provision the service account before the scan to
  scan OneDrives and personal sites.
