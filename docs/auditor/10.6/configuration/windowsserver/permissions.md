---
title: "Permissions for Windows Server Auditing"
description: "Permissions for Windows Server Auditing"
sidebar_position: 120
---

# Permissions for Windows Server Auditing

Before you start creating a monitoring plan to audit your Windows servers (including DNS and DHCP
servers), plan for the account that will be used for data collection – it should meet the
requirements listed below. Then you will provide this account in the monitoring plan wizard (or in
the monitored item settings).

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting
accounts.

The account used for data collection must meet the following requirements on the target servers:

- The "Manage auditing and security log" policy must be defined for this account. See the
  [Permissions for Active Directory Auditing](/docs/auditor/10.6/configuration/activedirectory/permissions.md)
  topic for additional information.
- This account must be a member of the local Administrators group.

## Assign Permission To Read the Registry Key

**NOTE:** This permission is required only if the account selected for data collection is not a
member of the Domain Admins group.

This permission should be assigned on each domain controller in the audited domain, so if your
domain contains multiple domain controllers, it is recommended to assign permissions through Group
Policy.

To assign permissions manually, use the Registry Editor snap-in or the Group Policy Management
console.

### Assign Permission via the Registry Editor Snap-in

Follow the steps to assign permission via the Registry Editor snap-in:

**Step 1 –** On your target server, open Registry Editor: navigate to **Start > Run** and type
_"regedit"_.

**Step 2 –** In the left pane, navigate to _HKEY_LOCAL_MACHINE\SYSTEM\CurrentControl
Set\Services\EventLog\Security_.

**Step 3 –** Right-click the **Security** node and select **Permissions** from the pop-up menu.

**Step 4 –** Click **Add** and enter the name of the user that you want to grant permissions to.

**Step 5 –** Check **Allow** next to the **Read** permission.

**NOTE:** For auditing Logon Activity, you also need to assign the Read permission to the
_HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv_ registry key.

### Assign Permission using the Group Policy Management Console

Follow the steps to assign permission using the Group Policy Management console;

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Registry.

**Step 4 –** Right-click in the pane and select Add Key.

**Step 5 –** Navigate to `HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv` and click OK.

**Step 6 –** Click Add and enter the name of the user that you want to grant permissions to and
press Enter.

**Step 7 –** Check Allow next to the _"Read"_ permission and click OK.

In the pop-up window, select Propagate inheritable permissions to all subkeys and click OK.

Repeat the steps 4-7 for keys below:

- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`;
- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security`.

**Step 8 –** Close Group Policy Management console.

**Step 9 –** Open command prompt and input the `gpupdate /force` command and press Enter. The group
policy will be updated.

**Step 10 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 11 –** Ensure that new GPO settings were applied to the domain controllers.
