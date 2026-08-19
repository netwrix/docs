---
title: "Prerequisites"
description: "Prerequisites"
sidebar_position: 10
---

# Prerequisites

Netwrix Auditor Integration API uses HTTPS (Hypertext Transfer Protocol Secure) with the automatically
generated certificate for communication. The default communication port is 9699.

Refer to the [Security](/docs/auditor/10.9/api/security.md) topic for detailed instructions on how to disable HTTPS and
manage other API settings.

## Configure Integration API settings

On this page, you can view the current port settings and restrictions on the TLS (Transport Layer Security) version used for encrypted connections.

1. In the Netwrix Auditor main window, navigate to the **Integration** tile.
2. Ensure the **Leverage Integration API** option is enabled.
3. Click **Modify settings** under the API settings section.
4. Specify a port number. The product automatically creates a Windows firewall rule.
5. Select the minimum TLS version from the list. For a new installation, this defaults to 1.2.
6. If you use a third-party firewall, create a rule for inbound connections manually.

![Integration API Settings](/images/auditor/10.9/addon/connectwise/integrations_thumb_0_0.webp)

## Configure Audit Database settings

When you first configure the Audit Database settings in Netwrix Auditor, the product also creates
several databases for special purposes, including `Netwrix_Auditor_API`. This database stores data
imported from other sources through Netwrix Auditor Integration API.

Ensure that you have configured the Audit Database settings in Netwrix Auditor. To check or configure
these settings, navigate to **Settings** > **Audit Database**.

Netwrix Auditor Integration API requires a configured Audit Database.

Refer to the [Audit Database](/docs/auditor/10.9/admin/settings/auditdatabase.md) topic for detailed instructions on
how to configure SQL Server settings.
