---
title: "NDC Server Cluster"
description: "Configuring an NDC Server Cluster and Load Balancing with DQS Mode"
sidebar_position: 10
---

# Configuring an NDC Server Cluster and Load Balancing with DQS Mode

The Distributed Query Server (DQS) mode lets you balance the processing load of data collection,
indexing, and classification over multiple NDC Servers with a single shared database.
Netwrix strongly recommends this approach if you need to process large data volumes, for example:

- File Servers — Use DQS mode when processing over 16M objects.
A cluster of 4 servers supports up to 64M objects.
- SharePoint — Use DQS mode when processing over 8M objects.
A cluster of 4 servers supports up to 32M objects.

To use Distributed Query Server mode, arrange your NDC Servers in a 'cluster' for load
distribution. Each clustered NDC Server will store its own set of .CSE index files,
thus distributing the **NDC Index** over the clustered servers. To assemble and combine data required for the
search results, each NDC Server will automatically communicate with the other clustered servers.

:::note
All NDC Servers in the cluster will share a single NDC SQL database.
:::

The _Query Server_ application implements this functionality.

## Configuring DQS Mode

You configure DQS mode in the administrative web console and, from version 5.7.10 onwards, the installer.

You can't undo DQS configuration once you apply it to your NDC deployment. Netwrix strongly
recommends taking a full backup of your environment before enabling DQS.
Also, read the DQS documentation sections thoroughly before you start.

Ensure all servers you plan to add to the DQS cluster have a network connection and are
visible to each other across the network. Adjust your firewall settings if necessary.

Only users with the **Superuser** role can configure DQS mode.

### Enabling DQS Mode (5.7.9 and earlier versions)

1. Install and configure the first Netwrix Data Classification Server as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section.
2. Open the administrative web console.
3. Navigate to Settings → Config → Utilities → DQS.
4. Select Enable DQS.
5. On the DQS tab, click Add to open the DQS addition menu, and input the details for the first secondary NDC server.

    ![dqs_mode_page_thumb_0_0](/images/dataclassification/5.7/requirements/dqs_mode_page_thumb_0_0.webp)

    Complete the following fields:

    | Setting           | Value                                                                                                                                          |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
    | Server            | The NDC Server name or IP address (name format is case-insensitive).                                                                   |
    | QS Path           | The path to the NDC QS process on the server you're adding. The system fills this in automatically when you enter the server name; leave the default value. |                                                                                    |
    | Alternate Server  | Optional, Netwrix recommends using default values.                                                                                                       |
    | Alternate QS Path | Optional, Netwrix recommends using default values.                                                                                                       |

6. Click **Save** to close the dialog. Repeat steps 5 and 6 for each server you intend to add.
7. Prepare to install the other Netwrix Data Classification Server instances on their dedicated servers. Each NDC server
   requires a dedicated machine to make best use of resources. Ensure they meet the
   [Hardware Requirements](/docs/dataclassification/5.7/introduction/requirements/hardwarerequirements.md) and general
   [Software Requirements](/docs/dataclassification/5.7/introduction/requirements/softwarerequirements.md)
8. On each server, follow the installation steps as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section up to the SQL Database
   configuration step.
9. On the SQL Database step, provide connection details for the SQL Server or PostgreSQL instance that hosts the NDC SQL database
   you configured for the first NDC Server. A popup informs you that an NDC schema already exists in the database. Ignore this and continue.
10. Complete the installation.
11. Repeat steps 7 - 10 for each NDC Server you want to add.

![dqs_servers_list_thumb_0_0](/images/dataclassification/5.7/requirements/dqs_servers_list_thumb_0_0.webp)

### Enabling DQS Mode (5.7.10 and later versions)

1. Install and configure the first Netwrix Data Classification Server as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section.
2. Open the administrative web console.
3. Navigate to Settings → Config → Utilities → DQS.
4. Select Enable DQS.
5. Prepare to install other Netwrix Data Classification Server instances. Ensure each NDC server meets the
   [Hardware Requirements](/docs/dataclassification/5.7/introduction/requirements/hardwarerequirements.md) and general
   [Software Requirements](/docs/dataclassification/5.7/introduction/requirements/softwarerequirements.md)
6. On each server, follow the installation steps as described in the
   [Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/install/overview.md) section up to the SQL Database
   configuration step.
7. On the SQL Database step, provide the details of the SQL Server or PostgreSQL instance that hosts the NDC SQL database
   you configured for the first NDC Server.
8. When you click **Next**, a message box should appear stating that the installer detected an NDC configuration and
   will add the new install to the existing DQS environment. Click OK.

   :::note
   When you upgrade an existing NDC instance, the installer attempts to resynchronize the DQS instances in the
   background and, if successful, skips the DQS Synchronization step. You can then skip ahead in these instructions
   to step 13. 

   The DQS Synchronization step will only display for an upgrade if this process fails. The remaining steps
   resynchronize the NDC instance with the primary NDC server.
   :::

9. The Primary NDC Server URL field should automatically contain the server URL of the primary NDC server (i.e. the first row in the DQS table).
   If it isn't present or is incorrect, enter the address from the QS Path column of the corresponding row of
   the DQS table. Then click Connect to connect the installer to that server.
10. After the installer has successfully connected to the primary NDC server, it will generate an authentication
    code and display it in the Authentication Code field. Click Sync to open the NDC DQS settings page in a web browser.
11. On the web page, click Register/Resync. This will open the authentication code entry tab - the authentication code the installer generated
    should be present in the input field. Click Submit to submit the authentication code.

:::note
If the authentication code isn't autofilled, click the Authentication Code field in the installer to copy the
value to your clipboard, then paste it in the Authentication Code field in the NDC UI.
:::

12. The Register/Resync tab should now display an 8-digit verification code. Copy this, paste it into
    the Verification Code field in the installer, then click Join. The NDC installer will then perform
    the resynchronisation.
13. Complete the installation.
14. Repeat steps 6 - 13 for each additional NDC Server you want to add, then review the list of servers to confirm all new
    servers appear.

![dqs_servers_list_thumb_0_0](/images/dataclassification/5.7/requirements/dqs_servers_list_thumb_0_0.webp)


If you configured DQS mode for an existing NDC deployment, the product prompts you to
re-collect data from the data sources to re-distribute the content index across all
NDC Servers in the cluster. **The system will recollect all data sources**, which may
take a significant amount of time.

:::note
To force re-distribution when necessary, you can use the Re-Collect command available
after clicking **Run Cleaner** button on the **Settings > Core > Collector** tab.
:::


To review system health and check your configuration, use the product dashboards.
See [Operations and Health Dashboards](/docs/dataclassification/5.7/dashboards.md) for details on monitoring system status.
