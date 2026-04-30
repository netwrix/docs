---
title: "SharePoint Monitoring Scope"
description: "SharePoint Monitoring Scope"
sidebar_position: 10
---

# SharePoint Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SharePoint
monitoring scope.

Follow the steps to exclude data from the SharePoint monitoring scope:

**Step 1 –** Navigate to the _%working folder%\Netwrix Auditor for SharePoint\Configuration\GUID_
folder, where omit lists are located.

If you have several monitoring plans for monitoring SharePoint farms, configure omit lists for each
monitoring plan separately.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                      | Description                                                                                      | Syntax                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omiteventloglist.txt      | Contains a list of event IDs to be excluded from the Netwrix Auditor System Health event log.    | `event ID` For example: `1001` Only add known error or warning events, otherwise you may lose important data.                                                                                                                                                                                                                                                                                                 |
| omitscreadaccesslist.txt  | Contains a list of site collections for which the product will not monitor read access attempts. | `http(s)://URL` Enter the root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs to specify a child site collection. For example: `http://sharepointsrv:3333/`                                                                                                            |
| omitscstorelist.txt       | Contains a list of site collections to be excluded from audit data collection.                   | `http(s)://URL` Enter the root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs to specify a child site collection. For example: `https://siteColl*`                                                                                                                     |
| omitsitscstorelist.txt    | Lists site collections to exclude from being monitored and reported in state-in-time report.     | `http(s)://URL` Enter root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs to specify a child site collection. You can use a wildcard (\*) to replace any number of characters. Examples: `http://siteCollection1:3333/ ``````  https://siteColl*`                      |
| omitsitstorelist.txt      | Contains SharePoint lists and list items that you want to exclude from being audited.            | URI Reference URI Reference does not include site collection URL. For example, to exclude the list item with URL _http://sitecollection/list/document.docx_, specify only "_list/document.docx_" instead of full URL. Wildcard (\*) is supported to replace any number of characters. Examples: `*list/document.docx `````` */_catalogs/* `````` */_vti_inf.html `````` */Style Library* `````` */SitePages*` |
| omituserviewstorelist.txt | Contains a list of user or service accounts to be excluded from read access monitoring.          | `Login name` For example: SHAREPOINT\System                                                                                                                                                                                                                                                                                                                                                                   |
| omitviewstorelist.txt     | Contains lists and list items to be excluded from being monitored for read access.               | `URI Reference ` Only specify URI reference to a list or list item without `https:\\<siteCollection_name>` part. For example: `*list/document.docx`                                                                                                                                                                                                                                                           |
| omitwastorelist.txt       | Contains a list of web applications to be excluded from audit data collection.                   | `http(s)://URL` Enter the root web site URLs. If you have alternate access mapping configured in your SharePoint farm, and one web application has different URLs for different zones, you can use any of these URLs. For example: `http://webApplication1:3333/`                                                                                                                                             |
