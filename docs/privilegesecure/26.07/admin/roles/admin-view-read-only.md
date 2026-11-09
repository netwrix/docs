---
title: "Give auditors read-only console access"
description: "Let auditors see every Privilege Secure administration page without changing anything by assigning the Admin View Read Only permission."
sidebar_position: 40
---

# Give auditors read-only console access

**Admin View Read Only** is a permission. It appears in the permission list of the Auditors target, next to **Reporting**. A user who holds it sees every administration page in the console but can't change anything. Use it for auditors who need to inspect the configuration, sessions, and reports without any risk of changing them.

## How it behaves

- The user sees the same administration pages as an Administrator, including **Users & Groups**, **Resources**, **System Settings**, and **Auditing & Reporting**.
- The console shows the banner "You are in read-only mode. Changes are not permitted." Buttons that change data are disabled, and their tooltip reads "Not available in read-only mode". If a change reaches the server anyway, the server refuses it with the error "This account has read-only access and cannot perform write operations." (HTTP 403).
- The permission takes precedence over the Administrator role. A person who holds both the Administrator role and **Admin View Read Only** gets read-only access.
- The **Log Files** page doesn't show the **Options** (gear) icon.

:::warning
Don't give **Admin View Read Only** to an Administrator who needs to make changes. The permission overrides the Administrator role.
:::

### What a read-only user can still do

Privilege Secure blocks every change request (create, update, and delete) from a read-only user, except for these actions, which auditors need. Requests that only read data stay open.

- Register for multi-factor authentication (MFA).
- Lock or terminate a live session, and replay a recorded session, within the scope of the role. See [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md) and [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md).
- Create, save, delete, run, favorite, and subscribe to reports, and send a report to a subscriber. See [Reports and subscriptions](/docs/privilegesecure/26.07/admin/audit-reporting/reports.md).
- Download reports and exports.

## Prerequisites

- You're signed in as an Administrator.
- The auditors are on the **Users & Groups** page. See [Add domain users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md).

## Assign the permission

You can add **Admin View Read Only** to the built-in Auditors role or to a custom role with the Auditors target. Use a custom role. The built-in Auditors role applies to everyone who holds it, so adding the permission there makes all of those users read-only.

1. In the left navigation, select **Users & Groups** > **Role Management**.
2. Select **+** (**Add Role**).
3. In **Enter Role Name**, enter a name, for example `Read-only auditors`.
4. Set **Target** to **Auditors**, and select **Save**.
5. In **Permission Assignment**, select **Admin View Read Only** and move it to the assigned column. Privilege Secure adds **Reporting** automatically.
6. Select the **Users** tab, and then select **All Users**, or add the users whose sessions the auditors can see.
7. Select the **Resources** tab, and then select **All Resources**, or add the resources the auditors can see.
8. Select **Add Role Users**, choose the auditors, and select **Add**.

Read-only users still need session scope. Without **All Users** and **All Resources**, they see only the sessions of the users and resources you add on the **Users** and **Resources** tabs.

![The Permission Assignment list of the Auditors role, which includes Admin View Read Only and Reporting.](/images/privilegesecure/26.07/admin/admin-view-read-only-permissions.webp)

If you later remove **Reporting**, Privilege Secure also removes **Admin View Read Only**.

Hover over **Admin View Read Only** to see this tooltip: *"Admin View Read Only" may overrule permissions granted by other custom roles assigned to the same user.*

Privilege Secure locks a permission in two cases and explains why in its tooltip. The tooltips still use the former permission name, "Auditing and Reporting", for **Reporting**:

- When you select **Reporting** for removal, **Admin View Read Only** is locked with this tooltip: *"Admin View Read Only" will be removed automatically because it requires "Auditing and Reporting".*
- While **Admin View Read Only** is selected to be added, **Reporting** is locked with this tooltip: *"Auditing and Reporting" is required by "Admin View Read Only".*

## Example: read-only access for the compliance team

Give the compliance team a view of all sessions and settings, with no ability to change them.

1. Create the role `Compliance read-only` with **Target** set to **Auditors**.
2. Assign **Admin View Read Only**. **Reporting** is added with it.
3. On **Users**, select **All Users**. On **Resources**, select **All Resources**.
4. Add the compliance team group with **Add Role Users**.

When a team member signs in, the read-only banner appears at the top of the console.

## Related topics

- [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md)
- [Auditing and reporting overview](/docs/privilegesecure/26.07/admin/audit-reporting/audit-reporting.md)
