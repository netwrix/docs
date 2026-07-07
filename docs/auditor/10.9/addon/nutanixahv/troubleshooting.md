---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 50
---

# Maintenance and Troubleshooting

If you can't see collected data in Auditor, check the following:

- Service account has sufficient rights to access Auditor.
- In Auditor settings, go to the **Integrations** section and ensure the **Leverage Integration
  API** is switched to **ON**. Check the communication port number – default is **9699**.
- If you configured a dedicated monitoring plan, ensure data source monitoring is enabled.
- Verify the connection settings in the configuration wizard.
- Confirm the Windows service **Netwrix Auditor Add-on for Nutanix AHV** (service name
  `NwNxIntrSvc`) is running.
- Check the add-on logs in _C:\ProgramData\Add-on for Nutanix AHV\Logs\_.

The add-on doesn't collect events from the remote Syslog server (add-on installation
server).

One add-on installation supports only one Prism installation (Central or Element). Monitoring
multiple Prism Central/Element servers from the same host isn't supported.
