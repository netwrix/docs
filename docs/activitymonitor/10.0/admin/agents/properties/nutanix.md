---
title: "Nutanix Tab"
description: "Nutanix Tab"
sidebar_position: 150
---

# Nutanix Tab

The Nutanix tab provides features to configure settings for monitoring Nutanix devices.

![Agent Properties - Nutanix](/images/activitymonitor/9.0/admin/agents/properties/nutanix.webp)

The available Agent server settings for Nutanix are:

- Agent server port (TCP) – Enter the TCP port that Nutanix will use to connect to the agent. The
  agent will add the port to the firewall exclusions automatically. The default is 4501.
- IPv4 or IPv6 allowlist – Specify the IP addresses of the Nutanix nodes, which are allowed to
  connect to the agent server port. Multiple addresses can be entered separated by space, comma (,),
  semicolon (;), or as a multi-line list. Leave the box blank to accept connections from any hosts.

    :::note
    This setting is optional and it allows you to improve security by limiting the number
    of IP addresses allowed to connect.
    :::


Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.
