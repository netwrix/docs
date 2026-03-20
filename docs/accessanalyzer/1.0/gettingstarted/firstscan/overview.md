---
title: "Your First Scan"
description: "Step-by-step guide to running your first scan"
sidebar_position: 10
---

# Your First Scan

This guide walks you through the complete workflow of adding a data source, creating a scan, running it, and reviewing the results. The example uses a CIFS/SMB file share, but the workflow is similar for all source types.

## Workflow Summary

| Step | Description | Page |
| --- | --- | --- |
| 1 | Create a service account with credentials for your data source | [Adding a Data Source](/docs/accessanalyzer/1_0/gettingstarted/firstscan/addingsource) |
| 2 | Add a data source and test the connection | [Adding a Data Source](/docs/accessanalyzer/1_0/gettingstarted/firstscan/addingsource) |
| 3 | Create a scan and select scan type | [Configuring a Scan](/docs/accessanalyzer/1_0/gettingstarted/firstscan/configuringscan) |
| 4 | Run the scan and monitor progress | [Running and Monitoring a Scan](/docs/accessanalyzer/1_0/gettingstarted/firstscan/runningscan) |
| 5 | Review findings in dashboards and scan results | [Viewing Results](/docs/accessanalyzer/1_0/gettingstarted/firstscan/viewingresults) |

## Prerequisites

Before starting, ensure you have:

- Signed in as an administrator — see [First Login](/docs/accessanalyzer/1_0/gettingstarted/firstlogin)
- A data source available on the network (for example, a CIFS/SMB file share)
- Credentials with read access to the data source
- Network connectivity from the Access Analyzer VM to the data source (for example, port 445 for SMB)
