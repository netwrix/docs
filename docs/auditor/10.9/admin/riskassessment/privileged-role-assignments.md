---
title: "Users with Privileged Role Assignments Risk"
description: "Learn what the privileged role assignments risk measures and how to review the flagged users in the drill-down report."
sidebar_position: 40
---

# Users with privileged role assignments risk

The **Users with privileged role assignments** risk shows the percentage of enabled Microsoft Entra ID users who hold at least one privileged role. Users with privileged roles can manage tenant-wide settings, identities, and permissions, so each such account widens the impact of a compromise. Use the risk to keep privileged role assignments to the minimum required and to remove assignments that are no longer needed.

The risk appears in the **Permissions** category of the Risk assessment dashboard.

## How the risk is calculated

```text
Enabled users with at least one privileged role assignment / Enabled Entra ID users × 100
```

| Risk level | Default threshold |
|---|---|
| Low | 0%–2% |
| Medium | 2%–3% |
| High | 3%–100% |

To change the thresholds, see [IT Risk Assessment Dashboard](/docs/auditor/10.9/admin/riskassessment/dashboard.md).

### Privileged roles

A role counts as privileged when it contains one or more privileged permissions, as Microsoft defines them. Microsoft marks these roles with the **PRIVILEGED** label in the Microsoft Entra admin center. Privileged permissions are permissions that can delegate management of directory resources to other users, modify credentials, change authentication or authorization policies, or access restricted data.

The classification applies to built-in roles and to custom roles. A custom role is privileged when you add a privileged permission to it. For the list of privileged permissions, see [Privileged roles and permissions in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/privileged-roles-permissions).

### Users and assignments that count

- **Users only.** The risk counts and the report shows role assignments held by users. Service principals that hold directory roles are excluded.
- **Enabled users only.** Disabled users aren't counted or shown.
- **Group-based assignments.** A role assigned to a group counts for each user who is a member of that group.
- **Each user once.** A user can hold the same role directly and through several groups. The risk counts that user once. The drill-down report shows each assignment path as a separate row.

**Example:** A user holds the Global Administrator role directly, through Group A, and through Group B. The risk counts the user once. The drill-down report shows three rows for the user: **Direct**, **Group: Group A**, and **Group: Group B**.

### Active and eligible assignments

Microsoft Entra Privileged Identity Management (PIM) supports two kinds of role assignments:

- **Active** — The user holds the role now.
- **Eligible** — The user can activate the role when needed but doesn't hold it until activation.

By default, the risk and the drill-down report include active assignments only. How risky an eligible assignment is depends on your PIM policies, so you can include eligible assignments in the risk, in the report, or in both. The risk setting and the report filter are independent. Changing one doesn't change the other.

:::note
Eligible assignments are available only in tenants with a Microsoft Entra ID Premium P2 (P2) license. In a tenant without that license, Netwrix Auditor counts active assignments only, and the **Include eligible assignments** setting has no effect. A missing license isn't treated as an error.
:::

## Requirements

- A Microsoft Entra ID monitoring plan with at least one item and the **Collect data for state-in-time reports** option turned on. See [IT Risk Assessment Overview](/docs/auditor/10.9/admin/riskassessment/overview.md) for instructions.
- Application permissions for the Microsoft Entra ID app. A tenant without a P2 license needs no extra permission. A tenant with a P2 license needs two additional permissions. See [Permissions for Microsoft Entra ID Auditing](/docs/auditor/10.9/configuration/microsoft365/microsoftentraid/permissions/permissions.md).

National clouds, such as "US Government" and China, are supported.

## Include eligible assignments in the risk

1. In the main window of Netwrix Auditor, click the **Risk assessment** tile.
2. In the **Permissions** category, select **Users with privileged role assignments**.
3. On the right, click **Customize risk indicators**.
4. Select the **Include eligible assignments** checkbox and click **OK**.

The setting is off by default. Click **Restore Defaults** in the dialog to turn it off again. The change applies after the next data collection.

## View the drill-down report

The drill-down report lists the users that the risk flags, the roles they hold, and how each role was assigned. Use it to review privileged access and to find assignments to remove.

1. In the main window of Netwrix Auditor, click the **Risk assessment** tile.
2. In the **Permissions** category, select **Users with privileged role assignments**.
3. Double-click the metric or click **View Report**.

The report is titled **Users with Privileged Role Assignments (Entra ID)**. It contains one row for each combination of user, role, scope, and assignment path.

### Columns

| Column | Description |
|---|---|
| User | Display name of the user. Shows the user principal name (UPN) when the user has no display name. |
| UPN | User principal name of the user. |
| Role | Name of the privileged role. |
| Assignment type | **Active** or **Eligible**. |
| Assigned via | **Direct**, or `Group: <group-name>` when the user holds the role through group membership. Shows the group ID in place of the name when the group name isn't available. |
| Scope type | The type of object that the assignment applies to: **Directory**, **Administrative unit**, **Application**, **Service principal**, **User**, **Group**, **Device**, or **Object**. |
| Scope | Name of the object that the assignment applies to. Shows **MSFT** for the directory scope, and the scope ID when the name can't be resolved. |
| Expiration date (UTC) | Date and time the assignment ends, in UTC. Shows **Permanent** when the assignment doesn't expire. |

The report sorts rows by item, then by user, then by role, then by assignment path.

### Filters

In addition to the **Monitoring Plan** and **Item** filters, the report has the following filters, in this order:

| Filter | Description | Default |
|---|---|---|
| **Include eligible assignments** | Set to **Yes** to add eligible assignments to the report. | **No**. The report shows active assignments only. |
| **UPN** | Shows only users whose UPN matches the pattern. The match isn't case-sensitive. | `%`, which shows all users. |
| **Role** | Shows only assignments of roles whose name matches the pattern. The match isn't case-sensitive. Example: `%admin%` | `%`, which shows all roles. |

Use `%` as a wildcard in the **UPN** and **Role** filters.
