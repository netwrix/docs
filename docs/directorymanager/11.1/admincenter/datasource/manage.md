---
title: "Manage a Data Source"
description: "Manage a Data Source"
sidebar_position: 20
---

# Manage a Data Source

With Directory Manager, you can create data sources for various data providers. You can also update
and delete these data sources.

## Search a Data Source for a Specific Provider

You can search for a data source built on a particular provider by its name.

1. In Admin Center, click **Data Sources** in the left pane.

2. On the Data Sources page, click the tab for a provider to search for a data source built on
it.

3. Enter a search string in the search box and press _Enter_. Data sources that contain the
string in their names are displayed.

## Update a Data Source

You can update the details provided for a data source, such as its display name, the service account
credentials to connect to it, and any other info you provided while creating it.

:::important Password Re-insertion Required
Due to security enhancements, when updating a data source, you must re-enter the **Service Account Password** even if you aren't changing it. This is a required security measure to ensure password field sanitization across the product.
:::

1. In Admin Center, click **Data Sources** in the left pane.

2. On the Data Sources page, click the tab for the provider the data source is built on.

3. Click **Edit** for a data source. The **Update Data Source** page is displayed, that
differs by provider. Refer to the steps for creating the respective data source in the
[Create a Data Source](/docs/directorymanager/11.1/admincenter/datasource/create.md) topic to modify the info.

4. Click **Update Data Source**.

## Delete a Data Source

You can delete a data source to prevent users from using it as source and destination in Synchronize
jobs.

:::note
Deleting a data source corrupts all Synchronize jobs, membership queries, and search queries
using that data source.
:::

1. In Admin Center, click **Data Sources** in the left pane.

2. On the Data Sources page, click the tab for the provider for which you want to delete a
data source.

3. Click **Delete** for a data source to delete it.
