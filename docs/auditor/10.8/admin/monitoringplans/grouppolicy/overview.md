---
title: "Group Policy"
description: "Group Policy"
sidebar_position: 100
---

# Group Policy

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.8/requirements/ports.md) – To ensure successful data
  collection and activity monitoring configure necessary protocols and ports for inbound and
  outbound connections
- [Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to
  audit your IT systems

- [Group Policy](/docs/auditor/10.8/configuration/grouppolicy/overview.md) – Configure data source as required
  to be monitored

Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Prerequisites                                      | Netwrix Auditor will automatically look up additional system components and prompt you to install those that are missing. In case all required components have been already installed, this section will be omitted. See the [Other Components](/docs/auditor/10.8/requirements/software.md#other-components) topic for additional information.                                                                                                                                                                                                                                                                                                                         |
| Detect additional details                          | Specify additional information to include in reports and activity summaries. Select Group membershipif you want to include Group membership of the account under which the change was made.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Specify data collection method                     | You can enable **network traffic compression.** If enabled, a Compression Service will be automatically launched on the audited computer, collecting and prefiltering data. This significantly improves data transfer and minimizes the impact on the target computer performance.                                                                                                                                                                                                                                                                                                                                                                            |
| Configure audit settings                           | You can adjust audit settings automatically. Your current audit settings will be checked on each data collection and adjusted if necessary. This method is recommended for evaluation purposes in test environments. If any conflicts are detected with your current audit settings, automatic audit configuration will not be performed. Do not select the checkbox if you want to configure audit settings manually. See the [Group Policy](/docs/auditor/10.8/configuration/grouppolicy/overview.md) configuration topic for additional information about audit settings required to collect comprehensive audit data and the instructions on how to configure them. |

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the
[Add Items for Monitoring](/docs/auditor/10.8/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional
information.

## Domain

Complete the following fields:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specify Active Directory domain         | Specify the audited domain name in the FQDN format. For example, "_company.local_".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Specify the account for collecting data | Select the account that will be used to collect data for this item. If you want to use a specific account (other than the one you specified during monitoring plan creation), select account type you want to use and enter credentials. The following choices are available: - User/password. The account must be granted the same permissions and access rights as the default account used for data collection. See the [Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/dataaccounts.md) topic for additional information. - Group Managed Service Account (gMSA). You should specify only the account name in the domain\account$ format. See the [Use Group Managed Service Account (gMSA)](/docs/auditor/10.8/requirements/gmsa.md) topic for additional information. - Netwrix Privilege Secure. Starting with version 10.7, you can implement the integration between Netwrix Auditor and Netwrix Privilege Secure. See the [Netwrix Privilege Secure](/docs/auditor/10.8/admin/settings/privilegesecure.md) topic for additional information. |

## Use Netwrix Privilege Secure as a Data Collecting Account

Starting with version 10.7, you can use Netwrix Privilege Secure to manage the account for
collecting data, after configuring the integration. See the
[Netwrix Privilege Secure](/docs/auditor/10.8/admin/settings/privilegesecure.md) topic for additional information about
integration and supported data sources. In this case, the credentials will not be stored by Netwrix
Auditor. Instead, they will be managed by Netwrix Privilege Secure and provided on demand, ensuring
password rotation or using temporary accounts for data collection.

Follow the steps to use Netwrix Privilege Secure as an account for data collection.

**Step 1 –** Select the desired item.

**Step 2 –** In the item configuration menu, select Netwrix Privilege Secure as an option for data
collection.

![npsdatacollectingaccount](/images/auditor/10.7/configuration/grouppolicy/npsdatacollectingaccount.webp)

**Step 3 –** Select the type of the Access Policy you want to use in Netwrix Privilege Secure.
Credential-based is the default option. Refer to the
[Netwrix Privilege Secure](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement)
documentation to learn more about Access Policies.

In this case, you need to provide the username of the account managed by Netwrix Privilege Secure,
and to which Netwrix Auditor has the access through a Credential-based access policy.

**NOTE:** Netwrix recommends using different credentials for different monitoring plans and data
sources.

![npsdatacollectingaccountresourced](/images/auditor/10.7/configuration/grouppolicy/npsdatacollectingaccountresourced.webp)

The second option is Resource-based. To use this option, you need to provide the Activity and
Resource names, assigned to Netwrix Auditor in the corresponding Resource-based policy. Make sure
that you specified the same names as in Netwrix Privilege Secure.

The Resource name in this case is where the activity will be performed. For example, if you grant
the data collecting account the access to a local Administrators group - the resource is the server
where the permission will be granted.

Netwrix Privilege Secure is ready to use as an account for data collection.
