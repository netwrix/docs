---
title: "Event Type Tab"
description: "Event Type Tab"
sidebar_position: 20
---

# Event Type Tab

The Event Type tab enables you to define the objects and events that Threat Prevention
monitors/blocks.

![Template – Event Type Tab](/images/threatprevention/7.4/admin/templates/eventtypetab.webp)

Each event type represents what is monitored or blocked. Event filters are used to either narrow or
broaden the scope of the monitoring/blocking as desired. Click **Add** (+) to open the Event
Selection window. Your licensed modules determine what event types are available. Event types that
are not available or not licensed are grayed-out but visible in the Event Selection window. See the
[License Manager Window](/docs/threatprevention/7.4/admin/navigation/licensemanager.md)
topic for information.

## Event Selection Window

![Event Type tab - Event Selection window](/images/threatprevention/7.4/admin/policies/eventtype/eventselection.webp)

Check the box for the desired event type and click **OK**. The corresponding event filters show at
the bottom of the Event Type tab. Multiple event types can be assigned to a policy.

:::info
Create different policies for different event types for reporting purposes.
Otherwise, one report will have a mix of different types of data. There are a few exceptions to this
feature.
:::


Once the event type to be monitored by the policy is selected, use the filters to scope the policy.

Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated
like an "ALL" for that filter set.

Save all changes made to a policy or a template before leaving the configuration interface.

See the following topics for additional details:

- [Active Directory Changes Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/activedirectorychanges.md)
- [Active Directory Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/activedirectorylockdown.md)
- [Active Directory Read Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/activedirectoryreadmonitoring.md)
- [AD Replication Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/adreplicationmonitoring.md)
- [AD Replication Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/adreplicationlockdown.md)
- [Authentication Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/authenticationmonitoring.md)
- [Authentication Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/authenticationlockdown.md)
- [Effective Group Membership Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/effectivegroupmembership.md)
- [Exchange Changes Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/exchangechanges.md)
- [Exchange Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/exchangelockdown.md)
- [File System Changes Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/filesystemchanges/filesystemchanges.md)
- [File System Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/filesystemlockdown.md)
- [File System Enterprise Auditor Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/filesystemaccessanalyzer.md)
- [FSMO Role Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/fsmorolemonitoring.md)
- [GPO Setting Changes Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/gposettingchanges.md)
- [GPO Setting Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/gposettinglockdown.md)
- [LSASS Guardian – Monitor Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/lsassguardianmonitor.md)
- [LSASS Guardian – Protect Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/lsassguardianprotect.md)
- [Password Enforcement Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/passwordenforcement/passwordenforcement.md)
- [LDAP Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/ldapmonitoring/ldapmonitoring.md)
- [LDAP Lockdown Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/ldaplockdown.md)
- [LDAP Bind Monitoring Event Type](/docs/threatprevention/7.4/admin/policies/configuration/eventtype/ldapbindmonitoring.md)

## Event Filters Overview

Policies are scoped using the Event Filters tabs ascribed to the policy on the basis of the event
type selected on the [Event Selection Window](#event-selection-window).

The filters appear on the Event Type tab when an event type is selected.

Several filters allow for both an Include and an Exclude list to be set together. The Exclude list
takes precedence over the Include list. If an item is part of both lists, then when an event comes
through with that item, it is excluded.

When using a Lockdown Event Type, it is necessary to decide between Block or Allow for the filter.

- Block – Blocks all items added to the list, or if the list is left blank, it blocks all items for
  that filter category
- Allow – Only allows items added to the list and blocks all others. If the list is left blank, it
  allows all items for that filter category.
