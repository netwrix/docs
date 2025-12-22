---
title: "Azure Files"
description: "Azure Files"
sidebar_position: 40
---

# Azure Files

Azure Files is a Microsoft service that offers file shares in the cloud that are accessible via the
industry standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure
Files REST API. Azure file shares can be mounted concurrently by cloud or on-premises deployments.
SMB Azure file shares are accessible from Windows, Linux, and macOS clients. To learn more about
Azure Files, refer to the
[corresponding Microsoft article](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction).

The Netwrix Auditor Add-On for Azure Files works in collaboration with Netwrix Auditor, supplying
data about SMB changes on your Azure Files shares, such as document reads, modifications and
deletions.

To get the add-on up and running, please read the following topics:

- [Deployment Procedure](/docs/auditor/10.7/addon/azurefiles/deployment.md)
- [Work with Collected Data](/docs/auditor/10.7/addon/azurefiles/collecteddata.md)

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

- The Audit Database settings are configured in Auditor Server. See the
  [Prerequisites](/docs/auditor/10.7/api/prerequisites.md) and
  [Audit Database](/docs/auditor/10.7/admin/settings/auditdatabase.md) topics for additional information.
- The TCP 9699 port (default Integration API port) is open for inbound connections.
- The user writing data to the Audit Database is granted the Contributor role in Auditor. See the
  [Role-Based Access and Delegation](/docs/auditor/10.7/admin/monitoringplans/delegation.md) topic for additional
  information.
- Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor
  Administrators group. In this case, this user will have the most extended permissions in the
  product.
- Azure Files environment is configured for auditing. The connection of Azure file share to Windows
  should be configured with authentication through Active Directory or Entra ID (as opposed to the
  account key). See the [Deployment Procedure](/docs/auditor/10.7/addon/azurefiles/deployment.md)topic for more information.
- Active Directory Domain Services or Microsoft Entra Kerberos is used as an Identity source. See
  the [Deployment Procedure](/docs/auditor/10.7/addon/azurefiles/deployment.md) topic for additional information.

## How It Works

On a high level, the add-on works as follows:

- The add-on collects logs from the specified Azure storage account. The add-on supports activity
  auditing of shares with identity-based access via saved logs collected from storage account and
  using Graph API for SIDs resolving.
- The add-on processes these events into Netwrix Auditor compatible format (Activity Records). Each
  Activity Record contains the user account, action, time, and other details.
- Using the Integration API, the add-on sends the activity records to the Netwrix Auditor Server,
  which writes them to the Long-Term Archive and the Audit Database.
