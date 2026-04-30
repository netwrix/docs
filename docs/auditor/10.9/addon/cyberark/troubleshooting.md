---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 50
---

# Maintenance and Troubleshooting

The Add-On operations are logged into the **SyslogService.txt** file. This file is located in the
same folder as **SyslogService.exe.**

To change the add-on logging level, use the **LogLevel** parameter in the **Settings.xml** file.

- It is recommended that before the first run you set this parameter to `debug`. This will
  facilitate operations tracking and possible problem solving.
- After that it is strongly recommended to re-set this parameter to `error` to prevent the
  uncontrolled log growth.

If you cannot see collected data in Auditor, check the following:

1. In Auditor settings, go to the **Integrations** section and make sure the **Leverage Integration
   API** is switched to **ON**. Check the communication port number – default is **9699**.
2. If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
3. Verify the parameters you provided in **Settings.xml** and **dbparam.ini**.
