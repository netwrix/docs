---
title: "Directory Manager Synchronize Overview"
description: "Learn what Directory Manager Synchronize does and what you must define in Admin Center before you create jobs."
keywords:
  - Directory Manager Synchronize
  - synchronization engine
  - Synchronize prerequisites
  - bidirectional synchronization
sidebar_position: 90
---

# Directory Manager Synchronize Overview

Directory Manager Synchronize is a web-based application that you open from the Directory Manager portal. It is a bidirectional synchronization engine that transfers data from one data source to another. The data sources can include directory servers, databases, and files. With an intuitive GUI, you can create Synchronize jobs to provision, de-provision, or synchronize multiple data sources.

The Synchronize portal can also apply transformations to the data it transfers. You can convert data after retrieving it from the source and before it's saved at the destination.

## Prerequisites for Synchronize

Using Directory Manager, you can create identity stores for several identity providers, such as Active Directory and Microsoft Entra ID. You can also create data sources for providers such as files and databases. Directory Manager Synchronize uses user-defined identity stores (as source and destination) built on databases, files, and other applications such as Oracle and SQL. To view the list of supported Synchronize providers, see the [Supported Synchronize Providers in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/provider.md) topic.

Define the following before you use Synchronize:

- **Identity store** – Create identity stores in Admin Center for the source and destination providers. To work with Synchronize, create a Synchronize-based identity store for creating jobs and job collections.

  Synchronize data for AD and Microsoft Entra ID is saved directly to Elasticsearch. Replication isn't required.

- **Data sources** – To create jobs and job collections, add data sources such as Microsoft Excel, Text, and Oracle in Admin Center.
- **Permissions** – To perform Synchronize operations, the logged-in user must have Synchronize-specific permissions. These permissions let the user create, edit, and run jobs or job collections as the defined Synchronize policy allows.
- **Policies** – Use the Synchronize policy to allow or disallow a provider as a source or destination. You can choose the object types that a Synchronize job can create or sync at the destination. For each object type in an identity store and data source, specify the attributes that are available for mapping the source and destination fields in a Synchronize job.
- **History** – Synchronize can keep a complete record of the actions a Synchronize job performs in a directory. This requires that you define an identity store for the destination provider in Directory Manager Admin Center and enable history tracking for that identity store. The history settings of that identity store also specify the actions to track for Synchronize.
- **Workflows** – You can enable workflow requests to run jobs or job collections. Create a workflow in Admin Center and assign an approver to it. Each time a user runs a Synchronize job, the job runs only when the approver approves the request. If the approver denies it, the job doesn't run.
- **Notifications** – Configure an SMTP server for the destination's identity store. That SMTP server sends email notifications to designated recipients for different actions performed while a Synchronize job runs.
- **Messaging provider** – Configure a messaging provider for the destination's identity store so that Synchronize jobs can create mail-enabled objects in the destination.

## Dashboard

The Synchronize dashboard displays performance widgets and cards with data about your jobs and job collections. The navigation pane on the left side has the following tabs:

- Create New ([Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/create/create.md) and [Create a Job Collection in Directory Manager Synchronize ](/docs/directorymanager/11.1/portal/synchronize/collection/create.md))
- [Synchronize Dashboard in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/dashboard.md)
- [Manage Synchronize Jobs in Directory Manager](/docs/directorymanager/11.1/portal/synchronize/manage/job.md)
- [Manage Job Collections in Directory Manager Synchronize ](/docs/directorymanager/11.1/portal/synchronize/manage/jobcollection.md)
- [Job Templates in Directory Manager Synchronize](/docs/directorymanager/11.1/portal/synchronize/manage/jobtemplate.md)
- [Job Collection Templates in Directory Manager Synchronize](/docs/directorymanager/11.1/portal/synchronize/manage/jobcollectiontemplate.md)
