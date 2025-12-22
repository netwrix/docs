---
title: "RemoteOpenPort Job"
description: "RemoteOpenPort Job"
sidebar_position: 10
---

# RemoteOpenPort Job

The RemoteOpenPort job remotely executes a `netstat -a -b -n` command to gather information about
the available ports on the targeted hosts.

## Queries for the RemoteOpenPort Job

The RemoteOpenPort job uses the Script Data Collector for the following query:

:::warning
The query is preconfigured for this job. Never modify the query.
:::


![Queries for the RemoteOpenPort Job](/images/accessanalyzer/12.0/solutions/windows/securityutilities/openportscan/remoteopenportquery.webp)

The query for the RemoteOpenPort job is:

- Remote Execution of NETSTAT – Runs VBScript on a remote host to run NETSTAT and gather information
  about the available ports on the targeted hosts

## Analysis Tasks for the RemoteOpenPort Job

Navigate to the **Windows** > **Security Utilities** > **OpenPortScan** > **RemoteOpenPort** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the RemoteOpenPort Job](/images/accessanalyzer/12.0/solutions/windows/securityutilities/openportscan/remoteopenportanalysis.webp)

The default analysis task is:

-   **1. Impose 30 Second Wait Timer** – Slows processing down to allow remote command to complete
