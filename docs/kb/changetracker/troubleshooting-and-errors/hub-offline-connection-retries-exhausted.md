---
description: >-
  Explains the "Hub Offline, connection retries exhausted" rolling-log error
  for Netwrix Change Tracker agents and how to troubleshoot connectivity
  between the agent and the Netwrix Server.
keywords:
  - Hub Offline
  - connection retries exhausted
  - agent connectivity
  - Netwrix Server
  - firewall
  - DNS
  - NAT
  - port forwarding
  - rolling log
  - Netwrix Change Tracker
  - remote server
  - troubleshooting
knowledge_article_id: ka0Qk000000DldpIAC
products:
  - change-tracker
sidebar_label: Hub Offline Connection Retries Exhausted
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "Hub Offline, Connection Retries Exhausted - Unable to
  Connect to the Remote Server"
---

This article explains how to troubleshoot the `Hub Offline, connection retries exhausted` error in the Netwrix Change Tracker agent Rolling Log.

## Symptom

The following error appears in the agent Rolling Log:

```text
2017-11-25 09:22:56,446 [10] INFO  Message - Hub Offline, connection retries exhausted. Sleeping until 11/25/2017 2:24:31 PM (Unable to connect to the remote server - No connection could be made because the target machine actively refused it 192.168.1.1:443)
```

## Cause

This error occurs when the agent cannot reach the Netwrix Server. Common causes include:

- The Netwrix Server may be powered off, IIS is not running, or MongoDB is not running.
- The Netwrix Server may not be on the domain, does not have a network connection, or is in the wrong subnet.
- The port the agent is using is currently being used by another application, causing a conflict.
- A firewall is blocking the connection to the Netwrix Server over the specified port.
- Network routes are not configured to allow communication between the Netwrix Server and the agent.
- If the agent was configured using an FQDN instead of an IP address, the issue could be DNS-related.
- If the agent is on a cloud provider network, the cloud provider's traffic rules may need to be modified to allow communication.
- If the agent is on a WAN or a different LAN:
    - Port forwarding may need to be configured.
    - NAT settings may need to be modified to allow communication.
    - Proxy settings may need to be modified if a web or other proxy is in use.

## Resolution

If you are receiving this error, the agent is currently not sending any logs to the Netwrix Server. Verify the following common causes:

- **Confirm the Netwrix Server is running.** Verify that IIS and MongoDB services are running on the Netwrix Change Tracker Hub server.
- **Test connectivity from the agent host.** From the agent, attempt to reach the Hub URL (for example, using `ping`, `curl`, or `Test-NetConnection`). If the Hub URL uses an FQDN, confirm the agent can resolve it via DNS.
- **Verify firewall and port configuration.** Confirm the port defined in the agent's `HubDetails.xml` (typically 443) is open between the agent and the Netwrix Server. See [Network Ports for Change Tracker](/docs/kb/changetracker/configuration-and-setup/network-ports-for-change-tracker) or the [Agent and Device Ports](/docs/changetracker/8_2/requirements/agentdeviceports) product doc.

After correcting the underlying issue, restart the agent service to force a reconnection.

<!-- SME REVIEW NEEDED: Please confirm the troubleshooting steps above and expand with any product-specific commands, additional guidance, or missing scenarios (e.g., WAN/LAN-specific steps). -->

