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
knowledge_article_id:
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

1. The Netwrix Server may be powered off, IIS is not running, or MongoDB is not running.
2. The Netwrix Server may not be on the domain, does not have a network connection, or is in the wrong subnet.
3. The port the agent is using is currently being used by another application, causing a conflict.
4. A firewall is blocking the connection to the Netwrix Server over the specified port.
5. Network routes are not configured to allow communication between the Netwrix Server and the agent.
6. If the agent was configured using a Fully Qualified Domain Name instead of an IP address, the issue could be DNS-related.
7. If the agent is on a WAN or a different LAN, port forwarding may need to be configured.
8. If the agent is on a WAN or a different LAN, NAT settings may need to be modified to allow communication.
9. If the agent is on a WAN or a different LAN, proxy settings may need to be modified if a web or other proxy is in use.
10. If the agent is on a cloud provider network, the cloud provider's traffic rules may need to be modified to allow communication.

## Resolution

If you are receiving this error, the agent is currently not sending any logs to the Netwrix Server. Review the causes listed above and verify that each item is functioning properly.

> **NOTE:** In most cases, resolving the underlying connectivity issue will fix this error. If the issue persists after the root cause is addressed, restart the agent service.
