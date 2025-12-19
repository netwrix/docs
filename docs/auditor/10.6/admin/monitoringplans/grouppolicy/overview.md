---
title: "Group Policy"
description: "Group Policy"
sidebar_position: 100
---

# Group Policy

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.6/requirements/ports.md) – To
  ensure successful data collection and activity monitoring configure necessary protocols and ports
  for inbound and outbound connections
- [Data Collecting Account](/docs/auditor/10.6/admin/monitoringplans/dataaccounts.md)
  – Configure data collecting accounts as required to audit your IT systems

- [Group Policy](/docs/auditor/10.6/configuration/grouppolicy/overview.md) –
  Configure data source as required to be monitored

Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Prerequisites                                      | Netwrix Auditor will automatically look up additional system components and prompt you to install those that are missing. In case all required components have been already installed, this section will be omitted. See the [Other Components](/docs/auditor/10.6/requirements/software.md#other-components) topic for additional information.                                                                                                                                                                                                                                                                                                                         |
| Detect additional details                          | Specify additional information to include in reports and activity summaries. Select Group membershipif you want to include Group membership of the account under which the change was made.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Specify data collection method                     | You can enable **network traffic compression.** If enabled, a Compression Service will be automatically launched on the audited computer, collecting and prefiltering data. This significantly improves data transfer and minimizes the impact on the target computer performance.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Configure audit settings                           | You can adjust audit settings automatically. Your current audit settings will be checked on each data collection and adjusted if necessary. This method is recommended for evaluation purposes in test environments. If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed. Do not select the checkbox if you want to configure audit settings manually. See the [Group Policy](/docs/auditor/10.6/configuration/grouppolicy/overview.md) configuration topic for additional information about audit settings required to collect comprehensive audit data and the instructions on how to configure them. |

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the
[Add Items for Monitoring](/docs/auditor/10.6/admin/monitoringplans/datasources.md#add-items-for-monitoring)
topic for additional information.

## Domain

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Specify Active Directory domain         | Specify the audited domain name in the FQDN format. For example, "_company.local_".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. You can also use group Managed Service Accounts (gMSA) as data collecting accounts. If using a Managed Service Account, you can specify only the account name in the _domain\account$_ format. Password field can be empty. A custom account must be granted the same permissions and access rights as the default account used for data collection. |

See the
[Permissions for Group Policy Auditing ](/docs/auditor/10.6/configuration/grouppolicy/permissions.md)
topic for additional information.
