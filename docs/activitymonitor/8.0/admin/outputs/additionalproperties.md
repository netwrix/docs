---
title: "Additional Properties Tab"
description: "Additional Properties Tab"
sidebar_position: 20
---

# Additional Properties Tab

The Additional Properties tab on an output Properties window is where comments and displayed host
name can be modified. These settings are initially configured when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window.

![Additional Properties](/images/activitymonitor/8.0/admin/outputs/additionalpropertiestab.webp)

The options are:

- Report hostname as – The value entered here will customize the hostname that is reported for the
  event in the activity log outputs
- Comment – The value entered here will appear in the Comments column in the Monitored Hosts tab
  table.

Often, the Additional Properties Tab is used to indicate the purpose of the output, e.g. for Netwrix
Access Analyzer (formerly Enterprise Auditor). This can be useful if using multiple outputs with
different configurations for different purposes. For example, a SharePoint site could be added as a
host and configured for Netwrix Access Analyzer (formerly Enterprise Auditor) data collection. It
can be added again with different monitoring options and be configured for SIEM notification.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

**Integration with Netwrix Threat Prevention for NAS Monitoring**

If a Threat Prevention Agent has been deployed to the same Windows proxy server where and activity
agent is deployed to monitor NAS devices, then the **Comment** column in the monitored hosts table
identifies the host as being “Managed by Threat Prevention”, and that ‘monitored host’ configuration
is not editable through the Activity Monitor Console. Simply add the host again for other outputs.
