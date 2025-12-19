---
title: "GroupID Entitlement Schedule"
description: "GroupID Entitlement Schedule"
sidebar_position: 40
---

# GroupID Entitlement Schedule

An Entitlement schedule is automatically created for an identity store when:

- A server is added for permission analysis on the Entitlement page in an Active Directory identity
  store. See the
  [Manage File Servers](/docs/directorymanager/11.0/signin/entitlement/manage.md)
  for additional information on adding a server.

    Or

- A SharePoint site is added for permission analysis on the Entitlement page in a Microsoft Entra ID
  identity store. See the
  [Manage SharePoint Sites](/docs/directorymanager/11.0/signin/entitlement/manage_1.md)
  topic for additional information on adding a SharePoint site.

By default, the schedule runs weekly to compute permissions on shared files and folders residing on
the specified servers (for Active Directory), and the document libraries present in the specified
sites (for SharePoint). It then replicates these permissions to Elasticsearch, enabling users to
view, manage and update these permissions in the GroupID portal.

On the very first run of the Entitlement schedule, it computes all permissions from scratch and
performs a complete replication. On each next run, it will create a parallel index for that specific
server/SharePoint site index with the suffix _replication which computes all permissions from
scratch. In the meantime, user can perform actions on GroupID Entitlement. The actions performed
during this parallel replication are committed directly at the provider and stored in the database.
These changes are then immediately committed to elastic after the replication is complete.

The scope schedule changes are replicated after the new index is done replicating permissions from
the server/SharePoint. When this parallel index gets completely replicated, it becomes the new
primary index for this server/SharePoint site and the _replication index is deleted from indices.

The GroupID Entitlement schedule runs in the context of the following accounts:

- For file servers, the schedule runs in the context of the service account defined for the identity
  store. In case you specify a different account for a file server, the schedule runs in the context
  of the changed account. See the
  [Connect to a File Server Using a Different Account](/docs/directorymanager/11.0/signin/entitlement/manage.md#connect-to-a-file-server-using-a-different-account)
  topic.
- For a SharePoint site, the schedule runs in the context of the account you specified to connect to
  the SharePoint admin site. In case you specify a different account for a site, the schedule runs
  in the context of the changed account. See the
  [Connect to a Site Using a Different Account](/docs/directorymanager/11.0/signin/entitlement/manage_1.md#connect-to-a-site-using-a-different-account)
  topic.

You cannot create or delete a GroupID Entitlement schedule; only edit the existing schedule.

What do you want to do?

- [Update the GroupID Entitlement Schedule](#update-the-groupid-entitlement-schedule)

## Update the GroupID Entitlement Schedule

Follow the steps to update the GroupID Entitlement schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under **Settings** in the left pane.

Step 4 – On the **Schedules** page, click the plus sign next to **GroupID Entitlement**. Then click
the ellipsis button for the schedule and select **Edit**.

Step 5 – On the **Edit Schedule** page, the **Schedule Name** and **Name Preview** boxes display the
name of the schedule as read-only. The name format is
_Entitlement_`<the name of the machine the schedule is created on>`_.

Step 6 – In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler service.
See the
[Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
topic.

Step 7 – The **Triggers** area displays the default triggering frequency for the schedule.

- To change a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Step 8 – Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 9 – After making the changes, click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.  
For general schedule info, see the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
topic.

See Also

- [Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md)
