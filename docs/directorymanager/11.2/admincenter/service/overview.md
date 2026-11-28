---
title: "Directory Manager Services"
description: "Learn what the Directory Manager and third-party services do, where they are hosted, and which accounts run them."
keywords:
  - Directory Manager services
  - service accounts
  - gMSA
  - Key Distribution Service
  - Elasticsearch service
  - Windows services
sidebar_position: 110
---

# Directory Manager Services

Directory Manager services are long-running applications without a user interface. They run in the
background, each in its own Windows session. They usually start when you boot the machine that hosts
them, and they run scheduled tasks in the background. You can also start, pause, and stop them
manually.

Directory Manager relies on some of its own services and on third-party services for different
functions.

## Directory Manager core services

The following table describes the Directory Manager services.

| Service | Description |
| --- | --- |
| Data service | Performs core operations and communicates with Microsoft SQL Server to store and fetch data in the database. |
| Security service | <ul><li>Authenticates users and authorizes them on Directory Manager functions according to their roles.</li><li>Encrypts and decrypts data that the Directory Manager Data service stores in and fetches from the SQL database.</li></ul> |
| Replication service | Replicates attributes of the group, user, contact, computer, and organizational unit objects from the provider (such as Active Directory) to the Elasticsearch repository. With multiple Elasticsearch clusters, it also syncs data between clusters. |
| Email service | Maintains a queue of all notification requests that identity stores generate, and sends them one by one. |
| Scheduler service | Starts the runs of scheduled jobs defined in Directory Manager. |

These services run under specific accounts, not under the logged-on user or the default computer
account. See the Accounts to Run the Services topic for details.

### Services hosting

Directory Manager services are hosted on a web server, which can be native IIS or remote IIS. Only
the Security service can be deployed in remote IIS. Deploying the Data service, Replication service,
or Email service in remote IIS isn't supported.

You can create multiple Data services and Security services and host them on different web servers.
For example, you can host one Security service in native IIS and another in remote IIS.

To open IIS on a machine, see
[Opening IIS Manager](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90)).

![IIS Manager showing the Directory Manager services](/images/directorymanager/11.2/admincenter/portal/in_iis.webp)

## Third-party services

Directory Manager requires the following third-party services:

| Service                        | Description                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL Server Browser service     | Fetches the SQL servers in the environment and displays them on the Database Settings page of the Directory Manager Configuration Tool, where you configure a database for Directory Manager. Directory Manager stops when this service stops.                                                                     |
| Key Distribution Service (KDS) | To use Group Managed Service Accounts (gMSA) in Directory Manager, enable the Key Distribution Service (KDS) on the Directory Manager server. Directory Manager supports a gMSA in various contexts, such as for the Directory Manager app pool and as the service account for an identity store. |
| Elasticsearch service          | Searches the Elasticsearch repository to display object listings and search results in Directory Manager. If this service stops, Directory Manager doesn't work.                                                                                                                                                  |

### Services hosting

Third-party services are created as Windows services in Windows Services Manager.

To open the Services Manager, enter `services.msc` in the Run dialog box and click OK. The following
image shows an example of services in Windows Services Manager. You can start, stop, disable, and
delay a service.

![Windows Services Manager listing the third-party services that Directory Manager requires](/images/directorymanager/11.2/admincenter/service/inwindowsservicesmanager.webp)

## Accounts to run the services

In the Directory Manager Configuration Tool, specify the service accounts for the Directory Manager
app pool and Windows services.

| Services                          | Service account description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Directory Manager App Pool in IIS | Use a domain account or a Group Managed Service Account (gMSA). The account must be a member of the Administrators group or both the Backup Operators and IIS_IUSRS groups. The account manages the Directory Manager app pool in IIS. The Data service, Security service, and portals run under the app pool. For a Microsoft Entra ID identity store, you can specify a local account (with local administrator rights) in app pool for a machine that isn't joined to any domain. |
| Windows services                  | Use a domain account, system user account, or gMSA. The account must be a member of the Backup Operators group. The account runs the Windows services for Directory Manager, as discussed in the Third-party Services topic.                                                                                                                                                                                                                                                          |

## Elasticsearch clusters, nodes, and Directory Manager

When your environment has multiple Elasticsearch clusters and each cluster has multiple nodes,
Directory Manager creates the following for each node in a cluster:

- An Admin Center
- A Data service
- A Security service
- A Replication service
- A Scheduler service
- An Email service

**Cluster syncing**

Directory Manager uses the Replication service to sync data between clusters. To sync a cluster's
data to other clusters, enable data sync for at least one Replication service within the cluster.
See the [Enable Elastic Cluster Syncing](replicationservice.md#enable-elastic-cluster-syncing) topic
for additional information.
