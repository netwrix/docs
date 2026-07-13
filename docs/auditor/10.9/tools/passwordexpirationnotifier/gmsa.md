---
title: "Use a Group Managed Service Account (gMSA)"
description: "Use a group Managed Service Account (gMSA) as the data collecting account for Password Expiration Notifier."
sidebar_position: 5
---

# Use a Group Managed Service Account (gMSA)

Password Expiration Notifier supports a group Managed Service Account (gMSA) as the data collecting account. With a gMSA, Active Directory generates and rotates the password automatically, so you don't maintain a password for the account or rotate it on a schedule.

See the [Use Group Managed Service Account (gMSA)](/docs/auditor/10.9/requirements/gmsa.md) topic for the general prerequisites that apply to every Auditor data source: create the KDS root key, create the gMSA with the `New-ADServiceAccount` cmdlet, install it on the Auditor Server with `Install-ADServiceAccount`, and add it to the local **Administrators** group on the Auditor Server.

After you complete those prerequisites, specify the gMSA in the Password Expiration Notifier monitoring plan.

## Active Directory Permissions

Password Expiration Notifier reads Active Directory user attributes to determine password and account expiration dates. The gMSA needs the following Active Directory permission:

| Permission | Applies to | Purpose |
| ---------- | ---------- | ------- |
| `GenericRead` | User objects in the target OUs | Read `pwdLastSet`, `msDS-UserPasswordExpiryTimeComputed`, `accountExpires`, `userAccountControl`, `mail`, `manager`, `sAMAccountName`, and related attributes |

:::note
In a default Active Directory configuration, the built-in **Authenticated Users** group has read access to user objects, and a gMSA inherits that access. No additional delegation is usually required. If read access was restricted in your domain (for example, by removing **Authenticated Users** from an OU's ACL), grant the gMSA membership in a group that has read access to the target OUs, or delegate read permissions to the gMSA directly through Active Directory Users and Computers.
:::

## Specify the gMSA in the Monitoring Plan

To use the gMSA in a Password Expiration Notifier monitoring plan:

**Step 1 –** On the Auditor Server, launch Password Expiration Notifier and open an existing monitoring plan for editing, or create a new one. See the [Configure Password Expiration Alerting](/docs/auditor/10.9/tools/passwordexpirationnotifier/overview.md#configure-password-expiration-alerting) section for the full monitoring plan procedure.

**Step 2 –** On the **General** tab, in the **User name** field, enter the gMSA account name in one of the supported formats:

- `<domain>\<gmsa-name>$` — NetBIOS domain name and `sAMAccountName`, for example `CONTOSO\penGmsa$`. This format is recommended.
- `<gmsa-name>$@<domain-fqdn>` — UPN format, for example `penGmsa$@contoso.local`.

The trailing `$` is required. Password Expiration Notifier uses the `$` to recognize the account as a gMSA and switch to the appropriate authentication path.

**Step 3 –** Leave the **Password** field as it is. When you enter a gMSA name, the field is locked automatically and displays `(Managed by Active Directory)`. Active Directory manages the password, so there is nothing to enter.

**Step 4 –** Complete the remaining tabs of the monitoring plan and click **Save**.

When you save the monitoring plan, Password Expiration Notifier creates a Windows scheduled task that runs the data collection under the `NT AUTHORITY\SYSTEM` account. The scheduled task performs the actual data collection and sends the notifications.

## Limitations

:::warning
The **Select OUs**, **Select Groups**, and **Generate** buttons in the Password Expiration Notifier UI don't work when a gMSA is configured. These buttons issue an LDAP request at the time you click them from the interactive session of the user who launched Password Expiration Notifier, and gMSA impersonation isn't supported in interactive sessions. Use the scheduled task and the email reports to view password expiration data when the monitoring plan uses a gMSA.
:::

## Troubleshooting

The following table lists common issues you may encounter when configuring a gMSA for Password Expiration Notifier.

| Symptom | Likely cause | Resolution |
| ------- | ------------ | ---------- |
| `Cannot find an account...` error when specifying the account | The gMSA name was entered without the trailing `$` or with the wrong domain. | Use the `<domain>\<gmsa-name>$` format, for example `CONTOSO\penGmsa$`. |
| The **Select OUs**, **Select Groups**, or **Generate** buttons don't work; the log shows `failed to create impersonation token` | Known gMSA limitation in interactive sessions. | See the Limitations section. Use the scheduled task and email reports instead. |
