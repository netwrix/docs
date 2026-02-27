---
title: "NDC Server Cluster"
description: "Configuring an NDC Server Cluster and Load Balancing with DQS Mode"
sidebar_position: 10
---

# Configuring an NDC Server Cluster and Load Balancing with DQS Mode

The Distributed Query Server (DQS) mode allows you to balance the processing load of data collection,
indexing and classification over multiple Netwrix Data Classification Servers (NDC Servers) with a single shared database.
This approach is strongly recommended if you need to process large data volumes, for example:

- File Servers — recommended if processing over 16m objects,
supports up to 64 m objects per cluster of 4 servers.
- SharePoint — Recommended if processing over 8m objects,
supports up to 32 m objects per cluster of 4 servers.

To make use of Distributed Query Server mode, you need to arrange your NDC Servers in a 'cluster' for load
distribution as described below. Each clustered NDC Server will store its own set of .CSE index files,
thus distributing the **NDC Index** over the clustered servers. To assemble and combine data required for the
search results, each NDC Server will automatically communicate with the other clustered servers.

:::note
All NDC Servers in the cluster will share a single NDC SQL database.
:::

This functionality is implemented through the _Query Server_ functionality of NDC Server.

## Configuring DQS Mode

DQS mode is configured via the administrative web console and, from version 5.7.10 onwards, the installer.

If you want to implement DQS configuration for your NDC deployment, consider the following:

- This action cannot easily be undone so, before applying the DQS mode, take a full backup of your
  NDC deployment. Also, read the DQS documentation sections thoroughly before you start.
- Make sure all servers you plan to add to the DQS cluster have a network connection and are
  visible to each other across the network. Adjust your firewall settings if necessary.

DQS mode can only be configured by a user whose account has the **Superuser** role.

    :::note
    Once DQS mode is enabled, you cannot roll back your configuration. Netwrix
    strongly recommends ensuring that you have taken a full backup of your environment prior to enabling DQS.
    :::

### Enabling DQS Mode (5.7.9 and earlier versions)

1. Install and configure the first Netwrix Data Classification Server as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section.
2. Open the administrative web console.
3. Navigate to Settings → Config → Utilities → DQS.
4. Select Enable DQS.


5. On the DQS tab, click Add to adopen the DQS addition menu, and input the details for the first additional NDC server.

    ![dqs_mode_page_thumb_0_0](/images/dataclassification/5.7/requirements/dqs_mode_page_thumb_0_0.webp)

    Complete the following fields:

    | Setting           | Value                                                                                                                                          |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
    | Server            | The NDC Server name or IP address (name format is case-insensitive).                                                                   |
    | QS Path           | The path to the solution component responsible for DQS mode, residing on the server being added. This is filled in automatically when filling in the server name; leave the default value. |                                                                                    |
    | Alternate Server  | Optional, Netwrix recommends using default values.                                                                                                       |
    | Alternate QS Path | Optional, Netwrix recommends using default values.                                                                                                       |

6. Click **Save** to close the dialog. Repeat steps 5 and 6 for each server you intend to add.
7. Prepare to install the other Netwrix Data Classification Server instances on their dedicated servers. To make best use of resources, each NDC server
   requires a dedicated machine. Make sure they meet the
   [Hardware Requirements](/docs/dataclassification/5.7/introduction/requirements/hardwarerequirements.md) and general
   [Software Requirements](/docs/dataclassification/5.7/introduction/requirements/softwarerequirements.md)
8. On each server, follow the installation steps as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section up to the SQL Database
   configuration step.
9. On the SQL Database step, provide the name of the SQL Server instance that hosts NDC SQL database
   you configured for the first NDC Server.

:::note
Ignore the confirmation dialog informing you of the existing schema in the selected SQL database.
:::


10. Complete the installation.
11. Repeat steps 2 - 6 for every NDC Server, then review the list of servers to make sure the new
    server was included.

![dqs_servers_list_thumb_0_0](/images/dataclassification/5.7/requirements/dqs_servers_list_thumb_0_0.webp)

### Enabling DQS Mode (5.7.10 and later versions)

1. Install and configure the first Netwrix Data Classification Server as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section.
2. Open the administrative web console.
3. Navigate to Settings → Config → Utilities → DQS.
4. Select Enable DQS.
5. Prepare to install other Netwrix Data Classification Server instances. Make sure each NDC server meets the
   [Hardware Requirements](/docs/dataclassification/5.7/introduction/requirements/hardwarerequirements.md) and general
   [Software Requirements](/docs/dataclassification/5.7/introduction/requirements/softwarerequirements.md)
6. On each server, follow the installation steps as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section up to the SQL Database
   configuration step.
7. On the SQL Database step, provide the details of the SQL Server instance that hosts the NDC SQL database
   you configured for the first NDC Server.
8. When you click next, a message box should appear stating that an NDC configuration was detected and
   that the new install will be added to the existing DQS environment - click OK.

        :::note
        When upgrading an existing NDC instance the installer will attempt to resynchronise the DQS instances in the
        background and, if successful, will skip the DQS Synchronisation step. You can then skip ahead to step 13. The DQS Synchronisation
        step will only display for an upgrade if this process fails - this is not an issue, simply follow the steps below
        to resynchronise the NDC instance with the primary NDC server.
        :::

9. The Primary NDC Server Url field should have the server url of the primary NDC server (i.e. the first row in the DQS table)
   automatically inserted. If it is not present or is incorrect, enter the address from the QS Path column of the first row of
   the DQS table. Then click Connect to connect the installer to that server.
10. Once the installer has successfully connected to the primary NDC server, it will generate an authentication
    code and display it in the Authentication Code field. Click Sync to open the NDC DQS settings page in a web browser.
11. On the web page, click on Register/Resync. This will open the authentication code entry tab - the authentication code generated by the installer
    should be present in the input field. Click Submit to submit the authentication code.

      :::note
      If the authentication code is not autofilled, click on the Authentication Code field in the installer to copy the
      value to your clipboard, then paste it in the authentication code field in the NDC UI.
      :::

12. The Register/Resync tab should now display an 8-digit verification code. Copy this, paste it into
    the Verification Code field in the installer, then click Join. The NDC installer will then perform
    the resynchronisation.
13. Complete the installation.
14. Repeat steps 6 - 13 for each other new NDC Server, then review the list of servers to make sure all new
    servers have been successfully added.

![dqs_servers_list_thumb_0_0](/images/dataclassification/5.7/requirements/dqs_servers_list_thumb_0_0.webp)


If you were configuring the DQS mode for an existing NDC deployment, you will be prompted to
    re-collect data from the data sources in order to re-distribute the content index across all
    NDC Servers in the cluster. This will result in all data sources being recollected, which may
    take a significant amount of time.

:::note
To force re-distribution when necessary, you can use the Re-Collect command available
after clicking **Run Cleaner** button on the **Settings > Core > Collector** tab.
:::


To review system health and check your configuration, use the product dashboards.
[See Operations and Health Dashboards for more information.](/docs/dataclassification/5.7/dashboards.md)
