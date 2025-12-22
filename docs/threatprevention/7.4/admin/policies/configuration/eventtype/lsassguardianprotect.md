---
title: "LSASS Guardian – Protect Event Type"
description: "LSASS Guardian – Protect Event Type"
sidebar_position: 200
---

# LSASS Guardian – Protect Event Type

Based on policy rules, the LSASS Guardian – Protect event type can prevent processes not ‘white
listed’ from accessing LSASS by preventing the Write, Read and/or Create Thread operations. An event
is generated for each prevented access attempt with details about the process and as it’s attempted
versus actual access allowed.

The event filters for the LSASS Guardian – Protect event type are:

- AD Perpetrator
- Domains/Servers
- Processes
- Open Process Flags

![Policy window - LSASS Guardian – Protect Event Type](/images/threatprevention/7.4/admin/policies/eventtype/lsassprotect.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


:::info
Add exclusion process filters for undesired processes that make changes to LSASS,
e.g. third-party malware applications.
:::


## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific
security principals committing changes or to exclude specific security principals committing changes
from being locked down.

![AD Perpetrator Protect filter](/images/threatprevention/7.4/admin/policies/eventtype/adperpetratorprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.

:::note
For the
[Password Enforcement Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md),
selecting **Allow** means that this policy will not validate the new passwords for the accounts
listed here. Selecting **Block** means that this policy will validate the new passwords for the
accounts listed here.
:::


Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the
[Dynamic Collections](/docs/threatprevention/7.4/admin/configuration/collectionmanager/dynamic.md)
topic for additional information.
:::


## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or
to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](/images/threatprevention/7.4/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the
  [Select Domains and Servers Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/selectdomainsservers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.4/admin/configuration/collectionmanager/listcollections.md)
  to the appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the
[Dynamic Collections](/docs/threatprevention/7.4/admin/configuration/collectionmanager/dynamic.md)
topic for additional information.
:::


## Processes Filter

Use the Processes filter to set the scope of the policy to only lockdown specific processes or
exclude specific processes from being locked down.

:::info
Add undesired processes that make changes to LSASS, e.g. third-party malware
applications, to the Allow list.
:::


![Policy window - Processes filter](/images/threatprevention/7.4/admin/policies/eventtype/processesprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.

Type the process in the textbox. Use the buttons above the box to edit the list.

- The **Add** (+) button adds a textbox to the list to add an additional process.
- The Remove (x) button deletes the selected item(s) from that box.

:::warning
Leave this filter blank:
:::


- While you can select to **Block** processes, it is _not recommended_ for locking down LSASS.
  Adding a process block filter will limit the policy to only block that process. Unknown malicious
  processes would not be blocked by the policy.
- While you can select to **Allow** processes, it is possible that a malicious process could be
  renamed to the same as an “allowed” process. Therefore, the malicious process would not be
  blocked.

## Open Process Flags Filter

Use the Open Process Flags filter to set the scope of the policy for requested handles that would
maliciously impact LSASS.

![openprocessflagsmonitoring](/images/threatprevention/7.4/admin/policies/eventtype/openprocessflagsmonitoring.webp)

Check the box to select the process flag(s) to be removed from the LSASS handle that is returned to
the requesting process.

- PROCESS_VM_WRITE – Select this checkbox to write to memory in a process
- PROCESS_CREATE_THREAD – Select this checkbox to create a thread
- PROCESS_VM_READ – Select this checkbox to remove the read flag
  - Among other things, this would prevent the creation of an LSASS dump file by Task Manager or
    other processes.

:::info
Leave these filters enabled. Do not deselect these options.
:::


:::note
LSASS Guardian Protect does not fully block an operation like other lockdown policies. It
allows the handle request to complete, but the handle returned will have the specified flags
removed.

:::
