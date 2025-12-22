---
title: "Prerequisites"
description: "Prerequisites"
sidebar_position: 10
---

# Prerequisites

Netwrix Auditor Integration API uses HTTPS for communication with the automatically generated
certificate. The default communication port is 9699.

Refer to the [Security](/docs/auditor/10.8/api/security.md) topic for detailed instructions on how to disable HTTPS and
manage other API settings.

## Configure Integration API Settings

Follow the steps to change the port.

**Step 1 –** In the Netwrix Auditor main window, navigate to the Integration tile.

**Step 2 –** Make sure the Leverage Integration API option is enabled.

**Step 3 –** Click Modify under the API settings section and specify a port number. Windows firewall
rule will be automatically created.

**Step 4 –** If you use a third-party firewall, you must create a rule for inbound connections
manually.

![Integration API Settings](/images/auditor/10.7/addon/connectwise/integrations_thumb_0_0.webp)

## Configure Audit Database Settings

When you first configure the Audit Database settings in Netwrix Auditor, the product also creates
several databases for special purposes, including Netwrix_Auditor_API. This database is designed to
store data imported from the other sources using Netwrix Auditor Integration API.

Make sure that the Audit Database settings are configured in Netwrix Auditor. To check or configure
these settings, navigate to the **Settings > Audit Database**.

You cannot use Netwrix Auditor Integration API without configuring the Audit Database.

Refer to the [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topic for detailed instructions on
how to configure SQL Server settings.
