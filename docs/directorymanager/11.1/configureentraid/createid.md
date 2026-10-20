---
title: "Microsoft Entra ID Identity Store"
description: "Microsoft Entra ID Identity Store"
sidebar_position: 20
---

# Microsoft Entra ID Identity Store

After you register Directory Manager and create a user with the required directory role in
Microsoft Entra ID, you can create an Microsoft Entra ID identity store in GroupID. This topic
explains how to create an Microsoft Entra ID identity store and assign a role to the
Microsoft Entra ID user in Directory Manager.

## To create a Microsoft Entra ID Identity Store

See the
[Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.1/admincenter/identitystore/create.md#create-an-identity-store-for-microsoft-entra-id)
topic for creating an Microsoft Entra ID identity store.

:::note
If you intend to use a service account user with Global Administrator directory role, you don't
need to change the default Directory Manager security roles settings of the Microsoft Entra ID
identity store. If you intend to use a service account user with any role other than Global
Administrator directory role (i.e. User Administrator + Exchange Administrator), you must change
the Directory Manager Administrator security role criteria group to User Account Administrator.
:::


## Directory Manager Security Role Setting

If you want to use a service account user with a role other than Global administrator role for
Microsoft Entra ID identity store, you must assign it the _User Account Administrator_ role in
Directory Manager.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for Microsoft Entra ID identity
store and select **Edit**.

Step 3 – Click **Security Roles** under Settings in the left pane.

Step 4 – On the Security Roles page, click **Edit** for the administrator security role.

Step 5 – On the Edit Security Role page, the Criteria area displays the role criteria. Click **Add
Criteria** to change it. On the Add Criteria dialog box, delete the existing criteria and search for
User account administrator. Click **Save**.

Step 6 – Click **Update Security Role**.

Step 7 – On the Security Roles page, click **Save**.

## Limitations of Minimum Service Account Permissions

If you use a service account with minimum directory role assignments, the following
limitations apply:

- You can only assign the User role to newly created users and mailbox objects from GroupID. The
  same applies to existing users and mailboxes, because you can't change Directory Roles when
  using a service account with minimum directory role assignments.

- Password reset functionality works only for objects in the User role, User Administrator role,
  and Helpdesk role.

## Limitations of Microsoft Teams Channels

The Microsoft Graph API doesn't return Microsoft Teams objects in delta query results when a
channel is added, removed, or modified. As a result, Directory Manager can't detect Teams channel
changes incrementally and must replicate all Microsoft Teams objects on every replication cycle.
This is a known Microsoft platform limitation.

This behavior increases replication time particularly in environments with large number of Microsoft
Teams objects, because Directory Manager replicates all Microsoft Teams regardless of whether changes
occurred. To control this behavior, use the `ReplicateTeamsChannelChanges` setting. Disabling it
(the default) skips Teams channel replication and avoids the performance impact; enable it only when
you need full Teams channel replication.

This setting defaults to `false` (disabled). Set it to `true` to enable full Teams channel
replication.

To change the `ReplicateTeamsChannelChanges` setting:

Step 1 – Stop the GroupIDReplicationService in IIS.

Step 2 – Open the following file in a text editor:

`<installation-directory>\ReplicationService\Inetpub\GroupIDReplicationService\Web\appsettings.json`

Step 3 – Locate the existing `EntraID` section at the root of `appsettings.json` and set the
`ReplicateTeamsChannelChanges` value as follows:

```json
"EntraID": {
  "ReplicateTeamsChannelChanges": true
}
```

Step 4 – Save the file.

Step 5 – Restart the GroupIDReplicationService in IIS.