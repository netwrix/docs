---
title: "VMware"
description: "VMware"
sidebar_position: 190
---

# VMware

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.8/requirements/ports.md) – To ensure successful data
  collection and activity monitoring configure necessary protocols and ports for inbound and
  outbound connections
- [Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to
  audit your IT systems

- [VMware](/docs/auditor/10.8/configuration/vmware/overview.md) – Configure data source as required to be
  monitored

For this data source, specify the options you need:

| Option                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monitor this data source and collect activity data                | Enable monitoring of the selected data source and configure Auditor to collect and store audit data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Monitor VMware configuration changes                              | Configuration changes are always monitored for VMware data source. See the Data Collection from VMware Servers topic  for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Monitor VMware logon activity                                     | Specify what types of logon events you want to monitor for VMware infrastructure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Monitor SSO users/groups on vCenter and Local users on ESXi sever | Select Enable monitoring if you want to audit the following users and groups: - vCenter Single Sign-On (SSO) Users. The product collects data from vCenter. - Localos users. For these users, the product collects data from ESXi and vCenter. - VMware groups. The product collects data from vCenter. To audit users and groups, vCenter 6.5 and above required. Check that your data collecting account has all required rights and permissions. See the [Permissions for VMware Server Auditing ](/docs/auditor/10.8/configuration/vmware/permissions.md) topic for additional information.                                                                                                                                                                                                                                                                            |
| Collect data for state-in-time reports                            | Configure Auditor to store daily snapshots of your VMware system configuration required for further state-in-time reports generation. The product updates the latest snapshot on the regular basis to keep users up-to-date on actual system state. Only the latest snapshot is available for reporting in Auditor. If you want to generate reports based on different snapshots, you must import snapshots to the Audit Database. To import snapshots, you must be assigned the Global administrator or the Global reviewer role . Follow the steps to import snapshots. **Step 1 –** In the Manage historical snapshots section, click Manage. **Step 2 –** Select the snapshots that you want to import. **Step 3 –** Move the selected snapshots to the Snapshots available for reporting list using the arrow button. **Step 4 –** When finished, click OK. |

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the
[Add Items for Monitoring](/docs/auditor/10.8/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional
information.

## Data Collection from VMware Servers

On a high level, data collection process for VMware servers works as follows:

![hiw_diagram_vma_thumb_0_0](/images/auditor/10.8/admin/monitoringplans/vmware/hiw_diagram_vma_thumb_0_0.webp)

VMware administrator prepares a dedicated service account with sufficient permissions to collect
data from VMware servers. This account must have at least **Read Only role** on those servers. For
more information on VMware vSphere roles and permissions assignment, refer to
[this VMware article](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.security.doc/GUID-18071E9A-EED1-4968-8D51-E0B4F526FDA3.html).

Netwrix administrator does the following:

- Creates a monitoring plan in Netwrix Auditor, specifying the service account (prepared at step 1)
  as a data collecting account in the **Monitoring Plan wizard**. Then s/he adds items to the
  monitoring plan – these are VMware servers to collect data from.
- Configures alerts related to VMware data source. Current version does not include predefined
  alerts for that data source, so follow the [Create Alerts](/docs/auditor/10.8/admin/alertsettings/create/create.md) to
  create and configure the necessary alerts.

    - Remember to set the filter to “**Data Source\_**equals**\_VMware**”.

- **Netwrix Auditor Data Collection Service**starts periodic (every 15 min) data collection
  sessions. The results of each session include:

    - VMware infrastructure snapshot collected from the monitored items, i.e. VMware vCenter or
      ESX(i) host
    - VMware events that occurred since the previous data collection. Data is retrieved via **VMware
      web services API** using HTTPS protocol.

- **Netwrix Auditor Data Collection Service** processes collected data into the proprietary format
  (Activity Records). Each Activity Record contains initiator’s account, time, action, and other
  details.

    - To determine what has changed in the configuration, it compares a state snapshot from VMware
      server with the previously taken.
    - To get ‘_Who_’ (initiator) and ‘_When_’ (date and time) information for the detected changes,
      the product uses VMware events data.

- Netwrix Auditor Server then writes the Activity Records to the audit database (default retention –
  180 days) and long-term archive (default retention – 120 months).
- Users can work with collected data in Netwrix Auditor client UI: run search, view reports, and so
  on. If you have configured alerting in Netwrix Auditor, then the activities that match the certain
  criteria will trigger the alerts. Recipients will be notified by email, and response actions will
  be taken, if configured.

Netwrix Auditor also generates an Activity Summary once a day (by default, at 3 AM) and sends it to
the specified recipients. This email lists VMware infrastructure changes and activities collected by
Netwrix Auditor during the last 24 hours.

## VMware ESX/ESXi/vCenter

Complete the following fields:

| Option                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **General**                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Specify VMware ESX, ESXi, or vCenter for monitoring | Specify the ESX or ESXi host URL, or vCenter Server URL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Specify the account for collecting data             | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select **Custom account** and enter credentials. The credentials are case sensitive. A custom account must be granted the same permissions and access rights as the default account used for data collection. See [Permissions for VMware Server Auditing ](/docs/auditor/10.8/configuration/vmware/permissions.md)topic for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Virtual Machines**                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Specify monitoring restrictions                     | Select the virtual machines to be excluded from search results, reports and Activity Summaries. To add VMs to the list, click Add. Then provide the full path of the machine to exclude. Consider the following: - To exclude a single VM, provide its full path as shown in the "_What_" column of reports and Activity Summary, for example: _Vcenters\VCenterServer021\VMs\vm01_. - To exclude several VMs, you can define a mask using a wildcard, for example: - _\*\TestVM\*_ — exclude VMs with names starting with _TestVM_ (e.g., _TestVM01, TestVM_new_), located anywhere. - _\*TestVM\*_ — exclude VMs with names containing _TestVM_ (e.g., _MyTestVM02_). In addition to the restrictions for a monitoring plan, you can use the \*.txt files to collect more granular audit data. Note that the new monitoring scope restrictions apply together with previous exclusion settings configured in the \*.txt files. See the [Monitoring Plans](/docs/auditor/10.8/admin/monitoringplans/overview.md)topic for additional information. |
