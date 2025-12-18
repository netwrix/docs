---
description: >-
  Reference of useful Dell Isilon / PowerScale OneFS audit commands to
  troubleshoot activity sync issues and inspect audit-forwarding state when
  using Netwrix Activity Monitor.
keywords:
  - Dell Isilon
  - PowerScale
  - OneFS
  - audit
  - activity
  - CEE
  - syslog
  - Netwrix Activity Monitor
  - audit logs
products:
  - activitymonitor
sidebar_label: Useful Dell Isilon / PowerScale Activity commands
tags: []
title: "Useful Dell Isilon / PowerScale Activity commands"
knowledge_article_id: kA04u0000000IgTCAU
---

# Useful Dell Isilon / PowerScale Activity commands

## Summary
Useful Dell Isilon / PowerScale Activity commands when troubleshooting activity sync issues.

## Issue
When investigating why events are not up to date in the Netwrix Activity Monitor console/Logs, it is beneficial to view from an SSH session to the Isilon / PowerScale what the current state of audit logs is. Starting with OneFS 8.0.1, Dell introduced several commands that assist in viewing the audit log process. A few of these commands are listed below with explanations on usage.

## Instructions

### AUDIT LOG PROGRESS
To check the last captured audit event and the event time of the last event to be sent to the CEE server, run the `isi audit progress view` command to view the forwarder log position of the CEE server. The command shows the times for the node the command is run on.

A sample output of the `isi audit progress view` is shown:

```
Protocol Audit Log Time: Tue Mar 29 13:32:38 2016 
Protocol Audit Cee Time: Tue Mar 29 13:32:38 2016 
Protocol Audit Syslog Time: Fri Mar 25 17:00:28 2016
```

The output for Audit Log Time and Audit Cee Time are the ones we are interested in and should match or at least be close to matching.

You can use `isi_for_array` to gather the time for all nodes in the cluster.  
Example command:
```
isi_for_array isi audit progress view
```

Additionally you can target particular nodes by using `--Inn`. Example command:
```
isi audit progress view --Inn=2
```
this will display the stats for logical node 2.

In 8.0.1 a new command was introduced to get a global view of the oldest **Unsent** protocol audit event for the cluster. Command:
```
isi audit progress global view
```
If the Oldest Audit Cee time is months behind the Audit Log this shows the oldest log STILL to be sent to the CEE.

Sample output:

```
Protocol Audit Latest Log Time: Fri Sep 2 10:06:36 2016 
Protocol Audit Oldest Cee Time: Fri Sep 2 10:02:28 2016 
Protocol Audit Oldest Syslog Time: Fri Sep 2 10:02:28 2016
```

### AUDIT LOG TIME ADJUSTMENT
In a scenario where auditing on the cluster has been configured and enabled prior to setting up CEE and/or Syslog, the cluster will attempt to forward all events from the time auditing was configured.

OneFS provides a configuration setting to manually update the time to begin forwarding events from. By setting the `--cee-log-time`, you can advance the point of time from where to start to forward.

Example: The following will update the pointer to forward events after Nov 19, 2023 at 2pm

```
isi audit settings global modify --cee-log-time "Protocol@2023-11-19 14:00:00"
```

The ability to "check point or book mark" a date in time is especially useful when seeing a very large backlog of events.

Note: doubled hyphens (`--`) used in the commands above are required.

## Further reading
https://www.dellemc.com/resources/en-us/asset/white-papers/products/storage/h12428-wp-best-practice-guide-isilon-file-system-auditing.pdf

## Product
**Netwrix Activity Monitor**

**Module:** Activity Monitor - Isilon/PowerScale  
**Versions:** OneFS 8.0.1+  
**Legacy Article ID:** 2432
