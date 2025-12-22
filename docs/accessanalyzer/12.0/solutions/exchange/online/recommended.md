---
title: "Recommended Configurations for the 8. Exchange Online Job Group"
description: "Recommended Configurations for the 8. Exchange Online Job Group"
sidebar_position: 10
---

# Recommended Configurations for the 8. Exchange Online Job Group

**Dependencies**

The following Access Analyzer job groups need to be successfully run:

- .Active Directory Inventory
- .Entra ID Inventory

**Targeted Hosts**

The Mailflow job group uses Remote PowerShell through the ExchangePS Data Collector and the
PowerShell Data Collector. The host list needs to be set to one of the following:

- Local Host
- Custom Host List for Exchange Online

    - The host list should include the tenant name of the Microsoft Entra tenant used to connect to
      Exchange Online. See the
      [Exchange Online Host List](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/configurejob.md#exchange-online-host-list)
      topic for additional information.

**Connection Profile**

See the [Exchange PowerShell Permissions](/docs/accessanalyzer/12.0/requirements/exchange/support/powershell.md)
topic for the EX_Mailflow job requirements.

Additionally, the Exchange Online job group needs access to the following Exchange Online URLs to
perform collection:

- Exchange PowerShell – https://ps.outlook.com/PowerShell
- Autodiscover – https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc
- EWS – https://outlook.office365.com/EWS/Exchange.asmx

See the
[Exchange Custom Connection Profile & Host List](/docs/accessanalyzer/12.0/admin/datacollector/exchangeps/configurejob.md)
topic for additional information.

**Schedule Frequency**

This job group has been designed to run daily.

:::info
Run this job group at 1:00 AM.
:::


**Query Configuration**

The 8. Exchange Online job group is designed to be run with the default query configurations.
However, the following queries can be modified:

- **Mailflow** > **0. Collection** > **EX_Mailflow** Job – **MailFlow** Query
- **EX_ASPolicies** Job – **Exchange Settings** Query

No other queries should be modified.

**Analysis Configuration**

The 8. Exchange Online job group should be run with the default analysis configurations. Most of
these analysis tasks are preconfigured and should never be modified or deselected. There are some
that are deselected by default, as they are for troubleshooting purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

- **Mailflow** > **0. Collection** > **EX_Mailflow** Job – **03. SET HISTORY RETENTION** Analysis
  Task
- **Mailflow** > **EX_Mailflow_Domain** Job – **Mailflow Domain** Analysis Task
- **Mailflow** > **EX_Mailflow_Mailbox** Job – **User Mailboxes By Message Count** Analysis Task
- **Mailflow** > **EX_Mailflow_Mailbox** Job – **User Mailboxes by Message Size** Analysis Task
- **Mailflow** > **EX_Mailflow_OrgOverview** Job – **Organization Overview** Analysis Task

**Workflow**

**Step 1 –** Set the host on the EX_Mailflow job.

- The **Mailflow** > **0. Collection** > **EX_Mailflow** job needs to be set to run against one of
  the following:

    - Local Host
    - Custom Host List

**Step 2 –** Set a Connection Profile on the jobs which run data collection.

**Step 3 –** Schedule the 8. Exchange Online job group to run as desired.
