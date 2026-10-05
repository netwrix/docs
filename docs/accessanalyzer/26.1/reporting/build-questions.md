---
title: Build Questions
description: Build your own tables and charts from scan data with the query builder, starting from the tables in the Reporting database.
sidebar_position: 2
---

A question is a query plus a way to show its result, as a table or a chart. You build questions with the query builder: pick a table, then add filters, summaries, groupings, and joins from menus. Reporting has no SQL editor, for anyone.

## The Reporting Database

New questions start from the **Reporting** database. Its tables present your scan data by subject.

| Subject | Tables |
|---|---|
| Active Directory | **Ad Domains**, **Ad Users**, **Ad Groups**, **Ad Group Membership**, and **Ad Effective Group Membership**, which follows nested groups |
| Entra ID | **Entra Users** and **Entra Groups** |
| File Server sources | **File System Objects**, **File System Share Permissions**, **File System Ntfs Permissions**, and **File System Sensitive Data** |
| File Server (Discover) sources | **File Server Discover Objects**, **File Server Discover Share Permissions**, **File Server Discover Ntfs Permissions**, and **File Server Discover Sensitive Data** |
| SharePoint Online | **Sharepoint Sites**, **Sharepoint Documents**, **Sharepoint Container Permissions**, **Sharepoint Sharing Links**, and **Sharepoint Sensitive Data** |
| Activity from Netwrix Activity Monitor | **File Activity**, **Sharepoint Activity**, and **Copilot Activity** |

A table is empty until the matching scan has run. [What each collection needs](netwrix-reports.md#what-each-collection-needs) lists which scan fills which data.

The questions in the Netwrix collections read a different database. You can open and run them, but you can't change them or build new questions on top of them. Start from a Reporting table instead.

## Build a Question

This example counts disabled Active Directory accounts in each department.

1. In Reporting, click **New**, then **Question**.
2. In **Pick your starting data**, select the **Ad Users** table from the **Reporting** database.
3. Click **Filter**, then select **Account Status**.
4. Select **Disabled**, then click **Add filter**.
5. Under **Summarize**, click **Pick a function or metric**, then select **Count of rows**.
6. Click **Pick a column to group by**, then select **Department**.
7. Click **Visualize**. Reporting shows the counts, and you can switch between a table and a chart.
8. Click **Save**, enter a name, and select a collection. [Collections](collections.md) explains where to save.

Other questions follow the same steps. For example, start from **File System Sensitive Data** and filter on **Host** to list the files on one server that matched a sensitive data pattern.

To add a saved question to a dashboard of your own, open the question, click the three-dot menu, and select **Add to a dashboard**.

## Limits

- A question that runs for more than 5 minutes stops with a timeout error. Add filters or summarize the data to make it smaller.
- Saved questions reuse a result for up to 15 minutes, so a question you saved can lag behind a scan that just finished.
