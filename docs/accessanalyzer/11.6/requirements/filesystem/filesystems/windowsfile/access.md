---
title: "Windows File Server Access & Sensitive Data Auditing Configuration"
description: "Windows File Server Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# Windows File Server Access & Sensitive Data Auditing Configuration

Permissions required for Enterprise Auditor to execute Access Auditing (SPAA) and/or Sensitive Data
Discovery Auditing scans on a Windows file server are dependent upon the Scan Mode Option selected.
See the
[File System Supported Platforms](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/filesystems.md)
topic for additional information.

However, additional considerations are needed when targeting a Windows File System Clusters or DFS
Namespaces.

## Windows File System Clusters

The permissions necessary to collect file system data from a Windows File System Cluster must be set
for all nodes that comprise the cluster.

:::note
It is necessary to target the Windows File Server Cluster (name of the cluster) of
interest when running a File System scan against a Windows File System Cluster.
:::


Configure credentials on all cluster nodes according to the Windows Operating Systems required
permissions for the desired scan mode with these additional considerations:

- For
  [Applet Mode](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md#applet-mode)
  and
  [Proxy Mode with Applet](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md#proxy-mode-with-applet):

    - Applet will be deployed to each node
    - Credential used in the Connection Profile must have rights to deploy the applet to each node

- For
  [Proxy Mode as a Service](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md#proxy-mode-as-a-service):

    - Proxy Service must be installed on each node
    - For Sensitive Data Discovery Auditing scans, the Sensitive Data Discovery Add-on must be
      installed on each node

Additionally, the credential used within the Connection Profile must have rights to remotely access
the registry on each individual cluster node.

:::tip
Remember, Remote Registry Service must be enabled on all nodes that comprise the cluster.
Configure the credential(s) with the following rights on all nodes:
:::


- Group membership in the local Administrators group
- Granted the “Log on as a batch” privilege

**Host List Consideration**

It is necessary to target the Windows File Server Cluster (name of the cluster) of interest when
running a File System scan against a Windows File System Cluster. Within the Master Host Table,
there should be a host entry for the cluster as well as for each node. Additionally, each of these
host entries must have the name of the cluster in the `WinCluster` column in the host inventory
data. This may need to be updated manually.

See the View/Edit section of the
[Host Management Activities](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/overview.md)
topic for additional information on host inventory.

- For FSAA and SDD scans, configure a custom host list to target the cluster's Role Server.
- For FSAC scans, configure a custom host list to target the Windows File Server Cluster.

The host targeted by the File System scans is only the host entry for the cluster. For example:

The environment has a Windows File System Cluster named `ExampleCluster1` with three nodes named
`ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. There would be four host entries in the
StealthAUDIT Master Host Table: `ExampleCluster1`, `ExampleNodeA`, `ExampleNodeB`, and
`ExampleNodeC`. Each of these four entries would have the same value of the cluster name in the
`WinCluster` column: `ExampleCluster1`. Only the `ExampleCluster1` host would be in the host list
targeted by the File System scans.

**Sensitive Data Discovery Scans**

For Sensitive Data Discovery Auditing scans on a Windows File System Cluster it is necessary for the
credential to also have Group membership in both of the following local groups for all nodes which
comprise the cluster:

- Power Users
- Backup Operators

**Activity Auditing Scans**

The Netwrix Activity Monitor must deploy an Activity Agent on all nodes that comprise the Windows
File System Cluster. The Activity Agent generates activity log files stored on each node. Enterprise
Auditor targets the Windows File Server Cluster (name of the cluster) of interest in order to read
the activity. See the
[Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/windowsfile/activity.md)
topic for additional information.

The credential used Enterprise Auditor to read the activity log files must have:

- Membership in the local Administrators group

The FileSystemAccess Data Collector needs to be specially configured to run the
[1-FSAC System Scans Job](/docs/accessanalyzer/11.6/solutions/filesystem/collection/1-fsac_system_scans.md)
against a Windows File System Cluster. On the
[FSAA: Activity Settings](/docs/accessanalyzer/11.6/admin/datacollector/fsaa/activitysettings.md),
configure the Host Mapping option. This provides a method for mapping between the target host and
the hosts where activity logs reside. However, this feature requires **advanced SQL scripting
knowledge** to build the query.

**Membership in the local Administrators group**

### Least Privilege Permission Model for Windows Cluster

If a least privilege model is required by the organization, then the credential must have READ
access on the following registry keys:

- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\SBTLogging\Parameters`
- `HKEY_LOCAL_MACHINE\Cluster\Nodes`

Additionally, the credential must have READ access to the path where the activity log files are
located.

## DFS Namespaces

The FileSystem > 0.Collection > 0-FSDFS System Scans Job is configured by default to target the
default domain controller for the domain in which Enterprise Auditor resides. This is the
appropriate target host for this job when targeting a domain-based namespace. To target a standalone
namespace or multiple namespaces, create a custom host list of the server(s) hosting the
namespace(s). Then assign the custom host list to the 0-FSDFS System Scans Job. No additional host
list is require for the FileSystem > 0.Collection Job Group unless additional file servers are also
being targeted.

**DFS as Part of a Windows Cluster Consideration**

If the DFS hosting server is part of a Windows Cluster, then the Windows File System Clusters
requirements must be included with the credential.

**DFS and Activity Auditing Consideration**

For activity monitoring, the Netwrix Activity Monitor must have a deployed Activity Agent on all DFS
servers identified by the 0-FSDFS System Scans Job and populated into the dynamic host list. See the
[Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/windowsfile/activity.md)
topic for additional information.
