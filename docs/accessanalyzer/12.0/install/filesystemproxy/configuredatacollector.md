---
title: "File System Data Collection Configuration for Proxy as a Service"
description: "File System Data Collection Configuration for Proxy as a Service"
sidebar_position: 20
---

# File System Data Collection Configuration for Proxy as a Service

To employ the proxy mode as a service scan for collecting file system data from the target host,
navigate to the **FileSystem** > **0.Collection** > **…System Scans** jobs and open the File System
Access Auditor Data Collector Wizard from the job’s query.

On the Applet Settings wizard page, select the following option:

- Require applet to be running as service on target – Must be selected in the Applet Launch
  Mechanism section to prevent the deployment of the applet or the ad hoc installation of the
  service during the scan

On the Scan Server Selection wizard page, select either of the following options:

- Specific Remote Server – Assigns the data collection processing to the server specified in the
  textbox
- Specific Remote Servers by Host List – Assigns the data collection processing to the proxy servers
  in the host list selected within the wizard via the **Select Hosts Lists** button

See the
[FSAA Query Configuration](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/overview.md#fsaa-query-configuration)
topic for additional information.

:::info
When choosing to use proxy mode as a service for any of the File System Solution
**…System Scans** jobs, set proxy mode as a service for all of the **…System Scans** jobs that are
scheduled to run together.

:::
