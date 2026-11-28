---
title: "Select the Source and Destination for a Synchronize Job"
description: "Choose the source and destination identity stores or data sources for a Synchronize job and set the provider-specific options for each."
keywords:
  - Synchronize source and destination
  - identity store provider
  - data source provider
  - Microsoft Excel destination
  - Oracle time stamp
  - Directory Manager
sidebar_position: 10
---

# Select the Source and Destination for a Synchronize Job

Before you create a job, create the required identity providers and data sources in Admin Center on the **Identity Stores** and **Data Sources** tabs. After you create the providers, specify them on the **Select Your Source and Destination** page.

To configure the settings for the providers:

1. On the **Select Your Source and Destination** page, do the following:

    - **Your Source**: Specify the data source or identity store to move data from.
    - **Your Destination**: Specify the data source or identity store to move data to.

2. Provide the following information for the selected providers:

    - Microsoft Active Directory

        Specify a container. To include sub containers, select the **Include Sub Containers** checkbox.

        - For a source, the job fetches data from the container.
        - For a destination, the job creates or updates data in the container.

    - Microsoft Entra ID

        Specify a container. To include sub containers, select the **Include Sub Containers** checkbox.

        - For a source, the job fetches data from the container.
        - For a destination, the job creates or updates data in the container.

    - Generic LDAP

        You don't need to provide any additional information for this provider.

    - Google Workspace

        Specify a container. To include sub containers, select the **Include Sub Containers** checkbox.

        - For a source, the job fetches data from the container.
        - For a destination, the job creates or updates data in the container.

    - Microsoft Access

        In the **Table Name** dropdown list, select the table you want to use. The list shows the tables in the selected Microsoft Access database.

    - Microsoft Excel

        In the **Select Sheet Name** dropdown list, select the sheet you want to use. The list shows the sheets in the selected Microsoft Excel file.

        - If Excel is the destination (with the **Replace file-discard existing content** option selected on the **Destination Provider** page of the Job wizard) and any sheet name of the Excel file is two or fewer characters, the Synchronize job corrupts all the sheets in that Excel file.
        - If Excel is the destination (with the **Delete** option selected on the **Create Object** page of the Job wizard) and the Excel file schema has more than 127 columns, the job fails.

    - Oracle

        In the **Table or View** dropdown list, select the database table you want to use. The list shows the tables in the Oracle database.

        If the type column of the Oracle database isn't set as Datetime, the time stamp functionality of Synchronize doesn't work. You must convert the given type to Datetime explicitly while you configure the Synchronize job.

    - ODBC

        In the **Table Name** box, enter the name of the table you want to use.

    - Microsoft SQL Server

        In the **Table or View** dropdown list, select the database table you want to use. The list shows the tables in the Microsoft SQL Server database.

    - Text Driver/CSV

        You don't need to provide any additional information for this provider.

3. Click **Next Step**.
