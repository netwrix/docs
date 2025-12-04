---
description: >-
  Learn the layout and common configuration options of a Netwrix Auditor
  Monitoring Plan, including global settings, data source and item options, and
  best practices for optimal monitoring.
keywords:
  - monitoring plan
  - Netwrix Auditor
  - State in Time
  - audit database
  - data source
  - delegation
  - notifications
  - data collection
  - monitoring plan configuration
products:
  - auditor
sidebar_label: Navigating and Understanding a Netwrix Auditor Mon
tags: []
title: "Navigating and Understanding a Netwrix Auditor Monitoring Plan"
knowledge_article_id: kA00g000000PbcoCAC
---

# Navigating and Understanding a Netwrix Auditor Monitoring Plan

While each data source has different monitoring plan configuration options, there are some commonalities across them all. This article will assist you in learning the fundamental layouts of a Monitoring Plan and details on specific configurations.

## Monitoring Plan Layout

Navigate to any of your configured monitoring plans. In the upper-right pane of the Monitoring Plan, you will find the **Monitoring Plan** configuration options. The options available here apply globally to any data source and item listed under the monitoring plan. **Edit Settings** provides you with the following menu options.

### Monitoring Plan Options

![Monitoring Plan Settings](https://kb.netwrix.com/wp-content/uploads/2020/04/MP-Settings-1024x323.png)

#### Edit Settings

- **General –** Here you can rename and provide descriptions for your Monitoring Plan.
- **Data Collection –** Here you can change or modify the account used to collect data from audited data sources under this Monitoring Plan.
- **Audit Database –** Here you are given the option to disable search functionality if you only wish to receive activity summaries (you should not enable this option unless you have a specific reason). You may also choose to rename the database in which all audit data for data sources and items under this monitoring plan is written.
  - **Note:** If you change the name in this text field, it deploys a new database. The previous database will remain in SQL but the content within it is no longer available for searching in reporting. Only databases specified in the Audit Database tab of monitoring plans can be searched and reported on. Lastly, you may choose to specify a custom account to write this audit data to the audit database in your SQL Server.
- **Notifications –** This menu provides the options to modify the notification schedule. By default, the activity summary will be sent daily at 3:00 AM. What is less obvious about this function is that it is tied to the State in Time collection schedule for your data sources. With the default configuration, as listed above, a State in Time collection runs at 3:00 AM. You should leave the schedule at its default. Increasing frequency results in more State in Time snapshots, which can lead to increased storage consumption and resource performance issues. Changing the time, however, can be useful in situations where many processes occur at the same time. Changing the time from 3:00 AM to 4:00 AM should not have a negative impact as long as you leave the frequency at 24 hours.

#### Delegation

**Delegation** allows administrators to provide Role-Based Access to Monitoring Plans and specific data. If you would like to learn more about Delegation, visit our [Help Center](https://docs.netwrix.com/docs/auditor/10_8).

#### Update

Following the **Delegation** option, you will see the **Update** button. This button allows you to force a collection for every data source and item under the Monitoring Plan. There are some data sources that behave differently with this button. For example, User Activity cannot perform a forced collection. There is another exception for the **Update** button.

You should not perform an update on an Active Directory Data Source. Due to its design, clicking update may prevent the collector from finishing the combination of event data with State in Time data. This often results in Activity Records with incomplete timestamps and Who as *System*. In this case, it is better to wait for the Active Directory collector to finish, which occurs roughly every 10 minutes.

### Data Source Options

![Data Source Settings](https://kb.netwrix.com/wp-content/uploads/2020/04/Data-Source-settings-1024x323.png)

- **Add Data Source –** Under the Data Source options, you can add a new data source. While this option is available, you should combine only compatible data sources such as Active Directory, Exchange, and Group Policy. Due to the current configuration of globally locked settings, combining Active Directory with something like File Server auditing can often lead to issues. Keeping data sources separated also makes troubleshooting more efficient.
- **Edit Data Source**

  This menu will differ greatly from one data source to another. The only constants you may find here are:

  - Enabling/Disabling State in Time – Recommended to be enabled.
  - Enabling/Disabling Network Traffic Compression – Recommended to be enabled.
    - When enabled, more processing is done at the target server. When disabled, more data is sent over the network and processed locally on the Netwrix Auditor host.
    - If you notice performance issues, you can toggle this option on or off to trial performance.

  All other configurations for a data source will heavily depend on the data source. You should visit our [configuration guides](https://docs.netwrix.com/docs/auditor/10_8) on the Help Center for more specific information.

- **Remove Data Source –** Highlight a data source and select this option to remove it from the Monitoring Plan. The audit database for this monitoring plan will still contain audit data for this data source but will no longer collect and store further information after the data source is removed.

### Item Options

![Item Settings](https://kb.netwrix.com/wp-content/uploads/2020/04/Item-Settings-1024x323.png)

- **Add Item –** Highlight a data source and select **Add Item** to add another supported item for that data source. For Active Directory, you could add another Domain. For User Activity, you could add another workstation or server. When it comes to the number of items you should audit under one Monitoring Plan, it depends on available resources. You should start small and scale up. For example, through trial and error, an administrator finds that their Netwrix Auditor host can handle 5 Windows Servers per Windows Server Monitoring Plan. They have 30 servers that need to be audited, so they deploy 6 Windows Server Monitoring Plans to accommodate this.
- **Edit Item –** This allows you to modify or change the audited item. For more granularity, you can also use **Edit Item** to provide custom credentials. This is useful for audited DMZs or secured file systems for which you wish to use a more locked-down account. Custom credentials will override the credentials provided under **Edit Settings > Data Collection**.
- **Remove Item –** This will remove the item from the data source and monitoring plan. If the target server has an agent, Netwrix Auditor will attempt to remove it. If it fails, you may need to remove it manually through **Programs and Features**.

### The Perfect Monitoring Plan

Ideally, a monitoring plan should exhibit these elements:

- Segregated Data Sources
- State in Time Enabled
- Load Balanced Scope (Number of Items)
- Careful consideration of data source–specific configurations
