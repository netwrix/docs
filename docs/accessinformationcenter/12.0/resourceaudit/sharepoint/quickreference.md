---
title: "SharePoint Reports Quick Reference Guide"
description: "SharePoint Reports Quick Reference Guide"
sidebar_position: 10
---

# SharePoint Reports Quick Reference Guide

The following SharePoint reports are available for selections within the Resources pane.

## SharePoint Node Reports

The following reports are available at the SharePoint node level:

| Report                                                         | Description                                                                                                                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/exceptions.md)                             | Provides a list of exceptions that were found across the targeted SharePoint on-premise farms and SharePoint Online instances. This report includes a Details table.           |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found in the targeted SharePoint on-premise farms and SharePoint Online instances. This report includes a Details table. |
| [Server Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/serversummary.md)                      | Provides a top-level view of servers and instances that are representative of the targeted SharePoint on-premise farms and SharePoint Online instances.                        |

## SharePoint > Farm / Instance Levels Reports

The following reports are available at the on-premise farm and online instance level:

| Report                                                                      | Description                                                                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/activitydetails.md)                  | Provides statistical activity event information by user on the selected farm during the specified date range. This report includes a line graph for Active Users Trend. |
| [Anonymous Access Links Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/anonymousaccesslinks.md)       | Displays files that have access links generated to be shared with people outside the organization (guest/anonymous users).                                              |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/exceptions.md)                             | Provides a list of exceptions that were found within the selected farm/instance. This report includes a Details table.                                                  |
| [External Sharing Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/externalsharing.md)                  | Displays resources that are shared with external users, such as users who are invited to sign in using their gmail accounts.                                            |
| [Scan Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/scansummary.md)                          | Provides a summary view of all site collections on the selected farm/instance.                                                                                          |
| [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/sensitivecontentdetails.md) | Provides details of files where criteria matches were found on the site collection. This report includes a Matches table.                                               |
| [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/sensitivecontentsummary.md) | Provides a count of files where criteria matches were found on the site collection. This report includes a Details table.                                               |

## SharePoint > Farm > Web Application & Web Application URL Levels Reports

The following reports are available at the web application and web application URL levels:

| Report                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Effective Policy Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/webapplication/effectivepolicy.md) | Provides a list of users and groups who are effectively granted or denied access to the SharePoint on-premise farm web application through a particular web application policy with the rights being either granted or denied. |
| [Policy Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/webapplication/policy.md)                    | Provides a list of web application policies assigned for the selected SharePoint on-premise farm web application.                                                                                                              |

## SharePoint > Instance > Teams Node Reports

The following report is available at the Teams node level:

| Report                                          | Description                                    |
| ----------------------------------------------- | ---------------------------------------------- |
| [Teams Scan Summary](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/teams/teamsscansummary.md) | Provides an overview of scanned Teams servers. |

## SharePoint > Farm / Instance > Web Application > Site Collections / Sites / Lists / Libraries / Folders Levels Reports

The following reports are available at the site collection, site, list, library, and folder levels:

| Report                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Details Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/activitydetails.md)          | Provides statistical activity event information by user on the selected server during the specified date range. This report includes a line graph for Active Users Trend.                                                                                                                                                                                                     |
| [Effective Access Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/effectiveaccess.md)          | Provides insight into who has what level of access to this resource through a calculation that encompasses web application policies, administrative access, resource permissions, and group membership. It contains a list of all trustees with access to the selected resource and specifies the effective access level. This report includes a Permission Source table.     |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/exceptions.md)                     | Provides a list of all trustees with access that are causing exceptions on the selected resource. This report includes a Permissions Source table.                                                                                                                                                                                                                            |
| [Permissions Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/permissions.md)                   | Provides a list of trustees with permissions for the selected resource. This report includes a table with trustee access levels Compared to Parent.                                                                                                                                                                                                                           |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/sensitivecontent.md)        | Provides a list of files and a hit count per file where criteria matches were found on the selected resource. This report includes a Matches table.                                                                                                                                                                                                                           |
| [Site Collection Roles Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/sitecollections/sitecollectionroles.md) | Provides a list of all roles or permission levels for the selected site collection, including custom defined roles and role descriptions. It also displays a calculation of the actual rights that each role grants within the targeted SharePoint on-premise farm or SharePoint Online instance. <br />**NOTE:** This report is only available at the site collection level. |


## SharePoint > Farm / Instance > Exceptions Node Reports

The following report is available at the Exceptions node level:

| Report                                        | Description                                                                                     |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Exceptions Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/exceptions/exceptions.md) | Provides a list of exceptions found on the farm/instance. This report includes a Details table. |

## SharePoint > Farm / Instance > Exceptions > Exception Type Level Reports

The following report is available at the exceptions type level:

| Report                                                      | Description                                                                                                                                                                |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Exceptions by Type Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/exceptions/exceptionsbytype.md) | Provides details on the selected exception type. An exception is defined as a problem or risk to data governance security. This report includes a Permission Source table. |
