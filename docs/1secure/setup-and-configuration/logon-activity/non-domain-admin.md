---
title: "Configure Non-administrative Account To Collect Logon Activity"
sidebar_label: "Configure Non-administrative Account To"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Configure Non-Administrative Account to Collect Logon Activity

This section contains instructions on how to configure an account to collect Logon Activity with
minimum rights assignment. The instructions below apply only if you are going to set a source with
disabled network traffic compression and do not want to adjust audit settings automatically. Do the
following:

Before creating an account, grant the _Read_ permission on the SECURITY registry key
`(HKEY_LOCAL_MACHINE\SECURITY)` for an admin account under which you will make changes in Group
Policy.

Do the following:

**Step 1 –** Create a domain user with the following privileges:

- Back up files and directories.
  [Configure the Back up Files and Directories Policy](/docs/1secure/setup-and-configuration/computers/index.md)
- Log on as a batch job. [Define Log On As a Batch Job Policy](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md)
- Manage auditing and security log.
  [Configure the Manage Auditing and Security Log Policy](/docs/1secure/setup-and-configuration/active-directory/audit-policies.md)

**Step 2 –** Grant the _Read_ permission on the following registry keys to this user:

- `HKEY_LOCAL_MACHINE`\SECURITY\Policy\PolAdtEv
- `HKEY_LOCAL_MACHINE`\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg
- `HKEY_LOCAL_MACHINE`\SYSTEM\CurrentControlSet\Services\EventLog\Security

[Assigning Permission To Read the Registry Key](/docs/1secure/setup-and-configuration/active-directory/permissions-and-access.md) how
to do it using Registry Editor.
