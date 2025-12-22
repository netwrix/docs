---
title: "LSASS Guardian Tab"
description: "LSASS Guardian Tab"
sidebar_position: 50
---

# LSASS Guardian Tab

The LSASS Guardian tab allows users to modify settings that were populated with the information
entered when the host was added to prevent, monitor, or block LSASS code injections.

![Operations Tab in the LSASS Guardian Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

After checking the Enable LSASS Guardian box, the following event filters can be modified on the
sub-tabs:

- Operations
- Processes
- Servers
- Users

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::info
Add exclusion process filters for legitimate processes that make changes to
LSASS, e.g. third-party malware applications.
:::


## Operations

The Operations option filters for successful events, failed events, or both.

![Operations Tab in the LSASS Guardian Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/operations.webp)

The Open Process Flags section is where monitoring can be scoped for requested handles that would
maliciously impact LSASS processes.

Check the box to select the process flag(s) to be monitored:

- PROCESS_VM_WRITE – Writes to memory in a process
- PROCESS_CREATE_THREAD – Creates a thread

## Processes

The Processes option is where legitimate processes, which make changes to LSASS, e.g. third-party
malware applications, can be included/excluded from being monitored by the policy.

![Processes Tab in the LSASS Guardian Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/processes.webp)

Double-click the text box beneath Name to enter the desired processes to include or exclude. Press
the Enter or Tab key to add another text box.

:::note
While a processes inclusion is a filter option, it is not recommended for monitoring
LSASS. Adding a process inclusion filter will limit the scope to only monitor that process. Unknown
malicious processes would not be monitored in this case.
:::


## Servers

The Servers option targets servers to be included or excluded when filtering for LSASS changes.

![Servers Tab in the LSASS Guardian Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/servers.webp)

In both sections, servers must be specified in the form 'DOMAIN\SERVER', where DOMAIN is NetBIOS
Domain name and SERVER is NetBIOS server name.

Double-click the textbox beneath Name to enter the desired servers to include or exclude. Press the
Enter or Tab key to add another textbox.

## Users

The Users option is where the policy can be scoped to only monitor specific security principals
committing changes within Active Directory or to exclude specific users committing changes from
being monitored.

![Users Tab in the LSASS Guardian Tab](/images/activitymonitor/7.1/admin/monitoreddomains/admonitoringconfiguration/userstab.webp)

The following details appear beneath both sections:

- Subtree – If checked, the filter is applied to the parent and all child contexts. If unchecked,
  the filter is only applied to the listed context.
- Type – Field must describe the type of the select Active Directory object and can have the
  following values:

    - user – Indicates that selected object is user
    - group – Indicates that selected object is group
    - context – Indicates that selected object is container
    - sidType – Indicates that selected object is well-known SID type

- Distinguished Name – Field must be specified in the form of 'distinguishedName' attribute syntax,
  e.g. 'CN=Users,DC=Domain,DC=com'. However, for objects with 'sidType' type, it must be in the form
  of WellKnownSidType Enum, e.g. 'AnonymousSid' or 'LocalSid'.

Double-click the text box beneath Distinguished Name to enter the desired group types to include or
exclude. Double-click the text box beneath Type to enter the desired AD object to include or
exclude. Press the Enter or Tab key to add another text box. Check the box under Subtree to include
or exclude child contexts.
