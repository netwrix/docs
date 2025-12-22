---
title: "Hardware Requirements"
description: "Hardware Requirements"
sidebar_position: 10
---

# Hardware Requirements

Review the hardware requirements for the computer where Netwrix Data Classification will be
installed.

You can deploy Netwrix Data Classification on a virtual machine running Microsoft Windows guest OS
on the corresponding virtualization platform, in particular:

- VMware vSphere
- Microsoft Hyper-V
- Nutanix AHV

Note that Netwrix Data Classification supports only Windows OS versions listed in the
[Software Requirements](/docs/dataclassification/5.7/introduction/requirements/softwarerequirements.md) section.

## Netwrix Data Classification Server

The requirements in this section apply to a single Netwrix Data Classification server.

To deploy a server cluster, make sure all planned cluster nodes meet the requirements listed below.
Consider deploying 1 Netwrix Data Classification Server per approx. 16, 000, 000 objects to process.

See [Deployment Planning](/docs/dataclassification/5.7/introduction/deployment/overview.md) and
[Configuring NDC Servers Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md) for more information.

| Hardware Component | 1 Server per 16 M objects      |
| ------------------ | ------------------------------ |
| Cores              | 8 Cores                        |
| RAM                | 32 GB                          |
| Hard disk          | UP TO 35% of all data in scope |
| Hard drive type    | SSD storage (recommended)      |

## SQL Server

Review the hardware requirements for the computer where Netwrix Data Classification SQL Database
will be deployed.

| Hardware Component | Up to 16 M objects                                                                                                                                                                                                                                                                | Up to 32 M objects and up to 8 M objects for SharePoint | Up to 64 M objects and up to 16 M objects for SharePoint |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Processor          | 8 cores                                                                                                                                                                                                                                                                           | 8 cores                                                 | 8 cores                                                  |
| RAM                | 32 GB                                                                                                                                                                                                                                                                             | 64 GB                                                   | 128 GB                                                   |
| Hard disk          | Estimate required disk space assuming _1012 KB_ per indexed object. For example, for _5, 000, 000_ objects, the database size will be approximately _50 GB_. See also [Deployment Planning](/docs/dataclassification/5.7/introduction/deployment/overview.md). |                                                         |                                                          |
| Hard disk type     | SSD storage (recommended)                                                                                                                                                                                                                                                         |                                                         |                                                          |


## Network Access

| Specification  | Requirement                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Network access | Ensure that your Netwrix Data Classification servers are available over the network on a HTTP compliant port from all machines where the client interface (management console) will run. |

## Object and Scope Estimations

Provide the total amount of data and total file count from all file shares that will be in the
scope. Supported file shares types:

- CIFS\SMB (a normal Windows-like share)
- NFS

Administration Dashboards for most Network Attached Storages include storage usage such as the
amount of data and files count. In case you need a tool to calculate file count and size, you can
use NDC script-based
[file scanning tool](https://www.netwrix.com/download/products/DDC/ScanDirs.zip).

**Exchange Mailboxes**

In case you have Exchange on-prem you would need to know the additional information:

- Number of Mailboxes
- Mailbox retention policy (for how long users keep their emails before they are archived)
- The average number of emails per Mailbox or total number in all mailboxes.

The number of emails in all mailboxes can be obtained with the PowerShell script for the Exchange
Management Shell bellow. The script will return email stats for every mailbox. Use the script
results calculate the average number of emails per mailbox or provide the total number.

```
Get-Mailbox -ResultSize Unlimited | Get-MailboxStatistics SelectItemCount | ForEach {$totalItems+=$_.ItemCount}
```

Office 365: Exchange Online, SharePoint Online and One Drive

Provide the total amount of data and total file stored on Office 365. You can use the usage
statistics numbers for 180 days period from the O365 Admin Center dashboard. Refer to the following
Microsoft article for additional information:
[Microsoft 365 Reports in the admin center](https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide)

**Databases**

In case your scope includes databases, the following details are required:

- Database type (MS SQL, Oracle, MySQL)
- What applications and systems those databases support
- How many databases the data need to be classified in

Netwrix Data Classification will need to be pointed at certain tables in the specified databases,
the customer is expected to know which tables within a database may potentially contain sensitive
data.

**Box**

Provide the total file count and storage usage from the BOX Admin Dashboard

**Plan the Production Deployment**

To size servers for your Netwrix Data Classification setup, use the metrics produced during the
scoping stage. Apply the total number of files, documents, emails from all data sources to the table
below to obtain corresponding hardware requirements.

:::warning
Netwrix Data Classification servers and SQL servers require high-performance SSD drives
for optimal performance.
:::


Due to the performance limitations of the SQL database back end, the maximum capacity of clustered
setup with 4 Data Classification servers is limited to 64 million files with supported content
types. Environments that exceeds this number can be supported with implementing the followings:

- Multiply separate installations of clustered setup with 4 Data Classification servers. Where each
  installation is pointed at its own subset of data. Each installation requires its own SQL Server
  instance.
- Phased data processing with one installation of clustered setup with 4 Data Classification
  servers. With phased data processing, the dataset is divided into subsets and processed by chunks.

See the hardware sizing for Netwrix Data Classification setup in the following table:

| Sizing | Small Environment | Medium Environment | Large Environment |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope                   | Up to 10 TB of data or 1,000,000 <ul><li>16,000,000 files</li></ul>                                                                               | Up to 25 TB of data or 16,000,000 <ul><li>32,000,000 files</li></ul>                                                                                                                                                                                                         | Up to 45 TB of data or 32,000,000 <ul><li>64,000,000 files</li></ul>                                                                                                                                                                                                                                                                                                                     |
| Setup                   | 2 Servers total: SQL Server Instance + NDC Server                                                                                                 | 3 servers total: SQL Server Instances + 2 Clustered NDC Servers                                                                                                                                                                                                              | 5 servers total: SQL Server Instances + 4 Clustered NDC Servers                                                                                                                                                                                                                                                                                                                          |
| SQL Server Requirements | Standard or Enterprise SQL Server 8 cores CPU, 32 GB RAM Disk Space Consumption: 10 <ul><li>12 KB per indexed object SSD storage</li></ul>        | Standard or Enterprise SQL Server 8 cores CPU, 64 GB RAM Disk Space Consumption: 10 <ul><li>12 KB per indexed object SSD storage</li></ul>                                                                                                                                   | Standard or Enterprise SQL Server 8 cores CPU, 128 GB RAM Disk Space Consumption: 10 <ul><li>12 KB per indexed object SSD storage</li></ul>                                                                                                                                                                                                                                              |
| NDC Server Requirements | Single Server Setup Netwrix Data Classification 8 cores CPU, 32 GB RAM **Disk Space Consumption:** up to 35% of all data in the scope SSD storage | Clustered Setup: 2 Servers Netwrix Data Classification #1 8 cores CPU, 32 GB RAM Netwrix Data Classification #2 8 cores CPU, 32 GB RAM **Disk Space Consumption:** up to 35% of all data in the scope distributed across 2 clustered Data Classification servers SSD storage | Clustered Setup: 4 Servers Netwrix Data Classification #1 8 cores CPU, 32 GB RAM Netwrix Data Classification #2 8 cores CPU, 32 GB RAM Netwrix Data Classification #3 8 cores CPU, 32 GB RAM Netwrix Data Classification #4 8 cores CPU, 32 GB RAM **Disk Space Consumption:** up to 35% of all data in the scope distributed across 4 clustered Data Classification servers SSD storage |

