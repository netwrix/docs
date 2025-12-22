---
title: "SharePoint Online Monitoring Scope"
description: "SharePoint Online Monitoring Scope"
sidebar_position: 10
---

# SharePoint Online Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SharePoint
Online monitoring scope.

Follow the steps to exclude data from the SharePoint monitoring scope:

**Step 1 –** Navigate to the _%ProgramData%\Netwrix Auditor\Netwrix Auditor for SharePoint
Online\Configuration_ folder and locate your monitoring plan.

If you have several monitoring plans for monitoring SharePoint Online, configure omitlists for each
monitoring plan separately.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                      | Description                                                                                                 | Syntax                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitstorelist.txt         | Contains a list URLs of SharePoint Online objects to be excluded from audit data collection.                | `https://URL` For example: `https://Corp.sharepoint.com/*`                                                                                                                                                                                                                                                                                   |
| omiteventloglist.txt      | Contains a list of event IDs to be excluded from the Netwrix Auditor System Health event log.               | `event ID` For example: `1001` Only add known error or warning events, otherwise you may lose important data.                                                                                                                                                                                                                                |
| omitreadstorelist.txt     | Contains the SharePoint Online lists, documents, etc., to be excluded from being monitored for read access. | `https://URL` For example: `https://Corp.sharepoint.com/*` `*list/document.docx`                                                                                                                                                                                                                                                             |
| omituserreadstorelist.txt | Contains a list of user accounts to be excluded from read access monitoring.                                | Provide user name in the UPN format. For example: `account@example.*.com`                                                                                                                                                                                                                                                                    |
| omitSitScStoreList.txt    | Contains a list of SharePoint Online site collections to be excluded from state-in-time data collection.    | Enter root web site URLs. For example: `https://URL`                                                                                                                                                                                                                                                                                         |
| omitSitStoreList.txt      | Contains SharePoint Online lists and list items to be excluded from state-in-time data collection.          | Enter list or list item URI (Unique resource identifier, or endpoint) reference. Note that URI Reference does not include site collection URL. For example, to exclude a list item with the `https://sitecollection.sharepoint.com/list/document.docx`, URL, you should specify the corresponding endpoint (URI), i.e. `list/document.docx`. |
