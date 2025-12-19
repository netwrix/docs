---
title: "GPO Setting Lockdown"
description: "GPO Setting Lockdown Event Type"
sidebar_position: 150
---

# GPO Setting Lockdown Event Type

The GPO Setting Lockdown event type can prevent all changes against specified GPOs. Note that this
is for the entire GPO (file) and not specific settings in the GPO.

The event filters for the GPO Setting Lockdown event type are:

- AD Group Policy Object
- Domains/Servers
- AD Perpetrator

![New Policy window - GPO Setting Lockdown Event Type](/images/threatprevention/7.5/admin/policies/eventtype/ggposettinglockdown.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

If setting a filter to “Exclude” a domain from this blocking policy, this setting overrides any
”Block” user filters. This means that in order to block a user, you must not “Exclude” the domain
where that user resides.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


## AD Group Policy Object Filter

Use the AD Group Policy Object filter to set the scope of the policy to lockdown specific GPOs.

![Policy window - AD Group Policy Object filter](/images/threatprevention/7.5/admin/policies/eventtype/adgrouppolicyobject.webp)

In the GPO File Operations section, select the **All** checkbox to include all operations or select
specific operations:

- Create File
- Delete File
- Modify File

In the Group Policy Objects section, scope to specific GPOs:

- Apply to All Group Policy Objects – Includes all GPOs
- List – Scopes to the specified GPOs

  - The **Add** (+) button opens the
    [Select Active Directory Group Policy Objects Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/grouppolicyobjects.md).
  - The Remove (x) button deletes the selected item(s) from that box.

## Domains/Servers Filter

Use the Domains/Servers filter to set the scope of the policy to specific domains and/or servers or
to exclude specific domains and/or servers.

![Event Type - Domains/Servers Monitoring filter](/images/threatprevention/7.5/admin/policies/eventtype/domainsserversmonitoring.webp)

Use the buttons in the Include and Exclude areas to edit the lists.

- The Add (+) buttons open the [Select Domains and Servers Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/selectdomainsservers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


## AD Perpetrator Filter

Use the AD Perpetrator filter for lockdown to set the scope of the policy to lockdown specific
security principals committing changes or to exclude specific security principals committing changes
from being locked down.

![AD Perpetrator Protect filter](/images/threatprevention/7.5/admin/policies/eventtype/adperpetratorprotect.webp)

Select the **Block** or **Allow** option button and then edit the list.

:::note
For the [Password Enforcement Event Type](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md), selecting **Allow**
means that this policy will not validate the new passwords for the accounts listed here. Selecting
**Block** means that this policy will validate the new passwords for the accounts listed here.
:::


Use the buttons in the Perpetrators and Collections of Perpetrators areas to edit the lists.

- Perpetrators area – The Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/7.5/admin/policies/configuration/eventtype/window/perpetrators.md).
- Collections of Perpetrators area - The Collection button opens the
  [List of Collections Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/7.5/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.

:::
