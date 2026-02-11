---
title: "Windows File Server Access & Sensitive Data Auditing Configuration"
description: "Windows File Server Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# Windows File Server Access & Sensitive Data Auditing Configuration

Permissions required for Access Analyzer to execute Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing (SEEK) scans on a Windows file server are dependent upon the Scan Mode Option selected.
See the
[File System Supported Platforms](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/filesystems.md) topic
for additional information.

However, additional considerations are needed when targeting a Windows File System Clusters or DFS
Namespaces.

## Windows File System (Standard)

Configure the credential(s) with the following rights on the Windows host(s):

- For **Local** or **Proxy as a Service Mode** Scans: 
  - Group membership in both of the following local groups:
    - Power Users
    - Backup Operators
- For **Applet** or **Proxy with Applet Mode** Scans: 
  - Group membership in the following group:
    - Local Administrators
  - Granted the “Log on as a batch” privilege
  - Remote Registry service must be enabled on the host where the applet is deployed (Applet or Proxy w/ Applet scans) to determine the system platform and where to deploy the applet.
  - The local policy, “Network access: Do not allow storage of passwords and credentials for network authentication” must be disabled in order for the applet to start.
  - Sensitive Data Discovery Auditing scans require .NET Framework 4.7.2 or later to be installed on the server where the applet is to be deployed in order for Sensitive Data Discovery collections to successfully occur.
- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local Policies > Security Options privilege
- Granted the “Backup files and directories” local policy privilege

:::note
In order to collect data on administrative shares and local policies (logon policies) for a Windows target, the credential must have group membership in the local Administrators group.
:::

## Windows File System Clusters

The permissions necessary to collect file system data from a Windows File System Cluster must be set
for all nodes that comprise the cluster.

:::note
It is necessary to target the Windows Cluster File Server Role Server (name clients connect to) of interest when running a File System scan against a Windows File System Cluster.
:::

Configure credentials on all cluster nodes according to the Windows File System (Standard) permissions, with the following additional requirements:

* Remote Registry Service must be enabled on all nodes that comprise the cluster
* Group membership in the local Administrators group
* Granted the “Log on as a batch” privilege

### Host List Considerations

It is necessary to target the Windows File Server Cluster (name of the cluster) of interest when running a File System scan against a Windows File System Cluster. Within the Master Host Table, there should be a host entry for the cluster as well as for each node. Additionally, each of these host entries must have the name of the cluster in the `WinCluster` column in the host inventory data. This may need to be updated manually.

See the View/Edit section of the [Host Management Activities](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/hostmanagement/actions/overview) topic for additional information on host inventory.

- For FSAA and SDD scans, configure a custom host list to target the cluster's **Role Server**.

The host targeted by the File System scans is only the host entry for the cluster. For example:

The environment has a Windows File System Cluster named `ExampleCluster1` with three nodes named `ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. There would be four host entries in the Access Analyzer Master Host Table: `ExampleCluster1`, `ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. Each of these four entries would have the same value of the cluster name in the `WinCluster` column: `ExampleCluster1`. An additional entry containing the File Server Role Server name(s) should also be added, including the WinCluster name of the nodes. **This File Server Role Server name will be our target host.**

### Least Privilege Permission Model for Windows Clusters

If a least privilege model is required by the organization, then the credential must have READ access on the following registry key:

* `HKEY_LOCAL_MACHINE\Cluster\Nodes`

**Sensitive Data Discovery Scans**

For Sensitive Data Discovery Auditing scans on a Windows File System Cluster it is necessary for the
credential to also have Group membership in both of the following local groups for all nodes which
comprise the cluster:

- Power Users
- Backup Operators

## DFS Namespaces

The FileSystem > 0.Collection > 0-FSDFS System Scans Job is configured by default to target the
default domain controller for the domain in which Access Analyzer resides. This is the appropriate
target host for this job when targeting a domain-based namespace. To target a standalone namespace
or multiple namespaces, create a custom host list of the server(s) hosting the namespace(s). Then
assign the custom host list to the 0-FSDFS System Scans Job. No additional host list is require for
the FileSystem > 0.Collection Job Group unless additional file servers are also being targeted.

**DFS as Part of a Windows Cluster Consideration**

If the DFS hosting server is part of a Windows Cluster, then the Windows File System Clusters
requirements must be included with the credential.


