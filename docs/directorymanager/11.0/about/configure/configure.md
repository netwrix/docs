---
title: "Run the GroupID Configuration Tool"
description: "Launch the Configuration Tool and choose whether to configure a new GroupID server or add one to an existing cluster."
keywords:
  - GroupID Configuration Tool
  - configure GroupID server
  - GroupID cluster
  - Elasticsearch cluster node
  - Configuration Tool wizard
sidebar_position: 10
---

# Run the GroupID Configuration Tool

You can configure GroupID immediately after installing it or later.

1. Run the Configuration Tool in one of the following ways:

    - To configure GroupID right after installation, click **Next** on the **Run
      Configuration Tool** page. See the
      [Install GroupID](/docs/directorymanager/11.0/about/installer/install.md) topic.
    - When GroupID is installed, the Configuration Tool is also installed as a separate
      program on the machine. Launch the GroupID Configuration Tool from the Windows Start
      screen.

    In either case, the tool opens to the **Introduction** page.

    ![Configuration Tool Introduction page with a welcome message](/images/directorymanager/11.0/install/configure/intro.webp)

2. Read the welcome message and click **Next**.

    ![Configuration Tool page for selecting whether to create a new server or use an existing server](/images/directorymanager/11.0/install/configure/select_to_create_a_new_server-new.webp)

3. To configure a GroupID server or a GroupID client, select the relevant
   option.

    - **Configure a new GroupID server with new or existing database** – configures the GroupID
      server and the GroupID Data Service on the machine where you install
      GroupID.

        It also configures the GroupID Elasticsearch Service as a primary node for the
        Elasticsearch service cluster to support load balancing.

        See the
        [Configure a GroupID Server and Database](/docs/directorymanager/11.0/about/configure/gidserver.md)
        topic for additional information.

    - **Configure a new GroupID 11 server to add it into an existing GroupID 11 cluster with an
      existing database** – configures a GroupID server that has its own Data Service.
      This Data Service gets the configurations (passphrase and database settings) of the Data
      Service deployed for another GroupID server in your environment.

        This option also configures the GroupID Elasticsearch Service as a secondary node
        to the primary node for the Elasticsearch Service cluster configured on the GroupID
        server. See the
        [Add a GroupID Server to an Existing Cluster](/docs/directorymanager/11.0/about/configure/database.md)
        topic for additional information.

See Also

- [GroupID 11.0 System Requirements](/docs/directorymanager/11.0/requirements/requirements.md)
- [Run the GroupID Preparation Tool](/docs/directorymanager/11.0/about/installer/preparationtool.md)
- [Install GroupID](/docs/directorymanager/11.0/about/installer/install.md)
