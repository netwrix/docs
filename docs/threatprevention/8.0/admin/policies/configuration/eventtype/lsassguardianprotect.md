---
title: "Process Guardian – Protect"
description: "Process Guardian – Protect Event Type"
sidebar_position: 200
---

# Process Guardian – Protect Event Type

Based on policy rules, the Process – Protect event type can prevent processes not ‘white
listed’ from accessing LSASS or any other custom process by preventing the Write, Read,
Create Thread, Suspend/Resume, Terminate, and/or Create Process operations. An event
is generated for each prevented access attempt with details about the process and as it’s attempted
versus actual access allowed.

The event filters for the Process Guardian – Protect event type are:

- AD Perpetrator
- Domains/Servers
- Target Processes
- Requesting Processes
- Open Process Flags

![Policy window - LSASS Guardian – Protect Event Type](/images/threatprevention/8.0/admin/policies/eventtype/lsassprotect.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific
security principals committing changes or to exclude specific security principals committing changes
from being locked down.

![AD Perpetrator Protect filter](/images/threatprevention/8.0/admin/policies/eventtype/adperpetratorprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.


Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or
to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](/images/threatprevention/8.0/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the [Select Domains and Servers Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/selectdomainsservers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::

## Target Processes Filter

Use the Target Processes filter to set the scope of the policy to lockdown access to the Lsass process or any other process.


![Target Processes Protect filter](/images/threatprevention/8.0/admin/policies/eventtype/targetprocesseslockdown.webp)


- Select **Lsass** to lockdow Lsass process access.
- Select **Custom Process** to lockdown any other process access.

For the Custom Process option type the process name in the textbox. Use the
buttons in the process list area to edit the list.

- The Process **Add** (+) button adds a textbox to the list to add an additional process.
- The Remove (x) button deletes the selected item(s) from that box.


## Requesting Processes Filter

Use the Requesting Processes filter to set the scope of the policy to only lockdown specific processes or
exclude specific processes from being locked down.


![Policy window - Requesting Processes filter](/images/threatprevention/8.0/admin/policies/eventtype/processesprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.

Type the process in the textbox. Use the buttons above the box to edit the list.

- The **Add** (+) button adds a textbox to the list to add an additional process.
- The Remove (x) button deletes the selected item(s) from that box.


:::note
- While you can select to **Block** processes, it is _not recommended_ for locking down target process.
  Adding a process block filter will limit the policy to only block that requesting process. Unknown malicious
  processes would not be blocked by the policy.
- While you can select to **Allow** processes, it is possible that a malicious process could be
  renamed to the same as an “allowed” process. Therefore, the malicious process would not be
  blocked.
:::


## Open Process Flags Filter

Use the Open Process Flags filter to set the scope of the policy for requested handles that would
maliciously impact target process.

![openprocessflagsmonitoring](/images/threatprevention/8.0/admin/policies/eventtype/openprocessflagsmonitoring.webp)

Check the box to select the process flag(s) to be removed from the target process handle that is returned to
the requesting process.


- PROCESS_VM_WRITE – Select this checkbox to write to memory in a process
- PROCESS_CREATE_THREAD – Select this checkbox to create a thread
- PROCESS_VM_READ – Select this checkbox to report if the calling process, such as an application,
  wants to read process memory
  - Among other things, this would prevent the creation of an Process memory dump file by Task Manager or
    other processes.
- PROCESS_SUSPEND_RESUME – Select this checkbox to suspend or resume a process
- PROCESS_TERMINATE – Select this checkbox to terminate a process
- PROCESS_CREATE_PROCESS – Select this checkbox to create a process, for example by cloning an existing one.


:::note
Process Guardian Protect does not fully block an operation like other lockdown policies. It
allows the handle request to complete, but the handle returned will have the specified flags
removed.

:::
