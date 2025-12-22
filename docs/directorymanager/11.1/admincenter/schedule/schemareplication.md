---
title: "Schema Replication Schedule"
description: "Schema Replication Schedule"
sidebar_position: 110
---

# Schema Replication Schedule

An Identity store is built on an identity provider, that could be Active Directory, Microsoft Entra
ID, Google Workspace, or Generic LDAP. The Schema Replication schedule replicates the schema of
these identity providers to the Directory Manager database.

Unlike other schedules that exist separately for each identity store, Directory Manager has only one
Schema Replication schedule that serves all identity stores. While the schedule is displayed
separately for each identity store, it does not represent separate schedules. So when you run the
Schema Replication schedule for an identity store, it replicates the schema for all identity stores
in Directory Manager. And if you terminate it, the process is terminated for all identity stores.
Moreover, the schedule runs every time it is triggered from any of the identity stores, be it
manually or according to its triggers.

When the Schema Replication schedule runs for the first time, it replicates schema from scratch. In
all subsequent runs, it replicates any changes made to the schema. Of this replicated schema, you
can choose the object attributes you actually want to use in an identity store. See the
[Specify Object Attributes to Replicate](/docs/directorymanager/11.1/admincenter/identitystore/replication.md#specify-object-attributes-to-replicate)
topic for details.

:::note
For Microsoft Entra ID, schema is replicated from the schema file for Graph API v 3.26.0.
:::


The Schema Replication schedule runs in the context of the super admin account in the Directory
Manager provider. You cannot create or delete a Schema Replication schedule; only update the
existing one.

## Update the Schema Replication Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to Schema Replication. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the
schedule as read-only.

Step 6 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

:::warning
In case of multiple Scheduler services, you must bind the same service with the Schema
Replication schedules in all the identity stores.
:::


Step 7 – The Triggers area displays the default triggering frequency for the schedule.

- To change it, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Follow step 11 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 8 – Click **Update Schedule**.

Step 9 – On the Schedules page, click **Save**.  
 For general schedule info, see the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store) topic
for additional information.
