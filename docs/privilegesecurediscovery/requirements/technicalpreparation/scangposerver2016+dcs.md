---
title: "Scan GPO Guide (Server 2016+ Domain Controllers)"
description: "Scan GPO Guide (Server 2016+ Domain Controllers)"
sidebar_position: 70
---

# Scan GPO Guide (Server 2016+ Domain Controllers)

Scan GPO Guide (Server 2016+ Domain Controllers)

# Scan GPO Guide (Server 2016+ Domain Controllers)

**CAUTION:** **This GPO should never be applied to domain controllers. This can break things.** For
example:

- Terminal services (Remote access to endpoints)
- Anything that enumerates the SAM database on the Domain Controller

Starting with Windows 2016 Server & Windows 10 Creators Edition or later, Microsoft has by default
restricted the ability to remotely enumerate members of local groups including the local
Administrator group. Older operating systems can also be configured with this same functionality,
which applies to the operating systems below:

- Windows 10, version 1607 and later
- Windows 10, version 1511 with KB 4103198 installed
- Windows 10, version 1507 with KB 4012606 installed
- Windows 8.1 with KB 4102219 installed
- Windows 7 with KB 4012218 installed
- Windows Server 2016
- Windows Server 2012 R2 with KB 4012219 installed
- Windows Server 2012 with KB 4012220 installed
- Windows Server 2008 R2 with KB 4012218 installed

On the Windows systems where this functionality is enforced, in order for Privilege Secure to
properly gather the list of local Admins, the Privilege Secure service account either needs to be a
local administrator of the destination system or the remote system needs to be configured with the
proper permissions to allow the Privilege Secure service account to have the ability to remotely
read the local admin group.

This document describes the procedure to create a GPO to centrally deploy non-admin level
permissions that allows the Privilege Secure service account to collect local administrator group
members.

## Creating the GPO

### Server 2016+ Domain Controllers\*

**NOTE:** For environments with any 2012 and 2008 domain controllers, please see this article:

- [Scan GPO Guide (Server 2012 or 2008 Domain Controllers)](/docs/privilegesecurediscovery/requirements/technicalpreparation/scangposerver2012or2008dcs.md)

Opening the “Group Policy Management Editor” and create or open a policy for the domain.  This GPO
policy should be applied to servers and workstation to be managed by Privilege Secure.  "Privilege
Secure GPO" policy is used as example below.

**NOTE:** This GPO should never be applied to domain controllers, this can break things.

**Step 1 –** Navigate to: **Computer Configuration** > **Policies** > **Windows Settings** >
**Security Settings** >  
**Local Policies** > **Security Options**

**Step 2 –** Locate the "Network access: Restrict clients allowed to make remote calls to SAM" in
the left Policy pane.

**Step 3 –** Double-click to open the policy and click the **Edit Security** button.

**Step 4 –** Click the **Add** button, then enter the Privilege Secure account name being used for
scans.

**Step 5 –** Click the **Check Names** button.

**Step 6 –** Click the **OK** button.

**Step 7 –** Verify that **Remote Access** is checked and click the **OK** button.

For more information, please
see:  [Microsoft: Restrict clients allowed to make remote calls to SAM](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/network-access-restrict-clients-allowed-to-make-remote-sam-calls)

Command line to check for this registry  value on endpoints:

```
reg query HKLM\SYSTEM\CurrentControlSet\Control\Lsa /v restrictremotesam
```

## Troubleshooting

Undoing Changes if GPO was Mistakenly Applied to Domain Controller(s)

If the policy was added to domain controller(s) by mistake, to remove this setting:

- Undo the GPO changes:

    - If a new GPO was created, unlink from location where it can apply to domain controller(s)
    - If an existing GPO that applies to domain controller(s) was edited, undo the changed

- Force a Group Policy update on the domain controllers(s) via a command line with:

    - gpupdate /force

- Delete this registry key from all affected domain controllers:

    - HKLM\SYSTEM\CurrentControlSet\Control\Lsa\restrictremotesam
