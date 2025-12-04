---
description: >-
  This article explains causes and resolutions for the "The remote procedure
  call failed and did not execute" error that can occur when Netwrix Auditor
  collects logs from target systems. It lists possible causes related to
  firewall, permissions, and RPC server availability and provides links to
  further guidance.
keywords:
  - RPC
  - The remote procedure call failed
  - event logs
  - firewall rules
  - permissions
  - Netwrix Auditor
  - data collection
  - RPC server unavailable
products:
  - auditor
sidebar_label: The Remote Procedure Call Failed Error When Collec
tags: []
title: "The Remote Procedure Call Failed Error When Collecting Logs"
knowledge_article_id: kA04u000001114LCAQ
---

# The Remote Procedure Call Failed Error When Collecting Logs

## Symptom

When trying to collect data from target systems with Netwrix Auditor, the following error appears:

```text
The remote procedure call failed and did not execute.
```

## Causes

Here are the possible causes for the issue:

- Cause 1. Current Firewall configuration blocks access to event logs.
- Cause 2. Insufficient permissions for the account used for data collection.
- Cause 3. Issues with RPC server (RPC server is unavailable).

## Resolutions

Review the possible resolutions depending on you cause:

- For cause 1. Make sure you configured Firewall rules. For additional information on the Firewall rules configuration, refer to the following article: [Protocols and Ports Required](https://docs.netwrix.com/docs/auditor/10_8/requirements/ports)

- For cause 2. Make sure you assigned all required rights and permissions to the account used for data collection. For additional information on the data collecting account configuration, refer to the following article: [Data Collecting Account](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/dataaccounts)

- For cause 3. For additional information on the data collecting account configuration, refer to the following article: [Error 0x800706BA − RPC Server Is Unavailable](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/error-0x800706ba-rpc-server-is-unavailable)
