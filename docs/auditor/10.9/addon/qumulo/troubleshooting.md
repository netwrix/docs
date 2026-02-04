---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 50
---

# Maintenance and Troubleshooting

(Undefined variable: Add-on.Addon_Qumulo) operations are logged into the **SyslogService.txt** file.
This file is located in the same folder as **SyslogService.exe.**

To change the add-on logging level, use the **LogLevel** parameter in the **settings.xml** file.

- It is recommended that before the first run you set this parameter to `debug`. This will
  facilitate operations tracking and possible problem solving.
- After that it is strongly recommended to re-set this parameter to `error` (default value) to
  prevent the uncontrolled log growth.

If you cannot see collected data in Netwrix Auditor, check the following:

1. Service account has sufficient rights to access Netwrix Auditor.
2. In Netwrix Auditor settings, go to the **Integrations** section and make sure the **Leverage
   Integration API** is switched to **ON**. Check the communication port number – default is
   **9699**.
3. If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
4. Verify the parameters you provided in **settings.xml**.
