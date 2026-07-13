---
title: "Use a Group Managed Service Account (gMSA)"
description: "Use a group Managed Service Account (gMSA) as the data collecting account for Inactive User Tracker."
sidebar_position: 20
---

# Use a Group Managed Service Account (gMSA)

Inactive User Tracker supports a group Managed Service Account (gMSA) as the data collecting account. With a gMSA, Active Directory generates and rotates the password automatically, so you do not maintain a password for the account or rotate it on a schedule.

See the [Use Group Managed Service Account (gMSA)](/docs/auditor/10.9/requirements/gmsa.md) topic for the general prerequisites that apply to every Auditor data source: create the KDS root key, create the gMSA with the `New-ADServiceAccount` cmdlet, install it on the Auditor Server with `Install-ADServiceAccount`, and add it to the local **Administrators** group on the Auditor Server.

After you complete those prerequisites, delegate the Active Directory permissions described below and specify the gMSA in the Inactive User Tracker monitoring plan.

:::note
The [Data Collecting Account](/docs/auditor/10.9/admin/monitoringplans/dataaccounts.md) topic lists membership in the Domain Admins group as the requirement for Inactive User Tracker. As an alternative, you can delegate only the minimum Active Directory permissions that correspond to the actions enabled in the monitoring plan. Adding the gMSA to the Domain Admins group is not required if you delegate the permissions described in this topic.
:::

## Minimum Active Directory Permissions

Delegate only the permissions that match the actions enabled in the Inactive User Tracker monitoring plan. The Read permission is always required; the rest depend on the actions you enable on the **Actions** tab of the monitoring plan.

| Action enabled in the monitoring plan | Required Active Directory permissions |
| ------------------------------------- | ------------------------------------- |
| Reporting only on inactive accounts (no automated actions) | `GenericRead` on user and computer objects in the target OUs |
| Set random password after | Read + the `Reset Password` extended right on user objects |
| Disable accounts after | Read + `WriteProperty` on the `userAccountControl` attribute of user and computer objects |
| Move to a specific OU after | Read + `DeleteChild` (user, computer) on the source OU + `CreateChild` (user, computer) on the destination OU |
| Delete accounts after | Read + `Delete` on user and computer objects + `DeleteChild` (user, computer) on the parent container |
| Delete account with all its subnodes | All of the permissions for Delete accounts after, plus the `DeleteTree` standard right on user and computer objects |

:::note
The `Reset Password` extended right applies to user objects only. Computer accounts are not affected by the Set random password after action.
:::

## Delegate the Permissions

Use the Delegation of Control Wizard in Active Directory Users and Computers (ADUC) to grant the required permissions to the gMSA. Run the wizard on a domain controller or from a machine with RSAT installed, under a Domain Admin account.

Repeat the following steps for each OU that contains accounts Inactive User Tracker will process.

**Step 1 –** Open **Active Directory Users and Computers**, right-click the target OU, and select **Delegate Control**.

**Step 2 –** On the **Users or Groups** page, click **Add** and enter the gMSA name (for example, `iutGmsa$`). Click **Next**.

**Step 3 –** Select **Create a custom task to delegate** and click **Next**.

**Step 4 –** Select **Only the following objects in the folder**, check **User objects** and **Computer objects** (where applicable per the table above), and click **Next**.

**Step 5 –** On the **Permissions** page, check the permissions that correspond to the actions enabled in your monitoring plan. Refer to the table above to map each action to the required permission.

**Step 6 –** Click **Next**, then **Finish**.

If the monitoring plan uses the **Move to a specific OU after** action, repeat the wizard on the destination OU and grant `CreateChild` for user and computer objects to the gMSA.

## Specify the gMSA in the Monitoring Plan

Follow the steps to use the gMSA in an Inactive User Tracker monitoring plan.

**Step 1 –** On the Auditor Server, launch Inactive User Tracker and open an existing monitoring plan for editing, or create a new one. See the [Create Monitoring Plan to Audit Inactive Users](/docs/auditor/10.9/tools/inactiveusertracker/inactiveusertracker.md#create-monitoring-plan-to-audit-inactive-users) section for the full monitoring plan procedure.

**Step 2 –** On the **General** tab, in the **User name** field, enter the gMSA account name in one of the supported formats:

- `<domain>\<gmsa-name>$` — NetBIOS domain name and `sAMAccountName`, for example `CONTOSO\iutGmsa$`. This format is recommended.
- `<gmsa-name>$@<domain-fqdn>` — UPN format, for example `iutGmsa$@contoso.local`.

The trailing `$` is required. Inactive User Tracker uses the `$` to recognize the account as a gMSA and switch to the appropriate authentication path.

**Step 3 –** Leave the **Password** field as it is. When you enter a gMSA name, the field is locked automatically and displays `(Managed by Active Directory)`. Active Directory manages the password, so there is nothing to enter.

**Step 4 –** Complete the remaining tabs of the monitoring plan and click **Save**.

When you save the monitoring plan, Inactive User Tracker creates a Windows scheduled task that runs the data collection under the `NT AUTHORITY\SYSTEM` account. The scheduled task performs the actual data collection and any enabled actions on inactive accounts.

## Limitations

:::warning
The **Generate report**, **Filter by OU**, and **Browse OU** buttons in the Inactive User Tracker UI do not work when a gMSA is configured. These buttons issue an LDAP request at the time you click them from the interactive session of the user who launched Inactive User Tracker, and gMSA impersonation is not supported in interactive sessions. Use the scheduled task and the email reports to view inactive account data when the monitoring plan uses a gMSA.
:::

## Troubleshooting

| Symptom | Likely cause | Resolution |
| ------- | ------------ | ---------- |
| `Cannot find an account...` error when specifying the account | The gMSA name was entered without the trailing `$` or with the wrong domain. | Use the `<domain>\<gmsa-name>$` format, for example `CONTOSO\iutGmsa$`. |
| The **Generate report**, **Filter by OU**, or **Browse OU** buttons do not work | Known gMSA limitation in interactive sessions. | See the Limitations section. Use the scheduled task and email reports instead. |
