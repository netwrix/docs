---
title: "Create a Microsoft Entra ID Identity Store"
description: "Create an identity store for Microsoft Entra ID, assign the right Directory Manager security role, and review service account and Teams replication limits."
keywords:
  - Microsoft Entra ID identity store
  - service account permissions
  - User Account Administrator role
  - ReplicateTeamsChannelChanges
  - Microsoft Teams replication
  - Directory Manager security roles
sidebar_position: 20
---

# Create a Microsoft Entra ID Identity Store

After you register Directory Manager and create a user with the required directory role in Microsoft Entra ID, you can create a Microsoft Entra ID identity store in Directory Manager. This topic explains how to create the identity store and assign a role to the Microsoft Entra ID user in Directory Manager.

## Create the identity store

To create a Microsoft Entra ID identity store, see [Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.1/admincenter/identitystore/create.md#create-an-identity-store-for-microsoft-entra-id).

:::note
If you use a service account user with the Global Administrator directory role, you don't need to change the default Directory Manager security role settings of the Microsoft Entra ID identity store. If you use a service account user with any other directory role, such as User Administrator + Exchange Administrator, you must change the Directory Manager Administrator security role criteria group to User Account Administrator.
:::

## Set the Directory Manager security role

If you use a service account user with a role other than the Global Administrator role for a Microsoft Entra ID identity store, assign it the User Account Administrator role in Directory Manager.

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the Identity Stores page, click the ellipsis button for the Microsoft Entra ID identity store and select **Edit**.
3. Click **Security Roles** under Settings in the left pane.
4. On the Security Roles page, click **Edit** for the administrator security role.
5. On the Edit Security Role page, the Criteria area displays the role criteria. Click **Add Criteria** to change it. On the Add Criteria dialog box, delete the existing criteria and search for User account administrator. Click **Save**.
6. Click **Update Security Role**.
7. On the Security Roles page, click **Save**.

## Limitations of minimum service account permissions

If you use a service account with minimum directory role assignments, the following limitations apply:

- You can only assign the User role to newly created users and mailbox objects from Directory Manager. The same applies to existing users and mailboxes, because you can't change Directory Roles when using a service account with minimum directory role assignments.
- Password reset works only for objects in the User role, User Administrator role, and Helpdesk role.

## Limitations of Microsoft Teams channels

The Microsoft Graph API doesn't return Microsoft Teams objects in delta query results when a channel is added, removed, or modified. As a result, Directory Manager can't detect Teams channel changes incrementally. It must replicate all Microsoft Teams objects on every replication cycle. This is a known Microsoft platform limitation.

This behavior increases replication time, particularly in environments with a large number of Microsoft Teams objects. Directory Manager replicates all Microsoft Teams objects regardless of whether changes occurred. To control this behavior, use the `ReplicateTeamsChannelChanges` setting. Disabling it (the default) skips Teams channel replication and avoids the performance impact. Enable it only when you need full Teams channel replication.

This setting defaults to `false` (disabled). Set it to `true` to enable full Teams channel replication.

To change the `ReplicateTeamsChannelChanges` setting:

1. Stop the GroupIDReplicationService in IIS.
2. Open the following file in a text editor:

   `<installation-directory>\ReplicationService\Inetpub\GroupIDReplicationService\Web\appsettings.json`

3. Locate the existing `EntraID` section at the root of `appsettings.json` and set the `ReplicateTeamsChannelChanges` value as follows:

   ```json
   "EntraID": {
     "ReplicateTeamsChannelChanges": true
   }
   ```

4. Save the file.
5. Restart the GroupIDReplicationService in IIS.
