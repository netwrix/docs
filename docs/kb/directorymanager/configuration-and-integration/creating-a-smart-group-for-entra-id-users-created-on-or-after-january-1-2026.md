---
description: >-
  Describes how to extend the Netwrix Directory Manager directory schema with
  the Entra ID createdDateTime attribute so you can create a Smart Group of
  users created on or after a specific date.
keywords:
  - Smart Group
  - Entra ID
  - createdDateTime
  - directoryschema.xml
  - schema replication
  - replication attributes
  - LDAP criteria
  - Elasticsearch
  - user creation date
  - Netwrix Directory Manager
products:
  - directorymanager
sidebar_label: Creating a Smart Group for Entra ID Users Created On or After January 1, 2026
tags:
  - kb
  - configuration-and-integration
title: "Creating a Smart Group for Entra ID Users Created On or After January 1, 2026"
knowledge_article_id: kA0Qk0000004rwzKAA
---

# Creating a Smart Group for Entra ID Users Created On or After January 1, 2026

## Overview

This article describes how to create a Smart Group in Netwrix Directory Manager 11 that automatically includes all Entra ID users whose accounts were created on or after January 1, 2026. Organizations can use a group like this to manage and monitor users based on their onboarding timeline.

By default, Directory Manager does not expose a native user creation date and time attribute from Entra ID in its replication schema, so you cannot use this attribute in Smart Group criteria. To work around this limitation, complete the following tasks:

- Extend the directory schema to include the `createdDateTime` attribute from Entra ID.
- Make sure Directory Manager replicates the attribute and indexes it in Elasticsearch.
- Use the attribute in Smart Group (LDAP) criteria to filter users dynamically.

## Instructions

### Step 1 — Update the Directory Schema

> **IMPORTANT:** Before you change any files, back up the original XML files and store them in a safe location so you can roll back if needed.

1. Open the `directoryschema.xml` file for Azure in each of the following locations. Replace `X` with the drive where Directory Manager is installed:

    - `X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\Extensions\Azure`
    - `X:\Program Files\Imanami\GroupID 11.0\GroupIDSchedulerService\Inetpub\GroupIDSchedulerService\Web\Extensions\Azure`
    - `X:\Program Files\Imanami\GroupID 11.0\ReplicationService\Inetpub\GroupIDReplicationService\Web\Extensions\Azure`

2. Within the `<user>` tag in each file, add the following line:

    ```xml
    <Attribute IsReadOnly="true" IsMultiValue="false" DisplayType="text" DisplayName="createddatetime" IsReferenced="false" Name="createddatetime" DataType="date" HasBacklink="false" BacklinkName="" BacklinkObjectTypes="" IsBacklinkSingleValue="" CaseSensitiveName="createdDateTime" />
    ```

3. After you update the XML files, reset **IIS** on the server.

### Step 2 — Run Schema Replication

1. Go to **Admin Center** > **Identity Stores**, and open **Entra ID Identity Store Settings**.
2. Select **Schedules** > **Schema Replication**, and run the schema replication job.

### Step 3 — Add the Attribute to Replication

1. Go to **Entra ID Identity Store Settings** > **Replication Node**, and click **Add Replication Attributes**.
2. Add the attribute `createddatetime`.
3. When prompted, proceed with full user replication, and then save the settings.

    > **NOTE:** Full user replication can take some time.

4. Monitor progress in **Admin Center** > **Replication Node** > **Advanced Status**, and confirm that all users are successfully replicated.

### Step 4 — Create the Smart Group

After replication completes, complete the following steps:

1. Create a Smart Group from the portal.
2. Use the following LDAP criteria:

    ```text
    createddatetime Greater or Equal 1/1/2026
    ```

3. Preview and validate the results.
