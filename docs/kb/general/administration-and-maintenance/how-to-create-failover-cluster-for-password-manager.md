---
description: >-
  This article describes how to create a Windows failover cluster and configure
  Netwrix Password Manager for high availability. It covers prerequisites,
  storage requirements, installation placement, cluster creation, and service
  configuration.
keywords:
  - failover cluster
  - Netwrix Password Manager
  - high availability
  - Windows Server
  - failover clustering
  - cluster storage
  - registry synchronization
products:
  - general
sidebar_label: How to create Failover cluster for Password Manage
tags:
  - administration-and-maintenance
title: "How to create Failover cluster for Password Manager?"
knowledge_article_id: kA00g000000H9diCAC
---

# How to create Failover cluster for Password Manager?

We recommend using Windows 2008 R2 or newer to build a failover cluster. Note that only Enterprise and Datacenter editions have the Failover cluster feature. Do the following:

## 1. Enable the Failover cluster feature

1. Run **Server Manager** snap-in.
2. In the left pane, right-click **Features**, select **Add feature**. A wizard opens.
3. Enable the **Failover clustering** check-box, click **Next**, then click **Install**.

## 2. Create network storage

Create a network storage as per the instructions linked below. The storage should include at least two disks (one active and another one "witness").

- http://blogs.technet.com/b/canitpro/archive/2011/04/12/creating-a-san-using-microsoft-iscsi-software-target-3-3.aspx

NOTE: The machine that hosts storage drives should not be included to a cluster as a node.

## 3. Install Netwrix Password Manager

Install Netwrix Password Manager on all the machines that will be included into the cluster. The installation directory should be placed on the shared storage and be accessible from every node.

- Every new installation will overwrite this directory.

## 4. Create the failover cluster

Create a failover cluster as per the instructions linked below.

- http://blogs.msdn.com/b/clustering/archive/2008/01/18/7151154.aspx

## 5. Configure the Netwrix Password Manager service for high availability

1. Run the **Failover Cluster Manager** snap-in.
2. In the left pane go to **Failover Cluster Manager - \<Cluster name\> - Services and applications**.
3. Click **Configure a Service or Applications** in the right pane. A window opens.
4. Select **Generic service** from the list, click **Next**.
5. Select **Netwrix Password Manager** from the list, click **Next**.
6. Enter a name for the failover service and the IP address by which Password Manager will be available. Click **Next**.
7. Select the storage where the Password Manager installation directory is located from the list. Click **Next**.
8. Specify a registry key which should be synchronized between the cluster nodes. For Password Manager it is `HKLMSoftwareWow6432NodeNetwrixPassword Manager`. Click **Next**.
9. Verify all settings and confirm by clicking **Next**.
10. Wait until the failover service is configured.

For more information and screenshots refer to:

- http://technet.microsoft.com/en-us/library/cc731844(v=ws.10).aspx
