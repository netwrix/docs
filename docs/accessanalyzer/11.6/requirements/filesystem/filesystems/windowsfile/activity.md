---
title: "Windows File Server Activity Auditing Configuration"
description: "Windows File Server Activity Auditing Configuration"
sidebar_position: 20
---

# Windows File Server Activity Auditing Configuration

In order for Netwrix Access Analyzer to collect and store Windows file server activity, an activity monitor agent for Netwrix Activity Monitor must be deployed to the server and monitoring. See the [Single Activity Agent Deployment](https://docs.netwrix.com/docs/activitymonitor/9_0/admin/agents/overview) topic for additional information.

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
- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local Policies > Security Options privilege
- Granted the “Backup files and directories” local policy privilege
- The service account in the credential profile requires access to the admin share (e.g. `C$`) where the `sbtfilemon.ini` file exists
- READ access on the following registry key: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\SBTLogging\Parameters`

## Windows File System Clusters

In order to monitor a Windows File System Cluster, an Activity Agent needs to be deployed on all nodes that comprise the Windows File System Cluster.

:::note
It is necessary to target the Windows Cluster File Server Role Server (name clients connect to) when running a File System scan against a Windows File System Cluster.
:::

Configure credentials according to the Windows File System (Standard) permissions on all cluster nodes that comprise the cluster, with the following additional requirements:

- Remote Registry Service must be enabled on all nodes that comprise the cluster
- Group membership in the local Administrators group
- Granted the “Log on as a batch” privilege

### Host List Considerations

It is necessary to target the Windows File Server Cluster (name of the cluster) of interest when running a File System scan against a Windows File System Cluster. Within the Master Host Table, there should be a host entry for the cluster as well as for each node. Additionally, each of these host entries must have the name of the cluster in the `WinCluster` column in the host inventory data. This may need to be updated manually.

See the View/Edit section of the [Host Management Activities](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/hostmanagement/actions/overview) topic for additional information on host inventory.

- For FSAC scans, configure a custom host list to target the cluster's **Role Server**.

The host targeted by the File System scans is only the host entry for the cluster. 

:::note Example:

The environment has a Windows File System Cluster named `ExampleCluster1` with three nodes named `ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. There would be four host entries in the Access Analyzer Master Host Table: `ExampleCluster1`, `ExampleNodeA`, `ExampleNodeB`, and `ExampleNodeC`. Each of these four entries would have the same value of the cluster name in the `WinCluster` column: `ExampleCluster1`. An additional entry containing the File Server Role Server name(s) should also be added, including the WinCluster name of the nodes. This File Server Role Server name will be our target host.
:::

### Host Mapping
:::note
Host Mapping is only required for multi-role cluster setups. See topic [Windows File Server Activity Auditing Configuration - Multi-Role (Advanced) Setup](https://docs.netwrix.com/docs/activitymonitor/9_0/requirements/activityagent/windowsfs-activity)
:::

1. Create new table in the Access Analyzer database to be used as the Host Mapping table. The column names are case sensitive.
   1. **3 Columns:** LogLocation, HostName, Host
   2. **Data Type:** nvarchar(MAX)

![Host Mapping Table Design](/images/accessanalyzer/12.0/requirements/target/config/HostMapping1.webp)

2. Configure the new host mapping table to such:
   1. **LogLocation:** Name of the host/node where activity logs reside.
   2. **HostName:** Name of the configured Report hostname as value in the Activity Monitor.
   3. **Host:** Name of the host being targeted in the FSAC scan and Bulk Import which the activity events will be mapped to (Role Server).

![Host Mapping Table Example](/images/accessanalyzer/12.0/requirements/target/config/HostMapping2.webp)

3. Enable host mapping on the *Activity Settings* tab of the FSAC System Scan query configuraton. See topic [FSAA: Activity Settings](https://docs.netwrix.com/docs/accessanalyzer/11_6/admin/datacollector/fsaa/activitysettings) for additional information.

### Least Privilege Permission Model for Windows Clusters

If a least privilege model is required by the organization, then the credential must have READ access on the following registry keys:

* `HKEY_LOCAL_MACHINE\Cluster\Nodes`
* `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\SBTLogging\Parameters`

Additionally, the credential must have READ access to the path where the activity log files are located.
