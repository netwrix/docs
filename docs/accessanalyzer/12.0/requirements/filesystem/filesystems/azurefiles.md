---
title: "Azure Files Target Requirements"
description: "Azure Files Target Requirements"
sidebar_position: 10
---

# Azure Files Target Requirements

Azure Files is a fully managed, cloud-based file sharing service from Microsoft that allows users to
access file shares from anywhere as a virtual network drive. Access Analyzer uses the File System
solution to execute Access Auditing (FSAA) and Sensitive Data Discovery Auditing scans on Azure
Files.

Before the File System solution can perform scans for Azure Files, the following prerequisites are
required both in Access Analyzer and the Azure environments:

- [Create Host List](#create-host-list)
- [Configure Connection Profile](#configure-connection-profile)
- [Job and Query Configuration](#job-and-query-configuration)

## Create Host List

A host list containing the desired target Azure hosts must be created and assigned to the collection
jobs. You can create the host list with either of the following two methods:

- Use the FS_AzureTenantScan instant job to create the host list automatically. See the
  [FS_AzureTenantScan Job](/docs/accessanalyzer/12.0/solutions/filesystem/collection/fs_azuretenantscan.md) topic for
  additional information.
- Manually add hosts to a host list in the following format:

    `<storageaccountname>.file.core.windows.net`

    See the [Add Hosts](/docs/accessanalyzer/12.0/admin/hostmanagement/actions/add.md) topic for additional
    information.

## Configure Connection Profile

The Access Analyzer connection profile requires two or more credentials depending on the amount of
storage accounts being targeted. It requires an active directory account with rights to run the
applet, and credentials for each storage account. These should be configured as follows:

- Account for running applet

    - Select Account type – Active Directory
    - Provide the credentials for an account with the privileges to run the FSAA applet. See the
      [File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic for additional
      information on the required permissions.

- Accounts for storage accounts

    - Select Account Type – Azure Active Directory

        ![Storage account name and Connection string in Azure](/images/accessanalyzer/12.0/requirements/target/config/accesskeys.webp)

    - Client ID – The name of the storage account

        - For example, if the target is `files.file.core.windows.net` then the Client ID should be
          `files`. It is not case sensitive.

    - Key – Connection string value for access keys on the storage account

    If you are targeting multiple storage accounts, a user credential of this type is required for
    each storage account.

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional
information.

## Job and Query Configuration

Azure Files scans require the following configuration of the job and query performing the scan.

### Jobs Targeting Azure Files

For FSAA and SEEK scans targeting Azure Files storage accounts, you must clear the **Skip Hosts that
do not respond to PING** option in the job properties.

![Skip Hosts option on Performance tab of the Job Properties window](/images/accessanalyzer/12.0/requirements/target/config/skiphostsoption.webp)

Right-click on the required scan job in the Jobs tree, and select **Properties** to open the Job
Properties window. Navigate to the Performance tab, and ensure the **Skip Hosts that do not respond
to PING** option is not selected. See the
[Job Properties](/docs/accessanalyzer/12.0/admin/jobs/job/properties/overview.md) and
[Performance Tab](/docs/accessanalyzer/12.0/admin/jobs/job/properties/performance.md) topics for additional
information.

### Query Configuration Considerations

Last Access Time (LAT) preservation is not supported for Azure Files scans. This option must not be
selected in the query for the FSAA or SEEK scan job.

![Last Access Time (LAT) preservation option in FSAA DC wizard](/images/accessanalyzer/12.0/requirements/target/config/latpreservationoption.webp)

The **Last Access Time (LAT) preservation** option is located on the Default Scoping Options page of
the File System Access Auditor Data Collector Wizard. See the
[Configure the (FSAA) File System Scan Query](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-fsaa_system_scans.md#configure-the-fsaa-file-system-scan-query)
or
[Configure the (SEEK) File System Scan Query](/docs/accessanalyzer/12.0/solutions/filesystem/collection/1-seek_system_scans.md#configure-the-seek-file-system-scan-query)
topic for additional information.
