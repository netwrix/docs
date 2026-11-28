---
title: "GroupID Synchronize Overview"
description: "Learn what GroupID Synchronize does and what you must define in Admin Center before you create jobs."
keywords:
  - GroupID Synchronize
  - synchronization engine
  - Synchronize prerequisites
  - bidirectional synchronization
sidebar_position: 90
---

# GroupID Synchronize Overview

GroupID Synchronize is a web-based application that can be accessed using the GroupID
portal. The application is a bidirectional synchronization engine for transferring data
from one data source to another. The data sources may include directory servers, databases, or
files. With an intuitive GUI, you can create Synchronize jobs to provision, de-provision, or
synchronize multiple data sources.

The Synchronize portal is also capable of applying transformations to the data being transferred.
With the portal, you can convert data after retrieving it from the source and before it gets saved
at the destination.

## Prerequisites for Synchronize

Using GroupID, you can create identity stores for several identity providers (such as
Active Directory and Microsoft Entra ID) as well as create data sources for providers such as files
and databases. GroupID Synchronize uses user-defined identity stores (as source and
destination) built on databases, files, and other applications such as Oracle and SQL. To view the
list of supported Synchronize providers, see the
[Supported Synchronize Providers in GroupID](/docs/directorymanager/11.0/welcome/synchronize/provider.md)
topic.

The following must be defined before you can use Synchronize:

- **Identity Store:** Identity stores must be created in Admin Center for sources and destinations
  providers. For working with Synchronize, create a Synchronize-based identity store for creating
  jobs and job collections.

    Synchronize data for AD and Microsoft Entra ID is directly saved to Elasticsearch and
    replication isn't required.

- **Data sources:** To create jobs and job collections, you need to add data sources such as
  Microsoft Excel, Text, and Oracle in Admin Center.
- **Permissions:** For performing Synchronize operations, the logged-in user must have
  Synchronize-specific permissions. These permissions enable the user to create, edit, and run jobs
  or job collections as per the defined Synchronize policy.
- **Policies**: Using the Synchronize policy, you can allow or disallow a provider to be used as a
  source or destination. You can choose the object types that can be created or synced at the
  destination using a Synchronize job. For each object type in an identity store and data source,
  specify the attributes that are available for mapping the source and destination fields in a
  Synchronize job.
- **History:** Synchronize can maintain a complete track of actions performed in a directory through
  a Synchronize job, provided that an identity store for the destination provider has been defined
  in GroupID Admin Center and history tracking is enabled for that identity store. The
  actions to be tracked for Synchronize are also specified in history settings of that identity
  store.
- **Workflows:** Workflow requests can be enabled to run jobs or job collections. A workflow needs
  to be created in the Admin Center and an approver must be assigned for that workflow. Each time a
  user runs a Synchronize job, the job runs only when the approver approves the request. If the
  approver denies it, the job doesn't run.
- **Notifications:** An SMTP server must be configured for the destination's identity store. Using
  that SMTP server, email notifications can be sent to designated recipients for different actions
  performed while executing a Synchronize job.
- **Messaging Provider:** A messaging provider must be configured for the destination's identity
  store so that mail-enabled objects can be created through a Synchronize job in the destination.

## Dashboard

The Synchronize dashboard displays performance widgets and cards with data about your jobs and job
collections. On the navigation pane on the left side, you see the following tabs:

- Create New
  ([Create a Synchronize Job in GroupID](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
  and
  [Create a Job Collection in GroupID Synchronize](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md))
- [Synchronize Dashboard in GroupID](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md)
- [Manage Synchronize Jobs in GroupID](/docs/directorymanager/11.0/welcome/synchronize/manage/job.md)
- [Manage Job Collections in GroupID Synchronize](/docs/directorymanager/11.0/welcome/synchronize/manage/jobcollection.md)
- [Job Templates in GroupID Synchronize](/docs/directorymanager/11.0/welcome/synchronize/manage/jobtemplate.md)
- [Job Collection Templates in GroupID Synchronize](/docs/directorymanager/11.0/welcome/synchronize/manage/jobcollectiontemplate.md)

**See Also**

- [Synchronize Dashboard in GroupID](/docs/directorymanager/11.0/welcome/synchronize/dashboard.md)
- [Supported Synchronize Providers in GroupID](/docs/directorymanager/11.0/welcome/synchronize/provider.md)
- [Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md)
