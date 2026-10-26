---
title: "Action types reference"
description: "Look up each action type in the Add Action picker, the fields it has, and the matching post-session action that undoes it."
sidebar_position: 50
---

# Action types reference

An action type is a template for one step in an activity. When you add an action, you choose an action type, and the type decides which fields the action has. This page lists the action types and their fields.

The console has no separate Action Types page. Action types appear only in the **Action Type** list of the **Add Action to \<group\>** dialog. To open the list:

1. Select **Activities** in the left navigation pane, and then select an activity.
2. In the action group you want, click the green **+** button. The dialog title shows the group, for example **Add Action to Pre-Session Group**.
3. Open the **Action Type** list.

The list depends only on the action group, not on the activity's platform, so choose an action type that fits the platform. For the steps to add actions, see [Add actions to an activity](/docs/privilegesecure/26.07/configuration/activities/actions.md).

## How action types and actions differ

An action type is the template. An action is a saved instance of that template on one activity. The name of a saved action often differs from the name of its type. For example, an action added from **Add User to Local Group** appears on the activity as **Add to Local Administrators**. When you set **Action Name**, you rename only that action.

Every action type has these fields:

| Field | Description |
|---|---|
| **Continue on Error** | When an error occurs, the activity continues to the next step instead of stopping. |
| **Action Name** | (Optional) The name of the action on the activity. |
| **Paired Action's Name** | (Optional) The name of the paired action. Only action types that have a pair show this field. |

The following tables list the other fields for each action type.

## Paired actions

Many pre-session actions have a paired post-session action that undoes them. When you add the pre-session action, Privilege Secure creates the paired action in the **Post-Session (Remove)** group, and the console shows a linked chain icon on both rows. A grey chain icon means the action has no pair.

You can't change the action type after you create an action. To use a different type, delete the action and add a new one.

## Pre-Session (Grant) action types

| Action type | What it does | Fields | Paired post-session action |
|---|---|---|---|
| **AD Sync With Args** | Replicates the target user object and the groups it belongs to from the primary domain controller (PDC) of the domain to each listed domain controller, so that a group change takes effect without waiting for normal replication. The action runs on the Action Service with the domain's service account and doesn't use Windows Remote Management (WinRM). It fails only if replication fails to every destination. | **Destinations**: comma-separated list of domain controllers to replicate to (required). **Domain**: the domain of the PDC that is the replication source (required). | None |
| **Add ADUC Permission** | Delegates Active Directory Users and Computers rights to the login account on one organizational unit (OU). | **AD Organizational Unit** (required). **AD Object Type**: `user` or `computer` (required). **AD Rights to be Added**: **Update Password Not Required Bit**, **Unexpire Password**, **Change Password**, or **Reset Password** (default). **Domain** (optional). | **Remove ADUC Permission** |
| **Add Salesforce PermissionSet** | Grants a Salesforce permission set to the user for the session. | **Permission Set**, **Consumer Key**, **Private Key**, and **Use sandbox instance**. | **Remove Salesforce PermissionSet** |
| **Add Salesforce PermissionSetGroup** | Grants a Salesforce permission set group to the user for the session. | **Permission Set Group**, **Consumer Key**, **Private Key**, and **Use sandbox instance**. | **Remove Salesforce PermissionSetGroup** |
| **Add Sudoers rule** | Creates a rule file in the `sudoers.d` directory on a Linux resource so the user can run commands with elevated rights. See [Add Sudoers rule](#add-sudoers-rule). | **Run As** (default `root`). **Commands** (default `ALL`). **Prompt for password**. **Username Format**: `Username` or `Username@Domain` (default `Username@Domain`). | **Remove Sudoers rule** |
| **Add to Entra ID Group** | Adds the login account to a Microsoft Entra ID security group. | **Entra ID Security Group** (required). | **Remove from Entra ID Group** |
| **Add to Entra ID Role** | Adds the login account to a Microsoft Entra ID directory role. | **Entra ID Role**. The list includes **Global Administrator** (default), **Application Administrator**, **Helpdesk Administrator**, **User Administrator**, and other built-in roles. | **Remove from Entra ID Role** |
| **Add User to Database Role** | Adds the login account to a role on a database server. | **Database** (optional): the role applies to this database. When blank, the role applies to the database instance. **Role** (required): **sysadmin**, **dbcreator**, **securityadmin**, **DBA**, or **PDB_DBA**. | **Remove User from Database Role** |
| **Add User to Database Server** | Adds the login account to the database server. | None. | **Remove User from Database Server** |
| **Add User to Domain Group** | Adds the login account to a domain group. | **Domain** (required). **Group** (required): **DnsAdmins**, **Domain Admins**, **Enterprise Admins**, **Exchange Organization Administrators**, **Group Policy Creator Owners**, **Organization Management**, or **Schema Admins**. | **Remove User from Domain Group** |
| **Add User to Groups & Roles (User Selected)** | Adds the user to groups or roles that the administrator lists and the user chooses from. A connection to a resource is optional. See [Grant group or role membership without a resource](/docs/privilegesecure/26.07/configuration/activities/group-role-activities.md). | Groups and roles, chosen with the **Select Groups/Roles** button. | **Remove User from Groups & Roles (User Selected)** |
| **Add User to Local Group** | Adds the login account to a local group on the resource. | **Group** (required): **Administrators**, **Backup Operators**, **Event Log Readers**, **Hyper-V Administrators**, **Network Configuration Operators**, or **Remote Desktop Users**. **Domain** (optional). | **Remove User from Local Group** |
| **Create Windows File Share** | Creates a temporary, encrypted SMB share on the Windows resource of the activity. The share is removed after the session ends. | **Windows File Share Name** (required). **Windows File Share Map Path** (required): Privilege Secure creates a folder at this local path as the map for the share. | **Remove Windows File Share** |
| **Enable RDP on Host** | Enables Remote Desktop Protocol (RDP) on the resource. | None. | **Disable RDP on Host** |
| **Enable RDP on Host (not paired)** | Enables RDP on the resource and doesn't create a paired action. | None. | None |
| **Monitor File for Changes** | Records a checksum of a file before the session and compares it after the session. If nothing changed, the action logs an information event. If the file changed or went missing, it logs a warning to the action log and the event log. | **File to Monitor**: the full local path of the file (required). **Fail Pre-session on Missing File**: fail provisioning when the file isn't found. **Fail Post-session on Mismatch**: fail the post-session step when the checksum differs. | **Monitor File for Changes** (pairs with itself) |
| **Purge Kerberos Tickets for Host** | Purges all Kerberos tickets on the resource. | None. | None |
| **Purge Kerberos Tickets for User** | Purges the Kerberos tickets of the login account. | None. | None |
| **Run Custom Powershell Script** | Runs a PowerShell script that you supply. | **Definition**: the script (required). **Domain** (optional). | None |
| **Run Replication** | Runs Active Directory replication on the domain controller closest to the target resource. | None. | None |
| **Run Single Object Replication for User** | Replicates only the target user object. | None. | None |
| **Scan Host for Local Groups** | Scans the local users and groups on the resource. | None. | None |
| **Set Cisco User Privilege** | Sets the privilege level of the login account on a Cisco device. | **Privilege** (required): `1` for standard user rights, `7` for elevated user rights, or `15` for administrator rights. | **Set Cisco User Privilege** (resets the level to `1`) |

Earlier releases named these action types **Add to Azure AD Group** and **Add to Azure AD Role**. An upgrade renames them to **Add to Entra ID Group** and **Add to Entra ID Role**.

The Salesforce actions sign in to Salesforce with the OAuth JWT bearer flow. They sign a token with the **Private Key**, use the **Consumer Key** as the issuer, and use the login account name of the session as the Salesforce user. They then send the add or remove request to the StrongPoint API in the Salesforce org. **Use sandbox instance** sends the sign-in to the Salesforce sandbox login service instead of the production one. The **Permission Set** and **Permission Set Group** fields take any text you type, and the API receives it unchanged.

{/* TODO verify: with the Platform Governance for Salesforce team, or in the FLODocs SbPAM/updatePermissions Apex source, whether the API expects the permission set label or its API name. It is most likely the API name (PermissionSet.Name). The Privilege Secure scripts pass the text through. */}

In **Add User to Domain Group** and **Add User to Local Group**, the **Group** field lists common groups, but you can also enter the name of a group that isn't in the list.

In 26.07.3, Add User to Groups/Roles is the default name of a new Add User to Groups & Roles (User Selected) action, not a separate action type.

## Session (Connect) action types

These action types run while the session is active.

| Action type | What it does | Fields |
|---|---|---|
| **AD Sync With Args** | Replicates the target user object and its groups to the listed domain controllers, as the pre-session action does. | **Destinations** and **Domain** (both required). |
| **Monitor for User Login** | Watches the resource for a login by the user. | None. |
| **Purge Kerberos Tickets for Host** | Purges all Kerberos tickets on the resource. | None. |
| **Purge Kerberos Tickets for User** | Purges the Kerberos tickets of the login account. | None. |
| **Run Custom Powershell Script** | Runs a PowerShell script that you supply. | **Definition** (required). **Domain** (optional). |
| **Run Replication** | Runs Active Directory replication on the domain controller closest to the target resource. | None. |
| **Scan Host for Local Groups** | Scans the local users and groups on the resource. | None. |

## Post-Session (Remove) action types

These action types run after the session ends. The paired actions in this list undo the matching pre-session action. Privilege Secure creates each paired action when you add the pre-session action.

| Action type | What it does | Fields |
|---|---|---|
| **AD Sync With Args** | Replicates the target user object and its groups to the listed domain controllers, as the pre-session action does. | **Destinations** and **Domain** (both required). |
| **Disable RDP on Host** | Disables RDP on the resource. | None. |
| **Invoke Protection Policy** | Runs the protection policies that apply to the session host. The action checks the membership of protected groups and removes unauthorized accounts. You don't select a policy. | None. |
| **Logoff User** | Logs the user off when the session closes. | None. |
| **Monitor File for Changes** | Compares the file with the checksum from before the session. | **File to Monitor**, **Fail Pre-session on Missing File**, and **Fail Post-session on Mismatch**. |
| **Purge Kerberos Tickets for Host** | Purges all Kerberos tickets on the resource. | None. |
| **Purge Kerberos Tickets for User** | Purges the Kerberos tickets of the login account. | None. |
| **Remove ADUC Permission** | Removes the delegated Active Directory rights from the login account. | **AD Organizational Unit**, **AD Object Type**, **AD Rights to be Removed** (default **Reset Password**), and **Domain** (optional). |
| **Remove from Entra ID Group** | Removes the login account from the Microsoft Entra ID security group. | **Entra ID Security Group** (required). |
| **Remove from Entra ID Role** | Removes the login account from the Microsoft Entra ID directory role. | **Entra ID Role** (default **Global Administrator**). |
| **Remove Salesforce PermissionSet** | Removes the Salesforce permission set from the user. | **Permission Set**, **Consumer Key**, **Private Key**, and **Use sandbox instance**. |
| **Remove Salesforce PermissionSetGroup** | Removes the Salesforce permission set group from the user. | **Permission Set Group**, **Consumer Key**, **Private Key**, and **Use sandbox instance**. |
| **Remove Sudoers rule** | Deletes the rule file that **Add Sudoers rule** created in the `sudoers.d` directory. | **Run As**, **Commands**, **Prompt for password**, and **Username Format**. |
| **Remove User from Database Role** | Removes the login account from the database role. | **Database** (optional) and **Role** (required). |
| **Remove User from Database Server** | Removes the login account from the database server. | None. |
| **Remove User from Domain Group** | Removes the login account from the domain group. | **Domain** and **Group**. |
| **Remove User from Groups & Roles (User Selected)** | Removes the user from the groups and roles that the pre-session action added. | Groups and roles, copied from the paired pre-session action. |
| **Remove User from Local Group** | Removes the login account from the local group. | **Group** and **Domain** (optional). |
| **Remove Windows File Share** | Removes the file share that **Create Windows File Share** created. | **Windows File Share Name** and **Windows File Share Map Path**. |
| **Run Custom Powershell Script** | Runs a PowerShell script that you supply. | **Definition** (required). **Domain** (optional). |
| **Run Replication** | Runs Active Directory replication on the domain controller closest to the target resource. | None. |
| **Scan Host for Local Groups** | Scans the local users and groups on the resource. | None. |
| **Set Cisco User Privilege** | Sets the privilege level of the login account back to `1` (standard user rights). | None. |

The Post-Session action list also shows **Command Plan Test**. Privilege Secure uses this action type to run command plan tests. Don't add it to an activity.

## Add Sudoers rule

**Add Sudoers rule** writes a rule file for the login account into the `sudoers.d` directory on a Linux resource. The console label uses a lowercase r in "rule". **Remove Sudoers rule** deletes the file after the session.

| Field | Description |
|---|---|
| **Run As** | The accounts the user can run commands as, for example `oracle, sybase`. The default is `root`. |
| **Commands** | The commands the user can run, separated by commas, or `ALL` for every command on the resource. The default is `ALL`. You can mix sudoers tags into the list. |
| **Prompt for password** | When selected, the user must enter a password to run the elevated commands. This field, not a tag, controls the `PASSWD` and `NOPASSWD` behavior. |
| **Username Format** | The form of the account name in the rule file: `Username` or `Username@Domain`. The default is `Username@Domain`. |

### Sudoers tags in the Commands field

A sudoers tag changes how `sudo` treats the commands that follow it. Enter tags in the **Commands** field before the commands they apply to. Separate tags and commands with commas, or join tags with colons. Each row lists a tag and its opposite.

| Tags | Effect |
|---|---|
| `EXEC`, `NOEXEC` | Allow or block the command from running other programs. `NOEXEC` blocks shell escapes. |
| `SETENV`, `NOSETENV` | Allow or block the user from setting environment variables. |
| `LOG_INPUT`, `NOLOG_INPUT` | Log or don't log the input that the user types. |
| `LOG_OUTPUT`, `NOLOG_OUTPUT` | Log or don't log the command output. |
| `FOLLOW`, `NOFOLLOW` | Follow or don't follow symbolic links when `sudo` checks command paths. |
| `MAIL`, `NOMAIL` | Send or don't send mail when the command runs. |

Example values for **Commands**:

```text
SETENV, LOG_INPUT, sqlplus
SETENV:LOG_INPUT: sqlplus
```

Both entries give the user `sqlplus` with the `SETENV` and `LOG_INPUT` tags.

If you paste a rule from a sudoers example, Privilege Secure ignores a leading `user ALL=(RunAs)` and uses only the tags and commands that follow it.

:::warning
From 26.07.3, the rule limits the user to the **Run As** account.

{/* TODO verify: Support/Security to approve this security-fix wording, and confirm 26.07.2 is affected (no release branch available). */}
:::

If you enter `PASSWD` or `NOPASSWD` in **Commands**, Privilege Secure ignores it and writes a warning to the action log. The warning says that the **Prompt for password** setting controls the behavior. The other tags and the commands still apply.

The action fails in these cases:

- **Commands** contains a tag that isn't in the preceding table. The action log lists the valid tags.
- More than one command has its own colon-joined tags, for example `NOEXEC: /usr/bin/a, SETENV: /usr/bin/b`. This fails even when the tags are the same. To apply tags to several commands, list each tag once followed by the commands, such as `NOEXEC, /usr/bin/a, /usr/bin/b`, or create a separate **Add Sudoers rule** action for each set.

The rule file has a `Runas_Alias` line for **Run As**, a `Cmnd_Alias` line for the commands (omitted when **Commands** is `ALL`), and a line for the login account. The tags go before the commands on that line, and `NOPASSWD:` goes before them when **Prompt for password** is cleared.
