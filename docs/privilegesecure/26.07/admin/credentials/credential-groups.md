---
title: "Credential groups"
description: "Create credential groups and add managed credentials to them so credential-based access policies can grant access to the group."
sidebar_position: 70
---

# Credential groups

A credential group is a named set of managed credentials. Credential-based access policies use groups to decide which accounts users can check out. See [Create a credential-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md).

The **Credential Groups** page is under **Credentials** in the left navigation. It has two panes. The left pane lists the groups. The right pane shows the selected group.

![The Credential Groups page with the Linux Servers Build Administrators group selected and its two credentials listed.](/images/privilegesecure/26.07/admin/credential-groups-page.webp)

## The left pane

- **Search Credential Groups...**: Filters the list.
- **+**: Creates a group.
- Trash icon: Appears when you hover over a group. It deletes the group after a confirmation.

## The group details

The details pane shows the **Name** and **Description** of the group. If you change either, **Save** and **Cancel** appear. Click **Save** to keep the change or **Cancel** to discard it.

The member table has these controls:

- **Search**: Filters the members.
- **Type**: Filters by managed type: All, Internal, Standard, or Service.
- **Add Credentials**: Opens the Add Credentials dialog.
- **Remove**: Removes the selected members from the group. It is disabled until you select a row.
- **Refresh**: Reloads the table.

The table has the columns **Account**, **Resource**, **Platform**, **Method**, **Managed Type**, **Dependents**, **Password Changed**, **Age**, **Status**, **Last Checked**, and **Next Change**. Managed accounts show the **Copy Password to Clipboard** and **View Password** icons. For the meaning of the columns and status values, see [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md).

## Create a credential group

1. In the left navigation, click **Credentials** > **Credential Groups**.
2. Click **+**.
3. Enter a name in **Enter Credential Group Name**.
4. Enter a **Description**.
5. Click **Save**.

For example, name a group `<build-admin-accounts>` with the description `<Local build administrator accounts>`.

## Add credentials to a group

1. On the **Credential Groups** page, select the group.
2. Click **Add Credentials**.
3. Use the search box and the type dropdown (All, Internal, Standard, Service) to find accounts.
4. Select the checkbox for each account in **Available Credentials**. The account moves to **Credentials to Add**.
5. Optional: Clear a checkbox in **Credentials to Add** to move the account back.
6. Click **Add**.

{/* TODO screenshot: the Add Credentials dialog */}

**Available Credentials** lists the credentials that aren't already in the group. It leaves out deleted credentials and application credentials. The search box matches the account name, and the type dropdown limits the list to one account type.

## Remove credentials from a group

1. Select the group.
2. Select the checkbox for each account to remove.
3. Click **Remove**.

## Related topics

- [Credential policy overrides](/docs/privilegesecure/26.07/admin/credentials/policy-overrides.md)
- [Rotation methods](/docs/privilegesecure/26.07/admin/credentials/rotation-methods.md)
