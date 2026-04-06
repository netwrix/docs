---
title: "CIFS / SMB File Share"
description: "Supported platforms, permissions, and network ports for CIFS/SMB scanning"
sidebar_position: 10
---

# CIFS / SMB File Share

Access Analyzer scans Windows file servers to enumerate files, folders, access permissions, and sensitive data.

Scanning can be performed directly from the Access Analyzer service (local mode) or via Scanners — Kubernetes-deployed containers for distributed scanning of remote environments. See the [Utilizing Scanners](../../scanners/overview.md) section for details on Scanner architecture.

## Permissions

Configure the service account credential with the following rights on the target Windows host(s):

- Group membership in both of the following local groups:
  - **Power Users**
  - **Backup Operators**
- Granted the **Backup files and directories** local policy privilege
- Granted the **Network access: Restrict clients allowed to make remote calls to SAM** Local Policies > Security Options privilege

:::note
To collect data on administrative shares and local policies for a Windows target, the credential must have group membership in the local **Administrators** group.
:::

## Windows File System Clusters

When targeting a Windows File System Cluster, permissions must be configured on all nodes that comprise the cluster. Additional requirements beyond the standard permissions above:

- Remote Registry Service must be enabled on all cluster nodes
- Group membership in the local **Administrators** group
- Granted the **Log on as a batch** privilege

:::note
Target the Windows Cluster File Server Role Server (the name clients connect to) when running a File System scan against a Windows File System Cluster.
:::

## DFS Namespaces

For domain-based DFS namespaces, the scan is configured to target the default domain controller for the domain. For standalone namespaces or multiple namespaces, target the server(s) hosting the namespace(s) directly.

If the DFS hosting server is part of a Windows Cluster, the Windows File System Cluster requirements above also apply.

## Sensitive Data Discovery

Sensitive Data Discovery (SDD) scans require **.NET Framework 4.7.2 or later** installed on the server being scanned.

## Port Requirements

| Port | Protocol | Description |
| --- | --- | --- |
| 445 | TCP | SMB file sharing |
