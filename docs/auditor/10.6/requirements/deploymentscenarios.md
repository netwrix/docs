---
title: "Sample Deployment Scenarios"
description: "Sample Deployment Scenarios"
sidebar_position: 110
---

# Sample Deployment Scenarios

Recommendations in the sections below refer to deploying the product in the environments of
different size:

- [Small Environment](#small-environment)
- [Regular Environment](#regular-environment)
- [Large Environment](#large-environment)
- [Extra-Large Environment](#extra-large-environment)

If you are going to set up integration with Netwrix Data Classification, consider planning for 3
dedicated servers:

- Netwrix Auditor server
- Netwrix Data Classification server
- SQL server with 2 instances: for Netwrix Auditor databases and for NDC SQL Database

Also, ensure these servers have enough RAM to prevent from performance loss - minimum 12 GB
required, 16+ GB recommended.

To learn more, see the How It Works and Deployment Planning topics in the Netwrix Data
Classification Knowlege center:
[Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)..

When planning for hardware resources, consider that insufficient CPU and RAM may lead to performance
bottlenecks. Thus, try to provide not minimal but recommended configuration. Same recommendations
refer to planning for storage capacity, especially if you plan to keep historical data for longer
periods (e.g., to provide for investigations, compliance audit, etc.) - SSD

## Small Environment

Recommendations below refer to deployment in the evaluation lab or small infrastructure (up to 500
users):

1. Prepare a virtual machine meeting the following requirements: | Hardware component | Requirement
   | | --- | --- | | Processor | 2 cores | | RAM | 4 GB minimum, 8 GB recommended | | Disk space |
   100 GB on system drive 100 GB on data drive (capacity required for SQL Server and Long-Term
   Archive) | | Screen resolution | Minimum 1280x1024 Recommended 1920x1080 or higher |
2. Download and install Netwrix Auditor on that VM, selecting Full installation to deploy both
   server and client components.
3. When prompted to configure the Audit database settings, proceed with installing SQL Server
   Express Edition with Advanced Services on the same VM. See the
   [SQL Server Reporting Services](/docs/auditor/10.6/requirements/sqlserverreportingservice.md)
   topic for additional information.

Alternatively, you can install Netwrix Auditor as a virtual appliance on your VMware vSphere or
Hyper-V virtualization server. For more information on this deployment option, refer to the
[Virtual Appliance page](https://www.netwrix.com/virtual_appliances.html).

### PoC and Production Infrastructure

- If you are implementing a PoC project, it is strongly recommended that after its completion you
  create a new Netwrix Auditor server VM dedicated for use in production. Migrating the VM that
  hosted Netwrix Auditor server during the PoC into production environment is not recommended, as it
  may lead to performance problems.
- Consider using a dedicated SQL Server for the PoC project. Production database servers are often
  configured with the features that are not necessary for Netwrix Auditor (like cluster support,
  frequent backup, and so on). If you have no opportunity to use a dedicated SQL Server, then create
  an dedicated instance for Netwrix Auditor databases on your existing server.

## Regular Environment

Recommendations below refer to the product deployment in a in a regular environment (500 — 1000
users, approximately up to 1 million of activity records generated per day):

1. Prepare a physical or a virtual machine meeting the following requirements: | Hardware component
   | Requirement | | --- | --- | | Processor | 4 cores | | RAM | 16 - 32 GB | | Disk space | 200 GB
   on system drive 0.5 - 1 TB or more on data drive (capacity required for SQL Server and Long-Term
   Archive) | | Screen resolution | Minimum 1280x1024 Recommended 1920x1080 or higher |
2. Download and install Netwrix Auditor on that machine. Deploy the required number of Netwrix
   Auditor clients on the remote Windows machines.

    Client-server connection requires user sign-in. You can automate this process, as described in
    [Automate Sign-in to the Client](/docs/auditor/10.6/install/automatelogin.md)
    of Online Help.

3. When prompted to configure the Audit database settings, proceed with installing SQL Server
   Express Edition with Advanced Services. See the
   [SQL Server Reporting Services](/docs/auditor/10.6/requirements/sqlserverreportingservice.md)
   topic for additional information.

Alternatively, you can install Netwrix Auditor as a virtual appliance on your VMware vSphere or
Hyper-V virtualization server. For more information on this deployment option, refer to the
[Virtual Appliance page](https://www.netwrix.com/virtual_appliances.html).

## Large Environment

Recommendations below refer to the product deployment in a large environment (up to 20 000 users,
approximately 1+ million of activity records generated per day):

1. Prepare a physical or a virtual machine for Netwrix Auditor server, meeting the following
   requirements: | Hardware component | Requirement | | --- | --- | | Processor | 8 cores | | RAM |
   16 - 32 GB | | Disk space | - 200-500 GB on system drive - 0.5 - 1 TB on data drive | | Screen
   resolution | Minimum 1280 x 1024 Recommended 1920 x 1080 or higher |
2. Download and install Netwrix Auditor on that machine. Deploy the required number of Netwrix
   Auditor clients on the remote Windows machines.

    Client-server connection requires user sign-in. You can automate this process, as described in
    the
    [Automate Sign-in to the Client](/docs/auditor/10.6/install/automatelogin.md)
    section of Online Help.

3. Prepare Microsoft SQL Server meeting the following requirements: | Hardware component |
   Requirement | | --- | --- | | Processor | 2-4 cores | | RAM | 16-32 GB | | Disk space | - 100 GB
   on system drive - 200-400 GB on data drive | | Software component | Requirement | | --- | --- | |
   Microsoft SQL Server 2008 or later | Standard or Enterprise edition (Express cannot be used due
   to its database size limitation) | | Dedicated SQL Server instance or cluster is recommended | |
   | SQL Server Reporting Services for reporting | |
4. When prompted to configure the Audit database settings, proceed using the dedicated SQL Server
   with Reporting Services.

## Extra-Large Environment

Recommendations below refer to the product deployment in an extra-large environment, that is, with
more than 20 000 users (10+ million of activity records generated per day):

1. Prepare a physical or a virtual machine for Auditor Server, meeting the following requirements: |
   Hardware component | Requirement | | --- | --- | | Processor | 16 cores (recommended) | | RAM |
   32 - 64 GB | | Disk space | - 300-500 GB on system drive - 1+ TB on data drive | | Screen
   resolution | Minimum 1280 x 1024 Recommended 1920 x 1080 or higher |
2. Download and install Netwrix Auditor on that machine. Deploy the required number of Netwrix
   Auditor clients on the remote Windows machines.

    Client-server connection requires user sign-in. You can automate this process, as described in
    the
    [Automate Sign-in to the Client](/docs/auditor/10.6/install/automatelogin.md)
    section.

3. Prepare a machine for Microsoft SQL Server meeting the following requirements: | Hardware
   component | Requirement | | --- | --- | | Processor | 4 cores | | RAM | 32 - 64 GB | | Disk space
   | - 100 GB on system drive - 1 TB on data drive | | Software component | Requirement | | --- |
   --- | | Microsoft SQL Server 2008 or later | Standard or Enterprise edition (Express cannot be
   used due to its database size limitation) | | Dedicated SQL Server instance or cluster is
   recommended | | | SQL Server Reporting Services for reporting | |
4. As an option, you can install Reporting Services on a dedicated machine. The following hardware
   configuration is recommended: | Hardware component | Requirement | | --- | --- | | Processor | 4
   cores | | RAM | 32 GB | | Disk space | - 100 GB on system drive |
5. When prompted to configure the Audit database settings, proceed using the dedicated SQL Server
   and Reporting Services.
