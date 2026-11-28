---
title: "Edit the Directory Manager Entitlement Schedule"
description: "Learn how the Directory Manager Entitlement schedule replicates permissions to Elasticsearch and how to edit its Scheduler service and triggers."
keywords:
  - Entitlement schedule
  - permission replication
  - Elasticsearch replication index
  - Scheduler service
  - file server permissions
sidebar_position: 40
---

# Edit the Directory Manager Entitlement Schedule

Directory Manager creates an Entitlement schedule for an identity store automatically when:

- A server is added for permission analysis on the Entitlement page in an Active Directory identity store. See the [Manage File Servers for Directory Manager Entitlement](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md) topic for additional information on adding a server.

**Or**

- A SharePoint site is added for permission analysis on the Entitlement page in a Microsoft Entra ID identity store. See the [Manage SharePoint Sites for Directory Manager Entitlement](/docs/directorymanager/11.1/admincenter/entitlement/managesp.md) topic for additional information on adding a SharePoint site.

By default, the schedule runs weekly. It computes permissions on shared files and folders on the specified servers (for Active Directory) and on document libraries in the specified sites (for SharePoint). It then replicates these permissions to Elasticsearch, so users can view, manage, and update them in the Directory Manager portal.

You can't create or delete a Directory Manager Entitlement schedule. You can only edit the existing schedule.

## How replication works

On the first run of the Entitlement schedule, it computes all permissions from the beginning and performs a complete replication.

On each later run, it creates a parallel index for that server or SharePoint site, with the suffix \_replication. This index computes all permissions from the beginning. In the meantime, users can perform actions in Directory Manager Entitlement. Directory Manager commits the actions performed during this parallel replication directly at the provider and stores them in the database. It then commits these changes to Elasticsearch immediately after the replication is complete.

The scope schedule changes are replicated after the new index finishes replicating permissions from the server or SharePoint site. When the parallel index is completely replicated, it becomes the new primary index for this server or SharePoint site. Directory Manager then deletes the \_replication index from the indices.

## Accounts the schedule runs under

The Directory Manager Entitlement schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity store. If you specify a different account for a file server, the schedule runs in the context of the changed account. See the [Connect to a File Server Using a Different Account](/docs/directorymanager/11.1/admincenter/entitlement/managefs.md#connect-to-a-file-server-using-a-different-account) topic.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to the SharePoint admin site. If you specify a different account for a site, the schedule runs in the context of the changed account. See the [Connect to a Site Using a Different Account](/docs/directorymanager/11.1/admincenter/entitlement/managesp.md#connect-to-a-site-using-a-different-account) topic.

## Update the Schedule

To update the Directory Manager Entitlement schedule:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Schedules** under Settings in the left pane.
4. On the Schedules page, click the plus sign next to **Directory Manager Entitlement**. Then click the ellipsis button for the schedule and select **Edit**.
5. On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the schedule as read-only. The name format is `_Entitlement_<the name of the machine the schedule is created on>`.
6. In the Scheduler Service Name dropdown list, select a Scheduler service that's responsible for triggering this schedule. The number of services in the list depends on the number of nodes in all Elasticsearch clusters in the environment, because each node has its own Scheduler service. See the [Directory Manager Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional information.

   Consider the following when you select a Scheduler service:

   - The Scheduler service for the Directory Manager instance on which you're creating the schedule is selected by default. However, you can select the Scheduler service of another instance as well.
   - You can change the Scheduler service even after creating the schedule. On the next run, the newly selected Scheduler service triggers the schedule.
   - If the selected Scheduler service fails to trigger the schedule, no other Scheduler service is selected automatically.
   - If you run a schedule manually in Admin Center, the Scheduler service of that instance is used.

7. In the **Triggers** area, review the default triggering frequency for the schedule.
   - To change a trigger, click **Edit** for it.
   - To add a new trigger, click **Add Trigger**.
8. Follow step 11 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic to manage triggers.
9. After making the changes, click **Update Schedule**.
10. On the Schedules page, click **Save**.

For general schedule information, see the [View the Schedules in an Identity Store](manage.md#view-the-schedules-in-an-identity-store) topic.
