---
title: "AD Replication Lockdown Event Type"
description: "AD Replication Lockdown Event Type"
sidebar_position: 50
---

# AD Replication Lockdown Event Type

The primary use case of the AD Replication Lockdown event type is to prevent non-domain controllers
from using replication APIs. Each blocked replication attempt results in an event with details. Make
sure the policy has a ‘white list’ of ‘allowed/known good’ domain controllers so that legitimate
replication is not blocked.

The event filters for the AD Replication Lockdown event type are:

- AD Perpetrator
- Permissions
- Domains/Servers
- Hosts (from)

![Policy window - AD Replication Lockdown Event Type](/images/threatprevention/7.4/admin/policies/eventtype/adreplicationlockdown.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

:::warning
Lockdown/blocking policies with blank filters result in everything being locked down or
blocked.
:::


Since Windows cannot detect if a sync request is coming from a legitimate domain controller, this
event type is designed to block requests from computers that are not ‘allowed’ by the policy.

Legitimate domain controllers must be identified in the event filters. This can be done through one
of the following methods:

- AD Perpetrator filter

  - Use this filter for a dynamic list of domain controllers
  - Set the filter to "Allow"
  - Add the Users OU > Domain Controllers group
  - Add any other groups containing domain controllers. It triggers an error message reminding the
    user that only domain controllers should be allowed.
  - Any domain controller not included in these groups are blocked from syncing/replication

- Domains/Servers filter

  - Use this filter for a static list of domain controllers
  - Add domain controllers to the Exclude list
  - Any domain controller not excluded is blocked from syncing/replication

:::warning
Not allowing ALL domain controllers to sync has negative impacts on Active Directory.
:::


If no filters are applied, saving the policy configuration displays a warning message.

:::note
The AD Replication Lockdown event type internally looks for use of the GetNCChanges() API
and blocks the API call when it is invoked by a machine outside the scope of the policy filters.
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


## Permissions Filter

Use the Permissions filter to set the scope of the policy for specific replication permissions
within Active Directory that are used to dump password hashes as a fake domain controller in a
DCSync/Replication attack.

![Policy window - Permissions  filter](/images/threatprevention/7.4/admin/policies/eventtype/permissions.webp)

The Permissions filter has two sections:

- Match condition – Capture the event if the replication request has either the exact permissions
  specified or has any of the permissions specified.
- Permissions – Permission level associated with the replication request:

  - Replicate Directory Changes – Base permission and is required to use RPC and LDAP DIRSYNC
    replication mechanisms
  - Replicate Directory Changes All – Permission required for replication of credentials and
    secret data
  - Replicate Directory Changes in Filtered Set – Replicates attributes protected by filtered
    attribute sets (FAS). Read-only Domain Controllers (RODCs) should not have this permission.

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


## Hosts (from) Filter

Use the Hosts (from) filter for the AD Replication Lockdown event type to set the scope of the
policy to only lockdown specific hosts as originators of an event.

![Policy window - Hosts (from) filter for the AD Replication Lockdown event type](/images/threatprevention/7.4/admin/policies/eventtype/adreplicationhostsfrom.webp)

Select the **Block** or **Allow** option button and then edit the list.

Use the buttons in the Include Hosts and Include Collections areas to edit the lists.

- The Hosts Add (+) button opens the
  [Select Computer Window](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/window/selectcomputers.md).
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
