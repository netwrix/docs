---
title: "Create a Data Source"
description: "Create a Data Source"
sidebar_position: 10
---

# Create a Data Source

You can create Synchronize jobs to synchronize data across different providers. As a prerequisite,
you must create data sources for those providers.

You primarily use data sources in Synchronize jobs, but you can also use them in queries to search
for directory objects and in queries for group membership update.

:::note
If the file for a data source is hosted on OneDrive, the service account you enter in the Service
Account box must have a OneDrive license.
:::

## Create a Data Source for MS Excel

Create a data source for an Excel file to establish a connection before using it as a source or
destination in Synchronize jobs, or in queries. With Directory Manager, you can connect to an Excel
file stored on a local server or on OneDrive.

Synchronize supports Microsoft Excel (\*.xls | xlsx) to serve as both a source and destination
provider. Use it as destination in a Synchronize job to export data from a source to a new Excel
worksheet. Synchronize builds the schema of the new Excel worksheet automatically according to the
fields that you select from the source to map to the destination.

The Directory Manager Installer installs the required components for the MS Excel provider while
installing Directory Manager. However, if you experience any issue, confirm that the Directory
Manager server has the following:

- Microsoft Office 2007 or later
- Data connectivity components found at
  [Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

The Excel file for creating a data source can reside on a local server or OneDrive. Follow the
steps in the respective section to create a data source.

- When the Excel File is Located on a Local Server
- When the Excel file is located on OneDrive

### When the Excel File is Located on a Local Server

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Excel_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _Local Server_.

Step 6 – In the File Path box, provide the path to the MS Excel file you want to create the data
source for. This path should be complete with the file name and extension. For example:
D:\Employee Records\Sheets\EmployeeMedical Records.xlsx

:::note
The MS Excel file must be either on the machine that runs Data service or in a location that Data
service can access.
:::


Step 7 – If the file is on a network path, enter the network domain or hostname in the
Domain/Hostname box.

Step 8 – In the User Account and Password boxes, enter the username and password of an account to
access the file on the network path.

Step 9 – Click **Create Data Source**.
The data source is available on the Excel tab of the Data Sources page.

### When the Excel file is located on OneDrive

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Excel_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _OneDrive_.

Step 6 – In the Service Account and Service Account Password boxes, enter the username and password
of a service account to access the file on OneDrive.

Step 7 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

:::note
The registered app must have the following API permissions to access files on OneDrive:
:::


![API permissions](/images/directorymanager/11.1/admincenter/datasource/apipermissions.webp)

Step 8 – In the Registered Tenant ID on Azure Active Directory box, enter the tenant ID assigned to
the Directory Manager application when you registered it in Microsoft Entra Admin Center.

Step 9 – Enter the name of the file in the **File Name** box. This name should be complete with the
file extension, for example, Employee Contact Details.xlsx

Step 10 – Click **Create Data Source**.
The data source is available on the Excel tab of the Data Sources page.

## Create a Data Source for MS Access

Create a data source for an Access database to establish a connection before using it as a source or
destination in Synchronize jobs, or in queries. Directory Manager lets you connect to an
Access file stored on a local server or on OneDrive.

Synchronize supports Microsoft Access (.mdb | .accdb) to serve as both a source and destination
provider.

The MS Access provider supports automatic schema detection. For Synchronize to communicate with this
provider, you must install data connectivity components on the Directory Manager server. These
components are available at
[Microsoft Access Database Engine 2016 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=54920).

The Access file for creating a data source can reside on a local server or OneDrive. Follow the
steps in the respective section to create a data source.

- When the Access File is Located on a Local Server
- When the Access File is Located on OneDrive

### When the Access File is Located on a Local Server

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Access_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _Local Server_.

Step 6 – In the File Path box, provide the path to the MS Access database you want to create the
data source for. This path should be complete with the file name and extension. For example:
D:\Employee Records\Databases\Employee Medical Records.accdb

:::note
The Access database must be either on the machine that runs Data service or in a location that
Data service can access.
:::


Step 7 – If the database file is password protected, enter the password in the File Password box.

Step 8 – If the file is on a network path, enter the network domain or hostname in the
Domain/Hostname box.

Step 9 – In the User Account and Password boxes, enter the username and password of an account to
access the file on the network path.

Step 10 – Click **Create Data Source**.
The data source is available on the Access tab of the Data Sources page.

### When the Access File is Located on OneDrive

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Microsoft Access_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _OneDrive_.

Step 6 – In the Service Account and Service Account Password boxes, enter the username and password
of a service account to access the file on OneDrive.

Step 7 – If the database file is password protected, enter the password in the File Password box.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

:::note
The registered app must have the following API permissions to access files on OneDrive:
:::


![API permissions](/images/directorymanager/11.1/admincenter/datasource/apipermissions.webp)

Step 9 – In the Registered Tenant ID on Azure Active Directory box, enter the tenant ID assigned to
the Directory Manager application when you registered it in Microsoft Entra Admin Center.

Step 10 – Enter the name of the file in the File Name box. This name should be complete with the
file extension, for example, Employee Medical Records.accdb.

Step 11 – Click **Create Data Source**.
The data source is available on the Access tab of the Data Sources page.

## Create a Data Source for Oracle

You can create a data source for an Oracle server or a specific database on a server. You can use
this data source in queries and as a source and destination provider in Synchronize jobs. This
provider supports dynamic schema detection.

:::note
You must install the Oracle client to use this provider. Ensure you reboot your computer after
installing the Oracle client.
:::


To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Oracle_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – In the Oracle Server or Service Name box, enter the name of the Oracle service or the
server you want to create the data source for.

Step 6 – In the Service Account and Service Account Password boxes, provide the username and
password of a service account to connect to the Oracle server.
When you use this data source in a Synchronize job, you can select the databases that these
credentials can access.

Step 7 – In the Protocol box, specify the protocol to use for connecting to the databases on the
Oracle server. For example, TCP, or TCP/IP.

Step 8 – In the HostName box, enter the name of the machine that hosts the Oracle server.

Step 9 – In the Port Number box, enter the port configured for the Oracle server. Directory Manager
uses this port to communicate with the Oracle server.

Step 10 – In the Database or Schema (optional) box, specify the name of the database you want to
create the data source for. You may also leave this field blank. In that case, a Synchronize job
displays all databases on the specified server, and the user can select a database as needed.

Step 11 – Click **Create Data Source**.
The data source is available on the Oracle tab of the Data Sources page.

## Create a Data Source for SQL Server

Use Directory Manager to create a data source for an SQL database. You can use this data source
in queries and as a source and destination in Synchronize jobs. This provider supports dynamic
schema detection.

To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _SQL Server_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – The SQL database for which you want to create a data source resides on an SQL server. Enter
the name or IP address of this SQL server in the SQL Server Name box.

Step 6 – By default, Directory Manager uses SQL authentication to connect to the SQL
server. In this case, the Service Account and Service Account Password boxes are enabled. Enter the
username and password of an SQL server account to connect to the SQL server in the respective boxes.

Step 7 – To use Windows authentication to connect to the SQL server using a Windows account, select
the **Windows Authentication** checkbox. With Windows authentication, users are already logged onto
Windows and don't have to log on separately to SQL Server.

Step 8 – In the SQL Server Database Name box, specify the SQL database to create a data source for.

Step 9 – Click **Create Data Source**.
The data source is available on the MS SQL Server tab of the Data Sources page.

## Create a Data Source for a Text/CSV File

You can create a data source for a comma-separated values (.csv) file or a text (.txt) file. You
must also specify the delimiter used in the file to separate values.

You can use this data source in queries and only as a source in Synchronize jobs.

With Directory Manager, you can connect to a text file stored on a local server or on
OneDrive. Follow the steps in the respective section to create a data source.

- When the Text File is Located on a Local Server
- When the Text File is Located on OneDrive

### When the Text File is Located on a Local Server

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Text/CSV_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _Local Server_.

Step 6 – In the File Path box, provide the path to the text file you want to create the data source
for. This path should be complete with the file name and extension. For example:
D:\Employee Records\Sheets\Employee Medical Records.csv

:::note
The text file must be either on the machine that runs Data service or in a location that Data
service can access.
:::


Step 7 – In the Delimiter box, specify the character that separates values in the file.
You can also enter a space as a character.

Step 8 – If the file is on a network path, enter the network domain or hostname in the
Domain/Hostname box.

Step 9 – In the User Account and Password boxes, enter the username and password of an account to
access the file on the network path.

Step 10 – Click **Create Data Source**.
The data source is available on the Text/CSV tab of the Data Sources page.

### When the Text File is Located on OneDrive

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _Text/CSV_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – From the File Server dropdown list, select _OneDrive_.

Step 6 – In the Service Account and Service Account Password boxes, enter the username and password
of a service account to access the file on OneDrive.

Step 7 – In the Delimiter box, specify the character that separates values in the file.
You can also enter a space as a character.

Step 8 – In the Registered Application ID on Azure Active Directory box, enter the application ID
assigned to the Directory Manager application when you registered it in Microsoft Entra Admin
Center.

:::note
The registered app must have the following API permissions to access files on OneDrive:
:::


![API permissions](/images/directorymanager/11.1/admincenter/datasource/apipermissions.webp)

Step 9 – In the Registered Tenant ID on Azure Active Directory box, enter the tenant ID assigned to
the Directory Manager application when you registered it in Microsoft Entra Admin Center.

Step 10 – Enter the name of the file in the File Name box. This name should be complete with the
file extension, for example, “Employee Contact Details.csv”.

Step 11 – Click **Create Data Source**.
The data source is available on the Text/CSV tab of the Data Sources page.

## Create a Data Source for ODBC

Use an ODBC data source to connect to an ODBC-compatible provider, such as databases, directories,
or even files. Examples include SQL server, MS Access files, and Oracle.

Create a separate data source for each ODBC-compatible file, database, or directory you
want to use in queries or as source/destination in Synchronize jobs.

To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _ODBC_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – Enter the DSN name in the DSN box. Directory Manager uses this name to request a connection
to the ODBC data source. Note the following:

- For a system DSN, provide the name of the DSN.
- For a file DSN, provide the file path with file name and extension.

Step 6 – Select the **System DSN** or **File DSN** option button to specify the DSN type to use for
connecting to the data source.

Step 7 – If the data source is password protected, provide a username and password in the
**Service Account** and **Service Account Password** boxes to access it.
Depending on the data source, you may not need to provide both a username and password.
For example, an MS Access database may need a password only while an SQL server may require both
username and password.

Step 8 – Click **Create Data Source**.
The data source is available on the ODBC tab of the Data Sources page.

## Create a Data Source for SCIM

Directory Manager supports identity providers, namely Active Directory, Microsoft Entra ID, and
Google Workspace, but it doesn't support Slack, AWS, JumpCloud, and GitHub. You can create a
SCIM-based data source for these and other providers to use them in queries and as
source/destinations in Synchronize jobs. As a prerequisite, the provider must support SCIM and
expose an endpoint URL that Directory Manager can consume.

To create a data source:

Step 1 – In Admin Center, click **Data Sources** in the left pane.

Step 2 – On the Data Sources page, click **Create Data Source** in the top right corner. The Create
Data Source page appears.

Step 3 – In the Data Source Type dropdown list, select a provider type to create a data source for.
This list displays the supported providers. Select _SCIM_.

Step 4 – Enter a name for the data source in the Name box.

Step 5 – In the SCIM Endpoint box, enter the SCIM endpoint URL exposed by the provider for which you
want to create a data source.

Step 6 – In the Bearer Token box, enter the authentication token you generated in the provider.

Step 7 – Click **Create Data Source**.
The data source is available on the SCIM tab of the Data Sources page.
