---
title: "Forward events to a SIEM"
description: "Add a SIEM server so Privilege Secure sends audit events to your security information and event management system over TCP or UDP."
sidebar_position: 10
---

# Forward events to a SIEM

Privilege Secure can send its events to a security information and event management (SIEM) system for reporting, correlation, and alerting. A SIEM server entry defines where to send the events, how to connect, and which template sets the message format.

## Prerequisites

- A SIEM system that listens for messages on a TCP or UDP port that the Privilege Secure service node can reach.
- A SIEM template. Privilege Secure includes **CEF** and **LEEF**. See [SIEM templates and event fields](/docs/privilegesecure/26.07/integrations/siem/siem-templates.md).

## Add a SIEM server

1. Select **Configuration** > **SIEM Servers**.
1. Click **+** above the list.
1. Fill in the fields in the table.
1. Click **Save**.

| Field | Description |
|---|---|
| **SIEM Host** | The name or address of the SIEM server. |
| **Server Type** | The transport. Select **TCP** (the default) or **UDP**. |
| **Port**\* | The port the SIEM server listens on. The default is `514`. |
| **Protocol** | The secure protocol for the connection: `<none>`, **TLS**, **TLS11**, or **TLS12**. TLS 1.3 isn't offered. |
| **Template**\* | The template that sets the message format: **CEF** or **LEEF**, or a custom template. |
| **Use SSL** | Select to turn on SSL for the connection. Cleared by default. |
| **Enabled** | Select to send events to this server. Clear to stop sending. Selected by default. |

An asterisk (\*) marks a required field.

Encryption applies to **TCP** only. Privilege Secure encrypts the connection only when **Protocol** is set to a TLS version and **Use SSL** is selected. If either is missing, the connection is unencrypted. **UDP** always sends unencrypted messages, and ignores both settings. **TLS** selects TLS 1.0. For a secure connection, select **TLS12**, the highest version that the list offers. The SIEM server certificate must be valid for the name in **SIEM Host**.

### Example

This example sends events in CEF format to a SIEM server over TCP port 514, without encryption.

| Field | Value |
|---|---|
| **SIEM Host** | `<siem-server>` |
| **Server Type** | **TCP** |
| **Port**\* | `514` |
| **Protocol** | `<none>` |
| **Template**\* | **CEF** |
| **Use SSL** | Cleared |
| **Enabled** | Selected |

{/* TODO screenshot: the Add SIEM Server form filled in with the example values */}

## Which events are sent

A SIEM server receives only the events that occur after you enable it. Privilege Secure doesn't send earlier events. Events that occur while a server is disabled are never sent to it, even after you enable it again.

Pipe characters (`|`) in the text of an event message are removed before the message is sent.

## Check what was sent

The SIEM Service page on the **Service Nodes** page lists each event, whether it was sent, and the SIEM server it went to. See [Monitor service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md#siem-service).

Privilege Secure can delete sent SIEM records after a number of days. See [Configure data retention](/docs/privilegesecure/26.07/configuration/system-settings/data-retention.md).

## Related topics

- [SIEM templates and event fields](/docs/privilegesecure/26.07/integrations/siem/siem-templates.md)
- [Monitor service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md#siem-service)
- [Configure data retention](/docs/privilegesecure/26.07/configuration/system-settings/data-retention.md)
