---
title: "Windows File Server Activity Auditing Configuration"
description: "Windows File Server Activity Auditing Configuration"
sidebar_position: 80
---

# Windows File Server Activity Auditing Configuration

In order for the Netwrix Activity Monitor to monitor Windows file server activity, an Activity Agent
must be deployed to the server. It cannot be deployed to a proxy server. However, additional
considerations are needed when targeting a Windows File System Clusters or DFS Namespaces.

## Windows File System Clusters

In order to monitor a Windows File System Cluster, an Activity Agent needs to be deployed on all
nodes that comprise the Windows File System Cluster. The credential used to deploy the Activity
Agent must have the following permissions on the server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

After the agent has been deployed, it is necessary to modify the HOST parameter in the
`SBTFilemon.ini` file to be the name of the cluster. For integration with Netwrix Access Analyzer
, this must be an exact match to the name of the cluster in the Master Host Table.

## DFS Namespaces

In order to monitor activity on DFS Namespaces, an Activity Agent needs to be deployed on all DFS
servers.

:::note
The FileSystem > 0.Collection > 0-FSDFS System Scans Job in Netwrix Access Analyzer
 can be used to identify all DFS servers.
:::


The credential used to deploy the Activity Agent must have the following permissions on the server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.
