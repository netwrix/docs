---
title: "Select Your Source and Destination"
description: "Select Your Source and Destination"
sidebar_position: 10
---

# Select Your Source and Destination

You must create required identity providers and data sources before creating a job. They are created
in Admin Center under Identity Stores and Data Sources tab respectively. After creating the
providers, you need to specify the providers in **Select Your Source and Destination** page.

Follow these steps to configure the settings for the providers:

1. On the **Select Your Source and Destination** page, do the following:

    - **Your Source**: Specify the data source or identity store from which to move data.
    - **Your Destination**: Specify the data source or Identity store to move data to.

    Provide the following information for the selected providers:

    - Microsoft Active Directory

        Specify a container. To include sub containers, select the checkbox **Include Sub
        Containers**.

        - In case of a source, the job will fetch data from the container.
        - In case of a destination the job will create or update data in the container.

    - Microsoft Entra ID

        Specify a container. To include sub containers, select the checkbox **Include Sub
        Containers**.

        - In case of a source, the job will fetch data from the container.
        - In case of a destination, the job will create or update data in the container.

    - Generic LDAP

        You do not need to provide any additional information for this provider.

    - Google Workspace

        Specify a container. To include sub containers, select the checkbox **Include Sub
        Containers**.

        - In case of a source, the job will fetch data from the container.
        - In case of a destination, the job will create or update data in the container.

    - Microsoft Access

        In the **Table Name** drop-down list, select the table you want to use.

        The list displays the tables in the selected Microsoft Access database.

    - Microsoft Excel

        In the **Select Sheet Name** drop-down list, select the sheet you want to use.

        The list displays the sheets in the selected Microsoft Excel file.

        1. In case of Excel as destination (with Replace file-discard existing content option
           selected on the Destination Provider page of the Job wizard), if any sheet name of the
           Excel file is of two or less character the Synchronize job corrupts all the sheets in
           that Excel file.

        2. In case of Excel as destination (with Delete option selected on the Create Object page of
           the Job wizard), If the Excel file schema is of more than 127 columns the job fails.

    - Oracle

        In the **Table or View** drop-down list, select the database table you want to use.

        The list displays the tables in the Oracle database.

        In case the type column of Oracle database is not set as Datetime then time stamp
        functionality of Synchronize do not work. The given type needs to be converted into Datetime
        explicitly while configuring the Synchronize job.

    - ODBC

        In **Table Name** box, enter the name of the table you want to use.

        Souldn't user select instead of entering the name?

    - Microsoft SQL Server

        In the **Table or View** drop-down list, select the database table you want to use.

        The list displays the tables in the Microsoft SQL Server database.

    - Text Driver/CSV

        You do not need to provide any additional information for this provider.

2. Click **Next Step**.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
