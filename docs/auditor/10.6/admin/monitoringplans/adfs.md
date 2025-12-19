---
title: "Active Directory Federation Services"
description: "Active Directory Federation Services"
sidebar_position: 50
---

# Active Directory Federation Services

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.6/requirements/ports.md) – To
  ensure successful data collection and activity monitoring configure necessary protocols and ports
  for inbound and outbound connections
- [Data Collecting Account](/docs/auditor/10.6/admin/monitoringplans/dataaccounts.md)
  – Configure data collecting accounts as required to audit your IT systems

- [AD FS](/docs/auditor/10.6/configuration/activedirectoryfederatedservices/overview.md)
  – Configure data source as required to be monitored

Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Schedule AD FS logons collection                   | Specify period for AD FS logons collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Specify data collection method                     | You can enable network traffic compression. If enabled, a Compression Service will be automatically launched on the audited computer, collecting and pre-filtering data. This significantly improves data transfer and minimizes the impact on the target computer performance.                                                                                                                                                                                                                                                                                                            |
| Configure audit settings                           | You can adjust audit settings automatically. Your current audit settings will be checked on each data collection and adjusted if necessary. If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed. Do not select the checkbox if you want to configure audit settings manually. For a full list of audit settings required to collect comprehensive audit data and instructions on how to configure them, refer to [AD FS](/docs/auditor/10.6/configuration/activedirectoryfederatedservices/overview.md). |

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the
[Add Items for Monitoring](/docs/auditor/10.6/admin/monitoringplans/datasources.md#add-items-for-monitoring)
topic for additional information.

## Federation Server

If you are going to audit an entire AD FS farm, consider adding all AD FS server one by one as items
to your monitoring plan. Otherwise, your audit scope may contain warnings, errors or incomplete
data.

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Specify AD FS federation server         | Provide a server name by entering its FQDN, NETBIOS or IPv4 address. You can click Browse to select a computer from the list of computers in your network.                                                                                                                                                                                                                                                                                                                                                                                  |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.6/admin/monitoringplans/dataaccounts.md) topic for additional information. |
