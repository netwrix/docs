---
title: "Scan GPO Guide (Server 2012 or 2008 Domain Controllers)"
description: "Scan GPO Guide (Server 2012 or 2008 Domain Controllers)"
sidebar_position: 130
---

# Scan GPO Guide (Server 2012 or 2008 Domain Controllers)

Scan GPO Guide (Server 2012 or 2008 Domain Controllers)

# Scan GPO Guide (Server 2012 or 2008 Domain Controllers)

**NOTE:** This GPO should never be applied to domain controllers.  This can break things, like:

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

On the Windows systems where this functionality is enforced, in order for SecureONE to properly
gather the list of local Admins, the SecureONE service account either needs to be a local
administrator of the destination system or the remote system needs to be configured with the proper
permissions to allow the SecureONE service account to have the ability to remotely read the local
admin group.

## Creating the GPO

### Server 2012 or 2008 Domain Controllers\*

**NOTE:** For environments with any 2012 and 2008 domain controllers.  For environments with only
Server 2016 only domain controllers, please see this
article:  [Scan GPO Guide (Server 2016+ Domain Controllers)](/docs/privilegesecurediscovery/requirements/technicalpreparation/scangposerver2016+dcs.md)

Opening the “Group Policy Management Editor” and create or open a policy for the domain.  This GPO
should be applied to servers and workstation to be managed by SecureONE. "Local Admin GPO" policy is
used as an example below. NOTE:  This GPO should never be applied to domain controllers, this can
break things.  Access the required menu by opening the “Group Policy Management Editor” and
unfolding the following menu options:

- **Computer Configuration** > **Preferences** > **Windows Settings** > **Registry** > **Custom Key
  & Property Definition**

Enter the following data into the corresponding fields highlighted in the photo below to set the
GPO:

- Hive: HKEY_LOCAL_MACHINE
- Key path: SYSTEM\CurrentControlSet\Control\Lsa
- Value name: RestrictRemoteSam
- Value type: REG_SZ
- Value data: O:BAG:BAD:(A;;RC;;;BA)(A;;RC;;;S-1-5-21-1366766991-2637077591-3940904154-205982)

The SID in the “Value data” field above will need to be updated with SID of the SecureONE domain
service account being used for scanning.

![image.webp](/images/privilegesecure/4.2/discovery/360022419033_image.webp)

The SID in the “Value data” field above will need to be updated with SID of the SecureONE domain
service account being used for scanning.

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
