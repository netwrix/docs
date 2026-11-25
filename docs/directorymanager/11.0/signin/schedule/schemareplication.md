---
title: "Update the Directory Manager Schema Replication Schedule"
description: "Change the scheduler service and triggers of the schema replication schedule that copies identity provider schemas to the Directory Manager database."
keywords:
  - schema replication
  - Directory Manager schedule
  - identity store schema
  - scheduler service
  - Active Directory schema
sidebar_position: 110
---

# Update the Directory Manager Schema Replication Schedule

An identity store is built on an identity provider, which can be Active Directory, Microsoft Entra
ID, Google Workspace, or Generic LDAP. The Schema Replication schedule replicates the schema of
these identity providers to the Directory Manager database.

Unlike other schedules that exist separately for each identity store, Directory Manager has only one
Schema Replication schedule that serves all identity stores. Although the schedule is displayed
separately for each identity store, it doesn't represent separate schedules. When you run the Schema
Replication schedule for an identity store, it replicates the schema for all identity stores in
Directory Manager. If you terminate it, the process is terminated for all identity stores. The
schedule also runs every time it's triggered from any of the identity stores, whether manually or
according to its triggers.

When the Schema Replication schedule runs for the first time, it replicates the entire schema.
In all subsequent runs, it replicates any changes made to the schema. From this replicated schema,
you can choose the object attributes you want to use in an identity store. See the
[Specify Object Attributes to Replicate](/docs/directorymanager/11.0/signin/identitystore/replication.md#specify-object-attributes-to-replicate)
topic for details.

:::note
For Microsoft Entra ID, schema is replicated from the schema file for Graph API v3.26.0.
:::

The Schema Replication schedule runs in the context of the super admin account in the Directory Manager
provider. You can't create or delete a Schema Replication schedule; only update the existing one.

What do you want to do?

- [Update the Schema Replication Schedule](#update-the-schema-replication-schedule)

## Update the Schema Replication Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign next to **Schema Replication**. Then click the
   ellipsis button for the schedule and select **Edit**.
5. On the **Edit Schedule** page, the **Schedule Name** and **Name Preview** boxes display the name
   of the schedule as read-only.
6. In the **Scheduler Service Name** dropdown list, select a Scheduler service that's
   responsible for triggering this schedule. The number of services in the list depends on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Directory Manager Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.

    **CAUTION:** If you have multiple Scheduler services, you must bind the same service with the
    Schema Replication schedules in all the identity stores.

7. The **Triggers** area displays the default triggering frequency for the schedule.

    - To change it, click **Edit** for it.
    - To add a new trigger, click **Add Trigger**.

    Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic to manage triggers.

8. Click **Update Schedule**.
9. On the **Schedules** page, click **Save**.  
   For general schedule information, see the
   [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
   topic.

See Also

- [Schedules in Directory Manager](/docs/directorymanager/11.0/signin/schedule/overview.md)
