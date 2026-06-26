---
title: "Deployment Procedure"
description: "Deployment Procedure"
sidebar_position: 10
---

# Deployment Procedure

## Download and install the add-on

Follow the steps below.

**Step 1 –** Download the distribution package.

**Step 2 –** Unpack it to a folder on the computer from which you can access Splunk Web.

**Step 3 –** Login to Splunk Web using Splunk Administrator account.

**Step 4 –** Expand the drop-down list at the top panel and choose **Manage Apps**.

**Step 5 –** On the **Apps** screen, click **Install app from file**.

**Step 6 –** Click **Browse**, navigate to the folder where you unpacked the add-on package, select
the `.spl` file and click Open.

**Step 7 –** Click **Upload**.

The installed add-on should appear in the Apps list. Splunk might not display add-on icon until restart.

## Configure the add-on

Follow the steps to configure the add-on.

**Step 1 –** Open **Netwrix Auditor Add-on for Splunk** from the drop-down list at the top panel and navigate to the **Configuration** page.

**Step 2 –** Configure the account:

1. On the **Configuration** page, open the **Account** section.

2. Click **Add** and populate the fields:

    - For the Account name provide a unique name for the account that will be visible to the add-on
      users
    - In the Username field insert the user name of the account that will be used to access Netwrix
      Auditor Integration API. If a domain account is used, make sure to use the _DOMAIN\User_
      format.
    - In the Password field insert the account password

3. Click the **Add** button. The added account should appear in the list.

> When upgrading the add-on from version 1.5 or later, previously configured credentials may be removed during the upgrade. After the upgrade, verify the account configuration used to access the Netwrix Auditor Integration API and re-enter the credentials if required.

**Step 3 –** Configure the Netwrix Auditor Integration API location:

1. On the **Configuration** page open the **Add-on Settings** section.

2. In the Netwrix Auditor API location field provide the host name or IP address of your Netwrix
   Auditor Integration API host (Netwrix Auditor server).
3. In the Netwrix Auditor API port field provide the TCP port used by Netwrix Auditor Integration
   API; by default it is 9699.
4. Press the **Save** button.

## Configure Data Input

Splunk uses indexes to store data and manage access to it. While you can send Netwrix Auditor data
to one of the existing indexes it is strongly recommended to create a separate index.

Follow the steps to configure data input.

**Step 1 –** Create a new index to store data from Netwrix Auditor:

1. In Splunk expand the **Settings** drop-down menu and click on the **Indexes** option under the **DATA**
   section.
2. Press the **New Index** button to create an index.
3. Provide the new index parameters:
    - Index name — this parameter will be used in the search.
    - App — points where the index configuration is stored; Choosing **Search & Reporting** is
      recommended.
4. Press the **Save** button.

**Step 2 –** Create a data input:

1. Open **Netwrix Auditor add-on for Splunk** and go to the **Inputs** section.

2. Click **Create New Input**.

3. Provide the new data input parameters:

    - Name of the new data input.
    - Set the interval (period) for Splunk to periodically request new data from Netwrix Auditor
      Integration API. Recommended period is 300 seconds.
    - Select the index that will be used to store the collected data.
    - Select account with access to Netwrix Auditor Integration API.
    - If not following the upgrade procedure, keep the default value for Continuation Mark.

        **CAUTION:** This field should never be empty.

    - Checkpoint type specifies location for continuation mark data. Do not change this setting unless advised by your Splunk Administrator.

4. Click the **Add** button.

## Cloud deployment

This deployment model uses a Splunk Heavy Forwarder to collect data from Netwrix Auditor and forward it to Splunk Cloud.

### How it works

- Netwrix Auditor Add-on for Splunk is installed and configured on a Splunk Heavy Forwarder, where a data input is created.
- The Heavy Forwarder connects to the Netwrix Auditor Integration API and forwards collected data to Splunk Cloud.
- Splunk Cloud is used for indexing, search, and CIM-based analytics.

### Index configuration in Splunk Cloud

Splunk Cloud indexes must be created manually.

**Step 1 –** Create an index in Splunk Cloud that will store Netwrix Auditor data.  
**Step 2 –** Note the index name.  
**Step 3 –** Specify this index name when creating the data input on the Heavy Forwarder.

The index name must exactly match the index created in Splunk Cloud.

### CIM data model support

To use CIM data models in Splunk Cloud, install the Netwrix Auditor Add-on for Splunk in Splunk Cloud. No input or account configuration is required. The add-on is installed only to provide CIM field extractions and data model mappings.
> For additional information on configuring Splunk Cloud and forwarders, refer to the official Splunk documentation.

## Migrating from the legacy Event Log add-on

If you were using the older (Windows event log-based) version of Netwrix Auditor add-on for Splunk
and plan to migrate to the new version, remember to take the additional steps described below. They
will help to ensure imported data consistency and avoid excessive operations. Otherwise, the new
add-on will pull Netwrix Auditor’s activity data that had already been imported into your Splunk
system by the old add-on.

**Step 1 –** Stop the old version of Netwrix Auditor add-on for Splunk. You can do this with the
Windows Scheduled Tasks.

**Step 2 –** Locate the `Netwrix_Auditor_Activity_Records_to_Event_Log_add-on_Cookie.bin` file in the
installation directory of the old add-on for Splunk. Copy that file content to a safe location.

**Step 3 –** Install the new add-on. When prompted for Continuation Mark, enter that file content.
