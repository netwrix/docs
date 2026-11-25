---
title: "Elasticsearch and Replication Service in Directory Manager"
description: "Learn how the Elasticsearch and Replication services power searches in Directory Manager, how objects are replicated, and where to find the service logs."
keywords:
  - Elasticsearch
  - Replication service
  - replication settings
  - Replication service logs
  - Synchronize history
sidebar_position: 130
---

# Elasticsearch and Replication Service in Directory Manager

Elasticsearch handles the searches performed in Directory Manager.

Elasticsearch relies on two services:

- **Elasticsearch Service** searches the Elasticsearch repository and displays the search results
  when a search is performed through Directory Manager. If this service stops, Elasticsearch won't
  work.
- **Replication Service** replicates attributes of the following objects from the provider (such as
  Active Directory) to Elasticsearch:

  - Group
  - User
  - Contact
  - Computer
  - Organizational Unit

The [Directory Manager Replication Service](/docs/directorymanager/11.1/admincenter/service/replicationservice.md)
replicates only the changes made to these objects on the directory server. The Data service
replicates changes made through Admin Center, the Directory Manager portal, or Management Shell to
the Directory Manager database. These changes are saved directly in the Elasticsearch repository.
See the
[Directory Manager Data Service](/docs/directorymanager/11.1/admincenter/service/dataservice/overview.md)
topic.

Synchronize updates objects in the directory directly. As soon as Synchronize provisions,
de-provisions, or updates objects in the directory, the Replication service replicates them to
Elasticsearch.

Synchronize history is saved to Elasticsearch when Active Directory, Microsoft Entra ID, Generic
LDAP, or Google Workspace is the destination provider in the respective Synchronize job. The Data
service replicates this history to the Directory Manager database.

:::note
The **Recycle Bin** in the Directory Manager portal fetches data from the directory server, not from
Elasticsearch.
:::

## Replication Settings

In Admin Center, you can specify settings for the Replication service at the global and local
levels. Global settings apply to all identity stores in Directory Manager. Local settings are
specific to an identity store.

- At the global level, you can schedule the service to run every x minutes to replicate object
  attributes to Elasticsearch. You can also manually restore object data to Elasticsearch. See the
  [Manage Global Replication Settings in Directory Manager](/docs/directorymanager/11.1/admincenter/replication/settings.md)
  topic.
- For an identity store, you can specify the object attributes the service replicates to
  Elasticsearch. See the
  [Manage Identity Store Replication Settings](/docs/directorymanager/11.1/admincenter/identitystore/replication.md)
  topic.

:::note
The Replication service doesn't replicate excluded domains for an identity store. See the
[Exclude an Active Directory Domain from Replication](/docs/directorymanager/11.1/admincenter/identitystore/manage.md#exclude-an-active-directory-domain-from-replication)
topic.
:::

## Replication Service Logs

The logs for the Replication service are in the service folder on the Directory Manager server.

To view the logs:

1. Launch IIS on the Directory Manager server and navigate to:  
   …\Sites\GroupIDSite11\GroupIDReplicationService
2. Right-click this folder and select **Explore**.
3. Open the **Logs** folder to read the logs.

Events are logged in a text file. When the file reaches 100 MB, Directory Manager archives it in the
same directory by replacing the file extension with the suffix .Log.X. It then creates a new text
file with the original name. X in .Log.X is a number from 1 to 10 representing the archiving order,
where ‘1’ denotes the most recent file.
