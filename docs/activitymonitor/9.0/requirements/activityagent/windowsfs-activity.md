---
title: "Windows File Server Activity Auditing Configuration"
description: "Windows File Server Activity Auditing Configuration"
sidebar_position: 80
---

# Windows File Server Activity Auditing Configuration

In order for the Netwrix Activity Monitor to monitor Windows file server activity, an Activity Agent must be deployed to the server. It cannot be deployed to a proxy server. However, additional considerations are needed when targeting a Windows File System Clusters.

## Windows File System Clusters

In order to monitor a Windows File System Cluster, an Activity Agent needs to be deployed on all nodes that comprise the Windows File System Cluster. The credential used to deploy the Activity Agent must have the following permissions on the server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access Analyzer to read the activity log files must have also have this permission.

### Single Role (Basic) Setup

![Single Role Cluster Overview](/images/activitymonitor/9.0/requirements/WinCluster1.webp)

1. Install an Activity Monitor agent on all nodes in the cluster.
2. Configure a Monitored Host with event source type of “Agent’s Windows host” for each node.

![Single Role WinCluster Agents](/images/activitymonitor/9.0/requirements/WinCluster2.webp)

![Single Role WinCluster Monitored Hosts](/images/activitymonitor/9.0/requirements/WinCluster3.webp)

### Multi-Role (Advanced) Setup

![Multi Role Cluster Overview](/images/activitymonitor/9.0/requirements/WinCluster4.webp)


1. Install an Activity Monitor agent on all nodes in the cluster.
2. Configure a Monitored Host with event source type of “Agent’s Windows host” for each node.
3. On the Additional Properties tab of each file output, set the *Report hostname as* value to match the Role Server it will be scoped for.
4. On the Path Filtering tab of each file output, scope the log to only look at the shares for their respective role servers.

:::note Example
   The cluster contains **RoleServerA** and **RoleServerB**. RoleServerA contains two shares: Share1 & Share2. RoleServerB contains two shares: Share3 & Share4.
      1. There should be two File Outputs under Node1 & Node2 to match the two Role Servers.
      2. The first file output should contain scoping that includes Share1 & Share2, but excludes all others.
      3. The second file output should contain scoping that includes Share3 & Share4, but excludes all others.
	  
![Multi Role WinCluster Agents](/images/activitymonitor/9.0/requirements/WinCluster5.webp)

![Multi Role WinCluster Monitored Hosts](/images/activitymonitor/9.0/requirements/WinCluster6.webp)

![Multi Role WinCluster Output Properties](/images/activitymonitor/9.0/requirements/WinCluster7.webp)
:::

