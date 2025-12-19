---
title: "Secure Netwrix Data Classification"
description: "Secure Netwrix Data Classification"
sidebar_position: 10
---

# Secure Netwrix Data Classification

The steps described within this article can be used to review the security of your Netwrix Data
Classification deployment and apply any changes you feel necessary to secure the administration of,
and access to, the Classification interfaces.

In this article we will cover:

- [Configuring Administration Console Access](#configuring-administration-console-access)
- [Configuring Microsoft SQL Server Security](#configuring-microsoft-sql-server-security)
- [Reviewing web service endpoints](#reviewing-web-service-endpoints)

## Configuring Administration Console Access

By default, post installation, all users will be considered Superusers with access to all areas of
the product. To begin the process of securing the product please follow the below steps:

1. Access the Administration Console
2. Select Users from the top navigation bar
3. Select Add
4. Your username will be pre-filled and must first be added to ensure that you do not lose access to
   the system.
5. You can now add other users / groups as required - either as Superusers, or with access to
   specific areas / functions

Superusers have access to all areas / functions within the product but may not see all search
results (if they have been filtered based on security in the source system such as SharePoint).

Optionally, you can also consider using a federated authentication mechanism, such as Azure AD.

## Configuring Microsoft SQL Server Security

Netwrix Data Classification supports several options to mitigate risk against the content stored in
the back-end SQL Server database:

- Connection Encryption—Protects your data as it moves between the core products and the SQL Server
  database. To enable this mode, do the following:

    1. Open conceptConfig in each of the configured application locations, typically:

        - C:\inetpub\wwwroot\conceptQS\bin
        - C:\Program Files\Concept Searching\Services\ConceptCollectorService
        - C:\Program Files\Concept Searching\Services\conceptIndexer

    2. Check the Encrypt Connection box as well as the Trust Server Certificate box if you do not
       have a valid certificate loaded for SQL Server.
    3. Click Save.

- Transparent Data Encryption (TDE)—Protects your data at rest within SQL Server. Netwrix Data
  Classification supports the use of TDE, it should of course be noted that this does incur a
  performance overhead. TDE should be managed and configured by your database administrator(s).

### To secure Search Index (CSE File)

The CSE file index contains the full text search behind the Classification engine. There are two key
groupings to this engine:

- Text.cse—Stores the raw text of each document in a compressed and obfuscated format.
- All other files—Stores the compound term processing search index, identifying which documents
  should be returned for a given query

Text.cse can be optionally encrypted, this utilises AES/SHA256 to further improve the security of
the full text at rest. You can enable this mode by:

1. Access the Administration Console;
2. Select Config from the top navigation bar;
3. Enable the Encrypt Text (Text.cse) option (under advanced settings - select the screwdriver
   spanner to show);
4. Select Save.

The remaining files cannot be reverse engineered to retrieve the full document text - however, do
contain the weightings and terms within the text. We recommend restricting access to all files at
the file system level as well as considering file system encryption.

## Reviewing web service endpoints

There are several web service endpoints which provide access to various levels of information within
Netwrix Data Classification. If you are exposing the administration interface to the internet then
you may wish to fully restrict access to these endpoint(s) via your firewall or IIS Configuration
(potentially removing all external access).

The following paths should be considered as part of this process:

- /_api/\*
- \*.asmx
- \*.svc

It should be noted that when using Netwrix Data Classification for SharePoint Online certain
endpoints are required, each of these endpoints are located within the folder
"_/ConceptClassifierApp/_".
