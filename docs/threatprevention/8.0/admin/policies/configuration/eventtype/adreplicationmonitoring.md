---
title: "AD Replication Monitoring"
description: "AD Replication Monitoring Event Type"
sidebar_position: 40
---

# AD Replication Monitoring Event Type

The AD Replication Monitoring event type monitors domain controller syncing/replication. The primary
use case is to capture events only for non-domain controllers attempting to replicate Active
Directory data, which requires the policy to have a ‘white list’ of ‘allowed/known good’ domain
controllers.

The event filters for the AD Replication Monitoring event type are:

- AD Perpetrator
- Permissions
- Domains/Servers
- Hosts (from)

![Policy window - AD Replication Monitoring Event Type](/images/threatprevention/8.0/admin/policies/eventtype/adreplicationmonitoring.webp)

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

Since Windows cannot detect if a sync request is coming from a legitimate domain controller, this
event type is designed to monitor requests from computers that are not ‘excluded’ by the policy.
Therefore, legitimate domain controllers should be identified in the event filters. This can be done
through one of the following methods:

- AD Perpetrator filter

  - Use this filter for a dynamic list of domain controllers
  - Add domain controllers to the Exclude list(s)
  - Add the Users OU > Domain Controllers group
  - Add any other groups containing domain controllers. It triggers an error message reminding the
    user that only domain controllers should be excluded
  - Any domain controller not included in the groups are monitored for syncing/replication
    requests

- Domains/Servers filter

  - Use this filter for a static list of domain controllers
  - Add domain controllers to the Exclude list
  - Any domain controller not excluded are monitored for syncing/replication requests

The Threat Manager DC Sync threat is sourced by a Threat Prevention AD Replication Monitoring
policy. It is necessary for the policy to be configured to exclude domain controllers on the Host
(From) filter.

If no filters are applied, saving the policy configuration displays a warning message.

:::note
The AD Replication Monitoring event type internally looks for use of the GetNCChanges()
API and reports an event when this API is invoked by a machine outside the scope of the policy
filters.
:::


## AD Perpetrator Filter

Use the AD Perpetrator filter for monitoring to set the scope of the policy to only monitor specific
security principals committing changes or to exclude specific security principals committing changes
from being monitored.

![Event Type - AD Perpetrator Monitoring filter](/images/threatprevention/8.0/admin/policies/eventtype/adperpetratormonitoring.webp)

Use the buttons in the Include Perpetrators, Include Collections, Exclude Perpetrators, and Exclude
Collections areas to edit the lists.

- The Perpetrators Add (+) button opens the
  [Select Active Directory Perpetrators Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/perpetrators.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.
:::


**Sub Tree**

![Sub-Tree option in event type filters](/images/threatprevention/8.0/admin/policies/eventtype/subtree.webp)

When contexts are added, a Sub-Tree checkbox displays. Check it to apply the filter to the parent
and all child contexts. Uncheck it to apply the filter to the listed context only.

## Permissions Filter

Use the Permissions filter to set the scope of the policy for specific replication permissions
within Active Directory that are used to dump password hashes as a fake domain controller in a
DCSync/Replication attack.

![Policy window - Permissions  filter](/images/threatprevention/8.0/admin/policies/eventtype/permissions.webp)

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


## Hosts (from) Filter

Use the Hosts (from) filter for monitoring to set the scope of the policy to only monitor specific
hosts as originators of an event or to exclude specific hosts from being monitored.

![Event Type – Hosts (from) filter](/images/threatprevention/8.0/admin/policies/eventtype/hostsfrom.webp)

Use the buttons in the Include Hosts, Include Collections, Exclude Hosts, and Exclude Collections
areas to edit the lists.

- The Hosts Add (+) button opens the [Select Computer Window](/docs/threatprevention/8.0/admin/policies/configuration/eventtype/window/selectcomputers.md).
- The Collection button opens the
  [List of Collections Window](/docs/threatprevention/8.0/admin/configuration/collectionmanager/listcollections.md) to the
  appropriate Collection category.
- The Remove (x) button deletes the selected item(s) from that box.

:::note
To enable a Dynamic Policy, use the Collection button to select the desired Dynamic
Collection. See the [Dynamic Collections](/docs/threatprevention/8.0/admin/configuration/collectionmanager/dynamic.md) topic
for additional information.

:::
