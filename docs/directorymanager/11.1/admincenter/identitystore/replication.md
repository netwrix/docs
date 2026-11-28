---
title: "Manage Identity Store Replication Settings"
description: "Choose which object attributes replicate to Elasticsearch, force run the Replication service, and restore object data for an identity store."
keywords:
  - replication attributes
  - Elasticsearch
  - Replication service
  - restore object data
  - custom attribute replication
sidebar_position: 30
---

# Manage Identity Store Replication Settings

You can manage the following replication settings for an identity store:

- Specify the object attributes that the Replication service replicates to Elasticsearch. Attributes
  that you don't select aren't available in the identity store and can't be used in Directory Manager
  functions.
- Force run the service at any time to replicate object attributes.
- Restore object data to Elasticsearch for an identity store.

## Specify object attributes to replicate

An identity store has a few attributes specified for replication by default. You can modify the list
as required.

To select object attributes:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the **ellipsis** button for an identity store and select
   **Edit**.
3. Click **Replication** under **Settings** in the left pane.
4. On the **Replication** page, the **Attribute Name** column lists the object attributes that the
   Replication service replicates to Elasticsearch for the identity store. You can do the following:

   - Use the search box to search for an attribute in the list. Enter a search string in the box, and
     Directory Manager displays the attribute names that contain the string.
   - To remove an attribute from the list, click **Remove** for it.
   - To reset to the default attribute listing, click **Reset to Default**.

5. Click **Add Replication Attributes** to add an attribute to the list.
6. In the **Select Replication Attributes** dialog box, which lists the schema attributes in the
   provider, select the checkboxes for the attributes you want to replicate for the identity store
   and click **Save**. The attributes are added to the **Attribute Name** column on the Replication
   page.

   :::note
   If extension attributes are added in a Microsoft Entra ID-based identity store, the Directory
   Manager Schema Replication schedule fetches the latest schema at its next run. It then adds the
   new extension attributes to the **Select Replication Attributes** list. See the
   [Update the Directory Manager Schema Replication Schedule](/docs/directorymanager/11.1/admincenter/schedule/schemareplication.md)
   topic for additional information.

   Select the required extension attributes from the **Select Replication Attributes** list and add
   them to the attribute to replicate list. See the
   [Specify Object Attributes to Replicate](#specify-object-attributes-to-replicate) section.
   :::

7. Click **Save**.

## Replicate a custom attribute

By default, a custom attribute for any object type (user, group, computer, public folder) isn't
replicated for an identity store.

In this example, the user object in Active Directory has a custom attribute, SerialNumber.

To replicate its value in the Elasticsearch repository:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the **ellipsis** button for an identity store and select
   **Edit**.
3. Click **Replication** under **Settings** in the left pane.
4. On the **Replication** page, click **Add Replication Attributes** to search for, select, and add
   the required attribute (for example, _SerialNumber_) to the **Attribute Name** list.
5. In the **Replicate to Objects** dialog box, enter your selection:

   - RECOMMENDED: **Yes** – Runs replication for all objects in the category the added attribute
     belongs to (the user object in the example).
   - **No** – Runs replication for the object at the next replication interval when the object is
     modified.

6. Click **Save** on the Replication page.
7. Click **Restore** on the **Restore Data** card to restore object data to Elasticsearch for the
   identity store.

:::note
When a Smart Group, created with a custom attribute in a previous Directory Manager version, is
upgraded using the Upgrade wizard, you must replicate the respective object type in full.
:::

## Force run the Replication service (for object replication)

By default, the Replication service runs every 10 minutes. You can force run it at any time for an
identity store to replicate object attributes to Elasticsearch.

Force-starting the service has no impact on the interval set for triggering the service on the
Replication page. See the
[Specify a Replication Interval for Objects](/docs/directorymanager/11.1/admincenter/replication/settings.md#specify-a-replication-interval-for-objects)
topic.

You can force run the Replication service for an identity store in either of the following ways.

**Method 1**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Replicate Objects**. Any changes made to the values of attributes during the last and current
   run of the Replication service are replicated to Elasticsearch.

**Method 2**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Replication** under **Settings** in the left pane.
4. On the **Replication** page, click **Run** on the **Replication Service** card to run the
   Replication service instantly. Any changes made to the values of attributes during the last and
   current run of the Replication service are replicated to Elasticsearch. The card also displays
   the last run date and time of the service.

## Force run the Replication service (for deleting objects)

Objects that are deleted from the directory must also be removed from Elasticsearch. By default, the
interval for removing deleted objects from Elasticsearch is set to 60 minutes. You can force run the
Replication service for an identity store at any time to remove deleted objects.

Force-starting the service has no impact on the interval set for triggering the service on the
**Replication** page. See the
[Specify an interval for deleting tombstone objects](/docs/directorymanager/11.1/admincenter/replication/settings.md#specify-an-interval-for-deleting-tombstone-objects)
topic.

For an identity store, you can force run the Replication service (for deleting objects) in either of
the following ways.

**Method 1**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Replicate Deleted Objects**. Any objects deleted in the directory between the last and current
   run of the Replication service are removed from Elasticsearch.

**Method 2**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Replication** under **Settings** in the left pane.
4. On the **Replication** page, click **Run** on the **Deleted Objects Replication** card to run the
   Replication service instantly. Objects deleted from the directory between the last and current
   run of the Replication service are removed from Elasticsearch. The card also displays the last
   run date and time of the service.

## Restore object data

You might need to restore data for an identity store to Elasticsearch. The restore object data event
restores the following for an identity store:

- The current attribute values of objects (group, user, contact, computer, and OU) from the provider
  (for example, Active Directory)
- The Directory Manager pseudo attributes of those objects from the Directory Manager database to
  Elasticsearch

To restore object data:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Replication** under **Settings** in the left pane.
4. On the **Replication** page, click **Restore** on the **Restore Data** card to restore object data
   for the identity store to Elasticsearch.
