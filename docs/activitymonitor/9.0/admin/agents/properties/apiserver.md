---
title: "API Server Tab"
description: "API Server Tab"
sidebar_position: 40
---

# API Server Tab

The API Server Tab provides options to configure API server settings to send information about
agents, agent configuration, and agent data to applications remotely. If an application wants to
read the activity data using the API, the API Server must be enabled on each agent collecting
activity.

![API Server Tab for Agent Properties](/images/activitymonitor/9.0/admin/agents/properties/apiservertab.webp)

Check the Enable API access on this agent box to utilize the options on this tab:

- API server port (TCP): [number] (from 1000 to 65535) – Enter the API server port. The default
  is 4494.
- Configure what applications have access to the API – Specifies which API servers can be included
  or excluded from receiving event data.
    - Add Application – Click Add Application to open the Add or edit API client window to add an
      Application name to the list
    - Remove – Select an Application Name and click Remove to remove an Application name from the
      list
    - Edit – Select an Application Name and click Edit... to open the Add or edit API client window
      for that Application Name

Grant or revoke access to the API Server by registering applications.

![Add or Edit API Client popup window](/images/activitymonitor/9.0/admin/agents/properties/addoreditapiclient.webp)

Click Add Application to open the Add or edit API client window.

- Application name – Name of application to provide read-only access to
- Permissions – list of permissions for Activity Monitor  through API Server
    - Access activity data – Provides a read-only access to the activity log files of the agent
      hosting the API Server. The access is provided to the files stored on the agent's server or on
      the archival network share. The permission also provides minimal and read-only access to
      configuration of monitored hosts/domain, enough to match the monitored hosts/services to their log
      files.
    - Read – Provides a read-only access to the list of the agents and their configuration settings;
      configuration of monitored domains; configuration of monitored hosts/services. The permission does not
      provide access to the saved passwords or other secrets.
    - Policy change - Provides permissions required to update the AD Monitoring domain configuration
      settings
    - Modify host - Provides permissions required to update the monitored hosts/services settings
    - Modify agent - Provides permissions required to update the agent hosts settings
- Client ID/Generate – Generate button creates a new Client ID and Client Secret (password)
  credentials for applications to access API server
- Client Secret/Copy – Copy button copies the Client ID and Client Secret (password) into its
  respective textbox after the application is added or the Generate button is pressed
- Secret Expires – Displays the number of days until the Client Secret expires before activated. The
  default is 3 days.

The options below the API Application Access window are:

- Managing console/Use this console – Use this console button enters the host name of the Activity
  Monitor Console within the textbox
- IPv4 or IPv6 whitelist – IP Addresses of the remote hosts, which are allowed to connect to the API
  port, can be whitelisted by entering them in the box. IP Addresses should be entered as separate
  addresses with space, comma (,), semicolon (;), or a multi-line list. Leave the box blank to
  accept connections from any hosts.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.
