---
title: "Synchronize"
description: "Synchronize"
sidebar_position: 90
---

# Synchronize

Directory Manager Synchronize is a web-based application that can be accessed using the Directory
Manager portal. The application is a bi-directional synchronization engine for transferring data
from one data source to another. The data sources may include directory servers, databases or files.
Utilizing a very intuitive GUI, you can create Synchronize jobs to provision, de-provision or
synchronize multiple data sources.

The Synchronize portal is also capable of applying transformations to the data being transferred.
This allows you to convert data after retrieving it from the source and before it gets saved at the
destination.

## Prerequisites for Synchronize

Using Directory Manager, you can create identity stores for several identity providers (such as
Active Directory and Microsoft Entra ID) as well as create data sources for providers such as files
and databases. Directory Manager Synchronize uses user-defined identity stores (as source and
destination) built on databases, files and other applications such as Oracle, SQL and so on. To view
the list of supported Synchronize providers, see the [Synchronize Providers](/docs/directorymanager/11.1/portal/synchronize/provider.md) topic.

The following must be defined before you can use Synchronize:

- Identity Store – Identity stores must be created in Admin Center for sources and destinations
  providers. For working with Synchronize, create a Synchronize based identity store for creating
  jobs and job collections.

    Synchronize data for AD and Microsoft Entra ID is directly saved to Elasticsearch and
    Replication is not required.

- Data Sources – You need to add the data sources in Admin Center like Microsoft Excel, Text,
  Oracle, etc for creating job and job collections.
- Permissions – For performing Synchronize operations, the logged-in user must have Synchronize
  specific permissions. These permissions enable the user to create, edit and run jobs or job
  collections as per the defined Synchronize policy.
- Policies – Using the Synchronize policy, you can allow or disallow a provider to be used as a
  source or destination. You can choose the object types that can be created or synced at the
  destination using a Synchronize job. For each object type in an identity store and data source,
  specify the attributes that will be available for mapping the source and destination fields in a
  Synchronize job.
- History – Synchronize can maintain a complete track of actions performed in a directory through a
  Synchronize job, provided that an identity store for the destination provider has been defined in
  Directory Manager Admin Center and history tracking is enabled for that identity store. The
  actions to be tracked for Synchronize are also specified in history settings of that identity
  store.
- Workflows – Workflow requests can be enabled to run job or job collections. A workflow needs to be
  created in the Admin Center and an approver must be assigned for that workflow. Each time if a
  user runs a synchronize job, the job runs only when the approver approves the request. If they
  deny, the job will not run.
- Notifications – An SMTP server must be configured for the destination's identity store. Using that
  SMTP server email notification can be sent to designated recipients for different actions
  performed while executing a Synchronize job.
- Messaging Provider – A messaging provider must be configured for the destination's identity store
  so that mail-enabled objects can be created through Synchronize job in the destination.

## Dashboard

Synchronize dashboard displays performance widgets and cards displaying the data about your jobs and
job collections. On the navigation pane on the left side, you will see the following tabs:

- Create New ([Create a Job](/docs/directorymanager/11.1/portal/synchronize/create/create.md) and [Create a Job Collection ](/docs/directorymanager/11.1/portal/synchronize/collection/create.md))
- [Dashboard](/docs/directorymanager/11.1/portal/synchronize/dashboard.md)
- [Manage a Job](/docs/directorymanager/11.1/portal/synchronize/manage/job.md)
- [Manage a Job Collection ](/docs/directorymanager/11.1/portal/synchronize/manage/jobcollection.md)
- [Job Templates](/docs/directorymanager/11.1/portal/synchronize/manage/jobtemplate.md)
- [Job Collection Template](/docs/directorymanager/11.1/portal/synchronize/manage/jobcollectiontemplate.md)
