---
title: "Configure Non-Administrative Account to Collect Logon Activity"
description: "Configure Non-Administrative Account to Collect Logon Activity"
sidebar_position: 10
---

# Configure Non-Administrative Account to Collect Logon Activity

This section contains instructions on configuring an account to collect Logon Activity with
minimum rights assignment. These instructions apply only if you are configuring a source with
network traffic compression disabled and you don't want to adjust audit settings automatically.

Before creating an account, grant the _Read_ permission on the SECURITY registry key
`(HKEY_LOCAL_MACHINE\SECURITY)` for the admin account you use to make changes in Group Policy.

**Step 1 –** Create a domain user with the following privileges:

- Back up files and directories.
  [Configure the Back up Files and Directories Policy](/docs/1secure/admin/datacollection/computer/backupfilesdirectories.md)
- Access this computer from the network$. See the. [Configure Access this computer from the network Policy](/docs/1secure/admin/datacollection/logonactivity/nonadminaccount/networkaccess/networkaccess.md)
- Manage auditing and security log.
  [Configure the Manage Auditing and Security Log Policy](/docs/1secure/admin/datacollection/activedirectoryauditing/manageauditingsecuritylog.md)

**Step 2 –** Grant the _Read_ permission on the following registry keys to this user:

- `HKEY_LOCAL_MACHINE`\SECURITY\Policy\PolAdtEv
- `HKEY_LOCAL_MACHINE`\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg
- `HKEY_LOCAL_MACHINE`\SYSTEM\CurrentControlSet\Services\EventLog\Security

See [Assigning Permission To Read the Registry Key](/docs/1secure/admin/datacollection/activedirectoryauditing/permissionsregistrykeys.md) for instructions on using Registry Editor.
