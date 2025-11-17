---
description: >-
  Explains how to resolve the error "Change analysis completed with an error:
  Error saving current VMware Virtual Center snapshot: The server committed a
  protocol violation. Section=ResponseStatusLine" by updating the Managed Object
  link to use the Virtual Center server name or IP without a port.
keywords:
  - VMware
  - Virtual Center
  - ESX
  - snapshot
  - protocol violation
  - ResponseStatusLine
  - Managed Object link
  - connection error
  - Netwrix Auditor
  - troubleshooting
products:
  - auditor
sidebar_label: 'Change analysis completed with error: Error saving'
tags: []
title: "Change analysis completed with error: Error saving current VMware Virtual Center snapshot: The server committed a protocol violation"
knowledge_article_id: kA00g000000H9atCAC
---

# Change analysis completed with error: Error saving current VMware Virtual Center snapshot: The server committed a protocol violation

You receive the error message:

```
Change analysis completed with an error: Error saving current VMware Virtual Center snapshot: The server committed a protocol violation. Section=ResponseStatusLine
```

## Cause

The link you are using to connect to the Virtual Center server or ESX(i) host is incorrect.

## Resolution

1. Change the Managed Object link to the following:
   - `https://VirtualCenterServer`

Where `VirtualCenterServer` is the network name or IP address of the Virtual Center server or ESX(i) host you are connecting to.

**Note**: The port number is not needed!
