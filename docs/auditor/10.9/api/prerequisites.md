---
title: "Prerequisites"
description: "Prerequisites"
sidebar_position: 10
---

# Prerequisites

Netwrix Auditor Integration API uses HTTPS for communication with the automatically generated
certificate. The default communication port is 9699.

See [Security](/docs/auditor/10.9/api/security.md) for instructions on how to disable HTTPS and
manage other API settings.

## Configure Integration API Settings

**Step 1 –** In the Netwrix Auditor main window, navigate to the Integration tile.

**Step 2 –** ensure the Leverage Integration API option is enabled.

**Step 3 –** Click Modify under the API settings section and specify a port number. Netwrix Auditor
automatically creates a Windows firewall rule.

**Step 4 –** If you use a third-party firewall, you must create a rule for inbound connections
manually.

![Integration API Settings](/images/auditor/10.9/addon/connectwise/integrations_thumb_0_0.webp)

## Configure Audit Database Settings

When you first configure the Audit Database settings in Netwrix Auditor, the product also creates
several databases for special purposes, including Netwrix_Auditor_API. This database is designed to
store data imported from the other sources using Netwrix Auditor Integration API.

Ensure you've configured the Audit Database settings in Netwrix Auditor. To check or configure
these settings, navigate to the **Settings > Audit Database**.

You can't use Netwrix Auditor Integration API without configuring the Audit Database.

See [Audit Database](/docs/auditor/10.9/admin/settings/auditdatabase.md) for instructions on
how to configure SQL Server settings.
