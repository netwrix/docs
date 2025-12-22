---
title: "Deployment Procedure"
description: "Deployment Procedure"
sidebar_position: 10
---

# Deployment Procedure

## Prepare Netwrix Auditor for Data Processing

In the Netwrix Auditor client, go to the Integrations section and verify Integration API settings:

1. Make sure the Leverage Integration API is switched to ON.
2. Check the TCP communication port number – default is 9699.

See the
[Configure Integration API Settings](/docs/auditor/10.7/api/prerequisites.md#configure-integration-api-settings)[Audit Database](/docs/auditor/10.7/admin/settings/auditdatabase.md)topic
for additional information.

## Download the Add-on

Follow the steps to download the add-on.

**Step 1 –** Download the distribution package Netwrix_Auditor_Add-on_for_Splunk.zip from the
following web page:
[https://www.netwrix.com/add-on_for_splunk.html](https://www.netwrix.com/add-on_for_splunk.html)

**Step 2 –** Unpack it to a folder on the computer from which you can access Splunk Web.

## Install the Add-on

Follow the steps to install the add-on.

**Step 1 –** Login to Splunk Web using Splunk Administrator account.

**Step 2 –** Open the Splunk Apps settings in any of the following ways:

- On the main Explore Splunk Enterprise screen, click the gear icon at the top of the left **Apps**
  panel:

![config](/images/auditor/10.7/addon/splunk/config.webp)

- When on any other screen, you can expand the drop-down list at the top panel and choose Manage
  Apps:

    ![searchreporting](/images/auditor/10.7/addon/splunk/searchreporting.webp)

**Step 3 –** On the **Apps** screen, click Install app from file:

![installapp](/images/auditor/10.7/addon/splunk/installapp.webp)

**Step 4 –** Click Choose File, navigate to the folder where you unpacked the add-on package, select
the "TA-netwrix-auditor-add-on-for-splunk-1.6.1.spl" file and click Open.

**Step 5 –** Click Upload.

![uploadapp](/images/auditor/10.7/addon/splunk/uploadapp.webp)

The **Upload** button text will change to "_Processing…_". When the installation is complete, you
will see an invitation to reboot Splunk. This is optional unless you plan to create index
configuration in the add-on folder. In addition, Splunk might not display add-on icon until restart.

The installed add-on should appear in the Apps list in Splunk.

![searchreportingapp](/images/auditor/10.7/addon/splunk/searchreportingapp.webp)

## Prepare for Using Netwrix Auditor Integration API

Make sure you have the following information required for the add-on configuration:

- User name and password for the account you will be using to access the Netwrix Auditor Integration
  API
- Netwrix Auditor Integration API host name or IP address
- TCP port used by Integration API (default port is 9699)

## Configure the Add-on

Follow the steps to configure the add-on.

**Step 1 –** From the Explore Splunk Enterprise or from the drop-down list on the top Splunk panel,
open Netwrix Auditor add-on for Splunk and navigate to the Configuration page:

![configuration](/images/auditor/10.7/addon/splunk/configuration.webp)

**Step 2 –** Configure the account:

1. On the Configuration page, open the Account section.

    ![addaccount](/images/auditor/10.7/addon/splunk/addaccount.webp)

2. Click **Add** and populate the fields:

    - For the Account name provide a unique name for the account that will be visible to the add-on
      users
    - In the Username field insert the user name of the account that will be used to access Netwrix
      Auditor Integration API. If a domain account is used, make sure to use the _DOMAIN\User_
      format.
    - In the Password field insert the account password

3. Click the Add button. The added account should appear in the list:

    ![configurationaccount](/images/auditor/10.7/addon/splunk/configurationaccount.webp)

**Step 3 –** Configure the Netwrix Auditor Integration API location:

1. On the Configuration page open the Add-on Settings section:

    ![configurationaddonsettings](/images/auditor/10.7/addon/splunk/configurationaddonsettings.webp)

2. In the Netwrix Auditor API location field provide the host name or IP address of your Netwrix
   Auditor Integration API host (Netwrix Auditor server).
3. In the Netwrix Auditor API port field provide the TCP port used by Netwrix Auditor Integration
   API; by default it is 9699.

    **NOTE:** Make sure that your Netwrix Auditor Integration API is configured to use HTTPS
    protocol.

4. Press the **Save** button.

## Configure Data Input

Splunk uses indexes to store data and manage access to it. While you can send Netwrix Auditor data
to one of the existing indexes it is strongly recommended to create a separate index.

Follow the steps to configure data input.

**Step 1 –** Create a new index to store data from Netwrix Auditor:

1. In Splunk expand the Settings drop-down menu and click on the Indexes option under the DATA
   section.
2. Press the **New Index** button to create an index.
3. Provide the new index parameters:

    - Index name — this parameter will be used in the search.
    - App — points where the index configuration is stored; Choosing **Search & Reporting** is
      recommended.
    - Check if you need to provide custom location for the Home, Cold and Thawed paths. By default
      they are in the Splunk program folder.
    - Set the Max Size of Entire Index to match the expected volume of logs from Netwrix Auditor.
    - By default, Splunk deletes old events when the size of the index exceeds its max value. If you
      want Splunk to archive them instead specify the Frozen Path.

        Please refer to the
        [Managing Indexers and Clusters of Indexers](https://docs.splunk.com/Documentation/Splunk/8.1.0/Indexer/Aboutmanagingindexes)
        manual for additional details on indexes.

**Step 2 –** Create a data input:

1. Open Netwrix Auditor add-on for Splunk and go to the **Inputs** section.

    ![inputs](/images/auditor/10.7/addon/splunk/inputs.webp)

2. Click Create New Input.

    ![addapi](/images/auditor/10.7/addon/splunk/addapi.webp)

3. Provide the new data input parameters:

    - Name of the new data input.
    - Set the interval (period) for Splunk to periodically request new data from Netwrix Auditor
      Integration API. Recommended period is 300 seconds.
    - Select the index that will be used to store the collected data.
    - Select account with access to Netwrix Auditor Integration API.
    - If not following the upgrade procedure, keep the default value for Continuation Mark.

        **CAUTION:** This field should never be empty.

    - Checkpoint type specifies location for continuation mark data. File is the recommended option.
      Do not change this setting unless advised accordingly by your Splunk Administrator.

4. Click the **Add** button.

## Upgrade Procedure

If you were using the older (Windows event log-based) version of Netwrix Auditor add-on for Splunk
and plan to migrate to the new version, remember to take the additional steps described below. They
will help to ensure imported data consistency and avoid excessive operations. Otherwise, the new
add-on will pull Netwrix Auditor’s activity data that had already been imported into your Splunk
system by the old add-on.

Follow the steps to upgrade the add-on.

**Step 1 –** Stop the old version of Netwrix Auditor add-on for Splunk. You can do this with the
Windows Scheduled Tasks.

**Step 2 –** Locate the Netwrix_Auditor_Activity_Records_to_Event_Log_Add-on_Cookie.bin file in the
installation directory of the old add-on for Splunk. Store that file content to a safe location.

**Step 3 –** Install the new add-on. When prompted for Continuation Mark, enter that
Netwrix*Auditor* Activity_Records_to_Event_Log_Add-on_Cookie.bin file content.
