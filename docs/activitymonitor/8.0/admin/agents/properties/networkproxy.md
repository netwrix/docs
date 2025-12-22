---
title: "Network Proxy Tab"
description: "Network Proxy Tab"
sidebar_position: 140
---

# Network Proxy Tab

Use the Network Proxy tab to set the proxy for connection to Microsoft Entra ID (formerly Azure AD)
and Office 365 monitoring. You can leave the properties blank to connect to Microsoft Entra ID
directly.

![Agent Properties - Network Tab](/images/activitymonitor/8.0/admin/agents/properties/networkproxytab.webp)

The configurable options are:

- HTTP proxy server in SERVER[:PORT] format – Specify the IP address or name and the port number of
  the proxy server to query Microsoft Entra ID and Office 365. You can leave this field blank to
  disable HTTP proxy.
- Select one of the following checkboxes:

    - Authenticate as the agent's machine account
    - Bypass the proxy server for local addresses

- User name – Specify a user name for the proxy server
- User password – Specify a password for the user name
- Bypass list – Specify the Bypass list. This is a list of URIs that do not use the proxy server
  when accessed. Multiple addresses can be entered separated by space, comma (,), semicolon (;), or
  as a multi-line list.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The Agent
Properties window closes.
