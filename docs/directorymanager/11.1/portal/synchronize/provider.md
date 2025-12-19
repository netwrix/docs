---
title: "Synchronize Providers"
description: "Synchronize Providers"
sidebar_position: 20
---

# Synchronize Providers

You can create identity stores for several identity providers (such as Active Directory and
Microsoft Entra ID) as well as create data sources for providers such as files and databases. These
identity stores and data sources can be used as source and destination in Synchronize jobs.
Synchronize transfers data from one data source to another.

A brief description of about each supported data provider is given below.

## Identity Stores

Identity store must be created for these providers. Identity store providers can be used as both
source and destination.

- Microsoft Active Directory

    The Active Directory provider can serve as both a source and destination provider. This provider
    supports dynamic schema detection.

- Microsoft Entra ID

    Microsoft Entra ID is a cloud computing platform operated by Microsoft. It can also be used as
    source and destination provider.

- Generic LDAP version 3.0

    Use the Generic LDAP Version 3.0 provider to connect to any LDAP version 3-compliant directory
    server. This provider does not support dynamic schema detection. The schema included for this
    provider mostly contains commonly used fields. You can add fields to the existing schema.

    Synchronize supports many LDAP-compliant directory servers directly and provides specialized
    providers for connecting with them. These directories include:

    - Active Directory
    - Lotus Notes
    - Novell Directory Services
    - Sun ONE Directory Server

    When connecting with any of these, it is recommended that you use their specific provider
    instead of the generic LDAP provider. The use of specialized providers results in performance
    gains since they eliminate the extra steps involved in connecting with generic providers.

- Google Workspace

    Use Google Workspace to connect to Google Workspace plans. You can use it as a source and
    destination provider.

See the [Identity Stores](/docs/directorymanager/11.1/admincenter/identitystore/overview.md) topic for additional
information on identity stores.

## Data Sources

External data sources must be created first in Data Sources tab in Admin Center.

- Microsoft Access

    Use the Access provider to connect to a Microsoft Access (.mdb | .accdb) database. Microsoft
    Access (.mdb | .accdb) supports automatic schema detection.

    For communicating with this provider, Synchronize requires data connectivity components to be
    installed on your machine. You can download a compatible version of the required components from
    either of the following links:

    - Microsoft Access Database Engine 2010 Redistributable
    - 2007 Office System Driver: Data Connectivity Components

- Microsoft Excel

    Use Microsoft Excel (\*.xls | xlsx) as a source and destination provider. You can use the Excel
    provider as destination to export source data to a new Excel worksheet, where the schema of the
    new Excel worksheet is automatically built according to fields that you select from the source
    to map to the destination.

    To use Microsoft Excel as provider, you must install these software components on your machine:

    - Microsoft Office 2007/2010

    Data connectivity components found at these sites:

    - Microsoft Access Database Engine 2010 Redistributable
    - 2007 Office System Driver: Data Connectivity Components

    You may encounter the following issues while using Excel provider in a Synchronize job:

    - In case of Excel as destination (with Replace file-discard existing content option selected on
      the Destination Provider page of the Job wizard), if any sheet name of the Excel file is of
      two or less character the Synchronize job corrupts all the sheets in that Excel file.
    - In case of Excel as destination (with Delete option selected on the Create Object page of the
      Job wizard), If the Excel file schema is of more than 127 columns the job fails.

- Oracle

    You can use the Oracle provider as both a source and destination provider. This provider
    supports dynamic schema detection.

    The Oracle client must be installed to use this provider (you must reboot your computer after
    installing the Oracle client.

- ODBC

    You can connect the ODBC provider to any ODBC-compatible data source including databases,
    directories, and files.

- Microsoft SQL Server

    Use the SQL Server provider to connect to Microsoft SQL Server 2005, 2008, 2008 R2 and 2012. It
    can be selected both as a source and destination. This provider supports dynamic schema
    detection.

    To connect with Microsoft SQL Server versions 6.5 and 7.0, use the ODBC provider.

- Text

    Use the Microsoft Text Driver (\*.txt; \*.csv) to connect to comma-separated value (CSV) text
    files or tab-separated value (TSV) text files. This provider supports automatic schema detection
    if a header row is included in the file.

See the [ Data Sources](/docs/directorymanager/11.1/admincenter/datasource/overview.md) topic for additional information
on Data Sources.
