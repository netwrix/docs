---
title: "SharePoint Online Monitoring Scope"
description: "SharePoint Online Monitoring Scope"
sidebar_position: 30
---

# SharePoint Online Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the SharePoint
Online monitoring scope.

## Exclude data from the monitoring scope

**Step 1 –** Navigate to the _%ProgramData%\Netwrix Auditor\Netwrix Auditor for SharePoint
Online\Configuration_ folder and locate your monitoring plan.

If you have several monitoring plans for monitoring SharePoint Online, configure omitlists for each
monitoring plan separately.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported.
- Auditor ignores lines that start with the # sign as comments.

| File                      | Description                                                                                                 | Syntax and example                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitstorelist.txt         | URLs of SharePoint Online objects to exclude from audit data collection.                                    | `https://URL`<br/>`https://Corp.sharepoint.com/*`                                                                                                        |
| omiteventloglist.txt      | Event IDs to exclude from the Netwrix Auditor System Health event log. Add only known error or warning events, otherwise you may lose important data. | `event ID`<br/>`1001`                                                                                                                                    |
| omitreadstorelist.txt     | SharePoint Online lists, documents, and other objects to exclude from read access monitoring.               | `https://URL`<br/>`https://Corp.sharepoint.com/*`<br/>`*list/document.docx`                                                                              |
| omituserreadstorelist.txt | User accounts to exclude from read access monitoring.                                                       | User name in the User Principal Name (UPN) format<br/>`account@example.*.com`                                                                                                  |
| OmitSitScStoreList.txt    | Site collections to exclude from state-in-time data collection.                                             | Root web site URL<br/>`https://URL`                                                                                                                      |
| OmitSitStoreList.txt      | Lists and list items to exclude from state-in-time data collection.                                         | List or list item URI without the site collection URL. For example, for `https://sitecollection.sharepoint.com/list/document.docx`, enter:<br/>`list/document.docx` |
