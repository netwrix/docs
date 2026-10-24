---
title: "Give auditors read-only console access"
description: "Let auditors see every Privilege Secure administration page without changing anything by assigning the Admin View Read Only permission."
sidebar_position: 40
---

# Give auditors read-only console access

**Admin View Read Only** is a permission. It appears in the permission list of the Auditors target, next to **Reporting**. A user who holds it sees every administration page in the console but can't change anything. Use it for auditors who need to inspect the configuration, sessions, and reports without any risk of changing them.

## How it behaves

- The user sees the same administration pages as an Administrator, including **Users & Groups**, **Resources**, **System Settings**, and **Auditing & Reporting**.
- The console shows the banner "You are in read-only mode. Changes are not permitted." Controls that change data are disabled and show a tooltip. {/* TODO verify: the exact banner text, which controls are disabled, and what a blocked save returns. Not tested in the lab because no read-only user was available. */}
- The permission takes precedence over the Administrator role. A person who holds both the Administrator role and **Admin View Read Only** gets read-only access.
- The **Log Files** page doesn't show the **Options** (gear) icon.

:::warning
Don't give **Admin View Read Only** to an Administrator who needs to make changes. The permission overrides the Administrator role. {/* TODO verify: precedence on a test user who is both an Administrator and holds this permission. The code and the 26.07.3 release note say read-only wins. A Jira retest comment says the user keeps Administrator rights. */}
:::

### What a read-only user can still do

A few actions stay available because auditors need them:

- Register for multi-factor authentication (MFA).
- Lock or terminate a live session, and replay a recorded session, within the scope of the role. See [Watch, lock, or terminate a live session](/docs/privilegesecure/26.07/admin/sessions/live-session-viewer.md) and [Replay a recorded session](/docs/privilegesecure/26.07/admin/sessions/replay-viewer.md).
- Create, save, delete, run, favorite, and subscribe to reports. See [Reports and subscriptions](/docs/privilegesecure/26.07/admin/audit-reporting/reports.md).
- Download reports and exports.

{/* TODO verify: the list of actions that stay available, from the product code. Confirm each one on a read-only test user. */}

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

{/* TODO screenshot: the Permission Assignment list of an Auditors custom role with Admin View Read Only and Reporting assigned */}

If you later remove **Reporting**, Privilege Secure also removes **Admin View Read Only**.

{/* TODO verify: tooltip text on Admin View Read Only */}

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
