---
title: "Manage Data Sources in Directory Manager"
description: "Search, update, and delete data sources in Admin Center, and learn what happens to Synchronize jobs and queries when you delete one."
keywords:
  - search data source
  - update data source
  - delete data source
  - Admin Center data sources
sidebar_position: 20
---

# Manage Data Sources in Directory Manager

You can create data sources for various data providers in Directory Manager. You can also update and delete these data sources.

## Search a data source for a specific provider

You can search for a data source built on a particular provider by its name.

1. In Admin Center, click **Data Sources** in the left pane.

2. On the Data Sources page, click the tab for the provider the data source is built on.

3. Enter a search string in the search box and press _Enter_. The page displays the data sources whose names contain the string.

## Update a data source

You can update the details provided for a data source, such as its display name, the service account credentials to connect to it, and any other info you provided while creating it.

:::important Password Re-insertion Required
Due to security enhancements, when updating a data source, you must re-enter the **Service Account Password** even if you aren't changing it. This is a required security measure to ensure password field sanitization across the product.
:::

1. In Admin Center, click **Data Sources** in the left pane.

2. On the Data Sources page, click the tab for the provider the data source is built on.

3. Click **Edit** for a data source. The **Update Data Source** page opens and differs by provider. To modify the info, see the steps for creating the respective data source in the [Create Data Sources in Directory Manager](/docs/directorymanager/11.1/admincenter/datasource/create.md) topic.

4. Click **Update Data Source**.

## Delete a data source

You can delete a data source to prevent users from using it as source and destination in Synchronize jobs.

:::note
Deleting a data source corrupts all Synchronize jobs, membership queries, and search queries using that data source.
:::

1. In Admin Center, click **Data Sources** in the left pane.

2. On the Data Sources page, click the tab for the provider the data source is built on.

3. Click **Delete** for a data source to delete it.
