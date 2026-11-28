---
title: "Edit the Directory Manager Entitlement Scope Schedule"
description: "Learn how the Entitlement Scope schedule replicates permission changes made in the portal to Elasticsearch, and how to edit it."
keywords:
  - Entitlement Scope schedule
  - permission replication
  - file server permissions
  - SharePoint document libraries
  - Scheduler service
sidebar_position: 50
---

# Edit the Directory Manager Entitlement Scope Schedule

Directory Manager creates an Entitlement Scope schedule for an identity store automatically when:

- A server is added for permission analysis on the Entitlement page in an Active Directory identity store. See the [Manage File Servers for Directory Manager Entitlement](/docs/directorymanager/11.2/admincenter/entitlement/managefs.md) topic for additional information on adding a server.

**Or**

- A SharePoint site is added for permission analysis on the Entitlement page in a Microsoft Entra ID identity store. See the [Manage SharePoint Sites for Directory Manager Entitlement](/docs/directorymanager/11.2/admincenter/entitlement/managesp.md) topic for additional information on adding a SharePoint site.

Using the Directory Manager portal, users can update the permissions on files and folders on file servers (for Active Directory) and on document libraries in SharePoint sites (for Microsoft Entra ID). Directory Manager commits these permission changes instantly to the file server or site. The portal displays them after the Entitlement Scope schedule runs.

By default, the schedule runs daily to replicate the permissions from file servers or sites to Elasticsearch. It replicates permissions for the target folder, site, or document library and its subtrees, up to the nth level. Changes made to permissions outside of Directory Manager are beyond the scope of this schedule.

The [Edit the Directory Manager Entitlement Schedule](/docs/directorymanager/11.2/admincenter/schedule/entitlement.md) also replicates the permissions that the Entitlement Scope schedule replicates, because it replicates all permissions. However, the default triggering frequency for the Directory Manager Entitlement schedule (weekly) requires a separate Entitlement Scope schedule.

You can't create or delete an Entitlement Scope schedule. You can only edit the existing schedule.

## Accounts the schedule runs under

The Entitlement Scope schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity store. If you specify a different account for a file server, the schedule runs in the context of the changed account. See the [Connect to a File Server Using a Different Account](/docs/directorymanager/11.2/admincenter/entitlement/managefs.md#connect-to-a-file-server-using-a-different-account) topic for additional information.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to the SharePoint admin site. If you specify a different account for a site, the schedule runs in the context of the changed account. See the [Connect to a Site Using a Different Account](/docs/directorymanager/11.2/admincenter/entitlement/managesp.md#connect-to-a-site-using-a-different-account) topic for additional information.

## Update the Entitlement Scope Schedule

To update the Entitlement Scope schedule:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.
3. Click **Schedules** under Settings in the left pane.
4. On the Schedules page, click the plus sign next to **Entitlement Scope**. Then click the ellipsis button for the schedule and select **Edit**.
5. On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the schedule as read-only. The name format is _Entitlement_`<the name of the machine the schedule is created on>`_Scope_.
6. In the **Scheduler Service Name** dropdown list, select a Scheduler service that's responsible for triggering this schedule. The number of services in the list depends on the number of nodes in all Elasticsearch clusters in the environment, because each node has its own Scheduler service. See the [Directory Manager Scheduler Service](/docs/directorymanager/11.2/admincenter/service/schedulerservice.md) topic for additional information.

   :::note
   When you select a Scheduler service, note the following:

   - The Scheduler service for the Directory Manager instance on which you're creating the schedule is selected by default. However, you can select the Scheduler service of another instance as well.
   - You can change the Scheduler service even after creating the schedule. On the next run, the newly selected Scheduler service triggers the schedule.
   - If the selected Scheduler service fails to trigger the schedule, no other Scheduler service is selected automatically.
   - If you run a schedule manually in Admin Center, the Scheduler service of that instance is used.
   :::

7. In the **Triggers** area, review the default triggering frequency for the schedule.
   - To change a trigger, click **Edit** for it.
   - To add a new trigger, click **Add Trigger**.
8. Follow step 11 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic to manage triggers.
9. After making the changes, click **Update Schedule**.
10. On the Schedules page, click **Save**.

For general schedule information, see the [View the Schedules in an Identity Store](manage.md#view-the-schedules-in-an-identity-store) topic.
