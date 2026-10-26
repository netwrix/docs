---
title: "Roles and permissions"
description: "Learn which built-in roles Netwrix Privilege Secure provides, what each role can do, and which permissions a custom role can include."
sidebar_position: 10
---

# Roles and permissions

A role controls what a user can see and do in the console. Netwrix Privilege Secure has four built-in roles. You can add custom roles to delegate part of administration.

Open the page from the left navigation: click **Users & Groups**, then **Role Management**.

{/* TODO screenshot: the Role Management page with the role list on the left and the Administrators members on the right */}

## Built-in roles

| Role | What it grants |
|---|---|
| **Administrators** | Access to every configuration option in the console. |
| **Users** | The ability to request and start sessions under the access policies that include the user. The role is assigned when you add the user to the console. |
| **Reviewers** | The ability to review access entitlements. See [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md). |
| **Auditors** | The permissions on the **Permission Assignment** list: for example, watching live sessions, viewing recordings of historical sessions, and running reports. |

The description of the Auditors role in the console reads "Auditors have permissions to view the Historical Sessions of other users."

The **Users** role isn't offered in the **Add Roles** window. The console assigns it, and you can't add it by hand. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).

An account can have more than one role. To see who holds a role, select the role in the list.

You can't copy, delete, or rename the built-in roles (**Administrators**, **Users**, **Reviewers**, and **Auditors**) or change their descriptions. The copy and delete icons are disabled for them, and the server refuses to copy a built-in role. The one exception is the **Auditors** role, whose **Permission Assignment** list you can edit.

### Approvers

There is no Approver role. Approvers are the users and groups that you name in a tier of an approval workflow on a connection profile. See [Approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md).

## Role list

The role list on the left has a **Search Roles...** box and a **+** button (**Add Role**) that creates a custom role. The copy and delete icons appear beside each role. They're enabled only for custom roles. The copy icon clones the role with its permissions, scope, and members, and the trash can icon deletes it after you confirm. To create custom roles, see [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).

For the **Administrators** and **Reviewers** roles, the member list has these controls:

| Control | What it does |
|---|---|
| **Search** and **Type** filter | Find members by text or by account type. |
| **Add User** | Opens a window to add members. |
| **Remove** | Takes the selected members out of the role. |

The columns are **TYPE**, **NAME**, **USER NAME**, **EMAIL**, and **LAST LOGIN**.

The **Users** role lists every licensed user and shows the same filters and the license counter as the **Users & Groups** page. See [Users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md).

## Permission reference

Custom roles and the **Auditors** role are built from permissions. A role has one target, and the target decides which permissions the role can hold.

| Target | Permission | What it allows |
|---|---|---|
| Auditors | **View Recordings** | Review recorded sessions of the users and resources assigned to the role. |
| Auditors | **Live Session Viewer** | Watch sessions in progress. |
| Auditors | **Terminate Session** | End a live session. Requires **Live Session Viewer**. |
| Auditors | **Lock Session** | Lock a live session. Requires **Live Session Viewer**. |
| Auditors | **Reporting** | Create, change, delete, and run reports. |
| Auditors | **Admin View Read Only** | Open every administration page without the ability to change settings. See [Give auditors read-only console access](/docs/privilegesecure/26.07/admin/roles/admin-view-read-only.md). |
| Access Policies | **Modify Name**, **Modify Description**, **Modify Connection Profile**, **Modify Activities**, **Modify Users**, **Modify Resources** | Change the named part of an access policy. |
| Credentials | **Manage**, **Unmanage**, **Schedule Rotation**, **Verify**, **View Password**, **Rotate Services** | Perform the named action on credentials. |

Two rules apply when you edit the **Permission Assignment** list for an Auditors role:

- **Terminate Session** and **Lock Session** stay disabled until **Live Session Viewer** is on the role.
- Adding **Admin View Read Only** also adds **Reporting**. Removing **Reporting** also removes **Admin View Read Only**.

### Scope of an Auditors role

An Auditors role also has a scope that decides whose sessions its members can watch and replay. The **Users** tab and the **Resources** tab each have an **All Users** or **All Resources** checkbox. When the checkbox is selected, the role covers everyone. Otherwise, add the users or resources that the role covers.

To use scope in practice, give the built-in **Auditors** role access to all users and resources, and add custom Auditors roles for narrower groups. See [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md).

## Read-only console access

The **Admin View Read Only** permission lets an auditor open the administration pages without changing anything. It is a permission. Add it to a role with the Auditors target. See [Give auditors read-only console access](/docs/privilegesecure/26.07/admin/roles/admin-view-read-only.md).

A read-only user sees the banner "You are in read-only mode. Changes are not permitted." Only a few actions stay available, such as running reports, replaying recordings, and locking or terminating live sessions.
