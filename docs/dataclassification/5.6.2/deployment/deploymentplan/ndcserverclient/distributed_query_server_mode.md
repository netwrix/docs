---
title: "NDC Server Cluster"
description: "Configuring NDC Servers Cluster and Load Balancing with DQS Mode"
sidebar_position: 10
---

# Configuring NDC Servers Cluster and Load Balancing with DQS Mode

The Distributed Query Server (DQS) mode allows you to balance the load between multiple Netwrix Data
Classification Servers (NDC Servers) while data collection, indexing and classification. This
approach is strongly recommended if you need to process large data volumes, for example:

- File Servers—Up to 64 m objects per cluster of 4 servers.
- SharePoint—Up to 32 m objects per cluster of 4 servers.

To apply Distributed Query Server mode, you need to arrange your NDC Servers in a 'cluster' for load
distribution, as described below. Each clustered NDC Server will store its own set of .CSE files —
that is, **NDC Index** will be a distributed index. To assemble and combine data required for the
search results, each NDC Server will automatically communicate with the other clustered servers.

**NOTE:** All NDC Servers in the cluster will share a single NDC SQL database.

This functionality is implemented through the _QueryServer_ application installed together with NDC
Server.

## Applying DQS Mode

DQS mode can be configured via the administrative web console.

If you want to implement DQS configuration for your NDC deployment, consider the following:

- This action cannot easily be undone, so before applying the DQS mode, take a full backup of your
  NDC deployment. Also, read the related documentation sections thoroughly before you start.
- Make sure all servers you plan to add to the DQS cluster have proper network connection and are
  visible to each other across the network. Adjust firewall settings if necessary.
- Initially, all existing documents will be ‘allocated’ to the first server in the 'cluster' and
  then re-distributed across all configured servers.

To be able to configure the DQS mode, current account requires a **Superuser** role.

To arrange NDC Servers cluster and apply DQS mode

1. Install and configure the first Netwrix Data Classification Server as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.6.2/deployment/installation/installation.md)
   section.
2. Open administrative web console.
3. Navigate to Settings → Utilities → DQS.
4. Select Enable DQS.

    **NOTE:** Once the DQS mode is enabled, you cannot roll back your configuration. Netwrix
    strongly recommends to ensure that you have taken a full backup of your environment. If ready,
    confirm the DOS enablement operation when prompted.

5. On the DQS tab, click Add to add servers you prepared, one by one.

    ![dqs_mode_page_thumb_0_0](/images/dataclassification/5.6.2/deployment/dqs_mode_page_thumb_0_0.webp)

    Complete the following fields:

    | Setting           | Value                                                                                                                                          |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
    | Server            | Provide the NDC Server name or IP address (name format is case-insensitive).                                                                   |
    | QS Path           | Path to the solution component responsible for DQS mode, residing on the server being added. Filled in automatically; leave the default value. |
    | Active            | Select to enable clustering for the instance being added.                                                                                      |
    | Alternate Server  | Netwrix recommends using default values.                                                                                                       |
    | Alternate QS Path | Netwrix recommends using default values.                                                                                                       |

6. Click **Save** to close the dialog.
7. Prepare to install other Netwrix Data Classification Server instances, assuming each server
   requires a dedicated machine. Make sure they meet the
   [Hardware Requirements](/docs/dataclassification/5.6.2/deployment/requirements/hardware_requirements.md)
   and general
   [Software Requirements](/docs/dataclassification/5.6.2/deployment/requirements/software_requirements.md)
8. On each server, follow the installation steps as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.6.2/deployment/installation/installation.md)
   section until SQL Database configuration.
9. On the SQL Database step, provide the name of the SQL Server instance that hosts NDC SQL database
   you configured for the first NDC Server.

**NOTE:** Ignore the confirmation dialog on the existing schema in the selected SQL database.

10. Complete the installation.
11. Repeat steps 2 - 6 for every NDC Server, then review the list of servers to make sure the new
    server was included.

![dqs_servers_list_thumb_0_0](/images/dataclassification/5.6.2/deployment/dqs_servers_list_thumb_0_0.webp)

12. If you were configuring the DQS mode for the existing NDC deployment, you will be prompted to
    re-collect data from the data sources —in order to re-distribute the content index across all
    NDC Servers in the cluster.

**NOTE:** To force re-distribution when necessary, you can use the Re-Collect command available
after clicking **Run Cleaner** button on the **Settings > Core > Collector** tab.

To review system health and check your configuration, use the product dashboards.
[See Operations and Health Dashboards for more information.](/docs/dataclassification/5.6.2/dashboards.md)
