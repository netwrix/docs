---
title: "Recommended Configurations for the 7. Sensitive Data Job Group"
description: "Recommended Configurations for the 7. Sensitive Data Job Group"
sidebar_position: 10
---

# Recommended Configurations for the 7. Sensitive Data Job Group

**Dependencies**

This job group requires the following item to be installed and configured on the Enterprise Auditor
Console:

- Enterprise Auditor Sensitive Data Add-On installed

The following job groups need to be successfully run:

- .Active Directory Inventory Job Group

**Targeted Hosts**

The 0.Collection Job Group needs to be set to run against:

- Local host

The **0.Collection** > **EX_Mailbox_SDD** and **0.Collection** > **EX_PublicFolder_SDD** jobs need
to be set to run against the version-appropriate default dynamic host list:

- Exchange 2010 MB Servers
- Exchange 2013 MB Servers
- Exchange 2016 MB Servers
- Exchange 2019 MB Servers

:::note
Default dynamic host lists are populated from hosts in the Host Master Table which meet
the host inventory criteria for the list. Ensure the appropriate host lists have been populated
through host inventory results.
:::


**Connection Profile**

A Connection Profile must be set directly on jobs within the 0.Collection job group. See the
[Exchange Web Services API Permissions](/docs/accessanalyzer/11.6/requirements/exchange/support/webservicesapi.md)
topic for the EX_PFInfo job requirements.

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

**Schedule Frequency**

This job group has been designed to run as desired.

**Query Configuration**

The 7. Sensitive Data Job Group is designed to be run with the default query configurations.
However, the following queries can be modified:

- **0.Collection** > **EX_Mailbox_SDD** Job – **Exchange Sensitive Data Discovery** Query
- **0.Collection** > **EX_PublicFolder_SDD** Job – **Exchange Sensitive Data Discovery** Query

No other queries should be modified.

**Workflow**

**Step 1 –** Set the host on the EX_Mailbox_SDD or EX_PublicFolder_SDD job.

**Step 2 –** Set a Connection Profile on the jobs which run data collection.

**Step 3 –** Schedule the 7. Sensitive Data job group to run as desired.
